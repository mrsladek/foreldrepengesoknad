var m=Object.defineProperty;var n=(e,a)=>m(e,"name",{value:a,configurable:!0});import{j as d,a as o}from"./jsx-runtime-31fae5e2.js";import{H as b}from"./Heading-512464ff.js";import{r as x,R as h}from"./index-09ad7028.js";import{c as f}from"./clsx.m-26950cc3.js";import"./iframe-9a42178f.js";var u=globalThis&&globalThis.__rest||function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)a.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r};const g=x.forwardRef((e,a)=>{var{className:r,size:t="medium",spacing:l,as:p="p"}=e,y=u(e,["className","size","spacing","as"]);return h.createElement(p,Object.assign({},y,{ref:a,className:f(r,"navds-body-short",{"navds-body-short--small":t==="small","navds-typo--spacing":!!l})}))}),i=g,s=n(e=>d("div",{className:"textWithLabel",children:[e.label&&o(b,{size:"xsmall",level:"3",children:e.label}),Array.isArray(e.text)&&e.text.map((a,r)=>o(i,{children:a},`${a}-${r}`)),!Array.isArray(e.text)&&o(i,{children:e.text})]}),"DisplayTextWithLabel"),c=s;try{s.displayName="DisplayTextWithLabel",s.__docgenInfo={description:"",displayName:"DisplayTextWithLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}}}}}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react';
import DisplayTextWithLabel, { DisplayTextWithLabelProps } from './DisplayTextWithLabel';

export default {
    title: 'components/DisplayTextWithLabel',
    component: DisplayTextWithLabel,
} as ComponentMeta<typeof DisplayTextWithLabel>;

const Template: Story<DisplayTextWithLabelProps> = (args) => <DisplayTextWithLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Innehold i en block',
    text: 'Whatever',
};
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:95,line:9},startBody:{col:51,line:9},endBody:{col:95,line:9}}}}},title:"components/DisplayTextWithLabel",component:c},T=n(e=>o(c,{...e}),"Template"),D=T.bind({});D.args={label:"Innehold i en block",text:"Whatever"};const N=["Default"];export{D as Default,N as __namedExportsOrder,S as default};
//# sourceMappingURL=DisplayTextWithLabel.stories-ef900f3d.js.map
