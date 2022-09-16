import { BodyShort, Button, Heading, Modal } from '@navikt/ds-react';
import { bemUtils, Block, intlUtils } from '@navikt/fp-common';
import SøknadRoutes from 'app/routes/routes';
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import './vilDuGåTilbakeModal.less';

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const VilDuGåTilbakeModal: FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
    const intl = useIntl();
    const bem = bemUtils('vilDuGåTilbakeModal');
    const navigate = useNavigate();

    return (
        <Modal
            className={bem.block}
            aria-label={'Tittel'}
            closeButton={false}
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <Modal.Content>
                <Block padBottom="l">
                    <Heading size="small">{intlUtils(intl, 'uttaksplan.vilDuGåTilbakeModal.tittel')}</Heading>
                </Block>
                <Block padBottom="l">
                    <BodyShort>{intlUtils(intl, 'uttaksplan.vilDuGåTilbakeModal.intro')}</BodyShort>
                </Block>
                <Block padBottom="l">
                    <BodyShort>{intlUtils(intl, 'uttaksplan.vilDuGåTilbakeModal.spørsmål')}</BodyShort>
                </Block>
                <div className={bem.element('knapperad')}>
                    <Button
                        variant="primary"
                        onClick={() => {
                            setIsOpen(false);
                            navigate(SøknadRoutes.UTTAKSPLAN_INFO);
                        }}
                    >
                        <FormattedMessage id="uttaksplan.vilDuGåTilbakeModal.okLabel" />
                    </Button>
                    <Button variant="secondary" type="button" onClick={() => setIsOpen(false)}>
                        <FormattedMessage id="uttaksplan.vilDuGåTilbakeModal.avbrytLabel" />
                    </Button>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default VilDuGåTilbakeModal;
