import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-050ca3c0.js";import{w as x}from"./withRouter-628257d8.js";import{w as u,F as v}from"./ForeldrepengerStateMock-5d6f44b7.js";import{A as b}from"./AxiosMock-a0199d40.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-727a8ede.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-386da2d3.js";import"./validationUtils-7cfc3be6.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-0fd43c6f.js";import"./dateUtils-9634bd53.js";import"./getTypedFormComponents-f679b5fe.js";import"./mapSøkerinfoDTO-d187e922.js";import"./useFortsettSøknadSenere-90fa8a07.js";import"./amplitude-982d123d.js";import"./api-71a86de1.js";import"./apiInterceptor-3502d29a.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-ad890c0b.js";import"./useSaveLoadedRoute-6f0560d8.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-7d9bbbb7.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-859c6f38.js";import"./Periodene-34200d3f.js";import"./useSøkerinfo-7587e961.js";import"./InteractiveListElement-f354b8d3.js";import"./Næring-11462e62.js";import"./Skjemanummer-77149054.js";import"./formUtils-57a6c846.js";import"./index-47edccfa.js";import"./FormikFileUploader-8f01de48.js";import"./AttachmentList-744b57b3.js";import"./Attachment-a724a49a.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-5a96213d.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=Inntektsinformasjon.stories-3a3d77b4.js.map
