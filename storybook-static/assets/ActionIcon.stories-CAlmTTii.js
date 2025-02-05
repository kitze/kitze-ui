import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{A as o}from"./ActionIcon-BclKwwKF.js";import{H as i,a as n,b as I,c as g,d as r}from"./index-gKVvS9ls.js";import"./cn-BQIMLNQW.js";import"./bundle-mjs-BTGVH9Kg.js";import"./SimpleTooltip-Ym_sAQPg.js";import"./index-BAAwwy_G.js";import"./index-uc6vw6VG.js";import"./index-rwsT5t3y.js";import"./index-DYDCk8XR.js";import"./index-aiH20kqd.js";import"./index-C0PioRJ3.js";import"./index-CMCTO2iX.js";import"./index-5gkQajTx.js";import"./Button-CE2E_Txw.js";import"./index-yT92qBqu.js";import"./Spinner-BXKv58uh.js";import"./index-CTJpxZ8G.js";import"./iconBase-GPK5UwVh.js";import"./index-4l4BLQi6.js";import"./proxy-mdE-wRji.js";const le={title:"Custom UI/ActionIcon",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{Icon:{control:"select",options:["HiHeart","HiHome","HiCog","HiTrash","HiMail"],mapping:{HiHeart:i,HiHome:n,HiCog:I,HiTrash:g,HiMail:r}},iconSize:{control:{type:"number",min:12,max:48,step:2}},tooltip:{control:"text"},title:{control:"text"},onClick:{action:"clicked"}}},t={args:{Icon:i,iconSize:20}},s={args:{Icon:r,iconSize:20,tooltip:"Send email"}},a={args:{Icon:I,iconSize:20,title:"Settings"}},c={args:{Icon:n,iconSize:32}},l={args:{Icon:g,iconSize:20,tooltip:"Delete item",classNames:{root:"bg-red-100 hover:bg-red-200",icon:"text-red-600"}}},m={args:{Icon:i,iconSize:20},render:H=>e.jsx("div",{className:"flex gap-2 flex-wrap max-w-[300px]",children:[i,n,I,g,r].map((O,x)=>e.jsx(o,{Icon:O,tooltip:`Action ${x+1}`,onClick:()=>console.log(`Clicked icon ${x+1}`)},x))})},p={args:{Icon:r,iconSize:20},render:H=>e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{Icon:r,tooltip:"Send message",classNames:{root:"bg-blue-100 hover:bg-blue-200",icon:"text-blue-600"}}),e.jsx(o,{Icon:i,tooltip:"Like",classNames:{root:"bg-pink-100 hover:bg-pink-200",icon:"text-pink-600"}}),e.jsx(o,{Icon:g,tooltip:"Delete",classNames:{root:"bg-red-100 hover:bg-red-200",icon:"text-red-600"}})]}),e.jsx("span",{className:"text-sm text-gray-500",children:"Hover over icons to see tooltips"})]})},d={args:{Icon:n,iconSize:20},render:H=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{Icon:n,iconSize:16,tooltip:"Small"}),e.jsx(o,{Icon:n,iconSize:20,tooltip:"Medium"}),e.jsx(o,{Icon:n,iconSize:24,tooltip:"Large"}),e.jsx(o,{Icon:n,iconSize:32,tooltip:"Extra Large"})]})};var S,u,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    Icon: HiHeart,
    iconSize: 20
  }
}`,...(z=(u=t.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var v,b,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    Icon: HiMail,
    iconSize: 20,
    tooltip: "Send email"
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,N,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    Icon: HiCog,
    iconSize: 20,
    title: "Settings"
  }
}`,...(j=(N=a.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var k,A,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    Icon: HiHome,
    iconSize: 32
  }
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var T,y,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    Icon: HiTrash,
    iconSize: 20,
    tooltip: "Delete item",
    classNames: {
      root: "bg-red-100 hover:bg-red-200",
      icon: "text-red-600"
    }
  }
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var M,D,E;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    Icon: HiHeart,
    iconSize: 20
  },
  render: args => <div className="flex gap-2 flex-wrap max-w-[300px]">
      {[HiHeart, HiHome, HiCog, HiTrash, HiMail].map((Icon, index) => <ActionIcon key={index} Icon={Icon} tooltip={\`Action \${index + 1}\`} onClick={() => console.log(\`Clicked icon \${index + 1}\`)} />)}
    </div>
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,W,$;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    Icon: HiMail,
    iconSize: 20
  },
  render: args => <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <ActionIcon Icon={HiMail} tooltip="Send message" classNames={{
        root: "bg-blue-100 hover:bg-blue-200",
        icon: "text-blue-600"
      }} />
        <ActionIcon Icon={HiHeart} tooltip="Like" classNames={{
        root: "bg-pink-100 hover:bg-pink-200",
        icon: "text-pink-600"
      }} />
        <ActionIcon Icon={HiTrash} tooltip="Delete" classNames={{
        root: "bg-red-100 hover:bg-red-200",
        icon: "text-red-600"
      }} />
      </div>
      <span className="text-sm text-gray-500">
        Hover over icons to see tooltips
      </span>
    </div>
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var G,V,_;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    Icon: HiHome,
    iconSize: 20
  },
  render: args => <div className="flex items-center gap-4">
      <ActionIcon Icon={HiHome} iconSize={16} tooltip="Small" />
      <ActionIcon Icon={HiHome} iconSize={20} tooltip="Medium" />
      <ActionIcon Icon={HiHome} iconSize={24} tooltip="Large" />
      <ActionIcon Icon={HiHome} iconSize={32} tooltip="Extra Large" />
    </div>
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const me=["Default","WithTooltip","WithTitle","LargeIcon","CustomStyles","IconGrid","InteractiveExample","SizeVariants"];export{l as CustomStyles,t as Default,m as IconGrid,p as InteractiveExample,c as LargeIcon,d as SizeVariants,a as WithTitle,s as WithTooltip,me as __namedExportsOrder,le as default};
