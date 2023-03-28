var r=Object.defineProperty;var e=(n,t)=>r(n,"name",{value:t,configurable:!0});import{a}from"./jsx-runtime-31fae5e2.js";import{B as o}from"./Banner-44b680ca.js";import"./index-09ad7028.js";import"./iframe-9a42178f.js";import"./bemUtils-a4610ebe.js";const B={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react';
import Banner, { BannerProps } from './Banner';

export default {
    title: 'components/Banner',
    component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Dette er innhold for et banner',
    size: 'small',
};
`,locationsMap:{default:{startLoc:{col:37,line:9},endLoc:{col:67,line:9},startBody:{col:37,line:9},endBody:{col:67,line:9}}}}},title:"components/Banner",component:o},s=e(n=>a(o,{...n}),"Template"),l=s.bind({});l.args={children:"Dette er innhold for et banner",size:"small"};const u=["Default"];export{l as Default,u as __namedExportsOrder,B as default};
//# sourceMappingURL=Banner.stories-80ef072b.js.map
