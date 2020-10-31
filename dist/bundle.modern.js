import t from "lodash/isNil";
import e from "lodash/forEach";
import n from "lodash/mapValues";
import r from "lodash/trim";
import o from "lodash/isEmpty";
import i from "lodash/trimStart";
import a from "lodash/trimEnd";
import { Base64 as c } from "js-base64";
import { chromium as u } from "playwright";
import s from "isomorphic-unfetch";
import l from "cheerio";
var f = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  p = {}.toString,
  h = function (t) {
    return p.call(t).slice(8, -1);
  },
  d = "".split,
  v = f(function () {
    return !Object("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == h(t) ? d.call(t, "") : Object(t);
      }
    : Object,
  g = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
  m = function (t) {
    return v(g(t));
  },
  y =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
function w(t, e, n) {
  return (
    t(
      (n = {
        path: e,
        exports: {},
        require: function (t, e) {
          return (function () {
            throw new Error(
              "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
            );
          })();
        },
      }),
      n.exports
    ),
    n.exports
  );
}
var b,
  x = function (t) {
    return t && t.Math == Math && t;
  },
  S =
    x("object" == typeof globalThis && globalThis) ||
    x("object" == typeof window && window) ||
    x("object" == typeof self && self) ||
    x("object" == typeof y && y) ||
    Function("return this")(),
  E = !f(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  O = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  },
  j = S.document,
  P = O(j) && O(j.createElement),
  T = function (t) {
    return P ? j.createElement(t) : {};
  },
  A =
    !E &&
    !f(function () {
      return (
        7 !=
        Object.defineProperty(T("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  R = function (t) {
    if (!O(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
  I = function (t, e) {
    if (!O(t)) return t;
    var n, r;
    if (e && "function" == typeof (n = t.toString) && !O((r = n.call(t))))
      return r;
    if ("function" == typeof (n = t.valueOf) && !O((r = n.call(t)))) return r;
    if (!e && "function" == typeof (n = t.toString) && !O((r = n.call(t))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  _ = Object.defineProperty,
  $ = {
    f: E
      ? _
      : function (t, e, n) {
          if ((R(t), (e = I(e, !0)), R(n), A))
            try {
              return _(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        },
  },
  k = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  },
  C = E
    ? function (t, e, n) {
        return $.f(t, e, k(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      },
  L = function (t, e) {
    try {
      C(S, t, e);
    } catch (n) {
      S[t] = e;
    }
    return e;
  },
  M = S["__core-js_shared__"] || L("__core-js_shared__", {}),
  N = w(function (t) {
    (t.exports = function (t, e) {
      return M[t] || (M[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  }),
  U = {}.hasOwnProperty,
  D = function (t, e) {
    return U.call(t, e);
  },
  F = 0,
  W = Math.random(),
  G = function (t) {
    return (
      "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++F + W).toString(36)
    );
  },
  V =
    !!Object.getOwnPropertySymbols &&
    !f(function () {
      return !String(Symbol());
    }),
  B = V && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  q = N("wks"),
  H = S.Symbol,
  K = B ? H : (H && H.withoutSetter) || G,
  X = function (t) {
    return D(q, t) || (q[t] = V && D(H, t) ? H[t] : K("Symbol." + t)), q[t];
  },
  Y = Math.ceil,
  z = Math.floor,
  J = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? z : Y)(t);
  },
  Q = Math.min,
  Z = function (t) {
    return t > 0 ? Q(J(t), 9007199254740991) : 0;
  },
  tt = Math.max,
  et = Math.min,
  nt = function (t) {
    return function (e, n, r) {
      var o,
        i = m(e),
        a = Z(i.length),
        c = (function (t, e) {
          var n = J(t);
          return n < 0 ? tt(n + e, 0) : et(n, e);
        })(r, a);
      if (t && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0;
      return !t && -1;
    };
  },
  rt = { includes: nt(!0), indexOf: nt(!1) },
  ot = {},
  it = rt.indexOf,
  at = function (t, e) {
    var n,
      r = m(t),
      o = 0,
      i = [];
    for (n in r) !D(ot, n) && D(r, n) && i.push(n);
    for (; e.length > o; ) D(r, (n = e[o++])) && (~it(i, n) || i.push(n));
    return i;
  },
  ct = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  ut =
    Object.keys ||
    function (t) {
      return at(t, ct);
    },
  st = E
    ? Object.defineProperties
    : function (t, e) {
        R(t);
        for (var n, r = ut(e), o = r.length, i = 0; o > i; )
          $.f(t, (n = r[i++]), e[n]);
        return t;
      },
  lt = S,
  ft = function (t) {
    return "function" == typeof t ? t : void 0;
  },
  pt = function (t, e) {
    return arguments.length < 2
      ? ft(lt[t]) || ft(S[t])
      : (lt[t] && lt[t][e]) || (S[t] && S[t][e]);
  },
  ht = pt("document", "documentElement"),
  dt = N("keys"),
  vt = function (t) {
    return dt[t] || (dt[t] = G(t));
  },
  gt = vt("IE_PROTO"),
  mt = function () {},
  yt = function (t) {
    return "<script>" + t + "</script>";
  },
  wt = function () {
    try {
      b = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e;
    wt = b
      ? (function (t) {
          t.write(yt("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(b)
      : (((e = T("iframe")).style.display = "none"),
        ht.appendChild(e),
        (e.src = String("javascript:")),
        (t = e.contentWindow.document).open(),
        t.write(yt("document.F=Object")),
        t.close(),
        t.F);
    for (var n = ct.length; n--; ) delete wt.prototype[ct[n]];
    return wt();
  };
ot[gt] = !0;
var bt =
    Object.create ||
    function (t, e) {
      var n;
      return (
        null !== t
          ? ((mt.prototype = R(t)),
            (n = new mt()),
            (mt.prototype = null),
            (n[gt] = t))
          : (n = wt()),
        void 0 === e ? n : st(n, e)
      );
    },
  xt = X("unscopables"),
  St = Array.prototype;
null == St[xt] && $.f(St, xt, { configurable: !0, value: bt(null) });
var Et = function (t) {
    St[xt][t] = !0;
  },
  Ot = {},
  jt = Function.toString;
"function" != typeof M.inspectSource &&
  (M.inspectSource = function (t) {
    return jt.call(t);
  });
var Pt,
  Tt,
  At,
  Rt = M.inspectSource,
  It = S.WeakMap;
if ("function" == typeof It && /native code/.test(Rt(It))) {
  var _t = new (0, S.WeakMap)(),
    $t = _t.get,
    kt = _t.has,
    Ct = _t.set;
  (Pt = function (t, e) {
    return Ct.call(_t, t, e), e;
  }),
    (Tt = function (t) {
      return $t.call(_t, t) || {};
    }),
    (At = function (t) {
      return kt.call(_t, t);
    });
} else {
  var Lt = vt("state");
  (ot[Lt] = !0),
    (Pt = function (t, e) {
      return C(t, Lt, e), e;
    }),
    (Tt = function (t) {
      return D(t, Lt) ? t[Lt] : {};
    }),
    (At = function (t) {
      return D(t, Lt);
    });
}
var Mt,
  Nt,
  Ut,
  Dt = {
    set: Pt,
    get: Tt,
    has: At,
    enforce: function (t) {
      return At(t) ? Tt(t) : Pt(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!O(e) || (n = Tt(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    },
  },
  Ft = {}.propertyIsEnumerable,
  Wt = Object.getOwnPropertyDescriptor,
  Gt = {
    f:
      Wt && !Ft.call({ 1: 2 }, 1)
        ? function (t) {
            var e = Wt(this, t);
            return !!e && e.enumerable;
          }
        : Ft,
  },
  Vt = Object.getOwnPropertyDescriptor,
  Bt = {
    f: E
      ? Vt
      : function (t, e) {
          if (((t = m(t)), (e = I(e, !0)), A))
            try {
              return Vt(t, e);
            } catch (t) {}
          if (D(t, e)) return k(!Gt.f.call(t, e), t[e]);
        },
  },
  qt = w(function (t) {
    var e = Dt.get,
      n = Dt.enforce,
      r = String(String).split("String");
    (t.exports = function (t, e, o, i) {
      var a = !!i && !!i.unsafe,
        c = !!i && !!i.enumerable,
        u = !!i && !!i.noTargetGet;
      "function" == typeof o &&
        ("string" != typeof e || D(o, "name") || C(o, "name", e),
        (n(o).source = r.join("string" == typeof e ? e : ""))),
        t !== S
          ? (a ? !u && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = o) : C(t, e, o))
          : c
          ? (t[e] = o)
          : L(e, o);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && e(this).source) || Rt(this);
    });
  }),
  Ht = ct.concat("length", "prototype"),
  Kt = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return at(t, Ht);
      },
  },
  Xt = { f: Object.getOwnPropertySymbols },
  Yt =
    pt("Reflect", "ownKeys") ||
    function (t) {
      var e = Kt.f(R(t)),
        n = Xt.f;
      return n ? e.concat(n(t)) : e;
    },
  zt = function (t, e) {
    for (var n = Yt(e), r = $.f, o = Bt.f, i = 0; i < n.length; i++) {
      var a = n[i];
      D(t, a) || r(t, a, o(e, a));
    }
  },
  Jt = /#|\.prototype\./,
  Qt = function (t, e) {
    var n = te[Zt(t)];
    return n == ne || (n != ee && ("function" == typeof e ? f(e) : !!e));
  },
  Zt = (Qt.normalize = function (t) {
    return String(t).replace(Jt, ".").toLowerCase();
  }),
  te = (Qt.data = {}),
  ee = (Qt.NATIVE = "N"),
  ne = (Qt.POLYFILL = "P"),
  re = Qt,
  oe = Bt.f,
  ie = function (t, e) {
    var n,
      r,
      o,
      i,
      a,
      c = t.target,
      u = t.global,
      s = t.stat;
    if ((n = u ? S : s ? S[c] || L(c, {}) : (S[c] || {}).prototype))
      for (r in e) {
        if (
          ((i = e[r]),
          (o = t.noTargetGet ? (a = oe(n, r)) && a.value : n[r]),
          !re(u ? r : c + (s ? "." : "#") + r, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          zt(i, o);
        }
        (t.sham || (o && o.sham)) && C(i, "sham", !0), qt(n, r, i, t);
      }
  },
  ae = function (t) {
    return Object(g(t));
  },
  ce = !f(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  ue = vt("IE_PROTO"),
  se = Object.prototype,
  le = ce
    ? Object.getPrototypeOf
    : function (t) {
        return (
          (t = ae(t)),
          D(t, ue)
            ? t[ue]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? se
            : null
        );
      },
  fe = X("iterator"),
  pe = !1;
[].keys &&
  ("next" in (Ut = [].keys())
    ? (Nt = le(le(Ut))) !== Object.prototype && (Mt = Nt)
    : (pe = !0)),
  null == Mt && (Mt = {}),
  D(Mt, fe) ||
    C(Mt, fe, function () {
      return this;
    });
var he = { IteratorPrototype: Mt, BUGGY_SAFARI_ITERATORS: pe },
  de = $.f,
  ve = X("toStringTag"),
  ge = function (t, e, n) {
    t &&
      !D((t = n ? t : t.prototype), ve) &&
      de(t, ve, { configurable: !0, value: e });
  },
  me = he.IteratorPrototype,
  ye = function () {
    return this;
  },
  we =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var t,
            e = !1,
            n = {};
          try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
              .set).call(n, []),
              (e = n instanceof Array);
          } catch (t) {}
          return function (n, r) {
            return (
              R(n),
              (function (t) {
                if (!O(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype");
              })(r),
              e ? t.call(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  be = he.IteratorPrototype,
  xe = he.BUGGY_SAFARI_ITERATORS,
  Se = X("iterator"),
  Ee = function () {
    return this;
  },
  Oe = Dt.set,
  je = Dt.getterFor("Array Iterator"),
  Pe = (function (t, e, n, r, o, i, a) {
    !(function (t, e, n) {
      (t.prototype = bt(me, {
        next: k(1, function () {
          var t = je(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
          return !e || r >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: e[r], done: !1 }
            : { value: [r, e[r]], done: !1 };
        }),
      })),
        ge(t, "Array Iterator", !1),
        (Ot["Array Iterator"] = ye);
    })(n);
    var c,
      u,
      s,
      l = function (t) {
        if ("values" === t && d) return d;
        if (!xe && t in p) return p[t];
        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, t);
            };
        }
        return function () {
          return new n(this);
        };
      },
      f = !1,
      p = t.prototype,
      h = p[Se] || p["@@iterator"] || p.values,
      d = (!xe && h) || l("values"),
      v = p.entries || h;
    if (
      (v &&
        ((c = le(v.call(new t()))),
        be !== Object.prototype &&
          c.next &&
          (le(c) !== be &&
            (we ? we(c, be) : "function" != typeof c[Se] && C(c, Se, Ee)),
          ge(c, "Array Iterator", !0))),
      h &&
        "values" !== h.name &&
        ((f = !0),
        (d = function () {
          return h.call(this);
        })),
      p[Se] !== d && C(p, Se, d),
      (Ot.Array = d),
      void (u = {
        values: l("values"),
        keys: l("keys"),
        entries: l("entries"),
      }))
    )
      for (s in u) (xe || f || !(s in p)) && qt(p, s, u[s]);
    else ie({ target: "Array", proto: !0, forced: xe || f }, u);
    return u;
  })(Array, 0, function (t, e) {
    Oe(this, { type: "Array Iterator", target: m(t), index: 0, kind: e });
  });
(Ot.Arguments = Ot.Array), Et("keys"), Et("values"), Et("entries");
var Te = S.Promise,
  Ae = X("species"),
  Re = function (t) {
    if ("function" != typeof t)
      throw TypeError(String(t) + " is not a function");
    return t;
  },
  Ie = X("iterator"),
  _e = Array.prototype,
  $e = function (t, e, n) {
    if ((Re(t), void 0 === e)) return t;
    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (n) {
          return t.call(e, n);
        };
      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };
      case 3:
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  },
  ke = {};
ke[X("toStringTag")] = "z";
var Ce = "[object z]" === String(ke),
  Le = X("toStringTag"),
  Me =
    "Arguments" ==
    h(
      (function () {
        return arguments;
      })()
    ),
  Ne = Ce
    ? h
    : function (t) {
        var e, n, r;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (n = (function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = Object(t)), Le))
          ? n
          : Me
          ? h(e)
          : "Object" == (r = h(e)) && "function" == typeof e.callee
          ? "Arguments"
          : r;
      },
  Ue = X("iterator"),
  De = function (t, e, n, r) {
    try {
      return r ? e(R(n)[0], n[1]) : e(n);
    } catch (e) {
      var o = t.return;
      throw (void 0 !== o && R(o.call(t)), e);
    }
  },
  Fe = w(function (t) {
    var e = function (t, e) {
      (this.stopped = t), (this.result = e);
    };
    (t.exports = function (t, n, r, o, i) {
      var a,
        c,
        u,
        s,
        l,
        f,
        p,
        h,
        d = $e(n, r, o ? 2 : 1);
      if (i) a = t;
      else {
        if (
          "function" !=
          typeof (c = (function (t) {
            if (null != t) return t[Ue] || t["@@iterator"] || Ot[Ne(t)];
          })(t))
        )
          throw TypeError("Target is not iterable");
        if (void 0 !== (h = c) && (Ot.Array === h || _e[Ie] === h)) {
          for (u = 0, s = Z(t.length); s > u; u++)
            if ((l = o ? d(R((p = t[u]))[0], p[1]) : d(t[u])) && l instanceof e)
              return l;
          return new e(!1);
        }
        a = c.call(t);
      }
      for (f = a.next; !(p = f.call(a)).done; )
        if (
          "object" == typeof (l = De(a, d, p.value, o)) &&
          l &&
          l instanceof e
        )
          return l;
      return new e(!1);
    }).stop = function (t) {
      return new e(!0, t);
    };
  }),
  We = X("iterator"),
  Ge = !1;
try {
  var Ve = 0,
    Be = {
      next: function () {
        return { done: !!Ve++ };
      },
      return: function () {
        Ge = !0;
      },
    };
  (Be[We] = function () {
    return this;
  }),
    Array.from(Be, function () {
      throw 2;
    });
} catch (t) {}
var qe,
  He,
  Ke,
  Xe = X("species"),
  Ye = function (t, e) {
    var n,
      r = R(t).constructor;
    return void 0 === r || null == (n = R(r)[Xe]) ? e : Re(n);
  },
  ze = pt("navigator", "userAgent") || "",
  Je = /(iphone|ipod|ipad).*applewebkit/i.test(ze),
  Qe = S.location,
  Ze = S.setImmediate,
  tn = S.clearImmediate,
  en = S.process,
  nn = S.MessageChannel,
  rn = S.Dispatch,
  on = 0,
  an = {},
  cn = function (t) {
    if (an.hasOwnProperty(t)) {
      var e = an[t];
      delete an[t], e();
    }
  },
  un = function (t) {
    return function () {
      cn(t);
    };
  },
  sn = function (t) {
    cn(t.data);
  },
  ln = function (t) {
    S.postMessage(t + "", Qe.protocol + "//" + Qe.host);
  };
(Ze && tn) ||
  ((Ze = function (t) {
    for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
    return (
      (an[++on] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }),
      qe(on),
      on
    );
  }),
  (tn = function (t) {
    delete an[t];
  }),
  "process" == h(en)
    ? (qe = function (t) {
        en.nextTick(un(t));
      })
    : rn && rn.now
    ? (qe = function (t) {
        rn.now(un(t));
      })
    : nn && !Je
    ? ((Ke = (He = new nn()).port2),
      (He.port1.onmessage = sn),
      (qe = $e(Ke.postMessage, Ke, 1)))
    : !S.addEventListener ||
      "function" != typeof postMessage ||
      S.importScripts ||
      f(ln) ||
      "file:" === Qe.protocol
    ? (qe =
        "onreadystatechange" in T("script")
          ? function (t) {
              ht.appendChild(T("script")).onreadystatechange = function () {
                ht.removeChild(this), cn(t);
              };
            }
          : function (t) {
              setTimeout(un(t), 0);
            })
    : ((qe = ln), S.addEventListener("message", sn, !1)));
var fn,
  pn,
  hn,
  dn,
  vn,
  gn,
  mn,
  yn,
  wn = { set: Ze, clear: tn },
  bn = Bt.f,
  xn = wn.set,
  Sn = S.MutationObserver || S.WebKitMutationObserver,
  En = S.process,
  On = S.Promise,
  jn = "process" == h(En),
  Pn = bn(S, "queueMicrotask"),
  Tn = Pn && Pn.value;
Tn ||
  ((fn = function () {
    var t, e;
    for (jn && (t = En.domain) && t.exit(); pn; ) {
      (e = pn.fn), (pn = pn.next);
      try {
        e();
      } catch (t) {
        throw (pn ? dn() : (hn = void 0), t);
      }
    }
    (hn = void 0), t && t.enter();
  }),
  jn
    ? (dn = function () {
        En.nextTick(fn);
      })
    : Sn && !Je
    ? ((vn = !0),
      (gn = document.createTextNode("")),
      new Sn(fn).observe(gn, { characterData: !0 }),
      (dn = function () {
        gn.data = vn = !vn;
      }))
    : On && On.resolve
    ? ((mn = On.resolve(void 0)),
      (yn = mn.then),
      (dn = function () {
        yn.call(mn, fn);
      }))
    : (dn = function () {
        xn.call(S, fn);
      }));
var An,
  Rn,
  In =
    Tn ||
    function (t) {
      var e = { fn: t, next: void 0 };
      hn && (hn.next = e), pn || ((pn = e), dn()), (hn = e);
    },
  _n = function (t) {
    var e, n;
    (this.promise = new t(function (t, r) {
      if (void 0 !== e || void 0 !== n)
        throw TypeError("Bad Promise constructor");
      (e = t), (n = r);
    })),
      (this.resolve = Re(e)),
      (this.reject = Re(n));
  },
  $n = {
    f: function (t) {
      return new _n(t);
    },
  },
  kn = function (t, e) {
    if ((R(t), O(e) && e.constructor === t)) return e;
    var n = $n.f(t);
    return (0, n.resolve)(e), n.promise;
  },
  Cn = function (t) {
    try {
      return { error: !1, value: t() };
    } catch (t) {
      return { error: !0, value: t };
    }
  },
  Ln = S.process,
  Mn = Ln && Ln.versions,
  Nn = Mn && Mn.v8;
Nn
  ? (Rn = (An = Nn.split("."))[0] + An[1])
  : ze &&
    (!(An = ze.match(/Edge\/(\d+)/)) || An[1] >= 74) &&
    (An = ze.match(/Chrome\/(\d+)/)) &&
    (Rn = An[1]);
var Un,
  Dn,
  Fn,
  Wn,
  Gn,
  Vn = Rn && +Rn,
  Bn = wn.set,
  qn = X("species"),
  Hn = Dt.get,
  Kn = Dt.set,
  Xn = Dt.getterFor("Promise"),
  Yn = Te,
  zn = S.TypeError,
  Jn = S.document,
  Qn = S.process,
  Zn = pt("fetch"),
  tr = $n.f,
  er = tr,
  nr = "process" == h(Qn),
  rr = !!(Jn && Jn.createEvent && S.dispatchEvent),
  or = re("Promise", function () {
    if (Rt(Yn) === String(Yn)) {
      if (66 === Vn) return !0;
      if (!nr && "function" != typeof PromiseRejectionEvent) return !0;
    }
    if (Vn >= 51 && /native code/.test(Yn)) return !1;
    var t = Yn.resolve(1),
      e = function (t) {
        t(
          function () {},
          function () {}
        );
      };
    return (
      ((t.constructor = {})[qn] = e), !(t.then(function () {}) instanceof e)
    );
  }),
  ir =
    or ||
    !(function (t, e) {
      if (!Ge) return !1;
      var n = !1;
      try {
        var r = {};
        (r[We] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          Yn.all(r).catch(function () {});
      } catch (t) {}
      return n;
    })(),
  ar = function (t) {
    var e;
    return !(!O(t) || "function" != typeof (e = t.then)) && e;
  },
  cr = function (t, e, n) {
    if (!e.notified) {
      e.notified = !0;
      var r = e.reactions;
      In(function () {
        for (var o = e.value, i = 1 == e.state, a = 0; r.length > a; ) {
          var c,
            u,
            s,
            l = r[a++],
            f = i ? l.ok : l.fail,
            p = l.resolve,
            h = l.reject,
            d = l.domain;
          try {
            f
              ? (i || (2 === e.rejection && fr(t, e), (e.rejection = 1)),
                !0 === f
                  ? (c = o)
                  : (d && d.enter(), (c = f(o)), d && (d.exit(), (s = !0))),
                c === l.promise
                  ? h(zn("Promise-chain cycle"))
                  : (u = ar(c))
                  ? u.call(c, p, h)
                  : p(c))
              : h(o);
          } catch (t) {
            d && !s && d.exit(), h(t);
          }
        }
        (e.reactions = []), (e.notified = !1), n && !e.rejection && sr(t, e);
      });
    }
  },
  ur = function (t, e, n) {
    var r, o;
    rr
      ? (((r = Jn.createEvent("Event")).promise = e),
        (r.reason = n),
        r.initEvent(t, !1, !0),
        S.dispatchEvent(r))
      : (r = { promise: e, reason: n }),
      (o = S["on" + t])
        ? o(r)
        : "unhandledrejection" === t &&
          (function (t, e) {
            var n = S.console;
            n &&
              n.error &&
              (1 === arguments.length ? n.error(t) : n.error(t, e));
          })("Unhandled promise rejection", n);
  },
  sr = function (t, e) {
    Bn.call(S, function () {
      var n,
        r = e.value;
      if (
        lr(e) &&
        ((n = Cn(function () {
          nr
            ? Qn.emit("unhandledRejection", r, t)
            : ur("unhandledrejection", t, r);
        })),
        (e.rejection = nr || lr(e) ? 2 : 1),
        n.error)
      )
        throw n.value;
    });
  },
  lr = function (t) {
    return 1 !== t.rejection && !t.parent;
  },
  fr = function (t, e) {
    Bn.call(S, function () {
      nr ? Qn.emit("rejectionHandled", t) : ur("rejectionhandled", t, e.value);
    });
  },
  pr = function (t, e, n, r) {
    return function (o) {
      t(e, n, o, r);
    };
  },
  hr = function (t, e, n, r) {
    e.done ||
      ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), cr(t, e, !0));
  },
  dr = function (t, e, n, r) {
    if (!e.done) {
      (e.done = !0), r && (e = r);
      try {
        if (t === n) throw zn("Promise can't be resolved itself");
        var o = ar(n);
        o
          ? In(function () {
              var r = { done: !1 };
              try {
                o.call(n, pr(dr, t, r, e), pr(hr, t, r, e));
              } catch (n) {
                hr(t, r, n, e);
              }
            })
          : ((e.value = n), (e.state = 1), cr(t, e, !1));
      } catch (n) {
        hr(t, { done: !1 }, n, e);
      }
    }
  };
or &&
  ((Yn = function (t) {
    !(function (t, e, n) {
      if (!(t instanceof Yn)) throw TypeError("Incorrect Promise invocation");
    })(this),
      Re(t),
      Un.call(this);
    var e = Hn(this);
    try {
      t(pr(dr, this, e), pr(hr, this, e));
    } catch (t) {
      hr(this, e, t);
    }
  }),
  ((Un = function (t) {
    Kn(this, {
      type: "Promise",
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    });
  }).prototype = (function (t, e, n) {
    for (var r in e) qt(t, r, e[r], void 0);
    return t;
  })(Yn.prototype, {
    then: function (t, e) {
      var n = Xn(this),
        r = tr(Ye(this, Yn));
      return (
        (r.ok = "function" != typeof t || t),
        (r.fail = "function" == typeof e && e),
        (r.domain = nr ? Qn.domain : void 0),
        (n.parent = !0),
        n.reactions.push(r),
        0 != n.state && cr(this, n, !1),
        r.promise
      );
    },
    catch: function (t) {
      return this.then(void 0, t);
    },
  })),
  (Dn = function () {
    var t = new Un(),
      e = Hn(t);
    (this.promise = t),
      (this.resolve = pr(dr, t, e)),
      (this.reject = pr(hr, t, e));
  }),
  ($n.f = tr = function (t) {
    return t === Yn || t === Fn ? new Dn(t) : er(t);
  }),
  "function" == typeof Te &&
    ((Wn = Te.prototype.then),
    qt(
      Te.prototype,
      "then",
      function (t, e) {
        var n = this;
        return new Yn(function (t, e) {
          Wn.call(n, t, e);
        }).then(t, e);
      },
      { unsafe: !0 }
    ),
    "function" == typeof Zn &&
      ie(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (t) {
            return kn(Yn, Zn.apply(S, arguments));
          },
        }
      ))),
  ie({ global: !0, wrap: !0, forced: or }, { Promise: Yn }),
  ge(Yn, "Promise", !1),
  (Gn = pt("Promise")),
  E &&
    Gn &&
    !Gn[Ae] &&
    (0, $.f)(Gn, Ae, {
      configurable: !0,
      get: function () {
        return this;
      },
    }),
  (Fn = pt("Promise")),
  ie(
    { target: "Promise", stat: !0, forced: or },
    {
      reject: function (t) {
        var e = tr(this);
        return e.reject.call(void 0, t), e.promise;
      },
    }
  ),
  ie(
    { target: "Promise", stat: !0, forced: or },
    {
      resolve: function (t) {
        return kn(this, t);
      },
    }
  ),
  ie(
    { target: "Promise", stat: !0, forced: ir },
    {
      all: function (t) {
        var e = this,
          n = tr(e),
          r = n.resolve,
          o = n.reject,
          i = Cn(function () {
            var n = Re(e.resolve),
              i = [],
              a = 0,
              c = 1;
            Fe(t, function (t) {
              var u = a++,
                s = !1;
              i.push(void 0),
                c++,
                n.call(e, t).then(function (t) {
                  s || ((s = !0), (i[u] = t), --c || r(i));
                }, o);
            }),
              --c || r(i);
          });
        return i.error && o(i.value), n.promise;
      },
      race: function (t) {
        var e = this,
          n = tr(e),
          r = n.reject,
          o = Cn(function () {
            var o = Re(e.resolve);
            Fe(t, function (t) {
              o.call(e, t).then(n.resolve, r);
            });
          });
        return o.error && r(o.value), n.promise;
      },
    }
  );
var vr,
  gr = X("match"),
  mr = function (t) {
    var e;
    return O(t) && (void 0 !== (e = t[gr]) ? !!e : "RegExp" == h(t));
  },
  yr = function (t) {
    if (mr(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  },
  wr = X("match"),
  br = function (t) {
    var e = /./;
    try {
      "/./"[t](e);
    } catch (n) {
      try {
        return (e[wr] = !1), "/./"[t](e);
      } catch (t) {}
    }
    return !1;
  },
  xr = Bt.f,
  Sr = "".startsWith,
  Er = Math.min,
  Or = br("startsWith"),
  jr = !(Or || ((vr = xr(String.prototype, "startsWith")), !vr || vr.writable));
ie(
  { target: "String", proto: !0, forced: !jr && !Or },
  {
    startsWith: function (t) {
      var e = String(g(this));
      yr(t);
      var n = Z(Er(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        r = String(t);
      return Sr ? Sr.call(e, r, n) : e.slice(n, n + r.length) === r;
    },
  }
);
var Pr = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  Tr = X("iterator"),
  Ar = X("toStringTag"),
  Rr = Pe.values;
for (var Ir in Pr) {
  var _r = S[Ir],
    $r = _r && _r.prototype;
  if ($r) {
    if ($r[Tr] !== Rr)
      try {
        C($r, Tr, Rr);
      } catch (t) {
        $r[Tr] = Rr;
      }
    if (($r[Ar] || C($r, Ar, Ir), Pr[Ir]))
      for (var kr in Pe)
        if ($r[kr] !== Pe[kr])
          try {
            C($r, kr, Pe[kr]);
          } catch (t) {
            $r[kr] = Pe[kr];
          }
  }
}
var Cr = function () {
    var t = R(this),
      e = "";
    return (
      t.global && (e += "g"),
      t.ignoreCase && (e += "i"),
      t.multiline && (e += "m"),
      t.dotAll && (e += "s"),
      t.unicode && (e += "u"),
      t.sticky && (e += "y"),
      e
    );
  },
  Lr = RegExp.prototype,
  Mr = Lr.toString;
(f(function () {
  return "/a/b" != Mr.call({ source: "a", flags: "b" });
}) ||
  "toString" != Mr.name) &&
  qt(
    RegExp.prototype,
    "toString",
    function () {
      var t = R(this),
        e = String(t.source),
        n = t.flags;
      return (
        "/" +
        e +
        "/" +
        String(
          void 0 === n && t instanceof RegExp && !("flags" in Lr)
            ? Cr.call(t)
            : n
        )
      );
    },
    { unsafe: !0 }
  );
var Nr = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ur = "[" + Nr + "]",
  Dr = RegExp("^" + Ur + Ur + "*"),
  Fr = RegExp(Ur + Ur + "*$"),
  Wr = function (t) {
    return function (e) {
      var n = String(g(e));
      return (
        1 & t && (n = n.replace(Dr, "")), 2 & t && (n = n.replace(Fr, "")), n
      );
    };
  },
  Gr = (Wr(1), Wr(2), Wr(3));
function Vr(t) {
  return r(null == t ? void 0 : t.trim(), "​");
}
ie(
  {
    target: "String",
    proto: !0,
    forced: f(function () {
      return !!Nr.trim() || "​᠎" != "​᠎".trim() || "trim" !== Nr.trim.name;
    }),
  },
  {
    trim: function () {
      return Gr(this);
    },
  }
);
const Br =
  !(
    "[object process]" ===
    Object.prototype.toString.call("undefined" != typeof process ? process : 0)
  ) && "undefined" != typeof window;
function qr(t, e) {
  return RegExp(t, e);
}
var Hr,
  Kr,
  Xr = {
    UNSUPPORTED_Y: f(function () {
      var t = qr("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    }),
    BROKEN_CARET: f(function () {
      var t = qr("^r", "gy");
      return (t.lastIndex = 2), null != t.exec("str");
    }),
  },
  Yr = RegExp.prototype.exec,
  zr = String.prototype.replace,
  Jr = Yr,
  Qr =
    ((Kr = /b*/g),
    Yr.call((Hr = /a/), "a"),
    Yr.call(Kr, "a"),
    0 !== Hr.lastIndex || 0 !== Kr.lastIndex),
  Zr = Xr.UNSUPPORTED_Y || Xr.BROKEN_CARET,
  to = void 0 !== /()??/.exec("")[1];
(Qr || to || Zr) &&
  (Jr = function (t) {
    var e,
      n,
      r,
      o,
      i = this,
      a = Zr && i.sticky,
      c = Cr.call(i),
      u = i.source,
      s = 0,
      l = t;
    return (
      a &&
        (-1 === (c = c.replace("y", "")).indexOf("g") && (c += "g"),
        (l = String(t).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline || (i.multiline && "\n" !== t[i.lastIndex - 1])) &&
          ((u = "(?: " + u + ")"), (l = " " + l), s++),
        (n = new RegExp("^(?:" + u + ")", c))),
      to && (n = new RegExp("^" + u + "$(?!\\s)", c)),
      Qr && (e = i.lastIndex),
      (r = Yr.call(a ? n : i, l)),
      a
        ? r
          ? ((r.input = r.input.slice(s)),
            (r[0] = r[0].slice(s)),
            (r.index = i.lastIndex),
            (i.lastIndex += r[0].length))
          : (i.lastIndex = 0)
        : Qr && r && (i.lastIndex = i.global ? r.index + r[0].length : e),
      to &&
        r &&
        r.length > 1 &&
        zr.call(r[0], n, function () {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (r[o] = void 0);
        }),
      r
    );
  });
var eo = Jr;
ie({ target: "RegExp", proto: !0, forced: /./.exec !== eo }, { exec: eo });
var no = X("species"),
  ro = !f(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: "7" }), t;
      }),
      "7" !== "".replace(t, "$<a>")
    );
  }),
  oo = "$0" === "a".replace(/./, "$0"),
  io = X("replace"),
  ao = !!/./[io] && "" === /./[io]("a", "$0"),
  co = !f(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var n = "ab".split(t);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  }),
  uo = function (t, e, n, r) {
    var o = X(t),
      i = !f(function () {
        var e = {};
        return (
          (e[o] = function () {
            return 7;
          }),
          7 != ""[t](e)
        );
      }),
      a =
        i &&
        !f(function () {
          var e = !1,
            n = /a/;
          return (
            "split" === t &&
              (((n = {}).constructor = {}),
              (n.constructor[no] = function () {
                return n;
              }),
              (n.flags = ""),
              (n[o] = /./[o])),
            (n.exec = function () {
              return (e = !0), null;
            }),
            n[o](""),
            !e
          );
        });
    if (
      !i ||
      !a ||
      ("replace" === t && (!ro || !oo || ao)) ||
      ("split" === t && !co)
    ) {
      var c = /./[o],
        u = n(
          o,
          ""[t],
          function (t, e, n, r, o) {
            return e.exec === eo
              ? i && !o
                ? { done: !0, value: c.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: oo,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ao,
          }
        ),
        s = u[1];
      qt(String.prototype, t, u[0]),
        qt(
          RegExp.prototype,
          o,
          2 == e
            ? function (t, e) {
                return s.call(t, this, e);
              }
            : function (t) {
                return s.call(t, this);
              }
        );
    }
    r && C(RegExp.prototype[o], "sham", !0);
  },
  so = function (t) {
    return function (e, n) {
      var r,
        o,
        i = String(g(e)),
        a = J(n),
        c = i.length;
      return a < 0 || a >= c
        ? t
          ? ""
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
          r > 56319 ||
          a + 1 === c ||
          (o = i.charCodeAt(a + 1)) < 56320 ||
          o > 57343
        ? t
          ? i.charAt(a)
          : r
        : t
        ? i.slice(a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  lo = (so(!1), so(!0)),
  fo = function (t, e, n) {
    return e + (n ? lo(t, e).length : 1);
  },
  po = function (t, e) {
    var n = t.exec;
    if ("function" == typeof n) {
      var r = n.call(t, e);
      if ("object" != typeof r)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        );
      return r;
    }
    if ("RegExp" !== h(t))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return eo.call(t, e);
  },
  ho = Math.max,
  vo = Math.min,
  go = Math.floor,
  mo = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  yo = /\$([$&'`]|\d\d?)/g;
uo("replace", 2, function (t, e, n, r) {
  var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = r.REPLACE_KEEPS_$0,
    a = o ? "$" : "$0";
  return [
    function (n, r) {
      var o = g(this),
        i = null == n ? void 0 : n[t];
      return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r);
    },
    function (t, r) {
      if ((!o && i) || ("string" == typeof r && -1 === r.indexOf(a))) {
        var u = n(e, t, this, r);
        if (u.done) return u.value;
      }
      var s = R(t),
        l = String(this),
        f = "function" == typeof r;
      f || (r = String(r));
      var p = s.global;
      if (p) {
        var h = s.unicode;
        s.lastIndex = 0;
      }
      for (var d = []; ; ) {
        var v = po(s, l);
        if (null === v) break;
        if ((d.push(v), !p)) break;
        "" === String(v[0]) && (s.lastIndex = fo(l, Z(s.lastIndex), h));
      }
      for (var g, m = "", y = 0, w = 0; w < d.length; w++) {
        v = d[w];
        for (
          var b = String(v[0]),
            x = ho(vo(J(v.index), l.length), 0),
            S = [],
            E = 1;
          E < v.length;
          E++
        )
          S.push(void 0 === (g = v[E]) ? g : String(g));
        var O = v.groups;
        if (f) {
          var j = [b].concat(S, x, l);
          void 0 !== O && j.push(O);
          var P = String(r.apply(void 0, j));
        } else P = c(b, l, x, S, O, r);
        x >= y && ((m += l.slice(y, x) + P), (y = x + b.length));
      }
      return m + l.slice(y);
    },
  ];
  function c(t, n, r, o, i, a) {
    var c = r + t.length,
      u = o.length,
      s = yo;
    return (
      void 0 !== i && ((i = ae(i)), (s = mo)),
      e.call(a, s, function (e, a) {
        var s;
        switch (a.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return n.slice(0, r);
          case "'":
            return n.slice(c);
          case "<":
            s = i[a.slice(1, -1)];
            break;
          default:
            var l = +a;
            if (0 === l) return e;
            if (l > u) {
              var f = go(l / 10);
              return 0 === f
                ? e
                : f <= u
                ? void 0 === o[f - 1]
                  ? a.charAt(1)
                  : o[f - 1] + a.charAt(1)
                : e;
            }
            s = o[l - 1];
        }
        return void 0 === s ? "" : s;
      })
    );
  }
});
var wo,
  bo = Object.defineProperty,
  xo = {},
  So = function (t) {
    throw t;
  },
  Eo = rt.indexOf,
  Oo = [].indexOf,
  jo = !!Oo && 1 / [1].indexOf(1, -0) < 0,
  Po =
    !!(wo = [].indexOf) &&
    f(function () {
      wo.call(
        null,
        function () {
          throw 1;
        },
        1
      );
    }),
  To = (function (t, e) {
    if (D(xo, "indexOf")) return xo.indexOf;
    e || (e = {});
    var n = [].indexOf,
      r = !!D(e, "ACCESSORS") && e.ACCESSORS,
      o = D(e, 0) ? e[0] : So,
      i = D(e, 1) ? e[1] : void 0;
    return (xo.indexOf =
      !!n &&
      !f(function () {
        if (r && !E) return !0;
        var t = { length: -1 };
        r ? bo(t, 1, { enumerable: !0, get: So }) : (t[1] = 1), n.call(t, o, i);
      }));
  })(0, { ACCESSORS: !0, 1: 0 });
ie(
  { target: "Array", proto: !0, forced: jo || !Po || !To },
  {
    indexOf: function (t) {
      return jo
        ? Oo.apply(this, arguments) || 0
        : Eo(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Ao = Object.assign,
  Ro = Object.defineProperty,
  Io =
    !Ao ||
    f(function () {
      if (
        E &&
        1 !==
          Ao(
            { b: 1 },
            Ao(
              Ro({}, "a", {
                enumerable: !0,
                get: function () {
                  Ro(this, "b", { value: 3, enumerable: !1 });
                },
              }),
              { b: 2 }
            )
          ).b
      )
        return !0;
      var t = {},
        e = {},
        n = Symbol();
      return (
        (t[n] = 7),
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          e[t] = t;
        }),
        7 != Ao({}, t)[n] || "abcdefghijklmnopqrst" != ut(Ao({}, e)).join("")
      );
    })
      ? function (t, e) {
          for (
            var n = ae(t), r = arguments.length, o = 1, i = Xt.f, a = Gt.f;
            r > o;

          )
            for (
              var c,
                u = v(arguments[o++]),
                s = i ? ut(u).concat(i(u)) : ut(u),
                l = s.length,
                f = 0;
              l > f;

            )
              (c = s[f++]), (E && !a.call(u, c)) || (n[c] = u[c]);
          return n;
        }
      : Ao;
ie(
  { target: "Object", stat: !0, forced: Object.assign !== Io },
  { assign: Io }
);
var _o = Bt.f,
  $o = "".endsWith,
  ko = Math.min,
  Co = br("endsWith"),
  Lo =
    !Co &&
    !!(function () {
      var t = _o(String.prototype, "endsWith");
      return t && !t.writable;
    })();
ie(
  { target: "String", proto: !0, forced: !Lo && !Co },
  {
    endsWith: function (t) {
      var e = String(g(this));
      yr(t);
      var n = arguments.length > 1 ? arguments[1] : void 0,
        r = Z(e.length),
        o = void 0 === n ? r : ko(Z(n), r),
        i = String(t);
      return $o ? $o.call(e, i, o) : e.slice(o - i.length, o) === i;
    },
  }
);
var Mo = [].push,
  No = Math.min,
  Uo = !f(function () {
    return !RegExp(4294967295, "y");
  });
uo(
  "split",
  2,
  function (t, e, n) {
    var r;
    return (
      (r =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (t, n) {
              var r = String(g(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
              if (0 === o) return [];
              if (void 0 === t) return [r];
              if (!mr(t)) return e.call(r, t, o);
              for (
                var i,
                  a,
                  c,
                  u = [],
                  s = 0,
                  l = new RegExp(
                    t.source,
                    (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : "") +
                      "g"
                  );
                (i = eo.call(l, r)) &&
                !(
                  (a = l.lastIndex) > s &&
                  (u.push(r.slice(s, i.index)),
                  i.length > 1 && i.index < r.length && Mo.apply(u, i.slice(1)),
                  (c = i[0].length),
                  (s = a),
                  u.length >= o)
                );

              )
                l.lastIndex === i.index && l.lastIndex++;
              return (
                s === r.length
                  ? (!c && l.test("")) || u.push("")
                  : u.push(r.slice(s)),
                u.length > o ? u.slice(0, o) : u
              );
            }
          : "0".split(void 0, 0).length
          ? function (t, n) {
              return void 0 === t && 0 === n ? [] : e.call(this, t, n);
            }
          : e),
      [
        function (e, n) {
          var o = g(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n);
        },
        function (t, o) {
          var i = n(r, t, this, o, r !== e);
          if (i.done) return i.value;
          var a = R(t),
            c = String(this),
            u = Ye(a, RegExp),
            s = a.unicode,
            l = new u(
              Uo ? a : "^(?:" + a.source + ")",
              (a.ignoreCase ? "i" : "") +
                (a.multiline ? "m" : "") +
                (a.unicode ? "u" : "") +
                (Uo ? "y" : "g")
            ),
            f = void 0 === o ? 4294967295 : o >>> 0;
          if (0 === f) return [];
          if (0 === c.length) return null === po(l, c) ? [c] : [];
          for (var p = 0, h = 0, d = []; h < c.length; ) {
            l.lastIndex = Uo ? h : 0;
            var v,
              g = po(l, Uo ? c : c.slice(h));
            if (
              null === g ||
              (v = No(Z(l.lastIndex + (Uo ? 0 : h)), c.length)) === p
            )
              h = fo(c, h, s);
            else {
              if ((d.push(c.slice(p, h)), d.length === f)) return d;
              for (var m = 1; m <= g.length - 1; m++)
                if ((d.push(g[m]), d.length === f)) return d;
              h = p = v;
            }
          }
          return d.push(c.slice(p)), d;
        },
      ]
    );
  },
  !Uo
);
const Do = encodeURIComponent;
function Fo(t) {
  return t && t.startsWith("'") ? t.substr(1, t.length - 2) : t;
}
const Wo = {
    name: "forvo",
    url: "https://forvo.com",
    makeUrl: ({ text: t, lang: e }) =>
      `https://ru.forvo.com/word/${Do(t)}/#${e}`,
    plan: [
      {
        selector: "article.pronunciations ul.show-all-pronunciations li",
        parse: async (t) => {
          const e = (await t.$$("span.play"))[0];
          if (!e) return;
          const n = (function (t) {
            if (!t) return;
            const e = t.indexOf("("),
              n = t.indexOf(")");
            return {
              name: t.substr(0, e),
              args: t
                .substr(e + 1, n - e - 1)
                .split(",")
                .map(Fo),
            };
          })(await e.getAttribute("onclick"));
          if (!n || "Play" !== n.name) return;
          const r =
            "https://audio00.forvo.com/audios/mp3/" + c.decode(n.args[4]);
          if (!r.endsWith(".mp3")) return;
          const u = { url: r },
            s = (await t.$$("span.ofLink"))[0];
          if (s) {
            const t = await s.getAttribute("data-p2");
            t && (u.author = t);
          }
          const l = (await t.$$("span.from"))[0];
          if (l) {
            const t = (function (t) {
              if (!t) return;
              const e = (t = a(i(t, "("), ")")).split(",");
              if (o(e)) return;
              const n = {
                gender:
                  ((r = e[0]),
                  "женщина" === (r = Vr(r)) ? "f" : "мужчина" === r ? "m" : r),
              };
              var r;
              return (
                2 === e.length &&
                  (n.country = (function (t) {
                    return Vr(t);
                  })(e[1])),
                n
              );
            })(await l.textContent());
            t && Object.assign(u, t);
          }
          return [{ audio: u }];
        },
      },
    ],
  },
  Go = {
    name: "howjsay",
    url: "https://howjsay.com/mp3",
    getData: async ({ text: t }) => ({
      audio: [{ url: `https://howjsay.com/mp3/${encodeURIComponent(t)}.mp3` }],
    }),
  };
class Vo {
  constructor(t, e) {
    (this.$ = t), (this.elem = e);
  }
  async $$(t) {
    const e = this.elem.find(t),
      n = [];
    return (
      e.each((t, e) => {
        n.push(new Vo(this.$, this.$(e)));
      }),
      n
    );
  }
  async getAttribute(t) {
    return this.elem.attr(t);
  }
  async textContent() {
    return this.elem.text();
  }
}
class Bo {
  constructor(t) {
    this.$ = l.load(t);
  }
  $$(t) {
    const e = this.$(t),
      n = [];
    return (
      e.each((t, e) => {
        n.push(new Vo(this.$, this.$(e)));
      }),
      Promise.resolve(n)
    );
  }
  close() {
    return Promise.resolve(void 0);
  }
}
async function qo(t) {
  Br && (t = "https://api.allorigins.win/raw?url=" + encodeURIComponent(t));
  const e = await s(t, {
    headers: {
      "User-Agent": "lingua-bot",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!e.ok) throw new Error(e.statusText);
  const n = await e.text();
  return new Bo(n);
}
class Ho {
  constructor(t, e) {
    (this.page = t), (this.elem = e);
  }
  async $$(t) {
    return (await this.elem.$$(t)).map((t) => new Ho(this.page, t));
  }
  getAttribute(t) {
    return this.elem.getAttribute(t);
  }
  textContent() {
    return this.elem.textContent();
  }
}
class Ko {
  constructor(t, e) {
    (this.browser = t), (this.page = e);
  }
  async $$(t) {
    try {
      await this.page.waitForSelector(t, { timeout: 5e3 });
    } catch (t) {}
    return (await this.page.$$(t)).map((t) => new Ho(this.page, t));
  }
  async close() {
    await this.page.close(), await this.browser.close();
  }
}
const Xo = [
  {
    name: "unsplash",
    url: "https://unsplash.com",
    makeUrl: ({ text: t }) => "/s/photos/" + t.replace(" ", "-"),
    plan: [
      {
        selector: 'div[data-test="search-photos-route"] figure img',
        exclude: ["^https://images.unsplash.com/profile-"],
        visual: ["@src"],
      },
    ],
  },
  {
    engine: "playwright",
    name: "wordnik",
    url: "https://www.wordnik.com",
    makeUrl: ({ text: t }) => "/words/" + t,
    plan: [{ selector: ".flickr-module .thumbs img", visual: ["@src"] }],
  },
  {
    name: "macmillan",
    url: "https://www.macmillandictionary.com",
    makeUrl: ({ text: t }) => "/dictionary/british/" + t,
    plan: [
      { selector: ".PRON", term: "transcription" },
      { selector: ".PART-OF-SPEECH", term: "tag" },
      { selector: ".SYNTAX-CODING", term: "tag" },
      { selector: ".DEFINITION", term: "definition" },
      { selector: ".EXAMPLES", term: "in" },
      { selector: ".PHR-XREF", term: "in" },
      { selector: ".synonyms .theslink", exclude: ["..."], term: "synonym" },
      {
        selector: ".audio_play_button",
        audio: ["@data-src-mp3", "@data-src-ogg"],
      },
    ],
  },
  Wo,
  Go,
].map(function (r) {
  return async (o, i) => {
    const a = { text: o, lang: i || "en" };
    if (r.getData)
      try {
        const t = await r.getData(a);
        return { source: { name: r.name, url: r.url }, data: t };
      } catch (t) {
        return (
          console.log("error", r.name, t),
          { source: { name: r.name, url: r.url }, error: t }
        );
      }
    let c = r.makeUrl(a);
    c.startsWith("/") && (c = r.url + c);
    try {
      const o = await (function (t, e) {
        return "playwright" === t
          ? (async function (t) {
              if (Br) return await qo(t);
              const e = await u.launch(),
                n = await e.newPage();
              return await n.goto(t), new Ko(e, n);
            })(e)
          : qo(e);
      })(r.engine, c);
      return (async function (r, o, i) {
        const a = {},
          c = (t) => {
            t && !a[t] && (a[t] = new Set());
          },
          u = async (n, r, i) => {
            c(n);
            const u = n ? a[n] : void 0,
              s = await o.$$(r.selector);
            for (const n of s) {
              const o = await i(r, n);
              if (Array.isArray(o))
                for (const n of o.filter((e) => !t(e) && "" !== e))
                  u
                    ? u.add(n)
                    : e(n, (t, e) => {
                        c(e), a[e].add(t);
                      });
            }
          },
          s = (t, e) =>
            !!t.exclude &&
            t.exclude.some((t) =>
              t.startsWith("^") ? e.startsWith(t.substr(1)) : e === t
            ),
          l = async (t, e) => {
            const n = Vr(await e.textContent());
            if (n && !s(t, n)) return [n];
          },
          f = async (t, e, n) => {
            const r = [];
            for (const o of n) {
              let n;
              (n = o.startsWith("@")
                ? await e.getAttribute(o.substr(1))
                : Vr(await e.text())),
                s(t, n) || r.push(n);
            }
            return 0 === r.length ? void 0 : r;
          },
          p = async (t, e) => await f(t, e, t.audio),
          h = async (t, e) => await f(t, e, t.visual),
          d = (t, e) => t.parse(e);
        for (const t of r.plan)
          t.term
            ? await u(t.term, t, l)
            : t.audio
            ? await u("audio", t, p)
            : t.visual
            ? await u("visual", t, h)
            : t.parse && (await u(void 0, t, d));
        return {
          source: { name: r.name, url: r.url },
          data: n(a, (t) => Array.from(t)),
        };
      })(r, o);
    } catch (t) {
      return (
        console.log("error", r.name, t),
        { source: { name: r.name, url: r.url }, error: t }
      );
    }
  };
});
function Yo(t, e) {
  return Promise.all(Xo.map((n) => n(t, e)));
}
export { Yo as fetchData };
//# sourceMappingURL=bundle.modern.js.map
