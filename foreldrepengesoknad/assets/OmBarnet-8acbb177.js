import{a as S,F as I,j as a}from"./jsx-runtime-670450c2.js";import{d as f,aG as se,aB as me,h as p,i as l,y as D,aH as X,aI as pe,aJ as ue,aK as ce,a as A,B as s,C as q,G as _,F as N,aL as Be,aM as fe,R as ke,z as ge,S as Se,b as be}from"./validationUtils-f899988d.js";import"./index-7e4e529b.js";import"./index-f1f749bf.js";import{u as ve,S as H,a as Ee}from"./mapSøkerinfoDTO-af2c145f.js";import{u as he}from"./useOnValidSubmit-26b166a9.js";import{b as R,a as Z,c as M,j as Fe,h as De,B as h,k as Ae,l as z,m as ye,u as Ne,g as Oe}from"./useSøknad-ec0625ef.js";import{u as je}from"./useSøkerinfo-097f4ccc.js";import{u as Ie,a as Te,g as Ve,s as _e}from"./useFortsettSøknadSenere-d39d0618.js";import{F as w}from"./FormikFileUploader-f62abcff.js";import{g as Re,Y as d,A as O,d as v}from"./getTypedFormComponents-b4bc17b3.js";import{S as j}from"./Skjemanummer-77149054.js";import{N as Ue,I as k,a0 as Me,A as K,f as xe}from"./dateUtils-fd1a452e.js";import{l as Ge}from"./links-b36d21ab.js";import{Q as Le}from"./index-47edccfa.js";import{L as Pe}from"./Link-40b5f3c6.js";import{a as Ye,c as Q}from"./formUtils-8bf80793.js";import{l as x}from"./vedleggUtils-cfa4fd06.js";import{u as We,s as qe}from"./useSaveLoadedRoute-d529cba6.js";import{R as J}from"./RegistrertePersonalia-43e44e43.js";import{e as we,f as Ke}from"./velkommenUtils-70891808.js";import{L as Qe}from"./Label-bbf0f831.js";var n=(e=>(e.erBarnetFødt="erBarnetFødt",e.adopsjonAvEktefellesBarn="adopsjonAvEktefellesBarn",e.antallBarn="antallBarn",e.antallBarnSelect="antallBarnSelect",e.adopsjonsdato="adopsjonsdato",e.søkerAdopsjonAlene="søkerAdopsjonAlene",e.adoptertIUtlandet="adoptertIUtlandet",e.fødselsdatoer="fødselsdatoer",e.termindato="termindato",e.omsorgsovertakelse="omsorgsovertakelse",e.terminbekreftelse="terminbekreftelse",e.terminbekreftelsedato="terminbekreftelsedato",e.ankomstdato="ankomstdato",e))(n||{});const B=Re();f.extend(se);f.extend(me);const $e=e=>t=>{if(!p(t))return l(e,"valideringsfeil.omBarnet.fødselsdato.duMåOppgi");if(!D.isISODateString(t))return l(e,"valideringsfeil.omBarnet.fødselsdato.ugyldigDatoFormat");if(X(t))return l(e,"valideringsfeil.omBarnet.fødselsdato.måVæreIdagEllerTidligere");if(f(t).isBefore(f(new Date).subtract(3,"years").subtract(4,"months"),"day"))return l(e,"valideringsfeil.omBarnet.fødselsdato.ikkeMerEnn3År3MndTilbake")},ee=e=>(t,r)=>{if(!p(t))return l(e,"valideringsfeil.omBarnet.fødselsdato.duMåOppgi");if(!D.isISODateString(t))return l(e,"valideringsfeil.omBarnet.fødselsdato.ugyldigDatoFormat");if(X(t))return l(e,"valideringsfeil.omBarnet.fødselsdato.måVæreIdagEllerTidligere");if(Ue(r,t))return l(e,"valideringsfeil.omBarnet.fødselsdato.måVæreFørAdopsjonsdato");if(!pe(t,r))return l(e,"valideringsfeil.omBarnet.fødselsdato.ikkeMerEnn15År3MndTilbake")},Ce=e=>t=>{if(!p(t))return l(e,"valideringsfeil.omBarnet.termindato.duMåOppgi");if(!D.isISODateString(t))return l(e,"valideringsfeil.omBarnet.termindato.ugyldigDatoFormat");if(!ue(t))return l(e,"valideringsfeil.omBarnet.termindato.forTidlig");if(!ce(t))return l(e,"valideringsfeil.omBarnet.termindato.duMåVæreIUke22")},te=(e,t)=>r=>{if(!p(r))return l(t,"valideringsfeil.omBarnet.termindato.duMåOppgi");if(!D.isISODateString(r))return l(t,"valideringsfeil.omBarnet.termindato.ugyldigDatoFormat");if(!f(r).subtract(6,"months").isSameOrBefore(f(e),"day"))return l(t,"valideringsfeil.omBarnet.termindato.forLangtFremITid");if(!f(r).add(1,"months").isSameOrAfter(f(e),"day"))return l(t,"valideringsfeil.omBarnet.termindato.forLangtTilbakeITid")},ae=e=>t=>{if(!p(t))return l(e,"valideringsfeil.omBarnet.adopsjonsdato.duMåOppgi");if(!D.isISODateString(t))return l(e,"valideringsfeil.omBarnet.adopsjonsdato.ugyldigDatoFormat")},He=e=>(t,r)=>{if(!p(t))return l(e,"valideringsfeil.omBarnet.ankomstDato.duMåOppgi");if(!D.isISODateString(t))return l(e,"valideringsfeil.omBarnet.ankomstDato.ugyldigDatoFormat");if(r!==void 0&&!f(r).isSameOrBefore(t,"day"))return l(e,"valideringsfeil.omBarnet.ankomstDato.førFødselsdato")},ze=e=>t=>{if(!p(t))return l(e,"valideringsfeil.omBarnet.terminbekreftelseDato.duMåOppgi");if(!D.isISODateString(t))return l(e,"valideringsfeil.omBarnet.terminbekreftelseDato.ugyldigDatoFormat");if(f().isBefore(f(t)))return l(e,"valideringsfeil.omBarnet.terminbekreftelseDato.kanIkkeVæreFremITid")},G=({søkersituasjon:e,formValues:t,visibility:r,søknadGjelderEtNyttBarn:i})=>{const o=A();return e.situasjon==="fødsel"||t.adopsjonAvEktefellesBarn!==d.NO?null:S(I,{children:[a(s,{padBottom:"xl",children:a(B.DatePicker,{label:l(o,"omBarnet.adopsjonsdato.annetBarn"),name:n.adopsjonsdato,validate:ae(o),placeholder:"dd.mm.åååå"})}),a(s,{padBottom:"xl",visible:r.isVisible(n.antallBarn),children:a(B.RadioGroup,{name:n.antallBarn,radios:[{label:l(o,"omBarnet.radiobutton.ettBarn"),value:"1"},{label:l(o,"omBarnet.radiobutton.toBarn"),value:"2"},{label:l(o,"omBarnet.radiobutton.flere"),value:"3"}],legend:l(o,"omBarnet.antallBarn.adopsjon.født")})}),a(s,{padBottom:"xl",visible:t.antallBarn!==void 0&&i&&parseInt(t.antallBarn,10)>=3,children:S(B.Select,{label:"Antall barn",name:n.antallBarnSelect,children:[a("option",{value:""}),a("option",{value:"3",children:"3"}),a("option",{value:"4",children:"4"}),a("option",{value:"5",children:"5"}),a("option",{value:"6",children:"6"}),a("option",{value:"7",children:"7"}),a("option",{value:"8",children:"8"}),a("option",{value:"9",children:"9"})]})}),a(s,{padBottom:"xl",visible:r.isVisible(n.fødselsdatoer),children:a(q,{name:n.fødselsdatoer,render:()=>[...Array(parseInt(t.antallBarn,10))].map((u,m)=>a(s,{padBottom:"xl",children:a(B.DatePicker,{name:`${n.fødselsdatoer}.${m}`,label:t.antallBarn==="1"?l(o,"omBarnet.fødselsdato"):l(o,`omBarnet.fødselsdato.adopsjon.${m+1}`),minDate:f(t.adopsjonsdato).subtract(15,"years").toDate(),maxDate:k(t.adopsjonsdato),validate:c=>ee(o)(c,t.adopsjonsdato),placeholder:"dd.mm.åååå",showYearSelector:!0},`${n.fødselsdatoer}.${m}`)},m))})}),a(s,{padBottom:"xl",visible:r.isVisible(n.adoptertIUtlandet),children:a(B.YesOrNoQuestion,{name:n.adoptertIUtlandet,legend:l(o,"omBarnet.adopteresFraUtlandet")})}),a(s,{padBottom:"xl",visible:r.isVisible(n.ankomstdato),children:a(B.DatePicker,{name:n.ankomstdato,label:l(o,"omBarnet.ankomstDato"),minDate:f(t.fødselsdatoer[0]).toDate(),maxDate:f().add(6,"months").toDate(),validate:u=>He(o)(u,t.fødselsdatoer[0]),placeholder:"dd.mm.åååå"})}),a(s,{padBottom:"xl",visible:r.isVisible(n.omsorgsovertakelse),children:a(_,{children:a(N,{id:"omBarnet.veileder.omsorgsovertakelse"})})}),a(s,{padBottom:"xl",visible:r.isVisible(n.omsorgsovertakelse),children:a(w,{legend:"Dokumentasjon om adopsjon",label:l(o,"omBarnet.adopsjon.vedlegg"),name:n.omsorgsovertakelse,attachments:t.omsorgsovertakelse||[],attachmentType:O.OMSORGSOVERTAKELSE,skjemanummer:j.OMSORGSOVERTAKELSESDATO})})]})};try{G.displayName="AdopsjonAnnetBarn",G.__docgenInfo={description:"",displayName:"AdopsjonAnnetBarn",props:{søkersituasjon:{defaultValue:null,description:"",name:"søkersituasjon",required:!0,type:{name:"Søkersituasjon"}},formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}},søknadGjelderEtNyttBarn:{defaultValue:null,description:"",name:"søknadGjelderEtNyttBarn",required:!0,type:{name:"boolean"}}}}}catch{}const L=({søkersituasjon:e,formValues:t,visibility:r,søknadGjelderEtNyttBarn:i})=>{const o=A();return e.situasjon==="fødsel"||t.adopsjonAvEktefellesBarn!==d.YES?null:S(I,{children:[a(s,{padBottom:"xl",children:a(B.DatePicker,{label:l(o,"omBarnet.adopsjonsdato.stebarn"),name:n.adopsjonsdato,validate:ae(o),placeholder:"dd.mm.åååå"})}),a(s,{padBottom:"xl",visible:r.isVisible(n.antallBarn),children:a(B.RadioGroup,{name:n.antallBarn,radios:[{label:l(o,"omBarnet.radiobutton.ettBarn"),value:"1"},{label:l(o,"omBarnet.radiobutton.toBarn"),value:"2"},{label:l(o,"omBarnet.radiobutton.flere"),value:"3"}],legend:l(o,"omBarnet.antallBarn.adopsjon.født")})}),a(s,{padBottom:"xl",visible:t.antallBarn!==void 0&&i&&parseInt(t.antallBarn,10)>=3,children:S(B.Select,{label:"Antall barn",name:n.antallBarnSelect,children:[a("option",{value:""}),a("option",{value:"3",children:"3"}),a("option",{value:"4",children:"4"}),a("option",{value:"5",children:"5"}),a("option",{value:"6",children:"6"}),a("option",{value:"7",children:"7"}),a("option",{value:"8",children:"8"}),a("option",{value:"9",children:"9"})]})}),a(s,{padBottom:"xl",visible:r.isVisible(n.fødselsdatoer),children:a(q,{name:n.fødselsdatoer,render:()=>[...Array(parseInt(t.antallBarn,10))].map((u,m)=>S(s,{padBottom:"xl",children:[a(B.DatePicker,{name:`${n.fødselsdatoer}.${m}`,label:t.antallBarn==="1"?l(o,"omBarnet.fødselsdato"):l(o,`omBarnet.fødselsdato.adopsjon.${m+1}`),minDate:f().subtract(6,"month").toDate(),maxDate:k(t.adopsjonsdato),validate:c=>ee(o)(c,t.adopsjonsdato),placeholder:"dd.mm.åååå"},`${n.fødselsdatoer}.${m}`)," "]},m))})}),a(s,{padBottom:"xl",visible:r.isVisible(n.omsorgsovertakelse),children:a(_,{children:a(N,{id:"omBarnet.veileder.omsorgsovertakelse"})})}),a(s,{padBottom:"xl",visible:r.isVisible(n.omsorgsovertakelse),children:a(w,{legend:"Dokumentasjon om adopsjon",label:l(o,"omBarnet.adopsjon.vedlegg"),name:n.omsorgsovertakelse,attachments:t.omsorgsovertakelse||[],attachmentType:O.OMSORGSOVERTAKELSE,skjemanummer:j.OMSORGSOVERTAKELSESDATO})})]})};try{L.displayName="AdopsjonEktefellesBarn",L.__docgenInfo={description:"",displayName:"AdopsjonEktefellesBarn",props:{søkersituasjon:{defaultValue:null,description:"",name:"søkersituasjon",required:!0,type:{name:"Søkersituasjon"}},formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}},søknadGjelderEtNyttBarn:{defaultValue:null,description:"",name:"søknadGjelderEtNyttBarn",required:!0,type:{name:"boolean"}}}}}catch{}const Je=({visibility:e})=>{const t=A();return S(I,{children:[a(s,{padBottom:"xl",visible:e.isVisible(n.adopsjonAvEktefellesBarn),children:a(B.YesOrNoQuestion,{name:n.adopsjonAvEktefellesBarn,legend:l(t,"omBarnet.adopsjonGjelder")})}),a(s,{padBottom:"xl",visible:e.isVisible(n.erBarnetFødt),children:a(B.YesOrNoQuestion,{name:n.erBarnetFødt,legend:l(t,"omBarnet.erBarnetFødt")})})]})};try{BarnFdtEllerAdoptert.displayName="BarnFdtEllerAdoptert",BarnFdtEllerAdoptert.__docgenInfo={description:"",displayName:"BarnFdtEllerAdoptert",props:{visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}}}}}catch{}const Xe=({søkersituasjon:e,formValues:t,visibility:r,søknadGjelderEtNyttBarn:i,barnSøktOmFørMenIkkeRegistrert:o})=>{const{erBarnetFødt:u,antallBarn:m,fødselsdatoer:c}=t,b=A(),T=m!==void 0&&parseInt(m,10)>1?"omBarnet.fødselsdato.flereBarn":"omBarnet.fødselsdato";return e.situasjon==="adopsjon"||u!==d.YES||!i&&!o?null:S(I,{children:[a(s,{padBottom:"xl",visible:r.isVisible(n.antallBarn),children:a(B.RadioGroup,{name:n.antallBarn,radios:[{label:l(b,"omBarnet.radiobutton.ettBarn"),value:"1"},{label:l(b,"omBarnet.radiobutton.tvillinger"),value:"2"},{label:l(b,"omBarnet.radiobutton.flere"),value:"3"}],legend:l(b,"omBarnet.antallBarn.født")})}),a(s,{padBottom:"xl",visible:m!==void 0&&i&&parseInt(m,10)>=3,children:S(B.Select,{label:"Antall barn",name:n.antallBarnSelect,children:[a("option",{value:""}),a("option",{value:"3",children:"3"}),a("option",{value:"4",children:"4"}),a("option",{value:"5",children:"5"}),a("option",{value:"6",children:"6"}),a("option",{value:"7",children:"7"}),a("option",{value:"8",children:"8"}),a("option",{value:"9",children:"9"})]})}),a(s,{padBottom:"xl",visible:r.isVisible(n.fødselsdatoer),children:a(q,{name:n.fødselsdatoer,render:()=>[a(B.DatePicker,{name:`${n.fødselsdatoer}.0`,label:l(b,T),minDate:f().subtract(3,"years").toDate(),maxDate:f().toDate(),validate:$e(b),placeholder:"dd.mm.åååå"},`${n.fødselsdatoer}.0`)]})}),a(s,{padBottom:"l",visible:r.isVisible(n.termindato),children:a(B.DatePicker,{name:n.termindato,label:l(b,"omBarnet.termindato.født"),minDate:f(c[0]).subtract(1,"months").toDate(),maxDate:f(c[0]).add(6,"months").toDate(),placeholder:"dd.mm.åååå",validate:te(c[0],b)})})]})};try{Fdsel.displayName="Fdsel",Fdsel.__docgenInfo={description:"",displayName:"Fdsel",props:{søkersituasjon:{defaultValue:null,description:"",name:"søkersituasjon",required:!0,type:{name:"Søkersituasjon"}},formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}},søknadGjelderEtNyttBarn:{defaultValue:null,description:"",name:"søknadGjelderEtNyttBarn",required:!0,type:{name:"boolean"}},barnSøktOmFørMenIkkeRegistrert:{defaultValue:null,description:"",name:"barnSøktOmFørMenIkkeRegistrert",required:!0,type:{name:"boolean"}}}}}catch{}const Ze=e=>{const t=f(e).add(12,"weeks");return f(t).isAfter(new Date,"day")},et=(e,t,r,i)=>{if(i==="adopsjon")return!1;let o;if(r!==void 0&&r.length>0&&(o=Me(r).fødselsdato),!t&&!o)return!1;const u=o||k(t);return R(e)?K(u)&&r!==void 0&&r.length===0?!0:Ze(u):!0},tt=(e,t,r,i)=>e===d.NO&&t.length===0&&$(r,i),F=(e,t)=>e===d.NO&&t!==""&&!xe(k(t)),at=(e,t)=>e===d.NO&&F(e,t),$=(e,t)=>R(e)?p(t)?K(new Date(t)):!1:!0,rt=(e,t)=>e==="fødsel"?t:!1,nt=(e,t,r,i,o,u)=>o?F(t,e)&&r!==d.UNANSWERED||!F(t,e)&&u!==void 0&&p(u[0])||t===d.YES&&u!==void 0&&p(u[0]):t===d.YES&&p(e)||t===d.NO&&p(e)&&!F(t,e)||t===d.NO&&F(t,e)&&r===d.NO||t===d.NO&&F(t,e)&&r===d.YES&&p(i),ot={[n.adopsjonAvEktefellesBarn]:{isIncluded:({situasjon:e})=>e==="adopsjon",isAnswered:({adopsjonAvEktefellesBarn:e})=>e!==d.UNANSWERED,visibilityFilter:({situasjon:e})=>e==="adopsjon"},[n.erBarnetFødt]:{isIncluded:({situasjon:e,søknadGjelderEtNyttBarn:t})=>t&&e==="fødsel",isAnswered:({erBarnetFødt:e})=>e!==d.UNANSWERED,visibilityFilter:({situasjon:e,søknadGjelderEtNyttBarn:t})=>rt(e,t)},[n.antallBarn]:{isIncluded:({søknadGjelderEtNyttBarn:e})=>e,isAnswered:({antallBarn:e})=>p(e),visibilityFilter:({adopsjonAvEktefellesBarn:e,erBarnetFødt:t,adopsjonsdato:r})=>t!==d.UNANSWERED||e!==d.UNANSWERED&&p(r)},[n.antallBarnSelect]:{isIncluded:({antallBarn:e,søknadGjelderEtNyttBarn:t})=>parseInt(e,10)>=3&&t,isAnswered:({antallBarnSelect:e})=>p(e),visibilityFilter:({adopsjonAvEktefellesBarn:e,erBarnetFødt:t,adopsjonsdato:r,antallBarn:i})=>parseInt(i,10)>=3&&(t!==d.UNANSWERED||e!==d.UNANSWERED&&p(r))},[n.adopsjonsdato]:{isIncluded:({adopsjonAvEktefellesBarn:e})=>e!==d.UNANSWERED,isAnswered:({adopsjonsdato:e})=>p(e),visibilityFilter:({adopsjonAvEktefellesBarn:e})=>e!==d.UNANSWERED},[n.fødselsdatoer]:{isIncluded:({erBarnetFødt:e,adopsjonAvEktefellesBarn:t,søknadGjelderEtNyttBarn:r})=>r&&(e===d.YES||t!==d.UNANSWERED),isAnswered:({fødselsdatoer:e})=>e.length>0&&p(e[0]),visibilityFilter:({antallBarn:e})=>p(e)},[n.omsorgsovertakelse]:{isIncluded:({adopsjonAvEktefellesBarn:e})=>e!==d.UNANSWERED,isAnswered:()=>!0,visibilityFilter:({adopsjonsdato:e,adopsjonAvEktefellesBarn:t,ankomstdato:r,adoptertIUtlandet:i,søknadGjelderEtNyttBarn:o,fødselsdatoer:u})=>nt(e,t,i,r,o,u)},[n.termindato]:{isIncluded:({rolle:e,fødselsdatoer:t,erBarnetFødt:r,situasjon:i,valgteRegistrerteBarn:o})=>et(e,t[0],o,i)||r===d.NO,isAnswered:({termindato:e})=>p(e),visibilityFilter:({fødselsdatoer:e,erBarnetFødt:t,antallBarn:r,valgteRegistrerteBarn:i})=>p(e[0])||t===d.NO&&p(r)||i!==void 0&&i.length>0},[n.terminbekreftelse]:{isIncluded:({erBarnetFødt:e,arbeidsforhold:t,rolle:r,termindato:i})=>tt(e,t,r,i),isAnswered:({terminbekreftelse:e})=>p(e),visibilityFilter:({termindato:e})=>p(e)},[n.terminbekreftelsedato]:{isIncluded:({erBarnetFødt:e,arbeidsforhold:t,rolle:r,termindato:i})=>e===d.NO&&t.length===0&&$(r,i),isAnswered:({terminbekreftelsedato:e})=>p(e),visibilityFilter:({termindato:e})=>p(e)},[n.adoptertIUtlandet]:{isIncluded:({adopsjonAvEktefellesBarn:e,adopsjonsdato:t})=>F(e,t),isAnswered:({adoptertIUtlandet:e})=>e!==d.UNANSWERED,visibilityFilter:({fødselsdatoer:e,søknadGjelderEtNyttBarn:t})=>t&&p(e[0])||!t},[n.ankomstdato]:{isIncluded:({adopsjonAvEktefellesBarn:e,adopsjonsdato:t})=>at(e,t),isAnswered:({ankomstdato:e})=>p(e),visibilityFilter:({adoptertIUtlandet:e})=>e===d.YES}},lt=Le(ot),P=({søkersituasjon:e,visibility:t,formValues:r,søknadGjelderEtNyttBarn:i})=>{const o=A();if(e.situasjon==="adopsjon"||r.erBarnetFødt!==d.NO||!i)return null;const u=R(e.rolle),m=u&&p(r.termindato),c=u?"omBarnet.antallBarn.termin.far":"omBarnet.antallBarn.termin",b=u?"omBarnet.veileder.terminbekreftelse.far":"omBarnet.veileder.terminbekreftelse",T=u?"omBarnet.termindato.infotekst.farMedmor":"omBarnet.termindato.infotekst";return S(I,{children:[a(s,{padBottom:"xl",visible:t.isVisible(n.antallBarn),children:a(B.RadioGroup,{name:n.antallBarn,radios:[{label:l(o,"omBarnet.radiobutton.ettBarn"),value:"1"},{label:l(o,"omBarnet.radiobutton.tvillinger"),value:"2"},{label:l(o,"omBarnet.radiobutton.flere"),value:"3"}],legend:l(o,c)})}),a(s,{padBottom:"xl",visible:r.antallBarn!==void 0&&parseInt(r.antallBarn,10)>=3,children:S(B.Select,{label:"Antall barn",name:n.antallBarnSelect,children:[a("option",{value:""}),a("option",{value:"3",children:"3"}),a("option",{value:"4",children:"4"}),a("option",{value:"5",children:"5"}),a("option",{value:"6",children:"6"}),a("option",{value:"7",children:"7"}),a("option",{value:"8",children:"8"}),a("option",{value:"9",children:"9"})]})}),a(s,{padBottom:"s",visible:t.isVisible(n.termindato),children:a(B.DatePicker,{name:n.termindato,label:l(o,"omBarnet.termindato.termin"),placeholder:"dd.mm.åååå",minDate:Be,maxDate:fe,validate:Ce(o)})}),a(s,{padBottom:"xl",visible:t.isVisible(n.termindato),children:a(ke,{header:l(o,"omBarnet.termindato.åpneLabel"),children:l(o,T)})}),m&&!$(e.rolle,r.termindato)&&a(s,{padBottom:"xl",children:a(_,{children:a(N,{id:"omBarnet.veileder.medMorEllerFarTermin",values:{lenke:a(Pe,{href:Ge.papirsøknad,children:a(N,{id:"omBarnet.papirsøknad.lenke"})})}})})}),a(s,{padBottom:"xl",visible:t.isVisible(n.terminbekreftelse),children:a(_,{children:a(N,{id:b})})}),a(s,{padBottom:"xl",visible:t.isVisible(n.terminbekreftelse),children:a(w,{legend:"Dokumentasjon om terminbekreftelse",label:l(o,"omBarnet.terminbekreftelse.lastOpp"),name:n.terminbekreftelse,attachments:r.terminbekreftelse||[],attachmentType:O.TERMINBEKREFTELSE,skjemanummer:j.TERMINBEKREFTELSE})}),a(s,{padBottom:"xl",visible:t.isVisible(n.terminbekreftelsedato),children:a(B.DatePicker,{name:n.terminbekreftelsedato,label:l(o,"omBarnet.terminbekreftelseDato"),placeholder:"dd.mm.åååå",validate:ze(o),maxDate:ge})})]})};try{P.displayName="Termin",P.__docgenInfo={description:"",displayName:"Termin",props:{søkersituasjon:{defaultValue:null,description:"",name:"søkersituasjon",required:!0,type:{name:"Søkersituasjon"}},formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}},søknadGjelderEtNyttBarn:{defaultValue:null,description:"",name:"søknadGjelderEtNyttBarn",required:!0,type:{name:"boolean"}}}}}catch{}const it=()=>({[n.erBarnetFødt]:d.UNANSWERED,[n.adopsjonAvEktefellesBarn]:d.UNANSWERED,[n.antallBarn]:"",[n.antallBarnSelect]:"",[n.adopsjonsdato]:"",[n.fødselsdatoer]:[],[n.omsorgsovertakelse]:[],[n.termindato]:"",[n.terminbekreftelse]:[],[n.terminbekreftelsedato]:"",[n.adoptertIUtlandet]:d.UNANSWERED,[n.ankomstdato]:""}),dt=(e,t)=>({erBarnetFødt:t.isVisible(n.erBarnetFødt)?e.erBarnetFødt:d.UNANSWERED,adopsjonAvEktefellesBarn:t.isVisible(n.adopsjonAvEktefellesBarn)?e.adopsjonAvEktefellesBarn:d.UNANSWERED,antallBarn:t.isVisible(n.antallBarn)?e.antallBarn:"",antallBarnSelect:t.isVisible(n.antallBarnSelect)?e.antallBarnSelect:"",adopsjonsdato:t.isVisible(n.adopsjonsdato)?e.adopsjonsdato:"",fødselsdatoer:t.isVisible(n.fødselsdatoer)?e.fødselsdatoer:[],omsorgsovertakelse:t.isVisible(n.omsorgsovertakelse)?e.omsorgsovertakelse:[],termindato:t.isVisible(n.termindato)?e.termindato:"",terminbekreftelse:t.isVisible(n.terminbekreftelse)?e.terminbekreftelse:[],terminbekreftelsedato:t.isVisible(n.terminbekreftelsedato)?e.terminbekreftelsedato:"",adoptertIUtlandet:t.isVisible(n.adoptertIUtlandet)?e.adoptertIUtlandet:d.UNANSWERED,ankomstdato:t.isVisible(n.ankomstdato)?e.ankomstdato:""}),st=(e,t,r,i)=>{if(e!==void 0&&t==="fødsel")return{...e,type:i?h.UFØDT:h.FØDT,termindato:p(r.termindato)?k(r.termindato):void 0,fødselsdatoer:e.fødselsdatoer,antallBarn:e.antallBarn};const o=x(r.omsorgsovertakelse,O.OMSORGSOVERTAKELSE,j.OMSORGSOVERTAKELSESDATO);return r.adopsjonAvEktefellesBarn===d.YES?{...e,type:h.ADOPTERT_STEBARN,adopsjonsdato:k(r.adopsjonsdato),omsorgsovertakelse:o}:{...e,type:h.ADOPTERT_ANNET_BARN,adopsjonsdato:k(r.adopsjonsdato),adoptertIUtlandet:Q(r.adoptertIUtlandet),ankomstdato:r.adoptertIUtlandet===d.YES?k(r.ankomstdato):void 0,omsorgsovertakelse:o}},mt=(e,t,r,i,o)=>{if(r!==void 0)return st(r,i,e,o);const u=parseInt(e.antallBarn,10)<3?parseInt(e.antallBarn,10):parseInt(e.antallBarnSelect,10);if(e.erBarnetFødt===d.YES)return{type:h.FØDT,fødselsdatoer:e.fødselsdatoer.map(c=>k(c)),antallBarn:u,termindato:p(e.termindato)?k(e.termindato):void 0};if(e.erBarnetFødt===d.NO){const c=x(e.terminbekreftelse,O.TERMINBEKREFTELSE,j.TERMINBEKREFTELSE);return t.length===0?{type:h.UFØDT,terminbekreftelse:c,terminbekreftelsedato:k(e.terminbekreftelsedato),antallBarn:u,termindato:k(e.termindato)}:{type:h.UFØDT,antallBarn:u,termindato:k(e.termindato)}}const m=x(e.omsorgsovertakelse,O.OMSORGSOVERTAKELSE,j.OMSORGSOVERTAKELSESDATO);return e.adopsjonAvEktefellesBarn===d.YES?{type:h.ADOPTERT_STEBARN,adopsjonsdato:k(e.adopsjonsdato),antallBarn:u,fødselsdatoer:e.fødselsdatoer.map(c=>k(c)),omsorgsovertakelse:m}:{type:h.ADOPTERT_ANNET_BARN,fødselsdatoer:e.fødselsdatoer.map(c=>k(c)),adopsjonsdato:k(e.adopsjonsdato),antallBarn:u,adoptertIUtlandet:Q(e.adoptertIUtlandet),ankomstdato:e.adoptertIUtlandet===d.YES?k(e.ankomstdato):void 0,omsorgsovertakelse:m}},pt=(e,t)=>{const r=it();if(!e)return r;const i=e.antallBarn>2;return Z(e)?{...r,erBarnetFødt:d.YES,fødselsdatoer:e.fødselsdatoer.map(o=>v(o)),termindato:v(e.termindato),antallBarn:i?"3":e.antallBarn.toString(),antallBarnSelect:i?e.antallBarn.toString():""}:M(e)?t.length===0?{...r,erBarnetFødt:d.NO,terminbekreftelse:e.terminbekreftelse||[],terminbekreftelsedato:v(e.terminbekreftelsedato),termindato:v(e.termindato),antallBarn:i?"3":e.antallBarn.toString(),antallBarnSelect:i?e.antallBarn.toString():""}:{...r,erBarnetFødt:d.NO,termindato:v(e.termindato),antallBarn:i?"3":e.antallBarn.toString(),antallBarnSelect:i?e.antallBarn.toString():""}:Fe(e)?{...r,adopsjonAvEktefellesBarn:d.NO,fødselsdatoer:e.fødselsdatoer.map(o=>v(o)),adopsjonsdato:v(e.adopsjonsdato),antallBarn:i?"3":e.antallBarn.toString(),antallBarnSelect:i?e.antallBarn.toString():"",adoptertIUtlandet:Ye(e.adoptertIUtlandet),omsorgsovertakelse:e.omsorgsovertakelse,ankomstdato:v(e.ankomstdato)}:De(e)?{...r,adopsjonAvEktefellesBarn:d.YES,adopsjonsdato:v(e.adopsjonsdato),antallBarn:i?"3":e.antallBarn.toString(),antallBarnSelect:i?e.antallBarn.toString():"",fødselsdatoer:e.fødselsdatoer.map(o=>v(o)),omsorgsovertakelse:e.omsorgsovertakelse}:r},Y=({valgteBarn:e,visibility:t})=>{const r=A(),i=e.length,o=e.every(c=>Ae(c));e.sort(we);const u=e.map(c=>c.fødselsdato),m=e[0].fødselsdato;return S(I,{children:[a(s,{padBottom:"xl",children:S("div",{children:[a(s,{padBottom:"s",children:a(Qe,{children:a(N,{id:"omBarnet.valgteBarn.tittel",values:{antallBarn:i}})})}),o?e.map(c=>a(s,{padBottom:"s",children:a(J,{person:c,fødselsdatoForVisning:z([c.fødselsdato]),visEtternavn:!1})},c.fnr)):a(s,{padBottom:"s",children:a(J,{person:e[0],fødselsdatoForVisning:z(u),altTekstHvisUkjentNavn:ye(void 0,u,e.length,r),visEtternavn:!1})})]})}),a(s,{padBottom:"l",visible:t.isVisible(n.termindato)&&e.length>0,children:a(B.DatePicker,{name:n.termindato,label:l(r,"omBarnet.termindato.født"),dayPickerProps:{defaultMonth:m},minDate:f(m).subtract(1,"months").toDate(),maxDate:f(m).add(6,"months").toDate(),placeholder:"dd.mm.åååå",validate:te(v(m),r)})})]})};try{Y.displayName="ValgteRegistrerteBarn",Y.__docgenInfo={description:"",displayName:"ValgteRegistrerteBarn",props:{valgteBarn:{defaultValue:null,description:"",name:"valgteBarn",required:!0,type:{name:"RegistrertBarn[]"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}}}}}catch{}const W=()=>{const e=A(),{søkersituasjon:t,barn:r}=Ne(),{arbeidsforhold:i,registrerteBarn:o}=je(),{state:u}=ve(),{søknadGjelderEtNyttBarn:m}=u,c=g=>!M(r)&&r.fnr!==void 0&&r.fnr.length>0?r.fnr.includes(g.fnr):!1,b=r?k(Oe(r)):void 0,T=r&&Z(r)?o.filter(g=>g.fnr===void 0&&Ke(g.fødselsdato,b)):[],y=!m&&!M(r)?o.filter(g=>c(g)).concat(T):void 0,V=!m&&(y===void 0||y.length===0),re=g=>{const U=mt(g,i,!m&&!V?r:void 0,t.situasjon,V);return[Ee.setOmBarnet(U)]},{handleSubmit:ne,isSubmitting:C}=he(re,H.ANNEN_FORELDER,g=>qe(g)),oe=Ie(),le=Te();return We(H.OM_BARNET),a(B.FormikWrapper,{initialValues:pt(r,i),onSubmit:ne,renderForm:({values:g})=>{const E=lt.getVisbility({...g,arbeidsforhold:i,situasjon:t.situasjon,rolle:t.rolle,valgteRegistrerteBarn:y,søknadGjelderEtNyttBarn:V||m}),U=R(t.rolle)&&Q(g.erBarnetFødt)===!1&&p(g.termindato)&&!K(k(g.termindato)),ie=E.areAllQuestionsAnswered()&&!U;return a(Se,{bannerTitle:l(e,"søknad.pageheading"),backLinkHref:Ve("omBarnet"),activeStepId:"omBarnet",pageTitle:l(e,"søknad.omBarnet"),onCancel:oe,onContinueLater:le,steps:_e(e,!1),children:S(B.Form,{includeButtons:!1,includeValidationSummary:!0,cleanup:de=>dt(de,E),children:[y!==void 0&&y.length>0&&a(Y,{valgteBarn:y,visibility:E}),a(Je,{visibility:E}),a(G,{søkersituasjon:t,formValues:g,visibility:E,søknadGjelderEtNyttBarn:m}),a(L,{søkersituasjon:t,formValues:g,visibility:E,søknadGjelderEtNyttBarn:m}),a(P,{søkersituasjon:t,formValues:g,visibility:E,søknadGjelderEtNyttBarn:V||m}),a(Xe,{søkersituasjon:t,formValues:g,visibility:E,søknadGjelderEtNyttBarn:m,barnSøktOmFørMenIkkeRegistrert:V}),a(s,{visible:ie,textAlignCenter:!0,children:a(be,{type:"submit",disabled:C,loading:C,children:l(e,"søknad.gåVidere")})})]})})}})},Rt=W;try{W.displayName="OmBarnet",W.__docgenInfo={description:"",displayName:"OmBarnet",props:{}}}catch{}export{Rt as O};
//# sourceMappingURL=OmBarnet-8acbb177.js.map
