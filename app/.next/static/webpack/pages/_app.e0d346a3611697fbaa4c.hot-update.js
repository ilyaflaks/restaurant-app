webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ \"./components/cart.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ \"./components/restaurantList.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nvar _jsxFileName = \"/Users/ilyaflaks/Desktop/Boot Camps/MIT xPro/back-end-part3/Restauraunt-App/app/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var API_URL = process.env.NEXT_PUBLIC_API_URL || //heroku.com/Ilya.../graphql\n  //https://ilya-restaurant-app.herokuapp.com/graphql\n  \"http://localhost:4000/graphql\"; //console.log(`URL: ${process.env.NEXT_PUBLIC_API_URL}`);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1]; // fetch(\"/api/buldlog\")\n  // .then()\n  // console.log(\"process.env.NEXT_PUBLIC_API_URL:\");\n  // console.log(process.env.NEXT_PUBLIC_API_URL);\n  // console.log(\"API_URL: \");\n  // console.log(API_URL);\n\n\n  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]();\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n    uri: API_URL,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]()\n  }); // client\n  //   .query({\n  //     query: gql`\n  //       query Restaurants {\n  //         restaurants {\n  //           id\n  //           name\n  //           description\n  //           dishes {\n  //             name\n  //           }\n  //         }\n  //       }\n  //     `,\n  //   })\n  //   .then((result) => console.log(result));\n\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, \" Local Restaurants\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"InputGroup\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"InputGroupAddon\"], {\n    addonType: \"append\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, \" Search \"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    onChange: function onChange(e) {\n      return setQuery(e.target.value.toLocaleLowerCase());\n    },\n    value: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    search: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \" \"));\n}\n\n_s(Home, \"HYX2QbDDdTtlu7GfoQbAPZOIM6k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidXNlU3RhdGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBT0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsT0FBTyxHQUNYQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUM7QUFDbkM7QUFDQSxpQ0FIRixDQURjLENBS2Q7O0FBTGMsa0JBTVlDLHNEQUFRLENBQUMsRUFBRCxDQU5wQjtBQUFBLE1BTVBDLEtBTk87QUFBQSxNQU1BQyxRQU5BLGlCQU9kO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFDOUJDLE9BQUcsRUFBRVgsT0FEeUI7QUFFOUJPLFNBQUssRUFBRSxJQUFJQyw0REFBSjtBQUZ1QixHQUFqQixDQUFmLENBakJjLENBc0JkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0UsTUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFpQixhQUFTLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxhQUFPTixRQUFRLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLGlCQUFmLEVBQUQsQ0FBZjtBQUFBLEtBRFo7QUFFRSxTQUFLLEVBQUVWLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixFQVlFLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FiRixDQURGO0FBaUJEOztHQXhEUU4sSTs7S0FBQUEsSTtBQXlETUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuXG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBncWwsXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3RcIjtcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbiwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBUElfVVJMID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IC8vaGVyb2t1LmNvbS9JbHlhLi4uL2dyYXBocWxcbiAgICAvL2h0dHBzOi8vaWx5YS1yZXN0YXVyYW50LWFwcC5oZXJva3VhcHAuY29tL2dyYXBocWxcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCI7XG4gIC8vY29uc29sZS5sb2coYFVSTDogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfWApO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBmZXRjaChcIi9hcGkvYnVsZGxvZ1wiKVxuICAvLyAudGhlbigpXG5cbiAgLy8gY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMOlwiKTtcbiAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJBUElfVVJMOiBcIik7XG4gIC8vIGNvbnNvbGUubG9nKEFQSV9VUkwpO1xuICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XG5cbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBBUElfVVJMLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcblxuICAvLyBjbGllbnRcbiAgLy8gICAucXVlcnkoe1xuICAvLyAgICAgcXVlcnk6IGdxbGBcbiAgLy8gICAgICAgcXVlcnkgUmVzdGF1cmFudHMge1xuICAvLyAgICAgICAgIHJlc3RhdXJhbnRzIHtcbiAgLy8gICAgICAgICAgIGlkXG4gIC8vICAgICAgICAgICBuYW1lXG4gIC8vICAgICAgICAgICBkZXNjcmlwdGlvblxuICAvLyAgICAgICAgICAgZGlzaGVzIHtcbiAgLy8gICAgICAgICAgICAgbmFtZVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgYCxcbiAgLy8gICB9KVxuICAvLyAgIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIDxoMj4gTG9jYWwgUmVzdGF1cmFudHM8L2gyPlxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPiBTZWFyY2ggPC9JbnB1dEdyb3VwQWRkb24+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpfVxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxuICAgICAgPENhcnQ+IDwvQ2FydD5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})