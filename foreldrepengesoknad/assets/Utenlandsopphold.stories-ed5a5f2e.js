import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-18345af6.js";import{w as c}from"./withRouter-7e1ac14f.js";import{w as d,F as k}from"./ForeldrepengerStateMock-8b539c5f.js";import{A as l}from"./AxiosMock-890ca912.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-5aba832b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-0408c644.js";import"./validationUtils-04f510d3.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c1188673.js";import"./dateUtils-16d28838.js";import"./getTypedFormComponents-660f6676.js";import"./mapSøkerinfoDTO-c67aaa18.js";import"./useFortsettSøknadSenere-4f1097ce.js";import"./amplitude-982d123d.js";import"./api-6bea2c1f.js";import"./apiInterceptor-3e81dc62.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-61e0a308.js";import"./useSaveLoadedRoute-35555b7b.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-1aeee34e.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-569ef513.js";import"./Periodene-881c09d1.js";import"./index-47edccfa.js";import"./formUtils-2b618ea1.js";const x=f,u=M,eo={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
//# sourceMappingURL=Utenlandsopphold.stories-ed5a5f2e.js.map
