import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-18345af6.js";import{w as x}from"./withRouter-7e1ac14f.js";import{w as g,F as j}from"./ForeldrepengerStateMock-8b539c5f.js";import{A as S}from"./AxiosMock-890ca912.js";import{_ as F}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{S as c}from"./Søkersituasjon-9b8d4f19.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-0408c644.js";import"./validationUtils-04f510d3.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c1188673.js";import"./dateUtils-16d28838.js";import"./getTypedFormComponents-660f6676.js";import"./mapSøkerinfoDTO-c67aaa18.js";import"./useFortsettSøknadSenere-4f1097ce.js";import"./amplitude-982d123d.js";import"./api-6bea2c1f.js";import"./apiInterceptor-3e81dc62.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-61e0a308.js";import"./useSaveLoadedRoute-35555b7b.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-1aeee34e.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-569ef513.js";import"./Periodene-881c09d1.js";import"./index-47edccfa.js";import"./useSøkerinfo-ca8e2dd1.js";const A=4,_="/soknad/uttaksplan-info",h={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{rolle:"",situasjon:""}},version:A,currentRoute:_,søknadGjelderEtNyttBarn:!0},m=F,k=h,po={title:"steps/Søkersituasjon",component:c,decorators:[x,M,g]},d=({context:u,søkerinfo:f})=>t(S,{mock:l=>{l.onPost("/storage").reply(200,void 0)},children:t(j,{søknad:u,søkerinfo:f,children:t(c,{})})}),o=d.bind({});o.args={context:k,søkerinfo:m,kjønn:"K"};const r=d.bind({});r.args={context:k,søkerinfo:{søker:{...m,kjønn:"M"}},kjønn:"M"};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
//# sourceMappingURL=Søkersituasjon.stories-ff2ba330.js.map
