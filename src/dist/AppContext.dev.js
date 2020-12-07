"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContext = exports.defaultObject = void 0;

var _react = require("react");

var defaultObject = {
  isAboutMeActive: false,
  //
  isFlipped: false,
  //
  isFlippedDone: false,
  menuActive: 'start',
  prevTransfrom: 'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  currentTransform: 'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  prevTop: '0%',
  currentTop: '0%',
  prevDotColor: '',
  //
  prevEmailSend: false,
  currentDotColor: '',
  isDotAnimated: false,
  showWarning: false,
  footer: 'start',
  email: false,
  linkedin: false,
  cv: '',
  //
  emailSend: false,
  bothCards: false,
  handleCardClick: function handleCardClick() {},
  handleDotClick: function handleDotClick() {},
  handleRotateClick: function handleRotateClick() {},
  handleFooterClick: function handleFooterClick() {},
  handleEmailClick: function handleEmailClick() {},
  handleLinkedinClick: function handleLinkedinClick() {},
  handleCv: function handleCv() {},
  handleEmailSend: function handleEmailSend() {},
  handleBothCardsClick: function handleBothCardsClick() {}
};
exports.defaultObject = defaultObject;
var AppContext = (0, _react.createContext)(defaultObject);
exports.AppContext = AppContext;