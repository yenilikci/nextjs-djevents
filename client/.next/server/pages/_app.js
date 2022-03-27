/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL),\n/* harmony export */   \"PER_PAGE\": () => (/* binding */ PER_PAGE)\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';\nconst PER_PAGE = 5;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSSxDQUF1QjtBQUUxRSxLQUFLLENBQUNDLFFBQVEsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHdCQUF3QixJQUFJLENBQXVCO0FBRWhGLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZGpldmVudHMvLi9jb25maWcvaW5kZXguanM/YTFiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyc7XG5cbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuZXhwb3J0IGNvbnN0IFBFUl9QQUdFID0gNTtcbiJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //register user\n    const register = async (user)=>{\n        console.log(user);\n    };\n    //login user\n    const login = async ({ email: identifier , password  })=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/login`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                identifier,\n                password\n            })\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    //logout user\n    const logout = async ()=>{\n        console.log('logout');\n    };\n    //check if user is logged in\n    const checkUserLoggedIn = async (user)=>{\n        console.log('check');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            error,\n            register,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/melihcelik/Desktop/nextjs-djevents/client/context/AuthContext.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ047QUFFdkMsS0FBSyxDQUFDRyxXQUFXLGlCQUFHSCxvREFBYTtBQUUxQixLQUFLLENBQUNJLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3pDLEtBQUssTUFBRUMsS0FBSSxNQUFFQyxPQUFPLE1BQUlOLCtDQUFRLENBQUMsSUFBSTtJQUNyQyxLQUFLLE1BQUVPLEtBQUssTUFBRUMsUUFBUSxNQUFJUiwrQ0FBUSxDQUFDLElBQUk7SUFFdkMsRUFBZTtJQUNmLEtBQUssQ0FBQ1MsUUFBUSxVQUFVSixJQUFJLEdBQUssQ0FBQztRQUM5QkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUk7SUFDcEIsQ0FBQztJQUNELEVBQVk7SUFDWixLQUFLLENBQUNPLEtBQUssVUFBVSxDQUFDQyxDQUFBQSxLQUFLLEVBQUVDLFVBQVUsR0FBRUMsUUFBUSxHQUFDLEdBQUssQ0FBQztRQUNwRCxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssSUFBSWhCLG1EQUFRLENBQUMsVUFBVSxHQUFHLENBQUM7WUFDOUNpQixNQUFNLEVBQUUsQ0FBTTtZQUNkQyxPQUFPLEVBQUUsQ0FBQztnQkFDTixDQUFjLGVBQUUsQ0FBa0I7WUFDdEMsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7Z0JBQ2xCUixVQUFVO2dCQUNWQyxRQUFRO1lBQ1osQ0FBQztRQUNMLENBQUM7UUFFRCxLQUFLLENBQUNRLElBQUksR0FBRyxLQUFLLENBQUNQLEdBQUcsQ0FBQ1EsSUFBSTtRQUUzQixFQUFFLEVBQUVSLEdBQUcsQ0FBQ1MsRUFBRSxFQUFFLENBQUM7WUFDVG5CLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQUk7UUFDckIsQ0FBQyxNQUFNLENBQUM7WUFDSkcsUUFBUSxDQUFDZSxJQUFJLENBQUNHLE9BQU87WUFDckJsQixRQUFRLENBQUMsSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELEVBQWE7SUFDYixLQUFLLENBQUNtQixNQUFNLGFBQWUsQ0FBQztRQUN4QmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVE7SUFDeEIsQ0FBQztJQUNELEVBQTRCO0lBQzVCLEtBQUssQ0FBQ2lCLGlCQUFpQixVQUFVdkIsSUFBSSxHQUFLLENBQUM7UUFDdkNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU87SUFDdkIsQ0FBQztJQUdELE1BQU0sNkVBQ0RULFdBQVcsQ0FBQzJCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUN6QjtZQUFBQSxJQUFJLEVBQUpBLEtBQUk7WUFBRUUsS0FBSztZQUFFRSxRQUFRO1lBQUVHLEtBQUs7WUFBRWUsTUFBTTtRQUFBLENBQUM7a0JBQzlEdkIsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFRCxpRUFBZUYsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWRqZXZlbnRzLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz8xMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtORVhUX1VSTH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy9yZWdpc3RlciB1c2VyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICB9XG4gICAgLy9sb2dpbiB1c2VyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoe2VtYWlsOiBpZGVudGlmaWVyLCBwYXNzd29yZH0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dpbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2xvZ291dCB1c2VyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XG4gICAgfVxuICAgIC8vY2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dXNlciwgZXJyb3IsIHJlZ2lzdGVyLCBsb2dpbiwgbG9nb3V0fX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJORVhUX1VSTCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImVtYWlsIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwibWVzc2FnZSIsImxvZ291dCIsImNoZWNrVXNlckxvZ2dlZEluIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/melihcelik/Desktop/nextjs-djevents/client/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/melihcelik/Desktop/nextjs-djevents/client/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7U0FFckJDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0RILDhEQUFZOzhGQUNWRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBR2hDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kamV2ZW50cy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSBcIkAvY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();