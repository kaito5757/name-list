"use strict";(self.webpackChunkname_list=self.webpackChunkname_list||[]).push([[272],{"./src/components/Top/TopComboBox/TopComboBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TopComboBoxDemo:()=>TopComboBoxDemo,default:()=>TopComboBox_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useAutocomplete=__webpack_require__("./node_modules/@mui/base/useAutocomplete/useAutocomplete.js"),Autocomplete=__webpack_require__("./node_modules/@mui/material/Autocomplete/Autocomplete.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),__jsx=react.createElement,css={box:{display:"flex",justifyContent:"center"},autocomplete:{width:"50%"}};function TopComboBox(props){var _props$selectOptions$,_useState=(0,react.useState)(0),id=_useState[0],setId=_useState[1],filterOptions=(0,useAutocomplete.D)({stringify:function stringify(option){return Object.values(option).slice(1).join(" ")}});return __jsx(Box.Z,{component:"div",sx:css.box},__jsx(Autocomplete.Z,{filterOptions,disablePortal:!0,id:"top-combo-box",options:props.selectOptions,sx:css.autocomplete,renderInput:function renderInput(params){return __jsx(TextField.Z,(0,esm_extends.Z)({},params,{label:props.placeholderText}))},noOptionsText:props.noOptionsText,value:null!==(_props$selectOptions$=props.selectOptions.find((function(option){return option.id===id})))&&void 0!==_props$selectOptions$?_props$selectOptions$:null,onChange:function onChange(_,comboBoxInfo){null!=comboBoxInfo&&(setId(comboBoxInfo.id),props.handleChange(comboBoxInfo.id))},onInputChange:function onInputChange(_,inputValue){inputValue||(setId(0),props.handleChange(0))}}))}TopComboBox.displayName="TopComboBox",TopComboBox.__docgenInfo={description:"",methods:[],displayName:"TopComboBox",props:{selectOptions:{required:!0,tsType:{name:"Array",elements:[{name:"TopComboBoxSelectOption"}],raw:"TopComboBoxSelectOption[]"},description:""},placeholderText:{required:!0,tsType:{name:"string"},description:""},noOptionsText:{required:!0,tsType:{name:"string"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{name:"id",type:{name:"number"}}],return:{name:"void"}}},description:""}}};try{TopComboBox.displayName="TopComboBox",TopComboBox.__docgenInfo={description:"",displayName:"TopComboBox",props:{selectOptions:{defaultValue:null,description:"",name:"selectOptions",required:!0,type:{name:"TopComboBoxSelectOption[]"}},placeholderText:{defaultValue:null,description:"",name:"placeholderText",required:!0,type:{name:"string"}},noOptionsText:{defaultValue:null,description:"",name:"noOptionsText",required:!0,type:{name:"string"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Top/TopComboBox/index.tsx#TopComboBox"]={docgenInfo:TopComboBox.__docgenInfo,name:"TopComboBox",path:"src/components/Top/TopComboBox/index.tsx#TopComboBox"})}catch(__react_docgen_typescript_loader_error){}var _TopComboBoxDemo$para,_TopComboBoxDemo$para2,sample=__webpack_require__("./src/contexts/sample.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TopComboBox_stories={title:"Components/TopTopComboBox",component:TopComboBox,parameters:{layout:"centered"},tags:["autodocs"]};var TopComboBoxDemo={args:{selectOptions:sample.Om,placeholderText:"プレースホルダーテキスト",noOptionsText:"存在しないテキスト",handleChange:function handleChange(id){console.log(id)}}};TopComboBoxDemo.parameters=_objectSpread(_objectSpread({},TopComboBoxDemo.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TopComboBoxDemo$para=TopComboBoxDemo.parameters)||void 0===_TopComboBoxDemo$para?void 0:_TopComboBoxDemo$para.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    selectOptions: SampleTopComboBoxSelectOptionAry,\n    placeholderText: "プレースホルダーテキスト",\n    noOptionsText: "存在しないテキスト",\n    handleChange: (id: number) => {\n      console.log(id);\n    }\n  }\n}'},null===(_TopComboBoxDemo$para2=TopComboBoxDemo.parameters)||void 0===_TopComboBoxDemo$para2||null===(_TopComboBoxDemo$para2=_TopComboBoxDemo$para2.docs)||void 0===_TopComboBoxDemo$para2?void 0:_TopComboBoxDemo$para2.source)})})},"./src/contexts/sample.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Om:()=>SampleTopComboBoxSelectOptionAry,DK:()=>sampleItemInfoAry,EH:()=>sampleUserInfo});var sampleUserInfo={id:1,profile:{image:{src:"static/media/150x150.c1a37c0e.png",height:150,width:150,blurDataURL:"static/media/150x150.c1a37c0e.png"},fullName:"氏名",fullNameKana:"氏名（カナ）",department:"部署",team:"課（チーム）"},item:{officialPosition:"役職",occupation:"職種",mailAddress:"メールアドレス",slackName:"スラック名"}},SampleTopComboBoxSelectOptionAry=[{id:1,label:"氏名01",labelKana:"氏名01（カナ）",department:"部署01",team:"チーム01"},{id:2,label:"氏名02",labelKana:"氏名02（カナ）",department:"部署02",team:"チーム02"}],sampleItemInfoAry=[{itemName:"項目名01（テキスト）",itemText:"項目値01",isButton:!1},{itemName:"項目名02（ボタン）",itemText:"項目値02",isButton:!0}]}}]);