webpackHotUpdate_N_E("pages/info",{

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/home/mahamo/Documents/HyperionDev/Task 11/Countries/pages/info.js\",\n    _this = undefined;\n\n\n\n // accesses and renders data collected by API consumption\n\nvar Info = function Info(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [props.details.map(function (details) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-454083992\",\n          children: details.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n          className: \"jsx-454083992\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-454083992\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-454083992\",\n              children: \"Capital:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 50\n            }, _this), \" \", details.capital]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-454083992\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-454083992\",\n              children: \"Region:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 50\n            }, _this), \" \", details.region]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-454083992\" + \" \" + 'details-list',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-454083992\",\n              children: \"TimeZones: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 50\n            }, _this), details.timezones]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-454083992\" + \" \" + 'details-list',\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"jsx-454083992\",\n              children: \"Population:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 51\n            }, _this), details.population]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-454083992\" + \" \" + 'details-list',\n            children: [\"Currencies: \", details.currencies.map(function (curr) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-454083992\",\n                children: [curr.name, \" (\", curr.symbol, \")\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 25\n              }, _this);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"454083992\",\n      children: \"span.jsx-454083992{font-weight:900;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21haGFtby9Eb2N1bWVudHMvSHlwZXJpb25EZXYvVGFzayAxMS9Db3VudHJpZXMvcGFnZXMvaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm1CLEFBR2dDLGdCQUVwQiIsImZpbGUiOiIvaG9tZS9tYWhhbW8vRG9jdW1lbnRzL0h5cGVyaW9uRGV2L1Rhc2sgMTEvQ291bnRyaWVzL3BhZ2VzL2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyBhY2Nlc3NlcyBhbmQgcmVuZGVycyBkYXRhIGNvbGxlY3RlZCBieSBBUEkgY29uc3VtcHRpb25cbmNvbnN0IEluZm8gPSAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuXG4gICAgICAgIHtwcm9wcy5kZXRhaWxzLm1hcChkZXRhaWxzID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgxPntkZXRhaWxzLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RldGFpbHMtbGlzdCc+PHNwYW4+Q2FwaXRhbDo8L3NwYW4+IHtkZXRhaWxzLmNhcGl0YWx9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz48c3Bhbj5SZWdpb246PC9zcGFuPiB7ZGV0YWlscy5yZWdpb259PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz48c3Bhbj5UaW1lWm9uZXM6IDwvc3Bhbj57ZGV0YWlscy50aW1lem9uZXN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz4gPHNwYW4+UG9wdWxhdGlvbjo8L3NwYW4+e2RldGFpbHMucG9wdWxhdGlvbn08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkZXRhaWxzLWxpc3QnPkN1cnJlbmNpZXM6IHtkZXRhaWxzLmN1cnJlbmNpZXMubWFwKGN1cnIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnIubmFtZX0gKHtjdXJyLnN5bWJvbH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApKX1cbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgIH0gXG4gICAgICAgYH08L3N0eWxlPiBcbiAgICA8L0xheW91dD5cbik7XG5cbi8vIGZldGNoZXMgZGF0YSBmb3IgYWNjZXNzIGluIEluZm8gY29tcG9uZW50XG5JbmZvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBjb250ZXh0LnF1ZXJ5OyAvLyBhY2Nlc3MgcGFyYW0gdmFsdWUgdGhhdCB3YXMgcGFzc2VkIGluIGluZGV4LmpzXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL25hbWUvJHtuYW1lfT9mdWxsVGV4dD10cnVlYClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRldGFpbHM6IGRhdGFcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmZvOyJdfQ== */\\n/*@ sourceURL=/home/mahamo/Documents/HyperionDev/Task 11/Countries/pages/info.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n}; // fetches data for access in Info component\n\n\n_c = Info;\n\nInfo.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var name, res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            name = context.query.name; // access param value that was passed in index.js\n\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://restcountries.eu/rest/v2/name/\".concat(name, \"?fullText=true\"));\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              details: data\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Info);\n\nvar _c;\n\n$RefreshReg$(_c, \"Info\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mby5qcz84Y2I4Il0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsImRldGFpbHMiLCJtYXAiLCJuYW1lIiwiY2FwaXRhbCIsInJlZ2lvbiIsInRpbWV6b25lcyIsInBvcHVsYXRpb24iLCJjdXJyZW5jaWVzIiwiY3VyciIsInN5bWJvbCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1QscUVBQUMsMERBQUQ7QUFBQSxlQUVLQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFBRCxPQUFPO0FBQUEsMEJBQ3RCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBLG9CQUFLQSxPQUFPLENBQUNFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQSxrQ0FDSTtBQUFBLCtDQUFjLGNBQWQ7QUFBQSxvQ0FBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0IsT0FBb0RGLE9BQU8sQ0FBQ0csT0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSwrQ0FBYyxjQUFkO0FBQUEsb0NBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdCLE9BQW1ESCxPQUFPLENBQUNJLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUEsK0NBQWMsY0FBZDtBQUFBLG9DQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE3QixFQUFzREosT0FBTyxDQUFDSyxTQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFBLCtDQUFjLGNBQWQ7QUFBQSx5Q0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOUIsRUFBdURMLE9BQU8sQ0FBQ00sVUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQSwrQ0FBYyxjQUFkO0FBQUEsdUNBQTBDTixPQUFPLENBQUNPLFVBQVIsQ0FBbUJOLEdBQW5CLENBQXVCLFVBQUFPLElBQUk7QUFBQSxrQ0FDakU7QUFBQTtBQUFBLDJCQUNLQSxJQUFJLENBQUNOLElBRFYsUUFDa0JNLElBQUksQ0FBQ0MsTUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURpRTtBQUFBLGFBQTNCLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQSxzQkFEc0I7QUFBQSxLQUF6QixDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURTO0FBQUEsQ0FBYixDLENBNEJBOzs7S0E1Qk1YLEk7O0FBNkJOQSxJQUFJLENBQUNZLGVBQUw7QUFBQSw4TEFBdUIsaUJBQWdCQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWFQsZ0JBRFcsR0FDRlMsT0FBTyxDQUFDQyxLQUROLENBQ1hWLElBRFcsRUFDYTs7QUFEYjtBQUFBLG1CQUVEVyx5REFBSyxpREFBMENYLElBQTFDLG9CQUZKOztBQUFBO0FBRWJZLGVBRmE7QUFBQTtBQUFBLG1CQUdBQSxHQUFHLENBQUNDLElBQUosRUFIQTs7QUFBQTtBQUdiQyxnQkFIYTtBQUFBLDZDQUtaO0FBQ0hoQixxQkFBTyxFQUFFZ0I7QUFETixhQUxZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlbEIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmZvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy8gYWNjZXNzZXMgYW5kIHJlbmRlcnMgZGF0YSBjb2xsZWN0ZWQgYnkgQVBJIGNvbnN1bXB0aW9uXG5jb25zdCBJbmZvID0gKHByb3BzKSA9PiAoXG4gICAgPExheW91dD5cblxuICAgICAgICB7cHJvcHMuZGV0YWlscy5tYXAoZGV0YWlscyA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMT57ZGV0YWlscy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkZXRhaWxzLWxpc3QnPjxzcGFuPkNhcGl0YWw6PC9zcGFuPiB7ZGV0YWlscy5jYXBpdGFsfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RldGFpbHMtbGlzdCc+PHNwYW4+UmVnaW9uOjwvc3Bhbj4ge2RldGFpbHMucmVnaW9ufTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RldGFpbHMtbGlzdCc+PHNwYW4+VGltZVpvbmVzOiA8L3NwYW4+e2RldGFpbHMudGltZXpvbmVzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RldGFpbHMtbGlzdCc+IDxzcGFuPlBvcHVsYXRpb246PC9zcGFuPntkZXRhaWxzLnBvcHVsYXRpb259PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZGV0YWlscy1saXN0Jz5DdXJyZW5jaWVzOiB7ZGV0YWlscy5jdXJyZW5jaWVzLm1hcChjdXJyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyLm5hbWV9ICh7Y3Vyci5zeW1ib2x9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApKX08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICB9IFxuICAgICAgIGB9PC9zdHlsZT4gXG4gICAgPC9MYXlvdXQ+XG4pO1xuXG4vLyBmZXRjaGVzIGRhdGEgZm9yIGFjY2VzcyBpbiBJbmZvIGNvbXBvbmVudFxuSW5mby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gY29udGV4dC5xdWVyeTsgLy8gYWNjZXNzIHBhcmFtIHZhbHVlIHRoYXQgd2FzIHBhc3NlZCBpbiBpbmRleC5qc1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9uYW1lLyR7bmFtZX0/ZnVsbFRleHQ9dHJ1ZWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXRhaWxzOiBkYXRhXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5mbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ })

})