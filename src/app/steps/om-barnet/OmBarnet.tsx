import { Block, intlUtils, Step } from '@navikt/fp-common';
import actionCreator from 'app/context/action/actionCreator';
import SøknadRoutes from 'app/routes/routes';
import { Hovedknapp } from 'nav-frontend-knapper';
import React from 'react';
import { useIntl } from 'react-intl';
import useOnValidSubmit from 'app/utils/hooks/useOnValidSubmit';
import useSøknad from 'app/utils/hooks/useSøknad';
import useSøkerinfo from 'app/utils/hooks/useSøkerinfo';
import useAvbrytSøknad from 'app/utils/hooks/useAvbrytSøknad';
import stepConfig, { getPreviousStepHref } from '../stepsConfig';
import AdopsjonAnnetBarn from './components/AdopsjonAnnetBarn';
import AdopsjonEktefellesBarn from './components/AdopsjonEktefellesBarn';
import BarnFødtEllerAdoptert from './components/BarnFødtEllerAdoptert';
import Fødsel from './components/Fødsel';
import Termin from './components/Termin';
import { OmBarnetFormComponents, OmBarnetFormData } from './omBarnetFormConfig';
import omBarnetQuestionsConfig from './omBarnetQuestionsConfig';
import { getOmBarnetInitialValues, mapOmBarnetFormDataToState } from './omBarnetUtils';

interface Props {}

const OmBarnet: React.FunctionComponent<Props> = () => {
    const intl = useIntl();
    const { søkersituasjon, barn } = useSøknad();
    const { arbeidsforhold } = useSøkerinfo();

    const onValidSubmitHandler = (values: Partial<OmBarnetFormData>) => {
        const barn = mapOmBarnetFormDataToState(values);
        return [actionCreator.setOmBarnet(barn)];
    };

    const onValidSubmit = useOnValidSubmit(onValidSubmitHandler, SøknadRoutes.ANNEN_FORELDER);
    const onAvbrytSøknad = useAvbrytSøknad();

    return (
        <OmBarnetFormComponents.FormikWrapper
            initialValues={getOmBarnetInitialValues(barn)}
            onSubmit={onValidSubmit}
            renderForm={({ values: formValues }) => {
                const visibility = omBarnetQuestionsConfig.getVisbility({
                    ...formValues,
                    arbeidsforhold,
                    situasjon: søkersituasjon.situasjon,
                    rolle: søkersituasjon.rolle,
                });

                return (
                    <Step
                        bannerTitle={intlUtils(intl, 'søknad.pageheading')}
                        backLinkHref={getPreviousStepHref('omBarnet')}
                        activeStepId="omBarnet"
                        pageTitle={intlUtils(intl, 'søknad.omBarnet')}
                        stepTitle={intlUtils(intl, 'søknad.omBarnet')}
                        onCancel={onAvbrytSøknad}
                        onContinueLater={() => null}
                        steps={stepConfig}
                        kompakt={true}
                    >
                        <OmBarnetFormComponents.Form includeButtons={false}>
                            <BarnFødtEllerAdoptert søkersituasjon={søkersituasjon} />
                            <AdopsjonAnnetBarn
                                søkersituasjon={søkersituasjon}
                                formValues={formValues}
                                visibility={visibility}
                            />
                            <AdopsjonEktefellesBarn
                                søkersituasjon={søkersituasjon}
                                formValues={formValues}
                                visibility={visibility}
                            />
                            <Termin søkersituasjon={søkersituasjon} formValues={formValues} visibility={visibility} />
                            <Fødsel søkersituasjon={søkersituasjon} formValues={formValues} visibility={visibility} />
                            <Block visible={visibility.areAllQuestionsAnswered()} textAlignCenter={true}>
                                <Hovedknapp>{intlUtils(intl, 'søknad.gåVidere')}</Hovedknapp>
                            </Block>
                        </OmBarnetFormComponents.Form>
                    </Step>
                );
            }}
        />
    );
};

export default OmBarnet;
