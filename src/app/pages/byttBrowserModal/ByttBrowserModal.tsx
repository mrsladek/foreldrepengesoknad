import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AdvarselIkon, bemUtils, intlUtils } from '@navikt/fp-common';
import { shouldChangeBrowser } from 'app/utils/browserUtils';

import './byttBrowserModal.less';
import { BodyShort, Button, Heading, Modal } from '@navikt/ds-react';

interface Props {
    skalEndreNettleser: boolean;
}

export const ByttBrowserModalImpl: React.FunctionComponent<Props> = ({ skalEndreNettleser }) => {
    const [isOpen, toggleIsOpen] = React.useState(skalEndreNettleser);
    const intl = useIntl();
    const cls = bemUtils('bytt-browser-modal');
    return (
        <Modal
            className={cls.block}
            aria-label={intlUtils(intl, 'sesjonUtløpt.tittel')}
            closeButton={false}
            open={isOpen}
            onClose={() => undefined}
        >
            <AdvarselIkon />
            <Heading size="medium" className="blokk-m">
                {<FormattedMessage id="byttBrowser.tittel" />}
            </Heading>
            <BodyShort className="blokk-m">{<FormattedMessage id="byttBrowser.ingress" />}</BodyShort>
            <div className={cls.element('ok-knapp')}>
                <Button variant="primary" className={cls.element('ok-knapp')} onClick={() => toggleIsOpen(false)}>
                    {<FormattedMessage id="ok" />}
                </Button>
            </div>
        </Modal>
    );
};

const ByttBrowserModal = () => <ByttBrowserModalImpl skalEndreNettleser={shouldChangeBrowser()} />;

export default ByttBrowserModal;
