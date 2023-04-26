import{j as l}from"./jsx-runtime-670450c2.js";import{w as q}from"./withIntl-b4aa299e.js";import{w as z}from"./withRouter-71d505f2.js";import{w as H,F as J}from"./ForeldrepengerStateMock-1afbcff7.js";import{A as Q}from"./AxiosMock-3a64d69b.js";import{_ as V}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as W}from"./soknadMedEttBarn-66625a0c.js";import{A as D}from"./AnnenForelder-ccd610a1.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-a02d6ab7.js";import"./validationUtils-aa1d1f93.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c113ad03.js";import"./dateUtils-06999df8.js";import"./getTypedFormComponents-373c5aee.js";import"./mapSøkerinfoDTO-cc88f2a7.js";import"./useFortsettSøknadSenere-e922abdf.js";import"./apiInterceptor-b5d8b8e4.js";import"./amplitude-982d123d.js";import"./api-02d91960.js";import"./globalUtil-9d9e0ee4.js";import"./FormikFileUploader-f45707d9.js";import"./AttachmentList-52286a6a.js";import"./Attachment-62110eb2.js";import"./vedleggUtils-681932f9.js";import"./Attachment-a8e5b8d1.js";import"./Skjemanummer-77149054.js";import"./formUtils-07817100.js";import"./useOnValidSubmit-34cf285a.js";import"./useSaveLoadedRoute-bcb66eb1.js";import"./AnnenForelder-5c5d4f7f.js";import"./periodeUtils-dfdcada7.js";import"./Periodene-7a4ae12e.js";import"./index-47edccfa.js";import"./RegistrertePersonalia-82eeef9c.js";import"./personUtils-3224fb9b.js";import"./useSøkerinfo-3096846c.js";import"./links-b36d21ab.js";const r=V,n=W,qn={title:"steps/AnnenForelder",component:D,decorators:[z,q,H]},e=({context:C,søkerinfo:Y})=>l(Q,{mock:m=>{m.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),m.onPost("/storage").reply(200,void 0)},children:l(J,{søknad:C,søkerinfo:Y,children:l(D,{})})}),o=e.bind({});o.args={context:{...n,søknad:{...n.søknad,barn:{...n.søknad.barn,fnr:"21091981146"}}},søkerinfo:r};const t=e.bind({});t.args={context:{...n,søknad:{...n.søknad,annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{søker:{...r,barn:[]}}};const a=e.bind({});a.args={context:{...n,søknad:{...n.søknad,annenForelder:{fornavn:"annen forelder",kanIkkeOppgis:!1}}},søkerinfo:{søker:{...r,barn:[]}}};const s=e.bind({});s.args={context:{...n,søknad:{...n.søknad,annenForelder:{fornavn:"Tom",fnr:"123456789",kanIkkeOppgis:!1}}},søkerinfo:{søker:{...r,barn:[{fornavn:"Ben",annenForelder:{fnr:"999999999"}}]}}};const c=e.bind({});c.args={context:{...n,søknad:{...n.søknad,barn:{...n.søknad.barn,fnr:"21091981146"},søkersituasjon:{situasjon:"fødsel",rolle:"far"}}},søkerinfo:{søker:{...r.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"TALENTFULL",etternavn:"MYGG"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"K"}]}}};const k=e.bind({});k.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"mor"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...r,søker:{...r.søker,barn:[]}}};const i=e.bind({});i.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"medmor"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...r,søker:{...r.søker,kjønn:"K",barn:[]}}};const d=e.bind({});d.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"far"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...r,søker:{...r.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[]}}};const p=e.bind({});p.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"far"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...r,søker:{...r.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[],sivilstand:{type:"GIFT"}}}};var f,M,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(g=(M=o.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var u,F,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(x=(F=t.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var A,S,P;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var O,B,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(j=(B=c.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var U,E,I;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(I=(E=k.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,T,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,G,h;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...(h=(G=d.parameters)==null?void 0:G.docs)==null?void 0:h.source}}};var K,N,R;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`({
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const zn=["Default","SkalOppgiPersonalia","SkalOppgiPersonaliaNavnMangler","SkalOppgiPersonaliaFnrPåAnnenForelderOgBarnErUlike","ForFar","MorUfødtBarn","MedmorUfødtBarn","FarUfødtBarn","FarGiftUfødtBarn"];export{o as Default,p as FarGiftUfødtBarn,d as FarUfødtBarn,c as ForFar,i as MedmorUfødtBarn,k as MorUfødtBarn,t as SkalOppgiPersonalia,s as SkalOppgiPersonaliaFnrPåAnnenForelderOgBarnErUlike,a as SkalOppgiPersonaliaNavnMangler,zn as __namedExportsOrder,qn as default};
//# sourceMappingURL=AnnenForelder.stories-d6912f44.js.map
