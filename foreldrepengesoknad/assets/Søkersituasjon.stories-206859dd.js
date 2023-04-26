import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-b4aa299e.js";import{w as x}from"./withRouter-71d505f2.js";import{w as g,F as j}from"./ForeldrepengerStateMock-1afbcff7.js";import{A as S}from"./AxiosMock-3a64d69b.js";import{_ as F}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{S as c}from"./Søkersituasjon-a44dde9c.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-a02d6ab7.js";import"./validationUtils-aa1d1f93.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c113ad03.js";import"./dateUtils-06999df8.js";import"./getTypedFormComponents-373c5aee.js";import"./mapSøkerinfoDTO-cc88f2a7.js";import"./useFortsettSøknadSenere-e922abdf.js";import"./apiInterceptor-b5d8b8e4.js";import"./amplitude-982d123d.js";import"./api-02d91960.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-34cf285a.js";import"./useSaveLoadedRoute-bcb66eb1.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-681932f9.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-dfdcada7.js";import"./Periodene-7a4ae12e.js";import"./index-47edccfa.js";import"./useSøkerinfo-3096846c.js";const A=4,_="/soknad/uttaksplan-info",h={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{rolle:"",situasjon:""}},version:A,currentRoute:_,søknadGjelderEtNyttBarn:!0},m=F,k=h,pr={title:"steps/Søkersituasjon",component:c,decorators:[x,M,g]},d=({context:u,søkerinfo:f})=>t(S,{mock:l=>{l.onPost("/storage").reply(200,void 0)},children:t(j,{søknad:u,søkerinfo:f,children:t(c,{})})}),r=d.bind({});r.args={context:k,søkerinfo:m,kjønn:"K"};const o=d.bind({});o.args={context:k,søkerinfo:{søker:{...m,kjønn:"M"}},kjønn:"M"};var e,n,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <Søkersituasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <Søkersituasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const cr=["Default","Far"];export{r as Default,o as Far,cr as __namedExportsOrder,pr as default};
//# sourceMappingURL=Søkersituasjon.stories-206859dd.js.map
