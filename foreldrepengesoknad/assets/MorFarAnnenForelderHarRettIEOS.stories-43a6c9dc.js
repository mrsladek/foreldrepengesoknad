import{j as c}from"./jsx-runtime-670450c2.js";import{w as x}from"./withIntl-b5e53d30.js";import{w as E}from"./withRouter-55f84021.js";import{w as _,F as P}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as L}from"./AxiosMock-b75fb94c.js";import{R as D}from"./useSaveLoadedRoute-c343dcd2.js";import{_ as v,a as y,c as j,b as H}from"./soknadFarSøkerAdopsjon-d6dada3a.js";import{s as p,a as k}from"./stønadskonto80-8e203d8f.js";import{U as T}from"./UttaksplanInfo-8ae8d6d7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./globalUtil-9d9e0ee4.js";import"./AnnenForelder-5c5d4f7f.js";import"./veilederpanel-a75452fb.js";import"./VeilederNormal-911fc82a.js";import"./personUtils-f9b2b569.js";import"./index-781d69e8.js";import"./Personkort-85419810.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-2468b7ec.js";import"./index-47edccfa.js";import"./annenForelderUtils-11f38452.js";import"./LenkeKnapp-ef94e81e.js";import"./UtvidetInformasjon-33c789c9.js";import"./index-c489149c.js";import"./InfoOmSøknaden-052b4506.js";import"./Sirkelmaske-4ecab28a.js";import"./Foreldrepar-73a1c3e1.js";import"./InnholdMedIllustrasjon-d11331a2.js";import"./links-4dae79fa.js";import"./index-feafd352.js";import"./useOnValidSubmit-cccef928.js";import"./eksisterendeSakUtils-537f1352.js";import"./velkommenUtils-1673046b.js";import"./index-c27d1db1.js";import"./Veileder-6aa4416d.js";import"./Fieldset-f8130af3.js";import"./formUtils-05ec5f16.js";import"./spinner-dfd69c11.js";const K="/innsyn/v2/annenPartVedtak",m="/uttak-url/konto",n=v,a=y,h=j,l=H,Vr={title:"steps/uttaksplan-info/MorFarAnnenForelderHarRettIEØS",component:T,decorators:[E,x,_]},i=s=>c(L,{mock:d=>{d.onPost(K).replyOnce(200,void 0,D.FINISHED),d.onGet(m).replyOnce(200,s.stønadskonto100),d.onGet(m).replyOnce(200,s.stønadskonto80)},children:c(P,{søknad:s.context,søkerinfo:s.søkerinfo,children:c(T,{})})}),r=i.bind({});r.args={stønadskonto100:p,stønadskonto80:k,context:{...n,søknad:{...n.søknad,annenForelder:{fornavn:"Far",etternavn:"EØS",fnr:"1111UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:h};const e=i.bind({});e.args={stønadskonto100:p,stønadskonto80:k,context:{...a,søknad:{...a.søknad,annenForelder:{fornavn:"Mor",etternavn:"EØS",fnr:"2222UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:l};const o=i.bind({});o.args={stønadskonto100:p,stønadskonto80:k,context:{...a,søknad:{...a.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:{...a.søknad.barn,fødselsdatoer:["2022-06-14","2022-06-14"],antallBarn:2,adopsjonsdato:void 0,adoptertIUtlandet:void 0},annenForelder:{fornavn:"Mor",etternavn:"EØS",fnr:"2222UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:l};const t=i.bind({});t.args={stønadskonto100:p,stønadskonto80:k,context:{...n,søknad:{...n.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{...n.søknad.barn,fødselsdatoer:["2022-06-14"],termindato:["2022-08-14"],antallBarn:1,adopsjonsdato:void 0,adoptertIUtlandet:void 0,type:"født"},annenForelder:{fornavn:"Mor",etternavn:"EØS",fnr:"2222UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:l};var S,f,M;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>\r
                <UttaksplanInfo />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var g,U,F;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>\r
                <UttaksplanInfo />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(F=(U=e.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var O,A,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>\r
                <UttaksplanInfo />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(N=(A=o.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var u,I,R;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>\r
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>\r
                <UttaksplanInfo />\r
            </ForeldrepengerStateMock>\r
        </AxiosMock>;
}`,...(R=(I=t.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const zr=["UttaksplanAdopsjonMorSøkerFarHarRettIEOS","UttaksplanAdopsjonFarSøkerMorHarRettIEOS","UttaksplanFødselFarSøkerMorHarRettIEOSTvillinger","UttaksplanFødselMorSøkerFarHarRettIEOSPrematur"];export{e as UttaksplanAdopsjonFarSøkerMorHarRettIEOS,r as UttaksplanAdopsjonMorSøkerFarHarRettIEOS,o as UttaksplanFødselFarSøkerMorHarRettIEOSTvillinger,t as UttaksplanFødselMorSøkerFarHarRettIEOSPrematur,zr as __namedExportsOrder,Vr as default};
//# sourceMappingURL=MorFarAnnenForelderHarRettIEOS.stories-43a6c9dc.js.map
