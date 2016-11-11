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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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

	module.exports = require("redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _colorManipulator = __webpack_require__(67);

	var _colors = __webpack_require__(66);

	var Colors = _interopRequireWildcard(_colors);

	var _styles = __webpack_require__(4);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var rawBaseTheme = _extends({}, _styles.spacing, {
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: '#0078C5',
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
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-router");

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
	exports.LOAD_ANALYZED_DATA = undefined;
	exports.loadAnalyzedData = loadAnalyzedData;
	exports.fetchAnalyzedData = fetchAnalyzedData;

	var _apiCaller = __webpack_require__(51);

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAnalyzedData = undefined;

	var _AnalyzedActions = __webpack_require__(12);

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
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	exports.toggleDrawer = toggleDrawer;

	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	var TOGGLE_DRAWER = exports.TOGGLE_DRAWER = 'TOGGLE_DRAWER';

	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

	function toggleDrawer() {
	  return {
	    type: TOGGLE_DRAWER
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getIsDrawerOpen = exports.getShowAddPost = undefined;

	var _AppActions = __webpack_require__(14);

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
	    case _AppActions.TOGGLE_DRAWER:
	      return {
	        open: !state.open
	      };
	    default:
	      return state;
	  }
	};

	/* Selectors */

	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	var getIsDrawerOpen = exports.getIsDrawerOpen = function getIsDrawerOpen(state) {
	  return state.app.open;
	};

	// Export Reducer
	exports.default = AppReducer;

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

	var _reduxDevtools = __webpack_require__(74);

	var _reduxDevtoolsLogMonitor = __webpack_require__(76);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(75);

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

	var _reactRedux = __webpack_require__(1);

	var _redux = __webpack_require__(2);

	var _PortfolioVideo = __webpack_require__(49);

	var _PortfolioVideo2 = _interopRequireDefault(_PortfolioVideo);

	var _Portfolio = {
	  "portfolio-container": "nx7pIFrroZyrzkb-C7Nia"
	};

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	var _ref = _jsx(_PortfolioVideo2.default, {});

	var Portfolio = function (_Component) {
	  _inherits(Portfolio, _Component);

	  function Portfolio() {
	    _classCallCheck(this, Portfolio);

	    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
	  }

	  _createClass(Portfolio, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _Portfolio2.default['portfolio-container']
	      }, void 0, _ref);
	    }
	  }]);

	  return Portfolio;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Portfolio);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(8);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Avatar");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("material-ui/List");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Paper");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(10);

	var _App = __webpack_require__(44);

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
	  __webpack_require__(37);
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
	      cb(null, __webpack_require__(17).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(2);

	var _reduxThunk = __webpack_require__(77);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(16);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(50);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }

	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};

	var _post = __webpack_require__(18);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	var _analyzed = __webpack_require__(52);

	var AnalyzedController = _interopRequireWildcard(_analyzed);

	var _express = __webpack_require__(3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	/**
	 * Example endpoint
	 * /api/analyzed/?name=hugoce17&limit=20
	 */
	router.route('/analyzed').get(AnalyzedController.getAnalyzedData);

	module.exports = router;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _post = __webpack_require__(53);

	var PostController = _interopRequireWildcard(_post);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Get all Posts
	router.route('/posts').get(PostController.getPosts);

	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);

	// Add a new Post
	router.route('/posts').post(PostController.addPost);

	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);

	exports.default = router;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(58);

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(11);
	var cssnext = __webpack_require__(69);
	var postcssFocus = __webpack_require__(70);
	var postcssReporter = __webpack_require__(71);

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
/* 30 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("cors");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 37 */
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

	var _SearchBar = __webpack_require__(40);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _List = __webpack_require__(38);

	var _List2 = _interopRequireDefault(_List);

	var _WatsonResults = __webpack_require__(42);

	var _WatsonResults2 = _interopRequireDefault(_WatsonResults);

	var _AnalyzedActions = __webpack_require__(12);

	var _AnalyzedReducer = __webpack_require__(13);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(21);

	var _ListItem = __webpack_require__(39);

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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(21);

	var _Avatar = __webpack_require__(20);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Paper = __webpack_require__(22);

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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(65);

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
/* 41 */
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

	var _recharts = __webpack_require__(73);

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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Paper = __webpack_require__(22);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _WatsonEmotions = __webpack_require__(41);

	var _WatsonEmotions2 = _interopRequireDefault(_WatsonEmotions);

	var _WatsonResults = {
	  "watson-flex-container": "_28pfieL2UpBcpeuIpPUIqP",
	  "sentiments-container": "SNX_KMmfCroZF-Y0hsAge",
	  "emotions-container": "_2e3w5LR0YEwnH1Byp4Nic6",
	  "charts-container": "MIh89Wxuk0348ndAshld1"
	};

	var _WatsonResults2 = _interopRequireDefault(_WatsonResults);

	var _WatsonResultsChip = __webpack_require__(43);

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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Avatar = __webpack_require__(20);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Chip = __webpack_require__(63);

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
/* 44 */
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

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactTapEventPlugin = __webpack_require__(72);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _MuiThemeProvider = __webpack_require__(7);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _AppTheme = __webpack_require__(5);

	var _AppTheme2 = _interopRequireDefault(_AppTheme);

	var _styles = __webpack_require__(4);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};

	var _App2 = _interopRequireDefault(_App);

	var _DevTools = __webpack_require__(16);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Navigation = __webpack_require__(46);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _Footer = __webpack_require__(45);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AppActions = __webpack_require__(14);

	var _AppReducer = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Needed for onTouchTap
	// http://stackoverflow.com/a/34015469/988941
	(0, _reactTapEventPlugin2.default)();

	// Import muiTheme


	// Import Style


	// Import Components


	// Import Actions

	var _ref = _jsx(_DevTools2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.toggleDrawer = function () {
	      return _this.props.dispatch((0, _AppActions.toggleDrawer)());
	    };

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var muiTheme = (0, _styles.getMuiTheme)(_AppTheme2.default, { userAgent: navigator ? navigator.userAgent : 'all' });
	      return _jsx(_MuiThemeProvider2.default, {
	        muiTheme: muiTheme
	      }, void 0, _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Asurety',
	        titleTemplate: '%s',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Navigation2.default, {
	        onTapTouch: this.toggleDrawer,
	        open: this.props.open
	      }), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children))));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props


	function mapStateToProps(store) {
	  return {
	    open: (0, _AppReducer.getIsDrawerOpen)(store)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	// Import Images


	exports.Footer = Footer;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};

	var _Footer2 = _interopRequireDefault(_Footer);

	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";

	var _headerBk2 = _interopRequireDefault(_headerBk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('p', {}, void 0, '\xA9 2016 \xB7 Asurety Inc.');

	function Footer() {
	  return _jsx('div', {
	    style: { background: '#FFF url(' + _headerBk2.default + ') center' },
	    className: _Footer2.default.footer
	  }, void 0, _ref);
	}

	exports.default = Footer;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _AppBar = __webpack_require__(62);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _Drawer = __webpack_require__(64);

	var _Drawer2 = _interopRequireDefault(_Drawer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Navigation = function Navigation(props) {
	  return _jsx('div', {}, void 0, _jsx(_AppBar2.default, {
	    title: 'Asurety',
	    iconClassNameRight: 'muidocs-icon-navigation-expand-more',
	    onLeftIconButtonTouchTap: props.onTapTouch
	  }, void 0, _jsx('div', {}, void 0, _jsx(_Drawer2.default, {
	    docked: false,
	    width: 200,
	    open: props.open,
	    onRequestChange: props.onTapTouch
	  }))));
	};

	exports.default = Navigation;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	// Export Constants

	// Export Actions
	"use strict";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(47);

	// Initial State
	var initialState = {}; // Import Actions


	var PortfolioReducer = function PortfolioReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    default:
	      return state;
	  }
	};

	exports.default = PortfolioReducer;

/***/ },
/* 49 */
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

	var _redux = __webpack_require__(2);

	var _ferryRide = '/' + "420ce2b875f6469edac97c56f40d44f0.mp4";

	var _ferryRide2 = _interopRequireDefault(_ferryRide);

	var _PortfolioVideo = {
	  "video-container": "_3BYQIgNYjt9Uau-LlnWJzn"
	};

	var _PortfolioVideo2 = _interopRequireDefault(_PortfolioVideo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('source', {
	  src: _ferryRide2.default,
	  type: 'video/mp4'
	});

	var PortfolioVideo = function (_Component) {
	  _inherits(PortfolioVideo, _Component);

	  function PortfolioVideo() {
	    _classCallCheck(this, PortfolioVideo);

	    return _possibleConstructorReturn(this, (PortfolioVideo.__proto__ || Object.getPrototypeOf(PortfolioVideo)).apply(this, arguments));
	  }

	  _createClass(PortfolioVideo, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('video', {
	        className: _PortfolioVideo2.default['video-container'],
	        playsInline: true,
	        autoPlay: true,
	        muted: true,
	        loop: true
	      }, void 0, _ref);
	    }
	  }]);

	  return PortfolioVideo;
	}(_react.Component);

	exports.default = PortfolioVideo;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(2);

	var _AppReducer = __webpack_require__(15);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _AnalyzedReducer = __webpack_require__(13);

	var _AnalyzedReducer2 = _interopRequireDefault(_AnalyzedReducer);

	var _PortfolioReducer = __webpack_require__(48);

	var _PortfolioReducer2 = _interopRequireDefault(_PortfolioReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  analyzed: _AnalyzedReducer2.default,
	  portfolio: _PortfolioReducer2.default
	});

	// Import Reducers

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(60);

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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAnalyzedData = undefined;

	var _constants = __webpack_require__(57);

	var _Analyzer = __webpack_require__(55);

	var _Analyzer2 = _interopRequireDefault(_Analyzer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var a = new _Analyzer2.default();

	var getAnalyzedData = exports.getAnalyzedData = function getAnalyzedData(req, res) {
	  var name = req.query.name;
	  var limit = req.query.limit ? +req.query.limit : 20;
	  return _constants.T.get('statuses/user_timeline', { screen_name: name, count: limit }).catch(function (err) {
	    return Error(err);
	  }).then(function (results) {
	    var target = '';
	    var user = {};
	    var media = [];
	    var tweets = [];
	    results.data.map(function (datum) {
	      if (!user.hasOwnProperty(datum.user)) {
	        user = datum.user;
	      }

	      if (a.getMedia(datum)) {
	        media.push(a.getMedia(datum));
	      }

	      tweets.push(datum.text);
	      return target += datum.text + ' ';
	    });

	    var topTenWords = a.getTopWords(target, 10);
	    var topTwentyWords = a.getTopWords(target, 20);

	    a.watsonAll(target).catch(function (err) {
	      return Error(err);
	    }).then(function (analyedData) {
	      return res.json({
	        date: Date.now(),
	        user: {
	          type: 'twitter',
	          name: name,
	          profile_image_url: user.profile_image_url_https,
	          followers_count: user.followers_count,
	          friends_count: user.friends_count,
	          created_at: user.created_at
	        },
	        tweets: tweets,
	        sentiments: analyedData[0].docSentiment || {},
	        keywords: analyedData[1].keywords || {},
	        emotions: analyedData[2].docEmotions || {},
	        topTenWords: topTenWords,
	        topTwentyWords: topTwentyWords,
	        media: media
	      });
	    });
	  });
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;

	var _post = __webpack_require__(18);

	var _post2 = _interopRequireDefault(_post);

	var _cuid = __webpack_require__(59);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _limax = __webpack_require__(61);

	var _limax2 = _interopRequireDefault(_limax);

	var _sanitizeHtml = __webpack_require__(78);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}

	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }

	  var newPost = new _post2.default(req.body.post);

	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}

	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}

	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(31);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(8);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(30);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(33);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(11);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(29);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(35);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(36);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(24);

	var _reactRedux = __webpack_require__(1);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(34);

	var _reactRouter = __webpack_require__(10);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _MuiThemeProvider = __webpack_require__(7);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _styles = __webpack_require__(4);

	var _AppTheme = __webpack_require__(5);

	var _AppTheme2 = _interopRequireDefault(_AppTheme);

	var _routes = __webpack_require__(23);

	var _routes2 = _interopRequireDefault(_routes);

	var _analyzed = __webpack_require__(26);

	var _analyzed2 = _interopRequireDefault(_analyzed);

	var _cors = __webpack_require__(32);

	var _cors2 = _interopRequireDefault(_cors);

	var _fetchData = __webpack_require__(28);

	var _post = __webpack_require__(27);

	var _post2 = _interopRequireDefault(_post);

	var _dummyData = __webpack_require__(25);

	var _dummyData2 = _interopRequireDefault(_dummyData);

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


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }

	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});

	// Allow cors
	app.use((0, _cors2.default)());

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use('/api', _post2.default);

	// Analyzer
	app.use('/api', _analyzed2.default);

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(19);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _v = __webpack_require__(80);

	var _v2 = _interopRequireDefault(_v);

	var _blacklisted = __webpack_require__(56);

	var _blacklisted2 = _interopRequireDefault(_blacklisted);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var alchemy = new _v2.default({
	  // api_key: '0d2bb1f1c6673a4e7156a3e33857f4f634a6f8b4',
	  api_key: 'a9784f931077221398a75d527bf2168d80c91fb8'
	});

	/**
	 * @returns
	 */

	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	  }

	  _createClass(_class, [{
	    key: 'getMedia',


	    /**
	     * @returns
	     */
	    value: function getMedia(datum) {
	      if (_lodash2.default.has(datum, 'entities.media')) {
	        return datum.entities.media.map(function (_media) {
	          return {
	            id: _media.id,
	            media_url: _media.media_url,
	            media_url_https: _media.media_url_https,
	            url: _media.url,
	            type: _media.type
	          };
	        });
	      }
	      return null;
	    }

	    /**
	     * @param {string} str
	     */

	  }, {
	    key: 'getSentiments',
	    value: function getSentiments(str) {
	      return new Promise(function (fulfill, reject) {
	        alchemy.sentiment({ text: str }, function (err, response) {
	          if (!err) fulfill(response);
	          reject(err);
	        });
	      });
	    }

	    /**
	     * @param {string} str
	     */

	  }, {
	    key: 'getKeywords',
	    value: function getKeywords(str) {
	      return new Promise(function (fulfill, reject) {
	        alchemy.keywords({ text: str }, function (err, response) {
	          if (!err) fulfill(response);
	          reject(err);
	        });
	      });
	    }
	  }, {
	    key: 'getEmotions',
	    value: function getEmotions(str) {
	      return new Promise(function (fulfill, reject) {
	        alchemy.emotion({ text: str }, function (err, response) {
	          if (!err) fulfill(response);
	          reject(err);
	        });
	      });
	    }
	  }, {
	    key: 'getTopWords',
	    value: function getTopWords(_str, limit) {
	      var obj = {};
	      var results = {};
	      this.filterBlackList(this.filterLinks(_str)).split(' ').map(function (word) {
	        return !obj.hasOwnProperty(word) ? obj[word] = 1 : obj[word]++;
	      });

	      return this.sortObj(obj).map(function (keyVal, i) {
	        // eslint-disable-line
	        if (!results.hasOwnProperty(keyVal[0]) && i < limit) {
	          return Object.assign(results, _defineProperty({}, keyVal[0], keyVal[1]));
	        }
	      })[0];
	    }
	  }, {
	    key: 'sortObj',
	    value: function sortObj(obj) {
	      // convert object into array
	      var sortable = [];
	      for (var key in obj) {
	        // eslint-disable-line
	        if (obj.hasOwnProperty(key)) {
	          sortable.push([key, obj[key]]); // each item is an array in format [key, value]
	        }
	      }

	      // sort items by value
	      sortable.sort(function (a, b) {
	        return b[1] - a[1]; // compare numbers
	      });
	      return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
	    }

	    /**
	     * @param {string} str
	     */

	  }, {
	    key: 'watsonAll',
	    value: function watsonAll(str) {
	      var _this = this;

	      return new Promise(function (fulfill, reject) {
	        Promise.all([_this.getSentiments(str), _this.getKeywords(str), _this.getEmotions(str)]).catch(function (err) {
	          return reject(err);
	        }).then(function (response) {
	          return fulfill(response);
	        });
	      });
	    }

	    /**
	     * @returns
	     */

	  }, {
	    key: 'getTweetUser',
	    value: function getTweetUser() {
	      return {
	        name: this.tweet.user.name,
	        description: this.tweet.user.description,
	        profile_image_url: this.tweet.user.profile_image_url,
	        profile_image_url_https: this.tweet.user.profile_image_url_https,
	        location: this.tweet.user.location || '',
	        statuses_count: this.tweet.user.statuses_count
	      };
	    }

	    /**
	     * @param {any} text
	     * @returns
	     */

	  }, {
	    key: 'filterLinks',
	    value: function filterLinks(text) {
	      var matchLinks = [/(https?:\/\/[^\s]+)/g, /(http?:\/\/[^\s]+)/g];
	      return _lodash2.default.difference(text.toLowerCase().split(' '), matchLinks).join(' ');
	    }
	  }, {
	    key: 'filterBlackList',
	    value: function filterBlackList(text) {
	      return _lodash2.default.difference(text.toLowerCase().split(' '), _blacklisted2.default).join(' ');
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ['the', 'we\'ve', 'that\'s', 'it\'s', '-', 'to', 'is', 'and', 'a', 'of', 'on', 'rt', 'for', 'this', 'i', 'you', 'with', 'in', 'it', 'that', 'be', 'have', 'your', 'i\'m', '&amp', '&amp;', '–', '|', 'you\'re', 'my', 'me', 'like', 'at', 'an', 'just', 'if', 'from', 'can', 'are', 'i\'ll', 'they', 'no', 'has', 'by', 'not', 'when', 'his', 'a', 'about', 'above', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	var _moment = __webpack_require__(68);

	var _moment2 = _interopRequireDefault(_moment);

	var _twit = __webpack_require__(79);

	var _twit2 = _interopRequireDefault(_twit);

	var _lodash = __webpack_require__(19);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var T = new _twit2.default({ // TODO: Set keys in Env to abstract from source
	  consumer_key: 'KwdLVYC50lNo5WkGKpS9EhUeo',
	  consumer_secret: 'EFstm0bNmd4lM7sYB5Moj1J9utTLQstPnPtISRDOF8ll14jf2p',
	  access_token: '4287337822-DsuF11VrsS9GqbyP6BrAxwY8g6jBrMOB1QzYDkA',
	  access_token_secret: 'bKZLqf6Qbkpgh2yOwlwhWpWKHPTC5ntL4Jtw71Pq31gUd',
	  timeout_ms: 60 * 1000 });

	module.exports = {
	  T: T,
	  _: _lodash2.default,
	  moment: _moment2.default
	};

/***/ },
/* 58 */
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
/* 59 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("material-ui/AppBar");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Chip");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Drawer");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/colors");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("material-ui/utils/colorManipulator");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("react-tap-event-plugin");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("recharts");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("twit");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("watson-developer-cloud/alchemy-language/v1");

/***/ }
/******/ ]);