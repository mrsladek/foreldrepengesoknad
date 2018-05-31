import * as React from 'react';
import { connect } from 'react-redux';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { StegID } from '../../../util/stegConfig';
import Steg from 'app/components/layout/Steg';

import { DispatchProps } from 'common/redux/types';
import { AppState } from '../../../redux/reducers';
import Spørsmål from 'common/components/spørsmål/Spørsmål';
import AntallBarnSpørsmål from '../../../spørsmål/AntallBarnSpørsmål';
import { Adopsjonsbarn } from '../../../types/søknad/Barn';
import DatoInput from 'common/components/dato-input/DatoInput';
import søknadActions from '../../../redux/actions/søknad/søknadActionCreators';
import FødselsdatoerSpørsmål from '../../../spørsmål/FødselsdatoerSpørsmål';
import Labeltekst from 'common/components/labeltekst/Labeltekst';

import utils from '../../../util/fødselsdato';
import Søknadsvedlegg from '../../../components/søknadsvedlegg/Søknadsvedlegg';

export interface StateProps {
    barn: Adopsjonsbarn;
}

export type Props = DispatchProps & StateProps & InjectedIntlProps;

class RelasjonTilBarnStebarnsadopsjon extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.oppdaterAntallBarn = this.oppdaterAntallBarn.bind(this);
    }

    oppdaterAntallBarn(antall: number) {
        this.props.dispatch(
            søknadActions.updateSøknad({
                barn: {
                    ...this.props.barn,
                    antallBarn: antall,
                    fødselsdatoer: utils.trimFødselsdatoer(
                        antall,
                        this.props.barn.fødselsdatoer
                    )
                }
            })
        );
    }

    render() {
        const { barn, intl, dispatch } = this.props;
        return (
            <Steg id={StegID.RELASJON_TIL_BARN_STEBARNSADOPSJON}>
                <Spørsmål
                    render={() => (
                        <DatoInput
                            id="adopsjonsdato"
                            label={
                                <Labeltekst intlId="stebarnsadopsjon.adopsjonsdato" />
                            }
                            onChange={(dato: Date) => {
                                dispatch(
                                    søknadActions.updateBarn({
                                        adopsjonsdato: dato
                                    })
                                );
                            }}
                            dato={barn.adopsjonsdato}
                        />
                    )}
                />
                <Spørsmål
                    animert={true}
                    synlig={barn.adopsjonsdato !== undefined}
                    render={() => <Søknadsvedlegg type="adopsjonsvedtak" />}
                />
                <Spørsmål
                    animert={false}
                    synlig={barn.adopsjonsdato !== undefined}
                    margin="none"
                    render={() => (
                        <AntallBarnSpørsmål
                            spørsmål={intl.formatMessage({
                                id: 'stebarnsadopsjon.antallBarn'
                            })}
                            inputName="stebarnsadopsjon.antallBarn.input"
                            antallBarn={barn.antallBarn}
                            onChange={this.oppdaterAntallBarn}
                        />
                    )}
                />
                <Spørsmål
                    synlig={barn.antallBarn !== undefined}
                    margin="none"
                    render={() => (
                        <FødselsdatoerSpørsmål
                            fødselsdatoer={barn.fødselsdatoer}
                            onChange={(fødselsdatoer: Date[]) =>
                                dispatch(
                                    søknadActions.updateBarn({
                                        fødselsdatoer
                                    })
                                )
                            }
                        />
                    )}
                />
            </Steg>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        barn: state.søknad.barn as Adopsjonsbarn
    };
};

export default injectIntl(
    connect(mapStateToProps)(RelasjonTilBarnStebarnsadopsjon)
);
