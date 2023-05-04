import{a as B,F as b,j as t}from"./jsx-runtime-670450c2.js";import{Y as i,r as g,i as l,s as S,t as W,v as w,w as G,x as H,y as z,z as J,u as D,B as u,C,f,D as X,E as Z,U as K,F as q,P,o as ee,n as ne,J as te,q as ae,b as re}from"./IntlProvider-550dc297.js";import{O as r,c as p,d as ie,l as le,b as oe}from"./globals-6bd225cc.js";import"./index-f1f749bf.js";import{Q as se,g as de,o as me,s as ue,U as pe}from"./stepConfig-0844c37b.js";import{g as o}from"./i18nUtils-2b2b3c89.js";import{u as ce}from"./useEngangsstønadContext-8a0c18d9.js";import{a as ge,E as Be,A as ve,i as fe,m as M}from"./AttachmentList-4efce9ed.js";import{P as be}from"./PageKeys-d7db1a78.js";const Ee={[r.adopsjonAvEktefellesBarn]:{isIncluded:({situasjon:e})=>e==="adopsjon",isAnswered:({adopsjonAvEktefellesBarn:e})=>e!==i.UNANSWERED,visibilityFilter:({situasjon:e})=>e==="adopsjon"},[r.erBarnetFødt]:{isIncluded:({situasjon:e})=>e==="fødsel",isAnswered:({erBarnetFødt:e})=>e!==i.UNANSWERED,visibilityFilter:({situasjon:e})=>e==="fødsel"},[r.antallBarn]:{isIncluded:()=>!0,isAnswered:({antallBarn:e})=>g(e),visibilityFilter:({adopsjonAvEktefellesBarn:e,erBarnetFødt:n,adopsjonsdato:a})=>n!==i.UNANSWERED||e!==i.UNANSWERED&&g(a)},[r.adopsjonsdato]:{isIncluded:({adopsjonAvEktefellesBarn:e})=>e!==i.UNANSWERED,isAnswered:({adopsjonsdato:e})=>g(e),visibilityFilter:({adopsjonAvEktefellesBarn:e})=>e!==i.UNANSWERED},[r.søkerAdopsjonAlene]:{isIncluded:({situasjon:e,kjønn:n,adopsjonAvEktefellesBarn:a})=>e==="adopsjon"&&n==="M"&&a===i.NO,isAnswered:({søkerAdopsjonAlene:e})=>e!==i.UNANSWERED,visibilityFilter:({adopsjonAvEktefellesBarn:e,fødselsdatoer:n})=>e===i.NO&&(n==null?void 0:n.length)>0&&n[0]!==""},[r.fødselsdatoer]:{isIncluded:({erBarnetFødt:e,adopsjonAvEktefellesBarn:n})=>e===i.YES||n!==i.UNANSWERED,isAnswered:({fødselsdatoer:e})=>(e==null?void 0:e.length)>0&&e[0]!=="",visibilityFilter:({antallBarn:e})=>g(e)},[r.omsorgsovertakelse]:{isIncluded:({adopsjonAvEktefellesBarn:e})=>e!==i.UNANSWERED,isAnswered:({omsorgsovertakelse:e})=>(e==null?void 0:e.length)>0,visibilityFilter:({adopsjonAvEktefellesBarn:e,fødselsdatoer:n,søkerAdopsjonAlene:a,kjønn:m})=>e===i.YES&&(n==null?void 0:n.length)>0&&n[0]!==""||e===i.NO&&a!==i.UNANSWERED||m==="K"&&(n==null?void 0:n.length)>0&&n[0]!==""},[r.termindato]:{isIncluded:({erBarnetFødt:e})=>e===i.NO,isAnswered:({termindato:e})=>g(e),visibilityFilter:({antallBarn:e})=>g(e)},[r.terminbekreftelse]:{isIncluded:({erBarnetFødt:e})=>e===i.NO,isAnswered:({terminbekreftelse:e})=>(e==null?void 0:e.length)>0,visibilityFilter:({termindato:e})=>g(e)},[r.terminbekreftelsedato]:{isIncluded:({erBarnetFødt:e})=>e===i.NO,isAnswered:({terminbekreftelsedato:e})=>g(e),visibilityFilter:({terminbekreftelse:e})=>(e==null?void 0:e.length)>0}},ke=se(Ee),Fe=e=>{const n={};return n.antallBarn=void 0,n.erBarnetFødt=i.UNANSWERED,n.adopsjonAvEktefellesBarn=i.UNANSWERED,n.søkerAdopsjonAlene=i.UNANSWERED,e.erBarnetFødt===i.YES&&(n.antallBarn=e.antallBarn,n.fødselsdatoer=e.fødselsdatoer,n.erBarnetFødt=e.erBarnetFødt),e.erBarnetFødt===i.NO&&(n.antallBarn=e.antallBarn,n.erBarnetFødt=e.erBarnetFødt,n.terminbekreftelse=e.terminbekreftelse,n.terminbekreftelsedato=e.terminbekreftelsedato,n.termindato=e.termindato),e.adopsjonAvEktefellesBarn!==i.UNANSWERED&&(n.antallBarn=e.antallBarn,n.adopsjonsdato=e.adopsjonsdato,n.fødselsdatoer=e.fødselsdatoer,n.omsorgsovertakelse=e.omsorgsovertakelse,n.adopsjonAvEktefellesBarn=e.adopsjonAvEktefellesBarn,n.søkerAdopsjonAlene=e.søkerAdopsjonAlene),n},he=(e,n)=>{if(!g(e))return l(n,"valideringsfeil.omBarnet.adopsjonDato.ektefellensBarn.duMåOppgi");if(!S.isValidFormattedDateString(e))return l(n,"invalidFormatErrorKey.adopsjonsdato");if(W(e))return l(n,"valideringsfeil.omBarnet.adopsjonDato.forLangtFremITid")},Ae=(e,n)=>{if(!g(e))return l(n,"valideringsfeil.omBarnet.adopsjonDato.overtaOmsorg.duMåOppgi");if(W(e))return l(n,"valideringsfeil.omBarnet.adopsjonDato.forLangtFremITid")},je=(e,n)=>{if(!g(e))return l(n,"valideringsfeil.omBarnet.fodselsdato.duMåOppgi");if(w(e))return l(n,"valideringsfeil.omBarnet.fodselsdato.måVæreIdagEllerTidligere");if(G(e))return l(n,"valideringsfeil.omBarnet.fodselsdato.ikkeMerEnn6MånederTilbake")},ye=(e,n,a)=>{if(!g(e))return l(a,"valideringsfeil.omBarnet.fodselsdato.duMåOppgi");if(!S.isValidFormattedDateString(e))return l(a,"invalidFormatErrorKey.fødselsdato");if(!(!e||!n)&&w(e))return l(a,"valideringsfeil.omBarnet.fodselsdato.måVæreIdagEllerTidligere")},Ne=(e,n)=>{if(!g(e))return l(n,"valideringsfeil.omBarnet.termindato.duMåOppgi");if(!S.isValidFormattedDateString(e))return l(n,"invalidFormatErrorKey.termindato");if(!H(e))return l(n,"valideringsfeil.omBarnet.termindato.termindatoKanIkkeVære3UkerFraIdag");if(z(e))return l(n,"valideringsfeil.omBarnet.termindato.duMåVæreIUke22")},Se=(e,n,a)=>{if(!g(e))return l(a,"valideringsfeil.omBarnet.terminbekreftelseDato.duMåOppgi");if(!(!e||!n)){if(!S.isValidFormattedDateString(e))return l(a,"invalidFormatErrorKey.terminBekreftelsedato");if(w(e))return l(a,"valideringsfeil.omBarnet.terminbekreftelseDato.måVæreIdagEllerTidligere");if(!J(e,n))return l(a,"valideringsfeil.omBarnet.terminbekreftelseDato.duMåVæreIUke22")}},De=({visibility:e,formValues:n})=>{const a=D();return n.erBarnetFødt===i.NO||n.erBarnetFødt===i.UNANSWERED?null:B(b,{children:[e.isVisible(r.antallBarn)&&B(b,{children:[t(u,{margin:"xl",children:t(p.RadioGroup,{name:r.antallBarn,radios:[{label:l(a,"omBarnet.radiobutton.ettbarn"),value:"1"},{label:l(a,"omBarnet.radiobutton.tvillinger"),value:"2"},{label:l(a,"omBarnet.radiobutton.flere"),value:"3"}],legend:o(a,"omBarnet.text.antallBarn.født")})}),n.antallBarn&&parseInt(n.antallBarn,10)>=3&&t(u,{margin:"xl",children:B(p.Select,{name:r.antallBarn,label:o(a,"omBarnet.text.antallBarn.født"),children:[t("option",{value:"3",children:"3"}),t("option",{value:"4",children:"4"}),t("option",{value:"5",children:"5"}),t("option",{value:"6",children:"6"}),t("option",{value:"7",children:"7"}),t("option",{value:"8",children:"8"}),t("option",{value:"9",children:"9"})]})})]}),e.isVisible(r.fødselsdatoer)&&t(u,{margin:"xl",children:t(C,{name:r.fødselsdatoer,render:()=>[t(p.DatePicker,{name:`${r.fødselsdatoer}.0`,label:o(a,"søknad.fødselsdato"),minDate:f().subtract(6,"month").toDate(),maxDate:f().toDate(),validate:m=>je(m,a),placeholder:"dd.mm.åååå"},`${r.fødselsdatoer}.0`)]})})]})};try{Fdt.displayName="Fdt",Fdt.__docgenInfo={description:"",displayName:"Fdt",props:{formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}}}}}catch{}var x=(e=>(e.TERMINBEKREFTELSE="terminbekreftelse",e.OMSORGSOVERTAKELSE="omsorgsovertakelse",e))(x||{}),R=(e=>(e.TERMINBEKREFTELSE="I000062",e.OMSORGSOVERTAKELSE="I000042",e))(R||{});function Oe(e){const n={withCredentials:!0,timeout:45e3,headers:{"content-type":"multipart/form-data"}},a=new FormData;a.append("id",e.id),a.append("vedlegg",e.file,e.filename);const m=`${Be.REST_API_URL}/storage/vedlegg`;return ge.post(m,a,n)}const Ie={saveAttachment:Oe},Q=[".pdf",".jpeg",".jpg",".png"],_e=(e,n)=>n===r.terminbekreftelse?M(e,x.TERMINBEKREFTELSE,R.TERMINBEKREFTELSE):M(e,x.OMSORGSOVERTAKELSE,R.OMSORGSOVERTAKELSE),xe=(e,n)=>{const a=_e(e,n);return a.pending=!0,a},Re=({pending:e,uploaded:n,file:{name:a}})=>!e&&!n||!Ve(a),Ve=e=>{const n=e.split(".").pop();return Q.includes(`.${n.toLowerCase()}`)};let L;const N=({attachments:e,name:n,onFileInputClick:a,label:m,legend:E,description:h,...A})=>{const{values:j}=X();async function O(s){try{const c=await Ie.saveAttachment(s);s=k(s),s.url=c.headers.location,s.uploaded=!0,s.uuid=c.data}catch{k(s)}}async function I(s,c){for(const F of s)await O(F),d(s,F,c);const v=[...s.filter(Re)];_(s,v,c)}function _(s,c,v){c.forEach(F=>{F=k(F),d(s,F,v)})}function d(s,c,v){v(s.indexOf(c),c)}function k(s){return s.pending=!1,s}function y(s,c){const v=xe(s,n);return c(v),v}return B(b,{children:[t(Z,{name:n,accept:Q.join(", "),onFilesSelect:async(s,{push:c,replace:v,remove:F})=>{L=F;const Y=s.map($=>y($,c));await I([...j[n],...Y],v)},onClick:a,legend:E,buttonLabel:m,description:h,...A}),t(u,{margin:"xl",children:t(ve,{attachments:e.filter(s=>!fe(s)),showFileSize:!0,onDelete:s=>{L(e.indexOf(s))}})})]})};try{N.displayName="FormikFileUploader",N.__docgenInfo={description:"",displayName:"FormikFileUploader",props:{attachments:{defaultValue:null,description:"",name:"attachments",required:!0,type:{name:"Attachment[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"erBarnetFødt"'},{value:'"adopsjonAvEktefellesBarn"'},{value:'"antallBarn"'},{value:'"adopsjonsdato"'},{value:'"søkerAdopsjonAlene"'},{value:'"fødselsdatoer"'},{value:'"termindato"'},{value:'"omsorgsovertakelse"'},{value:'"terminbekreftelse"'},{value:'"terminbekreftelsedato"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"any"}},onFileInputClick:{defaultValue:null,description:"",name:"onFileInputClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const V=({visibility:e,formValues:n})=>{const a=D();return n.erBarnetFødt===i.YES||n.erBarnetFødt===i.UNANSWERED?null:B(b,{children:[e.isVisible(r.antallBarn)&&B(b,{children:[t(u,{margin:"xl",children:t(p.RadioGroup,{name:r.antallBarn,radios:[{label:l(a,"omBarnet.radiobutton.ettbarn"),value:"1"},{label:l(a,"omBarnet.radiobutton.tvillinger"),value:"2"},{label:l(a,"omBarnet.radiobutton.flere"),value:"3"}],legend:o(a,"omBarnet.text.antallBarn.termin")})}),n.antallBarn&&parseInt(n.antallBarn,10)>=3&&t(u,{margin:"xl",children:B(p.Select,{name:r.antallBarn,label:l(a,"omBarnet.text.antallBarn.termin"),children:[t("option",{value:"3",children:"3"}),t("option",{value:"4",children:"4"}),t("option",{value:"5",children:"5"}),t("option",{value:"6",children:"6"}),t("option",{value:"7",children:"7"}),t("option",{value:"8",children:"8"}),t("option",{value:"9",children:"9"})]})})]}),e.isVisible(r.termindato)&&t(u,{margin:"xl",children:t(p.DatePicker,{name:r.termindato,label:o(a,"søknad.termindato"),minDate:f().subtract(3,"week").toDate(),maxDate:f().add(18,"weeks").add(3,"days").toDate(),validate:m=>Ne(m,a),placeholder:"dd.mm.åååå"})}),e.isVisible(r.terminbekreftelse)&&t(b,{children:B(u,{margin:"xl",children:[t(N,{attachments:n.terminbekreftelse||[],label:o(a,"vedlegg.lastoppknapp.label"),legend:o(a,"vedlegg.terminbekreftelse"),description:o(a,"terminbekreftelsen.text.terminbekreftelsen"),name:r.terminbekreftelse}),t(K,{apneLabel:t(q,{id:"psg.åpneLabel"}),children:t(P,{backgroundColor:"white"})})]})}),e.isVisible(r.terminbekreftelsedato)&&t(u,{margin:"xl",children:t(p.DatePicker,{name:r.terminbekreftelsedato,label:o(a,"søknad.terminbekreftelsesdato"),minDate:f(n.termindato).subtract(18,"week").subtract(3,"day").toDate(),maxDate:f().toDate(),validate:m=>Se(m,n.termindato,a)})})]})};try{V.displayName="Termin",V.__docgenInfo={description:"",displayName:"Termin",props:{formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}}}}}catch{}const U=({visibility:e,formValues:n})=>{const a=D();return n.adopsjonAvEktefellesBarn===i.UNANSWERED?null:B(b,{children:[e.isVisible(r.adopsjonsdato)&&t(u,{margin:"xl",children:t(p.DatePicker,{name:r.adopsjonsdato,label:n.adopsjonAvEktefellesBarn===i.YES?o(a,"omBarnet.adopsjon.spørsmål.stebarnsadopsjondato"):o(a,"omBarnet.adopsjon.spørsmål.overtaomsorgdato"),minDate:f().subtract(6,"month").toDate(),validate:n.adopsjonAvEktefellesBarn===i.YES?m=>he(m,a):m=>Ae(m,a),placeholder:"dd.mm.åååå"})}),e.isVisible(r.antallBarn)&&B(b,{children:[t(u,{margin:"xl",children:t(p.RadioGroup,{name:r.antallBarn,radios:[{label:l(a,"omBarnet.radiobutton.ettbarn"),value:"1"},{label:l(a,"omBarnet.radiobutton.toBarn"),value:"2"},{label:l(a,"omBarnet.radiobutton.flere"),value:"3"}],legend:o(a,"omBarnet.adopsjon.spørsmål.antallBarnAdoptert")})}),n.antallBarn&&parseInt(n.antallBarn,10)>=3&&t(u,{margin:"xl",children:B(p.Select,{name:r.antallBarn,label:o(a,"omBarnet.text.antallBarn.omsorgsovertakelse"),children:[t("option",{value:"3",children:"3"}),t("option",{value:"4",children:"4"}),t("option",{value:"5",children:"5"}),t("option",{value:"6",children:"6"}),t("option",{value:"7",children:"7"}),t("option",{value:"8",children:"8"}),t("option",{value:"9",children:"9"})]})})]}),e.isVisible(r.fødselsdatoer)&&t(u,{margin:"xl",children:t(C,{name:r.fødselsdatoer,render:()=>[...Array(parseInt(n.antallBarn,10))].map((m,E)=>t(u,{padBottom:"xl",children:t(p.DatePicker,{name:`${r.fødselsdatoer}.${E}`,label:n.antallBarn==="1"?o(a,"søknad.fødselsdato"):o(a,`omBarnet.adopsjon.spørsmål.fødselsdato.${E+1}`),minDate:f().subtract(15,"year").toDate(),maxDate:f().toDate(),validate:h=>ye(h,n.adopsjonsdato,a),placeholder:"dd.mm.åååå"})},`${E}`))})}),e.isVisible(r.søkerAdopsjonAlene)&&t(u,{margin:"xl",children:t(p.YesOrNoQuestion,{name:r.søkerAdopsjonAlene,legend:o(a,"omBarnet.adopsjon.spørsmål.adoptererDuAlene"),labels:{no:o(a,"omBarnet.adopsjon.text.nei"),yes:o(a,"omBarnet.adopsjon.text.ja")}})}),e.isVisible(r.omsorgsovertakelse)&&t(b,{children:B(u,{margin:"xl",children:[t(N,{attachments:n.omsorgsovertakelse||[],label:o(a,"vedlegg.lastoppknapp.label"),legend:o(a,"vedlegg.adopsjon"),name:r.omsorgsovertakelse,description:o(a,"omBarnet.adopsjon.veilederpanel.adopsjon.text")}),t(K,{apneLabel:t(q,{id:"psg.åpneLabel"}),children:t(P,{backgroundColor:"white"})})]})})]})};try{U.displayName="Adopsjon",U.__docgenInfo={description:"",displayName:"Adopsjon",props:{formValues:{defaultValue:null,description:"",name:"formValues",required:!0,type:{name:"OmBarnetFormData"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!0,type:{name:"QuestionVisibility<OmBarnetFormField, undefined>"}},kjønn:{defaultValue:null,description:"",name:"kjønn",required:!0,type:{name:"enum",value:[{value:'"M"'},{value:'"K"'}]}}}}}catch{}const Ue=(e,n,a)=>e==="adopsjon"&&n!==i.UNANSWERED||e==="fødsel"&&a!==i.UNANSWERED,T=({person:e})=>{const n=D(),a=re("omBarnet"),m=ee();ne(l(n,"søknad.omBarnet"));const{state:E,dispatch:h}=ce(),A=E.søknad.søkersituasjon,{omBarnet:j}=E.søknad,{situasjon:O}=A,I=Ue(O,j.erBarnetFødt,j.adopsjonAvEktefellesBarn)?ie:j;le("sidevisning",{app:"engangsstonadny",team:"foreldrepenger",pageKey:be.OmBarnet});const _=d=>{h(oe.setOmBarnet({erBarnetFødt:d.erBarnetFødt,adopsjonAvEktefellesBarn:d.adopsjonAvEktefellesBarn,antallBarn:d.antallBarn,adopsjonsdato:d.adopsjonsdato,søkerAdopsjonAlene:d.søkerAdopsjonAlene,fødselsdatoer:d.fødselsdatoer||[],termindato:d.termindato,terminbekreftelse:d.terminbekreftelse||[],omsorgsovertakelse:d.omsorgsovertakelse||[],terminbekreftelsedato:d.terminbekreftelsedato})),m("/soknad/utenlandsopphold")};return t(p.FormikWrapper,{initialValues:I,onSubmit:d=>_(d),renderForm:({values:d})=>{const k=ke.getVisbility({...d,situasjon:A.situasjon,kjønn:e.kjønn}),y=k.areAllQuestionsAnswered();return t(te,{bannerTitle:o(n,"søknad.pageheading"),activeStepId:"omBarnet",pageTitle:o(n,"søknad.omBarnet"),backLinkHref:de("omBarnet"),onCancel:()=>me(h,m),steps:ue,children:t(p.Form,{includeButtons:!1,cleanup:()=>Fe(d),noButtonsContentRenderer:y?void 0:()=>t(pe,{children:l(n,"søknad.footer.spørsmålMåBesvares")}),children:B("div",{className:a.block,children:[A.situasjon==="adopsjon"?t(u,{children:t(p.YesOrNoQuestion,{name:r.adopsjonAvEktefellesBarn,legend:o(n,"omBarnet.adopsjon.spørsmål.stebarnsadopsjon"),labels:{no:o(n,"omBarnet.adopsjon.text.nei"),yes:o(n,"omBarnet.adopsjon.text.ja")}})}):t(u,{children:t(p.YesOrNoQuestion,{name:r.erBarnetFødt,legend:o(n,"omBarnet.spørsmål.erBarnetFødt"),labels:{no:o(n,"omBarnet.radiobutton.nei"),yes:o(n,"omBarnet.radiobutton.ja")}})}),t(U,{visibility:k,formValues:d,kjønn:e.kjønn}),t(De,{visibility:k,formValues:d}),t(V,{visibility:k,formValues:d}),y&&t(u,{margin:"xl",textAlignCenter:!0,children:t(ae,{type:"submit",children:o(n,"søknad.gåVidere")})})]})})})}})},Qe=T;try{T.displayName="OmBarnet",T.__docgenInfo={description:"",displayName:"OmBarnet",props:{person:{defaultValue:null,description:"",name:"person",required:!0,type:{name:"Person"}}}}}catch{}export{Qe as O};
//# sourceMappingURL=OmBarnet-a3063591.js.map
