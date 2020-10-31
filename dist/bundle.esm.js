import t from "lodash/isNil";
import e from "lodash/forEach";
import r from "lodash/mapValues";
import n from "lodash/trim";
import o from "lodash/isEmpty";
import i from "lodash/trimStart";
import u from "lodash/trimEnd";
import { Base64 as c } from "js-base64";
import a from "isomorphic-unfetch";
import f from "cheerio";
var s =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function l(t, e, r) {
  return (
    t(
      (r = {
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
      r.exports
    ),
    r.exports
  );
}
var p = function (t) {
    return t && t.Math == Math && t;
  },
  v =
    p("object" == typeof globalThis && globalThis) ||
    p("object" == typeof window && window) ||
    p("object" == typeof self && self) ||
    p("object" == typeof s && s) ||
    Function("return this")(),
  h = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  d = !h(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  y = {}.propertyIsEnumerable,
  g = Object.getOwnPropertyDescriptor,
  m = {
    f:
      g && !y.call({ 1: 2 }, 1)
        ? function (t) {
            var e = g(this, t);
            return !!e && e.enumerable;
          }
        : y,
  },
  b = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  },
  S = {}.toString,
  w = function (t) {
    return S.call(t).slice(8, -1);
  },
  x = "".split,
  P = h(function () {
    return !Object("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == w(t) ? x.call(t, "") : Object(t);
      }
    : Object,
  j = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
  E = function (t) {
    return P(j(t));
  },
  O = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  },
  A = function (t, e) {
    if (!O(t)) return t;
    var r, n;
    if (e && "function" == typeof (r = t.toString) && !O((n = r.call(t))))
      return n;
    if ("function" == typeof (r = t.valueOf) && !O((n = r.call(t)))) return n;
    if (!e && "function" == typeof (r = t.toString) && !O((n = r.call(t))))
      return n;
    throw TypeError("Can't convert object to primitive value");
  },
  T = {}.hasOwnProperty,
  I = function (t, e) {
    return T.call(t, e);
  },
  R = v.document,
  k = O(R) && O(R.createElement),
  C = function (t) {
    return k ? R.createElement(t) : {};
  },
  _ =
    !d &&
    !h(function () {
      return (
        7 !=
        Object.defineProperty(C("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  $ = Object.getOwnPropertyDescriptor,
  L = {
    f: d
      ? $
      : function (t, e) {
          if (((t = E(t)), (e = A(e, !0)), _))
            try {
              return $(t, e);
            } catch (t) {}
          if (I(t, e)) return b(!m.f.call(t, e), t[e]);
        },
  },
  D = function (t) {
    if (!O(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
  M = Object.defineProperty,
  F = {
    f: d
      ? M
      : function (t, e, r) {
          if ((D(t), (e = A(e, !0)), D(r), _))
            try {
              return M(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        },
  },
  N = d
    ? function (t, e, r) {
        return F.f(t, e, b(1, r));
      }
    : function (t, e, r) {
        return (t[e] = r), t;
      },
  U = function (t, e) {
    try {
      N(v, t, e);
    } catch (r) {
      v[t] = e;
    }
    return e;
  },
  W = v["__core-js_shared__"] || U("__core-js_shared__", {}),
  z = Function.toString;
"function" != typeof W.inspectSource &&
  (W.inspectSource = function (t) {
    return z.call(t);
  });
var G,
  B,
  V,
  q = W.inspectSource,
  K = v.WeakMap,
  H = "function" == typeof K && /native code/.test(q(K)),
  X = l(function (t) {
    (t.exports = function (t, e) {
      return W[t] || (W[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  }),
  Y = 0,
  Q = Math.random(),
  J = function (t) {
    return (
      "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++Y + Q).toString(36)
    );
  },
  Z = X("keys"),
  tt = function (t) {
    return Z[t] || (Z[t] = J(t));
  },
  et = {};
if (H) {
  var rt = new (0, v.WeakMap)(),
    nt = rt.get,
    ot = rt.has,
    it = rt.set;
  (G = function (t, e) {
    return it.call(rt, t, e), e;
  }),
    (B = function (t) {
      return nt.call(rt, t) || {};
    }),
    (V = function (t) {
      return ot.call(rt, t);
    });
} else {
  var ut = tt("state");
  (et[ut] = !0),
    (G = function (t, e) {
      return N(t, ut, e), e;
    }),
    (B = function (t) {
      return I(t, ut) ? t[ut] : {};
    }),
    (V = function (t) {
      return I(t, ut);
    });
}
var ct,
  at = {
    set: G,
    get: B,
    has: V,
    enforce: function (t) {
      return V(t) ? B(t) : G(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!O(e) || (r = B(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    },
  },
  ft = l(function (t) {
    var e = at.get,
      r = at.enforce,
      n = String(String).split("String");
    (t.exports = function (t, e, o, i) {
      var u = !!i && !!i.unsafe,
        c = !!i && !!i.enumerable,
        a = !!i && !!i.noTargetGet;
      "function" == typeof o &&
        ("string" != typeof e || I(o, "name") || N(o, "name", e),
        (r(o).source = n.join("string" == typeof e ? e : ""))),
        t !== v
          ? (u ? !a && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = o) : N(t, e, o))
          : c
          ? (t[e] = o)
          : U(e, o);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && e(this).source) || q(this);
    });
  }),
  st = v,
  lt = function (t) {
    return "function" == typeof t ? t : void 0;
  },
  pt = function (t, e) {
    return arguments.length < 2
      ? lt(st[t]) || lt(v[t])
      : (st[t] && st[t][e]) || (v[t] && v[t][e]);
  },
  vt = Math.ceil,
  ht = Math.floor,
  dt = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? ht : vt)(t);
  },
  yt = Math.min,
  gt = function (t) {
    return t > 0 ? yt(dt(t), 9007199254740991) : 0;
  },
  mt = Math.max,
  bt = Math.min,
  St = function (t) {
    return function (e, r, n) {
      var o,
        i = E(e),
        u = gt(i.length),
        c = (function (t, e) {
          var r = dt(t);
          return r < 0 ? mt(r + e, 0) : bt(r, e);
        })(n, u);
      if (t && r != r) {
        for (; u > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; u > c; c++) if ((t || c in i) && i[c] === r) return t || c || 0;
      return !t && -1;
    };
  },
  wt = { includes: St(!0), indexOf: St(!1) },
  xt = wt.indexOf,
  Pt = function (t, e) {
    var r,
      n = E(t),
      o = 0,
      i = [];
    for (r in n) !I(et, r) && I(n, r) && i.push(r);
    for (; e.length > o; ) I(n, (r = e[o++])) && (~xt(i, r) || i.push(r));
    return i;
  },
  jt = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Et = jt.concat("length", "prototype"),
  Ot = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return Pt(t, Et);
      },
  },
  At = { f: Object.getOwnPropertySymbols },
  Tt =
    pt("Reflect", "ownKeys") ||
    function (t) {
      var e = Ot.f(D(t)),
        r = At.f;
      return r ? e.concat(r(t)) : e;
    },
  It = function (t, e) {
    for (var r = Tt(e), n = F.f, o = L.f, i = 0; i < r.length; i++) {
      var u = r[i];
      I(t, u) || n(t, u, o(e, u));
    }
  },
  Rt = /#|\.prototype\./,
  kt = function (t, e) {
    var r = _t[Ct(t)];
    return r == Lt || (r != $t && ("function" == typeof e ? h(e) : !!e));
  },
  Ct = (kt.normalize = function (t) {
    return String(t).replace(Rt, ".").toLowerCase();
  }),
  _t = (kt.data = {}),
  $t = (kt.NATIVE = "N"),
  Lt = (kt.POLYFILL = "P"),
  Dt = kt,
  Mt = L.f,
  Ft = function (t, e) {
    var r,
      n,
      o,
      i,
      u,
      c = t.target,
      a = t.global,
      f = t.stat;
    if ((r = a ? v : f ? v[c] || U(c, {}) : (v[c] || {}).prototype))
      for (n in e) {
        if (
          ((i = e[n]),
          (o = t.noTargetGet ? (u = Mt(r, n)) && u.value : r[n]),
          !Dt(a ? n : c + (f ? "." : "#") + n, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          It(i, o);
        }
        (t.sham || (o && o.sham)) && N(i, "sham", !0), ft(r, n, i, t);
      }
  },
  Nt =
    !!Object.getOwnPropertySymbols &&
    !h(function () {
      return !String(Symbol());
    }),
  Ut = Nt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  Wt =
    Array.isArray ||
    function (t) {
      return "Array" == w(t);
    },
  zt = function (t) {
    return Object(j(t));
  },
  Gt =
    Object.keys ||
    function (t) {
      return Pt(t, jt);
    },
  Bt = d
    ? Object.defineProperties
    : function (t, e) {
        D(t);
        for (var r, n = Gt(e), o = n.length, i = 0; o > i; )
          F.f(t, (r = n[i++]), e[r]);
        return t;
      },
  Vt = pt("document", "documentElement"),
  qt = tt("IE_PROTO"),
  Kt = function () {},
  Ht = function (t) {
    return "<script>" + t + "</script>";
  },
  Xt = function () {
    try {
      ct = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e;
    Xt = ct
      ? (function (t) {
          t.write(Ht("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(ct)
      : (((e = C("iframe")).style.display = "none"),
        Vt.appendChild(e),
        (e.src = String("javascript:")),
        (t = e.contentWindow.document).open(),
        t.write(Ht("document.F=Object")),
        t.close(),
        t.F);
    for (var r = jt.length; r--; ) delete Xt.prototype[jt[r]];
    return Xt();
  };
et[qt] = !0;
var Yt =
    Object.create ||
    function (t, e) {
      var r;
      return (
        null !== t
          ? ((Kt.prototype = D(t)),
            (r = new Kt()),
            (Kt.prototype = null),
            (r[qt] = t))
          : (r = Xt()),
        void 0 === e ? r : Bt(r, e)
      );
    },
  Qt = Ot.f,
  Jt = {}.toString,
  Zt =
    "object" == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  te = {
    f: function (t) {
      return Zt && "[object Window]" == Jt.call(t)
        ? (function (t) {
            try {
              return Qt(t);
            } catch (t) {
              return Zt.slice();
            }
          })(t)
        : Qt(E(t));
    },
  },
  ee = X("wks"),
  re = v.Symbol,
  ne = Ut ? re : (re && re.withoutSetter) || J,
  oe = function (t) {
    return (
      I(ee, t) || (ee[t] = Nt && I(re, t) ? re[t] : ne("Symbol." + t)), ee[t]
    );
  },
  ie = { f: oe },
  ue = F.f,
  ce = function (t) {
    var e = st.Symbol || (st.Symbol = {});
    I(e, t) || ue(e, t, { value: ie.f(t) });
  },
  ae = F.f,
  fe = oe("toStringTag"),
  se = function (t, e, r) {
    t &&
      !I((t = r ? t : t.prototype), fe) &&
      ae(t, fe, { configurable: !0, value: e });
  },
  le = function (t) {
    if ("function" != typeof t)
      throw TypeError(String(t) + " is not a function");
    return t;
  },
  pe = function (t, e, r) {
    if ((le(t), void 0 === e)) return t;
    switch (r) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (r) {
          return t.call(e, r);
        };
      case 2:
        return function (r, n) {
          return t.call(e, r, n);
        };
      case 3:
        return function (r, n, o) {
          return t.call(e, r, n, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  },
  ve = oe("species"),
  he = function (t, e) {
    var r;
    return (
      Wt(t) &&
        ("function" != typeof (r = t.constructor) ||
        (r !== Array && !Wt(r.prototype))
          ? O(r) && null === (r = r[ve]) && (r = void 0)
          : (r = void 0)),
      new (void 0 === r ? Array : r)(0 === e ? 0 : e)
    );
  },
  de = [].push,
  ye = function (t) {
    var e = 1 == t,
      r = 2 == t,
      n = 3 == t,
      o = 4 == t,
      i = 6 == t,
      u = 5 == t || i;
    return function (c, a, f, s) {
      for (
        var l,
          p,
          v = zt(c),
          h = P(v),
          d = pe(a, f, 3),
          y = gt(h.length),
          g = 0,
          m = s || he,
          b = e ? m(c, y) : r ? m(c, 0) : void 0;
        y > g;
        g++
      )
        if ((u || g in h) && ((p = d((l = h[g]), g, v)), t))
          if (e) b[g] = p;
          else if (p)
            switch (t) {
              case 3:
                return !0;
              case 5:
                return l;
              case 6:
                return g;
              case 2:
                de.call(b, l);
            }
          else if (o) return !1;
      return i ? -1 : n || o ? o : b;
    };
  },
  ge = {
    forEach: ye(0),
    map: ye(1),
    filter: ye(2),
    some: ye(3),
    every: ye(4),
    find: ye(5),
    findIndex: ye(6),
  },
  me = ge.forEach,
  be = tt("hidden"),
  Se = oe("toPrimitive"),
  we = at.set,
  xe = at.getterFor("Symbol"),
  Pe = Object.prototype,
  je = v.Symbol,
  Ee = pt("JSON", "stringify"),
  Oe = L.f,
  Ae = F.f,
  Te = te.f,
  Ie = m.f,
  Re = X("symbols"),
  ke = X("op-symbols"),
  Ce = X("string-to-symbol-registry"),
  _e = X("symbol-to-string-registry"),
  $e = X("wks"),
  Le = v.QObject,
  De = !Le || !Le.prototype || !Le.prototype.findChild,
  Me =
    d &&
    h(function () {
      return (
        7 !=
        Yt(
          Ae({}, "a", {
            get: function () {
              return Ae(this, "a", { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (t, e, r) {
          var n = Oe(Pe, e);
          n && delete Pe[e], Ae(t, e, r), n && t !== Pe && Ae(Pe, e, n);
        }
      : Ae,
  Fe = function (t, e) {
    var r = (Re[t] = Yt(je.prototype));
    return (
      we(r, { type: "Symbol", tag: t, description: e }),
      d || (r.description = e),
      r
    );
  },
  Ne = Ut
    ? function (t) {
        return "symbol" == typeof t;
      }
    : function (t) {
        return Object(t) instanceof je;
      },
  Ue = function (t, e, r) {
    t === Pe && Ue(ke, e, r), D(t);
    var n = A(e, !0);
    return (
      D(r),
      I(Re, n)
        ? (r.enumerable
            ? (I(t, be) && t[be][n] && (t[be][n] = !1),
              (r = Yt(r, { enumerable: b(0, !1) })))
            : (I(t, be) || Ae(t, be, b(1, {})), (t[be][n] = !0)),
          Me(t, n, r))
        : Ae(t, n, r)
    );
  },
  We = function (t, e) {
    D(t);
    var r = E(e),
      n = Gt(r).concat(Ve(r));
    return (
      me(n, function (e) {
        (d && !ze.call(r, e)) || Ue(t, e, r[e]);
      }),
      t
    );
  },
  ze = function (t) {
    var e = A(t, !0),
      r = Ie.call(this, e);
    return (
      !(this === Pe && I(Re, e) && !I(ke, e)) &&
      (!(r || !I(this, e) || !I(Re, e) || (I(this, be) && this[be][e])) || r)
    );
  },
  Ge = function (t, e) {
    var r = E(t),
      n = A(e, !0);
    if (r !== Pe || !I(Re, n) || I(ke, n)) {
      var o = Oe(r, n);
      return (
        !o || !I(Re, n) || (I(r, be) && r[be][n]) || (o.enumerable = !0), o
      );
    }
  },
  Be = function (t) {
    var e = Te(E(t)),
      r = [];
    return (
      me(e, function (t) {
        I(Re, t) || I(et, t) || r.push(t);
      }),
      r
    );
  },
  Ve = function (t) {
    var e = t === Pe,
      r = Te(e ? ke : E(t)),
      n = [];
    return (
      me(r, function (t) {
        !I(Re, t) || (e && !I(Pe, t)) || n.push(Re[t]);
      }),
      n
    );
  };
if (
  (Nt ||
    (ft(
      (je = function () {
        if (this instanceof je) throw TypeError("Symbol is not a constructor");
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          e = J(t),
          r = function (t) {
            this === Pe && r.call(ke, t),
              I(this, be) && I(this[be], e) && (this[be][e] = !1),
              Me(this, e, b(1, t));
          };
        return d && De && Me(Pe, e, { configurable: !0, set: r }), Fe(e, t);
      }).prototype,
      "toString",
      function () {
        return xe(this).tag;
      }
    ),
    ft(je, "withoutSetter", function (t) {
      return Fe(J(t), t);
    }),
    (m.f = ze),
    (F.f = Ue),
    (L.f = Ge),
    (Ot.f = te.f = Be),
    (At.f = Ve),
    (ie.f = function (t) {
      return Fe(oe(t), t);
    }),
    d &&
      (Ae(je.prototype, "description", {
        configurable: !0,
        get: function () {
          return xe(this).description;
        },
      }),
      ft(Pe, "propertyIsEnumerable", ze, { unsafe: !0 }))),
  Ft({ global: !0, wrap: !0, forced: !Nt, sham: !Nt }, { Symbol: je }),
  me(Gt($e), function (t) {
    ce(t);
  }),
  Ft(
    { target: "Symbol", stat: !0, forced: !Nt },
    {
      for: function (t) {
        var e = String(t);
        if (I(Ce, e)) return Ce[e];
        var r = je(e);
        return (Ce[e] = r), (_e[r] = e), r;
      },
      keyFor: function (t) {
        if (!Ne(t)) throw TypeError(t + " is not a symbol");
        if (I(_e, t)) return _e[t];
      },
      useSetter: function () {
        De = !0;
      },
      useSimple: function () {
        De = !1;
      },
    }
  ),
  Ft(
    { target: "Object", stat: !0, forced: !Nt, sham: !d },
    {
      create: function (t, e) {
        return void 0 === e ? Yt(t) : We(Yt(t), e);
      },
      defineProperty: Ue,
      defineProperties: We,
      getOwnPropertyDescriptor: Ge,
    }
  ),
  Ft(
    { target: "Object", stat: !0, forced: !Nt },
    { getOwnPropertyNames: Be, getOwnPropertySymbols: Ve }
  ),
  Ft(
    {
      target: "Object",
      stat: !0,
      forced: h(function () {
        At.f(1);
      }),
    },
    {
      getOwnPropertySymbols: function (t) {
        return At.f(zt(t));
      },
    }
  ),
  Ee)
) {
  var qe =
    !Nt ||
    h(function () {
      var t = je();
      return (
        "[null]" != Ee([t]) || "{}" != Ee({ a: t }) || "{}" != Ee(Object(t))
      );
    });
  Ft(
    { target: "JSON", stat: !0, forced: qe },
    {
      stringify: function (t, e, r) {
        for (var n, o = [t], i = 1; arguments.length > i; )
          o.push(arguments[i++]);
        if (((n = e), (O(e) || void 0 !== t) && !Ne(t)))
          return (
            Wt(e) ||
              (e = function (t, e) {
                if (
                  ("function" == typeof n && (e = n.call(this, t, e)), !Ne(e))
                )
                  return e;
              }),
            (o[1] = e),
            Ee.apply(null, o)
          );
      },
    }
  );
}
je.prototype[Se] || N(je.prototype, Se, je.prototype.valueOf),
  se(je, "Symbol"),
  (et[be] = !0);
var Ke = F.f,
  He = v.Symbol;
if (
  d &&
  "function" == typeof He &&
  (!("description" in He.prototype) || void 0 !== He().description)
) {
  var Xe = {},
    Ye = function () {
      var t =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        e = this instanceof Ye ? new He(t) : void 0 === t ? He() : He(t);
      return "" === t && (Xe[e] = !0), e;
    };
  It(Ye, He);
  var Qe = (Ye.prototype = He.prototype);
  Qe.constructor = Ye;
  var Je = Qe.toString,
    Ze = "Symbol(test)" == String(He("test")),
    tr = /^Symbol\((.*)\)[^)]+$/;
  Ke(Qe, "description", {
    configurable: !0,
    get: function () {
      var t = O(this) ? this.valueOf() : this,
        e = Je.call(t);
      if (I(Xe, t)) return "";
      var r = Ze ? e.slice(7, -1) : e.replace(tr, "$1");
      return "" === r ? void 0 : r;
    },
  }),
    Ft({ global: !0, forced: !0 }, { Symbol: Ye });
}
ce("iterator");
var er,
  rr,
  nr = pt("navigator", "userAgent") || "",
  or = v.process,
  ir = or && or.versions,
  ur = ir && ir.v8;
ur
  ? (rr = (er = ur.split("."))[0] + er[1])
  : nr &&
    (!(er = nr.match(/Edge\/(\d+)/)) || er[1] >= 74) &&
    (er = nr.match(/Chrome\/(\d+)/)) &&
    (rr = er[1]);
var cr = rr && +rr,
  ar = oe("species"),
  fr = function (t) {
    return (
      cr >= 51 ||
      !h(function () {
        var e = [];
        return (
          ((e.constructor = {})[ar] = function () {
            return { foo: 1 };
          }),
          1 !== e[t](Boolean).foo
        );
      })
    );
  },
  sr = Object.defineProperty,
  lr = {},
  pr = function (t) {
    throw t;
  },
  vr = function (t, e) {
    if (I(lr, t)) return lr[t];
    e || (e = {});
    var r = [][t],
      n = !!I(e, "ACCESSORS") && e.ACCESSORS,
      o = I(e, 0) ? e[0] : pr,
      i = I(e, 1) ? e[1] : void 0;
    return (lr[t] =
      !!r &&
      !h(function () {
        if (n && !d) return !0;
        var t = { length: -1 };
        n ? sr(t, 1, { enumerable: !0, get: pr }) : (t[1] = 1), r.call(t, o, i);
      }));
  },
  hr = ge.filter,
  dr = fr("filter"),
  yr = vr("filter");
Ft(
  { target: "Array", proto: !0, forced: !dr || !yr },
  {
    filter: function (t) {
      return hr(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var gr = function (t, e, r, n) {
    try {
      return n ? e(D(r)[0], r[1]) : e(r);
    } catch (e) {
      var o = t.return;
      throw (void 0 !== o && D(o.call(t)), e);
    }
  },
  mr = {},
  br = oe("iterator"),
  Sr = Array.prototype,
  wr = function (t) {
    return void 0 !== t && (mr.Array === t || Sr[br] === t);
  },
  xr = function (t, e, r) {
    var n = A(e);
    n in t ? F.f(t, n, b(0, r)) : (t[n] = r);
  },
  Pr = {};
Pr[oe("toStringTag")] = "z";
var jr = "[object z]" === String(Pr),
  Er = oe("toStringTag"),
  Or =
    "Arguments" ==
    w(
      (function () {
        return arguments;
      })()
    ),
  Ar = jr
    ? w
    : function (t) {
        var e, r, n;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (r = (function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = Object(t)), Er))
          ? r
          : Or
          ? w(e)
          : "Object" == (n = w(e)) && "function" == typeof e.callee
          ? "Arguments"
          : n;
      },
  Tr = oe("iterator"),
  Ir = function (t) {
    if (null != t) return t[Tr] || t["@@iterator"] || mr[Ar(t)];
  },
  Rr = oe("iterator"),
  kr = !1;
try {
  var Cr = 0,
    _r = {
      next: function () {
        return { done: !!Cr++ };
      },
      return: function () {
        kr = !0;
      },
    };
  (_r[Rr] = function () {
    return this;
  }),
    Array.from(_r, function () {
      throw 2;
    });
} catch (t) {}
var $r = function (t, e) {
    if (!e && !kr) return !1;
    var r = !1;
    try {
      var n = {};
      (n[Rr] = function () {
        return {
          next: function () {
            return { done: (r = !0) };
          },
        };
      }),
        t(n);
    } catch (t) {}
    return r;
  },
  Lr = !$r(function (t) {
    Array.from(t);
  });
Ft(
  { target: "Array", stat: !0, forced: Lr },
  {
    from: function (t) {
      var e,
        r,
        n,
        o,
        i,
        u,
        c = zt(t),
        a = "function" == typeof this ? this : Array,
        f = arguments.length,
        s = f > 1 ? arguments[1] : void 0,
        l = void 0 !== s,
        p = Ir(c),
        v = 0;
      if (
        (l && (s = pe(s, f > 2 ? arguments[2] : void 0, 2)),
        null == p || (a == Array && wr(p)))
      )
        for (r = new a((e = gt(c.length))); e > v; v++)
          (u = l ? s(c[v], v) : c[v]), xr(r, v, u);
      else
        for (i = (o = p.call(c)).next, r = new a(); !(n = i.call(o)).done; v++)
          (u = l ? gr(o, s, [n.value, v], !0) : n.value), xr(r, v, u);
      return (r.length = v), r;
    },
  }
),
  Ft({ target: "Array", stat: !0 }, { isArray: Wt });
var Dr = oe("unscopables"),
  Mr = Array.prototype;
null == Mr[Dr] && F.f(Mr, Dr, { configurable: !0, value: Yt(null) });
var Fr,
  Nr,
  Ur,
  Wr = function (t) {
    Mr[Dr][t] = !0;
  },
  zr = !h(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  Gr = tt("IE_PROTO"),
  Br = Object.prototype,
  Vr = zr
    ? Object.getPrototypeOf
    : function (t) {
        return (
          (t = zt(t)),
          I(t, Gr)
            ? t[Gr]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? Br
            : null
        );
      },
  qr = oe("iterator"),
  Kr = !1;
[].keys &&
  ("next" in (Ur = [].keys())
    ? (Nr = Vr(Vr(Ur))) !== Object.prototype && (Fr = Nr)
    : (Kr = !0)),
  null == Fr && (Fr = {}),
  I(Fr, qr) ||
    N(Fr, qr, function () {
      return this;
    });
var Hr = { IteratorPrototype: Fr, BUGGY_SAFARI_ITERATORS: Kr },
  Xr = Hr.IteratorPrototype,
  Yr = function () {
    return this;
  },
  Qr =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var t,
            e = !1,
            r = {};
          try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
              .set).call(r, []),
              (e = r instanceof Array);
          } catch (t) {}
          return function (r, n) {
            return (
              D(r),
              (function (t) {
                if (!O(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype");
              })(n),
              e ? t.call(r, n) : (r.__proto__ = n),
              r
            );
          };
        })()
      : void 0),
  Jr = Hr.IteratorPrototype,
  Zr = Hr.BUGGY_SAFARI_ITERATORS,
  tn = oe("iterator"),
  en = function () {
    return this;
  },
  rn = function (t, e, r, n, o, i, u) {
    !(function (t, e, r) {
      var n = e + " Iterator";
      (t.prototype = Yt(Xr, { next: b(1, r) })), se(t, n, !1), (mr[n] = Yr);
    })(r, e, n);
    var c,
      a,
      f,
      s = function (t) {
        if (t === o && d) return d;
        if (!Zr && t in v) return v[t];
        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new r(this, t);
            };
        }
        return function () {
          return new r(this);
        };
      },
      l = e + " Iterator",
      p = !1,
      v = t.prototype,
      h = v[tn] || v["@@iterator"] || (o && v[o]),
      d = (!Zr && h) || s(o),
      y = ("Array" == e && v.entries) || h;
    if (
      (y &&
        ((c = Vr(y.call(new t()))),
        Jr !== Object.prototype &&
          c.next &&
          (Vr(c) !== Jr &&
            (Qr ? Qr(c, Jr) : "function" != typeof c[tn] && N(c, tn, en)),
          se(c, l, !0))),
      "values" == o &&
        h &&
        "values" !== h.name &&
        ((p = !0),
        (d = function () {
          return h.call(this);
        })),
      v[tn] !== d && N(v, tn, d),
      (mr[e] = d),
      o)
    )
      if (
        ((a = {
          values: s("values"),
          keys: i ? d : s("keys"),
          entries: s("entries"),
        }),
        u)
      )
        for (f in a) (Zr || p || !(f in v)) && ft(v, f, a[f]);
      else Ft({ target: e, proto: !0, forced: Zr || p }, a);
    return a;
  },
  nn = at.set,
  on = at.getterFor("Array Iterator"),
  un = rn(
    Array,
    "Array",
    function (t, e) {
      nn(this, { type: "Array Iterator", target: E(t), index: 0, kind: e });
    },
    function () {
      var t = on(this),
        e = t.target,
        r = t.kind,
        n = t.index++;
      return !e || n >= e.length
        ? ((t.target = void 0), { value: void 0, done: !0 })
        : "keys" == r
        ? { value: n, done: !1 }
        : "values" == r
        ? { value: e[n], done: !1 }
        : { value: [n, e[n]], done: !1 };
    },
    "values"
  );
(mr.Arguments = mr.Array), Wr("keys"), Wr("values"), Wr("entries");
var cn = ge.map,
  an = fr("map"),
  fn = vr("map");
Ft(
  { target: "Array", proto: !0, forced: !an || !fn },
  {
    map: function (t) {
      return cn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var sn = function (t, e) {
    var r = [][t];
    return (
      !!r &&
      h(function () {
        r.call(
          null,
          e ||
            function () {
              throw 1;
            },
          1
        );
      })
    );
  },
  ln = ge.some,
  pn = sn("some"),
  vn = vr("some");
Ft(
  { target: "Array", proto: !0, forced: !pn || !vn },
  {
    some: function (t) {
      return ln(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var hn = [].slice,
  dn = {},
  yn = function (t, e, r) {
    if (!(e in dn)) {
      for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
      dn[e] = Function("C,a", "return new C(" + n.join(",") + ")");
    }
    return dn[e](t, r);
  };
Ft(
  { target: "Function", proto: !0 },
  {
    bind:
      Function.bind ||
      function (t) {
        var e = le(this),
          r = hn.call(arguments, 1),
          n = function () {
            var o = r.concat(hn.call(arguments));
            return this instanceof n ? yn(e, o.length, o) : e.apply(t, o);
          };
        return O(e.prototype) && (n.prototype = e.prototype), n;
      },
  }
);
var gn = Function.prototype,
  mn = gn.toString,
  bn = /^\s*function ([^ (]*)/;
d &&
  !("name" in gn) &&
  (0, F.f)(gn, "name", {
    configurable: !0,
    get: function () {
      try {
        return mn.call(this).match(bn)[1];
      } catch (t) {
        return "";
      }
    },
  }),
  jr ||
    ft(
      Object.prototype,
      "toString",
      jr
        ? {}.toString
        : function () {
            return "[object " + Ar(this) + "]";
          },
      { unsafe: !0 }
    );
var Sn,
  wn,
  xn,
  Pn = v.Promise,
  jn = function (t, e, r) {
    for (var n in e) ft(t, n, e[n], r);
    return t;
  },
  En = oe("species"),
  On = function (t) {
    var e = pt(t);
    d &&
      e &&
      !e[En] &&
      (0, F.f)(e, En, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  },
  An = function (t, e, r) {
    if (!(t instanceof e))
      throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
    return t;
  },
  Tn = l(function (t) {
    var e = function (t, e) {
      (this.stopped = t), (this.result = e);
    };
    (t.exports = function (t, r, n, o, i) {
      var u,
        c,
        a,
        f,
        s,
        l,
        p,
        v = pe(r, n, o ? 2 : 1);
      if (i) u = t;
      else {
        if ("function" != typeof (c = Ir(t)))
          throw TypeError("Target is not iterable");
        if (wr(c)) {
          for (a = 0, f = gt(t.length); f > a; a++)
            if ((s = o ? v(D((p = t[a]))[0], p[1]) : v(t[a])) && s instanceof e)
              return s;
          return new e(!1);
        }
        u = c.call(t);
      }
      for (l = u.next; !(p = l.call(u)).done; )
        if (
          "object" == typeof (s = gr(u, v, p.value, o)) &&
          s &&
          s instanceof e
        )
          return s;
      return new e(!1);
    }).stop = function (t) {
      return new e(!0, t);
    };
  }),
  In = oe("species"),
  Rn = function (t, e) {
    var r,
      n = D(t).constructor;
    return void 0 === n || null == (r = D(n)[In]) ? e : le(r);
  },
  kn = /(iphone|ipod|ipad).*applewebkit/i.test(nr),
  Cn = v.location,
  _n = v.setImmediate,
  $n = v.clearImmediate,
  Ln = v.process,
  Dn = v.MessageChannel,
  Mn = v.Dispatch,
  Fn = 0,
  Nn = {},
  Un = function (t) {
    if (Nn.hasOwnProperty(t)) {
      var e = Nn[t];
      delete Nn[t], e();
    }
  },
  Wn = function (t) {
    return function () {
      Un(t);
    };
  },
  zn = function (t) {
    Un(t.data);
  },
  Gn = function (t) {
    v.postMessage(t + "", Cn.protocol + "//" + Cn.host);
  };
(_n && $n) ||
  ((_n = function (t) {
    for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
    return (
      (Nn[++Fn] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }),
      Sn(Fn),
      Fn
    );
  }),
  ($n = function (t) {
    delete Nn[t];
  }),
  "process" == w(Ln)
    ? (Sn = function (t) {
        Ln.nextTick(Wn(t));
      })
    : Mn && Mn.now
    ? (Sn = function (t) {
        Mn.now(Wn(t));
      })
    : Dn && !kn
    ? ((xn = (wn = new Dn()).port2),
      (wn.port1.onmessage = zn),
      (Sn = pe(xn.postMessage, xn, 1)))
    : !v.addEventListener ||
      "function" != typeof postMessage ||
      v.importScripts ||
      h(Gn) ||
      "file:" === Cn.protocol
    ? (Sn =
        "onreadystatechange" in C("script")
          ? function (t) {
              Vt.appendChild(C("script")).onreadystatechange = function () {
                Vt.removeChild(this), Un(t);
              };
            }
          : function (t) {
              setTimeout(Wn(t), 0);
            })
    : ((Sn = Gn), v.addEventListener("message", zn, !1)));
var Bn,
  Vn,
  qn,
  Kn,
  Hn,
  Xn,
  Yn,
  Qn,
  Jn = { set: _n, clear: $n },
  Zn = L.f,
  to = Jn.set,
  eo = v.MutationObserver || v.WebKitMutationObserver,
  ro = v.process,
  no = v.Promise,
  oo = "process" == w(ro),
  io = Zn(v, "queueMicrotask"),
  uo = io && io.value;
uo ||
  ((Bn = function () {
    var t, e;
    for (oo && (t = ro.domain) && t.exit(); Vn; ) {
      (e = Vn.fn), (Vn = Vn.next);
      try {
        e();
      } catch (t) {
        throw (Vn ? Kn() : (qn = void 0), t);
      }
    }
    (qn = void 0), t && t.enter();
  }),
  oo
    ? (Kn = function () {
        ro.nextTick(Bn);
      })
    : eo && !kn
    ? ((Hn = !0),
      (Xn = document.createTextNode("")),
      new eo(Bn).observe(Xn, { characterData: !0 }),
      (Kn = function () {
        Xn.data = Hn = !Hn;
      }))
    : no && no.resolve
    ? ((Yn = no.resolve(void 0)),
      (Qn = Yn.then),
      (Kn = function () {
        Qn.call(Yn, Bn);
      }))
    : (Kn = function () {
        to.call(v, Bn);
      }));
var co,
  ao,
  fo,
  so,
  lo =
    uo ||
    function (t) {
      var e = { fn: t, next: void 0 };
      qn && (qn.next = e), Vn || ((Vn = e), Kn()), (qn = e);
    },
  po = function (t) {
    var e, r;
    (this.promise = new t(function (t, n) {
      if (void 0 !== e || void 0 !== r)
        throw TypeError("Bad Promise constructor");
      (e = t), (r = n);
    })),
      (this.resolve = le(e)),
      (this.reject = le(r));
  },
  vo = {
    f: function (t) {
      return new po(t);
    },
  },
  ho = function (t, e) {
    if ((D(t), O(e) && e.constructor === t)) return e;
    var r = vo.f(t);
    return (0, r.resolve)(e), r.promise;
  },
  yo = function (t) {
    try {
      return { error: !1, value: t() };
    } catch (t) {
      return { error: !0, value: t };
    }
  },
  go = Jn.set,
  mo = oe("species"),
  bo = "Promise",
  So = at.get,
  wo = at.set,
  xo = at.getterFor(bo),
  Po = Pn,
  jo = v.TypeError,
  Eo = v.document,
  Oo = v.process,
  Ao = pt("fetch"),
  To = vo.f,
  Io = To,
  Ro = "process" == w(Oo),
  ko = !!(Eo && Eo.createEvent && v.dispatchEvent),
  Co = Dt(bo, function () {
    if (q(Po) === String(Po)) {
      if (66 === cr) return !0;
      if (!Ro && "function" != typeof PromiseRejectionEvent) return !0;
    }
    if (cr >= 51 && /native code/.test(Po)) return !1;
    var t = Po.resolve(1),
      e = function (t) {
        t(
          function () {},
          function () {}
        );
      };
    return (
      ((t.constructor = {})[mo] = e), !(t.then(function () {}) instanceof e)
    );
  }),
  _o =
    Co ||
    !$r(function (t) {
      Po.all(t).catch(function () {});
    }),
  $o = function (t) {
    var e;
    return !(!O(t) || "function" != typeof (e = t.then)) && e;
  },
  Lo = function (t, e, r) {
    if (!e.notified) {
      e.notified = !0;
      var n = e.reactions;
      lo(function () {
        for (var o = e.value, i = 1 == e.state, u = 0; n.length > u; ) {
          var c,
            a,
            f,
            s = n[u++],
            l = i ? s.ok : s.fail,
            p = s.resolve,
            v = s.reject,
            h = s.domain;
          try {
            l
              ? (i || (2 === e.rejection && No(t, e), (e.rejection = 1)),
                !0 === l
                  ? (c = o)
                  : (h && h.enter(), (c = l(o)), h && (h.exit(), (f = !0))),
                c === s.promise
                  ? v(jo("Promise-chain cycle"))
                  : (a = $o(c))
                  ? a.call(c, p, v)
                  : p(c))
              : v(o);
          } catch (t) {
            h && !f && h.exit(), v(t);
          }
        }
        (e.reactions = []), (e.notified = !1), r && !e.rejection && Mo(t, e);
      });
    }
  },
  Do = function (t, e, r) {
    var n, o;
    ko
      ? (((n = Eo.createEvent("Event")).promise = e),
        (n.reason = r),
        n.initEvent(t, !1, !0),
        v.dispatchEvent(n))
      : (n = { promise: e, reason: r }),
      (o = v["on" + t])
        ? o(n)
        : "unhandledrejection" === t &&
          (function (t, e) {
            var r = v.console;
            r &&
              r.error &&
              (1 === arguments.length ? r.error(t) : r.error(t, e));
          })("Unhandled promise rejection", r);
  },
  Mo = function (t, e) {
    go.call(v, function () {
      var r,
        n = e.value;
      if (
        Fo(e) &&
        ((r = yo(function () {
          Ro
            ? Oo.emit("unhandledRejection", n, t)
            : Do("unhandledrejection", t, n);
        })),
        (e.rejection = Ro || Fo(e) ? 2 : 1),
        r.error)
      )
        throw r.value;
    });
  },
  Fo = function (t) {
    return 1 !== t.rejection && !t.parent;
  },
  No = function (t, e) {
    go.call(v, function () {
      Ro ? Oo.emit("rejectionHandled", t) : Do("rejectionhandled", t, e.value);
    });
  },
  Uo = function (t, e, r, n) {
    return function (o) {
      t(e, r, o, n);
    };
  },
  Wo = function (t, e, r, n) {
    e.done ||
      ((e.done = !0), n && (e = n), (e.value = r), (e.state = 2), Lo(t, e, !0));
  },
  zo = function (t, e, r, n) {
    if (!e.done) {
      (e.done = !0), n && (e = n);
      try {
        if (t === r) throw jo("Promise can't be resolved itself");
        var o = $o(r);
        o
          ? lo(function () {
              var n = { done: !1 };
              try {
                o.call(r, Uo(zo, t, n, e), Uo(Wo, t, n, e));
              } catch (r) {
                Wo(t, n, r, e);
              }
            })
          : ((e.value = r), (e.state = 1), Lo(t, e, !1));
      } catch (r) {
        Wo(t, { done: !1 }, r, e);
      }
    }
  };
Co &&
  ((Po = function (t) {
    An(this, Po, bo), le(t), co.call(this);
    var e = So(this);
    try {
      t(Uo(zo, this, e), Uo(Wo, this, e));
    } catch (t) {
      Wo(this, e, t);
    }
  }),
  ((co = function (t) {
    wo(this, {
      type: bo,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    });
  }).prototype = jn(Po.prototype, {
    then: function (t, e) {
      var r = xo(this),
        n = To(Rn(this, Po));
      return (
        (n.ok = "function" != typeof t || t),
        (n.fail = "function" == typeof e && e),
        (n.domain = Ro ? Oo.domain : void 0),
        (r.parent = !0),
        r.reactions.push(n),
        0 != r.state && Lo(this, r, !1),
        n.promise
      );
    },
    catch: function (t) {
      return this.then(void 0, t);
    },
  })),
  (ao = function () {
    var t = new co(),
      e = So(t);
    (this.promise = t),
      (this.resolve = Uo(zo, t, e)),
      (this.reject = Uo(Wo, t, e));
  }),
  (vo.f = To = function (t) {
    return t === Po || t === fo ? new ao(t) : Io(t);
  }),
  "function" == typeof Pn &&
    ((so = Pn.prototype.then),
    ft(
      Pn.prototype,
      "then",
      function (t, e) {
        var r = this;
        return new Po(function (t, e) {
          so.call(r, t, e);
        }).then(t, e);
      },
      { unsafe: !0 }
    ),
    "function" == typeof Ao &&
      Ft(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (t) {
            return ho(Po, Ao.apply(v, arguments));
          },
        }
      ))),
  Ft({ global: !0, wrap: !0, forced: Co }, { Promise: Po }),
  se(Po, bo, !1),
  On(bo),
  (fo = pt(bo)),
  Ft(
    { target: bo, stat: !0, forced: Co },
    {
      reject: function (t) {
        var e = To(this);
        return e.reject.call(void 0, t), e.promise;
      },
    }
  ),
  Ft(
    { target: bo, stat: !0, forced: Co },
    {
      resolve: function (t) {
        return ho(this, t);
      },
    }
  ),
  Ft(
    { target: bo, stat: !0, forced: _o },
    {
      all: function (t) {
        var e = this,
          r = To(e),
          n = r.resolve,
          o = r.reject,
          i = yo(function () {
            var r = le(e.resolve),
              i = [],
              u = 0,
              c = 1;
            Tn(t, function (t) {
              var a = u++,
                f = !1;
              i.push(void 0),
                c++,
                r.call(e, t).then(function (t) {
                  f || ((f = !0), (i[a] = t), --c || n(i));
                }, o);
            }),
              --c || n(i);
          });
        return i.error && o(i.value), r.promise;
      },
      race: function (t) {
        var e = this,
          r = To(e),
          n = r.reject,
          o = yo(function () {
            var o = le(e.resolve);
            Tn(t, function (t) {
              o.call(e, t).then(r.resolve, n);
            });
          });
        return o.error && n(o.value), r.promise;
      },
    }
  );
var Go = !h(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Bo = l(function (t) {
    var e = F.f,
      r = J("meta"),
      n = 0,
      o =
        Object.isExtensible ||
        function () {
          return !0;
        },
      i = function (t) {
        e(t, r, { value: { objectID: "O" + ++n, weakData: {} } });
      },
      u = (t.exports = {
        REQUIRED: !1,
        fastKey: function (t, e) {
          if (!O(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!I(t, r)) {
            if (!o(t)) return "F";
            if (!e) return "E";
            i(t);
          }
          return t[r].objectID;
        },
        getWeakData: function (t, e) {
          if (!I(t, r)) {
            if (!o(t)) return !0;
            if (!e) return !1;
            i(t);
          }
          return t[r].weakData;
        },
        onFreeze: function (t) {
          return Go && u.REQUIRED && o(t) && !I(t, r) && i(t), t;
        },
      });
    et[r] = !0;
  }),
  Vo = F.f,
  qo = Bo.fastKey,
  Ko = at.set,
  Ho = at.getterFor,
  Xo =
    ((function (t, e, r) {
      var n = -1 !== "Set".indexOf("Map"),
        o = -1 !== "Set".indexOf("Weak"),
        i = n ? "set" : "add",
        u = v.Set,
        c = u && u.prototype,
        a = u,
        f = {},
        s = function (t) {
          var e = c[t];
          ft(
            c,
            t,
            "add" == t
              ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : "delete" == t
              ? function (t) {
                  return !(o && !O(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return o && !O(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : "has" == t
              ? function (t) {
                  return !(o && !O(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : function (t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        Dt(
          "Set",
          "function" != typeof u ||
            !(
              o ||
              (c.forEach &&
                !h(function () {
                  new u().entries().next();
                }))
            )
        )
      )
        (a = r.getConstructor(e, "Set", n, i)), (Bo.REQUIRED = !0);
      else if (Dt("Set", !0)) {
        var l = new a(),
          p = l[i](o ? {} : -0, 1) != l,
          d = h(function () {
            l.has(1);
          }),
          y = $r(function (t) {
            new u(t);
          }),
          g =
            !o &&
            h(function () {
              for (var t = new u(), e = 5; e--; ) t[i](e, e);
              return !t.has(-0);
            });
        y ||
          (((a = e(function (t, e) {
            An(t, a, "Set");
            var r = (function (t, e, r) {
              var n, o;
              return (
                Qr &&
                  "function" == typeof (n = e.constructor) &&
                  n !== r &&
                  O((o = n.prototype)) &&
                  o !== r.prototype &&
                  Qr(t, o),
                t
              );
            })(new u(), t, a);
            return null != e && Tn(e, r[i], r, n), r;
          })).prototype = c),
          (c.constructor = a)),
          (d || g) && (s("delete"), s("has"), n && s("get")),
          (g || p) && s(i),
          o && c.clear && delete c.clear;
      }
      (f.Set = a),
        Ft({ global: !0, forced: a != u }, f),
        se(a, "Set"),
        o || r.setStrong(a, "Set", n);
    })(
      0,
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      {
        getConstructor: function (t, e, r, n) {
          var o = t(function (t, i) {
              An(t, o, e),
                Ko(t, {
                  type: e,
                  index: Yt(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                d || (t.size = 0),
                null != i && Tn(i, t[n], t, r);
            }),
            i = Ho(e),
            u = function (t, e, r) {
              var n,
                o,
                u = i(t),
                a = c(t, e);
              return (
                a
                  ? (a.value = r)
                  : ((u.last = a = {
                      index: (o = qo(e, !0)),
                      key: e,
                      value: r,
                      previous: (n = u.last),
                      next: void 0,
                      removed: !1,
                    }),
                    u.first || (u.first = a),
                    n && (n.next = a),
                    d ? u.size++ : t.size++,
                    "F" !== o && (u.index[o] = a)),
                t
              );
            },
            c = function (t, e) {
              var r,
                n = i(t),
                o = qo(e);
              if ("F" !== o) return n.index[o];
              for (r = n.first; r; r = r.next) if (r.key == e) return r;
            };
          return (
            jn(o.prototype, {
              clear: function () {
                for (var t = i(this), e = t.index, r = t.first; r; )
                  (r.removed = !0),
                    r.previous && (r.previous = r.previous.next = void 0),
                    delete e[r.index],
                    (r = r.next);
                (t.first = t.last = void 0), d ? (t.size = 0) : (this.size = 0);
              },
              delete: function (t) {
                var e = i(this),
                  r = c(this, t);
                if (r) {
                  var n = r.next,
                    o = r.previous;
                  delete e.index[r.index],
                    (r.removed = !0),
                    o && (o.next = n),
                    n && (n.previous = o),
                    e.first == r && (e.first = n),
                    e.last == r && (e.last = o),
                    d ? e.size-- : this.size--;
                }
                return !!r;
              },
              forEach: function (t) {
                for (
                  var e,
                    r = i(this),
                    n = pe(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.next : r.first);

                )
                  for (n(e.value, e.key, this); e && e.removed; )
                    e = e.previous;
              },
              has: function (t) {
                return !!c(this, t);
              },
            }),
            jn(
              o.prototype,
              r
                ? {
                    get: function (t) {
                      var e = c(this, t);
                      return e && e.value;
                    },
                    set: function (t, e) {
                      return u(this, 0 === t ? 0 : t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return u(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            d &&
              Vo(o.prototype, "size", {
                get: function () {
                  return i(this).size;
                },
              }),
            o
          );
        },
        setStrong: function (t, e, r) {
          var n = e + " Iterator",
            o = Ho(e),
            i = Ho(n);
          rn(
            t,
            e,
            function (t, e) {
              Ko(this, {
                type: n,
                target: t,
                state: o(t),
                kind: e,
                last: void 0,
              });
            },
            function () {
              for (var t = i(this), e = t.kind, r = t.last; r && r.removed; )
                r = r.previous;
              return t.target && (t.last = r = r ? r.next : t.state.first)
                ? "keys" == e
                  ? { value: r.key, done: !1 }
                  : "values" == e
                  ? { value: r.value, done: !1 }
                  : { value: [r.key, r.value], done: !1 }
                : ((t.target = void 0), { value: void 0, done: !0 });
            },
            r ? "entries" : "values",
            !r,
            !0
          ),
            On(e);
        },
      }
    ),
    function (t) {
      return function (e, r) {
        var n,
          o,
          i = String(j(e)),
          u = dt(r),
          c = i.length;
        return u < 0 || u >= c
          ? t
            ? ""
            : void 0
          : (n = i.charCodeAt(u)) < 55296 ||
            n > 56319 ||
            u + 1 === c ||
            (o = i.charCodeAt(u + 1)) < 56320 ||
            o > 57343
          ? t
            ? i.charAt(u)
            : n
          : t
          ? i.slice(u, u + 2)
          : o - 56320 + ((n - 55296) << 10) + 65536;
      };
    }),
  Yo = { codeAt: Xo(!1), charAt: Xo(!0) },
  Qo = Yo.charAt,
  Jo = at.set,
  Zo = at.getterFor("String Iterator");
rn(
  String,
  "String",
  function (t) {
    Jo(this, { type: "String Iterator", string: String(t), index: 0 });
  },
  function () {
    var t,
      e = Zo(this),
      r = e.string,
      n = e.index;
    return n >= r.length
      ? { value: void 0, done: !0 }
      : ((t = Qo(r, n)), (e.index += t.length), { value: t, done: !1 });
  }
);
var ti,
  ei = oe("match"),
  ri = function (t) {
    var e;
    return O(t) && (void 0 !== (e = t[ei]) ? !!e : "RegExp" == w(t));
  },
  ni = function (t) {
    if (ri(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  },
  oi = oe("match"),
  ii = function (t) {
    var e = /./;
    try {
      "/./"[t](e);
    } catch (r) {
      try {
        return (e[oi] = !1), "/./"[t](e);
      } catch (t) {}
    }
    return !1;
  },
  ui = L.f,
  ci = "".startsWith,
  ai = Math.min,
  fi = ii("startsWith"),
  si = !(fi || ((ti = ui(String.prototype, "startsWith")), !ti || ti.writable));
Ft(
  { target: "String", proto: !0, forced: !si && !fi },
  {
    startsWith: function (t) {
      var e = String(j(this));
      ni(t);
      var r = gt(ai(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        n = String(t);
      return ci ? ci.call(e, n, r) : e.slice(r, r + n.length) === n;
    },
  }
);
var li = {
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
  pi = oe("iterator"),
  vi = oe("toStringTag"),
  hi = un.values;
for (var di in li) {
  var yi = v[di],
    gi = yi && yi.prototype;
  if (gi) {
    if (gi[pi] !== hi)
      try {
        N(gi, pi, hi);
      } catch (t) {
        gi[pi] = hi;
      }
    if ((gi[vi] || N(gi, vi, di), li[di]))
      for (var mi in un)
        if (gi[mi] !== un[mi])
          try {
            N(gi, mi, un[mi]);
          } catch (t) {
            gi[mi] = un[mi];
          }
  }
}
function bi(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Si = Date.prototype,
  wi = Si.toString,
  xi = Si.getTime;
new Date(NaN) + "" != "Invalid Date" &&
  ft(Si, "toString", function () {
    var t = xi.call(this);
    return t == t ? wi.call(this) : "Invalid Date";
  });
var Pi = function () {
    var t = D(this),
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
  ji = RegExp.prototype,
  Ei = ji.toString;
(h(function () {
  return "/a/b" != Ei.call({ source: "a", flags: "b" });
}) ||
  "toString" != Ei.name) &&
  ft(
    RegExp.prototype,
    "toString",
    function () {
      var t = D(this),
        e = String(t.source),
        r = t.flags;
      return (
        "/" +
        e +
        "/" +
        String(
          void 0 === r && t instanceof RegExp && !("flags" in ji)
            ? Pi.call(t)
            : r
        )
      );
    },
    { unsafe: !0 }
  );
var Oi = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ai = "[" + Oi + "]",
  Ti = RegExp("^" + Ai + Ai + "*"),
  Ii = RegExp(Ai + Ai + "*$"),
  Ri = function (t) {
    return function (e) {
      var r = String(j(e));
      return (
        1 & t && (r = r.replace(Ti, "")), 2 & t && (r = r.replace(Ii, "")), r
      );
    };
  },
  ki = (Ri(1), Ri(2), Ri(3));
function Ci(t) {
  return n(null == t ? void 0 : t.trim(), "​");
}
Ft(
  {
    target: "String",
    proto: !0,
    forced: h(function () {
      return !!Oi.trim() || "​᠎" != "​᠎".trim() || "trim" !== Oi.trim.name;
    }),
  },
  {
    trim: function () {
      return ki(this);
    },
  }
);
var _i =
  !(
    "[object process]" ===
    Object.prototype.toString.call("undefined" != typeof process ? process : 0)
  ) && "undefined" != typeof window;
function $i(t, e) {
  return RegExp(t, e);
}
var Li,
  Di,
  Mi = {
    UNSUPPORTED_Y: h(function () {
      var t = $i("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    }),
    BROKEN_CARET: h(function () {
      var t = $i("^r", "gy");
      return (t.lastIndex = 2), null != t.exec("str");
    }),
  },
  Fi = RegExp.prototype.exec,
  Ni = String.prototype.replace,
  Ui = Fi,
  Wi =
    ((Di = /b*/g),
    Fi.call((Li = /a/), "a"),
    Fi.call(Di, "a"),
    0 !== Li.lastIndex || 0 !== Di.lastIndex),
  zi = Mi.UNSUPPORTED_Y || Mi.BROKEN_CARET,
  Gi = void 0 !== /()??/.exec("")[1];
(Wi || Gi || zi) &&
  (Ui = function (t) {
    var e,
      r,
      n,
      o,
      i = this,
      u = zi && i.sticky,
      c = Pi.call(i),
      a = i.source,
      f = 0,
      s = t;
    return (
      u &&
        (-1 === (c = c.replace("y", "")).indexOf("g") && (c += "g"),
        (s = String(t).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline || (i.multiline && "\n" !== t[i.lastIndex - 1])) &&
          ((a = "(?: " + a + ")"), (s = " " + s), f++),
        (r = new RegExp("^(?:" + a + ")", c))),
      Gi && (r = new RegExp("^" + a + "$(?!\\s)", c)),
      Wi && (e = i.lastIndex),
      (n = Fi.call(u ? r : i, s)),
      u
        ? n
          ? ((n.input = n.input.slice(f)),
            (n[0] = n[0].slice(f)),
            (n.index = i.lastIndex),
            (i.lastIndex += n[0].length))
          : (i.lastIndex = 0)
        : Wi && n && (i.lastIndex = i.global ? n.index + n[0].length : e),
      Gi &&
        n &&
        n.length > 1 &&
        Ni.call(n[0], r, function () {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (n[o] = void 0);
        }),
      n
    );
  });
var Bi = Ui;
Ft({ target: "RegExp", proto: !0, forced: /./.exec !== Bi }, { exec: Bi });
var Vi = oe("species"),
  qi = !h(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: "7" }), t;
      }),
      "7" !== "".replace(t, "$<a>")
    );
  }),
  Ki = "$0" === "a".replace(/./, "$0"),
  Hi = oe("replace"),
  Xi = !!/./[Hi] && "" === /./[Hi]("a", "$0"),
  Yi = !h(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var r = "ab".split(t);
    return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
  }),
  Qi = function (t, e, r, n) {
    var o = oe(t),
      i = !h(function () {
        var e = {};
        return (
          (e[o] = function () {
            return 7;
          }),
          7 != ""[t](e)
        );
      }),
      u =
        i &&
        !h(function () {
          var e = !1,
            r = /a/;
          return (
            "split" === t &&
              (((r = {}).constructor = {}),
              (r.constructor[Vi] = function () {
                return r;
              }),
              (r.flags = ""),
              (r[o] = /./[o])),
            (r.exec = function () {
              return (e = !0), null;
            }),
            r[o](""),
            !e
          );
        });
    if (
      !i ||
      !u ||
      ("replace" === t && (!qi || !Ki || Xi)) ||
      ("split" === t && !Yi)
    ) {
      var c = /./[o],
        a = r(
          o,
          ""[t],
          function (t, e, r, n, o) {
            return e.exec === Bi
              ? i && !o
                ? { done: !0, value: c.call(e, r, n) }
                : { done: !0, value: t.call(r, e, n) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: Ki,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Xi,
          }
        ),
        f = a[1];
      ft(String.prototype, t, a[0]),
        ft(
          RegExp.prototype,
          o,
          2 == e
            ? function (t, e) {
                return f.call(t, this, e);
              }
            : function (t) {
                return f.call(t, this);
              }
        );
    }
    n && N(RegExp.prototype[o], "sham", !0);
  },
  Ji = Yo.charAt,
  Zi = function (t, e, r) {
    return e + (r ? Ji(t, e).length : 1);
  },
  tu = function (t, e) {
    var r = t.exec;
    if ("function" == typeof r) {
      var n = r.call(t, e);
      if ("object" != typeof n)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        );
      return n;
    }
    if ("RegExp" !== w(t))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return Bi.call(t, e);
  },
  eu = Math.max,
  ru = Math.min,
  nu = Math.floor,
  ou = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  iu = /\$([$&'`]|\d\d?)/g;
Qi("replace", 2, function (t, e, r, n) {
  var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = n.REPLACE_KEEPS_$0,
    u = o ? "$" : "$0";
  return [
    function (r, n) {
      var o = j(this),
        i = null == r ? void 0 : r[t];
      return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n);
    },
    function (t, n) {
      if ((!o && i) || ("string" == typeof n && -1 === n.indexOf(u))) {
        var a = r(e, t, this, n);
        if (a.done) return a.value;
      }
      var f = D(t),
        s = String(this),
        l = "function" == typeof n;
      l || (n = String(n));
      var p = f.global;
      if (p) {
        var v = f.unicode;
        f.lastIndex = 0;
      }
      for (var h = []; ; ) {
        var d = tu(f, s);
        if (null === d) break;
        if ((h.push(d), !p)) break;
        "" === String(d[0]) && (f.lastIndex = Zi(s, gt(f.lastIndex), v));
      }
      for (var y, g = "", m = 0, b = 0; b < h.length; b++) {
        d = h[b];
        for (
          var S = String(d[0]),
            w = eu(ru(dt(d.index), s.length), 0),
            x = [],
            P = 1;
          P < d.length;
          P++
        )
          x.push(void 0 === (y = d[P]) ? y : String(y));
        var j = d.groups;
        if (l) {
          var E = [S].concat(x, w, s);
          void 0 !== j && E.push(j);
          var O = String(n.apply(void 0, E));
        } else O = c(S, s, w, x, j, n);
        w >= m && ((g += s.slice(m, w) + O), (m = w + S.length));
      }
      return g + s.slice(m);
    },
  ];
  function c(t, r, n, o, i, u) {
    var c = n + t.length,
      a = o.length,
      f = iu;
    return (
      void 0 !== i && ((i = zt(i)), (f = ou)),
      e.call(u, f, function (e, u) {
        var f;
        switch (u.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return r.slice(0, n);
          case "'":
            return r.slice(c);
          case "<":
            f = i[u.slice(1, -1)];
            break;
          default:
            var s = +u;
            if (0 === s) return e;
            if (s > a) {
              var l = nu(s / 10);
              return 0 === l
                ? e
                : l <= a
                ? void 0 === o[l - 1]
                  ? u.charAt(1)
                  : o[l - 1] + u.charAt(1)
                : e;
            }
            f = o[s - 1];
        }
        return void 0 === f ? "" : f;
      })
    );
  }
});
var uu = wt.indexOf,
  cu = [].indexOf,
  au = !!cu && 1 / [1].indexOf(1, -0) < 0,
  fu = sn("indexOf"),
  su = vr("indexOf", { ACCESSORS: !0, 1: 0 });
Ft(
  { target: "Array", proto: !0, forced: au || !fu || !su },
  {
    indexOf: function (t) {
      return au
        ? cu.apply(this, arguments) || 0
        : uu(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var lu = Object.assign,
  pu = Object.defineProperty,
  vu =
    !lu ||
    h(function () {
      if (
        d &&
        1 !==
          lu(
            { b: 1 },
            lu(
              pu({}, "a", {
                enumerable: !0,
                get: function () {
                  pu(this, "b", { value: 3, enumerable: !1 });
                },
              }),
              { b: 2 }
            )
          ).b
      )
        return !0;
      var t = {},
        e = {},
        r = Symbol();
      return (
        (t[r] = 7),
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          e[t] = t;
        }),
        7 != lu({}, t)[r] || "abcdefghijklmnopqrst" != Gt(lu({}, e)).join("")
      );
    })
      ? function (t, e) {
          for (
            var r = zt(t), n = arguments.length, o = 1, i = At.f, u = m.f;
            n > o;

          )
            for (
              var c,
                a = P(arguments[o++]),
                f = i ? Gt(a).concat(i(a)) : Gt(a),
                s = f.length,
                l = 0;
              s > l;

            )
              (c = f[l++]), (d && !u.call(a, c)) || (r[c] = a[c]);
          return r;
        }
      : lu;
Ft(
  { target: "Object", stat: !0, forced: Object.assign !== vu },
  { assign: vu }
);
var hu = L.f,
  du = "".endsWith,
  yu = Math.min,
  gu = ii("endsWith"),
  mu =
    !gu &&
    !!(function () {
      var t = hu(String.prototype, "endsWith");
      return t && !t.writable;
    })();
Ft(
  { target: "String", proto: !0, forced: !mu && !gu },
  {
    endsWith: function (t) {
      var e = String(j(this));
      ni(t);
      var r = arguments.length > 1 ? arguments[1] : void 0,
        n = gt(e.length),
        o = void 0 === r ? n : yu(gt(r), n),
        i = String(t);
      return du ? du.call(e, i, o) : e.slice(o - i.length, o) === i;
    },
  }
);
var bu = [].push,
  Su = Math.min,
  wu = !h(function () {
    return !RegExp(4294967295, "y");
  });
Qi(
  "split",
  2,
  function (t, e, r) {
    var n;
    return (
      (n =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (t, r) {
              var n = String(j(this)),
                o = void 0 === r ? 4294967295 : r >>> 0;
              if (0 === o) return [];
              if (void 0 === t) return [n];
              if (!ri(t)) return e.call(n, t, o);
              for (
                var i,
                  u,
                  c,
                  a = [],
                  f = 0,
                  s = new RegExp(
                    t.source,
                    (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : "") +
                      "g"
                  );
                (i = Bi.call(s, n)) &&
                !(
                  (u = s.lastIndex) > f &&
                  (a.push(n.slice(f, i.index)),
                  i.length > 1 && i.index < n.length && bu.apply(a, i.slice(1)),
                  (c = i[0].length),
                  (f = u),
                  a.length >= o)
                );

              )
                s.lastIndex === i.index && s.lastIndex++;
              return (
                f === n.length
                  ? (!c && s.test("")) || a.push("")
                  : a.push(n.slice(f)),
                a.length > o ? a.slice(0, o) : a
              );
            }
          : "0".split(void 0, 0).length
          ? function (t, r) {
              return void 0 === t && 0 === r ? [] : e.call(this, t, r);
            }
          : e),
      [
        function (e, r) {
          var o = j(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r);
        },
        function (t, o) {
          var i = r(n, t, this, o, n !== e);
          if (i.done) return i.value;
          var u = D(t),
            c = String(this),
            a = Rn(u, RegExp),
            f = u.unicode,
            s = new a(
              wu ? u : "^(?:" + u.source + ")",
              (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (wu ? "y" : "g")
            ),
            l = void 0 === o ? 4294967295 : o >>> 0;
          if (0 === l) return [];
          if (0 === c.length) return null === tu(s, c) ? [c] : [];
          for (var p = 0, v = 0, h = []; v < c.length; ) {
            s.lastIndex = wu ? v : 0;
            var d,
              y = tu(s, wu ? c : c.slice(v));
            if (
              null === y ||
              (d = Su(gt(s.lastIndex + (wu ? 0 : v)), c.length)) === p
            )
              v = Zi(c, v, f);
            else {
              if ((h.push(c.slice(p, v)), h.length === l)) return h;
              for (var g = 1; g <= y.length - 1; g++)
                if ((h.push(y[g]), h.length === l)) return h;
              v = p = d;
            }
          }
          return h.push(c.slice(p)), h;
        },
      ]
    );
  },
  !wu
);
var xu = encodeURIComponent;
function Pu(t) {
  return t && t.startsWith("'") ? t.substr(1, t.length - 2) : t;
}
var ju = {
    type: "audio",
    name: "forvo",
    url: "https://forvo.com",
    makeUrl: function (t) {
      var e = t.lang;
      return "https://ru.forvo.com/word/" + xu(t.text) + "/#" + e;
    },
    plan: [
      {
        selector: "article.pronunciations ul.show-all-pronunciations li",
        parse: function (t) {
          try {
            return Promise.resolve(t.$$("span.play")).then(function (e) {
              var r = e[0];
              return r
                ? Promise.resolve(r.getAttribute("onclick")).then(function (e) {
                    var r = (function (t) {
                      if (t) {
                        var e = t.indexOf("("),
                          r = t.indexOf(")");
                        return {
                          name: t.substr(0, e),
                          args: t
                            .substr(e + 1, r - e - 1)
                            .split(",")
                            .map(Pu),
                        };
                      }
                    })(e);
                    if (r && "Play" === r.name) {
                      var n =
                        "https://audio00.forvo.com/audios/mp3/" +
                        c.decode(r.args[4]);
                      if (n.endsWith(".mp3")) {
                        var a = { url: n };
                        return Promise.resolve(t.$$("span.ofLink")).then(
                          function (e) {
                            function r() {
                              return Promise.resolve(t.$$("span.from")).then(
                                function (t) {
                                  function e() {
                                    return [{ audio: a }];
                                  }
                                  var r = t[0],
                                    n = (function () {
                                      if (r)
                                        return Promise.resolve(
                                          r.textContent()
                                        ).then(function (t) {
                                          var e = (function (t) {
                                            if (t) {
                                              var e = (t = u(
                                                i(t, "("),
                                                ")"
                                              )).split(",");
                                              if (!o(e)) {
                                                var r,
                                                  n = {
                                                    gender:
                                                      ((r = e[0]),
                                                      "женщина" === (r = Ci(r))
                                                        ? "f"
                                                        : "мужчина" === r
                                                        ? "m"
                                                        : r),
                                                  };
                                                return (
                                                  2 === e.length &&
                                                    (n.country = (function (t) {
                                                      return Ci(t);
                                                    })(e[1])),
                                                  n
                                                );
                                              }
                                            }
                                          })(t);
                                          e && Object.assign(a, e);
                                        });
                                    })();
                                  return n && n.then ? n.then(e) : e();
                                }
                              );
                            }
                            var n = e[0],
                              c = (function () {
                                if (n)
                                  return Promise.resolve(
                                    n.getAttribute("data-p2")
                                  ).then(function (t) {
                                    t && (a.author = t);
                                  });
                              })();
                            return c && c.then ? c.then(r) : r();
                          }
                        );
                      }
                    }
                  })
                : void 0;
            });
          } catch (t) {
            return Promise.reject(t);
          }
        },
      },
    ],
  },
  Eu = {
    type: "audio",
    name: "howjsay",
    url: "https://howjsay.com",
    getData: function (t) {
      var e = t.text;
      try {
        var r = "https://howjsay.com/mp3/" + encodeURIComponent(e) + ".mp3";
        return Promise.resolve({ audio: [{ url: r }] });
      } catch (t) {
        return Promise.reject(t);
      }
    },
  },
  Ou = ge.find,
  Au = !0,
  Tu = vr("find");
"find" in [] &&
  Array(1).find(function () {
    Au = !1;
  }),
  Ft(
    { target: "Array", proto: !0, forced: Au || !Tu },
    {
      find: function (t) {
        return Ou(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  Wr("find");
var Iu = function (t) {
    try {
      return (
        _i &&
          (t = "https://api.allorigins.win/raw?url=" + encodeURIComponent(t)),
        Promise.resolve(
          a(t, {
            headers: {
              "User-Agent": "lingua-bot",
              Accept: "text/html,application/xhtml+xml",
            },
          })
        ).then(function (t) {
          if (!t.ok) throw new Error(t.statusText);
          return Promise.resolve(t.text()).then(function (t) {
            return new ku(t);
          });
        })
      );
    } catch (t) {
      return Promise.reject(t);
    }
  },
  Ru = (function () {
    function t(t, e) {
      (this.$ = t), (this.elem = e);
    }
    var e = t.prototype;
    return (
      (e.$$ = function (e) {
        try {
          var r = this,
            n = r.elem.find(e),
            o = [];
          return (
            n.each(function (e, n) {
              o.push(new t(r.$, r.$(n)));
            }),
            Promise.resolve(o)
          );
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (e.getAttribute = function (t) {
        try {
          return Promise.resolve(this.elem.attr(t));
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (e.textContent = function () {
        try {
          return Promise.resolve(this.elem.text());
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      t
    );
  })(),
  ku = (function () {
    function t(t) {
      this.$ = f.load(t);
    }
    var e = t.prototype;
    return (
      (e.$$ = function (t) {
        var e = this,
          r = this.$(t),
          n = [];
        return (
          r.each(function (t, r) {
            n.push(new Ru(e.$, e.$(r)));
          }),
          Promise.resolve(n)
        );
      }),
      (e.close = function () {
        return Promise.resolve(void 0);
      }),
      t
    );
  })(),
  Cu = (function () {
    function t(t, e) {
      (this.page = t), (this.elem = e);
    }
    var e = t.prototype;
    return (
      (e.$$ = function (e) {
        try {
          var r = this;
          return Promise.resolve(r.elem.$$(e)).then(function (e) {
            return e.map(function (e) {
              return new t(r.page, e);
            });
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (e.getAttribute = function (t) {
        return this.elem.getAttribute(t);
      }),
      (e.textContent = function () {
        return this.elem.textContent();
      }),
      t
    );
  })(),
  _u = (function () {
    function t(t, e) {
      (this.browser = t), (this.page = e);
    }
    var e = t.prototype;
    return (
      (e.$$ = function (t) {
        try {
          var e = function () {
              return Promise.resolve(r.page.$$(t)).then(function (t) {
                return t.map(function (t) {
                  return new Cu(r.page, t);
                });
              });
            },
            r = this,
            n = (function (e, n) {
              try {
                var o = Promise.resolve(
                  r.page.waitForSelector(t, { timeout: 5e3 })
                ).then(function () {});
              } catch (t) {
                return;
              }
              return o && o.then ? o.then(void 0, function () {}) : o;
            })();
          return Promise.resolve(n && n.then ? n.then(e) : e());
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (e.close = function () {
        try {
          var t = this;
          return Promise.resolve(t.page.close()).then(function () {
            return Promise.resolve(t.browser.close()).then(function () {});
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      t
    );
  })();
function $u(t, e) {
  try {
    var r = t();
  } catch (t) {
    return e(t);
  }
  return r && r.then ? r.then(void 0, e) : r;
}
var Lu =
  "undefined" != typeof Symbol
    ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))
    : "@@iterator";
function Du(t, e, r) {
  if (!t.s) {
    if (r instanceof Mu) {
      if (!r.s) return void (r.o = Du.bind(null, t, e));
      1 & e && (e = r.s), (r = r.v);
    }
    if (r && r.then)
      return void r.then(Du.bind(null, t, e), Du.bind(null, t, 2));
    (t.s = e), (t.v = r);
    var n = t.o;
    n && n(t);
  }
}
var Mu = (function () {
  function t() {}
  return (
    (t.prototype.then = function (e, r) {
      var n = new t(),
        o = this.s;
      if (o) {
        var i = 1 & o ? e : r;
        if (i) {
          try {
            Du(n, 1, i(this.v));
          } catch (t) {
            Du(n, 2, t);
          }
          return n;
        }
        return this;
      }
      return (
        (this.o = function (t) {
          try {
            var o = t.v;
            1 & t.s ? Du(n, 1, e ? e(o) : o) : r ? Du(n, 1, r(o)) : Du(n, 2, o);
          } catch (t) {
            Du(n, 2, t);
          }
        }),
        n
      );
    }),
    t
  );
})();
function Fu(t) {
  return t instanceof Mu && 1 & t.s;
}
function Nu(t, e, r) {
  if ("function" == typeof t[Lu]) {
    var n,
      o,
      i,
      u = t[Lu]();
    if (
      ((function t(c) {
        try {
          for (; !((n = u.next()).done || (r && r())); )
            if ((c = e(n.value)) && c.then) {
              if (!Fu(c))
                return void c.then(
                  t,
                  i || (i = Du.bind(null, (o = new Mu()), 2))
                );
              c = c.v;
            }
          o ? Du(o, 1, c) : (o = c);
        } catch (t) {
          Du(o || (o = new Mu()), 2, t);
        }
      })(),
      u.return)
    ) {
      var c = function (t) {
        try {
          n.done || u.return();
        } catch (t) {}
        return t;
      };
      if (o && o.then)
        return o.then(c, function (t) {
          throw c(t);
        });
      c();
    }
    return o;
  }
  if (!("length" in t)) throw new TypeError("Object is not iterable");
  for (var a = [], f = 0; f < t.length; f++) a.push(t[f]);
  return (function (t, e, r) {
    var n,
      o,
      i = -1;
    return (
      (function u(c) {
        try {
          for (; ++i < t.length && (!r || !r()); )
            if ((c = e(i)) && c.then) {
              if (!Fu(c))
                return void c.then(
                  u,
                  o || (o = Du.bind(null, (n = new Mu()), 2))
                );
              c = c.v;
            }
          n ? Du(n, 1, c) : (n = c);
        } catch (t) {
          Du(n || (n = new Mu()), 2, t);
        }
      })(),
      n
    );
  })(
    a,
    function (t) {
      return e(a[t]);
    },
    r
  );
}
var Uu = [
  {
    type: "visual",
    name: "unsplash",
    url: "https://unsplash.com",
    makeUrl: function (t) {
      return "/s/photos/" + t.text.replace(" ", "-");
    },
    plan: [
      {
        selector: 'div[data-test="search-photos-route"] figure img',
        exclude: ["^https://images.unsplash.com/profile-"],
        visual: ["@src"],
      },
    ],
  },
  {
    type: "universal",
    engine: "playwright",
    name: "wordnik",
    url: "https://www.wordnik.com",
    makeUrl: function (t) {
      return "/words/" + t.text;
    },
    plan: [{ selector: ".flickr-module .thumbs img", visual: ["@src"] }],
  },
  {
    type: "universal",
    name: "macmillan",
    url: "https://www.macmillandictionary.com",
    makeUrl: function (t) {
      return "/dictionary/british/" + t.text;
    },
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
  ju,
  Eu,
];
function Wu(n) {
  return function (o) {
    var i = o.text,
      u = o.lang;
    try {
      var c,
        a = function (o) {
          if (c) return o;
          var i = n.makeUrl(f);
          return (
            i.startsWith("/") && (i = n.url + i),
            $u(
              function () {
                return Promise.resolve(
                  (function (t, e) {
                    return "playwright" === t
                      ? (function (t) {
                          try {
                            var e,
                              r = function (r) {
                                if (e) return r;
                                var n = require("playwright");
                                return Promise.resolve(
                                  n.chromium.launch()
                                ).then(function (e) {
                                  return Promise.resolve(e.newPage()).then(
                                    function (r) {
                                      return Promise.resolve(r.goto(t)).then(
                                        function () {
                                          return new _u(e, r);
                                        }
                                      );
                                    }
                                  );
                                });
                              },
                              n = (function () {
                                if (_i) return (e = 1), Promise.resolve(Iu(t));
                              })();
                            return Promise.resolve(
                              n && n.then ? n.then(r) : r(n)
                            );
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        })(e)
                      : Iu(e);
                  })(n.engine, i)
                ).then(function (o) {
                  return (function (n, o, i) {
                    try {
                      var u = function () {
                          return {
                            source: { name: n.name, url: n.url },
                            data: r(c, function (t) {
                              return Array.from(t);
                            }),
                          };
                        },
                        c = {},
                        a = function (t) {
                          t && !c[t] && (c[t] = new Set());
                        },
                        f = function (r, n, i) {
                          try {
                            a(r);
                            var u = r ? c[r] : void 0;
                            return Promise.resolve(o.$$(n.selector)).then(
                              function (r) {
                                var o = Nu(r, function (r) {
                                  return Promise.resolve(i(n, r)).then(
                                    function (r) {
                                      if (Array.isArray(r))
                                        for (
                                          var n,
                                            o = (function (t, e) {
                                              var r;
                                              if (
                                                "undefined" == typeof Symbol ||
                                                null == t[Symbol.iterator]
                                              ) {
                                                if (
                                                  Array.isArray(t) ||
                                                  (r = (function (t, e) {
                                                    if (t) {
                                                      if ("string" == typeof t)
                                                        return bi(t, void 0);
                                                      var r = Object.prototype.toString
                                                        .call(t)
                                                        .slice(8, -1);
                                                      return (
                                                        "Object" === r &&
                                                          t.constructor &&
                                                          (r =
                                                            t.constructor.name),
                                                        "Map" === r ||
                                                        "Set" === r
                                                          ? Array.from(t)
                                                          : "Arguments" === r ||
                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                              r
                                                            )
                                                          ? bi(t, void 0)
                                                          : void 0
                                                      );
                                                    }
                                                  })(t))
                                                ) {
                                                  r && (t = r);
                                                  var n = 0;
                                                  return function () {
                                                    return n >= t.length
                                                      ? { done: !0 }
                                                      : {
                                                          done: !1,
                                                          value: t[n++],
                                                        };
                                                  };
                                                }
                                                throw new TypeError(
                                                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                                );
                                              }
                                              return (r = t[
                                                Symbol.iterator
                                              ]()).next.bind(r);
                                            })(
                                              r.filter(function (e) {
                                                return !t(e) && "" !== e;
                                              })
                                            );
                                          !(n = o()).done;

                                        ) {
                                          var i = n.value;
                                          u
                                            ? u.add(i)
                                            : e(i, function (t, e) {
                                                a(e), c[e].add(t);
                                              });
                                        }
                                    }
                                  );
                                });
                                if (o && o.then) return o.then(function () {});
                              }
                            );
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        },
                        s = function (t, e) {
                          return (
                            !!t.exclude &&
                            t.exclude.some(function (t) {
                              return t.startsWith("^")
                                ? e.startsWith(t.substr(1))
                                : e === t;
                            })
                          );
                        },
                        l = function (t, e) {
                          try {
                            return Promise.resolve(e.textContent()).then(
                              function (e) {
                                var r = Ci(e);
                                return r ? (s(t, r) ? void 0 : [r]) : void 0;
                              }
                            );
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        },
                        p = function (t, e, r) {
                          try {
                            var n = function () {
                                return 0 === o.length ? void 0 : o;
                              },
                              o = [],
                              i = Nu(r, function (r) {
                                function n() {
                                  s(t, i) || o.push(i);
                                }
                                var i,
                                  u = r.startsWith("@")
                                    ? Promise.resolve(
                                        e.getAttribute(r.substr(1))
                                      ).then(function (t) {
                                        i = t;
                                      })
                                    : Promise.resolve(e.text()).then(function (
                                        t
                                      ) {
                                        i = Ci(t);
                                      });
                                return u && u.then ? u.then(n) : n();
                              });
                            return Promise.resolve(
                              i && i.then ? i.then(n) : n()
                            );
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        },
                        v = function (t, e) {
                          try {
                            return Promise.resolve(p(t, e, t.audio));
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        },
                        h = function (t, e) {
                          try {
                            return Promise.resolve(p(t, e, t.visual));
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        },
                        d = function (t, e) {
                          return t.parse(e);
                        },
                        y = Nu(n.plan, function (t) {
                          var e = (function () {
                            if (t.term)
                              return Promise.resolve(
                                f(t.term, t, l)
                              ).then(function () {});
                            var e = (function () {
                              if (t.audio)
                                return Promise.resolve(
                                  f("audio", t, v)
                                ).then(function () {});
                              var e = (function () {
                                if (t.visual)
                                  return Promise.resolve(
                                    f("visual", t, h)
                                  ).then(function () {});
                                var e = (function () {
                                  if (t.parse)
                                    return Promise.resolve(
                                      f(void 0, t, d)
                                    ).then(function () {});
                                })();
                                return e && e.then
                                  ? e.then(function () {})
                                  : void 0;
                              })();
                              return e && e.then
                                ? e.then(function () {})
                                : void 0;
                            })();
                            return e && e.then
                              ? e.then(function () {})
                              : void 0;
                          })();
                          if (e && e.then) return e.then(function () {});
                        });
                      return Promise.resolve(y && y.then ? y.then(u) : u());
                    } catch (t) {
                      return Promise.reject(t);
                    }
                  })(n, o);
                });
              },
              function (t) {
                return (
                  console.log("error", n.name, t),
                  { source: { name: n.name, url: n.url }, error: t }
                );
              }
            )
          );
        },
        f = { text: i, lang: u || "en" },
        s = (function () {
          if (n.getData)
            return $u(
              function () {
                return Promise.resolve(n.getData(f)).then(function (t) {
                  return (
                    (c = 1), { source: { name: n.name, url: n.url }, data: t }
                  );
                });
              },
              function (t) {
                return (
                  console.log("error", n.name, t),
                  (c = 1),
                  { source: { name: n.name, url: n.url }, error: t }
                );
              }
            );
        })();
      return Promise.resolve(s && s.then ? s.then(a) : a(s));
    } catch (t) {
      return Promise.reject(t);
    }
  };
}
function zu(t, e) {
  void 0 === e && (e = {});
  var r =
    e.sources ||
    Uu.filter(function (t) {
      return !e.type || t.type === e.type;
    });
  return Promise.all(
    r.map(Wu).map(function (e) {
      return e(t);
    })
  );
}
export { zu as fetchData, Uu as sources };
//# sourceMappingURL=bundle.esm.js.map
