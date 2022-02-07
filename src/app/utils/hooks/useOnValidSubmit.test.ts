import { renderHook, act } from '@testing-library/react-hooks';
import SøknadRoutes from 'app/routes/routes';
import { ForeldrepengesøknadContextState } from 'app/context/ForeldrepengesøknadContextConfig';
import * as apiUtils from 'app/api/apiUtils';
import * as context from 'app/context/hooks/useForeldrepengesøknadContext';
import useOnValidSubmit from './useOnValidSubmit';
import { storeAppState } from '../submitUtils';

const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
    ...(jest.requireActual('react-router') as any),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('useOnValidSubmit', () => {
    it('skal returnere funksjon for å lagre data til state og så til server', () => {
        const dispatchMock = jest.fn();
        const state = {
            søkerinfo: {
                person: {
                    fnr: '123',
                },
            },
        } as ForeldrepengesøknadContextState;

        jest.spyOn(context, 'useForeldrepengesøknadContext').mockImplementation(() => ({
            state,
            dispatch: dispatchMock,
        }));
        jest.spyOn(apiUtils, 'cleanUpSøknadsdataForInnsending').mockImplementation((any) => any);

        const submitHandler = (): any => [Promise.resolve()];

        const { result: lagre } = renderHook(() =>
            useOnValidSubmit(submitHandler, SøknadRoutes.ANNEN_FORELDER, (state: ForeldrepengesøknadContextState) =>
                storeAppState(state)
            )
        );

        expect(lagre).not.toBeUndefined;
        expect(dispatchMock).toHaveBeenCalledTimes(0);
        expect(mockHistoryPush).toHaveBeenCalledTimes(0);
    });

    it('skal returnere og så kjøre funksjon for å lagre data til state og så til server', async () => {
        const dispatchMock = jest.fn();
        const state = {
            søkerinfo: {
                person: {
                    fnr: '123',
                },
            },
            currentRoute: SøknadRoutes.UTTAKSPLAN_INFO,
        } as ForeldrepengesøknadContextState;

        jest.spyOn(context, 'useForeldrepengesøknadContext').mockImplementation(() => ({
            state,
            dispatch: dispatchMock,
        }));
        jest.spyOn(apiUtils, 'cleanUpSøknadsdataForInnsending').mockImplementation((any) => any);

        const formVerdier = {};
        const submitHandler = (): any => [Promise.resolve()];

        const { result, waitForNextUpdate } = renderHook(() =>
            useOnValidSubmit(submitHandler, SøknadRoutes.ANNEN_FORELDER, (state: ForeldrepengesøknadContextState) =>
                storeAppState(state)
            )
        );

        act(() => {
            result.current(formVerdier);
        });

        await waitForNextUpdate();

        expect(dispatchMock).toHaveBeenCalledTimes(2);
        setTimeout(() => expect(mockHistoryPush).toHaveBeenCalledTimes(1), 0);
    });
});
