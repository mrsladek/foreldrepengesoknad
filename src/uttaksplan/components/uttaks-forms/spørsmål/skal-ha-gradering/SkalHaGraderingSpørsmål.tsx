import { intlUtils, Block, UtvidetInformasjon } from '@navikt/fp-common';
import Arbeidsforhold from 'app/types/Arbeidsforhold';
import { RadioPanelProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Arbeidsform } from 'uttaksplan/types/Periode';
import { prosentValideringGradering } from 'uttaksplan/utils/prosentValidering';
import { PeriodeUttakFormComponents, PeriodeUttakFormField } from '../../periode-uttak-form/periodeUttakFormConfig';

interface Props {
    graderingsprosentVisible: boolean;
    arbeidsforhold: Arbeidsforhold[];
}

const getArbeidsOptions = (arbeidsforhold: Arbeidsforhold[]): RadioPanelProps[] => {
    const defaultOptions: RadioPanelProps[] = [
        {
            label: 'Selvstendig',
            value: Arbeidsform.selvstendignæringsdrivende,
        },
        {
            label: ' Frilans',
            value: Arbeidsform.frilans,
        },
    ];
    const eksisterendeArbeidsforhold: RadioPanelProps[] = [];

    if (arbeidsforhold.length > 0) {
        arbeidsforhold.map((arb) =>
            eksisterendeArbeidsforhold.push({ label: `${arb.arbeidsgiverNavn}`, value: `${arb.arbeidsgiverId}` })
        );
    }

    return [...eksisterendeArbeidsforhold, ...defaultOptions];
};

const SkalHaGraderingSpørsmål: FunctionComponent<Props> = ({ graderingsprosentVisible, arbeidsforhold }) => {
    const intl = useIntl();

    return (
        <>
            <Block padBottom="l">
                <PeriodeUttakFormComponents.YesOrNoQuestion
                    name={PeriodeUttakFormField.skalHaGradering}
                    legend={intlUtils(intl, 'uttaksplan.skalHaGradering')}
                />
            </Block>
            <Block padBottom="l" visible={graderingsprosentVisible}>
                <PeriodeUttakFormComponents.NumberInput
                    name={PeriodeUttakFormField.stillingsprosent}
                    label={intlUtils(intl, 'uttaksplan.stillingsprosent')}
                    description={
                        <UtvidetInformasjon apneLabel={intlUtils(intl, 'uttaksplan.stillingsprosent.lesMer.tittel')}>
                            <Normaltekst>
                                <FormattedMessage id="uttaksplan.stillingsprosent.lesMer.innhold" />
                            </Normaltekst>
                        </UtvidetInformasjon>
                    }
                    maxLength={4}
                    validate={prosentValideringGradering(intl)}
                />
            </Block>
            <Block visible={graderingsprosentVisible}>
                <PeriodeUttakFormComponents.RadioPanelGroup
                    name={PeriodeUttakFormField.arbeidsformer}
                    legend={intlUtils(intl, 'uttaksplan.arbeidsformer')}
                    description={
                        <UtvidetInformasjon apneLabel={intlUtils(intl, 'uttaksplan.arbeidsformer.lesMer.tittel')}>
                            <Normaltekst>
                                <FormattedMessage id="uttaksplan.arbeidsformer.lesMer.innhold" />
                            </Normaltekst>
                        </UtvidetInformasjon>
                    }
                    useTwoColumns={true}
                    radios={getArbeidsOptions(arbeidsforhold)}
                />
            </Block>
        </>
    );
};

export default SkalHaGraderingSpørsmål;
