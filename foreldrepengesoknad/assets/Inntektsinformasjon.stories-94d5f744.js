import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-b5e53d30.js";import{w as x}from"./withRouter-55f84021.js";import{w as u,F as v}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as b}from"./AxiosMock-b75fb94c.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-2c8a99e9.js";import{I as c}from"./Inntektsinformasjon-c1bb15ed.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./useSaveLoadedRoute-c343dcd2.js";import"./AnnenForelder-5c5d4f7f.js";import"./globalUtil-9d9e0ee4.js";import"./index-feafd352.js";import"./index-781d69e8.js";import"./useOnValidSubmit-cccef928.js";import"./useSøkerinfo-2468b7ec.js";import"./InteractiveListElement-1d4a089b.js";import"./index-c27d1db1.js";import"./Næring-dd71a89d.js";import"./Skjemanummer-77149054.js";import"./formUtils-05ec5f16.js";import"./index-47edccfa.js";import"./FormikFileUploader-235a07ed.js";import"./UtvidetInformasjon-33c789c9.js";import"./AttachmentList-851c2f67.js";import"./Attachment-07dde96a.js";import"./spinner-dfd69c11.js";import"./VedleggIkon-68edc104.js";import"./assertThisInitialized-e784747a.js";import"./veilederpanel-a75452fb.js";import"./VeilederNormal-911fc82a.js";import"./EksternUrl-1f911108.js";import"./links-4dae79fa.js";import"./arbeidsforholdUtils-02e69cae.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";const d=I,k=A,So={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
                <Inntektsinformasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,m,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
                <Inntektsinformasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(a=(m=r.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const _o=["Default","HarArbeidsforhold"];export{o as Default,r as HarArbeidsforhold,_o as __namedExportsOrder,So as default};
//# sourceMappingURL=Inntektsinformasjon.stories-94d5f744.js.map
