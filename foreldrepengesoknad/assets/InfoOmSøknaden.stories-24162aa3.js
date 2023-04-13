import{j as s}from"./jsx-runtime-670450c2.js";import{w as O}from"./withIntl-b5e53d30.js";import{w as j}from"./withRouter-55f84021.js";import{w as M,F as x}from"./ForeldrepengerStateMock-08c3c2d8.js";import{P as A,S as P}from"./periodeUtils-f04fe3f4.js";import{d as k}from"./validationUtils-67294d5c.js";import{I as u}from"./InfoOmSøknaden-052b4506.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./index-7e4e529b.js";import"./useSøknad-e0725e39.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-4d501b15.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-96c5f47c.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./extends-98964cd2.js";import"./Sirkelmaske-4ecab28a.js";import"./Foreldrepar-73a1c3e1.js";import"./InnholdMedIllustrasjon-d11331a2.js";import"./index-781d69e8.js";import"./Block-01b0ab76.js";import"./UtvidetInformasjon-33c789c9.js";import"./personUtils-f9b2b569.js";import"./AnnenForelder-5c5d4f7f.js";import"./links-4dae79fa.js";import"./useSøkerinfo-2468b7ec.js";const e={søknad:{saksnummer:void 0,type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{type:"født",fødselsdatoer:[new Date("2021-03-15")],antallBarn:1,datoForAleneomsorg:void 0,dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{},informasjonOmUtenlandsopphold:{},erEndringssøknad:!1,dekningsgrad:"100",uttaksplan:[],harGodkjentOppsummering:!1,vedlegg:[],tilleggsopplysninger:void 0,ønskerJustertUttakVedFødsel:void 0},version:5,currentRoute:"/soknad/uttaksplan-info",søkerinfo:{},saker:[],kvittering:void 0,antallUkerIUttaksplan:void 0,endringstidspunkt:void 0,perioderSomSkalSendesInn:[],harUttaksplanBlittSlettet:!1,brukerSvarteJaPåAutoJustering:void 0,søknadGjelderEtNyttBarn:void 0,familieHendelseDatoNesteSak:void 0,annenPartsUttakErLagtTilIPlan:void 0},o={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",ikkeNordiskEøsLand:!1,barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"}]}},se={title:"components/InfoOmSøknaden",component:u,decorators:[j,O,M]},a=({context:v,søkerinfo:I,erIUttaksplanenSteg:U=!0,ekisterendeSak:F})=>s(x,{søknad:v,søkerinfo:I,children:s(u,{tilgjengeligeStønadskontoer:[{konto:P.Mødrekvote,dager:50}],eksisterendeSak:F,erIUttaksplanenSteg:U})}),n=a.bind({});n.args={context:e,søkerinfo:o};const r=a.bind({});r.args={context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:o};const t=a.bind({});t.args={context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},søkersituasjon:{situasjon:"fødsel",rolle:"far"},annenForelder:{fornavn:"Olga",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:o,ekisterendeSak:{erAnnenPartsSak:!0,uttaksplan:[{type:A.Uttak,gradert:!0,stillingsprosent:"100",ønskerSamtidigUttak:!0,samtidigUttakProsent:"50",tidsperiode:{fom:k("2021-01-01").toDate(),tom:k("2021-01-10").toDate()}}]},erIUttaksplanenSteg:!1};var d,i,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,m,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(c=(S=t.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};const ke=["Default","AnnenForelder","InfoOmMorsSak"];export{r as AnnenForelder,n as Default,t as InfoOmMorsSak,ke as __namedExportsOrder,se as default};
//# sourceMappingURL=InfoOmSøknaden.stories-24162aa3.js.map
