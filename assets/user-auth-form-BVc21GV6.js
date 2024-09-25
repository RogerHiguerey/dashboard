import{r as p,j as e,c as h,L as f,B as o}from"./index-vCgDPCTR.js";import{u as g,t as b,F as N,a as n,b as i,c as m,d as c,e as d}from"./form-u1knVwJk.js";import{z as t}from"./index-DXqQCM1T.js";import{I as w}from"./input-BTBx03En.js";import{P as v,I as F}from"./password-input-BdjsHAiW.js";import{I as y}from"./IconBrandGithub-nJELqpPZ.js";const I=t.object({email:t.string().min(1,{message:"Please enter your email"}).email({message:"Invalid email address"}),password:t.string().min(1,{message:"Please enter your password"}).min(7,{message:"Password must be at least 7 characters long"})});function G({className:x,...u}){const[r,l]=p.useState(!1),a=g({resolver:b(I),defaultValues:{email:"",password:""}});function j(s){l(!0),console.log(s),setTimeout(()=>{l(!1)},3e3)}return e.jsx("div",{className:h("grid gap-6",x),...u,children:e.jsx(N,{...a,children:e.jsx("form",{onSubmit:a.handleSubmit(j),children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{control:a.control,name:"email",render:({field:s})=>e.jsxs(i,{className:"space-y-1",children:[e.jsx(m,{children:"Email"}),e.jsx(c,{children:e.jsx(w,{placeholder:"name@example.com",...s})}),e.jsx(d,{})]})}),e.jsx(n,{control:a.control,name:"password",render:({field:s})=>e.jsxs(i,{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(m,{children:"Password"}),e.jsx(f,{to:"/forgot-password",className:"text-sm font-medium text-muted-foreground hover:opacity-75",children:"Forgot password?"})]}),e.jsx(c,{children:e.jsx(v,{placeholder:"********",...s})}),e.jsx(d,{})]})}),e.jsx(o,{className:"mt-2",loading:r,children:"Login"}),e.jsxs("div",{className:"relative my-2",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("span",{className:"w-full border-t"})}),e.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:e.jsx("span",{className:"bg-background px-2 text-muted-foreground",children:"Or continue with"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{variant:"outline",className:"w-full",type:"button",loading:r,leftSection:e.jsx(y,{className:"h-4 w-4"}),children:"GitHub"}),e.jsx(o,{variant:"outline",className:"w-full",type:"button",loading:r,leftSection:e.jsx(F,{className:"h-4 w-4"}),children:"Facebook"})]})]})})})})}export{G as U};