"use strict";
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
exports.id = "pages/api/admin/files";
exports.ids = ["pages/api/admin/files"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/admin/files.js":
/*!**********************************!*\
  !*** ./pages/api/admin/files.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst uploadsDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"files\");\n// Helper to read files metadata\nfunction readFiles() {\n    try {\n        const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(uploadsDir);\n        return files.map((filename)=>({\n                filename,\n                originalname: filename\n            }));\n    } catch  {\n        return [];\n    }\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const files = readFiles();\n        res.status(200).json({\n            files\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vZmlsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUV2QixNQUFNRSxhQUFhRCxnREFBU0UsQ0FBQ0MsUUFBUUMsT0FBTyxVQUFVO0FBRXRELGdDQUFnQztBQUNoQyxTQUFTQztJQUNQLElBQUk7UUFDRixNQUFNQyxRQUFRUCxxREFBY1EsQ0FBQ047UUFDN0IsT0FBT0ssTUFBTUUsSUFBSSxDQUFDQyxXQUFjO2dCQUM5QkE7Z0JBQ0FDLGNBQWNEO1lBQ2hCO0lBQ0YsRUFBRSxPQUFNO1FBQ04sT0FBTyxFQUFFO0lBQ1g7QUFDRjtBQUVlLFNBQVNFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUN0QyxJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDeEIsTUFBTVIsUUFBUUQ7UUFDZFEsSUFBSUUsT0FBTyxLQUFLQyxLQUFLO1lBQUVWO1FBQU07SUFDL0IsT0FBTztRQUNMTyxJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFxQjtJQUNyRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRvci10ZWFtLXByaXZhdGUtc2NhcGUvLi9wYWdlcy9hcGkvYWRtaW4vZmlsZXMuanM/MThmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCB1cGxvYWRzRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAnZmlsZXMnKVxuXG4vLyBIZWxwZXIgdG8gcmVhZCBmaWxlcyBtZXRhZGF0YVxuZnVuY3Rpb24gcmVhZEZpbGVzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmModXBsb2Fkc0RpcilcbiAgICByZXR1cm4gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4gKHtcbiAgICAgIGZpbGVuYW1lLFxuICAgICAgb3JpZ2luYWxuYW1lOiBmaWxlbmFtZSxcbiAgICB9KSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBjb25zdCBmaWxlcyA9IHJlYWRGaWxlcygpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBmaWxlcyB9KVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJ1cGxvYWRzRGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJyZWFkRmlsZXMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwibWFwIiwiZmlsZW5hbWUiLCJvcmlnaW5hbG5hbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/files.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/files.js"));
module.exports = __webpack_exports__;

})();