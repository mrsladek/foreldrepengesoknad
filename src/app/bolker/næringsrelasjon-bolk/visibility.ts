import { NæringsrelasjonPartial } from '../../types/søknad/SelvstendigNæringsdrivendeInformasjon';
import VisibilityFunction from '../../types/dom/Visibility';

const tlfnrVisible: VisibilityFunction<NæringsrelasjonPartial> = (næringsrelasjon: NæringsrelasjonPartial) => {
    const { navn } = næringsrelasjon;
    return navn !== undefined;
};

const erNærVennEllerFamilieVisible: VisibilityFunction<NæringsrelasjonPartial> = (
    næringsrelasjon: NæringsrelasjonPartial
) => {
    const { telefonnummer } = næringsrelasjon;
    return module.tlfnr(næringsrelasjon) && telefonnummer !== undefined;
};

const module = {
    tlfnr: tlfnrVisible,
    erNærVennEllerFamilie: erNærVennEllerFamilieVisible
};

export default module;
