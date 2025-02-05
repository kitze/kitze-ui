import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{H as t}from"./HelpTooltipIcon-CKw3kZcW.js";import"./index-gKVvS9ls.js";import"./iconBase-GPK5UwVh.js";import"./index-BAAwwy_G.js";import"./cn-BQIMLNQW.js";import"./bundle-mjs-BTGVH9Kg.js";import"./SimpleTooltip-Ym_sAQPg.js";import"./index-uc6vw6VG.js";import"./index-rwsT5t3y.js";import"./index-DYDCk8XR.js";import"./index-aiH20kqd.js";import"./index-C0PioRJ3.js";import"./index-CMCTO2iX.js";import"./index-5gkQajTx.js";const _={title:"Custom UI/HelpTooltipIcon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"number",min:8,max:48,step:2}},tooltip:{control:"text"}}},s={args:{tooltip:"This is a helpful tooltip"}},o={args:{tooltip:"Larger question mark icon",size:24}},a={args:{tooltip:"Custom styled tooltip icon",classNames:{icon:"text-blue-500 opacity-100 hover:text-blue-600"}}},r={args:{tooltip:"Click here to learn more about this feature"},render:()=>e.jsxs("div",{className:"flex items-center gap-2 p-4 border rounded",children:[e.jsx("span",{children:"Need help?"}),e.jsx(t,{tooltip:"Click here to learn more about this feature"})]})},n={args:{tooltip:"Configure the basic parameters"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Basic setting"}),e.jsx(t,{tooltip:"Configure the basic parameters"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Advanced options"}),e.jsx(t,{tooltip:"These settings are for advanced users",size:16,classNames:{icon:"text-amber-500 opacity-75"}})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Danger zone"}),e.jsx(t,{tooltip:"These actions cannot be undone",size:18,classNames:{icon:"text-red-500 opacity-75"}})]})]})};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tooltip: "This is a helpful tooltip"
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tooltip: "Larger question mark icon",
    size: 24
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tooltip: "Custom styled tooltip icon",
    classNames: {
      icon: "text-blue-500 opacity-100 hover:text-blue-600"
    }
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,f,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tooltip: "Click here to learn more about this feature"
  },
  render: () => <div className="flex items-center gap-2 p-4 border rounded">
      <span>Need help?</span>
      <HelpTooltipIcon tooltip="Click here to learn more about this feature" />
    </div>
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,N,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    tooltip: "Configure the basic parameters"
  },
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Basic setting</span>
        <HelpTooltipIcon tooltip="Configure the basic parameters" />
      </div>
      <div className="flex items-center gap-2">
        <span>Advanced options</span>
        <HelpTooltipIcon tooltip="These settings are for advanced users" size={16} classNames={{
        icon: "text-amber-500 opacity-75"
      }} />
      </div>
      <div className="flex items-center gap-2">
        <span>Danger zone</span>
        <HelpTooltipIcon tooltip="These actions cannot be undone" size={18} classNames={{
        icon: "text-red-500 opacity-75"
      }} />
      </div>
    </div>
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const O=["Default","LargeIcon","CustomStyle","InContext","MultipleExamples"];export{a as CustomStyle,s as Default,r as InContext,o as LargeIcon,n as MultipleExamples,O as __namedExportsOrder,_ as default};
