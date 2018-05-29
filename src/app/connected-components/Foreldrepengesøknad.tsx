import * as React from 'react';
import { connect } from 'react-redux';
import {
    Redirect,
    Route,
    RouteComponentProps,
    Switch,
    withRouter
} from 'react-router-dom';

import Spinner from 'nav-frontend-spinner';

import routeConfig from '../util/routeConfig';
import StegRoutes from './steg/StegRoutes';
import Velkommen from './sider/velkommen/Velkommen';
import GenerellFeil from './sider/feilsider/GenerellFeil';
import Eksempelsøknad from './Eksempelsøknad';

import Person from '../types/Person';

import { DispatchProps } from '../redux/types';
import { apiActionCreators as api } from '../redux/actions';
import IkkeMyndig from './sider/feilsider/IkkeMyndig';
import DevSideoversikt from '../dev/DevSideoversikt';
import Inngangsside from './sider/inngangsside/Inngangsside';
import UttaksplanSide from './sider/uttaksplan/UttaksplanSide';
import VedleggSide from './sider/vedlegg/VedleggSide';

interface StateProps {
    person: Person;
    error: any;
    isLoadingPerson: boolean;
}

type Props = StateProps & DispatchProps & RouteComponentProps<{}>;

class Foreldrepengesøknad extends React.Component<Props> {
    componentWillMount() {
        const { dispatch, person } = this.props;
        if (!person) {
            dispatch(api.getPerson());
        }
    }

    renderRoutes(routes: JSX.Element[]) {
        return (
            <Switch>
                {routes}
                <Route
                    path={`${routeConfig.APP_ROUTE_PREFIX}/sideoversikt`}
                    component={DevSideoversikt}
                    key="devSideoversikt"
                />
                <Redirect to={routeConfig.APP_ROUTE_PREFIX} />
            </Switch>
        );
    }

    renderErrorRoute(component: React.ComponentType) {
        return this.renderRoutes([
            <Route
                key="feil"
                path={routeConfig.APP_ROUTE_PREFIX}
                component={component}
            />
        ]);
    }

    renderSøknadRoutes() {
        return this.renderRoutes([
            <Route
                exact={true}
                path={routeConfig.APP_ROUTE_PREFIX}
                component={Velkommen}
                key="velkommen"
            />,
            <Route
                path={routeConfig.SOKNAD_ROUTE_PREFIX}
                component={StegRoutes}
                key="steg"
            />,
            <Route
                path={`${routeConfig.APP_ROUTE_PREFIX}/eksempel`}
                component={Eksempelsøknad}
                key="eksempelsøknad"
            />,
            <Route
                path={`${routeConfig.APP_ROUTE_PREFIX}/inngang`}
                component={Inngangsside}
                key="inngang"
            />,
            <Route
                path={`${routeConfig.APP_ROUTE_PREFIX}/uttaksplan`}
                component={UttaksplanSide}
                key="uttaksplan"
            />,
            <Route
                path={`${routeConfig.APP_ROUTE_PREFIX}/vedlegg`}
                component={VedleggSide}
                key="vedlegg"
            />
        ]);
    }

    render() {
        const { error, isLoadingPerson, person } = this.props;

        if (
            isLoadingPerson ||
            (error.response && error.response.status === 401)
        ) {
            return <Spinner type="XXL" />;
        } else if (error.networkError || error.response !== undefined) {
            return this.renderErrorRoute(GenerellFeil);
        } else if (person && !person.erMyndig) {
            return this.renderErrorRoute(IkkeMyndig);
        }

        return this.renderSøknadRoutes();
    }
}

const mapStateToProps = (state: any) => ({
    person: state.api.person,
    error: state.api.error,
    isLoadingPerson: state.api.isLoadingPerson
});

export default withRouter(
    connect<StateProps, {}, {}>(mapStateToProps)(Foreldrepengesøknad)
);
