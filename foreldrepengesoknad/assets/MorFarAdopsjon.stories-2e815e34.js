import{j as a}from"./jsx-runtime-670450c2.js";import{w as F}from"./withIntl-256f5574.js";import{w as T}from"./withRouter-49afce40.js";import{w as x,F as D}from"./ForeldrepengerStateMock-bba91a47.js";import{A as _}from"./AxiosMock-b933719e.js";import{R}from"./api-d5181000.js";import{_ as L,a as I,b as y,c as P}from"./soknadFarSøkerAdopsjon-62cb1108.js";import{s as E,a as K}from"./stønadskonto80-8e203d8f.js";import{s as N,a as O}from"./stønadskontoDeltUttak100-ce558aaf.js";import{U}from"./UttaksplanInfo-de1bec98.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-c31d728b.js";import"./validationUtils-66e9f470.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-d26bb35c.js";import"./dateUtils-d42d639b.js";import"./getTypedFormComponents-28c08f2e.js";import"./mapSøkerinfoDTO-840687f5.js";import"./useFortsettSøknadSenere-ba3a7a11.js";import"./amplitude-982d123d.js";import"./globalUtil-9d9e0ee4.js";import"./apiInterceptor-0ef43019.js";import"./AnnenForelder-5c5d4f7f.js";import"./personUtils-73e6c319.js";import"./Personkort-1c3e04e3.js";import"./periodeUtils-58a902a8.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-e188c5e6.js";import"./index-47edccfa.js";import"./annenForelderUtils-6bc97615.js";import"./constants-c4bc2eb8.js";import"./LenkeKnapp-ee13c829.js";import"./InfoOmSøknaden-f9aaed03.js";import"./Sirkelmaske-490eed58.js";import"./Foreldrepar-14459fa6.js";import"./InnholdMedIllustrasjon-79921fb7.js";import"./links-b36d21ab.js";import"./Periodene-097652f1.js";import"./useOnValidSubmit-a244e3b1.js";import"./useSaveLoadedRoute-5492edc3.js";import"./vedleggUtils-0ff76b1e.js";import"./Attachment-a8e5b8d1.js";import"./eksisterendeSakUtils-33b6fff3.js";import"./velkommenUtils-1dae2d96.js";import"./Fieldset-b0352ef9.js";import"./formUtils-92a9779d.js";const G="/innsyn/v2/annenPartVedtak",i="/uttak-url/konto",n=L,k=I,j=y,u=P,ho={title:"steps/uttaksplan-info/MorFarAdopsjon",component:U,decorators:[T,F,x]},p=r=>a(_,{mock:s=>{s.onPost(G).replyOnce(200,void 0,R.FINISHED),s.onGet(i).replyOnce(200,r.stønadskonto100),s.onGet(i).replyOnce(200,r.stønadskonto80)},children:a(D,{søknad:r.context,søkerinfo:r.søkerinfo,children:a(U,{})})}),o=p.bind({});o.args={stønadskonto100:E,stønadskonto80:K,context:n,søkerinfo:u};const t=p.bind({});t.args={stønadskonto100:N,stønadskonto80:O,context:{...n,søknad:{...n.søknad,søker:{...n.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:u};const e=p.bind({});e.args={stønadskonto100:N,stønadskonto80:O,context:{...k,søknad:{...k.søknad,søker:{...k.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"TALENTFULL",etternavn:"MYGG",fnr:"19047815714",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:j};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,S,M;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(M=(S=t.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var f,A,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(g=(A=e.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const wo=["UttaksplanMedAleneomsorg","UttaksplanMedDeltUttakDerMorSøker","UttaksplanMedDeltUttakDerFarSøker"];export{o as UttaksplanMedAleneomsorg,e as UttaksplanMedDeltUttakDerFarSøker,t as UttaksplanMedDeltUttakDerMorSøker,wo as __namedExportsOrder,ho as default};
//# sourceMappingURL=MorFarAdopsjon.stories-2e815e34.js.map
