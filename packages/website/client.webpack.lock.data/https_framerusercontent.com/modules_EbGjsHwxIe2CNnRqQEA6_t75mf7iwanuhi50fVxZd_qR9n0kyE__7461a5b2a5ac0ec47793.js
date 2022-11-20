// Generated by Framer (b997b22)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import ElementsLoader from"https://framerusercontent.com/modules/XsT42QFEuGtjrsvU3Qv9/WStVxE8tLmLMdqjeYKTQ/eITkLGDvF.js";import{Input}from"https://framerusercontent.com/modules/X5ODOwzZFl8ppOA13cTN/rrSwNHJRun6OZ8KLAt35/Input.js";import Text from"https://framerusercontent.com/modules/XqgKXxDc38KzNEOg3QqW/tJr6cd5zLfiUFOoq9Z06/Text.js";const InputFonts=getFonts(Input);const TextFonts=getFonts(Text);const ElementsLoaderFonts=getFonts(ElementsLoader);const cycleOrder=["oPSMSVx3t","k3LBs4sH4","gyPEOxW7N","g_5YCzqHH"];const variantClassNames={g_5YCzqHH:"framer-v-hvioun",gyPEOxW7N:"framer-v-17a70op",k3LBs4sH4:"framer-v-2mut7y",oPSMSVx3t:"framer-v-1wsmla4"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={default:"oPSMSVx3t",loading:"k3LBs4sH4",success:"g_5YCzqHH",valid:"gyPEOxW7N"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="oPSMSVx3t",onSubmit:tngSKmdae,onChange:Uc18yU4nn,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"oPSMSVx3t",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onChangeuh42g7=activeVariantCallback(async(...args)=>{if(Uc18yU4nn){const res=await Uc18yU4nn(...args);if(res===false)return false;}});const onTap1n6bz17=activeVariantCallback(async(...args)=>{if(tngSKmdae){const res=await tngSKmdae(...args);if(res===false)return false;}});const isDisplayed1=()=>{if(["k3LBs4sH4","g_5YCzqHH"].includes(baseVariant))return false;return true;};const isDisplayed2=()=>{if(["k3LBs4sH4","g_5YCzqHH"].includes(baseVariant))return true;return false;};const isDisplayed3=()=>{if(baseVariant==="g_5YCzqHH")return true;return false;};const isDisplayed4=()=>{if(baseVariant==="k3LBs4sH4")return true;return false;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-H7ktN",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1wsmla4",className),"data-framer-name":"default",layoutDependency:layoutDependency,layoutId:"oPSMSVx3t",ref:ref,style:{...style},transition:transition,...addPropertyOverrides({g_5YCzqHH:{"data-framer-name":"success"},gyPEOxW7N:{"data-framer-name":"valid"},k3LBs4sH4:{"data-framer-name":"loading"}},baseVariant,gestureVariant),children:[isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-12nvtfc-container",layoutDependency:layoutDependency,layoutId:"Pj_XUCjhL-container",transformTemplate:(_,t)=>`translateY(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Input,{autoFocus:false,backgroundColor:"rgb(255, 255, 255)",border:"rgba(237, 232, 232, 0)",borderRadius:17,borderWidth:2,bottomLeftRadius:17,bottomRightRadius:17,caretColor:"rgb(255, 255, 255)",disabled:false,enableLimit:false,focusColor:"rgba(255, 67, 10, 0.5)",font:false,fontFamily:"",fontSize:16,fontWeight:400,height:"100%",id:"Pj_XUCjhL",isMixedBorderRadius:false,isRTL:false,keyboard:"url",layoutId:"Pj_XUCjhL",lineHeight:1.4,max:0,maxLength:10,min:0,minLength:1,multiLine:false,onChange:onChangeuh42g7,padding:16,paddingBottom:16,paddingLeft:16,paddingPerSide:false,paddingRight:16,paddingTop:16,placeholder:"Your email",placeholderColor:"rgba(255, 67, 10, 0.3)",step:"",style:{width:"100%"},textAlign:"left",textColor:'var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10)) /* {"name":"key-red"} */',topLeftRadius:17,topRightRadius:17,truncate:false,type:"text",value:"",valueControl:"prop",width:"100%",...addPropertyOverrides({gyPEOxW7N:{border:"rgba(255, 67, 10, 0.5)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1kzys8f",layoutDependency:layoutDependency,layoutId:"q72beeK2L",style:{backgroundColor:"var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10))",borderBottomLeftRadius:12,borderBottomRightRadius:12,borderTopLeftRadius:12,borderTopRightRadius:12,opacity:.5},transformTemplate:(_,t)=>`translateY(-50%) ${t}`,transition:transition,variants:{gyPEOxW7N:{opacity:1}},...addPropertyOverrides({gyPEOxW7N:{"data-highlight":true,onTap:onTap1n6bz17}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-18tqdpy-container",layoutDependency:layoutDependency,layoutId:"fBz5VyChG-container",transition:transition,children:/*#__PURE__*/ _jsx(Text,{color:"rgb(255, 255, 255)",fontFamily:"Inter",fontSize:16,fontWeight:500,height:"100%",id:"fBz5VyChG",layoutId:"fBz5VyChG",lineHeight:1.5,text:"Join waitlist",width:"100%"})})}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1874qvy",layoutDependency:layoutDependency,layoutId:"D8SjJd6Q4",style:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:18,borderBottomRightRadius:18,borderTopLeftRadius:18,borderTopRightRadius:18},transition:transition}),isDisplayed3()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-2mv976-container",layoutDependency:layoutDependency,layoutId:"pWmqVgVTm-container",transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Text,{color:'var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10)) /* {"name":"key-orange"} */',fontFamily:"Inter",fontSize:18,fontWeight:500,height:"100%",id:"pWmqVgVTm",layoutId:"pWmqVgVTm",lineHeight:1.2,text:"Added! We will get back to you soon :)",width:"100%"})}),isDisplayed4()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-12zt8a5-container",layoutDependency:layoutDependency,layoutId:"d1ML7EABV-container",transition:transition,children:/*#__PURE__*/ _jsx(ElementsLoader,{color:'var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10)) /* {"name":"key-orange"} */',height:"100%",id:"d1ML7EABV",layoutId:"d1ML7EABV",style:{height:"100%",width:"100%"},variant:"yZh_JoLdq",width:"100%"})})]})})});});const css=['.framer-H7ktN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-H7ktN * { box-sizing: border-box; }",".framer-H7ktN .framer-yak345 { display: block; }",".framer-H7ktN .framer-1wsmla4 { height: 55px; overflow: visible; position: relative; width: 398px; }",".framer-H7ktN .framer-12nvtfc-container { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 51%; }",".framer-H7ktN .framer-1kzys8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 10px 20px 10px 20px; position: absolute; right: 5px; top: 51%; width: min-content; }",".framer-H7ktN .framer-18tqdpy-container { flex: none; height: auto; position: relative; width: auto; }",".framer-H7ktN .framer-1874qvy { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(49.056603773584925% - 100% / 2); width: 100%; }",".framer-H7ktN .framer-2mv976-container { flex: none; height: auto; left: 50%; position: absolute; top: 47%; width: auto; }",".framer-H7ktN .framer-12zt8a5-container { flex: none; height: 10px; left: calc(50.00000000000002% - 26px / 2); position: absolute; top: calc(50.90909090909093% - 10px / 2); width: 26px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-H7ktN .framer-1kzys8f { gap: 0px; } .framer-H7ktN .framer-1kzys8f > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-H7ktN .framer-1kzys8f > :first-child { margin-left: 0px; } .framer-H7ktN .framer-1kzys8f > :last-child { margin-right: 0px; } }",".framer-H7ktN.framer-v-17a70op .framer-1kzys8f { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 55
 * @framerIntrinsicWidth 398
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"k3LBs4sH4":{"layout":["fixed","fixed"]},"gyPEOxW7N":{"layout":["fixed","fixed"]},"g_5YCzqHH":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"tngSKmdae":"onSubmit","Uc18yU4nn":"onChange"}
 */ const FramerqR9n0kyE_=withCSS(Component,css);export default FramerqR9n0kyE_;FramerqR9n0kyE_.displayName="waitlistInput";FramerqR9n0kyE_.defaultProps={height:55,width:398};addPropertyControls(FramerqR9n0kyE_,{variant:{options:["oPSMSVx3t","k3LBs4sH4","gyPEOxW7N","g_5YCzqHH"],optionTitles:["default","loading","valid","success"],title:"Variant",type:ControlType.Enum},tngSKmdae:{title:"On Submit",type:ControlType.EventHandler},Uc18yU4nn:{title:"On Change",type:ControlType.EventHandler}});addFonts(FramerqR9n0kyE_,[...InputFonts,...TextFonts,...ElementsLoaderFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerqR9n0kyE_","slots":[],"annotations":{"framerVariables":"{\"tngSKmdae\":\"onSubmit\",\"Uc18yU4nn\":\"onChange\"}","framerIntrinsicWidth":"398","framerContractVersion":"1","framerIntrinsicHeight":"55","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"k3LBs4sH4\":{\"layout\":[\"fixed\",\"fixed\"]},\"gyPEOxW7N\":{\"layout\":[\"fixed\",\"fixed\"]},\"g_5YCzqHH\":{\"layout\":[\"fixed\",\"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./qR9n0kyE_.map