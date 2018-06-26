import { TidsperiodeMedValgfriSluttdatoPartial } from 'common/types';

export enum Næringstype {
    'FISKER' = 'fisker',
    'JORDBRUK' = 'jordbruk',
    'DAGMAMMA' = 'dagmamma',
    'ANNET' = 'annet'
}

export class Næring {
    næringstyper: Næringstype[];
    tidsperiode: TidsperiodeMedValgfriSluttdatoPartial;
    pågående: boolean;
    navnPåNæringen: string;
    organisasjonsnummer: string;
    registrertINorge: boolean;
    registrertILand: string;
    stillingsprosent: string;
    nyIArbeidslivet?: boolean;
    hattVarigEndringAvNæringsinntektSiste4Kalenderår?: boolean;
    endringAvNæringsinntektInformasjon?: EndringAvNæringsinntektInformasjon;
}

export class EndringAvNæringsinntektInformasjon {
    dato: Date;
    næringsinntektEtterEndring: string;
    forklaring: string;
}

export type NæringPartial = Partial<Næring>;
