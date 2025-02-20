import { StoryFn } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import EngangsstønadContextProvider from '../../context/EngangsstønadContext';
import Velkommen from './Velkommen';
import IntlProvider from 'intl/IntlProvider';

import '@navikt/ds-css';
import '../../styles/globals.less';

export default {
    title: 'Velkommen',
    component: Velkommen,
    decorators: [withRouter],
};

const Template: StoryFn<any> = () => {
    return (
        <EngangsstønadContextProvider>
            <IntlProvider språkkode="nb">
                <Velkommen fornavn="Espen Utvikler" onChangeLocale={() => undefined} locale="nb" />
            </IntlProvider>
        </EngangsstønadContextProvider>
    );
};

export const VisSide = Template.bind({});
