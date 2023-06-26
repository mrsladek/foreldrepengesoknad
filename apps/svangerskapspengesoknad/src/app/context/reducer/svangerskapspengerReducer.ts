import { SvangerskapspengerContextState } from '../SvangerskapspengerContextConfig';
import { SvangerskapspengerContextAction, SvangerskapspengerContextActionKeys } from '../action/actionCreator';

const svangerskapspengerReducer = (
    state: SvangerskapspengerContextState,
    action: SvangerskapspengerContextAction
): SvangerskapspengerContextState => {
    switch (action.type) {
        case SvangerskapspengerContextActionKeys.SET_SØKERINFO:
            return {
                ...state,
                søkerinfo: { ...action.payload },
            };

        case SvangerskapspengerContextActionKeys.SET_CURRENT_ROUTE:
            return {
                ...state,
                currentRoute: action.payload,
            };
        default:
            return state;
    }
};

export default svangerskapspengerReducer;
