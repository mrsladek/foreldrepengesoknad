import{j as i}from"./jsx-runtime-670450c2.js";import{w as A}from"./withIntl-b5e53d30.js";import{w as T}from"./withRouter-55f84021.js";import{w as U,F as L}from"./ForeldrepengerStateMock-08c3c2d8.js";import{A as D}from"./AxiosMock-b75fb94c.js";import{R as _}from"./useSaveLoadedRoute-c343dcd2.js";import{s as P,a as x}from"./stønadskonto80-8e203d8f.js";import{s as I,a as G}from"./stønadskontoDeltUttak100-ce558aaf.js";import{U as N}from"./UttaksplanInfo-8ae8d6d7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-dc729df9.js";import"./validationUtils-67294d5c.js";import"./index-4d501b15.js";import"./index-7e4e529b.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-e0725e39.js";import"./periodeUtils-f04fe3f4.js";import"./FormikFileInput-1aab3cd0.js";import"./index-8e0d1834.js";import"./index-c5a91971.js";import"./lenke-89551c9a.js";import"./index-72275d48.js";import"./index-47f3fb36.js";import"./mapSøkerinfoDTO-f7746f82.js";import"./useFortsettSøknadSenere-e3f0df02.js";import"./vedleggUtils-7804bea0.js";import"./Attachment-a8e5b8d1.js";import"./amplitude-0c6b183c.js";import"./Block-01b0ab76.js";import"./globalUtil-9d9e0ee4.js";import"./AnnenForelder-5c5d4f7f.js";import"./veilederpanel-a75452fb.js";import"./VeilederNormal-911fc82a.js";import"./personUtils-f9b2b569.js";import"./index-781d69e8.js";import"./Personkort-85419810.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-2468b7ec.js";import"./index-47edccfa.js";import"./annenForelderUtils-11f38452.js";import"./LenkeKnapp-ef94e81e.js";import"./UtvidetInformasjon-33c789c9.js";import"./index-c489149c.js";import"./InfoOmSøknaden-052b4506.js";import"./Sirkelmaske-4ecab28a.js";import"./Foreldrepar-73a1c3e1.js";import"./InnholdMedIllustrasjon-d11331a2.js";import"./links-4dae79fa.js";import"./index-feafd352.js";import"./useOnValidSubmit-cccef928.js";import"./eksisterendeSakUtils-537f1352.js";import"./velkommenUtils-1673046b.js";import"./index-c27d1db1.js";import"./Veileder-6aa4416d.js";import"./Fieldset-f8130af3.js";import"./formUtils-05ec5f16.js";import"./spinner-dfd69c11.js";const K={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",ikkeNordiskEøsLand:!1,barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"}]}},v=4,y="/soknad/uttaksplan-info",b={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{type:"født",fødselsdatoer:["2021-03-15"],antallBarn:1,datoForAleneomsorg:"",dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{språkkode:"nb"},informasjonOmUtenlandsopphold:{tidligereOpphold:[],senereOpphold:[]},erEndringssøknad:!1,tilleggsopplysninger:{}},version:v,currentRoute:y,søknadGjelderEtNyttBarn:!0},h={FORELDREPENGER:273,FORELDREPENGER_FØR_FØDSEL:15},j={farRundtFødsel:0,generellMinsterett:0,toTette:0},w={kontoer:h,minsteretter:j},B={FORELDREPENGER:323,FORELDREPENGER_FØR_FØDSEL:15},V={farRundtFødsel:0,generellMinsterett:0,toTette:0},$={kontoer:B,minsteretter:V},q={MØDREKVOTE:95,FEDREKVOTE:95,FELLESPERIODE:195,FORELDREPENGER_FØR_FØDSEL:15,FLERBARNSDAGER:105},C={farRundtFødsel:0,generellMinsterett:0,toTette:0},H={kontoer:q,minsteretter:C},Y={MØDREKVOTE:75,FEDREKVOTE:75,FELLESPERIODE:165,FORELDREPENGER_FØR_FØDSEL:15,FLERBARNSDAGER:85},z={farRundtFødsel:0,generellMinsterett:0,toTette:0},J={kontoer:Y,minsteretter:z},Q="/innsyn/v2/annenPartVedtak",d="/uttak-url/konto",a=K,e=b,nt={title:"steps/uttaksplan-info/MorFødsel",component:N,decorators:[T,A,U]},k=s=>i(D,{mock:p=>{p.onPost(Q).replyOnce(200,void 0,_.FINISHED),p.onGet(d).replyOnce(200,s.stønadskonto100),p.onGet(d).replyOnce(200,s.stønadskonto80)},children:i(L,{søknad:s.context,søkerinfo:s.søkerinfo,children:i(N,{})})}),t=k.bind({});t.args={stønadskonto100:P,stønadskonto80:x,context:e,søkerinfo:a};const r=k.bind({});r.args={stønadskonto100:w,stønadskonto80:$,context:{...e,søknad:{...e.søknad,barn:{...e.søknad.barn,fødselsdatoer:["2021-01-11"],termindato:"2021-03-11"}}},søkerinfo:a};const n=k.bind({});n.args={stønadskonto100:I,stønadskonto80:G,context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:a};const o=k.bind({});o.args={stønadskonto100:J,stønadskonto80:H,context:{...e,søknad:{...e.søknad,søker:{...e.søknad.søker,erAleneOmOmsorg:!1},barn:{...e.søknad.barn,antallBarn:2},annenForelder:{fornavn:"Espen",etternavn:"Utvikler",fnr:"1212121313",harRettPåForeldrepengerINorge:!0,kanIkkeOppgis:!1}}},søkerinfo:a};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var E,f,M;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var g,R,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var u,O,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(F=(O=o.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const ot=["UttaksplanMedAleneomsorg","UttaksplanMedPrematurFødsel","UttaksplanMedDeltUttak","UttaksplanMedFlerbarnsukerTvillinger"];export{t as UttaksplanMedAleneomsorg,n as UttaksplanMedDeltUttak,o as UttaksplanMedFlerbarnsukerTvillinger,r as UttaksplanMedPrematurFødsel,ot as __namedExportsOrder,nt as default};
//# sourceMappingURL=MorFodsel.stories-96f67da5.js.map
