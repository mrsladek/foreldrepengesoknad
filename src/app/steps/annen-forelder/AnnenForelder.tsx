import { Block, intlUtils, Step, UtvidetInformasjon } from '@navikt/fp-common';
import { YesOrNo } from '@navikt/sif-common-formik/lib';
import dayjs from 'dayjs';
import FormikFileUploader from 'app/components/formik-file-uploader/FormikFileUploader';
import actionCreator from 'app/context/action/actionCreator';
import Barn from 'app/context/types/Barn';
import Søker from 'app/context/types/Søker';
import SøknadRoutes from 'app/routes/routes';
import { AttachmentType } from 'app/types/AttachmentType';
import { Skjemanummer } from 'app/types/Skjemanummer';
import { convertYesOrNoOrUndefinedToBoolean } from 'app/utils/formUtils';
import isFarEllerMedmor from 'app/utils/isFarEllerMedmor';
import { getFamiliehendelsedato } from 'app/utils/barnUtils';
import { Hovedknapp } from 'nav-frontend-knapper';
import React, { useCallback } from 'react';
import useOnValidSubmit from 'app/utils/hooks/useOnValidSubmit';
import useSøknad from 'app/utils/hooks/useSøknad';
import useAvbrytSøknad from 'app/utils/hooks/useAvbrytSøknad';
import { FormattedMessage, useIntl } from 'react-intl';
import stepConfig, { getPreviousStepHref } from '../stepsConfig';
import { AnnenForelderFormComponents, AnnenForelderFormData, AnnenForelderFormField } from './annenforelderFormConfig';
import {
    cleanAnnenForelderFormData,
    getAnnenForelderFormInitialValues,
    mapAnnenForelderFormToState,
} from './annenForelderFormUtils';
import { annenForelderQuestionsConfig } from './annenForelderQuestionsConfig';
import AvtaleAtFarTarUtForeldrepengerVeileder from './components/AvtaleAtFarTarUtForeldrepengerVeileder';
import FarDokumentasjonAleneomsorgVeileder from './components/FarDokumentasjonAleneomsorgVeileder';
import MåOrientereAnnenForelderVeileder from './components/MåOrientereAnnenForelderVeileder';
import OppgiPersonalia from './components/OppgiPersonalia';
import { validateDatoForAleneomsorg } from './validation/annenForelderValidering';

const AnnenForelder = () => {
    const intl = useIntl();
    const {
        annenForelder,
        barn,
        søker,
        søkersituasjon: { rolle },
    } = useSøknad();
    const skalOppgiPersonalia = true;
    const familiehendelsedato = dayjs(getFamiliehendelsedato(barn));

    const onValidSubmitHandler = useCallback((values: Partial<AnnenForelderFormData>) => {
        const newSøker: Søker = {
            ...søker,
            erAleneOmOmsorg: convertYesOrNoOrUndefinedToBoolean(values.aleneOmOmsorg),
        };
        const newBarn: Barn = {
            ...barn,
            datoForAleneomsorg: values.datoForAleneomsorg,
            dokumentasjonAvAleneomsorg: values.dokumentasjonAvAleneomsorg,
        };

        return [actionCreator.setAnnenForelder({
            forelder: mapAnnenForelderFormToState(values),
            søker: newSøker,
            barn: newBarn,
        })];
    }, [søker, barn]);

    const onValidSubmit = useOnValidSubmit(onValidSubmitHandler, SøknadRoutes.UTTAKSPLAN_INFO);
    const onAvbrytSøknad = useAvbrytSøknad();

    return (
        <AnnenForelderFormComponents.FormikWrapper
            initialValues={getAnnenForelderFormInitialValues(annenForelder, barn, søker)}
            onSubmit={onValidSubmit}
            renderForm={({ values: formValues }) => {
                const visibility = annenForelderQuestionsConfig.getVisbility({
                    ...formValues,
                    skalOppgiPersonalia,
                    søkerRolle: rolle,
                    gjelderStebarnsadopsjon: false,
                });

                return (
                    <Step
                        bannerTitle={intlUtils(intl, 'søknad.pageheading')}
                        backLinkHref={getPreviousStepHref('annenForelder')}
                        activeStepId="annenForelder"
                        pageTitle={intlUtils(intl, 'søknad.søkersituasjon')}
                        stepTitle={intlUtils(intl, 'søknad.søkersituasjon')}
                        onCancel={onAvbrytSøknad}
                        onContinueLater={() => null}
                        steps={stepConfig}
                        kompakt={true}
                    >
                        <AnnenForelderFormComponents.Form
                            includeButtons={false}
                            cleanup={(values) => cleanAnnenForelderFormData(values, visibility)}
                        >
                            {skalOppgiPersonalia && (
                                <OppgiPersonalia
                                    fornavn={formValues.fornavn}
                                    erUtenlandskFnr={formValues.utenlandskFnr}
                                    kanIkkeOppgis={formValues.kanIkkeOppgis}
                                    visibility={visibility}
                                    gjelderAdopsjon={false}
                                    søkersFødselsnummer={'søkersFødselsnummer'}
                                />
                            )}
                            <Block
                                visible={
                                    visibility.isVisible(AnnenForelderFormField.aleneOmOmsorg) || !skalOppgiPersonalia
                                }
                                padBottom="l"
                            >
                                <AnnenForelderFormComponents.YesOrNoQuestion
                                    name={AnnenForelderFormField.aleneOmOmsorg}
                                    description={
                                        <UtvidetInformasjon
                                            apneLabel={intlUtils(
                                                intl,
                                                'annenForelder.aleneOmOmsorg.veileder.apneLabel'
                                            )}
                                        >
                                            {intlUtils(intl, 'annenForelder.aleneOmOmsorg.veileder')}
                                        </UtvidetInformasjon>
                                    }
                                    legend={intlUtils(intl, 'annenForelder.aleneOmOmsorg')}
                                />
                                <AvtaleAtFarTarUtForeldrepengerVeileder
                                    visible={!isFarEllerMedmor(rolle) && formValues.aleneOmOmsorg === YesOrNo.YES}
                                    annenForelderNavn={formValues.fornavn!}
                                />
                            </Block>

                            <Block
                                padBottom="l"
                                visible={visibility.isVisible(AnnenForelderFormField.datoForAleneomsorg)}
                            >
                                <Block>
                                    <AnnenForelderFormComponents.DatePicker
                                        name={AnnenForelderFormField.datoForAleneomsorg}
                                        label={intlUtils(intl, 'annenForelder.datoForAleneomsorg')}
                                        minDate={familiehendelsedato.toDate()}
                                        validate={validateDatoForAleneomsorg(intl, familiehendelsedato)}
                                    />
                                </Block>

                                <FarDokumentasjonAleneomsorgVeileder />

                                <FormikFileUploader
                                    label={intlUtils(
                                        intl,
                                        'annenForelder.farMedmor.dokumentasjonAvAleneomsorg.lastOpp'
                                    )}
                                    name={AnnenForelderFormField.dokumentasjonAvAleneomsorg}
                                    attachments={formValues.dokumentasjonAvAleneomsorg || []}
                                    attachmentType={AttachmentType.ALENEOMSORG}
                                    skjemanummer={Skjemanummer.DOK_AV_ALENEOMSORG}
                                />
                            </Block>
                            <Block
                                padBottom="l"
                                visible={visibility.isVisible(AnnenForelderFormField.harRettPåForeldrepenger)}
                            >
                                <AnnenForelderFormComponents.YesOrNoQuestion
                                    name={AnnenForelderFormField.harRettPåForeldrepenger}
                                    description={
                                        <UtvidetInformasjon
                                            apneLabel={intlUtils(
                                                intl,
                                                'annenForelder.annenForelderRettPåForeldrepenger.veileder.apneLabel'
                                            )}
                                        >
                                            <FormattedMessage
                                                id="annenForelder.annenForelderRettPåForeldrepenger.veileder.del1"
                                                values={{ navn: formValues.fornavn }}
                                            ></FormattedMessage>
                                            <br />
                                            <FormattedMessage
                                                id="annenForelder.annenForelderRettPåForeldrepenger.veileder.del2"
                                                values={{ navn: formValues.fornavn }}
                                            ></FormattedMessage>
                                        </UtvidetInformasjon>
                                    }
                                    legend={intlUtils(intl, 'annenForelder.annenForelderRettPåForeldrepenger', {
                                        navn: formValues.fornavn,
                                    })}
                                />
                            </Block>
                            <Block
                                padBottom="l"
                                visible={visibility.isVisible(AnnenForelderFormField.erInformertOmSøknaden)}
                            >
                                <AnnenForelderFormComponents.YesOrNoQuestion
                                    name={AnnenForelderFormField.erInformertOmSøknaden}
                                    legend={intlUtils(intl, 'annenForelder.spørsmål.erAnnenForelderInformert', {
                                        navn: formValues.fornavn,
                                    })}
                                />
                                <MåOrientereAnnenForelderVeileder
                                    visible={formValues.erInformertOmSøknaden === YesOrNo.NO}
                                    annenForelderNavn={formValues.fornavn!}
                                />
                            </Block>

                            <Block padBottom="l" visible={visibility.isVisible(AnnenForelderFormField.erMorUfør)}>
                                <AnnenForelderFormComponents.YesOrNoQuestion
                                    name={AnnenForelderFormField.erMorUfør}
                                    legend={intlUtils(intl, 'annenForelder.erMorUfør', {
                                        navn: formValues.fornavn,
                                    })}
                                />
                            </Block>
                            <Block visible={visibility.areAllQuestionsAnswered()} textAlignCenter={true}>
                                <Hovedknapp>{intlUtils(intl, 'søknad.gåVidere')}</Hovedknapp>
                            </Block>
                        </AnnenForelderFormComponents.Form>
                    </Step>
                );
            }}
        />
    );
};

export default AnnenForelder;
