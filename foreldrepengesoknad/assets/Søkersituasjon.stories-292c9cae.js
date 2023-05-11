import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-050ca3c0.js";import{w as x}from"./withRouter-628257d8.js";import{w as g,F as j}from"./ForeldrepengerStateMock-5d6f44b7.js";import{A as S}from"./AxiosMock-a0199d40.js";import{_ as F}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{S as c}from"./Søkersituasjon-1935d2eb.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-386da2d3.js";import"./validationUtils-7cfc3be6.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-0fd43c6f.js";import"./dateUtils-9634bd53.js";import"./getTypedFormComponents-f679b5fe.js";import"./mapSøkerinfoDTO-d187e922.js";import"./useFortsettSøknadSenere-90fa8a07.js";import"./amplitude-982d123d.js";import"./api-71a86de1.js";import"./apiInterceptor-3502d29a.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-ad890c0b.js";import"./useSaveLoadedRoute-6f0560d8.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-7d9bbbb7.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-859c6f38.js";import"./Periodene-34200d3f.js";import"./index-47edccfa.js";import"./useSøkerinfo-7587e961.js";const A=4,_="/soknad/uttaksplan-info",h={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{rolle:"",situasjon:""}},version:A,currentRoute:_,søknadGjelderEtNyttBarn:!0},m=F,k=h,po={title:"steps/Søkersituasjon",component:c,decorators:[x,M,g]},d=({context:u,søkerinfo:f})=>t(S,{mock:l=>{l.onPost("/storage").reply(200,void 0)},children:t(j,{søknad:u,søkerinfo:f,children:t(c,{})})}),o=d.bind({});o.args={context:k,søkerinfo:m,kjønn:"K"};const r=d.bind({});r.args={context:k,søkerinfo:{søker:{...m,kjønn:"M"}},kjønn:"M"};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
//# sourceMappingURL=Søkersituasjon.stories-292c9cae.js.map
