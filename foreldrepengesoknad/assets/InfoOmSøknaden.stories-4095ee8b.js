import{j as s}from"./jsx-runtime-670450c2.js";import{w as O}from"./withIntl-b4aa299e.js";import{w as j}from"./withRouter-71d505f2.js";import{w as M,F as x}from"./ForeldrepengerStateMock-1afbcff7.js";import{P as A,S as P}from"./dateUtils-06999df8.js";import{d as k}from"./validationUtils-aa1d1f93.js";import{I as u}from"./InfoOmSøknaden-26941c35.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-a02d6ab7.js";import"./index-7e4e529b.js";import"./useSøknad-c113ad03.js";import"./getTypedFormComponents-373c5aee.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./mapSøkerinfoDTO-cc88f2a7.js";import"./index-4d501b15.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./periodeUtils-dfdcada7.js";import"./Sirkelmaske-d78a61bd.js";import"./Foreldrepar-2fb0bcd4.js";import"./InnholdMedIllustrasjon-e302fedc.js";import"./personUtils-3224fb9b.js";import"./AnnenForelder-5c5d4f7f.js";import"./links-b36d21ab.js";import"./useSøkerinfo-3096846c.js";import"./Periodene-7a4ae12e.js";const e={søknad:{saksnummer:void 0,type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{type:"født",fødselsdatoer:[new Date("2021-03-15")],antallBarn:1,datoForAleneomsorg:void 0,dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{},informasjonOmUtenlandsopphold:{},erEndringssøknad:!1,dekningsgrad:"100",uttaksplan:[],harGodkjentOppsummering:!1,vedlegg:[],tilleggsopplysninger:void 0,ønskerJustertUttakVedFødsel:void 0},version:5,currentRoute:"/soknad/uttaksplan-info",søkerinfo:{},saker:[],kvittering:void 0,antallUkerIUttaksplan:void 0,endringstidspunkt:void 0,perioderSomSkalSendesInn:[],harUttaksplanBlittSlettet:!1,brukerSvarteJaPåAutoJustering:void 0,søknadGjelderEtNyttBarn:void 0,familieHendelseDatoNesteSak:void 0,annenPartsUttakErLagtTilIPlan:void 0},o={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"}]}},te={title:"components/InfoOmSøknaden",component:u,decorators:[j,O,M]},a=({context:v,søkerinfo:I,erIUttaksplanenSteg:U=!0,ekisterendeSak:F})=>s(x,{søknad:v,søkerinfo:I,children:s(u,{tilgjengeligeStønadskontoer:[{konto:P.Mødrekvote,dager:50}],eksisterendeSak:F,erIUttaksplanenSteg:U})}),n=a.bind({});n.args={context:e,søkerinfo:o};const r=a.bind({});r.args={context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:o};const t=a.bind({});t.args={context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},søkersituasjon:{situasjon:"fødsel",rolle:"far"},annenForelder:{fornavn:"Olga",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:o,ekisterendeSak:{erAnnenPartsSak:!0,uttaksplan:[{type:A.Uttak,gradert:!0,stillingsprosent:"100",ønskerSamtidigUttak:!0,samtidigUttakProsent:"50",tidsperiode:{fom:k("2021-01-01").toDate(),tom:k("2021-01-10").toDate()}}]},erIUttaksplanenSteg:!1};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  context,
  søkerinfo,
  erIUttaksplanenSteg = true,
  ekisterendeSak
}) => {
  return <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
            <InfoOmSøknaden tilgjengeligeStønadskontoer={[{
      konto: StønadskontoType.Mødrekvote,
      dager: 50
    }]} eksisterendeSak={ekisterendeSak} erIUttaksplanenSteg={erIUttaksplanenSteg} />\r
        </ForeldrepengerStateMock>;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  context,
  søkerinfo,
  erIUttaksplanenSteg = true,
  ekisterendeSak
}) => {
  return <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
            <InfoOmSøknaden tilgjengeligeStønadskontoer={[{
      konto: StønadskontoType.Mødrekvote,
      dager: 50
    }]} eksisterendeSak={ekisterendeSak} erIUttaksplanenSteg={erIUttaksplanenSteg} />\r
        </ForeldrepengerStateMock>;
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,S,c;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`({
  context,
  søkerinfo,
  erIUttaksplanenSteg = true,
  ekisterendeSak
}) => {
  return <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
            <InfoOmSøknaden tilgjengeligeStønadskontoer={[{
      konto: StønadskontoType.Mødrekvote,
      dager: 50
    }]} eksisterendeSak={ekisterendeSak} erIUttaksplanenSteg={erIUttaksplanenSteg} />\r
        </ForeldrepengerStateMock>;
}`,...(c=(S=t.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};const oe=["Default","AnnenForelder","InfoOmMorsSak"];export{r as AnnenForelder,n as Default,t as InfoOmMorsSak,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=InfoOmSøknaden.stories-4095ee8b.js.map
