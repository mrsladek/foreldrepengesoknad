import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { getPeriodelisteElementId } from '../periodeliste/Periodeliste';
import { NavnPåForeldre } from 'common/types';
import { Periode } from '../../types/uttaksplan/periodetyper';
import { Periodene } from '../../util/uttaksplan/Periodene';
import { SummaryError } from 'common/lib/validation/types';
import { uttaksplanleggerDomId } from '../uttaksplanlegger/Uttaksplanlegger';
import { ValidertPeriode, UttaksplanValideringState } from '../../redux/reducers/uttaksplanValideringReducer';
import Feiloppsummering from 'common/lib/validation/errors/Feiloppsummering';
import getMessage from 'common/util/i18nUtils';
import { getRegelIntlValues } from '../../regler/uttaksplanValidering/regelUtils';
import { RegelAvvikInfo } from '../../regler/uttaksplanValidering/types';

interface OwnProps {
    uttaksplan: Periode[];
    uttaksplanValidering: UttaksplanValideringState;
    navnPåForeldre: NavnPåForeldre;
    erSynlig?: boolean;
    onErrorClick: (periodeId: string) => void;
}

interface PeriodeRelatertFeil {
    periodeId: string;
}

type UttaksplanValideringFeil = SummaryError<ValidertPeriode | PeriodeRelatertFeil>;

export type Props = OwnProps & InjectedIntlProps;

class UttaksplanFeiloppsummering extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.handleOnErrorClick = this.handleOnErrorClick.bind(this);
    }
    handleOnErrorClick(error: UttaksplanValideringFeil, evt: React.MouseEvent<HTMLAnchorElement>) {
        evt.stopPropagation();
        evt.preventDefault();
        const { onErrorClick } = this.props;
        if (error.payload && error.payload.periodeId) {
            onErrorClick(error.payload.periodeId);
        }
    }
    render() {
        const { uttaksplanValidering, erSynlig, uttaksplan, intl } = this.props;
        if (erSynlig === false) {
            return null;
        }
        const { periodevalidering } = uttaksplanValidering;
        const validertePerioder: ValidertPeriode[] = Object.keys(periodevalidering)
            .map((key) => periodevalidering[key])
            .filter((p) => p.valideringsfeil.length > 0 || p.overlappendePerioder.length > 0);

        const feil: UttaksplanValideringFeil[] = validertePerioder.map((validertPeriode): UttaksplanValideringFeil => {
            const periode = Periodene(uttaksplan).getPeriode(validertPeriode.periodeId);
            if (periode === undefined) {
                return {
                    name: validertPeriode.periodeId,
                    payload: validertPeriode,
                    text: getMessage(intl, 'uttaksplan.validering.feilUkjentPeriode')
                };
            }
            const feilmelding: string =
                validertPeriode.valideringsfeil.length > 0
                    ? getMessage(intl, `uttaksplan.validering.feil.${validertPeriode.valideringsfeil[0].feilKey}`)
                    : getMessage(intl, 'uttaksplan.validering.feil.periodeoverlapp');
            return {
                name: getPeriodelisteElementId(validertPeriode.periodeId),
                payload: validertPeriode,
                text: feilmelding
            };
        });

        if (uttaksplanValidering.regelTestResultat && uttaksplanValidering.regelTestResultat.harFeil) {
            uttaksplanValidering.regelTestResultat.avvik.forEach((avvik) => {
                const addFeilInfo = (info: RegelAvvikInfo) => {
                    feil.push({
                        name: uttaksplanleggerDomId,
                        text: getMessage(intl, info.intlKey, getRegelIntlValues(intl, info)),
                        payload: info.periodeId ? { periodeId: info.periodeId } : undefined
                    });
                };
                addFeilInfo(avvik.info);
            });
        }

        return (
            <Feiloppsummering
                show={erSynlig === true && uttaksplanValidering.erGyldig === false}
                title={getMessage(intl, 'uttaksplan.validering.feiloppsummering.tittel')}
                errors={feil}
                onErrorClick={this.handleOnErrorClick}
            />
        );
    }
}
export default injectIntl(UttaksplanFeiloppsummering);
