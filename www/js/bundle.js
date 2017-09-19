! function(t) {
    function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
    var n = {};
    return e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 17)
}([function(t, e, n) {
    (function(e, n, r) {
        /* @preserve
         * The MIT License (MIT)
         * 
         * Copyright (c) 2013-2015 Petka Antonov
         * 
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         * 
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         * 
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         * 
         */
        ! function(e) { t.exports = e() }(function() {
            var t, i, o;
            return function t(e, n, r) {
                function i(s, a) {
                    if (!n[s]) {
                        if (!e[s]) { var u = "function" == typeof _dereq_ && _dereq_; if (!a && u) return u(s, !0); if (o) return o(s, !0); var c = new Error("Cannot find module '" + s + "'"); throw c.code = "MODULE_NOT_FOUND", c }
                        var l = n[s] = { exports: {} };
                        e[s][0].call(l.exports, function(t) { var n = e[s][1][t]; return i(n ? n : t) }, l, l.exports, t, e, n, r)
                    }
                    return n[s].exports
                }
                for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
                return i
            }({
                1: [function(t, e, n) {
                    "use strict";
                    e.exports = function(t) {
                        function e(t) {
                            var e = new n(t),
                                r = e.promise();
                            return e.setHowMany(1), e.setUnwrap(), e.init(), r
                        }
                        var n = t._SomePromiseArray;
                        t.any = function(t) { return e(t) }, t.prototype.any = function() { return e(this) }
                    }
                }, {}],
                2: [function(t, e, n) {
                    "use strict";

                    function r() {
                        this._isTickUsed = !1, this._lateQueue = new c(16), this._normalQueue = new c(16), this._trampolineEnabled = !0;
                        var t = this;
                        this.drainQueues = function() { t._drainQueues() }, this._schedule = u.isStatic ? u(this.drainQueues) : u
                    }

                    function i(t, e, n) { this._lateQueue.push(t, e, n), this._queueTick() }

                    function o(t, e, n) { this._normalQueue.push(t, e, n), this._queueTick() }

                    function s(t) { this._normalQueue._pushOne(t), this._queueTick() }
                    var a;
                    try { throw new Error } catch (t) { a = t }
                    var u = t("./schedule.js"),
                        c = t("./queue.js"),
                        l = t("./util.js");
                    r.prototype.disableTrampolineIfNecessary = function() { l.hasDevTools && (this._trampolineEnabled = !1) }, r.prototype.enableTrampoline = function() { this._trampolineEnabled || (this._trampolineEnabled = !0, this._schedule = function(t) { setTimeout(t, 0) }) }, r.prototype.haveItemsQueued = function() { return this._normalQueue.length() > 0 }, r.prototype.throwLater = function(t, e) {
                        if (1 === arguments.length && (e = t, t = function() { throw e }), "undefined" != typeof setTimeout) setTimeout(function() { t(e) }, 0);
                        else try { this._schedule(function() { t(e) }) } catch (t) { throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n") }
                    }, l.hasDevTools ? (u.isStatic && (u = function(t) { setTimeout(t, 0) }), r.prototype.invokeLater = function(t, e, n) { this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function() { setTimeout(function() { t.call(e, n) }, 100) }) }, r.prototype.invoke = function(t, e, n) { this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function() { t.call(e, n) }) }, r.prototype.settlePromises = function(t) { this._trampolineEnabled ? s.call(this, t) : this._schedule(function() { t._settlePromises() }) }) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = s), r.prototype.invokeFirst = function(t, e, n) { this._normalQueue.unshift(t, e, n), this._queueTick() }, r.prototype._drainQueue = function(t) {
                        for (; t.length() > 0;) {
                            var e = t.shift();
                            if ("function" == typeof e) {
                                var n = t.shift(),
                                    r = t.shift();
                                e.call(n, r)
                            } else e._settlePromises()
                        }
                    }, r.prototype._drainQueues = function() { this._drainQueue(this._normalQueue), this._reset(), this._drainQueue(this._lateQueue) }, r.prototype._queueTick = function() { this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues)) }, r.prototype._reset = function() { this._isTickUsed = !1 }, e.exports = new r, e.exports.firstLineError = a
                }, { "./queue.js": 28, "./schedule.js": 31, "./util.js": 38 }],
                3: [function(t, e, n) {
                    "use strict";
                    e.exports = function(t, e, n) {
                        var r = function(t, e) { this._reject(e) },
                            i = function(t, e) { e.promiseRejectionQueued = !0, e.bindingPromise._then(r, r, null, this, t) },
                            o = function(t, e) { this._isPending() && this._resolveCallback(e.target) },
                            s = function(t, e) { e.promiseRejectionQueued || this._reject(t) };
                        t.prototype.bind = function(r) {
                            var a = n(r),
                                u = new t(e);
                            u._propagateFrom(this, 1);
                            var c = this._target();
                            if (u._setBoundTo(a), a instanceof t) {
                                var l = { promiseRejectionQueued: !1, promise: u, target: c, bindingPromise: a };
                                c._then(e, i, u._progress, u, l), a._then(o, s, u._progress, u, l)
                            } else u._resolveCallback(c);
                            return u
                        }, t.prototype._setBoundTo = function(t) { void 0 !== t ? (this._bitField = 131072 | this._bitField, this._boundTo = t) : this._bitField = this._bitField & -131073 }, t.prototype._isBound = function() { return 131072 === (131072 & this._bitField) }, t.bind = function(r, i) {
                            var o = n(r),
                                s = new t(e);
                            return s._setBoundTo(o), o instanceof t ? o._then(function() { s._resolveCallback(i) }, s._reject, s._progress, s, null) : s._resolveCallback(i), s
                        }
                    }
                }, {}],
                4: [function(t, e, n) {
                    "use strict";

                    function r() { try { Promise === o && (Promise = i) } catch (t) {} return o }
                    var i;
                    "undefined" != typeof Promise && (i = Promise);
                    var o = t("./promise.js")();
                    o.noConflict = r, e.exports = o
                }, { "./promise.js": 23 }],
                5: [function(t, e, n) {
                    "use strict";
                    var r = Object.create;
                    if (r) {
                        var i = r(null),
                            o = r(null);
                        i[" size"] = o[" size"] = 0
                    }
                    e.exports = function(e) {
                        function n(t, n) { var r; if (null != t && (r = t[n]), "function" != typeof r) { var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'"; throw new e.TypeError(i) } return r }

                        function r(t) { return n(t, this.pop()).apply(t, this) }

                        function i(t) { return t[this] }

                        function o(t) { var e = +this; return e < 0 && (e = Math.max(0, e + t.length)), t[e] }
                        var s, a = t("./util.js"),
                            u = a.canEvaluate;
                        a.isIdentifier;
                        e.prototype.call = function(t) { for (var e = arguments.length, n = new Array(e - 1), i = 1; i < e; ++i) n[i - 1] = arguments[i]; return n.push(t), this._then(r, void 0, void 0, n, void 0) }, e.prototype.get = function(t) {
                            var e, n = "number" == typeof t;
                            if (n) e = o;
                            else if (u) {
                                var r = s(t);
                                e = null !== r ? r : i
                            } else e = i;
                            return this._then(e, void 0, void 0, t, void 0)
                        }
                    }
                }, { "./util.js": 38 }],
                6: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e) {
                        var n = t("./errors.js"),
                            r = t("./async.js"),
                            i = n.CancellationError;
                        e.prototype._cancel = function(t) {
                            if (!this.isCancellable()) return this;
                            for (var e, n = this; void 0 !== (e = n._cancellationParent) && e.isCancellable();) n = e;
                            this._unsetCancellable(), n._target()._rejectCallback(t, !1, !0)
                        }, e.prototype.cancel = function(t) { return this.isCancellable() ? (void 0 === t && (t = new i), r.invokeLater(this._cancel, this, t), this) : this }, e.prototype.cancellable = function() { return this._cancellable() ? this : (r.enableTrampoline(), this._setCancellable(), this._cancellationParent = void 0, this) }, e.prototype.uncancellable = function() { var t = this.then(); return t._unsetCancellable(), t }, e.prototype.fork = function(t, e, n) { var r = this._then(t, e, n, void 0, void 0); return r._setCancellable(), r._cancellationParent = void 0, r }
                    }
                }, { "./async.js": 2, "./errors.js": 13 }],
                7: [function(t, n, r) {
                    "use strict";
                    n.exports = function() {
                        function n(t) {
                            this._parent = t;
                            var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                            w(this, n), e > 32 && this.uncycle()
                        }

                        function r(t, e) { for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n"); return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n") }

                        function i(t) { for (var e = 0; e < t.length; ++e)(0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--) }

                        function o(t) {
                            for (var e = t[0], n = 1; n < t.length; ++n) {
                                for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a)
                                    if (r[a] === o) { s = a; break }
                                for (var a = s; a >= 0; --a) {
                                    var u = r[a];
                                    if (e[i] !== u) break;
                                    e.pop(), i--
                                }
                                e = r
                            }
                        }

                        function s(t) {
                            for (var e = [], n = 0; n < t.length; ++n) {
                                var r = t[n],
                                    i = _.test(r) || "    (No stack trace)" === r,
                                    o = i && m(r);
                                i && !o && (y && " " !== r.charAt(0) && (r = "    " + r), e.push(r))
                            }
                            return e
                        }

                        function a(t) { for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) { var r = e[n]; if ("    (No stack trace)" === r || _.test(r)) break } return n > 0 && (e = e.slice(n)), e }

                        function u(t) {
                            var e;
                            if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
                            else {
                                e = t.toString();
                                if (/\[object [a-zA-Z0-9$_]+\]/.test(e)) try { e = JSON.stringify(t) } catch (t) {}
                                0 === e.length && (e = "(empty array)")
                            }
                            return "(<" + c(e) + ">, no stack trace)"
                        }

                        function c(t) { return t.length < 41 ? t : t.substr(0, 38) + "..." }

                        function l(t) { var e = t.match(/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/); if (e) return { fileName: e[1], line: parseInt(e[2], 10) } }
                        var f, h = t("./async.js"),
                            p = t("./util.js"),
                            d = /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,
                            _ = null,
                            v = null,
                            y = !1;
                        p.inherits(n, Error), n.prototype.uncycle = function() {
                            var t = this._length;
                            if (!(t < 2)) {
                                for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) e.push(i), i = i._parent;
                                t = this._length = r;
                                for (var r = t - 1; r >= 0; --r) {
                                    var o = e[r].stack;
                                    void 0 === n[o] && (n[o] = r)
                                }
                                for (var r = 0; r < t; ++r) {
                                    var s = e[r].stack,
                                        a = n[s];
                                    if (void 0 !== a && a !== r) {
                                        a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;
                                        var u = r > 0 ? e[r - 1] : this;
                                        a < t - 1 ? (u._parent = e[a + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, u._length = 1);
                                        for (var c = u._length + 1, l = r - 2; l >= 0; --l) e[l]._length = c, c++;
                                        return
                                    }
                                }
                            }
                        }, n.prototype.parent = function() { return this._parent }, n.prototype.hasParent = function() { return void 0 !== this._parent }, n.prototype.attachExtraTrace = function(t) {
                            if (!t.__stackCleaned__) {
                                this.uncycle();
                                for (var e = n.parseStackAndMessage(t), a = e.message, u = [e.stack], c = this; void 0 !== c;) u.push(s(c.stack.split("\n"))), c = c._parent;
                                o(u), i(u), p.notEnumerableProp(t, "stack", r(a, u)), p.notEnumerableProp(t, "__stackCleaned__", !0)
                            }
                        }, n.parseStackAndMessage = function(t) {
                            var e = t.stack,
                                n = t.toString();
                            return e = "string" == typeof e && e.length > 0 ? a(t) : ["    (No stack trace)"], { message: n, stack: s(e) }
                        }, n.formatAndLogError = function(t, e) { if ("undefined" != typeof console) { var n; if ("object" == typeof t || "function" == typeof t) { n = e + v(t.stack, t) } else n = e + String(t); "function" == typeof f ? f(n) : "function" != typeof console.log && "object" != typeof console.log || console.log(n) } }, n.unhandledRejection = function(t) { n.formatAndLogError(t, "^--- With additional stack trace: ") }, n.isSupported = function() { return "function" == typeof w }, n.fireRejectionEvent = function(t, e, r, i) {
                            var o = !1;
                            try { "function" == typeof e && (o = !0, "rejectionHandled" === t ? e(i) : e(r, i)) } catch (t) { h.throwLater(t) }
                            var s = !1;
                            try { s = b(t, r, i) } catch (t) { s = !0, h.throwLater(t) }
                            var a = !1;
                            if (g) try { a = g(t.toLowerCase(), { reason: r, promise: i }) } catch (t) { a = !0, h.throwLater(t) }
                            s || o || a || "unhandledRejection" !== t || n.formatAndLogError(r, "Unhandled rejection ")
                        };
                        var m = function() { return !1 };
                        n.setBounds = function(t, e) {
                            if (n.isSupported()) {
                                for (var r, i, o = t.stack.split("\n"), s = e.stack.split("\n"), a = -1, u = -1, c = 0; c < o.length; ++c) { var f = l(o[c]); if (f) { r = f.fileName, a = f.line; break } }
                                for (var c = 0; c < s.length; ++c) { var f = l(s[c]); if (f) { i = f.fileName, u = f.line; break } }
                                a < 0 || u < 0 || !r || !i || r !== i || a >= u || (m = function(t) { if (d.test(t)) return !0; var e = l(t); return !!(e && e.fileName === r && a <= e.line && e.line <= u) })
                            }
                        };
                        var g, w = function() {
                                var t = function(t, e) { return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : u(e) };
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit = Error.stackTraceLimit + 6, _ = /^\s*at\s*/, v = t;
                                    var e = Error.captureStackTrace;
                                    return m = function(t) { return d.test(t) },
                                        function(t, n) { Error.stackTraceLimit = Error.stackTraceLimit + 6, e(t, n), Error.stackTraceLimit = Error.stackTraceLimit - 6 }
                                }
                                var n = new Error;
                                if ("string" == typeof n.stack && n.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return _ = /@/, v = t, y = !0,
                                    function(t) { t.stack = (new Error).stack };
                                var r;
                                try { throw new Error } catch (t) { r = "stack" in t }
                                return "stack" in n || !r || "number" != typeof Error.stackTraceLimit ? (v = function(t, e) { return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? u(e) : e.toString() }, null) : (_ = /^\s*at\s*/, v = t, function(t) {
                                    Error.stackTraceLimit = Error.stackTraceLimit + 6;
                                    try { throw new Error } catch (e) { t.stack = e.stack }
                                    Error.stackTraceLimit = Error.stackTraceLimit - 6
                                })
                            }([]),
                            b = function() {
                                if (p.isNode) return function(t, n, r) { return "rejectionHandled" === t ? e.emit(t, r) : e.emit(t, n, r) };
                                var t = !1,
                                    n = !0;
                                try { t = new self.CustomEvent("test") instanceof CustomEvent } catch (t) {}
                                if (!t) try {
                                    var r = document.createEvent("CustomEvent");
                                    r.initCustomEvent("testingtheevent", !1, !0, {}), self.dispatchEvent(r)
                                } catch (t) { n = !1 }
                                n && (g = function(e, n) { var r; return t ? r = new self.CustomEvent(e, { detail: n, bubbles: !1, cancelable: !0 }) : self.dispatchEvent && (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, !1, !0, n)), !!r && !self.dispatchEvent(r) });
                                var i = {};
                                return i.unhandledRejection = "onunhandledRejection".toLowerCase(), i.rejectionHandled = "onrejectionHandled".toLowerCase(),
                                    function(t, e, n) {
                                        var r = i[t],
                                            o = self[r];
                                        return !!o && ("rejectionHandled" === t ? o.call(self, n) : o.call(self, e, n), !0)
                                    }
                            }();
                        return "undefined" != typeof console && void 0 !== console.warn && (f = function(t) { console.warn(t) }, p.isNode && e.stderr.isTTY ? f = function(t) { e.stderr.write("[31m" + t + "[39m\n") } : p.isNode || "string" != typeof(new Error).stack || (f = function(t) { console.warn("%c" + t, "color: red") })), n
                    }
                }, { "./async.js": 2, "./util.js": 38 }],
                8: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e) {
                        function n(t, e, n) { this._instances = t, this._callback = e, this._promise = n }

                        function r(t, e) {
                            var n = {},
                                r = s(t).call(n, e);
                            return r === a ? r : u(n).length ? (a.e = new c("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"), a) : r
                        }
                        var i = t("./util.js"),
                            o = t("./errors.js"),
                            s = i.tryCatch,
                            a = i.errorObj,
                            u = t("./es5.js").keys,
                            c = o.TypeError;
                        return n.prototype.doFilter = function(t) {
                            for (var n = this._callback, i = this._promise, o = i._boundValue(), u = 0, c = this._instances.length; u < c; ++u) {
                                var l = this._instances[u],
                                    f = l === Error || null != l && l.prototype instanceof Error;
                                if (f && t instanceof l) { var h = s(n).call(o, t); return h === a ? (e.e = h.e, e) : h }
                                if ("function" == typeof l && !f) { var p = r(l, t); if (p === a) { t = a.e; break } if (p) { var h = s(n).call(o, t); return h === a ? (e.e = h.e, e) : h } }
                            }
                            return e.e = t, e
                        }, n
                    }
                }, { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 }],
                9: [function(t, e, n) {
                    "use strict";
                    e.exports = function(t, e, n) {
                        function r() { this._trace = new e(o()) }

                        function i() { if (n()) return new r }

                        function o() { var t = s.length - 1; if (t >= 0) return s[t] }
                        var s = [];
                        return r.prototype._pushContext = function() { n() && void 0 !== this._trace && s.push(this._trace) }, r.prototype._popContext = function() { n() && void 0 !== this._trace && s.pop() }, t.prototype._peekContext = o, t.prototype._pushContext = r.prototype._pushContext, t.prototype._popContext = r.prototype._popContext, i
                    }
                }, {}],
                10: [function(t, n, r) {
                    "use strict";
                    n.exports = function(n, r) {
                        var i, o, s = n._getDomain,
                            a = t("./async.js"),
                            u = t("./errors.js").Warning,
                            c = t("./util.js"),
                            l = c.canAttachTrace,
                            f = c.isNode && (!!e.env.BLUEBIRD_DEBUG || "development" === e.env.NODE_ENV);
                        return c.isNode && 0 == e.env.BLUEBIRD_DEBUG && (f = !1), f && a.disableTrampolineIfNecessary(), n.prototype._ignoreRejections = function() { this._unsetRejectionIsUnhandled(), this._bitField = 16777216 | this._bitField }, n.prototype._ensurePossibleRejectionHandled = function() { 0 === (16777216 & this._bitField) && (this._setRejectionIsUnhandled(), a.invokeLater(this._notifyUnhandledRejection, this, void 0)) }, n.prototype._notifyUnhandledRejectionIsHandled = function() { r.fireRejectionEvent("rejectionHandled", i, void 0, this) }, n.prototype._notifyUnhandledRejection = function() {
                                if (this._isRejectionUnhandled()) {
                                    var t = this._getCarriedStackTrace() || this._settledValue;
                                    this._setUnhandledRejectionIsNotified(), r.fireRejectionEvent("unhandledRejection", o, t, this)
                                }
                            }, n.prototype._setUnhandledRejectionIsNotified = function() { this._bitField = 524288 | this._bitField }, n.prototype._unsetUnhandledRejectionIsNotified = function() { this._bitField = this._bitField & -524289 }, n.prototype._isUnhandledRejectionNotified = function() { return (524288 & this._bitField) > 0 }, n.prototype._setRejectionIsUnhandled = function() { this._bitField = 2097152 | this._bitField }, n.prototype._unsetRejectionIsUnhandled = function() { this._bitField = this._bitField & -2097153, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled()) }, n.prototype._isRejectionUnhandled = function() { return (2097152 & this._bitField) > 0 }, n.prototype._setCarriedStackTrace = function(t) { this._bitField = 1048576 | this._bitField, this._fulfillmentHandler0 = t }, n.prototype._isCarryingStackTrace = function() { return (1048576 & this._bitField) > 0 }, n.prototype._getCarriedStackTrace = function() { return this._isCarryingStackTrace() ? this._fulfillmentHandler0 : void 0 }, n.prototype._captureStackTrace = function() { return f && (this._trace = new r(this._peekContext())), this }, n.prototype._attachExtraTrace = function(t, e) {
                                if (f && l(t)) {
                                    var n = this._trace;
                                    if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                                    else if (!t.__stackCleaned__) {
                                        var i = r.parseStackAndMessage(t);
                                        c.notEnumerableProp(t, "stack", i.message + "\n" + i.stack.join("\n")), c.notEnumerableProp(t, "__stackCleaned__", !0)
                                    }
                                }
                            }, n.prototype._warn = function(t) {
                                var e = new u(t),
                                    n = this._peekContext();
                                if (n) n.attachExtraTrace(e);
                                else {
                                    var i = r.parseStackAndMessage(e);
                                    e.stack = i.message + "\n" + i.stack.join("\n")
                                }
                                r.formatAndLogError(e, "")
                            }, n.onPossiblyUnhandledRejection = function(t) {
                                var e = s();
                                o = "function" == typeof t ? null === e ? t : e.bind(t) : void 0
                            }, n.onUnhandledRejectionHandled = function(t) {
                                var e = s();
                                i = "function" == typeof t ? null === e ? t : e.bind(t) : void 0
                            }, n.longStackTraces = function() {
                                if (a.haveItemsQueued() && f === !1) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");
                                f = r.isSupported(), f && a.disableTrampolineIfNecessary()
                            }, n.hasLongStackTraces = function() { return f && r.isSupported() }, r.isSupported() || (n.longStackTraces = function() {}, f = !1),
                            function() { return f }
                    }
                }, { "./async.js": 2, "./errors.js": 13, "./util.js": 38 }],
                11: [function(t, e, n) {
                    "use strict";
                    var r = t("./util.js"),
                        i = r.isPrimitive;
                    e.exports = function(t) {
                        var e = function() { return this },
                            n = function() { throw this },
                            r = function() {},
                            o = function() { throw void 0 },
                            s = function(t, e) { return 1 === e ? function() { throw t } : 2 === e ? function() { return t } : void 0 };
                        t.prototype.return = t.prototype.thenReturn = function(n) { return void 0 === n ? this.then(r) : i(n) ? this._then(s(n, 2), void 0, void 0, void 0, void 0) : (n instanceof t && n._ignoreRejections(), this._then(e, void 0, void 0, n, void 0)) }, t.prototype.throw = t.prototype.thenThrow = function(t) { return void 0 === t ? this.then(o) : i(t) ? this._then(s(t, 1), void 0, void 0, void 0, void 0) : this._then(n, void 0, void 0, t, void 0) }
                    }
                }, { "./util.js": 38 }],
                12: [function(t, e, n) {
                    "use strict";
                    e.exports = function(t, e) {
                        var n = t.reduce;
                        t.prototype.each = function(t) { return n(this, t, null, e) }, t.each = function(t, r) { return n(t, r, null, e) }
                    }
                }, {}],
                13: [function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        function n(r) {
                            if (!(this instanceof n)) return new n(r);
                            f(this, "message", "string" == typeof r ? r : e), f(this, "name", t), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
                        }
                        return l(n, Error), n
                    }

                    function i(t) {
                        if (!(this instanceof i)) return new i(t);
                        f(this, "name", "OperationalError"), f(this, "message", t), this.cause = t, this.isOperational = !0, t instanceof Error ? (f(this, "message", t.message), f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                    }
                    var o, s, a = t("./es5.js"),
                        u = a.freeze,
                        c = t("./util.js"),
                        l = c.inherits,
                        f = c.notEnumerableProp,
                        h = r("Warning", "warning"),
                        p = r("CancellationError", "cancellation error"),
                        d = r("TimeoutError", "timeout error"),
                        _ = r("AggregateError", "aggregate error");
                    try { o = TypeError, s = RangeError } catch (t) { o = r("TypeError", "type error"), s = r("RangeError", "range error") }
                    for (var v = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; y < v.length; ++y) "function" == typeof Array.prototype[v[y]] && (_.prototype[v[y]] = Array.prototype[v[y]]);
                    a.defineProperty(_.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 }), _.prototype.isOperational = !0;
                    var m = 0;
                    _.prototype.toString = function() {
                        var t = Array(4 * m + 1).join(" "),
                            e = "\n" + t + "AggregateError of:\n";
                        m++, t = Array(4 * m + 1).join(" ");
                        for (var n = 0; n < this.length; ++n) {
                            for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];
                            r = i.join("\n"), e += r + "\n"
                        }
                        return m--, e
                    }, l(i, Error);
                    var g = Error.__BluebirdErrorTypes__;
                    g || (g = u({ CancellationError: p, TimeoutError: d, OperationalError: i, RejectionError: i, AggregateError: _ }), f(Error, "__BluebirdErrorTypes__", g)), e.exports = { Error: Error, TypeError: o, RangeError: s, CancellationError: g.CancellationError, OperationalError: g.OperationalError, TimeoutError: g.TimeoutError, AggregateError: g.AggregateError, Warning: h }
                }, { "./es5.js": 14, "./util.js": 38 }],
                14: [function(t, e, n) {
                    var r = function() { "use strict"; return void 0 === this }();
                    if (r) e.exports = { freeze: Object.freeze, defineProperty: Object.defineProperty, getDescriptor: Object.getOwnPropertyDescriptor, keys: Object.keys, names: Object.getOwnPropertyNames, getPrototypeOf: Object.getPrototypeOf, isArray: Array.isArray, isES5: r, propertyIsWritable: function(t, e) { var n = Object.getOwnPropertyDescriptor(t, e); return !(n && !n.writable && !n.set) } };
                    else {
                        var i = {}.hasOwnProperty,
                            o = {}.toString,
                            s = {}.constructor.prototype,
                            a = function(t) { var e = []; for (var n in t) i.call(t, n) && e.push(n); return e },
                            u = function(t, e) { return { value: t[e] } },
                            c = function(t, e, n) { return t[e] = n.value, t },
                            l = function(t) { return t },
                            f = function(t) { try { return Object(t).constructor.prototype } catch (t) { return s } },
                            h = function(t) { try { return "[object Array]" === o.call(t) } catch (t) { return !1 } };
                        e.exports = { isArray: h, keys: a, names: a, defineProperty: c, getDescriptor: u, freeze: l, getPrototypeOf: f, isES5: r, propertyIsWritable: function() { return !0 } }
                    }
                }, {}],
                15: [function(t, e, n) {
                    "use strict";
                    e.exports = function(t, e) {
                        var n = t.map;
                        t.prototype.filter = function(t, r) { return n(this, t, r, e) }, t.filter = function(t, r, i) { return n(t, r, i, e) }
                    }
                }, {}],
                16: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r) {
                        function i() { return this }

                        function o() { throw this }

                        function s(t) { return function() { return t } }

                        function a(t) { return function() { throw t } }

                        function u(t, e, n) { var r; return r = h(e) ? n ? s(e) : a(e) : n ? i : o, t._then(r, p, void 0, e, void 0) }

                        function c(t) {
                            var i = this.promise,
                                o = this.handler,
                                s = i._isBound() ? o.call(i._boundValue()) : o();
                            if (void 0 !== s) { var a = r(s, i); if (a instanceof e) return a = a._target(), u(a, t, i.isFulfilled()) }
                            return i.isRejected() ? (n.e = t, n) : t
                        }

                        function l(t) {
                            var n = this.promise,
                                i = this.handler,
                                o = n._isBound() ? i.call(n._boundValue(), t) : i(t);
                            if (void 0 !== o) { var s = r(o, n); if (s instanceof e) return s = s._target(), u(s, t, !0) }
                            return t
                        }
                        var f = t("./util.js"),
                            h = f.isPrimitive,
                            p = f.thrower;
                        e.prototype._passThroughHandler = function(t, e) { if ("function" != typeof t) return this.then(); var n = { promise: this, handler: t }; return this._then(e ? c : l, e ? c : void 0, void 0, n, void 0) }, e.prototype.lastly = e.prototype.finally = function(t) { return this._passThroughHandler(t, !0) }, e.prototype.tap = function(t) { return this._passThroughHandler(t, !1) }
                    }
                }, { "./util.js": 38 }],
                17: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        function o(t, n, r) { for (var o = 0; o < n.length; ++o) { r._pushContext(); var s = f(n[o])(t); if (r._popContext(), s === l) { r._pushContext(); var a = e.reject(l.e); return r._popContext(), a } var u = i(s, r); if (u instanceof e) return u } return null }

                        function s(t, n, i, o) {
                            (this._promise = new e(r))._captureStackTrace(), this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(h) : h
                        }
                        var a = t("./errors.js"),
                            u = a.TypeError,
                            c = t("./util.js"),
                            l = c.errorObj,
                            f = c.tryCatch,
                            h = [];
                        s.prototype.promise = function() { return this._promise }, s.prototype._run = function() { this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._next(void 0) }, s.prototype._continue = function(t) {
                            if (t === l) return this._promise._rejectCallback(t.e, !1, !0);
                            var n = t.value;
                            if (t.done === !0) this._promise._resolveCallback(n);
                            else {
                                var r = i(n, this._promise);
                                if (!(r instanceof e) && (r = o(r, this._yieldHandlers, this._promise), null === r)) return void this._throw(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s", n) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                r._then(this._next, this._throw, void 0, this, null)
                            }
                        }, s.prototype._throw = function(t) {
                            this._promise._attachExtraTrace(t), this._promise._pushContext();
                            var e = f(this._generator.throw).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, s.prototype._next = function(t) {
                            this._promise._pushContext();
                            var e = f(this._generator.next).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, e.coroutine = function(t, e) {
                            if ("function" != typeof t) throw new u("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                            var n = Object(e).yieldHandler,
                                r = s,
                                i = (new Error).stack;
                            return function() {
                                var e = t.apply(this, arguments),
                                    o = new r(void 0, void 0, n, i);
                                return o._generator = e, o._next(void 0), o.promise()
                            }
                        }, e.coroutine.addYieldHandler = function(t) {
                            if ("function" != typeof t) throw new u("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            h.push(t)
                        }, e.spawn = function(t) {
                            if ("function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                            var r = new s(t, this),
                                i = r.promise();
                            return r._run(e.spawn), i
                        }
                    }
                }, { "./errors.js": 13, "./util.js": 38 }],
                18: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        var o = t("./util.js");
                        o.canEvaluate, o.tryCatch, o.errorObj;
                        e.join = function() {
                            var t, e = arguments.length - 1;
                            if (e > 0 && "function" == typeof arguments[e]) { t = arguments[e]; var r }
                            for (var i = arguments.length, o = new Array(i), s = 0; s < i; ++s) o[s] = arguments[s];
                            t && o.pop();
                            var r = new n(o).promise();
                            return void 0 !== t ? r.spread(t) : r
                        }
                    }
                }, { "./util.js": 38 }],
                19: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i, o) {
                        function s(t, e, n, r) {
                            this.constructor$(t), this._promise._captureStackTrace();
                            var i = c();
                            this._callback = null === i ? e : i.bind(e), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = n >= 1 ? [] : _, l.invoke(a, this, void 0)
                        }

                        function a() { this._init$(void 0, -2) }

                        function u(t, e, n, r) { var i = "object" == typeof n && null !== n ? n.concurrency : 0; return i = "number" == typeof i && isFinite(i) && i >= 1 ? i : 0, new s(t, e, i, r) }
                        var c = e._getDomain,
                            l = t("./async.js"),
                            f = t("./util.js"),
                            h = f.tryCatch,
                            p = f.errorObj,
                            d = {},
                            _ = [];
                        f.inherits(s, n), s.prototype._init = function() {}, s.prototype._promiseFulfilled = function(t, n) {
                            var r = this._values,
                                o = this.length(),
                                s = this._preservedValues,
                                a = this._limit;
                            if (r[n] === d) { if (r[n] = t, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return } else {
                                if (a >= 1 && this._inFlight >= a) return r[n] = t, void this._queue.push(n);
                                null !== s && (s[n] = t);
                                var u = this._callback,
                                    c = this._promise._boundValue();
                                this._promise._pushContext();
                                var l = h(u).call(c, t, n, o);
                                if (this._promise._popContext(), l === p) return this._reject(l.e);
                                var f = i(l, this._promise);
                                if (f instanceof e) {
                                    if (f = f._target(), f._isPending()) return a >= 1 && this._inFlight++, r[n] = d, f._proxyPromiseArray(this, n);
                                    if (!f._isFulfilled()) return this._reject(f._reason());
                                    l = f._value()
                                }
                                r[n] = l
                            }++this._totalResolved >= o && (null !== s ? this._filter(r, s) : this._resolve(r))
                        }, s.prototype._drainQueue = function() {
                            for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
                                if (this._isResolved()) return;
                                var r = t.pop();
                                this._promiseFulfilled(n[r], r)
                            }
                        }, s.prototype._filter = function(t, e) {
                            for (var n = e.length, r = new Array(n), i = 0, o = 0; o < n; ++o) t[o] && (r[i++] = e[o]);
                            r.length = i, this._resolve(r)
                        }, s.prototype.preservedValues = function() { return this._preservedValues }, e.prototype.map = function(t, e) { return "function" != typeof t ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : u(this, t, e, null).promise() }, e.map = function(t, e, n, i) { return "function" != typeof e ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : u(t, e, n, i).promise() }
                    }
                }, { "./async.js": 2, "./util.js": 38 }],
                20: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        var o = t("./util.js"),
                            s = o.tryCatch;
                        e.method = function(t) {
                            if ("function" != typeof t) throw new e.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            return function() {
                                var r = new e(n);
                                r._captureStackTrace(), r._pushContext();
                                var i = s(t).apply(this, arguments);
                                return r._popContext(), r._resolveFromSyncValue(i), r
                            }
                        }, e.attempt = e.try = function(t, r, a) {
                            if ("function" != typeof t) return i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            var u = new e(n);
                            u._captureStackTrace(), u._pushContext();
                            var c = o.isArray(r) ? s(t).apply(a, r) : s(t).call(a, r);
                            return u._popContext(), u._resolveFromSyncValue(c), u
                        }, e.prototype._resolveFromSyncValue = function(t) { t === o.errorObj ? this._rejectCallback(t.e, !1, !0) : this._resolveCallback(t, !0) }
                    }
                }, { "./util.js": 38 }],
                21: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e) {
                        function n(t, e) {
                            var n = this;
                            if (!o.isArray(t)) return r.call(n, t, e);
                            var i = a(e).apply(n._boundValue(), [null].concat(t));
                            i === u && s.throwLater(i.e)
                        }

                        function r(t, e) {
                            var n = this,
                                r = n._boundValue(),
                                i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);
                            i === u && s.throwLater(i.e)
                        }

                        function i(t, e) {
                            var n = this;
                            if (!t) {
                                var r = n._target(),
                                    i = r._getCarriedStackTrace();
                                i.cause = t, t = i
                            }
                            var o = a(e).call(n._boundValue(), t);
                            o === u && s.throwLater(o.e)
                        }
                        var o = t("./util.js"),
                            s = t("./async.js"),
                            a = o.tryCatch,
                            u = o.errorObj;
                        e.prototype.asCallback = e.prototype.nodeify = function(t, e) {
                            if ("function" == typeof t) {
                                var o = r;
                                void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t)
                            }
                            return this
                        }
                    }
                }, { "./async.js": 2, "./util.js": 38 }],
                22: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n) {
                        var r = t("./util.js"),
                            i = t("./async.js"),
                            o = r.tryCatch,
                            s = r.errorObj;
                        e.prototype.progressed = function(t) { return this._then(void 0, void 0, t, void 0, void 0) }, e.prototype._progress = function(t) { this._isFollowingOrFulfilledOrRejected() || this._target()._progressUnchecked(t) }, e.prototype._progressHandlerAt = function(t) { return 0 === t ? this._progressHandler0 : this[(t << 2) + t - 5 + 2] }, e.prototype._doProgressWith = function(t) {
                            var n = t.value,
                                i = t.handler,
                                a = t.promise,
                                u = t.receiver,
                                c = o(i).call(u, n);
                            if (c === s) {
                                if (null != c.e && "StopProgressPropagation" !== c.e.name) {
                                    var l = r.canAttachTrace(c.e) ? c.e : new Error(r.toString(c.e));
                                    a._attachExtraTrace(l), a._progress(c.e)
                                }
                            } else c instanceof e ? c._then(a._progress, null, null, a, void 0) : a._progress(c)
                        }, e.prototype._progressUnchecked = function(t) {
                            for (var r = this._length(), o = this._progress, s = 0; s < r; s++) {
                                var a = this._progressHandlerAt(s),
                                    u = this._promiseAt(s);
                                if (u instanceof e) "function" == typeof a ? i.invoke(this._doProgressWith, this, { handler: a, promise: u, receiver: this._receiverAt(s), value: t }) : i.invoke(o, u, t);
                                else { var c = this._receiverAt(s); "function" == typeof a ? a.call(c, t, u) : c instanceof n && !c._isResolved() && c._promiseProgressed(t, u) }
                            }
                        }
                    }
                }, { "./async.js": 2, "./util.js": 38 }],
                23: [function(t, n, r) {
                    "use strict";
                    n.exports = function() {
                        function r(t) {
                            if ("function" != typeof t) throw new p("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");
                            if (this.constructor !== r) throw new p("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");
                            this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._progressHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._settledValue = void 0, t !== d && this._resolveFromResolver(t)
                        }

                        function i(t) {
                            var e = new r(d);
                            e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._progressHandler0 = t, e._promise0 = t, e._receiver0 = t, e._settledValue = t
                        }
                        var o, s = function() { return new p("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n") },
                            a = function() { return new r.PromiseInspection(this._target()) },
                            u = function(t) { return r.reject(new p(t)) },
                            c = t("./util.js");
                        o = c.isNode ? function() { var t = e.domain; return void 0 === t && (t = null), t } : function() { return null }, c.notEnumerableProp(r, "_getDomain", o);
                        var l = {},
                            f = t("./async.js"),
                            h = t("./errors.js"),
                            p = r.TypeError = h.TypeError;
                        r.RangeError = h.RangeError, r.CancellationError = h.CancellationError, r.TimeoutError = h.TimeoutError, r.OperationalError = h.OperationalError, r.RejectionError = h.OperationalError, r.AggregateError = h.AggregateError;
                        var d = function() {},
                            _ = {},
                            v = { e: null },
                            y = t("./thenables.js")(r, d),
                            m = t("./promise_array.js")(r, d, y, u),
                            g = t("./captured_trace.js")(),
                            w = t("./debuggability.js")(r, g),
                            b = t("./context.js")(r, g, w),
                            j = t("./catch_filter.js")(v),
                            E = t("./promise_resolver.js"),
                            k = E._nodebackForPromise,
                            x = c.errorObj,
                            F = c.tryCatch;
                        return r.prototype.toString = function() { return "[object Promise]" }, r.prototype.caught = r.prototype.catch = function(t) {
                            var e = arguments.length;
                            if (e > 1) {
                                var n, i = new Array(e - 1),
                                    o = 0;
                                for (n = 0; n < e - 1; ++n) {
                                    var s = arguments[n];
                                    if ("function" != typeof s) return r.reject(new p("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));
                                    i[o++] = s
                                }
                                i.length = o, t = arguments[n];
                                var a = new j(i, t, this);
                                return this._then(void 0, a.doFilter, void 0, a, void 0)
                            }
                            return this._then(void 0, t, void 0, void 0, void 0)
                        }, r.prototype.reflect = function() { return this._then(a, a, void 0, this, void 0) }, r.prototype.then = function(t, e, n) {
                            if (w() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                                var r = ".then() only accepts functions but was passed: " + c.classString(t);
                                arguments.length > 1 && (r += ", " + c.classString(e)), this._warn(r)
                            }
                            return this._then(t, e, n, void 0, void 0)
                        }, r.prototype.done = function(t, e, n) { this._then(t, e, n, void 0, void 0)._setIsFinal() }, r.prototype.spread = function(t, e) { return this.all()._then(t, e, void 0, _, void 0) }, r.prototype.isCancellable = function() { return !this.isResolved() && this._cancellable() }, r.prototype.toJSON = function() { var t = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 }; return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t }, r.prototype.all = function() { return new m(this).promise() }, r.prototype.error = function(t) { return this.caught(c.originatesFromRejection, t) }, r.getNewLibraryCopy = n.exports, r.is = function(t) { return t instanceof r }, r.fromNode = function(t) {
                            var e = new r(d),
                                n = F(t)(k(e));
                            return n === x && e._rejectCallback(n.e, !0, !0), e
                        }, r.all = function(t) { return new m(t).promise() }, r.defer = r.pending = function() { return new E(new r(d)) }, r.cast = function(t) {
                            var e = y(t);
                            if (!(e instanceof r)) {
                                var n = e;
                                e = new r(d), e._fulfillUnchecked(n)
                            }
                            return e
                        }, r.resolve = r.fulfilled = r.cast, r.reject = r.rejected = function(t) { var e = new r(d); return e._captureStackTrace(), e._rejectCallback(t, !0), e }, r.setScheduler = function(t) { if ("function" != typeof t) throw new p("fn must be a function\n\n    See http://goo.gl/916lJJ\n"); var e = f._schedule; return f._schedule = t, e }, r.prototype._then = function(t, e, n, i, s) {
                            var a = void 0 !== s,
                                u = a ? s : new r(d);
                            a || (u._propagateFrom(this, 5), u._captureStackTrace());
                            var c = this._target();
                            c !== this && (void 0 === i && (i = this._boundTo), a || u._setIsMigrated());
                            var l = c._addCallbacks(t, e, n, u, i, o());
                            return c._isResolved() && !c._isSettlePromisesQueued() && f.invoke(c._settlePromiseAtPostResolution, c, l), u
                        }, r.prototype._settlePromiseAtPostResolution = function(t) { this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(), this._settlePromiseAt(t) }, r.prototype._length = function() { return 131071 & this._bitField }, r.prototype._isFollowingOrFulfilledOrRejected = function() { return (939524096 & this._bitField) > 0 }, r.prototype._isFollowing = function() { return 536870912 === (536870912 & this._bitField) }, r.prototype._setLength = function(t) { this._bitField = this._bitField & -131072 | 131071 & t }, r.prototype._setFulfilled = function() { this._bitField = 268435456 | this._bitField }, r.prototype._setRejected = function() { this._bitField = 134217728 | this._bitField }, r.prototype._setFollowing = function() { this._bitField = 536870912 | this._bitField }, r.prototype._setIsFinal = function() { this._bitField = 33554432 | this._bitField }, r.prototype._isFinal = function() { return (33554432 & this._bitField) > 0 }, r.prototype._cancellable = function() { return (67108864 & this._bitField) > 0 }, r.prototype._setCancellable = function() { this._bitField = 67108864 | this._bitField }, r.prototype._unsetCancellable = function() { this._bitField = this._bitField & -67108865 }, r.prototype._setIsMigrated = function() { this._bitField = 4194304 | this._bitField }, r.prototype._unsetIsMigrated = function() { this._bitField = this._bitField & -4194305 }, r.prototype._isMigrated = function() { return (4194304 & this._bitField) > 0 }, r.prototype._receiverAt = function(t) { var e = 0 === t ? this._receiver0 : this[5 * t - 5 + 4]; if (e !== l) return void 0 === e && this._isBound() ? this._boundValue() : e }, r.prototype._promiseAt = function(t) { return 0 === t ? this._promise0 : this[5 * t - 5 + 3] }, r.prototype._fulfillmentHandlerAt = function(t) { return 0 === t ? this._fulfillmentHandler0 : this[5 * t - 5 + 0] }, r.prototype._rejectionHandlerAt = function(t) { return 0 === t ? this._rejectionHandler0 : this[5 * t - 5 + 1] }, r.prototype._boundValue = function() { var t = this._boundTo; return void 0 !== t && t instanceof r ? t.isFulfilled() ? t.value() : void 0 : t }, r.prototype._migrateCallbacks = function(t, e) {
                            var n = t._fulfillmentHandlerAt(e),
                                i = t._rejectionHandlerAt(e),
                                o = t._progressHandlerAt(e),
                                s = t._promiseAt(e),
                                a = t._receiverAt(e);
                            s instanceof r && s._setIsMigrated(), void 0 === a && (a = l), this._addCallbacks(n, i, o, s, a, null)
                        }, r.prototype._addCallbacks = function(t, e, n, r, i, o) {
                            var s = this._length();
                            if (s >= 131066 && (s = 0, this._setLength(0)), 0 === s) this._promise0 = r, void 0 !== i && (this._receiver0 = i), "function" != typeof t || this._isCarryingStackTrace() || (this._fulfillmentHandler0 = null === o ? t : o.bind(t)), "function" == typeof e && (this._rejectionHandler0 = null === o ? e : o.bind(e)), "function" == typeof n && (this._progressHandler0 = null === o ? n : o.bind(n));
                            else {
                                var a = 5 * s - 5;
                                this[a + 3] = r, this[a + 4] = i, "function" == typeof t && (this[a + 0] = null === o ? t : o.bind(t)), "function" == typeof e && (this[a + 1] = null === o ? e : o.bind(e)), "function" == typeof n && (this[a + 2] = null === o ? n : o.bind(n))
                            }
                            return this._setLength(s + 1), s
                        }, r.prototype._setProxyHandlers = function(t, e) {
                            var n = this._length();
                            if (n >= 131066 && (n = 0, this._setLength(0)), 0 === n) this._promise0 = e, this._receiver0 = t;
                            else {
                                var r = 5 * n - 5;
                                this[r + 3] = e, this[r + 4] = t
                            }
                            this._setLength(n + 1)
                        }, r.prototype._proxyPromiseArray = function(t, e) { this._setProxyHandlers(t, e) }, r.prototype._resolveCallback = function(t, e) {
                            if (!this._isFollowingOrFulfilledOrRejected()) {
                                if (t === this) return this._rejectCallback(s(), !1, !0);
                                var n = y(t, this);
                                if (!(n instanceof r)) return this._fulfill(t);
                                var i = 1 | (e ? 4 : 0);
                                this._propagateFrom(n, i);
                                var o = n._target();
                                if (o._isPending()) {
                                    for (var a = this._length(), u = 0; u < a; ++u) o._migrateCallbacks(this, u);
                                    this._setFollowing(), this._setLength(0), this._setFollowee(o)
                                } else o._isFulfilled() ? this._fulfillUnchecked(o._value()) : this._rejectUnchecked(o._reason(), o._getCarriedStackTrace())
                            }
                        }, r.prototype._rejectCallback = function(t, e, n) {
                            n || c.markAsOriginatingFromRejection(t);
                            var r = c.ensureErrorObject(t),
                                i = r === t;
                            this._attachExtraTrace(r, !!e && i), this._reject(t, i ? void 0 : r)
                        }, r.prototype._resolveFromResolver = function(t) {
                            var e = this;
                            this._captureStackTrace(), this._pushContext();
                            var n = !0,
                                r = F(t)(function(t) { null !== e && (e._resolveCallback(t), e = null) }, function(t) { null !== e && (e._rejectCallback(t, n), e = null) });
                            n = !1, this._popContext(), void 0 !== r && r === x && null !== e && (e._rejectCallback(r.e, !0, !0), e = null)
                        }, r.prototype._settlePromiseFromHandler = function(t, e, n, r) {
                            if (!r._isRejected()) {
                                r._pushContext();
                                var i;
                                if (i = e !== _ || this._isRejected() ? F(t).call(e, n) : F(t).apply(this._boundValue(), n), r._popContext(), i === x || i === r || i === v) {
                                    var o = i === r ? s() : i.e;
                                    r._rejectCallback(o, !1, !0)
                                } else r._resolveCallback(i)
                            }
                        }, r.prototype._target = function() { for (var t = this; t._isFollowing();) t = t._followee(); return t }, r.prototype._followee = function() { return this._rejectionHandler0 }, r.prototype._setFollowee = function(t) { this._rejectionHandler0 = t }, r.prototype._cleanValues = function() { this._cancellable() && (this._cancellationParent = void 0) }, r.prototype._propagateFrom = function(t, e) {
                            (1 & e) > 0 && t._cancellable() && (this._setCancellable(), this._cancellationParent = t), (4 & e) > 0 && t._isBound() && this._setBoundTo(t._boundTo)
                        }, r.prototype._fulfill = function(t) { this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t) }, r.prototype._reject = function(t, e) { this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t, e) }, r.prototype._settlePromiseAt = function(t) {
                            var e = this._promiseAt(t),
                                n = e instanceof r;
                            if (n && e._isMigrated()) return e._unsetIsMigrated(), f.invoke(this._settlePromiseAt, this, t);
                            var i = this._isFulfilled() ? this._fulfillmentHandlerAt(t) : this._rejectionHandlerAt(t),
                                o = this._isCarryingStackTrace() ? this._getCarriedStackTrace() : void 0,
                                s = this._settledValue,
                                a = this._receiverAt(t);
                            this._clearCallbackDataAtIndex(t), "function" == typeof i ? n ? this._settlePromiseFromHandler(i, a, s, e) : i.call(a, s, e) : a instanceof m ? a._isResolved() || (this._isFulfilled() ? a._promiseFulfilled(s, e) : a._promiseRejected(s, e)) : n && (this._isFulfilled() ? e._fulfill(s) : e._reject(s, o)), t >= 4 && 4 === (31 & t) && f.invokeLater(this._setLength, this, 0)
                        }, r.prototype._clearCallbackDataAtIndex = function(t) {
                            if (0 === t) this._isCarryingStackTrace() || (this._fulfillmentHandler0 = void 0), this._rejectionHandler0 = this._progressHandler0 = this._receiver0 = this._promise0 = void 0;
                            else {
                                var e = 5 * t - 5;
                                this[e + 3] = this[e + 4] = this[e + 0] = this[e + 1] = this[e + 2] = void 0
                            }
                        }, r.prototype._isSettlePromisesQueued = function() { return (this._bitField & -1073741824) === -1073741824 }, r.prototype._setSettlePromisesQueued = function() { this._bitField = this._bitField | -1073741824 }, r.prototype._unsetSettlePromisesQueued = function() { this._bitField = 1073741823 & this._bitField }, r.prototype._queueSettlePromises = function() { f.settlePromises(this), this._setSettlePromisesQueued() }, r.prototype._fulfillUnchecked = function(t) {
                            if (t === this) { var e = s(); return this._attachExtraTrace(e), this._rejectUnchecked(e, void 0) }
                            this._setFulfilled(), this._settledValue = t, this._cleanValues(), this._length() > 0 && this._queueSettlePromises()
                        }, r.prototype._rejectUncheckedCheckError = function(t) {
                            var e = c.ensureErrorObject(t);
                            this._rejectUnchecked(t, e === t ? void 0 : e)
                        }, r.prototype._rejectUnchecked = function(t, e) {
                            if (t === this) { var n = s(); return this._attachExtraTrace(n), this._rejectUnchecked(n) }
                            if (this._setRejected(), this._settledValue = t, this._cleanValues(), this._isFinal()) return void f.throwLater(function(t) { throw "stack" in t && f.invokeFirst(g.unhandledRejection, void 0, t), t }, void 0 === e ? t : e);
                            void 0 !== e && e !== t && this._setCarriedStackTrace(e), this._length() > 0 ? this._queueSettlePromises() : this._ensurePossibleRejectionHandled()
                        }, r.prototype._settlePromises = function() { this._unsetSettlePromisesQueued(); for (var t = this._length(), e = 0; e < t; e++) this._settlePromiseAt(e) }, c.notEnumerableProp(r, "_makeSelfResolutionError", s), t("./progress.js")(r, m), t("./method.js")(r, d, y, u), t("./bind.js")(r, d, y), t("./finally.js")(r, v, y), t("./direct_resolve.js")(r), t("./synchronous_inspection.js")(r), t("./join.js")(r, m, y, d), r.version = "2.11.0", r.Promise = r, t("./map.js")(r, m, u, y, d), t("./cancel.js")(r), t("./using.js")(r, u, y, b), t("./generators.js")(r, u, d, y), t("./nodeify.js")(r), t("./call_get.js")(r), t("./props.js")(r, m, y, u), t("./race.js")(r, d, y, u), t("./reduce.js")(r, m, u, y, d), t("./settle.js")(r, m), t("./some.js")(r, m, u), t("./promisify.js")(r, d), t("./any.js")(r), t("./each.js")(r, d), t("./timers.js")(r, d), t("./filter.js")(r, d), c.toFastProperties(r), c.toFastProperties(r.prototype), i({ a: 1 }), i({ b: 2 }), i({ c: 3 }), i(1), i(function() {}), i(void 0), i(!1), i(new r(d)), g.setBounds(f.firstLineError, c.lastLineError), r
                    }
                }, { "./any.js": 1, "./async.js": 2, "./bind.js": 3, "./call_get.js": 5, "./cancel.js": 6, "./captured_trace.js": 7, "./catch_filter.js": 8, "./context.js": 9, "./debuggability.js": 10, "./direct_resolve.js": 11, "./each.js": 12, "./errors.js": 13, "./filter.js": 15, "./finally.js": 16, "./generators.js": 17, "./join.js": 18, "./map.js": 19, "./method.js": 20, "./nodeify.js": 21, "./progress.js": 22, "./promise_array.js": 24, "./promise_resolver.js": 25, "./promisify.js": 26, "./props.js": 27, "./race.js": 29, "./reduce.js": 30, "./settle.js": 32, "./some.js": 33, "./synchronous_inspection.js": 34, "./thenables.js": 35, "./timers.js": 36, "./using.js": 37, "./util.js": 38 }],
                24: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        function o(t) {
                            switch (t) {
                                case -2:
                                    return [];
                                case -3:
                                    return {}
                            }
                        }

                        function s(t) {
                            var r, i = this._promise = new e(n);
                            t instanceof e && (r = t, i._propagateFrom(r, 5)), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                        }
                        var a = t("./util.js"),
                            u = a.isArray;
                        return s.prototype.length = function() { return this._length }, s.prototype.promise = function() { return this._promise }, s.prototype._init = function t(n, s) {
                            var a = r(this._values, this._promise);
                            if (a instanceof e) { if (a = a._target(), this._values = a, !a._isFulfilled()) return a._isPending() ? void a._then(t, this._reject, void 0, this, s) : void this._reject(a._reason()); if (a = a._value(), !u(a)) { var c = new e.TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n"); return void this.__hardReject__(c) } } else if (!u(a)) return void this._promise._reject(i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());
                            if (0 === a.length) return void(s === -5 ? this._resolveEmptyArray() : this._resolve(o(s)));
                            var l = this.getActualLength(a.length);
                            this._length = l, this._values = this.shouldCopyValues() ? new Array(l) : this._values;
                            for (var f = this._promise, h = 0; h < l; ++h) {
                                var p = this._isResolved(),
                                    d = r(a[h], f);
                                d instanceof e ? (d = d._target(), p ? d._ignoreRejections() : d._isPending() ? d._proxyPromiseArray(this, h) : d._isFulfilled() ? this._promiseFulfilled(d._value(), h) : this._promiseRejected(d._reason(), h)) : p || this._promiseFulfilled(d, h)
                            }
                        }, s.prototype._isResolved = function() { return null === this._values }, s.prototype._resolve = function(t) { this._values = null, this._promise._fulfill(t) }, s.prototype.__hardReject__ = s.prototype._reject = function(t) { this._values = null, this._promise._rejectCallback(t, !1, !0) }, s.prototype._promiseProgressed = function(t, e) { this._promise._progress({ index: e, value: t }) }, s.prototype._promiseFulfilled = function(t, e) { this._values[e] = t, ++this._totalResolved >= this._length && this._resolve(this._values) }, s.prototype._promiseRejected = function(t, e) { this._totalResolved++, this._reject(t) }, s.prototype.shouldCopyValues = function() { return !0 }, s.prototype.getActualLength = function(t) { return t }, s
                    }
                }, { "./util.js": 38 }],
                25: [function(t, e, n) {
                    "use strict";

                    function r(t) { return t instanceof Error && p.getPrototypeOf(t) === Error.prototype }

                    function i(t) {
                        var e;
                        if (r(t)) {
                            e = new f(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
                            for (var n = p.keys(t), i = 0; i < n.length; ++i) {
                                var o = n[i];
                                d.test(o) || (e[o] = t[o])
                            }
                            return e
                        }
                        return a.markAsOriginatingFromRejection(t), t
                    }

                    function o(t) {
                        return function(e, n) {
                            if (null !== t) {
                                if (e) {
                                    var r = i(u(e));
                                    t._attachExtraTrace(r), t._reject(r)
                                } else if (arguments.length > 2) {
                                    for (var o = arguments.length, s = new Array(o - 1), a = 1; a < o; ++a) s[a - 1] = arguments[a];
                                    t._fulfill(s)
                                } else t._fulfill(n);
                                t = null
                            }
                        }
                    }
                    var s, a = t("./util.js"),
                        u = a.maybeWrapAsError,
                        c = t("./errors.js"),
                        l = c.TimeoutError,
                        f = c.OperationalError,
                        h = a.haveGetters,
                        p = t("./es5.js"),
                        d = /^(?:name|message|stack|cause)$/;
                    if (s = h ? function(t) { this.promise = t } : function(t) { this.promise = t, this.asCallback = o(t), this.callback = this.asCallback }, h) {
                        var _ = { get: function() { return o(this.promise) } };
                        p.defineProperty(s.prototype, "asCallback", _), p.defineProperty(s.prototype, "callback", _)
                    }
                    s._nodebackForPromise = o, s.prototype.toString = function() { return "[object PromiseResolver]" }, s.prototype.resolve = s.prototype.fulfill = function(t) {
                        if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._resolveCallback(t)
                    }, s.prototype.reject = function(t) {
                        if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._rejectCallback(t)
                    }, s.prototype.progress = function(t) {
                        if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._progress(t)
                    }, s.prototype.cancel = function(t) { this.promise.cancel(t) }, s.prototype.timeout = function() { this.reject(new l("timeout")) }, s.prototype.isResolved = function() { return this.promise.isResolved() }, s.prototype.toJSON = function() { return this.promise.toJSON() }, e.exports = s
                }, { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 }],
                26: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n) {
                        function r(t) { return !b.test(t) }

                        function i(t) { try { return t.__isPromisified__ === !0 } catch (t) { return !1 } }

                        function o(t, e, n) { var r = p.getDataPropertyOrDefault(t, e + n, g); return !!r && i(r) }

                        function s(t, e, n) {
                            for (var r = 0; r < t.length; r += 2) {
                                var i = t[r];
                                if (n.test(i))
                                    for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2)
                                        if (t[s] === o) throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s", e))
                            }
                        }

                        function a(t, e, n, r) {
                            for (var a = p.inheritedDataKeys(t), u = [], c = 0; c < a.length; ++c) {
                                var l = a[c],
                                    f = t[l],
                                    h = r === j || j(l, f, t);
                                "function" != typeof f || i(f) || o(t, l, e) || !r(l, f, t, h) || u.push(l, f)
                            }
                            return s(u, e, n), u
                        }

                        function u(t, r, i, o) {
                            function s() {
                                var i = r;
                                r === h && (i = this);
                                var o = new e(n);
                                o._captureStackTrace();
                                var s = "string" == typeof u && this !== a ? this[u] : t,
                                    c = d(o);
                                try { s.apply(i, _(arguments, c)) } catch (t) { o._rejectCallback(v(t), !0, !0) }
                                return o
                            }
                            var a = function() { return this }(),
                                u = t;
                            return "string" == typeof u && (t = o), p.notEnumerableProp(s, "__isPromisified__", !0), s
                        }

                        function c(t, e, n, r) {
                            for (var i = new RegExp(E(e) + "$"), o = a(t, e, i, n), s = 0, u = o.length; s < u; s += 2) {
                                var c = o[s],
                                    l = o[s + 1],
                                    f = c + e;
                                if (r === k) t[f] = k(c, h, c, l, e);
                                else {
                                    var d = r(l, function() { return k(c, h, c, l, e) });
                                    p.notEnumerableProp(d, "__isPromisified__", !0), t[f] = d
                                }
                            }
                            return p.toFastProperties(t), t
                        }

                        function l(t, e) { return k(t, e, void 0, t) }
                        var f, h = {},
                            p = t("./util.js"),
                            d = t("./promise_resolver.js")._nodebackForPromise,
                            _ = p.withAppended,
                            v = p.maybeWrapAsError,
                            y = p.canEvaluate,
                            m = t("./errors").TypeError,
                            g = { __isPromisified__: !0 },
                            w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                            b = new RegExp("^(?:" + w.join("|") + ")$"),
                            j = function(t) { return p.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t },
                            E = function(t) { return t.replace(/([$])/, "\\$") },
                            k = y ? f : u;
                        e.promisify = function(t, e) { if ("function" != typeof t) throw new m("fn must be a function\n\n    See http://goo.gl/916lJJ\n"); if (i(t)) return t; var n = l(t, arguments.length < 2 ? h : e); return p.copyDescriptors(t, n, r), n }, e.promisifyAll = function(t, e) {
                            if ("function" != typeof t && "object" != typeof t) throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");
                            e = Object(e);
                            var n = e.suffix;
                            "string" != typeof n && (n = "Async");
                            var r = e.filter;
                            "function" != typeof r && (r = j);
                            var i = e.promisifier;
                            if ("function" != typeof i && (i = k), !p.isIdentifier(n)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");
                            for (var o = p.inheritedDataKeys(t), s = 0; s < o.length; ++s) { var a = t[o[s]]; "constructor" !== o[s] && p.isClass(a) && (c(a.prototype, n, r, i), c(a, n, r, i)) }
                            return c(t, n, r, i)
                        }
                    }
                }, { "./errors": 13, "./promise_resolver.js": 25, "./util.js": 38 }],
                27: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        function o(t) {
                            for (var e = c.keys(t), n = e.length, r = new Array(2 * n), i = 0; i < n; ++i) {
                                var o = e[i];
                                r[i] = t[o], r[i + n] = o
                            }
                            this.constructor$(r)
                        }

                        function s(t) { var n, s = r(t); return u(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 4), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n") }
                        var a = t("./util.js"),
                            u = a.isObject,
                            c = t("./es5.js");
                        a.inherits(o, n), o.prototype._init = function() { this._init$(void 0, -3) }, o.prototype._promiseFulfilled = function(t, e) {
                            if (this._values[e] = t, ++this._totalResolved >= this._length) {
                                for (var n = {}, r = this.length(), i = 0, o = this.length(); i < o; ++i) n[this._values[i + r]] = this._values[i];
                                this._resolve(n)
                            }
                        }, o.prototype._promiseProgressed = function(t, e) { this._promise._progress({ key: this._values[e + this.length()], value: t }) }, o.prototype.shouldCopyValues = function() { return !1 }, o.prototype.getActualLength = function(t) { return t >> 1 }, e.prototype.props = function() { return s(this) }, e.props = function(t) { return s(t) }
                    }
                }, { "./es5.js": 14, "./util.js": 38 }],
                28: [function(t, e, n) {
                    "use strict";

                    function r(t, e, n, r, i) { for (var o = 0; o < i; ++o) n[o + r] = t[o + e], t[o + e] = void 0 }

                    function i(t) { this._capacity = t, this._length = 0, this._front = 0 }
                    i.prototype._willBeOverCapacity = function(t) { return this._capacity < t }, i.prototype._pushOne = function(t) {
                        var e = this.length();
                        this._checkCapacity(e + 1), this[this._front + e & this._capacity - 1] = t, this._length = e + 1
                    }, i.prototype._unshiftOne = function(t) {
                        var e = this._capacity;
                        this._checkCapacity(this.length() + 1);
                        var n = this._front,
                            r = (n - 1 & e - 1 ^ e) - e;
                        this[r] = t, this._front = r, this._length = this.length() + 1
                    }, i.prototype.unshift = function(t, e, n) { this._unshiftOne(n), this._unshiftOne(e), this._unshiftOne(t) }, i.prototype.push = function(t, e, n) {
                        var r = this.length() + 3;
                        if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
                        var i = this._front + r - 3;
                        this._checkCapacity(r);
                        var o = this._capacity - 1;
                        this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r
                    }, i.prototype.shift = function() {
                        var t = this._front,
                            e = this[t];
                        return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
                    }, i.prototype.length = function() { return this._length }, i.prototype._checkCapacity = function(t) { this._capacity < t && this._resizeTo(this._capacity << 1) }, i.prototype._resizeTo = function(t) {
                        var e = this._capacity;
                        this._capacity = t, r(this, 0, this, e, this._front + this._length & e - 1)
                    }, e.exports = i
                }, {}],
                29: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        function o(t, o) {
                            var u = r(t);
                            if (u instanceof e) return a(u);
                            if (!s(t)) return i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                            var c = new e(n);
                            void 0 !== o && c._propagateFrom(o, 5);
                            for (var l = c._fulfill, f = c._reject, h = 0, p = t.length; h < p; ++h) {
                                var d = t[h];
                                (void 0 !== d || h in t) && e.cast(d)._then(l, f, void 0, c, null)
                            }
                            return c
                        }
                        var s = t("./util.js").isArray,
                            a = function(t) { return t.then(function(e) { return o(e, t) }) };
                        e.race = function(t) { return o(t, void 0) }, e.prototype.race = function() { return o(this, void 0) }
                    }
                }, { "./util.js": 38 }],
                30: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i, o) {
                        function s(t, n, r, s) {
                            this.constructor$(t), this._promise._captureStackTrace(), this._preservedValues = s === o ? [] : null, this._zerothIsAccum = void 0 === r, this._gotAccum = !1, this._reducingIndex = this._zerothIsAccum ? 1 : 0, this._valuesPhase = void 0;
                            var u = i(r, this._promise),
                                f = !1,
                                h = u instanceof e;
                            h && (u = u._target(), u._isPending() ? u._proxyPromiseArray(this, -1) : u._isFulfilled() ? (r = u._value(), this._gotAccum = !0) : (this._reject(u._reason()), f = !0)), h || this._zerothIsAccum || (this._gotAccum = !0);
                            var p = c();
                            this._callback = null === p ? n : p.bind(n), this._accum = r, f || l.invoke(a, this, void 0)
                        }

                        function a() { this._init$(void 0, -5) }

                        function u(t, e, n, i) { return "function" != typeof e ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : new s(t, e, n, i).promise() }
                        var c = e._getDomain,
                            l = t("./async.js"),
                            f = t("./util.js"),
                            h = f.tryCatch,
                            p = f.errorObj;
                        f.inherits(s, n), s.prototype._init = function() {}, s.prototype._resolveEmptyArray = function() {
                            (this._gotAccum || this._zerothIsAccum) && this._resolve(null !== this._preservedValues ? [] : this._accum)
                        }, s.prototype._promiseFulfilled = function(t, n) {
                            var r = this._values;
                            r[n] = t;
                            var o, s = this.length(),
                                a = this._preservedValues,
                                u = null !== a,
                                c = this._gotAccum,
                                l = this._valuesPhase;
                            if (!l)
                                for (l = this._valuesPhase = new Array(s), o = 0; o < s; ++o) l[o] = 0;
                            if (o = l[n], 0 === n && this._zerothIsAccum ? (this._accum = t, this._gotAccum = c = !0, l[n] = 0 === o ? 1 : 2) : n === -1 ? (this._accum = t, this._gotAccum = c = !0) : 0 === o ? l[n] = 1 : (l[n] = 2, this._accum = t), c) {
                                for (var f, d = this._callback, _ = this._promise._boundValue(), v = this._reducingIndex; v < s; ++v)
                                    if (o = l[v], 2 !== o) {
                                        if (1 !== o) return;
                                        if (t = r[v], this._promise._pushContext(), u ? (a.push(t), f = h(d).call(_, t, v, s)) : f = h(d).call(_, this._accum, t, v, s), this._promise._popContext(), f === p) return this._reject(f.e);
                                        var y = i(f, this._promise);
                                        if (y instanceof e) {
                                            if (y = y._target(), y._isPending()) return l[v] = 4, y._proxyPromiseArray(this, v);
                                            if (!y._isFulfilled()) return this._reject(y._reason());
                                            f = y._value()
                                        }
                                        this._reducingIndex = v + 1, this._accum = f
                                    } else this._reducingIndex = v + 1;
                                this._resolve(u ? a : this._accum)
                            }
                        }, e.prototype.reduce = function(t, e) { return u(this, t, e, null) }, e.reduce = function(t, e, n, r) { return u(t, e, n, r) }
                    }
                }, { "./async.js": 2, "./util.js": 38 }],
                31: [function(t, i, o) {
                    "use strict";
                    var s, a = t("./util"),
                        u = function() { throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n") };
                    if (a.isNode && "undefined" == typeof MutationObserver) {
                        var c = n.setImmediate,
                            l = e.nextTick;
                        s = a.isRecentNode ? function(t) { c.call(n, t) } : function(t) { l.call(e, t) }
                    } else "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && window.navigator.standalone ? s = void 0 !== r ? function(t) { r(t) } : "undefined" != typeof setTimeout ? function(t) { setTimeout(t, 0) } : u : (s = function(t) {
                        var e = document.createElement("div");
                        return new MutationObserver(t).observe(e, { attributes: !0 }),
                            function() { e.classList.toggle("foo") }
                    }, s.isStatic = !0);
                    i.exports = s
                }, { "./util": 38 }],
                32: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n) {
                        function r(t) { this.constructor$(t) }
                        var i = e.PromiseInspection;
                        t("./util.js").inherits(r, n), r.prototype._promiseResolved = function(t, e) { this._values[t] = e, ++this._totalResolved >= this._length && this._resolve(this._values) }, r.prototype._promiseFulfilled = function(t, e) {
                            var n = new i;
                            n._bitField = 268435456, n._settledValue = t, this._promiseResolved(e, n)
                        }, r.prototype._promiseRejected = function(t, e) {
                            var n = new i;
                            n._bitField = 134217728, n._settledValue = t, this._promiseResolved(e, n)
                        }, e.settle = function(t) { return new r(t).promise() }, e.prototype.settle = function() { return new r(this).promise() }
                    }
                }, { "./util.js": 38 }],
                33: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r) {
                        function i(t) { this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1 }

                        function o(t, e) {
                            if ((0 | e) !== e || e < 0) return r("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");
                            var n = new i(t),
                                o = n.promise();
                            return n.setHowMany(e), n.init(), o
                        }
                        var s = t("./util.js"),
                            a = t("./errors.js").RangeError,
                            u = t("./errors.js").AggregateError,
                            c = s.isArray;
                        s.inherits(i, n), i.prototype._init = function() {
                            if (this._initialized) {
                                if (0 === this._howMany) return void this._resolve([]);
                                this._init$(void 0, -5);
                                var t = c(this._values);
                                !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                            }
                        }, i.prototype.init = function() { this._initialized = !0, this._init() }, i.prototype.setUnwrap = function() { this._unwrap = !0 }, i.prototype.howMany = function() { return this._howMany }, i.prototype.setHowMany = function(t) { this._howMany = t }, i.prototype._promiseFulfilled = function(t) { this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values)) }, i.prototype._promiseRejected = function(t) {
                            if (this._addRejected(t), this.howMany() > this._canPossiblyFulfill()) {
                                for (var e = new u, n = this.length(); n < this._values.length; ++n) e.push(this._values[n]);
                                this._reject(e)
                            }
                        }, i.prototype._fulfilled = function() { return this._totalResolved }, i.prototype._rejected = function() { return this._values.length - this.length() }, i.prototype._addRejected = function(t) { this._values.push(t) }, i.prototype._addFulfilled = function(t) { this._values[this._totalResolved++] = t }, i.prototype._canPossiblyFulfill = function() { return this.length() - this._rejected() }, i.prototype._getRangeError = function(t) { return new a("Input array must contain at least " + this._howMany + " items but contains only " + t + " items") }, i.prototype._resolveEmptyArray = function() { this._reject(this._getRangeError(0)) }, e.some = function(t, e) { return o(t, e) }, e.prototype.some = function(t) { return o(this, t) }, e._SomePromiseArray = i
                    }
                }, { "./errors.js": 13, "./util.js": 38 }],
                34: [function(t, e, n) {
                    "use strict";
                    e.exports = function(t) {
                        function e(t) { void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValue = t._settledValue) : (this._bitField = 0, this._settledValue = void 0) }
                        e.prototype.value = function() { if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n"); return this._settledValue }, e.prototype.error = e.prototype.reason = function() { if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n"); return this._settledValue }, e.prototype.isFulfilled = t.prototype._isFulfilled = function() { return (268435456 & this._bitField) > 0 }, e.prototype.isRejected = t.prototype._isRejected = function() { return (134217728 & this._bitField) > 0 }, e.prototype.isPending = t.prototype._isPending = function() { return 0 === (402653184 & this._bitField) }, e.prototype.isResolved = t.prototype._isResolved = function() { return (402653184 & this._bitField) > 0 }, t.prototype.isPending = function() { return this._target()._isPending() }, t.prototype.isRejected = function() { return this._target()._isRejected() }, t.prototype.isFulfilled = function() { return this._target()._isFulfilled() }, t.prototype.isResolved = function() { return this._target()._isResolved() }, t.prototype._value = function() { return this._settledValue }, t.prototype._reason = function() { return this._unsetRejectionIsUnhandled(), this._settledValue }, t.prototype.value = function() { var t = this._target(); if (!t.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n"); return t._settledValue }, t.prototype.reason = function() { var t = this._target(); if (!t.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n"); return t._unsetRejectionIsUnhandled(), t._settledValue }, t.PromiseInspection = e
                    }
                }, {}],
                35: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n) {
                        function r(t, r) { if (c(t)) { if (t instanceof e) return t; if (o(t)) { var l = new e(n); return t._then(l._fulfillUnchecked, l._rejectUncheckedCheckError, l._progressUnchecked, l, null), l } var f = a.tryCatch(i)(t); if (f === u) { r && r._pushContext(); var l = e.reject(f.e); return r && r._popContext(), l } if ("function" == typeof f) return s(t, f, r) } return t }

                        function i(t) { return t.then }

                        function o(t) { return l.call(t, "_promise0") }

                        function s(t, r, i) {
                            function o(t) { l && (l._resolveCallback(t), l = null) }

                            function s(t) { l && (l._rejectCallback(t, h, !0), l = null) }

                            function c(t) { l && "function" == typeof l._progress && l._progress(t) }
                            var l = new e(n),
                                f = l;
                            i && i._pushContext(), l._captureStackTrace(), i && i._popContext();
                            var h = !0,
                                p = a.tryCatch(r).call(t, o, s, c);
                            return h = !1, l && p === u && (l._rejectCallback(p.e, !0, !0), l = null), f
                        }
                        var a = t("./util.js"),
                            u = a.errorObj,
                            c = a.isObject,
                            l = {}.hasOwnProperty;
                        return r
                    }
                }, { "./util.js": 38 }],
                36: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n) {
                        function r(t) { var e = this; return e instanceof Number && (e = +e), clearTimeout(e), t }

                        function i(t) { var e = this; throw e instanceof Number && (e = +e), clearTimeout(e), t }
                        var o = t("./util.js"),
                            s = e.TimeoutError,
                            a = function(t, e) { if (t.isPending()) { var n;!o.isPrimitive(e) && e instanceof Error ? n = e : ("string" != typeof e && (e = "operation timed out"), n = new s(e)), o.markAsOriginatingFromRejection(n), t._attachExtraTrace(n), t._cancel(n) } },
                            u = function(t) { return c(+this).thenReturn(t) },
                            c = e.delay = function(t, r) { if (void 0 === r) { r = t, t = void 0; var i = new e(n); return setTimeout(function() { i._fulfill() }, r), i } return r = +r, e.resolve(t)._then(u, null, null, r, void 0) };
                        e.prototype.delay = function(t) { return c(this, t) }, e.prototype.timeout = function(t, e) {
                            t = +t;
                            var n = this.then().cancellable();
                            n._cancellationParent = this;
                            var o = setTimeout(function() { a(n, e) }, t);
                            return n._then(r, i, void 0, o, void 0)
                        }
                    }
                }, { "./util.js": 38 }],
                37: [function(t, e, n) {
                    "use strict";
                    e.exports = function(e, n, r, i) {
                        function o(t) {
                            for (var n = t.length, r = 0; r < n; ++r) {
                                var i = t[r];
                                if (i.isRejected()) return e.reject(i.error());
                                t[r] = i._settledValue
                            }
                            return t
                        }

                        function s(t) { setTimeout(function() { throw t }, 0) }

                        function a(t) { var e = r(t); return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e }

                        function u(t, n) {
                            function i() {
                                if (o >= u) return c.resolve();
                                var l = a(t[o++]);
                                if (l instanceof e && l._isDisposable()) { try { l = r(l._getDisposer().tryDispose(n), t.promise) } catch (t) { return s(t) } if (l instanceof e) return l._then(i, s, null, null, null) }
                                i()
                            }
                            var o = 0,
                                u = t.length,
                                c = e.defer();
                            return i(), c.promise
                        }

                        function c(t) { var e = new v; return e._settledValue = t, e._bitField = 268435456, u(this, e).thenReturn(t) }

                        function l(t) { var e = new v; return e._settledValue = t, e._bitField = 134217728, u(this, e).thenThrow(t) }

                        function f(t, e, n) { this._data = t, this._promise = e, this._context = n }

                        function h(t, e, n) { this.constructor$(t, e, n) }

                        function p(t) { return f.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t }
                        var d = t("./errors.js").TypeError,
                            _ = t("./util.js").inherits,
                            v = e.PromiseInspection;
                        f.prototype.data = function() { return this._data }, f.prototype.promise = function() { return this._promise }, f.prototype.resource = function() { return this.promise().isFulfilled() ? this.promise().value() : null }, f.prototype.tryDispose = function(t) {
                            var e = this.resource(),
                                n = this._context;
                            void 0 !== n && n._pushContext();
                            var r = null !== e ? this.doDispose(e, t) : null;
                            return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
                        }, f.isDisposer = function(t) { return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose }, _(h, f), h.prototype.doDispose = function(t, e) { return this.data().call(t, t, e) }, e.using = function() {
                            var t = arguments.length;
                            if (t < 2) return n("you must pass at least 2 arguments to Promise.using");
                            var i = arguments[t - 1];
                            if ("function" != typeof i) return n("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            var s, a = !0;
                            2 === t && Array.isArray(arguments[0]) ? (s = arguments[0], t = s.length, a = !1) : (s = arguments, t--);
                            for (var u = new Array(t), h = 0; h < t; ++h) {
                                var d = s[h];
                                if (f.isDisposer(d)) {
                                    var _ = d;
                                    d = d.promise(), d._setDisposable(_)
                                } else {
                                    var v = r(d);
                                    v instanceof e && (d = v._then(p, null, null, { resources: u, index: h }, void 0))
                                }
                                u[h] = d
                            }
                            var y = e.settle(u).then(o).then(function(t) { y._pushContext(); var e; try { e = a ? i.apply(void 0, t) : i.call(void 0, t) } finally { y._popContext() } return e })._then(c, l, void 0, u, void 0);
                            return u.promise = y, y
                        }, e.prototype._setDisposable = function(t) { this._bitField = 262144 | this._bitField, this._disposer = t }, e.prototype._isDisposable = function() { return (262144 & this._bitField) > 0 }, e.prototype._getDisposer = function() { return this._disposer }, e.prototype._unsetDisposable = function() { this._bitField = this._bitField & -262145, this._disposer = void 0 }, e.prototype.disposer = function(t) { if ("function" == typeof t) return new h(t, this, i()); throw new d }
                    }
                }, { "./errors.js": 13, "./util.js": 38 }],
                38: [function(t, n, r) {
                    "use strict";

                    function i() { try { var t = T; return T = null, t.apply(this, arguments) } catch (t) { return F.e = t, F } }

                    function o(t) { return T = t, i }

                    function s(t) { return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t }

                    function a(t) { return !s(t) }

                    function u(t) { return s(t) ? new Error(y(t)) : t }

                    function c(t, e) {
                        var n, r = t.length,
                            i = new Array(r + 1);
                        for (n = 0; n < r; ++n) i[n] = t[n];
                        return i[n] = e, i
                    }

                    function l(t, e, n) { if (!E.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0; var r = Object.getOwnPropertyDescriptor(t, e); return null != r ? null == r.get && null == r.set ? r.value : n : void 0 }

                    function f(t, e, n) { if (s(t)) return t; var r = { value: n, configurable: !0, enumerable: !1, writable: !0 }; return E.defineProperty(t, e, r), t }

                    function h(t) { throw t }

                    function p(t) {
                        try {
                            if ("function" == typeof t) {
                                var e = E.names(t.prototype),
                                    n = E.isES5 && e.length > 1,
                                    r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
                                    i = S.test(t + "") && E.names(t).length > 0;
                                if (n || r || i) return !0
                            }
                            return !1
                        } catch (t) { return !1 }
                    }

                    function d(t) {
                        function e() {}
                        e.prototype = t;
                        for (var n = 8; n--;) new e;
                        return t
                    }

                    function _(t) { return R.test(t) }

                    function v(t, e, n) { for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e + i + n; return r }

                    function y(t) { try { return t + "" } catch (t) { return "[no string representation]" } }

                    function m(t) { try { f(t, "isOperational", !0) } catch (t) {} }

                    function g(t) { return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0) }

                    function w(t) { return t instanceof Error && E.propertyIsWritable(t, "stack") }

                    function b(t) { return {}.toString.call(t) }

                    function j(t, e, n) { for (var r = E.names(t), i = 0; i < r.length; ++i) { var o = r[i]; if (n(o)) try { E.defineProperty(e, o, E.getDescriptor(t, o)) } catch (t) {} } }
                    var E = t("./es5.js"),
                        k = "undefined" == typeof navigator,
                        x = function() { try { var t = {}; return E.defineProperty(t, "f", { get: function() { return 3 } }), 3 === t.f } catch (t) { return !1 } }(),
                        F = { e: {} },
                        T, C = function(t, e) {
                            function n() { this.constructor = t, this.constructor$ = e; for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]) }
                            var r = {}.hasOwnProperty;
                            return n.prototype = e.prototype, t.prototype = new n, t.prototype
                        },
                        P = function() {
                            var t = [Array.prototype, Object.prototype, Function.prototype],
                                e = function(e) {
                                    for (var n = 0; n < t.length; ++n)
                                        if (t[n] === e) return !0;
                                    return !1
                                };
                            if (E.isES5) {
                                var n = Object.getOwnPropertyNames;
                                return function(t) {
                                    for (var r = [], i = Object.create(null); null != t && !e(t);) {
                                        var o;
                                        try { o = n(t) } catch (t) { return r }
                                        for (var s = 0; s < o.length; ++s) {
                                            var a = o[s];
                                            if (!i[a]) {
                                                i[a] = !0;
                                                var u = Object.getOwnPropertyDescriptor(t, a);
                                                null != u && null == u.get && null == u.set && r.push(a)
                                            }
                                        }
                                        t = E.getPrototypeOf(t)
                                    }
                                    return r
                                }
                            }
                            var r = {}.hasOwnProperty;
                            return function(n) {
                                if (e(n)) return [];
                                var i = [];
                                t: for (var o in n)
                                    if (r.call(n, o)) i.push(o);
                                    else {
                                        for (var s = 0; s < t.length; ++s)
                                            if (r.call(t[s], o)) continue t;
                                        i.push(o)
                                    }
                                return i
                            }
                        }(),
                        S = /this\s*\.\s*\S+\s*=/,
                        R = /^[a-z$_][a-z$_0-9]*$/i,
                        A = function() { return "stack" in new Error ? function(t) { return w(t) ? t : new Error(y(t)) } : function(t) { if (w(t)) return t; try { throw new Error(y(t)) } catch (t) { return t } } }(),
                        O = { isClass: p, isIdentifier: _, inheritedDataKeys: P, getDataPropertyOrDefault: l, thrower: h, isArray: E.isArray, haveGetters: x, notEnumerableProp: f, isPrimitive: s, isObject: a, canEvaluate: k, errorObj: F, tryCatch: o, inherits: C, withAppended: c, maybeWrapAsError: u, toFastProperties: d, filledRange: v, toString: y, canAttachTrace: w, ensureErrorObject: A, originatesFromRejection: g, markAsOriginatingFromRejection: m, classString: b, copyDescriptors: j, hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes, isNode: void 0 !== e && "[object process]" === b(e).toLowerCase() };
                    O.isRecentNode = O.isNode && function() { var t = e.versions.node.split(".").map(Number); return 0 === t[0] && t[1] > 10 || t[0] > 0 }(), O.isNode && O.toFastProperties(e);
                    try { throw new Error } catch (t) { O.lastLineError = t }
                    n.exports = O
                }, { "./es5.js": 14 }]
            }, {}, [4])(4)
        }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
    }).call(e, n(4), n(5), n(11).setImmediate)
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = {};
    t.exports = function() {
        var t = function(t) { return i[t] || (i[t] = new r(function(e, n) { var r = new cordova.plugins.SecureStorage(function() { e(r) }, n, t) })), i[t] },
            e = function(e, n) { return t(e).then(function(t) { return new r(function(e, r) { t.remove(e, r, n) }) }) };
        return { set: function(e, n, i) { return t(e).then(function(t) { return new r(function(e, r) { t.set(e, r, n, i) }) }) }, get: function(e, n) { return t(e).then(function(t) { return new r(function(e, r) { t.get(e, r, n) }) }) }, remove: e }
    }()
}, function(t, e) {}, function(t, e) {}, function(t, e) {
    function n() { throw new Error("setTimeout has not been defined") }

    function r() { throw new Error("clearTimeout has not been defined") }

    function i(t) { if (l === setTimeout) return setTimeout(t, 0); if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0); try { return l(t, 0) } catch (e) { try { return l.call(null, t, 0) } catch (e) { return l.call(this, t, 0) } } }

    function o(t) { if (f === clearTimeout) return clearTimeout(t); if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t); try { return f(t) } catch (e) { try { return f.call(null, t) } catch (e) { return f.call(this, t) } } }

    function s() { _ && p && (_ = !1, p.length ? d = p.concat(d) : v = -1, d.length && a()) }

    function a() {
        if (!_) {
            var t = i(s);
            _ = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++v < e;) p && p[v].run();
                v = -1, e = d.length
            }
            p = null, _ = !1, o(t)
        }
    }

    function u(t, e) { this.fun = t, this.array = e }

    function c() {}
    var l, f, h = t.exports = {};
    ! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch (t) { l = n } try { f = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { f = r } }();
    var p, d = [],
        _ = !1,
        v = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new u(t, e)), 1 !== d.length || _ || i(a)
    }, u.prototype.run = function() { this.fun.apply(null, this.array) }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(t) { throw new Error("process.binding is not supported") }, h.cwd = function() { return "/" }, h.chdir = function(t) { throw new Error("process.chdir is not supported") }, h.umask = function() { return 0 }
}, function(t, e) {
    var n;
    n = function() { return this }();
    try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function() {
        var t = function(t) { this._store = t };
        t.prototype.set = function(t) { return e().then(function(e) { return this._store.set(e, "mx-authtoken", t) }.bind(this)) }, t.prototype.get = function() { return e().then(function(t) { return this._store.get(t, "mx-authtoken").caught(function() { return r.resolve(void 0) }) }.bind(this)) }, t.prototype.remove = function() { return e().then(function(t) { return this._store.remove(t, "mx-authtoken").caught(function() { return r.resolve() }) }.bind(this)) };
        var e = function() { return new r(function(t, e) { return cordova.getAppVersion.getPackageName(t) }) };
        return t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(1),
        o = n(14);
    t.exports = function() {
        var t = function() { return o.get().then(function(t) { return r.all([i.remove(t, "pin"), u()]).caught(function() { return r.resolve() }) }) },
            e = function(t) { return o.get().then(function(e) { return i.set(e, "pin", t).caught(function() { return r.resolve() }) }) },
            n = function() { return o.get().then(function(t) { return i.get(t, "pin").caught(function() { return r.resolve(void 0) }) }) },
            s = function() { return o.get().then(function(t) { return i.get(t, "mx-pin-attempts-left").then(function(t) { return Number(t) }) }).caught(function() { return r.resolve(3) }) },
            a = function(t) { return o.get().then(function(e) { return i.set(e, "mx-pin-attempts-left", t.toString()) }) },
            u = function() { return o.get().then(function(t) { return i.remove(t, "mx-pin-attempts-left").caught(function() { return r.resolve() }) }) };
        return { set: e, get: n, remove: t, getAttemptsLeft: s, verify: function(t) { return n().then(function(e) { return t === e ? u() : s().then(function(t) { return a(--t).then(function() { return r.reject(new Error("Invalid PIN")) }) }) }) }, isValid: function(t) { return /^[0-9]{5}$/.test(t) } }
    }()
}, function(t, e, n) {
    "use strict";

    function r(t) { return t.keys().map(t) }
    var i = n(12),
        o = n(0),
        s = n(6),
        a = n(7),
        u = n(15),
        c = n(1),
        l = n(13);
    r(n(16)), n(2), n(3), t.exports = function() {
        var t, e, n, r = { files: { js: ["mxclientsystem/mxui/mxui.js"], css: ["lib/bootstrap/css/bootstrap.min.css", "mxclientsystem/mxui/ui/mxui.css", "css/theme.css"] }, cachebust: +new Date },
            f = "",
            h = void 0 === document.ontouchstart ? "click" : "touchstart",
            p = function(t) { this.message = t };
        p.prototype = new Error;
        var d, _ = function(t, e) {
                var n, r = new XMLHttpRequest;
                r.open(e.method, t), e.onLoad && (r.onreadystatechange = function() { 4 === r.readyState && e.onLoad(r.status, r.responseText) });
                for (n in e.headers) e.headers.hasOwnProperty(n) && r.setRequestHeader(n, e.headers[n]);
                e.timeout && (r.timeout = e.timeout, r.ontimeout = e.onTimeout), r.send(e.data)
            },
            v = function(t) { document.getElementById("mxalert_message").textContent = t, document.getElementById("mxalert_button").addEventListener("touchstart", function() { window.location.reload() }), document.getElementById("mxalert").style.display = "block", P() },
            y = function(t) { d = d || document.querySelector("#mx-loader-container .mx-message"), d.textContent != t && (d.textContent = t) },
            m = function(t, e) { return function() { return y(e), t.apply(null, arguments) } },
            g = function(t, e, n, r, i) { var o = setInterval(function() { 0 === e ? (clearInterval(o), i()) : n() ? (clearInterval(o), r()) : --e }, t) },
            w = function(t) { var e = new s(t ? c : l); return { set: function(t, n) { e.set(t).then(n, n) }, get: function(t) { e.get().then(function(e) { t && t(e) }, function(e) { t && t(void 0) }) }, remove: function(t) { e.remove().then(t, t) } } },
            b = function(t, e, r, i, s, a, c) {
                return new o(function(o, l) {
                    if (window.dojoConfig = {
                            appbase: e,
                            remotebase: r,
                            baseUrl: e + "mxclientsystem/dojo/",
                            async: !0,
                            cacheBust: t.cachebust,
                            hybridTabletProfile: i,
                            hybridPhoneProfile: s,
                            server: { timeout: 5e3 },
                            data: {
                                offlineBackend: {
                                    getStorageDirFn: function(t, e) { window.resolveLocalFileSystemURL(n, function(e) { t && t(e) }, e) },
                                    getDocumentUrlFn: function(t, e, r) { return n + "files/" + (r ? "thumbnails" : "documents") + "/" + t + "?" + +new Date },
                                    downloadFileFn: function(t, e, i, o) {
                                        (new FileTransfer).download(r + t, n + "files/" + e, i, o)
                                    }
                                }
                            },
                            store: { createStoreFn: function() { return window.sqlitePlugin.openDatabase({ name: "MendixDatabase.db", location: 2 }) } },
                            session: { shouldGenerateToken: !0, tokenStore: w(c) },
                            ui: {
                                customLoginFn: function(t) {
                                    function e() {
                                        var t = document.getElementById("mx-username"),
                                            o = document.getElementById("mx-password");
                                        mx.login(t.value, o.value, function() { n.style.display = "", r.removeEventListener(h, e) }, function(t) { i.textContent = "We couldn't log you in" })
                                    }
                                    var n = document.getElementById("mx-login-container"),
                                        r = document.getElementById("mx-execute-login"),
                                        i = document.getElementById("mx-login-error");
                                    if (window.mx.isLoaded()) { document.getElementById("content").style.display = "none" }
                                    n.style.display = "flex", r.addEventListener(h, e)
                                }
                            },
                            afterLoginFn: function() {
                                function t() { window.mx.isLoaded() ? window.mx.reload() : window.mx.startup() }
                                if (c) {
                                    var e = function(n) { u.configure(n, function(n) { u.confirm(n, t, function() { e("PIN did not match. Try again!") }) }) };
                                    e("Set up a PIN")
                                } else t()
                            },
                            afterNavigationFn: function() { C() }
                        }, "" === s && "" === i && (window.dojoConfig.offline = a), "android" === cordova.platformId && (window.dojoConfig.ui.openUrlFn = function(t, e, n) { O(t, cordova.file.externalCacheDirectory + e, !1, {}, null).then(function(t) { cordova.InAppBrowser.open(t.toURL(), "_system") }).catch(function(t) { window.mx.ui.exception("Could not download file") }) }), window.cordova.wkwebview) {
                        var f = 0;
                        window.dojoConfig.data.onlineBackend = {
                            getImgUriFn: function(t, e, n) {
                                var r = new FileTransfer,
                                    i = cordova.file.tempDirectory + "img" + +new Date + "-" + f++;
                                t = "string" == typeof t ? t : t[0], r.download(t, i, function(t) {
                                    t.file(function(t) {
                                        var r = new FileReader;
                                        r.onload = function(t) { e(t.target.result) }, r.onerror = n, r.readAsDataURL(t)
                                    }, n)
                                }, n)
                            }
                        }
                    }
                    G.emit("onConfigReady", window.dojoConfig), F(e, t.cachebust, t.files.js), g(200, 20, function() { return "undefined" != typeof mx }, function() { x() || C(), T(e, t.cachebust, t.files.css), $("backbutton", Q, q), G.emit("onClientReady", window.mx), o() }, function() { l(new Error("App startup failed")) })
                })
            },
            j = window.sessionStorage.getItem("refreshData") ? "Synchronizing..." : "Starting app...",
            E = m(b, j),
            k = function(t) { return /^(?:[a-z]+:)?\/\//i.test(t) },
            x = function() { return mx.version && !mx.version.startsWith("6.8") },
            F = function(t, e, n) {
                var r = document.getElementsByTagName("head")[0];
                n.forEach(function(n) {
                    var i = document.createElement("script");
                    k(n) ? i.src = n : i.src = t + n + "?" + e, r.appendChild(i)
                })
            },
            T = function(t, e, n) {
                var r = document.getElementsByTagName("head")[0];
                n.forEach(function(n) {
                    var i = document.createElement("link");
                    i.rel = "stylesheet", k(n) ? i.href = n : i.href = t + n + "?" + e, r.appendChild(i)
                })
            },
            C = function() {
                var t = document.getElementById("mx-app");
                t && t.parentNode.removeChild(t);
                var e = document.querySelector("link[href='css/index.css']");
                e && e.parentNode.removeChild(e)
            },
            P = function() { document.getElementById("mx-loader-container").style.display = "none" },
            S = function() {
                function t(t) { _(n, { method: "get", timeout: 5e3, onLoad: t }) }
                var e = 20,
                    n = f + "components.json?" + +new Date;
                return new o(function(n, i) { t(function(o, s) { 200 === o ? n(JSON.parse(s)) : 404 === o ? n(r) : 503 === o && --e > 0 ? setTimeout(t, 5e3) : i() }) })
            },
            R = function() { return new o(function(t, n) { _(e + "components.json?" + +new Date, { method: "GET", onLoad: function(e, r) { try { r ? t(JSON.parse(r)) : n(new Error("components.json is not available or empty")) } catch (t) { n(t) } } }) }) },
            A = function(t) {
                return function(e) {
                    var n = void 0 === e.lengthComputable;
                    if (e.lengthComputable || n) {
                        var r = e.loaded / e.total * 100;
                        y(t + ": " + Math.round(r) + "%")
                    }
                }
            },
            O = function(t, e, n, r, i) {
                return new o(function(o, s) {
                    var a = new FileTransfer;
                    a.onprogress = i, a.download(t, e, o, s, n, r)
                })
            },
            I = function(t, e) { return O(t, e, !1, { headers: { "Accept-Encoding": "" } }, A("Updating app")) },
            L = m(I, "Updating app..."),
            D = function(t) { return new o(function(e, n) { window.resolveLocalFileSystemURI(t, function(t) { t.remove(e, n) }, n) }) },
            N = function(t) { return new o(function(e, n) { window.resolveLocalFileSystemURI(t, function(t) { t.removeRecursively(e, n) }, function(t) { t.code !== FileError.NOT_FOUND_ERR ? n(t) : e() }) }) },
            U = m(N, "Optimizing for your device..."),
            V = function(t, e) { return new o(function(n, r) { zip.unzip(t, e, function(t) { 0 === t ? n() : r() }, A("Optimizing for your device")) }) },
            H = function(t, n) {
                function r() { return V(n, e).catch(function(t) { throw U(e), t }) }

                function i() { return U(e).then(r).then(function() { D(n) }, function(t) { throw D(n), t }) }

                function o(t) { return R().caught(function(t) { throw new p("Could not synchronize with server. Make sure your app has an offline profile enabled when running in offline mode.") }) }
                return L(t, n).then(i, o)
            },
            M = function(n, r) {
                var i = encodeURI(n + "resources.zip"),
                    s = t + "resources.zip";
                return S().then(function(t) {
                    if (r(t)) {
                        var a = function() { return o.resolve([t, e]) },
                            u = function() { return H(i, s).then(a) },
                            c = function(e) { return t.cachebust == e.cachebust ? a() : u() };
                        return R().then(c, u)
                    }
                    return o.resolve([t, n])
                }, function() { return R().then(function(t) { return o.resolve([t, e]) }) })
            },
            B = function() {
                if (cordova.wkwebview) t = cordova.wkwebview.storageDir, n = cordova.wkwebview.storageDir;
                else {
                    if (!cordova.file) throw new Error("Failed to setup directory locations: unsupported platform");
                    t = cordova.file.dataDirectory, n = cordova.file.externalDataDirectory || cordova.file.dataDirectory
                }
                e = t + "resources/"
            },
            z = function(t) { return t instanceof p ? t.message : "Cannot initialize app." },
            Q = function(t) { navigator.app.exitApp() },
            q = function(t) { window.mx.ui.canMoveBack ? window.mx.ui.canMoveBack() ? window.history.back() : window.mx.session.destroySession ? window.mx.session.destroySession(function() { navigator.app.exitApp() }) : window.mx.session.logout(function() { navigator.app.exitApp() }) : window.history.back() },
            $ = function(t, e, n) { e && document.removeEventListener(t, e), n && document.addEventListener(t, n) },
            J = function() { window.open = function(t, e, n, r) { return /^(mailto:|sms:|tel:)/.test(t) ? cordova.InAppBrowser.open(t, "_system", n, r) : cordova.InAppBrowser.open(t, e, n, r) } },
            W = function(t, e, n, r, i) {
                function l() { M(f, p).spread(function(t, o) { return E(t, o, f, e, n, r, i) }).catch(h) }

                function h(t) { console.error(t), v(z(t)) }
                try {
                    r = !!r, f = t.replace(/\/?$/, "/"), J(), document.addEventListener("backbutton", Q), B();
                    var p = function(t) { return t.downloadResources || r };
                    if (i) {
                        var d = new s(c);
                        o.all([d.get(), a.get()]).spread(function(t, e) { t && e ? u.verify(l) : o.all([d.remove(), a.remove()]).then(l) })
                    } else l()
                } catch (t) { return void h(t) }
            },
            G = new i;
        return { initialize: W, onConfigReady: G.on.bind(G, "onConfigReady"), onClientReady: G.on.bind(G, "onClientReady") }
    }()
}, function(t, e) {
    t.exports = function() {
        return {
            loadJSON: function(t, e) {
                var n = new XMLHttpRequest;
                n.overrideMimeType("application/json"), n.open("GET", t, !0), n.onreadystatechange = function() { 4 == n.readyState && e(n.responseText) }, n.send(null)
            }
        }
    }()
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";

            function r(t) { "function" != typeof t && (t = new Function("" + t)); for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1]; var r = { callback: t, args: e }; return _[d] = r, p(d), d++ }

            function i(t) { delete _[t] }

            function o(t) {
                var e = t.callback,
                    n = t.args;
                switch (n.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(n[0]);
                        break;
                    case 2:
                        e(n[0], n[1]);
                        break;
                    case 3:
                        e(n[0], n[1], n[2]);
                        break;
                    default:
                        e.apply(void 0, n)
                }
            }

            function s(t) {
                if (v) setTimeout(s, 0, t);
                else { var e = _[t]; if (e) { v = !0; try { o(e) } finally { i(t), v = !1 } } }
            }

            function a() { p = function(t) { e.nextTick(function() { s(t) }) } }

            function u() {
                if (t.postMessage && !t.importScripts) {
                    var e = !0,
                        n = t.onmessage;
                    return t.onmessage = function() { e = !1 }, t.postMessage("", "*"), t.onmessage = n, e
                }
            }

            function c() {
                var e = "setImmediate$" + Math.random() + "$",
                    n = function(n) { n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && s(+n.data.slice(e.length)) };
                t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), p = function(n) { t.postMessage(e + n, "*") }
            }

            function l() {
                var t = new MessageChannel;
                t.port1.onmessage = function(t) { s(t.data) }, p = function(e) { t.port2.postMessage(e) }
            }

            function f() {
                var t = y.documentElement;
                p = function(e) {
                    var n = y.createElement("script");
                    n.onreadystatechange = function() { s(e), n.onreadystatechange = null, t.removeChild(n), n = null }, t.appendChild(n)
                }
            }

            function h() { p = function(t) { setTimeout(s, 0, t) } }
            if (!t.setImmediate) {
                var p, d = 1,
                    _ = {},
                    v = !1,
                    y = t.document,
                    m = Object.getPrototypeOf && Object.getPrototypeOf(t);
                m = m && m.setTimeout ? m : t, "[object process]" === {}.toString.call(t.process) ? a() : u() ? c() : t.MessageChannel ? l() : y && "onreadystatechange" in y.createElement("script") ? f() : h(), m.setImmediate = r, m.clearImmediate = i
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(5), n(4))
}, function(t, e, n) {
    function r(t, e) { this._id = t, this._clearFn = e }
    var i = Function.prototype.apply;
    e.setTimeout = function() { return new r(i.call(setTimeout, window, arguments), clearTimeout) }, e.setInterval = function() { return new r(i.call(setInterval, window, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function(t) { t && t.close() }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() { this._clearFn.call(window, this._id) }, e.enroll = function(t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() { t._onTimeout && t._onTimeout() }, e))
    }, n(10), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function(t, e) {
    function n() {}
    n.prototype = {
        on: function(t, e, n) { var r = this.e || (this.e = {}); return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this },
        once: function(t, e, n) {
            function r() { i.off(t, r), e.apply(n, arguments) }
            var i = this;
            return r._ = e, this.on(t, r, n)
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[t] || []).slice(),
                r = 0,
                i = n.length;
            for (r; r < i; r++) n[r].fn.apply(n[r].ctx, e);
            return this
        },
        off: function(t, e) {
            var n = this.e || (this.e = {}),
                r = n[t],
                i = [];
            if (r && e)
                for (var o = 0, s = r.length; o < s; o++) r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
            return i.length ? n[t] = i : delete n[t], this
        }
    }, t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function() { var t = function(t, e) { return window.localStorage.removeItem(e) }; return { set: function(t, e, n) { return window.localStorage.setItem(e, n) }, get: function(t, e) { return r.resolve(window.localStorage.getItem(e)) }, remove: t } }()
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function() { return { get: function() { return new r(function(t, e) { return cordova.getAppVersion.getPackageName(t) }) } } }()
}, function(t, e, n) {
    "use strict";
    var r, i = n(0),
        o = n(7),
        s = n(1),
        a = n(6),
        u = new a(s),
        c = void 0 === document.ontouchstart ? "click" : "touchstart",
        l = document.getElementById("mx-pin-container"),
        f = document.getElementById("mx-pin-error"),
        h = document.getElementById("mx-confirm-pin"),
        p = document.getElementById("mx-forgot-pin"),
        d = document.querySelectorAll("#mx-pin-container input");
    t.exports = function() {
        var t = function(t) {
                function e() { o.verify(s()).then(r, function() { o.getAttemptsLeft().then(function(t) { 0 === t ? n().then(r) : (a("Invalid PIN"), w()) }) }) }

                function n() { i.all([u.remove(), o.remove()]).then(r) }

                function r() { k(l), h.removeEventListener(c, e), p.removeEventListener(c, n), l.style.display = "", t && t() }
                a("Verify your PIN"), E(l), w(), h.addEventListener(c, e), p.addEventListener(c, n), p.style.display = "", l.style.display = "flex"
            },
            e = function(t, e) {
                function n() {
                    var t = s();
                    o.isValid(t) ? (h.removeEventListener(c, n), k(l), l.style.display = "", e && e(t)) : f.textContent = "The PIN you have submitted is invalid"
                }
                a(t), E(l), w(), p.style.display = "none", l.style.display = "flex", h.addEventListener(c, n)
            },
            n = function(t, e, n) {
                function r() { h.removeEventListener(c, i), k(l), l.style.display = "" }

                function i() {
                    var i = s();
                    i === t ? o.set(i).then(function() { r(), e && e() }) : (r(), n && n(new Error("PIN did not match")))
                }
                f.textContent = "Confirm your PIN", E(l), w(), p.style.display = "none", l.style.display = "flex", h.addEventListener(c, i)
            },
            s = function() { return [].slice.call(d).map(function(t) { return t.value }).join("") },
            a = function(t) { o.getAttemptsLeft().then(function(e) { f.textContent = t, 1 === e && (f.textContent += ". You have one more attempt") }) },
            _ = function(t) {
                var e = t.target;
                if (/^[0-9]{1}/.test(e.value) || (e.value = ""), e.value.length >= 1) {
                    e.value = e.value[0], r = setTimeout(function() { m(e, "password") }, 500);
                    for (var n = e; n = n.nextElementSibling;)
                        if ("input" === n.tagName.toLowerCase()) { m(n, "number"), n.focus(); break }
                    null == n && e.blur()
                }
            },
            v = function(t) { for (var e = t; e = e.previousElementSibling;) { if (null == t.nextElementSibling && "" !== t.value) { m(t, "password"); break } if ("input" === e.tagName.toLowerCase()) { m(e, "number"), e.focus(); break } } },
            y = function(t) {
                var e = t.target;
                if (8 === t.which) clearTimeout(r), v(e);
                else {
                    var n = e.previousElementSibling;
                    n && m(n, "password")
                }
            },
            m = function(t, e) { t.setAttribute("type", e) },
            g = function(t) { t.target.value = "", m(t.target, "number") },
            w = function() {
                [].slice.call(d).forEach(function(t) { t.value = "" })
            },
            b = function(t) { t.target.value = "" },
            j = function(t) { t.preventDefault() },
            E = function(t) { t.addEventListener("keyup", _), t.addEventListener("keydown", y), t.addEventListener("paste", j), t.addEventListener("touchstart", g), t.addEventListener("focus", b, !0) },
            k = function(t) { t.removeEventListener("keyup", _), t.removeEventListener("keydown", y), t.removeEventListener("paste", j), t.removeEventListener("touchstart", g), t.removeEventListener("focus", b, !0) };
        return { verify: t, configure: e, confirm: n }
    }()
}, function(t, e, n) {
    function r(t) { return n(i(t)) }

    function i(t) { var e = o[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
    var o = { "./index.css": 2, "./login.css": 3 };
    r.keys = function() { return Object.keys(o) }, r.resolve = i, t.exports = r, r.id = 16
}, function(t, e, n) {
    var r = n(8),
        i = n(9);
    document.addEventListener("deviceready", function() {
        i.loadJSON("settings.json", function(t) {
            var e = JSON.parse(t);
            r.initialize(e.url, e.hybridTabletProfile, e.hybridPhoneProfile, e.enableOffline, e.requirePin)
        })
    }), t.exports = r
}]);
//# sourceMappingURL=bundle.js.map