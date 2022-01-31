import { bemUtils, Block, intlUtils, LanguageToggle, Locale, Sidebanner } from '@navikt/fp-common';
import actionCreator from 'app/context/action/actionCreator';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { assertUnreachable } from 'app/utils/globalUtil';
import useOnValidSubmit from 'app/utils/hooks/useOnValidSubmit';
import useSøknad from 'app/utils/hooks/useSøknad';
import {
    getInitialVelkommenValues,
    VelkommenFormComponents,
    VelkommenFormData,
    VelkommenFormField,
    velkommenFormQuestions,
} from './velkommenFormConfig';
import DinePlikter from 'app/components/dine-plikter/DinePlikter';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import DinePersonopplysningerModal from '../modaler/DinePersonopplysningerModal';

import './velkommen.less';
import { validateHarForståttRettigheterOgPlikter } from './validation/velkommenValidation';
import Sak, { FagsakStatus } from 'app/types/Sak';
import SøknadRoutes from 'app/routes/routes';
import { convertYesOrNoOrUndefinedToBoolean } from 'app/utils/formUtils';
import SøknadStatus from './components/SøknadStatus';
import { storeAppState } from 'app/utils/submitUtils';
import { ForeldrepengesøknadContextState } from 'app/context/ForeldrepengesøknadContextConfig';

interface Props {
    fornavn: string;
    onChangeLocale: (locale: Locale) => void;
    locale: Locale;
    saker: Sak[];
}

const erSakAvsluttet = (sak: Sak | undefined): boolean => {
    if (sak === undefined) {
        return false;
    } else {
        switch (sak.status) {
            case FagsakStatus.LOPENDE:
            case FagsakStatus.AVSLUTTET:
                return true;
            case FagsakStatus.OPPRETTET:
            case FagsakStatus.UNDER_BEHANDLING:
            case undefined:
                return false;
            default:
                return assertUnreachable(sak.status, `Ugyldig sak status: {$sak.status}`);
        }
    }
};

const getSisteSak = (saker: Sak[]): Sak | undefined => {
    const sakerSortert = [...saker].sort((a, b) => b.opprettet.localeCompare(a.opprettet));
    return sakerSortert[0];
};

const Velkommen: React.FunctionComponent<Props> = ({ fornavn, locale, saker, onChangeLocale }) => {
    const sak = getSisteSak(saker);
    const intl = useIntl();
    const søknad = useSøknad();
    const [isDinePersonopplysningerModalOpen, setDinePersonopplysningerModalOpen] = useState(false);
    const bem = bemUtils('velkommen');
    const sakErAvsluttet = erSakAvsluttet(sak);
    const { erEndringssøknad } = søknad;
    const nextRoute = erEndringssøknad ? SøknadRoutes.UTTAKSPLAN : SøknadRoutes.SØKERSITUASJON;

    const onValidSubmitHandler = (values: Partial<VelkommenFormData>) => {
        return [
            actionCreator.setVelkommen(values.harForståttRettigheterOgPlikter!),
            actionCreator.setErEndringssøknad(!!convertYesOrNoOrUndefinedToBoolean(values.vilSøkeOmEndring)),
        ];
    };

    const onValidSubmit = useOnValidSubmit(onValidSubmitHandler, nextRoute, (state: ForeldrepengesøknadContextState) =>
        storeAppState(state)
    );

    return (
        <VelkommenFormComponents.FormikWrapper
            initialValues={getInitialVelkommenValues(søknad.harGodkjentVilkår)}
            onSubmit={onValidSubmit}
            renderForm={({ values }) => {
                const visibility = velkommenFormQuestions.getVisbility({
                    ...values,
                    sakErAvsluttet,
                });
                return (
                    <VelkommenFormComponents.Form includeButtons={false}>
                        <LanguageToggle
                            locale={locale}
                            availableLocales={['nb', 'nn']}
                            toggle={(l: Locale) => onChangeLocale(l)}
                        />
                        <Sidebanner
                            dialog={{
                                title: intlUtils(intl, 'velkommen.bobletittel', { name: fornavn }),
                                text: (
                                    <>
                                        <Block padBottom="m">
                                            <FormattedMessage id={'velkommen.bobletekst'} />
                                        </Block>
                                    </>
                                ),
                            }}
                        />
                        <div className={bem.block}>
                            <Innholdstittel className={`${bem.element('tittel')} blokk-s`}>
                                {intlUtils(intl, 'velkommen.tittel')}
                            </Innholdstittel>
                            {sak && (
                                <Block padBottom="l">
                                    <SøknadStatus
                                        sakOpprettetDato={new Date(sak.opprettet)}
                                        sakErAvsluttet={sakErAvsluttet}
                                        values={values}
                                        visibility={visibility}
                                    />
                                </Block>
                            )}
                            <Block
                                padBottom="l"
                                visible={visibility.isVisible(VelkommenFormField.harForståttRettigheterOgPlikter)}
                            >
                                <VelkommenFormComponents.ConfirmationCheckbox
                                    name={VelkommenFormField.harForståttRettigheterOgPlikter}
                                    label={intlUtils(intl, 'velkommen.samtykke')}
                                    validate={validateHarForståttRettigheterOgPlikter(intl)}
                                >
                                    <>
                                        <Block padBottom="l">
                                            <FormattedMessage id="velkommen.samtykkeIntro.del1" />
                                        </Block>
                                        <Block padBottom="m">
                                            <DinePlikter />
                                        </Block>
                                        <Block padBottom="l">
                                            <FormattedMessage id="velkommen.samtykkeIntro.del2" />
                                        </Block>
                                        <FormattedMessage id="velkommen.samtykkeIntro.del3" />
                                    </>
                                </VelkommenFormComponents.ConfirmationCheckbox>
                            </Block>
                            <Block padBottom="l">
                                <div style={{ textAlign: 'center' }}>
                                    <Hovedknapp>Begynn med søknad</Hovedknapp>
                                </div>
                            </Block>
                            <Normaltekst className={bem.element('personopplysningerLink')}>
                                <a
                                    className="lenke"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setDinePersonopplysningerModalOpen(true);
                                    }}
                                >
                                    <FormattedMessage id="velkommen.lesMerOmPersonopplysninger" />
                                </a>
                            </Normaltekst>
                            <DinePersonopplysningerModal
                                isOpen={isDinePersonopplysningerModalOpen}
                                onRequestClose={() => setDinePersonopplysningerModalOpen(false)}
                            />
                        </div>
                    </VelkommenFormComponents.Form>
                );
            }}
        />
    );
};

export default Velkommen;
