import{j as p}from"./jsx-runtime-670450c2.js";import{w as T}from"./withIntl-b5e53d30.js";import{w as _}from"./withRouter-55f84021.js";import{w as j,F as w}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as I}from"./AxiosMock-b75fb94c.js";import{_ as L}from"./søkerinfoKvinneMedEttBarn-2c8a99e9.js";import{_ as h}from"./soknadMedEttBarn-66625a0c.js";import{A as O}from"./AnnenForelder-6c7403a6.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./useSaveLoadedRoute-c343dcd2.js";import"./AnnenForelder-5c5d4f7f.js";import"./globalUtil-9d9e0ee4.js";import"./UtvidetInformasjon-33c789c9.js";import"./FormikFileUploader-235a07ed.js";import"./AttachmentList-851c2f67.js";import"./Attachment-07dde96a.js";import"./spinner-dfd69c11.js";import"./VedleggIkon-68edc104.js";import"./assertThisInitialized-e784747a.js";import"./index-781d69e8.js";import"./Skjemanummer-77149054.js";import"./formUtils-05ec5f16.js";import"./index-feafd352.js";import"./useOnValidSubmit-cccef928.js";import"./index-47edccfa.js";import"./VeilederNormal-911fc82a.js";import"./veilederpanel-a75452fb.js";import"./index-c489149c.js";import"./RegistrertePersonalia-7c5e16ba.js";import"./personUtils-f9b2b569.js";import"./useSøkerinfo-2468b7ec.js";const s=L,r=h,hr={title:"steps/AnnenForelder",component:O,decorators:[_,T,j]},i=({context:y,søkerinfo:E})=>p(I,{mock:c=>{c.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),c.onPost("/storage").reply(200,void 0)},children:p(w,{søknad:y,søkerinfo:E,children:p(O,{})})}),o=i.bind({});o.args={context:{...r,søknad:{...r.søknad,barn:{...r.søknad.barn,fnr:"21091981146"}}},søkerinfo:s};const n=i.bind({});n.args={context:{...r,søknad:{...r.søknad,annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{søker:{...s,barn:[]}}};const e=i.bind({});e.args={context:{...r,søknad:{...r.søknad,annenForelder:{fornavn:"annen forelder",kanIkkeOppgis:!1}}},søkerinfo:{søker:{...s,barn:[]}}};const t=i.bind({});t.args={context:{...r,søknad:{...r.søknad,annenForelder:{fornavn:"Tom",fnr:"123456789",kanIkkeOppgis:!1}}},søkerinfo:{søker:{...s,barn:[{fornavn:"Ben",annenForelder:{fnr:"999999999"}}]}}};const a=i.bind({});a.args={context:{...r,søknad:{...r.søknad,barn:{...r.søknad.barn,fnr:"21091981146"},søkersituasjon:{situasjon:"fødsel",rolle:"far"}}},søkerinfo:{søker:{...s.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"TALENTFULL",etternavn:"MYGG"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"K"}]}}};var k,d,m;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <AnnenForelder />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,f,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <AnnenForelder />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var M,F,x;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <AnnenForelder />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(x=(F=e.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var u,A,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <AnnenForelder />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var P,v,b;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>\r
                <AnnenForelder />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const Ur=["Default","SkalOppgiPersonalia","SkalOppgiPersonaliaNavnMangler","SkalOppgiPersonaliaFnrPåAnnenForelderOgBarnErUlike","ForFar"];export{o as Default,a as ForFar,n as SkalOppgiPersonalia,t as SkalOppgiPersonaliaFnrPåAnnenForelderOgBarnErUlike,e as SkalOppgiPersonaliaNavnMangler,Ur as __namedExportsOrder,hr as default};
//# sourceMappingURL=AnnenForelder.stories-8245f97b.js.map
