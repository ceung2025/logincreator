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
exports.id = "pages/api/admin/users";
exports.ids = ["pages/api/admin/users"];
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

/***/ "(api)/./pages/api/admin/users.js":
/*!**********************************!*\
  !*** ./pages/api/admin/users.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst usersFile = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"users.json\");\n// Helper to read users from file\nfunction readUsers() {\n    try {\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(usersFile, \"utf8\");\n        return JSON.parse(data);\n    } catch  {\n        return [];\n    }\n}\n// Helper to write users to file\nfunction writeUsers(users) {\n    fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().dirname(usersFile), {\n        recursive: true\n    });\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(usersFile, JSON.stringify(users, null, 2));\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const users = readUsers();\n        res.status(200).json({\n            users\n        });\n    } else if (req.method === \"POST\") {\n        const { email } = req.body;\n        if (!email) {\n            return res.status(400).json({\n                error: \"Email is required\"\n            });\n        }\n        const users = readUsers();\n        if (users.find((u)=>u.email === email)) {\n            return res.status(400).json({\n                error: \"User already exists\"\n            });\n        }\n        users.push({\n            email\n        });\n        writeUsers(users);\n        res.status(201).json({\n            message: \"User added\"\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vdXNlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUV2QixNQUFNRSxZQUFZRCxnREFBU0UsQ0FBQ0MsUUFBUUMsT0FBTyxRQUFRO0FBRW5ELGlDQUFpQztBQUNqQyxTQUFTQztJQUNQLElBQUk7UUFDRixNQUFNQyxPQUFPUCxzREFBZVEsQ0FBQ04sV0FBVztRQUN4QyxPQUFPTyxLQUFLQyxNQUFNSDtJQUNwQixFQUFFLE9BQU07UUFDTixPQUFPLEVBQUU7SUFDWDtBQUNGO0FBRUEsZ0NBQWdDO0FBQ2hDLFNBQVNJLFdBQVdDLEtBQUs7SUFDdkJaLG1EQUFZYSxDQUFDWixtREFBWWEsQ0FBQ1osWUFBWTtRQUFFYSxXQUFXO0lBQUs7SUFDeERmLHVEQUFnQmdCLENBQUNkLFdBQVdPLEtBQUtRLFVBQVVMLE9BQU8sTUFBTTtBQUMxRDtBQUVlLFNBQVNNLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUN0QyxJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDeEIsTUFBTVQsUUFBUU47UUFDZGMsSUFBSUUsT0FBTyxLQUFLQyxLQUFLO1lBQUVYO1FBQU07SUFDL0IsT0FBTyxJQUFJTyxJQUFJRSxXQUFXLFFBQVE7UUFDaEMsTUFBTSxFQUFFRyxLQUFLLEVBQUUsR0FBR0wsSUFBSU07UUFDdEIsSUFBSSxDQUFDRCxPQUFPO1lBQ1YsT0FBT0osSUFBSUUsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRyxPQUFPO1lBQW9CO1FBQzNEO1FBQ0EsTUFBTWQsUUFBUU47UUFDZCxJQUFJTSxNQUFNZSxLQUFLLENBQUNDLElBQU1BLEVBQUVKLFVBQVVBLFFBQVE7WUFDeEMsT0FBT0osSUFBSUUsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRyxPQUFPO1lBQXNCO1FBQzdEO1FBQ0FkLE1BQU1pQixLQUFLO1lBQUVMO1FBQU07UUFDbkJiLFdBQVdDO1FBQ1hRLElBQUlFLE9BQU8sS0FBS0MsS0FBSztZQUFFTyxTQUFTO1FBQWE7SUFDL0MsT0FBTztRQUNMVixJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFBRUcsT0FBTztRQUFxQjtJQUNyRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRvci10ZWFtLXByaXZhdGUtc2NhcGUvLi9wYWdlcy9hcGkvYWRtaW4vdXNlcnMuanM/Y2YwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCB1c2Vyc0ZpbGUgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAndXNlcnMuanNvbicpXG5cbi8vIEhlbHBlciB0byByZWFkIHVzZXJzIGZyb20gZmlsZVxuZnVuY3Rpb24gcmVhZFVzZXJzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmModXNlcnNGaWxlLCAndXRmOCcpXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLy8gSGVscGVyIHRvIHdyaXRlIHVzZXJzIHRvIGZpbGVcbmZ1bmN0aW9uIHdyaXRlVXNlcnModXNlcnMpIHtcbiAgZnMubWtkaXJTeW5jKHBhdGguZGlybmFtZSh1c2Vyc0ZpbGUpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICBmcy53cml0ZUZpbGVTeW5jKHVzZXJzRmlsZSwgSlNPTi5zdHJpbmdpZnkodXNlcnMsIG51bGwsIDIpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHVzZXJzID0gcmVhZFVzZXJzKClcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHVzZXJzIH0pXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHlcbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9KVxuICAgIH1cbiAgICBjb25zdCB1c2VycyA9IHJlYWRVc2VycygpXG4gICAgaWYgKHVzZXJzLmZpbmQoKHUpID0+IHUuZW1haWwgPT09IGVtYWlsKSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzJyB9KVxuICAgIH1cbiAgICB1c2Vycy5wdXNoKHsgZW1haWwgfSlcbiAgICB3cml0ZVVzZXJzKHVzZXJzKVxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgYWRkZWQnIH0pXG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsInVzZXJzRmlsZSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwicmVhZFVzZXJzIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsIkpTT04iLCJwYXJzZSIsIndyaXRlVXNlcnMiLCJ1c2VycyIsIm1rZGlyU3luYyIsImRpcm5hbWUiLCJyZWN1cnNpdmUiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlbWFpbCIsImJvZHkiLCJlcnJvciIsImZpbmQiLCJ1IiwicHVzaCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/users.js"));
module.exports = __webpack_exports__;

})();