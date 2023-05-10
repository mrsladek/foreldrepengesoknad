import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-256f5574.js";import{w as x}from"./withRouter-49afce40.js";import{w as g,F as j}from"./ForeldrepengerStateMock-bba91a47.js";import{A as S}from"./AxiosMock-b933719e.js";import{_ as F}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{S as c}from"./Søkersituasjon-91c0011d.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-c31d728b.js";import"./validationUtils-66e9f470.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-d26bb35c.js";import"./dateUtils-d42d639b.js";import"./getTypedFormComponents-28c08f2e.js";import"./mapSøkerinfoDTO-840687f5.js";import"./useFortsettSøknadSenere-ba3a7a11.js";import"./amplitude-982d123d.js";import"./api-d5181000.js";import"./apiInterceptor-0ef43019.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-a244e3b1.js";import"./useSaveLoadedRoute-5492edc3.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-0ff76b1e.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-58a902a8.js";import"./Periodene-097652f1.js";import"./index-47edccfa.js";import"./useSøkerinfo-e188c5e6.js";const A=4,_="/soknad/uttaksplan-info",h={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{rolle:"",situasjon:""}},version:A,currentRoute:_,søknadGjelderEtNyttBarn:!0},m=F,k=h,po={title:"steps/Søkersituasjon",component:c,decorators:[x,M,g]},d=({context:u,søkerinfo:f})=>t(S,{mock:l=>{l.onPost("/storage").reply(200,void 0)},children:t(j,{søknad:u,søkerinfo:f,children:t(c,{})})}),o=d.bind({});o.args={context:k,søkerinfo:m,kjønn:"K"};const r=d.bind({});r.args={context:k,søkerinfo:{søker:{...m,kjønn:"M"}},kjønn:"M"};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <Søkersituasjon />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,a,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <Søkersituasjon />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const co=["Default","Far"];export{o as Default,r as Far,co as __namedExportsOrder,po as default};
//# sourceMappingURL=Søkersituasjon.stories-4adc3d07.js.map
