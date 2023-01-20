import { Attachment, InnsendingsType } from 'app/types/Attachment';
import { Periode } from 'uttaksplan/types/Periode';
import { RegelTest, RegelTestresultat } from '../utils/types/regelTypes';
import { Søknadsinfo } from '../utils/types/Søknadsinfo';

const MAX_TOTAL_VEDLEGG_STØRRELSE = 2; //b;
const MAX_TOTAL_VEDLEGG_STØRRELSE_MB = MAX_TOTAL_VEDLEGG_STØRRELSE / 1000000;
export const overstigerVedleggStørrelse: RegelTest = (grunnlag: Søknadsinfo): RegelTestresultat => {
    const totalStørrelseVedlegg = grunnlag.perioder.reduce((sumVedleggStørrelse: number, periode: Periode) => {
        const vedleggFilerStørrelse =
            periode.vedlegg === undefined
                ? 0
                : periode.vedlegg
                      .filter(
                          (vedlegg) =>
                              vedlegg.innsendingsType === undefined ||
                              vedlegg.innsendingsType !== InnsendingsType.SEND_SENERE
                      )
                      .reduce((sum: number, fil: Attachment) => {
                          return sum + fil.filesize;
                      }, 0);
        return sumVedleggStørrelse + vedleggFilerStørrelse;
    }, 0);

    return {
        passerer: totalStørrelseVedlegg <= MAX_TOTAL_VEDLEGG_STØRRELSE,
        info: {
            intlKey: 'uttaksplan.validering.feil.overskriderVedleggStørrelse',
            values: { maksStørrelse: MAX_TOTAL_VEDLEGG_STØRRELSE_MB },
        },
    };
};
