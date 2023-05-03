import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-11ed63ed.js";import{w as c}from"./withRouter-108f9828.js";import{w as d,F as k}from"./ForeldrepengerStateMock-dad59d19.js";import{A as l}from"./AxiosMock-f4c00f71.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-2d440b98.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-917886a5.js";import"./validationUtils-f899988d.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ec0625ef.js";import"./dateUtils-fd1a452e.js";import"./getTypedFormComponents-b4bc17b3.js";import"./mapSøkerinfoDTO-af2c145f.js";import"./useFortsettSøknadSenere-d39d0618.js";import"./amplitude-982d123d.js";import"./api-2f366e60.js";import"./apiInterceptor-8762a5cd.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-26b166a9.js";import"./useSaveLoadedRoute-d529cba6.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-cfa4fd06.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-3c01c56e.js";import"./Periodene-7caf1c02.js";import"./index-47edccfa.js";import"./formUtils-8bf80793.js";const x=f,u=M,eo={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
//# sourceMappingURL=Utenlandsopphold.stories-0bcb3402.js.map
