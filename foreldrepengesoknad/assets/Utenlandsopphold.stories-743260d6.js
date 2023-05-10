import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-256f5574.js";import{w as c}from"./withRouter-49afce40.js";import{w as d,F as k}from"./ForeldrepengerStateMock-bba91a47.js";import{A as l}from"./AxiosMock-b933719e.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-31b2e0dd.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-c31d728b.js";import"./validationUtils-66e9f470.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-d26bb35c.js";import"./dateUtils-d42d639b.js";import"./getTypedFormComponents-28c08f2e.js";import"./mapSøkerinfoDTO-840687f5.js";import"./useFortsettSøknadSenere-ba3a7a11.js";import"./amplitude-982d123d.js";import"./api-d5181000.js";import"./apiInterceptor-0ef43019.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-a244e3b1.js";import"./useSaveLoadedRoute-5492edc3.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-0ff76b1e.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-58a902a8.js";import"./Periodene-097652f1.js";import"./index-47edccfa.js";import"./formUtils-92a9779d.js";const x=f,u=M,eo={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
//# sourceMappingURL=Utenlandsopphold.stories-743260d6.js.map
