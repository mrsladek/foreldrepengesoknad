import{j as c}from"./jsx-runtime-670450c2.js";import{w as x}from"./withIntl-050ca3c0.js";import{w as E}from"./withRouter-628257d8.js";import{w as _,F as P}from"./ForeldrepengerStateMock-5d6f44b7.js";import{A as L}from"./AxiosMock-a0199d40.js";import{R as D}from"./api-71a86de1.js";import{_ as v,a as y,c as j,b as H}from"./soknadFarSøkerAdopsjon-62cb1108.js";import{s as p,a as k}from"./stønadskonto80-8e203d8f.js";import{U as T}from"./UttaksplanInfo-d5429235.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-386da2d3.js";import"./validationUtils-7cfc3be6.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-0fd43c6f.js";import"./dateUtils-9634bd53.js";import"./getTypedFormComponents-f679b5fe.js";import"./mapSøkerinfoDTO-d187e922.js";import"./useFortsettSøknadSenere-90fa8a07.js";import"./amplitude-982d123d.js";import"./globalUtil-9d9e0ee4.js";import"./apiInterceptor-3502d29a.js";import"./AnnenForelder-5c5d4f7f.js";import"./personUtils-076d0723.js";import"./Personkort-42acd995.js";import"./periodeUtils-859c6f38.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-7587e961.js";import"./index-47edccfa.js";import"./annenForelderUtils-4d0c3d35.js";import"./constants-c4bc2eb8.js";import"./LenkeKnapp-ee13c829.js";import"./InfoOmSøknaden-6ae15173.js";import"./Sirkelmaske-dd7e859e.js";import"./Foreldrepar-c2cbac98.js";import"./InnholdMedIllustrasjon-d82e4ccd.js";import"./links-b36d21ab.js";import"./Periodene-34200d3f.js";import"./useOnValidSubmit-ad890c0b.js";import"./useSaveLoadedRoute-6f0560d8.js";import"./vedleggUtils-7d9bbbb7.js";import"./Attachment-a8e5b8d1.js";import"./eksisterendeSakUtils-db6648b3.js";import"./velkommenUtils-ab74a7e6.js";import"./Fieldset-b0352ef9.js";import"./formUtils-57a6c846.js";const K="/innsyn/v2/annenPartVedtak",m="/uttak-url/konto",n=v,a=y,h=j,l=H,hr={title:"steps/uttaksplan-info/MorFarAnnenForelderHarRettIEØS",component:T,decorators:[E,x,_]},i=s=>c(L,{mock:d=>{d.onPost(K).replyOnce(200,void 0,D.FINISHED),d.onGet(m).replyOnce(200,s.stønadskonto100),d.onGet(m).replyOnce(200,s.stønadskonto80)},children:c(P,{søknad:s.context,søkerinfo:s.søkerinfo,children:c(T,{})})}),r=i.bind({});r.args={stønadskonto100:p,stønadskonto80:k,context:{...n,søknad:{...n.søknad,annenForelder:{fornavn:"Far",etternavn:"EØS",fnr:"1111UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:h};const e=i.bind({});e.args={stønadskonto100:p,stønadskonto80:k,context:{...a,søknad:{...a.søknad,annenForelder:{fornavn:"Mor",etternavn:"EØS",fnr:"2222UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:l};const o=i.bind({});o.args={stønadskonto100:p,stønadskonto80:k,context:{...a,søknad:{...a.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:{...a.søknad.barn,fødselsdatoer:["2022-06-14","2022-06-14"],antallBarn:2,adopsjonsdato:void 0,adoptertIUtlandet:void 0},annenForelder:{fornavn:"Mor",etternavn:"EØS",fnr:"2222UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:l};const t=i.bind({});t.args={stønadskonto100:p,stønadskonto80:k,context:{...n,søknad:{...n.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{...n.søknad.barn,fødselsdatoer:["2022-06-14"],termindato:["2022-08-14"],antallBarn:1,adopsjonsdato:void 0,adoptertIUtlandet:void 0,type:"født"},annenForelder:{fornavn:"Mor",etternavn:"EØS",fnr:"2222UUUUU",harRettPåForeldrepengerINorge:!1,harRettPåForeldrepengerIEØS:!0,kanIkkeOppgis:!1}}},søkerinfo:l};var S,f,M;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>
                <UttaksplanInfo />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var g,U,F;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>
                <UttaksplanInfo />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(F=(U=e.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var O,A,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>
                <UttaksplanInfo />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(N=(A=o.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var u,I,R;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>
                <UttaksplanInfo />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(R=(I=t.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const Gr=["UttaksplanAdopsjonMorSøkerFarHarRettIEOS","UttaksplanAdopsjonFarSøkerMorHarRettIEOS","UttaksplanFødselFarSøkerMorHarRettIEOSTvillinger","UttaksplanFødselMorSøkerFarHarRettIEOSPrematur"];export{e as UttaksplanAdopsjonFarSøkerMorHarRettIEOS,r as UttaksplanAdopsjonMorSøkerFarHarRettIEOS,o as UttaksplanFødselFarSøkerMorHarRettIEOSTvillinger,t as UttaksplanFødselMorSøkerFarHarRettIEOSPrematur,Gr as __namedExportsOrder,hr as default};
//# sourceMappingURL=MorFarAnnenForelderHarRettIEOS.stories-32f30753.js.map
