/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HIDE_SWAL = exports.SHOW_SWAL = exports.SUBMIT_FORM = exports.SET_LEAVE_ANIMATION = undefined;
	exports.setLeaveAnimation = setLeaveAnimation;
	exports.submitForm = submitForm;
	exports.showSwal = showSwal;
	exports.hideSwal = hideSwal;
	exports.submitFormRequest = submitFormRequest;

	var _apiCaller = __webpack_require__(25);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _reduxBatchedActions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var SET_LEAVE_ANIMATION = exports.SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';
	var SUBMIT_FORM = exports.SUBMIT_FORM = 'SUBMIT_FORM';
	var SHOW_SWAL = exports.SHOW_SWAL = 'SHOW_SWAL';
	var HIDE_SWAL = exports.HIDE_SWAL = 'HIDE_SWAL';

	// Export Actions
	function setLeaveAnimation(animation) {
	  return {
	    type: SET_LEAVE_ANIMATION,
	    animation: animation
	  };
	}

	function submitForm(data) {
	  return {
	    type: SUBMIT_FORM,
	    data: data
	  };
	}

	function showSwal() {
	  return {
	    type: SHOW_SWAL
	  };
	}

	function hideSwal() {
	  return {
	    type: HIDE_SWAL
	  };
	}

	function submitFormRequest(data) {
	  var name = data.name,
	      email = data.email,
	      phone = data.phone,
	      inquiry = data.inquiry;

	  return function (dispatch) {
	    (0, _apiCaller2.default)('add-contact/', 'post', {
	      data: {
	        name: name,
	        email: email,
	        phone: phone,
	        inquiry: inquiry
	      }
	    }).then(function (res) {
	      dispatch((0, _reduxBatchedActions.batchActions)([submitForm(res), showSwal()]));
	    });
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _colorManipulator = __webpack_require__(81);

	var _colors = __webpack_require__(79);

	var Colors = _interopRequireWildcard(_colors);

	var _styles = __webpack_require__(2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var rawBaseTheme = _extends({}, _styles.spacing, {
	  fontFamily: 'AvenirNext, sans-serif',
	  palette: {
	    primary1Color: '#767679',
	    primary2Color: '#0066FF',
	    primary3Color: Colors.lightBlack,
	    accent1Color: Colors.pinkA200,
	    accent2Color: Colors.grey100,
	    accent3Color: Colors.grey500,
	    textColor: Colors.darkBlack,
	    alternateTextColor: Colors.white,
	    canvasColor: Colors.white,
	    borderColor: Colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(Colors.darkBlack, 0.3)
	  }
	});

	exports.default = rawBaseTheme;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/hugo-exp',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _AboutMeReducer = __webpack_require__(14);

	var _animate = {
	  "animated": "_3r0mq9S7Wc2cm68zTdSanO",
	  "infinite": "_39g1891yxx_Ju5xjjy1jzn",
	  "hinge": "_2FeOisFrfOoF3CPqiRPwDs",
	  "flipOutX": "GRvy3Rtqk_p1WA4ISw17X",
	  "flipOutY": "_3sHrEPcTQ8wy_g_7xhYUaq",
	  "bounceIn": "FNqy24qpvuWyN324h1jQt",
	  "bounceOut": "M4TLNKZvAt6Euon8OTBSg",
	  "bounce": "_2R-8W-5pB4ZGcRYTEm0eUz",
	  "flash": "_2bxipBCixhcu4JWkIbUnAl",
	  "pulse": "_18k3lDKsSFZyKWzbSDzOZ0",
	  "rubberBand": "VifMYJ2Dm9nu8CYeXZN_O",
	  "shake": "v9onn00ZAX0JyFxDMtoOa",
	  "headShake": "gJo1FSJp10TL_AP_mhaJX",
	  "swing": "_3HkZbNny1NUWD0tT9HJlNQ",
	  "tada": "pCGrTRmQAMKrWrG5tBXG_",
	  "wobble": "_3XR4NjvZjuLZfqM1S0PgOm",
	  "jello": "_22pDETzONWsYfkyibrHBUr",
	  "bounceInDown": "_1BtMguP7zLzQ7vus2Oz8oC",
	  "bounceInLeft": "ChJ6Wvpi__wzp0IeczBT8",
	  "bounceInRight": "_3NEBDIFhuM7UiBTt5T9cuB",
	  "bounceInUp": "_1XNDgYlpOLWPmUbein5Svz",
	  "bounceOutDown": "_7sCwUF6gRjuEGQbu8vZJT",
	  "bounceOutLeft": "_2zWwbS3b5HSj5wvCjP0g_Z",
	  "bounceOutRight": "_3ItUJv3aRNqZjnCDSQfooL",
	  "bounceOutUp": "_1TbBPhQCK_Tj3eRb5HRg0V",
	  "fadeIn": "_1dfHUeEigqZKaz9VqhwCWb",
	  "fadeInDown": "_3YjYpd53_FQTd6sY394muf",
	  "fadeInDownBig": "_2oXogJH6ealdNM7hq8By5w",
	  "fadeInLeft": "_37TO6w-qRdn360Q56rwMlF",
	  "fadeInLeftBig": "_3k5qTpWazjJzryVgPMPZmY",
	  "fadeInRight": "_2G3Ryc3I1emKLro-w0mJLl",
	  "fadeInRightBig": "gIzrJDqgjX8oX3QmEYxw3",
	  "fadeInUp": "kWsa6kBxkGLypi4-mU6bU",
	  "fadeInUpBig": "_1kN6Plon06A4RFVocStYAP",
	  "fadeOut": "_12yNe2uIRjfF-wFv3Ps6fZ",
	  "fadeOutDown": "_3lMvLY2YA_OtJvvcJROZDl",
	  "fadeOutDownBig": "_33uAMEQeeC060Xw8FFwi8i",
	  "fadeOutLeft": "_1DOKHBu6380bnIsgmYH7pQ",
	  "fadeOutLeftBig": "_1-Irat2opOfE8VFQKtByBa",
	  "fadeOutRight": "_2AprXBXBi-bRJOrIeRn4zY",
	  "fadeOutRightBig": "_1KUEmm84HNN9F7B6YxKLYC",
	  "fadeOutUp": "_1AdjSRFCKFYF-uEHcrqY_-",
	  "fadeOutUpBig": "_1fvHvkROMAciZl08yk151f",
	  "flip": "SZnDis1iCYaZX2iAka0AD",
	  "flipInX": "_3KaCi8BFXWJedh5kv8NPHs",
	  "flipInY": "_2bbm1f20KPAO-NOHFoSMkV",
	  "lightSpeedIn": "_3UZT4yJVHiFSzESjY_vkW3",
	  "lightSpeedOut": "_2Vz9L__gi00kBa_U9jsKbH",
	  "rotateIn": "eh61XgjfkBJXam5A1nbyv",
	  "rotateInDownLeft": "jW4C5DaKtsrF7iIlt77Hl",
	  "rotateInDownRight": "dzPOAmrkxK4kqf1Qi3YED",
	  "rotateInUpLeft": "f6AuH8cii2M9M4o_puCoV",
	  "rotateInUpRight": "_97N163Rl8VAJp-g0y9uAB",
	  "rotateOut": "_28YRzI46SAC67e2w1kqIHy",
	  "rotateOutDownLeft": "_3F-rBkOPeY6peSGn0KaHi6",
	  "rotateOutDownRight": "_3QaeUebvm_hDmM8XyKDx-c",
	  "rotateOutUpLeft": "_3OdjVJLA4C4r6OJLu54tPK",
	  "rotateOutUpRight": "_3wZ8YsrBU1ssIYWNrTWdop",
	  "rollIn": "JZMlyQJfPBvaAOEQ0_lqO",
	  "rollOut": "Ei5yJnm7U8ou7wxwwh465",
	  "zoomIn": "_31TiMTHefHKQyNtpgnxdJG",
	  "zoomInDown": "_3Dkl1rEapNChrq-5-Q621T",
	  "zoomInLeft": "_2gfS98LQ8P5YfRyu05o9Jp",
	  "zoomInRight": "_3BmL4vMvU9kIIjnORZ_3S_",
	  "zoomInUp": "_1aUktT-M7KaBb6KTk_Fi60",
	  "zoomOut": "l87T1ZcL5PJsHt5IgKobT",
	  "zoomOutDown": "_11KSanMj6lgSXviEP1jsgJ",
	  "zoomOutLeft": "_14_r8yqvj0XJL2br0Iv1HJ",
	  "zoomOutRight": "H3PkUBeHMjR9HK8LwfcmS",
	  "zoomOutUp": "_7HIP_dYIaROGx5nSoGFF2",
	  "slideInDown": "_2-kwH364DBmQfpvHTbOqCb",
	  "slideInLeft": "_1iptQXrynUtTrun5cECksu",
	  "slideInRight": "_1-YHRccTFOZm-V46e15nr3",
	  "slideInUp": "_1ToTZgcjGMaYpiWaVlOjyq",
	  "slideOutDown": "_29G91APzNGaUj-_McqEA0u",
	  "slideOutLeft": "_2qHPXO_uFCk50SG5DEmn7a",
	  "slideOutRight": "_2gxm9oRHDlm5mjqhTdsk15",
	  "slideOutUp": "_3VEaDz-Iae1m_S61Co6RE6"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _AboutMe = {
	  "about-me-container": "yJkyMSIXTbSoh3oojXgoW",
	  "text": "_3BXtstM1IW7IpBQ7Qeo76V"
	};

	var _AboutMe2 = _interopRequireDefault(_AboutMe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref2 = _jsx('h1', {}, void 0, 'About Me');

	var _ref3 = _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'D\u2019'), 'uring my Junior year of college, I decided I was going to become a Web Application Developer and soon after college, I began searching for career opportunities that would let me acquire skills that could one day summate to that of a Full Stack JavaScript Developer. I worked at a digital agency, SapientNitro, where I was responsible for creating modular - reusable web components using just HTML5, CSS3, & JavaScript. We were only allowed to use jQuery & GreenSock\u2019s TweenMax animation library, as the client whom project team I was on wanted very little third-party libraries. I really learned a lot about working in a fast pace environment and how to organize my time to finish my contributions to meet deadlines as well as the strengths JavaScript provided within a browser environment.');

	var _ref4 = _jsx('p', {}, void 0, 'Before being granted the opportunity to be a Front End developer at SapientNitro, I had completed a freelance project for a client I met at Starbucks. The project was a landing page built with HTML5, CSS3, JavaScript, jQuery, & Bootstrap and it had to also allow for clients to connect with the owner of the company through email; so I built a web server with NodeJS to handle sending emails directly from the landing page. I then became more interested in Back End development with NodeJS and thus became the prologue towards becoming more Full Stack Savvy.');

	var _ref5 = _jsx('p', {}, void 0, 'Recently, I was given the opportunity to work at my first start up, Callpal App, LLC where they had developed an app Callpal App; purposed to allow users to make calls, app-to-app, or app-to-landline, for free. During my role there as a Software-Engineer, I was tasked with various back-end systems that needed to: migrate data from MySQL to Couchbase stores, restructure data for in house analytics and for B2B teams. The RESTful APIs were built on top of NodeJS and there I learned to work in an Agile environment where I had to explain my progress in detail to my executives and team members every step of the way during and after the completion of tasks posted and managed by JIRA.');

	var _ref6 = _jsx('p', {}, void 0, 'As you can see, aside from a few personal projects and collegiate level programming workload, I have obtained professional experience in both front-end and back-end development. Everyday, I aim to become a better software developer and am always looking for excuses to learn new philosophies in software development & design. Most recently, I have become especially interested in distributive systems, artificial intelligence (machine learning), and how to leverage technology to add value to current markets.');

	var AboutMe = function AboutMe(_ref) {
	  var leaveAnimation = _ref.leaveAnimation;

	  return _jsx('div', {
	    className: _AboutMe2.default['about-me-container'] + ' ' + _animate2.default.animated + ' ' + _animate2.default.slideInLeft + ' ' + leaveAnimation
	  }, void 0, _jsx('div', {
	    className: _AboutMe2.default.text + ' ' + _animate2.default.animated + ' ' + _animate2.default.slideInLeft + ' ' + leaveAnimation
	  }, void 0, _ref2, _ref3, _ref4, _ref5, _ref6));
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    leaveAnimation: (0, _AboutMeReducer.getLeaveAnimation)(state)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(AboutMe);

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setLeaveAnimation = setLeaveAnimation;
	// Export Constants
	var SET_LEAVE_ANIMATION = exports.SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';

	// Export Actions
	function setLeaveAnimation(animation) {
	  return {
	    type: SET_LEAVE_ANIMATION,
	    animation: animation
	  };
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLeaveAnimation = undefined;

	var _AboutMeActions = __webpack_require__(13);

	// Initial State
	var initialState = {
	  animation: ''
	}; // Import Actions


	var AboutMeReducer = function AboutMeReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AboutMeActions.SET_LEAVE_ANIMATION:
	      return Object.assign({}, state, {
	        animation: action.animation
	      });
	    default:
	      return state;
	  }
	};

	var getLeaveAnimation = exports.getLeaveAnimation = function getLeaveAnimation(state) {
	  return state.aboutMe.animation;
	};

	exports.default = AboutMeReducer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LOAD_ANALYZED_DATA = undefined;
	exports.loadAnalyzedData = loadAnalyzedData;
	exports.fetchAnalyzedData = fetchAnalyzedData;

	var _apiCaller = __webpack_require__(25);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LOAD_ANALYZED_DATA = exports.LOAD_ANALYZED_DATA = 'LOAD_ANALYZED_DATA';

	function loadAnalyzedData(analyzedData) {
	  return {
	    type: LOAD_ANALYZED_DATA,
	    analyzedData: analyzedData
	  };
	}

	function fetchAnalyzedData(name, limit) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('analyzed/?name=' + name + '&limit=' + limit).then(function (res) {
	      return dispatch(loadAnalyzedData(res));
	    });
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(88);

	var _reduxDevtoolsLogMonitor = __webpack_require__(90);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(89);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(67);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _lib = __webpack_require__(66);

	var _RaisedButton = __webpack_require__(77);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _reactRedux = __webpack_require__(1);

	var _ContactActions = __webpack_require__(4);

	var _ContactReducer = __webpack_require__(18);

	var _animate = {
	  "animated": "_3r0mq9S7Wc2cm68zTdSanO",
	  "infinite": "_39g1891yxx_Ju5xjjy1jzn",
	  "hinge": "_2FeOisFrfOoF3CPqiRPwDs",
	  "flipOutX": "GRvy3Rtqk_p1WA4ISw17X",
	  "flipOutY": "_3sHrEPcTQ8wy_g_7xhYUaq",
	  "bounceIn": "FNqy24qpvuWyN324h1jQt",
	  "bounceOut": "M4TLNKZvAt6Euon8OTBSg",
	  "bounce": "_2R-8W-5pB4ZGcRYTEm0eUz",
	  "flash": "_2bxipBCixhcu4JWkIbUnAl",
	  "pulse": "_18k3lDKsSFZyKWzbSDzOZ0",
	  "rubberBand": "VifMYJ2Dm9nu8CYeXZN_O",
	  "shake": "v9onn00ZAX0JyFxDMtoOa",
	  "headShake": "gJo1FSJp10TL_AP_mhaJX",
	  "swing": "_3HkZbNny1NUWD0tT9HJlNQ",
	  "tada": "pCGrTRmQAMKrWrG5tBXG_",
	  "wobble": "_3XR4NjvZjuLZfqM1S0PgOm",
	  "jello": "_22pDETzONWsYfkyibrHBUr",
	  "bounceInDown": "_1BtMguP7zLzQ7vus2Oz8oC",
	  "bounceInLeft": "ChJ6Wvpi__wzp0IeczBT8",
	  "bounceInRight": "_3NEBDIFhuM7UiBTt5T9cuB",
	  "bounceInUp": "_1XNDgYlpOLWPmUbein5Svz",
	  "bounceOutDown": "_7sCwUF6gRjuEGQbu8vZJT",
	  "bounceOutLeft": "_2zWwbS3b5HSj5wvCjP0g_Z",
	  "bounceOutRight": "_3ItUJv3aRNqZjnCDSQfooL",
	  "bounceOutUp": "_1TbBPhQCK_Tj3eRb5HRg0V",
	  "fadeIn": "_1dfHUeEigqZKaz9VqhwCWb",
	  "fadeInDown": "_3YjYpd53_FQTd6sY394muf",
	  "fadeInDownBig": "_2oXogJH6ealdNM7hq8By5w",
	  "fadeInLeft": "_37TO6w-qRdn360Q56rwMlF",
	  "fadeInLeftBig": "_3k5qTpWazjJzryVgPMPZmY",
	  "fadeInRight": "_2G3Ryc3I1emKLro-w0mJLl",
	  "fadeInRightBig": "gIzrJDqgjX8oX3QmEYxw3",
	  "fadeInUp": "kWsa6kBxkGLypi4-mU6bU",
	  "fadeInUpBig": "_1kN6Plon06A4RFVocStYAP",
	  "fadeOut": "_12yNe2uIRjfF-wFv3Ps6fZ",
	  "fadeOutDown": "_3lMvLY2YA_OtJvvcJROZDl",
	  "fadeOutDownBig": "_33uAMEQeeC060Xw8FFwi8i",
	  "fadeOutLeft": "_1DOKHBu6380bnIsgmYH7pQ",
	  "fadeOutLeftBig": "_1-Irat2opOfE8VFQKtByBa",
	  "fadeOutRight": "_2AprXBXBi-bRJOrIeRn4zY",
	  "fadeOutRightBig": "_1KUEmm84HNN9F7B6YxKLYC",
	  "fadeOutUp": "_1AdjSRFCKFYF-uEHcrqY_-",
	  "fadeOutUpBig": "_1fvHvkROMAciZl08yk151f",
	  "flip": "SZnDis1iCYaZX2iAka0AD",
	  "flipInX": "_3KaCi8BFXWJedh5kv8NPHs",
	  "flipInY": "_2bbm1f20KPAO-NOHFoSMkV",
	  "lightSpeedIn": "_3UZT4yJVHiFSzESjY_vkW3",
	  "lightSpeedOut": "_2Vz9L__gi00kBa_U9jsKbH",
	  "rotateIn": "eh61XgjfkBJXam5A1nbyv",
	  "rotateInDownLeft": "jW4C5DaKtsrF7iIlt77Hl",
	  "rotateInDownRight": "dzPOAmrkxK4kqf1Qi3YED",
	  "rotateInUpLeft": "f6AuH8cii2M9M4o_puCoV",
	  "rotateInUpRight": "_97N163Rl8VAJp-g0y9uAB",
	  "rotateOut": "_28YRzI46SAC67e2w1kqIHy",
	  "rotateOutDownLeft": "_3F-rBkOPeY6peSGn0KaHi6",
	  "rotateOutDownRight": "_3QaeUebvm_hDmM8XyKDx-c",
	  "rotateOutUpLeft": "_3OdjVJLA4C4r6OJLu54tPK",
	  "rotateOutUpRight": "_3wZ8YsrBU1ssIYWNrTWdop",
	  "rollIn": "JZMlyQJfPBvaAOEQ0_lqO",
	  "rollOut": "Ei5yJnm7U8ou7wxwwh465",
	  "zoomIn": "_31TiMTHefHKQyNtpgnxdJG",
	  "zoomInDown": "_3Dkl1rEapNChrq-5-Q621T",
	  "zoomInLeft": "_2gfS98LQ8P5YfRyu05o9Jp",
	  "zoomInRight": "_3BmL4vMvU9kIIjnORZ_3S_",
	  "zoomInUp": "_1aUktT-M7KaBb6KTk_Fi60",
	  "zoomOut": "l87T1ZcL5PJsHt5IgKobT",
	  "zoomOutDown": "_11KSanMj6lgSXviEP1jsgJ",
	  "zoomOutLeft": "_14_r8yqvj0XJL2br0Iv1HJ",
	  "zoomOutRight": "H3PkUBeHMjR9HK8LwfcmS",
	  "zoomOutUp": "_7HIP_dYIaROGx5nSoGFF2",
	  "slideInDown": "_2-kwH364DBmQfpvHTbOqCb",
	  "slideInLeft": "_1iptQXrynUtTrun5cECksu",
	  "slideInRight": "_1-YHRccTFOZm-V46e15nr3",
	  "slideInUp": "_1ToTZgcjGMaYpiWaVlOjyq",
	  "slideOutDown": "_29G91APzNGaUj-_McqEA0u",
	  "slideOutLeft": "_2qHPXO_uFCk50SG5DEmn7a",
	  "slideOutRight": "_2gxm9oRHDlm5mjqhTdsk15",
	  "slideOutUp": "_3VEaDz-Iae1m_S61Co6RE6"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _Contact = {
	  "contact-container": "_2aAJK9D6UsQ_7sJy5lC7Im",
	  "content": "FvflOF_5E7mVzmPNYzs0G",
	  "contact-form": "_2pse4KWfj82133qDmwZr78",
	  "contact-excerpt": "_2A7ORFEASgfUvBJ8CCbjWk"
	};

	var _Contact2 = _interopRequireDefault(_Contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isBrowser = typeof window !== 'undefined';

	var SweetAlert = isBrowser ? __webpack_require__(93).default : undefined; // eslint-disable-line
	if (isBrowser) {
	  content.locals;
	} // eslint-disable-line 


	var errorMessages = {
	  nameError: 'Your name is required',
	  emailError: 'Your email is required',
	  phoneError: 'Your phone number is required'
	};
	var formsyStyles = { fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' } };

	var _ref = _jsx('h1', {}, void 0, 'Contact');

	var _ref2 = _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'I\u2019'), ' am always looking forward to connecting with individuals who require consultation from a Full Stack Developer or simply anyone looking to talk code to further their understanding.');

	var _ref3 = _jsx('br', {});

	var _ref4 = _jsx('br', {});

	var _ref5 = _jsx(_RaisedButton2.default, {
	  fullWidth: true,
	  type: 'submit',
	  label: 'Connect'
	});

	var Contact = function (_Component) {
	  _inherits(Contact, _Component);

	  function Contact(props) {
	    _classCallCheck(this, Contact);

	    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.notifyFormError = _this.notifyFormError.bind(_this);
	    return _this;
	  }

	  _createClass(Contact, [{
	    key: 'submitForm',
	    value: function submitForm(data) {
	      this.props.dispatch((0, _ContactActions.submitFormRequest)(data));

	      this.nameText.setState({ value: '' });
	      this.emailText.setState({ value: '' });
	      this.phoneText.setState({ value: '' });
	      this.inquiryText.setState({ value: '' });
	    }
	  }, {
	    key: 'notifyFormError',
	    value: function notifyFormError(data) {
	      console.log('Error submitting form: ', data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: _Contact2.default['contact-container'] + ' ' + _animate2.default.animated + ' ' + _animate2.default.slideInLeft + ' ' + this.props.leaveAnimation
	      }, void 0, _jsx('div', {
	        className: _Contact2.default.content + ' ' + _animate2.default.animated + ' ' + _animate2.default.slideInLeft + ' ' + this.props.leaveAnimation
	      }, void 0, _ref, _jsx('div', {
	        className: _Contact2.default['contact-excerpt']
	      }, void 0, _ref2), _jsx('div', {
	        className: '' + _Contact2.default['contact-form']
	      }, void 0, _jsx(_formsyReact2.default.Form, {
	        onValid: this.enableSubmit,
	        onInvalid: this.disableSubmit,
	        onValidSubmit: this.submitForm,
	        onInvalidSubmit: this.notifyFormError
	      }, void 0, _react2.default.createElement(_lib.FormsyText, {
	        name: 'name',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.nameText = node;
	        },
	        validations: 'isWords',
	        validationError: errorMessages.nameError,
	        required: true,
	        hintText: 'What is your name?',
	        floatingLabelText: 'Name'
	      }), _react2.default.createElement(_lib.FormsyText, {
	        name: 'email',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.emailText = node;
	        },
	        validations: 'isEmail',
	        validationError: errorMessages.emailError,
	        required: true,
	        hintText: 'What is your email?',
	        floatingLabelText: 'Email'
	      }), _react2.default.createElement(_lib.FormsyText, {
	        name: 'phone',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.phoneText = node;
	        },
	        validations: 'isNumeric',
	        validationError: errorMessages.phoneError,
	        required: true,
	        hintText: 'What is your phone number?',
	        floatingLabelText: 'Phone'
	      }), _ref3, _react2.default.createElement(_lib.FormsyText, {
	        name: 'inquiry',
	        hintText: '...the scope of your inquiry',
	        floatingLabelText: 'Describe',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.inquiryText = node;
	        },
	        required: true,
	        multiLine: true,
	        rows: 2
	      }), _ref4, _ref5), isBrowser ? _jsx(SweetAlert, {
	        show: this.props.showSwal,
	        type: 'success',
	        title: 'Awesome!',
	        text: 'I look forward to connecting with you soon!',
	        onConfirm: function onConfirm() {
	          return _this2.props.dispatch((0, _ContactActions.hideSwal)());
	        }
	      }) : 'Loading')));
	    }
	  }]);

	  return Contact;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    leaveAnimation: (0, _ContactReducer.getLeaveAnimation)(state),
	    showSwal: (0, _ContactReducer.getSwal)(state)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Contact);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSwal = exports.getContactData = exports.getLeaveAnimation = undefined;

	var _ContactActions = __webpack_require__(4);

	// Initial State
	var initialState = {
	  animation: '',
	  data: {},
	  showSwal: false
	}; // Import Actions


	var ContactReducer = function ContactReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _ContactActions.SET_LEAVE_ANIMATION:
	      return Object.assign({}, state, {
	        animation: action.animation
	      });
	    case _ContactActions.SHOW_SWAL:
	      return Object.assign({}, state, {
	        showSwal: true
	      });
	    case _ContactActions.HIDE_SWAL:
	      return Object.assign({}, state, {
	        showSwal: false
	      });
	    case _ContactActions.SUBMIT_FORM:
	      return Object.assign({}, state, {
	        data: action.data
	      });
	    default:
	      return state;
	  }
	};

	var getLeaveAnimation = exports.getLeaveAnimation = function getLeaveAnimation(state) {
	  return state.contact.animation;
	};
	var getContactData = exports.getContactData = function getContactData(state) {
	  return state.contact.data;
	};
	var getSwal = exports.getSwal = function getSwal(state) {
	  return state.contact.showSwal;
	};

	exports.default = ContactReducer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _Home = {
	  "font-decor": "_3S3hvQ_SkeFZFSaGuxBT1Z",
	  "home-container": "_2hUQ84X6DC3wV2SiOXHncQ",
	  "home-header": "_3iEiXhDv_-efX400i27um2",
	  "welcome-copy": "_3kooRbZxSFyDOkdn_mJPjg",
	  "self-copy": "_1e6g9SSbSUjS-LMClxquCl",
	  "item": "_2XOcjXfvYAq48mmfg5XUA0"
	};

	var _Home2 = _interopRequireDefault(_Home);

	var _animate = {
	  "animated": "_3r0mq9S7Wc2cm68zTdSanO",
	  "infinite": "_39g1891yxx_Ju5xjjy1jzn",
	  "hinge": "_2FeOisFrfOoF3CPqiRPwDs",
	  "flipOutX": "GRvy3Rtqk_p1WA4ISw17X",
	  "flipOutY": "_3sHrEPcTQ8wy_g_7xhYUaq",
	  "bounceIn": "FNqy24qpvuWyN324h1jQt",
	  "bounceOut": "M4TLNKZvAt6Euon8OTBSg",
	  "bounce": "_2R-8W-5pB4ZGcRYTEm0eUz",
	  "flash": "_2bxipBCixhcu4JWkIbUnAl",
	  "pulse": "_18k3lDKsSFZyKWzbSDzOZ0",
	  "rubberBand": "VifMYJ2Dm9nu8CYeXZN_O",
	  "shake": "v9onn00ZAX0JyFxDMtoOa",
	  "headShake": "gJo1FSJp10TL_AP_mhaJX",
	  "swing": "_3HkZbNny1NUWD0tT9HJlNQ",
	  "tada": "pCGrTRmQAMKrWrG5tBXG_",
	  "wobble": "_3XR4NjvZjuLZfqM1S0PgOm",
	  "jello": "_22pDETzONWsYfkyibrHBUr",
	  "bounceInDown": "_1BtMguP7zLzQ7vus2Oz8oC",
	  "bounceInLeft": "ChJ6Wvpi__wzp0IeczBT8",
	  "bounceInRight": "_3NEBDIFhuM7UiBTt5T9cuB",
	  "bounceInUp": "_1XNDgYlpOLWPmUbein5Svz",
	  "bounceOutDown": "_7sCwUF6gRjuEGQbu8vZJT",
	  "bounceOutLeft": "_2zWwbS3b5HSj5wvCjP0g_Z",
	  "bounceOutRight": "_3ItUJv3aRNqZjnCDSQfooL",
	  "bounceOutUp": "_1TbBPhQCK_Tj3eRb5HRg0V",
	  "fadeIn": "_1dfHUeEigqZKaz9VqhwCWb",
	  "fadeInDown": "_3YjYpd53_FQTd6sY394muf",
	  "fadeInDownBig": "_2oXogJH6ealdNM7hq8By5w",
	  "fadeInLeft": "_37TO6w-qRdn360Q56rwMlF",
	  "fadeInLeftBig": "_3k5qTpWazjJzryVgPMPZmY",
	  "fadeInRight": "_2G3Ryc3I1emKLro-w0mJLl",
	  "fadeInRightBig": "gIzrJDqgjX8oX3QmEYxw3",
	  "fadeInUp": "kWsa6kBxkGLypi4-mU6bU",
	  "fadeInUpBig": "_1kN6Plon06A4RFVocStYAP",
	  "fadeOut": "_12yNe2uIRjfF-wFv3Ps6fZ",
	  "fadeOutDown": "_3lMvLY2YA_OtJvvcJROZDl",
	  "fadeOutDownBig": "_33uAMEQeeC060Xw8FFwi8i",
	  "fadeOutLeft": "_1DOKHBu6380bnIsgmYH7pQ",
	  "fadeOutLeftBig": "_1-Irat2opOfE8VFQKtByBa",
	  "fadeOutRight": "_2AprXBXBi-bRJOrIeRn4zY",
	  "fadeOutRightBig": "_1KUEmm84HNN9F7B6YxKLYC",
	  "fadeOutUp": "_1AdjSRFCKFYF-uEHcrqY_-",
	  "fadeOutUpBig": "_1fvHvkROMAciZl08yk151f",
	  "flip": "SZnDis1iCYaZX2iAka0AD",
	  "flipInX": "_3KaCi8BFXWJedh5kv8NPHs",
	  "flipInY": "_2bbm1f20KPAO-NOHFoSMkV",
	  "lightSpeedIn": "_3UZT4yJVHiFSzESjY_vkW3",
	  "lightSpeedOut": "_2Vz9L__gi00kBa_U9jsKbH",
	  "rotateIn": "eh61XgjfkBJXam5A1nbyv",
	  "rotateInDownLeft": "jW4C5DaKtsrF7iIlt77Hl",
	  "rotateInDownRight": "dzPOAmrkxK4kqf1Qi3YED",
	  "rotateInUpLeft": "f6AuH8cii2M9M4o_puCoV",
	  "rotateInUpRight": "_97N163Rl8VAJp-g0y9uAB",
	  "rotateOut": "_28YRzI46SAC67e2w1kqIHy",
	  "rotateOutDownLeft": "_3F-rBkOPeY6peSGn0KaHi6",
	  "rotateOutDownRight": "_3QaeUebvm_hDmM8XyKDx-c",
	  "rotateOutUpLeft": "_3OdjVJLA4C4r6OJLu54tPK",
	  "rotateOutUpRight": "_3wZ8YsrBU1ssIYWNrTWdop",
	  "rollIn": "JZMlyQJfPBvaAOEQ0_lqO",
	  "rollOut": "Ei5yJnm7U8ou7wxwwh465",
	  "zoomIn": "_31TiMTHefHKQyNtpgnxdJG",
	  "zoomInDown": "_3Dkl1rEapNChrq-5-Q621T",
	  "zoomInLeft": "_2gfS98LQ8P5YfRyu05o9Jp",
	  "zoomInRight": "_3BmL4vMvU9kIIjnORZ_3S_",
	  "zoomInUp": "_1aUktT-M7KaBb6KTk_Fi60",
	  "zoomOut": "l87T1ZcL5PJsHt5IgKobT",
	  "zoomOutDown": "_11KSanMj6lgSXviEP1jsgJ",
	  "zoomOutLeft": "_14_r8yqvj0XJL2br0Iv1HJ",
	  "zoomOutRight": "H3PkUBeHMjR9HK8LwfcmS",
	  "zoomOutUp": "_7HIP_dYIaROGx5nSoGFF2",
	  "slideInDown": "_2-kwH364DBmQfpvHTbOqCb",
	  "slideInLeft": "_1iptQXrynUtTrun5cECksu",
	  "slideInRight": "_1-YHRccTFOZm-V46e15nr3",
	  "slideInUp": "_1ToTZgcjGMaYpiWaVlOjyq",
	  "slideOutDown": "_29G91APzNGaUj-_McqEA0u",
	  "slideOutLeft": "_2qHPXO_uFCk50SG5DEmn7a",
	  "slideOutRight": "_2gxm9oRHDlm5mjqhTdsk15",
	  "slideOutUp": "_3VEaDz-Iae1m_S61Co6RE6"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _HomeReducer = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref2 = _jsx('h1', {}, void 0, 'Bienvenido');

	var Home = function Home(_ref) {
	  var leaveAnimation = _ref.leaveAnimation;

	  var itemDetails = {
	    Technical: 'A natural tendency to consider the mechanics of things.',
	    Visionary: 'I seek to capture the vision required to complete tasks.',
	    Passionate: 'To continue learning is to keep the mind young; I advocate towards continous growth.'
	  };

	  return _jsx('div', {
	    className: _Home2.default['home-container'] + ' ' + _animate2.default.animated + ' ' + leaveAnimation + ' ' + _Home2.default['font-decor']
	  }, void 0, _jsx('div', {
	    className: _Home2.default['home-header'] + ' ' + _animate2.default.animated + ' ' + leaveAnimation + ' ' + _animate2.default.fadeInDown,
	    style: {
	      AnimationDelay: '4s',
	      AnimationDuration: '1s',
	      WebkitAnimationDelay: '4s',
	      WebkitAnimationDuration: '1s'
	    }
	  }, void 0, _ref2), _jsx('div', {
	    className: '' + _Home2.default['welcome-copy']
	  }, void 0, _jsx('div', {
	    className: '' + _Home2.default['self-copy']
	  }, void 0, Object.keys(itemDetails).map(function (detail, i) {
	    return _jsx('div', {
	      className: _Home2.default.item + ' ' + _animate2.default.animated + ' ' + leaveAnimation + ' ' + _animate2.default.fadeInLeft,
	      style: {
	        WebkitAnimationDelay: i + 1 + 's',
	        WebkitAnimationDuration: '1s',
	        AnimationDelay: i + 1 + 's',
	        AnimationDuration: '1s'
	      }
	    }, detail, _jsx('h3', {}, void 0, detail), _jsx('p', {}, void 0, itemDetails[detail]));
	  }))));
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    leaveAnimation: (0, _HomeReducer.getLeaveAnimation)(state)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setLeaveAnimation = setLeaveAnimation;
	// Export Constants
	var SET_LEAVE_ANIMATION = exports.SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';

	// Export Actions
	function setLeaveAnimation(animation) {
	  return {
	    type: SET_LEAVE_ANIMATION,
	    animation: animation
	  };
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLeaveAnimation = undefined;

	var _HomeActions = __webpack_require__(20);

	// Initial State
	var initialState = {
	  animation: ''
	}; // Import Actions


	var HomeReducer = function HomeReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _HomeActions.SET_LEAVE_ANIMATION:
	      return Object.assign({}, state, {
	        animation: action.animation
	      });
	    default:
	      return state;
	  }
	};

	var getLeaveAnimation = exports.getLeaveAnimation = function getLeaveAnimation(state) {
	  return state.home.animation;
	};

	exports.default = HomeReducer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _PortfolioGallery = __webpack_require__(57);

	var _PortfolioGallery2 = _interopRequireDefault(_PortfolioGallery);

	var _PortfolioReducer = __webpack_require__(24);

	var _cyron = '/' + "cbe68c7eabae3068ca1a945c2aaec85e.png";

	var _cyron2 = _interopRequireDefault(_cyron);

	var _pbs = '/' + "c8370d18d2cc0a029b970da3eb9bd60a.png";

	var _pbs2 = _interopRequireDefault(_pbs);

	var _asurety = '/' + "f3bb5d434ff2e832a7ef0e92d81f6454.png";

	var _asurety2 = _interopRequireDefault(_asurety);

	var _hugoExp = '/' + "0b00eb043a5448467c4a17f501f0925c.png";

	var _hugoExp2 = _interopRequireDefault(_hugoExp);

	var _mernBlog = '/' + "ebd3d53c0a9e919f5ff872991a04dbca.png";

	var _mernBlog2 = _interopRequireDefault(_mernBlog);

	var _animate = {
	  "animated": "_3r0mq9S7Wc2cm68zTdSanO",
	  "infinite": "_39g1891yxx_Ju5xjjy1jzn",
	  "hinge": "_2FeOisFrfOoF3CPqiRPwDs",
	  "flipOutX": "GRvy3Rtqk_p1WA4ISw17X",
	  "flipOutY": "_3sHrEPcTQ8wy_g_7xhYUaq",
	  "bounceIn": "FNqy24qpvuWyN324h1jQt",
	  "bounceOut": "M4TLNKZvAt6Euon8OTBSg",
	  "bounce": "_2R-8W-5pB4ZGcRYTEm0eUz",
	  "flash": "_2bxipBCixhcu4JWkIbUnAl",
	  "pulse": "_18k3lDKsSFZyKWzbSDzOZ0",
	  "rubberBand": "VifMYJ2Dm9nu8CYeXZN_O",
	  "shake": "v9onn00ZAX0JyFxDMtoOa",
	  "headShake": "gJo1FSJp10TL_AP_mhaJX",
	  "swing": "_3HkZbNny1NUWD0tT9HJlNQ",
	  "tada": "pCGrTRmQAMKrWrG5tBXG_",
	  "wobble": "_3XR4NjvZjuLZfqM1S0PgOm",
	  "jello": "_22pDETzONWsYfkyibrHBUr",
	  "bounceInDown": "_1BtMguP7zLzQ7vus2Oz8oC",
	  "bounceInLeft": "ChJ6Wvpi__wzp0IeczBT8",
	  "bounceInRight": "_3NEBDIFhuM7UiBTt5T9cuB",
	  "bounceInUp": "_1XNDgYlpOLWPmUbein5Svz",
	  "bounceOutDown": "_7sCwUF6gRjuEGQbu8vZJT",
	  "bounceOutLeft": "_2zWwbS3b5HSj5wvCjP0g_Z",
	  "bounceOutRight": "_3ItUJv3aRNqZjnCDSQfooL",
	  "bounceOutUp": "_1TbBPhQCK_Tj3eRb5HRg0V",
	  "fadeIn": "_1dfHUeEigqZKaz9VqhwCWb",
	  "fadeInDown": "_3YjYpd53_FQTd6sY394muf",
	  "fadeInDownBig": "_2oXogJH6ealdNM7hq8By5w",
	  "fadeInLeft": "_37TO6w-qRdn360Q56rwMlF",
	  "fadeInLeftBig": "_3k5qTpWazjJzryVgPMPZmY",
	  "fadeInRight": "_2G3Ryc3I1emKLro-w0mJLl",
	  "fadeInRightBig": "gIzrJDqgjX8oX3QmEYxw3",
	  "fadeInUp": "kWsa6kBxkGLypi4-mU6bU",
	  "fadeInUpBig": "_1kN6Plon06A4RFVocStYAP",
	  "fadeOut": "_12yNe2uIRjfF-wFv3Ps6fZ",
	  "fadeOutDown": "_3lMvLY2YA_OtJvvcJROZDl",
	  "fadeOutDownBig": "_33uAMEQeeC060Xw8FFwi8i",
	  "fadeOutLeft": "_1DOKHBu6380bnIsgmYH7pQ",
	  "fadeOutLeftBig": "_1-Irat2opOfE8VFQKtByBa",
	  "fadeOutRight": "_2AprXBXBi-bRJOrIeRn4zY",
	  "fadeOutRightBig": "_1KUEmm84HNN9F7B6YxKLYC",
	  "fadeOutUp": "_1AdjSRFCKFYF-uEHcrqY_-",
	  "fadeOutUpBig": "_1fvHvkROMAciZl08yk151f",
	  "flip": "SZnDis1iCYaZX2iAka0AD",
	  "flipInX": "_3KaCi8BFXWJedh5kv8NPHs",
	  "flipInY": "_2bbm1f20KPAO-NOHFoSMkV",
	  "lightSpeedIn": "_3UZT4yJVHiFSzESjY_vkW3",
	  "lightSpeedOut": "_2Vz9L__gi00kBa_U9jsKbH",
	  "rotateIn": "eh61XgjfkBJXam5A1nbyv",
	  "rotateInDownLeft": "jW4C5DaKtsrF7iIlt77Hl",
	  "rotateInDownRight": "dzPOAmrkxK4kqf1Qi3YED",
	  "rotateInUpLeft": "f6AuH8cii2M9M4o_puCoV",
	  "rotateInUpRight": "_97N163Rl8VAJp-g0y9uAB",
	  "rotateOut": "_28YRzI46SAC67e2w1kqIHy",
	  "rotateOutDownLeft": "_3F-rBkOPeY6peSGn0KaHi6",
	  "rotateOutDownRight": "_3QaeUebvm_hDmM8XyKDx-c",
	  "rotateOutUpLeft": "_3OdjVJLA4C4r6OJLu54tPK",
	  "rotateOutUpRight": "_3wZ8YsrBU1ssIYWNrTWdop",
	  "rollIn": "JZMlyQJfPBvaAOEQ0_lqO",
	  "rollOut": "Ei5yJnm7U8ou7wxwwh465",
	  "zoomIn": "_31TiMTHefHKQyNtpgnxdJG",
	  "zoomInDown": "_3Dkl1rEapNChrq-5-Q621T",
	  "zoomInLeft": "_2gfS98LQ8P5YfRyu05o9Jp",
	  "zoomInRight": "_3BmL4vMvU9kIIjnORZ_3S_",
	  "zoomInUp": "_1aUktT-M7KaBb6KTk_Fi60",
	  "zoomOut": "l87T1ZcL5PJsHt5IgKobT",
	  "zoomOutDown": "_11KSanMj6lgSXviEP1jsgJ",
	  "zoomOutLeft": "_14_r8yqvj0XJL2br0Iv1HJ",
	  "zoomOutRight": "H3PkUBeHMjR9HK8LwfcmS",
	  "zoomOutUp": "_7HIP_dYIaROGx5nSoGFF2",
	  "slideInDown": "_2-kwH364DBmQfpvHTbOqCb",
	  "slideInLeft": "_1iptQXrynUtTrun5cECksu",
	  "slideInRight": "_1-YHRccTFOZm-V46e15nr3",
	  "slideInUp": "_1ToTZgcjGMaYpiWaVlOjyq",
	  "slideOutDown": "_29G91APzNGaUj-_McqEA0u",
	  "slideOutLeft": "_2qHPXO_uFCk50SG5DEmn7a",
	  "slideOutRight": "_2gxm9oRHDlm5mjqhTdsk15",
	  "slideOutUp": "_3VEaDz-Iae1m_S61Co6RE6"
	};

	var _animate2 = _interopRequireDefault(_animate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = [{
	  cardImagePath: _cyron2.default,
	  title: 'Cyron I/O',
	  link: 'http://cyron.co/'
	}, {
	  cardImagePath: _pbs2.default,
	  title: 'Premier Boat Services',
	  link: 'http://pbs-express.herokuapp.com/'
	}, {
	  cardImagePath: _asurety2.default,
	  title: 'Asurety',
	  link: 'https://asurety.herokuapp.com/'
	}, {
	  cardImagePath: _hugoExp2.default,
	  title: 'HugoExp',
	  link: 'https://hugo-exp.herokuapp.com/'
	}, {
	  cardImagePath: _mernBlog2.default,
	  title: 'Mern Blog',
	  link: 'http://mern-blog.herokuapp.com/'
	}];

	var Portfolio = function Portfolio(_ref) {
	  var leaveAnimation = _ref.leaveAnimation;

	  return _jsx('div', {
	    className: _animate2.default.animated + ' ' + leaveAnimation
	  }, void 0, _jsx(_PortfolioGallery2.default, {
	    leaveAnimation: leaveAnimation,
	    data: data
	  }));
	};

	function mapStateToProps(state) {
	  return {
	    leaveAnimation: (0, _PortfolioReducer.getLeaveAnimation)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Portfolio);

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setLeaveAnimation = setLeaveAnimation;
	// Export Constants
	var SET_LEAVE_ANIMATION = exports.SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';

	// Export Actions
	function setLeaveAnimation(animation) {
	  return {
	    type: SET_LEAVE_ANIMATION,
	    animation: animation
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLeaveAnimation = undefined;

	var _PortfolioActions = __webpack_require__(23);

	// Initial State
	var initialState = {
	  animation: ''
	}; // Import Actions


	var HomeReducer = function HomeReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _PortfolioActions.SET_LEAVE_ANIMATION:
	      return Object.assign({}, state, {
	        animation: action.animation
	      });
	    default:
	      return state;
	  }
	};

	var getLeaveAnimation = exports.getLeaveAnimation = function getLeaveAnimation(state) {
	  return state.portfolio.animation;
	};

	exports.default = HomeReducer;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(68);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Avatar");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("material-ui/List");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Paper");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("redux-batched-actions");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(53);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(45);
	  __webpack_require__(22);
	  __webpack_require__(19);
	  __webpack_require__(12);
	  __webpack_require__(17);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(19).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/me',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(12).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/portfolio',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(22).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/contact',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(17).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(30);

	var _reduxBatchedActions = __webpack_require__(31);

	var _reduxThunk = __webpack_require__(91);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(16);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(60);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)((0, _reduxBatchedActions.enableBatching)(_reducers2.default), initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	} /**
	   * Main store function
	   */

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(7);

	var _contact = __webpack_require__(61);

	var ContactController = _interopRequireWildcard(_contact);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	router.route('/add-contact').post(ContactController.addNewContact);

	exports.default = router;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(64);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(11);
	var cssnext = __webpack_require__(83);
	var postcssFocus = __webpack_require__(84);
	var postcssReporter = __webpack_require__(85);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }, {
	      test: /\.html$/,
	      loader: 'html-loader?attrs[]=video:src'
	    }, {
	      test: /\.mp4$/,
	      loader: 'url?limit=10000&mimetype=video/mp4'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("cors");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("newrelic");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _SearchBar = __webpack_require__(49);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _List = __webpack_require__(47);

	var _List2 = _interopRequireDefault(_List);

	var _WatsonResults = __webpack_require__(51);

	var _WatsonResults2 = _interopRequireDefault(_WatsonResults);

	var _AnalyzedActions = __webpack_require__(15);

	var _AnalyzedReducer = __webpack_require__(46);

	var _Analyzed = {
	  "analyzed-container": "_2CWl_0qF43wgFMfpwbI5QE",
	  "analyzed-list": "_1bhQ6pEIB0fNX5-ekHcq3X"
	};

	var _Analyzed2 = _interopRequireDefault(_Analyzed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Analyzed = function (_Component) {
	  _inherits(Analyzed, _Component);

	  function Analyzed(props) {
	    _classCallCheck(this, Analyzed);

	    var _this = _possibleConstructorReturn(this, (Analyzed.__proto__ || Object.getPrototypeOf(Analyzed)).call(this, props));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(Analyzed, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _AnalyzedActions.fetchAnalyzedData)('', 200));
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      if (e.key === 'Enter') {
	        this.props.dispatch((0, _AnalyzedActions.fetchAnalyzedData)(e.target.value));
	        e.target.value = ' '; // eslint-disable-line
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          sentiments = _props$data.sentiments,
	          user = _props$data.user,
	          emotions = _props$data.emotions;

	      return _jsx('div', {
	        className: _Analyzed2.default['analyzed-container']
	      }, void 0, _jsx(_SearchBar2.default, {
	        handleSubmit: this.handleSubmit
	      }), _jsx(_WatsonResults2.default, {
	        name: user.name,
	        sentiments: sentiments,
	        emotions: emotions
	      }), _jsx('div', {
	        className: _Analyzed2.default['analyzed-list']
	      }, void 0, _jsx(_List2.default, {
	        data: this.props.data
	      })));
	    }
	  }]);

	  return Analyzed;
	}(_react.Component);

	// required for serverside rendering


	Analyzed.need = [function () {
	  return (0, _AnalyzedActions.fetchAnalyzedData)('', 200);
	}];

	function mapStateToProps(store) {
	  return {
	    data: (0, _AnalyzedReducer.getAnalyzedData)(store)
	  };
	}

	Analyzed.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Analyzed);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAnalyzedData = undefined;

	var _AnalyzedActions = __webpack_require__(15);

	var initialState = {
	  analyzedData: []
	};

	var AnalyzedReducer = function AnalyzedReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AnalyzedActions.LOAD_ANALYZED_DATA:
	      return Object.assign({}, state, {
	        analyzedData: action.analyzedData
	      });

	    default:
	      return state;
	  }
	};

	var getAnalyzedData = exports.getAnalyzedData = function getAnalyzedData(state) {
	  return state.analyzed.analyzedData;
	};

	exports.default = AnalyzedReducer;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(28);

	var _ListItem = __webpack_require__(48);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('h1', {}, void 0, 'Loading');

	var List = function List(props) {
	  return _jsx(_List.List, {
	    className: 'analyzed-list'
	  }, void 0, props.data ? props.data.tweets.map(function (tweet, i) {
	    return _jsx(_ListItem2.default, {
	      text: tweet,
	      avatar: props.data.user.profile_image_url
	    }, i);
	  }) : _ref);
	};

	exports.default = List;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(28);

	var _Avatar = __webpack_require__(26);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Paper = __webpack_require__(29);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _List2 = {
	  "analyzed-list-item": "_1YgMCh0Q1J1VRsCuEtEI46"
	};

	var _List3 = _interopRequireDefault(_List2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ListItem(props) {
	  return _jsx('div', {
	    className: _List3.default['analyzed-list-item']
	  }, void 0, _jsx(_Paper2.default, {
	    zDepth: props.zDepth || 2
	  }, void 0, _jsx(_List.ListItem, {
	    primaryText: props.text,
	    leftAvatar: _jsx(_Avatar2.default, {
	      src: props.avatar
	    })
	  })));
	}

	exports.default = ListItem;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(78);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchBar = function SearchBar(props) {
	  return _jsx('div', {}, void 0, _jsx(_TextField2.default, {
	    onKeyDown: props.handleSubmit,
	    floatingLabelText: 'Enter Name',
	    id: Math.floor(Math.random()).toString()
	  }));
	};

	exports.default = SearchBar;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _recharts = __webpack_require__(87);

	var Recharts = _interopRequireWildcard(_recharts);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cell = Recharts.Cell,
	    ResponsiveContainer = Recharts.ResponsiveContainer,
	    Line = Recharts.Line,
	    Bar = Recharts.Bar,
	    ComposedChart = Recharts.ComposedChart,
	    XAxis = Recharts.XAxis,
	    YAxis = Recharts.YAxis,
	    CartesianGrid = Recharts.CartesianGrid,
	    Tooltip = Recharts.Tooltip,
	    Legend = Recharts.Legend;

	// const WatsonEmotions = (props) => {

	var _ref = _jsx(XAxis, {
	  dataKey: 'emotion'
	});

	var _ref2 = _jsx(YAxis, {});

	var _ref3 = _jsx(Tooltip, {});

	var _ref4 = _jsx(Legend, {});

	var _ref5 = _jsx(CartesianGrid, {
	  stroke: '#f5f5f5'
	});

	var WatsonEmotions = function (_Component) {
	  _inherits(WatsonEmotions, _Component);

	  function WatsonEmotions(props) {
	    _classCallCheck(this, WatsonEmotions);

	    var _this = _possibleConstructorReturn(this, (WatsonEmotions.__proto__ || Object.getPrototypeOf(WatsonEmotions)).call(this, props));

	    _this.state = {
	      composedChartDimensions: {
	        width: 0,
	        height: 0
	      }
	    };
	    _this.colors = ['rgb(83.5%, 0%, 0%)', 'rgb(100%, 43.9%, 26.3%)', 'rgb(72.5%, 96.5%, 79.2%)', 'rgb(100%, 100%, 0%)', 'rgb(70.2%, 53.3%, 100%)'];
	    return _this;
	  }

	  _createClass(WatsonEmotions, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      window.addEventListener('resize', function () {
	        if (window.innerWidth >= 320 && window.innerWidth <= 400)
	          // ||
	          // (window.innerWidth >= 320 && window.innerWidth <= 400)
	          {
	            _this2.setState({ // eslint-disable-line
	              composedChartDimensions: {
	                width: 310
	              }
	            });
	          } else {
	          _this2.setState({ // eslint-disable-line
	            composedChartDimensions: {
	              width: 400
	            }
	          });
	        }
	      });

	      if (window.innerWidth >= 320 && window.innerWidth <= 400) {
	        this.setState({ // eslint-disable-line
	          composedChartDimensions: {
	            width: 310
	          }
	        });
	      } else {
	        this.setState({ // eslint-disable-line
	          composedChartDimensions: {
	            width: 400
	          }
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _jsx(ResponsiveContainer, {}, void 0, _jsx('div', {
	        style: {
	          width: '100%',
	          height: '100%'
	        }
	      }, void 0, _jsx(ComposedChart, {
	        width: this.state.composedChartDimensions.width,
	        height: 300,
	        data: this.props.emotions,
	        margin: { top: 20, right: 10, bottom: 20, left: 10 }
	      }, void 0, _ref, _ref2, _ref3, _ref4, _ref5, _jsx(Bar, {
	        dataKey: 'score'
	      }, void 0, this.props.emotions.map(function (entry, index) {
	        return _jsx(Cell, {
	          fill: _this3.colors[index],
	          stroke: _this3.colors[index],
	          strokeWidth: index === 2 ? 4 : 1
	        }, 'cell-' + index);
	      })), _jsx(Line, {
	        dataKey: 'score'
	      }, void 0, this.props.emotions.map(function (entry, index) {
	        return _jsx(Cell, {
	          fill: _this3.colors[index],
	          stroke: _this3.colors[index],
	          strokeWidth: index === 2 ? 4 : 1
	        }, 'cell-' + index);
	      })))));
	    }
	  }]);

	  return WatsonEmotions;
	}(_react.Component);

	exports.default = WatsonEmotions;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Paper = __webpack_require__(29);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _WatsonEmotions = __webpack_require__(50);

	var _WatsonEmotions2 = _interopRequireDefault(_WatsonEmotions);

	var _WatsonResults = {
	  "watson-flex-container": "_28pfieL2UpBcpeuIpPUIqP",
	  "sentiments-container": "SNX_KMmfCroZF-Y0hsAge",
	  "emotions-container": "_2e3w5LR0YEwnH1Byp4Nic6",
	  "charts-container": "MIh89Wxuk0348ndAshld1"
	};

	var _WatsonResults2 = _interopRequireDefault(_WatsonResults);

	var _WatsonResultsChip = __webpack_require__(52);

	var _WatsonResultsChip2 = _interopRequireDefault(_WatsonResultsChip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WatsonResults = function WatsonResults(props) {
	  var isScorePositive = function isScorePositive(score) {
	    return score > 0 ? 'rgb(0%, 90.2%, 46.3%)' : 'rgb(83.5%, 0%, 0%)';
	  };
	  var preparedEmotions = [];
	  Object.keys(props.emotions).map(function (emotion) {
	    return preparedEmotions.push({
	      emotion: emotion,
	      score: Math.ceil(props.emotions[emotion] * 100)
	    });
	  });

	  return _jsx('div', {
	    className: _WatsonResults2.default['watson-flex-container']
	  }, void 0, _jsx('h1', {}, void 0, props.name), _jsx('div', {
	    className: _WatsonResults2.default['sentiments-container']
	  }, void 0, _jsx(_WatsonResultsChip2.default, {
	    score: props.sentiments.score,
	    bgColor: isScorePositive(props.sentiments.score),
	    avatarColor: isScorePositive(props.sentiments.score),
	    avatarContext: props.sentiments.score > 0 ? 'P' : 'N'
	  })), _jsx('div', {
	    className: _WatsonResults2.default['emotions-container']
	  }, void 0, _jsx(_Paper2.default, {
	    zDepth: 3
	  }, void 0, _jsx(_WatsonEmotions2.default, {
	    emotions: preparedEmotions
	  }))));
	};

	exports.default = WatsonResults;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Avatar = __webpack_require__(26);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Chip = __webpack_require__(72);

	var _Chip2 = _interopRequireDefault(_Chip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WatsonResultsChip = function WatsonResultsChip(props) {
	  return _jsx(_Chip2.default, {
	    style: { width: 100, margin: 10, textAlign: 'center' },
	    backgroundColor: props.bgColor
	  }, void 0, _jsx(_Avatar2.default, {
	    size: 36,
	    color: props.avatarColor,
	    backgroundColor: '#fff'
	  }, void 0, props.avatarContext), Math.ceil(props.score * 100) + '%');
	};

	exports.default = WatsonResultsChip;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactHelmet = __webpack_require__(10);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactTapEventPlugin = __webpack_require__(86);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _MuiThemeProvider = __webpack_require__(8);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _styles = __webpack_require__(2);

	var _AppTheme = __webpack_require__(5);

	var _AppTheme2 = _interopRequireDefault(_AppTheme);

	({
	  "pageSlider-enter": "_2dPx9GgWpWbxxnUmT2budo",
	  "pageSlider-enter-active": "_2Ad7k2BTI1GEVmpvxa1rnz"
	});

	var _DevTools = __webpack_require__(16);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Navigation = __webpack_require__(56);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _PortfolioVideo = __webpack_require__(59);

	var _PortfolioVideo2 = _interopRequireDefault(_PortfolioVideo);

	var _ferryRide = '/' + "420ce2b875f6469edac97c56f40d44f0.mp4";

	var _ferryRide2 = _interopRequireDefault(_ferryRide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Import muiTheme


	// Import Style


	// Import animate.css
	// import an from '../../assets/animate.css';

	// Import Components


	// Needed for onTouchTap
	// http://stackoverflow.com/a/34015469/988941
	(0, _reactTapEventPlugin2.default)();

	var _ref = _jsx(_DevTools2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      isMounted: false,
	      drawerOpen: true,
	      drawerWidth: 0.1,
	      videoMarginLeft: '0px'
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.setState({ isMounted: true }); // eslint-disable-line
	      if (window.innerWidth > 600) {
	        window.setTimeout(function () {
	          _this2.setState({
	            drawerWidth: 86,
	            videoMarginLeft: '86px'
	          });
	        }, 5500);
	      } else {
	        this.setState({ // eslint-disable-line
	          drawerOpen: false,
	          videoMarginLeft: '0px'
	        });
	      }

	      window.addEventListener('resize', function () {
	        if (window.innerWidth > 600) {
	          _this2.setState({
	            drawerOpen: true,
	            drawerWidth: 86,
	            videoMarginLeft: '86px'
	          });
	        } else {
	          _this2.setState({
	            drawerOpen: false,
	            videoMarginLeft: '0px'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var muiTheme = (0, _styles.getMuiTheme)(_AppTheme2.default, { userAgent: navigator ? navigator.userAgent : 'all' });
	      return _jsx(_MuiThemeProvider2.default, {
	        muiTheme: muiTheme
	      }, void 0, _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Hugo Experience',
	        titleTemplate: '%s',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Navigation2.default, {
	        open: this.state.drawerOpen,
	        width: this.state.drawerWidth,
	        title: 'HugoExp'
	      }), _jsx(_PortfolioVideo2.default, {
	        marginLeft: this.state.videoMarginLeft,
	        srcPath: _ferryRide2.default
	      }), _jsx('div', {}, void 0, this.props.children))));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props


	function mapStateToProps(store) {
	  return store;
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;

	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;

	var _AppActions = __webpack_require__(54);

	// Initial State
	var initialState = {
	  showAddPost: false,
	  open: false
	}; // Import Actions


	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	    default:
	      return state;
	  }
	};

	/* Selectors */

	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};

	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactRouter = __webpack_require__(3);

	var _Drawer = __webpack_require__(73);

	var _Drawer2 = _interopRequireDefault(_Drawer);

	var _IconButton = __webpack_require__(74);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(75);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(76);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _menu = __webpack_require__(80);

	var _menu2 = _interopRequireDefault(_menu);

	var _AppBar = __webpack_require__(70);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _FlatButton = __webpack_require__(27);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _animate = {
	  "animated": "_3r0mq9S7Wc2cm68zTdSanO",
	  "infinite": "_39g1891yxx_Ju5xjjy1jzn",
	  "hinge": "_2FeOisFrfOoF3CPqiRPwDs",
	  "flipOutX": "GRvy3Rtqk_p1WA4ISw17X",
	  "flipOutY": "_3sHrEPcTQ8wy_g_7xhYUaq",
	  "bounceIn": "FNqy24qpvuWyN324h1jQt",
	  "bounceOut": "M4TLNKZvAt6Euon8OTBSg",
	  "bounce": "_2R-8W-5pB4ZGcRYTEm0eUz",
	  "flash": "_2bxipBCixhcu4JWkIbUnAl",
	  "pulse": "_18k3lDKsSFZyKWzbSDzOZ0",
	  "rubberBand": "VifMYJ2Dm9nu8CYeXZN_O",
	  "shake": "v9onn00ZAX0JyFxDMtoOa",
	  "headShake": "gJo1FSJp10TL_AP_mhaJX",
	  "swing": "_3HkZbNny1NUWD0tT9HJlNQ",
	  "tada": "pCGrTRmQAMKrWrG5tBXG_",
	  "wobble": "_3XR4NjvZjuLZfqM1S0PgOm",
	  "jello": "_22pDETzONWsYfkyibrHBUr",
	  "bounceInDown": "_1BtMguP7zLzQ7vus2Oz8oC",
	  "bounceInLeft": "ChJ6Wvpi__wzp0IeczBT8",
	  "bounceInRight": "_3NEBDIFhuM7UiBTt5T9cuB",
	  "bounceInUp": "_1XNDgYlpOLWPmUbein5Svz",
	  "bounceOutDown": "_7sCwUF6gRjuEGQbu8vZJT",
	  "bounceOutLeft": "_2zWwbS3b5HSj5wvCjP0g_Z",
	  "bounceOutRight": "_3ItUJv3aRNqZjnCDSQfooL",
	  "bounceOutUp": "_1TbBPhQCK_Tj3eRb5HRg0V",
	  "fadeIn": "_1dfHUeEigqZKaz9VqhwCWb",
	  "fadeInDown": "_3YjYpd53_FQTd6sY394muf",
	  "fadeInDownBig": "_2oXogJH6ealdNM7hq8By5w",
	  "fadeInLeft": "_37TO6w-qRdn360Q56rwMlF",
	  "fadeInLeftBig": "_3k5qTpWazjJzryVgPMPZmY",
	  "fadeInRight": "_2G3Ryc3I1emKLro-w0mJLl",
	  "fadeInRightBig": "gIzrJDqgjX8oX3QmEYxw3",
	  "fadeInUp": "kWsa6kBxkGLypi4-mU6bU",
	  "fadeInUpBig": "_1kN6Plon06A4RFVocStYAP",
	  "fadeOut": "_12yNe2uIRjfF-wFv3Ps6fZ",
	  "fadeOutDown": "_3lMvLY2YA_OtJvvcJROZDl",
	  "fadeOutDownBig": "_33uAMEQeeC060Xw8FFwi8i",
	  "fadeOutLeft": "_1DOKHBu6380bnIsgmYH7pQ",
	  "fadeOutLeftBig": "_1-Irat2opOfE8VFQKtByBa",
	  "fadeOutRight": "_2AprXBXBi-bRJOrIeRn4zY",
	  "fadeOutRightBig": "_1KUEmm84HNN9F7B6YxKLYC",
	  "fadeOutUp": "_1AdjSRFCKFYF-uEHcrqY_-",
	  "fadeOutUpBig": "_1fvHvkROMAciZl08yk151f",
	  "flip": "SZnDis1iCYaZX2iAka0AD",
	  "flipInX": "_3KaCi8BFXWJedh5kv8NPHs",
	  "flipInY": "_2bbm1f20KPAO-NOHFoSMkV",
	  "lightSpeedIn": "_3UZT4yJVHiFSzESjY_vkW3",
	  "lightSpeedOut": "_2Vz9L__gi00kBa_U9jsKbH",
	  "rotateIn": "eh61XgjfkBJXam5A1nbyv",
	  "rotateInDownLeft": "jW4C5DaKtsrF7iIlt77Hl",
	  "rotateInDownRight": "dzPOAmrkxK4kqf1Qi3YED",
	  "rotateInUpLeft": "f6AuH8cii2M9M4o_puCoV",
	  "rotateInUpRight": "_97N163Rl8VAJp-g0y9uAB",
	  "rotateOut": "_28YRzI46SAC67e2w1kqIHy",
	  "rotateOutDownLeft": "_3F-rBkOPeY6peSGn0KaHi6",
	  "rotateOutDownRight": "_3QaeUebvm_hDmM8XyKDx-c",
	  "rotateOutUpLeft": "_3OdjVJLA4C4r6OJLu54tPK",
	  "rotateOutUpRight": "_3wZ8YsrBU1ssIYWNrTWdop",
	  "rollIn": "JZMlyQJfPBvaAOEQ0_lqO",
	  "rollOut": "Ei5yJnm7U8ou7wxwwh465",
	  "zoomIn": "_31TiMTHefHKQyNtpgnxdJG",
	  "zoomInDown": "_3Dkl1rEapNChrq-5-Q621T",
	  "zoomInLeft": "_2gfS98LQ8P5YfRyu05o9Jp",
	  "zoomInRight": "_3BmL4vMvU9kIIjnORZ_3S_",
	  "zoomInUp": "_1aUktT-M7KaBb6KTk_Fi60",
	  "zoomOut": "l87T1ZcL5PJsHt5IgKobT",
	  "zoomOutDown": "_11KSanMj6lgSXviEP1jsgJ",
	  "zoomOutLeft": "_14_r8yqvj0XJL2br0Iv1HJ",
	  "zoomOutRight": "H3PkUBeHMjR9HK8LwfcmS",
	  "zoomOutUp": "_7HIP_dYIaROGx5nSoGFF2",
	  "slideInDown": "_2-kwH364DBmQfpvHTbOqCb",
	  "slideInLeft": "_1iptQXrynUtTrun5cECksu",
	  "slideInRight": "_1-YHRccTFOZm-V46e15nr3",
	  "slideInUp": "_1ToTZgcjGMaYpiWaVlOjyq",
	  "slideOutDown": "_29G91APzNGaUj-_McqEA0u",
	  "slideOutLeft": "_2qHPXO_uFCk50SG5DEmn7a",
	  "slideOutRight": "_2gxm9oRHDlm5mjqhTdsk15",
	  "slideOutUp": "_3VEaDz-Iae1m_S61Co6RE6"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _Navigation = {
	  "menu": "_2cVhCv7k3sEK6iuvmIjho4",
	  "appbar": "Unja-B3orbsH6LgZXuPmU",
	  "un-invis": "MjSfsbXnrzeHExWr3vkLR"
	};

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _HomeActions = __webpack_require__(20);

	var _PortfolioActions = __webpack_require__(23);

	var _AboutMeActions = __webpack_require__(13);

	var _ContactActions = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var muiStyle = {
	  drawerContainer: {
	    WebkitTransition: 'width 1s',
	    WebkitAnimationDuration: '1s',
	    transition: 'width 1s',
	    AnimationDuration: '1s',
	    overflow: 'hidden'
	  },
	  hoverColor: 'rgb(100,133,135)',
	  ripple: 'rgba(100%, 100%, 0%, 1.0)',
	  fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' },
	  appBar: {
	    position: 'fixed',
	    backgroundColor: '#fff',
	    fontFamily: 'AvenirNext',
	    WebkitAnimationDuration: '2s'
	  },
	  appBarTitle: { fontFamily: 'AvenirNext', color: '#000', textAlign: 'center' },
	  icon: { border: 'solid 2px black' }
	};

	var _ref = _jsx(_menu2.default, {});

	var Navigation = function Navigation(props) {
	  var routeHandler = function routeHandler(route, setLeaveAnimationAction, animation) {
	    if (window.location.pathname !== route) {
	      // fadeOut this route
	      props.dispatch(setLeaveAnimationAction(animation));
	      setTimeout(function () {
	        // reset animations
	        props.dispatch(setLeaveAnimationAction(''));
	        props.router.push(route);
	      }, 1000);
	    }
	  };

	  var mapAnimationToRouteHandler = function mapAnimationToRouteHandler(route) {
	    // eslint-disable-line
	    switch (route) {
	      case '/':
	        return routeHandler(route, _HomeActions.setLeaveAnimation, '' + _animate2.default.slideOutLeft);
	      case '/me':
	        return routeHandler(route, _AboutMeActions.setLeaveAnimation, '' + _animate2.default.slideOutLeft);
	      case '/portfolio':
	        return routeHandler(route, _PortfolioActions.setLeaveAnimation, '' + _animate2.default.slideOutLeft);
	      case '/contact':
	        return routeHandler(route, _ContactActions.setLeaveAnimation, '' + _animate2.default.slideOutLeft);
	      default:
	        break;
	    }
	  };

	  var mapLablesToHandlers = {
	    Contact: { routeHandler: function routeHandler() {
	        return mapAnimationToRouteHandler('/contact');
	      } },
	    Portfolio: { routeHandler: function routeHandler() {
	        return mapAnimationToRouteHandler('/portfolio');
	      } },
	    Me: { routeHandler: function routeHandler() {
	        return mapAnimationToRouteHandler('/me');
	      } },
	    Home: { routeHandler: function routeHandler() {
	        return mapAnimationToRouteHandler('/');
	      } }
	  };

	  var createDrawerMenu = function createDrawerMenu() {
	    return Object.keys(mapLablesToHandlers).map(function (mappedLabel, i) {
	      return _jsx('div', {
	        className: _animate2.default.animated + ' ' + _animate2.default.fadeInRight,
	        style: {
	          WebkitAnimationDelay: i + 6.5 + 's',
	          WebkitAnimationDuration: '0.8s'
	        }
	      }, mappedLabel, _jsx(_FlatButton2.default, {
	        labelStyle: muiStyle.fontDecor,
	        onTouchTap: mapLablesToHandlers[mappedLabel].routeHandler,
	        label: mappedLabel,
	        labelPosition: 'before',
	        hoverColor: muiStyle.hoverColor,
	        rippleColor: muiStyle.ripple
	      }));
	    });
	  };
	  var createAppBarMenu = function createAppBarMenu() {
	    return Object.keys(mapLablesToHandlers).map(function (mappedLabel) {
	      return _jsx(_MenuItem2.default, {
	        style: muiStyle.fontDecor,
	        onTouchTap: mapLablesToHandlers[mappedLabel].routeHandler,
	        primaryText: mappedLabel
	      }, mappedLabel);
	    });
	  };

	  return _jsx('div', {}, void 0, props.open ? _jsx(_Drawer2.default, {
	    containerStyle: muiStyle.drawerContainer,
	    open: props.open,
	    width: props.width
	  }, void 0, _jsx('nav', {
	    className: _Navigation2.default.menu
	  }, void 0, createDrawerMenu())) : _jsx(_AppBar2.default, {
	    className: ' ' + _Navigation2.default.appbar + ' ' + _animate2.default.animated + ' ' + _animate2.default.fadeInDown,
	    title: 'HugoExp',
	    titleStyle: muiStyle.appBarTitle,
	    iconElementLeft: _jsx(_IconMenu2.default, {
	      menuStyle: { height: '100%' },
	      iconButtonElement: _jsx(_IconButton2.default, {
	        iconStyle: muiStyle.icon
	      }, void 0, ' ', _ref, ' '),
	      targetOrigin: { horizontal: 'left', vertical: 'top' },
	      anchorOrigin: { horizontal: 'left', vertical: 'bottom' }
	    }, void 0, createAppBarMenu()),
	    style: muiStyle.appBar,
	    zDepth: 4
	  }));
	};

	exports.default = (0, _reactRedux.connect)()((0, _reactRouter.withRouter)(Navigation)); // inject just dispatch

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _PortfolioItem = __webpack_require__(58);

	var _PortfolioItem2 = _interopRequireDefault(_PortfolioItem);

	var _animate = {
	  "animated": "_3r0mq9S7Wc2cm68zTdSanO",
	  "infinite": "_39g1891yxx_Ju5xjjy1jzn",
	  "hinge": "_2FeOisFrfOoF3CPqiRPwDs",
	  "flipOutX": "GRvy3Rtqk_p1WA4ISw17X",
	  "flipOutY": "_3sHrEPcTQ8wy_g_7xhYUaq",
	  "bounceIn": "FNqy24qpvuWyN324h1jQt",
	  "bounceOut": "M4TLNKZvAt6Euon8OTBSg",
	  "bounce": "_2R-8W-5pB4ZGcRYTEm0eUz",
	  "flash": "_2bxipBCixhcu4JWkIbUnAl",
	  "pulse": "_18k3lDKsSFZyKWzbSDzOZ0",
	  "rubberBand": "VifMYJ2Dm9nu8CYeXZN_O",
	  "shake": "v9onn00ZAX0JyFxDMtoOa",
	  "headShake": "gJo1FSJp10TL_AP_mhaJX",
	  "swing": "_3HkZbNny1NUWD0tT9HJlNQ",
	  "tada": "pCGrTRmQAMKrWrG5tBXG_",
	  "wobble": "_3XR4NjvZjuLZfqM1S0PgOm",
	  "jello": "_22pDETzONWsYfkyibrHBUr",
	  "bounceInDown": "_1BtMguP7zLzQ7vus2Oz8oC",
	  "bounceInLeft": "ChJ6Wvpi__wzp0IeczBT8",
	  "bounceInRight": "_3NEBDIFhuM7UiBTt5T9cuB",
	  "bounceInUp": "_1XNDgYlpOLWPmUbein5Svz",
	  "bounceOutDown": "_7sCwUF6gRjuEGQbu8vZJT",
	  "bounceOutLeft": "_2zWwbS3b5HSj5wvCjP0g_Z",
	  "bounceOutRight": "_3ItUJv3aRNqZjnCDSQfooL",
	  "bounceOutUp": "_1TbBPhQCK_Tj3eRb5HRg0V",
	  "fadeIn": "_1dfHUeEigqZKaz9VqhwCWb",
	  "fadeInDown": "_3YjYpd53_FQTd6sY394muf",
	  "fadeInDownBig": "_2oXogJH6ealdNM7hq8By5w",
	  "fadeInLeft": "_37TO6w-qRdn360Q56rwMlF",
	  "fadeInLeftBig": "_3k5qTpWazjJzryVgPMPZmY",
	  "fadeInRight": "_2G3Ryc3I1emKLro-w0mJLl",
	  "fadeInRightBig": "gIzrJDqgjX8oX3QmEYxw3",
	  "fadeInUp": "kWsa6kBxkGLypi4-mU6bU",
	  "fadeInUpBig": "_1kN6Plon06A4RFVocStYAP",
	  "fadeOut": "_12yNe2uIRjfF-wFv3Ps6fZ",
	  "fadeOutDown": "_3lMvLY2YA_OtJvvcJROZDl",
	  "fadeOutDownBig": "_33uAMEQeeC060Xw8FFwi8i",
	  "fadeOutLeft": "_1DOKHBu6380bnIsgmYH7pQ",
	  "fadeOutLeftBig": "_1-Irat2opOfE8VFQKtByBa",
	  "fadeOutRight": "_2AprXBXBi-bRJOrIeRn4zY",
	  "fadeOutRightBig": "_1KUEmm84HNN9F7B6YxKLYC",
	  "fadeOutUp": "_1AdjSRFCKFYF-uEHcrqY_-",
	  "fadeOutUpBig": "_1fvHvkROMAciZl08yk151f",
	  "flip": "SZnDis1iCYaZX2iAka0AD",
	  "flipInX": "_3KaCi8BFXWJedh5kv8NPHs",
	  "flipInY": "_2bbm1f20KPAO-NOHFoSMkV",
	  "lightSpeedIn": "_3UZT4yJVHiFSzESjY_vkW3",
	  "lightSpeedOut": "_2Vz9L__gi00kBa_U9jsKbH",
	  "rotateIn": "eh61XgjfkBJXam5A1nbyv",
	  "rotateInDownLeft": "jW4C5DaKtsrF7iIlt77Hl",
	  "rotateInDownRight": "dzPOAmrkxK4kqf1Qi3YED",
	  "rotateInUpLeft": "f6AuH8cii2M9M4o_puCoV",
	  "rotateInUpRight": "_97N163Rl8VAJp-g0y9uAB",
	  "rotateOut": "_28YRzI46SAC67e2w1kqIHy",
	  "rotateOutDownLeft": "_3F-rBkOPeY6peSGn0KaHi6",
	  "rotateOutDownRight": "_3QaeUebvm_hDmM8XyKDx-c",
	  "rotateOutUpLeft": "_3OdjVJLA4C4r6OJLu54tPK",
	  "rotateOutUpRight": "_3wZ8YsrBU1ssIYWNrTWdop",
	  "rollIn": "JZMlyQJfPBvaAOEQ0_lqO",
	  "rollOut": "Ei5yJnm7U8ou7wxwwh465",
	  "zoomIn": "_31TiMTHefHKQyNtpgnxdJG",
	  "zoomInDown": "_3Dkl1rEapNChrq-5-Q621T",
	  "zoomInLeft": "_2gfS98LQ8P5YfRyu05o9Jp",
	  "zoomInRight": "_3BmL4vMvU9kIIjnORZ_3S_",
	  "zoomInUp": "_1aUktT-M7KaBb6KTk_Fi60",
	  "zoomOut": "l87T1ZcL5PJsHt5IgKobT",
	  "zoomOutDown": "_11KSanMj6lgSXviEP1jsgJ",
	  "zoomOutLeft": "_14_r8yqvj0XJL2br0Iv1HJ",
	  "zoomOutRight": "H3PkUBeHMjR9HK8LwfcmS",
	  "zoomOutUp": "_7HIP_dYIaROGx5nSoGFF2",
	  "slideInDown": "_2-kwH364DBmQfpvHTbOqCb",
	  "slideInLeft": "_1iptQXrynUtTrun5cECksu",
	  "slideInRight": "_1-YHRccTFOZm-V46e15nr3",
	  "slideInUp": "_1ToTZgcjGMaYpiWaVlOjyq",
	  "slideOutDown": "_29G91APzNGaUj-_McqEA0u",
	  "slideOutLeft": "_2qHPXO_uFCk50SG5DEmn7a",
	  "slideOutRight": "_2gxm9oRHDlm5mjqhTdsk15",
	  "slideOutUp": "_3VEaDz-Iae1m_S61Co6RE6"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _flexboxgrid = {
	  "container-fluid": "_29-OKwO_efTKNjmaACRVYm",
	  "container": "UxsnHqz8rBg35H3L7gXjX",
	  "row": "_38rSqWYURLlCgxmlz43VL",
	  "reverse": "_3gso2BicM_MO6XQi5s1j5E",
	  "col": "_3z2vGynnYT5InEXW0kmZgd",
	  "col-xs": "_25lK3qvEmwV_2KoSPOi3i1",
	  "col-xs-1": "_35s64GUFICrcvgYThuBTNo",
	  "col-xs-2": "_2K-1uR9_kM7cjsK2wJBFJM",
	  "col-xs-3": "_3PFyNTYcDAY_KGKCosWb_a",
	  "col-xs-4": "_1-HbiMIVuoA868U3LL5pZ8",
	  "col-xs-5": "_2OlsC3PTdBtwVKPHt7s-U0",
	  "col-xs-6": "_3pNC2KVuz-a5pBRt1hQX_O",
	  "col-xs-7": "_2eKUdd41QX0-Enj0LEO04e",
	  "col-xs-8": "_3fQWLVFV65d82HJTJMgqnF",
	  "col-xs-9": "_2nw8kTE1jMDYudbppIdk2F",
	  "col-xs-10": "_3HMllqWqMXa1YerK-QYSvU",
	  "col-xs-11": "_2mIYjzUUcqX6f6BwVz2tZO",
	  "col-xs-12": "_2OuOM5OdBhHKzOXRxrGuOR",
	  "col-xs-offset-0": "_3uE4EBUq7GP1-BpUJJM6US",
	  "col-xs-offset-1": "_2jiLP_eAOhvX-PwNYntJ2V",
	  "col-xs-offset-2": "_1li6jq1TE0klkqdXrI_4dz",
	  "col-xs-offset-3": "_22YUGphpvF0_YefRBuCyr-",
	  "col-xs-offset-4": "sDDpp3zhwy4pC-u1V2n6U",
	  "col-xs-offset-5": "_2huPw7cg0fnSxjjuTAApM7",
	  "col-xs-offset-6": "_1BRdUhyU826wTzWMZAX_wV",
	  "col-xs-offset-7": "_1d0V-mJHzIDwMPWmUH4J8Q",
	  "col-xs-offset-8": "_36vH40AfHw3kEUBbtGNJes",
	  "col-xs-offset-9": "_2l-g8PCsa21BwctbCk0tFx",
	  "col-xs-offset-10": "_1rv0SBRblAlrpXYz6gA5H8",
	  "col-xs-offset-11": "_14texM3_6mYHFVAKF6bSHD",
	  "col-xs-offset-12": "Ln_mPAJqPNeSutvpK3gpf",
	  "start-xs": "_1b9iSnNRA69gmQOi6RokYu",
	  "center-xs": "_29ydbJoLKvCt65GUlik_1O",
	  "end-xs": "sY1wJLzhJeC7A1cAJcmsF",
	  "top-xs": "Bcm3EwDWzpHKLhr5IGCE_",
	  "middle-xs": "yv8Beq4tQkUs7WD6lxZqm",
	  "bottom-xs": "_2DteXH_ys1a_62uUKboh-Y",
	  "around-xs": "_3MLcf4OKqtJlJMmrbQUcup",
	  "between-xs": "_3ySwHjgHjYgb-vZ7XkHd2W",
	  "first-xs": "xLanyK1j-31sAC62sxQoQ",
	  "last-xs": "_2CiN74wZf3jZe6v8uK9Z6x",
	  "col-sm": "_367_HvHO6rPfWxqMgPiAjO",
	  "col-sm-1": "_2enWPLmlvSxjo2GegAR77e",
	  "col-sm-2": "_5a5DtKjfKdRvS_1Z_WyP5",
	  "col-sm-3": "_27m28xaJAeXQ7nqPLxZBfg",
	  "col-sm-4": "_2f1IAcPDzFsqg29hZAQ4RW",
	  "col-sm-5": "_1eQvcAPh_eWEsv37Pt7oMb",
	  "col-sm-6": "_1cyE-Llb0uYQfrDkf5lGKP",
	  "col-sm-7": "OCmIYLgdDt7hJpyWftO9Z",
	  "col-sm-8": "_3OsGDte3EcP_SsCt5PKCP4",
	  "col-sm-9": "_316ZhxAvS1Fg8GWGS-y6uE",
	  "col-sm-10": "_2DBTVrh7Unoo3SkZw6ngIF",
	  "col-sm-11": "yozOA4LyXjFb3LMXTMmQ8",
	  "col-sm-12": "_1wJoUFVQmw971pAam29bAE",
	  "col-sm-offset-0": "_3kOFIJ_3gqWtG-iTQp3449",
	  "col-sm-offset-1": "_1yF4xoHg7GJ5ZDxSLBFEXf",
	  "col-sm-offset-2": "_2qeazt34RWY2bsHRgBSy_S",
	  "col-sm-offset-3": "QFHR5bJPVFznzZ_cY8QBJ",
	  "col-sm-offset-4": "_1KdpNuD86s-xwchW6k0Mc1",
	  "col-sm-offset-5": "_3msJTGKb3CVroGEUnaaqw0",
	  "col-sm-offset-6": "_2zASSVVn6eOVaz2Jgm3sRJ",
	  "col-sm-offset-7": "_1Z4EMzifUgqdDSmg1pSjel",
	  "col-sm-offset-8": "_2Q7zoSA7C2y5tOv-bIZmoI",
	  "col-sm-offset-9": "_1rJenggMghYdJbNJ5TuQJE",
	  "col-sm-offset-10": "_2nz2lKcDC18VLHbNFGiUCo",
	  "col-sm-offset-11": "_1_niRfRoE-EdzBurGTUiR5",
	  "col-sm-offset-12": "_3w_djO7ZTz3mUlDHRD0KWy",
	  "start-sm": "ys_HsRJ0NYYbHTTtewFUk",
	  "center-sm": "_2VSW8F6PhXOffyGLniPdc7",
	  "end-sm": "_1IhY52xkFGxtIKwuGQ9IUI",
	  "top-sm": "_3RoaikS8vWHJNQf8N-nsu-",
	  "middle-sm": "_2siqbT5S8l3m-RXarQdT7f",
	  "bottom-sm": "_3tHpmenNFOT35X3vh0Ujmn",
	  "around-sm": "_278Tz-hGcFIo04qCcSsscZ",
	  "between-sm": "OJy278i54RZ8AynlnLLXg",
	  "first-sm": "CggZvLL2vowB6ywV65gf2",
	  "last-sm": "F2EKQ5GjS8sf2Ey63w6GL",
	  "col-md": "UY_EhDzrc1y_SrHx4-0AG",
	  "col-md-1": "_39SHGDpGrAjTd-CvkvXvz5",
	  "col-md-2": "_3vdiBjWmXeBQ1NCTzL5PRi",
	  "col-md-3": "RaVJJKSt9SR08lKEUX_-H",
	  "col-md-4": "_1RrFTmg1IMFD5XJgUyrEsJ",
	  "col-md-5": "_3e5qC215p4rFpHdNw_qC-",
	  "col-md-6": "_1ngmymzsSjd_XtBPIM_psL",
	  "col-md-7": "_2JoVtS5Xo99DQWkKwEWBAs",
	  "col-md-8": "_2gIM1I8spLFK5r5K6aBos8",
	  "col-md-9": "_3T8mUFN7QhRhgEEPCCFx8M",
	  "col-md-10": "_3VhLw8uq8SKKmU_jHjqVjg",
	  "col-md-11": "_3Yc9ttY92_SpkUhuDcNbYs",
	  "col-md-12": "_2ZfdkmgsK396ATHHvgXX0o",
	  "col-md-offset-0": "_29-DfHrH25e6qWmc7cR6EP",
	  "col-md-offset-1": "_23bvUjqsR_oJyEi6HTp7hm",
	  "col-md-offset-2": "WdY_mW_TCDzCPsxlSEbCP",
	  "col-md-offset-3": "_26DzX6oamfPPx662KY85yY",
	  "col-md-offset-4": "_2JRnFCfkSXeBhLQdzHnjQG",
	  "col-md-offset-5": "_1vT0C-1Vr66mmSWh_ehDP0",
	  "col-md-offset-6": "_3x6tUEiFG_l-UecYgxtXxK",
	  "col-md-offset-7": "_1fTil3wrhsu5PvKqJFc0qC",
	  "col-md-offset-8": "_2IoS0BNG7TZrwURE3ny_Oa",
	  "col-md-offset-9": "_1eVH7nWqW792N68Y39dwdR",
	  "col-md-offset-10": "_5vhGtRv17CU3r9l-q2SWx",
	  "col-md-offset-11": "_2etmbQpFiQ4bsGm7A-SGQe",
	  "col-md-offset-12": "_yKP50J6xNR2wQDdlybQr",
	  "start-md": "eXwvSe4l03TDIBfWUNBZ6",
	  "center-md": "_2BVDrHg6pP-9kN0N_bKr74",
	  "end-md": "MpZ5F3XsEZyyt1aLI7mgU",
	  "top-md": "_39qN5vlgUbpXrxStEsLdXz",
	  "middle-md": "Vad3zrrnT8oSHH0gE1nmB",
	  "bottom-md": "_2qkdKQHKL-kz-WBpWBzN3d",
	  "around-md": "_2RJvbf09C8BnIN1PN4DR3w",
	  "between-md": "_3MZP-rVOaS1sziiOjZTj4W",
	  "first-md": "_3hlkWQZlLmBhscX283bbcm",
	  "last-md": "_15BZ8GYfrZKxUR-FN5HfBy",
	  "col-lg": "_2snoobF4mi3GWL45ZHyu_f",
	  "col-lg-1": "_15BP_oPtmb4whpz2aTg4ui",
	  "col-lg-2": "UZvU6DLFU2hYnoeth8pDn",
	  "col-lg-3": "YK8ZAh27sDk9Uc3NOziY_",
	  "col-lg-4": "_1LKXl04PnIK84T6hSZTZdC",
	  "col-lg-5": "_3wiu6P_ZHQy9c9CbTBspg-",
	  "col-lg-6": "_1Eu3USNhD1hXD-yrV9DT5j",
	  "col-lg-7": "_14x2Pq6ek332gYeYmgp-Pw",
	  "col-lg-8": "_15fV3eN5h8iVdxyfrQ0KS4",
	  "col-lg-9": "_2sVGq5FvLEBZTugSZg-a1V",
	  "col-lg-10": "EHiH_7OXvVvQpdY96fIBj",
	  "col-lg-11": "C44M3gN2MN2jVqCXHg9tR",
	  "col-lg-12": "e04ajECMMxWBFQNBwmcGN",
	  "col-lg-offset-0": "uVmEQVgwUhbAIKFX9Cuod",
	  "col-lg-offset-1": "_21s_K3UwJnqdCaYMRLo92F",
	  "col-lg-offset-2": "_6kDtklUuOg9CrDcRgtT1F",
	  "col-lg-offset-3": "fvaMrygCuqJgwOt4h_aSV",
	  "col-lg-offset-4": "_1zk6NWX0AHFiylnh1zGIhe",
	  "col-lg-offset-5": "_3CUKEpjcdver3w_2r0VqqJ",
	  "col-lg-offset-6": "_3BeScWiNNGawxB8IxxtyU4",
	  "col-lg-offset-7": "ewvWkcI0GbXc9i5FRgovO",
	  "col-lg-offset-8": "_1EwgnMbtMufLC_lYLSs5SF",
	  "col-lg-offset-9": "_1693_jN5bw4o3aBKTH2tI-",
	  "col-lg-offset-10": "_2Aqn5VuVClt6Zi0gA6FQRU",
	  "col-lg-offset-11": "_273kLInr-3dMdI0-17bZQI",
	  "col-lg-offset-12": "mYI4B7NQ7mOBZglyTFNK4",
	  "start-lg": "vS5Sz0sZcBByTOuou5c3b",
	  "center-lg": "_1HfDr5jAu7JK1m9BtHGu2-",
	  "end-lg": "_2FAiOGTEp5CmbGbG841xno",
	  "top-lg": "_1YA15h9QT-UCQOIcYisar9",
	  "middle-lg": "BPqDQ-_VrOUUf9QEOGsDs",
	  "bottom-lg": "_3V5F9TV-kwM-mQWrAWokhw",
	  "around-lg": "_2yIkUW3fOVHq-uwtCODZpT",
	  "between-lg": "_3VBogyrwpAEL9yATv9RX88",
	  "first-lg": "_2HJXNlWUWI355mvqit4Drp",
	  "last-lg": "_2UFO6WYCJLXPFUGKP4dRsI"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PortfolioGallery = function PortfolioGallery(props) {
	  return _jsx('div', {
	    className: '' + _flexboxgrid2.default['container-fluid'],
	    style: { position: 'relative', top: '80px' }
	  }, void 0, _jsx('div', {
	    className: _flexboxgrid2.default.row + ' ' + _flexboxgrid2.default.reverse
	  }, void 0, props.data.map(function (datum, i) {
	    return _jsx('div', {
	      className: ' \n                  ' + _animate2.default.animated + '\n                  ' + _animate2.default.fadeInDown + '\n                  ' + props.leaveAnimation + '\n                ',
	      style: {
	        WebkitAnimationDuration: '1s',
	        WebkitAnimationDelay: i + 1 + 's'
	      }
	    }, i, _jsx(_PortfolioItem2.default, {
	      link: datum.link,
	      cardImagePath: datum.cardImagePath,
	      title: datum.title
	    }));
	  })));
	};

	exports.default = PortfolioGallery;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Card = __webpack_require__(71);

	var _FlatButton = __webpack_require__(27);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _PortfolioItem = {
	  "portfolio-item": "_3qqSVQkxkbYoWUs3Ibi8RH"
	};

	var _PortfolioItem2 = _interopRequireDefault(_PortfolioItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PortfolioItem = function PortfolioItem(props) {
	  return _jsx('div', {
	    className: '' + _PortfolioItem2.default['portfolio-item']
	  }, void 0, _jsx(_Card.Card, {
	    style: { background: 'transparent' },
	    zDepth: 5
	  }, void 0, _jsx(_Card.CardHeader, {
	    title: props.title,
	    titleStyle: { color: '#fff', textShadow: '1px 1px 1px #000', fontSize: '16px' }
	  }), _jsx(_Card.CardMedia, {}, void 0, _jsx('img', {
	    src: props.cardImagePath,
	    alt: ''
	  })), _jsx(_Card.CardActions, {}, void 0, _jsx('a', {
	    href: props.link,
	    rel: 'noopener noreferrer',
	    target: '_blank'
	  }, void 0, _jsx(_FlatButton2.default, {
	    style: { color: '#fff', textShadow: '1px 1px 1px #000' },
	    label: 'Visit'
	  })))));
	};

	exports.default = PortfolioItem;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _PortfolioVideo = {
	  "video-container": "_1XSl-EwztuUwLkoUTJfyiJ"
	};

	var _PortfolioVideo2 = _interopRequireDefault(_PortfolioVideo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PortfolioVideo = function PortfolioVideo(props) {
	  return _jsx('video', {
	    preload: true,
	    playsInline: true,
	    autoPlay: true,
	    muted: true,
	    loop: true,
	    className: '' + _PortfolioVideo2.default['video-container'],
	    style: {
	      marginLeft: '' + props.marginLeft,
	      WebkitTransition: 'margin-left 1s',
	      WebkitAnimationDuration: '2s'
	    }
	  }, void 0, _jsx('source', {
	    src: props.srcPath,
	    type: 'video/mp4'
	  }));
	};

	exports.default = PortfolioVideo;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(30);

	var _AppReducer = __webpack_require__(55);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _PortfolioReducer = __webpack_require__(24);

	var _PortfolioReducer2 = _interopRequireDefault(_PortfolioReducer);

	var _HomeReducer = __webpack_require__(21);

	var _HomeReducer2 = _interopRequireDefault(_HomeReducer);

	var _AboutMeReducer = __webpack_require__(14);

	var _AboutMeReducer2 = _interopRequireDefault(_AboutMeReducer);

	var _ContactReducer = __webpack_require__(18);

	var _ContactReducer2 = _interopRequireDefault(_ContactReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer

	// import analyzed from './modules/Analyzed/AnalyzedReducer';
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  // analyzed,
	  home: _HomeReducer2.default,
	  aboutMe: _AboutMeReducer2.default,
	  portfolio: _PortfolioReducer2.default,
	  contact: _ContactReducer2.default
	});

	// Import Reducers

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addNewContact = addNewContact;

	var _nodemailer = __webpack_require__(82);

	var _nodemailer2 = _interopRequireDefault(_nodemailer);

	var _sanitizeHtml = __webpack_require__(92);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	var _contact = __webpack_require__(62);

	var _contact2 = _interopRequireDefault(_contact);

	var _cuid = __webpack_require__(65);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _limax = __webpack_require__(69);

	var _limax2 = _interopRequireDefault(_limax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function prepareEmail(newContact) {
	  return {
	    from: '<no-reply@hugocodes.com>', // sender address
	    to: 'hugoce17@gmail.com', // list of receivers
	    subject: 'HugoEXP: ' + newContact.name + ' Wants To Connect', // Subject line
	    html: '\n      <div>\n        <h1>Contact Info</h1> <br />\n        <h3>Name: ' + newContact.name + '</h3>\n        <h3>Phone: ' + newContact.phone + '</h3>\n        <h3>Email: ' + newContact.email + '</h3> <br />\n        <h3>Inquiry: </h3>\n        <p>' + newContact.inquiry + '</p\n      </div>\n    '
	  };
	}

	function send(mailOptions, cb) {
	  var transporter = _nodemailer2.default.createTransport('smtps://hugoce17%40gmail.com:ymaazbrgztbmldlt@smtp.gmail.com');
	  transporter.sendMail(mailOptions, function (error, info) {
	    if (error) {
	      return cb(error);
	    }
	    return cb(null, 'Email Sent: ' + info.response);
	  });
	}

	function addNewContact(req, res) {
	  if (!req.body.data.name || !req.body.data.email || !req.body.data.phone || !req.body.data.inquiry) {
	    res.status(403).end();
	  }

	  var newContact = new _contact2.default(req.body.data);

	  // sanitize
	  newContact.name = (0, _sanitizeHtml2.default)(newContact.name);
	  newContact.phone = (0, _sanitizeHtml2.default)(newContact.phone);
	  newContact.email = (0, _sanitizeHtml2.default)(newContact.email);
	  newContact.inquiry = (0, _sanitizeHtml2.default)(newContact.inquiry);
	  newContact.slug = (0, _limax2.default)((0, _sanitizeHtml2.default)(newContact.email).toLowerCase(), { lowercase: true });
	  newContact.cuid = (0, _cuid2.default)();

	  var preparedEmail = prepareEmail(newContact);

	  send(preparedEmail, function (err, response) {
	    if (err) return console.log(err);
	    return console.log(response);
	  });

	  // save to db
	  newContact.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    return res.json(saved);
	  });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var contactSchema = new Schema({
	  name: { type: 'String', required: true },
	  phone: { type: 'Number', required: true },
	  email: { type: 'String', required: true },
	  inquiry: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  createdAt: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Contact', contactSchema);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	__webpack_require__(40);

	var _express = __webpack_require__(7);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(38);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(37);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(41);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(11);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(36);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(43);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(44);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(33);

	var _reactRedux = __webpack_require__(1);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(42);

	var _reactRouter = __webpack_require__(3);

	var _reactHelmet = __webpack_require__(10);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _MuiThemeProvider = __webpack_require__(8);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _styles = __webpack_require__(2);

	var _AppTheme = __webpack_require__(5);

	var _AppTheme2 = _interopRequireDefault(_AppTheme);

	var _contact = __webpack_require__(34);

	var _contact2 = _interopRequireDefault(_contact);

	var _routes = __webpack_require__(32);

	var _routes2 = _interopRequireDefault(_routes);

	var _cors = __webpack_require__(39);

	var _cors2 = _interopRequireDefault(_cors);

	var _fetchData = __webpack_require__(35);

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Serverside prep for Material-ui


	// Routes


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	});

	// Allow cors
	app.use((0, _cors2.default)());

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	// app.use('/api', posts);

	// // Analyzer
	// app.use('/api', analyzed);
	app.use('/api', _contact2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();
	    global.navigator = {
	      userAgent: req.headers['user-agent']
	    };
	    var muiTheme = (0, _styles.getMuiTheme)(_AppTheme2.default, { userAgent: req.headers['user-agent'] });

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_MuiThemeProvider2.default, {
	        muiTheme: muiTheme
	      }, void 0, _jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("formsy-material-ui/lib");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("formsy-react");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("material-ui/AppBar");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Card");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Chip");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Drawer");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("material-ui/IconButton");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("material-ui/IconMenu");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("material-ui/MenuItem");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RaisedButton");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/colors");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/menu");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("material-ui/utils/colorManipulator");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("nodemailer");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("react-tap-event-plugin");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("recharts");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("sweetalert-react");

/***/ }
/******/ ]);