import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Lenke, { Props as NavFrontendLenkeProps } from 'nav-frontend-lenker';

interface SeDetaljerLinkProps {
    content: string;
}

type Props = SeDetaljerLinkProps & NavFrontendLenkeProps & InjectedIntlProps;

const SeDetaljerLink: React.StatelessComponent<Props> = ({ content, ...otherProps }: Props) => (
    <>
        {content}
        <Lenke {...otherProps}>Se detaljer</Lenke>
    </>
);

export default injectIntl(SeDetaljerLink);
