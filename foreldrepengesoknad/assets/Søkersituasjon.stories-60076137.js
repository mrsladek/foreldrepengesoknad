import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-11ed63ed.js";import{w as x}from"./withRouter-108f9828.js";import{w as g,F as j}from"./ForeldrepengerStateMock-dad59d19.js";import{A as S}from"./AxiosMock-f4c00f71.js";import{_ as F}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{S as c}from"./Søkersituasjon-0d818235.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-917886a5.js";import"./validationUtils-f899988d.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ec0625ef.js";import"./dateUtils-fd1a452e.js";import"./getTypedFormComponents-b4bc17b3.js";import"./mapSøkerinfoDTO-af2c145f.js";import"./useFortsettSøknadSenere-d39d0618.js";import"./amplitude-982d123d.js";import"./api-2f366e60.js";import"./apiInterceptor-8762a5cd.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-26b166a9.js";import"./useSaveLoadedRoute-d529cba6.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-cfa4fd06.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-3c01c56e.js";import"./Periodene-7caf1c02.js";import"./index-47edccfa.js";import"./useSøkerinfo-097f4ccc.js";const A=4,_="/soknad/uttaksplan-info",h={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{rolle:"",situasjon:""}},version:A,currentRoute:_,søknadGjelderEtNyttBarn:!0},m=F,k=h,po={title:"steps/Søkersituasjon",component:c,decorators:[x,M,g]},d=({context:u,søkerinfo:f})=>t(S,{mock:l=>{l.onPost("/storage").reply(200,void 0)},children:t(j,{søknad:u,søkerinfo:f,children:t(c,{})})}),o=d.bind({});o.args={context:k,søkerinfo:m,kjønn:"K"};const r=d.bind({});r.args={context:k,søkerinfo:{søker:{...m,kjønn:"M"}},kjønn:"M"};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
//# sourceMappingURL=Søkersituasjon.stories-60076137.js.map
