import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-050ca3c0.js";import{w as c}from"./withRouter-3e49f310.js";import{w as d,F as k}from"./ForeldrepengerStateMock-08a93643.js";import{A as l}from"./AxiosMock-6645fab2.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-cefa7a00.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-386da2d3.js";import"./validationUtils-7cfc3be6.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-7eb485b7.js";import"./dateUtils-5f54135d.js";import"./getTypedFormComponents-f679b5fe.js";import"./mapSøkerinfoDTO-ad3919e0.js";import"./useFortsettSøknadSenere-43262bdf.js";import"./amplitude-982d123d.js";import"./api-cf89742a.js";import"./apiInterceptor-3502d29a.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-086fdee2.js";import"./useSaveLoadedRoute-7445d63f.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-7d9bbbb7.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-083ffd55.js";import"./Periodene-aa48a22c.js";import"./index-47edccfa.js";import"./formUtils-57a6c846.js";const x=f,u=M,eo={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
//# sourceMappingURL=Utenlandsopphold.stories-d111e1df.js.map
