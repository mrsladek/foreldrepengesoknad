import{j as a}from"./jsx-runtime-670450c2.js";import{w as F}from"./withIntl-b5e53d30.js";import{w as T}from"./withRouter-55f84021.js";import{w as x,F as D}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as _}from"./AxiosMock-b75fb94c.js";import{R}from"./useSaveLoadedRoute-c343dcd2.js";import{_ as L,a as I,b as y,c as P}from"./soknadFarSøkerAdopsjon-d6dada3a.js";import{s as E,a as K}from"./stønadskonto80-8e203d8f.js";import{s as N,a as O}from"./stønadskontoDeltUttak100-ce558aaf.js";import{U}from"./UttaksplanInfo-8ae8d6d7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./globalUtil-9d9e0ee4.js";import"./AnnenForelder-5c5d4f7f.js";import"./veilederpanel-a75452fb.js";import"./VeilederNormal-911fc82a.js";import"./personUtils-f9b2b569.js";import"./index-781d69e8.js";import"./Personkort-85419810.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-2468b7ec.js";import"./index-47edccfa.js";import"./annenForelderUtils-11f38452.js";import"./LenkeKnapp-ef94e81e.js";import"./UtvidetInformasjon-33c789c9.js";import"./index-c489149c.js";import"./InfoOmSøknaden-052b4506.js";import"./Sirkelmaske-4ecab28a.js";import"./Foreldrepar-73a1c3e1.js";import"./InnholdMedIllustrasjon-d11331a2.js";import"./links-4dae79fa.js";import"./index-feafd352.js";import"./useOnValidSubmit-cccef928.js";import"./eksisterendeSakUtils-537f1352.js";import"./velkommenUtils-1673046b.js";import"./index-c27d1db1.js";import"./Veileder-6aa4416d.js";import"./Fieldset-f8130af3.js";import"./formUtils-05ec5f16.js";import"./spinner-dfd69c11.js";const G="/innsyn/v2/annenPartVedtak",i="/uttak-url/konto",n=L,p=I,j=y,u=P,Yo={title:"steps/uttaksplan-info/MorFarAdopsjon",component:U,decorators:[T,F,x]},k=e=>a(_,{mock:s=>{s.onPost(G).replyOnce(200,void 0,R.FINISHED),s.onGet(i).replyOnce(200,e.stønadskonto100),s.onGet(i).replyOnce(200,e.stønadskonto80)},children:a(D,{søknad:e.context,søkerinfo:e.søkerinfo,children:a(U,{})})}),o=k.bind({});o.args={stønadskonto100:E,stønadskonto80:K,context:n,søkerinfo:u};const r=k.bind({});r.args={stønadskonto100:N,stønadskonto80:O,context:{...n,søknad:{...n.søknad,søker:{...n.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:u};const t=k.bind({});t.args={stønadskonto100:N,stønadskonto80:O,context:{...p,søknad:{...p.søknad,søker:{...p.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"TALENTFULL",etternavn:"MYGG",fnr:"19047815714",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:j};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(g=(A=t.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const zo=["UttaksplanMedAleneomsorg","UttaksplanMedDeltUttakDerMorSøker","UttaksplanMedDeltUttakDerFarSøker"];export{o as UttaksplanMedAleneomsorg,t as UttaksplanMedDeltUttakDerFarSøker,r as UttaksplanMedDeltUttakDerMorSøker,zo as __namedExportsOrder,Yo as default};
//# sourceMappingURL=MorFarAdopsjon.stories-c8a11fa2.js.map
