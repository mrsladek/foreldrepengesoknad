import React from 'react';
import { bemUtils } from '@navikt/fp-common';

import './innholdMedIllustrasjon.less';
import { Heading } from '@navikt/ds-react';

interface Props {
    tittel: string;
    illustrasjoner?: React.ReactNode;
    infoboks?: React.ReactNode;
    children?: React.ReactNode;
}

const InnholdMedIllustrasjon: React.FunctionComponent<Props> = ({ tittel, illustrasjoner, infoboks, children }) => {
    const bem = bemUtils('innholdMedIllustrasjon');

    return (
        <div
            className={bem.classNames(
                bem.block,
                bem.modifierConditional('medIllustrasjoner', illustrasjoner !== undefined)
            )}
        >
            <div className={bem.element('contentWrapper')}>
                <div className={bem.element('headerWrapper')}>
                    <header>
                        <Heading size="medium" as="h2" className={bem.element('tittel')}>
                            {tittel}
                        </Heading>
                        {infoboks !== undefined && infoboks}
                    </header>
                </div>
                <div className={bem.element('content')}>{children}</div>
            </div>
            {illustrasjoner && (
                <div className={bem.element('illustrasjoner')} role="presentation" aria-hidden={true}>
                    {React.Children.map(illustrasjoner, (ill, index) => (
                        <div className={bem.element('illustrasjon')} key={index}>
                            {ill}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InnholdMedIllustrasjon;
