import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import RadioPanelGruppeResponsive from 'common/components/radio-panel-gruppe-responsive/RadioPanelGruppeResponsive';
import getMessage from 'common/util/i18nUtils';

export enum AnnenForelder {
    'HAR_RETT_PÅ_FORELDREPENGER' = 'harRettPåForeldrepenger',
    'HAR_IKKE_RETT_PÅ_FORELDREPENGER' = 'harIkkeRettPåForeldrepenger'
}

interface BarnFødtBolkProps {
    navn?: string;
    harAnnenForelderRettPåForeldrepenger?: boolean;
    onChange: (
        harAnnenForelderRettPåForeldrepenger: boolean,
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

type Props = BarnFødtBolkProps & InjectedIntlProps;

const RettPåForeldrepengerSpørsmål = (props: Props) => {
    const {
        onChange,
        harAnnenForelderRettPåForeldrepenger,
        navn,
        intl,
        ...otherProps
    } = props;

    let checked;
    if (harAnnenForelderRettPåForeldrepenger === true) {
        checked = AnnenForelder.HAR_RETT_PÅ_FORELDREPENGER;
    } else if (harAnnenForelderRettPåForeldrepenger === false) {
        checked = AnnenForelder.HAR_IKKE_RETT_PÅ_FORELDREPENGER;
    }

    return (
        <RadioPanelGruppeResponsive
            checked={checked}
            legend={getMessage(
                intl,
                'andreForelderenRettPåForeldrepenger.spørsmål',
                { navn }
            )}
            radios={[
                {
                    label: getMessage(intl, 'ja'),
                    value: AnnenForelder.HAR_RETT_PÅ_FORELDREPENGER
                },
                {
                    label: getMessage(intl, 'nei'),
                    value: AnnenForelder.HAR_IKKE_RETT_PÅ_FORELDREPENGER
                }
            ]}
            name="andreForelderenRettPåForeldrepenger"
            onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
                v: AnnenForelder
            ) => onChange(v === AnnenForelder.HAR_RETT_PÅ_FORELDREPENGER, e)}
            {...otherProps}
        />
    );
};

export default injectIntl(RettPåForeldrepengerSpørsmål);
