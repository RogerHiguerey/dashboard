import{a,h as p,K as m,r as g,j as e,c as r,L as v,i as f,O as j}from"./index-vCgDPCTR.js";import{L as t}from"./dropdown-menu-CEjf4Chf.js";import{S as u,T as y,U as N}from"./user-nav-BjVTWrwk.js";import{S as k}from"./separator-CEVuN-s9.js";import{S,a as I,b as M,c as b,d as w}from"./select-BvB6qn2h.js";import{I as z}from"./IconExclamationCircle-BZ_Nu8v4.js";import"./index-DKXg_wwB.js";import"./Combination-bDHJWd-l.js";import"./index-BnGtpCxe.js";import"./index-B_-RAo5_.js";import"./index-DLvOpRbC.js";import"./input-BTBx03En.js";import"./index-CcYd_8sy.js";/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=a("outline","browser-check","IconBrowserCheck",[["path",{d:"M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M4 8h16",key:"svg-1"}],["path",{d:"M8 4v4",key:"svg-2"}],["path",{d:"M9.5 14.5l1.5 1.5l3 -3",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var T=a("outline","notification","IconNotification",[["path",{d:"M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3",key:"svg-0"}],["path",{d:"M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var E=a("outline","palette","IconPalette",[["path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25",key:"svg-0"}],["path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var L=a("outline","tool","IconTool",[["path",{d:"M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var U=a("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);function V({className:i,items:l,...n}){const{pathname:c}=p(),o=m(),[h,d]=g.useState(c??"/settings"),x=s=>{d(s),o(s)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-1 md:hidden",children:e.jsxs(S,{value:h,onValueChange:x,children:[e.jsx(I,{className:"h-12 sm:w-48",children:e.jsx(M,{placeholder:"Theme"})}),e.jsx(b,{children:l.map(s=>e.jsx(w,{value:s.href,children:e.jsxs("div",{className:"flex gap-x-4 px-2 py-1",children:[e.jsx("span",{className:"scale-125",children:s.icon}),e.jsx("span",{className:"text-md",children:s.title})]})},s.href))})]})}),e.jsx("div",{className:"hidden w-full overflow-x-auto bg-background px-1 py-2 md:block",children:e.jsx("nav",{className:r("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",i),...n,children:l.map(s=>e.jsxs(v,{to:s.href,className:r(f({variant:"ghost"}),c===s.href?"bg-muted hover:bg-muted":"hover:bg-transparent hover:underline","justify-start"),children:[e.jsx("span",{className:"mr-2",children:s.icon}),s.title]},s.href))})})]})}function X(){return e.jsxs(t,{fixed:!0,children:[e.jsxs(t.Header,{children:[e.jsx(u,{}),e.jsxs("div",{className:"ml-auto flex items-center space-x-4",children:[e.jsx(y,{}),e.jsx(N,{})]})]}),e.jsxs(t.Body,{className:"flex flex-col",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight md:text-3xl",children:"Settings"}),e.jsx("p",{className:"text-muted-foreground",children:"Manage your account settings and set e-mail preferences."})]}),e.jsx(k,{className:"my-4 lg:my-6"}),e.jsxs("div",{className:"flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0",children:[e.jsx("aside",{className:"top-0 lg:sticky lg:w-1/5",children:e.jsx(V,{items:B})}),e.jsx("div",{className:"flex w-full p-1 pr-4 md:overflow-y-hidden",children:e.jsx(j,{})})]})]})]})}const B=[{title:"Profile",icon:e.jsx(U,{size:18}),href:"/settings"},{title:"Account",icon:e.jsx(L,{size:18}),href:"/settings/account"},{title:"Appearance",icon:e.jsx(E,{size:18}),href:"/settings/appearance"},{title:"Notifications",icon:e.jsx(T,{size:18}),href:"/settings/notifications"},{title:"Display",icon:e.jsx(C,{size:18}),href:"/settings/display"},{title:"Error Example",icon:e.jsx(z,{size:18}),href:"/settings/error-example"}];export{X as default};
