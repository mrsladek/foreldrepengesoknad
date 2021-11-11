import { intlUtils } from '@navikt/fp-common';
import { IntlShape } from 'react-intl';
import { OppholdÅrsakType } from '../types/OppholdÅrsakType';
import { PeriodeInfoType } from '../types/PeriodeInfoType';
import { StønadskontoType } from '../types/StønadskontoType';
import { isAnnenPartInfoPeriode, Periode, Periodetype, UttakAnnenPartInfoPeriode } from './../types/Periode';
import { getNavnGenitivEierform } from './../../app/utils/personUtils';
import { NavnPåForeldre } from './../../app/types/NavnPåForeldre';
import { Forelder } from './../../app/types/Forelder';
import { StønadskontoUttak } from 'uttaksplan/types/StønadskontoUttak';
import { Perioden } from 'app/steps/uttaksplan-info/utils/Perioden';
import { Tidsperioden } from 'app/steps/uttaksplan-info/utils/Tidsperioden';
import { getFloatFromString } from 'app/utils/numberUtils';

const isValidStillingsprosent = (pst: string | undefined): boolean =>
    pst !== undefined && isNaN(parseFloat(pst)) === false;

const prettifyProsent = (pst: string | undefined): number | undefined => {
    if (pst === undefined) {
        return undefined;
    }

    const nbr = parseFloat(pst);
    if (isNaN(nbr)) {
        return undefined;
    }
    if (Math.round(nbr) === nbr) {
        return Math.round(nbr);
    }
    return nbr;
};

export const getStønadskontoNavn = (intl: IntlShape, konto: StønadskontoType, navnPåForeldre: NavnPåForeldre) => {
    let navn;
    switch (konto) {
        case StønadskontoType.Mødrekvote:
            navn = navnPåForeldre.mor;
            break;
        case StønadskontoType.Fedrekvote:
            navn = navnPåForeldre.farMedmor;
            break;
        default:
            navn = undefined;
    }
    if (navn) {
        return intl.formatMessage(
            { id: 'stønadskontotype.foreldernavn.kvote' },
            { navn: getNavnGenitivEierform(navn, intl.locale) }
        );
    }
    return intl.formatMessage({ id: `stønadskontotype.${konto}` });
};

export const getUttaksprosentFromStillingsprosent = (
    stillingsPst: number | undefined,
    samtidigUttakPst: number | undefined
): number | undefined => {
    if (samtidigUttakPst) {
        return samtidigUttakPst;
    }
    if (stillingsPst) {
        return 100 - stillingsPst;
    }
    return undefined;
};

export const getOppholdskontoNavn = (
    intl: IntlShape,
    årsak: OppholdÅrsakType,
    foreldernavn: string,
    erMor: boolean
) => {
    return erMor
        ? intlUtils(intl, `oppholdsårsaktype.foreldernavn.far.${årsak}`, { foreldernavn })
        : intlUtils(intl, `oppholdsårsaktype.foreldernavn.mor.${årsak}`, { foreldernavn });
};

export const getStønadskontoFromOppholdsårsak = (årsak: OppholdÅrsakType): StønadskontoType => {
    if (årsak === OppholdÅrsakType.UttakFedrekvoteAnnenForelder) {
        return StønadskontoType.Fedrekvote;
    }

    if (årsak === OppholdÅrsakType.UttakMødrekvoteAnnenForelder) {
        return StønadskontoType.Mødrekvote;
    }

    if (årsak === OppholdÅrsakType.UttakFellesperiodeAnnenForelder) {
        return StønadskontoType.Fellesperiode;
    }

    return StønadskontoType.ForeldrepengerFørFødsel;
};

export const getForelderNavn = (forelder: Forelder, navnPåForeldre: NavnPåForeldre): string => {
    if (navnPåForeldre.farMedmor) {
        return forelder === Forelder.mor ? navnPåForeldre.mor : navnPåForeldre.farMedmor;
    }
    return forelder === Forelder.mor ? navnPåForeldre.mor : forelder;
};

export const getPeriodeTittel = (intl: IntlShape, periode: Periode, navnPåForeldre: NavnPåForeldre): string => {
    switch (periode.type) {
        case Periodetype.Uttak:
            const tittel = getStønadskontoNavn(intl, periode.konto, navnPåForeldre);
            if (
                (periode.gradert && isValidStillingsprosent(periode.stillingsprosent)) ||
                (periode.ønskerSamtidigUttak && isValidStillingsprosent(periode.samtidigUttakProsent))
            ) {
                return `${tittel} ${intlUtils(intl, 'gradering.prosent', {
                    stillingsprosent: getUttaksprosentFromStillingsprosent(
                        prettifyProsent(periode.stillingsprosent),
                        periode.samtidigUttakProsent ? prettifyProsent(periode.samtidigUttakProsent) : undefined
                    ),
                })}`;
            }

            return tittel;
        case Periodetype.PeriodeUtenUttak:
            return intlUtils(intl, 'periodetype.periodeUtenUttak.tittel');
        case Periodetype.Overføring:
            return getStønadskontoNavn(intl, periode.konto, navnPåForeldre);
        case Periodetype.Utsettelse:
            if (periode.årsak) {
                return intlUtils(intl, 'periodeliste.utsettelsesårsak', {
                    årsak: intlUtils(intl, `utsettelsesårsak.${periode.årsak}`),
                });
            }
            return intlUtils(intl, 'periodeliste.utsettelsesårsak.ukjent');
        case Periodetype.Opphold:
            return getOppholdskontoNavn(
                intl,
                periode.årsak,
                getForelderNavn(periode.forelder, navnPåForeldre),
                periode.forelder === 'mor'
            );
        case Periodetype.Hull:
            return intlUtils(intl, 'periodetype.hull.tittel');
        case Periodetype.Info:
            switch (periode.infotype) {
                case PeriodeInfoType.uttakAnnenPart:
                    return getStønadskontoNavn(intl, getStønadskontoFromOppholdsårsak(periode.årsak), navnPåForeldre);
                case PeriodeInfoType.utsettelseAnnenPart:
                    return intlUtils(intl, `periodetype.info.utsettelse.${periode.årsak}`, {
                        navn: getForelderNavn(periode.forelder, navnPåForeldre),
                    });
                default:
                    return intlUtils(intl, `periodetype.info.${periode.infotype}`);
            }
    }
};

export const getSamtidigUttakEllerGraderingsProsent = (periode: UttakAnnenPartInfoPeriode): number | undefined => {
    const periodeErGradert = periode.stillingsprosent !== undefined;
    const periodeErSamtidigUttak = periode.samtidigUttakProsent !== undefined;

    if (periodeErSamtidigUttak) {
        return (100 - getFloatFromString(periode.samtidigUttakProsent)!) / 100;
    }

    if (periodeErGradert) {
        return getFloatFromString(periode.stillingsprosent)! / 100;
    }

    return undefined;
};

export const justerAndrePartsUttakAvFellesperiodeOmMulig = (
    perioder: Periode[],
    uttakFellesperiode: StønadskontoUttak | undefined
): Periode[] => {
    if (uttakFellesperiode === undefined || uttakFellesperiode.dager >= 0 || perioder.length === 0) {
        return perioder;
    }

    const dagerGjenståendeFellesperiode = uttakFellesperiode.dager;

    const sisteFellesperiodeAnnenPart = [...perioder]
        .reverse()
        .find((p) => isAnnenPartInfoPeriode(p) && p.årsak === OppholdÅrsakType.UttakFellesperiodeAnnenForelder);

    if (sisteFellesperiodeAnnenPart !== undefined && isAnnenPartInfoPeriode(sisteFellesperiodeAnnenPart)) {
        const dagerMedFellesperiodeISistePeriode = Perioden(sisteFellesperiodeAnnenPart).getAntallUttaksdager();
        const justeringsProsent = getSamtidigUttakEllerGraderingsProsent(sisteFellesperiodeAnnenPart) || 1;
        const diff = dagerGjenståendeFellesperiode / justeringsProsent + dagerMedFellesperiodeISistePeriode;
        const indexSistePeriode = perioder.findIndex((p) => p.id === sisteFellesperiodeAnnenPart.id);

        if (dagerGjenståendeFellesperiode < 0 && diff > 0) {
            perioder[indexSistePeriode] = {
                ...sisteFellesperiodeAnnenPart,
                tidsperiode: Tidsperioden(sisteFellesperiodeAnnenPart.tidsperiode).setUttaksdager(diff),
            };
            return perioder;
        }

        if (dagerGjenståendeFellesperiode < 0 && diff === 0) {
            return perioder.splice(indexSistePeriode, 1);
        }
    }

    return perioder;
};
