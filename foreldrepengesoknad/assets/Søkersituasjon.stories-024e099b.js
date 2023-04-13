import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-b5e53d30.js";import{w as x}from"./withRouter-55f84021.js";import{w as g,F as j}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as S}from"./AxiosMock-b75fb94c.js";import{_ as F}from"./søkerinfoKvinneMedEttBarn-2c8a99e9.js";import{S as c}from"./Søkersituasjon-17ac7a87.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./useSaveLoadedRoute-c343dcd2.js";import"./AnnenForelder-5c5d4f7f.js";import"./globalUtil-9d9e0ee4.js";import"./index-feafd352.js";import"./useOnValidSubmit-cccef928.js";import"./index-47edccfa.js";import"./useSøkerinfo-2468b7ec.js";const A=4,_="/soknad/uttaksplan-info",h={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{rolle:"",situasjon:""}},version:A,currentRoute:_,søknadGjelderEtNyttBarn:!0},m=F,k=h,pr={title:"steps/Søkersituasjon",component:c,decorators:[x,M,g]},d=({context:u,søkerinfo:f})=>t(S,{mock:l=>{l.onPost("/storage").reply(200,void 0)},children:t(j,{søknad:u,søkerinfo:f,children:t(c,{})})}),r=d.bind({});r.args={context:k,søkerinfo:m,kjønn:"K"};const o=d.bind({});o.args={context:k,søkerinfo:{søker:{...m,kjønn:"M"}},kjønn:"M"};var e,n,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <Søkersituasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <Søkersituasjon />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const cr=["Default","Far"];export{r as Default,o as Far,cr as __namedExportsOrder,pr as default};
//# sourceMappingURL=Søkersituasjon.stories-024e099b.js.map
