import actionCreator from '../../context/action/actionCreator';
import SøknadRoutes from '../../routes/routes';
import { useForeldrepengesøknadContext } from '../../context/hooks/useForeldrepengesøknadContext';
import { useEffect, useRef } from 'react';
import { storeAppState } from '../submitUtils';
import { redirectToLogin } from '../redirectToLogin';

const useSaveLoadedRoute = (currentRoute: SøknadRoutes) => {
    const { dispatch, state } = useForeldrepengesøknadContext();
    const routeHasBeenSaved = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            console.log('SAVING');
            if (!routeHasBeenSaved.current && state.currentRoute !== currentRoute) {
                console.log('Current route: ', currentRoute);
                console.log('Route is not equal to current');
                routeHasBeenSaved.current = true;
                dispatch(actionCreator.updateCurrentRoute(currentRoute));
                storeAppState({ ...state, currentRoute }).catch((error) => {
                    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                        redirectToLogin();
                    }
                });
            }
        }, 3000);
    }, [currentRoute, dispatch, state]);
};

export default useSaveLoadedRoute;
