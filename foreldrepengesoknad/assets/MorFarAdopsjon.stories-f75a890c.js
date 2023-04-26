import{j as a}from"./jsx-runtime-670450c2.js";import{w as F}from"./withIntl-b4aa299e.js";import{w as T}from"./withRouter-71d505f2.js";import{w as x,F as D}from"./ForeldrepengerStateMock-1afbcff7.js";import{A as _}from"./AxiosMock-3a64d69b.js";import{R}from"./api-02d91960.js";import{_ as L,a as I,b as y,c as P}from"./soknadFarSøkerAdopsjon-62cb1108.js";import{s as E,a as K}from"./stønadskonto80-8e203d8f.js";import{s as N,a as O}from"./stønadskontoDeltUttak100-ce558aaf.js";import{U}from"./UttaksplanInfo-a5e4d26b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-a02d6ab7.js";import"./validationUtils-aa1d1f93.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-c113ad03.js";import"./dateUtils-06999df8.js";import"./getTypedFormComponents-373c5aee.js";import"./mapSøkerinfoDTO-cc88f2a7.js";import"./useFortsettSøknadSenere-e922abdf.js";import"./apiInterceptor-b5d8b8e4.js";import"./amplitude-982d123d.js";import"./globalUtil-9d9e0ee4.js";import"./AnnenForelder-5c5d4f7f.js";import"./personUtils-3224fb9b.js";import"./Personkort-33b551aa.js";import"./periodeUtils-dfdcada7.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-3096846c.js";import"./index-47edccfa.js";import"./annenForelderUtils-0aa532b4.js";import"./constants-c4bc2eb8.js";import"./LenkeKnapp-ee13c829.js";import"./InfoOmSøknaden-26941c35.js";import"./Sirkelmaske-d78a61bd.js";import"./Foreldrepar-2fb0bcd4.js";import"./InnholdMedIllustrasjon-e302fedc.js";import"./links-b36d21ab.js";import"./Periodene-7a4ae12e.js";import"./useOnValidSubmit-34cf285a.js";import"./useSaveLoadedRoute-bcb66eb1.js";import"./vedleggUtils-681932f9.js";import"./Attachment-a8e5b8d1.js";import"./eksisterendeSakUtils-1da04758.js";import"./velkommenUtils-8d8f7024.js";import"./Fieldset-b0352ef9.js";import"./formUtils-07817100.js";const G="/innsyn/v2/annenPartVedtak",i="/uttak-url/konto",n=L,k=I,j=y,u=P,ho={title:"steps/uttaksplan-info/MorFarAdopsjon",component:U,decorators:[T,F,x]},p=e=>a(_,{mock:s=>{s.onPost(G).replyOnce(200,void 0,R.FINISHED),s.onGet(i).replyOnce(200,e.stønadskonto100),s.onGet(i).replyOnce(200,e.stønadskonto80)},children:a(D,{søknad:e.context,søkerinfo:e.søkerinfo,children:a(U,{})})}),o=p.bind({});o.args={stønadskonto100:E,stønadskonto80:K,context:n,søkerinfo:u};const r=p.bind({});r.args={stønadskonto100:N,stønadskonto80:O,context:{...n,søknad:{...n.søknad,søker:{...n.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:u};const t=p.bind({});t.args={stønadskonto100:N,stønadskonto80:O,context:{...k,søknad:{...k.søknad,søker:{...k.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"TALENTFULL",etternavn:"MYGG",fnr:"19047815714",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:j};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,S,M;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(M=(S=r.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var f,A,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(g=(A=t.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const wo=["UttaksplanMedAleneomsorg","UttaksplanMedDeltUttakDerMorSøker","UttaksplanMedDeltUttakDerFarSøker"];export{o as UttaksplanMedAleneomsorg,t as UttaksplanMedDeltUttakDerFarSøker,r as UttaksplanMedDeltUttakDerMorSøker,wo as __namedExportsOrder,ho as default};
//# sourceMappingURL=MorFarAdopsjon.stories-f75a890c.js.map
