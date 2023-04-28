import{j as i}from"./jsx-runtime-670450c2.js";import{w as A}from"./withIntl-11ed63ed.js";import{w as T}from"./withRouter-56f02fc8.js";import{w as U,F as D}from"./ForeldrepengerStateMock-6e69094b.js";import{A as L}from"./AxiosMock-9f662219.js";import{R as _}from"./api-f9c5bd14.js";import{s as P,a as x}from"./stønadskonto80-8e203d8f.js";import{s as I,a as G}from"./stønadskontoDeltUttak100-ce558aaf.js";import{U as N}from"./UttaksplanInfo-8012aa00.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-917886a5.js";import"./validationUtils-f899988d.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ada7a5d2.js";import"./dateUtils-c998f5da.js";import"./getTypedFormComponents-b4bc17b3.js";import"./mapSøkerinfoDTO-a639ed4c.js";import"./useFortsettSøknadSenere-b63d2ee4.js";import"./amplitude-982d123d.js";import"./globalUtil-9d9e0ee4.js";import"./apiInterceptor-8762a5cd.js";import"./AnnenForelder-5c5d4f7f.js";import"./personUtils-75f6963a.js";import"./Personkort-63c40c3f.js";import"./periodeUtils-a6071c84.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-dfcee13b.js";import"./index-47edccfa.js";import"./annenForelderUtils-8919e2a2.js";import"./constants-c4bc2eb8.js";import"./LenkeKnapp-ee13c829.js";import"./InfoOmSøknaden-d5004a8f.js";import"./Sirkelmaske-d262a687.js";import"./Foreldrepar-9f3c7002.js";import"./InnholdMedIllustrasjon-167f4189.js";import"./links-b36d21ab.js";import"./Periodene-00e04fd4.js";import"./useOnValidSubmit-fb8ac4dd.js";import"./useSaveLoadedRoute-b22bd40e.js";import"./vedleggUtils-cfa4fd06.js";import"./Attachment-a8e5b8d1.js";import"./eksisterendeSakUtils-c0aeb441.js";import"./velkommenUtils-27d89f17.js";import"./Fieldset-b0352ef9.js";import"./formUtils-8bf80793.js";const K={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"}]}},v=4,y="/soknad/uttaksplan-info",b={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{type:"født",fødselsdatoer:["2021-03-15"],antallBarn:1,datoForAleneomsorg:"",dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{språkkode:"nb"},informasjonOmUtenlandsopphold:{tidligereOpphold:[],senereOpphold:[]},erEndringssøknad:!1,tilleggsopplysninger:{}},version:v,currentRoute:y,søknadGjelderEtNyttBarn:!0},h={FORELDREPENGER:273,FORELDREPENGER_FØR_FØDSEL:15},j={farRundtFødsel:0,generellMinsterett:0,toTette:0},w={kontoer:h,minsteretter:j},B={FORELDREPENGER:323,FORELDREPENGER_FØR_FØDSEL:15},V={farRundtFødsel:0,generellMinsterett:0,toTette:0},$={kontoer:B,minsteretter:V},q={MØDREKVOTE:95,FEDREKVOTE:95,FELLESPERIODE:195,FORELDREPENGER_FØR_FØDSEL:15,FLERBARNSDAGER:105},C={farRundtFødsel:0,generellMinsterett:0,toTette:0},H={kontoer:q,minsteretter:C},Y={MØDREKVOTE:75,FEDREKVOTE:75,FELLESPERIODE:165,FORELDREPENGER_FØR_FØDSEL:15,FLERBARNSDAGER:85},z={farRundtFødsel:0,generellMinsterett:0,toTette:0},J={kontoer:Y,minsteretter:z},Q="/innsyn/v2/annenPartVedtak",d="/uttak-url/konto",a=K,e=b,Qe={title:"steps/uttaksplan-info/MorFødsel",component:N,decorators:[T,A,U]},k=s=>i(L,{mock:p=>{p.onPost(Q).replyOnce(200,void 0,_.FINISHED),p.onGet(d).replyOnce(200,s.stønadskonto100),p.onGet(d).replyOnce(200,s.stønadskonto80)},children:i(D,{søknad:s.context,søkerinfo:s.søkerinfo,children:i(N,{})})}),t=k.bind({});t.args={stønadskonto100:P,stønadskonto80:x,context:e,søkerinfo:a};const n=k.bind({});n.args={stønadskonto100:w,stønadskonto80:$,context:{...e,søknad:{...e.søknad,barn:{...e.søknad.barn,fødselsdatoer:["2021-01-11"],termindato:"2021-03-11"}}},søkerinfo:a};const o=k.bind({});o.args={stønadskonto100:I,stønadskonto80:G,context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:a};const r=k.bind({});r.args={stønadskonto100:J,stønadskonto80:H,context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},barn:{...e.søknad.barn,antallBarn:2},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:a};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var E,f,M;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var g,R,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var u,O,F;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(F=(O=r.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const We=["UttaksplanMedAleneomsorg","UttaksplanMedPrematurFødsel","UttaksplanMedDeltUttak","UttaksplanMedFlerbarnsukerTvillinger"];export{t as UttaksplanMedAleneomsorg,o as UttaksplanMedDeltUttak,r as UttaksplanMedFlerbarnsukerTvillinger,n as UttaksplanMedPrematurFødsel,We as __namedExportsOrder,Qe as default};
//# sourceMappingURL=MorFodsel.stories-f2e94b1c.js.map
