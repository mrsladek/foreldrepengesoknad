var g=Object.defineProperty;var a=(e,n)=>g(e,"name",{value:n,configurable:!0});import{a as t,j as y}from"./jsx-runtime-31fae5e2.js";import{b as h}from"./bemUtils-a4610ebe.js";import{A as _}from"./ActionLink-0f2b392d.js";import{g as L}from"./guid-ee896abd.js";import"./index-09ad7028.js";import"./iframe-9a42178f.js";import"./Link-53e70364.js";import"./clsx.m-26950cc3.js";const m=a(e=>t("svg",{focusable:"false",role:"img","aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",...e,children:t("path",{d:"M3.516 3.5h16v20h-16zm4-3h8v3h-8zm-6.5 3h22M7.516 7v12m4-12v12m4-12v12",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,fill:"none"})}),"TrashcanIkon");try{m.displayName="TrashcanIkon",m.__docgenInfo={description:"",displayName:"TrashcanIkon",props:{}}}catch{}const d=a(({onClick:e,ariaLabel:n})=>t("button",{type:"button",className:"slettKnapp","aria-label":n,onClick:r=>{r.stopPropagation(),e()},children:t(m,{width:20,height:20})}),"SlettKnapp");try{d.displayName="SlettKnapp",d.__docgenInfo={description:"",displayName:"SlettKnapp",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const c=h("itemList"),o=c.child("item");function l({items:e,onDelete:n,onEdit:r,labelRenderer:p,iconRender:u,getItemId:f,getItemTitle:I}){return t("ol",{className:c.classNames(c.block),children:e.map(i=>{const s=I(i);return y("li",{className:o.block,children:[u&&t("span",{className:o.element("icon"),role:"presentation",children:u(i)}),t("span",{className:o.element("label"),children:p?p(i):r?t(_,{onClick:()=>r(i),children:s}):s}),n&&t("span",{className:o.element("delete"),children:t(d,{ariaLabel:`Fjern ${s}`,onClick:()=>n(i)})})]},f(i)||L())})})}a(l,"ItemList");try{l.displayName="ItemList",l.__docgenInfo={description:"",displayName:"ItemList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},getItemId:{defaultValue:null,description:"",name:"getItemId",required:!0,type:{name:"(item: T) => string | undefined"}},getItemTitle:{defaultValue:null,description:"",name:"getItemTitle",required:!0,type:{name:"(item: T) => string"}},labelRenderer:{defaultValue:null,description:"",name:"labelRenderer",required:!1,type:{name:"((item: T, onEdit?: ((item: T) => void)) => ReactNode)"}},iconRender:{defaultValue:null,description:"",name:"iconRender",required:!1,type:{name:"((item: T) => ReactNode)"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((item: T) => void)"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!1,type:{name:"((item: T) => void)"}}}}}catch{}const j={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react';
import ItemList, { ItemListProps } from './ItemList';

export default {
    title: 'components/ItemList',
    component: ItemList,
} as ComponentMeta<typeof ItemList>;

interface Item {
    title: string;
    id: string;
}

const Template: Story<ItemListProps<Item>> = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {
    getItemId: (item) => item.id,
    getItemTitle: (item) => item.title,
    items: [{ title: 'Test Item', id: 'test' }],
};
`,locationsMap:{default:{startLoc:{col:45,line:14},endLoc:{col:77,line:14},startBody:{col:45,line:14},endBody:{col:77,line:14}}}}},title:"components/ItemList",component:l},T=a(e=>t(l,{...e}),"Template"),b=T.bind({});b.args={getItemId:e=>e.id,getItemTitle:e=>e.title,items:[{title:"Test Item",id:"test"}]};const D=["Default"];export{b as Default,D as __namedExportsOrder,j as default};
//# sourceMappingURL=ItemList.stories-3ebf7f8b.js.map
