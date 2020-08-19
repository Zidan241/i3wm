/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FIVE_HUNDRED_MB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMonthString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dateOlderThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return storageGetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return storageGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return storageSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return storageClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getBrowserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getBrowserTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PlatformClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getPlatformClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isScreenRetina; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return versionString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getCountryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getSafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return delayPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nameOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ValueTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TAB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TB_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PB_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RB_BASE_URL; });
///<reference types="web-ext-types"/>
/**********************************
  Constants
 **********************************/
var FIVE_HUNDRED_MB = 524288000;
/**********************************
  Time
 **********************************/
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
function getMonthString() {
    return months[(new Date).getMonth()];
}
var Time;
(function (Time) {
    Time[Time["SECOND"] = 1000] = "SECOND";
    Time[Time["MINUTE"] = 60000] = "MINUTE";
    Time[Time["HOUR"] = 3600000] = "HOUR";
    Time[Time["DAY"] = 86400000] = "DAY";
})(Time || (Time = {}));
function dateOlderThan(date, timePeriod) {
    var currentMinusTimePeriod = Date.now() - timePeriod;
    return currentMinusTimePeriod > date;
}
/**********************************
  Storage
 **********************************/
function storageGetAll() {
    return browser.storage.local.get();
}
function storageGet(key) {
    return browser.storage.local.get(key);
}
function storageSet(keyStr, value) {
    var _a;
    return browser.storage.local.set((_a = {}, _a[keyStr] = value, _a));
}
function storageClear() {
    return browser.storage.local.clear();
}
/**********************************
  Browser and System Properties
 **********************************/
var BrowserType;
(function (BrowserType) {
    BrowserType[BrowserType["OPERA"] = 0] = "OPERA";
    BrowserType[BrowserType["FIREFOX"] = 1] = "FIREFOX";
    BrowserType[BrowserType["CHROME"] = 2] = "CHROME";
})(BrowserType || (BrowserType = {}));
function getBrowserType() {
    if (navigator.userAgent.indexOf("OPR") >= 0 || navigator.userAgent.indexOf("Opera") >= 0) {
        return BrowserType.OPERA;
    }
    else if (navigator.userAgent.indexOf("Firefox") >= 0) {
        return BrowserType.FIREFOX;
    }
    else {
        return BrowserType.CHROME;
    }
}
function getBrowserTitle() {
    var browser = getBrowserType();
    switch (browser) {
        case BrowserType.FIREFOX:
            return "Firefox";
        case BrowserType.OPERA:
            return "Opera";
        default:
            return "Chrome";
    }
}
var PlatformClass;
(function (PlatformClass) {
    PlatformClass["WINDOWS"] = "Windows";
    PlatformClass["LINUX"] = "Linux";
    PlatformClass["MAC"] = "Mac";
})(PlatformClass || (PlatformClass = {}));
function getPlatformClass() {
    if (window.navigator.platform.indexOf("Win") != -1) {
        return PlatformClass.WINDOWS;
    }
    else if (window.navigator.platform.indexOf("Linux") != -1) {
        return PlatformClass.LINUX;
    }
    return PlatformClass.MAC;
}
function isScreenRetina() {
    return window.devicePixelRatio > 1;
}
var versionString = (function () {
    var prefix = (getBrowserType() === BrowserType.FIREFOX) ? "f" :
        (getBrowserType() === BrowserType.CHROME) ? "c" : "o";
    var number = browser.runtime.getManifest().version;
    return prefix + number;
})();
/**********************************
  Country Names
 **********************************/
function getCountryName(countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    }
    else {
        return countryCode;
    }
}
var isoCountries = {
    'AF': 'Afghanistan',
    'AX': 'Aland Islands',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AS': 'American Samoa',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AI': 'Anguilla',
    'AQ': 'Antarctica',
    'AG': 'Antigua And Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AW': 'Aruba',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BA': 'Bosnia And Herzegovina',
    'BW': 'Botswana',
    'BV': 'Bouvet Island',
    'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'CV': 'Cape Verde',
    'KY': 'Cayman Islands',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CG': 'Congo',
    'CD': 'Congo, Democratic Republic',
    'CK': 'Cook Islands',
    'CR': 'Costa Rica',
    'CI': 'Cote D\'Ivoire',
    'HR': 'Croatia',
    'CU': 'Cuba',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'ET': 'Ethiopia',
    'FK': 'Falkland Islands (Malvinas)',
    'FO': 'Faroe Islands',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guiana',
    'PF': 'French Polynesia',
    'TF': 'French Southern Territories',
    'GA': 'Gabon',
    'GM': 'Gambia',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GP': 'Guadeloupe',
    'GU': 'Guam',
    'GT': 'Guatemala',
    'GG': 'Guernsey',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HM': 'Heard Island & Mcdonald Islands',
    'VA': 'Holy See (Vatican City State)',
    'HN': 'Honduras',
    'HK': 'Hong Kong',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran, Islamic Republic Of',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IM': 'Isle Of Man',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JE': 'Jersey',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KR': 'Korea',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': 'Lao People\'s Democratic Republic',
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libyan Arab Jamahiriya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MO': 'Macao',
    'MK': 'Macedonia',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands',
    'MQ': 'Martinique',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'YT': 'Mayotte',
    'MX': 'Mexico',
    'FM': 'Micronesia, Federated States Of',
    'MD': 'Moldova',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MS': 'Montserrat',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands',
    'AN': 'Netherlands Antilles',
    'NC': 'New Caledonia',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'NU': 'Niue',
    'NF': 'Norfolk Island',
    'MP': 'Northern Mariana Islands',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestinian Territory, Occupied',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PN': 'Pitcairn',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'RE': 'Reunion',
    'RO': 'Romania',
    'RU': 'Russian Federation',
    'RW': 'Rwanda',
    'BL': 'Saint Barthelemy',
    'SH': 'Saint Helena',
    'KN': 'Saint Kitts And Nevis',
    'LC': 'Saint Lucia',
    'MF': 'Saint Martin',
    'PM': 'Saint Pierre And Miquelon',
    'VC': 'Saint Vincent And Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome And Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'GS': 'South Georgia And Sandwich Isl.',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SJ': 'Svalbard And Jan Mayen',
    'SZ': 'Swaziland',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TK': 'Tokelau',
    'TO': 'Tonga',
    'TT': 'Trinidad And Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TC': 'Turks And Caicos Islands',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom',
    'US': 'United States',
    'UM': 'United States Outlying Islands',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela',
    'VN': 'Viet Nam',
    'VG': 'Virgin Islands, British',
    'VI': 'Virgin Islands, U.S.',
    'WF': 'Wallis And Futuna',
    'EH': 'Western Sahara',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe'
};
/**********************************
  Misc Helper Functions
 **********************************/
function getSafe(fn) {
    try {
        return fn();
    }
    catch (e) {
        return undefined;
    }
}
function delayPromise(time) {
    return function (result) { return new Promise(function (resolve) { return setTimeout(function () { return resolve(result); }, time); }); };
}
function uuid() {
    var nums = function (len) { return Array(len).fill(16).map(function (n) { return Math.floor((Math.random() * n)); }); };
    return nums(8).concat(["-"])
        .concat(nums(4)).concat(["-4"])
        .concat(nums(3)).concat(["-"])
        .concat([(0x8 | (0x3 & Math.floor(Math.random() * 16)))])
        .concat(nums(3)).concat(["-"])
        .concat(nums(12))
        .map(function (element) { return String(element); })
        .join("");
}
// from https://schneidenbach.gitbooks.io/typescript-cookbook/nameof-operator.html
var nameOf = function (name) { return name; };
/**********************************
  Value Tracker
 **********************************/
var ValueTracker = /** @class */ (function () {
    function ValueTracker(initial) {
        this._value = undefined;
        this._updateTime = 0;
        this._value = initial;
    }
    ValueTracker.prototype.reset = function (initial) {
        this._value = initial !== undefined ? initial : undefined;
        this._updateTime = 0;
    };
    Object.defineProperty(ValueTracker.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = newValue;
            this._updateTime = Date.now();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueTracker.prototype, "lastUpdated", {
        get: function () {
            return this._updateTime;
        },
        enumerable: true,
        configurable: true
    });
    ValueTracker.prototype.isNil = function () {
        return this._value === undefined;
    };
    return ValueTracker;
}());

/**********************************
  Urls
 **********************************/
var PROD = "production";
var currentEnv = "production";
var TAB_URL = (function () {
    if (currentEnv === PROD) {
        return "https://www.tunnelbear.com";
    }
    return "https://staging.tunnelbear.com";
})();
var TB_API_URL = (function () {
    if (currentEnv === PROD) {
        return "https://api.tunnelbear.com";
    }
    return "https://staging-api.tunnelbear.com";
})();
var PB_API_URL = (function () {
    if (currentEnv === PROD) {
        return "https://api.polargrizzly.com";
    }
    return "https://staging.polargrizzly.com";
})();
var RB_BASE_URL = (function () {
    if (currentEnv === PROD) {
        return "https://www.remembear.com";
    }
    return "https://staging.remembear.com";
})();


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Level; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLogs; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var LEVEL_STR = "level";
var Level;
(function (Level) {
    Level[Level["DEBUG"] = 0] = "DEBUG";
    Level[Level["INFO"] = 1] = "INFO";
    Level[Level["WARN"] = 2] = "WARN";
})(Level || (Level = {}));
;
var logLevel = Level.WARN;
var pendingLines = [];
var process = "";
function addListener() {
    browser.storage.onChanged.addListener(function (changes) {
        var levelChange = _utils__WEBPACK_IMPORTED_MODULE_0__[/* getSafe */ "q"](function () { return changes[LEVEL_STR].newValue; });
        if (levelChange) {
            console.log("[Diagnostics] level-changed: " + levelChange);
            logLevel = Level[levelChange];
        }
    });
}
function trimDiagnostics(diagnostics) {
    if (diagnostics !== undefined) {
        var entries = diagnostics.split("\n").length;
        if (entries > 100) {
            return diagnostics.replace(/(.*\n){50}/, "");
        }
        else {
            return diagnostics;
        }
    }
    return "";
}
function appendStorage(lines) {
    var diagString = "diagnostics" + process;
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* storageGet */ "u"](diagString).then(function (result) {
        var diagnostics = trimDiagnostics(result[diagString]);
        var newLines = lines.join("");
        return diagnostics + newLines;
    }).then(function (newDiagnostics) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__[/* storageSet */ "w"](diagString, newDiagnostics);
    });
}
function logStorage(message) {
    if (pendingLines.push(message + "\n") >= 10) {
        appendStorage(pendingLines.slice());
        pendingLines = [];
    }
}
function logConsoleWarn(message) {
    console.warn(message);
}
function logConsoleInfo(message) {
    console.log(message);
}
function getTimeString() {
    var currentTime = new Date();
    return currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
}
function logOutputs(level, message) {
    var timeString = getTimeString();
    var line = "[TB] " + Level[level] + " :" + timeString + " - " + message;
    if (level == Level.WARN) {
        logConsoleWarn(line);
    }
    else {
        logConsoleInfo(line);
    }
    logStorage(line);
}
function init(src) {
    addListener();
    process = src;
    _utils__WEBPACK_IMPORTED_MODULE_0__[/* storageGet */ "u"](LEVEL_STR).then(function (result) {
        var level = result[LEVEL_STR];
        if (level !== undefined) {
            logLevel = level;
        }
    });
}
function log(level, message) {
    var currentLevel = logLevel;
    var shouldLog = (level == Level.WARN) || (currentLevel == Level.DEBUG) ||
        (currentLevel == Level.INFO && level != Level.DEBUG);
    if (shouldLog) {
        logOutputs(level, message);
    }
}
function getLogs() {
    return appendStorage(pendingLines).then(function () {
        return _utils__WEBPACK_IMPORTED_MODULE_0__[/* storageGetAll */ "v"]();
    }).then(function (result) {
        return result.diagnosticsBackground;
    });
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(48);
var buildURL = __webpack_require__(50);
var parseHeaders = __webpack_require__(51);
var isURLSameOrigin = __webpack_require__(52);
var createError = __webpack_require__(13);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(53);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(49);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon_on.png";

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon_on2x.png";

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon_off.png";

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon_off2x.png";

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/common/logger.ts
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./src/common/utils.ts
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./src/common/ports.ts
var ports = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/common/ajax.ts



function log(level, message) {
    logger["d" /* log */](level, "[Ajax] " + message);
}
var rateLimitCount = 20;
var rateLimitExpiry = 30;
var maxNbCalls = 40;
var ajax_AjaxService = /** @class */ (function () {
    function AjaxService(baseURL) {
        this.lastCalls = [];
        this.cancelTokenSource = axios_default.a.CancelToken.source();
        this.axiosInstance = axios_default.a.create({ baseURL: baseURL });
    }
    AjaxService.prototype.addCall = function (url) {
        this.lastCalls.push({ url: url, time: Date.now() });
    };
    AjaxService.prototype.trimCalls = function () {
        if (this.lastCalls.length > maxNbCalls) {
            log(logger["a" /* Level */].DEBUG, "------- trimming calls -------");
            this.lastCalls.shift();
        }
    };
    AjaxService.prototype.isRecentCall = function (call, url) {
        var sameKey = url === call.url;
        var diffSeconds = (Date.now() - call.time) / utils["h" /* Time */].SECOND;
        var isRecent = diffSeconds < rateLimitExpiry;
        return sameKey && isRecent;
    };
    AjaxService.prototype.canCall = function (url) {
        var _this = this;
        this.trimCalls();
        var callOccurences = this.lastCalls.filter(function (call) { return _this.isRecentCall(call, url); }).length;
        log(logger["a" /* Level */].DEBUG, "call occurrences for " + url + " is: " + callOccurences);
        if (callOccurences > rateLimitCount) {
            return false;
        }
        return true;
    };
    AjaxService.prototype.makeAjaxRequest = function (method, req) {
        if (!req.ignoreRateLimiting) {
            this.addCall(req.url);
        }
        if (!req.ignoreRateLimiting && !this.canCall(req.url)) {
            log(logger["a" /* Level */].WARN, "rate limiting call made to : " + req.url);
            return Promise.reject("rate limited call to : " + req.url);
        }
        var config = {
            method: method,
            url: req.url,
            responseType: "json"
        };
        if (req.params !== undefined) {
            config.params = req.params;
        }
        if (req.timeout !== undefined) {
            config.timeout = req.timeout;
        }
        if (req.data !== undefined) {
            config.data = req.data;
        }
        if (req.headers !== undefined) {
            config.headers = req.headers;
        }
        config.cancelToken = this.cancelTokenSource.token;
        log(logger["a" /* Level */].DEBUG, "call made to : " + req.url);
        return this.axiosInstance(config);
    };
    AjaxService.prototype.setRequestInterceptor = function (interceptor) {
        this.axiosInstance.interceptors.request.use(interceptor);
    };
    AjaxService.prototype.setResponseInterceptor = function (interceptor) {
        this.axiosInstance.interceptors.response.use(interceptor);
    };
    AjaxService.prototype.post = function (req) {
        return this.makeAjaxRequest("post", req).then(function (resp) {
            return { body: resp.data, headers: resp.headers };
        });
    };
    AjaxService.prototype.get = function (req) {
        return this.makeAjaxRequest("get", req).then(function (resp) {
            return { body: resp.data, headers: resp.headers };
        });
    };
    AjaxService.prototype.cancelCurrentRequests = function () {
        this.cancelTokenSource.cancel();
        this.cancelTokenSource = axios_default.a.CancelToken.source();
    };
    return AjaxService;
}());


// CONCATENATED MODULE: ./src/background/state.ts
///<reference path="../../typings/tunnelbear/index.d.ts"/>


function getPopupState() {
    var location = { lat: 0, lon: 0 };
    var serversRegion = appState.regions.availableRegions.get(appState.vpns.regionId);
    if (serversRegion && serversRegion.country_iso === appState.currentCountry) {
        location.lat = serversRegion.location.lat;
        location.lon = serversRegion.location.lon;
    }
    return {
        authenticated: appState.isAuthenticated,
        isToggled: appState.isToggled,
        countries: appState.regions.availableCountries,
        selectedCountry: {
            code: appState.currentCountry,
            lat: location.lat,
            lon: location.lon
        },
        emailConfirmed: appState.accountInfo.emailConfirmed,
        isFullVersion: appState.user.isFullVersion,
        twitterPromoAvailable: appState.bonusInfo.twitterPromoAvailable,
        canShowTwitter: appState.canShowTwitter,
        canShowRememBear: appState.canShowRememBear,
        dataCap: appState.accountInfo.maxBandwidth,
        dataAllowed: appState.accountInfo.bandwidthAvailable,
        permissionsError: appState.permissions
    };
}
var appState = {
    isToggled: false,
    isAuthenticated: false,
    currentCountry: "US",
    canShowTwitter: false,
    canShowRememBear: false,
    accountInfo: {
        emailConfirmed: true,
        bandwidthAvailable: utils["b" /* FIVE_HUNDRED_MB */],
        maxBandwidth: utils["b" /* FIVE_HUNDRED_MB */]
    },
    bonusInfo: {
        twitterPromoAvailable: false,
        templateTweet: ""
    },
    user: {
        isFullVersion: true,
        accountStatus: "NORMAL",
        dataCap: utils["b" /* FIVE_HUNDRED_MB */],
        vpnToken: "",
    },
    regions: {
        availableCountries: ["US"],
        availableRegions: new Map()
    },
    vpns: {
        regionId: -1
    },
    permissions: {
        error: false,
        details: ""
    },
    originLocation: {
        latitude: 0,
        longitude: 0,
        city: "",
        countryName: ""
    }
};
function isDataDepleted() {
    var limitReached = appState.user.accountStatus === "LIMIT_REACHED";
    var noBandwidth = appState.accountInfo.bandwidthAvailable <= 0;
    return appState.user.isFullVersion ? false : limitReached || noBandwidth;
}
function resetState() {
    appState.isAuthenticated = false;
    appState.isToggled = false;
    appState.user.vpnToken = "";
}
;
function setBonusInfoResponse(bonusInfoResponse) {
    appState.bonusInfo = {
        twitterPromoAvailable: bonusInfoResponse.twitterBonus.state === "AVAILABLE",
        templateTweet: bonusInfoResponse.twitterBonus.templateTweet
    };
}
function setAccountInfoResponse(accountInfoResponse) {
    appState.accountInfo = {
        emailConfirmed: accountInfoResponse.emailConfirmed,
        bandwidthAvailable: accountInfoResponse.bandwidthAvailable,
        maxBandwidth: accountInfoResponse.maxBandwidth
    };
}
function setUserResponse(userResponse) {
    var dataCap = userResponse.data_limit_bytes < 0 ? utils["b" /* FIVE_HUNDRED_MB */] : userResponse.data_limit_bytes;
    appState.user = {
        isFullVersion: userResponse.is_data_unlimited,
        accountStatus: userResponse.account_status,
        dataCap: dataCap,
        vpnToken: userResponse.vpn_token
    };
}
function setRegionsResponse(regionsResponse) {
    var countries = regionsResponse.map(function (region) { return region.country_iso; })
        .filter(function (countryCode, idx, arr) { return arr.indexOf(countryCode) === idx; })
        .sort(function (a, b) {
        var fullNameA = utils["n" /* getCountryName */](a).toLocaleLowerCase();
        var fullNameB = utils["n" /* getCountryName */](b).toLocaleLowerCase();
        return fullNameA.localeCompare(fullNameB);
    });
    var regions = new Map();
    regionsResponse.forEach(function (region) { return regions.set(region.id, region); });
    appState.regions = {
        availableRegions: regions,
        availableCountries: countries
    };
}
function updateExtensionState(force) {
    if (appState.isToggled || force) {
        var accountInfoPromise = getAccountInfo();
        var bonusInfoPromise = getBonusInfo();
        var userPromise = getUser();
        var regionsPromise = getRegions();
        var accountInfoResponse_1;
        var bonusInfoResponse_1;
        var userResponse_1;
        var regionsResponse_1;
        return Promise.all([accountInfoPromise, bonusInfoPromise, userPromise, regionsPromise]).then(function (responses) {
            accountInfoResponse_1 = responses[0], bonusInfoResponse_1 = responses[1], userResponse_1 = responses[2], regionsResponse_1 = responses[3];
            setAccountInfoResponse(accountInfoResponse_1);
            setBonusInfoResponse(bonusInfoResponse_1);
            setUserResponse(userResponse_1);
            setRegionsResponse(regionsResponse_1);
        });
    }
}

// CONCATENATED MODULE: ./src/background/tabs.ts

function outOfData() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/upgrade?notice=no_data&v=" + utils["y" /* versionString */] });
}
function lowAccount(emailConfirmed) {
    if (emailConfirmed === true) {
        browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/upgrade?notice=low_data&v=" + utils["y" /* versionString */] });
    }
    else {
        browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/upgrade?notice=confirm_email&v=" + utils["y" /* versionString */] });
    }
}
function upgradeAccount(emailConfirmed) {
    if (emailConfirmed === true) {
        browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/upgrade?v=" + utils["y" /* versionString */] });
    }
    else {
        browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/upgrade?notice=confirm_email&v=" + utils["y" /* versionString */] });
    }
}
function openHelp() {
    browser.tabs.create({ url: "https://help.tunnelbear.com" });
}
function openAccount() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/overview" });
}
function openFeedback() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/support/contact.html" });
}
function openReview() {
    if (utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].OPERA) {
        browser.tabs.create({ url: "https://addons.opera.com/extensions/details/tunnelbear/" });
    }
    else if (utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].CHROME) {
        browser.tabs.create({ url: "https://chrome.google.com/webstore/detail/tunnelbear/" + browser.runtime.id + "/reviews" });
    }
    else {
        browser.tabs.create({ url: "https://addons.mozilla.org/en-US/firefox/addon/" + "tunnelbear-vpn-firefox" });
    }
}
function openExtensions() {
    if (utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].CHROME) {
        browser.tabs.create({ url: "chrome://extensions/?id=" + browser.runtime.id });
    }
    else if (utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].OPERA) {
        browser.tabs.create({ url: "opera://extensions" });
    }
    else {
        browser.tabs.create({ url: "about:addons" });
    }
}
function openPrivacyPolicy() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/privacy-policy" });
}
function openTwitter(tweet) {
    browser.tabs.update(undefined, { url: "https://twitter.com/intent/tweet?text=" + tweet });
}
function openAccountTweet() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/twitter" });
}
function openLogin() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/login?v=" + utils["y" /* versionString */] });
}
function openSignup() {
    browser.tabs.create({ url: utils["f" /* TAB_URL */] + "/account/signup?v=" + utils["y" /* versionString */] });
}
function openRememBear() {
    browser.tabs.create({ url: utils["e" /* RB_BASE_URL */] + "?utm_source=tunnelbear-extension" });
}
function uninstallFeedbackUrl() {
    return utils["f" /* TAB_URL */] + "/account/feedback";
}

// CONCATENATED MODULE: ./src/background/proxy.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var browserPrivacy = browser.privacy;
var browserProxy = browser.proxy;
function proxy_log(level, message) {
    logger["d" /* log */](level, "[Proxy] " + message);
}
var DIRECT = { type: "direct" };
var proxy_ProxyServiceBase = /** @class */ (function () {
    function ProxyServiceBase() {
        this.lastServers = [];
    }
    ProxyServiceBase.prototype.privacySettingsEnable = function () {
        proxy_log(logger["a" /* Level */].DEBUG, "[Background - Proxy] : Enabling");
        if (browserPrivacy.network.webRTCMultipleRoutesEnabled !== undefined) {
            browserPrivacy.network.webRTCMultipleRoutesEnabled.set({ value: false });
        }
        if (browserPrivacy.network.webRTCNonProxiedUdpEnabled !== undefined) {
            browserPrivacy.network.webRTCNonProxiedUdpEnabled.set({ value: false });
        }
        if (browserPrivacy.network.webRTCIPHandlingPolicy !== undefined) {
            if (utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].FIREFOX) {
                browserPrivacy.network.webRTCIPHandlingPolicy.set({ value: "proxy_only" });
            }
            else {
                browserPrivacy.network.webRTCIPHandlingPolicy.set({ value: "disable_non_proxied_udp" });
            }
        }
        if (browserPrivacy.network.networkPredictionEnabled !== undefined) {
            browserPrivacy.network.networkPredictionEnabled.set({ value: false });
        }
    };
    ProxyServiceBase.prototype.privacySettingsDisable = function () {
        proxy_log(logger["a" /* Level */].INFO, "[Background - Proxy] : Disabling");
        if (browserPrivacy.network.webRTCMultipleRoutesEnabled !== undefined) {
            browserPrivacy.network.webRTCMultipleRoutesEnabled.set({ value: true });
        }
        if (browserPrivacy.network.webRTCNonProxiedUdpEnabled !== undefined) {
            browserPrivacy.network.webRTCNonProxiedUdpEnabled.set({ value: true });
        }
        if (browserPrivacy.network.webRTCIPHandlingPolicy !== undefined) {
            browserPrivacy.network.webRTCIPHandlingPolicy.set({ value: "default" });
        }
        if (browserPrivacy.network.networkPredictionEnabled !== undefined) {
            browserPrivacy.network.networkPredictionEnabled.set({ value: true });
        }
    };
    return ProxyServiceBase;
}());
var proxy_ChromeProxyService = /** @class */ (function (_super) {
    __extends(ChromeProxyService, _super);
    function ChromeProxyService() {
        var _this = _super.call(this) || this;
        chrome.proxy.onProxyError.addListener(function (error) {
            proxy_log(logger["a" /* Level */].WARN, "proxy error" + JSON.stringify(_this.lastServers));
            proxy_log(logger["a" /* Level */].WARN, JSON.stringify(error));
        });
        chrome.webRequest.onAuthRequired.addListener(function (details, callback) {
            proxy_log(logger["a" /* Level */].DEBUG, "---- onAuthRequired ---");
            var proxy = details.challenger.host;
            proxy_log(logger["a" /* Level */].INFO, "onAuthRequired for proxy: " + proxy);
            if (proxy.endsWith(".lazerpenguin.com")) {
                var token = appState.user.vpnToken;
                if (callback !== undefined && token !== "") {
                    callback({ authCredentials: { username: token, password: token } });
                }
                else {
                    callback({ cancel: true });
                }
            }
            else {
                if (callback !== undefined) {
                    callback({});
                }
            }
        }, { urls: ["<all_urls>"] }, ["asyncBlocking"]);
        return _this;
    }
    ChromeProxyService.prototype.enableProxy = function (servers) {
        this.lastServers = servers;
        this.privacySettingsEnable();
        this.chromeSetProxy(servers);
    };
    ChromeProxyService.prototype.disableProxy = function () {
        this.lastServers = [];
        this.privacySettingsDisable();
        this.chromeResetProxy();
    };
    ChromeProxyService.prototype.proxiesString = function (servers) {
        return servers.map(function (server) { return "HTTPS " + server + ":8080;"; }).join(" ");
    };
    ChromeProxyService.prototype.chromeSetProxy = function (servers) {
        var proxies = this.proxiesString(servers);
        var pacString = "function FindProxyForURL(url, host) {\n      if (shExpMatch(url, '" + utils["g" /* TB_API_URL */] + "/*')) {\n        return 'DIRECT';\n      }\n      if (shExpMatch(url, '" + utils["c" /* PB_API_URL */] + "/*')) {\n        return 'DIRECT';\n      }\n      if (shExpMatch(host, 'localhost')) {\n        return 'DIRECT';\n      }\n      if (shExpMatch(host, '127.0.0.1')){\n        return 'DIRECT';\n      }\n      return '" + proxies + "';\n    };";
        chrome.proxy.settings.set({
            value: { mode: "pac_script", pacScript: { data: pacString } },
            scope: "regular"
        }, function () { });
    };
    ChromeProxyService.prototype.chromeResetProxy = function () {
        chrome.proxy.settings.set({
            value: { mode: "direct" },
            scope: "regular"
        }, function (details) { return proxy_log(logger["a" /* Level */].DEBUG, JSON.stringify(details)); });
    };
    ChromeProxyService.prototype.evaluatePermissions = function () {
        return new Promise(function (resolve) {
            return chrome.proxy.settings.get({ incognito: false }, function (details) {
                var levelOfControl = details.levelOfControl;
                var hasPermissions = !(levelOfControl === "controlled_by_other_extensions" || levelOfControl === "not_controllable");
                if (hasPermissions) {
                    resolve({ error: false });
                }
                else {
                    chrome.management.getAll(function (apps) {
                        var culprit = apps
                            .filter(function (app) { return app.id !== chrome.runtime.id; })
                            .filter(function (app) { return app.permissions.indexOf("proxy") >= 0; })[0];
                        var icon16 = (culprit.icons !== undefined && culprit.icons.length > 0) ? culprit.icons[0] : {};
                        var icon32 = (culprit.icons !== undefined && culprit.icons.length > 1) ? culprit.icons[1] : icon16;
                        var icon = utils["r" /* isScreenRetina */]() ? icon32 : icon16;
                        proxy_log(logger["a" /* Level */].DEBUG, "Found conflicting extension: " + JSON.stringify(culprit));
                        resolve({ error: true, details: culprit.shortName, icon: icon });
                    });
                }
            });
        });
    };
    return ChromeProxyService;
}(proxy_ProxyServiceBase));
var proxy_FirefoxProxyService = /** @class */ (function (_super) {
    __extends(FirefoxProxyService, _super);
    function FirefoxProxyService() {
        var _this = _super.call(this) || this;
        _this.pendingRequests = new Set();
        browserProxy.onError.addListener(function (error) {
            proxy_log(logger["a" /* Level */].WARN, "proxy error" + JSON.stringify(_this.lastServers));
            proxy_log(logger["a" /* Level */].WARN, JSON.stringify(error));
        });
        var requestComplete = function (details) { return _this.pendingRequests.delete(details.requestId); };
        browser.webRequest.onErrorOccurred.addListener(requestComplete, { urls: ["<all_urls>"] });
        browser.webRequest.onCompleted.addListener(requestComplete, { urls: ["<all_urls>"] });
        browser.webRequest.onAuthRequired.addListener(function (details) {
            proxy_log(logger["a" /* Level */].DEBUG, "---- onAuthRequired ---");
            var proxyInfo = details.proxyInfo;
            var requestId = details.requestId;
            if (proxyInfo !== undefined) {
                var proxy = proxyInfo.host;
                if (_this.pendingRequests.has(requestId)) {
                    proxy_log(logger["a" /* Level */].WARN, "Bad credentials for request: " + requestId);
                    return { cancel: true };
                }
                else if (proxy.endsWith(".lazerpenguin.com")) {
                    _this.pendingRequests.add(requestId);
                    var token = appState.user.vpnToken;
                    if (token !== "") {
                        return { authCredentials: { username: token, password: token } };
                    }
                    else {
                        return { cancel: true };
                    }
                }
            }
        }, { urls: ["<all_urls>"] }, ["blocking"]);
        return _this;
    }
    FirefoxProxyService.prototype.enableProxy = function (servers) {
        this.lastServers = servers;
        this.privacySettingsEnable();
        this.firefoxSetProxy(servers);
    };
    FirefoxProxyService.prototype.disableProxy = function () {
        this.lastServers = [];
        this.privacySettingsDisable();
        this.firefoxResetProxy();
    };
    FirefoxProxyService.prototype.makeProxyRequestListener = function (servers) {
        var proxyInfo = servers.map(function (server) { return { type: "https", host: server, port: "8080" }; });
        var tbHost = utils["g" /* TB_API_URL */].replace("https://", "");
        var pbHost = utils["c" /* PB_API_URL */].replace("https://", "");
        return function (details) {
            var url = new URL(details.url);
            if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
                return DIRECT;
            }
            if (url.protocol === "https:" && url.hostname === tbHost) {
                return DIRECT;
            }
            if (url.protocol === "https:" && url.hostname === pbHost) {
                return DIRECT;
            }
            return proxyInfo;
        };
    };
    FirefoxProxyService.prototype.firefoxSetProxy = function (servers) {
        this.firefoxResetProxy();
        this.proxyRequestListener = this.makeProxyRequestListener(servers);
        browserProxy.onRequest.addListener(this.proxyRequestListener, { urls: ["<all_urls>"] });
    };
    FirefoxProxyService.prototype.firefoxResetProxy = function () {
        if (this.proxyRequestListener !== undefined) {
            browserProxy.onRequest.removeListener(this.proxyRequestListener);
            this.proxyRequestListener = undefined;
        }
    };
    FirefoxProxyService.prototype.evaluatePermissions = function () {
        // Firefox doesn't seem to have a way to check if we are the only extension controlling the proxy
        return Promise.resolve({ error: false });
    };
    return FirefoxProxyService;
}(proxy_ProxyServiceBase));
var proxyServiceInstance = (function () {
    var isFirefox = utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].FIREFOX;
    return isFirefox ? new proxy_FirefoxProxyService() : new proxy_ChromeProxyService();
})();
function getInstance() {
    return proxyServiceInstance;
}

// CONCATENATED MODULE: ./src/background/servers.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var servers_ServerManager = /** @class */ (function () {
    function ServerManager() {
        this.currentServersCountry = "";
        this.currentServers = new utils["i" /* ValueTracker */]();
    }
    ServerManager.prototype.getServers = function (country, forceFetch) {
        return __awaiter(this, void 0, void 0, function () {
            var servers, e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        servers = this.currentServers.value;
                        if (!(country !== this.currentServersCountry || forceFetch === true || this.currentServers.isNil())) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fetchCountryServersFromBackend(country)];
                    case 2:
                        servers = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!this.shouldFetchServers(this.currentServers.lastUpdated)) return [3 /*break*/, 9];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.fetchCountryServersFromBackend(country)];
                    case 7:
                        servers = _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_2 = _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, servers.vpns.map(function (vpn) { return vpn.url; })];
                }
            });
        });
    };
    ServerManager.prototype.shouldFetchServers = function (lastRotatedTime) {
        var interval = utils["h" /* Time */].HOUR * 2;
        return utils["j" /* dateOlderThan */](lastRotatedTime, interval);
    };
    ServerManager.prototype.fetchCountryServersFromBackend = function (country) {
        var _this = this;
        return getServers(country).then(function (response) {
            if (response === undefined || response.vpns.length === 0) {
                throw "No servers in response";
            }
            _this.currentServersCountry = country;
            _this.currentServers.value = response;
            appState.vpns.regionId = response.region_id;
            return response;
        });
    };
    return ServerManager;
}());
var serverManagerInstance = new servers_ServerManager();
function servers_getInstance() {
    return serverManagerInstance;
}

// CONCATENATED MODULE: ./src/background/badge.ts



function badge_log(level, message) {
    logger["d" /* log */](level, "[Badge] " + message);
}
var IconType;
(function (IconType) {
    IconType[IconType["NONE"] = 0] = "NONE";
    IconType[IconType["OFF"] = 1] = "OFF";
    IconType[IconType["WARN"] = 2] = "WARN";
    IconType[IconType["ALERT"] = 3] = "ALERT";
})(IconType || (IconType = {}));
var badge_IconBadgeManager = /** @class */ (function () {
    function IconBadgeManager() {
    }
    IconBadgeManager.prototype.toggleIcon = function (isToggled) {
        if (isToggled) {
            browser.browserAction.setIcon({
                path: {
                    19: __webpack_require__(150),
                    38: __webpack_require__(151)
                }
            });
        }
        else {
            browser.browserAction.setIcon({
                path: {
                    19: __webpack_require__(152),
                    38: __webpack_require__(153)
                }
            });
        }
    };
    IconBadgeManager.prototype.setExtensionBadge = function (text, type) {
        badge_log(logger["a" /* Level */].INFO, "Setting extension badge " + text);
        browser.browserAction.setBadgeText({ text: text });
        switch (type) {
            case IconType.NONE: {
                badge_log(logger["a" /* Level */].DEBUG, "setting extension badge to nothing");
                break;
            }
            case IconType.OFF: {
                browser.browserAction.setBadgeBackgroundColor({ color: "#7d6549" });
                break;
            }
            case IconType.WARN: {
                browser.browserAction.setBadgeBackgroundColor({ color: "#e48b2d" });
                break;
            }
            case IconType.ALERT: {
                browser.browserAction.setBadgeBackgroundColor({ color: "#d64a2f" });
                break;
            }
        }
    };
    IconBadgeManager.prototype.updateIconAndBadge = function (dataAllowed, isToggled) {
        if (dataAllowed === undefined) {
            this.setExtensionBadge("", IconType.NONE);
            this.toggleIcon(false);
            return;
        }
        // The badge is not scaled correctly in Opera MacOS, so don't show the badges
        var isOpera = utils["m" /* getBrowserType */]() === utils["a" /* BrowserType */].OPERA;
        var isMac = utils["p" /* getPlatformClass */]() === utils["d" /* PlatformClass */].MAC;
        if (isOpera && isMac) {
            this.setExtensionBadge("", IconType.NONE);
            this.toggleIcon(isToggled);
            return;
        }
        dataAllowed = dataAllowed / 1048576;
        if (dataAllowed <= 0) {
            badge_log(logger["a" /* Level */].INFO, "No more Data");
            this.setExtensionBadge("0mb", IconType.ALERT);
            this.toggleIcon(false);
        }
        else if (0 < dataAllowed && dataAllowed < LOW_DATA_CAP) {
            this.setExtensionBadge("Low", IconType.WARN);
            this.toggleIcon(isToggled);
        }
        else if (dataAllowed >= LOW_DATA_CAP) {
            if (isToggled) {
                this.setExtensionBadge("", IconType.NONE);
            }
            else {
                this.setExtensionBadge("Off", IconType.OFF);
            }
            this.toggleIcon(isToggled);
        }
    };
    return IconBadgeManager;
}());
var iconBadgeManagerInstance = new badge_IconBadgeManager();
function badge_getInstance() {
    return iconBadgeManagerInstance;
}

// EXTERNAL MODULE: ./node_modules/melanke-watchjs/src/watch.js
var watch = __webpack_require__(43);
var watch_default = /*#__PURE__*/__webpack_require__.n(watch);

// CONCATENATED MODULE: ./src/background/browser.ts
///<reference types="chrome"/>
var browser_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var browser_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










function browser_log(level, message) {
    logger["d" /* log */](level, "[BROWSER] " + message);
}
var LOW_DATA_CAP = 100;
var canWarnLowData = false;
function checkDataLevel(dataAllowed, isToggled, emailConfirmed) {
    if (dataAllowed !== undefined) {
        dataAllowed = dataAllowed / 1048576;
        if (dataAllowed <= 0) {
            browser_log(logger["a" /* Level */].INFO, "No more Data");
            noDataHandler();
        }
        else if (dataAllowed > 0 && dataAllowed < LOW_DATA_CAP) {
            browser_log(logger["a" /* Level */].INFO, "Low Data : Can warn user? " + canWarnLowData);
            if (canWarnLowData && isToggled) {
                canWarnLowData = false;
                lowAccount(emailConfirmed);
            }
        }
        else if (dataAllowed >= LOW_DATA_CAP) {
            canWarnLowData = true;
        }
    }
}
function fetchDataUsage() {
    return browser_awaiter(this, void 0, void 0, function () {
        var accountInfoPromise, userInfoPromise, accountInfo, userInfo;
        return browser_generator(this, function (_a) {
            accountInfoPromise = getAccountInfo();
            userInfoPromise = getUser();
            return [2 /*return*/, Promise.all([accountInfoPromise, userInfoPromise]).then(function (responses) {
                    accountInfo = responses[0], userInfo = responses[1];
                    setAccountInfoResponse(accountInfo);
                    setUserResponse(userInfo);
                })];
        });
    });
}
var dataTimer;
function adjustTimer(interval) {
    browser_log(logger["a" /* Level */].DEBUG, "adjusting timer to: " + interval);
    clearInterval(dataTimer);
    dataTimer = window.setInterval(fetchDataUsage, interval);
}
var lastDataAllowed = 0;
function evaluateTimer(newDataAllowed) {
    var newData = newDataAllowed / 1048576;
    var diffDataUsage = lastDataAllowed - newData;
    if (diffDataUsage > 0) {
        browser_log(logger["a" /* Level */].DEBUG, "[DATA] usage since last time: " + diffDataUsage);
        if (diffDataUsage < 1) {
            adjustTimer(60000);
        }
        else if (diffDataUsage < 5) {
            adjustTimer(50000);
        }
        else if (diffDataUsage < 10) {
            adjustTimer(40000);
        }
        else if (diffDataUsage < 15) {
            adjustTimer(35000);
        }
        else if (diffDataUsage < 20) {
            adjustTimer(30000);
        }
        else {
            adjustTimer(25000);
        }
    }
    lastDataAllowed = newDataAllowed;
}
var registerTimer = window.setInterval(updateExtensionState, 5 * utils["h" /* Time */].MINUTE);
function toggleOn() {
    return browser_awaiter(this, void 0, void 0, function () {
        var noRegions, authenticated, noToken, serversPromise;
        return browser_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isDataDepleted()) {
                        toggleOff();
                        return [2 /*return*/];
                    }
                    appState.isToggled = true;
                    utils["w" /* storageSet */]("isToggled", true);
                    noRegions = appState.regions.availableRegions.size === 0;
                    authenticated = appState.isAuthenticated;
                    noToken = appState.user.vpnToken === "";
                    if (!(noRegions || !authenticated || noToken)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateExtensionState()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(appState.regions.availableCountries.indexOf(appState.currentCountry) < 0)) return [3 /*break*/, 3];
                    changeCountry("US");
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, servers_getInstance().getServers(appState.currentCountry)];
                case 4:
                    serversPromise = _a.sent();
                    getInstance().enableProxy(serversPromise);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function toggleOff() {
    return browser_awaiter(this, void 0, void 0, function () {
        return browser_generator(this, function (_a) {
            appState.isToggled = false;
            utils["w" /* storageSet */]("isToggled", false);
            getInstance().disableProxy();
            return [2 /*return*/];
        });
    });
}
function changeCountry(country) {
    return browser_awaiter(this, void 0, void 0, function () {
        var servers;
        return browser_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appState.currentCountry = country;
                    utils["w" /* storageSet */]("lastCountry", country);
                    return [4 /*yield*/, servers_getInstance().getServers(country)];
                case 1:
                    servers = _a.sent();
                    if (appState.isToggled === true) {
                        getInstance().enableProxy(servers);
                    }
                    else {
                        getInstance().disableProxy();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function browser_isRememBearInstalled() {
    return browser_awaiter(this, void 0, void 0, function () {
        return browser_generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    return chrome.management.getAll(function (apps) {
                        resolve(apps.some(function (app) { return app.name === "RememBear"; }));
                    });
                })];
        });
    });
}
function noDataHandler() {
    browser_log(logger["a" /* Level */].DEBUG, "calling toggle-off");
    if (appState.isToggled) {
        browser_log(logger["a" /* Level */].INFO, "Toggling off");
        toggleOff();
        outOfData();
    }
    else {
        browser_log(logger["a" /* Level */].INFO, "Already toggled-off");
    }
}
function registerListeners() {
    var _this = this;
    browser_log(logger["a" /* Level */].INFO, "AppStart - Registering listeners");
    function toggleAll() {
        if (appState.isToggled === true) {
            toggleOff();
        }
        else {
            toggleOn();
        }
    }
    function incognitoTunnelling() {
        browser.extension.isAllowedIncognitoAccess().then(function (isAllowed) {
            if (isAllowed) {
                toggleOn();
                browser.windows.create({ url: "https://bearsmyip.com", incognito: true });
            }
            else {
                openExtensions();
            }
        });
    }
    browser.commands.onCommand.addListener(function (command) {
        browser_log(logger["a" /* Level */].DEBUG, "Command: " + command);
        if (command === "toggle-tunnelling") {
            toggleAll();
        }
        else if (command === "incognito-tunnelling") {
            incognitoTunnelling();
        }
        else if (command === "send-feedback") {
            sendFeedback();
        }
    });
    browser.runtime.onInstalled.addListener(function () {
        browser_log(logger["a" /* Level */].INFO, "app installed");
        utils["u" /* storageGet */]("installed").then(function (result) {
            if (result === undefined || result.installed === undefined) {
                utils["w" /* storageSet */]("installed", Date.now());
            }
        });
    });
    browser.runtime.onMessageExternal.addListener(function (request, sender, response) {
        browser_log(logger["a" /* Level */].DEBUG, "Got external message: " + JSON.stringify(request));
        var toggle = request.toggled;
        var openTab = request.opentab;
        var strMessage = request.message;
        var twitter = strMessage === "twitter";
        if (toggle !== undefined) {
            toggleOn();
        }
        if (openTab !== undefined) {
            if (openTab === "") {
                browser.tabs.create({});
            }
            else {
                browser.tabs.create({ url: openTab });
            }
        }
        if (twitter) {
            openTwitter(appState.bonusInfo.templateTweet);
        }
    });
    browser.runtime.onMessage.addListener(function (request, sender) { return browser_awaiter(_this, void 0, void 0, function () {
        var toggle, country, checkAuth;
        return browser_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (request === ports["a" /* PortName */].POPUP_STATE) {
                        return [2 /*return*/, Promise.resolve(getPopupState())];
                    }
                    browser_log(logger["a" /* Level */].DEBUG, "Got content-script message: " + JSON.stringify(request));
                    toggle = request.toggled;
                    country = request.country;
                    checkAuth = request.checkAuth;
                    if (!(toggle === true && country !== undefined)) return [3 /*break*/, 1];
                    changeCountry(country).then(toggleOn);
                    return [3 /*break*/, 3];
                case 1:
                    if (!(checkAuth === true)) return [3 /*break*/, 3];
                    return [4 /*yield*/, api_checkAuth().then(function () { return updateExtensionState(true); })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
    function portCallback(portName, message) {
        if (message === "toggle-all") {
            toggleAll();
        }
        else {
            browser_log(logger["a" /* Level */].DEBUG, "not a normal command");
        }
        var command = message["COMMAND"];
        if (command !== undefined && command === "change-country" && message["PARAM"] !== undefined) {
            changeCountry(message["PARAM"]);
        }
    }
    ports["e" /* subscribeTo */](ports["a" /* PortName */].BROWSER, portCallback);
    function isNetworkError(errorStatus) {
        return errorStatus.indexOf("ERR_PROXY_CONNECTION_FAILED") > -1 ||
            errorStatus.indexOf("ERR_CONNECTION_RESET") > -1 ||
            errorStatus.indexOf("ERR_NETWORK_IO_SUSPENDED") > -1 ||
            errorStatus.indexOf("NS_ERROR_PROXY_CONNECTION_REFUSED") > -1 ||
            errorStatus.indexOf("NS_ERROR_NET_RESET") > -1 ||
            errorStatus.indexOf("NS_ERROR_NET_INTERRUPT") > -1;
    }
    var lastErrorRegister = 0;
    browser.webRequest.onErrorOccurred.addListener(function (details) { return browser_awaiter(_this, void 0, void 0, function () {
        var errorStatus, isToggled;
        return browser_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorStatus = details.error;
                    isToggled = appState.isToggled;
                    browser_log(logger["a" /* Level */].DEBUG, "WebRequestOnErrorOccured: " + JSON.stringify(details));
                    if (!(isToggled === true && isNetworkError(errorStatus))) return [3 /*break*/, 3];
                    if (!(lastErrorRegister === 0 || (Date.now() - lastErrorRegister) > 15000)) return [3 /*break*/, 2];
                    browser_log(logger["a" /* Level */].WARN, "Registering again, possible server error");
                    lastErrorRegister = Date.now();
                    return [4 /*yield*/, updateExtensionState()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    browser_log(logger["a" /* Level */].WARN, "Not registering - registered too many times");
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, { urls: ["<all_urls>"] });
    browser.runtime.setUninstallURL(uninstallFeedbackUrl());
    var watchProperties = [
        utils["s" /* nameOf */]("isToggled"),
        utils["s" /* nameOf */]("accountInfo"),
        utils["s" /* nameOf */]("user")
    ];
    watch_default.a.watch(appState, watchProperties, function () {
        var isToggled = appState.isToggled;
        var emailConfirmed = appState.accountInfo.emailConfirmed;
        var dataAllowed = isDataDepleted() ? 0 : appState.accountInfo.bandwidthAvailable;
        badge_getInstance().updateIconAndBadge(dataAllowed, isToggled);
        checkDataLevel(dataAllowed, isToggled, emailConfirmed);
        evaluateTimer(dataAllowed);
    });
}

// CONCATENATED MODULE: ./src/background/api.ts
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var api_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var api_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






function api_log(level, message) {
    logger["d" /* log */](level, "[API] " + message);
}
//=============================================================================//
//                                                                             //
//  Tunnelbear API                                                             //
//                                                                             //
//=============================================================================//
var device = "";
var csrfToken = "";
var tunnelbearAjax = new ajax_AjaxService(utils["g" /* TB_API_URL */]);
tunnelbearAjax.setRequestInterceptor(function (config) {
    config.headers["tb-csrf-token"] = csrfToken;
    config.headers["authorization"] = "Bearer " + tbAuthToken.value;
    config.headers["tunnelbear-app-id"] = "com.tunnelbear";
    config.headers["tunnelbear-app-version"] = "1.0";
    config.headers["tunnelbear-platform-version"] = utils["y" /* versionString */];
    config.headers["tunnelbear-platform"] = utils["l" /* getBrowserTitle */]();
    return config;
});
tunnelbearAjax.setResponseInterceptor(function (response) {
    if (response.headers["tb-csrf-token"] !== undefined) {
        csrfToken = response.headers["tb-csrf-token"];
    }
    return response;
});
function init() {
    return api_awaiter(this, void 0, void 0, function () {
        var result, storedDeviceId;
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, utils["u" /* storageGet */]("deviceId")];
                case 1:
                    result = _a.sent();
                    storedDeviceId = result.deviceId;
                    if (storedDeviceId !== undefined) {
                        device = storedDeviceId;
                    }
                    else {
                        device = utils["x" /* uuid */]();
                        utils["w" /* storageSet */]("deviceId", device);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//=============================================================================//
//  TB Authentication                                                          //
//=============================================================================//
var tbAuthToken = new utils["i" /* ValueTracker */]();
function getAuthCookie() {
    return api_awaiter(this, void 0, void 0, function () {
        var requestParams;
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tunnelbearAjax.get({ url: "/core/csrf" })];
                case 1:
                    _a.sent();
                    requestParams = {
                        url: "/v2/cookieToken",
                        headers: {
                            "device": device,
                        }
                    };
                    return [2 /*return*/, tunnelbearAjax.post(requestParams).then(function (response) {
                            return response.body.access_token;
                        })];
            }
        });
    });
}
function getBonusInfo() {
    return api_awaiter(this, void 0, void 0, function () {
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, tunnelbearAjax.get({ url: "/v2/bonusInfo" }).then(function (response) {
                            return response.body;
                        })];
            }
        });
    });
}
function getAccountInfo() {
    return api_awaiter(this, void 0, void 0, function () {
        function calculateBandwidthAvailable(maxBandwidth, dataResponse) {
            if (maxBandwidth === -1) {
                return utils["b" /* FIVE_HUNDRED_MB */];
            }
            else {
                var dataUsed = dataResponse.devices.reduce(function (acc, device) { return acc + device.down_bytes_used + device.up_bytes_used; }, 0);
                return maxBandwidth - dataUsed;
            }
        }
        var response, accountInfoPromise, dataPromise;
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded()];
                case 1:
                    _a.sent();
                    accountInfoPromise = tunnelbearAjax.get({ url: "v2/account" });
                    dataPromise = getData();
                    return [2 /*return*/, Promise.all([accountInfoPromise, dataPromise]).then(function (responses) {
                            var accountResponse = responses[0], dataResponse = responses[1];
                            try {
                                var maxBandwidth = accountResponse.body.plans.find(function (plan) { return plan.platform === "Browser"; }).maxBandwidth;
                                var bandwidthAvailable = calculateBandwidthAvailable(maxBandwidth, dataResponse);
                                response = __assign({}, accountResponse.body, { maxBandwidth: maxBandwidth,
                                    bandwidthAvailable: bandwidthAvailable });
                            }
                            catch (e) {
                                api_log(logger["a" /* Level */].WARN, "'Browser' plan not found in account info");
                            }
                            return response;
                        })];
            }
        });
    });
}
function getLocation() {
    return new Promise(function (resolve, reject) {
        // Give the proxy some time to change
        setTimeout(function () {
            tunnelbearAjax.get({
                url: "/core/bearsmyip/location",
                timeout: 3000
            }).then(function (response) {
                resolve(response.body);
            }).catch(function (error) {
                reject(error);
            });
        }, 200);
    });
}
function sendFeedback() {
    logger["b" /* getLogs */]().then(function (background) {
        var formData = new FormData();
        formData.append("v", utils["y" /* versionString */]);
        formData.append("feedback", "");
        formData.append("data", background);
        tunnelbearAjax.post({
            url: "/core/api/uploadLogsText",
            data: formData,
            timeout: 2000
        });
    });
}
function logout() {
    return tunnelbearAjax.get({ url: "/core2/logout" }).then(function () {
        handleUnauthenticated();
        resetState();
        utils["t" /* storageClear */]();
        openLogin();
    }).catch(function () {
        api_log(logger["a" /* Level */].WARN, "Logout error: unable to reach server");
    });
}
//=============================================================================//
//                                                                             //
//  Polarbear API                                                              //
//                                                                             //
//=============================================================================//
var polarbearAjax = new ajax_AjaxService(utils["c" /* PB_API_URL */]);
var pbAuthToken = new utils["i" /* ValueTracker */]();
polarbearAjax.setRequestInterceptor(function (config) {
    if (config.url !== "/auth") {
        config.headers["authorization"] = "Bearer " + pbAuthToken.value;
    }
    return config;
});
//=============================================================================//
//  PB Authentication                                                          //
//=============================================================================//
function authenticatePolarbear() {
    return getAuthCookie().then(function (response) {
        if (response) {
            tbAuthToken.value = response;
            var payload = { partner: "tunnelbear", token: response };
            return polarbearAjax.post({ url: "/auth", data: payload }).then(function (response) {
                var pbAuthHeader = response.headers.authorization;
                if (pbAuthHeader) {
                    pbAuthToken.value = pbAuthHeader.replace("Bearer ", "");
                }
                else {
                    throw "No authorization header present in PolarBear auth response";
                }
            });
        }
        else {
            throw "No authorization header present in getAuthCookie response";
        }
    });
}
var authenticationInProgress = undefined;
function handleUnauthenticated() {
    appState.isAuthenticated = false;
    polarbearAjax.cancelCurrentRequests();
    tunnelbearAjax.cancelCurrentRequests();
    pbAuthToken.reset();
    tbAuthToken.reset();
    toggleOff();
}
function authenticateIfNeeded(force) {
    return api_awaiter(this, void 0, void 0, function () {
        var isTBAuthTokenStale, isPBAuthTokenStale;
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isTBAuthTokenStale = utils["j" /* dateOlderThan */](tbAuthToken.lastUpdated, utils["h" /* Time */].DAY);
                    isPBAuthTokenStale = utils["j" /* dateOlderThan */](pbAuthToken.lastUpdated, utils["h" /* Time */].DAY);
                    if (!(isTBAuthTokenStale || isPBAuthTokenStale || force)) return [3 /*break*/, 2];
                    if (authenticationInProgress === undefined) {
                        authenticationInProgress = authenticatePolarbear().then(function () {
                            authenticationInProgress = undefined;
                            appState.isAuthenticated = true;
                        }).catch(function (error) {
                            if (error.response !== undefined && (error.response.status === 401 || error.response.status === 403)) {
                                handleUnauthenticated();
                            }
                            authenticationInProgress = undefined;
                            throw error;
                        });
                    }
                    return [4 /*yield*/, authenticationInProgress];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function api_checkAuth() {
    return api_awaiter(this, void 0, void 0, function () {
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded(true)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//=============================================================================//
//  /user                                                                      //
//=============================================================================//
function getUser() {
    return api_awaiter(this, void 0, void 0, function () {
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, polarbearAjax.get({ url: "/user" }).then(function (response) {
                            return response.body;
                        })];
            }
        });
    });
}
//=============================================================================//
//  /regions                                                                   //
//=============================================================================//
function getRegions() {
    return api_awaiter(this, void 0, void 0, function () {
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, polarbearAjax.get({ url: "/regions" }).then(function (response) {
                            return response.body;
                        })];
            }
        });
    });
}
//=============================================================================//
//  /vpns/[countries|regions]                                                  //
//=============================================================================//
function getServers(countryOrRegion) {
    return api_awaiter(this, void 0, void 0, function () {
        var serverPromise;
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded()];
                case 1:
                    _a.sent();
                    if (countryOrRegion === undefined) {
                        // Fetch servers for closest region
                        serverPromise = polarbearAjax.get({ url: "/vpns" });
                    }
                    else if (typeof countryOrRegion === "string") {
                        // Fetch servers for country
                        serverPromise = polarbearAjax.get({ url: "/vpns/countries/" + countryOrRegion });
                    }
                    else {
                        // Fetch servers for region
                        serverPromise = polarbearAjax.get({ url: "/vpns/regions/" + countryOrRegion });
                    }
                    return [2 /*return*/, serverPromise.then(function (response) {
                            return response.body;
                        })];
            }
        });
    });
}
//=============================================================================//
//  /data                                                                      //
//=============================================================================//
function getData() {
    return api_awaiter(this, void 0, void 0, function () {
        return api_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authenticateIfNeeded()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, polarbearAjax.get({ url: "/data" }).then(function (response) {
                            return response.body;
                        })];
            }
        });
    });
}

// CONCATENATED MODULE: ./src/background/core.ts
///<reference path="../../typings/tunnelbear/index.d.ts"/>
var core_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var core_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var core_this = undefined;











function core_log(level, message) {
    logger["d" /* log */](level, "[Background - Core] " + message);
}
ports["b" /* init */](true);
logger["c" /* init */]("Background");
core_log(logger["a" /* Level */].DEBUG, "App Started");
function proxyTimerCallback() {
    return core_awaiter(this, void 0, void 0, function () {
        var servers;
        return core_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(appState.isToggled === true)) return [3 /*break*/, 2];
                    return [4 /*yield*/, servers_getInstance().getServers(appState.currentCountry)];
                case 1:
                    servers = _a.sent();
                    getInstance().enableProxy(servers);
                    return [3 /*break*/, 3];
                case 2:
                    getInstance().disableProxy();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function startProxyTimer() {
    window.setInterval(proxyTimerCallback, 30 * utils["h" /* Time */].SECOND);
}
// Promise with boolean result indicates whether or not app-state changed and should be sent to subscribers
function checkProxyPermissions() {
    return core_awaiter(this, void 0, void 0, function () {
        var result;
        return core_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstance().evaluatePermissions()];
                case 1:
                    result = _a.sent();
                    if (appState.permissions.error !== result.error) {
                        appState.permissions = result;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function core_getLocation() {
    getLocation().then(function (response) {
        core_log(logger["a" /* Level */].DEBUG, "[API/Location] response: " + JSON.stringify(response));
        if (response.latitude === undefined || response.longitude === undefined) {
            return { latitude: 0, longitude: 0, city: "", countryName: "" };
        }
        else {
            var originLocation = {
                latitude: response.latitude,
                longitude: response.longitude
            };
            if (response.city && response.countryName) {
                originLocation.city = response.city;
                originLocation.countryName = response.countryName;
            }
            if (response.connected) {
                originLocation.connected = response.connected === 1;
            }
            appState.originLocation = originLocation;
            return appState.originLocation;
        }
    }).catch(function () {
        return { latitude: 0, longitude: 0, city: "", countryName: "" };
    }).then(function (origin) {
        ports["c" /* sendMessage */](ports["a" /* PortName */].LOCATION, origin);
    });
}
function getRememBear() {
    appState.canShowRememBear = false;
    utils["w" /* storageSet */]("get_remembear", Date.now());
    closeRememBear();
}
function closeRememBear() {
    appState.canShowRememBear = false;
    ports["c" /* sendMessage */](ports["a" /* PortName */].POPUP_STATE, getPopupState());
    utils["w" /* storageSet */]("remembear", Date.now());
}
function closeTwitter() {
    appState.canShowTwitter = false;
    ports["c" /* sendMessage */](ports["a" /* PortName */].POPUP_STATE, getPopupState());
    utils["w" /* storageSet */]("twitter", Date.now());
}
function core_portCallback(portName, message) {
    var _this = this;
    switch (portName) {
        case ports["a" /* PortName */].POPUP_STATE: {
            if (appState.isAuthenticated === false) {
                toggleOff();
                openSignup();
            }
            else {
                checkProxyPermissions();
                core_getLocation();
                fetchDataUsage();
            }
            break;
        }
        case ports["a" /* PortName */].UPGRADE: {
            upgradeAccount(appState.accountInfo.emailConfirmed);
            break;
        }
        case ports["a" /* PortName */].SETTINGS: {
            switch (message) {
                case "help": {
                    openHelp();
                    break;
                }
                case "account": {
                    openAccount();
                    break;
                }
                case "review": {
                    openReview();
                    break;
                }
                case "privacy": {
                    openPrivacyPolicy();
                    break;
                }
                case "logout": {
                    (function () { return core_awaiter(_this, void 0, void 0, function () { return core_generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, logout()];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })();
                    break;
                }
                case "extensions": {
                    openExtensions();
                    break;
                }
                case "feedback": {
                    openFeedback();
                    sendFeedback();
                    break;
                }
                case "close-twitter": {
                    closeTwitter();
                    break;
                }
                case "tweet-now": {
                    openAccountTweet();
                    break;
                }
                case "close-remembear": {
                    closeRememBear();
                    break;
                }
                case "get-remembear": {
                    getRememBear();
                    openRememBear();
                    break;
                }
            }
            break;
        }
    }
}
ports["e" /* subscribeTo */](ports["a" /* PortName */].POPUP_STATE, core_portCallback);
ports["e" /* subscribeTo */](ports["a" /* PortName */].UPGRADE, core_portCallback);
ports["e" /* subscribeTo */](ports["a" /* PortName */].SETTINGS, core_portCallback);
function initialize() {
    return core_awaiter(this, void 0, void 0, function () {
        var storageContents, isRememBearInstalled, isToggled, lastCountry, twitterLastTime, rememBearDismissDate, remembearPromptConditions;
        return core_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, init()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, utils["u" /* storageGet */](["isToggled", "lastCountry", "twitter", "get_remembear", "remembear"])];
                case 2:
                    storageContents = _a.sent();
                    return [4 /*yield*/, browser_isRememBearInstalled()];
                case 3:
                    isRememBearInstalled = _a.sent();
                    return [4 /*yield*/, updateExtensionState(true)];
                case 4:
                    _a.sent();
                    isToggled = storageContents.isToggled;
                    lastCountry = storageContents.lastCountry;
                    if (!(lastCountry !== undefined || typeof lastCountry === "string")) return [3 /*break*/, 6];
                    return [4 /*yield*/, changeCountry(lastCountry)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, utils["k" /* delayPromise */](250)()];
                case 7:
                    _a.sent();
                    if (!(isToggled === true)) return [3 /*break*/, 9];
                    return [4 /*yield*/, toggleOn()];
                case 8:
                    _a.sent();
                    badge_getInstance().updateIconAndBadge(isDataDepleted() ? 0 : appState.accountInfo.bandwidthAvailable, isToggled);
                    return [3 /*break*/, 11];
                case 9:
                    if (!(isToggled === undefined || isToggled === false)) return [3 /*break*/, 11];
                    return [4 /*yield*/, toggleOff()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    twitterLastTime = storageContents.twitter;
                    if (appState.user.isFullVersion) {
                        appState.canShowTwitter = false;
                    }
                    else if (twitterLastTime !== undefined) {
                        appState.canShowTwitter = utils["j" /* dateOlderThan */](twitterLastTime, 2 * utils["h" /* Time */].DAY);
                    }
                    // remembear prompt
                    core_log(logger["a" /* Level */].DEBUG, "Is remembear installed: " + isRememBearInstalled);
                    rememBearDismissDate = storageContents.remembear;
                    remembearPromptConditions = [
                        isRememBearInstalled === false,
                        (!appState.canShowTwitter || (appState.canShowTwitter === true && Math.floor(Math.random() * 10) % 3 === 1)),
                        twitterLastTime === undefined || utils["j" /* dateOlderThan */](twitterLastTime, 1),
                        rememBearDismissDate === undefined
                            // storage.get_remembear === undefined //if the user already pressed on "Get RememBear" -> not showing again (isRememBearInstalled doing its job)
                            || (utils["j" /* dateOlderThan */](rememBearDismissDate, 30) && !appState.user.isFullVersion) //for free user, last prompt at 30 days
                            || (utils["j" /* dateOlderThan */](rememBearDismissDate, 60) && appState.user.isFullVersion) //for paid user, last prompt at 60 days
                        // storage.get_remembear === undefined //if the user already pressed on "Get RememBear" -> not showing again (isRememBearInstalled doing its job)
                    ];
                    //Any condition that's false will cause canShowRememBear to be false
                    appState.canShowRememBear = !remembearPromptConditions.some(function (condition) { return condition === false; });
                    if (appState.canShowRememBear === true) {
                        appState.canShowTwitter = false;
                    }
                    core_log(logger["a" /* Level */].DEBUG, "canShowTwitter options: " + appState.canShowTwitter);
                    core_log(logger["a" /* Level */].DEBUG, "canShowRememBear options: " + remembearPromptConditions);
                    core_log(logger["a" /* Level */].DEBUG, "Setting canShowRememBear: " + appState.canShowRememBear);
                    return [2 /*return*/];
            }
        });
    });
}
watch_default.a.watch(appState, function () {
    ports["c" /* sendMessage */](ports["a" /* PortName */].POPUP_STATE, getPopupState());
});
(function () { return core_awaiter(core_this, void 0, void 0, function () {
    return core_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, initialize().catch(function () { })];
            case 1:
                _a.sent();
                return [4 /*yield*/, registerListeners()];
            case 2:
                _a.sent();
                startProxyTimer();
                return [2 /*return*/];
        }
    });
}); })();


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return subscribeTo; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function log(level, message) {
    Object(_logger__WEBPACK_IMPORTED_MODULE_0__[/* log */ "d"])(level, "[Common - Ports] " + message);
}
var PortName;
(function (PortName) {
    PortName["SETTINGS"] = "SETTINGS";
    PortName["LOCATION"] = "LOCATION";
    PortName["APP_STATE"] = "APP_STATE";
    PortName["REGISTER"] = "REGISTER";
    PortName["UPGRADE"] = "UPGRADE";
    PortName["BROWSER"] = "BROWSER";
    PortName["POPUP_STATE"] = "POPUP_STATE";
})(PortName || (PortName = {}));
var ports = new Map();
var listeners = new Map();
// Common
function init(persist) {
    browser.runtime.onConnect.addListener(function (port) {
        if (persist) {
            log(_logger__WEBPACK_IMPORTED_MODULE_0__[/* Level */ "a"].DEBUG, " got port " + port.name);
            ports.set(PortName[port.name], port);
            port.onDisconnect.addListener(function (port) {
                disconnectHandler(PortName[port.name]);
            });
            port.onMessage.addListener(makeMessageHandler(PortName[port.name]));
        }
    });
}
function sendMessage(portName, message) {
    var port = ports.get(portName);
    if (port !== undefined) {
        port.postMessage(message);
    }
}
// Sender setup
function setup(portName, callback) {
    var port = browser.runtime.connect(undefined, { name: portName });
    ports.set(portName, port);
    port.onMessage.addListener(callback);
}
// Receiver setup
function disconnectHandler(portName) {
    ports.delete(portName);
}
function subscribeTo(portName, callback) {
    listeners.set(portName, callback);
}
function makeMessageHandler(portName) {
    return function (message) {
        var listener = listeners.get(portName);
        log(_logger__WEBPACK_IMPORTED_MODULE_0__[/* Level */ "a"].DEBUG, "[" + portName + "] got message: " + message);
        if (listener !== undefined) {
            listener(portName, message);
        }
    };
}


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(11);
var isBuffer = __webpack_require__(45);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DEVELOPED BY
 * GIL LOPES BUENO
 * gilbueno.mail@gmail.com
 *
 * WORKS WITH:
 * IE8*, IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
 * For IE8 (and other legacy browsers) WatchJS will use dirty checking  
 *
 * FORK:
 * https://github.com/melanke/Watch.JS
 *
 * LICENSE: MIT
 */


(function (factory) {
    if (true) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {}
}(function () {

    var WatchJS = {
        noMore: false,        // use WatchJS.suspend(obj) instead
        useDirtyCheck: false, // use only dirty checking to track changes.
        preserveExistingSetters: false
    },
    lengthsubjects = [];
    
    var dirtyChecklist = [];
    var pendingChanges = []; // used coalesce changes from defineProperty and __defineSetter__
    
    var supportDefineProperty = false;
    try {
        supportDefineProperty = Object.defineProperty && Object.defineProperty({},'x', {});
    } catch(ex) {  /* not supported */  }

    var isFunction = function (functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
    };

    var isInt = function (x) {
        return x % 1 === 0;
    };

    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var isObject = function(obj) {
        return {}.toString.apply(obj) === '[object Object]';
    };
    
    var getObjDiff = function(a, b){
        var aplus = [],
        bplus = [];

        if(!(typeof a == "string") && !(typeof b == "string")){

            if (isArray(a) && b) {
                for (var i=0; i<a.length; i++) {
                    if (b[i] === undefined) aplus.push(i);
                }
            } else {
                for(var i in a){
                    if (a.hasOwnProperty(i)) {
                        if(b && !b.hasOwnProperty(i)) {
                            aplus.push(i);
                        }
                    }
                }
            }

            if (isArray(b) && a) {
                for (var j=0; j<b.length; j++) {
                    if (a[j] === undefined) bplus.push(j);
                }
            } else {
                for(var j in b){
                    if (b.hasOwnProperty(j)) {
                        if(a && !a.hasOwnProperty(j)) {
                            bplus.push(j);
                        }
                    }
                }
            }
        }

        return {
            added: aplus,
            removed: bplus
        }
    };

    var clone = function(obj){

        if (null == obj || "object" != typeof obj) {
            return obj;
        }

        var copy = obj.constructor();

        for (var attr in obj) {
            copy[attr] = obj[attr];
        }

        return copy;        

    }

    var getExistingSetter = function (obj, propName) {
        if (WatchJS.preserveExistingSetters) {
            var existing = Object.getOwnPropertyDescriptor(obj, propName);
            return existing.set;
        }

        return undefined;
    }

    var defineGetAndSet = function (obj, propName, getter, setter) {
        try {
            var existingSetter = getExistingSetter(obj, propName);
            Object.defineProperty(obj, propName, {
                get: getter,
                set: function(value) {
                    setter.call(this, value, true); // coalesce changes
                    if (existingSetter) {
                        existingSetter(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
        }
        catch(e1) {
            try{
                Object.prototype.__defineGetter__.call(obj, propName, getter);
                Object.prototype.__defineSetter__.call(obj, propName, function(value) {
                    setter.call(this,value,true); // coalesce changes
                });
            }
            catch(e2) {
                observeDirtyChanges(obj,propName,setter);
                //throw new Error("watchJS error: browser not supported :/")
            }
        }

    };

    var defineProp = function (obj, propName, value) {
        try {
            Object.defineProperty(obj, propName, {
                enumerable: false,
                configurable: true,
                writable: false,
                value: value
            });
        } catch(error) {
            obj[propName] = value;
        }
    };

    var observeDirtyChanges = function(obj,propName,setter) {
        dirtyChecklist[dirtyChecklist.length] = {
            prop:       propName,
            object:     obj,
            orig:       clone(obj[propName]),
            callback:   setter
        }        
    }
    
    var watch = function () {

        if (isFunction(arguments[1])) {
            watchAll.apply(this, arguments);
        } else if (isArray(arguments[1])) {
            watchMany.apply(this, arguments);
        } else {
            watchOne.apply(this, arguments);
        }

    };


    var watchAll = function (obj, watcher, level, addNRemove) {

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if(isArray(obj)) {
            defineWatcher(obj, "__watchall__", watcher, level); // watch all changes on the array
            if (level===undefined||level > 0) {
                for (var prop = 0; prop < obj.length; prop++) { // watch objects in array
                   watchAll(obj[prop],watcher,level, addNRemove);
                }
            }
        } 
        else {
            var prop,props = [];
            for (prop in obj) { //for each attribute if obj is an object
                if (prop == "$val" || (!supportDefineProperty && prop === 'watchers')) {
                    continue;
                }

                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    props.push(prop); //put in the props
                }
            }
            watchMany(obj, props, watcher, level, addNRemove); //watch all items of the props
        }


        if (addNRemove) {
            pushToLengthSubjects(obj, "$$watchlengthsubjectroot", watcher, level);
        }
    };


    var watchMany = function (obj, props, watcher, level, addNRemove) {

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        for (var i=0; i<props.length; i++) { //watch each property
            var prop = props[i];
            watchOne(obj, prop, watcher, level, addNRemove);
        }

    };

    var watchOne = function (obj, prop, watcher, level, addNRemove) {
        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if(isFunction(obj[prop])) { //dont watch if it is a function
            return;
        }
        if(obj[prop] != null && (level === undefined || level > 0)){
            watchAll(obj[prop], watcher, level!==undefined? level-1 : level); //recursively watch all attributes of this
        }

        defineWatcher(obj, prop, watcher, level);

        if(addNRemove && (level === undefined || level > 0)){
            pushToLengthSubjects(obj, prop, watcher, level);
        }

    };

    var unwatch = function () {

        if (isFunction(arguments[1])) {
            unwatchAll.apply(this, arguments);
        } else if (isArray(arguments[1])) {
            unwatchMany.apply(this, arguments);
        } else {
            unwatchOne.apply(this, arguments);
        }

    };

    var unwatchAll = function (obj, watcher) {

        if (obj instanceof String || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if (isArray(obj)) {
            var props = ['__watchall__'];
            for (var prop = 0; prop < obj.length; prop++) { //for each item if obj is an array
                props.push(prop); //put in the props
            }
            unwatchMany(obj, props, watcher); //watch all itens of the props
        } else {
            var unwatchPropsInObject = function (obj2) {
                var props = [];
                for (var prop2 in obj2) { //for each attribute if obj is an object
                    if (obj2.hasOwnProperty(prop2)) {
                        if (obj2[prop2] instanceof Object) {
                            unwatchPropsInObject(obj2[prop2]); //recurs into object props
                        } else {
                            props.push(prop2); //put in the props
                        }
                    }
                }
                unwatchMany(obj2, props, watcher); //unwatch all of the props
            };
            unwatchPropsInObject(obj);
        }
    };


    var unwatchMany = function (obj, props, watcher) {

        for (var prop2 in props) { //watch each attribute of "props" if is an object
            if (props.hasOwnProperty(prop2)) {
                unwatchOne(obj, props[prop2], watcher);
            }
        }
    };

    var timeouts = [],
        timerID = null;
    function clearTimerID() {
        timerID = null;
        for(var i=0; i< timeouts.length; i++) {
            timeouts[i]();
        }
        timeouts.length = 0;
    }
    var getTimerID= function () {
        if (!timerID)  {
            timerID = setTimeout(clearTimerID);
        }
        return timerID;
    }
    var registerTimeout = function(fn) { // register function to be called on timeout
        if (timerID==null) getTimerID();
        timeouts[timeouts.length] = fn;
    }
    
    // Track changes made to an array, object or an object's property 
    // and invoke callback with a single change object containing type, value, oldvalue and array splices
    // Syntax: 
    //      trackChange(obj, callback, recursive, addNRemove)
    //      trackChange(obj, prop, callback, recursive, addNRemove)
    var trackChange = function() {
        var fn = (isFunction(arguments[2])) ? trackProperty : trackObject ;
        fn.apply(this,arguments);
    }

    // track changes made to an object and invoke callback with a single change object containing type, value and array splices
    var trackObject= function(obj, callback, recursive, addNRemove) {
        var change = null,lastTimerID = -1;
        var isArr = isArray(obj);
        var level,fn = function(prop, action, newValue, oldValue) {
            var timerID = getTimerID();
            if (lastTimerID!==timerID) { // check if timer has changed since last update
                lastTimerID = timerID;
                change = {
                    type: 'update'
                }
                change['value'] = obj;
                change['splices'] = null;
                registerTimeout(function() {
                    callback.call(this,change);
                    change = null;
                });
            }
            // create splices for array changes
            if (isArr && obj === this && change !== null)  {                
                if (action==='pop'||action==='shift') {
                    newValue = [];
                    oldValue = [oldValue];
                }
                else if (action==='push'||action==='unshift') {
                    newValue = [newValue];
                    oldValue = [];
                }
                else if (action!=='splice') { 
                    return; // return here - for reverse and sort operations we don't need to return splices. a simple update will do
                }
                if (!change.splices) change.splices = [];
                change.splices[change.splices.length] = {
                    index: prop,
                    deleteCount: oldValue ? oldValue.length : 0,
                    addedCount: newValue ? newValue.length : 0,
                    added: newValue,
                    deleted: oldValue
                };
            }

        }  
        level = (recursive==true) ? undefined : 0;        
        watchAll(obj,fn, level, addNRemove);
    }
    
    // track changes made to the property of an object and invoke callback with a single change object containing type, value, oldvalue and splices
    var trackProperty = function(obj,prop,callback,recursive, addNRemove) { 
        if (obj && prop) {
            watchOne(obj,prop,function(prop, action, newvalue, oldvalue) {
                var change = {
                    type: 'update'
                }
                change['value'] = newvalue;
                change['oldvalue'] = oldvalue;
                if (recursive && isObject(newvalue)||isArray(newvalue)) {
                    trackObject(newvalue,callback,recursive, addNRemove);
                }               
                callback.call(this,change);
            },0)
            
            if (recursive && isObject(obj[prop])||isArray(obj[prop])) {
                trackObject(obj[prop],callback,recursive, addNRemove);
            }                           
        }
    }
    
    
    var defineWatcher = function (obj, prop, watcher, level) {
        var newWatcher = false;
        var isArr = isArray(obj);
        
        if (!obj.watchers) {
            defineProp(obj, "watchers", {});
            if (isArr) {
                // watch array functions
                watchFunctions(obj, function(index,action,newValue, oldValue) {
                    addPendingChange(obj, index, action,newValue, oldValue);
                    if (level !== 0 && newValue && (isObject(newValue) || isArray(newValue))) {
                        var i,n, ln, wAll, watchList = obj.watchers[prop];
                        if ((wAll = obj.watchers['__watchall__'])) {
                            watchList = watchList ? watchList.concat(wAll) : wAll;
                        }
                        ln = watchList ?  watchList.length : 0;
                        for (i = 0; i<ln; i++) {
                            if (action!=='splice') {
                                watchAll(newValue, watchList[i], (level===undefined)?level:level-1);
                            }
                            else {
                                // watch spliced values
                                for(n=0; n < newValue.length; n++) {
                                    watchAll(newValue[n], watchList[i], (level===undefined)?level:level-1);
                                }
                            }
                        }
                    }
                });
            }
        }

        if (!obj.watchers[prop]) {
            obj.watchers[prop] = [];
            if (!isArr) newWatcher = true;
        }

        for (var i=0; i<obj.watchers[prop].length; i++) {
            if(obj.watchers[prop][i] === watcher){
                return;
            }
        }

        obj.watchers[prop].push(watcher); //add the new watcher to the watchers array

        if (newWatcher) {
            var val = obj[prop];            
            var getter = function () {
                return val;                        
            };

            var setter = function (newval, delayWatcher) {
                var oldval = val;
                val = newval;                
                if (level !== 0 
                    && obj[prop] && (isObject(obj[prop]) || isArray(obj[prop]))
                    && !obj[prop].watchers) {
                    // watch sub properties
                    var i,ln = obj.watchers[prop].length; 
                    for(i=0; i<ln; i++) {
                        watchAll(obj[prop], obj.watchers[prop][i], (level===undefined)?level:level-1);
                    }
                }

                //watchFunctions(obj, prop);
                
                if (isSuspended(obj, prop)) {
                    resume(obj, prop);
                    return;
                }

                if (!WatchJS.noMore){ // this does not work with Object.observe
                    //if (JSON.stringify(oldval) !== JSON.stringify(newval)) {
                    if (obj[prop] instanceof Date && oldval && newval) {
                        oldval = oldval.valueOf();
                        newval = newval.valueOf();
                    }	
                    if (oldval !== newval) {
                        if (!delayWatcher) {
                            callWatchers(obj, prop, "set", newval, oldval);
                        }
                        else {
                            addPendingChange(obj, prop, "set", newval, oldval);
                        }
                        WatchJS.noMore = false;
                    }
                }
            };

            if (WatchJS.useDirtyCheck) {
                observeDirtyChanges(obj,prop,setter);
            }
            else {
                defineGetAndSet(obj, prop, getter, setter);
            }
        }

    };

    var callWatchers = function (obj, prop, action, newval, oldval) {
        if (prop !== undefined) {
            var ln, wl, watchList = obj.watchers[prop];
            if ((wl = obj.watchers['__watchall__'])) {
                watchList = watchList ? watchList.concat(wl) : wl;
            }
            ln = watchList ? watchList.length : 0;
            for (var wr=0; wr< ln; wr++) {
                watchList[wr].call(obj, prop, action, newval, oldval);
            }
        } else {
            for (var prop in obj) {//call all
                if (obj.hasOwnProperty(prop)) {
                    callWatchers(obj, prop, action, newval, oldval);
                }
            }
        }
    };

    var methodNames = ['pop', 'push', 'reverse', 'shift', 'sort', 'slice', 'unshift', 'splice'];
    var defineArrayMethodWatcher = function (obj, original, methodName, callback) {
        defineProp(obj, methodName, function () {
            var index = 0;
            var i,newValue, oldValue, response;                        
            // get values before splicing array 
            if (methodName === 'splice') {
               var start = arguments[0];
               var end = start + arguments[1];
               oldValue = obj.slice(start,end);
               newValue = [];
               for(i=2;i<arguments.length;i++) {
                   newValue[i-2] = arguments[i];
               }
               index = start;
            } 
            else {
                newValue = arguments.length > 0 ? arguments[0] : undefined;
            } 

            response = original.apply(obj, arguments);
            if (methodName !== 'slice') {
                if (methodName === 'pop') {
                    oldValue = response;
                    index = obj.length;
                }
                else if (methodName === 'push') {
                    index = obj.length-1;
                }
                else if (methodName === 'shift') {
                    oldValue = response;
                }
                else if (methodName !== 'unshift' && newValue===undefined) {
                    newValue = response;
                }
                callback.call(obj, index, methodName,newValue, oldValue)
            }
            return response;
        });
    };

    var watchFunctions = function(obj, callback) {

        if (!isFunction(callback) || !obj || (obj instanceof String) || (!isArray(obj))) {
            return;
        }

        for (var i = methodNames.length, methodName; i--;) {
            methodName = methodNames[i];
            defineArrayMethodWatcher(obj, obj[methodName], methodName, callback);
        }

    };

    var unwatchOne = function (obj, prop, watcher) {
        if (prop) {
            if (obj.watchers && obj.watchers[prop]) {
                if (watcher === undefined) {
                    delete obj.watchers[prop]; // remove all property watchers
                }
                else {
                    for (var i = 0; i < obj.watchers[prop].length; i++) {
                        var w = obj.watchers[prop][i];
                        if (w == watcher) {
                            obj.watchers[prop].splice(i, 1);
                        }
                    }
                }
            }
        } else {
            delete obj.watchers;
        }

        removeFromLengthSubjects(obj, prop, watcher);
        removeFromDirtyChecklist(obj, prop);
    };
    
    // suspend watchers until next update cycle
    var suspend = function(obj, prop) {
        if (obj.watchers) {
            var name = '__wjs_suspend__'+(prop!==undefined ? prop : '');
            obj.watchers[name] = true;
        }
    }
    
    var isSuspended = function(obj, prop) {
        return obj.watchers 
               && (obj.watchers['__wjs_suspend__'] || 
                   obj.watchers['__wjs_suspend__'+prop]);
    }
    
    // resumes preivously suspended watchers
    var resume = function(obj, prop) {
        registerTimeout(function() {
            delete obj.watchers['__wjs_suspend__'];
            delete obj.watchers['__wjs_suspend__'+prop];
        })
    }

    var pendingTimerID = null;
    var addPendingChange = function(obj,prop, mode, newval, oldval) {
        pendingChanges[pendingChanges.length] = {
            obj:obj,
            prop: prop,
            mode: mode,
            newval: newval,
            oldval: oldval
        };
        if (pendingTimerID===null) {
            pendingTimerID = setTimeout(applyPendingChanges);
        }
    };
    
    
    var applyPendingChanges = function()  {
        // apply pending changes
        var change = null;
        pendingTimerID = null;
        for(var i=0;i < pendingChanges.length;i++) {
            change = pendingChanges[i];
            callWatchers(change.obj, change.prop, change.mode, change.newval, change.oldval);
        }
        if (change) {
            pendingChanges = [];
            change = null;
        }        
    }

    var loop = function(){

        // check for new or deleted props
        for(var i=0; i<lengthsubjects.length; i++) {

            var subj = lengthsubjects[i];

            if (subj.prop === "$$watchlengthsubjectroot") {

                var difference = getObjDiff(subj.obj, subj.actual);

                if(difference.added.length || difference.removed.length){
                    if(difference.added.length){
                        watchMany(subj.obj, difference.added, subj.watcher, subj.level - 1, true);
                    }

                    subj.watcher.call(subj.obj, "root", "differentattr", difference, subj.actual);
                }
                subj.actual = clone(subj.obj);


            } else {

                var difference = getObjDiff(subj.obj[subj.prop], subj.actual);

                if(difference.added.length || difference.removed.length){
                    if(difference.added.length){
                        for (var j=0; j<subj.obj.watchers[subj.prop].length; j++) {
                            watchMany(subj.obj[subj.prop], difference.added, subj.obj.watchers[subj.prop][j], subj.level - 1, true);
                        }
                    }

                    callWatchers(subj.obj, subj.prop, "differentattr", difference, subj.actual);
                }

                subj.actual = clone(subj.obj[subj.prop]);

            }

        }
        
        // start dirty check
        var n, value;
        if (dirtyChecklist.length > 0) {
            for (var i = 0; i < dirtyChecklist.length; i++) {
                n = dirtyChecklist[i];
                value = n.object[n.prop];
                if (!compareValues(n.orig, value)) {
                    n.orig = clone(value);
                    n.callback(value);
                }
            }
        }

    };

    var compareValues =  function(a,b) {
        var i, state = true;
        if (a!==b)  {
            if (isObject(a)) {
                for(i in a) {
                    if (!supportDefineProperty && i==='watchers') continue;
                    if (a[i]!==b[i]) {
                        state = false;
                        break;
                    };
                }
            }
            else {
                state = false;
            }
        }
        return state;
    }
    
    var pushToLengthSubjects = function(obj, prop, watcher, level){

        var actual;

        if (prop === "$$watchlengthsubjectroot") {
            actual =  clone(obj);
        } else {
            actual = clone(obj[prop]);
        }

        lengthsubjects.push({
            obj: obj,
            prop: prop,
            actual: actual,
            watcher: watcher,
            level: level
        });
    };

    var removeFromLengthSubjects = function(obj, prop, watcher){
        for (var i=0; i<lengthsubjects.length; i++) {
            var subj = lengthsubjects[i];

            if (subj.obj == obj) {
                if (!prop || subj.prop == prop) {
                    if (!watcher || subj.watcher == watcher) {
                        // if we splice off one item at position i
                        // we need to decrement i as the array is one item shorter
                        // so when we increment i in the loop statement we
                        // will land at the correct index.
                        // if it's not decremented, you won't delete all length subjects
                        lengthsubjects.splice(i--, 1);
                    }
                }
            }
        }

    };
    
    var removeFromDirtyChecklist = function(obj, prop){
        var notInUse;
        for (var i=0; i<dirtyChecklist.length; i++) {
            var n = dirtyChecklist[i];
            var watchers = n.object.watchers;
            notInUse = (
                n.object == obj 
                && (!prop || n.prop == prop)
                && watchers
                && (!prop || !watchers[prop] || watchers[prop].length == 0 )
            );
            if (notInUse)  {
                // we use the same syntax as in removeFromLengthSubjects
                dirtyChecklist.splice(i--, 1);
            }
        }

    };    

    setInterval(loop, 50);

    WatchJS.watch = watch;
    WatchJS.unwatch = unwatch;
    WatchJS.callWatchers = callWatchers;
    WatchJS.suspend = suspend; // suspend watchers    
    WatchJS.onChange = trackChange;  // track changes made to object or  it's property and return a single change object

    return WatchJS;

}));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(11);
var Axios = __webpack_require__(46);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(59);
axios.isCancel = __webpack_require__(14);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(60);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(3);
var InterceptorManager = __webpack_require__(54);
var dispatchRequest = __webpack_require__(55);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(13);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(56);
var isCancel = __webpack_require__(14);
var defaults = __webpack_require__(6);
var isAbsoluteURL = __webpack_require__(57);
var combineURLs = __webpack_require__(58);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(47);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(12);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(12);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);

/***/ })

/******/ });