(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(147);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(145);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    increment: function increment() {
        return { type: 'INCREMENT_COUNT' };
    },
    decrement: function decrement() {
        return { type: 'DECREMENT_COUNT' };
    }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { count: 0 };
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    requestWeatherForecasts: function requestWeatherForecasts(startDateIndex) {
        return function (dispatch, getState) {
            // Only load data if it's something we don't already have (and are not already loading)
            if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
                var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])('/api/SampleData/WeatherForecasts?startDateIndex=' + startDateIndex).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask); // Ensure server-side prerendering waits for this to complete
                dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
            }
        };
    }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { startDateIndex: null, forecasts: [], isLoading: false };
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(16);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;




function configureStore(initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a), devToolsExtension ? devToolsExtension() : function (f) {
        return f;
    })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FetchData__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Counter__ = __webpack_require__(11);






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/counter', components: { body: __WEBPACK_IMPORTED_MODULE_5__components_Counter__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
        { path: '/fetchdata', components: { body: __WEBPACK_IMPORTED_MODULE_4__components_FetchData__["a" /* default */] } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '(:startDateIndex)' })
    )
));
// Enable Hot Module Replacement (HMR)
if (false) {
    module.hot.accept();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(138);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(144);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configureStore__ = __webpack_require__(6);







/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Match the incoming request against the list of client-side routes
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__configureStore__["a" /* default */])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* default */], location: params.location }, function (error, redirectLocation, renderProps) {
            if (error) {
                throw error;
            }
            // If there's a redirection, just send this information back to the host application
            if (redirectLocation) {
                resolve({ redirectUrl: redirectLocation.pathname });
                return;
            }
            // If it didn't match any route, renderProps will be undefined
            if (!renderProps) {
                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
            }
            // Build an instance of the application
            var app = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProps)
            );
            // Perform an initial render that will cause any async tasks (e.g., data access) to begin
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
            // Once the tasks are done, we can perform the final render
            // We also send the redux store state, so the client can continue execution where the server left off
            params.domainTasks.then(function () {
                resolve({
                    html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                    globals: { initialReduxState: store.getState() }
                });
            }, reject); // Also propagate any errors back into the host application
        });
    });
}));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Counter__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Counter'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This is a simple example of a React component.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'Current count: ',
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'strong',
                        null,
                        this.props.count
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { onClick: function onClick() {
                            _this2.props.increment();
                        } },
                    'Increment'
                )
            );
        }
    }]);

    return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
// Wire up the React component to the Redux store


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state.counter;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_2__store_Counter__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(Counter));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FetchData = function (_React$Component) {
    _inherits(FetchData, _React$Component);

    function FetchData() {
        _classCallCheck(this, FetchData);

        return _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).apply(this, arguments));
    }

    _createClass(FetchData, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // This method runs when the component is first added to the page
            var startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
            this.props.requestWeatherForecasts(startDateIndex);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // This method runs when incoming props (e.g., route params) change
            var startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
            this.props.requestWeatherForecasts(startDateIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Weather forecast'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This component demonstrates fetching data from the server and working with URL parameters.'
                ),
                this.renderForecastsTable(),
                this.renderPagination()
            );
        }
    }, {
        key: 'renderForecastsTable',
        value: function renderForecastsTable() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'table',
                { className: 'table' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'tr',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Date'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (C)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (F)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Summary'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'tbody',
                    null,
                    this.props.forecasts.map(function (forecast) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'tr',
                            { key: forecast.dateFormatted },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.dateFormatted
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureC
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureF
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.summary
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var prevStartDateIndex = this.props.startDateIndex - 5;
            var nextStartDateIndex = this.props.startDateIndex + 5;
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'p',
                { className: 'clearfix text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-left', to: '/fetchdata/' + prevStartDateIndex },
                    'Previous'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-right', to: '/fetchdata/' + nextStartDateIndex },
                    'Next'
                ),
                this.props.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'span',
                    null,
                    'Loading...'
                ) : []
            );
        }
    }]);

    return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.weatherForecasts;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(FetchData));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Hello, world!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'Welcome to your new single-page application, built with:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'ul',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://get.asp.net/' },
                            'ASP.NET Core'
                        ),
                        ' and ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' },
                            'C#'
                        ),
                        ' for cross-platform server-side code'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://facebook.github.io/react/' },
                            'React'
                        ),
                        ', ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'http://redux.js.org' },
                            'Redux'
                        ),
                        ', and ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'http://www.typescriptlang.org/' },
                            'TypeScript'
                        ),
                        ' for client-side code'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://webpack.github.io/' },
                            'Webpack'
                        ),
                        ' for building and bundling client-side resources'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'http://getbootstrap.com/' },
                            'Bootstrap'
                        ),
                        ' for layout and styling'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'To help you get started, we\'ve also set up:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'ul',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Client-side navigation'
                        ),
                        '. For example, click ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'em',
                            null,
                            'Counter'
                        ),
                        ' then ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'em',
                            null,
                            'Back'
                        ),
                        ' to return here.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Webpack dev middleware'
                        ),
                        '. In development mode, there\'s no need to run the ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'code',
                            null,
                            'webpack'
                        ),
                        ' build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Hot module replacement'
                        ),
                        '. In development mode, you don\'t even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Efficient production builds'
                        ),
                        '. In production mode, development-time features are disabled, and the ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'code',
                            null,
                            'webpack'
                        ),
                        ' build tool produces minified static CSS and JavaScript files.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Server-side prerendering'
                        ),
                        '. To optimize startup time, your React application is first rendered on the server. The initial HTML and state is then transferred to the browser, where client-side code picks up where the server left off.'
                    )
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'col-sm-3' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__NavMenu__["a" /* NavMenu */], null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'col-sm-9' },
                        this.props.body
                    )
                )
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NavMenu = function (_React$Component) {
    _inherits(NavMenu, _React$Component);

    function NavMenu() {
        _classCallCheck(this, NavMenu);

        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
    }

    _createClass(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'main-nav' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'navbar navbar-inverse' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'navbar-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'button',
                            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { className: 'navbar-brand', to: '/' },
                            'DockerBoard_Web'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'clearfix' }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'navbar-collapse collapse' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'ul',
                            { className: 'nav navbar-nav' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-home' }),
                                    ' Home'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/counter', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-education' }),
                                    ' Counter'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/fetchdata', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-th-list' }),
                                    ' Fetch data'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Counter__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    counter: __WEBPACK_IMPORTED_MODULE_1__Counter__["b" /* reducer */],
    weatherForecasts: __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__["b" /* reducer */]
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(141);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(146);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(148);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(76);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTc3YjlhYTZiNGIyNWM5NzNjYTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvV2VhdGhlckZvcmVjYXN0cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEscUM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNB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R0FBVSxXQU8zQzs7Ozs7Ozs7QUFDSDs7OztFQXBDaUMsZ0RBQ2pCLEU7Ozs7Ozs7Ozs7QUNKc0M7QUFDbEI7QUFRaUU7QUFDRTtBQUM1QztBQUN0RCxJQUFlO0FBQ1YsYUFBUyx5REFBUTtBQUNSLHNCQUFrQixrRUFDcEM7QUFIc0IsQ0FBakIsQzs7Ozs7O0FDWlAsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTc3YjlhYTZiNGIyNWM5NzNjYTciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclN0YXRlIHtcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxuLy8gVXNlIEB0eXBlTmFtZSBhbmQgaXNBY3Rpb25UeXBlIGZvciB0eXBlIGRldGVjdGlvbiB0aGF0IHdvcmtzIGV2ZW4gYWZ0ZXIgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uXG5cbmludGVyZmFjZSBJbmNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH1cbmludGVyZmFjZSBEZWNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdERUNSRU1FTlRfQ09VTlQnIH1cblxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXG50eXBlIEtub3duQWN0aW9uID0gSW5jcmVtZW50Q291bnRBY3Rpb24gfCBEZWNyZW1lbnRDb3VudEFjdGlvbjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgaW5jcmVtZW50OiAoKSA9PiA8SW5jcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnSU5DUkVNRU5UX0NPVU5UJyB9LFxuICAgIGRlY3JlbWVudDogKCkgPT4gPERlY3JlbWVudENvdW50QWN0aW9uPnsgdHlwZTogJ0RFQ1JFTUVOVF9DT1VOVCcgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q291bnRlclN0YXRlPiA9IChzdGF0ZTogQ291bnRlclN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdJTkNSRU1FTlRfQ09VTlQnOlxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50ICsgMSB9O1xuICAgICAgICBjYXNlICdERUNSRU1FTlRfQ09VTlQnOlxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xuICAgIH1cblxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxuICAgIHJldHVybiBzdGF0ZSB8fCB7IGNvdW50OiAwIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cblxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3RzU3RhdGUge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XG4gICAgc3VtbWFyeTogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxuXG5pbnRlcmZhY2UgUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xuICAgIHR5cGU6ICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJyxcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUmVjZWl2ZVdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xuICAgIHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJyxcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W11cbn1cblxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXG50eXBlIEtub3duQWN0aW9uID0gUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24gfCBSZWNlaXZlV2VhdGhlckZvcmVjYXN0c0FjdGlvbjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgcmVxdWVzdFdlYXRoZXJGb3JlY2FzdHM6IChzdGFydERhdGVJbmRleDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXG4gICAgICAgIGlmIChzdGFydERhdGVJbmRleCAhPT0gZ2V0U3RhdGUoKS53ZWF0aGVyRm9yZWNhc3RzLnN0YXJ0RGF0ZUluZGV4KSB7XG4gICAgICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzP3N0YXJ0RGF0ZUluZGV4PSR7IHN0YXJ0RGF0ZUluZGV4IH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFdlYXRoZXJGb3JlY2FzdFtdPilcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCwgZm9yZWNhc3RzOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXggfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxuXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgPSB7IHN0YXJ0RGF0ZUluZGV4OiBudWxsLCBmb3JlY2FzdHM6IFtdLCBpc0xvYWRpbmc6IGZhbHNlIH07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZT4gPSAoc3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUluZGV4OiBhY3Rpb24uc3RhcnREYXRlSW5kZXgsXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBzdGF0ZS5mb3JlY2FzdHMsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJzpcbiAgICAgICAgICAgIC8vIE9ubHkgYWNjZXB0IHRoZSBpbmNvbWluZyBkYXRhIGlmIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3QuIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHlcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdXQtb2Ytb3JkZXIgcmVzcG9uc2VzLlxuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGFydERhdGVJbmRleCA9PT0gc3RhdGUuc3RhcnREYXRlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IGFjdGlvbi5mb3JlY2FzdHMsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZT86IFN0b3JlLkFwcGxpY2F0aW9uU3RhdGUpIHtcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICApKGNyZWF0ZVN0b3JlKTtcblxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIoU3RvcmUucmVkdWNlcnMpO1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBSZWR1eC5TdG9yZTxTdG9yZS5BcHBsaWNhdGlvblN0YXRlPjtcblxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZT4oJy4vc3RvcmUnKTtcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8U3RvcmUuQXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBIaXN0b3J5QmFzZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBGZXRjaERhdGEgZnJvbSAnLi9jb21wb25lbnRzL0ZldGNoRGF0YSc7XG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvbXBvbmVudHMvQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IDxSb3V0ZSBjb21wb25lbnQ9eyBMYXlvdXQgfT5cbiAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBIb21lIH19IC8+XG4gICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnRzPXt7IGJvZHk6IENvdW50ZXIgfX0gLz5cbiAgICA8Um91dGUgcGF0aD0nL2ZldGNoZGF0YScgY29tcG9uZW50cz17eyBib2R5OiBGZXRjaERhdGEgfX0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScoOnN0YXJ0RGF0ZUluZGV4KScgLz4geyAvKiBPcHRpb25hbCByb3V0ZSBzZWdtZW50IHRoYXQgZG9lcyBub3QgYWZmZWN0IE5hdk1lbnUgaGlnaGxpZ2h0aW5nICovIH1cbiAgICA8L1JvdXRlPlxuPC9Sb3V0ZT47XG5cbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IG1hdGNoLCBSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG4gICAgICAgIG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbjogcGFyYW1zLmxvY2F0aW9uIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QgbWF0Y2ggYW55IHJvdXRlLCByZW5kZXJQcm9wcyB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCFyZW5kZXJQcm9wcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICckeyBwYXJhbXMudXJsIH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXG4gICAgICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xuXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxuICAgICAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQ291bnRlclN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50ZXInO1xuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcblxudHlwZSBDb3VudGVyUHJvcHMgPSBDb3VudGVyU3RvcmUuQ291bnRlclN0YXRlICYgdHlwZW9mIENvdW50ZXJTdG9yZS5hY3Rpb25DcmVhdG9ycztcblxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb3VudGVyUHJvcHMsIHZvaWQ+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxoMT5Db3VudGVyPC9oMT5cblxuICAgICAgICAgICAgPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGEgUmVhY3QgY29tcG9uZW50LjwvcD5cblxuICAgICAgICAgICAgPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57IHRoaXMucHJvcHMuY291bnQgfTwvc3Ryb25nPjwvcD5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLnByb3BzLmluY3JlbWVudCgpIH0gfT5JbmNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4gICAgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKENvdW50ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcblxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxudHlwZSBXZWF0aGVyRm9yZWNhc3RQcm9wcyA9XG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLldlYXRoZXJGb3JlY2FzdHNTdGF0ZSAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxuICAgICYgdHlwZW9mIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcbiAgICAmIHsgcGFyYW1zOiB7IHN0YXJ0RGF0ZUluZGV4OiBzdHJpbmcgfSB9OyAgICAgICAvLyAuLi4gcGx1cyBpbmNvbWluZyByb3V0aW5nIHBhcmFtZXRlcnNcblxuY2xhc3MgRmV0Y2hEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdlYXRoZXJGb3JlY2FzdFByb3BzLCB2b2lkPiB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBhZGRlZCB0byB0aGUgcGFnZVxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFdlYXRoZXJGb3JlY2FzdFByb3BzKSB7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiBpbmNvbWluZyBwcm9wcyAoZS5nLiwgcm91dGUgcGFyYW1zKSBjaGFuZ2VcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQobmV4dFByb3BzLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XG4gICAgICAgICAgICA8cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHdvcmtpbmcgd2l0aCBVUkwgcGFyYW1ldGVycy48L3A+XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9yZWNhc3RzVGFibGUoKSB9XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUGFnaW5hdGlvbigpIH1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRm9yZWNhc3RzVGFibGUoKSB7XG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZm9yZWNhc3RzLm1hcChmb3JlY2FzdCA9PlxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5zdW1tYXJ5IH08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJQYWdpbmF0aW9uKCkge1xuICAgICAgICBsZXQgcHJldlN0YXJ0RGF0ZUluZGV4ID0gdGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCAtIDU7XG4gICAgICAgIGxldCBuZXh0U3RhcnREYXRlSW5kZXggPSB0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4ICsgNTtcblxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjbGVhcmZpeCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLWxlZnQnIHRvPXsgYC9mZXRjaGRhdGEvJHsgcHJldlN0YXJ0RGF0ZUluZGV4IH1gIH0+UHJldmlvdXM8L0xpbms+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YCB9Pk5leHQ8L0xpbms+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNMb2FkaW5nID8gPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj4gOiBbXSB9XG4gICAgICAgIDwvcD47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUud2VhdGhlckZvcmVjYXN0cywgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbiAgICBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbikoRmV0Y2hEYXRhKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0ZldGNoRGF0YS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8dm9pZCwgdm9pZD4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxuICAgICAgICAgICAgPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0Lyc+UmVhY3Q8L2E+LCA8YSBocmVmPSdodHRwOi8vcmVkdXguanMub3JnJz5SZWR1eDwvYT4sIGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nPldlYnBhY2s8L2E+IGZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxwPlRvIGhlbHAgeW91IGdldCBzdGFydGVkLCB3ZSd2ZSBhbHNvIHNldCB1cDo8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCByZWJ1aWx0IFJlYWN0IGNvbXBvbmVudHMgd2lsbCBiZSBpbmplY3RlZCBkaXJlY3RseSBpbnRvIHlvdXIgcnVubmluZyBhcHBsaWNhdGlvbiwgcHJlc2VydmluZyBpdHMgbGl2ZSBzdGF0ZS48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIFRvIG9wdGltaXplIHN0YXJ0dXAgdGltZSwgeW91ciBSZWFjdCBhcHBsaWNhdGlvbiBpcyBmaXJzdCByZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgaW5pdGlhbCBIVE1MIGFuZCBzdGF0ZSBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyLCB3aGVyZSBjbGllbnQtc2lkZSBjb2RlIHBpY2tzIHVwIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmYuPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdk1lbnUgfSBmcm9tICcuL05hdk1lbnUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgdm9pZD4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMyc+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS05Jz5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmJvZHkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHZvaWQsIHZvaWQ+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17ICcvJyB9PkRvY2tlckJvYXJkX1dlYjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyAnLycgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy9jb3VudGVyJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLWVkdWNhdGlvbic+PC9zcGFuPiBDb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvZmV0Y2hkYXRhJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuL1dlYXRoZXJGb3JlY2FzdHMnO1xuaW1wb3J0ICogYXMgQ291bnRlciBmcm9tICcuL0NvdW50ZXInO1xuXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcbiAgICBjb3VudGVyOiBDb3VudGVyLkNvdW50ZXJTdGF0ZSxcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLldlYXRoZXJGb3JlY2FzdHNTdGF0ZVxufVxuXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgICBjb3VudGVyOiBDb3VudGVyLnJlZHVjZXIsXG4gICAgd2VhdGhlckZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0cy5yZWR1Y2VyXG59O1xuXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=