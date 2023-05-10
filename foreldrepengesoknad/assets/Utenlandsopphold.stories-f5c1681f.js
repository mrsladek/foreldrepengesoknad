import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-2cd0961f.js";import{w as c}from"./withRouter-39938b0b.js";import{w as d,F as k}from"./ForeldrepengerStateMock-de0489e8.js";import{A as l}from"./AxiosMock-c0c886b0.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-a4e3609e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-06e2693f.js";import"./validationUtils-9d5f1d7f.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-bef338a8.js";import"./dateUtils-1f16f8ca.js";import"./getTypedFormComponents-eb1a726d.js";import"./mapSøkerinfoDTO-766e3371.js";import"./useFortsettSøknadSenere-45d26093.js";import"./amplitude-982d123d.js";import"./api-7c8a1682.js";import"./apiInterceptor-d84503f0.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-ac4aac13.js";import"./useSaveLoadedRoute-f067a427.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-5e07fd2f.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-3b0dcc11.js";import"./Periodene-e4ab6e5b.js";import"./index-47edccfa.js";import"./formUtils-d2603244.js";const x=f,u=M,eo={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <Utenlandsopphold />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(p=(e=o.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const po=["Default"];export{o as Default,po as __namedExportsOrder,eo as default};
//# sourceMappingURL=Utenlandsopphold.stories-f5c1681f.js.map
