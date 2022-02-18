import React, { FunctionComponent, useEffect } from 'react';
import { Block, intlUtils } from '@navikt/fp-common';
import Planlegger from './components/planlegger/Planlegger';
import PlanleggerInfo from './components/planlegger-info/PlanleggerInfo';
import { ForeldreparSituasjon } from 'app/types/ForeldreparSituasjonTypes';
import { Forelder } from 'app/types/Forelder';
import { Periode } from './types/Periode';
import { TilgjengeligStønadskonto } from 'app/types/TilgjengeligStønadskonto';
import { NavnPåForeldre } from 'app/types/NavnPåForeldre';
import AnnenForelder from 'app/context/types/AnnenForelder';
import Arbeidsforhold from 'app/types/Arbeidsforhold';
import deletePeriode from './builder/deletePeriode';
import { getUttaksstatusFunc } from './utils/uttaksstatus';
import updatePeriode from './builder/updatePeriode';
import addPeriode from './builder/addPeriode';
import { Situasjon } from 'app/types/Situasjon';
import OversiktKvoter from './components/oversikt-kvoter/OversiktKvoter';
import { ISOStringToDate } from 'app/utils/dateUtils';
import { validerUttaksplan } from './validering/validerUttaksplan';
import Søkersituasjon from 'app/context/types/Søkersituasjon';
import { Dekningsgrad } from 'app/types/Dekningsgrad';
import VeilederInfo from './validering/veilederInfo/VeilederInfo';
import { useIntl } from 'react-intl';
import { getPeriodelisteMeldinger, getUttaksplanVeilederinfo } from './validering/veilederInfo/utils';
import OppgiTilleggsopplysninger from './components/oppgi-tilleggsopplysninger/OppgiTilleggsopplysninger';
import { Tilleggsopplysninger } from 'app/context/types/Tilleggsopplysninger';
import { SenEndringÅrsak } from './types/SenEndringÅrsak';
import { getSeneEndringerSomKreverBegrunnelse } from 'app/steps/uttaksplan-info/utils/Periodene';
import { EksisterendeSak } from 'app/types/EksisterendeSak';

interface Props {
    foreldreSituasjon: ForeldreparSituasjon;
    forelderVedAleneomsorg: Forelder | undefined;
    erDeltUttak: boolean;
    uttaksplan: Periode[];
    familiehendelsesdato: string;
    handleOnPlanChange: (plan: Periode[]) => void;
    stønadskontoer: TilgjengeligStønadskonto[];
    navnPåForeldre: NavnPåForeldre;
    annenForelder: AnnenForelder;
    arbeidsforhold: Arbeidsforhold[];
    erEndringssøknad: boolean;
    erFarEllerMedmor: boolean;
    erFlerbarnssøknad: boolean;
    erAleneOmOmsorg: boolean;
    harMidlertidigOmsorg: boolean;
    situasjon: Situasjon;
    erMorUfør: boolean;
    harMorRett: boolean;
    søkersituasjon: Søkersituasjon;
    dekningsgrad: Dekningsgrad;
    antallBarn: number;
    tilleggsopplysninger: Tilleggsopplysninger;
    eksisterendeSak: EksisterendeSak | undefined;
    setUttaksplanErGyldig: (planErGyldig: boolean) => void;
    handleBegrunnelseChange: (årsak: SenEndringÅrsak, begrunnelse: string) => void;
}

const Uttaksplan: FunctionComponent<Props> = ({
    foreldreSituasjon,
    forelderVedAleneomsorg,
    erDeltUttak,
    uttaksplan,
    familiehendelsesdato,
    stønadskontoer,
    handleOnPlanChange,
    navnPåForeldre,
    annenForelder,
    arbeidsforhold,
    erEndringssøknad,
    erFarEllerMedmor,
    erFlerbarnssøknad,
    erAleneOmOmsorg,
    harMidlertidigOmsorg,
    situasjon,
    erMorUfør,
    harMorRett,
    søkersituasjon,
    dekningsgrad,
    antallBarn,
    tilleggsopplysninger,
    eksisterendeSak,
    setUttaksplanErGyldig,
    handleBegrunnelseChange,
}) => {
    const familiehendelsesdatoDate = ISOStringToDate(familiehendelsesdato)!;
    const intl = useIntl();
    const handleDeletePeriode = (periodeId: string) => {
        const slettetPeriode = uttaksplan.find((p) => p.id === periodeId);

        const updatedPlan = deletePeriode({
            getUttaksstatusFunc: getUttaksstatusFunc({
                erDeltUttak,
                erEndringssøknad,
                harKomplettUttaksplan: false,
                erFarEllerMedmor,
                tilgjengeligeStønadskontoer: stønadskontoer,
                uttaksplan,
            }),
            uttaksplan,
            slettetPeriode: slettetPeriode!,
            tilgjengeligeStønadskontoer: stønadskontoer,
            familiehendelsesdato: familiehendelsesdatoDate!,
            erFlerbarnssøknad,
            erEndringsøknadUtenEkisterendeSak: false,
            relevantStartDatoForUttak: familiehendelsesdatoDate,
            harMidlertidigOmsorg: false,
            harAktivitetskravIPeriodeUtenUttak: false,
            erAdopsjon: false,
        });

        handleOnPlanChange(updatedPlan);
    };

    const handleUpdatePeriode = (oppdatertPeriode: Periode) => {
        const updatedPlan = updatePeriode({
            getUttaksstatusFunc: getUttaksstatusFunc({
                erDeltUttak,
                erEndringssøknad,
                harKomplettUttaksplan: false,
                erFarEllerMedmor,
                tilgjengeligeStønadskontoer: stønadskontoer,
                uttaksplan,
            }),
            uttaksplan,
            oppdatertPeriode,
            tilgjengeligeStønadskontoer: stønadskontoer,
            familiehendelsesdato: familiehendelsesdatoDate!,
            erFlerbarnssøknad,
            erEndringsøknadUtenEkisterendeSak: false,
            relevantStartDatoForUttak: familiehendelsesdatoDate,
            harMidlertidigOmsorg: false,
            harAktivitetskravIPeriodeUtenUttak: false,
            erAdopsjon: false,
        });

        handleOnPlanChange(updatedPlan);
    };

    const handleAddPeriode = (nyPeriode: Periode) => {
        const addPeriodeResult = addPeriode({
            getUttaksstatusFunc: getUttaksstatusFunc({
                erDeltUttak,
                erEndringssøknad,
                harKomplettUttaksplan: false,
                erFarEllerMedmor,
                tilgjengeligeStønadskontoer: stønadskontoer,
                uttaksplan,
            }),
            uttaksplan,
            nyPeriode,
            tilgjengeligeStønadskontoer: stønadskontoer,
            familiehendelsesdato: familiehendelsesdatoDate!,
            erFlerbarnssøknad,
            erEndringsøknadUtenEkisterendeSak: false,
            relevantStartDatoForUttak: familiehendelsesdatoDate,
            harMidlertidigOmsorg: false,
            harAktivitetskravIPeriodeUtenUttak: false,
            erAdopsjon: false,
        });

        handleOnPlanChange(addPeriodeResult.updatedPlan);
    };

    const vedleggForSenEndring = []!; //TODO: handleBegrunnelseVedleggChange

    //TODO: get perioderSomSkalSendesInn
    const perioderSomSkalSendesInn = uttaksplan;
    const årsakTilSenEndring = getSeneEndringerSomKreverBegrunnelse(perioderSomSkalSendesInn);

    const handleBegrunnelseTekstChange = (begrunnelse: string) => {
        handleBegrunnelseChange(årsakTilSenEndring, begrunnelse);
    };

    //TODO: harKomplettuttaksplan
    const harKomplettUttaksplan = false;

    const uttaksplanValidering = validerUttaksplan({
        søkersituasjon: søkersituasjon,
        arbeidsforhold: arbeidsforhold,
        dekningsgrad: dekningsgrad,
        erEndringssøknad: erEndringssøknad,
        antallBarn: antallBarn,
        annenForelder: annenForelder,
        navnPåForeldre: navnPåForeldre,
        søkerErFarEllerMedmor: erFarEllerMedmor,
        søkerErAleneOmOmsorg: erAleneOmOmsorg,
        søkerHarMidlertidigOmsorg: harMidlertidigOmsorg,
        erDeltUttak: erDeltUttak,
        morErUfør: erMorUfør,
        morHarRett: harMorRett,
        erFlerbarnssøknad: erFlerbarnssøknad,
        familiehendelsesdato: familiehendelsesdatoDate,
        stønadskontoer: stønadskontoer,
        perioder: uttaksplan,
        harKomplettUttaksplan: harKomplettUttaksplan,
        tilleggsopplysninger: tilleggsopplysninger,
        eksisterendeSak: eksisterendeSak,
        perioderSomSkalSendesInn: perioderSomSkalSendesInn,
    });

    useEffect(() => {
        const uttaksplanErGyldig = !uttaksplanValidering.harFeil;
        setUttaksplanErGyldig(uttaksplanErGyldig);
    });

    //TODO: trenges grupperAvvik i det hele tatt? Sendes inn som false her.
    const uttaksplanVeilederInfo = getUttaksplanVeilederinfo(uttaksplanValidering.avvik, intl, false);
    const meldingerPerPeriode = getPeriodelisteMeldinger(uttaksplanVeilederInfo);

    return (
        <>
            <Block padBottom="l">
                <PlanleggerInfo
                    foreldreSituasjon={foreldreSituasjon}
                    forelderVedAleneomsorg={forelderVedAleneomsorg}
                    erDeltUttak={erDeltUttak}
                />
            </Block>
            <Block padBottom="l">
                <Planlegger
                    uttaksplan={uttaksplan}
                    familiehendelsesdato={familiehendelsesdatoDate}
                    handleUpdatePeriode={handleUpdatePeriode}
                    stønadskontoer={stønadskontoer}
                    navnPåForeldre={navnPåForeldre}
                    annenForelder={annenForelder}
                    arbeidsforhold={arbeidsforhold}
                    handleDeletePeriode={handleDeletePeriode}
                    handleAddPeriode={handleAddPeriode}
                    erFarEllerMedmor={erFarEllerMedmor}
                    erFlerbarnssøknad={erFlerbarnssøknad}
                    erDeltUttak={erDeltUttak}
                    erAleneOmOmsorg={erAleneOmOmsorg}
                    situasjon={situasjon}
                    meldingerPerPeriode={meldingerPerPeriode}
                />
            </Block>
            <Block padBottom="l">
                <OversiktKvoter
                    tilgjengeligeStønadskontoer={stønadskontoer}
                    uttaksplan={uttaksplan}
                    erDeltUttak={erDeltUttak}
                    foreldreparSituasjon={foreldreSituasjon}
                    familiehendelsesdato={familiehendelsesdatoDate}
                />
            </Block>
            <Block visible={uttaksplanVeilederInfo.length > 0} padBottom="l">
                <VeilederInfo
                    messages={uttaksplanVeilederInfo}
                    paneltype="plakat"
                    kompakt={true}
                    veilederStil={'normal'}
                    ariaTittel={intlUtils(intl, 'uttaksplan.regelAvvik.ariaTittel')}
                />
            </Block>
            {årsakTilSenEndring && årsakTilSenEndring !== SenEndringÅrsak.Ingen && (
                <OppgiTilleggsopplysninger
                    begrunnelse={
                        tilleggsopplysninger.begrunnelseForSenEndring
                            ? tilleggsopplysninger.begrunnelseForSenEndring.tekst
                            : ''
                    }
                    vedlegg={vedleggForSenEndring}
                    onBegrunnelseTekstChange={handleBegrunnelseTekstChange}
                    //onVedleggChange={handleBegrunnelseVedleggChange}
                />
            )}
        </>
    );
};

export default Uttaksplan;
