import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{C as t}from"./CustomButton-CwuegIPZ.js";import{e as n,f as h,d as S,c as ne}from"./index-gKVvS9ls.js";import{r as C}from"./index-BAAwwy_G.js";import{F as ae,a as ee}from"./index-Cjvhi7mM.js";import"./Button-CE2E_Txw.js";import"./index-yT92qBqu.js";import"./bundle-mjs-BTGVH9Kg.js";import"./cn-BQIMLNQW.js";import"./Spinner-BXKv58uh.js";import"./index-CTJpxZ8G.js";import"./iconBase-GPK5UwVh.js";import"./index-4l4BLQi6.js";import"./useLinkableComponent-DmDWEDuw.js";import"./link-1ozEyCK4.js";import"./proxy-mdE-wRji.js";const Be={title:"Custom UI/CustomButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg"]},disabled:{control:"boolean"},onClick:{action:"clicked"}}},o={args:{children:"Click me"}},r={args:{children:"Create New",leftIcon:n}},i={args:{children:"Next Step",rightIcon:h}},c={args:{children:"Send Email",leftIcon:S,rightIcon:h}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{variant:"default",children:"Default Button"}),e.jsx(t,{variant:"destructive",leftIcon:ne,children:"Delete Item"}),e.jsx(t,{variant:"outline",rightIcon:h,children:"Learn More"}),e.jsx(t,{variant:"secondary",leftIcon:S,children:"Contact Us"}),e.jsx(t,{variant:"ghost",rightIcon:h,children:"Skip"}),e.jsx(t,{variant:"link",children:"View Details"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",leftIcon:n,children:"Small"}),e.jsx(t,{size:"default",leftIcon:n,children:"Default"}),e.jsx(t,{size:"lg",leftIcon:n,children:"Large"})]})},u={render:()=>{const[x,a]=C.useState(!1),[s,v]=C.useState(!1),te=async()=>{a(!0),await new Promise(se=>setTimeout(se,1500)),v(!0),a(!1),setTimeout(()=>v(!1),2e3)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{loading:!0,children:"Loading Button"}),e.jsx(t,{loading:x,onClick:te,leftIcon:s?ae:void 0,variant:s?"success":"default",children:s?"Success!":"Click me"}),e.jsx(t,{loading:!0,variant:"outline",children:"Loading Outline"}),e.jsx(t,{loading:!0,variant:"secondary",children:"Loading Secondary"})]})}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{leftSide:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ee,{className:"size-4"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"2.5MB"})]}),children:"Download File"}),e.jsx(t,{variant:"outline",rightSide:e.jsx("span",{className:"ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary",children:"New"}),children:"Feature"}),e.jsx(t,{variant:"secondary",leftSide:e.jsx("img",{src:"https://github.com/shadcn.png",alt:"avatar",className:"size-5 rounded-full"}),children:"View Profile"})]})},p={render:()=>{const[x,a]=C.useState(!1);return e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(t,{loading:x,onClick:()=>a(s=>!s),leftSide:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ee,{className:"size-4"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"2.5MB"})]}),children:"Toggle Loading"})})}},g={args:{children:"Cannot Click",leftIcon:S,disabled:!0}},f={args:{children:"Styled Button",leftIcon:n,classNames:{root:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",icon:"text-white/80"}}};var B,I,N;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Click me"
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var j,L,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Create New",
    leftIcon: HiPlus
  }
}`,...(k=(L=r.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,y,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Next Step",
    rightIcon: HiArrowRight
  }
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var H,z,b;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Send Email",
    leftIcon: HiMail,
    rightIcon: HiArrowRight
  }
}`,...(b=(z=c.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var F,M,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <CustomButton variant="default">Default Button</CustomButton>
      <CustomButton variant="destructive" leftIcon={HiTrash}>
        Delete Item
      </CustomButton>
      <CustomButton variant="outline" rightIcon={HiArrowRight}>
        Learn More
      </CustomButton>
      <CustomButton variant="secondary" leftIcon={HiMail}>
        Contact Us
      </CustomButton>
      <CustomButton variant="ghost" rightIcon={HiArrowRight}>
        Skip
      </CustomButton>
      <CustomButton variant="link">View Details</CustomButton>
    </div>
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var T,R,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <CustomButton size="sm" leftIcon={HiPlus}>
        Small
      </CustomButton>
      <CustomButton size="default" leftIcon={HiPlus}>
        Default
      </CustomButton>
      <CustomButton size="lg" leftIcon={HiPlus}>
        Large
      </CustomButton>
    </div>
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var V,A,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleClick = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setIsLoading(false);
      setTimeout(() => setIsSuccess(false), 2000);
    };
    return <div className="flex flex-col gap-4">
        <CustomButton loading>Loading Button</CustomButton>
        <CustomButton loading={isLoading} onClick={handleClick} leftIcon={isSuccess ? FiCheck : undefined} variant={isSuccess ? "success" : "default"}>
          {isSuccess ? "Success!" : "Click me"}
        </CustomButton>
        <CustomButton loading variant="outline">
          Loading Outline
        </CustomButton>
        <CustomButton loading variant="secondary">
          Loading Secondary
        </CustomButton>
      </div>;
  }
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var O,U,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <CustomButton leftSide={<div className="flex items-center gap-2">
            <FiDownload className="size-4" />
            <span className="text-xs text-muted-foreground">2.5MB</span>
          </div>}>
        Download File
      </CustomButton>
      
      <CustomButton variant="outline" rightSide={<span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            New
          </span>}>
        Feature
      </CustomButton>

      <CustomButton variant="secondary" leftSide={<img src="https://github.com/shadcn.png" alt="avatar" className="size-5 rounded-full" />}>
        View Profile
      </CustomButton>
    </div>
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,G,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    return <div className="flex flex-col gap-4">
        <CustomButton loading={isLoading} onClick={() => setIsLoading(prev => !prev)} leftSide={<div className="flex items-center gap-2">
              <FiDownload className="size-4" />
              <span className="text-xs text-muted-foreground">2.5MB</span>
            </div>}>
          Toggle Loading
        </CustomButton>
      </div>;
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: "Cannot Click",
    leftIcon: HiMail,
    disabled: true
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: "Styled Button",
    leftIcon: HiPlus,
    classNames: {
      root: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
      icon: "text-white/80"
    }
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Ie=["Default","WithLeftIcon","WithRightIcon","WithBothIcons","Variants","Sizes","LoadingStates","CustomSides","LoadingWithCustomSides","Disabled","CustomStyles"];export{m as CustomSides,f as CustomStyles,o as Default,g as Disabled,u as LoadingStates,p as LoadingWithCustomSides,d as Sizes,l as Variants,c as WithBothIcons,r as WithLeftIcon,i as WithRightIcon,Ie as __namedExportsOrder,Be as default};
