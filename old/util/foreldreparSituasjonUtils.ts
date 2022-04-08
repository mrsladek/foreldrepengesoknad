import { Søknadsinfo } from 'app/selectors/types';
import { ForeldreparSituasjon } from 'shared/types';
import { Kjønn } from 'app/types/common';
import { SøkerRolle } from 'app/types/søknad/Søknad';

export const getForeldreparSituasjonFraSøknadsinfo = (info: Søknadsinfo): ForeldreparSituasjon => {
    const { søker, annenForelder, mor, farMedmor } = info;
    const kjønnSøker = søker.kjønn;
    const rolleSøker = søker.rolle;
    const kjønnAnnenForelder = annenForelder.kjønn;
    if (info.søknaden.erDeltUttak) {
        if (kjønnSøker !== kjønnAnnenForelder) {
            if (kjønnAnnenForelder === undefined) {
                if (rolleSøker === SøkerRolle.MEDMOR) {
                    return ForeldreparSituasjon.morOgMedmor;
                }
            }

            return ForeldreparSituasjon.farOgMor;
        }
        return kjønnSøker === Kjønn.MANN ? ForeldreparSituasjon.farOgFar : ForeldreparSituasjon.morOgMedmor;
    } else {
        if (kjønnSøker === Kjønn.KVINNE) {
            return mor.erAleneOmOmsorg ? ForeldreparSituasjon.aleneomsorg : ForeldreparSituasjon.bareMor;
        } else {
            return farMedmor.erAleneOmOmsorg ? ForeldreparSituasjon.aleneomsorg : ForeldreparSituasjon.bareFar;
        }
    }
};
