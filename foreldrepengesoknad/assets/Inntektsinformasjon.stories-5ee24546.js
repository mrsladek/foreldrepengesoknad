import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-11ed63ed.js";import{w as x}from"./withRouter-108f9828.js";import{w as u,F as v}from"./ForeldrepengerStateMock-dad59d19.js";import{A as b}from"./AxiosMock-f4c00f71.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-c2a89b22.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-917886a5.js";import"./validationUtils-f899988d.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ec0625ef.js";import"./dateUtils-fd1a452e.js";import"./getTypedFormComponents-b4bc17b3.js";import"./mapSøkerinfoDTO-af2c145f.js";import"./useFortsettSøknadSenere-d39d0618.js";import"./amplitude-982d123d.js";import"./api-2f366e60.js";import"./apiInterceptor-8762a5cd.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-26b166a9.js";import"./useSaveLoadedRoute-d529cba6.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-cfa4fd06.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-3c01c56e.js";import"./Periodene-7caf1c02.js";import"./useSøkerinfo-097f4ccc.js";import"./InteractiveListElement-dde41059.js";import"./Næring-b837c5ca.js";import"./Skjemanummer-77149054.js";import"./formUtils-8bf80793.js";import"./index-47edccfa.js";import"./FormikFileUploader-f62abcff.js";import"./AttachmentList-46262f8f.js";import"./Attachment-c3ac653b.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-c4decd2a.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
                <Inntektsinformasjon />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
                <Inntektsinformasjon />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ao=["Default","HarArbeidsforhold"];export{o as Default,r as HarArbeidsforhold,Ao as __namedExportsOrder,bo as default};
//# sourceMappingURL=Inntektsinformasjon.stories-5ee24546.js.map
