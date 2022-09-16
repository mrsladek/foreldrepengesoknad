import React from 'react';
import Arbeidsforhold from 'app/types/Arbeidsforhold';
import HarIkkeArbeidsforhold from './HarIkkeArbeidsforhold';
import HarArbeidsforhold from './HarArbeidsforhold';
import { UtvidetInformasjon } from '@navikt/fp-common';

import './arbeidsforholdInformasjon.less';
import { BodyLong, Label } from '@navikt/ds-react';

interface Props {
    arbeidsforhold: Arbeidsforhold[];
}
const ArbeidsforholdInformasjon: React.FunctionComponent<Props> = ({ arbeidsforhold }) => {
    const harArbeidsforhold = arbeidsforhold !== undefined && arbeidsforhold.length > 0;

    return (
        <>
            <Label>Dine arbeidsforhold</Label>
            <UtvidetInformasjon apneLabel="Les mer om dine arbeidsforhold">
                <BodyLong>
                    Er det feil eller mangler i informasjonen om dine arbeidsforhold? Da må du be din arbeidsgiver
                    oppdatere med riktig informasjon i Arbeidsgiver- og arbeidstakerregisteret.
                </BodyLong>
            </UtvidetInformasjon>
            <HarIkkeArbeidsforhold harArbeidsforhold={harArbeidsforhold} />
            <HarArbeidsforhold harArbeidsforhold={harArbeidsforhold} arbeidsforhold={arbeidsforhold} />
        </>
    );
};

export default ArbeidsforholdInformasjon;
