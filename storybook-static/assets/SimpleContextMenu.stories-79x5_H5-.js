import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{C as o,S as c,a as u}from"./ContextCustomMenuItemDelete-D_aL2Naa.js";import{C as n}from"./CustomButton-CwuegIPZ.js";import{m as A,n as p,o as L,l as T}from"./index-gKVvS9ls.js";import"./cn-BQIMLNQW.js";import"./bundle-mjs-BTGVH9Kg.js";import"./index-BAAwwy_G.js";import"./index-CJz98XXH.js";import"./index-rwsT5t3y.js";import"./index-DYDCk8XR.js";import"./index-aiH20kqd.js";import"./index-CgSDeglQ.js";import"./index-CWOjcUDr.js";import"./index-5gkQajTx.js";import"./index-C0PioRJ3.js";import"./index-CMCTO2iX.js";import"./Combination-B1YLa0Eu.js";import"./HelpTooltipIcon-CKw3kZcW.js";import"./SimpleTooltip-Ym_sAQPg.js";import"./index-uc6vw6VG.js";import"./Button-CE2E_Txw.js";import"./index-yT92qBqu.js";import"./Spinner-BXKv58uh.js";import"./index-CTJpxZ8G.js";import"./iconBase-GPK5UwVh.js";import"./index-4l4BLQi6.js";import"./useLinkableComponent-DmDWEDuw.js";import"./link-1ozEyCK4.js";import"./proxy-mdE-wRji.js";const d=({children:t="Edit",...b})=>e.jsx(o,{Icon:A,...b,children:t});d.__docgenInfo={description:"",methods:[],displayName:"ContextCustomMenuItemEdit",props:{children:{defaultValue:{value:'"Edit"',computed:!1},required:!1}}};const de={title:"Custom UI/SimpleContextMenu",component:c,parameters:{layout:"centered"},tags:["autodocs"]},C=()=>e.jsxs("div",{className:"min-w-[160px]",children:[e.jsx(d,{onClick:()=>console.log("Edit clicked")}),e.jsx(o,{Icon:p,onClick:()=>console.log("Duplicate clicked"),children:"Duplicate"}),e.jsx(u,{onClick:()=>console.log("Delete clicked")})]}),s={args:{children:e.jsx(n,{children:"Right Click Me"}),content:e.jsx(C,{})}},i={args:{children:e.jsx("div",{className:"w-32 h-32 bg-gray-100 flex items-center justify-center rounded-lg cursor-context-menu",children:"Right click here"}),content:e.jsx(C,{})}},r={render:t=>e.jsx(c,{...t,children:t.children}),args:{children:e.jsx(n,{children:"Menu with Hints"}),content:e.jsxs("div",{className:"min-w-[180px]",children:[e.jsx(d,{hint:"Edit item details",onClick:()=>console.log("Edit clicked")}),e.jsx(o,{Icon:p,hint:"Create a copy",onClick:()=>console.log("Duplicate clicked"),children:"Duplicate"}),e.jsx(u,{hint:"Permanently delete item",onClick:()=>console.log("Delete clicked")})]})}},l={args:{children:e.jsx(n,{children:"Advanced Menu"}),content:e.jsxs("div",{className:"min-w-[200px]",children:[e.jsx("div",{className:"px-2 py-1.5 text-sm text-gray-500 font-medium",children:"Actions"}),e.jsx(o,{Icon:L,onClick:()=>console.log("Share clicked"),children:"Share"}),e.jsx(o,{Icon:T,onClick:()=>console.log("Approve clicked"),classNames:{icon:"text-green-500",content:"text-green-700"},children:"Approve"}),e.jsx("div",{className:"h-px bg-gray-200 my-1"}),e.jsx(u,{onClick:()=>console.log("Delete clicked"),children:"Remove"})]})}},a={args:{children:e.jsx(n,{children:"Custom Labels"}),content:e.jsxs("div",{className:"min-w-[160px]",children:[e.jsx(d,{onClick:()=>console.log("Edit clicked"),children:"Modify"}),e.jsx(o,{Icon:p,onClick:()=>console.log("Duplicate clicked"),children:"Duplicate"}),e.jsx(u,{onClick:()=>console.log("Delete clicked"),children:"Remove Item"})]})}},m={args:{children:e.jsx(n,{children:"Default Button"}),content:e.jsx(C,{})},render:t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(c,{content:t.content,children:e.jsx(n,{variant:"default",children:"Menu 1"})}),e.jsx(c,{content:t.content,children:e.jsx(n,{variant:"outline",children:"Menu 2"})}),e.jsx(c,{content:t.content,children:e.jsx(n,{variant:"secondary",children:"Menu 3"})})]})};var x,g,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <CustomButton>Right Click Me</CustomButton>,
    content: <DefaultMenuContent />
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var M,k,j;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-lg cursor-context-menu">
        Right click here
      </div>,
    content: <DefaultMenuContent />
  }
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var v,D,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SimpleContextMenu {...args}>{args.children}</SimpleContextMenu>,
  args: {
    children: <CustomButton>Menu with Hints</CustomButton>,
    content: <div className="min-w-[180px]">
        <ContextCustomMenuItemEdit hint="Edit item details" onClick={() => console.log("Edit clicked")} />
        <ContextCustomMenuItem Icon={HiDuplicate} hint="Create a copy" onClick={() => console.log("Duplicate clicked")}>
          Duplicate
        </ContextCustomMenuItem>
        <ContextCustomMenuItemDelete hint="Permanently delete item" onClick={() => console.log("Delete clicked")} />
      </div>
  }
}`,...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var f,S,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <CustomButton>Advanced Menu</CustomButton>,
    content: <div className="min-w-[200px]">
        <div className="px-2 py-1.5 text-sm text-gray-500 font-medium">
          Actions
        </div>
        <ContextCustomMenuItem Icon={HiShare} onClick={() => console.log("Share clicked")}>
          Share
        </ContextCustomMenuItem>
        <ContextCustomMenuItem Icon={HiCheck} onClick={() => console.log("Approve clicked")} classNames={{
        icon: "text-green-500",
        content: "text-green-700"
      }}>
          Approve
        </ContextCustomMenuItem>
        <div className="h-px bg-gray-200 my-1" />
        <ContextCustomMenuItemDelete onClick={() => console.log("Delete clicked")}>
          Remove
        </ContextCustomMenuItemDelete>
      </div>
  }
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,N,E;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <CustomButton>Custom Labels</CustomButton>,
    content: <div className="min-w-[160px]">
        <ContextCustomMenuItemEdit onClick={() => console.log("Edit clicked")}>
          Modify
        </ContextCustomMenuItemEdit>
        <ContextCustomMenuItem Icon={HiDuplicate} onClick={() => console.log("Duplicate clicked")}>
          Duplicate
        </ContextCustomMenuItem>
        <ContextCustomMenuItemDelete onClick={() => console.log("Delete clicked")}>
          Remove Item
        </ContextCustomMenuItemDelete>
      </div>
  }
}`,...(E=(N=a.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,w,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <CustomButton>Default Button</CustomButton>,
    content: <DefaultMenuContent />
  },
  render: args => <div className="flex gap-4">
      <SimpleContextMenu content={args.content}>
        <CustomButton variant="default">Menu 1</CustomButton>
      </SimpleContextMenu>
      <SimpleContextMenu content={args.content}>
        <CustomButton variant="outline">Menu 2</CustomButton>
      </SimpleContextMenu>
      <SimpleContextMenu content={args.content}>
        <CustomButton variant="secondary">Menu 3</CustomButton>
      </SimpleContextMenu>
    </div>
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const pe=["Default","CustomTrigger","WithHints","ComplexMenu","CustomLabels","MultipleTargets"];export{l as ComplexMenu,a as CustomLabels,i as CustomTrigger,s as Default,m as MultipleTargets,r as WithHints,pe as __namedExportsOrder,de as default};
