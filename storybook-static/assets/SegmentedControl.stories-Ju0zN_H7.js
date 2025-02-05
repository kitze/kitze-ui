import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{S as l}from"./SegmentedControl-CKo5oGal.js";import{a as u,k as V,b as A,H as D,d as P}from"./index-gKVvS9ls.js";import"./cn-BQIMLNQW.js";import"./bundle-mjs-BTGVH9Kg.js";import"./index-BAAwwy_G.js";import"./index-Zrj-BPEk.js";import"./index-rwsT5t3y.js";import"./index-DYDCk8XR.js";import"./index-aiH20kqd.js";import"./index-CWOjcUDr.js";import"./index-5gkQajTx.js";import"./iconBase-GPK5UwVh.js";const Q={title:"Custom UI/SegmentedControl",component:l,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{value:"all",onChange:a=>console.log(a),options:[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"completed",label:"Completed"}]}},s={args:{value:"home",options:[{value:"home",label:"Home",icon:e.jsx(u,{className:"h-4 w-4"})},{value:"profile",label:"Profile",icon:e.jsx(V,{className:"h-4 w-4"})},{value:"settings",label:"Settings",icon:e.jsx(A,{className:"h-4 w-4"})}]}},o={args:{value:"home",options:[{value:"home",label:"",icon:e.jsx(u,{className:"h-4 w-4"})},{value:"heart",label:"",icon:e.jsx(D,{className:"h-4 w-4"})},{value:"mail",label:"",icon:e.jsx(P,{className:"h-4 w-4"})}]}},t={args:{value:"daily",className:"bg-blue-100",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}]}},r={args:{value:"grid",onChange:a=>console.log(a),options:[]},render:()=>{const a=[{value:"grid",label:"Grid View",icon:e.jsx(u,{className:"h-4 w-4"})},{value:"list",label:"List View",icon:e.jsx(V,{className:"h-4 w-4"})},{value:"table",label:"Table View",icon:e.jsx(A,{className:"h-4 w-4"})}];return e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(l,{value:"grid",options:a,onChange:m=>console.log(`Selected: ${m}`)}),e.jsx("p",{className:"text-sm text-gray-500",children:"Click to change view"})]})}},i={args:{value:"s",onChange:a=>console.log(a),options:[]},render:()=>{const a=[{value:"s",label:"Small"},{value:"m",label:"Medium"},{value:"l",label:"Large"}];return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{value:"s",onChange:m=>console.log(m),options:a,className:"h-6 text-[11px]"}),e.jsx(l,{value:"m",options:a}),e.jsx(l,{value:"l",options:a,className:"h-10 text-sm"})]})}},c={args:{value:"upcoming",options:[{value:"upcoming",label:"Upcoming Events"},{value:"inprogress",label:"In Progress"},{value:"completed",label:"Completed Events"}],className:"max-w-md"}};var p,v,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "all",
    onChange: value => console.log(value),
    options: [{
      value: "all",
      label: "All"
    }, {
      value: "active",
      label: "Active"
    }, {
      value: "completed",
      label: "Completed"
    }]
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var d,b,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: "home",
    options: [{
      value: "home",
      label: "Home",
      icon: <HiHome className="h-4 w-4" />
    }, {
      value: "profile",
      label: "Profile",
      icon: <HiUser className="h-4 w-4" />
    }, {
      value: "settings",
      label: "Settings",
      icon: <HiCog className="h-4 w-4" />
    }]
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,N,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: "home",
    options: [{
      value: "home",
      label: "",
      icon: <HiHome className="h-4 w-4" />
    }, {
      value: "heart",
      label: "",
      icon: <HiHeart className="h-4 w-4" />
    }, {
      value: "mail",
      label: "",
      icon: <HiMail className="h-4 w-4" />
    }]
  }
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,S,H;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: "daily",
    className: "bg-blue-100",
    options: [{
      value: "daily",
      label: "Daily"
    }, {
      value: "weekly",
      label: "Weekly"
    }, {
      value: "monthly",
      label: "Monthly"
    }]
  }
}`,...(H=(S=t.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var y,f,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: "grid",
    onChange: value => console.log(value),
    options: []
  },
  render: () => {
    const options = [{
      value: "grid",
      label: "Grid View",
      icon: <HiHome className="h-4 w-4" />
    }, {
      value: "list",
      label: "List View",
      icon: <HiUser className="h-4 w-4" />
    }, {
      value: "table",
      label: "Table View",
      icon: <HiCog className="h-4 w-4" />
    }];
    return <div className="flex flex-col gap-4 items-center">
        <SegmentedControl value="grid" options={options} onChange={value => console.log(\`Selected: \${value}\`)} />
        <p className="text-sm text-gray-500">Click to change view</p>
      </div>;
  }
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,L,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: "s",
    onChange: value => console.log(value),
    options: []
  },
  render: () => {
    const options = [{
      value: "s",
      label: "Small"
    }, {
      value: "m",
      label: "Medium"
    }, {
      value: "l",
      label: "Large"
    }];
    return <div className="flex flex-col gap-4">
        <SegmentedControl value="s" onChange={value => console.log(value)} options={options} className="h-6 text-[11px]" />
        <SegmentedControl value="m" options={options} />
        <SegmentedControl value="l" options={options} className="h-10 text-sm" />
      </div>;
  }
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var E,M,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: "upcoming",
    options: [{
      value: "upcoming",
      label: "Upcoming Events"
    }, {
      value: "inprogress",
      label: "In Progress"
    }, {
      value: "completed",
      label: "Completed Events"
    }],
    className: "max-w-md"
  }
}`,...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const X=["Default","WithIcons","IconsOnly","CustomStyles","Interactive","Sizes","LongLabels"];export{t as CustomStyles,n as Default,o as IconsOnly,r as Interactive,c as LongLabels,i as Sizes,s as WithIcons,X as __namedExportsOrder,Q as default};
