import{j as l}from"./jsx-runtime-670450c2.js";import{w as _}from"./withIntl-b5e53d30.js";import{w as Y}from"./withRouter-55f84021.js";import{w as C,F as H}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as V}from"./AxiosMock-b75fb94c.js";import{B as p}from"./useSøknad-e0725e39.js";import{O as h}from"./OmBarnet-18ba030e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./useSaveLoadedRoute-c343dcd2.js";import"./AnnenForelder-5c5d4f7f.js";import"./globalUtil-9d9e0ee4.js";import"./index-feafd352.js";import"./useOnValidSubmit-cccef928.js";import"./useSøkerinfo-2468b7ec.js";import"./VeilederNormal-911fc82a.js";import"./FormikFileUploader-235a07ed.js";import"./UtvidetInformasjon-33c789c9.js";import"./AttachmentList-851c2f67.js";import"./Attachment-07dde96a.js";import"./spinner-dfd69c11.js";import"./VedleggIkon-68edc104.js";import"./assertThisInitialized-e784747a.js";import"./index-781d69e8.js";import"./Skjemanummer-77149054.js";import"./veilederpanel-a75452fb.js";import"./links-4dae79fa.js";import"./index-47edccfa.js";import"./formUtils-05ec5f16.js";import"./RegistrertePersonalia-7c5e16ba.js";import"./personUtils-f9b2b569.js";import"./velkommenUtils-1673046b.js";import"./index-c27d1db1.js";const q={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",ikkeNordiskEøsLand:!1,barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981146",fødselsdato:"2022-08-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"SNILT",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981147",fødselsdato:"2022-08-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"LYST",etternavn:"MIDTPUNKT",kjønn:"M"}]}},z=[{arbeidsgiverId:"896929119",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"SAUEFABRIKK",stillingsprosent:100,fom:"2017-03-24"},{arbeidsgiverId:"896929119",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"SAUEFABRIKK",stillingsprosent:100,fom:"2017-03-24"}],J={søker:{fnr:"21430354032",fornavn:"Hes",etternavn:"Mandagsbil",kjønn:"K",fødselsdato:"2003-03-21",ikkeNordiskEøsLand:!1,bankkonto:{kontonummer:"",banknavn:""},barn:[{fnr:"21091981146",fødselsdato:"2023-03-01",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981147",fødselsdato:"2023-03-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"SNILT",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981148",fødselsdato:"2023-03-01",dødsdato:"2023-03-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"LYST",etternavn:"MIDTPUNKT",kjønn:"M"}]},arbeidsforhold:z},Q=4,W="/soknad/om-barnet",X={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{fnr:["21091981146"],type:"født",fødselsdatoer:["2021-03-15"],antallBarn:"1",datoForAleneomsorg:"",dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{språkkode:"nb"},informasjonOmUtenlandsopphold:{tidligereOpphold:[],senereOpphold:[]},erEndringssøknad:!1},version:Q,currentRoute:W,søknadGjelderEtNyttBarn:!0},n=q,r=X,Z=J,Zr={title:"steps/OmBarnet",component:h,decorators:[Y,_,C]},e=({context:w,søkerinfo:G})=>l(V,{mock:m=>{m.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),m.onPost("/storage").reply(200,void 0)},children:l(H,{søknad:w,søkerinfo:G,children:l(h,{})})}),o=e.bind({});o.args={context:{...r,søknad:{...r.søknad,barn:void 0}},søkerinfo:n};const t=e.bind({});t.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:void 0}},søkerinfo:{...n,kjønn:"M"}};const s=e.bind({});s.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"medmor"},barn:void 0}},søkerinfo:n};const a=e.bind({});a.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"adopsjon",rolle:"mor"}}},søkerinfo:n};const d=e.bind({});d.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:{antallBarn:1,fnr:["21091981146"],fødselsdatoer:[new Date("2021-03-15")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:n};const i=e.bind({});i.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:2,fnr:["31091981146","31091981147"],fødselsdatoer:[new Date("2022-08-02"),new Date("2022-08-02")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:n};const c=e.bind({});c.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"adopsjon",rolle:"mor"},barn:{antallBarn:1,fnr:["21091981146"],fødselsdatoer:[new Date("2021-03-15")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:n};const k=e.bind({});k.args={context:{...r,søknad:{...r.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:3,fnr:["21091981146","31091981147","31091981148"],fødselsdatoer:[new Date("2023-01-02")],type:p.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:Z};var f,M,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(S=(F=s.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var j,B,E;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(E=(B=a.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var y,T,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var P,D,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var O,R,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var N,K,U;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <OmBarnet />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(U=(K=k.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const $r=["Default","FarFødsel","MedmorFødsel","ForAdopsjon","RegistrertBarnFødselFar","RegistrertBarnFødselMor","RegistrertBarnAdopsjonMor","RegistrertBarnTrillingerDerEnErDød"];export{o as Default,t as FarFødsel,a as ForAdopsjon,s as MedmorFødsel,c as RegistrertBarnAdopsjonMor,d as RegistrertBarnFødselFar,i as RegistrertBarnFødselMor,k as RegistrertBarnTrillingerDerEnErDød,$r as __namedExportsOrder,Zr as default};
//# sourceMappingURL=OmBarnet.stories-9f835364.js.map
