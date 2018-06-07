import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { ForeldreansvarBarn } from '../../../../types/søknad/Barn';
import { AnnenForelderPartial } from '../../../../types/søknad/AnnenForelder';
import { Skjemadata } from '../../../../types/søknad/Søknad';
import RettPåForeldrepengerSpørsmål from '../../../../spørsmål/RettPåForeldrepengerSpørsmål';
import ErMorUførSpørsmål from '../../../../spørsmål/ErMorUførSpørsmål';

import søknadActions from '../../../../redux/actions/søknad/søknadActionCreators';
import { DispatchProps } from 'common/redux/types';
import Spørsmål from 'common/components/spørsmål/Spørsmål';
import ErDenAndreForelderenInformertSpørsmål from '../../../../spørsmål/ErDenAndreForelderenInformertSpørsmål';
import SkalFarEllerMedmorHaForeldrepengerSpørsmål from '../../../../spørsmål/SkalFarEllerMedmorHaForeldrepengerSpørsmål';
import DatoInput from 'common/components/dato-input/DatoInput';
import getMessage from 'common/util/i18nUtils';
import Søknadsvedlegg from '../../../../components/søknadsvedlegg/Søknadsvedlegg';
import Veilederinfo from 'common/components/veileder-info/Veilederinfo';
import Bolk from '../../../../components/layout/Bolk';
import { Attachment } from 'storage/attachment/types/Attachment';
import { SøkerPartial } from '../../../../types/søknad/Søker';

interface AnnenForelderKjentProps {
    barn: ForeldreansvarBarn;
    annenForelder: AnnenForelderPartial;
    erFarEllerMedmor: boolean;
    søknad: Skjemadata;
    søker: SøkerPartial;
    attachments: Attachment[];
}

type Props = AnnenForelderKjentProps & InjectedIntlProps & DispatchProps;

class KjentAndreForelderPartial extends React.Component<Props> {
    render() {
        const {
            barn,
            annenForelder,
            søker,
            attachments,
            erFarEllerMedmor,
            dispatch,
            intl
        } = this.props;

        return (
            <React.Fragment>
                <Spørsmål
                    synlig={!erFarEllerMedmor && søker.aleneOmOmsorg === true}
                    render={() => (
                        <React.Fragment>
                            <Veilederinfo>
                                Informasjon om deling av uttak og at den andre
                                kan ta perm.
                            </Veilederinfo>
                            <SkalFarEllerMedmorHaForeldrepengerSpørsmål
                                navn={annenForelder.navn}
                                skalFarEllerMedmorHaForeldrepenger={
                                    annenForelder.skalHaForeldrepenger
                                }
                                onChange={(skalHaForeldrepenger: boolean) => {
                                    dispatch(
                                        søknadActions.updateAnnenForelder({
                                            skalHaForeldrepenger
                                        })
                                    );
                                }}
                            />
                        </React.Fragment>
                    )}
                />

                <Spørsmål
                    synlig={
                        !søker.aleneOmOmsorg ||
                        annenForelder.skalHaForeldrepenger === true
                    }
                    render={() => (
                        <RettPåForeldrepengerSpørsmål
                            navn={annenForelder.navn}
                            harAnnenForelderRettPåForeldrepenger={
                                annenForelder.harRettPåForeldrepenger
                            }
                            onChange={(harRettPåForeldrepenger: boolean) =>
                                dispatch(
                                    søknadActions.updateAnnenForelder({
                                        harRettPåForeldrepenger
                                    })
                                )
                            }
                        />
                    )}
                />

                <Spørsmål
                    synlig={
                        annenForelder.harRettPåForeldrepenger === false &&
                        erFarEllerMedmor
                    }
                    render={() => (
                        <ErMorUførSpørsmål
                            navn={annenForelder.navn}
                            erMorUfør={annenForelder.erUfør}
                            onChange={(erUfør: boolean) =>
                                dispatch(
                                    søknadActions.updateAnnenForelder({
                                        erUfør
                                    })
                                )
                            }
                        />
                    )}
                />

                <Bolk
                    synlig={
                        annenForelder.harRettPåForeldrepenger === true ||
                        (annenForelder.skalHaForeldrepenger === true &&
                            annenForelder.harRettPåForeldrepenger !== undefined)
                    }
                    render={() => (
                        <Veilederinfo>
                            Informasjon om rettigheter og deling av uttaksplan
                        </Veilederinfo>
                    )}
                />

                <Spørsmål
                    synlig={
                        søker.aleneOmOmsorg !== true &&
                        annenForelder.harRettPåForeldrepenger === true
                    }
                    render={() => (
                        <ErDenAndreForelderenInformertSpørsmål
                            navn={annenForelder.navn}
                            erInformertOmSøknaden={
                                annenForelder.erInformertOmSøknaden
                            }
                            onChange={(erInformertOmSøknaden: boolean) =>
                                dispatch(
                                    søknadActions.updateAnnenForelder({
                                        erInformertOmSøknaden
                                    })
                                )
                            }
                        />
                    )}
                />

                {erFarEllerMedmor && (
                    <React.Fragment>
                        <Spørsmål
                            synlig={søker.aleneOmOmsorg === true}
                            render={() => (
                                <DatoInput
                                    id="omsorgsovertakelseDato"
                                    label={getMessage(
                                        intl,
                                        'omsorgsovertakelseDato.spørsmål'
                                    )}
                                    onChange={(foreldreansvarsdato: Date) => {
                                        dispatch(
                                            søknadActions.updateBarn({
                                                foreldreansvarsdato
                                            })
                                        );
                                    }}
                                    dato={barn.foreldreansvarsdato}
                                />
                            )}
                        />

                        <Spørsmål
                            animert={true}
                            synlig={barn.foreldreansvarsdato !== undefined}
                            render={() => (
                                <Søknadsvedlegg type="omsorgsovertakelse" />
                            )}
                        />

                        <Bolk
                            synlig={
                                attachments.filter(
                                    (attachment) =>
                                        attachment.group ===
                                        'omsorgsovertakelse'
                                ).length > 0
                            }
                            render={() => (
                                <Veilederinfo>
                                    Du kan få 46/56 uker eller det som er igjen
                                    av permisjonen
                                </Veilederinfo>
                            )}
                        />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default injectIntl(KjentAndreForelderPartial);
