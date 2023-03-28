var n=Object.defineProperty;var e=(o,r)=>n(o,"name",{value:r,configurable:!0});import{a as l}from"./jsx-runtime-31fae5e2.js";import{B as t}from"./BekreftDialog-40659a13.js";import"./index-09ad7028.js";import"./iframe-9a42178f.js";import"./Block-3b0bf3f1.js";import"./bemUtils-a4610ebe.js";import"./clsx.m-26950cc3.js";import"./index-486433a6.js";import"./index-50ee27ec.js";import"./Heading-512464ff.js";const b={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react';
import BekreftDialog, { BekreftDialogProps } from './BekreftDialog';

export default {
    title: 'components/BekreftDialog',
    component: BekreftDialog,
} as ComponentMeta<typeof BekreftDialog>;

const Template: Story<BekreftDialogProps> = (args) => <BekreftDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Bekreft dialog modal',
    onBekreft: () => console.log('Ja'),
    open: true,
    bekreftLabel: 'Ja',
    avbrytLabel: 'Nei',
    onClose: () => console.log('Klikket på lukk modal'),
};
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:81,line:9},startBody:{col:44,line:9},endBody:{col:81,line:9}}}}},title:"components/BekreftDialog",component:t},a=e(o=>l(t,{...o}),"Template"),i=a.bind({});i.args={children:"Bekreft dialog modal",onBekreft:()=>console.log("Ja"),open:!0,bekreftLabel:"Ja",avbrytLabel:"Nei",onClose:()=>console.log("Klikket på lukk modal")};const y=["Default"];export{i as Default,y as __namedExportsOrder,b as default};
//# sourceMappingURL=BekreftDialog.stories-ce8a3af7.js.map
