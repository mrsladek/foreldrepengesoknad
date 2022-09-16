import React, { FunctionComponent } from 'react';
import { bemUtils, Block } from '@navikt/fp-common';
import { FormattedMessage } from 'react-intl';

import './slettUttaksplanModal.less';
import { BodyShort, Button, Heading, Modal } from '@navikt/ds-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    handleSlettUttaksplanModalBekreft: () => void;
}

const SlettUttaksplanModal: FunctionComponent<Props> = ({ isOpen, onClose, handleSlettUttaksplanModalBekreft }) => {
    const bem = bemUtils('slettUttaksplanModal');

    return (
        <Modal
            className={bem.block}
            open={isOpen}
            closeButton={true}
            onClose={onClose}
            aria-label="Slett uttaksplanen din"
        >
            <div className={bem.element('content')}>
                <Block padBottom="l">
                    <Heading size="small">
                        <FormattedMessage id="uttaksplan.slettPlan.innhold1" />
                    </Heading>
                    <BodyShort>
                        <FormattedMessage id="uttaksplan.slettPlan.innhold2" />
                    </BodyShort>
                </Block>
                <div className={bem.element('knappWrapper')}>
                    <Button variant="primary" onClick={handleSlettUttaksplanModalBekreft}>
                        <FormattedMessage id="uttaksplan.slettPlan.slett" />
                    </Button>
                    <Button variant="secondary" onClick={onClose}>
                        <FormattedMessage id="uttaksplan.slettPlan.avbryt" />
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default SlettUttaksplanModal;
