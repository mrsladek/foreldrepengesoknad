import moment from 'moment';
import { Regelgrunnlag, RegelTest, RegelTestresultat } from '../types';
import { Periode, Periodetype } from 'app/types/uttaksplan/periodetyper';
import { getAntallUker } from 'app/util/uttaksplan/stønadskontoer';

export const innholderAktivitetskravFrieDagerEtterOrdinærForeldrepengerPeriode: RegelTest = (
    grunnlag: Regelgrunnlag
): RegelTestresultat => {
    const aktivetskravFriePerioder = grunnlag.perioder.filter(
        (p: Periode) => p.type === Periodetype.Uttak && p.harIkkeAktivitetskrav
    );
    const antallUker = getAntallUker(grunnlag.tilgjengeligeStønadskontoer);
    const sisteMuligeDag = moment(grunnlag.søknadsinfo.søknaden.familiehendelsesdato).add(antallUker, 'weeks');

    if (aktivetskravFriePerioder.length > 0) {
        let harOverskridetOrdinærPeriode = false;

        aktivetskravFriePerioder.forEach((p: Periode) => {
            if (moment(p.tidsperiode.tom).isAfter(sisteMuligeDag)) {
                harOverskridetOrdinærPeriode = true;
                return;
            }
        });

        return {
            passerer: !harOverskridetOrdinærPeriode,
            info: {
                values: { antallUker }
            }
        };
    }

    return { passerer: true };
};
