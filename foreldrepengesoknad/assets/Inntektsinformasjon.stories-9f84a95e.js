import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-2cd0961f.js";import{w as x}from"./withRouter-39938b0b.js";import{w as u,F as v}from"./ForeldrepengerStateMock-de0489e8.js";import{A as b}from"./AxiosMock-c0c886b0.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-d243c621.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-06e2693f.js";import"./validationUtils-9d5f1d7f.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-bef338a8.js";import"./dateUtils-1f16f8ca.js";import"./getTypedFormComponents-eb1a726d.js";import"./mapSøkerinfoDTO-766e3371.js";import"./useFortsettSøknadSenere-45d26093.js";import"./amplitude-982d123d.js";import"./api-7c8a1682.js";import"./apiInterceptor-d84503f0.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-ac4aac13.js";import"./useSaveLoadedRoute-f067a427.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-5e07fd2f.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-3b0dcc11.js";import"./Periodene-e4ab6e5b.js";import"./useSøkerinfo-f6efa4eb.js";import"./InteractiveListElement-e6a4180e.js";import"./Næring-130a1fef.js";import"./Skjemanummer-77149054.js";import"./formUtils-d2603244.js";import"./index-47edccfa.js";import"./FormikFileUploader-f44763c5.js";import"./AttachmentList-1c9c83cb.js";import"./Attachment-b47734f6.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-0023ab1f.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=Inntektsinformasjon.stories-9f84a95e.js.map
