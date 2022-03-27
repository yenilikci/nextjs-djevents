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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkUserLoggedIn();\n    }, []);\n    //register user\n    const register = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/register`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push('/account/dashboard');\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    //login user\n    const login = async ({ email: identifier , password  })=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/login`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                identifier,\n                password\n            })\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push('/account/dashboard');\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    //logout user\n    const logout = async ()=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/logout`, {\n            method: 'POST'\n        });\n        if (res.ok) {\n            setUser(null);\n            router.push('/');\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    //check if user is logged in\n    const checkUserLoggedIn = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/user`);\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            error,\n            register,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/melihcelik/Desktop/nextjs-djevents/client/context/AuthContext.js\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDckJmLFFBQVEsQ0FBQyxJQUFJO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsRUFBNEI7SUFDNUIsS0FBSyxDQUFDRSxpQkFBaUIsVUFBVUwsSUFBSSxHQUFLLENBQUM7UUFDdkMsS0FBSyxDQUFDTyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUliLG1EQUFRLENBQUMsU0FBUztRQUM3QyxLQUFLLENBQUNtQixJQUFJLEdBQUcsS0FBSyxDQUFDUCxHQUFHLENBQUNRLElBQUk7UUFFM0IsRUFBRSxFQUFFUixHQUFHLENBQUNTLEVBQUUsRUFBRSxDQUFDO1lBQ1RmLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDZCxJQUFJO1FBQ3JCLENBQUMsTUFBTSxDQUFDO1lBQ0pHLFFBQVEsQ0FBQ1csSUFBSSxDQUFDSSxPQUFPO1lBQ3JCZixRQUFRLENBQUMsSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sNkVBQ0ROLFdBQVcsQ0FBQzJCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUN6QjtZQUFBQSxJQUFJLEVBQUpBLEtBQUk7WUFBRUUsS0FBSztZQUFFSSxRQUFRO1lBQUVhLEtBQUs7WUFBRUksTUFBTTtRQUFBLENBQUM7a0JBQzlEeEIsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFRCxpRUFBZUYsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWRqZXZlbnRzLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz8xMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge05FWFRfVVJMfSBmcm9tIFwiQC9jb25maWcvaW5kZXhcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNoZWNrVXNlckxvZ2dlZEluKCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICAvL3JlZ2lzdGVyIHVzZXJcbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vbG9naW4gdXNlclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKHtlbWFpbDogaWRlbnRpZmllciwgcGFzc3dvcmR9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9naW5gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICBzZXRVc2VyKGRhdGEudXNlcilcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9kYXNoYm9hcmQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2xvZ291dCB1c2VyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ291dGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3VzZXJgKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dXNlciwgZXJyb3IsIHJlZ2lzdGVyLCBsb2dpbiwgbG9nb3V0fX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJORVhUX1VSTCIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJjaGVja1VzZXJMb2dnZWRJbiIsInJlZ2lzdGVyIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwicHVzaCIsIm1lc3NhZ2UiLCJsb2dpbiIsImVtYWlsIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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