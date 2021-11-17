(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Doubts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      questions: [{
        id: 0,
        title: 'Como faço para me cadastrar?',
        content: "Clique no bot\xE3o \"cadastrar\", na canto superior direito da pagina.\n            Em seguida, preencha as informa\xE7\xF5es solicitadas com seus dados e\n            clique em \"criar conta\".",
        show: false
      }, {
        id: 1,
        title: 'Como me inscrevo em um curso?',
        content: "No se\xE7\xE3o \"cursos\", do menu, selecione uma \xE1rea do conhecimento, encontre um curso de sua prefer\xEAncia e clique no bot\xE3o \"inscreva-me!\".",
        show: false
      }, {
        id: 2,
        title: 'Não sou aluno da UFSM, posso me inscrever mesmo assim?',
        content: "Sim, os cursos s\xE3o abertos para qualquer pessoa.",
        show: false
      }, {
        id: 3,
        title: 'Os cursos são gratuitos?',
        content: "Sim, todos os cursos e certificados da plataforma s\xE3o gratuitos.",
        show: false
      }, {
        id: 4,
        title: 'Esqueci meu login ou senha. E agora?',
        content: " Para recuperar seu login ou senha, acesse a p\xE1gina de login (bot\xE3o no canto superior direito da pagina), clique em \"esqueceu sua senha?\" e siga as instru\xE7\xF5es.",
        show: false
      }, {
        id: 5,
        title: 'Em quanto tempo preciso terminar um curso?',
        content: "A quantidade de tempo varia de curso para curso e pode ser encontrada na se\xE7\xE3o \u201Crequisitos\u201D do curso selecionado.",
        show: false
      }, {
        id: 6,
        title: 'Como pego meu certificado?',
        content: "Tendo completado o curso com aprova\xE7\xE3o, o aluno pode confirmar seus dados\n            na p\xE1gina do curso que realizou e, em seguida, clicar em \"gerar certificado\".",
        show: false
      }, {
        id: 7,
        title: 'Como cancelo minha inscrição em um curso?',
        content: "Na p\xE1gina do curso selecionado, clique em \"cancelar inscri\xE7\xE3o\".",
        show: false
      }, {
        id: 8,
        title: 'Como mudar meu nome ou CPF no certificado?',
        content: "Se voc\xEA j\xE1 emitiu seu certificado, entre em contato com\n            suporte@ufsmooc.ufsm.br",
        show: false
      }]
    };
  },
  methods: {
    toggleHideElement: function toggleHideElement(q) {
      q.show = !q.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=template&id=b1525f80":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=template&id=b1525f80 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "section-main-title"
}, " Dúvidas frequentes ", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "question-container"
};
var _hoisted_3 = {
  "class": "question-title"
};
var _hoisted_4 = {
  "class": "question-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<div class=\".question-box-wrapperr\">"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.questions, function (q) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": ["question-box", {
        hidden: !q.show
      }],
      key: q.id,
      onClick: function onClick($event) {
        return $options.toggleHideElement(q);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(q.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(q.content), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("</div>")])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody\r\n{\r\n    min-height: 600px;\n}\ninput:focus\r\n{\r\n    outline: none;\n}\n.questions-link::before \r\n{\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0px;\r\n    background-color: #f19a59;\r\n    transition: all 0.3s ease;\r\n    opacity: 100%;\r\n    left: 0;\r\n    height: 5px;\r\n    width: 100%;\n}\n.section-main\r\n{\r\n    padding-top: 80px;\r\n    height: inherit;\n}\n.section-main-title\r\n{\r\n    height: 60px;\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 28pt;\r\n    display: flex;\r\n    justify-content: center;\r\n    color: #2754be;\n}\n.question-container\r\n{\r\n    padding: 20px;\r\n    padding-bottom: 80px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center; \r\n    flex-wrap: wrap;\n}\r\n/*\r\n.question-box-wrapper\r\n{\r\n    width: 90%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center; \r\n    flex-wrap: wrap;\r\n}*/\n.question-box\r\n{\r\n    margin-top: 40px;\r\n    padding: 50px 20px 50px 20px ;\r\n    min-width: 300px;\r\n    width: 400px;\r\n    background: #F3F3FA;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n    box-shadow: 0.2px 0.2px 0.2px -0.3px rgba(0, 0, 0, 0.25), 0px 0px 1px #FFFFFF, 0px 0px 1px rgba(31, 42, 139, 0.48);\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    transition: .5s .5s ease;\n}\n.question-title\r\n{\r\n    color: black;\r\n    transition: .3s ease;\r\n    font-size: 17pt;\r\n    font-weight: bold;\n}\n.question-box:hover\r\n{\r\n    cursor: pointer;\r\n    background: #d5d5d5;\r\n    box-sizing: border-box;\n}\n.question-box:hover > .question-title\r\n{\r\n    color: #21376B;\n}\n.question-box.hidden\r\n{    \r\n    transition: 0.5s 0.0s ease;\n}\n.question-box > .question-body\r\n{\r\n    word-wrap: break-word;\r\n    width: 100%;\r\n    transition: 0.5s ease;\r\n    opacity: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.5s 0s ease, 0.25s 0.25s ease opacity;\n}\n.question-box.hidden > .question-body\r\n{ \r\n    height: 0;\r\n    opacity: 0;\r\n    transition: 0.5s 0.25s ease, 0.25s 0s ease opacity;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_style_index_0_id_b1525f80_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_style_index_0_id_b1525f80_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_style_index_0_id_b1525f80_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/Pages/Doubts.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Doubts.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Doubts_vue_vue_type_template_id_b1525f80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doubts.vue?vue&type=template&id=b1525f80 */ "./resources/js/Pages/Doubts.vue?vue&type=template&id=b1525f80");
/* harmony import */ var _Doubts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Doubts.vue?vue&type=script&lang=js */ "./resources/js/Pages/Doubts.vue?vue&type=script&lang=js");
/* harmony import */ var _Doubts_vue_vue_type_style_index_0_id_b1525f80_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css */ "./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css");




;
_Doubts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Doubts_vue_vue_type_template_id_b1525f80__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Doubts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Doubts.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Doubts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Doubts.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Doubts.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Doubts.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Doubts.vue?vue&type=template&id=b1525f80":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Doubts.vue?vue&type=template&id=b1525f80 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_template_id_b1525f80__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_template_id_b1525f80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Doubts.vue?vue&type=template&id=b1525f80 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=template&id=b1525f80");


/***/ }),

/***/ "./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Doubts_vue_vue_type_style_index_0_id_b1525f80_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Doubts.vue?vue&type=style&index=0&id=b1525f80&lang=css");


/***/ })

}]);