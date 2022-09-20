import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';

import { bemUtils, Block, InfoBlock, intlUtils } from '@navikt/fp-common';
import { QuestionVisibility } from '@navikt/sif-common-question-config/lib';

import BarnevognIkon from 'app/assets/BarnevognIkon';
import { VelkommenFormComponents, VelkommenFormData, VelkommenFormField } from '../velkommenFormConfig';

import './søknadStatus.less';
import './wrapper.less';
import { UnansweredQuestionsInfo, YesOrNo } from '@navikt/sif-common-formik-ds/lib';
import { BodyLong, BodyShort, GuidePanel, Label, Tag } from '@navikt/ds-react';
interface SøknadStatusProps {
    sakOpprettetDato: Date;
    sakErFerdigbehandlet: boolean;
}

interface SøknadProps {
    sakOpprettetDato: Date;
    sakErFerdigbehandlet: boolean;
    kanSøkeOmEndring: boolean;
    harSakTilBehandling: boolean;
    values: VelkommenFormData;
    visibility: QuestionVisibility<VelkommenFormField, undefined>;
}

const SøknadStatusInfoBlokk: React.FunctionComponent<SøknadStatusProps> = ({
    sakOpprettetDato,
    sakErFerdigbehandlet,
}) => {
    const bem = bemUtils('søknad-status');
    const intl = useIntl();
    const etikettType = sakErFerdigbehandlet ? 'success' : 'warning';
    const statusTekst = sakErFerdigbehandlet
        ? 'velkommen.sak.status.ferdigBehandlet'
        : 'velkommen.sak.status.underBehandling';
    return (
        <div className="wrapper">
            <InfoBlock>
                <div className={bem.block}>
                    <div className={bem.element('text')}>
                        <Label>{intlUtils(intl, 'velkommen.sak.type')}</Label>
                        <BodyShort>
                            <FormattedMessage
                                id="velkommen.sak.sistEndret"
                                values={{
                                    date: dayjs(sakOpprettetDato).format('D. MMMM YYYY'),
                                }}
                            />
                        </BodyShort>
                        <Tag variant={etikettType}>{intlUtils(intl, statusTekst)}</Tag>
                    </div>
                    <div className={bem.element('icon')}>
                        <BarnevognIkon></BarnevognIkon>
                    </div>
                </div>
            </InfoBlock>
        </div>
    );
};

const SøknadStatus: React.FunctionComponent<SøknadProps> = ({
    sakOpprettetDato,
    sakErFerdigbehandlet,
    kanSøkeOmEndring,
    harSakTilBehandling,
    values,
    visibility,
}) => {
    const intl = useIntl();

    return (
        <>
            <Block padBottom="xl">
                {kanSøkeOmEndring && (
                    <>
                        <Block margin="l">
                            <BodyLong>{intlUtils(intl, 'velkommen.intro.harSak.del1')}</BodyLong>
                        </Block>
                        <Block margin="l">
                            <BodyLong>{intlUtils(intl, 'velkommen.intro.harSak.del2')}</BodyLong>
                        </Block>
                    </>
                )}
                {harSakTilBehandling && (
                    <>
                        <Block margin="l">
                            <BodyShort>
                                {intlUtils(intl, 'velkommen.intro.harFørstegangssøknadUnderBehandling')}
                            </BodyShort>
                        </Block>
                    </>
                )}
            </Block>

            <SøknadStatusInfoBlokk
                sakOpprettetDato={sakOpprettetDato}
                sakErFerdigbehandlet={sakErFerdigbehandlet}
            ></SøknadStatusInfoBlokk>

            <Block visible={visibility.isVisible(VelkommenFormField.vilSøkeOmEndring)} padBottom="l" margin="l">
                <Block padBottom="l">
                    <Label>{intlUtils(intl, 'velkommen.spørsmål.søknadstype.harSak.spørsmål')}</Label>
                </Block>
                <Block padBottom="l">
                    <VelkommenFormComponents.YesOrNoQuestion
                        legend="Vil du søke om endring?"
                        name={VelkommenFormField.vilSøkeOmEndring}
                        labels={{
                            yes: intlUtils(intl, `velkommen.spørsmål.søknadstype.harSak.alternativ.endring`),
                            no: intlUtils(intl, `velkommen.spørsmål.søknadstype.harSak.alternativ.nyttbarn`),
                        }}
                    />
                </Block>
            </Block>
            <Block visible={values.vilSøkeOmEndring === YesOrNo.NO} padBottom="l">
                <GuidePanel>{intlUtils(intl, `velkommen.intro.harSak.veileder`)}</GuidePanel>
            </Block>
            <Block
                padBottom="l"
                visible={
                    visibility.isVisible(VelkommenFormField.vilSøkeOmEndring) &&
                    values.vilSøkeOmEndring === YesOrNo.UNANSWERED
                }
            >
                <UnansweredQuestionsInfo>
                    <FormattedMessage id="steg.footer.spørsmålMåBesvares" />
                </UnansweredQuestionsInfo>
            </Block>
        </>
    );
};

export default SøknadStatus;
