import {
    bemUtils,
    Block,
    date1YearAgo,
    date1YearFromNow,
    dateToday,
    intlUtils,
    Step,
    StepButtonWrapper,
    UtvidetInformasjon,
    validateYesOrNoIsAnswered,
} from '@navikt/fp-common';
import { UnansweredQuestionsInfo } from '@navikt/sif-common-formik-ds/lib';
import {
    UtenlandsoppholdFieldNames,
    UtenlandsoppholdFormComponents,
    UtenlandsoppholdFormData,
} from './utenlandsoppholdFormTypes';
import { FormattedMessage, useIntl } from 'react-intl';
import actionCreator from 'app/context/action/actionCreator';
import stepConfig, { getPreviousStepHref } from 'app/step-config/stepConfig';
import { utenlandsoppholdFormQuestions } from './utenlandsoppholdFormQuestions';
import BostedUtlandListAndDialog from './bostedUtlandListAndDialog/BostedUtlandListAndDialog';
import { utenlandsoppholdFormCleanup } from './utenlandsoppholdFormUtils';
import { useEngangsstønadContext } from 'app/context/hooks/useEngangsstønadContext';
import { onAvbrytSøknad } from 'app/util/globalUtil';
import getMessage from 'common/util/i18nUtils';
import { validateUtenlandsoppholdNeste12Mnd, validateUtenlandsoppholdSiste12Mnd } from './utenlandsoppholdValidering';

import { logAmplitudeEvent } from 'app/amplitude/amplitude';
import { PageKeys } from 'app/types/PageKeys';
import { useNavigate, Link } from 'react-router-dom';
import { BostedUtland } from './bostedUtlandListAndDialog/types';
import { Button } from '@navikt/ds-react';

import './utenlandsopphold.less';

const Utenlandsopphold: React.FunctionComponent = () => {
    const intl = useIntl();
    const bem = bemUtils('utenlandsopphold');
    const navigate = useNavigate();

    const { state, dispatch } = useEngangsstønadContext();
    const initialValues = state.søknad.utenlandsopphold;

    logAmplitudeEvent('sidevisning', {
        app: 'engangsstonadny',
        team: 'foreldrepenger',
        pageKey: PageKeys.Utenlandsopphold,
    });

    const onValidSubmit = (values: Partial<UtenlandsoppholdFormData>) => {
        dispatch(
            actionCreator.setUtenlandsopphold({
                skalBoUtenforNorgeNeste12Mnd: values.skalBoUtenforNorgeNeste12Mnd!,
                harBoddUtenforNorgeSiste12Mnd: values.harBoddUtenforNorgeSiste12Mnd!,
                utenlandsoppholdNeste12Mnd: values.utenlandsoppholdNeste12Mnd || [],
                utenlandsoppholdSiste12Mnd: values.utenlandsoppholdSiste12Mnd || [],
            })
        );
        navigate('/soknad/oppsummering');
    };

    return (
        <UtenlandsoppholdFormComponents.FormikWrapper
            initialValues={initialValues}
            onSubmit={(values) => onValidSubmit(values)}
            renderForm={({ values: formValues }) => {
                // @ts-ignore Fiks denne
                const visibility = utenlandsoppholdFormQuestions.getVisbility(formValues);
                const allQuestionsAnswered = visibility.areAllQuestionsAnswered();
                return (
                    <Step
                        bannerTitle={getMessage(intl, 'søknad.pageheading')}
                        activeStepId="utenlandsopphold"
                        pageTitle={getMessage(intl, 'søknad.utenlandsopphold')}
                        onCancel={() => onAvbrytSøknad(dispatch, navigate)}
                        steps={stepConfig}
                    >
                        <UtenlandsoppholdFormComponents.Form
                            includeButtons={false}
                            includeValidationSummary={true}
                            cleanup={(values) => utenlandsoppholdFormCleanup(values)}
                            noButtonsContentRenderer={
                                allQuestionsAnswered
                                    ? undefined
                                    : () => (
                                          <UnansweredQuestionsInfo>
                                              {intlUtils(intl, 'søknad.footer.spørsmålMåBesvares')}
                                          </UnansweredQuestionsInfo>
                                      )
                            }
                        >
                            <div className={bem.block}>
                                {visibility.isVisible(UtenlandsoppholdFieldNames.skalBoUtenforNorgeNeste12Mnd) && (
                                    <Block padBottom="l">
                                        <UtenlandsoppholdFormComponents.YesOrNoQuestion
                                            legend={intlUtils(intl, 'utenlandsopphold.neste12Måneder.spørsmål')}
                                            name={UtenlandsoppholdFieldNames.skalBoUtenforNorgeNeste12Mnd}
                                            labels={{
                                                no: intlUtils(
                                                    intl,
                                                    'utenlandsopphold.neste12MånederInfotekst.radiobutton.boddINorge'
                                                ),
                                                yes: intlUtils(
                                                    intl,
                                                    'utenlandsopphold.neste12MånederInfotekst.radiobutton.boddIUtlandet'
                                                ),
                                            }}
                                            validate={validateYesOrNoIsAnswered}
                                        />
                                        <UtvidetInformasjon
                                            apneLabel={intlUtils(
                                                intl,
                                                'utenlandsopphold.neste12MånederInfotekst.apneLabel'
                                            )}
                                        >
                                            {intlUtils(intl, 'utenlandsopphold.neste12MånederInfotekst')}
                                        </UtvidetInformasjon>
                                        {visibility.isVisible(
                                            UtenlandsoppholdFieldNames.utenlandsoppholdNeste12Mnd
                                        ) && (
                                            <Block padBottom="l">
                                                <BostedUtlandListAndDialog<UtenlandsoppholdFieldNames>
                                                    name={UtenlandsoppholdFieldNames.utenlandsoppholdNeste12Mnd}
                                                    minDate={dateToday}
                                                    maxDate={date1YearFromNow}
                                                    labels={{
                                                        addLabel: intlUtils(intl, 'utenlandsopphold.knapp.leggTilLand'),
                                                        modalTitle: 'Utenlandsopphold neste 12 måneder',
                                                    }}
                                                    erFremtidigOpphold={true}
                                                    validate={(value: BostedUtland[]) =>
                                                        validateUtenlandsoppholdNeste12Mnd(value, intl)
                                                    }
                                                />
                                            </Block>
                                        )}
                                    </Block>
                                )}
                                {visibility.isVisible(UtenlandsoppholdFieldNames.harBoddUtenforNorgeSiste12Mnd) && (
                                    <Block margin="xl">
                                        <UtenlandsoppholdFormComponents.YesOrNoQuestion
                                            legend={intlUtils(intl, 'utenlandsopphold.siste12Måneder.spørsmål')}
                                            name={UtenlandsoppholdFieldNames.harBoddUtenforNorgeSiste12Mnd}
                                            labels={{
                                                no: intlUtils(
                                                    intl,
                                                    'utenlandsopphold.siste12MånederInfotekst.radiobutton.boddINorge'
                                                ),
                                                yes: intlUtils(
                                                    intl,
                                                    'utenlandsopphold.siste12MånederInfotekst.radiobutton.boddIUtlandet'
                                                ),
                                            }}
                                            validate={validateYesOrNoIsAnswered}
                                        />
                                        <UtvidetInformasjon
                                            apneLabel={intlUtils(
                                                intl,
                                                'utenlandsopphold.siste12MånederInfotekst.apneLabel'
                                            )}
                                        >
                                            {intlUtils(intl, 'utenlandsopphold.siste12MånederInfotekst')}
                                        </UtvidetInformasjon>
                                        {visibility.isVisible(
                                            UtenlandsoppholdFieldNames.utenlandsoppholdSiste12Mnd
                                        ) && (
                                            <Block padBottom="xl">
                                                <BostedUtlandListAndDialog<UtenlandsoppholdFieldNames>
                                                    minDate={date1YearAgo}
                                                    maxDate={dateToday}
                                                    name={UtenlandsoppholdFieldNames.utenlandsoppholdSiste12Mnd}
                                                    labels={{
                                                        addLabel: intlUtils(intl, 'utenlandsopphold.knapp.leggTilLand'),
                                                        modalTitle: 'Utenlandsopphold siste 12 måneder',
                                                    }}
                                                    erFremtidigOpphold={false}
                                                    validate={(value: BostedUtland[]) =>
                                                        validateUtenlandsoppholdSiste12Mnd(value, intl)
                                                    }
                                                />
                                            </Block>
                                        )}
                                    </Block>
                                )}

                                <Block margin="xl">
                                    <StepButtonWrapper>
                                        <Button
                                            variant="secondary"
                                            as={Link}
                                            to={getPreviousStepHref('utenlandsopphold')}
                                        >
                                            <FormattedMessage id="backlink.label" />
                                        </Button>
                                        {allQuestionsAnswered && (
                                            <Button type="submit">{intlUtils(intl, 'søknad.gåVidere')}</Button>
                                        )}
                                    </StepButtonWrapper>
                                </Block>
                            </div>
                        </UtenlandsoppholdFormComponents.Form>
                    </Step>
                );
            }}
        />
    );
};

export default Utenlandsopphold;
