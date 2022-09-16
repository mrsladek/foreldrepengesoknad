import { BodyLong } from '@navikt/ds-react';
import { intlUtils, UtvidetInformasjon } from '@navikt/fp-common';
import EksternUrl from 'app/components/ekstern-url/EksternUrl';
import links from 'app/links/links';
import React from 'react';
import { useIntl } from 'react-intl';

const HvemKanDriveMedEgenNæring = () => {
    const intl = useIntl();

    return (
        <UtvidetInformasjon
            apneLabel={intlUtils(
                intl,
                'inntektsinformasjon.harJobbetSomSelvstendigNæringsdrivendeSiste10Mnd.apneLabel'
            )}
        >
            <div style={{ backgroundColor: '#e9e7e7', padding: '1.5rem' }}>
                <BodyLong>
                    <EksternUrl
                        tekst="inntektsinformasjon.harJobbetSomSelvstendigNæringsdrivendeSiste10Mnd.infoboks.tekst"
                        url={links.næringsdrivendeInfoBoks}
                        lenkeTekst={intlUtils(intl, 'hjemmeside')}
                    />
                </BodyLong>
            </div>
        </UtvidetInformasjon>
    );
};

export default HvemKanDriveMedEgenNæring;
