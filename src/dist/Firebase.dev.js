"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _firebase["default"].initializeApp({
  apiKey: 'AIzaSyCaabgLOs5NMieJWwfrrrDfEJCSkMQaQzc',
  authDomain: 'sibuls-contact.firebaseapp.com',
  databaseURL: 'https://sibuls-contact.firebaseio.com',
  projectId: 'sibuls-contact',
  storageBucket: 'sibuls-contact.appspot.com',
  messagingSenderId: '612374256270',
  appId: '1:612374256270:web:e02ef417cb2ecb49f147df'
});

var db = firebaseApp.firestore();
exports.db = db;