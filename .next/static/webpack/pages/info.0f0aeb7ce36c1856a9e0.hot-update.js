webpackHotUpdate_N_E("pages/info",{

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/home/mahamo/Documents/HyperionDev/Task 11/Countries/pages/info.js\",\n    _this = undefined;\n\n\n\n // accesses and renders data collected by API consumption\n\nvar Info = function Info(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [props.details.map(function (details) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        id: \"details-container\",\n        className: \"jsx-1384862157\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          id: \"pais-name\",\n          className: \"jsx-1384862157\",\n          children: [details.name, \":\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n          className: \"jsx-1384862157\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-1384862157\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-1384862157\",\n              children: \"Capital:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 50\n            }, _this), \" \", details.capital]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-1384862157\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-1384862157\",\n              children: \"Region:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 50\n            }, _this), \" \", details.region]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-1384862157\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-1384862157\",\n              children: \"TimeZones: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 50\n            }, _this), details.timezones]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-1384862157\" + \" \" + 'details-list',\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-1384862157\",\n              children: \"Population:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 51\n            }, _this), details.population]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-1384862157\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-1384862157\",\n              children: \"Currencies: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 50\n            }, _this), \" \", details.currencies.map(function (curr) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-1384862157\",\n                children: [curr.name, \" (\", curr.symbol, \")\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 25\n              }, _this);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 13\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1384862157\",\n      children: \"span.jsx-1384862157{font-weight:900;}.details-list.jsx-1384862157{font-size:26px;}#pais-name.jsx-1384862157{font-size:66px;font-weight:900;-webkit-text-decoration:underline;text-decoration:underline;}#details-container.jsx-1384862157{margin-top:40px;background-color:rgb(193,193,215);border-radius:20px;padding:20px;color:white;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21haGFtby9Eb2N1bWVudHMvSHlwZXJpb25EZXYvVGFzayAxMS9Db3VudHJpZXMvcGFnZXMvaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm1CLEFBR2dDLEFBR0QsQUFJSCxBQUtJLGVBUnBCLEFBSWlCLENBUGpCLEFBWXdDLGVBSmIsbUJBS0osbUJBQ04sYUFDRCxTQU5oQixHQU9BIiwiZmlsZSI6Ii9ob21lL21haGFtby9Eb2N1bWVudHMvSHlwZXJpb25EZXYvVGFzayAxMS9Db3VudHJpZXMvcGFnZXMvaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbi8vIGFjY2Vzc2VzIGFuZCByZW5kZXJzIGRhdGEgY29sbGVjdGVkIGJ5IEFQSSBjb25zdW1wdGlvblxuY29uc3QgSW5mbyA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG5cbiAgICAgICAge3Byb3BzLmRldGFpbHMubWFwKGRldGFpbHMgPT4gKFxuICAgICAgICAgICAgPGRpdiBpZD0nZGV0YWlscy1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxoMSBpZD0ncGFpcy1uYW1lJz57ZGV0YWlscy5uYW1lfTo8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz48c3Bhbj5DYXBpdGFsOjwvc3Bhbj4ge2RldGFpbHMuY2FwaXRhbH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkZXRhaWxzLWxpc3QnPjxzcGFuPlJlZ2lvbjo8L3NwYW4+IHtkZXRhaWxzLnJlZ2lvbn08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkZXRhaWxzLWxpc3QnPjxzcGFuPlRpbWVab25lczogPC9zcGFuPntkZXRhaWxzLnRpbWV6b25lc308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkZXRhaWxzLWxpc3QnPiA8c3Bhbj5Qb3B1bGF0aW9uOjwvc3Bhbj57ZGV0YWlscy5wb3B1bGF0aW9ufTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RldGFpbHMtbGlzdCc+PHNwYW4+Q3VycmVuY2llczogPC9zcGFuPiB7ZGV0YWlscy5jdXJyZW5jaWVzLm1hcChjdXJyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyLm5hbWV9ICh7Y3Vyci5zeW1ib2x9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApKX08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDsgICAgIFxuICAgICAgICAgICB9IFxuICAgICAgICAgICAuZGV0YWlscy1saXN0IHtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgICNwYWlzLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICNkZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMTkzLCAyMTUpO1xuICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgIH1cbiAgICAgICBgfTwvc3R5bGU+IFxuICAgIDwvTGF5b3V0PlxuKTtcblxuLy8gZmV0Y2hlcyBkYXRhIGZvciBhY2Nlc3MgaW4gSW5mbyBjb21wb25lbnRcbkluZm8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGNvbnRleHQucXVlcnk7IC8vIGFjY2VzcyBwYXJhbSB2YWx1ZSB0aGF0IHdhcyBwYXNzZWQgaW4gaW5kZXguanNcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvbmFtZS8ke25hbWV9P2Z1bGxUZXh0PXRydWVgKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGV0YWlsczogZGF0YVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZm87Il19 */\\n/*@ sourceURL=/home/mahamo/Documents/HyperionDev/Task 11/Countries/pages/info.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n}; // fetches data for access in Info component\n\n\n_c = Info;\n\nInfo.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var name, res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            name = context.query.name; // access param value that was passed in index.js\n\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://restcountries.eu/rest/v2/name/\".concat(name, \"?fullText=true\"));\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              details: data\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Info);\n\nvar _c;\n\n$RefreshReg$(_c, \"Info\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mby5qcz84Y2I4Il0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsImRldGFpbHMiLCJtYXAiLCJuYW1lIiwiY2FwaXRhbCIsInJlZ2lvbiIsInRpbWV6b25lcyIsInBvcHVsYXRpb24iLCJjdXJyZW5jaWVzIiwiY3VyciIsInN5bWJvbCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDVCxxRUFBQywwREFBRDtBQUFBLGVBRUtBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxHQUFkLENBQWtCLFVBQUFELE9BQU87QUFBQSwwQkFDdEI7QUFBSyxVQUFFLEVBQUMsbUJBQVI7QUFBQTtBQUFBLGdDQUNJO0FBQUksWUFBRSxFQUFDLFdBQVA7QUFBQTtBQUFBLHFCQUFvQkEsT0FBTyxDQUFDRSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBO0FBQUEsa0NBQ0k7QUFBQSxnREFBYyxjQUFkO0FBQUEsb0NBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdCLE9BQW9ERixPQUFPLENBQUNHLE9BQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsZ0RBQWMsY0FBZDtBQUFBLG9DQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE3QixPQUFtREgsT0FBTyxDQUFDSSxNQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGdEQUFjLGNBQWQ7QUFBQSxvQ0FBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0IsRUFBc0RKLE9BQU8sQ0FBQ0ssU0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQSxnREFBYyxjQUFkO0FBQUEseUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTlCLEVBQXVETCxPQUFPLENBQUNNLFVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUEsZ0RBQWMsY0FBZDtBQUFBLG9DQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE3QixPQUF3RE4sT0FBTyxDQUFDTyxVQUFSLENBQW1CTixHQUFuQixDQUF1QixVQUFBTyxJQUFJO0FBQUEsa0NBQy9FO0FBQUE7QUFBQSwyQkFDS0EsSUFBSSxDQUFDTixJQURWLFFBQ2tCTSxJQUFJLENBQUNDLE1BRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEK0U7QUFBQSxhQUEzQixDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURzQjtBQUFBLEtBQXpCLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFM7QUFBQSxDQUFiLEMsQ0EyQ0E7OztLQTNDTVgsSTs7QUE0Q05BLElBQUksQ0FBQ1ksZUFBTDtBQUFBLDhMQUF1QixpQkFBZ0JDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYVCxnQkFEVyxHQUNGUyxPQUFPLENBQUNDLEtBRE4sQ0FDWFYsSUFEVyxFQUNhOztBQURiO0FBQUEsbUJBRURXLHlEQUFLLGlEQUEwQ1gsSUFBMUMsb0JBRko7O0FBQUE7QUFFYlksZUFGYTtBQUFBO0FBQUEsbUJBR0FBLEdBQUcsQ0FBQ0MsSUFBSixFQUhBOztBQUFBO0FBR2JDLGdCQUhhO0FBQUEsNkNBS1o7QUFDSGhCLHFCQUFPLEVBQUVnQjtBQUROLGFBTFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2VsQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyBhY2Nlc3NlcyBhbmQgcmVuZGVycyBkYXRhIGNvbGxlY3RlZCBieSBBUEkgY29uc3VtcHRpb25cbmNvbnN0IEluZm8gPSAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuXG4gICAgICAgIHtwcm9wcy5kZXRhaWxzLm1hcChkZXRhaWxzID0+IChcbiAgICAgICAgICAgIDxkaXYgaWQ9J2RldGFpbHMtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8aDEgaWQ9J3BhaXMtbmFtZSc+e2RldGFpbHMubmFtZX06PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RldGFpbHMtbGlzdCc+PHNwYW4+Q2FwaXRhbDo8L3NwYW4+IHtkZXRhaWxzLmNhcGl0YWx9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz48c3Bhbj5SZWdpb246PC9zcGFuPiB7ZGV0YWlscy5yZWdpb259PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz48c3Bhbj5UaW1lWm9uZXM6IDwvc3Bhbj57ZGV0YWlscy50aW1lem9uZXN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz4gPHNwYW4+UG9wdWxhdGlvbjo8L3NwYW4+e2RldGFpbHMucG9wdWxhdGlvbn08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkZXRhaWxzLWxpc3QnPjxzcGFuPkN1cnJlbmNpZXM6IDwvc3Bhbj4ge2RldGFpbHMuY3VycmVuY2llcy5tYXAoY3VyciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3Vyci5uYW1lfSAoe2N1cnIuc3ltYm9sfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSl9PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7ICAgICBcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgLmRldGFpbHMtbGlzdCB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAjcGFpcy1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAjZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTMsIDE5MywgMjE1KTtcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICB9XG4gICAgICAgYH08L3N0eWxlPiBcbiAgICA8L0xheW91dD5cbik7XG5cbi8vIGZldGNoZXMgZGF0YSBmb3IgYWNjZXNzIGluIEluZm8gY29tcG9uZW50XG5JbmZvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBjb250ZXh0LnF1ZXJ5OyAvLyBhY2Nlc3MgcGFyYW0gdmFsdWUgdGhhdCB3YXMgcGFzc2VkIGluIGluZGV4LmpzXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL25hbWUvJHtuYW1lfT9mdWxsVGV4dD10cnVlYClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRldGFpbHM6IGRhdGFcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmZvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ })

})