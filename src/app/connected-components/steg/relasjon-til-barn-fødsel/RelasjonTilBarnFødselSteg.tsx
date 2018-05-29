import * as React from 'react';
import { connect } from 'react-redux';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import søknadActions from './../../../redux/actions/søknad/søknadActionCreators';

import { StegID } from '../../../util/stegConfig';
import Steg from '../../../components/layout/Steg';
import Spørsmål from '../../../components/spørsmål/Spørsmål';
import ErBarnetFødtSpørsmål from '../../../spørsmål/ErBarnetFødtSpørsmål';
import { BarnPartial, FødtBarn, UfødtBarn } from '../../../types/søknad/Barn';
import { DispatchProps } from '../../../redux/types';
import { partials } from './partials';
import Søknad, { SøkerRolle } from '../../../types/søknad/Søknad';
import { AppState } from '../../../redux/reducers';
import Person from '../../../types/Person';
import { HistoryProps, Kjønn } from '../../../types/common';
import Søknadsvedlegg from '../../../types/søknad/Søknadsvedlegg';

interface StateProps {
    barn: BarnPartial;
    søknad: Søknad;
    vedlegg: Søknadsvedlegg;
    person?: Person;
}

type Props = StateProps & InjectedIntlProps & DispatchProps & HistoryProps;
class RelasjonTilBarnFødsel extends React.Component<Props, StateProps> {
    render() {
        const { barn, dispatch, person, søknad, vedlegg, history } = this.props;

        if (person) {
            const { søkerRolle } = søknad;
            const { kjønn } = person;
            const erFarEllerMedmor =
                kjønn === Kjønn.MANN || søkerRolle === SøkerRolle.MEDMOR;

            return (
                <Steg id={StegID.RELASJON_TIL_BARN_FØDSEL}>
                    <Spørsmål
                        render={() => (
                            <ErBarnetFødtSpørsmål
                                erBarnetFødt={barn.erBarnetFødt}
                                onChange={(erBarnetFødt: boolean) =>
                                    dispatch(
                                        søknadActions.updateBarn({
                                            erBarnetFødt
                                        })
                                    )
                                }
                            />
                        )}
                    />

                    {barn && barn.erBarnetFødt === true ? (
                        <partials.FødtBarnPartial
                            dispatch={dispatch}
                            barn={barn as FødtBarn}
                            vedlegg={vedlegg}
                            history={history}
                        />
                    ) : (
                        <partials.UfødtBarnPartial
                            dispatch={dispatch}
                            barn={barn as UfødtBarn}
                            vedlegg={vedlegg}
                            søknad={søknad}
                            erFarEllerMedmor={erFarEllerMedmor}
                            history={history}
                        />
                    )}
                </Steg>
            );
        }

        return null;
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    søknad: state.søknad,
    barn: state.søknad.barn,
    vedlegg: state.søknad.vedlegg,
    person: state.api.person
});

export default connect<StateProps, {}, {}>(mapStateToProps)(
    injectIntl(RelasjonTilBarnFødsel)
);
