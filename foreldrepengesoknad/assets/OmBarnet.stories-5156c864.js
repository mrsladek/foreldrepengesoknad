import{j as l}from"./jsx-runtime-670450c2.js";import{w as _}from"./withIntl-11ed63ed.js";import{w as Y}from"./withRouter-56f02fc8.js";import{w as C,F as H}from"./ForeldrepengerStateMock-6e69094b.js";import{A as V}from"./AxiosMock-9f662219.js";import{B as p}from"./useSøknad-ada7a5d2.js";import{O as h}from"./OmBarnet-6ad2549b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-917886a5.js";import"./validationUtils-f899988d.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./mapSøkerinfoDTO-a639ed4c.js";import"./getTypedFormComponents-b4bc17b3.js";import"./dateUtils-c998f5da.js";import"./useFortsettSøknadSenere-b63d2ee4.js";import"./amplitude-982d123d.js";import"./api-f9c5bd14.js";import"./apiInterceptor-8762a5cd.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-fb8ac4dd.js";import"./useSaveLoadedRoute-b22bd40e.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-cfa4fd06.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-a6071c84.js";import"./Periodene-00e04fd4.js";import"./useSøkerinfo-dfcee13b.js";import"./FormikFileUploader-f62abcff.js";import"./AttachmentList-46262f8f.js";import"./Attachment-c3ac653b.js";import"./Skjemanummer-77149054.js";import"./links-b36d21ab.js";import"./index-47edccfa.js";import"./formUtils-8bf80793.js";import"./RegistrertePersonalia-43e44e43.js";import"./personUtils-75f6963a.js";import"./velkommenUtils-27d89f17.js";const q={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981146",fødselsdato:"2022-08-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"SNILT",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981147",fødselsdato:"2022-08-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"LYST",etternavn:"MIDTPUNKT",kjønn:"M"}]}},z=[{arbeidsgiverId:"896929119",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"SAUEFABRIKK",stillingsprosent:100,fom:"2017-03-24"},{arbeidsgiverId:"896929119",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"SAUEFABRIKK",stillingsprosent:100,fom:"2017-03-24"}],J={søker:{fnr:"21430354032",fornavn:"Hes",etternavn:"Mandagsbil",kjønn:"K",fødselsdato:"2003-03-21",bankkonto:{kontonummer:"",banknavn:""},barn:[{fnr:"21091981146",fødselsdato:"2023-03-01",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981147",fødselsdato:"2023-03-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"SNILT",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981148",fødselsdato:"2023-03-01",dødsdato:"2023-03-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"LYST",etternavn:"MIDTPUNKT",kjønn:"M"}]},arbeidsforhold:z},Q=4,W="/soknad/om-barnet",X={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{fnr:["21091981146"],type:"født",fødselsdatoer:["2021-03-15"],antallBarn:"1",datoForAleneomsorg:"",dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{språkkode:"nb"},informasjonOmUtenlandsopphold:{tidligereOpphold:[],senereOpphold:[]},erEndringssøknad:!1},version:Q,currentRoute:W,søknadGjelderEtNyttBarn:!0},r=q,e=X,Z=J,He={title:"steps/OmBarnet",component:h,decorators:[Y,_,C]},n=({context:w,søkerinfo:G})=>l(V,{mock:m=>{m.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),m.onPost("/storage").reply(200,void 0)},children:l(H,{søknad:w,søkerinfo:G,children:l(h,{})})}),o=n.bind({});o.args={context:{...e,søknad:{...e.søknad,barn:void 0}},søkerinfo:r};const t=n.bind({});t.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:void 0}},søkerinfo:{...r,kjønn:"M"}};const s=n.bind({});s.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"medmor"},barn:void 0}},søkerinfo:r};const a=n.bind({});a.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"adopsjon",rolle:"mor"}}},søkerinfo:r};const d=n.bind({});d.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:{antallBarn:1,fnr:["21091981146"],fødselsdatoer:[new Date("2021-03-15")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:r};const i=n.bind({});i.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:2,fnr:["31091981146","31091981147"],fødselsdatoer:[new Date("2022-08-02"),new Date("2022-08-02")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:r};const c=n.bind({});c.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"adopsjon",rolle:"mor"},barn:{antallBarn:1,fnr:["21091981146"],fødselsdatoer:[new Date("2021-03-15")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:r};const k=n.bind({});k.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:3,fnr:["21091981146","31091981147","31091981148"],fødselsdatoer:[new Date("2023-01-02")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:Z};var f,M,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(g=(M=o.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var u,v,A;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var x,F,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(S=(F=s.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var j,B,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var E,T,b;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var P,D,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var L,R,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var K,N,U;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(U=(N=k.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const Ve=["Default","FarFødsel","MedmorFødsel","ForAdopsjon","RegistrertBarnFødselFar","RegistrertBarnFødselMor","RegistrertBarnAdopsjonMor","RegistrertBarnTrillingerDerEnErDød"];export{o as Default,t as FarFødsel,a as ForAdopsjon,s as MedmorFødsel,c as RegistrertBarnAdopsjonMor,d as RegistrertBarnFødselFar,i as RegistrertBarnFødselMor,k as RegistrertBarnTrillingerDerEnErDød,Ve as __namedExportsOrder,He as default};
//# sourceMappingURL=OmBarnet.stories-5156c864.js.map
