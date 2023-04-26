import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-b4aa299e.js";import{w as x}from"./withRouter-71d505f2.js";import{w as u,F as v}from"./ForeldrepengerStateMock-1afbcff7.js";import{A as b}from"./AxiosMock-3a64d69b.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-39547d12.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-a02d6ab7.js";import"./validationUtils-aa1d1f93.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c113ad03.js";import"./dateUtils-06999df8.js";import"./getTypedFormComponents-373c5aee.js";import"./mapSøkerinfoDTO-cc88f2a7.js";import"./useFortsettSøknadSenere-e922abdf.js";import"./apiInterceptor-b5d8b8e4.js";import"./amplitude-982d123d.js";import"./api-02d91960.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-34cf285a.js";import"./useSaveLoadedRoute-bcb66eb1.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-681932f9.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-dfdcada7.js";import"./Periodene-7a4ae12e.js";import"./useSøkerinfo-3096846c.js";import"./InteractiveListElement-3ca45901.js";import"./Næring-6476c3d1.js";import"./Skjemanummer-77149054.js";import"./formUtils-07817100.js";import"./index-47edccfa.js";import"./FormikFileUploader-f45707d9.js";import"./AttachmentList-52286a6a.js";import"./Attachment-62110eb2.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-369d25d6.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <Inntektsinformasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ao=["Default","HarArbeidsforhold"];export{o as Default,r as HarArbeidsforhold,Ao as __namedExportsOrder,bo as default};
//# sourceMappingURL=Inntektsinformasjon.stories-ffd3843d.js.map
