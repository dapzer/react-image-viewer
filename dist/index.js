!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("styled-components"));else if("function"==typeof define&&define.amd)define(["react","styled-components"],t);else{var o="object"==typeof exports?t(require("react"),require("styled-components")):t(e.react,e[void 0]);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,(function(e,t){return(()=>{"use strict";var o={232:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImageViewer=void 0;const n=r(o(156)),i=o(964),a=o(840),l=o(585);t.ImageViewer=e=>{const{dontClose:t,closeViewer:o,show:r,showViewer:s}=(0,l.useViewer)();return n.default.createElement(n.default.Fragment,null,n.default.createElement(a.ImageBody,{onClick:s},e.children),r&&n.default.createElement(a.ViewerFrame,{onClick:o},n.default.createElement("span",{onClick:o},n.default.createElement(i.CloseIcon,null)),n.default.createElement("div",{onClick:t},e.children)))}},964:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CloseIcon=void 0;const n=r(o(156)),i=r(o(466)),a=i.default.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"})``,l=(0,i.default)(a)`
  width: 25px;
  height: 25px;
`;t.CloseIcon=()=>n.default.createElement(l,{viewBox:"0 0 100 100",fill:"#fff"},n.default.createElement("path",{d:"M89.7,10.3L89.7,10.3c-1-1-2.6-1-3.5,0L50,46.5L13.9,10.3c-1-1-2.6-1-3.5,0l0,0c-1,1-1,2.6,0,3.5L46.5,50L10.3,86.1\r\n      c-1,1-1,2.6,0,3.5h0c1,1,2.6,1,3.5,0L50,53.5l36.1,36.1c1,1,2.6,1,3.5,0l0,0c1-1,1-2.6,0-3.5L53.5,50l36.1-36.1\r\n      C90.6,12.9,90.6,11.3,89.7,10.3z"}))},840:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ViewerFrame=t.ImageBody=void 0;const n=r(o(466));t.ImageBody=n.default.div`
    &:hover{
        cursor: pointer;
    }
`,t.ViewerFrame=n.default.div`
    position: fixed;
    z-index: 1000;
    padding-top: 10px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        padding: 0px 20px;
    }

    span{
        cursor: pointer;
        position: absolute;
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        margin: 20px;
        width: 40px;
        height: 40px;
        background-color: #000;
        border-radius: 50%;
        animation-name: zoom;
        animation-duration: 0.5s;
    }

    img{
        all: unset;
        width: 100%;
        max-width: 1250px;
        height: 100%;
        max-height: 90vh;
        animation-name: zoom;
        animation-duration: 0.5s;
    }

    @keyframes zoom {
        from {transform:scale(0)} 
        to {transform:scale(1)}
    }
`},585:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useViewer=void 0;const r=o(156);t.useViewer=()=>{const[e,t]=(0,r.useState)(!1),o=()=>{t(!1)};return(0,r.useEffect)((()=>{document.addEventListener("keyup",(e=>{27===e.keyCode&&o()})),document.body.style.overflow=!0===e?"hidden":""}),[e]),{show:e,showViewer:()=>{t(!0)},dontClose:e=>{e.stopPropagation()},closeViewer:o}}},156:t=>{t.exports=e},466:e=>{e.exports=t}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e].call(i.exports,i,i.exports,n),i.exports}var i={};return(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.ImageViewer=void 0;const t=n(232);Object.defineProperty(e,"ImageViewer",{enumerable:!0,get:function(){return t.ImageViewer}})})(),i})()}));