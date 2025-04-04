! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase)
}(this, function(oo) {
    "use strict";
    try {
        (function() {
            function t(t) {
                return t && "object" == typeof t && "default" in t ? t : {
                    default: t
                }
            }
            var e = t(oo),
                r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                };

            function n(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var u = function() {
                return (u = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function i(t, s, a, h) {
                return new(a = a || Promise)(function(n, e) {
                    function r(t) {
                        try {
                            o(h.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(t) {
                        try {
                            o(h.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? n(t.value) : ((e = t.value) instanceof a ? e : new a(function(t) {
                            t(e)
                        })).then(r, i)
                    }
                    o((h = h.apply(t, s || [])).next())
                })
            }

            function o(n, r) {
                var i, o, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & s[0]) throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    },
                    t = {
                        next: e(0),
                        throw: e(1),
                        return: e(2)
                    };
                return "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this
                }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                                switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        s = e;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            a.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && a.label < s[1]) {
                                            a.label = s[1], s = e;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(e);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                e = r.call(n, a)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            }

            function _(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function f(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, i, o = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || 0 < e--) && !(r = o.next()).done;) s.push(r.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(f(arguments[e]));
                return t
            }

            function a(t) {
                for (var e = [], n = 0, r = 0; r < t.length; r++) {
                    var i = t.charCodeAt(r);
                    i < 128 ? e[n++] = i : (i < 2048 ? e[n++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128) : e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128), e[n++] = 63 & i | 128)
                }
                return e
            }

            function h(t) {
                try {
                    return p.decodeString(t, !0)
                } catch (t) {
                    console.error("base64Decode failed: ", t)
                }
                return null
            }
            var l = {
                    NODE_CLIENT: !1,
                    NODE_ADMIN: !1,
                    SDK_VERSION: "${JSCORE_VERSION}"
                },
                C = function(t, e) {
                    if (!t) throw c(e)
                },
                c = function(t) {
                    return new Error("Firebase Database (" + l.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t)
                },
                p = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" == typeof atob,
                    encodeByteArray: function(t, e) {
                        if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) {
                            var o = t[i],
                                s = i + 1 < t.length,
                                a = s ? t[i + 1] : 0,
                                h = i + 2 < t.length,
                                l = h ? t[i + 2] : 0,
                                u = o >> 2,
                                c = (3 & o) << 4 | a >> 4,
                                p = (15 & a) << 2 | l >> 6,
                                d = 63 & l;
                            h || (d = 64, s || (p = 64)), r.push(n[u], n[c], n[p], n[d])
                        }
                        return r.join("")
                    },
                    encodeString: function(t, e) {
                        return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(a(t), e)
                    },
                    decodeString: function(t, e) {
                        return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function(t) {
                            for (var e = [], n = 0, r = 0; n < t.length;) {
                                var i, o, s, a = t[n++];
                                a < 128 ? e[r++] = String.fromCharCode(a) : 191 < a && a < 224 ? (o = t[n++], e[r++] = String.fromCharCode((31 & a) << 6 | 63 & o)) : 239 < a && a < 365 ? (i = ((7 & a) << 18 | (63 & (o = t[n++])) << 12 | (63 & (s = t[n++])) << 6 | 63 & t[n++]) - 65536, e[r++] = String.fromCharCode(55296 + (i >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & i))) : (o = t[n++], s = t[n++], e[r++] = String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & s))
                            }
                            return e.join("")
                        }(this.decodeStringToByteArray(t, e))
                    },
                    decodeStringToByteArray: function(t, e) {
                        this.init_();
                        for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) {
                            var o = n[t.charAt(i++)],
                                s = i < t.length ? n[t.charAt(i)] : 0,
                                a = ++i < t.length ? n[t.charAt(i)] : 64,
                                h = ++i < t.length ? n[t.charAt(i)] : 64;
                            if (++i, null == o || null == s || null == a || null == h) throw Error();
                            var l, u, c = o << 2 | s >> 4;
                            r.push(c), 64 !== a && (l = s << 4 & 240 | a >> 2, r.push(l), 64 !== h && (u = a << 6 & 192 | h, r.push(u)))
                        }
                        return r
                    },
                    init_: function() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
                        }
                    }
                };

            function d(t) {
                return function t(e, n) {
                    if (!(n instanceof Object)) return n;
                    switch (n.constructor) {
                        case Date:
                            var r = n;
                            return new Date(r.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return n
                    }
                    for (var i in n) n.hasOwnProperty(i) && (e[i] = t(e[i], n[i]));
                    return e
                }(void 0, t)
            }
            var y = (v.prototype.wrapCallback = function(n) {
                var r = this;
                return function(t, e) {
                    t ? r.reject(t) : r.resolve(e), "function" == typeof n && (r.promise.catch(function() {}), 1 === n.length ? n(t) : n(t, e))
                }
            }, v);

            function v() {
                var n = this;
                this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise(function(t, e) {
                    n.resolve = t, n.reject = e
                })
            }

            function g() {
                return "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "")
            }

            function m() {
                return !0 === l.NODE_ADMIN
            }
            var E, w = "FirebaseError",
                b = (n(T, E = Error), T);

            function T(t, e) {
                var n = E.call(this, e) || this;
                return n.code = t, n.name = w, Object.setPrototypeOf(n, T.prototype), Error.captureStackTrace && Error.captureStackTrace(n, S.prototype.create), n
            }
            var S = (I.prototype.create = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                for (var r, i = e[0] || {}, o = this.service + "/" + t, s = this.errors[t], a = s ? (r = i, s.replace(N, function(t, e) {
                        var n = r[e];
                        return null != n ? String(n) : "<" + e + "?>"
                    })) : "Error", h = this.serviceName + ": " + a + " (" + o + ").", l = new b(o, h), u = 0, c = Object.keys(i); u < c.length; u++) {
                    var p = c[u];
                    "_" !== p.slice(-1) && (p in l && console.warn('Overwriting FirebaseError base field "' + p + '" can cause unexpected behavior.'), l[p] = i[p])
                }
                return l
            }, I);

            function I(t, e, n) {
                this.service = t, this.serviceName = e, this.errors = n
            }
            var N = /\{\$([^}]+)}/g;

            function R(t) {
                return JSON.parse(t)
            }

            function P(t) {
                return JSON.stringify(t)
            }

            function D(t) {
                var e = {},
                    n = {},
                    r = {},
                    i = "";
                try {
                    var o = t.split("."),
                        e = R(h(o[0]) || ""),
                        n = R(h(o[1]) || ""),
                        i = o[2],
                        r = n.d || {};
                    delete n.d
                } catch (t) {}
                return {
                    header: e,
                    claims: n,
                    data: r,
                    signature: i
                }
            }

            function O(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function x(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0
            }

            function k(t) {
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }

            function F(t, e, n) {
                var r, i = {};
                for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = e.call(n, t[r], r, t));
                return i
            }
            var A = (L.prototype.reset = function() {
                this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
            }, L.prototype.compress_ = function(t, e) {
                e = e || 0;
                var n = this.W_;
                if ("string" == typeof t)
                    for (var r = 0; r < 16; r++) n[r] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
                else
                    for (r = 0; r < 16; r++) n[r] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
                for (r = 16; r < 80; r++) {
                    var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                    n[r] = 4294967295 & (i << 1 | i >>> 31)
                }
                for (var o, s, a = this.chain_[0], h = this.chain_[1], l = this.chain_[2], u = this.chain_[3], c = this.chain_[4], r = 0; r < 80; r++) {
                    s = r < 40 ? r < 20 ? (o = u ^ h & (l ^ u), 1518500249) : (o = h ^ l ^ u, 1859775393) : r < 60 ? (o = h & l | u & (h | l), 2400959708) : (o = h ^ l ^ u, 3395469782);
                    i = (a << 5 | a >>> 27) + o + c + s + n[r] & 4294967295, c = u, u = l, l = 4294967295 & (h << 30 | h >>> 2), h = a, a = i
                }
                this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + h & 4294967295, this.chain_[2] = this.chain_[2] + l & 4294967295, this.chain_[3] = this.chain_[3] + u & 4294967295, this.chain_[4] = this.chain_[4] + c & 4294967295
            }, L.prototype.update = function(t, e) {
                if (null != t) {
                    void 0 === e && (e = t.length);
                    for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e;) {
                        if (0 === o)
                            for (; r <= n;) this.compress_(t, r), r += this.blockSize;
                        if ("string" == typeof t) {
                            for (; r < e;)
                                if (i[o] = t.charCodeAt(r), ++r, ++o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                        } else
                            for (; r < e;)
                                if (i[o] = t[r], ++r, ++o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                    }
                    this.inbuf_ = o, this.total_ += e
                }
            }, L.prototype.digest = function() {
                var t = [],
                    e = 8 * this.total_;
                this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                for (var n = this.blockSize - 1; 56 <= n; n--) this.buf_[n] = 255 & e, e /= 256;
                this.compress_(this.buf_);
                for (var r = 0, n = 0; n < 5; n++)
                    for (var i = 24; 0 <= i; i -= 8) t[r] = this.chain_[n] >> i & 255, ++r;
                return t
            }, L);

            function L() {
                this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
                this.reset()
            }

            function M(t, e, n, r) {
                var i;
                if (r < e ? i = "at least " + e : n < r && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(t + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
            }

            function W(t, e, n) {
                var r = "";
                switch (e) {
                    case 1:
                        r = n ? "first" : "First";
                        break;
                    case 2:
                        r = n ? "second" : "Second";
                        break;
                    case 3:
                        r = n ? "third" : "Third";
                        break;
                    case 4:
                        r = n ? "fourth" : "Fourth";
                        break;
                    default:
                        throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
                }
                var i = t + " failed: ";
                return i += r + " argument "
            }

            function Q(t, e, n, r) {
                if ((!r || n) && "function" != typeof n) throw new Error(W(t, e, r) + "must be a valid function.")
            }

            function q(t, e, n, r) {
                if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(W(t, e, r) + "must be a valid context object.")
            }

            function U(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    r < 128 ? e++ : r < 2048 ? e += 2 : 55296 <= r && r <= 56319 ? (e += 4, n++) : e += 3
                }
                return e
            }
            var V, H, j;

            function B() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                for (var r = Array(t), i = 0, e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                return r
            }(j = H = H || {})[j.DEBUG = 0] = "DEBUG", j[j.VERBOSE = 1] = "VERBOSE", j[j.INFO = 2] = "INFO", j[j.WARN = 3] = "WARN", j[j.ERROR = 4] = "ERROR", j[j.SILENT = 5] = "SILENT";

            function K(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (!(e < t.logLevel)) {
                    var i = (new Date).toISOString(),
                        o = G[e];
                    if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                    console[o].apply(console, B(["[" + i + "]  " + t.name + ":"], n))
                }
            }
            var Y = {
                    debug: H.DEBUG,
                    verbose: H.VERBOSE,
                    info: H.INFO,
                    warn: H.WARN,
                    error: H.ERROR,
                    silent: H.SILENT
                },
                z = H.INFO,
                G = ((V = {})[H.DEBUG] = "log", V[H.VERBOSE] = "log", V[H.INFO] = "info", V[H.WARN] = "warn", V[H.ERROR] = "error", V),
                X = (Object.defineProperty($.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel
                    },
                    set: function(t) {
                        if (!(t in H)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
                        this._logLevel = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), $.prototype.setLogLevel = function(t) {
                    this._logLevel = "string" == typeof t ? Y[t] : t
                }, Object.defineProperty($.prototype, "logHandler", {
                    get: function() {
                        return this._logHandler
                    },
                    set: function(t) {
                        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty($.prototype, "userLogHandler", {
                    get: function() {
                        return this._userLogHandler
                    },
                    set: function(t) {
                        this._userLogHandler = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), $.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, B([this, H.DEBUG], t)), this._logHandler.apply(this, B([this, H.DEBUG], t))
                }, $.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, B([this, H.VERBOSE], t)), this._logHandler.apply(this, B([this, H.VERBOSE], t))
                }, $.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, B([this, H.INFO], t)), this._logHandler.apply(this, B([this, H.INFO], t))
                }, $.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, B([this, H.WARN], t)), this._logHandler.apply(this, B([this, H.WARN], t))
                }, $.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, B([this, H.ERROR], t)), this._logHandler.apply(this, B([this, H.ERROR], t))
                }, $);

            function $(t) {
                this.name = t, this._logLevel = z, this._logHandler = K, this._userLogHandler = null
            }
            var J = (Z.prototype.setInstantiationMode = function(t) {
                return this.instantiationMode = t, this
            }, Z.prototype.setMultipleInstances = function(t) {
                return this.multipleInstances = t, this
            }, Z.prototype.setServiceProps = function(t) {
                return this.serviceProps = t, this
            }, Z);

            function Z(t, e, n) {
                this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
            }
            var tt = (et.prototype.set = function(t, e) {
                null == e ? this.domStorage_.removeItem(this.prefixedName_(t)) : this.domStorage_.setItem(this.prefixedName_(t), P(e))
            }, et.prototype.get = function(t) {
                var e = this.domStorage_.getItem(this.prefixedName_(t));
                return null == e ? null : R(e)
            }, et.prototype.remove = function(t) {
                this.domStorage_.removeItem(this.prefixedName_(t))
            }, et.prototype.prefixedName_ = function(t) {
                return this.prefix_ + t
            }, et.prototype.toString = function() {
                return this.domStorage_.toString()
            }, et);

            function et(t) {
                this.domStorage_ = t, this.prefix_ = "firebase:"
            }
            var nt = (rt.prototype.set = function(t, e) {
                null == e ? delete this.cache_[t] : this.cache_[t] = e
            }, rt.prototype.get = function(t) {
                return O(this.cache_, t) ? this.cache_[t] : null
            }, rt.prototype.remove = function(t) {
                delete this.cache_[t]
            }, rt);

            function rt() {
                this.cache_ = {}, this.isInMemoryStorage = !0
            }

            function it(t) {
                try {
                    if ("undefined" != typeof window && void 0 !== window[t]) {
                        var e = window[t];
                        return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new tt(e)
                    }
                } catch (t) {}
                return new nt
            }

            function ot(t) {
                var e = function(t) {
                        for (var e = [], n = 0, r = 0; r < t.length; r++) {
                            var i, o = t.charCodeAt(r);
                            55296 <= o && o <= 56319 && (i = o - 55296, C(++r < t.length, "Surrogate pair missing trail surrogate."), o = 65536 + (i << 10) + (t.charCodeAt(r) - 56320)), o < 128 ? e[n++] = o : (o < 2048 ? e[n++] = o >> 6 | 192 : (o < 65536 ? e[n++] = o >> 12 | 224 : (e[n++] = o >> 18 | 240, e[n++] = o >> 12 & 63 | 128), e[n++] = o >> 6 & 63 | 128), e[n++] = 63 & o | 128)
                        }
                        return e
                    }(t),
                    n = new A;
                n.update(e);
                var r = n.digest();
                return p.encodeByteArray(r)
            }

            function st(t, e) {
                C(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? (vt.logLevel = H.VERBOSE, Ct = vt.log.bind(vt), e && yt.set("logging_enabled", !0)) : "function" == typeof t ? Ct = t : (Ct = null, yt.remove("logging_enabled"))
            }

            function at() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = "FIREBASE INTERNAL ERROR: " + mt.apply(void 0, s(t));
                vt.error(n)
            }

            function ht() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = "FIREBASE FATAL ERROR: " + mt.apply(void 0, s(t));
                throw vt.error(n), new Error(n)
            }

            function lt() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = "FIREBASE WARNING: " + mt.apply(void 0, s(t));
                vt.warn(n)
            }

            function ut(t) {
                return "number" == typeof t && (t != t || t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY)
            }

            function ct(t, e) {
                return t === e ? 0 : t < e ? -1 : 1
            }

            function pt(t, e) {
                if (e && t in e) return e[t];
                throw new Error("Missing required key (" + t + ") in object: " + P(e))
            }

            function dt(t, e) {
                var n = t.length;
                if (n <= e) return [t];
                for (var r = [], i = 0; i < n; i += e) n < i + e ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
                return r
            }
            var ft, _t = it("localStorage"),
                yt = it("sessionStorage"),
                vt = new X("@firebase/database"),
                gt = (ft = 1, function() {
                    return ft++
                }),
                mt = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = "", r = 0; r < t.length; r++) {
                        var i = t[r];
                        Array.isArray(i) || i && "object" == typeof i && "number" == typeof i.length ? n += mt.apply(null, i) : n += "object" == typeof i ? P(i) : i, n += " "
                    }
                    return n
                },
                Ct = null,
                Et = !0,
                wt = function() {
                    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    !0 === Et && (Et = !1, null === Ct && !0 === yt.get("logging_enabled") && st(!0)), Ct && (t = mt.apply(null, e), Ct(t))
                },
                bt = function(n) {
                    return function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        wt.apply(void 0, s([n], t))
                    }
                },
                Tt = "[MIN_NAME]",
                St = "[MAX_NAME]",
                It = function(t, e) {
                    if (t === e) return 0;
                    if (t === Tt || e === St) return -1;
                    if (e === Tt || t === St) return 1;
                    var n = kt(t),
                        r = kt(e);
                    return null !== n ? null !== r ? n - r == 0 ? t.length - e.length : n - r : -1 : null === r && t < e ? -1 : 1
                },
                Nt = function(t) {
                    if ("object" != typeof t || null === t) return P(t);
                    var e, n = [];
                    for (e in t) n.push(e);
                    n.sort();
                    for (var r = "{", i = 0; i < n.length; i++) 0 !== i && (r += ","), r += P(n[i]), r += ":", r += Nt(t[n[i]]);
                    return r += "}"
                };

            function Rt(t, e) {
                for (var n in t) t.hasOwnProperty(n) && e(n, t[n])
            }

            function Pt(t) {
                var e, n, r, i;
                C(!ut(t), "Invalid JSON number"), 0 === t ? e = 1 / t == -1 / (r = n = 0) ? 1 : 0 : (e = t < 0, r = (t = Math.abs(t)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023, Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, Math.round(t / Math.pow(2, -1074))));
                for (var o = [], s = 52; s; --s) o.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                for (s = 11; s; --s) o.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                o.push(e ? 1 : 0), o.reverse();
                var a = o.join(""),
                    h = "";
                for (s = 0; s < 64; s += 8) {
                    var l = parseInt(a.substr(s, 8), 2).toString(16);
                    1 === l.length && (l = "0" + l), h += l
                }
                return h.toLowerCase()
            }

            function Dt(t) {
                try {
                    t()
                } catch (e) {
                    setTimeout(function() {
                        var t = e.stack || "";
                        throw lt("Exception was thrown by user callback.", t), e
                    }, Math.floor(0))
                }
            }

            function Ot(t, e) {
                var n = setTimeout(t, e);
                return "object" == typeof n && n.unref && n.unref(), n
            }
            var xt = new RegExp("^-?(0*)\\d{1,10}$"),
                kt = function(t) {
                    if (xt.test(t)) {
                        var e = Number(t);
                        if (-2147483648 <= e && e <= 2147483647) return e
                    }
                    return null
                },
                Ft = (Object.defineProperty(At, "Empty", {
                    get: function() {
                        return new At("")
                    },
                    enumerable: !1,
                    configurable: !0
                }), At.prototype.getFront = function() {
                    return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_]
                }, At.prototype.getLength = function() {
                    return this.pieces_.length - this.pieceNum_
                }, At.prototype.popFront = function() {
                    var t = this.pieceNum_;
                    return t < this.pieces_.length && t++, new At(this.pieces_, t)
                }, At.prototype.getBack = function() {
                    return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null
                }, At.prototype.toString = function() {
                    for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + this.pieces_[e]);
                    return t || "/"
                }, At.prototype.toUrlEncodedString = function() {
                    for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + encodeURIComponent(String(this.pieces_[e])));
                    return t || "/"
                }, At.prototype.slice = function(t) {
                    return void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t)
                }, At.prototype.parent = function() {
                    if (this.pieceNum_ >= this.pieces_.length) return null;
                    for (var t = [], e = this.pieceNum_; e < this.pieces_.length - 1; e++) t.push(this.pieces_[e]);
                    return new At(t, 0)
                }, At.prototype.child = function(t) {
                    for (var e = [], n = this.pieceNum_; n < this.pieces_.length; n++) e.push(this.pieces_[n]);
                    if (t instanceof At)
                        for (n = t.pieceNum_; n < t.pieces_.length; n++) e.push(t.pieces_[n]);
                    else
                        for (var r = t.split("/"), n = 0; n < r.length; n++) 0 < r[n].length && e.push(r[n]);
                    return new At(e, 0)
                }, At.prototype.isEmpty = function() {
                    return this.pieceNum_ >= this.pieces_.length
                }, At.relativePath = function(t, e) {
                    var n = t.getFront(),
                        r = e.getFront();
                    if (null === n) return e;
                    if (n === r) return At.relativePath(t.popFront(), e.popFront());
                    throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")")
                }, At.comparePaths = function(t, e) {
                    for (var n = t.slice(), r = e.slice(), i = 0; i < n.length && i < r.length; i++) {
                        var o = It(n[i], r[i]);
                        if (0 !== o) return o
                    }
                    return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
                }, At.prototype.equals = function(t) {
                    if (this.getLength() !== t.getLength()) return !1;
                    for (var e = this.pieceNum_, n = t.pieceNum_; e <= this.pieces_.length; e++, n++)
                        if (this.pieces_[e] !== t.pieces_[n]) return !1;
                    return !0
                }, At.prototype.contains = function(t) {
                    var e = this.pieceNum_,
                        n = t.pieceNum_;
                    if (this.getLength() > t.getLength()) return !1;
                    for (; e < this.pieces_.length;) {
                        if (this.pieces_[e] !== t.pieces_[n]) return !1;
                        ++e, ++n
                    }
                    return !0
                }, At);

            function At(t, e) {
                if (void 0 === e) {
                    this.pieces_ = t.split("/");
                    for (var n = 0, r = 0; r < this.pieces_.length; r++) 0 < this.pieces_[r].length && (this.pieces_[n] = this.pieces_[r], n++);
                    this.pieces_.length = n, this.pieceNum_ = 0
                } else this.pieces_ = t, this.pieceNum_ = e
            }
            var Lt = (Object.defineProperty(Mt, "MAX_PATH_DEPTH", {
                get: function() {
                    return 32
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Mt, "MAX_PATH_LENGTH_BYTES", {
                get: function() {
                    return 768
                },
                enumerable: !1,
                configurable: !0
            }), Mt.prototype.push = function(t) {
                0 < this.parts_.length && (this.byteLength_ += 1), this.parts_.push(t), this.byteLength_ += U(t), this.checkValid_()
            }, Mt.prototype.pop = function() {
                var t = this.parts_.pop();
                this.byteLength_ -= U(t), 0 < this.parts_.length && --this.byteLength_
            }, Mt.prototype.checkValid_ = function() {
                if (this.byteLength_ > Mt.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + Mt.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
                if (this.parts_.length > Mt.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Mt.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString())
            }, Mt.prototype.toErrorString = function() {
                return 0 === this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'"
            }, Mt);

            function Mt(t, e) {
                this.errorPrefix_ = e, this.parts_ = t.slice(), this.byteLength_ = Math.max(1, this.parts_.length);
                for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += U(this.parts_[n]);
                this.checkValid_()
            }
            var Wt = "firebaseio.com",
                Qt = "websocket",
                qt = "long_polling",
                Ut = (Vt.prototype.needsQueryParam = function() {
                    return this.host !== this.internalHost || this.isCustomHost() || this.includeNamespaceInQueryParams
                }, Vt.prototype.isCacheableHost = function() {
                    return "s-" === this.internalHost.substr(0, 2)
                }, Vt.prototype.isDemoHost = function() {
                    return "firebaseio-demo.com" === this.domain
                }, Vt.prototype.isCustomHost = function() {
                    return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain
                }, Vt.prototype.updateHost = function(t) {
                    t !== this.internalHost && (this.internalHost = t, this.isCacheableHost() && _t.set("host:" + this.host, this.internalHost))
                }, Vt.prototype.connectionURL = function(t, e) {
                    var n;
                    if (C("string" == typeof t, "typeof type must == string"), C("object" == typeof e, "typeof params must == object"), t === Qt) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                    else {
                        if (t !== qt) throw new Error("Unknown connection type: " + t);
                        n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
                    }
                    this.needsQueryParam() && (e.ns = this.namespace);
                    var r = [];
                    return Rt(e, function(t, e) {
                        r.push(t + "=" + e)
                    }), n + r.join("&")
                }, Vt.prototype.toString = function() {
                    var t = this.toURLString();
                    return this.persistenceKey && (t += "<" + this.persistenceKey + ">"), t
                }, Vt.prototype.toURLString = function() {
                    return (this.secure ? "https://" : "http://") + this.host
                }, Vt);

            function Vt(t, e, n, r, i, o, s) {
                void 0 === i && (i = !1), void 0 === o && (o = ""), void 0 === s && (s = !1), this.secure = e, this.namespace = n, this.webSocketOnly = r, this.nodeAdmin = i, this.persistenceKey = o, this.includeNamespaceInQueryParams = s, this.host = t.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = _t.get("host:" + t) || this.host
            }

            function Ht(t, e) {
                var n = ee(t),
                    r = n.namespace;
                "firebase.com" === n.domain && ht(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" !== r || "localhost" === n.domain || ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                var i = "ws" === n.scheme || "wss" === n.scheme;
                return {
                    repoInfo: new Ut(n.host, n.secure, r, e, i, "", r !== n.subdomain),
                    path: new Ft(n.pathString)
                }
            }

            function jt(t) {
                return "string" == typeof t && 0 !== t.length && !ne.test(t)
            }

            function Bt(t) {
                return "string" == typeof t && 0 !== t.length && !re.test(t)
            }

            function Kt(t) {
                return null === t || "string" == typeof t || "number" == typeof t && !ut(t) || t && "object" == typeof t && O(t, ".sv")
            }

            function Yt(t, e, n, r, i) {
                i && void 0 === n || oe(W(t, e, i), n, r)
            }

            function zt(t, e, n, r, i) {
                if (!i || void 0 !== n) {
                    var o = W(t, e, i);
                    if (!n || "object" != typeof n || Array.isArray(n)) throw new Error(o + " must be an object containing the children to replace.");
                    var s = [];
                    Rt(n, function(t, e) {
                            var n = new Ft(t);
                            if (oe(o, e, r.child(n)), ".priority" === n.getBack() && !Kt(e)) throw new Error(o + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                            s.push(n)
                        }),
                        function(t, e) {
                            for (var n, r = 0; r < e.length; r++)
                                for (var i = (n = e[r]).slice(), o = 0; o < i.length; o++)
                                    if ((".priority" !== i[o] || o !== i.length - 1) && !jt(i[o])) throw new Error(t + "contains an invalid key (" + i[o] + ") in path " + n.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                            e.sort(Ft.comparePaths);
                            var s = null;
                            for (r = 0; r < e.length; r++) {
                                if (n = e[r], null !== s && s.contains(n)) throw new Error(t + "contains a path " + s.toString() + " that is ancestor of another path " + n.toString());
                                s = n
                            }
                        }(o, s)
                }
            }

            function Gt(t, e, n, r) {
                if (!r || void 0 !== n) {
                    if (ut(n)) throw new Error(W(t, e, r) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                    if (!Kt(n)) throw new Error(W(t, e, r) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
                }
            }

            function Xt(t, e, n, r) {
                if (!r || void 0 !== n) switch (n) {
                    case "value":
                    case "child_added":
                    case "child_removed":
                    case "child_changed":
                    case "child_moved":
                        break;
                    default:
                        throw new Error(W(t, e, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                }
            }

            function $t(t, e, n, r) {
                if (!(r && void 0 === n || jt(n))) throw new Error(W(t, e, r) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
            }

            function Jt(t, e, n, r) {
                if (!(r && void 0 === n || Bt(n))) throw new Error(W(t, e, r) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
            }

            function Zt(t, e) {
                if (".info" === e.getFront()) throw new Error(t + " failed = Can't modify data under /.info/")
            }

            function te(t, e, n) {
                var r, i = n.path.toString();
                if ("string" != typeof n.repoInfo.host || 0 === n.repoInfo.host.length || !jt(n.repoInfo.namespace) && "localhost" !== n.repoInfo.host.split(":")[0] || 0 !== i.length && (r = (r = i) && r.replace(/^\/*\.info(\/|$)/, "/"), !Bt(r))) throw new Error(W(t, e, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
            }
            var ee = function(t) {
                    var e, n, r, i, o, s, a = "",
                        h = "",
                        l = "",
                        u = "",
                        c = "",
                        p = !0,
                        d = "https",
                        f = 443;
                    return "string" == typeof t && (0 <= (i = t.indexOf("//")) && (d = t.substring(0, i - 1), t = t.substring(i + 2)), -1 === (e = t.indexOf("/")) && (e = t.length), -1 === (n = t.indexOf("?")) && (n = t.length), a = t.substring(0, Math.min(e, n)), e < n && (u = function(t) {
                        for (var e = "", n = t.split("/"), r = 0; r < n.length; r++)
                            if (0 < n[r].length) {
                                var i = n[r];
                                try {
                                    i = decodeURIComponent(i.replace(/\+/g, " "))
                                } catch (t) {}
                                e += "/" + i
                            }
                        return e
                    }(t.substring(e, n))), r = function(t) {
                        var e, n, r = {};
                        "?" === t.charAt(0) && (t = t.substring(1));
                        try {
                            for (var i = _(t.split("&")), o = i.next(); !o.done; o = i.next()) {
                                var s, a = o.value;
                                0 !== a.length && (2 === (s = a.split("=")).length ? r[decodeURIComponent(s[0])] = decodeURIComponent(s[1]) : lt("Invalid query segment '" + a + "' in query '" + t + "'"))
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return r
                    }(t.substring(Math.min(t.length, n))), 0 <= (i = a.indexOf(":")) ? (p = "https" === d || "wss" === d, f = parseInt(a.substring(i + 1), 10)) : i = a.length, "localhost" === (o = a.slice(0, i)).toLowerCase() ? h = "localhost" : o.split(".").length <= 2 ? h = o : (s = a.indexOf("."), l = a.substring(0, s).toLowerCase(), h = a.substring(s + 1), c = l), "ns" in r && (c = r.ns)), {
                        host: a,
                        port: f,
                        domain: h,
                        subdomain: l,
                        secure: p,
                        scheme: d,
                        pathString: u,
                        namespace: c
                    }
                },
                ne = /[\[\].#$\/\u0000-\u001F\u007F]/,
                re = /[\[\].#$\u0000-\u001F\u007F]/,
                ie = 10485760,
                oe = function(n, t, e) {
                    var r = e instanceof Ft ? new Lt(e, n) : e;
                    if (void 0 === t) throw new Error(n + "contains undefined " + r.toErrorString());
                    if ("function" == typeof t) throw new Error(n + "contains a function " + r.toErrorString() + " with contents = " + t.toString());
                    if (ut(t)) throw new Error(n + "contains " + t.toString() + " " + r.toErrorString());
                    if ("string" == typeof t && t.length > ie / 3 && U(t) > ie) throw new Error(n + "contains a string greater than " + ie + " utf8 bytes " + r.toErrorString() + " ('" + t.substring(0, 50) + "...')");
                    if (t && "object" == typeof t) {
                        var i = !1,
                            o = !1;
                        if (Rt(t, function(t, e) {
                                if (".value" === t) i = !0;
                                else if (".priority" !== t && ".sv" !== t && (o = !0, !jt(t))) throw new Error(n + " contains an invalid key (" + t + ") " + r.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                r.push(t), oe(n, e, r), r.pop()
                            }), i && o) throw new Error(n + ' contains ".value" child ' + r.toErrorString() + " in addition to actual children.")
                    }
                },
                se = (ae.prototype.cancel = function(t) {
                    M("OnDisconnect.cancel", 0, 1, arguments.length), Q("OnDisconnect.cancel", 1, t, !0);
                    var e = new y;
                    return this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)), e.promise
                }, ae.prototype.remove = function(t) {
                    M("OnDisconnect.remove", 0, 1, arguments.length), Zt("OnDisconnect.remove", this.path_), Q("OnDisconnect.remove", 1, t, !0);
                    var e = new y;
                    return this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)), e.promise
                }, ae.prototype.set = function(t, e) {
                    M("OnDisconnect.set", 1, 2, arguments.length), Zt("OnDisconnect.set", this.path_), Yt("OnDisconnect.set", 1, t, this.path_, !1), Q("OnDisconnect.set", 2, e, !0);
                    var n = new y;
                    return this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)), n.promise
                }, ae.prototype.setWithPriority = function(t, e, n) {
                    M("OnDisconnect.setWithPriority", 2, 3, arguments.length), Zt("OnDisconnect.setWithPriority", this.path_), Yt("OnDisconnect.setWithPriority", 1, t, this.path_, !1), Gt("OnDisconnect.setWithPriority", 2, e, !1), Q("OnDisconnect.setWithPriority", 3, n, !0);
                    var r = new y;
                    return this.repo_.onDisconnectSetWithPriority(this.path_, t, e, r.wrapCallback(n)), r.promise
                }, ae.prototype.update = function(t, e) {
                    if (M("OnDisconnect.update", 1, 2, arguments.length), Zt("OnDisconnect.update", this.path_), Array.isArray(t)) {
                        for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];
                        t = n, lt("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                    }
                    zt("OnDisconnect.update", 1, t, this.path_, !1), Q("OnDisconnect.update", 2, e, !0);
                    var i = new y;
                    return this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)), i.promise
                }, ae);

            function ae(t, e) {
                this.repo_ = t, this.path_ = e
            }
            var he = (le.prototype.toJSON = function() {
                return M("TransactionResult.toJSON", 0, 1, arguments.length), {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON()
                }
            }, le);

            function le(t, e) {
                this.committed = t, this.snapshot = e
            }
            var ue, ce, pe, de = (ue = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", ce = 0, pe = [], function(t) {
                    var e = t === ce;
                    ce = t;
                    for (var n = new Array(8), r = 7; 0 <= r; r--) n[r] = ue.charAt(t % 64), t = Math.floor(t / 64);
                    C(0 === t, "Cannot push at time == 0");
                    var i = n.join("");
                    if (e) {
                        for (r = 11; 0 <= r && 63 === pe[r]; r--) pe[r] = 0;
                        pe[r]++
                    } else
                        for (r = 0; r < 12; r++) pe[r] = Math.floor(64 * Math.random());
                    for (r = 0; r < 12; r++) i += ue.charAt(pe[r]);
                    return C(20 === i.length, "nextPushId: Length should be 20."), i
                }),
                fe = (_e.Wrap = function(t, e) {
                    return new _e(t, e)
                }, _e);

            function _e(t, e) {
                this.name = t, this.node = e
            }
            var ye, ve = (ge.prototype.getCompare = function() {
                return this.compare.bind(this)
            }, ge.prototype.indexedValueChanged = function(t, e) {
                var n = new fe(Tt, t),
                    r = new fe(Tt, e);
                return 0 !== this.compare(n, r)
            }, ge.prototype.minPost = function() {
                return fe.MIN
            }, ge);

            function ge() {}
            var me, Ce = (n(Ee, me = ve), Object.defineProperty(Ee, "__EMPTY_NODE", {
                get: function() {
                    return ye
                },
                set: function(t) {
                    ye = t
                },
                enumerable: !1,
                configurable: !0
            }), Ee.prototype.compare = function(t, e) {
                return It(t.name, e.name)
            }, Ee.prototype.isDefinedOn = function(t) {
                throw c("KeyIndex.isDefinedOn not expected to be called.")
            }, Ee.prototype.indexedValueChanged = function(t, e) {
                return !1
            }, Ee.prototype.minPost = function() {
                return fe.MIN
            }, Ee.prototype.maxPost = function() {
                return new fe(St, ye)
            }, Ee.prototype.makePost = function(t, e) {
                return C("string" == typeof t, "KeyIndex indexValue must always be a string."), new fe(t, ye)
            }, Ee.prototype.toString = function() {
                return ".key"
            }, Ee);

            function Ee() {
                return null !== me && me.apply(this, arguments) || this
            }
            var we, be = new Ce;

            function Te(t) {
                return "number" == typeof t ? "number:" + Pt(t) : "string:" + t
            }
            var Se, Ie, Ne, Re, Pe = function(t) {
                    var e;
                    t.isLeafNode() ? (e = t.val(), C("string" == typeof e || "number" == typeof e || "object" == typeof e && O(e, ".sv"), "Priority must be a string or number.")) : C(t === we || t.isEmpty(), "priority of unexpected type."), C(t === we || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                },
                De = (Object.defineProperty(Oe, "__childrenNodeConstructor", {
                    get: function() {
                        return Se
                    },
                    set: function(t) {
                        Se = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Oe.prototype.isLeafNode = function() {
                    return !0
                }, Oe.prototype.getPriority = function() {
                    return this.priorityNode_
                }, Oe.prototype.updatePriority = function(t) {
                    return new Oe(this.value_, t)
                }, Oe.prototype.getImmediateChild = function(t) {
                    return ".priority" === t ? this.priorityNode_ : Oe.__childrenNodeConstructor.EMPTY_NODE
                }, Oe.prototype.getChild = function(t) {
                    return t.isEmpty() ? this : ".priority" === t.getFront() ? this.priorityNode_ : Oe.__childrenNodeConstructor.EMPTY_NODE
                }, Oe.prototype.hasChild = function() {
                    return !1
                }, Oe.prototype.getPredecessorChildName = function(t, e) {
                    return null
                }, Oe.prototype.updateImmediateChild = function(t, e) {
                    return ".priority" === t ? this.updatePriority(e) : e.isEmpty() && ".priority" !== t ? this : Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, e).updatePriority(this.priorityNode_)
                }, Oe.prototype.updateChild = function(t, e) {
                    var n = t.getFront();
                    return null === n ? e : e.isEmpty() && ".priority" !== n ? this : (C(".priority" !== n || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(n, Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), e)))
                }, Oe.prototype.isEmpty = function() {
                    return !1
                }, Oe.prototype.numChildren = function() {
                    return 0
                }, Oe.prototype.forEachChild = function(t, e) {
                    return !1
                }, Oe.prototype.val = function(t) {
                    return t && !this.getPriority().isEmpty() ? {
                        ".value": this.getValue(),
                        ".priority": this.getPriority().val()
                    } : this.getValue()
                }, Oe.prototype.hash = function() {
                    var t, e;
                    return null === this.lazyHash_ && (t = "", this.priorityNode_.isEmpty() || (t += "priority:" + Te(this.priorityNode_.val()) + ":"), t += (e = typeof this.value_) + ":", t += "number" == e ? Pt(this.value_) : this.value_, this.lazyHash_ = ot(t)), this.lazyHash_
                }, Oe.prototype.getValue = function() {
                    return this.value_
                }, Oe.prototype.compareTo = function(t) {
                    return t === Oe.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof Oe.__childrenNodeConstructor ? -1 : (C(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t))
                }, Oe.prototype.compareToLeafNode_ = function(t) {
                    var e = typeof t.value_,
                        n = typeof this.value_,
                        r = Oe.VALUE_TYPE_ORDER.indexOf(e),
                        i = Oe.VALUE_TYPE_ORDER.indexOf(n);
                    return C(0 <= r, "Unknown leaf type: " + e), C(0 <= i, "Unknown leaf type: " + n), r === i ? "object" == n ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : i - r
                }, Oe.prototype.withIndex = function() {
                    return this
                }, Oe.prototype.isIndexed = function() {
                    return !0
                }, Oe.prototype.equals = function(t) {
                    return t === this || !!t.isLeafNode() && (this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_))
                }, Oe.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], Oe);

            function Oe(t, e) {
                void 0 === e && (e = Oe.__childrenNodeConstructor.EMPTY_NODE), this.value_ = t, this.priorityNode_ = e, this.lazyHash_ = null, C(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Pe(this.priorityNode_)
            }

            function xe() {
                return null !== Re && Re.apply(this, arguments) || this
            }
            var ke = new(n(xe, Re = ve), xe.prototype.compare = function(t, e) {
                    var n = t.node.getPriority(),
                        r = e.node.getPriority(),
                        i = n.compareTo(r);
                    return 0 === i ? It(t.name, e.name) : i
                }, xe.prototype.isDefinedOn = function(t) {
                    return !t.getPriority().isEmpty()
                }, xe.prototype.indexedValueChanged = function(t, e) {
                    return !t.getPriority().equals(e.getPriority())
                }, xe.prototype.minPost = function() {
                    return fe.MIN
                }, xe.prototype.maxPost = function() {
                    return new fe(St, new De("[PRIORITY-POST]", Ne))
                }, xe.prototype.makePost = function(t, e) {
                    var n = Ie(t);
                    return new fe(e, new De("[PRIORITY-POST]", n))
                }, xe.prototype.toString = function() {
                    return ".priority"
                }, xe),
                Fe = (Ae.prototype.getNext = function() {
                    if (0 === this.nodeStack_.length) return null;
                    var t = this.nodeStack_.pop(),
                        e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                            key: t.key,
                            value: t.value
                        };
                    if (this.isReverse_)
                        for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
                    else
                        for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
                    return e
                }, Ae.prototype.hasNext = function() {
                    return 0 < this.nodeStack_.length
                }, Ae.prototype.peek = function() {
                    if (0 === this.nodeStack_.length) return null;
                    var t = this.nodeStack_[this.nodeStack_.length - 1];
                    return this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                        key: t.key,
                        value: t.value
                    }
                }, Ae);

            function Ae(t, e, n, r, i) {
                void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];
                for (var o = 1; !t.isEmpty();)
                    if (o = e ? n(t.key, e) : 1, r && (o *= -1), o < 0) t = this.isReverse_ ? t.left : t.right;
                    else {
                        if (0 === o) {
                            this.nodeStack_.push(t);
                            break
                        }
                        this.nodeStack_.push(t), t = this.isReverse_ ? t.right : t.left
                    }
            }
            var Le = (Me.prototype.copy = function(t, e, n, r, i) {
                return new Me(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
            }, Me.prototype.count = function() {
                return this.left.count() + 1 + this.right.count()
            }, Me.prototype.isEmpty = function() {
                return !1
            }, Me.prototype.inorderTraversal = function(t) {
                return this.left.inorderTraversal(t) || !!t(this.key, this.value) || this.right.inorderTraversal(t)
            }, Me.prototype.reverseTraversal = function(t) {
                return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
            }, Me.prototype.min_ = function() {
                return this.left.isEmpty() ? this : this.left.min_()
            }, Me.prototype.minKey = function() {
                return this.min_().key
            }, Me.prototype.maxKey = function() {
                return this.right.isEmpty() ? this.key : this.right.maxKey()
            }, Me.prototype.insert = function(t, e, n) {
                var r = this,
                    i = n(t, r.key);
                return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp_()
            }, Me.prototype.removeMin_ = function() {
                if (this.left.isEmpty()) return qe.EMPTY_NODE;
                var t = this;
                return t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()), (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_()
            }, Me.prototype.remove = function(t, e) {
                var n, r = this;
                if (e(t, r.key) < 0) r.left.isEmpty() || r.left.isRed_() || r.left.left.isRed_() || (r = r.moveRedLeft_()), r = r.copy(null, null, null, r.left.remove(t, e), null);
                else {
                    if (r.left.isRed_() && (r = r.rotateRight_()), r.right.isEmpty() || r.right.isRed_() || r.right.left.isRed_() || (r = r.moveRedRight_()), 0 === e(t, r.key)) {
                        if (r.right.isEmpty()) return qe.EMPTY_NODE;
                        n = r.right.min_(), r = r.copy(n.key, n.value, null, null, r.right.removeMin_())
                    }
                    r = r.copy(null, null, null, null, r.right.remove(t, e))
                }
                return r.fixUp_()
            }, Me.prototype.isRed_ = function() {
                return this.color
            }, Me.prototype.fixUp_ = function() {
                var t = this;
                return t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()), t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()), t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()), t
            }, Me.prototype.moveRedLeft_ = function() {
                var t = this.colorFlip_();
                return t.right.left.isRed_() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight_())).rotateLeft_()).colorFlip_()), t
            }, Me.prototype.moveRedRight_ = function() {
                var t = this.colorFlip_();
                return t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t
            }, Me.prototype.rotateLeft_ = function() {
                var t = this.copy(null, null, Me.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, t, null)
            }, Me.prototype.rotateRight_ = function() {
                var t = this.copy(null, null, Me.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, t)
            }, Me.prototype.colorFlip_ = function() {
                var t = this.left.copy(null, null, !this.left.color, null, null),
                    e = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, t, e)
            }, Me.prototype.checkMaxDepth_ = function() {
                var t = this.check_();
                return Math.pow(2, t) <= this.count() + 1
            }, Me.prototype.check_ = function() {
                if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                var t = this.left.check_();
                if (t !== this.right.check_()) throw new Error("Black depths differ");
                return t + (this.isRed_() ? 0 : 1)
            }, Me.RED = !0, Me.BLACK = !1, Me);

            function Me(t, e, n, r, i) {
                this.key = t, this.value = e, this.color = null != n ? n : Me.RED, this.left = null != r ? r : qe.EMPTY_NODE, this.right = null != i ? i : qe.EMPTY_NODE
            }
            var We = (Qe.prototype.copy = function(t, e, n, r, i) {
                return this
            }, Qe.prototype.insert = function(t, e, n) {
                return new Le(t, e, null)
            }, Qe.prototype.remove = function(t, e) {
                return this
            }, Qe.prototype.count = function() {
                return 0
            }, Qe.prototype.isEmpty = function() {
                return !0
            }, Qe.prototype.inorderTraversal = function(t) {
                return !1
            }, Qe.prototype.reverseTraversal = function(t) {
                return !1
            }, Qe.prototype.minKey = function() {
                return null
            }, Qe.prototype.maxKey = function() {
                return null
            }, Qe.prototype.check_ = function() {
                return 0
            }, Qe.prototype.isRed_ = function() {
                return !1
            }, Qe);

            function Qe() {}
            var qe = (Ue.prototype.insert = function(t, e) {
                return new Ue(this.comparator_, this.root_.insert(t, e, this.comparator_).copy(null, null, Le.BLACK, null, null))
            }, Ue.prototype.remove = function(t) {
                return new Ue(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, Le.BLACK, null, null))
            }, Ue.prototype.get = function(t) {
                for (var e, n = this.root_; !n.isEmpty();) {
                    if (0 === (e = this.comparator_(t, n.key))) return n.value;
                    e < 0 ? n = n.left : 0 < e && (n = n.right)
                }
                return null
            }, Ue.prototype.getPredecessorKey = function(t) {
                for (var e, n = this.root_, r = null; !n.isEmpty();) {
                    if (0 === (e = this.comparator_(t, n.key))) {
                        if (n.left.isEmpty()) return r ? r.key : null;
                        for (n = n.left; !n.right.isEmpty();) n = n.right;
                        return n.key
                    }
                    e < 0 ? n = n.left : 0 < e && (n = (r = n).right)
                }
                throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
            }, Ue.prototype.isEmpty = function() {
                return this.root_.isEmpty()
            }, Ue.prototype.count = function() {
                return this.root_.count()
            }, Ue.prototype.minKey = function() {
                return this.root_.minKey()
            }, Ue.prototype.maxKey = function() {
                return this.root_.maxKey()
            }, Ue.prototype.inorderTraversal = function(t) {
                return this.root_.inorderTraversal(t)
            }, Ue.prototype.reverseTraversal = function(t) {
                return this.root_.reverseTraversal(t)
            }, Ue.prototype.getIterator = function(t) {
                return new Fe(this.root_, null, this.comparator_, !1, t)
            }, Ue.prototype.getIteratorFrom = function(t, e) {
                return new Fe(this.root_, t, this.comparator_, !1, e)
            }, Ue.prototype.getReverseIteratorFrom = function(t, e) {
                return new Fe(this.root_, t, this.comparator_, !0, e)
            }, Ue.prototype.getReverseIterator = function(t) {
                return new Fe(this.root_, null, this.comparator_, !0, t)
            }, Ue.EMPTY_NODE = new We, Ue);

            function Ue(t, e) {
                void 0 === e && (e = Ue.EMPTY_NODE), this.comparator_ = t, this.root_ = e
            }
            var Ve = Math.log(2),
                He = (je.prototype.nextBitIsOne = function() {
                    var t = !(this.bits_ & 1 << this.current_);
                    return this.current_--, t
                }, je);

            function je(t) {
                var e;
                this.count = (e = t + 1, parseInt(Math.log(e) / Ve, 10)), this.current_ = this.count - 1;
                var n, r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                this.bits_ = t + 1 & r
            }
            var Be, Ke, Ye = function(l, t, u, e) {
                    l.sort(t);
                    var c = function(t, e) {
                            var n = e - t;
                            if (0 == n) return null;
                            if (1 == n) return s = l[t], a = u ? u(s) : s, new Le(a, s.node, Le.BLACK, null, null);
                            var r = parseInt(n / 2, 10) + t,
                                i = c(t, r),
                                o = c(r + 1, e),
                                s = l[r],
                                a = u ? u(s) : s;
                            return new Le(a, s.node, Le.BLACK, i, o)
                        },
                        n = function(t) {
                            for (var e = null, n = null, a = l.length, r = function(t, e) {
                                    var n = a - t,
                                        r = a;
                                    a -= t;
                                    var i = c(1 + n, r),
                                        o = l[n],
                                        s = u ? u(o) : o;
                                    h(new Le(s, o.node, e, null, i))
                                }, h = function(t) {
                                    e = e ? e.left = t : n = t
                                }, i = 0; i < t.count; ++i) {
                                var o = t.nextBitIsOne(),
                                    s = Math.pow(2, t.count - (i + 1));
                                o ? r(s, Le.BLACK) : (r(s, Le.BLACK), r(s, Le.RED))
                            }
                            return n
                        }(new He(l.length));
                    return new qe(e || t, n)
                },
                ze = {},
                Ge = (Object.defineProperty(Xe, "Default", {
                    get: function() {
                        return C(ke, "ChildrenNode.ts has not been loaded"), Be = Be || new Xe({
                            ".priority": ze
                        }, {
                            ".priority": ke
                        })
                    },
                    enumerable: !1,
                    configurable: !0
                }), Xe.prototype.get = function(t) {
                    var e = x(this.indexes_, t);
                    if (!e) throw new Error("No index defined for " + t);
                    return e instanceof qe ? e : null
                }, Xe.prototype.hasIndex = function(t) {
                    return O(this.indexSet_, t.toString())
                }, Xe.prototype.addIndex = function(t, e) {
                    C(t !== be, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                    for (var n, r = [], i = !1, o = e.getIterator(fe.Wrap), s = o.getNext(); s;) i = i || t.isDefinedOn(s.node), r.push(s), s = o.getNext();
                    n = i ? Ye(r, t.getCompare()) : ze;
                    var a = t.toString(),
                        h = u({}, this.indexSet_);
                    h[a] = t;
                    var l = u({}, this.indexes_);
                    return l[a] = n, new Xe(l, h)
                }, Xe.prototype.addToIndexes = function(h, l) {
                    var u = this;
                    return new Xe(F(this.indexes_, function(t, e) {
                        var n = x(u.indexSet_, e);
                        if (C(n, "Missing index implementation for " + e), t === ze) {
                            if (n.isDefinedOn(h.node)) {
                                for (var r = [], i = l.getIterator(fe.Wrap), o = i.getNext(); o;) o.name !== h.name && r.push(o), o = i.getNext();
                                return r.push(h), Ye(r, n.getCompare())
                            }
                            return ze
                        }
                        var s = l.get(h.name),
                            a = t;
                        return s && (a = a.remove(new fe(h.name, s))), a.insert(h, h.node)
                    }), this.indexSet_)
                }, Xe.prototype.removeFromIndexes = function(n, r) {
                    return new Xe(F(this.indexes_, function(t) {
                        if (t === ze) return t;
                        var e = r.get(n.name);
                        return e ? t.remove(new fe(n.name, e)) : t
                    }), this.indexSet_)
                }, Xe);

            function Xe(t, e) {
                this.indexes_ = t, this.indexSet_ = e
            }

            function $e(t, e) {
                return It(t.name, e.name)
            }

            function Je(t, e) {
                return It(t, e)
            }
            var Ze, tn = (Object.defineProperty(en, "EMPTY_NODE", {
                get: function() {
                    return Ke = Ke || new en(new qe(Je), null, Ge.Default)
                },
                enumerable: !1,
                configurable: !0
            }), en.prototype.isLeafNode = function() {
                return !1
            }, en.prototype.getPriority = function() {
                return this.priorityNode_ || Ke
            }, en.prototype.updatePriority = function(t) {
                return this.children_.isEmpty() ? this : new en(this.children_, t, this.indexMap_)
            }, en.prototype.getImmediateChild = function(t) {
                if (".priority" === t) return this.getPriority();
                var e = this.children_.get(t);
                return null === e ? Ke : e
            }, en.prototype.getChild = function(t) {
                var e = t.getFront();
                return null === e ? this : this.getImmediateChild(e).getChild(t.popFront())
            }, en.prototype.hasChild = function(t) {
                return null !== this.children_.get(t)
            }, en.prototype.updateImmediateChild = function(t, e) {
                if (C(e, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(e);
                var n = new fe(t, e),
                    r = void 0,
                    i = void 0,
                    i = e.isEmpty() ? (r = this.children_.remove(t), this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(t, e), this.indexMap_.addToIndexes(n, this.children_)),
                    o = r.isEmpty() ? Ke : this.priorityNode_;
                return new en(r, o, i)
            }, en.prototype.updateChild = function(t, e) {
                var n = t.getFront();
                if (null === n) return e;
                C(".priority" !== t.getFront() || 1 === t.getLength(), ".priority must be the last token in a path");
                var r = this.getImmediateChild(n).updateChild(t.popFront(), e);
                return this.updateImmediateChild(n, r)
            }, en.prototype.isEmpty = function() {
                return this.children_.isEmpty()
            }, en.prototype.numChildren = function() {
                return this.children_.count()
            }, en.prototype.val = function(n) {
                if (this.isEmpty()) return null;
                var r = {},
                    i = 0,
                    o = 0,
                    s = !0;
                if (this.forEachChild(ke, function(t, e) {
                        r[t] = e.val(n), i++, s && en.INTEGER_REGEXP_.test(t) ? o = Math.max(o, Number(t)) : s = !1
                    }), !n && s && o < 2 * i) {
                    var t, e = [];
                    for (t in r) e[t] = r[t];
                    return e
                }
                return n && !this.getPriority().isEmpty() && (r[".priority"] = this.getPriority().val()), r
            }, en.prototype.hash = function() {
                var r;
                return null === this.lazyHash_ && (r = "", this.getPriority().isEmpty() || (r += "priority:" + Te(this.getPriority().val()) + ":"), this.forEachChild(ke, function(t, e) {
                    var n = e.hash();
                    "" !== n && (r += ":" + t + ":" + n)
                }), this.lazyHash_ = "" === r ? "" : ot(r)), this.lazyHash_
            }, en.prototype.getPredecessorChildName = function(t, e, n) {
                var r = this.resolveIndex_(n);
                if (r) {
                    var i = r.getPredecessorKey(new fe(t, e));
                    return i ? i.name : null
                }
                return this.children_.getPredecessorKey(t)
            }, en.prototype.getFirstChildName = function(t) {
                var e = this.resolveIndex_(t);
                if (e) {
                    var n = e.minKey();
                    return n && n.name
                }
                return this.children_.minKey()
            }, en.prototype.getFirstChild = function(t) {
                var e = this.getFirstChildName(t);
                return e ? new fe(e, this.children_.get(e)) : null
            }, en.prototype.getLastChildName = function(t) {
                var e = this.resolveIndex_(t);
                if (e) {
                    var n = e.maxKey();
                    return n && n.name
                }
                return this.children_.maxKey()
            }, en.prototype.getLastChild = function(t) {
                var e = this.getLastChildName(t);
                return e ? new fe(e, this.children_.get(e)) : null
            }, en.prototype.forEachChild = function(t, e) {
                var n = this.resolveIndex_(t);
                return n ? n.inorderTraversal(function(t) {
                    return e(t.name, t.node)
                }) : this.children_.inorderTraversal(e)
            }, en.prototype.getIterator = function(t) {
                return this.getIteratorFrom(t.minPost(), t)
            }, en.prototype.getIteratorFrom = function(t, e) {
                var n = this.resolveIndex_(e);
                if (n) return n.getIteratorFrom(t, function(t) {
                    return t
                });
                for (var r = this.children_.getIteratorFrom(t.name, fe.Wrap), i = r.peek(); null != i && e.compare(i, t) < 0;) r.getNext(), i = r.peek();
                return r
            }, en.prototype.getReverseIterator = function(t) {
                return this.getReverseIteratorFrom(t.maxPost(), t)
            }, en.prototype.getReverseIteratorFrom = function(t, e) {
                var n = this.resolveIndex_(e);
                if (n) return n.getReverseIteratorFrom(t, function(t) {
                    return t
                });
                for (var r = this.children_.getReverseIteratorFrom(t.name, fe.Wrap), i = r.peek(); null != i && 0 < e.compare(i, t);) r.getNext(), i = r.peek();
                return r
            }, en.prototype.compareTo = function(t) {
                return this.isEmpty() ? t.isEmpty() ? 0 : -1 : t.isLeafNode() || t.isEmpty() ? 1 : t === rn ? -1 : 0
            }, en.prototype.withIndex = function(t) {
                if (t === be || this.indexMap_.hasIndex(t)) return this;
                var e = this.indexMap_.addIndex(t, this.children_);
                return new en(this.children_, this.priorityNode_, e)
            }, en.prototype.isIndexed = function(t) {
                return t === be || this.indexMap_.hasIndex(t)
            }, en.prototype.equals = function(t) {
                if (t === this) return !0;
                if (t.isLeafNode()) return !1;
                var e = t;
                if (this.getPriority().equals(e.getPriority())) {
                    if (this.children_.count() !== e.children_.count()) return !1;
                    for (var n = this.getIterator(ke), r = e.getIterator(ke), i = n.getNext(), o = r.getNext(); i && o;) {
                        if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                        i = n.getNext(), o = r.getNext()
                    }
                    return null === i && null === o
                }
                return !1
            }, en.prototype.resolveIndex_ = function(t) {
                return t === be ? null : this.indexMap_.get(t.toString())
            }, en.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, en);

            function en(t, e, n) {
                this.children_ = t, this.priorityNode_ = e, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Pe(this.priorityNode_), this.children_.isEmpty() && C(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
            }

            function nn() {
                return Ze.call(this, new qe(Je), tn.EMPTY_NODE, Ge.Default) || this
            }
            var rn = new(n(nn, Ze = tn), nn.prototype.compareTo = function(t) {
                return t === this ? 0 : 1
            }, nn.prototype.equals = function(t) {
                return t === this
            }, nn.prototype.getPriority = function() {
                return this
            }, nn.prototype.getImmediateChild = function(t) {
                return tn.EMPTY_NODE
            }, nn.prototype.isEmpty = function() {
                return !1
            }, nn);
            Object.defineProperties(fe, {
                MIN: {
                    value: new fe(Tt, tn.EMPTY_NODE)
                },
                MAX: {
                    value: new fe(St, rn)
                }
            }), Ce.__EMPTY_NODE = tn.EMPTY_NODE, De.__childrenNodeConstructor = tn, we = rn, Ne = rn;
            var on, sn = !0;

            function an(r, t) {
                if (void 0 === t && (t = null), null === r) return tn.EMPTY_NODE;
                if ("object" == typeof r && ".priority" in r && (t = r[".priority"]), C(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof r && ".value" in r && null !== r[".value"] && (r = r[".value"]), "object" != typeof r || ".sv" in r) return new De(r, an(t));
                if (r instanceof Array || !sn) {
                    var i = tn.EMPTY_NODE;
                    return Rt(r, function(t, e) {
                        var n;
                        O(r, t) && "." !== t.substring(0, 1) && (!(n = an(e)).isLeafNode() && n.isEmpty() || (i = i.updateImmediateChild(t, n)))
                    }), i.updatePriority(an(t))
                }
                var o = [],
                    s = !1;
                if (Rt(r, function(t, e) {
                        var n;
                        "." !== t.substring(0, 1) && ((n = an(e)).isEmpty() || (s = s || !n.getPriority().isEmpty(), o.push(new fe(t, n))))
                    }), 0 === o.length) return tn.EMPTY_NODE;
                var e = Ye(o, $e, function(t) {
                    return t.name
                }, Je);
                if (s) {
                    var n = Ye(o, ke.getCompare());
                    return new tn(e, an(t), new Ge({
                        ".priority": n
                    }, {
                        ".priority": ke
                    }))
                }
                return new tn(e, an(t), Ge.Default)
            }

            function hn() {
                return null !== on && on.apply(this, arguments) || this
            }
            Ie = an;
            var ln, un = new(n(hn, on = ve), hn.prototype.compare = function(t, e) {
                    var n = t.node.compareTo(e.node);
                    return 0 === n ? It(t.name, e.name) : n
                }, hn.prototype.isDefinedOn = function(t) {
                    return !0
                }, hn.prototype.indexedValueChanged = function(t, e) {
                    return !t.equals(e)
                }, hn.prototype.minPost = function() {
                    return fe.MIN
                }, hn.prototype.maxPost = function() {
                    return fe.MAX
                }, hn.prototype.makePost = function(t, e) {
                    var n = an(t);
                    return new fe(e, n)
                }, hn.prototype.toString = function() {
                    return ".value"
                }, hn),
                cn = (n(pn, ln = ve), pn.prototype.extractChild = function(t) {
                    return t.getChild(this.indexPath_)
                }, pn.prototype.isDefinedOn = function(t) {
                    return !t.getChild(this.indexPath_).isEmpty()
                }, pn.prototype.compare = function(t, e) {
                    var n = this.extractChild(t.node),
                        r = this.extractChild(e.node),
                        i = n.compareTo(r);
                    return 0 === i ? It(t.name, e.name) : i
                }, pn.prototype.makePost = function(t, e) {
                    var n = an(t),
                        r = tn.EMPTY_NODE.updateChild(this.indexPath_, n);
                    return new fe(e, r)
                }, pn.prototype.maxPost = function() {
                    var t = tn.EMPTY_NODE.updateChild(this.indexPath_, rn);
                    return new fe(St, t)
                }, pn.prototype.toString = function() {
                    return this.indexPath_.slice().join("/")
                }, pn);

            function pn(t) {
                var e = ln.call(this) || this;
                return e.indexPath_ = t, C(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), e
            }
            var dn = (fn.prototype.val = function() {
                return M("DataSnapshot.val", 0, 0, arguments.length), this.node_.val()
            }, fn.prototype.exportVal = function() {
                return M("DataSnapshot.exportVal", 0, 0, arguments.length), this.node_.val(!0)
            }, fn.prototype.toJSON = function() {
                return M("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal()
            }, fn.prototype.exists = function() {
                return M("DataSnapshot.exists", 0, 0, arguments.length), !this.node_.isEmpty()
            }, fn.prototype.child = function(t) {
                M("DataSnapshot.child", 0, 1, arguments.length), t = String(t), Jt("DataSnapshot.child", 1, t, !1);
                var e = new Ft(t),
                    n = this.ref_.child(e);
                return new fn(this.node_.getChild(e), n, ke)
            }, fn.prototype.hasChild = function(t) {
                M("DataSnapshot.hasChild", 1, 1, arguments.length), Jt("DataSnapshot.hasChild", 1, t, !1);
                var e = new Ft(t);
                return !this.node_.getChild(e).isEmpty()
            }, fn.prototype.getPriority = function() {
                return M("DataSnapshot.getPriority", 0, 0, arguments.length), this.node_.getPriority().val()
            }, fn.prototype.forEach = function(n) {
                var r = this;
                return M("DataSnapshot.forEach", 1, 1, arguments.length), Q("DataSnapshot.forEach", 1, n, !1), !this.node_.isLeafNode() && !!this.node_.forEachChild(this.index_, function(t, e) {
                    return n(new fn(e, r.ref_.child(t), ke))
                })
            }, fn.prototype.hasChildren = function() {
                return M("DataSnapshot.hasChildren", 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty()
            }, Object.defineProperty(fn.prototype, "key", {
                get: function() {
                    return this.ref_.getKey()
                },
                enumerable: !1,
                configurable: !0
            }), fn.prototype.numChildren = function() {
                return M("DataSnapshot.numChildren", 0, 0, arguments.length), this.node_.numChildren()
            }, fn.prototype.getRef = function() {
                return M("DataSnapshot.ref", 0, 0, arguments.length), this.ref_
            }, Object.defineProperty(fn.prototype, "ref", {
                get: function() {
                    return this.getRef()
                },
                enumerable: !1,
                configurable: !0
            }), fn);

            function fn(t, e, n) {
                this.node_ = t, this.ref_ = e, this.index_ = n
            }
            var _n = (yn.prototype.getPath = function() {
                var t = this.snapshot.getRef();
                return "value" === this.eventType ? t.path : t.getParent().path
            }, yn.prototype.getEventType = function() {
                return this.eventType
            }, yn.prototype.getEventRunner = function() {
                return this.eventRegistration.getEventRunner(this)
            }, yn.prototype.toString = function() {
                return this.getPath().toString() + ":" + this.eventType + ":" + P(this.snapshot.exportVal())
            }, yn);

            function yn(t, e, n, r) {
                this.eventType = t, this.eventRegistration = e, this.snapshot = n, this.prevName = r
            }
            var vn = (gn.prototype.getPath = function() {
                return this.path
            }, gn.prototype.getEventType = function() {
                return "cancel"
            }, gn.prototype.getEventRunner = function() {
                return this.eventRegistration.getEventRunner(this)
            }, gn.prototype.toString = function() {
                return this.path.toString() + ":cancel"
            }, gn);

            function gn(t, e, n) {
                this.eventRegistration = t, this.error = e, this.path = n
            }
            var mn = (Cn.prototype.respondsTo = function(t) {
                return "value" === t
            }, Cn.prototype.createEvent = function(t, e) {
                var n = e.getQueryParams().getIndex();
                return new _n("value", this, new dn(t.snapshotNode, e.getRef(), n))
            }, Cn.prototype.getEventRunner = function(t) {
                var e = this.context_;
                if ("cancel" === t.getEventType()) {
                    C(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                    var n = this.cancelCallback_;
                    return function() {
                        n.call(e, t.error)
                    }
                }
                var r = this.callback_;
                return function() {
                    r.call(e, t.snapshot)
                }
            }, Cn.prototype.createCancelEvent = function(t, e) {
                return this.cancelCallback_ ? new vn(this, t, e) : null
            }, Cn.prototype.matches = function(t) {
                return t instanceof Cn && (!t.callback_ || !this.callback_ || t.callback_ === this.callback_ && t.context_ === this.context_)
            }, Cn.prototype.hasAnyCallback = function() {
                return null !== this.callback_
            }, Cn);

            function Cn(t, e, n) {
                this.callback_ = t, this.cancelCallback_ = e, this.context_ = n
            }
            var En, wn = (bn.prototype.respondsTo = function(t) {
                var e = "children_removed" === (e = "children_added" === t ? "child_added" : t) ? "child_removed" : e;
                return O(this.callbacks_, e)
            }, bn.prototype.createCancelEvent = function(t, e) {
                return this.cancelCallback_ ? new vn(this, t, e) : null
            }, bn.prototype.createEvent = function(t, e) {
                C(null != t.childName, "Child events should have a childName.");
                var n = e.getRef().child(t.childName),
                    r = e.getQueryParams().getIndex();
                return new _n(t.type, this, new dn(t.snapshotNode, n, r), t.prevName)
            }, bn.prototype.getEventRunner = function(t) {
                var e = this.context_;
                if ("cancel" === t.getEventType()) {
                    C(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                    var n = this.cancelCallback_;
                    return function() {
                        n.call(e, t.error)
                    }
                }
                var r = this.callbacks_[t.eventType];
                return function() {
                    r.call(e, t.snapshot, t.prevName)
                }
            }, bn.prototype.matches = function(e) {
                var n = this;
                if (e instanceof bn) {
                    if (!this.callbacks_ || !e.callbacks_) return !0;
                    if (this.context_ === e.context_) {
                        var t = Object.keys(e.callbacks_),
                            r = Object.keys(this.callbacks_),
                            i = t.length;
                        if (i === r.length) {
                            if (1 !== i) return r.every(function(t) {
                                return e.callbacks_[t] === n.callbacks_[t]
                            });
                            var o = t[0],
                                s = r[0];
                            return !(s !== o || e.callbacks_[o] && this.callbacks_[s] && e.callbacks_[o] !== this.callbacks_[s])
                        }
                    }
                }
                return !1
            }, bn.prototype.hasAnyCallback = function() {
                return null !== this.callbacks_
            }, bn);

            function bn(t, e, n) {
                this.callbacks_ = t, this.cancelCallback_ = e, this.context_ = n
            }
            var Tn = (Object.defineProperty(Sn, "__referenceConstructor", {
                get: function() {
                    return C(En, "Reference.ts has not been loaded"), En
                },
                set: function(t) {
                    En = t
                },
                enumerable: !1,
                configurable: !0
            }), Sn.validateQueryEndpoints_ = function(t) {
                var e = null,
                    n = null;
                if (t.hasStart() && (e = t.getIndexStartValue()), t.hasEnd() && (n = t.getIndexEndValue()), t.getIndex() === be) {
                    var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                        i = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                    if (t.hasStart()) {
                        if (t.getIndexStartName() !== Tt) throw new Error(r);
                        if ("string" != typeof e) throw new Error(i)
                    }
                    if (t.hasEnd()) {
                        if (t.getIndexEndName() !== St) throw new Error(r);
                        if ("string" != typeof n) throw new Error(i)
                    }
                } else if (t.getIndex() === ke) {
                    if (null != e && !Kt(e) || null != n && !Kt(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
                } else if (C(t.getIndex() instanceof cn || t.getIndex() === un, "unknown index type."), null != e && "object" == typeof e || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
            }, Sn.validateLimit_ = function(t) {
                if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
            }, Sn.prototype.validateNoPreviousOrderByCall_ = function(t) {
                if (!0 === this.orderByCalled_) throw new Error(t + ": You can't combine multiple orderBy calls.")
            }, Sn.prototype.getQueryParams = function() {
                return this.queryParams_
            }, Sn.prototype.getRef = function() {
                return M("Query.ref", 0, 0, arguments.length), new Sn.__referenceConstructor(this.repo, this.path)
            }, Sn.prototype.on = function(t, e, n, r) {
                M("Query.on", 2, 4, arguments.length), Xt("Query.on", 1, t, !1), Q("Query.on", 2, e, !1);
                var i, o = Sn.getCancelAndContextArgs_("Query.on", n, r);
                return "value" === t ? this.onValueEvent(e, o.cancel, o.context) : ((i = {})[t] = e, this.onChildEvent(i, o.cancel, o.context)), e
            }, Sn.prototype.onValueEvent = function(t, e, n) {
                var r = new mn(t, e || null, n || null);
                this.repo.addEventCallbackForQuery(this, r)
            }, Sn.prototype.onChildEvent = function(t, e, n) {
                var r = new wn(t, e, n);
                this.repo.addEventCallbackForQuery(this, r)
            }, Sn.prototype.off = function(t, e, n) {
                M("Query.off", 0, 3, arguments.length), Xt("Query.off", 1, t, !0), Q("Query.off", 2, e, !0), q("Query.off", 3, n, !0);
                var r = null,
                    i = null;
                "value" === t ? r = new mn(e || null, null, n || null) : t && (e && ((i = {})[t] = e), r = new wn(i, null, n || null)), this.repo.removeEventCallbackForQuery(this, r)
            }, Sn.prototype.once = function(e, n, t, r) {
                var i = this;
                M("Query.once", 1, 4, arguments.length), Xt("Query.once", 1, e, !1), Q("Query.once", 2, n, !0);
                var o = Sn.getCancelAndContextArgs_("Query.once", t, r),
                    s = !0,
                    a = new y;
                a.promise.catch(function() {});
                var h = function(t) {
                    s && (s = !1, i.off(e, h), n && n.bind(o.context)(t), a.resolve(t))
                };
                return this.on(e, h, function(t) {
                    i.off(e, h), o.cancel && o.cancel.bind(o.context)(t), a.reject(t)
                }), a.promise
            }, Sn.prototype.limitToFirst = function(t) {
                if (M("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer.");
                if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                return new Sn(this.repo, this.path, this.queryParams_.limitToFirst(t), this.orderByCalled_)
            }, Sn.prototype.limitToLast = function(t) {
                if (M("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer.");
                if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                return new Sn(this.repo, this.path, this.queryParams_.limitToLast(t), this.orderByCalled_)
            }, Sn.prototype.orderByChild = function(t) {
                if (M("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                if ("$priority" === t) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                if ("$value" === t) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                Jt("Query.orderByChild", 1, t, !1), this.validateNoPreviousOrderByCall_("Query.orderByChild");
                var e = new Ft(t);
                if (e.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
                var n = new cn(e),
                    r = this.queryParams_.orderBy(n);
                return Sn.validateQueryEndpoints_(r), new Sn(this.repo, this.path, r, !0)
            }, Sn.prototype.orderByKey = function() {
                M("Query.orderByKey", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByKey");
                var t = this.queryParams_.orderBy(be);
                return Sn.validateQueryEndpoints_(t), new Sn(this.repo, this.path, t, !0)
            }, Sn.prototype.orderByPriority = function() {
                M("Query.orderByPriority", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByPriority");
                var t = this.queryParams_.orderBy(ke);
                return Sn.validateQueryEndpoints_(t), new Sn(this.repo, this.path, t, !0)
            }, Sn.prototype.orderByValue = function() {
                M("Query.orderByValue", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByValue");
                var t = this.queryParams_.orderBy(un);
                return Sn.validateQueryEndpoints_(t), new Sn(this.repo, this.path, t, !0)
            }, Sn.prototype.startAt = function(t, e) {
                void 0 === t && (t = null), M("Query.startAt", 0, 2, arguments.length), Yt("Query.startAt", 1, t, this.path, !0), $t("Query.startAt", 2, e, !0);
                var n = this.queryParams_.startAt(t, e);
                if (Sn.validateLimit_(n), Sn.validateQueryEndpoints_(n), this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
                return void 0 === t && (e = t = null), new Sn(this.repo, this.path, n, this.orderByCalled_)
            }, Sn.prototype.endAt = function(t, e) {
                void 0 === t && (t = null), M("Query.endAt", 0, 2, arguments.length), Yt("Query.endAt", 1, t, this.path, !0), $t("Query.endAt", 2, e, !0);
                var n = this.queryParams_.endAt(t, e);
                if (Sn.validateLimit_(n), Sn.validateQueryEndpoints_(n), this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
                return new Sn(this.repo, this.path, n, this.orderByCalled_)
            }, Sn.prototype.equalTo = function(t, e) {
                if (M("Query.equalTo", 1, 2, arguments.length), Yt("Query.equalTo", 1, t, this.path, !1), $t("Query.equalTo", 2, e, !0), this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
                if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
                return this.startAt(t, e).endAt(t, e)
            }, Sn.prototype.toString = function() {
                return M("Query.toString", 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString()
            }, Sn.prototype.toJSON = function() {
                return M("Query.toJSON", 0, 1, arguments.length), this.toString()
            }, Sn.prototype.queryObject = function() {
                return this.queryParams_.getQueryObject()
            }, Sn.prototype.queryIdentifier = function() {
                var t = this.queryObject(),
                    e = Nt(t);
                return "{}" === e ? "default" : e
            }, Sn.prototype.isEqual = function(t) {
                if (M("Query.isEqual", 1, 1, arguments.length), !(t instanceof Sn)) {
                    throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
                }
                var e = this.repo === t.repo,
                    n = this.path.equals(t.path),
                    r = this.queryIdentifier() === t.queryIdentifier();
                return e && n && r
            }, Sn.getCancelAndContextArgs_ = function(t, e, n) {
                var r = {
                    cancel: null,
                    context: null
                };
                if (e && n) r.cancel = e, Q(t, 3, r.cancel, !0), r.context = n, q(t, 4, r.context, !0);
                else if (e)
                    if ("object" == typeof e && null !== e) r.context = e;
                    else {
                        if ("function" != typeof e) throw new Error(W(t, 3, !0) + " must either be a cancel callback or a context object.");
                        r.cancel = e
                    }
                return r
            }, Object.defineProperty(Sn.prototype, "ref", {
                get: function() {
                    return this.getRef()
                },
                enumerable: !1,
                configurable: !0
            }), Sn);

            function Sn(t, e, n, r) {
                this.repo = t, this.path = e, this.queryParams_ = n, this.orderByCalled_ = r
            }
            var In = (Nn.prototype.getImmediateChild = function(t) {
                return new Nn(this.node_.getImmediateChild(t))
            }, Nn.prototype.node = function() {
                return this.node_
            }, Nn);

            function Nn(t) {
                this.node_ = t
            }
            var Rn = (Pn.prototype.getImmediateChild = function(t) {
                var e = this.path_.child(t);
                return new Pn(this.syncTree_, e)
            }, Pn.prototype.node = function() {
                return this.syncTree_.calcCompleteEventCache(this.path_)
            }, Pn);

            function Pn(t, e) {
                this.syncTree_ = t, this.path_ = e
            }

            function Dn(t, e, n, r) {
                return An(e, new Rn(n, t), r)
            }

            function On(t, e, n) {
                return An(t, new In(e), n)
            }
            var xn = function(t, e, n) {
                    return t && "object" == typeof t ? (C(".sv" in t, "Unexpected leaf node or priority contents"), "string" == typeof t[".sv"] ? kn(t[".sv"], e, n) : "object" == typeof t[".sv"] ? Fn(t[".sv"], e) : void C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2))) : t
                },
                kn = function(t, e, n) {
                    if ("timestamp" === t) return n.timestamp;
                    C(!1, "Unexpected server value: " + t)
                },
                Fn = function(t, e, n) {
                    t.hasOwnProperty("increment") || C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
                    var r = t.increment;
                    "number" != typeof r && C(!1, "Unexpected increment value: " + r);
                    var i = e.node();
                    if (C(null != i, "Expected ChildrenNode.EMPTY_NODE for nulls"), !i.isLeafNode()) return r;
                    var o = i.getValue();
                    return "number" != typeof o ? r : o + r
                };

            function An(t, r, i) {
                var e = t.getPriority().val(),
                    n = xn(e, r.getImmediateChild(".priority"), i);
                if (t.isLeafNode()) {
                    var o = t,
                        s = xn(o.getValue(), r, i);
                    return s !== o.getValue() || n !== o.getPriority().val() ? new De(s, an(n)) : t
                }
                var a = t,
                    h = a;
                return n !== a.getPriority().val() && (h = h.updatePriority(new De(n))), a.forEachChild(ke, function(t, e) {
                    var n = An(e, r.getImmediateChild(t), i);
                    n !== e && (h = h.updateImmediateChild(t, n))
                }), h
            }
            var Ln, Mn, Wn = (Qn.prototype.find = function(t) {
                if (null != this.value) return this.value.getChild(t);
                if (!t.isEmpty() && 0 < this.children.size) {
                    var e = t.getFront();
                    return t = t.popFront(), this.children.has(e) ? this.children.get(e).find(t) : null
                }
                return null
            }, Qn.prototype.remember = function(t, e) {
                var n, r;
                t.isEmpty() ? (this.value = e, this.children.clear()) : null !== this.value ? this.value = this.value.updateChild(t, e) : (n = t.getFront(), this.children.has(n) || this.children.set(n, new Qn), r = this.children.get(n), t = t.popFront(), r.remember(t, e))
            }, Qn.prototype.forget = function(t) {
                if (t.isEmpty()) return this.value = null, this.children.clear(), !0;
                if (null !== this.value) {
                    if (this.value.isLeafNode()) return !1;
                    var e = this.value;
                    this.value = null;
                    var n = this;
                    return e.forEachChild(ke, function(t, e) {
                        n.remember(new Ft(t), e)
                    }), this.forget(t)
                }
                if (0 < this.children.size) {
                    var r = t.getFront();
                    return t = t.popFront(), this.children.has(r) && this.children.get(r).forget(t) && this.children.delete(r), 0 === this.children.size
                }
                return !0
            }, Qn.prototype.forEachTree = function(r, i) {
                null !== this.value ? i(r, this.value) : this.forEachChild(function(t, e) {
                    var n = new Ft(r.toString() + "/" + t);
                    e.forEachTree(n, i)
                })
            }, Qn.prototype.forEachChild = function(n) {
                this.children.forEach(function(t, e) {
                    n(e, t)
                })
            }, Qn);

            function Qn() {
                this.value = null, this.children = new Map
            }(Mn = Ln = Ln || {})[Mn.OVERWRITE = 0] = "OVERWRITE", Mn[Mn.MERGE = 1] = "MERGE", Mn[Mn.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", Mn[Mn.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
            var qn = (Un.User = new Un(!0, !1, null, !1), Un.Server = new Un(!1, !0, null, !1), Un.forServerTaggedQuery = function(t) {
                return new Un(!1, !0, t, !0)
            }, Un);

            function Un(t, e, n, r) {
                this.fromUser = t, this.fromServer = e, this.queryId = n, this.tagged = r, C(!r || e, "Tagged queries must be from server.")
            }
            var Vn, Hn = (jn.prototype.operationForChild = function(t) {
                if (this.path.isEmpty()) {
                    if (null != this.affectedTree.value) return C(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
                    var e = this.affectedTree.subtree(new Ft(t));
                    return new jn(Ft.Empty, e, this.revert)
                }
                return C(this.path.getFront() === t, "operationForChild called for unrelated child."), new jn(this.path.popFront(), this.affectedTree, this.revert)
            }, jn);

            function jn(t, e, n) {
                this.path = t, this.affectedTree = e, this.revert = n, this.type = Ln.ACK_USER_WRITE, this.source = qn.User
            }
            var Bn = (Kn.fromObject = function(t) {
                var n = Kn.Empty;
                return Rt(t, function(t, e) {
                    n = n.set(new Ft(t), e)
                }), n
            }, Kn.prototype.isEmpty = function() {
                return null === this.value && this.children.isEmpty()
            }, Kn.prototype.findRootMostMatchingPathAndValue = function(t, e) {
                if (null != this.value && e(this.value)) return {
                    path: Ft.Empty,
                    value: this.value
                };
                if (t.isEmpty()) return null;
                var n = t.getFront(),
                    r = this.children.get(n);
                if (null === r) return null;
                var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                return null == i ? null : {
                    path: new Ft(n).child(i.path),
                    value: i.value
                }
            }, Kn.prototype.findRootMostValueAndPath = function(t) {
                return this.findRootMostMatchingPathAndValue(t, function() {
                    return !0
                })
            }, Kn.prototype.subtree = function(t) {
                if (t.isEmpty()) return this;
                var e = t.getFront(),
                    n = this.children.get(e);
                return null !== n ? n.subtree(t.popFront()) : Kn.Empty
            }, Kn.prototype.set = function(t, e) {
                if (t.isEmpty()) return new Kn(e, this.children);
                var n = t.getFront(),
                    r = (this.children.get(n) || Kn.Empty).set(t.popFront(), e),
                    i = this.children.insert(n, r);
                return new Kn(this.value, i)
            }, Kn.prototype.remove = function(t) {
                if (t.isEmpty()) return this.children.isEmpty() ? Kn.Empty : new Kn(null, this.children);
                var e = t.getFront(),
                    n = this.children.get(e);
                if (n) {
                    var r = n.remove(t.popFront()),
                        i = void 0,
                        i = r.isEmpty() ? this.children.remove(e) : this.children.insert(e, r);
                    return null === this.value && i.isEmpty() ? Kn.Empty : new Kn(this.value, i)
                }
                return this
            }, Kn.prototype.get = function(t) {
                if (t.isEmpty()) return this.value;
                var e = t.getFront(),
                    n = this.children.get(e);
                return n ? n.get(t.popFront()) : null
            }, Kn.prototype.setTree = function(t, e) {
                if (t.isEmpty()) return e;
                var n = t.getFront(),
                    r = (this.children.get(n) || Kn.Empty).setTree(t.popFront(), e),
                    i = void 0,
                    i = r.isEmpty() ? this.children.remove(n) : this.children.insert(n, r);
                return new Kn(this.value, i)
            }, Kn.prototype.fold = function(t) {
                return this.fold_(Ft.Empty, t)
            }, Kn.prototype.fold_ = function(n, r) {
                var i = {};
                return this.children.inorderTraversal(function(t, e) {
                    i[t] = e.fold_(n.child(t), r)
                }), r(n, this.value, i)
            }, Kn.prototype.findOnPath = function(t, e) {
                return this.findOnPath_(t, Ft.Empty, e)
            }, Kn.prototype.findOnPath_ = function(t, e, n) {
                var r = !!this.value && n(e, this.value);
                if (r) return r;
                if (t.isEmpty()) return null;
                var i = t.getFront(),
                    o = this.children.get(i);
                return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null
            }, Kn.prototype.foreachOnPath = function(t, e) {
                return this.foreachOnPath_(t, Ft.Empty, e)
            }, Kn.prototype.foreachOnPath_ = function(t, e, n) {
                if (t.isEmpty()) return this;
                this.value && n(e, this.value);
                var r = t.getFront(),
                    i = this.children.get(r);
                return i ? i.foreachOnPath_(t.popFront(), e.child(r), n) : Kn.Empty
            }, Kn.prototype.foreach = function(t) {
                this.foreach_(Ft.Empty, t)
            }, Kn.prototype.foreach_ = function(n, r) {
                this.children.inorderTraversal(function(t, e) {
                    e.foreach_(n.child(t), r)
                }), this.value && r(n, this.value)
            }, Kn.prototype.foreachChild = function(n) {
                this.children.inorderTraversal(function(t, e) {
                    e.value && n(t, e.value)
                })
            }, Kn.Empty = new Kn(null), Kn);

            function Kn(t, e) {
                void 0 === e && (e = Vn = Vn || new qe(ct)), this.value = t, this.children = e
            }
            var Yn = (zn.prototype.operationForChild = function(t) {
                return this.path.isEmpty() ? new zn(this.source, Ft.Empty) : new zn(this.source, this.path.popFront())
            }, zn);

            function zn(t, e) {
                this.source = t, this.path = e, this.type = Ln.LISTEN_COMPLETE
            }
            var Gn = (Xn.prototype.operationForChild = function(t) {
                return this.path.isEmpty() ? new Xn(this.source, Ft.Empty, this.snap.getImmediateChild(t)) : new Xn(this.source, this.path.popFront(), this.snap)
            }, Xn);

            function Xn(t, e, n) {
                this.source = t, this.path = e, this.snap = n, this.type = Ln.OVERWRITE
            }
            var $n = (Jn.prototype.operationForChild = function(t) {
                if (this.path.isEmpty()) {
                    var e = this.children.subtree(new Ft(t));
                    return e.isEmpty() ? null : e.value ? new Gn(this.source, Ft.Empty, e.value) : new Jn(this.source, Ft.Empty, e)
                }
                return C(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new Jn(this.source, this.path.popFront(), this.children)
            }, Jn.prototype.toString = function() {
                return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
            }, Jn);

            function Jn(t, e, n) {
                this.source = t, this.path = e, this.children = n, this.type = Ln.MERGE
            }
            var Zn = (tr.prototype.isFullyInitialized = function() {
                return this.fullyInitialized_
            }, tr.prototype.isFiltered = function() {
                return this.filtered_
            }, tr.prototype.isCompleteForPath = function(t) {
                if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
                var e = t.getFront();
                return this.isCompleteForChild(e)
            }, tr.prototype.isCompleteForChild = function(t) {
                return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(t)
            }, tr.prototype.getNode = function() {
                return this.node_
            }, tr);

            function tr(t, e, n) {
                this.node_ = t, this.fullyInitialized_ = e, this.filtered_ = n
            }
            var er = (nr.prototype.updateEventSnap = function(t, e, n) {
                return new nr(new Zn(t, e, n), this.serverCache_)
            }, nr.prototype.updateServerSnap = function(t, e, n) {
                return new nr(this.eventCache_, new Zn(t, e, n))
            }, nr.prototype.getEventCache = function() {
                return this.eventCache_
            }, nr.prototype.getCompleteEventSnap = function() {
                return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null
            }, nr.prototype.getServerCache = function() {
                return this.serverCache_
            }, nr.prototype.getCompleteServerSnap = function() {
                return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null
            }, nr.Empty = new nr(new Zn(tn.EMPTY_NODE, !1, !1), new Zn(tn.EMPTY_NODE, !1, !1)), nr);

            function nr(t, e) {
                this.eventCache_ = t, this.serverCache_ = e
            }
            var rr = (ir.valueChange = function(t) {
                return new ir(ir.VALUE, t)
            }, ir.childAddedChange = function(t, e) {
                return new ir(ir.CHILD_ADDED, e, t)
            }, ir.childRemovedChange = function(t, e) {
                return new ir(ir.CHILD_REMOVED, e, t)
            }, ir.childChangedChange = function(t, e, n) {
                return new ir(ir.CHILD_CHANGED, e, t, n)
            }, ir.childMovedChange = function(t, e) {
                return new ir(ir.CHILD_MOVED, e, t)
            }, ir.CHILD_ADDED = "child_added", ir.CHILD_REMOVED = "child_removed", ir.CHILD_CHANGED = "child_changed", ir.CHILD_MOVED = "child_moved", ir.VALUE = "value", ir);

            function ir(t, e, n, r, i) {
                this.type = t, this.snapshotNode = e, this.childName = n, this.oldSnap = r, this.prevName = i
            }
            var or = (sr.prototype.updateChild = function(t, e, n, r, i, o) {
                C(t.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                var s = t.getImmediateChild(e);
                return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() === n.isEmpty() ? t : (null != o && (n.isEmpty() ? t.hasChild(e) ? o.trackChildChange(rr.childRemovedChange(e, s)) : C(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : s.isEmpty() ? o.trackChildChange(rr.childAddedChange(e, n)) : o.trackChildChange(rr.childChangedChange(e, n, s))), t.isLeafNode() && n.isEmpty() ? t : t.updateImmediateChild(e, n).withIndex(this.index_))
            }, sr.prototype.updateFullNode = function(r, n, i) {
                return null != i && (r.isLeafNode() || r.forEachChild(ke, function(t, e) {
                    n.hasChild(t) || i.trackChildChange(rr.childRemovedChange(t, e))
                }), n.isLeafNode() || n.forEachChild(ke, function(t, e) {
                    var n;
                    r.hasChild(t) ? (n = r.getImmediateChild(t)).equals(e) || i.trackChildChange(rr.childChangedChange(t, e, n)) : i.trackChildChange(rr.childAddedChange(t, e))
                })), n.withIndex(this.index_)
            }, sr.prototype.updatePriority = function(t, e) {
                return t.isEmpty() ? tn.EMPTY_NODE : t.updatePriority(e)
            }, sr.prototype.filtersNodes = function() {
                return !1
            }, sr.prototype.getIndexedFilter = function() {
                return this
            }, sr.prototype.getIndex = function() {
                return this.index_
            }, sr);

            function sr(t) {
                this.index_ = t
            }
            var ar = (hr.prototype.trackChildChange = function(t) {
                var e = t.type,
                    n = t.childName;
                C(e === rr.CHILD_ADDED || e === rr.CHILD_CHANGED || e === rr.CHILD_REMOVED, "Only child changes supported for tracking"), C(".priority" !== n, "Only non-priority child changes can be tracked.");
                var r = this.changeMap.get(n);
                if (r) {
                    var i = r.type;
                    if (e === rr.CHILD_ADDED && i === rr.CHILD_REMOVED) this.changeMap.set(n, rr.childChangedChange(n, t.snapshotNode, r.snapshotNode));
                    else if (e === rr.CHILD_REMOVED && i === rr.CHILD_ADDED) this.changeMap.delete(n);
                    else if (e === rr.CHILD_REMOVED && i === rr.CHILD_CHANGED) this.changeMap.set(n, rr.childRemovedChange(n, r.oldSnap));
                    else if (e === rr.CHILD_CHANGED && i === rr.CHILD_ADDED) this.changeMap.set(n, rr.childAddedChange(n, t.snapshotNode));
                    else {
                        if (e !== rr.CHILD_CHANGED || i !== rr.CHILD_CHANGED) throw c("Illegal combination of changes: " + t + " occurred after " + r);
                        this.changeMap.set(n, rr.childChangedChange(n, t.snapshotNode, r.oldSnap))
                    }
                } else this.changeMap.set(n, t)
            }, hr.prototype.getChanges = function() {
                return Array.from(this.changeMap.values())
            }, hr);

            function hr() {
                this.changeMap = new Map
            }

            function lr() {}
            var ur = new(lr.prototype.getCompleteChild = function(t) {
                    return null
                }, lr.prototype.getChildAfterChild = function(t, e, n) {
                    return null
                }, lr),
                cr = (pr.prototype.getCompleteChild = function(t) {
                    var e = this.viewCache_.getEventCache();
                    if (e.isCompleteForChild(t)) return e.getNode().getImmediateChild(t);
                    var n = null != this.optCompleteServerCache_ ? new Zn(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
                    return this.writes_.calcCompleteChild(t, n)
                }, pr.prototype.getChildAfterChild = function(t, e, n) {
                    var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(),
                        i = this.writes_.calcIndexedSlice(r, e, 1, n, t);
                    return 0 === i.length ? null : i[0]
                }, pr);

            function pr(t, e, n) {
                void 0 === n && (n = null), this.writes_ = t, this.viewCache_ = e, this.optCompleteServerCache_ = n
            }
            var dr = function(t, e) {
                    this.viewCache = t, this.changes = e
                },
                fr = (_r.prototype.assertIndexed = function(t) {
                    C(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"), C(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed")
                }, _r.prototype.applyOperation = function(t, e, n, r) {
                    var i, o = new ar;
                    if (e.type === Ln.OVERWRITE) var s = e,
                        a = s.source.fromUser ? this.applyUserOverwrite_(t, s.path, s.snap, n, r, o) : (C(s.source.fromServer, "Unknown source."), i = s.source.tagged || t.getServerCache().isFiltered() && !s.path.isEmpty(), this.applyServerOverwrite_(t, s.path, s.snap, n, r, i, o));
                    else if (e.type === Ln.MERGE) {
                        var h = e;
                        a = h.source.fromUser ? this.applyUserMerge_(t, h.path, h.children, n, r, o) : (C(h.source.fromServer, "Unknown source."), i = h.source.tagged || t.getServerCache().isFiltered(), this.applyServerMerge_(t, h.path, h.children, n, r, i, o))
                    } else if (e.type === Ln.ACK_USER_WRITE) {
                        var l = e;
                        a = l.revert ? this.revertUserWrite_(t, l.path, n, r, o) : this.ackUserWrite_(t, l.path, l.affectedTree, n, r, o)
                    } else {
                        if (e.type !== Ln.LISTEN_COMPLETE) throw c("Unknown operation type: " + e.type);
                        a = this.listenComplete_(t, e.path, n, o)
                    }
                    var u = o.getChanges();
                    return _r.maybeAddValueEvent_(t, a, u), new dr(a, u)
                }, _r.maybeAddValueEvent_ = function(t, e, n) {
                    var r, i, o = e.getEventCache();
                    o.isFullyInitialized() && (r = o.getNode().isLeafNode() || o.getNode().isEmpty(), i = t.getCompleteEventSnap(), (0 < n.length || !t.getEventCache().isFullyInitialized() || r && !o.getNode().equals(i) || !o.getNode().getPriority().equals(i.getPriority())) && n.push(rr.valueChange(e.getCompleteEventSnap())))
                }, _r.prototype.generateEventCacheAfterServerEvent_ = function(t, e, n, r, i) {
                    var o = t.getEventCache();
                    if (null != n.shadowingWrite(e)) return t;
                    var s, a, h, l, u, c, p, d, f, _, y = void 0,
                        v = void 0;
                    return y = e.isEmpty() ? (C(t.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), t.getServerCache().isFiltered() ? (a = (s = t.getCompleteServerSnap()) instanceof tn ? s : tn.EMPTY_NODE, h = n.calcCompleteEventChildren(a), this.filter_.updateFullNode(t.getEventCache().getNode(), h, i)) : (l = n.calcCompleteEventCache(t.getCompleteServerSnap()), this.filter_.updateFullNode(t.getEventCache().getNode(), l, i))) : ".priority" === (u = e.getFront()) ? (C(1 === e.getLength(), "Can't have a priority with additional path components"), c = o.getNode(), v = t.getServerCache().getNode(), null != (p = n.calcEventCacheAfterServerOverwrite(e, c, v)) ? this.filter_.updatePriority(c, p) : o.getNode()) : (d = e.popFront(), _ = void 0, null != (_ = o.isCompleteForChild(u) ? (v = t.getServerCache().getNode(), null != (f = n.calcEventCacheAfterServerOverwrite(e, o.getNode(), v)) ? o.getNode().getImmediateChild(u).updateChild(d, f) : o.getNode().getImmediateChild(u)) : n.calcCompleteChild(u, t.getServerCache())) ? this.filter_.updateChild(o.getNode(), u, _, d, r, i) : o.getNode()), t.updateEventSnap(y, o.isFullyInitialized() || e.isEmpty(), this.filter_.filtersNodes())
                }, _r.prototype.applyServerOverwrite_ = function(t, e, n, r, i, o, s) {
                    var a = t.getServerCache(),
                        h = o ? this.filter_ : this.filter_.getIndexedFilter();
                    if (e.isEmpty()) u = h.updateFullNode(a.getNode(), n, null);
                    else if (h.filtersNodes() && !a.isFiltered()) var l = a.getNode().updateChild(e, n),
                        u = h.updateFullNode(a.getNode(), l, null);
                    else {
                        var c = e.getFront();
                        if (!a.isCompleteForPath(e) && 1 < e.getLength()) return t;
                        var p = e.popFront(),
                            d = a.getNode().getImmediateChild(c).updateChild(p, n);
                        u = ".priority" === c ? h.updatePriority(a.getNode(), d) : h.updateChild(a.getNode(), c, d, p, ur, null)
                    }
                    var f = t.updateServerSnap(u, a.isFullyInitialized() || e.isEmpty(), h.filtersNodes()),
                        _ = new cr(r, f, i);
                    return this.generateEventCacheAfterServerEvent_(f, e, r, _, s)
                }, _r.prototype.applyUserOverwrite_ = function(t, e, n, r, i, o) {
                    var s, a, h, l, u, c, p, d = t.getEventCache(),
                        f = new cr(r, t, i);
                    return e.isEmpty() ? (s = this.filter_.updateFullNode(t.getEventCache().getNode(), n, o), t.updateEventSnap(s, !0, this.filter_.filtersNodes())) : ".priority" === (a = e.getFront()) ? (s = this.filter_.updatePriority(t.getEventCache().getNode(), n), t.updateEventSnap(s, d.isFullyInitialized(), d.isFiltered())) : (h = e.popFront(), l = d.getNode().getImmediateChild(a), c = void 0, c = h.isEmpty() ? n : null != (u = f.getCompleteChild(a)) ? ".priority" === h.getBack() && u.getChild(h.parent()).isEmpty() ? u : u.updateChild(h, n) : tn.EMPTY_NODE, l.equals(c) ? t : (p = this.filter_.updateChild(d.getNode(), a, c, h, f, o), t.updateEventSnap(p, d.isFullyInitialized(), this.filter_.filtersNodes())))
                }, _r.cacheHasChild_ = function(t, e) {
                    return t.getEventCache().isCompleteForChild(e)
                }, _r.prototype.applyUserMerge_ = function(r, i, t, o, s, a) {
                    var h = this,
                        l = r;
                    return t.foreach(function(t, e) {
                        var n = i.child(t);
                        _r.cacheHasChild_(r, n.getFront()) && (l = h.applyUserOverwrite_(l, n, e, o, s, a))
                    }), t.foreach(function(t, e) {
                        var n = i.child(t);
                        _r.cacheHasChild_(r, n.getFront()) || (l = h.applyUserOverwrite_(l, n, e, o, s, a))
                    }), l
                }, _r.prototype.applyMerge_ = function(n, t) {
                    return t.foreach(function(t, e) {
                        n = n.updateChild(t, e)
                    }), n
                }, _r.prototype.applyServerMerge_ = function(o, t, e, s, a, h, l) {
                    var u = this;
                    if (o.getServerCache().getNode().isEmpty() && !o.getServerCache().isFullyInitialized()) return o;
                    var c = o,
                        n = t.isEmpty() ? e : Bn.Empty.setTree(t, e),
                        p = o.getServerCache().getNode();
                    return n.children.inorderTraversal(function(t, e) {
                        var n, r;
                        p.hasChild(t) && (n = o.getServerCache().getNode().getImmediateChild(t), r = u.applyMerge_(n, e), c = u.applyServerOverwrite_(c, new Ft(t), r, s, a, h, l))
                    }), n.children.inorderTraversal(function(t, e) {
                        var n, r, i = !o.getServerCache().isCompleteForChild(t) && null == e.value;
                        p.hasChild(t) || i || (n = o.getServerCache().getNode().getImmediateChild(t), r = u.applyMerge_(n, e), c = u.applyServerOverwrite_(c, new Ft(t), r, s, a, h, l))
                    }), c
                }, _r.prototype.ackUserWrite_ = function(t, r, e, n, i, o) {
                    if (null != n.shadowingWrite(r)) return t;
                    var s = t.getServerCache().isFiltered(),
                        a = t.getServerCache();
                    if (null != e.value) {
                        if (r.isEmpty() && a.isFullyInitialized() || a.isCompleteForPath(r)) return this.applyServerOverwrite_(t, r, a.getNode().getChild(r), n, i, s, o);
                        if (r.isEmpty()) {
                            var h = Bn.Empty;
                            return a.getNode().forEachChild(be, function(t, e) {
                                h = h.set(new Ft(t), e)
                            }), this.applyServerMerge_(t, r, h, n, i, s, o)
                        }
                        return t
                    }
                    var l = Bn.Empty;
                    return e.foreach(function(t, e) {
                        var n = r.child(t);
                        a.isCompleteForPath(n) && (l = l.set(t, a.getNode().getChild(n)))
                    }), this.applyServerMerge_(t, r, l, n, i, s, o)
                }, _r.prototype.listenComplete_ = function(t, e, n, r) {
                    var i = t.getServerCache(),
                        o = t.updateServerSnap(i.getNode(), i.isFullyInitialized() || e.isEmpty(), i.isFiltered());
                    return this.generateEventCacheAfterServerEvent_(o, e, n, ur, r)
                }, _r.prototype.revertUserWrite_ = function(t, e, n, r, i) {
                    var o;
                    if (null != n.shadowingWrite(e)) return t;
                    var s, a, h, l, u = new cr(n, t, r),
                        c = t.getEventCache().getNode(),
                        p = void 0;
                    return e.isEmpty() || ".priority" === e.getFront() ? (a = void 0, a = t.getServerCache().isFullyInitialized() ? n.calcCompleteEventCache(t.getCompleteServerSnap()) : (s = t.getServerCache().getNode(), C(s instanceof tn, "serverChildren would be complete if leaf node"), n.calcCompleteEventChildren(s)), p = this.filter_.updateFullNode(c, a, i)) : (h = e.getFront(), null == (l = n.calcCompleteChild(h, t.getServerCache())) && t.getServerCache().isCompleteForChild(h) && (l = c.getImmediateChild(h)), (p = null != l ? this.filter_.updateChild(c, h, l, e.popFront(), u, i) : t.getEventCache().getNode().hasChild(h) ? this.filter_.updateChild(c, h, tn.EMPTY_NODE, e.popFront(), u, i) : c).isEmpty() && t.getServerCache().isFullyInitialized() && (o = n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode() && (p = this.filter_.updateFullNode(p, o, i))), o = t.getServerCache().isFullyInitialized() || null != n.shadowingWrite(Ft.Empty), t.updateEventSnap(p, o, this.filter_.filtersNodes())
                }, _r);

            function _r(t) {
                this.filter_ = t
            }
            var yr = (vr.prototype.generateEventsForChanges = function(t, e, n) {
                var r = this,
                    i = [],
                    o = [];
                return t.forEach(function(t) {
                    t.type === rr.CHILD_CHANGED && r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && o.push(rr.childMovedChange(t.childName, t.snapshotNode))
                }), this.generateEventsForType_(i, rr.CHILD_REMOVED, t, n, e), this.generateEventsForType_(i, rr.CHILD_ADDED, t, n, e), this.generateEventsForType_(i, rr.CHILD_MOVED, o, n, e), this.generateEventsForType_(i, rr.CHILD_CHANGED, t, n, e), this.generateEventsForType_(i, rr.VALUE, t, n, e), i
            }, vr.prototype.generateEventsForType_ = function(r, e, t, i, o) {
                var s = this,
                    n = t.filter(function(t) {
                        return t.type === e
                    });
                n.sort(this.compareChanges_.bind(this)), n.forEach(function(e) {
                    var n = s.materializeSingleChange_(e, o);
                    i.forEach(function(t) {
                        t.respondsTo(e.type) && r.push(t.createEvent(n, s.query_))
                    })
                })
            }, vr.prototype.materializeSingleChange_ = function(t, e) {
                return "value" === t.type || "child_removed" === t.type || (t.prevName = e.getPredecessorChildName(t.childName, t.snapshotNode, this.index_)), t
            }, vr.prototype.compareChanges_ = function(t, e) {
                if (null == t.childName || null == e.childName) throw c("Should only compare child_ events.");
                var n = new fe(t.childName, t.snapshotNode),
                    r = new fe(e.childName, e.snapshotNode);
                return this.index_.compare(n, r)
            }, vr);

            function vr(t) {
                this.query_ = t, this.index_ = this.query_.getQueryParams().getIndex()
            }
            var gr, mr = (Cr.prototype.getQuery = function() {
                return this.query_
            }, Cr.prototype.getServerCache = function() {
                return this.viewCache_.getServerCache().getNode()
            }, Cr.prototype.getCompleteServerCache = function(t) {
                var e = this.viewCache_.getCompleteServerSnap();
                return e && (this.query_.getQueryParams().loadsAllData() || !t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()) ? e.getChild(t) : null
            }, Cr.prototype.isEmpty = function() {
                return 0 === this.eventRegistrations_.length
            }, Cr.prototype.addEventRegistration = function(t) {
                this.eventRegistrations_.push(t)
            }, Cr.prototype.removeEventRegistration = function(t, n) {
                var r, i = [];
                if (n && (C(null == t, "A cancel should cancel all event registrations."), r = this.query_.path, this.eventRegistrations_.forEach(function(t) {
                        var e = t.createCancelEvent(n, r);
                        e && i.push(e)
                    })), t) {
                    for (var e = [], o = 0; o < this.eventRegistrations_.length; ++o) {
                        var s = this.eventRegistrations_[o];
                        if (s.matches(t)) {
                            if (t.hasAnyCallback()) {
                                e = e.concat(this.eventRegistrations_.slice(o + 1));
                                break
                            }
                        } else e.push(s)
                    }
                    this.eventRegistrations_ = e
                } else this.eventRegistrations_ = [];
                return i
            }, Cr.prototype.applyOperation = function(t, e, n) {
                t.type === Ln.MERGE && null !== t.source.queryId && (C(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"), C(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
                var r = this.viewCache_,
                    i = this.processor_.applyOperation(r, t, e, n);
                return this.processor_.assertIndexed(i.viewCache), C(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null)
            }, Cr.prototype.getInitialEvents = function(t) {
                var e = this.viewCache_.getEventCache(),
                    n = [];
                return e.getNode().isLeafNode() || e.getNode().forEachChild(ke, function(t, e) {
                    n.push(rr.childAddedChange(t, e))
                }), e.isFullyInitialized() && n.push(rr.valueChange(e.getNode())), this.generateEventsForChanges_(n, e.getNode(), t)
            }, Cr.prototype.generateEventsForChanges_ = function(t, e, n) {
                var r = n ? [n] : this.eventRegistrations_;
                return this.eventGenerator_.generateEventsForChanges(t, e, r)
            }, Cr);

            function Cr(t, e) {
                this.query_ = t, this.eventRegistrations_ = [];
                var n = this.query_.getQueryParams(),
                    r = new or(n.getIndex()),
                    i = n.getNodeFilter();
                this.processor_ = new fr(i);
                var o = e.getServerCache(),
                    s = e.getEventCache(),
                    a = r.updateFullNode(tn.EMPTY_NODE, o.getNode(), null),
                    h = i.updateFullNode(tn.EMPTY_NODE, s.getNode(), null),
                    l = new Zn(a, o.isFullyInitialized(), r.filtersNodes()),
                    u = new Zn(h, s.isFullyInitialized(), i.filtersNodes());
                this.viewCache_ = new er(u, l), this.eventGenerator_ = new yr(this.query_)
            }
            var Er = (Object.defineProperty(wr, "__referenceConstructor", {
                get: function() {
                    return C(gr, "Reference.ts has not been loaded"), gr
                },
                set: function(t) {
                    C(!gr, "__referenceConstructor has already been defined"), gr = t
                },
                enumerable: !1,
                configurable: !0
            }), wr.prototype.isEmpty = function() {
                return 0 === this.views.size
            }, wr.prototype.applyOperation = function(t, e, n) {
                var r, i, o = t.source.queryId;
                if (null !== o) {
                    var s = this.views.get(o);
                    return C(null != s, "SyncTree gave us an op for an invalid query."), s.applyOperation(t, e, n)
                }
                var a = [];
                try {
                    for (var h = _(this.views.values()), l = h.next(); !l.done; l = h.next()) s = l.value, a = a.concat(s.applyOperation(t, e, n))
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (i = h.return) && i.call(h)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return a
            }, wr.prototype.addEventRegistration = function(t, e, n, r, i) {
                var o, s, a, h = t.queryIdentifier(),
                    l = this.views.get(h);
                return l || (s = !1, s = !!(o = n.calcCompleteEventCache(i ? r : null)) || (o = r instanceof tn ? n.calcCompleteEventChildren(r) : tn.EMPTY_NODE, !1), a = new er(new Zn(o, s, !1), new Zn(r, i, !1)), l = new mr(t, a), this.views.set(h, l)), l.addEventRegistration(e), l.getInitialEvents(e)
            }, wr.prototype.removeEventRegistration = function(t, e, n) {
                var r, i, o = t.queryIdentifier(),
                    s = [],
                    a = [],
                    h = this.hasCompleteView();
                if ("default" === o) try {
                    for (var l = _(this.views.entries()), u = l.next(); !u.done; u = l.next()) {
                        var c = f(u.value, 2),
                            p = c[0],
                            d = c[1],
                            a = a.concat(d.removeEventRegistration(e, n));
                        d.isEmpty() && (this.views.delete(p), d.getQuery().getQueryParams().loadsAllData() || s.push(d.getQuery()))
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (i = l.return) && i.call(l)
                    } finally {
                        if (r) throw r.error
                    }
                } else(d = this.views.get(o)) && (a = a.concat(d.removeEventRegistration(e, n)), d.isEmpty() && (this.views.delete(o), d.getQuery().getQueryParams().loadsAllData() || s.push(d.getQuery())));
                return h && !this.hasCompleteView() && s.push(new wr.__referenceConstructor(t.repo, t.path)), {
                    removed: s,
                    events: a
                }
            }, wr.prototype.getQueryViews = function() {
                var e, t, n = [];
                try {
                    for (var r = _(this.views.values()), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        o.getQuery().getQueryParams().loadsAllData() || n.push(o)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (t = r.return) && t.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return n
            }, wr.prototype.getCompleteServerCache = function(t) {
                var e, n, r = null;
                try {
                    for (var i = _(this.views.values()), o = i.next(); !o.done; o = i.next()) var s = o.value,
                        r = r || s.getCompleteServerCache(t)
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }, wr.prototype.viewForQuery = function(t) {
                if (t.getQueryParams().loadsAllData()) return this.getCompleteView();
                var e = t.queryIdentifier();
                return this.views.get(e)
            }, wr.prototype.viewExistsForQuery = function(t) {
                return null != this.viewForQuery(t)
            }, wr.prototype.hasCompleteView = function() {
                return null != this.getCompleteView()
            }, wr.prototype.getCompleteView = function() {
                var e, t;
                try {
                    for (var n = _(this.views.values()), r = n.next(); !r.done; r = n.next()) {
                        var i = r.value;
                        if (i.getQuery().getQueryParams().loadsAllData()) return i
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return null
            }, wr);

            function wr() {
                this.views = new Map
            }
            var br = (Tr.prototype.addWrite = function(t, e) {
                if (t.isEmpty()) return new Tr(new Bn(e));
                var n = this.writeTree_.findRootMostValueAndPath(t);
                if (null != n) {
                    var r = n.path,
                        i = n.value,
                        o = Ft.relativePath(r, t),
                        i = i.updateChild(o, e);
                    return new Tr(this.writeTree_.set(r, i))
                }
                var s = new Bn(e);
                return new Tr(this.writeTree_.setTree(t, s))
            }, Tr.prototype.addWrites = function(n, t) {
                var r = this;
                return Rt(t, function(t, e) {
                    r = r.addWrite(n.child(t), e)
                }), r
            }, Tr.prototype.removeWrite = function(t) {
                return t.isEmpty() ? Tr.Empty : new Tr(this.writeTree_.setTree(t, Bn.Empty))
            }, Tr.prototype.hasCompleteWrite = function(t) {
                return null != this.getCompleteNode(t)
            }, Tr.prototype.getCompleteNode = function(t) {
                var e = this.writeTree_.findRootMostValueAndPath(t);
                return null != e ? this.writeTree_.get(e.path).getChild(Ft.relativePath(e.path, t)) : null
            }, Tr.prototype.getCompleteChildren = function() {
                var n = [],
                    t = this.writeTree_.value;
                return null != t ? t.isLeafNode() || t.forEachChild(ke, function(t, e) {
                    n.push(new fe(t, e))
                }) : this.writeTree_.children.inorderTraversal(function(t, e) {
                    null != e.value && n.push(new fe(t, e.value))
                }), n
            }, Tr.prototype.childCompoundWrite = function(t) {
                if (t.isEmpty()) return this;
                var e = this.getCompleteNode(t);
                return new Tr(null != e ? new Bn(e) : this.writeTree_.subtree(t))
            }, Tr.prototype.isEmpty = function() {
                return this.writeTree_.isEmpty()
            }, Tr.prototype.apply = function(t) {
                return function n(r, t, i) {
                    {
                        if (null != t.value) return i.updateChild(r, t.value);
                        var o = null;
                        return t.children.inorderTraversal(function(t, e) {
                            ".priority" === t ? (C(null !== e.value, "Priority writes must always be leaf nodes"), o = e.value) : i = n(r.child(t), e, i)
                        }), i.getChild(r).isEmpty() || null === o || (i = i.updateChild(r.child(".priority"), o)), i
                    }
                }(Ft.Empty, this.writeTree_, t)
            }, Tr.Empty = new Tr(new Bn(null)), Tr);

            function Tr(t) {
                this.writeTree_ = t
            }
            var Sr = (Ir.prototype.childWrites = function(t) {
                return new Nr(t, this)
            }, Ir.prototype.addOverwrite = function(t, e, n, r) {
                C(n > this.lastWriteId_, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.allWrites_.push({
                    path: t,
                    snap: e,
                    writeId: n,
                    visible: r
                }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)), this.lastWriteId_ = n
            }, Ir.prototype.addMerge = function(t, e, n) {
                C(n > this.lastWriteId_, "Stacking an older merge on top of newer ones"), this.allWrites_.push({
                    path: t,
                    children: e,
                    writeId: n,
                    visible: !0
                }), this.visibleWrites_ = this.visibleWrites_.addWrites(t, e), this.lastWriteId_ = n
            }, Ir.prototype.getWrite = function(t) {
                for (var e = 0; e < this.allWrites_.length; e++) {
                    var n = this.allWrites_[e];
                    if (n.writeId === t) return n
                }
                return null
            }, Ir.prototype.removeWrite = function(e) {
                var n = this,
                    t = this.allWrites_.findIndex(function(t) {
                        return t.writeId === e
                    });
                C(0 <= t, "removeWrite called with nonexistent writeId.");
                var r = this.allWrites_[t];
                this.allWrites_.splice(t, 1);
                for (var i = r.visible, o = !1, s = this.allWrites_.length - 1; i && 0 <= s;) {
                    var a = this.allWrites_[s];
                    a.visible && (t <= s && this.recordContainsPath_(a, r.path) ? i = !1 : r.path.contains(a.path) && (o = !0)), s--
                }
                return !!i && (o ? this.resetTree_() : r.snap ? this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path) : Rt(r.children, function(t) {
                    n.visibleWrites_ = n.visibleWrites_.removeWrite(r.path.child(t))
                }), !0)
            }, Ir.prototype.getCompleteWriteData = function(t) {
                return this.visibleWrites_.getCompleteNode(t)
            }, Ir.prototype.calcCompleteEventCache = function(e, t, n, r) {
                if (n || r) {
                    var i = this.visibleWrites_.childCompoundWrite(e);
                    if (!r && i.isEmpty()) return t;
                    if (r || null != t || i.hasCompleteWrite(Ft.Empty)) {
                        var o = Ir.layerTree_(this.allWrites_, function(t) {
                                return (t.visible || r) && (!n || !~n.indexOf(t.writeId)) && (t.path.contains(e) || e.contains(t.path))
                            }, e),
                            s = t || tn.EMPTY_NODE;
                        return o.apply(s)
                    }
                    return null
                }
                var a = this.visibleWrites_.getCompleteNode(e);
                if (null != a) return a;
                var h = this.visibleWrites_.childCompoundWrite(e);
                if (h.isEmpty()) return t;
                if (null != t || h.hasCompleteWrite(Ft.Empty)) {
                    var s = t || tn.EMPTY_NODE;
                    return h.apply(s)
                }
                return null
            }, Ir.prototype.calcCompleteEventChildren = function(t, e) {
                var r = tn.EMPTY_NODE,
                    n = this.visibleWrites_.getCompleteNode(t);
                if (n) return n.isLeafNode() || n.forEachChild(ke, function(t, e) {
                    r = r.updateImmediateChild(t, e)
                }), r;
                if (e) {
                    var i = this.visibleWrites_.childCompoundWrite(t);
                    return e.forEachChild(ke, function(t, e) {
                        var n = i.childCompoundWrite(new Ft(t)).apply(e);
                        r = r.updateImmediateChild(t, n)
                    }), i.getCompleteChildren().forEach(function(t) {
                        r = r.updateImmediateChild(t.name, t.node)
                    }), r
                }
                return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t) {
                    r = r.updateImmediateChild(t.name, t.node)
                }), r
            }, Ir.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n, r) {
                C(n || r, "Either existingEventSnap or existingServerSnap must exist");
                var i = t.child(e);
                if (this.visibleWrites_.hasCompleteWrite(i)) return null;
                var o = this.visibleWrites_.childCompoundWrite(i);
                return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e))
            }, Ir.prototype.calcCompleteChild = function(t, e, n) {
                var r = t.child(e),
                    i = this.visibleWrites_.getCompleteNode(r);
                return null != i ? i : n.isCompleteForChild(e) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)) : null
            }, Ir.prototype.shadowingWrite = function(t) {
                return this.visibleWrites_.getCompleteNode(t)
            }, Ir.prototype.calcIndexedSlice = function(t, e, n, r, i, o) {
                var s, a = this.visibleWrites_.childCompoundWrite(t),
                    h = a.getCompleteNode(Ft.Empty);
                if (null != h) s = h;
                else {
                    if (null == e) return [];
                    s = a.apply(e)
                }
                if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode()) return [];
                for (var l = [], u = o.getCompare(), c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o), p = c.getNext(); p && l.length < r;) 0 !== u(p, n) && l.push(p), p = c.getNext();
                return l
            }, Ir.prototype.recordContainsPath_ = function(t, e) {
                if (t.snap) return t.path.contains(e);
                for (var n in t.children)
                    if (t.children.hasOwnProperty(n) && t.path.child(n).contains(e)) return !0;
                return !1
            }, Ir.prototype.resetTree_ = function() {
                this.visibleWrites_ = Ir.layerTree_(this.allWrites_, Ir.DefaultFilter_, Ft.Empty), 0 < this.allWrites_.length ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1
            }, Ir.DefaultFilter_ = function(t) {
                return t.visible
            }, Ir.layerTree_ = function(t, e, n) {
                for (var r = br.Empty, i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (e(o)) {
                        var s, a, h = o.path,
                            l = void 0;
                        if (o.snap) n.contains(h) ? (l = Ft.relativePath(n, h), r = r.addWrite(l, o.snap)) : h.contains(n) && (l = Ft.relativePath(h, n), r = r.addWrite(Ft.Empty, o.snap.getChild(l)));
                        else {
                            if (!o.children) throw c("WriteRecord should have .snap or .children");
                            n.contains(h) ? (l = Ft.relativePath(n, h), r = r.addWrites(l, o.children)) : h.contains(n) && ((l = Ft.relativePath(h, n)).isEmpty() ? r = r.addWrites(Ft.Empty, o.children) : (s = x(o.children, l.getFront())) && (a = s.getChild(l.popFront()), r = r.addWrite(Ft.Empty, a)))
                        }
                    }
                }
                return r
            }, Ir);

            function Ir() {
                this.visibleWrites_ = br.Empty, this.allWrites_ = [], this.lastWriteId_ = -1
            }
            var Nr = (Rr.prototype.calcCompleteEventCache = function(t, e, n) {
                return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n)
            }, Rr.prototype.calcCompleteEventChildren = function(t) {
                return this.writeTree_.calcCompleteEventChildren(this.treePath_, t)
            }, Rr.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n) {
                return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, t, e, n)
            }, Rr.prototype.shadowingWrite = function(t) {
                return this.writeTree_.shadowingWrite(this.treePath_.child(t))
            }, Rr.prototype.calcIndexedSlice = function(t, e, n, r, i) {
                return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i)
            }, Rr.prototype.calcCompleteChild = function(t, e) {
                return this.writeTree_.calcCompleteChild(this.treePath_, t, e)
            }, Rr.prototype.child = function(t) {
                return new Rr(this.treePath_.child(t), this.writeTree_)
            }, Rr);

            function Rr(t, e) {
                this.treePath_ = t, this.writeTree_ = e
            }
            var Pr = (Dr.prototype.applyUserOverwrite = function(t, e, n, r) {
                return this.pendingWriteTree_.addOverwrite(t, e, n, r), r ? this.applyOperationToSyncPoints_(new Gn(qn.User, t, e)) : []
            }, Dr.prototype.applyUserMerge = function(t, e, n) {
                this.pendingWriteTree_.addMerge(t, e, n);
                var r = Bn.fromObject(e);
                return this.applyOperationToSyncPoints_(new $n(qn.User, t, r))
            }, Dr.prototype.ackUserWrite = function(t, e) {
                void 0 === e && (e = !1);
                var n = this.pendingWriteTree_.getWrite(t);
                if (this.pendingWriteTree_.removeWrite(t)) {
                    var r = Bn.Empty;
                    return null != n.snap ? r = r.set(Ft.Empty, !0) : Rt(n.children, function(t, e) {
                        r = r.set(new Ft(t), e)
                    }), this.applyOperationToSyncPoints_(new Hn(n.path, r, e))
                }
                return []
            }, Dr.prototype.applyServerOverwrite = function(t, e) {
                return this.applyOperationToSyncPoints_(new Gn(qn.Server, t, e))
            }, Dr.prototype.applyServerMerge = function(t, e) {
                var n = Bn.fromObject(e);
                return this.applyOperationToSyncPoints_(new $n(qn.Server, t, n))
            }, Dr.prototype.applyListenComplete = function(t) {
                return this.applyOperationToSyncPoints_(new Yn(qn.Server, t))
            }, Dr.prototype.applyTaggedQueryOverwrite = function(t, e, n) {
                var r = this.queryKeyForTag_(n);
                if (null == r) return [];
                var i = Dr.parseQueryKey_(r),
                    o = i.path,
                    s = i.queryId,
                    a = Ft.relativePath(o, t),
                    h = new Gn(qn.forServerTaggedQuery(s), a, e);
                return this.applyTaggedOperation_(o, h)
            }, Dr.prototype.applyTaggedQueryMerge = function(t, e, n) {
                var r = this.queryKeyForTag_(n);
                if (r) {
                    var i = Dr.parseQueryKey_(r),
                        o = i.path,
                        s = i.queryId,
                        a = Ft.relativePath(o, t),
                        h = Bn.fromObject(e),
                        l = new $n(qn.forServerTaggedQuery(s), a, h);
                    return this.applyTaggedOperation_(o, l)
                }
                return []
            }, Dr.prototype.applyTaggedListenComplete = function(t, e) {
                var n = this.queryKeyForTag_(e);
                if (n) {
                    var r = Dr.parseQueryKey_(n),
                        i = r.path,
                        o = r.queryId,
                        s = Ft.relativePath(i, t),
                        a = new Yn(qn.forServerTaggedQuery(o), s);
                    return this.applyTaggedOperation_(i, a)
                }
                return []
            }, Dr.prototype.addEventRegistration = function(t, e) {
                var r = t.path,
                    i = null,
                    o = !1;
                this.syncPointTree_.foreachOnPath(r, function(t, e) {
                    var n = Ft.relativePath(t, r);
                    i = i || e.getCompleteServerCache(n), o = o || e.hasCompleteView()
                });
                var n, s = this.syncPointTree_.get(r);
                s ? (o = o || s.hasCompleteView(), i = i || s.getCompleteServerCache(Ft.Empty)) : (s = new Er, this.syncPointTree_ = this.syncPointTree_.set(r, s)), null != i ? n = !0 : (n = !1, i = tn.EMPTY_NODE, this.syncPointTree_.subtree(r).foreachChild(function(t, e) {
                    var n = e.getCompleteServerCache(Ft.Empty);
                    n && (i = i.updateImmediateChild(t, n))
                }));
                var a, h, l = s.viewExistsForQuery(t);
                l || t.getQueryParams().loadsAllData() || (a = Dr.makeQueryKey_(t), C(!this.queryToTagMap.has(a), "View does not exist, but we have a tag"), h = Dr.getNextQueryTag_(), this.queryToTagMap.set(a, h), this.tagToQueryMap.set(h, a));
                var u, c = this.pendingWriteTree_.childWrites(r),
                    p = s.addEventRegistration(t, e, c, i, n);
                return l || o || (u = s.viewForQuery(t), p = p.concat(this.setupListener_(t, u))), p
            }, Dr.prototype.removeEventRegistration = function(t, e, n) {
                var r = this,
                    i = t.path,
                    o = this.syncPointTree_.get(i),
                    s = [];
                if (o && ("default" === t.queryIdentifier() || o.viewExistsForQuery(t))) {
                    var a = o.removeEventRegistration(t, e, n);
                    o.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(i));
                    var h = a.removed,
                        s = a.events,
                        l = -1 !== h.findIndex(function(t) {
                            return t.getQueryParams().loadsAllData()
                        }),
                        u = this.syncPointTree_.findOnPath(i, function(t, e) {
                            return e.hasCompleteView()
                        });
                    if (l && !u) {
                        var c = this.syncPointTree_.subtree(i);
                        if (!c.isEmpty())
                            for (var p = this.collectDistinctViewsForSubTree_(c), d = 0; d < p.length; ++d) {
                                var f = p[d],
                                    _ = f.getQuery(),
                                    y = this.createListenerForView_(f);
                                this.listenProvider_.startListening(Dr.queryForListening_(_), this.tagForQuery_(_), y.hashFn, y.onComplete)
                            }
                    }!u && 0 < h.length && !n && (l ? this.listenProvider_.stopListening(Dr.queryForListening_(t), null) : h.forEach(function(t) {
                        var e = r.queryToTagMap.get(Dr.makeQueryKey_(t));
                        r.listenProvider_.stopListening(Dr.queryForListening_(t), e)
                    })), this.removeTags_(h)
                }
                return s
            }, Dr.prototype.calcCompleteEventCache = function(i, t) {
                var e = this.pendingWriteTree_,
                    n = this.syncPointTree_.findOnPath(i, function(t, e) {
                        var n = Ft.relativePath(t, i),
                            r = e.getCompleteServerCache(n);
                        if (r) return r
                    });
                return e.calcCompleteEventCache(i, n, t, !0)
            }, Dr.prototype.collectDistinctViewsForSubTree_ = function(t) {
                return t.fold(function(t, e, n) {
                    if (e && e.hasCompleteView()) return [e.getCompleteView()];
                    var r = [];
                    return e && (r = e.getQueryViews()), Rt(n, function(t, e) {
                        r = r.concat(e)
                    }), r
                })
            }, Dr.prototype.removeTags_ = function(t) {
                for (var e = 0; e < t.length; ++e) {
                    var n, r, i = t[e];
                    i.getQueryParams().loadsAllData() || (n = Dr.makeQueryKey_(i), r = this.queryToTagMap.get(n), this.queryToTagMap.delete(n), this.tagToQueryMap.delete(r))
                }
            }, Dr.queryForListening_ = function(t) {
                return t.getQueryParams().loadsAllData() && !t.getQueryParams().isDefault() ? t.getRef() : t
            }, Dr.prototype.setupListener_ = function(t, e) {
                var n = t.path,
                    r = this.tagForQuery_(t),
                    i = this.createListenerForView_(e),
                    o = this.listenProvider_.startListening(Dr.queryForListening_(t), r, i.hashFn, i.onComplete),
                    s = this.syncPointTree_.subtree(n);
                if (r) C(!s.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                else
                    for (var a = s.fold(function(t, e, n) {
                            if (!t.isEmpty() && e && e.hasCompleteView()) return [e.getCompleteView().getQuery()];
                            var r = [];
                            return e && (r = r.concat(e.getQueryViews().map(function(t) {
                                return t.getQuery()
                            }))), Rt(n, function(t, e) {
                                r = r.concat(e)
                            }), r
                        }), h = 0; h < a.length; ++h) {
                        var l = a[h];
                        this.listenProvider_.stopListening(Dr.queryForListening_(l), this.tagForQuery_(l))
                    }
                return o
            }, Dr.prototype.createListenerForView_ = function(t) {
                var n = this,
                    r = t.getQuery(),
                    i = this.tagForQuery_(r);
                return {
                    hashFn: function() {
                        return (t.getServerCache() || tn.EMPTY_NODE).hash()
                    },
                    onComplete: function(t) {
                        if ("ok" === t) return i ? n.applyTaggedListenComplete(r.path, i) : n.applyListenComplete(r.path);
                        var e = function(t, e) {
                            var n = "Unknown Error";
                            "too_big" === t ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === t ? n = "Client doesn't have permission to access the desired data." : "unavailable" === t && (n = "The service is unavailable");
                            var r = new Error(t + " at " + e.path.toString() + ": " + n);
                            return r.code = t.toUpperCase(), r
                        }(t, r);
                        return n.removeEventRegistration(r, null, e)
                    }
                }
            }, Dr.makeQueryKey_ = function(t) {
                return t.path.toString() + "$" + t.queryIdentifier()
            }, Dr.parseQueryKey_ = function(t) {
                var e = t.indexOf("$");
                return C(-1 !== e && e < t.length - 1, "Bad queryKey."), {
                    queryId: t.substr(e + 1),
                    path: new Ft(t.substr(0, e))
                }
            }, Dr.prototype.queryKeyForTag_ = function(t) {
                return this.tagToQueryMap.get(t)
            }, Dr.prototype.tagForQuery_ = function(t) {
                var e = Dr.makeQueryKey_(t);
                return this.queryToTagMap.get(e)
            }, Dr.getNextQueryTag_ = function() {
                return Dr.nextQueryTag_++
            }, Dr.prototype.applyTaggedOperation_ = function(t, e) {
                var n = this.syncPointTree_.get(t);
                C(n, "Missing sync point for query tag that we're tracking");
                var r = this.pendingWriteTree_.childWrites(t);
                return n.applyOperation(e, r, null)
            }, Dr.prototype.applyOperationToSyncPoints_ = function(t) {
                return this.applyOperationHelper_(t, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(Ft.Empty))
            }, Dr.prototype.applyOperationHelper_ = function(t, e, n, r) {
                if (t.path.isEmpty()) return this.applyOperationDescendantsHelper_(t, e, n, r);
                var i = e.get(Ft.Empty);
                null == n && null != i && (n = i.getCompleteServerCache(Ft.Empty));
                var o, s, a = [],
                    h = t.path.getFront(),
                    l = t.operationForChild(h),
                    u = e.children.get(h);
                return u && l && (o = n ? n.getImmediateChild(h) : null, s = r.child(h), a = a.concat(this.applyOperationHelper_(l, u, o, s))), i && (a = a.concat(i.applyOperation(t, r, n))), a
            }, Dr.prototype.applyOperationDescendantsHelper_ = function(o, t, s, a) {
                var h = this,
                    e = t.get(Ft.Empty);
                null == s && null != e && (s = e.getCompleteServerCache(Ft.Empty));
                var l = [];
                return t.children.inorderTraversal(function(t, e) {
                    var n = s ? s.getImmediateChild(t) : null,
                        r = a.child(t),
                        i = o.operationForChild(t);
                    i && (l = l.concat(h.applyOperationDescendantsHelper_(i, e, n, r)))
                }), e && (l = l.concat(e.applyOperation(o, a, s))), l
            }, Dr.nextQueryTag_ = 1, Dr);

            function Dr(t) {
                this.listenProvider_ = t, this.syncPointTree_ = Bn.Empty, this.pendingWriteTree_ = new Sr, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
            }
            var Or = (xr.prototype.getNode = function(t) {
                return this.rootNode_.getChild(t)
            }, xr.prototype.updateSnapshot = function(t, e) {
                this.rootNode_ = this.rootNode_.updateChild(t, e)
            }, xr);

            function xr() {
                this.rootNode_ = tn.EMPTY_NODE
            }
            var kr = (Fr.prototype.incrementCounter = function(t, e) {
                void 0 === e && (e = 1), O(this.counters_, t) || (this.counters_[t] = 0), this.counters_[t] += e
            }, Fr.prototype.get = function() {
                return d(this.counters_)
            }, Fr);

            function Fr() {
                this.counters_ = {}
            }
            var Ar = (Lr.getCollection = function(t) {
                var e = t.toString();
                return this.collections_[e] || (this.collections_[e] = new kr), this.collections_[e]
            }, Lr.getOrCreateReporter = function(t, e) {
                var n = t.toString();
                return this.reporters_[n] || (this.reporters_[n] = e()), this.reporters_[n]
            }, Lr.collections_ = {}, Lr.reporters_ = {}, Lr);

            function Lr() {}
            var Mr = (Wr.prototype.get = function() {
                var t = this.collection_.get(),
                    n = u({}, t);
                return this.last_ && Rt(this.last_, function(t, e) {
                    n[t] = n[t] - e
                }), this.last_ = t, n
            }, Wr);

            function Wr(t) {
                this.collection_ = t, this.last_ = null
            }
            var Qr = (qr.prototype.includeStat = function(t) {
                this.statsToReport_[t] = !0
            }, qr.prototype.reportStats_ = function() {
                var n = this,
                    t = this.statsListener_.get(),
                    r = {},
                    i = !1;
                Rt(t, function(t, e) {
                    0 < e && O(n.statsToReport_, t) && (r[t] = e, i = !0)
                }), i && this.server_.reportStats(r), Ot(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
            }, qr);

            function qr(t, e) {
                this.server_ = e, this.statsToReport_ = {}, this.statsListener_ = new Mr(t);
                var n = 1e4 + 2e4 * Math.random();
                Ot(this.reportStats_.bind(this), Math.floor(n))
            }
            var Ur = (Vr.prototype.queueEvents = function(t) {
                for (var e = null, n = 0; n < t.length; n++) {
                    var r = t[n],
                        i = r.getPath();
                    null === e || i.equals(e.getPath()) || (this.eventLists_.push(e), e = null), null === e && (e = new Hr(i)), e.add(r)
                }
                e && this.eventLists_.push(e)
            }, Vr.prototype.raiseEventsAtPath = function(e, t) {
                this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) {
                    return t.equals(e)
                })
            }, Vr.prototype.raiseEventsForChangedPath = function(e, t) {
                this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) {
                    return t.contains(e) || e.contains(t)
                })
            }, Vr.prototype.raiseQueuedEventsMatchingPredicate_ = function(t) {
                this.recursionDepth_++;
                for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                    var r = this.eventLists_[n];
                    r && (t(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : e = !1)
                }
                e && (this.eventLists_ = []), this.recursionDepth_--
            }, Vr);

            function Vr() {
                this.eventLists_ = [], this.recursionDepth_ = 0
            }
            var Hr = (jr.prototype.add = function(t) {
                this.events_.push(t)
            }, jr.prototype.raise = function() {
                for (var t = 0; t < this.events_.length; t++) {
                    var e, n = this.events_[t];
                    null !== n && (this.events_[t] = null, e = n.getEventRunner(), Ct && wt("event: " + n.toString()), Dt(e))
                }
            }, jr.prototype.getPath = function() {
                return this.path_
            }, jr);

            function jr(t) {
                this.path_ = t, this.events_ = []
            }
            var Br = (Kr.prototype.trigger = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[t]))
                    for (var r = s(this.listeners_[t]), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, e)
            }, Kr.prototype.on = function(t, e, n) {
                this.validateEventType_(t), this.listeners_[t] = this.listeners_[t] || [], this.listeners_[t].push({
                    callback: e,
                    context: n
                });
                var r = this.getInitialEvent(t);
                r && e.apply(n, r)
            }, Kr.prototype.off = function(t, e, n) {
                this.validateEventType_(t);
                for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                    if (r[i].callback === e && (!n || n === r[i].context)) return void r.splice(i, 1)
            }, Kr.prototype.validateEventType_ = function(e) {
                C(this.allowedEvents_.find(function(t) {
                    return t === e
                }), "Unknown event: " + e)
            }, Kr);

            function Kr(t) {
                this.allowedEvents_ = t, this.listeners_ = {}, C(Array.isArray(t) && 0 < t.length, "Requires a non-empty array")
            }
            var Yr, zr = (n(Gr, Yr = Br), Gr.getInstance = function() {
                return new Gr
            }, Gr.prototype.getInitialEvent = function(t) {
                return C("visible" === t, "Unknown event type: " + t), [this.visible_]
            }, Gr);

            function Gr() {
                var e, t, n = Yr.call(this, ["visible"]) || this;
                return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), n.visible_ = !0, t && document.addEventListener(t, function() {
                    var t = !document[e];
                    t !== n.visible_ && (n.visible_ = t, n.trigger("visible", t))
                }, !1), n
            }
            var Xr, $r = (n(Jr, Xr = Br), Jr.getInstance = function() {
                return new Jr
            }, Jr.prototype.getInitialEvent = function(t) {
                return C("online" === t, "Unknown event type: " + t), [this.online_]
            }, Jr.prototype.currentlyOnline = function() {
                return this.online_
            }, Jr);

            function Jr() {
                var t = Xr.call(this, ["online"]) || this;
                return t.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || g() || (window.addEventListener("online", function() {
                    t.online_ || (t.online_ = !0, t.trigger("online", !0))
                }, !1), window.addEventListener("offline", function() {
                    t.online_ && (t.online_ = !1, t.trigger("online", !1))
                }, !1)), t
            }
            var Zr = (ti.prototype.closeAfter = function(t, e) {
                this.closeAfterResponse = t, this.onClose = e, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
            }, ti.prototype.handleResponse = function(t, e) {
                var n = this;
                this.pendingResponses[t] = e;
                for (var r = this; this.pendingResponses[this.currentResponseNum];) {
                    if ("break" === function() {
                            var e = r.pendingResponses[r.currentResponseNum];
                            delete r.pendingResponses[r.currentResponseNum];
                            for (var t = 0; t < e.length; ++t) ! function(t) {
                                e[t] && Dt(function() {
                                    n.onMessage_(e[t])
                                })
                            }(t);
                            if (r.currentResponseNum === r.closeAfterResponse) return r.onClose && (r.onClose(), r.onClose = null), "break";
                            r.currentResponseNum++
                        }()) break
                }
            }, ti);

            function ti(t) {
                this.onMessage_ = t, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
            }
            var ei = "pLPCommand",
                ni = "pRTLPCB",
                ri = (ii.prototype.open = function(t, e) {
                    var n, r, i, s = this;
                    this.curSegmentNum = 0, this.onDisconnect_ = e, this.myPacketOrderer = new Zr(t), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function() {
                        s.log_("Timed out trying to connect."), s.onClosed_(), s.connectTimeoutTimer_ = null
                    }, Math.floor(3e4)), n = function() {
                        var t, e;
                        s.isClosed_ || (s.scriptTagHolder = new oi(function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = f(t, 5),
                                r = n[0],
                                i = n[1],
                                o = n[2];
                            n[3], n[4];
                            if (s.incrementIncomingBytes_(t), s.scriptTagHolder)
                                if (s.connectTimeoutTimer_ && (clearTimeout(s.connectTimeoutTimer_), s.connectTimeoutTimer_ = null), s.everConnected_ = !0, "start" === r) s.id = i, s.password = o;
                                else {
                                    if ("close" !== r) throw new Error("Unrecognized command received: " + r);
                                    i ? (s.scriptTagHolder.sendNewPolls = !1, s.myPacketOrderer.closeAfter(i, function() {
                                        s.onClosed_()
                                    })) : s.onClosed_()
                                }
                        }, function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = f(t, 2),
                                r = n[0],
                                i = n[1];
                            s.incrementIncomingBytes_(t), s.myPacketOrderer.handleResponse(r, i)
                        }, function() {
                            s.onClosed_()
                        }, s.urlFn), (t = {
                            start: "t"
                        }).ser = Math.floor(1e8 * Math.random()), s.scriptTagHolder.uniqueCallbackIdentifier && (t.cb = s.scriptTagHolder.uniqueCallbackIdentifier), t.v = "5", s.transportSessionId && (t.s = s.transportSessionId), s.lastSessionId && (t.ls = s.lastSessionId), s.applicationId && (t.p = s.applicationId), "undefined" != typeof location && location.href && -1 !== location.href.indexOf(Wt) && (t.r = "f"), e = s.urlFn(t), s.log_("Connecting via long-poll to " + e), s.scriptTagHolder.addTag(e, function() {}))
                    }, "complete" === document.readyState ? n() : (r = !1, i = function() {
                        document.body ? r || (r = !0, n()) : setTimeout(i, Math.floor(10))
                    }, document.addEventListener ? (document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", i, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                        "complete" === document.readyState && i()
                    }), window.attachEvent("onload", i)))
                }, ii.prototype.start = function() {
                    this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                }, ii.forceAllow = function() {
                    ii.forceAllow_ = !0
                }, ii.forceDisallow = function() {
                    ii.forceDisallow_ = !0
                }, ii.isAvailable = function() {
                    return !!ii.forceAllow_ || !(ii.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.UI)
                }, ii.prototype.markConnectionHealthy = function() {}, ii.prototype.shutdown_ = function() {
                    this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                }, ii.prototype.onClosed_ = function() {
                    this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                }, ii.prototype.close = function() {
                    this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                }, ii.prototype.send = function(t) {
                    var e = P(t);
                    this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                    for (var n, r = (n = a(e), p.encodeByteArray(n, !0)), i = dt(r, 1840), o = 0; o < i.length; o++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++
                }, ii.prototype.addDisconnectPingFrame = function(t, e) {
                    this.myDisconnFrame = document.createElement("iframe");
                    var n = {
                        dframe: "t"
                    };
                    n.id = t, n.pw = e, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                }, ii.prototype.incrementIncomingBytes_ = function(t) {
                    var e = P(t).length;
                    this.bytesReceived += e, this.stats_.incrementCounter("bytes_received", e)
                }, ii);

            function ii(t, e, n, r, i) {
                this.connId = t, this.repoInfo = e, this.applicationId = n, this.transportSessionId = r, this.lastSessionId = i, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = bt(t), this.stats_ = Ar.getCollection(e), this.urlFn = function(t) {
                    return e.connectionURL(qt, t)
                }
            }
            var oi = (si.createIFrame_ = function() {
                var e = document.createElement("iframe");
                if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(e);
                try {
                    e.contentWindow.document || wt("No IE domain setting required")
                } catch (t) {
                    var n = document.domain;
                    e.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())"
                }
                return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
            }, si.prototype.close = function() {
                var t = this;
                this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() {
                    null !== t.myIFrame && (document.body.removeChild(t.myIFrame), t.myIFrame = null)
                }, Math.floor(0)));
                var e = this.onDisconnect;
                e && (this.onDisconnect = null, e())
            }, si.prototype.startLongPoll = function(t, e) {
                for (this.myID = t, this.myPW = e, this.alive = !0; this.newRequest_(););
            }, si.prototype.newRequest_ = function() {
                if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (0 < this.pendingSegs.length ? 2 : 1)) {
                    this.currentSerial++;
                    var t = {};
                    t.id = this.myID, t.pw = this.myPW, t.ser = this.currentSerial;
                    for (var e = this.urlFn(t), n = "", r = 0; 0 < this.pendingSegs.length;) {
                        if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
                        var i = this.pendingSegs.shift(),
                            n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" + i.ts + "&d" + r + "=" + i.d;
                        r++
                    }
                    return e += n, this.addLongPollTag_(e, this.currentSerial), !0
                }
                return !1
            }, si.prototype.enqueueSegment = function(t, e, n) {
                this.pendingSegs.push({
                    seg: t,
                    ts: e,
                    d: n
                }), this.alive && this.newRequest_()
            }, si.prototype.addLongPollTag_ = function(t, e) {
                var n = this;
                this.outstandingRequests.add(e);

                function r() {
                    n.outstandingRequests.delete(e), n.newRequest_()
                }
                var i = setTimeout(r, Math.floor(25e3));
                this.addTag(t, function() {
                    clearTimeout(i), r()
                })
            }, si.prototype.addTag = function(t, n) {
                var r = this;
                setTimeout(function() {
                    try {
                        if (!r.sendNewPolls) return;
                        var e = r.myIFrame.doc.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = t, e.onload = e.onreadystatechange = function() {
                            var t = e.readyState;
                            t && "loaded" !== t && "complete" !== t || (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), n())
                        }, e.onerror = function() {
                            wt("Long-poll script failed to load: " + t), r.sendNewPolls = !1, r.close()
                        }, r.myIFrame.doc.body.appendChild(e)
                    } catch (t) {}
                }, Math.floor(1))
            }, si);

            function si(t, e, n, r) {
                this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, this.uniqueCallbackIdentifier = gt(), window[ei + this.uniqueCallbackIdentifier] = t, window[ni + this.uniqueCallbackIdentifier] = e, this.myIFrame = si.createIFrame_();
                var i = "";
                this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length) && (i = '<script>document.domain="' + document.domain + '";<\/script>');
                var o = "<html><body>" + i + "</body></html>";
                try {
                    this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close()
                } catch (t) {
                    wt("frame writing exception"), t.stack && wt(t.stack), wt(t)
                }
            }
            var ai = "";
            var hi = null;
            "undefined" != typeof MozWebSocket ? hi = MozWebSocket : "undefined" != typeof WebSocket && (hi = WebSocket);
            var li = (ui.connectionURL_ = function(t, e, n) {
                var r = {
                    v: "5"
                };
                return "undefined" != typeof location && location.href && -1 !== location.href.indexOf(Wt) && (r.r = "f"), e && (r.s = e), n && (r.ls = n), t.connectionURL(Qt, r)
            }, ui.prototype.open = function(t, e) {
                var n, r = this;
                this.onDisconnect = e, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, _t.set("previous_websocket_failure", !0);
                try {
                    m() || (n = {
                        headers: {
                            "X-Firebase-GMPID": this.applicationId || ""
                        }
                    }, this.mySock = new hi(this.connURL, [], n))
                } catch (t) {
                    this.log_("Error instantiating WebSocket.");
                    var i = t.message || t.data;
                    return i && this.log_(i), void this.onClosed_()
                }
                this.mySock.onopen = function() {
                    r.log_("Websocket connected."), r.everConnected_ = !0
                }, this.mySock.onclose = function() {
                    r.log_("Websocket connection was disconnected."), r.mySock = null, r.onClosed_()
                }, this.mySock.onmessage = function(t) {
                    r.handleIncomingFrame(t)
                }, this.mySock.onerror = function(t) {
                    r.log_("WebSocket error.  Closing connection.");
                    var e = t.message || t.data;
                    e && r.log_(e), r.onClosed_()
                }
            }, ui.prototype.start = function() {}, ui.forceDisallow = function() {
                ui.forceDisallow_ = !0
            }, ui.isAvailable = function() {
                var t, e = !1;
                return "undefined" != typeof navigator && navigator.userAgent && ((t = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)) && 1 < t.length && parseFloat(t[1]) < 4.4 && (e = !0)), !e && null !== hi && !ui.forceDisallow_
            }, ui.previouslyFailed = function() {
                return _t.isInMemoryStorage || !0 === _t.get("previous_websocket_failure")
            }, ui.prototype.markConnectionHealthy = function() {
                _t.remove("previous_websocket_failure")
            }, ui.prototype.appendFrame_ = function(t) {
                var e, n;
                this.frames.push(t), this.frames.length === this.totalFrames && (e = this.frames.join(""), this.frames = null, n = R(e), this.onMessage(n))
            }, ui.prototype.handleNewFrameCount_ = function(t) {
                this.totalFrames = t, this.frames = []
            }, ui.prototype.extractFrameCount_ = function(t) {
                if (C(null === this.frames, "We already have a frame buffer"), t.length <= 6) {
                    var e = Number(t);
                    if (!isNaN(e)) return this.handleNewFrameCount_(e), null
                }
                return this.handleNewFrameCount_(1), t
            }, ui.prototype.handleIncomingFrame = function(t) {
                var e, n;
                null !== this.mySock && (e = t.data, this.bytesReceived += e.length, this.stats_.incrementCounter("bytes_received", e.length), this.resetKeepAlive(), null !== this.frames ? this.appendFrame_(e) : null !== (n = this.extractFrameCount_(e)) && this.appendFrame_(n))
            }, ui.prototype.send = function(t) {
                this.resetKeepAlive();
                var e = P(t);
                this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                var n = dt(e, 16384);
                1 < n.length && this.sendString_(String(n.length));
                for (var r = 0; r < n.length; r++) this.sendString_(n[r])
            }, ui.prototype.shutdown_ = function() {
                this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
            }, ui.prototype.onClosed_ = function() {
                this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
            }, ui.prototype.close = function() {
                this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
            }, ui.prototype.resetKeepAlive = function() {
                var t = this;
                clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() {
                    t.mySock && t.sendString_("0"), t.resetKeepAlive()
                }, Math.floor(45e3))
            }, ui.prototype.sendString_ = function(t) {
                try {
                    this.mySock.send(t)
                } catch (t) {
                    this.log_("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                }
            }, ui.responsesRequiredToBeHealthy = 2, ui.healthyTimeout = 3e4, ui);

            function ui(t, e, n, r, i) {
                this.connId = t, this.applicationId = n, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = bt(this.connId), this.stats_ = Ar.getCollection(e), this.connURL = ui.connectionURL_(e, r, i), this.nodeAdmin = e.nodeAdmin
            }
            var ci = (Object.defineProperty(pi, "ALL_TRANSPORTS", {
                get: function() {
                    return [ri, li]
                },
                enumerable: !1,
                configurable: !0
            }), pi.prototype.initTransports_ = function(t) {
                var e, n, r = li && li.isAvailable(),
                    i = r && !li.previouslyFailed();
                if (t.webSocketOnly && (r || lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i) this.transports_ = [li];
                else {
                    var o = this.transports_ = [];
                    try {
                        for (var s = _(pi.ALL_TRANSPORTS), a = s.next(); !a.done; a = s.next()) {
                            var h = a.value;
                            h && h.isAvailable() && o.push(h)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (n = s.return) && n.call(s)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                }
            }, pi.prototype.initialTransport = function() {
                if (0 < this.transports_.length) return this.transports_[0];
                throw new Error("No transports available")
            }, pi.prototype.upgradeTransport = function() {
                return 1 < this.transports_.length ? this.transports_[1] : null
            }, pi);

            function pi(t) {
                this.initTransports_(t)
            }
            var di = (fi.prototype.start_ = function() {
                var t = this,
                    e = this.transportManager_.initialTransport();
                this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                var n = this.connReceiver_(this.conn_),
                    r = this.disconnReceiver_(this.conn_);
                this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function() {
                    t.conn_ && t.conn_.open(n, r)
                }, Math.floor(0));
                var i = e.healthyTimeout || 0;
                0 < i && (this.healthyTimeout_ = Ot(function() {
                    t.healthyTimeout_ = null, t.isHealthy_ || (t.conn_ && 102400 < t.conn_.bytesReceived ? (t.log_("Connection exceeded healthy timeout but has received " + t.conn_.bytesReceived + " bytes.  Marking connection healthy."), t.isHealthy_ = !0, t.conn_.markConnectionHealthy()) : t.conn_ && 10240 < t.conn_.bytesSent ? t.log_("Connection exceeded healthy timeout but has sent " + t.conn_.bytesSent + " bytes.  Leaving connection alive.") : (t.log_("Closing unhealthy connection after timeout."), t.close()))
                }, Math.floor(i)))
            }, fi.prototype.nextTransportId_ = function() {
                return "c:" + this.id + ":" + this.connectionCount++
            }, fi.prototype.disconnReceiver_ = function(e) {
                var n = this;
                return function(t) {
                    e === n.conn_ ? n.onConnectionLost_(t) : e === n.secondaryConn_ ? (n.log_("Secondary connection lost."), n.onSecondaryConnectionLost_()) : n.log_("closing an old connection")
                }
            }, fi.prototype.connReceiver_ = function(e) {
                var n = this;
                return function(t) {
                    2 !== n.state_ && (e === n.rx_ ? n.onPrimaryMessageReceived_(t) : e === n.secondaryConn_ ? n.onSecondaryMessageReceived_(t) : n.log_("message on old connection"))
                }
            }, fi.prototype.sendRequest = function(t) {
                var e = {
                    t: "d",
                    d: t
                };
                this.sendData_(e)
            }, fi.prototype.tryCleanupConnection = function() {
                this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
            }, fi.prototype.onSecondaryControl_ = function(t) {
                var e;
                "t" in t && ("a" === (e = t.t) ? this.upgradeIfSecondaryHealthy_() : "r" === e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === e && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_()))
            }, fi.prototype.onSecondaryMessageReceived_ = function(t) {
                var e = pt("t", t),
                    n = pt("d", t);
                if ("c" === e) this.onSecondaryControl_(n);
                else {
                    if ("d" !== e) throw new Error("Unknown protocol layer: " + e);
                    this.pendingDataMessages.push(n)
                }
            }, fi.prototype.upgradeIfSecondaryHealthy_ = function() {
                this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: "p",
                        d: {}
                    }
                }))
            }, fi.prototype.proceedWithUpgrade_ = function() {
                this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: "a",
                        d: {}
                    }
                }), this.log_("Ending transmission on primary"), this.conn_.send({
                    t: "c",
                    d: {
                        t: "n",
                        d: {}
                    }
                }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
            }, fi.prototype.onPrimaryMessageReceived_ = function(t) {
                var e = pt("t", t),
                    n = pt("d", t);
                "c" === e ? this.onControl_(n) : "d" === e && this.onDataMessage_(n)
            }, fi.prototype.onDataMessage_ = function(t) {
                this.onPrimaryResponse_(), this.onMessage_(t)
            }, fi.prototype.onPrimaryResponse_ = function() {
                this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
            }, fi.prototype.onControl_ = function(t) {
                var e = pt("t", t);
                if ("d" in t) {
                    var n = t.d;
                    if ("h" === e) this.onHandshake_(n);
                    else if ("n" === e) {
                        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                        for (var r = 0; r < this.pendingDataMessages.length; ++r) this.onDataMessage_(this.pendingDataMessages[r]);
                        this.pendingDataMessages = [], this.tryCleanupConnection()
                    } else "s" === e ? this.onConnectionShutdown_(n) : "r" === e ? this.onReset_(n) : "e" === e ? at("Server Error: " + n) : "o" === e ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : at("Unknown control packet command: " + e)
                }
            }, fi.prototype.onHandshake_ = function(t) {
                var e = t.ts,
                    n = t.v,
                    r = t.h;
                this.sessionId = t.s, this.repoInfo_.updateHost(r), 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, e), "5" !== n && lt("Protocol version mismatch detected"), this.tryStartUpgrade_())
            }, fi.prototype.tryStartUpgrade_ = function() {
                var t = this.transportManager_.upgradeTransport();
                t && this.startUpgrade_(t)
            }, fi.prototype.startUpgrade_ = function(t) {
                var e = this;
                this.secondaryConn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.sessionId), this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                var n = this.connReceiver_(this.secondaryConn_),
                    r = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, r), Ot(function() {
                    e.secondaryConn_ && (e.log_("Timed out trying to upgrade."), e.secondaryConn_.close())
                }, Math.floor(6e4))
            }, fi.prototype.onReset_ = function(t) {
                this.log_("Reset packet received.  New host: " + t), this.repoInfo_.updateHost(t), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
            }, fi.prototype.onConnectionEstablished_ = function(t, e) {
                var n = this;
                this.log_("Realtime connection established."), this.conn_ = t, this.state_ = 1, this.onReady_ && (this.onReady_(e, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Ot(function() {
                    n.sendPingOnPrimaryIfNecessary_()
                }, Math.floor(5e3))
            }, fi.prototype.sendPingOnPrimaryIfNecessary_ = function() {
                this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                    t: "c",
                    d: {
                        t: "p",
                        d: {}
                    }
                }))
            }, fi.prototype.onSecondaryConnectionLost_ = function() {
                var t = this.secondaryConn_;
                this.secondaryConn_ = null, this.tx_ !== t && this.rx_ !== t || this.close()
            }, fi.prototype.onConnectionLost_ = function(t) {
                this.conn_ = null, t || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (_t.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
            }, fi.prototype.onConnectionShutdown_ = function(t) {
                this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(t), this.onKill_ = null), this.onDisconnect_ = null, this.close()
            }, fi.prototype.sendData_ = function(t) {
                if (1 !== this.state_) throw "Connection is not connected";
                this.tx_.send(t)
            }, fi.prototype.close = function() {
                2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
            }, fi.prototype.closeConnections_ = function() {
                this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
            }, fi);

            function fi(t, e, n, r, i, o, s, a) {
                this.id = t, this.repoInfo_ = e, this.applicationId_ = n, this.onMessage_ = r, this.onReady_ = i, this.onDisconnect_ = o, this.onKill_ = s, this.lastSessionId = a, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = bt("c:" + this.id + ":"), this.transportManager_ = new ci(e), this.log_("Connection created"), this.start_()
            }
            var _i = (yi.prototype.put = function(t, e, n, r) {}, yi.prototype.merge = function(t, e, n, r) {}, yi.prototype.refreshAuthToken = function(t) {}, yi.prototype.onDisconnectPut = function(t, e, n) {}, yi.prototype.onDisconnectMerge = function(t, e, n) {}, yi.prototype.onDisconnectCancel = function(t, e) {}, yi.prototype.reportStats = function(t) {}, yi);

            function yi() {}
            var vi, gi = 1e3,
                mi = 3e5,
                Ci = (n(Ei, vi = _i), Ei.prototype.sendRequest = function(t, e, n) {
                    var r = ++this.requestNumber_,
                        i = {
                            r: r,
                            a: t,
                            b: e
                        };
                    this.log_(P(i)), C(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n)
                }, Ei.prototype.listen = function(t, e, n, r) {
                    var i = t.queryIdentifier(),
                        o = t.path.toString();
                    this.log_("Listen called for " + o + " " + i), this.listens.has(o) || this.listens.set(o, new Map), C(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), C(!this.listens.get(o).has(i), "listen() called twice for same path/queryId.");
                    var s = {
                        onComplete: r,
                        hashFn: e,
                        query: t,
                        tag: n
                    };
                    this.listens.get(o).set(i, s), this.connected_ && this.sendListen_(s)
                }, Ei.prototype.sendListen_ = function(r) {
                    var i = this,
                        o = r.query,
                        s = o.path.toString(),
                        a = o.queryIdentifier();
                    this.log_("Listen on " + s + " for " + a);
                    var t = {
                        p: s
                    };
                    r.tag && (t.q = o.queryObject(), t.t = r.tag), t.h = r.hashFn(), this.sendRequest("q", t, function(t) {
                        var e = t.d,
                            n = t.s;
                        Ei.warnOnListenWarnings_(e, o), (i.listens.get(s) && i.listens.get(s).get(a)) === r && (i.log_("listen response", t), "ok" !== n && i.removeListen_(s, a), r.onComplete && r.onComplete(n, e))
                    })
                }, Ei.warnOnListenWarnings_ = function(t, e) {
                    var n, r, i;
                    t && "object" == typeof t && O(t, "w") && (n = x(t, "w"), Array.isArray(n) && ~n.indexOf("no_index") && (r = '".indexOn": "' + e.getQueryParams().getIndex().toString() + '"', i = e.path.toString(), lt("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.")))
                }, Ei.prototype.refreshAuthToken = function(t) {
                    this.authToken_ = t, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function() {}), this.reduceReconnectDelayIfAdminCredential_(t)
                }, Ei.prototype.reduceReconnectDelayIfAdminCredential_ = function(t) {
                    var e;
                    (t && 40 === t.length || "object" == typeof(e = D(t).claims) && !0 === e.admin) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                }, Ei.prototype.tryAuth = function() {
                    var r, t, e, n, i = this;
                    this.connected_ && this.authToken_ && (r = this.authToken_, t = !!(n = D(r).claims) && "object" == typeof n && n.hasOwnProperty("iat") ? "auth" : "gauth", e = {
                        cred: r
                    }, null === this.authOverride_ ? e.noauth = !0 : "object" == typeof this.authOverride_ && (e.authvar = this.authOverride_), this.sendRequest(t, e, function(t) {
                        var e = t.s,
                            n = t.d || "error";
                        i.authToken_ === r && ("ok" === e ? i.invalidAuthTokenCount_ = 0 : i.onAuthRevoked_(e, n))
                    }))
                }, Ei.prototype.unlisten = function(t, e) {
                    var n = t.path.toString(),
                        r = t.queryIdentifier();
                    this.log_("Unlisten called for " + n + " " + r), C(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, t.queryObject(), e)
                }, Ei.prototype.sendUnlisten_ = function(t, e, n, r) {
                    this.log_("Unlisten on " + t + " for " + e);
                    var i = {
                        p: t
                    };
                    r && (i.q = n, i.t = r), this.sendRequest("n", i)
                }, Ei.prototype.onDisconnectPut = function(t, e, n) {
                    this.connected_ ? this.sendOnDisconnect_("o", t, e, n) : this.onDisconnectRequestQueue_.push({
                        pathString: t,
                        action: "o",
                        data: e,
                        onComplete: n
                    })
                }, Ei.prototype.onDisconnectMerge = function(t, e, n) {
                    this.connected_ ? this.sendOnDisconnect_("om", t, e, n) : this.onDisconnectRequestQueue_.push({
                        pathString: t,
                        action: "om",
                        data: e,
                        onComplete: n
                    })
                }, Ei.prototype.onDisconnectCancel = function(t, e) {
                    this.connected_ ? this.sendOnDisconnect_("oc", t, null, e) : this.onDisconnectRequestQueue_.push({
                        pathString: t,
                        action: "oc",
                        data: null,
                        onComplete: e
                    })
                }, Ei.prototype.sendOnDisconnect_ = function(t, e, n, r) {
                    var i = {
                        p: e,
                        d: n
                    };
                    this.log_("onDisconnect " + t, i), this.sendRequest(t, i, function(t) {
                        r && setTimeout(function() {
                            r(t.s, t.d)
                        }, Math.floor(0))
                    })
                }, Ei.prototype.put = function(t, e, n, r) {
                    this.putInternal("p", t, e, n, r)
                }, Ei.prototype.merge = function(t, e, n, r) {
                    this.putInternal("m", t, e, n, r)
                }, Ei.prototype.putInternal = function(t, e, n, r, i) {
                    var o = {
                        p: e,
                        d: n
                    };
                    void 0 !== i && (o.h = i), this.outstandingPuts_.push({
                        action: t,
                        request: o,
                        onComplete: r
                    }), this.outstandingPutCount_++;
                    var s = this.outstandingPuts_.length - 1;
                    this.connected_ ? this.sendPut_(s) : this.log_("Buffering put: " + e)
                }, Ei.prototype.sendPut_ = function(e) {
                    var n = this,
                        r = this.outstandingPuts_[e].action,
                        t = this.outstandingPuts_[e].request,
                        i = this.outstandingPuts_[e].onComplete;
                    this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(r, t, function(t) {
                        n.log_(r + " response", t), delete n.outstandingPuts_[e], n.outstandingPutCount_--, 0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []), i && i(t.s, t.d)
                    })
                }, Ei.prototype.reportStats = function(t) {
                    var e, n = this;
                    this.connected_ && (e = {
                        c: t
                    }, this.log_("reportStats", e), this.sendRequest("s", e, function(t) {
                        var e;
                        "ok" !== t.s && (e = t.d, n.log_("reportStats", "Error sending stats: " + e))
                    }))
                }, Ei.prototype.onDataMessage_ = function(t) {
                    if ("r" in t) {
                        this.log_("from server: " + P(t));
                        var e = t.r,
                            n = this.requestCBHash_[e];
                        n && (delete this.requestCBHash_[e], n(t.b))
                    } else {
                        if ("error" in t) throw "A server-side error has occurred: " + t.error;
                        "a" in t && this.onDataPush_(t.a, t.b)
                    }
                }, Ei.prototype.onDataPush_ = function(t, e) {
                    this.log_("handleServerMessage", t, e), "d" === t ? this.onDataUpdate_(e.p, e.d, !1, e.t) : "m" === t ? this.onDataUpdate_(e.p, e.d, !0, e.t) : "c" === t ? this.onListenRevoked_(e.p, e.q) : "ac" === t ? this.onAuthRevoked_(e.s, e.d) : "sd" === t ? this.onSecurityDebugPacket_(e) : at("Unrecognized action received from server: " + P(t) + "\nAre you using the latest client?")
                }, Ei.prototype.onReady_ = function(t, e) {
                    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(t), this.lastSessionId = e, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                }, Ei.prototype.scheduleConnect_ = function(t) {
                    var e = this;
                    C(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function() {
                        e.establishConnectionTimer_ = null, e.establishConnection_()
                    }, Math.floor(t))
                }, Ei.prototype.onVisible_ = function(t) {
                    t && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = gi, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = t
                }, Ei.prototype.onOnline_ = function(t) {
                    t ? (this.log_("Browser went online."), this.reconnectDelay_ = gi, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                }, Ei.prototype.onRealtimeDisconnect_ = function() {
                    var t, e;
                    this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_() && (this.visible_ ? this.lastConnectionEstablishedTime_ && (3e4 < (new Date).getTime() - this.lastConnectionEstablishedTime_ && (this.reconnectDelay_ = gi), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime()), t = (new Date).getTime() - this.lastConnectionAttemptTime_, e = Math.max(0, this.reconnectDelay_ - t), e = Math.random() * e, this.log_("Trying to reconnect in " + e + "ms"), this.scheduleConnect_(e), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)), this.onConnectStatus_(!1)
                }, Ei.prototype.establishConnection_ = function() {
                    var e, n, r, i, o, s, a, h, l, t, u = this;
                    this.shouldReconnect_() && (this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null, e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), r = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + Ei.nextConnectionId_++, s = (o = this).lastSessionId, a = !1, h = null, l = function() {
                        h ? h.close() : (a = !0, r())
                    }, this.realtime_ = {
                        close: l,
                        sendRequest: function(t) {
                            C(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(t)
                        }
                    }, t = this.forceTokenRefresh_, this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(t).then(function(t) {
                        a ? wt("getToken() completed but was canceled") : (wt("getToken() completed. Creating connection."), o.authToken_ = t && t.accessToken, h = new di(i, o.repoInfo_, o.applicationId_, e, n, r, function(t) {
                            lt(t + " (" + o.repoInfo_.toString() + ")"), o.interrupt("server_kill")
                        }, s))
                    }).then(null, function(t) {
                        o.log_("Failed to get token: " + t), a || (u.repoInfo_.nodeAdmin && lt(t), l())
                    }))
                }, Ei.prototype.interrupt = function(t) {
                    wt("Interrupting connection for reason: " + t), this.interruptReasons_[t] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                }, Ei.prototype.resume = function(t) {
                    wt("Resuming connection for reason: " + t), delete this.interruptReasons_[t], k(this.interruptReasons_) && (this.reconnectDelay_ = gi, this.realtime_ || this.scheduleConnect_(0))
                }, Ei.prototype.handleTimestamp_ = function(t) {
                    var e = t - (new Date).getTime();
                    this.onServerInfoUpdate_({
                        serverTimeOffset: e
                    })
                }, Ei.prototype.cancelSentTransactions_ = function() {
                    for (var t = 0; t < this.outstandingPuts_.length; t++) {
                        var e = this.outstandingPuts_[t];
                        e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"), delete this.outstandingPuts_[t], this.outstandingPutCount_--)
                    }
                    0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                }, Ei.prototype.onListenRevoked_ = function(t, e) {
                    var n = e ? e.map(function(t) {
                            return Nt(t)
                        }).join("$") : "default",
                        r = this.removeListen_(t, n);
                    r && r.onComplete && r.onComplete("permission_denied")
                }, Ei.prototype.removeListen_ = function(t, e) {
                    var n, r, i = new Ft(t).toString();
                    return this.listens.has(i) ? (r = (n = this.listens.get(i)).get(e), n.delete(e), 0 === n.size && this.listens.delete(i)) : r = void 0, r
                }, Ei.prototype.onAuthRevoked_ = function(t, e) {
                    wt("Auth token revoked: " + t + "/" + e), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== t && "permission_denied" !== t || (this.invalidAuthTokenCount_++, 3 <= this.invalidAuthTokenCount_ && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                }, Ei.prototype.onSecurityDebugPacket_ = function(t) {
                    this.securityDebugCallback_ ? this.securityDebugCallback_(t) : "msg" in t && console.log("FIREBASE: " + t.msg.replace("\n", "\nFIREBASE: "))
                }, Ei.prototype.restoreState_ = function() {
                    var e, t, n, r;
                    this.tryAuth();
                    try {
                        for (var i = _(this.listens.values()), o = i.next(); !o.done; o = i.next()) {
                            var s = o.value;
                            try {
                                for (var a = (n = void 0, _(s.values())), h = a.next(); !h.done; h = a.next()) {
                                    var l = h.value;
                                    this.sendListen_(l)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    h && !h.done && (r = a.return) && r.call(a)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (t = i.return) && t.call(i)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    for (var u = 0; u < this.outstandingPuts_.length; u++) this.outstandingPuts_[u] && this.sendPut_(u);
                    for (; this.onDisconnectRequestQueue_.length;) {
                        var c = this.onDisconnectRequestQueue_.shift();
                        this.sendOnDisconnect_(c.action, c.pathString, c.data, c.onComplete)
                    }
                }, Ei.prototype.sendConnectStats_ = function() {
                    var t = {};
                    t["sdk.js." + ai.replace(/\./g, "-")] = 1, g() ? t["framework.cordova"] = 1 : "object" == typeof navigator && "ReactNative" === navigator.product && (t["framework.reactnative"] = 1), this.reportStats(t)
                }, Ei.prototype.shouldReconnect_ = function() {
                    var t = $r.getInstance().currentlyOnline();
                    return k(this.interruptReasons_) && t
                }, Ei.nextPersistentConnectionId_ = 0, Ei.nextConnectionId_ = 0, Ei);

            function Ei(t, e, n, r, i, o, s) {
                var a = vi.call(this) || this;
                if (a.repoInfo_ = t, a.applicationId_ = e, a.onDataUpdate_ = n, a.onConnectStatus_ = r, a.onServerInfoUpdate_ = i, a.authTokenProvider_ = o, a.authOverride_ = s, a.id = Ei.nextPersistentConnectionId_++, a.log_ = bt("p:" + a.id + ":"), a.interruptReasons_ = {}, a.listens = new Map, a.outstandingPuts_ = [], a.outstandingPutCount_ = 0, a.onDisconnectRequestQueue_ = [], a.connected_ = !1, a.reconnectDelay_ = gi, a.maxReconnectDelay_ = mi, a.securityDebugCallback_ = null, a.lastSessionId = null, a.establishConnectionTimer_ = null, a.visible_ = !1, a.requestCBHash_ = {}, a.requestNumber_ = 0, a.realtime_ = null, a.authToken_ = null, a.forceTokenRefresh_ = !1, a.invalidAuthTokenCount_ = 0, a.firstConnection_ = !0, a.lastConnectionAttemptTime_ = null, a.lastConnectionEstablishedTime_ = null, s && !m()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                return a.scheduleConnect_(0), zr.getInstance().on("visible", a.onVisible_, a), -1 === t.host.indexOf("fblocal") && $r.getInstance().on("online", a.onOnline_, a), a
            }
            var wi, bi = (n(Ti, wi = _i), Ti.prototype.reportStats = function(t) {
                throw new Error("Method not implemented.")
            }, Ti.getListenId_ = function(t, e) {
                return void 0 !== e ? "tag$" + e : (C(t.getQueryParams().isDefault(), "should have a tag if it's not a default query."), t.path.toString())
            }, Ti.prototype.listen = function(t, e, r, i) {
                var o = this,
                    s = t.path.toString();
                this.log_("Listen called for " + s + " " + t.queryIdentifier());
                var a = Ti.getListenId_(t, r),
                    h = {};
                this.listens_[a] = h;
                var n = t.getQueryParams().toRestQueryStringParameters();
                this.restRequest_(s + ".json", n, function(t, e) {
                    var n = e;
                    404 === t && (t = n = null), null === t && o.onDataUpdate_(s, n, !1, r), x(o.listens_, a) === h && i(t ? 401 === t ? "permission_denied" : "rest_error:" + t : "ok", null)
                })
            }, Ti.prototype.unlisten = function(t, e) {
                var n = Ti.getListenId_(t, e);
                delete this.listens_[n]
            }, Ti.prototype.refreshAuthToken = function(t) {}, Ti.prototype.restRequest_ = function(i, o, s) {
                var a = this;
                void 0 === o && (o = {}), o.format = "export", this.authTokenProvider_.getToken(!1).then(function(t) {
                    var e = t && t.accessToken;
                    e && (o.auth = e);
                    var n = (a.repoInfo_.secure ? "https://" : "http://") + a.repoInfo_.host + i + "?ns=" + a.repoInfo_.namespace + function(t) {
                        for (var n = [], e = 0, r = Object.entries(t); e < r.length; e++) {
                            var i = r[e];
                            ! function(e, t) {
                                Array.isArray(t) ? t.forEach(function(t) {
                                    n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                                }) : n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                            }(i[0], i[1])
                        }
                        return n.length ? "&" + n.join("&") : ""
                    }(o);
                    a.log_("Sending REST request for " + n);
                    var r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        if (s && 4 === r.readyState) {
                            a.log_("REST Response for " + n + " received. status:", r.status, "response:", r.responseText);
                            var t = null;
                            if (200 <= r.status && r.status < 300) {
                                try {
                                    t = R(r.responseText)
                                } catch (t) {
                                    lt("Failed to parse JSON response for " + n + ": " + r.responseText)
                                }
                                s(null, t)
                            } else 401 !== r.status && 404 !== r.status && lt("Got unsuccessful REST response for " + n + " Status: " + r.status), s(r.status);
                            s = null
                        }
                    }, r.open("GET", n, !0), r.send()
                })
            }, Ti);

            function Ti(t, e, n) {
                var r = wi.call(this) || this;
                return r.repoInfo_ = t, r.onDataUpdate_ = e, r.authTokenProvider_ = n, r.log_ = bt("p:rest:"), r.listens_ = {}, r
            }
            var Si = "repo_interrupt",
                Ii = (Ni.prototype.toString = function() {
                    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                }, Ni.prototype.name = function() {
                    return this.repoInfo_.namespace
                }, Ni.prototype.serverTime = function() {
                    var t = this.infoData_.getNode(new Ft(".info/serverTimeOffset")).val() || 0;
                    return (new Date).getTime() + t
                }, Ni.prototype.generateServerValues = function() {
                    return (t = (t = {
                        timestamp: this.serverTime()
                    }) || {}).timestamp = t.timestamp || (new Date).getTime(), t;
                    var t
                }, Ni.prototype.onDataUpdate_ = function(t, e, n, r) {
                    this.dataUpdateCount++;
                    var i = new Ft(t);
                    e = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(t, e) : e;
                    var o, s, a, h, l = [],
                        u = i;
                    0 < (l = r ? n ? (o = F(e, function(t) {
                        return an(t)
                    }), this.serverSyncTree_.applyTaggedQueryMerge(i, o, r)) : (s = an(e), this.serverSyncTree_.applyTaggedQueryOverwrite(i, s, r)) : n ? (a = F(e, function(t) {
                        return an(t)
                    }), this.serverSyncTree_.applyServerMerge(i, a)) : (h = an(e), this.serverSyncTree_.applyServerOverwrite(i, h))).length && (u = this.rerunTransactions_(i)), this.eventQueue_.raiseEventsForChangedPath(u, l)
                }, Ni.prototype.interceptServerData_ = function(t) {
                    this.interceptServerDataCallback_ = t
                }, Ni.prototype.onConnectStatus_ = function(t) {
                    this.updateInfo_("connected", t), !1 === t && this.runOnDisconnectEvents_()
                }, Ni.prototype.onServerInfoUpdate_ = function(t) {
                    var n = this;
                    Rt(t, function(t, e) {
                        n.updateInfo_(t, e)
                    })
                }, Ni.prototype.updateInfo_ = function(t, e) {
                    var n = new Ft("/.info/" + t),
                        r = an(e);
                    this.infoData_.updateSnapshot(n, r);
                    var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                    this.eventQueue_.raiseEventsForChangedPath(n, i)
                }, Ni.prototype.getNextWriteId_ = function() {
                    return this.nextWriteId_++
                }, Ni.prototype.setWithPriority = function(i, t, e, o) {
                    var s = this;
                    this.log_("set", {
                        path: i.toString(),
                        value: t,
                        priority: e
                    });
                    var n = this.generateServerValues(),
                        r = an(t, e),
                        a = this.serverSyncTree_.calcCompleteEventCache(i),
                        h = On(r, a, n),
                        l = this.getNextWriteId_(),
                        u = this.serverSyncTree_.applyUserOverwrite(i, h, l, !0);
                    this.eventQueue_.queueEvents(u), this.server_.put(i.toString(), r.val(!0), function(t, e) {
                        var n = "ok" === t;
                        n || lt("set at " + i + " failed: " + t);
                        var r = s.serverSyncTree_.ackUserWrite(l, !n);
                        s.eventQueue_.raiseEventsForChangedPath(i, r), s.callOnCompleteCallback(o, t, e)
                    });
                    var c = this.abortTransactions_(i);
                    this.rerunTransactions_(c), this.eventQueue_.raiseEventsForChangedPath(c, [])
                }, Ni.prototype.update = function(o, t, s) {
                    var a = this;
                    this.log_("update", {
                        path: o.toString(),
                        value: t
                    });
                    var h, e, n = !0,
                        r = this.generateServerValues(),
                        i = {};
                    Rt(t, function(t, e) {
                        n = !1, i[t] = Dn(o.child(t), an(e), a.serverSyncTree_, r)
                    }), n ? (wt("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(s, "ok")) : (h = this.getNextWriteId_(), e = this.serverSyncTree_.applyUserMerge(o, i, h), this.eventQueue_.queueEvents(e), this.server_.merge(o.toString(), t, function(t, e) {
                        var n = "ok" === t;
                        n || lt("update at " + o + " failed: " + t);
                        var r = a.serverSyncTree_.ackUserWrite(h, !n),
                            i = 0 < r.length ? a.rerunTransactions_(o) : o;
                        a.eventQueue_.raiseEventsForChangedPath(i, r), a.callOnCompleteCallback(s, t, e)
                    }), Rt(t, function(t) {
                        var e = a.abortTransactions_(o.child(t));
                        a.rerunTransactions_(e)
                    }), this.eventQueue_.raiseEventsForChangedPath(o, []))
                }, Ni.prototype.runOnDisconnectEvents_ = function() {
                    var r = this;
                    this.log_("onDisconnectEvents");
                    var i = this.generateServerValues(),
                        o = new Wn;
                    this.onDisconnect_.forEachTree(Ft.Empty, function(t, e) {
                        var n = Dn(t, e, r.serverSyncTree_, i);
                        o.remember(t, n)
                    });
                    var s = [];
                    o.forEachTree(Ft.Empty, function(t, e) {
                        s = s.concat(r.serverSyncTree_.applyServerOverwrite(t, e));
                        var n = r.abortTransactions_(t);
                        r.rerunTransactions_(n)
                    }), this.onDisconnect_ = new Wn, this.eventQueue_.raiseEventsForChangedPath(Ft.Empty, s)
                }, Ni.prototype.onDisconnectCancel = function(n, r) {
                    var i = this;
                    this.server_.onDisconnectCancel(n.toString(), function(t, e) {
                        "ok" === t && i.onDisconnect_.forget(n), i.callOnCompleteCallback(r, t, e)
                    })
                }, Ni.prototype.onDisconnectSet = function(n, t, r) {
                    var i = this,
                        o = an(t);
                    this.server_.onDisconnectPut(n.toString(), o.val(!0), function(t, e) {
                        "ok" === t && i.onDisconnect_.remember(n, o), i.callOnCompleteCallback(r, t, e)
                    })
                }, Ni.prototype.onDisconnectSetWithPriority = function(n, t, e, r) {
                    var i = this,
                        o = an(t, e);
                    this.server_.onDisconnectPut(n.toString(), o.val(!0), function(t, e) {
                        "ok" === t && i.onDisconnect_.remember(n, o), i.callOnCompleteCallback(r, t, e)
                    })
                }, Ni.prototype.onDisconnectUpdate = function(r, n, i) {
                    var o = this;
                    if (k(n)) return wt("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(i, "ok");
                    this.server_.onDisconnectMerge(r.toString(), n, function(t, e) {
                        "ok" === t && Rt(n, function(t, e) {
                            var n = an(e);
                            o.onDisconnect_.remember(r.child(t), n)
                        }), o.callOnCompleteCallback(i, t, e)
                    })
                }, Ni.prototype.addEventCallbackForQuery = function(t, e) {
                    var n = ".info" === t.path.getFront() ? this.infoSyncTree_.addEventRegistration(t, e) : this.serverSyncTree_.addEventRegistration(t, e);
                    this.eventQueue_.raiseEventsAtPath(t.path, n)
                }, Ni.prototype.removeEventCallbackForQuery = function(t, e) {
                    var n = ".info" === t.path.getFront() ? this.infoSyncTree_.removeEventRegistration(t, e) : this.serverSyncTree_.removeEventRegistration(t, e);
                    this.eventQueue_.raiseEventsAtPath(t.path, n)
                }, Ni.prototype.interrupt = function() {
                    this.persistentConnection_ && this.persistentConnection_.interrupt(Si)
                }, Ni.prototype.resume = function() {
                    this.persistentConnection_ && this.persistentConnection_.resume(Si)
                }, Ni.prototype.stats = function(t) {
                    var e, i;
                    void 0 === t && (t = !1), "undefined" != typeof console && (e = t ? (this.statsListener_ || (this.statsListener_ = new Mr(this.stats_)), this.statsListener_.get()) : this.stats_.get(), i = Object.keys(e).reduce(function(t, e) {
                        return Math.max(e.length, t)
                    }, 0), Rt(e, function(t, e) {
                        for (var n = t, r = t.length; r < i + 2; r++) n += " ";
                        console.log(n + e)
                    }))
                }, Ni.prototype.statsIncrementCounter = function(t) {
                    this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t)
                }, Ni.prototype.log_ = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = "";
                    this.persistentConnection_ && (n = this.persistentConnection_.id + ":"), wt.apply(void 0, s([n], t))
                }, Ni.prototype.callOnCompleteCallback = function(r, i, o) {
                    r && Dt(function() {
                        var t, e, n;
                        "ok" === i ? r(null) : (e = t = (i || "error").toUpperCase(), o && (e += ": " + o), (n = new Error(e)).code = t, r(n))
                    })
                }, Object.defineProperty(Ni.prototype, "database", {
                    get: function() {
                        return this.__database || (this.__database = new Gi(this))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Ni);

            function Ni(t, e, n, r) {
                var s = this;
                if (this.repoInfo_ = t, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new Ur, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new Wn, this.persistentConnection_ = null, this.stats_ = Ar.getCollection(t), e || 0 <= ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) this.server_ = new bi(this.repoInfo_, this.onDataUpdate_.bind(this), r), setTimeout(this.onConnectStatus_.bind(this, !0), 0);
                else {
                    var i = n.options.databaseAuthVariableOverride;
                    if (null != i) {
                        if ("object" != typeof i) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                        try {
                            P(i)
                        } catch (t) {
                            throw new Error("Invalid authOverride provided: " + t)
                        }
                    }
                    this.persistentConnection_ = new Ci(this.repoInfo_, n.options.appId, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), r, i), this.server_ = this.persistentConnection_
                }
                r.addTokenChangeListener(function(t) {
                    s.server_.refreshAuthToken(t)
                }), this.statsReporter_ = Ar.getOrCreateReporter(t, function() {
                    return new Qr(s.stats_, s.server_)
                }), this.transactionsInit_(), this.infoData_ = new Or, this.infoSyncTree_ = new Pr({
                    startListening: function(t, e, n, r) {
                        var i = [],
                            o = s.infoData_.getNode(t.path);
                        return o.isEmpty() || (i = s.infoSyncTree_.applyServerOverwrite(t.path, o), setTimeout(function() {
                            r("ok")
                        }, 0)), i
                    },
                    stopListening: function() {}
                }), this.updateInfo_("connected", !1), this.serverSyncTree_ = new Pr({
                    startListening: function(r, t, e, i) {
                        return s.server_.listen(r, e, t, function(t, e) {
                            var n = i(t, e);
                            s.eventQueue_.raiseEventsForChangedPath(r.path, n)
                        }), []
                    },
                    stopListening: function(t, e) {
                        s.server_.unlisten(t, e)
                    }
                })
            }
            var Ri = (Pi.prototype.getStartPost = function() {
                return this.startPost_
            }, Pi.prototype.getEndPost = function() {
                return this.endPost_
            }, Pi.prototype.matches = function(t) {
                return this.index_.compare(this.getStartPost(), t) <= 0 && this.index_.compare(t, this.getEndPost()) <= 0
            }, Pi.prototype.updateChild = function(t, e, n, r, i, o) {
                return this.matches(new fe(e, n)) || (n = tn.EMPTY_NODE), this.indexedFilter_.updateChild(t, e, n, r, i, o)
            }, Pi.prototype.updateFullNode = function(t, e, n) {
                e.isLeafNode() && (e = tn.EMPTY_NODE);
                var r = (r = e.withIndex(this.index_)).updatePriority(tn.EMPTY_NODE),
                    i = this;
                return e.forEachChild(ke, function(t, e) {
                    i.matches(new fe(t, e)) || (r = r.updateImmediateChild(t, tn.EMPTY_NODE))
                }), this.indexedFilter_.updateFullNode(t, r, n)
            }, Pi.prototype.updatePriority = function(t, e) {
                return t
            }, Pi.prototype.filtersNodes = function() {
                return !0
            }, Pi.prototype.getIndexedFilter = function() {
                return this.indexedFilter_
            }, Pi.prototype.getIndex = function() {
                return this.index_
            }, Pi.getStartPost_ = function(t) {
                if (t.hasStart()) {
                    var e = t.getIndexStartName();
                    return t.getIndex().makePost(t.getIndexStartValue(), e)
                }
                return t.getIndex().minPost()
            }, Pi.getEndPost_ = function(t) {
                if (t.hasEnd()) {
                    var e = t.getIndexEndName();
                    return t.getIndex().makePost(t.getIndexEndValue(), e)
                }
                return t.getIndex().maxPost()
            }, Pi);

            function Pi(t) {
                this.indexedFilter_ = new or(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = Pi.getStartPost_(t), this.endPost_ = Pi.getEndPost_(t)
            }
            var Di = (Oi.prototype.updateChild = function(t, e, n, r, i, o) {
                return this.rangedFilter_.matches(new fe(e, n)) || (n = tn.EMPTY_NODE), t.getImmediateChild(e).equals(n) ? t : t.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(t, e, n, r, i, o) : this.fullLimitUpdateChild_(t, e, n, i, o)
            }, Oi.prototype.updateFullNode = function(t, e, n) {
                var r;
                if (e.isLeafNode() || e.isEmpty()) r = tn.EMPTY_NODE.withIndex(this.index_);
                else if (2 * this.limit_ < e.numChildren() && e.isIndexed(this.index_)) {
                    r = tn.EMPTY_NODE.withIndex(this.index_);
                    var i = void 0;
                    i = this.reverse_ ? e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : e.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                    for (var o = 0; i.hasNext() && o < this.limit_;) {
                        var s = i.getNext();
                        if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0 : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0)) break;
                        r = r.updateImmediateChild(s.name, s.node), o++
                    }
                } else {
                    r = (r = e.withIndex(this.index_)).updatePriority(tn.EMPTY_NODE);
                    var a, h = void 0,
                        l = void 0,
                        u = void 0,
                        i = void 0;
                    u = this.reverse_ ? (i = r.getReverseIterator(this.index_), h = this.rangedFilter_.getEndPost(), l = this.rangedFilter_.getStartPost(), a = this.index_.getCompare(), function(t, e) {
                        return a(e, t)
                    }) : (i = r.getIterator(this.index_), h = this.rangedFilter_.getStartPost(), l = this.rangedFilter_.getEndPost(), this.index_.getCompare());
                    for (var o = 0, c = !1; i.hasNext();) {
                        s = i.getNext();
                        !c && u(h, s) <= 0 && (c = !0), c && o < this.limit_ && u(s, l) <= 0 ? o++ : r = r.updateImmediateChild(s.name, tn.EMPTY_NODE)
                    }
                }
                return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n)
            }, Oi.prototype.updatePriority = function(t, e) {
                return t
            }, Oi.prototype.filtersNodes = function() {
                return !0
            }, Oi.prototype.getIndexedFilter = function() {
                return this.rangedFilter_.getIndexedFilter()
            }, Oi.prototype.getIndex = function() {
                return this.index_
            }, Oi.prototype.fullLimitUpdateChild_ = function(t, e, n, r, i) {
                var o, s;
                s = this.reverse_ ? (o = this.index_.getCompare(), function(t, e) {
                    return o(e, t)
                }) : this.index_.getCompare();
                var a = t;
                C(a.numChildren() === this.limit_, "");
                var h = new fe(e, n),
                    l = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_),
                    u = this.rangedFilter_.matches(h);
                if (a.hasChild(e)) {
                    for (var c = a.getImmediateChild(e), p = r.getChildAfterChild(this.index_, l, this.reverse_); null != p && (p.name === e || a.hasChild(p.name));) p = r.getChildAfterChild(this.index_, p, this.reverse_);
                    var d = null == p ? 1 : s(p, h);
                    if (u && !n.isEmpty() && 0 <= d) return null != i && i.trackChildChange(rr.childChangedChange(e, n, c)), a.updateImmediateChild(e, n);
                    null != i && i.trackChildChange(rr.childRemovedChange(e, c));
                    var f = a.updateImmediateChild(e, tn.EMPTY_NODE);
                    return null != p && this.rangedFilter_.matches(p) ? (null != i && i.trackChildChange(rr.childAddedChange(p.name, p.node)), f.updateImmediateChild(p.name, p.node)) : f
                }
                return !n.isEmpty() && u && 0 <= s(l, h) ? (null != i && (i.trackChildChange(rr.childRemovedChange(l.name, l.node)), i.trackChildChange(rr.childAddedChange(e, n))), a.updateImmediateChild(e, n).updateImmediateChild(l.name, tn.EMPTY_NODE)) : t
            }, Oi);

            function Oi(t) {
                this.rangedFilter_ = new Ri(t), this.index_ = t.getIndex(), this.limit_ = t.getLimit(), this.reverse_ = !t.isViewFromLeft()
            }
            var xi = (ki.prototype.hasStart = function() {
                return this.startSet_
            }, ki.prototype.isViewFromLeft = function() {
                return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === ki.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
            }, ki.prototype.getIndexStartValue = function() {
                return C(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
            }, ki.prototype.getIndexStartName = function() {
                return C(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Tt
            }, ki.prototype.hasEnd = function() {
                return this.endSet_
            }, ki.prototype.getIndexEndValue = function() {
                return C(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
            }, ki.prototype.getIndexEndName = function() {
                return C(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : St
            }, ki.prototype.hasLimit = function() {
                return this.limitSet_
            }, ki.prototype.hasAnchoredLimit = function() {
                return this.limitSet_ && "" !== this.viewFrom_
            }, ki.prototype.getLimit = function() {
                return C(this.limitSet_, "Only valid if limit has been set"), this.limit_
            }, ki.prototype.getIndex = function() {
                return this.index_
            }, ki.prototype.copy_ = function() {
                var t = new ki;
                return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t
            }, ki.prototype.limit = function(t) {
                var e = this.copy_();
                return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = "", e
            }, ki.prototype.limitToFirst = function(t) {
                var e = this.copy_();
                return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = ki.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, e
            }, ki.prototype.limitToLast = function(t) {
                var e = this.copy_();
                return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = ki.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, e
            }, ki.prototype.startAt = function(t, e) {
                var n = this.copy_();
                return n.startSet_ = !0, void 0 === t && (t = null), n.indexStartValue_ = t, null != e ? (n.startNameSet_ = !0, n.indexStartName_ = e) : (n.startNameSet_ = !1, n.indexStartName_ = ""), n
            }, ki.prototype.endAt = function(t, e) {
                var n = this.copy_();
                return n.endSet_ = !0, void 0 === t && (t = null), n.indexEndValue_ = t, void 0 !== e ? (n.endNameSet_ = !0, n.indexEndName_ = e) : (n.endNameSet_ = !1, n.indexEndName_ = ""), n
            }, ki.prototype.orderBy = function(t) {
                var e = this.copy_();
                return e.index_ = t, e
            }, ki.prototype.getQueryObject = function() {
                var t, e = ki.WIRE_PROTOCOL_CONSTANTS_,
                    n = {};
                return this.startSet_ && (n[e.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (n[e.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (n[e.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (n[e.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_ && (n[e.LIMIT] = this.limit_, "" === (t = this.viewFrom_) && (t = this.isViewFromLeft() ? e.VIEW_FROM_LEFT : e.VIEW_FROM_RIGHT), n[e.VIEW_FROM] = t), this.index_ !== ke && (n[e.INDEX] = this.index_.toString()), n
            }, ki.prototype.loadsAllData = function() {
                return !(this.startSet_ || this.endSet_ || this.limitSet_)
            }, ki.prototype.isDefault = function() {
                return this.loadsAllData() && this.index_ === ke
            }, ki.prototype.getNodeFilter = function() {
                return this.loadsAllData() ? new or(this.getIndex()) : new(this.hasLimit() ? Di : Ri)(this)
            }, ki.prototype.toRestQueryStringParameters = function() {
                var t, e = ki.REST_QUERY_CONSTANTS_,
                    n = {};
                return this.isDefault() || (t = this.index_ === ke ? e.PRIORITY_INDEX : this.index_ === un ? e.VALUE_INDEX : this.index_ === be ? e.KEY_INDEX : (C(this.index_ instanceof cn, "Unrecognized index type!"), this.index_.toString()), n[e.ORDER_BY] = P(t), this.startSet_ && (n[e.START_AT] = P(this.indexStartValue_), this.startNameSet_ && (n[e.START_AT] += "," + P(this.indexStartName_))), this.endSet_ && (n[e.END_AT] = P(this.indexEndValue_), this.endNameSet_ && (n[e.END_AT] += "," + P(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? n[e.LIMIT_TO_FIRST] = this.limit_ : n[e.LIMIT_TO_LAST] = this.limit_)), n
            }, ki.WIRE_PROTOCOL_CONSTANTS_ = {
                INDEX_START_VALUE: "sp",
                INDEX_START_NAME: "sn",
                INDEX_END_VALUE: "ep",
                INDEX_END_NAME: "en",
                LIMIT: "l",
                VIEW_FROM: "vf",
                VIEW_FROM_LEFT: "l",
                VIEW_FROM_RIGHT: "r",
                INDEX: "i"
            }, ki.REST_QUERY_CONSTANTS_ = {
                ORDER_BY: "orderBy",
                PRIORITY_INDEX: "$priority",
                VALUE_INDEX: "$value",
                KEY_INDEX: "$key",
                START_AT: "startAt",
                END_AT: "endAt",
                LIMIT_TO_FIRST: "limitToFirst",
                LIMIT_TO_LAST: "limitToLast"
            }, ki.DEFAULT = new ki, ki);

            function ki() {
                this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = ke
            }
            var Fi, Ai = (n(Li, Fi = Tn), Li.prototype.getKey = function() {
                return M("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack()
            }, Li.prototype.child = function(t) {
                var e, n, r, i;
                return M("Reference.child", 1, 1, arguments.length), "number" == typeof t ? t = String(t) : t instanceof Ft || (null === this.path.getFront() ? (e = "Reference.child", i = !(n = 1), r = (r = t) && r.replace(/^\/*\.info(\/|$)/, "/"), Jt(e, n, r, i)) : Jt("Reference.child", 1, t, !1)), new Li(this.repo, this.path.child(t))
            }, Li.prototype.getParent = function() {
                M("Reference.parent", 0, 0, arguments.length);
                var t = this.path.parent();
                return null === t ? null : new Li(this.repo, t)
            }, Li.prototype.getRoot = function() {
                M("Reference.root", 0, 0, arguments.length);
                for (var t = this; null !== t.getParent();) t = t.getParent();
                return t
            }, Li.prototype.databaseProp = function() {
                return this.repo.database
            }, Li.prototype.set = function(t, e) {
                M("Reference.set", 1, 2, arguments.length), Zt("Reference.set", this.path), Yt("Reference.set", 1, t, this.path, !1), Q("Reference.set", 2, e, !0);
                var n = new y;
                return this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)), n.promise
            }, Li.prototype.update = function(t, e) {
                if (M("Reference.update", 1, 2, arguments.length), Zt("Reference.update", this.path), Array.isArray(t)) {
                    for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];
                    t = n, lt("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                zt("Reference.update", 1, t, this.path, !1), Q("Reference.update", 2, e, !0);
                var i = new y;
                return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise
            }, Li.prototype.setWithPriority = function(t, e, n) {
                if (M("Reference.setWithPriority", 2, 3, arguments.length), Zt("Reference.setWithPriority", this.path), Yt("Reference.setWithPriority", 1, t, this.path, !1), Gt("Reference.setWithPriority", 2, e, !1), Q("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
                var r = new y;
                return this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)), r.promise
            }, Li.prototype.remove = function(t) {
                return M("Reference.remove", 0, 1, arguments.length), Zt("Reference.remove", this.path), Q("Reference.remove", 1, t, !0), this.set(null, t)
            }, Li.prototype.transaction = function(t, r, e) {
                if (M("Reference.transaction", 1, 3, arguments.length), Zt("Reference.transaction", this.path), Q("Reference.transaction", 1, t, !1), Q("Reference.transaction", 2, r, !0), function(t, e, n, r) {
                        if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(W(t, e, r) + "must be a boolean.")
                    }("Reference.transaction", 3, e, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                void 0 === e && (e = !0);
                var i = new y;
                "function" == typeof r && i.promise.catch(function() {});
                return this.repo.startTransaction(this.path, t, function(t, e, n) {
                    t ? i.reject(t) : i.resolve(new he(e, n)), "function" == typeof r && r(t, e, n)
                }, e), i.promise
            }, Li.prototype.setPriority = function(t, e) {
                M("Reference.setPriority", 1, 2, arguments.length), Zt("Reference.setPriority", this.path), Gt("Reference.setPriority", 1, t, !1), Q("Reference.setPriority", 2, e, !0);
                var n = new y;
                return this.repo.setWithPriority(this.path.child(".priority"), t, null, n.wrapCallback(e)), n.promise
            }, Li.prototype.push = function(t, e) {
                M("Reference.push", 0, 2, arguments.length), Zt("Reference.push", this.path), Yt("Reference.push", 1, t, this.path, !0), Q("Reference.push", 2, e, !0);
                var n = this.repo.serverTime(),
                    r = de(n),
                    i = this.child(r),
                    o = this.child(r),
                    s = null != t ? i.set(t, e).then(function() {
                        return o
                    }) : Promise.resolve(o);
                return i.then = s.then.bind(s), i.catch = s.then.bind(s, void 0), "function" == typeof e && s.catch(function() {}), i
            }, Li.prototype.onDisconnect = function() {
                return Zt("Reference.onDisconnect", this.path), new se(this.repo, this.path)
            }, Object.defineProperty(Li.prototype, "database", {
                get: function() {
                    return this.databaseProp()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Li.prototype, "key", {
                get: function() {
                    return this.getKey()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Li.prototype, "parent", {
                get: function() {
                    return this.getParent()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Li.prototype, "root", {
                get: function() {
                    return this.getRoot()
                },
                enumerable: !1,
                configurable: !0
            }), Li);

            function Li(t, e) {
                if (!(t instanceof Ii)) throw new Error("new Reference() no longer supported - use app.database().");
                return Fi.call(this, t, e, xi.DEFAULT, !1) || this
            }
            Tn.__referenceConstructor = Ai, Er.__referenceConstructor = Ai;
            var Mi, Wi, Qi = function() {
                    this.children = {}, this.childCount = 0, this.value = null
                },
                qi = (Ui.prototype.subTree = function(t) {
                    for (var e = t instanceof Ft ? t : new Ft(t), n = this, r = e.getFront(); null !== r;) n = new Ui(r, n, x(n.node_.children, r) || new Qi), r = (e = e.popFront()).getFront();
                    return n
                }, Ui.prototype.getValue = function() {
                    return this.node_.value
                }, Ui.prototype.setValue = function(t) {
                    C(void 0 !== t, "Cannot set value to undefined"), this.node_.value = t, this.updateParents_()
                }, Ui.prototype.clear = function() {
                    this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_()
                }, Ui.prototype.hasChildren = function() {
                    return 0 < this.node_.childCount
                }, Ui.prototype.isEmpty = function() {
                    return null === this.getValue() && !this.hasChildren()
                }, Ui.prototype.forEachChild = function(n) {
                    var r = this;
                    Rt(this.node_.children, function(t, e) {
                        n(new Ui(t, r, e))
                    })
                }, Ui.prototype.forEachDescendant = function(e, t, n) {
                    t && !n && e(this), this.forEachChild(function(t) {
                        t.forEachDescendant(e, !0, n)
                    }), t && n && e(this)
                }, Ui.prototype.forEachAncestor = function(t, e) {
                    for (var n = e ? this : this.parent(); null !== n;) {
                        if (t(n)) return !0;
                        n = n.parent()
                    }
                    return !1
                }, Ui.prototype.forEachImmediateDescendantWithValue = function(e) {
                    this.forEachChild(function(t) {
                        null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e)
                    })
                }, Ui.prototype.path = function() {
                    return new Ft(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_)
                }, Ui.prototype.name = function() {
                    return this.name_
                }, Ui.prototype.parent = function() {
                    return this.parent_
                }, Ui.prototype.updateParents_ = function() {
                    null !== this.parent_ && this.parent_.updateChild_(this.name_, this)
                }, Ui.prototype.updateChild_ = function(t, e) {
                    var n = e.isEmpty(),
                        r = O(this.node_.children, t);
                    n && r ? (delete this.node_.children[t], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[t] = e.node_, this.node_.childCount++, this.updateParents_())
                }, Ui);

            function Ui(t, e, n) {
                void 0 === t && (t = ""), void 0 === e && (e = null), void 0 === n && (n = new Qi), this.name_ = t, this.parent_ = e, this.node_ = n
            }(Wi = Mi = Mi || {})[Wi.RUN = 0] = "RUN", Wi[Wi.SENT = 1] = "SENT", Wi[Wi.COMPLETED = 2] = "COMPLETED", Wi[Wi.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", Wi[Wi.NEEDS_ABORT = 4] = "NEEDS_ABORT", Ii.MAX_TRANSACTION_RETRIES_ = 25, Ii.prototype.transactionsInit_ = function() {
                this.transactionQueueTree_ = new qi
            }, Ii.prototype.startTransaction = function(t, e, n, r) {
                this.log_("transaction on " + t);

                function i() {}
                var o = new Ai(this, t);
                o.on("value", i);
                var s = {
                        path: t,
                        update: e,
                        onComplete: n,
                        status: null,
                        order: gt(),
                        applyLocally: r,
                        retryCount: 0,
                        unwatcher: function() {
                            o.off("value", i)
                        },
                        abortReason: null,
                        currentWriteId: null,
                        currentInputSnapshot: null,
                        currentOutputSnapshotRaw: null,
                        currentOutputSnapshotResolved: null
                    },
                    a = this.getLatestState_(t);
                s.currentInputSnapshot = a;
                var h, l, u, c, p, d, f, _, y = s.update(a.val());
                void 0 === y ? (s.unwatcher(), s.currentOutputSnapshotRaw = null, s.currentOutputSnapshotResolved = null, s.onComplete && (h = new dn(s.currentInputSnapshot, new Ai(this, s.path), ke), s.onComplete(null, !1, h))) : (oe("transaction failed: Data returned ", y, s.path), s.status = Mi.RUN, (u = (l = this.transactionQueueTree_.subTree(t)).getValue() || []).push(s), l.setValue(u), c = void 0, "object" == typeof y && null !== y && O(y, ".priority") ? (c = x(y, ".priority"), C(Kt(c), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : c = (this.serverSyncTree_.calcCompleteEventCache(t) || tn.EMPTY_NODE).getPriority().val(), p = this.generateServerValues(), d = an(y, c), f = On(d, a, p), s.currentOutputSnapshotRaw = d, s.currentOutputSnapshotResolved = f, s.currentWriteId = this.getNextWriteId_(), _ = this.serverSyncTree_.applyUserOverwrite(t, f, s.currentWriteId, s.applyLocally), this.eventQueue_.raiseEventsForChangedPath(t, _), this.sendReadyTransactions_())
            }, Ii.prototype.getLatestState_ = function(t, e) {
                return this.serverSyncTree_.calcCompleteEventCache(t, e) || tn.EMPTY_NODE
            }, Ii.prototype.sendReadyTransactions_ = function(t) {
                var e, n = this;
                void 0 === t && (t = this.transactionQueueTree_), t || this.pruneCompletedTransactionsBelowNode_(t), null !== t.getValue() ? (e = this.buildTransactionQueue_(t), C(0 < e.length, "Sending zero length transaction queue"), e.every(function(t) {
                    return t.status === Mi.RUN
                }) && this.sendTransactionQueue_(t.path(), e)) : t.hasChildren() && t.forEachChild(function(t) {
                    n.sendReadyTransactions_(t)
                })
            }, Ii.prototype.sendTransactionQueue_ = function(a, h) {
                for (var l = this, t = h.map(function(t) {
                        return t.currentWriteId
                    }), e = this.getLatestState_(a, t), n = e, r = e.hash(), i = 0; i < h.length; i++) {
                    var o = h[i];
                    C(o.status === Mi.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), o.status = Mi.SENT, o.retryCount++;
                    var s = Ft.relativePath(a, o.path),
                        n = n.updateChild(s, o.currentOutputSnapshotRaw)
                }
                var u = n.val(!0),
                    c = a;
                this.server_.put(c.toString(), u, function(t) {
                    l.log_("transaction put response", {
                        path: c.toString(),
                        status: t
                    });
                    var e = [];
                    if ("ok" === t) {
                        for (var n, r, i, o = [], s = 0; s < h.length; s++) {
                            h[s].status = Mi.COMPLETED, e = e.concat(l.serverSyncTree_.ackUserWrite(h[s].currentWriteId)), h[s].onComplete && (n = h[s].currentOutputSnapshotResolved, r = new Ai(l, h[s].path), i = new dn(n, r, ke), o.push(h[s].onComplete.bind(null, null, !0, i))), h[s].unwatcher()
                        }
                        l.pruneCompletedTransactionsBelowNode_(l.transactionQueueTree_.subTree(a)), l.sendReadyTransactions_(), l.eventQueue_.raiseEventsForChangedPath(a, e);
                        for (s = 0; s < o.length; s++) Dt(o[s])
                    } else {
                        if ("datastale" === t)
                            for (s = 0; s < h.length; s++) h[s].status === Mi.SENT_NEEDS_ABORT ? h[s].status = Mi.NEEDS_ABORT : h[s].status = Mi.RUN;
                        else {
                            lt("transaction at " + c.toString() + " failed: " + t);
                            for (s = 0; s < h.length; s++) h[s].status = Mi.NEEDS_ABORT, h[s].abortReason = t
                        }
                        l.rerunTransactions_(a)
                    }
                }, r)
            }, Ii.prototype.rerunTransactions_ = function(t) {
                var e = this.getAncestorTransactionNode_(t),
                    n = e.path(),
                    r = this.buildTransactionQueue_(e);
                return this.rerunTransactionQueue_(r, n), n
            }, Ii.prototype.rerunTransactionQueue_ = function(t, e) {
                if (0 !== t.length) {
                    for (var n, r = [], i = [], o = t.filter(function(t) {
                            return t.status === Mi.RUN
                        }).map(function(t) {
                            return t.currentWriteId
                        }), s = 0; s < t.length; s++) {
                        var a, h, l, u, c, p, d, f, _, y = t[s],
                            v = Ft.relativePath(e, y.path),
                            g = !1,
                            m = void 0;
                        C(null !== v, "rerunTransactionsUnderNode_: relativePath should not be null."), y.status === Mi.NEEDS_ABORT ? (g = !0, m = y.abortReason, i = i.concat(this.serverSyncTree_.ackUserWrite(y.currentWriteId, !0))) : y.status === Mi.RUN && (i = y.retryCount >= Ii.MAX_TRANSACTION_RETRIES_ ? (g = !0, m = "maxretry", i.concat(this.serverSyncTree_.ackUserWrite(y.currentWriteId, !0))) : (a = this.getLatestState_(y.path, o), y.currentInputSnapshot = a, void 0 !== (h = t[s].update(a.val())) ? (oe("transaction failed: Data returned ", h, y.path), l = an(h), "object" == typeof h && null != h && O(h, ".priority") || (l = l.updatePriority(a.getPriority())), u = y.currentWriteId, c = this.generateServerValues(), p = On(l, a, c), y.currentOutputSnapshotRaw = l, y.currentOutputSnapshotResolved = p, y.currentWriteId = this.getNextWriteId_(), o.splice(o.indexOf(u), 1), (i = i.concat(this.serverSyncTree_.applyUserOverwrite(y.path, p, y.currentWriteId, y.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(u, !0))) : (g = !0, m = "nodata", i.concat(this.serverSyncTree_.ackUserWrite(y.currentWriteId, !0))))), this.eventQueue_.raiseEventsForChangedPath(e, i), i = [], g && (t[s].status = Mi.COMPLETED, n = t[s].unwatcher, setTimeout(n, Math.floor(0)), t[s].onComplete && ("nodata" === m ? (d = new Ai(this, t[s].path), f = t[s].currentInputSnapshot, _ = new dn(f, d, ke), r.push(t[s].onComplete.bind(null, null, !1, _))) : r.push(t[s].onComplete.bind(null, new Error(m), !1, null))))
                    }
                    this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
                    for (s = 0; s < r.length; s++) Dt(r[s]);
                    this.sendReadyTransactions_()
                }
            }, Ii.prototype.getAncestorTransactionNode_ = function(t) {
                for (var e = this.transactionQueueTree_, n = t.getFront(); null !== n && null === e.getValue();) e = e.subTree(n), n = (t = t.popFront()).getFront();
                return e
            }, Ii.prototype.buildTransactionQueue_ = function(t) {
                var e = [];
                return this.aggregateTransactionQueuesForNode_(t, e), e.sort(function(t, e) {
                    return t.order - e.order
                }), e
            }, Ii.prototype.aggregateTransactionQueuesForNode_ = function(t, e) {
                var n = this,
                    r = t.getValue();
                if (null !== r)
                    for (var i = 0; i < r.length; i++) e.push(r[i]);
                t.forEachChild(function(t) {
                    n.aggregateTransactionQueuesForNode_(t, e)
                })
            }, Ii.prototype.pruneCompletedTransactionsBelowNode_ = function(t) {
                var e = this,
                    n = t.getValue();
                if (n) {
                    for (var r = 0, i = 0; i < n.length; i++) n[i].status !== Mi.COMPLETED && (n[r] = n[i], r++);
                    n.length = r, t.setValue(0 < n.length ? n : null)
                }
                t.forEachChild(function(t) {
                    e.pruneCompletedTransactionsBelowNode_(t)
                })
            }, Ii.prototype.abortTransactions_ = function(t) {
                var e = this,
                    n = this.getAncestorTransactionNode_(t).path(),
                    r = this.transactionQueueTree_.subTree(t);
                return r.forEachAncestor(function(t) {
                    e.abortTransactionsOnNode_(t)
                }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function(t) {
                    e.abortTransactionsOnNode_(t)
                }), n
            }, Ii.prototype.abortTransactionsOnNode_ = function(t) {
                var e = t.getValue();
                if (null !== e) {
                    for (var n = [], r = [], i = -1, o = 0; o < e.length; o++) {
                        e[o].status === Mi.SENT_NEEDS_ABORT || (e[o].status === Mi.SENT ? (C(i === o - 1, "All SENT items should be at beginning of queue."), e[i = o].status = Mi.SENT_NEEDS_ABORT, e[o].abortReason = "set") : (C(e[o].status === Mi.RUN, "Unexpected transaction status in abort"), e[o].unwatcher(), r = r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)), e[o].onComplete && n.push(e[o].onComplete.bind(null, new Error("set"), !1, null))))
                    } - 1 === i ? t.setValue(null) : e.length = i + 1, this.eventQueue_.raiseEventsForChangedPath(t.path(), r);
                    for (o = 0; o < n.length; o++) Dt(n[o])
                }
            };
            var Vi = (Hi.prototype.getToken = function(t) {
                return this.auth_ ? this.auth_.getToken(t).catch(function(t) {
                    return t && "auth/token-not-initialized" === t.code ? (wt("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(t)
                }) : Promise.resolve(null)
            }, Hi.prototype.addTokenChangeListener = function(e) {
                this.auth_ ? this.auth_.addAuthTokenListener(e) : (setTimeout(function() {
                    return e(null)
                }, 0), this.authProvider_.get().then(function(t) {
                    return t.addAuthTokenListener(e)
                }))
            }, Hi.prototype.removeTokenChangeListener = function(e) {
                this.authProvider_.get().then(function(t) {
                    return t.removeAuthTokenListener(e)
                })
            }, Hi.prototype.notifyForInvalidToken = function() {
                var t = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
                "credential" in this.app_.options ? t += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? t += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : t += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', lt(t)
            }, Hi);

            function Hi(t, e) {
                var n = this;
                this.app_ = t, this.authProvider_ = e, this.auth_ = null, this.auth_ = e.getImmediate({
                    optional: !0
                }), this.auth_ || e.get().then(function(t) {
                    return n.auth_ = t
                })
            }
            var ji = (Bi.prototype.getToken = function(t) {
                return Promise.resolve({
                    accessToken: Bi.EMULATOR_AUTH_TOKEN
                })
            }, Bi.prototype.addTokenChangeListener = function(t) {
                t(Bi.EMULATOR_AUTH_TOKEN)
            }, Bi.prototype.removeTokenChangeListener = function(t) {}, Bi.prototype.notifyForInvalidToken = function() {}, Bi.EMULATOR_AUTH_TOKEN = "owner", Bi);

            function Bi() {}
            var Ki, Yi = (zi.getInstance = function() {
                return Ki = Ki || new zi
            }, zi.prototype.interrupt = function() {
                var e, t, n, r;
                try {
                    for (var i = _(Object.keys(this.repos_)), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        try {
                            for (var a = (n = void 0, _(Object.keys(this.repos_[s]))), h = a.next(); !h.done; h = a.next()) {
                                var l = h.value;
                                this.repos_[s][l].interrupt()
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (r = a.return) && r.call(a)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (t = i.return) && t.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, zi.prototype.resume = function() {
                var e, t, n, r;
                try {
                    for (var i = _(Object.keys(this.repos_)), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        try {
                            for (var a = (n = void 0, _(Object.keys(this.repos_[s]))), h = a.next(); !h.done; h = a.next()) {
                                var l = h.value;
                                this.repos_[s][l].resume()
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (r = a.return) && r.call(a)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (t = i.return) && t.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, zi.prototype.databaseFromApp = function(t, e, n, r) {
                var i = n || t.options.databaseURL;
                void 0 === i && (t.options.projectId || ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), wt("Using default host for project ", t.options.projectId), i = t.options.projectId + "-default-rtdb.firebaseio.com");
                var o, s = Ht(i, r),
                    a = s.repoInfo,
                    h = void 0;
                "undefined" != typeof process && (h = process.env.FIREBASE_DATABASE_EMULATOR_HOST), h ? (o = !0, i = "http://" + h + "?ns=" + a.namespace, a = (s = Ht(i, r)).repoInfo) : o = !s.repoInfo.secure;
                var l = r && o ? new ji : new Vi(t, e);
                return te("Invalid Firebase Database URL", 1, s), s.path.isEmpty() || ht("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(a, t, l).database
            }, zi.prototype.deleteRepo = function(t) {
                var e = x(this.repos_, t.app.name);
                e && x(e, t.repoInfo_.toURLString()) === t || ht("Database " + t.app.name + "(" + t.repoInfo_ + ") has already been deleted."), t.interrupt(), delete e[t.repoInfo_.toURLString()]
            }, zi.prototype.createRepo = function(t, e, n) {
                var r = x(this.repos_, e.name);
                r || (r = {}, this.repos_[e.name] = r);
                var i = x(r, t.toURLString());
                return i && ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), i = new Ii(t, this.useRestClient_, e, n), r[t.toURLString()] = i
            }, zi.prototype.forceRestClient = function(t) {
                this.useRestClient_ = t
            }, zi);

            function zi() {
                this.repos_ = {}, this.useRestClient_ = !1
            }
            var Gi = (Object.defineProperty(Xi.prototype, "app", {
                get: function() {
                    return this.repo_.app
                },
                enumerable: !1,
                configurable: !0
            }), Xi.prototype.ref = function(t) {
                return this.checkDeleted_("ref"), M("database.ref", 0, 1, arguments.length), t instanceof Ai ? this.refFromURL(t.toString()) : void 0 !== t ? this.root_.child(t) : this.root_
            }, Xi.prototype.refFromURL = function(t) {
                var e = "database.refFromURL";
                this.checkDeleted_(e), M(e, 1, 1, arguments.length);
                var n = Ht(t, this.repo_.repoInfo_.nodeAdmin);
                te(e, 1, n);
                var r = n.repoInfo;
                return r.host !== this.repo_.repoInfo_.host && ht(e + ": Host name does not match the current database: (found " + r.host + " but expected " + this.repo_.repoInfo_.host + ")"), this.ref(n.path.toString())
            }, Xi.prototype.checkDeleted_ = function(t) {
                null === this.repo_ && ht("Cannot call " + t + " on a deleted database.")
            }, Xi.prototype.goOffline = function() {
                M("database.goOffline", 0, 0, arguments.length), this.checkDeleted_("goOffline"), this.repo_.interrupt()
            }, Xi.prototype.goOnline = function() {
                M("database.goOnline", 0, 0, arguments.length), this.checkDeleted_("goOnline"), this.repo_.resume()
            }, Xi.ServerValue = {
                TIMESTAMP: {
                    ".sv": "timestamp"
                },
                increment: function(t) {
                    return {
                        ".sv": {
                            increment: t
                        }
                    }
                }
            }, Xi);

            function Xi(t) {
                (this.repo_ = t) instanceof Ii || ht("Don't call new Database() directly - please use firebase.database()."), this.root_ = new Ai(t, Ft.Empty), this.INTERNAL = new $i(this)
            }
            var $i = (Ji.prototype.delete = function() {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return this.database.checkDeleted_("delete"), Yi.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, [2]
                    })
                })
            }, Ji);

            function Ji(t) {
                this.database = t
            }
            var Zi = Object.freeze({
                    __proto__: null,
                    forceLongPolling: function() {
                        li.forceDisallow(), ri.forceAllow()
                    },
                    forceWebSockets: function() {
                        ri.forceDisallow()
                    },
                    isWebSocketsAvailable: function() {
                        return li.isAvailable()
                    },
                    setSecurityDebugCallback: function(t, e) {
                        t.repo.persistentConnection_.securityDebugCallback_ = e
                    },
                    stats: function(t, e) {
                        t.repo.stats(e)
                    },
                    statsIncrementCounter: function(t, e) {
                        t.repo.statsIncrementCounter(e)
                    },
                    dataUpdateCount: function(t) {
                        return t.repo.dataUpdateCount
                    },
                    interceptServerData: function(t, e) {
                        return t.repo.interceptServerData_(e)
                    }
                }),
                to = Ci;
            Ci.prototype.simpleListen = function(t, e) {
                this.sendRequest("q", {
                    p: t
                }, e)
            }, Ci.prototype.echo = function(t, e) {
                this.sendRequest("echo", {
                    d: t
                }, e)
            };
            var eo, no, ro = Object.freeze({
                    __proto__: null,
                    DataConnection: to,
                    RealTimeConnection: di,
                    hijackHash: function(i) {
                        var o = Ci.prototype.put;
                        return Ci.prototype.put = function(t, e, n, r) {
                                void 0 !== r && (r = i()), o.call(this, t, e, n, r)
                            },
                            function() {
                                Ci.prototype.put = o
                            }
                    },
                    ConnectionTarget: Ut,
                    queryIdentifier: function(t) {
                        return t.queryIdentifier()
                    },
                    forceRestClient: function(t) {
                        Yi.getInstance().forceRestClient(t)
                    }
                }),
                io = Gi.ServerValue;
            eo = e.default, no = eo.SDK_VERSION, ai = no, eo.INTERNAL.registerComponent(new J("database", function(t, e) {
                var n = t.getProvider("app").getImmediate(),
                    r = t.getProvider("auth-internal");
                return Yi.getInstance().databaseFromApp(n, r, e)
            }, "PUBLIC").setServiceProps({
                Reference: Ai,
                Query: Tn,
                Database: Gi,
                DataSnapshot: dn,
                enableLogging: st,
                INTERNAL: Zi,
                ServerValue: io,
                TEST_ACCESS: ro
            }).setMultipleInstances(!0)), eo.registerVersion("@firebase/database", "0.6.13")
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-database.js.map