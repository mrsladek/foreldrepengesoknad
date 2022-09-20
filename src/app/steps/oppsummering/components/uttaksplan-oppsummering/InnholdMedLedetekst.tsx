import * as React from 'react';
import { guid } from 'nav-frontend-js-utils';
import { BodyShort, Label } from '@navikt/ds-react';

interface InnholdMedLedetekstProps {
    ledetekst: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const hasListOfChildren = (children: string | string[]): boolean => Array.isArray(children);

const InnholdMedLedetekst: React.FunctionComponent<InnholdMedLedetekstProps> = ({ ledetekst, children, className }) => {
    return (
        <div className={className}>
            <Label as="div">{ledetekst}</Label>
            {!Array.isArray(children) && hasListOfChildren((children as JSX.Element).props.children)
                ? (children as JSX.Element).props.children.map((child: string) => (
                      <BodyShort className="feltoppsummering__verdi" key={guid()}>
                          {child}
                      </BodyShort>
                  ))
                : children}
        </div>
    );
};

export default InnholdMedLedetekst;
