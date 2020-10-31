function t(t) {
  return t && "object" == typeof t && "default" in t ? t.default : t;
}
var e = t(require("lodash/isNil")),
  r = t(require("lodash/forEach")),
  n = t(require("lodash/mapValues")),
  o = t(require("lodash/trim")),
  i = t(require("lodash/isEmpty")),
  u = t(require("lodash/trimStart")),
  c = t(require("lodash/trimEnd")),
  a = require("js-base64"),
  f = t(require("isomorphic-unfetch")),
  s = t(require("cheerio")),
  l =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
function p(t, e, r) {
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
var v = function (t) {
    return t && t.Math == Math && t;
  },
  h =
    v("object" == typeof globalThis && globalThis) ||
    v("object" == typeof window && window) ||
    v("object" == typeof self && self) ||
    v("object" == typeof l && l) ||
    Function("return this")(),
  d = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  y = !d(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  g = {}.propertyIsEnumerable,
  m = Object.getOwnPropertyDescriptor,
  b = {
    f:
      m && !g.call({ 1: 2 }, 1)
        ? function (t) {
            var e = m(this, t);
            return !!e && e.enumerable;
          }
        : g,
  },
  S = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  },
  w = {}.toString,
  x = function (t) {
    return w.call(t).slice(8, -1);
  },
  P = "".split,
  j = d(function () {
    return !Object("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == x(t) ? P.call(t, "") : Object(t);
      }
    : Object,
  E = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
  O = function (t) {
    return j(E(t));
  },
  A = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  },
  T = function (t, e) {
    if (!A(t)) return t;
    var r, n;
    if (e && "function" == typeof (r = t.toString) && !A((n = r.call(t))))
      return n;
    if ("function" == typeof (r = t.valueOf) && !A((n = r.call(t)))) return n;
    if (!e && "function" == typeof (r = t.toString) && !A((n = r.call(t))))
      return n;
    throw TypeError("Can't convert object to primitive value");
  },
  I = {}.hasOwnProperty,
  R = function (t, e) {
    return I.call(t, e);
  },
  k = h.document,
  C = A(k) && A(k.createElement),
  _ = function (t) {
    return C ? k.createElement(t) : {};
  },
  $ =
    !y &&
    !d(function () {
      return (
        7 !=
        Object.defineProperty(_("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  L = Object.getOwnPropertyDescriptor,
  D = {
    f: y
      ? L
      : function (t, e) {
          if (((t = O(t)), (e = T(e, !0)), $))
            try {
              return L(t, e);
            } catch (t) {}
          if (R(t, e)) return S(!b.f.call(t, e), t[e]);
        },
  },
  M = function (t) {
    if (!A(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
  F = Object.defineProperty,
  N = {
    f: y
      ? F
      : function (t, e, r) {
          if ((M(t), (e = T(e, !0)), M(r), $))
            try {
              return F(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        },
  },
  U = y
    ? function (t, e, r) {
        return N.f(t, e, S(1, r));
      }
    : function (t, e, r) {
        return (t[e] = r), t;
      },
  W = function (t, e) {
    try {
      U(h, t, e);
    } catch (r) {
      h[t] = e;
    }
    return e;
  },
  q = h["__core-js_shared__"] || W("__core-js_shared__", {}),
  z = Function.toString;
"function" != typeof q.inspectSource &&
  (q.inspectSource = function (t) {
    return z.call(t);
  });
var G,
  B,
  V,
  K = q.inspectSource,
  H = h.WeakMap,
  X = "function" == typeof H && /native code/.test(K(H)),
  Y = p(function (t) {
    (t.exports = function (t, e) {
      return q[t] || (q[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  }),
  Q = 0,
  J = Math.random(),
  Z = function (t) {
    return (
      "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++Q + J).toString(36)
    );
  },
  tt = Y("keys"),
  et = function (t) {
    return tt[t] || (tt[t] = Z(t));
  },
  rt = {};
if (X) {
  var nt = new (0, h.WeakMap)(),
    ot = nt.get,
    it = nt.has,
    ut = nt.set;
  (G = function (t, e) {
    return ut.call(nt, t, e), e;
  }),
    (B = function (t) {
      return ot.call(nt, t) || {};
    }),
    (V = function (t) {
      return it.call(nt, t);
    });
} else {
  var ct = et("state");
  (rt[ct] = !0),
    (G = function (t, e) {
      return U(t, ct, e), e;
    }),
    (B = function (t) {
      return R(t, ct) ? t[ct] : {};
    }),
    (V = function (t) {
      return R(t, ct);
    });
}
var at,
  ft = {
    set: G,
    get: B,
    has: V,
    enforce: function (t) {
      return V(t) ? B(t) : G(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!A(e) || (r = B(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    },
  },
  st = p(function (t) {
    var e = ft.get,
      r = ft.enforce,
      n = String(String).split("String");
    (t.exports = function (t, e, o, i) {
      var u = !!i && !!i.unsafe,
        c = !!i && !!i.enumerable,
        a = !!i && !!i.noTargetGet;
      "function" == typeof o &&
        ("string" != typeof e || R(o, "name") || U(o, "name", e),
        (r(o).source = n.join("string" == typeof e ? e : ""))),
        t !== h
          ? (u ? !a && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = o) : U(t, e, o))
          : c
          ? (t[e] = o)
          : W(e, o);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && e(this).source) || K(this);
    });
  }),
  lt = h,
  pt = function (t) {
    return "function" == typeof t ? t : void 0;
  },
  vt = function (t, e) {
    return arguments.length < 2
      ? pt(lt[t]) || pt(h[t])
      : (lt[t] && lt[t][e]) || (h[t] && h[t][e]);
  },
  ht = Math.ceil,
  dt = Math.floor,
  yt = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? dt : ht)(t);
  },
  gt = Math.min,
  mt = function (t) {
    return t > 0 ? gt(yt(t), 9007199254740991) : 0;
  },
  bt = Math.max,
  St = Math.min,
  wt = function (t) {
    return function (e, r, n) {
      var o,
        i = O(e),
        u = mt(i.length),
        c = (function (t, e) {
          var r = yt(t);
          return r < 0 ? bt(r + e, 0) : St(r, e);
        })(n, u);
      if (t && r != r) {
        for (; u > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; u > c; c++) if ((t || c in i) && i[c] === r) return t || c || 0;
      return !t && -1;
    };
  },
  xt = { includes: wt(!0), indexOf: wt(!1) },
  Pt = xt.indexOf,
  jt = function (t, e) {
    var r,
      n = O(t),
      o = 0,
      i = [];
    for (r in n) !R(rt, r) && R(n, r) && i.push(r);
    for (; e.length > o; ) R(n, (r = e[o++])) && (~Pt(i, r) || i.push(r));
    return i;
  },
  Et = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Ot = Et.concat("length", "prototype"),
  At = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return jt(t, Ot);
      },
  },
  Tt = { f: Object.getOwnPropertySymbols },
  It =
    vt("Reflect", "ownKeys") ||
    function (t) {
      var e = At.f(M(t)),
        r = Tt.f;
      return r ? e.concat(r(t)) : e;
    },
  Rt = function (t, e) {
    for (var r = It(e), n = N.f, o = D.f, i = 0; i < r.length; i++) {
      var u = r[i];
      R(t, u) || n(t, u, o(e, u));
    }
  },
  kt = /#|\.prototype\./,
  Ct = function (t, e) {
    var r = $t[_t(t)];
    return r == Dt || (r != Lt && ("function" == typeof e ? d(e) : !!e));
  },
  _t = (Ct.normalize = function (t) {
    return String(t).replace(kt, ".").toLowerCase();
  }),
  $t = (Ct.data = {}),
  Lt = (Ct.NATIVE = "N"),
  Dt = (Ct.POLYFILL = "P"),
  Mt = Ct,
  Ft = D.f,
  Nt = function (t, e) {
    var r,
      n,
      o,
      i,
      u,
      c = t.target,
      a = t.global,
      f = t.stat;
    if ((r = a ? h : f ? h[c] || W(c, {}) : (h[c] || {}).prototype))
      for (n in e) {
        if (
          ((i = e[n]),
          (o = t.noTargetGet ? (u = Ft(r, n)) && u.value : r[n]),
          !Mt(a ? n : c + (f ? "." : "#") + n, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Rt(i, o);
        }
        (t.sham || (o && o.sham)) && U(i, "sham", !0), st(r, n, i, t);
      }
  },
  Ut =
    !!Object.getOwnPropertySymbols &&
    !d(function () {
      return !String(Symbol());
    }),
  Wt = Ut && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  qt =
    Array.isArray ||
    function (t) {
      return "Array" == x(t);
    },
  zt = function (t) {
    return Object(E(t));
  },
  Gt =
    Object.keys ||
    function (t) {
      return jt(t, Et);
    },
  Bt = y
    ? Object.defineProperties
    : function (t, e) {
        M(t);
        for (var r, n = Gt(e), o = n.length, i = 0; o > i; )
          N.f(t, (r = n[i++]), e[r]);
        return t;
      },
  Vt = vt("document", "documentElement"),
  Kt = et("IE_PROTO"),
  Ht = function () {},
  Xt = function (t) {
    return "<script>" + t + "</script>";
  },
  Yt = function () {
    try {
      at = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e;
    Yt = at
      ? (function (t) {
          t.write(Xt("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(at)
      : (((e = _("iframe")).style.display = "none"),
        Vt.appendChild(e),
        (e.src = String("javascript:")),
        (t = e.contentWindow.document).open(),
        t.write(Xt("document.F=Object")),
        t.close(),
        t.F);
    for (var r = Et.length; r--; ) delete Yt.prototype[Et[r]];
    return Yt();
  };
rt[Kt] = !0;
var Qt =
    Object.create ||
    function (t, e) {
      var r;
      return (
        null !== t
          ? ((Ht.prototype = M(t)),
            (r = new Ht()),
            (Ht.prototype = null),
            (r[Kt] = t))
          : (r = Yt()),
        void 0 === e ? r : Bt(r, e)
      );
    },
  Jt = At.f,
  Zt = {}.toString,
  te =
    "object" == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  ee = {
    f: function (t) {
      return te && "[object Window]" == Zt.call(t)
        ? (function (t) {
            try {
              return Jt(t);
            } catch (t) {
              return te.slice();
            }
          })(t)
        : Jt(O(t));
    },
  },
  re = Y("wks"),
  ne = h.Symbol,
  oe = Wt ? ne : (ne && ne.withoutSetter) || Z,
  ie = function (t) {
    return (
      R(re, t) || (re[t] = Ut && R(ne, t) ? ne[t] : oe("Symbol." + t)), re[t]
    );
  },
  ue = { f: ie },
  ce = N.f,
  ae = function (t) {
    var e = lt.Symbol || (lt.Symbol = {});
    R(e, t) || ce(e, t, { value: ue.f(t) });
  },
  fe = N.f,
  se = ie("toStringTag"),
  le = function (t, e, r) {
    t &&
      !R((t = r ? t : t.prototype), se) &&
      fe(t, se, { configurable: !0, value: e });
  },
  pe = function (t) {
    if ("function" != typeof t)
      throw TypeError(String(t) + " is not a function");
    return t;
  },
  ve = function (t, e, r) {
    if ((pe(t), void 0 === e)) return t;
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
  he = ie("species"),
  de = function (t, e) {
    var r;
    return (
      qt(t) &&
        ("function" != typeof (r = t.constructor) ||
        (r !== Array && !qt(r.prototype))
          ? A(r) && null === (r = r[he]) && (r = void 0)
          : (r = void 0)),
      new (void 0 === r ? Array : r)(0 === e ? 0 : e)
    );
  },
  ye = [].push,
  ge = function (t) {
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
          h = j(v),
          d = ve(a, f, 3),
          y = mt(h.length),
          g = 0,
          m = s || de,
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
                ye.call(b, l);
            }
          else if (o) return !1;
      return i ? -1 : n || o ? o : b;
    };
  },
  me = {
    forEach: ge(0),
    map: ge(1),
    filter: ge(2),
    some: ge(3),
    every: ge(4),
    find: ge(5),
    findIndex: ge(6),
  },
  be = me.forEach,
  Se = et("hidden"),
  we = ie("toPrimitive"),
  xe = ft.set,
  Pe = ft.getterFor("Symbol"),
  je = Object.prototype,
  Ee = h.Symbol,
  Oe = vt("JSON", "stringify"),
  Ae = D.f,
  Te = N.f,
  Ie = ee.f,
  Re = b.f,
  ke = Y("symbols"),
  Ce = Y("op-symbols"),
  _e = Y("string-to-symbol-registry"),
  $e = Y("symbol-to-string-registry"),
  Le = Y("wks"),
  De = h.QObject,
  Me = !De || !De.prototype || !De.prototype.findChild,
  Fe =
    y &&
    d(function () {
      return (
        7 !=
        Qt(
          Te({}, "a", {
            get: function () {
              return Te(this, "a", { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (t, e, r) {
          var n = Ae(je, e);
          n && delete je[e], Te(t, e, r), n && t !== je && Te(je, e, n);
        }
      : Te,
  Ne = function (t, e) {
    var r = (ke[t] = Qt(Ee.prototype));
    return (
      xe(r, { type: "Symbol", tag: t, description: e }),
      y || (r.description = e),
      r
    );
  },
  Ue = Wt
    ? function (t) {
        return "symbol" == typeof t;
      }
    : function (t) {
        return Object(t) instanceof Ee;
      },
  We = function (t, e, r) {
    t === je && We(Ce, e, r), M(t);
    var n = T(e, !0);
    return (
      M(r),
      R(ke, n)
        ? (r.enumerable
            ? (R(t, Se) && t[Se][n] && (t[Se][n] = !1),
              (r = Qt(r, { enumerable: S(0, !1) })))
            : (R(t, Se) || Te(t, Se, S(1, {})), (t[Se][n] = !0)),
          Fe(t, n, r))
        : Te(t, n, r)
    );
  },
  qe = function (t, e) {
    M(t);
    var r = O(e),
      n = Gt(r).concat(Ve(r));
    return (
      be(n, function (e) {
        (y && !ze.call(r, e)) || We(t, e, r[e]);
      }),
      t
    );
  },
  ze = function (t) {
    var e = T(t, !0),
      r = Re.call(this, e);
    return (
      !(this === je && R(ke, e) && !R(Ce, e)) &&
      (!(r || !R(this, e) || !R(ke, e) || (R(this, Se) && this[Se][e])) || r)
    );
  },
  Ge = function (t, e) {
    var r = O(t),
      n = T(e, !0);
    if (r !== je || !R(ke, n) || R(Ce, n)) {
      var o = Ae(r, n);
      return (
        !o || !R(ke, n) || (R(r, Se) && r[Se][n]) || (o.enumerable = !0), o
      );
    }
  },
  Be = function (t) {
    var e = Ie(O(t)),
      r = [];
    return (
      be(e, function (t) {
        R(ke, t) || R(rt, t) || r.push(t);
      }),
      r
    );
  },
  Ve = function (t) {
    var e = t === je,
      r = Ie(e ? Ce : O(t)),
      n = [];
    return (
      be(r, function (t) {
        !R(ke, t) || (e && !R(je, t)) || n.push(ke[t]);
      }),
      n
    );
  };
if (
  (Ut ||
    (st(
      (Ee = function () {
        if (this instanceof Ee) throw TypeError("Symbol is not a constructor");
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          e = Z(t),
          r = function (t) {
            this === je && r.call(Ce, t),
              R(this, Se) && R(this[Se], e) && (this[Se][e] = !1),
              Fe(this, e, S(1, t));
          };
        return y && Me && Fe(je, e, { configurable: !0, set: r }), Ne(e, t);
      }).prototype,
      "toString",
      function () {
        return Pe(this).tag;
      }
    ),
    st(Ee, "withoutSetter", function (t) {
      return Ne(Z(t), t);
    }),
    (b.f = ze),
    (N.f = We),
    (D.f = Ge),
    (At.f = ee.f = Be),
    (Tt.f = Ve),
    (ue.f = function (t) {
      return Ne(ie(t), t);
    }),
    y &&
      (Te(Ee.prototype, "description", {
        configurable: !0,
        get: function () {
          return Pe(this).description;
        },
      }),
      st(je, "propertyIsEnumerable", ze, { unsafe: !0 }))),
  Nt({ global: !0, wrap: !0, forced: !Ut, sham: !Ut }, { Symbol: Ee }),
  be(Gt(Le), function (t) {
    ae(t);
  }),
  Nt(
    { target: "Symbol", stat: !0, forced: !Ut },
    {
      for: function (t) {
        var e = String(t);
        if (R(_e, e)) return _e[e];
        var r = Ee(e);
        return (_e[e] = r), ($e[r] = e), r;
      },
      keyFor: function (t) {
        if (!Ue(t)) throw TypeError(t + " is not a symbol");
        if (R($e, t)) return $e[t];
      },
      useSetter: function () {
        Me = !0;
      },
      useSimple: function () {
        Me = !1;
      },
    }
  ),
  Nt(
    { target: "Object", stat: !0, forced: !Ut, sham: !y },
    {
      create: function (t, e) {
        return void 0 === e ? Qt(t) : qe(Qt(t), e);
      },
      defineProperty: We,
      defineProperties: qe,
      getOwnPropertyDescriptor: Ge,
    }
  ),
  Nt(
    { target: "Object", stat: !0, forced: !Ut },
    { getOwnPropertyNames: Be, getOwnPropertySymbols: Ve }
  ),
  Nt(
    {
      target: "Object",
      stat: !0,
      forced: d(function () {
        Tt.f(1);
      }),
    },
    {
      getOwnPropertySymbols: function (t) {
        return Tt.f(zt(t));
      },
    }
  ),
  Oe)
) {
  var Ke =
    !Ut ||
    d(function () {
      var t = Ee();
      return (
        "[null]" != Oe([t]) || "{}" != Oe({ a: t }) || "{}" != Oe(Object(t))
      );
    });
  Nt(
    { target: "JSON", stat: !0, forced: Ke },
    {
      stringify: function (t, e, r) {
        for (var n, o = [t], i = 1; arguments.length > i; )
          o.push(arguments[i++]);
        if (((n = e), (A(e) || void 0 !== t) && !Ue(t)))
          return (
            qt(e) ||
              (e = function (t, e) {
                if (
                  ("function" == typeof n && (e = n.call(this, t, e)), !Ue(e))
                )
                  return e;
              }),
            (o[1] = e),
            Oe.apply(null, o)
          );
      },
    }
  );
}
Ee.prototype[we] || U(Ee.prototype, we, Ee.prototype.valueOf),
  le(Ee, "Symbol"),
  (rt[Se] = !0);
var He = N.f,
  Xe = h.Symbol;
if (
  y &&
  "function" == typeof Xe &&
  (!("description" in Xe.prototype) || void 0 !== Xe().description)
) {
  var Ye = {},
    Qe = function () {
      var t =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        e = this instanceof Qe ? new Xe(t) : void 0 === t ? Xe() : Xe(t);
      return "" === t && (Ye[e] = !0), e;
    };
  Rt(Qe, Xe);
  var Je = (Qe.prototype = Xe.prototype);
  Je.constructor = Qe;
  var Ze = Je.toString,
    tr = "Symbol(test)" == String(Xe("test")),
    er = /^Symbol\((.*)\)[^)]+$/;
  He(Je, "description", {
    configurable: !0,
    get: function () {
      var t = A(this) ? this.valueOf() : this,
        e = Ze.call(t);
      if (R(Ye, t)) return "";
      var r = tr ? e.slice(7, -1) : e.replace(er, "$1");
      return "" === r ? void 0 : r;
    },
  }),
    Nt({ global: !0, forced: !0 }, { Symbol: Qe });
}
ae("iterator");
var rr,
  nr,
  or = vt("navigator", "userAgent") || "",
  ir = h.process,
  ur = ir && ir.versions,
  cr = ur && ur.v8;
cr
  ? (nr = (rr = cr.split("."))[0] + rr[1])
  : or &&
    (!(rr = or.match(/Edge\/(\d+)/)) || rr[1] >= 74) &&
    (rr = or.match(/Chrome\/(\d+)/)) &&
    (nr = rr[1]);
var ar = nr && +nr,
  fr = ie("species"),
  sr = function (t) {
    return (
      ar >= 51 ||
      !d(function () {
        var e = [];
        return (
          ((e.constructor = {})[fr] = function () {
            return { foo: 1 };
          }),
          1 !== e[t](Boolean).foo
        );
      })
    );
  },
  lr = Object.defineProperty,
  pr = {},
  vr = function (t) {
    throw t;
  },
  hr = function (t, e) {
    if (R(pr, t)) return pr[t];
    e || (e = {});
    var r = [][t],
      n = !!R(e, "ACCESSORS") && e.ACCESSORS,
      o = R(e, 0) ? e[0] : vr,
      i = R(e, 1) ? e[1] : void 0;
    return (pr[t] =
      !!r &&
      !d(function () {
        if (n && !y) return !0;
        var t = { length: -1 };
        n ? lr(t, 1, { enumerable: !0, get: vr }) : (t[1] = 1), r.call(t, o, i);
      }));
  },
  dr = me.filter,
  yr = sr("filter"),
  gr = hr("filter");
Nt(
  { target: "Array", proto: !0, forced: !yr || !gr },
  {
    filter: function (t) {
      return dr(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var mr = function (t, e, r, n) {
    try {
      return n ? e(M(r)[0], r[1]) : e(r);
    } catch (e) {
      var o = t.return;
      throw (void 0 !== o && M(o.call(t)), e);
    }
  },
  br = {},
  Sr = ie("iterator"),
  wr = Array.prototype,
  xr = function (t) {
    return void 0 !== t && (br.Array === t || wr[Sr] === t);
  },
  Pr = function (t, e, r) {
    var n = T(e);
    n in t ? N.f(t, n, S(0, r)) : (t[n] = r);
  },
  jr = {};
jr[ie("toStringTag")] = "z";
var Er = "[object z]" === String(jr),
  Or = ie("toStringTag"),
  Ar =
    "Arguments" ==
    x(
      (function () {
        return arguments;
      })()
    ),
  Tr = Er
    ? x
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
            })((e = Object(t)), Or))
          ? r
          : Ar
          ? x(e)
          : "Object" == (n = x(e)) && "function" == typeof e.callee
          ? "Arguments"
          : n;
      },
  Ir = ie("iterator"),
  Rr = function (t) {
    if (null != t) return t[Ir] || t["@@iterator"] || br[Tr(t)];
  },
  kr = ie("iterator"),
  Cr = !1;
try {
  var _r = 0,
    $r = {
      next: function () {
        return { done: !!_r++ };
      },
      return: function () {
        Cr = !0;
      },
    };
  ($r[kr] = function () {
    return this;
  }),
    Array.from($r, function () {
      throw 2;
    });
} catch (t) {}
var Lr = function (t, e) {
    if (!e && !Cr) return !1;
    var r = !1;
    try {
      var n = {};
      (n[kr] = function () {
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
  Dr = !Lr(function (t) {
    Array.from(t);
  });
Nt(
  { target: "Array", stat: !0, forced: Dr },
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
        p = Rr(c),
        v = 0;
      if (
        (l && (s = ve(s, f > 2 ? arguments[2] : void 0, 2)),
        null == p || (a == Array && xr(p)))
      )
        for (r = new a((e = mt(c.length))); e > v; v++)
          (u = l ? s(c[v], v) : c[v]), Pr(r, v, u);
      else
        for (i = (o = p.call(c)).next, r = new a(); !(n = i.call(o)).done; v++)
          (u = l ? mr(o, s, [n.value, v], !0) : n.value), Pr(r, v, u);
      return (r.length = v), r;
    },
  }
),
  Nt({ target: "Array", stat: !0 }, { isArray: qt });
var Mr = ie("unscopables"),
  Fr = Array.prototype;
null == Fr[Mr] && N.f(Fr, Mr, { configurable: !0, value: Qt(null) });
var Nr,
  Ur,
  Wr,
  qr = function (t) {
    Fr[Mr][t] = !0;
  },
  zr = !d(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  Gr = et("IE_PROTO"),
  Br = Object.prototype,
  Vr = zr
    ? Object.getPrototypeOf
    : function (t) {
        return (
          (t = zt(t)),
          R(t, Gr)
            ? t[Gr]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? Br
            : null
        );
      },
  Kr = ie("iterator"),
  Hr = !1;
[].keys &&
  ("next" in (Wr = [].keys())
    ? (Ur = Vr(Vr(Wr))) !== Object.prototype && (Nr = Ur)
    : (Hr = !0)),
  null == Nr && (Nr = {}),
  R(Nr, Kr) ||
    U(Nr, Kr, function () {
      return this;
    });
var Xr = { IteratorPrototype: Nr, BUGGY_SAFARI_ITERATORS: Hr },
  Yr = Xr.IteratorPrototype,
  Qr = function () {
    return this;
  },
  Jr =
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
              M(r),
              (function (t) {
                if (!A(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype");
              })(n),
              e ? t.call(r, n) : (r.__proto__ = n),
              r
            );
          };
        })()
      : void 0),
  Zr = Xr.IteratorPrototype,
  tn = Xr.BUGGY_SAFARI_ITERATORS,
  en = ie("iterator"),
  rn = function () {
    return this;
  },
  nn = function (t, e, r, n, o, i, u) {
    !(function (t, e, r) {
      var n = e + " Iterator";
      (t.prototype = Qt(Yr, { next: S(1, r) })), le(t, n, !1), (br[n] = Qr);
    })(r, e, n);
    var c,
      a,
      f,
      s = function (t) {
        if (t === o && d) return d;
        if (!tn && t in v) return v[t];
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
      h = v[en] || v["@@iterator"] || (o && v[o]),
      d = (!tn && h) || s(o),
      y = ("Array" == e && v.entries) || h;
    if (
      (y &&
        ((c = Vr(y.call(new t()))),
        Zr !== Object.prototype &&
          c.next &&
          (Vr(c) !== Zr &&
            (Jr ? Jr(c, Zr) : "function" != typeof c[en] && U(c, en, rn)),
          le(c, l, !0))),
      "values" == o &&
        h &&
        "values" !== h.name &&
        ((p = !0),
        (d = function () {
          return h.call(this);
        })),
      v[en] !== d && U(v, en, d),
      (br[e] = d),
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
        for (f in a) (tn || p || !(f in v)) && st(v, f, a[f]);
      else Nt({ target: e, proto: !0, forced: tn || p }, a);
    return a;
  },
  on = ft.set,
  un = ft.getterFor("Array Iterator"),
  cn = nn(
    Array,
    "Array",
    function (t, e) {
      on(this, { type: "Array Iterator", target: O(t), index: 0, kind: e });
    },
    function () {
      var t = un(this),
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
(br.Arguments = br.Array), qr("keys"), qr("values"), qr("entries");
var an = me.map,
  fn = sr("map"),
  sn = hr("map");
Nt(
  { target: "Array", proto: !0, forced: !fn || !sn },
  {
    map: function (t) {
      return an(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var ln = function (t, e) {
    var r = [][t];
    return (
      !!r &&
      d(function () {
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
  pn = me.some,
  vn = ln("some"),
  hn = hr("some");
Nt(
  { target: "Array", proto: !0, forced: !vn || !hn },
  {
    some: function (t) {
      return pn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var dn = [].slice,
  yn = {},
  gn = function (t, e, r) {
    if (!(e in yn)) {
      for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
      yn[e] = Function("C,a", "return new C(" + n.join(",") + ")");
    }
    return yn[e](t, r);
  };
Nt(
  { target: "Function", proto: !0 },
  {
    bind:
      Function.bind ||
      function (t) {
        var e = pe(this),
          r = dn.call(arguments, 1),
          n = function () {
            var o = r.concat(dn.call(arguments));
            return this instanceof n ? gn(e, o.length, o) : e.apply(t, o);
          };
        return A(e.prototype) && (n.prototype = e.prototype), n;
      },
  }
);
var mn = Function.prototype,
  bn = mn.toString,
  Sn = /^\s*function ([^ (]*)/;
y &&
  !("name" in mn) &&
  (0, N.f)(mn, "name", {
    configurable: !0,
    get: function () {
      try {
        return bn.call(this).match(Sn)[1];
      } catch (t) {
        return "";
      }
    },
  }),
  Er ||
    st(
      Object.prototype,
      "toString",
      Er
        ? {}.toString
        : function () {
            return "[object " + Tr(this) + "]";
          },
      { unsafe: !0 }
    );
var wn,
  xn,
  Pn,
  jn = h.Promise,
  En = function (t, e, r) {
    for (var n in e) st(t, n, e[n], r);
    return t;
  },
  On = ie("species"),
  An = function (t) {
    var e = vt(t);
    y &&
      e &&
      !e[On] &&
      (0, N.f)(e, On, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  },
  Tn = function (t, e, r) {
    if (!(t instanceof e))
      throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
    return t;
  },
  In = p(function (t) {
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
        v = ve(r, n, o ? 2 : 1);
      if (i) u = t;
      else {
        if ("function" != typeof (c = Rr(t)))
          throw TypeError("Target is not iterable");
        if (xr(c)) {
          for (a = 0, f = mt(t.length); f > a; a++)
            if ((s = o ? v(M((p = t[a]))[0], p[1]) : v(t[a])) && s instanceof e)
              return s;
          return new e(!1);
        }
        u = c.call(t);
      }
      for (l = u.next; !(p = l.call(u)).done; )
        if (
          "object" == typeof (s = mr(u, v, p.value, o)) &&
          s &&
          s instanceof e
        )
          return s;
      return new e(!1);
    }).stop = function (t) {
      return new e(!0, t);
    };
  }),
  Rn = ie("species"),
  kn = function (t, e) {
    var r,
      n = M(t).constructor;
    return void 0 === n || null == (r = M(n)[Rn]) ? e : pe(r);
  },
  Cn = /(iphone|ipod|ipad).*applewebkit/i.test(or),
  _n = h.location,
  $n = h.setImmediate,
  Ln = h.clearImmediate,
  Dn = h.process,
  Mn = h.MessageChannel,
  Fn = h.Dispatch,
  Nn = 0,
  Un = {},
  Wn = function (t) {
    if (Un.hasOwnProperty(t)) {
      var e = Un[t];
      delete Un[t], e();
    }
  },
  qn = function (t) {
    return function () {
      Wn(t);
    };
  },
  zn = function (t) {
    Wn(t.data);
  },
  Gn = function (t) {
    h.postMessage(t + "", _n.protocol + "//" + _n.host);
  };
($n && Ln) ||
  (($n = function (t) {
    for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
    return (
      (Un[++Nn] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }),
      wn(Nn),
      Nn
    );
  }),
  (Ln = function (t) {
    delete Un[t];
  }),
  "process" == x(Dn)
    ? (wn = function (t) {
        Dn.nextTick(qn(t));
      })
    : Fn && Fn.now
    ? (wn = function (t) {
        Fn.now(qn(t));
      })
    : Mn && !Cn
    ? ((Pn = (xn = new Mn()).port2),
      (xn.port1.onmessage = zn),
      (wn = ve(Pn.postMessage, Pn, 1)))
    : !h.addEventListener ||
      "function" != typeof postMessage ||
      h.importScripts ||
      d(Gn) ||
      "file:" === _n.protocol
    ? (wn =
        "onreadystatechange" in _("script")
          ? function (t) {
              Vt.appendChild(_("script")).onreadystatechange = function () {
                Vt.removeChild(this), Wn(t);
              };
            }
          : function (t) {
              setTimeout(qn(t), 0);
            })
    : ((wn = Gn), h.addEventListener("message", zn, !1)));
var Bn,
  Vn,
  Kn,
  Hn,
  Xn,
  Yn,
  Qn,
  Jn,
  Zn = { set: $n, clear: Ln },
  to = D.f,
  eo = Zn.set,
  ro = h.MutationObserver || h.WebKitMutationObserver,
  no = h.process,
  oo = h.Promise,
  io = "process" == x(no),
  uo = to(h, "queueMicrotask"),
  co = uo && uo.value;
co ||
  ((Bn = function () {
    var t, e;
    for (io && (t = no.domain) && t.exit(); Vn; ) {
      (e = Vn.fn), (Vn = Vn.next);
      try {
        e();
      } catch (t) {
        throw (Vn ? Hn() : (Kn = void 0), t);
      }
    }
    (Kn = void 0), t && t.enter();
  }),
  io
    ? (Hn = function () {
        no.nextTick(Bn);
      })
    : ro && !Cn
    ? ((Xn = !0),
      (Yn = document.createTextNode("")),
      new ro(Bn).observe(Yn, { characterData: !0 }),
      (Hn = function () {
        Yn.data = Xn = !Xn;
      }))
    : oo && oo.resolve
    ? ((Qn = oo.resolve(void 0)),
      (Jn = Qn.then),
      (Hn = function () {
        Jn.call(Qn, Bn);
      }))
    : (Hn = function () {
        eo.call(h, Bn);
      }));
var ao,
  fo,
  so,
  lo,
  po =
    co ||
    function (t) {
      var e = { fn: t, next: void 0 };
      Kn && (Kn.next = e), Vn || ((Vn = e), Hn()), (Kn = e);
    },
  vo = function (t) {
    var e, r;
    (this.promise = new t(function (t, n) {
      if (void 0 !== e || void 0 !== r)
        throw TypeError("Bad Promise constructor");
      (e = t), (r = n);
    })),
      (this.resolve = pe(e)),
      (this.reject = pe(r));
  },
  ho = {
    f: function (t) {
      return new vo(t);
    },
  },
  yo = function (t, e) {
    if ((M(t), A(e) && e.constructor === t)) return e;
    var r = ho.f(t);
    return (0, r.resolve)(e), r.promise;
  },
  go = function (t) {
    try {
      return { error: !1, value: t() };
    } catch (t) {
      return { error: !0, value: t };
    }
  },
  mo = Zn.set,
  bo = ie("species"),
  So = "Promise",
  wo = ft.get,
  xo = ft.set,
  Po = ft.getterFor(So),
  jo = jn,
  Eo = h.TypeError,
  Oo = h.document,
  Ao = h.process,
  To = vt("fetch"),
  Io = ho.f,
  Ro = Io,
  ko = "process" == x(Ao),
  Co = !!(Oo && Oo.createEvent && h.dispatchEvent),
  _o = Mt(So, function () {
    if (K(jo) === String(jo)) {
      if (66 === ar) return !0;
      if (!ko && "function" != typeof PromiseRejectionEvent) return !0;
    }
    if (ar >= 51 && /native code/.test(jo)) return !1;
    var t = jo.resolve(1),
      e = function (t) {
        t(
          function () {},
          function () {}
        );
      };
    return (
      ((t.constructor = {})[bo] = e), !(t.then(function () {}) instanceof e)
    );
  }),
  $o =
    _o ||
    !Lr(function (t) {
      jo.all(t).catch(function () {});
    }),
  Lo = function (t) {
    var e;
    return !(!A(t) || "function" != typeof (e = t.then)) && e;
  },
  Do = function (t, e, r) {
    if (!e.notified) {
      e.notified = !0;
      var n = e.reactions;
      po(function () {
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
              ? (i || (2 === e.rejection && Uo(t, e), (e.rejection = 1)),
                !0 === l
                  ? (c = o)
                  : (h && h.enter(), (c = l(o)), h && (h.exit(), (f = !0))),
                c === s.promise
                  ? v(Eo("Promise-chain cycle"))
                  : (a = Lo(c))
                  ? a.call(c, p, v)
                  : p(c))
              : v(o);
          } catch (t) {
            h && !f && h.exit(), v(t);
          }
        }
        (e.reactions = []), (e.notified = !1), r && !e.rejection && Fo(t, e);
      });
    }
  },
  Mo = function (t, e, r) {
    var n, o;
    Co
      ? (((n = Oo.createEvent("Event")).promise = e),
        (n.reason = r),
        n.initEvent(t, !1, !0),
        h.dispatchEvent(n))
      : (n = { promise: e, reason: r }),
      (o = h["on" + t])
        ? o(n)
        : "unhandledrejection" === t &&
          (function (t, e) {
            var r = h.console;
            r &&
              r.error &&
              (1 === arguments.length ? r.error(t) : r.error(t, e));
          })("Unhandled promise rejection", r);
  },
  Fo = function (t, e) {
    mo.call(h, function () {
      var r,
        n = e.value;
      if (
        No(e) &&
        ((r = go(function () {
          ko
            ? Ao.emit("unhandledRejection", n, t)
            : Mo("unhandledrejection", t, n);
        })),
        (e.rejection = ko || No(e) ? 2 : 1),
        r.error)
      )
        throw r.value;
    });
  },
  No = function (t) {
    return 1 !== t.rejection && !t.parent;
  },
  Uo = function (t, e) {
    mo.call(h, function () {
      ko ? Ao.emit("rejectionHandled", t) : Mo("rejectionhandled", t, e.value);
    });
  },
  Wo = function (t, e, r, n) {
    return function (o) {
      t(e, r, o, n);
    };
  },
  qo = function (t, e, r, n) {
    e.done ||
      ((e.done = !0), n && (e = n), (e.value = r), (e.state = 2), Do(t, e, !0));
  },
  zo = function (t, e, r, n) {
    if (!e.done) {
      (e.done = !0), n && (e = n);
      try {
        if (t === r) throw Eo("Promise can't be resolved itself");
        var o = Lo(r);
        o
          ? po(function () {
              var n = { done: !1 };
              try {
                o.call(r, Wo(zo, t, n, e), Wo(qo, t, n, e));
              } catch (r) {
                qo(t, n, r, e);
              }
            })
          : ((e.value = r), (e.state = 1), Do(t, e, !1));
      } catch (r) {
        qo(t, { done: !1 }, r, e);
      }
    }
  };
_o &&
  ((jo = function (t) {
    Tn(this, jo, So), pe(t), ao.call(this);
    var e = wo(this);
    try {
      t(Wo(zo, this, e), Wo(qo, this, e));
    } catch (t) {
      qo(this, e, t);
    }
  }),
  ((ao = function (t) {
    xo(this, {
      type: So,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    });
  }).prototype = En(jo.prototype, {
    then: function (t, e) {
      var r = Po(this),
        n = Io(kn(this, jo));
      return (
        (n.ok = "function" != typeof t || t),
        (n.fail = "function" == typeof e && e),
        (n.domain = ko ? Ao.domain : void 0),
        (r.parent = !0),
        r.reactions.push(n),
        0 != r.state && Do(this, r, !1),
        n.promise
      );
    },
    catch: function (t) {
      return this.then(void 0, t);
    },
  })),
  (fo = function () {
    var t = new ao(),
      e = wo(t);
    (this.promise = t),
      (this.resolve = Wo(zo, t, e)),
      (this.reject = Wo(qo, t, e));
  }),
  (ho.f = Io = function (t) {
    return t === jo || t === so ? new fo(t) : Ro(t);
  }),
  "function" == typeof jn &&
    ((lo = jn.prototype.then),
    st(
      jn.prototype,
      "then",
      function (t, e) {
        var r = this;
        return new jo(function (t, e) {
          lo.call(r, t, e);
        }).then(t, e);
      },
      { unsafe: !0 }
    ),
    "function" == typeof To &&
      Nt(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (t) {
            return yo(jo, To.apply(h, arguments));
          },
        }
      ))),
  Nt({ global: !0, wrap: !0, forced: _o }, { Promise: jo }),
  le(jo, So, !1),
  An(So),
  (so = vt(So)),
  Nt(
    { target: So, stat: !0, forced: _o },
    {
      reject: function (t) {
        var e = Io(this);
        return e.reject.call(void 0, t), e.promise;
      },
    }
  ),
  Nt(
    { target: So, stat: !0, forced: _o },
    {
      resolve: function (t) {
        return yo(this, t);
      },
    }
  ),
  Nt(
    { target: So, stat: !0, forced: $o },
    {
      all: function (t) {
        var e = this,
          r = Io(e),
          n = r.resolve,
          o = r.reject,
          i = go(function () {
            var r = pe(e.resolve),
              i = [],
              u = 0,
              c = 1;
            In(t, function (t) {
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
          r = Io(e),
          n = r.reject,
          o = go(function () {
            var o = pe(e.resolve);
            In(t, function (t) {
              o.call(e, t).then(r.resolve, n);
            });
          });
        return o.error && n(o.value), r.promise;
      },
    }
  );
var Go = !d(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Bo = p(function (t) {
    var e = N.f,
      r = Z("meta"),
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
          if (!A(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!R(t, r)) {
            if (!o(t)) return "F";
            if (!e) return "E";
            i(t);
          }
          return t[r].objectID;
        },
        getWeakData: function (t, e) {
          if (!R(t, r)) {
            if (!o(t)) return !0;
            if (!e) return !1;
            i(t);
          }
          return t[r].weakData;
        },
        onFreeze: function (t) {
          return Go && u.REQUIRED && o(t) && !R(t, r) && i(t), t;
        },
      });
    rt[r] = !0;
  }),
  Vo = N.f,
  Ko = Bo.fastKey,
  Ho = ft.set,
  Xo = ft.getterFor,
  Yo =
    ((function (t, e, r) {
      var n = -1 !== "Set".indexOf("Map"),
        o = -1 !== "Set".indexOf("Weak"),
        i = n ? "set" : "add",
        u = h.Set,
        c = u && u.prototype,
        a = u,
        f = {},
        s = function (t) {
          var e = c[t];
          st(
            c,
            t,
            "add" == t
              ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : "delete" == t
              ? function (t) {
                  return !(o && !A(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return o && !A(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : "has" == t
              ? function (t) {
                  return !(o && !A(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : function (t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        Mt(
          "Set",
          "function" != typeof u ||
            !(
              o ||
              (c.forEach &&
                !d(function () {
                  new u().entries().next();
                }))
            )
        )
      )
        (a = r.getConstructor(e, "Set", n, i)), (Bo.REQUIRED = !0);
      else if (Mt("Set", !0)) {
        var l = new a(),
          p = l[i](o ? {} : -0, 1) != l,
          v = d(function () {
            l.has(1);
          }),
          y = Lr(function (t) {
            new u(t);
          }),
          g =
            !o &&
            d(function () {
              for (var t = new u(), e = 5; e--; ) t[i](e, e);
              return !t.has(-0);
            });
        y ||
          (((a = e(function (t, e) {
            Tn(t, a, "Set");
            var r = (function (t, e, r) {
              var n, o;
              return (
                Jr &&
                  "function" == typeof (n = e.constructor) &&
                  n !== r &&
                  A((o = n.prototype)) &&
                  o !== r.prototype &&
                  Jr(t, o),
                t
              );
            })(new u(), t, a);
            return null != e && In(e, r[i], r, n), r;
          })).prototype = c),
          (c.constructor = a)),
          (v || g) && (s("delete"), s("has"), n && s("get")),
          (g || p) && s(i),
          o && c.clear && delete c.clear;
      }
      (f.Set = a),
        Nt({ global: !0, forced: a != u }, f),
        le(a, "Set"),
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
              Tn(t, o, e),
                Ho(t, {
                  type: e,
                  index: Qt(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                y || (t.size = 0),
                null != i && In(i, t[n], t, r);
            }),
            i = Xo(e),
            u = function (t, e, r) {
              var n,
                o,
                u = i(t),
                a = c(t, e);
              return (
                a
                  ? (a.value = r)
                  : ((u.last = a = {
                      index: (o = Ko(e, !0)),
                      key: e,
                      value: r,
                      previous: (n = u.last),
                      next: void 0,
                      removed: !1,
                    }),
                    u.first || (u.first = a),
                    n && (n.next = a),
                    y ? u.size++ : t.size++,
                    "F" !== o && (u.index[o] = a)),
                t
              );
            },
            c = function (t, e) {
              var r,
                n = i(t),
                o = Ko(e);
              if ("F" !== o) return n.index[o];
              for (r = n.first; r; r = r.next) if (r.key == e) return r;
            };
          return (
            En(o.prototype, {
              clear: function () {
                for (var t = i(this), e = t.index, r = t.first; r; )
                  (r.removed = !0),
                    r.previous && (r.previous = r.previous.next = void 0),
                    delete e[r.index],
                    (r = r.next);
                (t.first = t.last = void 0), y ? (t.size = 0) : (this.size = 0);
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
                    y ? e.size-- : this.size--;
                }
                return !!r;
              },
              forEach: function (t) {
                for (
                  var e,
                    r = i(this),
                    n = ve(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.next : r.first);

                )
                  for (n(e.value, e.key, this); e && e.removed; )
                    e = e.previous;
              },
              has: function (t) {
                return !!c(this, t);
              },
            }),
            En(
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
            y &&
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
            o = Xo(e),
            i = Xo(n);
          nn(
            t,
            e,
            function (t, e) {
              Ho(this, {
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
            An(e);
        },
      }
    ),
    function (t) {
      return function (e, r) {
        var n,
          o,
          i = String(E(e)),
          u = yt(r),
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
  Qo = { codeAt: Yo(!1), charAt: Yo(!0) },
  Jo = Qo.charAt,
  Zo = ft.set,
  ti = ft.getterFor("String Iterator");
nn(
  String,
  "String",
  function (t) {
    Zo(this, { type: "String Iterator", string: String(t), index: 0 });
  },
  function () {
    var t,
      e = ti(this),
      r = e.string,
      n = e.index;
    return n >= r.length
      ? { value: void 0, done: !0 }
      : ((t = Jo(r, n)), (e.index += t.length), { value: t, done: !1 });
  }
);
var ei,
  ri = ie("match"),
  ni = function (t) {
    var e;
    return A(t) && (void 0 !== (e = t[ri]) ? !!e : "RegExp" == x(t));
  },
  oi = function (t) {
    if (ni(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  },
  ii = ie("match"),
  ui = function (t) {
    var e = /./;
    try {
      "/./"[t](e);
    } catch (r) {
      try {
        return (e[ii] = !1), "/./"[t](e);
      } catch (t) {}
    }
    return !1;
  },
  ci = D.f,
  ai = "".startsWith,
  fi = Math.min,
  si = ui("startsWith"),
  li = !(si || ((ei = ci(String.prototype, "startsWith")), !ei || ei.writable));
Nt(
  { target: "String", proto: !0, forced: !li && !si },
  {
    startsWith: function (t) {
      var e = String(E(this));
      oi(t);
      var r = mt(fi(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        n = String(t);
      return ai ? ai.call(e, n, r) : e.slice(r, r + n.length) === n;
    },
  }
);
var pi = {
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
  vi = ie("iterator"),
  hi = ie("toStringTag"),
  di = cn.values;
for (var yi in pi) {
  var gi = h[yi],
    mi = gi && gi.prototype;
  if (mi) {
    if (mi[vi] !== di)
      try {
        U(mi, vi, di);
      } catch (t) {
        mi[vi] = di;
      }
    if ((mi[hi] || U(mi, hi, yi), pi[yi]))
      for (var bi in cn)
        if (mi[bi] !== cn[bi])
          try {
            U(mi, bi, cn[bi]);
          } catch (t) {
            mi[bi] = cn[bi];
          }
  }
}
function Si(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var wi = Date.prototype,
  xi = wi.toString,
  Pi = wi.getTime;
new Date(NaN) + "" != "Invalid Date" &&
  st(wi, "toString", function () {
    var t = Pi.call(this);
    return t == t ? xi.call(this) : "Invalid Date";
  });
var ji = function () {
    var t = M(this),
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
  Ei = RegExp.prototype,
  Oi = Ei.toString;
(d(function () {
  return "/a/b" != Oi.call({ source: "a", flags: "b" });
}) ||
  "toString" != Oi.name) &&
  st(
    RegExp.prototype,
    "toString",
    function () {
      var t = M(this),
        e = String(t.source),
        r = t.flags;
      return (
        "/" +
        e +
        "/" +
        String(
          void 0 === r && t instanceof RegExp && !("flags" in Ei)
            ? ji.call(t)
            : r
        )
      );
    },
    { unsafe: !0 }
  );
var Ai = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ti = "[" + Ai + "]",
  Ii = RegExp("^" + Ti + Ti + "*"),
  Ri = RegExp(Ti + Ti + "*$"),
  ki = function (t) {
    return function (e) {
      var r = String(E(e));
      return (
        1 & t && (r = r.replace(Ii, "")), 2 & t && (r = r.replace(Ri, "")), r
      );
    };
  },
  Ci = (ki(1), ki(2), ki(3));
function _i(t) {
  return o(null == t ? void 0 : t.trim(), "​");
}
Nt(
  {
    target: "String",
    proto: !0,
    forced: d(function () {
      return !!Ai.trim() || "​᠎" != "​᠎".trim() || "trim" !== Ai.trim.name;
    }),
  },
  {
    trim: function () {
      return Ci(this);
    },
  }
);
var $i =
  !(
    "[object process]" ===
    Object.prototype.toString.call("undefined" != typeof process ? process : 0)
  ) && "undefined" != typeof window;
function Li(t, e) {
  return RegExp(t, e);
}
var Di,
  Mi,
  Fi = {
    UNSUPPORTED_Y: d(function () {
      var t = Li("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    }),
    BROKEN_CARET: d(function () {
      var t = Li("^r", "gy");
      return (t.lastIndex = 2), null != t.exec("str");
    }),
  },
  Ni = RegExp.prototype.exec,
  Ui = String.prototype.replace,
  Wi = Ni,
  qi =
    ((Mi = /b*/g),
    Ni.call((Di = /a/), "a"),
    Ni.call(Mi, "a"),
    0 !== Di.lastIndex || 0 !== Mi.lastIndex),
  zi = Fi.UNSUPPORTED_Y || Fi.BROKEN_CARET,
  Gi = void 0 !== /()??/.exec("")[1];
(qi || Gi || zi) &&
  (Wi = function (t) {
    var e,
      r,
      n,
      o,
      i = this,
      u = zi && i.sticky,
      c = ji.call(i),
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
      qi && (e = i.lastIndex),
      (n = Ni.call(u ? r : i, s)),
      u
        ? n
          ? ((n.input = n.input.slice(f)),
            (n[0] = n[0].slice(f)),
            (n.index = i.lastIndex),
            (i.lastIndex += n[0].length))
          : (i.lastIndex = 0)
        : qi && n && (i.lastIndex = i.global ? n.index + n[0].length : e),
      Gi &&
        n &&
        n.length > 1 &&
        Ui.call(n[0], r, function () {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (n[o] = void 0);
        }),
      n
    );
  });
var Bi = Wi;
Nt({ target: "RegExp", proto: !0, forced: /./.exec !== Bi }, { exec: Bi });
var Vi = ie("species"),
  Ki = !d(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: "7" }), t;
      }),
      "7" !== "".replace(t, "$<a>")
    );
  }),
  Hi = "$0" === "a".replace(/./, "$0"),
  Xi = ie("replace"),
  Yi = !!/./[Xi] && "" === /./[Xi]("a", "$0"),
  Qi = !d(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var r = "ab".split(t);
    return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
  }),
  Ji = function (t, e, r, n) {
    var o = ie(t),
      i = !d(function () {
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
        !d(function () {
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
      ("replace" === t && (!Ki || !Hi || Yi)) ||
      ("split" === t && !Qi)
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
            REPLACE_KEEPS_$0: Hi,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Yi,
          }
        ),
        f = a[1];
      st(String.prototype, t, a[0]),
        st(
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
    n && U(RegExp.prototype[o], "sham", !0);
  },
  Zi = Qo.charAt,
  tu = function (t, e, r) {
    return e + (r ? Zi(t, e).length : 1);
  },
  eu = function (t, e) {
    var r = t.exec;
    if ("function" == typeof r) {
      var n = r.call(t, e);
      if ("object" != typeof n)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        );
      return n;
    }
    if ("RegExp" !== x(t))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return Bi.call(t, e);
  },
  ru = Math.max,
  nu = Math.min,
  ou = Math.floor,
  iu = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  uu = /\$([$&'`]|\d\d?)/g;
Ji("replace", 2, function (t, e, r, n) {
  var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = n.REPLACE_KEEPS_$0,
    u = o ? "$" : "$0";
  return [
    function (r, n) {
      var o = E(this),
        i = null == r ? void 0 : r[t];
      return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n);
    },
    function (t, n) {
      if ((!o && i) || ("string" == typeof n && -1 === n.indexOf(u))) {
        var a = r(e, t, this, n);
        if (a.done) return a.value;
      }
      var f = M(t),
        s = String(this),
        l = "function" == typeof n;
      l || (n = String(n));
      var p = f.global;
      if (p) {
        var v = f.unicode;
        f.lastIndex = 0;
      }
      for (var h = []; ; ) {
        var d = eu(f, s);
        if (null === d) break;
        if ((h.push(d), !p)) break;
        "" === String(d[0]) && (f.lastIndex = tu(s, mt(f.lastIndex), v));
      }
      for (var y, g = "", m = 0, b = 0; b < h.length; b++) {
        d = h[b];
        for (
          var S = String(d[0]),
            w = ru(nu(yt(d.index), s.length), 0),
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
      f = uu;
    return (
      void 0 !== i && ((i = zt(i)), (f = iu)),
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
              var l = ou(s / 10);
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
var cu = xt.indexOf,
  au = [].indexOf,
  fu = !!au && 1 / [1].indexOf(1, -0) < 0,
  su = ln("indexOf"),
  lu = hr("indexOf", { ACCESSORS: !0, 1: 0 });
Nt(
  { target: "Array", proto: !0, forced: fu || !su || !lu },
  {
    indexOf: function (t) {
      return fu
        ? au.apply(this, arguments) || 0
        : cu(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var pu = Object.assign,
  vu = Object.defineProperty,
  hu =
    !pu ||
    d(function () {
      if (
        y &&
        1 !==
          pu(
            { b: 1 },
            pu(
              vu({}, "a", {
                enumerable: !0,
                get: function () {
                  vu(this, "b", { value: 3, enumerable: !1 });
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
        7 != pu({}, t)[r] || "abcdefghijklmnopqrst" != Gt(pu({}, e)).join("")
      );
    })
      ? function (t, e) {
          for (
            var r = zt(t), n = arguments.length, o = 1, i = Tt.f, u = b.f;
            n > o;

          )
            for (
              var c,
                a = j(arguments[o++]),
                f = i ? Gt(a).concat(i(a)) : Gt(a),
                s = f.length,
                l = 0;
              s > l;

            )
              (c = f[l++]), (y && !u.call(a, c)) || (r[c] = a[c]);
          return r;
        }
      : pu;
Nt(
  { target: "Object", stat: !0, forced: Object.assign !== hu },
  { assign: hu }
);
var du = D.f,
  yu = "".endsWith,
  gu = Math.min,
  mu = ui("endsWith"),
  bu =
    !mu &&
    !!(function () {
      var t = du(String.prototype, "endsWith");
      return t && !t.writable;
    })();
Nt(
  { target: "String", proto: !0, forced: !bu && !mu },
  {
    endsWith: function (t) {
      var e = String(E(this));
      oi(t);
      var r = arguments.length > 1 ? arguments[1] : void 0,
        n = mt(e.length),
        o = void 0 === r ? n : gu(mt(r), n),
        i = String(t);
      return yu ? yu.call(e, i, o) : e.slice(o - i.length, o) === i;
    },
  }
);
var Su = [].push,
  wu = Math.min,
  xu = !d(function () {
    return !RegExp(4294967295, "y");
  });
Ji(
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
              var n = String(E(this)),
                o = void 0 === r ? 4294967295 : r >>> 0;
              if (0 === o) return [];
              if (void 0 === t) return [n];
              if (!ni(t)) return e.call(n, t, o);
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
                  i.length > 1 && i.index < n.length && Su.apply(a, i.slice(1)),
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
          var o = E(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r);
        },
        function (t, o) {
          var i = r(n, t, this, o, n !== e);
          if (i.done) return i.value;
          var u = M(t),
            c = String(this),
            a = kn(u, RegExp),
            f = u.unicode,
            s = new a(
              xu ? u : "^(?:" + u.source + ")",
              (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (xu ? "y" : "g")
            ),
            l = void 0 === o ? 4294967295 : o >>> 0;
          if (0 === l) return [];
          if (0 === c.length) return null === eu(s, c) ? [c] : [];
          for (var p = 0, v = 0, h = []; v < c.length; ) {
            s.lastIndex = xu ? v : 0;
            var d,
              y = eu(s, xu ? c : c.slice(v));
            if (
              null === y ||
              (d = wu(mt(s.lastIndex + (xu ? 0 : v)), c.length)) === p
            )
              v = tu(c, v, f);
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
  !xu
);
var Pu = encodeURIComponent;
function ju(t) {
  return t && t.startsWith("'") ? t.substr(1, t.length - 2) : t;
}
var Eu = {
    type: "audio",
    name: "forvo",
    url: "https://forvo.com",
    makeUrl: function (t) {
      var e = t.lang;
      return "https://ru.forvo.com/word/" + Pu(t.text) + "/#" + e;
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
                            .map(ju),
                        };
                      }
                    })(e);
                    if (r && "Play" === r.name) {
                      var n =
                        "https://audio00.forvo.com/audios/mp3/" +
                        a.Base64.decode(r.args[4]);
                      if (n.endsWith(".mp3")) {
                        var o = { url: n };
                        return Promise.resolve(t.$$("span.ofLink")).then(
                          function (e) {
                            function r() {
                              return Promise.resolve(t.$$("span.from")).then(
                                function (t) {
                                  function e() {
                                    return [{ audio: o }];
                                  }
                                  var r = t[0],
                                    n = (function () {
                                      if (r)
                                        return Promise.resolve(
                                          r.textContent()
                                        ).then(function (t) {
                                          var e = (function (t) {
                                            if (t) {
                                              var e = (t = c(
                                                u(t, "("),
                                                ")"
                                              )).split(",");
                                              if (!i(e)) {
                                                var r,
                                                  n = {
                                                    gender:
                                                      ((r = e[0]),
                                                      "женщина" === (r = _i(r))
                                                        ? "f"
                                                        : "мужчина" === r
                                                        ? "m"
                                                        : r),
                                                  };
                                                return (
                                                  2 === e.length &&
                                                    (n.country = (function (t) {
                                                      return _i(t);
                                                    })(e[1])),
                                                  n
                                                );
                                              }
                                            }
                                          })(t);
                                          e && Object.assign(o, e);
                                        });
                                    })();
                                  return n && n.then ? n.then(e) : e();
                                }
                              );
                            }
                            var n = e[0],
                              a = (function () {
                                if (n)
                                  return Promise.resolve(
                                    n.getAttribute("data-p2")
                                  ).then(function (t) {
                                    t && (o.author = t);
                                  });
                              })();
                            return a && a.then ? a.then(r) : r();
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
  Ou = {
    type: "audio",
    name: "howjsay",
    url: "https://howjsay.com/mp3",
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
  Au = me.find,
  Tu = !0,
  Iu = hr("find");
"find" in [] &&
  Array(1).find(function () {
    Tu = !1;
  }),
  Nt(
    { target: "Array", proto: !0, forced: Tu || !Iu },
    {
      find: function (t) {
        return Au(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  qr("find");
var Ru = function (t) {
    try {
      return (
        $i &&
          (t = "https://api.allorigins.win/raw?url=" + encodeURIComponent(t)),
        Promise.resolve(
          f(t, {
            headers: {
              "User-Agent": "lingua-bot",
              Accept: "text/html,application/xhtml+xml",
            },
          })
        ).then(function (t) {
          if (!t.ok) throw new Error(t.statusText);
          return Promise.resolve(t.text()).then(function (t) {
            return new Cu(t);
          });
        })
      );
    } catch (t) {
      return Promise.reject(t);
    }
  },
  ku = (function () {
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
  Cu = (function () {
    function t(t) {
      this.$ = s.load(t);
    }
    var e = t.prototype;
    return (
      (e.$$ = function (t) {
        var e = this,
          r = this.$(t),
          n = [];
        return (
          r.each(function (t, r) {
            n.push(new ku(e.$, e.$(r)));
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
  _u = (function () {
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
  $u = (function () {
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
                  return new _u(r.page, t);
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
function Lu(t, e) {
  try {
    var r = t();
  } catch (t) {
    return e(t);
  }
  return r && r.then ? r.then(void 0, e) : r;
}
var Du =
  "undefined" != typeof Symbol
    ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))
    : "@@iterator";
function Mu(t, e, r) {
  if (!t.s) {
    if (r instanceof Fu) {
      if (!r.s) return void (r.o = Mu.bind(null, t, e));
      1 & e && (e = r.s), (r = r.v);
    }
    if (r && r.then)
      return void r.then(Mu.bind(null, t, e), Mu.bind(null, t, 2));
    (t.s = e), (t.v = r);
    var n = t.o;
    n && n(t);
  }
}
var Fu = (function () {
  function t() {}
  return (
    (t.prototype.then = function (e, r) {
      var n = new t(),
        o = this.s;
      if (o) {
        var i = 1 & o ? e : r;
        if (i) {
          try {
            Mu(n, 1, i(this.v));
          } catch (t) {
            Mu(n, 2, t);
          }
          return n;
        }
        return this;
      }
      return (
        (this.o = function (t) {
          try {
            var o = t.v;
            1 & t.s ? Mu(n, 1, e ? e(o) : o) : r ? Mu(n, 1, r(o)) : Mu(n, 2, o);
          } catch (t) {
            Mu(n, 2, t);
          }
        }),
        n
      );
    }),
    t
  );
})();
function Nu(t) {
  return t instanceof Fu && 1 & t.s;
}
function Uu(t, e, r) {
  if ("function" == typeof t[Du]) {
    var n,
      o,
      i,
      u = t[Du]();
    if (
      ((function t(c) {
        try {
          for (; !((n = u.next()).done || (r && r())); )
            if ((c = e(n.value)) && c.then) {
              if (!Nu(c))
                return void c.then(
                  t,
                  i || (i = Mu.bind(null, (o = new Fu()), 2))
                );
              c = c.v;
            }
          o ? Mu(o, 1, c) : (o = c);
        } catch (t) {
          Mu(o || (o = new Fu()), 2, t);
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
              if (!Nu(c))
                return void c.then(
                  u,
                  o || (o = Mu.bind(null, (n = new Fu()), 2))
                );
              c = c.v;
            }
          n ? Mu(n, 1, c) : (n = c);
        } catch (t) {
          Mu(n || (n = new Fu()), 2, t);
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
var Wu = [
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
  Eu,
  Ou,
];
function qu(t) {
  return function (o) {
    var i = o.text,
      u = o.lang;
    try {
      var c,
        a = function (o) {
          if (c) return o;
          var i = t.makeUrl(f);
          return (
            i.startsWith("/") && (i = t.url + i),
            Lu(
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
                                          return new $u(e, r);
                                        }
                                      );
                                    }
                                  );
                                });
                              },
                              n = (function () {
                                if ($i) return (e = 1), Promise.resolve(Ru(t));
                              })();
                            return Promise.resolve(
                              n && n.then ? n.then(r) : r(n)
                            );
                          } catch (t) {
                            return Promise.reject(t);
                          }
                        })(e)
                      : Ru(e);
                  })(t.engine, i)
                ).then(function (o) {
                  return (function (t, o, i) {
                    try {
                      var u = function () {
                          return {
                            source: { name: t.name, url: t.url },
                            data: n(c, function (t) {
                              return Array.from(t);
                            }),
                          };
                        },
                        c = {},
                        a = function (t) {
                          t && !c[t] && (c[t] = new Set());
                        },
                        f = function (t, n, i) {
                          try {
                            a(t);
                            var u = t ? c[t] : void 0;
                            return Promise.resolve(o.$$(n.selector)).then(
                              function (t) {
                                var o = Uu(t, function (t) {
                                  return Promise.resolve(i(n, t)).then(
                                    function (t) {
                                      if (Array.isArray(t))
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
                                                        return Si(t, void 0);
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
                                                          ? Si(t, void 0)
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
                                              t.filter(function (t) {
                                                return !e(t) && "" !== t;
                                              })
                                            );
                                          !(n = o()).done;

                                        ) {
                                          var i = n.value;
                                          u
                                            ? u.add(i)
                                            : r(i, function (t, e) {
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
                                var r = _i(e);
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
                              i = Uu(r, function (r) {
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
                                        i = _i(t);
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
                        y = Uu(t.plan, function (t) {
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
                  })(t, o);
                });
              },
              function (e) {
                return (
                  console.log("error", t.name, e),
                  { source: { name: t.name, url: t.url }, error: e }
                );
              }
            )
          );
        },
        f = { text: i, lang: u || "en" },
        s = (function () {
          if (t.getData)
            return Lu(
              function () {
                return Promise.resolve(t.getData(f)).then(function (e) {
                  return (
                    (c = 1), { source: { name: t.name, url: t.url }, data: e }
                  );
                });
              },
              function (e) {
                return (
                  console.log("error", t.name, e),
                  (c = 1),
                  { source: { name: t.name, url: t.url }, error: e }
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
(exports.fetchData = function (t, e) {
  void 0 === e && (e = {});
  var r =
    e.sources ||
    Wu.filter(function (t) {
      return !e.type || t.type === e.type;
    });
  return Promise.all(
    r.map(qu).map(function (e) {
      return e(t);
    })
  );
}),
  (exports.sources = Wu);
//# sourceMappingURL=bundle.js.map
