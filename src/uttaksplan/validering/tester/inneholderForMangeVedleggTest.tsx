import { InnsendingsType } from 'app/types/Attachment';
import { Periode } from 'uttaksplan/types/Periode';
import { RegelTest, RegelTestresultat } from '../utils/types/regelTypes';
import { Søknadsinfo } from '../utils/types/Søknadsinfo';

const MAX_ANTALL_VEDLEGG = 2;
export const inneholderForMangeVedleggTest: RegelTest = (grunnlag: Søknadsinfo): RegelTestresultat => {
    const antallVedleggISøknaden = grunnlag.perioder.reduce((sumVedlegg: number, periode: Periode) => {
        const antallVedleggFiler =
            periode.vedlegg === undefined
                ? 0
                : periode.vedlegg.filter(
                      (vedlegg) =>
                          vedlegg.innsendingsType === undefined ||
                          vedlegg.innsendingsType !== InnsendingsType.SEND_SENERE
                  ).length;
        return sumVedlegg + antallVedleggFiler;
    }, 0);

    return {
        passerer: antallVedleggISøknaden <= MAX_ANTALL_VEDLEGG,
        info: {
            intlKey: 'uttaksplan.validering.feil.inneholderForMangeVedlegg',
            values: { antallVedlegg: MAX_ANTALL_VEDLEGG },
        },
    };
};
