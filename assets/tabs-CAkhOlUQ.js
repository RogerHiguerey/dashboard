import{b as F,r as l,u as $,j as c,P as g,d as m,e as D,c as p}from"./index-DMTHiIe1.js";import{c as y,R as V,I as k}from"./index-BDKl7Nlq.js";import{u as G}from"./index-C27INIJy.js";import{u as L}from"./index-BGFZjb-0.js";var T="Tabs",[K,X]=F(T,[y]),h=y(),[B,x]=K(T),N=l.forwardRef((e,t)=>{const{__scopeTabs:a,value:o,onValueChange:r,defaultValue:d,orientation:n="horizontal",dir:u,activationMode:b="automatic",...v}=e,i=G(u),[s,f]=$({prop:o,onChange:r,defaultProp:d});return c.jsx(B,{scope:a,baseId:L(),value:s,onValueChange:f,orientation:n,dir:i,activationMode:b,children:c.jsx(g.div,{dir:i,"data-orientation":n,...v,ref:t})})});N.displayName=T;var C="TabsList",I=l.forwardRef((e,t)=>{const{__scopeTabs:a,loop:o=!0,...r}=e,d=x(C,a),n=h(a);return c.jsx(V,{asChild:!0,...n,orientation:d.orientation,dir:d.dir,loop:o,children:c.jsx(g.div,{role:"tablist","aria-orientation":d.orientation,...r,ref:t})})});I.displayName=C;var R="TabsTrigger",j=l.forwardRef((e,t)=>{const{__scopeTabs:a,value:o,disabled:r=!1,...d}=e,n=x(R,a),u=h(a),b=A(n.baseId,o),v=E(n.baseId,o),i=o===n.value;return c.jsx(k,{asChild:!0,...u,focusable:!r,active:i,children:c.jsx(g.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":v,"data-state":i?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:b,...d,ref:t,onMouseDown:m(e.onMouseDown,s=>{!r&&s.button===0&&s.ctrlKey===!1?n.onValueChange(o):s.preventDefault()}),onKeyDown:m(e.onKeyDown,s=>{[" ","Enter"].includes(s.key)&&n.onValueChange(o)}),onFocus:m(e.onFocus,()=>{const s=n.activationMode!=="manual";!i&&!r&&s&&n.onValueChange(o)})})})});j.displayName=R;var w="TabsContent",_=l.forwardRef((e,t)=>{const{__scopeTabs:a,value:o,forceMount:r,children:d,...n}=e,u=x(w,a),b=A(u.baseId,o),v=E(u.baseId,o),i=o===u.value,s=l.useRef(i);return l.useEffect(()=>{const f=requestAnimationFrame(()=>s.current=!1);return()=>cancelAnimationFrame(f)},[]),c.jsx(D,{present:r||i,children:({present:f})=>c.jsx(g.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":b,hidden:!f,id:v,tabIndex:0,...n,ref:t,style:{...e.style,animationDuration:s.current?"0s":void 0},children:f&&d})})});_.displayName=w;function A(e,t){return`${e}-trigger-${t}`}function E(e,t){return`${e}-content-${t}`}var q=N,P=I,S=j,M=_;const Y=q,z=l.forwardRef(({className:e,...t},a)=>c.jsx(P,{ref:a,className:p("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...t}));z.displayName=P.displayName;const H=l.forwardRef(({className:e,...t},a)=>c.jsx(S,{ref:a,className:p("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e),...t}));H.displayName=S.displayName;const O=l.forwardRef(({className:e,...t},a)=>c.jsx(M,{ref:a,className:p("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));O.displayName=M.displayName;export{Y as T,z as a,H as b,O as c};
