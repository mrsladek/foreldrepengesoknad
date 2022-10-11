import actionCreator from '../../context/action/actionCreator';
import SøknadRoutes from '../../routes/routes';
import { useForeldrepengesøknadContext } from '../../context/hooks/useForeldrepengesøknadContext';
import Api from '../../api/api';
// import useDebounce from './useDebounce';
import { useEffect, useState } from 'react';

const useSaveLoadedRoute = (currentRoute: SøknadRoutes, fnr: string) => {
    const { dispatch, state } = useForeldrepengesøknadContext();
    // const debouncedState = useDebounce(state, 3000);
    const currentRouteIsInContext = state.currentRoute === currentRoute;
    const [currentRouteIsSaved, setCurrentRouteIsSaved] = useState(currentRouteIsInContext);
    useEffect(() => {
        if (!currentRouteIsSaved) {
            console.log('Saving current route: ', currentRouteIsSaved);
            const dispatchRouteChange = dispatch(actionCreator.updateCurrentRoute(currentRoute));
            const storeRouteChange = Api.storeAppState(state, fnr);
            Promise.all([dispatchRouteChange, storeRouteChange]).then(() => setCurrentRouteIsSaved(true));
            console.log('Saved!');
        }
    });
};

export default useSaveLoadedRoute;
