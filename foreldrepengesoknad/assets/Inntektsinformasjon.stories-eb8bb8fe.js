import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-18345af6.js";import{w as x}from"./withRouter-7e1ac14f.js";import{w as u,F as v}from"./ForeldrepengerStateMock-8b539c5f.js";import{A as b}from"./AxiosMock-890ca912.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-2a04af0a.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-0408c644.js";import"./validationUtils-04f510d3.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c1188673.js";import"./dateUtils-16d28838.js";import"./getTypedFormComponents-660f6676.js";import"./mapSøkerinfoDTO-c67aaa18.js";import"./useFortsettSøknadSenere-4f1097ce.js";import"./amplitude-982d123d.js";import"./api-6bea2c1f.js";import"./apiInterceptor-3e81dc62.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-61e0a308.js";import"./useSaveLoadedRoute-35555b7b.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-1aeee34e.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-569ef513.js";import"./Periodene-881c09d1.js";import"./useSøkerinfo-ca8e2dd1.js";import"./InteractiveListElement-aff955b6.js";import"./Næring-9f4b34d5.js";import"./Skjemanummer-77149054.js";import"./formUtils-2b618ea1.js";import"./index-47edccfa.js";import"./FormikFileUploader-7ce7494f.js";import"./AttachmentList-f80c6a0b.js";import"./Attachment-5ecdd3fb.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-022e781d.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=Inntektsinformasjon.stories-eb8bb8fe.js.map
