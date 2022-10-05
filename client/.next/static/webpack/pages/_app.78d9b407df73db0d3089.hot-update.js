webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cart */ \"./components/cart.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/restaurantList */ \"./components/restaurantList.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/ilyaflaks/Desktop/Boot Camps/MIT xPro/back-end-part3/Restauraunt-App/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        query Restaurants {\\n          restaurants {\\n            id\\n            name\\n            description\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // import {\n//   ApolloProvider,\n//   ApolloClient,\n//   HttpLink,\n//   InMemoryCache,\n// } from \"@apollo/client\";\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:4000/graphql\";\n  console.log(\"URL: \".concat(process.env.NEXT_PUBLIC_API_URL));\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  console.log(\"process.env.NEXT_PUBLIC_API_URL:\");\n  console.log(process.env.NEXT_PUBLIC_API_URL);\n  console.log(\"API_URL: \");\n  console.log(API_URL); //const link = new HttpLink({ uri: `${API_URL}` });\n\n  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]();\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloClient\"]({\n    uri: API_URL,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]()\n  });\n  client.query({\n    query: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject())\n  }).then(function (result) {\n    return console.log(result);\n  });\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, \" Local Restaurants\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"InputGroup\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"InputGroupAddon\"], {\n    addonType: \"append\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, \" Search \"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    onChange: function onChange(e) {\n      return setQuery(e.target.value.toLocaleLowerCase());\n    },\n    value: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    search: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \" \"));\n}\n\n_s(Home, \"HYX2QbDDdTtlu7GfoQbAPZOIM6k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImdxbCIsInRoZW4iLCJyZXN1bHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsT0FBTyxHQUNYQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsK0JBRHJDO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixnQkFBb0JKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBaEM7O0FBSGMsa0JBSVlHLHNEQUFRLENBQUMsRUFBRCxDQUpwQjtBQUFBLE1BSVBDLEtBSk87QUFBQSxNQUlBQyxRQUpBOztBQU1kSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxPQUFaLEVBVmMsQ0FXZDs7QUFDQSxNQUFNUyxLQUFLLEdBQUcsSUFBSUMsNERBQUosRUFBZDtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUM5QkMsT0FBRyxFQUFFYixPQUR5QjtBQUU5QlMsU0FBSyxFQUFFLElBQUlDLDREQUFKO0FBRnVCLEdBQWpCLENBQWY7QUFLQUMsUUFBTSxDQUNISixLQURILENBQ1M7QUFDTEEsU0FBSyxFQUFFTywwREFBRjtBQURBLEdBRFQsRUFZR0MsSUFaSCxDQVlRLFVBQUNDLE1BQUQ7QUFBQSxXQUFZWixPQUFPLENBQUNDLEdBQVIsQ0FBWVcsTUFBWixDQUFaO0FBQUEsR0FaUjtBQWNBLFNBQ0UsTUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVMLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFpQixhQUFTLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLEVBQUUsa0JBQUNNLENBQUQ7QUFBQSxhQUFPVCxRQUFRLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLGlCQUFmLEVBQUQsQ0FBZjtBQUFBLEtBRFo7QUFFRSxTQUFLLEVBQUViLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixFQVlFLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FiRixDQURGO0FBaUJEOztHQWxEUVIsSTs7S0FBQUEsSTtBQW1ETUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuLy8gaW1wb3J0IHtcbi8vICAgQXBvbGxvUHJvdmlkZXIsXG4vLyAgIEFwb2xsb0NsaWVudCxcbi8vICAgSHR0cExpbmssXG4vLyAgIEluTWVtb3J5Q2FjaGUsXG4vLyB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBncWwsXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3RcIjtcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbiwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBUElfVVJMID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIjtcbiAgY29uc29sZS5sb2coYFVSTDogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfWApO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDpcIik7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpO1xuXG4gIGNvbnNvbGUubG9nKFwiQVBJX1VSTDogXCIpO1xuICBjb25zb2xlLmxvZyhBUElfVVJMKTtcbiAgLy9jb25zdCBsaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfVVJMfWAgfSk7XG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcblxuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IEFQSV9VUkwsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIH0pO1xuXG4gIGNsaWVudFxuICAgIC5xdWVyeSh7XG4gICAgICBxdWVyeTogZ3FsYFxuICAgICAgICBxdWVyeSBSZXN0YXVyYW50cyB7XG4gICAgICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgPGgyPiBMb2NhbCBSZXN0YXVyYW50czwvaDI+XG4gICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwiYXBwZW5kXCI+IFNlYXJjaCA8L0lucHV0R3JvdXBBZGRvbj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSl9XG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFJlc3RhdXJhbnRMaXN0IHNlYXJjaD17cXVlcnl9IC8+XG4gICAgICA8Q2FydD4gPC9DYXJ0PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})