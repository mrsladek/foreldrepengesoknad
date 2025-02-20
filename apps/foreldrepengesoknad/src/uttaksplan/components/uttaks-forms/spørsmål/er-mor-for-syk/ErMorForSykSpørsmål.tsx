import { Block, intlUtils } from '@navikt/fp-common';
import { Attachment } from 'app/types/Attachment';
import { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { PeriodeUttakFormComponents, PeriodeUttakFormField } from '../../periode-uttak-form/periodeUttakFormConfig';
import MorErForSykDokumentasjonOpplastning from '../er-mor-for-syk-dokumentasjon/MorErForSykDokumentasjonOpplastning';
import { YesOrNo } from '@navikt/sif-common-formik-ds/lib';

interface Props {
    fieldName: PeriodeUttakFormField;
    erMorForSyk: YesOrNo;
    vedlegg: Attachment[];
    navnMor: string;
}

const ErMorForSykSpørsmål: FunctionComponent<Props> = ({ fieldName, erMorForSyk, navnMor, vedlegg }) => {
    const intl = useIntl();

    return (
        <>
            <Block padBottom="l">
                <PeriodeUttakFormComponents.YesOrNoQuestion
                    name={fieldName}
                    legend={intlUtils(intl, 'uttaksplan.erMorForSyk')}
                    validate={(value: YesOrNo) => {
                        if (value === YesOrNo.UNANSWERED) {
                            return intlUtils(intl, 'uttaksplan.validering.erMorForSyk');
                        }

                        return undefined;
                    }}
                />
            </Block>
            <Block padBottom="l" visible={erMorForSyk === YesOrNo.YES}>
                <MorErForSykDokumentasjonOpplastning navnMor={navnMor} vedlegg={vedlegg} />
            </Block>
        </>
    );
};

export default ErMorForSykSpørsmål;
