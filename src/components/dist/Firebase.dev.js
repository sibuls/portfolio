"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _firebase["default"].initializeApp({// Your firebase credentials
});

var db = firebaseApp.firestore();
exports.db = db;