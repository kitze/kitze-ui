import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{M as y}from"./MobileHeader-BiyZXIxI.js";import"./index-BAAwwy_G.js";import"./index-CkWJmnhb.js";import"./index-rwsT5t3y.js";import"./index-DYDCk8XR.js";import"./index-aiH20kqd.js";import"./index-5gkQajTx.js";import"./index-C0PioRJ3.js";import"./index-CMCTO2iX.js";import"./Combination-B1YLa0Eu.js";import"./cn-BQIMLNQW.js";import"./bundle-mjs-BTGVH9Kg.js";import"./proxy-mdE-wRji.js";import"./index-gKVvS9ls.js";import"./iconBase-GPK5UwVh.js";import"./ActionIcon-BclKwwKF.js";import"./SimpleTooltip-Ym_sAQPg.js";import"./index-uc6vw6VG.js";import"./Button-CE2E_Txw.js";import"./index-yT92qBqu.js";import"./Spinner-BXKv58uh.js";import"./index-CTJpxZ8G.js";import"./index-4l4BLQi6.js";const Y={title:"Custom UI/MobileHeader",component:y,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{leftSide:{control:"text",description:"Content for the left side of the header"},middle:{control:"text",description:"Content for the middle of the header"},drawerContent:{control:"text",description:"Content for the drawer menu"},classNames:{control:"object",description:"Custom class names for different parts of the header"}}},l=()=>e.jsx("div",{className:"font-bold text-xl",children:"Logo"}),i=()=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Menu"}),e.jsxs("nav",{className:"flex flex-col gap-2",children:[e.jsx("a",{href:"#",className:"hover:text-blue-500",children:"Home"}),e.jsx("a",{href:"#",className:"hover:text-blue-500",children:"About"}),e.jsx("a",{href:"#",className:"hover:text-blue-500",children:"Services"}),e.jsx("a",{href:"#",className:"hover:text-blue-500",children:"Contact"})]})]}),s={args:{leftSide:e.jsx(l,{}),middle:e.jsx("span",{className:"font-semibold",children:"Page Title"}),drawerContent:e.jsx(i,{})}},a={args:{leftSide:e.jsx(l,{}),drawerContent:e.jsx(i,{})}},r={args:{leftSide:e.jsx(l,{}),middle:e.jsx("span",{className:"font-semibold",children:"Page Title"}),drawerContent:e.jsx(i,{}),classNames:{root:"bg-gray-100",container:"max-w-7xl mx-auto",leftSide:"text-blue-500",middle:"text-gray-700",rightSide:"text-gray-600",menuButton:"bg-blue-50 rounded-full"}}},o={args:{leftSide:e.jsx(l,{}),middle:e.jsx("span",{className:"font-semibold",children:"Scroll to see shadow"}),drawerContent:e.jsx(i,{})},decorators:[t=>e.jsxs("div",{children:[e.jsx(t,{}),e.jsxs("div",{className:"mt-20 p-4",children:[e.jsx("p",{className:"mb-4",children:"Scroll down to see the header shadow effect"}),Array.from({length:20}).map((D,d)=>e.jsxs("p",{className:"mb-4",children:["Scroll content ",d+1]},d))]})]})]},n={args:{leftSide:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:"https://via.placeholder.com/32",alt:"Logo",className:"w-8 h-8 rounded"}),e.jsx("span",{className:"font-bold",children:"Brand"})]}),middle:e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx("span",{className:"text-sm",children:"📱"}),e.jsx("span",{className:"font-medium",children:"Mobile App"})]}),drawerContent:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-6",children:"Navigation"}),e.jsx("div",{className:"flex flex-col gap-4",children:["Dashboard","Profile","Settings","Help"].map(t=>e.jsx("button",{className:"text-left hover:bg-gray-50 p-2 rounded transition-colors",children:t},t))})]})}};var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    leftSide: <Logo />,
    middle: <span className="font-semibold">Page Title</span>,
    drawerContent: <DrawerContent />
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,h,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    leftSide: <Logo />,
    drawerContent: <DrawerContent />
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,u,N;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    leftSide: <Logo />,
    middle: <span className="font-semibold">Page Title</span>,
    drawerContent: <DrawerContent />,
    classNames: {
      root: "bg-gray-100",
      container: "max-w-7xl mx-auto",
      leftSide: "text-blue-500",
      middle: "text-gray-700",
      rightSide: "text-gray-600",
      menuButton: "bg-blue-50 rounded-full"
    }
  }
}`,...(N=(u=r.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var b,j,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    leftSide: <Logo />,
    middle: <span className="font-semibold">Scroll to see shadow</span>,
    drawerContent: <DrawerContent />
  },
  decorators: [Story => <div>
        <Story />
        <div className="mt-20 p-4">
          <p className="mb-4">Scroll down to see the header shadow effect</p>
          {Array.from({
        length: 20
      }).map((_, i) => <p key={i} className="mb-4">
              Scroll content {i + 1}
            </p>)}
        </div>
      </div>]
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,C,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    leftSide: <div className="flex items-center gap-2">
        <img src="https://via.placeholder.com/32" alt="Logo" className="w-8 h-8 rounded" />
        <span className="font-bold">Brand</span>
      </div>,
    middle: <div className="flex items-center justify-center gap-4">
        <span className="text-sm">📱</span>
        <span className="font-medium">Mobile App</span>
      </div>,
    drawerContent: <div className="p-6">
        <h3 className="text-lg font-bold mb-6">Navigation</h3>
        <div className="flex flex-col gap-4">
          {["Dashboard", "Profile", "Settings", "Help"].map(item => <button key={item} className="text-left hover:bg-gray-50 p-2 rounded transition-colors">
              {item}
            </button>)}
        </div>
      </div>
  }
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const Z=["Default","WithoutMiddle","CustomStyles","WithScrollBehavior","WithCustomContent"];export{r as CustomStyles,s as Default,n as WithCustomContent,o as WithScrollBehavior,a as WithoutMiddle,Z as __namedExportsOrder,Y as default};
