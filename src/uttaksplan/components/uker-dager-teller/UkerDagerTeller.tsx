import React from 'react';
import { guid } from 'nav-frontend-js-utils';
import Fieldset from 'app/components/fieldset/Fieldset';
import { Block } from '@navikt/fp-common';
import NumberStepper, { Props as NumberStepperProps } from './../number-stepper/NumberStepper';

import './ukerDagerTeller.less';
import { bemUtils } from '@navikt/fp-common';
import { Label } from '@navikt/ds-react';

export interface Props {
    ukeLegend: string;
    dagLegend: string;
    feil?: React.ReactNode;
    ukeStepper: NumberStepperProps;
    dagStepper: NumberStepperProps;
}

const UkerDagerTeller: React.FunctionComponent<Props> = ({ ukeStepper, dagStepper, ukeLegend, dagLegend }) => {
    const bem = bemUtils('ukerDagerTeller');
    const ukeLegendId = guid();
    const dagLegendId = guid();
    return (
        <>
            <legend>
                <Label as="span">Varighet på perioden</Label>
            </legend>
            <div className={bem.block}>
                <div className={bem.element('ukerFelt')}>
                    <Block padBottom="l">
                        <Fieldset legend={<span id={ukeLegendId}>{ukeLegend}</span>}>
                            <NumberStepper {...ukeStepper} legendId={ukeLegendId} />
                        </Fieldset>
                    </Block>
                </div>
                <Fieldset legend={<span id={dagLegendId}>{dagLegend}</span>}>
                    <NumberStepper {...dagStepper} legendId={dagLegendId} />
                </Fieldset>
            </div>
        </>
    );
};

export default UkerDagerTeller;
