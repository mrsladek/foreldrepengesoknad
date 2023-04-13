import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-b5e53d30.js";import{w as c}from"./withRouter-55f84021.js";import{w as d,F as k}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as l}from"./AxiosMock-b75fb94c.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-2c8a99e9.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-22fef44c.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./useSaveLoadedRoute-c343dcd2.js";import"./AnnenForelder-5c5d4f7f.js";import"./globalUtil-9d9e0ee4.js";import"./UtvidetInformasjon-33c789c9.js";import"./useOnValidSubmit-cccef928.js";import"./index-47edccfa.js";import"./index-781d69e8.js";import"./index-feafd352.js";import"./formUtils-05ec5f16.js";const x=f,u=M,io={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <Utenlandsopphold />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(p=(e=o.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const no=["Default"];export{o as Default,no as __namedExportsOrder,io as default};
//# sourceMappingURL=Utenlandsopphold.stories-dbcee589.js.map
