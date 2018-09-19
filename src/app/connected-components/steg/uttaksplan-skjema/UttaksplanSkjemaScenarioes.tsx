import * as React from 'react';
import Søknad, { Søkersituasjon } from '../../../types/søknad/Søknad';
import HarAnnenForelderSøktForeldrepengerSpørsmål from './enkeltspørsmål/HarAnnenForelderSøktForeldrepengerSpørsmål';
import DekningsgradSpørsmål from './enkeltspørsmål/DekningsgradSpørsmål';
import MorSinSisteUttaksdagSpørsmål from './enkeltspørsmål/MorSinSisteUttaksdagSpørsmål';
import SkalHaDelAvFellesperiodeSpørsmål from './enkeltspørsmål/SkalHaDelAvFellesperiodeSpørsmål';
import { UttaksplanSkjemaScenario } from './uttaksplanSkjemaScenario';
import StartdatoPermisjonMorBolk from './enkeltspørsmål/StartdatoPermisjonMorBolk';
import FordelingFellesperiodeSpørsmål from './enkeltspørsmål/FordelingFellesperiodeSpørsmål';
import StartdatoAdopsjonBolk from './enkeltspørsmål/StartdatoAdopsjonBolk';
import { Adopsjonsbarn, ForeldreansvarBarn } from '../../../types/søknad/Barn';
import StartdatoUttakFarMedmorSpørsmål from './enkeltspørsmål/StartdatoUttakFarMedmorSpørsmål';
import StartdatoUttakFarMedmorAleneomsorgSpørsmål from './enkeltspørsmål/StartdatoUttakFarMedmorAleneomsorgSpørsmål';
import { NavnPåForeldre } from 'common/types';

export interface ScenarioProps {
    søknad: Søknad;
    navnPåForeldre: NavnPåForeldre;
    antallUkerFellesperiode: number;
}
export interface Props extends ScenarioProps {
    scenario: UttaksplanSkjemaScenario;
}

const Scenario1: React.StatelessComponent<ScenarioProps> = ({ søknad, navnPåForeldre }) => (
    <>
        <HarAnnenForelderSøktForeldrepengerSpørsmål navnAnnenForelder={søknad.annenForelder.fornavn} />
        <DekningsgradSpørsmål visible={søknad.ekstrainfo.uttaksplanSkjema.harAnnenForelderSøktFP !== undefined} />
        <MorSinSisteUttaksdagSpørsmål visible={søknad.dekningsgrad !== undefined} navnMor={navnPåForeldre.mor} />
        <SkalHaDelAvFellesperiodeSpørsmål
            visible={søknad.ekstrainfo.uttaksplanSkjema.morSinSisteUttaksdag !== undefined}
        />
    </>
);

const Scenario3: React.StatelessComponent<ScenarioProps> = ({ søknad, antallUkerFellesperiode, navnPåForeldre }) => {
    const harSvartPåStartdato =
        søknad.ekstrainfo.uttaksplanSkjema.startdatoPermisjon !== undefined ||
        søknad.ekstrainfo.uttaksplanSkjema.skalIkkeHaUttakFørTermin === true;
    return (
        <>
            <DekningsgradSpørsmål />
            <StartdatoPermisjonMorBolk
                visible={søknad.dekningsgrad !== undefined}
                barnetErFødt={søknad.barn.erBarnetFødt}
            />
            <FordelingFellesperiodeSpørsmål
                visible={harSvartPåStartdato}
                ukerFellesperiode={antallUkerFellesperiode}
                navnPåForeldre={navnPåForeldre}
            />
        </>
    );
};

const Scenario4: React.StatelessComponent<ScenarioProps> = ({ søknad, antallUkerFellesperiode, navnPåForeldre }) => {
    /** Mor og far, adopsjon, begge har rett, adopterer alene, bare en har rett */
    const skjema = søknad.ekstrainfo.uttaksplanSkjema;
    return (
        <>
            <HarAnnenForelderSøktForeldrepengerSpørsmål navnAnnenForelder={søknad.annenForelder.fornavn} />
            <DekningsgradSpørsmål visible={skjema.harAnnenForelderSøktFP !== undefined} />
            {søknad.situasjon === Søkersituasjon.ADOPSJON && (
                <StartdatoAdopsjonBolk
                    visible={søknad.dekningsgrad !== undefined}
                    barn={søknad.barn as Adopsjonsbarn}
                />
            )}
            <FordelingFellesperiodeSpørsmål
                visible={skjema.startdatoPermisjon !== undefined}
                ukerFellesperiode={antallUkerFellesperiode}
                navnPåForeldre={navnPåForeldre}
            />
        </>
    );
};

const Scenario5: React.StatelessComponent<ScenarioProps> = ({ søknad }) => {
    return (
        <>
            <DekningsgradSpørsmål />
            <StartdatoUttakFarMedmorAleneomsorgSpørsmål
                barn={søknad.barn as ForeldreansvarBarn}
                visible={søknad.dekningsgrad !== undefined}
            />
        </>
    );
};

const Scenario6: React.StatelessComponent<ScenarioProps> = ({ søknad }) => {
    return (
        <>
            <DekningsgradSpørsmål />
            <StartdatoUttakFarMedmorSpørsmål visible={søknad.dekningsgrad !== undefined} />
        </>
    );
};

const Scenario7: React.StatelessComponent<ScenarioProps> = ({ søknad, navnPåForeldre }) => (
    <>
        <HarAnnenForelderSøktForeldrepengerSpørsmål navnAnnenForelder={søknad.annenForelder.fornavn} />
        <DekningsgradSpørsmål visible={søknad.ekstrainfo.uttaksplanSkjema.harAnnenForelderSøktFP !== undefined} />
        <MorSinSisteUttaksdagSpørsmål visible={søknad.dekningsgrad !== undefined} navnMor={navnPåForeldre.mor} />
        <SkalHaDelAvFellesperiodeSpørsmål
            visible={søknad.ekstrainfo.uttaksplanSkjema.morSinSisteUttaksdag !== undefined}
        />
    </>
);

const UttaksplanSkjemaScenarioes: React.StatelessComponent<Props> = (props) => {
    const { scenario, ...scenarioProps } = props;
    switch (scenario) {
        case UttaksplanSkjemaScenario.s1_farMedmorFødselFørsteganggsøknadBeggeHarRett_ikkeDeltPlan:
            return <Scenario1 {...scenarioProps} />;
        case UttaksplanSkjemaScenario.s3_morFødsel:
            return <Scenario3 {...scenarioProps} />;
        case UttaksplanSkjemaScenario.s4_morFarAdopsjon:
            return <Scenario4 {...scenarioProps} />;
        case UttaksplanSkjemaScenario.s5_farMedmorAleneomsorgFødselAdopsjon:
            return <Scenario5 {...scenarioProps} />;
        case UttaksplanSkjemaScenario.s6_bareFarMedmorRettTilFpFødsel:
            return <Scenario6 {...scenarioProps} />;
        case UttaksplanSkjemaScenario.s7_farMorAdopsjon_morFarAlleredeSøkt_ikkeDeltPlan:
            return <Scenario7 {...scenarioProps} />;
        default:
            return <>Undefined scenario</>;
    }
};

export default UttaksplanSkjemaScenarioes;
