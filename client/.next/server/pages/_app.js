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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkUserLoggedIn();\n    }, []);\n    //register user\n    const register = async (user)=>{\n        console.log(user);\n    };\n    //login user\n    const login = async ({ email: identifier , password  })=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/login`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                identifier,\n                password\n            })\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push('/account/dashboard');\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    //logout user\n    const logout = async ()=>{\n        console.log('logout');\n    };\n    //check if user is logged in\n    const checkUserLoggedIn = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.NEXT_URL}/api/user`);\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            error,\n            register,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/melihcelik/Desktop/nextjs-djevents/client/context/AuthContext.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDakI7QUFDRjtBQUVyQyxLQUFLLENBQUNLLFdBQVcsaUJBQUdMLG9EQUFhO0FBRTFCLEtBQUssQ0FBQ00sWUFBWSxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBQyxHQUFLLENBQUM7SUFDekMsS0FBSyxNQUFFQyxLQUFJLE1BQUVDLE9BQU8sTUFBSVAsK0NBQVEsQ0FBQyxJQUFJO0lBQ3JDLEtBQUssTUFBRVEsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsSUFBSTtJQUV2QyxLQUFLLENBQUNVLE1BQU0sR0FBR1Isc0RBQVM7SUFFeEJILGdEQUFTLEtBQU8sQ0FBQztRQUNiWSxpQkFBaUI7SUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUdMLEVBQWU7SUFDZixLQUFLLENBQUNDLFFBQVEsVUFBVU4sSUFBSSxHQUFLLENBQUM7UUFDOUJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJO0lBQ3BCLENBQUM7SUFDRCxFQUFZO0lBQ1osS0FBSyxDQUFDUyxLQUFLLFVBQVUsQ0FBQ0MsQ0FBQUEsS0FBSyxFQUFFQyxVQUFVLEdBQUVDLFFBQVEsR0FBQyxHQUFLLENBQUM7UUFDcEQsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUluQixtREFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDO1lBQzlDb0IsTUFBTSxFQUFFLENBQU07WUFDZEMsT0FBTyxFQUFFLENBQUM7Z0JBQ04sQ0FBYyxlQUFFLENBQWtCO1lBQ3RDLENBQUM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsQlIsVUFBVTtnQkFDVkMsUUFBUTtZQUNaLENBQUM7UUFDTCxDQUFDO1FBRUQsS0FBSyxDQUFDUSxJQUFJLEdBQUcsS0FBSyxDQUFDUCxHQUFHLENBQUNRLElBQUk7UUFFM0IsRUFBRSxFQUFFUixHQUFHLENBQUNTLEVBQUUsRUFBRSxDQUFDO1lBQ1RyQixPQUFPLENBQUNtQixJQUFJLENBQUNwQixJQUFJO1lBQ2pCSSxNQUFNLENBQUNtQixJQUFJLENBQUMsQ0FBb0I7UUFDcEMsQ0FBQyxNQUFNLENBQUM7WUFDSnBCLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ0ksT0FBTztZQUNyQnJCLFFBQVEsQ0FBQyxJQUFJO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsRUFBYTtJQUNiLEtBQUssQ0FBQ3NCLE1BQU0sYUFBZSxDQUFDO1FBQ3hCbEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUTtJQUN4QixDQUFDO0lBQ0QsRUFBNEI7SUFDNUIsS0FBSyxDQUFDSCxpQkFBaUIsVUFBVUwsSUFBSSxHQUFLLENBQUM7UUFDdkMsS0FBSyxDQUFDYSxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUluQixtREFBUSxDQUFDLFNBQVM7UUFDN0MsS0FBSyxDQUFDeUIsSUFBSSxHQUFHLEtBQUssQ0FBQ1AsR0FBRyxDQUFDUSxJQUFJO1FBRTNCLEVBQUUsRUFBRVIsR0FBRyxDQUFDUyxFQUFFLEVBQUUsQ0FBQztZQUNUckIsT0FBTyxDQUFDbUIsSUFBSSxDQUFDcEIsSUFBSTtRQUNyQixDQUFDLE1BQU0sQ0FBQztZQUNKRyxRQUFRLENBQUNpQixJQUFJLENBQUNJLE9BQU87WUFDckJyQixRQUFRLENBQUMsSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sNkVBQ0ROLFdBQVcsQ0FBQzZCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUMzQjtZQUFBQSxJQUFJLEVBQUpBLEtBQUk7WUFBRUUsS0FBSztZQUFFSSxRQUFRO1lBQUVHLEtBQUs7WUFBRWdCLE1BQU07UUFBQSxDQUFDO2tCQUM5RDFCLFFBQVE7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVGLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kamV2ZW50cy8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtORVhUX1VSTH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGVja1VzZXJMb2dnZWRJbigpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgLy9yZWdpc3RlciB1c2VyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICB9XG4gICAgLy9sb2dpbiB1c2VyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoe2VtYWlsOiBpZGVudGlmaWVyLCBwYXNzd29yZH0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dpbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vbG9nb3V0IHVzZXJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcbiAgICB9XG4gICAgLy9jaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS91c2VyYClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICBzZXRVc2VyKGRhdGEudXNlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSlcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3VzZXIsIGVycm9yLCByZWdpc3RlciwgbG9naW4sIGxvZ291dH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTkVYVF9VUkwiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImVtYWlsIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwicHVzaCIsIm1lc3NhZ2UiLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

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