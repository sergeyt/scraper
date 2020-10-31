!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(
        exports,
        require("lodash/isNil"),
        require("lodash/forEach"),
        require("lodash/mapValues"),
        require("lodash/trim"),
        require("lodash/isEmpty"),
        require("lodash/trimStart"),
        require("lodash/trimEnd"),
        require("js-base64"),
        require("playwright"),
        require("isomorphic-unfetch"),
        require("cheerio")
      )
    : "function" == typeof define && define.amd
    ? define([
        "exports",
        "lodash/isNil",
        "lodash/forEach",
        "lodash/mapValues",
        "lodash/trim",
        "lodash/isEmpty",
        "lodash/trimStart",
        "lodash/trimEnd",
        "js-base64",
        "playwright",
        "isomorphic-unfetch",
        "cheerio",
      ], e)
    : e(
        ((t = t || self).linguaScraper = {}),
        t.isNil,
        t.forEach,
        t.mapValues,
        t.trim,
        t.isEmpty,
        t.trimStart,
        t.trimEnd,
        t.jsBase64,
        t.playwright,
        t.isomorphicUnfetch,
        t.cheerio
      );
})(this, function (t, e, r, n, o, i, u, c, a, f, s, l) {
  (e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e),
    (r =
      r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r),
    (n =
      n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n),
    (o =
      o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o),
    (i =
      i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i),
    (u =
      u && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u),
    (c =
      c && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c),
    (s =
      s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s),
    (l =
      l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l);
  var p =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function h(t, e, r) {
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
    d =
      v("object" == typeof globalThis && globalThis) ||
      v("object" == typeof window && window) ||
      v("object" == typeof self && self) ||
      v("object" == typeof p && p) ||
      Function("return this")(),
    y = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    g = !y(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    m = {}.propertyIsEnumerable,
    b = Object.getOwnPropertyDescriptor,
    S = {
      f:
        b && !m.call({ 1: 2 }, 1)
          ? function (t) {
              var e = b(this, t);
              return !!e && e.enumerable;
            }
          : m,
    },
    w = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    x = {}.toString,
    P = function (t) {
      return x.call(t).slice(8, -1);
    },
    O = "".split,
    j = y(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == P(t) ? O.call(t, "") : Object(t);
        }
      : Object,
    E = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    A = function (t) {
      return j(E(t));
    },
    T = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    I = function (t, e) {
      if (!T(t)) return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !T((n = r.call(t))))
        return n;
      if ("function" == typeof (r = t.valueOf) && !T((n = r.call(t)))) return n;
      if (!e && "function" == typeof (r = t.toString) && !T((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    },
    R = {}.hasOwnProperty,
    k = function (t, e) {
      return R.call(t, e);
    },
    C = d.document,
    _ = T(C) && T(C.createElement),
    $ = function (t) {
      return _ ? C.createElement(t) : {};
    },
    L =
      !g &&
      !y(function () {
        return (
          7 !=
          Object.defineProperty($("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    D = Object.getOwnPropertyDescriptor,
    M = {
      f: g
        ? D
        : function (t, e) {
            if (((t = A(t)), (e = I(e, !0)), L))
              try {
                return D(t, e);
              } catch (t) {}
            if (k(t, e)) return w(!S.f.call(t, e), t[e]);
          },
    },
    N = function (t) {
      if (!T(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    F = Object.defineProperty,
    U = {
      f: g
        ? F
        : function (t, e, r) {
            if ((N(t), (e = I(e, !0)), N(r), L))
              try {
                return F(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          },
    },
    W = g
      ? function (t, e, r) {
          return U.f(t, e, w(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        },
    q = function (t, e) {
      try {
        W(d, t, e);
      } catch (r) {
        d[t] = e;
      }
      return e;
    },
    z = d["__core-js_shared__"] || q("__core-js_shared__", {}),
    G = Function.toString;
  "function" != typeof z.inspectSource &&
    (z.inspectSource = function (t) {
      return G.call(t);
    });
  var B,
    V,
    K,
    H = z.inspectSource,
    X = d.WeakMap,
    Y = "function" == typeof X && /native code/.test(H(X)),
    Q = h(function (t) {
      (t.exports = function (t, e) {
        return z[t] || (z[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    }),
    J = 0,
    Z = Math.random(),
    tt = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++J + Z).toString(36)
      );
    },
    et = Q("keys"),
    rt = function (t) {
      return et[t] || (et[t] = tt(t));
    },
    nt = {};
  if (Y) {
    var ot = new (0, d.WeakMap)(),
      it = ot.get,
      ut = ot.has,
      ct = ot.set;
    (B = function (t, e) {
      return ct.call(ot, t, e), e;
    }),
      (V = function (t) {
        return it.call(ot, t) || {};
      }),
      (K = function (t) {
        return ut.call(ot, t);
      });
  } else {
    var at = rt("state");
    (nt[at] = !0),
      (B = function (t, e) {
        return W(t, at, e), e;
      }),
      (V = function (t) {
        return k(t, at) ? t[at] : {};
      }),
      (K = function (t) {
        return k(t, at);
      });
  }
  var ft,
    st = {
      set: B,
      get: V,
      has: K,
      enforce: function (t) {
        return K(t) ? V(t) : B(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!T(e) || (r = V(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    },
    lt = h(function (t) {
      var e = st.get,
        r = st.enforce,
        n = String(String).split("String");
      (t.exports = function (t, e, o, i) {
        var u = !!i && !!i.unsafe,
          c = !!i && !!i.enumerable,
          a = !!i && !!i.noTargetGet;
        "function" == typeof o &&
          ("string" != typeof e || k(o, "name") || W(o, "name", e),
          (r(o).source = n.join("string" == typeof e ? e : ""))),
          t !== d
            ? (u ? !a && t[e] && (c = !0) : delete t[e],
              c ? (t[e] = o) : W(t, e, o))
            : c
            ? (t[e] = o)
            : q(e, o);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || H(this);
      });
    }),
    pt = d,
    ht = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    vt = function (t, e) {
      return arguments.length < 2
        ? ht(pt[t]) || ht(d[t])
        : (pt[t] && pt[t][e]) || (d[t] && d[t][e]);
    },
    dt = Math.ceil,
    yt = Math.floor,
    gt = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? yt : dt)(t);
    },
    mt = Math.min,
    bt = function (t) {
      return t > 0 ? mt(gt(t), 9007199254740991) : 0;
    },
    St = Math.max,
    wt = Math.min,
    xt = function (t) {
      return function (e, r, n) {
        var o,
          i = A(e),
          u = bt(i.length),
          c = (function (t, e) {
            var r = gt(t);
            return r < 0 ? St(r + e, 0) : wt(r, e);
          })(n, u);
        if (t && r != r) {
          for (; u > c; ) if ((o = i[c++]) != o) return !0;
        } else
          for (; u > c; c++)
            if ((t || c in i) && i[c] === r) return t || c || 0;
        return !t && -1;
      };
    },
    Pt = { includes: xt(!0), indexOf: xt(!1) },
    Ot = Pt.indexOf,
    jt = function (t, e) {
      var r,
        n = A(t),
        o = 0,
        i = [];
      for (r in n) !k(nt, r) && k(n, r) && i.push(r);
      for (; e.length > o; ) k(n, (r = e[o++])) && (~Ot(i, r) || i.push(r));
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
    At = Et.concat("length", "prototype"),
    Tt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return jt(t, At);
        },
    },
    It = { f: Object.getOwnPropertySymbols },
    Rt =
      vt("Reflect", "ownKeys") ||
      function (t) {
        var e = Tt.f(N(t)),
          r = It.f;
        return r ? e.concat(r(t)) : e;
      },
    kt = function (t, e) {
      for (var r = Rt(e), n = U.f, o = M.f, i = 0; i < r.length; i++) {
        var u = r[i];
        k(t, u) || n(t, u, o(e, u));
      }
    },
    Ct = /#|\.prototype\./,
    _t = function (t, e) {
      var r = Lt[$t(t)];
      return r == Mt || (r != Dt && ("function" == typeof e ? y(e) : !!e));
    },
    $t = (_t.normalize = function (t) {
      return String(t).replace(Ct, ".").toLowerCase();
    }),
    Lt = (_t.data = {}),
    Dt = (_t.NATIVE = "N"),
    Mt = (_t.POLYFILL = "P"),
    Nt = _t,
    Ft = M.f,
    Ut = function (t, e) {
      var r,
        n,
        o,
        i,
        u,
        c = t.target,
        a = t.global,
        f = t.stat;
      if ((r = a ? d : f ? d[c] || q(c, {}) : (d[c] || {}).prototype))
        for (n in e) {
          if (
            ((i = e[n]),
            (o = t.noTargetGet ? (u = Ft(r, n)) && u.value : r[n]),
            !Nt(a ? n : c + (f ? "." : "#") + n, t.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue;
            kt(i, o);
          }
          (t.sham || (o && o.sham)) && W(i, "sham", !0), lt(r, n, i, t);
        }
    },
    Wt =
      !!Object.getOwnPropertySymbols &&
      !y(function () {
        return !String(Symbol());
      }),
    qt = Wt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    zt =
      Array.isArray ||
      function (t) {
        return "Array" == P(t);
      },
    Gt = function (t) {
      return Object(E(t));
    },
    Bt =
      Object.keys ||
      function (t) {
        return jt(t, Et);
      },
    Vt = g
      ? Object.defineProperties
      : function (t, e) {
          N(t);
          for (var r, n = Bt(e), o = n.length, i = 0; o > i; )
            U.f(t, (r = n[i++]), e[r]);
          return t;
        },
    Kt = vt("document", "documentElement"),
    Ht = rt("IE_PROTO"),
    Xt = function () {},
    Yt = function (t) {
      return "<script>" + t + "</script>";
    },
    Qt = function () {
      try {
        ft = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      Qt = ft
        ? (function (t) {
            t.write(Yt("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(ft)
        : (((e = $("iframe")).style.display = "none"),
          Kt.appendChild(e),
          (e.src = String("javascript:")),
          (t = e.contentWindow.document).open(),
          t.write(Yt("document.F=Object")),
          t.close(),
          t.F);
      for (var r = Et.length; r--; ) delete Qt.prototype[Et[r]];
      return Qt();
    };
  nt[Ht] = !0;
  var Jt =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((Xt.prototype = N(t)),
              (r = new Xt()),
              (Xt.prototype = null),
              (r[Ht] = t))
            : (r = Qt()),
          void 0 === e ? r : Vt(r, e)
        );
      },
    Zt = Tt.f,
    te = {}.toString,
    ee =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    re = {
      f: function (t) {
        return ee && "[object Window]" == te.call(t)
          ? (function (t) {
              try {
                return Zt(t);
              } catch (t) {
                return ee.slice();
              }
            })(t)
          : Zt(A(t));
      },
    },
    ne = Q("wks"),
    oe = d.Symbol,
    ie = qt ? oe : (oe && oe.withoutSetter) || tt,
    ue = function (t) {
      return (
        k(ne, t) || (ne[t] = Wt && k(oe, t) ? oe[t] : ie("Symbol." + t)), ne[t]
      );
    },
    ce = { f: ue },
    ae = U.f,
    fe = function (t) {
      var e = pt.Symbol || (pt.Symbol = {});
      k(e, t) || ae(e, t, { value: ce.f(t) });
    },
    se = U.f,
    le = ue("toStringTag"),
    pe = function (t, e, r) {
      t &&
        !k((t = r ? t : t.prototype), le) &&
        se(t, le, { configurable: !0, value: e });
    },
    he = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    ve = function (t, e, r) {
      if ((he(t), void 0 === e)) return t;
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
    de = ue("species"),
    ye = function (t, e) {
      var r;
      return (
        zt(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !zt(r.prototype))
            ? T(r) && null === (r = r[de]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    },
    ge = [].push,
    me = function (t) {
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
            h = Gt(c),
            v = j(h),
            d = ve(a, f, 3),
            y = bt(v.length),
            g = 0,
            m = s || ye,
            b = e ? m(c, y) : r ? m(c, 0) : void 0;
          y > g;
          g++
        )
          if ((u || g in v) && ((p = d((l = v[g]), g, h)), t))
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
                  ge.call(b, l);
              }
            else if (o) return !1;
        return i ? -1 : n || o ? o : b;
      };
    },
    be = {
      forEach: me(0),
      map: me(1),
      filter: me(2),
      some: me(3),
      every: me(4),
      find: me(5),
      findIndex: me(6),
    },
    Se = be.forEach,
    we = rt("hidden"),
    xe = ue("toPrimitive"),
    Pe = st.set,
    Oe = st.getterFor("Symbol"),
    je = Object.prototype,
    Ee = d.Symbol,
    Ae = vt("JSON", "stringify"),
    Te = M.f,
    Ie = U.f,
    Re = re.f,
    ke = S.f,
    Ce = Q("symbols"),
    _e = Q("op-symbols"),
    $e = Q("string-to-symbol-registry"),
    Le = Q("symbol-to-string-registry"),
    De = Q("wks"),
    Me = d.QObject,
    Ne = !Me || !Me.prototype || !Me.prototype.findChild,
    Fe =
      g &&
      y(function () {
        return (
          7 !=
          Jt(
            Ie({}, "a", {
              get: function () {
                return Ie(this, "a", { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (t, e, r) {
            var n = Te(je, e);
            n && delete je[e], Ie(t, e, r), n && t !== je && Ie(je, e, n);
          }
        : Ie,
    Ue = function (t, e) {
      var r = (Ce[t] = Jt(Ee.prototype));
      return (
        Pe(r, { type: "Symbol", tag: t, description: e }),
        g || (r.description = e),
        r
      );
    },
    We = qt
      ? function (t) {
          return "symbol" == typeof t;
        }
      : function (t) {
          return Object(t) instanceof Ee;
        },
    qe = function (t, e, r) {
      t === je && qe(_e, e, r), N(t);
      var n = I(e, !0);
      return (
        N(r),
        k(Ce, n)
          ? (r.enumerable
              ? (k(t, we) && t[we][n] && (t[we][n] = !1),
                (r = Jt(r, { enumerable: w(0, !1) })))
              : (k(t, we) || Ie(t, we, w(1, {})), (t[we][n] = !0)),
            Fe(t, n, r))
          : Ie(t, n, r)
      );
    },
    ze = function (t, e) {
      N(t);
      var r = A(e),
        n = Bt(r).concat(Ke(r));
      return (
        Se(n, function (e) {
          (g && !Ge.call(r, e)) || qe(t, e, r[e]);
        }),
        t
      );
    },
    Ge = function (t) {
      var e = I(t, !0),
        r = ke.call(this, e);
      return (
        !(this === je && k(Ce, e) && !k(_e, e)) &&
        (!(r || !k(this, e) || !k(Ce, e) || (k(this, we) && this[we][e])) || r)
      );
    },
    Be = function (t, e) {
      var r = A(t),
        n = I(e, !0);
      if (r !== je || !k(Ce, n) || k(_e, n)) {
        var o = Te(r, n);
        return (
          !o || !k(Ce, n) || (k(r, we) && r[we][n]) || (o.enumerable = !0), o
        );
      }
    },
    Ve = function (t) {
      var e = Re(A(t)),
        r = [];
      return (
        Se(e, function (t) {
          k(Ce, t) || k(nt, t) || r.push(t);
        }),
        r
      );
    },
    Ke = function (t) {
      var e = t === je,
        r = Re(e ? _e : A(t)),
        n = [];
      return (
        Se(r, function (t) {
          !k(Ce, t) || (e && !k(je, t)) || n.push(Ce[t]);
        }),
        n
      );
    };
  if (
    (Wt ||
      (lt(
        (Ee = function () {
          if (this instanceof Ee)
            throw TypeError("Symbol is not a constructor");
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = tt(t),
            r = function (t) {
              this === je && r.call(_e, t),
                k(this, we) && k(this[we], e) && (this[we][e] = !1),
                Fe(this, e, w(1, t));
            };
          return g && Ne && Fe(je, e, { configurable: !0, set: r }), Ue(e, t);
        }).prototype,
        "toString",
        function () {
          return Oe(this).tag;
        }
      ),
      lt(Ee, "withoutSetter", function (t) {
        return Ue(tt(t), t);
      }),
      (S.f = Ge),
      (U.f = qe),
      (M.f = Be),
      (Tt.f = re.f = Ve),
      (It.f = Ke),
      (ce.f = function (t) {
        return Ue(ue(t), t);
      }),
      g &&
        (Ie(Ee.prototype, "description", {
          configurable: !0,
          get: function () {
            return Oe(this).description;
          },
        }),
        lt(je, "propertyIsEnumerable", Ge, { unsafe: !0 }))),
    Ut({ global: !0, wrap: !0, forced: !Wt, sham: !Wt }, { Symbol: Ee }),
    Se(Bt(De), function (t) {
      fe(t);
    }),
    Ut(
      { target: "Symbol", stat: !0, forced: !Wt },
      {
        for: function (t) {
          var e = String(t);
          if (k($e, e)) return $e[e];
          var r = Ee(e);
          return ($e[e] = r), (Le[r] = e), r;
        },
        keyFor: function (t) {
          if (!We(t)) throw TypeError(t + " is not a symbol");
          if (k(Le, t)) return Le[t];
        },
        useSetter: function () {
          Ne = !0;
        },
        useSimple: function () {
          Ne = !1;
        },
      }
    ),
    Ut(
      { target: "Object", stat: !0, forced: !Wt, sham: !g },
      {
        create: function (t, e) {
          return void 0 === e ? Jt(t) : ze(Jt(t), e);
        },
        defineProperty: qe,
        defineProperties: ze,
        getOwnPropertyDescriptor: Be,
      }
    ),
    Ut(
      { target: "Object", stat: !0, forced: !Wt },
      { getOwnPropertyNames: Ve, getOwnPropertySymbols: Ke }
    ),
    Ut(
      {
        target: "Object",
        stat: !0,
        forced: y(function () {
          It.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return It.f(Gt(t));
        },
      }
    ),
    Ae)
  ) {
    var He =
      !Wt ||
      y(function () {
        var t = Ee();
        return (
          "[null]" != Ae([t]) || "{}" != Ae({ a: t }) || "{}" != Ae(Object(t))
        );
      });
    Ut(
      { target: "JSON", stat: !0, forced: He },
      {
        stringify: function (t, e, r) {
          for (var n, o = [t], i = 1; arguments.length > i; )
            o.push(arguments[i++]);
          if (((n = e), (T(e) || void 0 !== t) && !We(t)))
            return (
              zt(e) ||
                (e = function (t, e) {
                  if (
                    ("function" == typeof n && (e = n.call(this, t, e)), !We(e))
                  )
                    return e;
                }),
              (o[1] = e),
              Ae.apply(null, o)
            );
        },
      }
    );
  }
  Ee.prototype[xe] || W(Ee.prototype, xe, Ee.prototype.valueOf),
    pe(Ee, "Symbol"),
    (nt[we] = !0);
  var Xe = U.f,
    Ye = d.Symbol;
  if (
    g &&
    "function" == typeof Ye &&
    (!("description" in Ye.prototype) || void 0 !== Ye().description)
  ) {
    var Qe = {},
      Je = function () {
        var t =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          e = this instanceof Je ? new Ye(t) : void 0 === t ? Ye() : Ye(t);
        return "" === t && (Qe[e] = !0), e;
      };
    kt(Je, Ye);
    var Ze = (Je.prototype = Ye.prototype);
    Ze.constructor = Je;
    var tr = Ze.toString,
      er = "Symbol(test)" == String(Ye("test")),
      rr = /^Symbol\((.*)\)[^)]+$/;
    Xe(Ze, "description", {
      configurable: !0,
      get: function () {
        var t = T(this) ? this.valueOf() : this,
          e = tr.call(t);
        if (k(Qe, t)) return "";
        var r = er ? e.slice(7, -1) : e.replace(rr, "$1");
        return "" === r ? void 0 : r;
      },
    }),
      Ut({ global: !0, forced: !0 }, { Symbol: Je });
  }
  fe("iterator");
  var nr,
    or,
    ir = vt("navigator", "userAgent") || "",
    ur = d.process,
    cr = ur && ur.versions,
    ar = cr && cr.v8;
  ar
    ? (or = (nr = ar.split("."))[0] + nr[1])
    : ir &&
      (!(nr = ir.match(/Edge\/(\d+)/)) || nr[1] >= 74) &&
      (nr = ir.match(/Chrome\/(\d+)/)) &&
      (or = nr[1]);
  var fr = or && +or,
    sr = ue("species"),
    lr = function (t) {
      return (
        fr >= 51 ||
        !y(function () {
          var e = [];
          return (
            ((e.constructor = {})[sr] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    pr = Object.defineProperty,
    hr = {},
    vr = function (t) {
      throw t;
    },
    dr = function (t, e) {
      if (k(hr, t)) return hr[t];
      e || (e = {});
      var r = [][t],
        n = !!k(e, "ACCESSORS") && e.ACCESSORS,
        o = k(e, 0) ? e[0] : vr,
        i = k(e, 1) ? e[1] : void 0;
      return (hr[t] =
        !!r &&
        !y(function () {
          if (n && !g) return !0;
          var t = { length: -1 };
          n ? pr(t, 1, { enumerable: !0, get: vr }) : (t[1] = 1),
            r.call(t, o, i);
        }));
    },
    yr = be.filter,
    gr = lr("filter"),
    mr = dr("filter");
  Ut(
    { target: "Array", proto: !0, forced: !gr || !mr },
    {
      filter: function (t) {
        return yr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var br = function (t, e, r, n) {
      try {
        return n ? e(N(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && N(o.call(t)), e);
      }
    },
    Sr = {},
    wr = ue("iterator"),
    xr = Array.prototype,
    Pr = function (t) {
      return void 0 !== t && (Sr.Array === t || xr[wr] === t);
    },
    Or = function (t, e, r) {
      var n = I(e);
      n in t ? U.f(t, n, w(0, r)) : (t[n] = r);
    },
    jr = {};
  jr[ue("toStringTag")] = "z";
  var Er = "[object z]" === String(jr),
    Ar = ue("toStringTag"),
    Tr =
      "Arguments" ==
      P(
        (function () {
          return arguments;
        })()
      ),
    Ir = Er
      ? P
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
              })((e = Object(t)), Ar))
            ? r
            : Tr
            ? P(e)
            : "Object" == (n = P(e)) && "function" == typeof e.callee
            ? "Arguments"
            : n;
        },
    Rr = ue("iterator"),
    kr = function (t) {
      if (null != t) return t[Rr] || t["@@iterator"] || Sr[Ir(t)];
    },
    Cr = ue("iterator"),
    _r = !1;
  try {
    var $r = 0,
      Lr = {
        next: function () {
          return { done: !!$r++ };
        },
        return: function () {
          _r = !0;
        },
      };
    (Lr[Cr] = function () {
      return this;
    }),
      Array.from(Lr, function () {
        throw 2;
      });
  } catch (t) {}
  var Dr = function (t, e) {
      if (!e && !_r) return !1;
      var r = !1;
      try {
        var n = {};
        (n[Cr] = function () {
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
    Mr = !Dr(function (t) {
      Array.from(t);
    });
  Ut(
    { target: "Array", stat: !0, forced: Mr },
    {
      from: function (t) {
        var e,
          r,
          n,
          o,
          i,
          u,
          c = Gt(t),
          a = "function" == typeof this ? this : Array,
          f = arguments.length,
          s = f > 1 ? arguments[1] : void 0,
          l = void 0 !== s,
          p = kr(c),
          h = 0;
        if (
          (l && (s = ve(s, f > 2 ? arguments[2] : void 0, 2)),
          null == p || (a == Array && Pr(p)))
        )
          for (r = new a((e = bt(c.length))); e > h; h++)
            (u = l ? s(c[h], h) : c[h]), Or(r, h, u);
        else
          for (
            i = (o = p.call(c)).next, r = new a();
            !(n = i.call(o)).done;
            h++
          )
            (u = l ? br(o, s, [n.value, h], !0) : n.value), Or(r, h, u);
        return (r.length = h), r;
      },
    }
  ),
    Ut({ target: "Array", stat: !0 }, { isArray: zt });
  var Nr = ue("unscopables"),
    Fr = Array.prototype;
  null == Fr[Nr] && U.f(Fr, Nr, { configurable: !0, value: Jt(null) });
  var Ur,
    Wr,
    qr,
    zr = function (t) {
      Fr[Nr][t] = !0;
    },
    Gr = !y(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    Br = rt("IE_PROTO"),
    Vr = Object.prototype,
    Kr = Gr
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = Gt(t)),
            k(t, Br)
              ? t[Br]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Vr
              : null
          );
        },
    Hr = ue("iterator"),
    Xr = !1;
  [].keys &&
    ("next" in (qr = [].keys())
      ? (Wr = Kr(Kr(qr))) !== Object.prototype && (Ur = Wr)
      : (Xr = !0)),
    null == Ur && (Ur = {}),
    k(Ur, Hr) ||
      W(Ur, Hr, function () {
        return this;
      });
  var Yr = { IteratorPrototype: Ur, BUGGY_SAFARI_ITERATORS: Xr },
    Qr = Yr.IteratorPrototype,
    Jr = function () {
      return this;
    },
    Zr =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return (
                N(r),
                (function (t) {
                  if (!T(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                })(n),
                e ? t.call(r, n) : (r.__proto__ = n),
                r
              );
            };
          })()
        : void 0),
    tn = Yr.IteratorPrototype,
    en = Yr.BUGGY_SAFARI_ITERATORS,
    rn = ue("iterator"),
    nn = function () {
      return this;
    },
    on = function (t, e, r, n, o, i, u) {
      !(function (t, e, r) {
        var n = e + " Iterator";
        (t.prototype = Jt(Qr, { next: w(1, r) })), pe(t, n, !1), (Sr[n] = Jr);
      })(r, e, n);
      var c,
        a,
        f,
        s = function (t) {
          if (t === o && d) return d;
          if (!en && t in h) return h[t];
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
        h = t.prototype,
        v = h[rn] || h["@@iterator"] || (o && h[o]),
        d = (!en && v) || s(o),
        y = ("Array" == e && h.entries) || v;
      if (
        (y &&
          ((c = Kr(y.call(new t()))),
          tn !== Object.prototype &&
            c.next &&
            (Kr(c) !== tn &&
              (Zr ? Zr(c, tn) : "function" != typeof c[rn] && W(c, rn, nn)),
            pe(c, l, !0))),
        "values" == o &&
          v &&
          "values" !== v.name &&
          ((p = !0),
          (d = function () {
            return v.call(this);
          })),
        h[rn] !== d && W(h, rn, d),
        (Sr[e] = d),
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
          for (f in a) (en || p || !(f in h)) && lt(h, f, a[f]);
        else Ut({ target: e, proto: !0, forced: en || p }, a);
      return a;
    },
    un = st.set,
    cn = st.getterFor("Array Iterator"),
    an = on(
      Array,
      "Array",
      function (t, e) {
        un(this, { type: "Array Iterator", target: A(t), index: 0, kind: e });
      },
      function () {
        var t = cn(this),
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
  (Sr.Arguments = Sr.Array), zr("keys"), zr("values"), zr("entries");
  var fn = be.map,
    sn = lr("map"),
    ln = dr("map");
  Ut(
    { target: "Array", proto: !0, forced: !sn || !ln },
    {
      map: function (t) {
        return fn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var pn = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        y(function () {
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
    hn = be.some,
    vn = pn("some"),
    dn = dr("some");
  Ut(
    { target: "Array", proto: !0, forced: !vn || !dn },
    {
      some: function (t) {
        return hn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var yn = [].slice,
    gn = {},
    mn = function (t, e, r) {
      if (!(e in gn)) {
        for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
        gn[e] = Function("C,a", "return new C(" + n.join(",") + ")");
      }
      return gn[e](t, r);
    };
  Ut(
    { target: "Function", proto: !0 },
    {
      bind:
        Function.bind ||
        function (t) {
          var e = he(this),
            r = yn.call(arguments, 1),
            n = function () {
              var o = r.concat(yn.call(arguments));
              return this instanceof n ? mn(e, o.length, o) : e.apply(t, o);
            };
          return T(e.prototype) && (n.prototype = e.prototype), n;
        },
    }
  );
  var bn = Function.prototype,
    Sn = bn.toString,
    wn = /^\s*function ([^ (]*)/;
  g &&
    !("name" in bn) &&
    (0, U.f)(bn, "name", {
      configurable: !0,
      get: function () {
        try {
          return Sn.call(this).match(wn)[1];
        } catch (t) {
          return "";
        }
      },
    }),
    Er ||
      lt(
        Object.prototype,
        "toString",
        Er
          ? {}.toString
          : function () {
              return "[object " + Ir(this) + "]";
            },
        { unsafe: !0 }
      );
  var xn,
    Pn,
    On,
    jn = d.Promise,
    En = function (t, e, r) {
      for (var n in e) lt(t, n, e[n], r);
      return t;
    },
    An = ue("species"),
    Tn = function (t) {
      var e = vt(t);
      g &&
        e &&
        !e[An] &&
        (0, U.f)(e, An, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    In = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    },
    Rn = h(function (t) {
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
          h = ve(r, n, o ? 2 : 1);
        if (i) u = t;
        else {
          if ("function" != typeof (c = kr(t)))
            throw TypeError("Target is not iterable");
          if (Pr(c)) {
            for (a = 0, f = bt(t.length); f > a; a++)
              if (
                (s = o ? h(N((p = t[a]))[0], p[1]) : h(t[a])) &&
                s instanceof e
              )
                return s;
            return new e(!1);
          }
          u = c.call(t);
        }
        for (l = u.next; !(p = l.call(u)).done; )
          if (
            "object" == typeof (s = br(u, h, p.value, o)) &&
            s &&
            s instanceof e
          )
            return s;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
    kn = ue("species"),
    Cn = function (t, e) {
      var r,
        n = N(t).constructor;
      return void 0 === n || null == (r = N(n)[kn]) ? e : he(r);
    },
    _n = /(iphone|ipod|ipad).*applewebkit/i.test(ir),
    $n = d.location,
    Ln = d.setImmediate,
    Dn = d.clearImmediate,
    Mn = d.process,
    Nn = d.MessageChannel,
    Fn = d.Dispatch,
    Un = 0,
    Wn = {},
    qn = function (t) {
      if (Wn.hasOwnProperty(t)) {
        var e = Wn[t];
        delete Wn[t], e();
      }
    },
    zn = function (t) {
      return function () {
        qn(t);
      };
    },
    Gn = function (t) {
      qn(t.data);
    },
    Bn = function (t) {
      d.postMessage(t + "", $n.protocol + "//" + $n.host);
    };
  (Ln && Dn) ||
    ((Ln = function (t) {
      for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
      return (
        (Wn[++Un] = function () {
          ("function" == typeof t ? t : Function(t)).apply(void 0, e);
        }),
        xn(Un),
        Un
      );
    }),
    (Dn = function (t) {
      delete Wn[t];
    }),
    "process" == P(Mn)
      ? (xn = function (t) {
          Mn.nextTick(zn(t));
        })
      : Fn && Fn.now
      ? (xn = function (t) {
          Fn.now(zn(t));
        })
      : Nn && !_n
      ? ((On = (Pn = new Nn()).port2),
        (Pn.port1.onmessage = Gn),
        (xn = ve(On.postMessage, On, 1)))
      : !d.addEventListener ||
        "function" != typeof postMessage ||
        d.importScripts ||
        y(Bn) ||
        "file:" === $n.protocol
      ? (xn =
          "onreadystatechange" in $("script")
            ? function (t) {
                Kt.appendChild($("script")).onreadystatechange = function () {
                  Kt.removeChild(this), qn(t);
                };
              }
            : function (t) {
                setTimeout(zn(t), 0);
              })
      : ((xn = Bn), d.addEventListener("message", Gn, !1)));
  var Vn,
    Kn,
    Hn,
    Xn,
    Yn,
    Qn,
    Jn,
    Zn,
    to = { set: Ln, clear: Dn },
    eo = M.f,
    ro = to.set,
    no = d.MutationObserver || d.WebKitMutationObserver,
    oo = d.process,
    io = d.Promise,
    uo = "process" == P(oo),
    co = eo(d, "queueMicrotask"),
    ao = co && co.value;
  ao ||
    ((Vn = function () {
      var t, e;
      for (uo && (t = oo.domain) && t.exit(); Kn; ) {
        (e = Kn.fn), (Kn = Kn.next);
        try {
          e();
        } catch (t) {
          throw (Kn ? Xn() : (Hn = void 0), t);
        }
      }
      (Hn = void 0), t && t.enter();
    }),
    uo
      ? (Xn = function () {
          oo.nextTick(Vn);
        })
      : no && !_n
      ? ((Yn = !0),
        (Qn = document.createTextNode("")),
        new no(Vn).observe(Qn, { characterData: !0 }),
        (Xn = function () {
          Qn.data = Yn = !Yn;
        }))
      : io && io.resolve
      ? ((Jn = io.resolve(void 0)),
        (Zn = Jn.then),
        (Xn = function () {
          Zn.call(Jn, Vn);
        }))
      : (Xn = function () {
          ro.call(d, Vn);
        }));
  var fo,
    so,
    lo,
    po,
    ho =
      ao ||
      function (t) {
        var e = { fn: t, next: void 0 };
        Hn && (Hn.next = e), Kn || ((Kn = e), Xn()), (Hn = e);
      },
    vo = function (t) {
      var e, r;
      (this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r)
          throw TypeError("Bad Promise constructor");
        (e = t), (r = n);
      })),
        (this.resolve = he(e)),
        (this.reject = he(r));
    },
    yo = {
      f: function (t) {
        return new vo(t);
      },
    },
    go = function (t, e) {
      if ((N(t), T(e) && e.constructor === t)) return e;
      var r = yo.f(t);
      return (0, r.resolve)(e), r.promise;
    },
    mo = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    },
    bo = to.set,
    So = ue("species"),
    wo = "Promise",
    xo = st.get,
    Po = st.set,
    Oo = st.getterFor(wo),
    jo = jn,
    Eo = d.TypeError,
    Ao = d.document,
    To = d.process,
    Io = vt("fetch"),
    Ro = yo.f,
    ko = Ro,
    Co = "process" == P(To),
    _o = !!(Ao && Ao.createEvent && d.dispatchEvent),
    $o = Nt(wo, function () {
      if (H(jo) === String(jo)) {
        if (66 === fr) return !0;
        if (!Co && "function" != typeof PromiseRejectionEvent) return !0;
      }
      if (fr >= 51 && /native code/.test(jo)) return !1;
      var t = jo.resolve(1),
        e = function (t) {
          t(
            function () {},
            function () {}
          );
        };
      return (
        ((t.constructor = {})[So] = e), !(t.then(function () {}) instanceof e)
      );
    }),
    Lo =
      $o ||
      !Dr(function (t) {
        jo.all(t).catch(function () {});
      }),
    Do = function (t) {
      var e;
      return !(!T(t) || "function" != typeof (e = t.then)) && e;
    },
    Mo = function (t, e, r) {
      if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        ho(function () {
          for (var o = e.value, i = 1 == e.state, u = 0; n.length > u; ) {
            var c,
              a,
              f,
              s = n[u++],
              l = i ? s.ok : s.fail,
              p = s.resolve,
              h = s.reject,
              v = s.domain;
            try {
              l
                ? (i || (2 === e.rejection && Wo(t, e), (e.rejection = 1)),
                  !0 === l
                    ? (c = o)
                    : (v && v.enter(), (c = l(o)), v && (v.exit(), (f = !0))),
                  c === s.promise
                    ? h(Eo("Promise-chain cycle"))
                    : (a = Do(c))
                    ? a.call(c, p, h)
                    : p(c))
                : h(o);
            } catch (t) {
              v && !f && v.exit(), h(t);
            }
          }
          (e.reactions = []), (e.notified = !1), r && !e.rejection && Fo(t, e);
        });
      }
    },
    No = function (t, e, r) {
      var n, o;
      _o
        ? (((n = Ao.createEvent("Event")).promise = e),
          (n.reason = r),
          n.initEvent(t, !1, !0),
          d.dispatchEvent(n))
        : (n = { promise: e, reason: r }),
        (o = d["on" + t])
          ? o(n)
          : "unhandledrejection" === t &&
            (function (t, e) {
              var r = d.console;
              r &&
                r.error &&
                (1 === arguments.length ? r.error(t) : r.error(t, e));
            })("Unhandled promise rejection", r);
    },
    Fo = function (t, e) {
      bo.call(d, function () {
        var r,
          n = e.value;
        if (
          Uo(e) &&
          ((r = mo(function () {
            Co
              ? To.emit("unhandledRejection", n, t)
              : No("unhandledrejection", t, n);
          })),
          (e.rejection = Co || Uo(e) ? 2 : 1),
          r.error)
        )
          throw r.value;
      });
    },
    Uo = function (t) {
      return 1 !== t.rejection && !t.parent;
    },
    Wo = function (t, e) {
      bo.call(d, function () {
        Co
          ? To.emit("rejectionHandled", t)
          : No("rejectionhandled", t, e.value);
      });
    },
    qo = function (t, e, r, n) {
      return function (o) {
        t(e, r, o, n);
      };
    },
    zo = function (t, e, r, n) {
      e.done ||
        ((e.done = !0),
        n && (e = n),
        (e.value = r),
        (e.state = 2),
        Mo(t, e, !0));
    },
    Go = function (t, e, r, n) {
      if (!e.done) {
        (e.done = !0), n && (e = n);
        try {
          if (t === r) throw Eo("Promise can't be resolved itself");
          var o = Do(r);
          o
            ? ho(function () {
                var n = { done: !1 };
                try {
                  o.call(r, qo(Go, t, n, e), qo(zo, t, n, e));
                } catch (r) {
                  zo(t, n, r, e);
                }
              })
            : ((e.value = r), (e.state = 1), Mo(t, e, !1));
        } catch (r) {
          zo(t, { done: !1 }, r, e);
        }
      }
    };
  $o &&
    ((jo = function (t) {
      In(this, jo, wo), he(t), fo.call(this);
      var e = xo(this);
      try {
        t(qo(Go, this, e), qo(zo, this, e));
      } catch (t) {
        zo(this, e, t);
      }
    }),
    ((fo = function (t) {
      Po(this, {
        type: wo,
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
        var r = Oo(this),
          n = Ro(Cn(this, jo));
        return (
          (n.ok = "function" != typeof t || t),
          (n.fail = "function" == typeof e && e),
          (n.domain = Co ? To.domain : void 0),
          (r.parent = !0),
          r.reactions.push(n),
          0 != r.state && Mo(this, r, !1),
          n.promise
        );
      },
      catch: function (t) {
        return this.then(void 0, t);
      },
    })),
    (so = function () {
      var t = new fo(),
        e = xo(t);
      (this.promise = t),
        (this.resolve = qo(Go, t, e)),
        (this.reject = qo(zo, t, e));
    }),
    (yo.f = Ro = function (t) {
      return t === jo || t === lo ? new so(t) : ko(t);
    }),
    "function" == typeof jn &&
      ((po = jn.prototype.then),
      lt(
        jn.prototype,
        "then",
        function (t, e) {
          var r = this;
          return new jo(function (t, e) {
            po.call(r, t, e);
          }).then(t, e);
        },
        { unsafe: !0 }
      ),
      "function" == typeof Io &&
        Ut(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              return go(jo, Io.apply(d, arguments));
            },
          }
        ))),
    Ut({ global: !0, wrap: !0, forced: $o }, { Promise: jo }),
    pe(jo, wo, !1),
    Tn(wo),
    (lo = vt(wo)),
    Ut(
      { target: wo, stat: !0, forced: $o },
      {
        reject: function (t) {
          var e = Ro(this);
          return e.reject.call(void 0, t), e.promise;
        },
      }
    ),
    Ut(
      { target: wo, stat: !0, forced: $o },
      {
        resolve: function (t) {
          return go(this, t);
        },
      }
    ),
    Ut(
      { target: wo, stat: !0, forced: Lo },
      {
        all: function (t) {
          var e = this,
            r = Ro(e),
            n = r.resolve,
            o = r.reject,
            i = mo(function () {
              var r = he(e.resolve),
                i = [],
                u = 0,
                c = 1;
              Rn(t, function (t) {
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
            r = Ro(e),
            n = r.reject,
            o = mo(function () {
              var o = he(e.resolve);
              Rn(t, function (t) {
                o.call(e, t).then(r.resolve, n);
              });
            });
          return o.error && n(o.value), r.promise;
        },
      }
    );
  var Bo = !y(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Vo = h(function (t) {
      var e = U.f,
        r = tt("meta"),
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
            if (!T(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!k(t, r)) {
              if (!o(t)) return "F";
              if (!e) return "E";
              i(t);
            }
            return t[r].objectID;
          },
          getWeakData: function (t, e) {
            if (!k(t, r)) {
              if (!o(t)) return !0;
              if (!e) return !1;
              i(t);
            }
            return t[r].weakData;
          },
          onFreeze: function (t) {
            return Bo && u.REQUIRED && o(t) && !k(t, r) && i(t), t;
          },
        });
      nt[r] = !0;
    }),
    Ko = U.f,
    Ho = Vo.fastKey,
    Xo = st.set,
    Yo = st.getterFor,
    Qo =
      ((function (t, e, r) {
        var n = -1 !== "Set".indexOf("Map"),
          o = -1 !== "Set".indexOf("Weak"),
          i = n ? "set" : "add",
          u = d.Set,
          c = u && u.prototype,
          a = u,
          f = {},
          s = function (t) {
            var e = c[t];
            lt(
              c,
              t,
              "add" == t
                ? function (t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(o && !T(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return o && !T(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(o && !T(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : function (t, r) {
                    return e.call(this, 0 === t ? 0 : t, r), this;
                  }
            );
          };
        if (
          Nt(
            "Set",
            "function" != typeof u ||
              !(
                o ||
                (c.forEach &&
                  !y(function () {
                    new u().entries().next();
                  }))
              )
          )
        )
          (a = r.getConstructor(e, "Set", n, i)), (Vo.REQUIRED = !0);
        else if (Nt("Set", !0)) {
          var l = new a(),
            p = l[i](o ? {} : -0, 1) != l,
            h = y(function () {
              l.has(1);
            }),
            v = Dr(function (t) {
              new u(t);
            }),
            g =
              !o &&
              y(function () {
                for (var t = new u(), e = 5; e--; ) t[i](e, e);
                return !t.has(-0);
              });
          v ||
            (((a = e(function (t, e) {
              In(t, a, "Set");
              var r = (function (t, e, r) {
                var n, o;
                return (
                  Zr &&
                    "function" == typeof (n = e.constructor) &&
                    n !== r &&
                    T((o = n.prototype)) &&
                    o !== r.prototype &&
                    Zr(t, o),
                  t
                );
              })(new u(), t, a);
              return null != e && Rn(e, r[i], r, n), r;
            })).prototype = c),
            (c.constructor = a)),
            (h || g) && (s("delete"), s("has"), n && s("get")),
            (g || p) && s(i),
            o && c.clear && delete c.clear;
        }
        (f.Set = a),
          Ut({ global: !0, forced: a != u }, f),
          pe(a, "Set"),
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
                In(t, o, e),
                  Xo(t, {
                    type: e,
                    index: Jt(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  g || (t.size = 0),
                  null != i && Rn(i, t[n], t, r);
              }),
              i = Yo(e),
              u = function (t, e, r) {
                var n,
                  o,
                  u = i(t),
                  a = c(t, e);
                return (
                  a
                    ? (a.value = r)
                    : ((u.last = a = {
                        index: (o = Ho(e, !0)),
                        key: e,
                        value: r,
                        previous: (n = u.last),
                        next: void 0,
                        removed: !1,
                      }),
                      u.first || (u.first = a),
                      n && (n.next = a),
                      g ? u.size++ : t.size++,
                      "F" !== o && (u.index[o] = a)),
                  t
                );
              },
              c = function (t, e) {
                var r,
                  n = i(t),
                  o = Ho(e);
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
                  (t.first = t.last = void 0),
                    g ? (t.size = 0) : (this.size = 0);
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
                      g ? e.size-- : this.size--;
                  }
                  return !!r;
                },
                forEach: function (t) {
                  for (
                    var e,
                      r = i(this),
                      n = ve(
                        t,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
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
              g &&
                Ko(o.prototype, "size", {
                  get: function () {
                    return i(this).size;
                  },
                }),
              o
            );
          },
          setStrong: function (t, e, r) {
            var n = e + " Iterator",
              o = Yo(e),
              i = Yo(n);
            on(
              t,
              e,
              function (t, e) {
                Xo(this, {
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
              Tn(e);
          },
        }
      ),
      function (t) {
        return function (e, r) {
          var n,
            o,
            i = String(E(e)),
            u = gt(r),
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
    Jo = { codeAt: Qo(!1), charAt: Qo(!0) },
    Zo = Jo.charAt,
    ti = st.set,
    ei = st.getterFor("String Iterator");
  on(
    String,
    "String",
    function (t) {
      ti(this, { type: "String Iterator", string: String(t), index: 0 });
    },
    function () {
      var t,
        e = ei(this),
        r = e.string,
        n = e.index;
      return n >= r.length
        ? { value: void 0, done: !0 }
        : ((t = Zo(r, n)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var ri,
    ni = ue("match"),
    oi = function (t) {
      var e;
      return T(t) && (void 0 !== (e = t[ni]) ? !!e : "RegExp" == P(t));
    },
    ii = function (t) {
      if (oi(t))
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    ui = ue("match"),
    ci = function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (r) {
        try {
          return (e[ui] = !1), "/./"[t](e);
        } catch (t) {}
      }
      return !1;
    },
    ai = M.f,
    fi = "".startsWith,
    si = Math.min,
    li = ci("startsWith"),
    pi = !(
      li || ((ri = ai(String.prototype, "startsWith")), !ri || ri.writable)
    );
  Ut(
    { target: "String", proto: !0, forced: !pi && !li },
    {
      startsWith: function (t) {
        var e = String(E(this));
        ii(t);
        var r = bt(si(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          n = String(t);
        return fi ? fi.call(e, n, r) : e.slice(r, r + n.length) === n;
      },
    }
  );
  var hi = {
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
    vi = ue("iterator"),
    di = ue("toStringTag"),
    yi = an.values;
  for (var gi in hi) {
    var mi = d[gi],
      bi = mi && mi.prototype;
    if (bi) {
      if (bi[vi] !== yi)
        try {
          W(bi, vi, yi);
        } catch (t) {
          bi[vi] = yi;
        }
      if ((bi[di] || W(bi, di, gi), hi[gi]))
        for (var Si in an)
          if (bi[Si] !== an[Si])
            try {
              W(bi, Si, an[Si]);
            } catch (t) {
              bi[Si] = an[Si];
            }
    }
  }
  function wi(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  var xi = Date.prototype,
    Pi = xi.toString,
    Oi = xi.getTime;
  new Date(NaN) + "" != "Invalid Date" &&
    lt(xi, "toString", function () {
      var t = Oi.call(this);
      return t == t ? Pi.call(this) : "Invalid Date";
    });
  var ji = function () {
      var t = N(this),
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
    Ai = Ei.toString;
  (y(function () {
    return "/a/b" != Ai.call({ source: "a", flags: "b" });
  }) ||
    "toString" != Ai.name) &&
    lt(
      RegExp.prototype,
      "toString",
      function () {
        var t = N(this),
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
  var Ti = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    Ii = "[" + Ti + "]",
    Ri = RegExp("^" + Ii + Ii + "*"),
    ki = RegExp(Ii + Ii + "*$"),
    Ci = function (t) {
      return function (e) {
        var r = String(E(e));
        return (
          1 & t && (r = r.replace(Ri, "")), 2 & t && (r = r.replace(ki, "")), r
        );
      };
    },
    _i = (Ci(1), Ci(2), Ci(3));
  function $i(t) {
    return o(null == t ? void 0 : t.trim(), "​");
  }
  Ut(
    {
      target: "String",
      proto: !0,
      forced: y(function () {
        return !!Ti.trim() || "​᠎" != "​᠎".trim() || "trim" !== Ti.trim.name;
      }),
    },
    {
      trim: function () {
        return _i(this);
      },
    }
  );
  var Li =
    !(
      "[object process]" ===
      Object.prototype.toString.call(
        "undefined" != typeof process ? process : 0
      )
    ) && "undefined" != typeof window;
  function Di(t, e) {
    return RegExp(t, e);
  }
  var Mi,
    Ni,
    Fi = {
      UNSUPPORTED_Y: y(function () {
        var t = Di("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      }),
      BROKEN_CARET: y(function () {
        var t = Di("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }),
    },
    Ui = RegExp.prototype.exec,
    Wi = String.prototype.replace,
    qi = Ui,
    zi =
      ((Ni = /b*/g),
      Ui.call((Mi = /a/), "a"),
      Ui.call(Ni, "a"),
      0 !== Mi.lastIndex || 0 !== Ni.lastIndex),
    Gi = Fi.UNSUPPORTED_Y || Fi.BROKEN_CARET,
    Bi = void 0 !== /()??/.exec("")[1];
  (zi || Bi || Gi) &&
    (qi = function (t) {
      var e,
        r,
        n,
        o,
        i = this,
        u = Gi && i.sticky,
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
        Bi && (r = new RegExp("^" + a + "$(?!\\s)", c)),
        zi && (e = i.lastIndex),
        (n = Ui.call(u ? r : i, s)),
        u
          ? n
            ? ((n.input = n.input.slice(f)),
              (n[0] = n[0].slice(f)),
              (n.index = i.lastIndex),
              (i.lastIndex += n[0].length))
            : (i.lastIndex = 0)
          : zi && n && (i.lastIndex = i.global ? n.index + n[0].length : e),
        Bi &&
          n &&
          n.length > 1 &&
          Wi.call(n[0], r, function () {
            for (o = 1; o < arguments.length - 2; o++)
              void 0 === arguments[o] && (n[o] = void 0);
          }),
        n
      );
    });
  var Vi = qi;
  Ut({ target: "RegExp", proto: !0, forced: /./.exec !== Vi }, { exec: Vi });
  var Ki = ue("species"),
    Hi = !y(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    Xi = "$0" === "a".replace(/./, "$0"),
    Yi = ue("replace"),
    Qi = !!/./[Yi] && "" === /./[Yi]("a", "$0"),
    Ji = !y(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var r = "ab".split(t);
      return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
    }),
    Zi = function (t, e, r, n) {
      var o = ue(t),
        i = !y(function () {
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
          !y(function () {
            var e = !1,
              r = /a/;
            return (
              "split" === t &&
                (((r = {}).constructor = {}),
                (r.constructor[Ki] = function () {
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
        ("replace" === t && (!Hi || !Xi || Qi)) ||
        ("split" === t && !Ji)
      ) {
        var c = /./[o],
          a = r(
            o,
            ""[t],
            function (t, e, r, n, o) {
              return e.exec === Vi
                ? i && !o
                  ? { done: !0, value: c.call(e, r, n) }
                  : { done: !0, value: t.call(r, e, n) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: Xi,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Qi,
            }
          ),
          f = a[1];
        lt(String.prototype, t, a[0]),
          lt(
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
      n && W(RegExp.prototype[o], "sham", !0);
    },
    tu = Jo.charAt,
    eu = function (t, e, r) {
      return e + (r ? tu(t, e).length : 1);
    },
    ru = function (t, e) {
      var r = t.exec;
      if ("function" == typeof r) {
        var n = r.call(t, e);
        if ("object" != typeof n)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return n;
      }
      if ("RegExp" !== P(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Vi.call(t, e);
    },
    nu = Math.max,
    ou = Math.min,
    iu = Math.floor,
    uu = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    cu = /\$([$&'`]|\d\d?)/g;
  Zi("replace", 2, function (t, e, r, n) {
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
        var f = N(t),
          s = String(this),
          l = "function" == typeof n;
        l || (n = String(n));
        var p = f.global;
        if (p) {
          var h = f.unicode;
          f.lastIndex = 0;
        }
        for (var v = []; ; ) {
          var d = ru(f, s);
          if (null === d) break;
          if ((v.push(d), !p)) break;
          "" === String(d[0]) && (f.lastIndex = eu(s, bt(f.lastIndex), h));
        }
        for (var y, g = "", m = 0, b = 0; b < v.length; b++) {
          d = v[b];
          for (
            var S = String(d[0]),
              w = nu(ou(gt(d.index), s.length), 0),
              x = [],
              P = 1;
            P < d.length;
            P++
          )
            x.push(void 0 === (y = d[P]) ? y : String(y));
          var O = d.groups;
          if (l) {
            var j = [S].concat(x, w, s);
            void 0 !== O && j.push(O);
            var E = String(n.apply(void 0, j));
          } else E = c(S, s, w, x, O, n);
          w >= m && ((g += s.slice(m, w) + E), (m = w + S.length));
        }
        return g + s.slice(m);
      },
    ];
    function c(t, r, n, o, i, u) {
      var c = n + t.length,
        a = o.length,
        f = cu;
      return (
        void 0 !== i && ((i = Gt(i)), (f = uu)),
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
                var l = iu(s / 10);
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
  var au = Pt.indexOf,
    fu = [].indexOf,
    su = !!fu && 1 / [1].indexOf(1, -0) < 0,
    lu = pn("indexOf"),
    pu = dr("indexOf", { ACCESSORS: !0, 1: 0 });
  Ut(
    { target: "Array", proto: !0, forced: su || !lu || !pu },
    {
      indexOf: function (t) {
        return su
          ? fu.apply(this, arguments) || 0
          : au(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var hu = Object.assign,
    vu = Object.defineProperty,
    du =
      !hu ||
      y(function () {
        if (
          g &&
          1 !==
            hu(
              { b: 1 },
              hu(
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
          7 != hu({}, t)[r] || "abcdefghijklmnopqrst" != Bt(hu({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var r = Gt(t), n = arguments.length, o = 1, i = It.f, u = S.f;
              n > o;

            )
              for (
                var c,
                  a = j(arguments[o++]),
                  f = i ? Bt(a).concat(i(a)) : Bt(a),
                  s = f.length,
                  l = 0;
                s > l;

              )
                (c = f[l++]), (g && !u.call(a, c)) || (r[c] = a[c]);
            return r;
          }
        : hu;
  Ut(
    { target: "Object", stat: !0, forced: Object.assign !== du },
    { assign: du }
  );
  var yu = M.f,
    gu = "".endsWith,
    mu = Math.min,
    bu = ci("endsWith"),
    Su =
      !bu &&
      !!(function () {
        var t = yu(String.prototype, "endsWith");
        return t && !t.writable;
      })();
  Ut(
    { target: "String", proto: !0, forced: !Su && !bu },
    {
      endsWith: function (t) {
        var e = String(E(this));
        ii(t);
        var r = arguments.length > 1 ? arguments[1] : void 0,
          n = bt(e.length),
          o = void 0 === r ? n : mu(bt(r), n),
          i = String(t);
        return gu ? gu.call(e, i, o) : e.slice(o - i.length, o) === i;
      },
    }
  );
  var wu = [].push,
    xu = Math.min,
    Pu = !y(function () {
      return !RegExp(4294967295, "y");
    });
  Zi(
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
                if (!oi(t)) return e.call(n, t, o);
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
                  (i = Vi.call(s, n)) &&
                  !(
                    (u = s.lastIndex) > f &&
                    (a.push(n.slice(f, i.index)),
                    i.length > 1 &&
                      i.index < n.length &&
                      wu.apply(a, i.slice(1)),
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
            var u = N(t),
              c = String(this),
              a = Cn(u, RegExp),
              f = u.unicode,
              s = new a(
                Pu ? u : "^(?:" + u.source + ")",
                (u.ignoreCase ? "i" : "") +
                  (u.multiline ? "m" : "") +
                  (u.unicode ? "u" : "") +
                  (Pu ? "y" : "g")
              ),
              l = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === l) return [];
            if (0 === c.length) return null === ru(s, c) ? [c] : [];
            for (var p = 0, h = 0, v = []; h < c.length; ) {
              s.lastIndex = Pu ? h : 0;
              var d,
                y = ru(s, Pu ? c : c.slice(h));
              if (
                null === y ||
                (d = xu(bt(s.lastIndex + (Pu ? 0 : h)), c.length)) === p
              )
                h = eu(c, h, f);
              else {
                if ((v.push(c.slice(p, h)), v.length === l)) return v;
                for (var g = 1; g <= y.length - 1; g++)
                  if ((v.push(y[g]), v.length === l)) return v;
                h = p = d;
              }
            }
            return v.push(c.slice(p)), v;
          },
        ]
      );
    },
    !Pu
  );
  var Ou = encodeURIComponent;
  function ju(t) {
    return t && t.startsWith("'") ? t.substr(1, t.length - 2) : t;
  }
  var Eu = {
      name: "forvo",
      url: "https://forvo.com",
      makeUrl: function (t) {
        var e = t.lang;
        return "https://ru.forvo.com/word/" + Ou(t.text) + "/#" + e;
      },
      plan: [
        {
          selector: "article.pronunciations ul.show-all-pronunciations li",
          parse: function (t) {
            try {
              return Promise.resolve(t.$$("span.play")).then(function (e) {
                var r = e[0];
                return r
                  ? Promise.resolve(r.getAttribute("onclick")).then(function (
                      e
                    ) {
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
                                                        "женщина" ===
                                                        (r = $i(r))
                                                          ? "f"
                                                          : "мужчина" === r
                                                          ? "m"
                                                          : r),
                                                    };
                                                  return (
                                                    2 === e.length &&
                                                      (n.country = (function (
                                                        t
                                                      ) {
                                                        return $i(t);
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
    Au = {
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
    Tu = be.find,
    Iu = !0,
    Ru = dr("find");
  "find" in [] &&
    Array(1).find(function () {
      Iu = !1;
    }),
    Ut(
      { target: "Array", proto: !0, forced: Iu || !Ru },
      {
        find: function (t) {
          return Tu(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    zr("find");
  var ku = function (t) {
      try {
        return (
          Li &&
            (t = "https://api.allorigins.win/raw?url=" + encodeURIComponent(t)),
          Promise.resolve(
            s(t, {
              headers: {
                "User-Agent": "lingua-bot",
                Accept: "text/html,application/xhtml+xml",
              },
            })
          ).then(function (t) {
            if (!t.ok) throw new Error(t.statusText);
            return Promise.resolve(t.text()).then(function (t) {
              return new _u(t);
            });
          })
        );
      } catch (t) {
        return Promise.reject(t);
      }
    },
    Cu = (function () {
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
    _u = (function () {
      function t(t) {
        this.$ = l.load(t);
      }
      var e = t.prototype;
      return (
        (e.$$ = function (t) {
          var e = this,
            r = this.$(t),
            n = [];
          return (
            r.each(function (t, r) {
              n.push(new Cu(e.$, e.$(r)));
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
    $u = (function () {
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
    Lu = (function () {
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
                    return new $u(r.page, t);
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
  function Du(t, e) {
    try {
      var r = t();
    } catch (t) {
      return e(t);
    }
    return r && r.then ? r.then(void 0, e) : r;
  }
  var Mu =
    "undefined" != typeof Symbol
      ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))
      : "@@iterator";
  function Nu(t, e, r) {
    if (!t.s) {
      if (r instanceof Fu) {
        if (!r.s) return void (r.o = Nu.bind(null, t, e));
        1 & e && (e = r.s), (r = r.v);
      }
      if (r && r.then)
        return void r.then(Nu.bind(null, t, e), Nu.bind(null, t, 2));
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
              Nu(n, 1, i(this.v));
            } catch (t) {
              Nu(n, 2, t);
            }
            return n;
          }
          return this;
        }
        return (
          (this.o = function (t) {
            try {
              var o = t.v;
              1 & t.s
                ? Nu(n, 1, e ? e(o) : o)
                : r
                ? Nu(n, 1, r(o))
                : Nu(n, 2, o);
            } catch (t) {
              Nu(n, 2, t);
            }
          }),
          n
        );
      }),
      t
    );
  })();
  function Uu(t) {
    return t instanceof Fu && 1 & t.s;
  }
  function Wu(t, e, r) {
    if ("function" == typeof t[Mu]) {
      var n,
        o,
        i,
        u = t[Mu]();
      if (
        ((function t(c) {
          try {
            for (; !((n = u.next()).done || (r && r())); )
              if ((c = e(n.value)) && c.then) {
                if (!Uu(c))
                  return void c.then(
                    t,
                    i || (i = Nu.bind(null, (o = new Fu()), 2))
                  );
                c = c.v;
              }
            o ? Nu(o, 1, c) : (o = c);
          } catch (t) {
            Nu(o || (o = new Fu()), 2, t);
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
                if (!Uu(c))
                  return void c.then(
                    u,
                    o || (o = Nu.bind(null, (n = new Fu()), 2))
                  );
                c = c.v;
              }
            n ? Nu(n, 1, c) : (n = c);
          } catch (t) {
            Nu(n || (n = new Fu()), 2, t);
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
  var qu = [
    {
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
      engine: "playwright",
      name: "wordnik",
      url: "https://www.wordnik.com",
      makeUrl: function (t) {
        return "/words/" + t.text;
      },
      plan: [{ selector: ".flickr-module .thumbs img", visual: ["@src"] }],
    },
    {
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
    Au,
  ].map(function (t) {
    return function (o, i) {
      try {
        var u,
          c = function (o) {
            if (u) return o;
            var i = t.makeUrl(a);
            return (
              i.startsWith("/") && (i = t.url + i),
              Du(
                function () {
                  return Promise.resolve(
                    (function (t, e) {
                      return "playwright" === t
                        ? (function (t) {
                            try {
                              var e,
                                r = function (r) {
                                  return e
                                    ? r
                                    : Promise.resolve(f.chromium.launch()).then(
                                        function (e) {
                                          return Promise.resolve(
                                            e.newPage()
                                          ).then(function (r) {
                                            return Promise.resolve(
                                              r.goto(t)
                                            ).then(function () {
                                              return new Lu(e, r);
                                            });
                                          });
                                        }
                                      );
                                },
                                n = (function () {
                                  if (Li)
                                    return (e = 1), Promise.resolve(ku(t));
                                })();
                              return Promise.resolve(
                                n && n.then ? n.then(r) : r(n)
                              );
                            } catch (t) {
                              return Promise.reject(t);
                            }
                          })(e)
                        : ku(e);
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
                                  var o = Wu(t, function (t) {
                                    return Promise.resolve(i(n, t)).then(
                                      function (t) {
                                        if (Array.isArray(t))
                                          for (
                                            var n,
                                              o = (function (t, e) {
                                                var r;
                                                if (
                                                  "undefined" ==
                                                    typeof Symbol ||
                                                  null == t[Symbol.iterator]
                                                ) {
                                                  if (
                                                    Array.isArray(t) ||
                                                    (r = (function (t, e) {
                                                      if (t) {
                                                        if (
                                                          "string" == typeof t
                                                        )
                                                          return wi(t, void 0);
                                                        var r = Object.prototype.toString
                                                          .call(t)
                                                          .slice(8, -1);
                                                        return (
                                                          "Object" === r &&
                                                            t.constructor &&
                                                            (r =
                                                              t.constructor
                                                                .name),
                                                          "Map" === r ||
                                                          "Set" === r
                                                            ? Array.from(t)
                                                            : "Arguments" ===
                                                                r ||
                                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                r
                                                              )
                                                            ? wi(t, void 0)
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
                                  if (o && o.then)
                                    return o.then(function () {});
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
                                  var r = $i(e);
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
                                i = Wu(r, function (r) {
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
                                      : Promise.resolve(e.text()).then(
                                          function (t) {
                                            i = $i(t);
                                          }
                                        );
                                  return u && u.then ? u.then(n) : n();
                                });
                              return Promise.resolve(
                                i && i.then ? i.then(n) : n()
                              );
                            } catch (t) {
                              return Promise.reject(t);
                            }
                          },
                          h = function (t, e) {
                            try {
                              return Promise.resolve(p(t, e, t.audio));
                            } catch (t) {
                              return Promise.reject(t);
                            }
                          },
                          v = function (t, e) {
                            try {
                              return Promise.resolve(p(t, e, t.visual));
                            } catch (t) {
                              return Promise.reject(t);
                            }
                          },
                          d = function (t, e) {
                            return t.parse(e);
                          },
                          y = Wu(t.plan, function (t) {
                            var e = (function () {
                              if (t.term)
                                return Promise.resolve(
                                  f(t.term, t, l)
                                ).then(function () {});
                              var e = (function () {
                                if (t.audio)
                                  return Promise.resolve(
                                    f("audio", t, h)
                                  ).then(function () {});
                                var e = (function () {
                                  if (t.visual)
                                    return Promise.resolve(
                                      f("visual", t, v)
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
          a = { text: o, lang: i || "en" },
          s = (function () {
            if (t.getData)
              return Du(
                function () {
                  return Promise.resolve(t.getData(a)).then(function (e) {
                    return (
                      (u = 1), { source: { name: t.name, url: t.url }, data: e }
                    );
                  });
                },
                function (e) {
                  return (
                    console.log("error", t.name, e),
                    (u = 1),
                    { source: { name: t.name, url: t.url }, error: e }
                  );
                }
              );
          })();
        return Promise.resolve(s && s.then ? s.then(c) : c(s));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  });
  t.fetchData = function (t, e) {
    return Promise.all(
      qu.map(function (r) {
        return r(t, e);
      })
    );
  };
});
//# sourceMappingURL=bundle.umd.js.map
