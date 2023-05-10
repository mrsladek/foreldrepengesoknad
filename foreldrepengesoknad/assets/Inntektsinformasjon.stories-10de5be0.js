import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-256f5574.js";import{w as x}from"./withRouter-49afce40.js";import{w as u,F as v}from"./ForeldrepengerStateMock-bba91a47.js";import{A as b}from"./AxiosMock-b933719e.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-579c2e02.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-c31d728b.js";import"./validationUtils-66e9f470.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-d26bb35c.js";import"./dateUtils-d42d639b.js";import"./getTypedFormComponents-28c08f2e.js";import"./mapSøkerinfoDTO-840687f5.js";import"./useFortsettSøknadSenere-ba3a7a11.js";import"./amplitude-982d123d.js";import"./api-d5181000.js";import"./apiInterceptor-0ef43019.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-a244e3b1.js";import"./useSaveLoadedRoute-5492edc3.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-0ff76b1e.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-58a902a8.js";import"./Periodene-097652f1.js";import"./useSøkerinfo-e188c5e6.js";import"./InteractiveListElement-83e303c2.js";import"./Næring-af4c78e5.js";import"./Skjemanummer-77149054.js";import"./formUtils-92a9779d.js";import"./index-47edccfa.js";import"./FormikFileUploader-8896a12b.js";import"./AttachmentList-da5c47ef.js";import"./Attachment-72861749.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-f5dc8736.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=Inntektsinformasjon.stories-10de5be0.js.map
