import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{C as v}from"./CustomInput-BiyfBVUY.js";import{b as p,c as D,d as O,e as R,f as U}from"./index-Cjvhi7mM.js";import{r as A}from"./index-BAAwwy_G.js";import"./cn-BQIMLNQW.js";import"./bundle-mjs-BTGVH9Kg.js";import"./iconBase-GPK5UwVh.js";const H={title:"Custom UI/CustomInput",component:v,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{placeholder:"Enter text..."}},s={args:{placeholder:"Enter email...",leftIcon:e.jsx(p,{})}},t={args:{placeholder:"Enter password...",rightIcon:e.jsx(D,{})}},o={args:{placeholder:"Search...",leftIcon:e.jsx(O,{}),rightIcon:e.jsx(p,{})}},a={args:{placeholder:"Amount...",leftItem:e.jsx("span",{className:"text-sm font-medium",children:"$"}),rightItem:e.jsx("span",{className:"text-sm text-muted-foreground",children:"USD"})}},n={render:M=>{const[l,i]=A.useState(!1);return e.jsx(v,{type:l?"text":"password",placeholder:"Enter password...",leftIcon:e.jsx(D,{}),rightIcon:l?e.jsx("button",{type:"button",onClick:()=>i(!1),className:"cursor-pointer hover:text-foreground",children:e.jsx(R,{})}):e.jsx("button",{type:"button",onClick:()=>i(!0),className:"cursor-pointer hover:text-foreground",children:e.jsx(U,{})}),...M})}},c={args:{placeholder:"Custom styling...",leftIcon:e.jsx(p,{}),classNames:{container:"border-purple-500 focus-within:border-purple-600 focus-within:ring-purple-500/20",leftIcon:"text-purple-500"}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter email...",
    leftIcon: <FiMail />
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,I,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter password...",
    rightIcon: <FiLock />
  }
}`,...(w=(I=t.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var S,C,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    leftIcon: <FiSearch />,
    rightIcon: <FiMail />
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var j,E,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: "Amount...",
    leftItem: <span className="text-sm font-medium">$</span>,
    rightItem: <span className="text-sm text-muted-foreground">USD</span>
  }
}`,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var F,W,N;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [showPassword, setShowPassword] = useState(false);
    return <CustomInput type={showPassword ? "text" : "password"} placeholder="Enter password..." leftIcon={<FiLock />} rightIcon={showPassword ? <button type="button" onClick={() => setShowPassword(false)} className="cursor-pointer hover:text-foreground">
              <FiEyeOff />
            </button> : <button type="button" onClick={() => setShowPassword(true)} className="cursor-pointer hover:text-foreground">
              <FiEye />
            </button>} {...args} />;
  }
}`,...(N=(W=n.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,k,L;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: "Custom styling...",
    leftIcon: <FiMail />,
    classNames: {
      container: "border-purple-500 focus-within:border-purple-600 focus-within:ring-purple-500/20",
      leftIcon: "text-purple-500"
    }
  }
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const J=["Default","WithLeftIcon","WithRightIcon","WithBothIcons","WithCustomItem","WithPasswordToggle","WithCustomColors"];export{r as Default,o as WithBothIcons,c as WithCustomColors,a as WithCustomItem,s as WithLeftIcon,n as WithPasswordToggle,t as WithRightIcon,J as __namedExportsOrder,H as default};
