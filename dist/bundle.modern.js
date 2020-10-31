import t from "lodash/isNil";
import e from "lodash/forEach";
import n from "lodash/mapValues";
import r from "lodash/trim";
import o from "lodash/isEmpty";
import i from "lodash/trimStart";
import a from "lodash/trimEnd";
import { Base64 as c } from "js-base64";
import u from "isomorphic-unfetch";
import s from "cheerio";
var l = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  f = {}.toString,
  p = function (t) {
    return f.call(t).slice(8, -1);
  },
  h = "".split,
  d = l(function () {
    return !Object("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == p(t) ? h.call(t, "") : Object(t);
      }
    : Object,
  v = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
  g = function (t) {
    return d(v(t));
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
function m(t, e, n) {
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
var w,
  b = function (t) {
    return t && t.Math == Math && t;
  },
  x =
    b("object" == typeof globalThis && globalThis) ||
    b("object" == typeof window && window) ||
    b("object" == typeof self && self) ||
    b("object" == typeof y && y) ||
    Function("return this")(),
  S = !l(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  E = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  },
  O = x.document,
  j = E(O) && E(O.createElement),
  P = function (t) {
    return j ? O.createElement(t) : {};
  },
  T =
    !S &&
    !l(function () {
      return (
        7 !=
        Object.defineProperty(P("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  A = function (t) {
    if (!E(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
  R = function (t, e) {
    if (!E(t)) return t;
    var n, r;
    if (e && "function" == typeof (n = t.toString) && !E((r = n.call(t))))
      return r;
    if ("function" == typeof (n = t.valueOf) && !E((r = n.call(t)))) return r;
    if (!e && "function" == typeof (n = t.toString) && !E((r = n.call(t))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  I = Object.defineProperty,
  _ = {
    f: S
      ? I
      : function (t, e, n) {
          if ((A(t), (e = R(e, !0)), A(n), T))
            try {
              return I(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        },
  },
  $ = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  },
  k = S
    ? function (t, e, n) {
        return _.f(t, e, $(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      },
  C = function (t, e) {
    try {
      k(x, t, e);
    } catch (n) {
      x[t] = e;
    }
    return e;
  },
  L = x["__core-js_shared__"] || C("__core-js_shared__", {}),
  M = m(function (t) {
    (t.exports = function (t, e) {
      return L[t] || (L[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  }),
  N = {}.hasOwnProperty,
  U = function (t, e) {
    return N.call(t, e);
  },
  D = 0,
  F = Math.random(),
  W = function (t) {
    return (
      "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++D + F).toString(36)
    );
  },
  G =
    !!Object.getOwnPropertySymbols &&
    !l(function () {
      return !String(Symbol());
    }),
  V = G && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  q = M("wks"),
  B = x.Symbol,
  H = V ? B : (B && B.withoutSetter) || W,
  K = function (t) {
    return U(q, t) || (q[t] = G && U(B, t) ? B[t] : H("Symbol." + t)), q[t];
  },
  X = Math.ceil,
  Y = Math.floor,
  z = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? Y : X)(t);
  },
  J = Math.min,
  Q = function (t) {
    return t > 0 ? J(z(t), 9007199254740991) : 0;
  },
  Z = Math.max,
  tt = Math.min,
  et = function (t) {
    return function (e, n, r) {
      var o,
        i = g(e),
        a = Q(i.length),
        c = (function (t, e) {
          var n = z(t);
          return n < 0 ? Z(n + e, 0) : tt(n, e);
        })(r, a);
      if (t && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0;
      return !t && -1;
    };
  },
  nt = { includes: et(!0), indexOf: et(!1) },
  rt = {},
  ot = nt.indexOf,
  it = function (t, e) {
    var n,
      r = g(t),
      o = 0,
      i = [];
    for (n in r) !U(rt, n) && U(r, n) && i.push(n);
    for (; e.length > o; ) U(r, (n = e[o++])) && (~ot(i, n) || i.push(n));
    return i;
  },
  at = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  ct =
    Object.keys ||
    function (t) {
      return it(t, at);
    },
  ut = S
    ? Object.defineProperties
    : function (t, e) {
        A(t);
        for (var n, r = ct(e), o = r.length, i = 0; o > i; )
          _.f(t, (n = r[i++]), e[n]);
        return t;
      },
  st = x,
  lt = function (t) {
    return "function" == typeof t ? t : void 0;
  },
  ft = function (t, e) {
    return arguments.length < 2
      ? lt(st[t]) || lt(x[t])
      : (st[t] && st[t][e]) || (x[t] && x[t][e]);
  },
  pt = ft("document", "documentElement"),
  ht = M("keys"),
  dt = function (t) {
    return ht[t] || (ht[t] = W(t));
  },
  vt = dt("IE_PROTO"),
  gt = function () {},
  yt = function (t) {
    return "<script>" + t + "</script>";
  },
  mt = function () {
    try {
      w = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e;
    mt = w
      ? (function (t) {
          t.write(yt("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(w)
      : (((e = P("iframe")).style.display = "none"),
        pt.appendChild(e),
        (e.src = String("javascript:")),
        (t = e.contentWindow.document).open(),
        t.write(yt("document.F=Object")),
        t.close(),
        t.F);
    for (var n = at.length; n--; ) delete mt.prototype[at[n]];
    return mt();
  };
rt[vt] = !0;
var wt =
    Object.create ||
    function (t, e) {
      var n;
      return (
        null !== t
          ? ((gt.prototype = A(t)),
            (n = new gt()),
            (gt.prototype = null),
            (n[vt] = t))
          : (n = mt()),
        void 0 === e ? n : ut(n, e)
      );
    },
  bt = K("unscopables"),
  xt = Array.prototype;
null == xt[bt] && _.f(xt, bt, { configurable: !0, value: wt(null) });
var St = function (t) {
    xt[bt][t] = !0;
  },
  Et = {},
  Ot = Function.toString;
"function" != typeof L.inspectSource &&
  (L.inspectSource = function (t) {
    return Ot.call(t);
  });
var jt,
  Pt,
  Tt,
  At = L.inspectSource,
  Rt = x.WeakMap;
if ("function" == typeof Rt && /native code/.test(At(Rt))) {
  var It = new (0, x.WeakMap)(),
    _t = It.get,
    $t = It.has,
    kt = It.set;
  (jt = function (t, e) {
    return kt.call(It, t, e), e;
  }),
    (Pt = function (t) {
      return _t.call(It, t) || {};
    }),
    (Tt = function (t) {
      return $t.call(It, t);
    });
} else {
  var Ct = dt("state");
  (rt[Ct] = !0),
    (jt = function (t, e) {
      return k(t, Ct, e), e;
    }),
    (Pt = function (t) {
      return U(t, Ct) ? t[Ct] : {};
    }),
    (Tt = function (t) {
      return U(t, Ct);
    });
}
var Lt,
  Mt,
  Nt,
  Ut = {
    set: jt,
    get: Pt,
    has: Tt,
    enforce: function (t) {
      return Tt(t) ? Pt(t) : jt(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!E(e) || (n = Pt(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    },
  },
  Dt = {}.propertyIsEnumerable,
  Ft = Object.getOwnPropertyDescriptor,
  Wt = {
    f:
      Ft && !Dt.call({ 1: 2 }, 1)
        ? function (t) {
            var e = Ft(this, t);
            return !!e && e.enumerable;
          }
        : Dt,
  },
  Gt = Object.getOwnPropertyDescriptor,
  Vt = {
    f: S
      ? Gt
      : function (t, e) {
          if (((t = g(t)), (e = R(e, !0)), T))
            try {
              return Gt(t, e);
            } catch (t) {}
          if (U(t, e)) return $(!Wt.f.call(t, e), t[e]);
        },
  },
  qt = m(function (t) {
    var e = Ut.get,
      n = Ut.enforce,
      r = String(String).split("String");
    (t.exports = function (t, e, o, i) {
      var a = !!i && !!i.unsafe,
        c = !!i && !!i.enumerable,
        u = !!i && !!i.noTargetGet;
      "function" == typeof o &&
        ("string" != typeof e || U(o, "name") || k(o, "name", e),
        (n(o).source = r.join("string" == typeof e ? e : ""))),
        t !== x
          ? (a ? !u && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = o) : k(t, e, o))
          : c
          ? (t[e] = o)
          : C(e, o);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && e(this).source) || At(this);
    });
  }),
  Bt = at.concat("length", "prototype"),
  Ht = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return it(t, Bt);
      },
  },
  Kt = { f: Object.getOwnPropertySymbols },
  Xt =
    ft("Reflect", "ownKeys") ||
    function (t) {
      var e = Ht.f(A(t)),
        n = Kt.f;
      return n ? e.concat(n(t)) : e;
    },
  Yt = function (t, e) {
    for (var n = Xt(e), r = _.f, o = Vt.f, i = 0; i < n.length; i++) {
      var a = n[i];
      U(t, a) || r(t, a, o(e, a));
    }
  },
  zt = /#|\.prototype\./,
  Jt = function (t, e) {
    var n = Zt[Qt(t)];
    return n == ee || (n != te && ("function" == typeof e ? l(e) : !!e));
  },
  Qt = (Jt.normalize = function (t) {
    return String(t).replace(zt, ".").toLowerCase();
  }),
  Zt = (Jt.data = {}),
  te = (Jt.NATIVE = "N"),
  ee = (Jt.POLYFILL = "P"),
  ne = Jt,
  re = Vt.f,
  oe = function (t, e) {
    var n,
      r,
      o,
      i,
      a,
      c = t.target,
      u = t.global,
      s = t.stat;
    if ((n = u ? x : s ? x[c] || C(c, {}) : (x[c] || {}).prototype))
      for (r in e) {
        if (
          ((i = e[r]),
          (o = t.noTargetGet ? (a = re(n, r)) && a.value : n[r]),
          !ne(u ? r : c + (s ? "." : "#") + r, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Yt(i, o);
        }
        (t.sham || (o && o.sham)) && k(i, "sham", !0), qt(n, r, i, t);
      }
  },
  ie = function (t) {
    return Object(v(t));
  },
  ae = !l(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  ce = dt("IE_PROTO"),
  ue = Object.prototype,
  se = ae
    ? Object.getPrototypeOf
    : function (t) {
        return (
          (t = ie(t)),
          U(t, ce)
            ? t[ce]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? ue
            : null
        );
      },
  le = K("iterator"),
  fe = !1;
[].keys &&
  ("next" in (Nt = [].keys())
    ? (Mt = se(se(Nt))) !== Object.prototype && (Lt = Mt)
    : (fe = !0)),
  null == Lt && (Lt = {}),
  U(Lt, le) ||
    k(Lt, le, function () {
      return this;
    });
var pe = { IteratorPrototype: Lt, BUGGY_SAFARI_ITERATORS: fe },
  he = _.f,
  de = K("toStringTag"),
  ve = function (t, e, n) {
    t &&
      !U((t = n ? t : t.prototype), de) &&
      he(t, de, { configurable: !0, value: e });
  },
  ge = pe.IteratorPrototype,
  ye = function () {
    return this;
  },
  me =
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
              A(n),
              (function (t) {
                if (!E(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype");
              })(r),
              e ? t.call(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  we = pe.IteratorPrototype,
  be = pe.BUGGY_SAFARI_ITERATORS,
  xe = K("iterator"),
  Se = function () {
    return this;
  },
  Ee = Ut.set,
  Oe = Ut.getterFor("Array Iterator"),
  je = (function (t, e, n, r, o, i, a) {
    !(function (t, e, n) {
      (t.prototype = wt(ge, {
        next: $(1, function () {
          var t = Oe(this),
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
        ve(t, "Array Iterator", !1),
        (Et["Array Iterator"] = ye);
    })(n);
    var c,
      u,
      s,
      l = function (t) {
        if ("values" === t && d) return d;
        if (!be && t in p) return p[t];
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
      h = p[xe] || p["@@iterator"] || p.values,
      d = (!be && h) || l("values"),
      v = p.entries || h;
    if (
      (v &&
        ((c = se(v.call(new t()))),
        we !== Object.prototype &&
          c.next &&
          (se(c) !== we &&
            (me ? me(c, we) : "function" != typeof c[xe] && k(c, xe, Se)),
          ve(c, "Array Iterator", !0))),
      h &&
        "values" !== h.name &&
        ((f = !0),
        (d = function () {
          return h.call(this);
        })),
      p[xe] !== d && k(p, xe, d),
      (Et.Array = d),
      void (u = {
        values: l("values"),
        keys: l("keys"),
        entries: l("entries"),
      }))
    )
      for (s in u) (be || f || !(s in p)) && qt(p, s, u[s]);
    else oe({ target: "Array", proto: !0, forced: be || f }, u);
    return u;
  })(Array, 0, function (t, e) {
    Ee(this, { type: "Array Iterator", target: g(t), index: 0, kind: e });
  });
(Et.Arguments = Et.Array), St("keys"), St("values"), St("entries");
var Pe = x.Promise,
  Te = K("species"),
  Ae = function (t) {
    if ("function" != typeof t)
      throw TypeError(String(t) + " is not a function");
    return t;
  },
  Re = K("iterator"),
  Ie = Array.prototype,
  _e = function (t, e, n) {
    if ((Ae(t), void 0 === e)) return t;
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
  $e = {};
$e[K("toStringTag")] = "z";
var ke = "[object z]" === String($e),
  Ce = K("toStringTag"),
  Le =
    "Arguments" ==
    p(
      (function () {
        return arguments;
      })()
    ),
  Me = ke
    ? p
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
            })((e = Object(t)), Ce))
          ? n
          : Le
          ? p(e)
          : "Object" == (r = p(e)) && "function" == typeof e.callee
          ? "Arguments"
          : r;
      },
  Ne = K("iterator"),
  Ue = function (t, e, n, r) {
    try {
      return r ? e(A(n)[0], n[1]) : e(n);
    } catch (e) {
      var o = t.return;
      throw (void 0 !== o && A(o.call(t)), e);
    }
  },
  De = m(function (t) {
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
        d = _e(n, r, o ? 2 : 1);
      if (i) a = t;
      else {
        if (
          "function" !=
          typeof (c = (function (t) {
            if (null != t) return t[Ne] || t["@@iterator"] || Et[Me(t)];
          })(t))
        )
          throw TypeError("Target is not iterable");
        if (void 0 !== (h = c) && (Et.Array === h || Ie[Re] === h)) {
          for (u = 0, s = Q(t.length); s > u; u++)
            if ((l = o ? d(A((p = t[u]))[0], p[1]) : d(t[u])) && l instanceof e)
              return l;
          return new e(!1);
        }
        a = c.call(t);
      }
      for (f = a.next; !(p = f.call(a)).done; )
        if (
          "object" == typeof (l = Ue(a, d, p.value, o)) &&
          l &&
          l instanceof e
        )
          return l;
      return new e(!1);
    }).stop = function (t) {
      return new e(!0, t);
    };
  }),
  Fe = K("iterator"),
  We = !1;
try {
  var Ge = 0,
    Ve = {
      next: function () {
        return { done: !!Ge++ };
      },
      return: function () {
        We = !0;
      },
    };
  (Ve[Fe] = function () {
    return this;
  }),
    Array.from(Ve, function () {
      throw 2;
    });
} catch (t) {}
var qe,
  Be,
  He,
  Ke = K("species"),
  Xe = function (t, e) {
    var n,
      r = A(t).constructor;
    return void 0 === r || null == (n = A(r)[Ke]) ? e : Ae(n);
  },
  Ye = ft("navigator", "userAgent") || "",
  ze = /(iphone|ipod|ipad).*applewebkit/i.test(Ye),
  Je = x.location,
  Qe = x.setImmediate,
  Ze = x.clearImmediate,
  tn = x.process,
  en = x.MessageChannel,
  nn = x.Dispatch,
  rn = 0,
  on = {},
  an = function (t) {
    if (on.hasOwnProperty(t)) {
      var e = on[t];
      delete on[t], e();
    }
  },
  cn = function (t) {
    return function () {
      an(t);
    };
  },
  un = function (t) {
    an(t.data);
  },
  sn = function (t) {
    x.postMessage(t + "", Je.protocol + "//" + Je.host);
  };
(Qe && Ze) ||
  ((Qe = function (t) {
    for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
    return (
      (on[++rn] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }),
      qe(rn),
      rn
    );
  }),
  (Ze = function (t) {
    delete on[t];
  }),
  "process" == p(tn)
    ? (qe = function (t) {
        tn.nextTick(cn(t));
      })
    : nn && nn.now
    ? (qe = function (t) {
        nn.now(cn(t));
      })
    : en && !ze
    ? ((He = (Be = new en()).port2),
      (Be.port1.onmessage = un),
      (qe = _e(He.postMessage, He, 1)))
    : !x.addEventListener ||
      "function" != typeof postMessage ||
      x.importScripts ||
      l(sn) ||
      "file:" === Je.protocol
    ? (qe =
        "onreadystatechange" in P("script")
          ? function (t) {
              pt.appendChild(P("script")).onreadystatechange = function () {
                pt.removeChild(this), an(t);
              };
            }
          : function (t) {
              setTimeout(cn(t), 0);
            })
    : ((qe = sn), x.addEventListener("message", un, !1)));
var ln,
  fn,
  pn,
  hn,
  dn,
  vn,
  gn,
  yn,
  mn = { set: Qe, clear: Ze },
  wn = Vt.f,
  bn = mn.set,
  xn = x.MutationObserver || x.WebKitMutationObserver,
  Sn = x.process,
  En = x.Promise,
  On = "process" == p(Sn),
  jn = wn(x, "queueMicrotask"),
  Pn = jn && jn.value;
Pn ||
  ((ln = function () {
    var t, e;
    for (On && (t = Sn.domain) && t.exit(); fn; ) {
      (e = fn.fn), (fn = fn.next);
      try {
        e();
      } catch (t) {
        throw (fn ? hn() : (pn = void 0), t);
      }
    }
    (pn = void 0), t && t.enter();
  }),
  On
    ? (hn = function () {
        Sn.nextTick(ln);
      })
    : xn && !ze
    ? ((dn = !0),
      (vn = document.createTextNode("")),
      new xn(ln).observe(vn, { characterData: !0 }),
      (hn = function () {
        vn.data = dn = !dn;
      }))
    : En && En.resolve
    ? ((gn = En.resolve(void 0)),
      (yn = gn.then),
      (hn = function () {
        yn.call(gn, ln);
      }))
    : (hn = function () {
        bn.call(x, ln);
      }));
var Tn,
  An,
  Rn =
    Pn ||
    function (t) {
      var e = { fn: t, next: void 0 };
      pn && (pn.next = e), fn || ((fn = e), hn()), (pn = e);
    },
  In = function (t) {
    var e, n;
    (this.promise = new t(function (t, r) {
      if (void 0 !== e || void 0 !== n)
        throw TypeError("Bad Promise constructor");
      (e = t), (n = r);
    })),
      (this.resolve = Ae(e)),
      (this.reject = Ae(n));
  },
  _n = {
    f: function (t) {
      return new In(t);
    },
  },
  $n = function (t, e) {
    if ((A(t), E(e) && e.constructor === t)) return e;
    var n = _n.f(t);
    return (0, n.resolve)(e), n.promise;
  },
  kn = function (t) {
    try {
      return { error: !1, value: t() };
    } catch (t) {
      return { error: !0, value: t };
    }
  },
  Cn = x.process,
  Ln = Cn && Cn.versions,
  Mn = Ln && Ln.v8;
Mn
  ? (An = (Tn = Mn.split("."))[0] + Tn[1])
  : Ye &&
    (!(Tn = Ye.match(/Edge\/(\d+)/)) || Tn[1] >= 74) &&
    (Tn = Ye.match(/Chrome\/(\d+)/)) &&
    (An = Tn[1]);
var Nn,
  Un,
  Dn,
  Fn,
  Wn,
  Gn = An && +An,
  Vn = mn.set,
  qn = K("species"),
  Bn = Ut.get,
  Hn = Ut.set,
  Kn = Ut.getterFor("Promise"),
  Xn = Pe,
  Yn = x.TypeError,
  zn = x.document,
  Jn = x.process,
  Qn = ft("fetch"),
  Zn = _n.f,
  tr = Zn,
  er = "process" == p(Jn),
  nr = !!(zn && zn.createEvent && x.dispatchEvent),
  rr = ne("Promise", function () {
    if (At(Xn) === String(Xn)) {
      if (66 === Gn) return !0;
      if (!er && "function" != typeof PromiseRejectionEvent) return !0;
    }
    if (Gn >= 51 && /native code/.test(Xn)) return !1;
    var t = Xn.resolve(1),
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
  or =
    rr ||
    !(function (t, e) {
      if (!We) return !1;
      var n = !1;
      try {
        var r = {};
        (r[Fe] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          Xn.all(r).catch(function () {});
      } catch (t) {}
      return n;
    })(),
  ir = function (t) {
    var e;
    return !(!E(t) || "function" != typeof (e = t.then)) && e;
  },
  ar = function (t, e, n) {
    if (!e.notified) {
      e.notified = !0;
      var r = e.reactions;
      Rn(function () {
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
              ? (i || (2 === e.rejection && lr(t, e), (e.rejection = 1)),
                !0 === f
                  ? (c = o)
                  : (d && d.enter(), (c = f(o)), d && (d.exit(), (s = !0))),
                c === l.promise
                  ? h(Yn("Promise-chain cycle"))
                  : (u = ir(c))
                  ? u.call(c, p, h)
                  : p(c))
              : h(o);
          } catch (t) {
            d && !s && d.exit(), h(t);
          }
        }
        (e.reactions = []), (e.notified = !1), n && !e.rejection && ur(t, e);
      });
    }
  },
  cr = function (t, e, n) {
    var r, o;
    nr
      ? (((r = zn.createEvent("Event")).promise = e),
        (r.reason = n),
        r.initEvent(t, !1, !0),
        x.dispatchEvent(r))
      : (r = { promise: e, reason: n }),
      (o = x["on" + t])
        ? o(r)
        : "unhandledrejection" === t &&
          (function (t, e) {
            var n = x.console;
            n &&
              n.error &&
              (1 === arguments.length ? n.error(t) : n.error(t, e));
          })("Unhandled promise rejection", n);
  },
  ur = function (t, e) {
    Vn.call(x, function () {
      var n,
        r = e.value;
      if (
        sr(e) &&
        ((n = kn(function () {
          er
            ? Jn.emit("unhandledRejection", r, t)
            : cr("unhandledrejection", t, r);
        })),
        (e.rejection = er || sr(e) ? 2 : 1),
        n.error)
      )
        throw n.value;
    });
  },
  sr = function (t) {
    return 1 !== t.rejection && !t.parent;
  },
  lr = function (t, e) {
    Vn.call(x, function () {
      er ? Jn.emit("rejectionHandled", t) : cr("rejectionhandled", t, e.value);
    });
  },
  fr = function (t, e, n, r) {
    return function (o) {
      t(e, n, o, r);
    };
  },
  pr = function (t, e, n, r) {
    e.done ||
      ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), ar(t, e, !0));
  },
  hr = function (t, e, n, r) {
    if (!e.done) {
      (e.done = !0), r && (e = r);
      try {
        if (t === n) throw Yn("Promise can't be resolved itself");
        var o = ir(n);
        o
          ? Rn(function () {
              var r = { done: !1 };
              try {
                o.call(n, fr(hr, t, r, e), fr(pr, t, r, e));
              } catch (n) {
                pr(t, r, n, e);
              }
            })
          : ((e.value = n), (e.state = 1), ar(t, e, !1));
      } catch (n) {
        pr(t, { done: !1 }, n, e);
      }
    }
  };
rr &&
  ((Xn = function (t) {
    !(function (t, e, n) {
      if (!(t instanceof Xn)) throw TypeError("Incorrect Promise invocation");
    })(this),
      Ae(t),
      Nn.call(this);
    var e = Bn(this);
    try {
      t(fr(hr, this, e), fr(pr, this, e));
    } catch (t) {
      pr(this, e, t);
    }
  }),
  ((Nn = function (t) {
    Hn(this, {
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
  })(Xn.prototype, {
    then: function (t, e) {
      var n = Kn(this),
        r = Zn(Xe(this, Xn));
      return (
        (r.ok = "function" != typeof t || t),
        (r.fail = "function" == typeof e && e),
        (r.domain = er ? Jn.domain : void 0),
        (n.parent = !0),
        n.reactions.push(r),
        0 != n.state && ar(this, n, !1),
        r.promise
      );
    },
    catch: function (t) {
      return this.then(void 0, t);
    },
  })),
  (Un = function () {
    var t = new Nn(),
      e = Bn(t);
    (this.promise = t),
      (this.resolve = fr(hr, t, e)),
      (this.reject = fr(pr, t, e));
  }),
  (_n.f = Zn = function (t) {
    return t === Xn || t === Dn ? new Un(t) : tr(t);
  }),
  "function" == typeof Pe &&
    ((Fn = Pe.prototype.then),
    qt(
      Pe.prototype,
      "then",
      function (t, e) {
        var n = this;
        return new Xn(function (t, e) {
          Fn.call(n, t, e);
        }).then(t, e);
      },
      { unsafe: !0 }
    ),
    "function" == typeof Qn &&
      oe(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (t) {
            return $n(Xn, Qn.apply(x, arguments));
          },
        }
      ))),
  oe({ global: !0, wrap: !0, forced: rr }, { Promise: Xn }),
  ve(Xn, "Promise", !1),
  (Wn = ft("Promise")),
  S &&
    Wn &&
    !Wn[Te] &&
    (0, _.f)(Wn, Te, {
      configurable: !0,
      get: function () {
        return this;
      },
    }),
  (Dn = ft("Promise")),
  oe(
    { target: "Promise", stat: !0, forced: rr },
    {
      reject: function (t) {
        var e = Zn(this);
        return e.reject.call(void 0, t), e.promise;
      },
    }
  ),
  oe(
    { target: "Promise", stat: !0, forced: rr },
    {
      resolve: function (t) {
        return $n(this, t);
      },
    }
  ),
  oe(
    { target: "Promise", stat: !0, forced: or },
    {
      all: function (t) {
        var e = this,
          n = Zn(e),
          r = n.resolve,
          o = n.reject,
          i = kn(function () {
            var n = Ae(e.resolve),
              i = [],
              a = 0,
              c = 1;
            De(t, function (t) {
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
          n = Zn(e),
          r = n.reject,
          o = kn(function () {
            var o = Ae(e.resolve);
            De(t, function (t) {
              o.call(e, t).then(n.resolve, r);
            });
          });
        return o.error && r(o.value), n.promise;
      },
    }
  );
var dr,
  vr = K("match"),
  gr = function (t) {
    var e;
    return E(t) && (void 0 !== (e = t[vr]) ? !!e : "RegExp" == p(t));
  },
  yr = function (t) {
    if (gr(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  },
  mr = K("match"),
  wr = function (t) {
    var e = /./;
    try {
      "/./"[t](e);
    } catch (n) {
      try {
        return (e[mr] = !1), "/./"[t](e);
      } catch (t) {}
    }
    return !1;
  },
  br = Vt.f,
  xr = "".startsWith,
  Sr = Math.min,
  Er = wr("startsWith"),
  Or = !(Er || ((dr = br(String.prototype, "startsWith")), !dr || dr.writable));
oe(
  { target: "String", proto: !0, forced: !Or && !Er },
  {
    startsWith: function (t) {
      var e = String(v(this));
      yr(t);
      var n = Q(Sr(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        r = String(t);
      return xr ? xr.call(e, r, n) : e.slice(n, n + r.length) === r;
    },
  }
);
var jr = {
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
  Pr = K("iterator"),
  Tr = K("toStringTag"),
  Ar = je.values;
for (var Rr in jr) {
  var Ir = x[Rr],
    _r = Ir && Ir.prototype;
  if (_r) {
    if (_r[Pr] !== Ar)
      try {
        k(_r, Pr, Ar);
      } catch (t) {
        _r[Pr] = Ar;
      }
    if ((_r[Tr] || k(_r, Tr, Rr), jr[Rr]))
      for (var $r in je)
        if (_r[$r] !== je[$r])
          try {
            k(_r, $r, je[$r]);
          } catch (t) {
            _r[$r] = je[$r];
          }
  }
}
var kr = function () {
    var t = A(this),
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
  Cr = RegExp.prototype,
  Lr = Cr.toString;
(l(function () {
  return "/a/b" != Lr.call({ source: "a", flags: "b" });
}) ||
  "toString" != Lr.name) &&
  qt(
    RegExp.prototype,
    "toString",
    function () {
      var t = A(this),
        e = String(t.source),
        n = t.flags;
      return (
        "/" +
        e +
        "/" +
        String(
          void 0 === n && t instanceof RegExp && !("flags" in Cr)
            ? kr.call(t)
            : n
        )
      );
    },
    { unsafe: !0 }
  );
var Mr = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Nr = "[" + Mr + "]",
  Ur = RegExp("^" + Nr + Nr + "*"),
  Dr = RegExp(Nr + Nr + "*$"),
  Fr = function (t) {
    return function (e) {
      var n = String(v(e));
      return (
        1 & t && (n = n.replace(Ur, "")), 2 & t && (n = n.replace(Dr, "")), n
      );
    };
  },
  Wr = (Fr(1), Fr(2), Fr(3));
function Gr(t) {
  return r(null == t ? void 0 : t.trim(), "​");
}
oe(
  {
    target: "String",
    proto: !0,
    forced: l(function () {
      return !!Mr.trim() || "​᠎" != "​᠎".trim() || "trim" !== Mr.trim.name;
    }),
  },
  {
    trim: function () {
      return Wr(this);
    },
  }
);
const Vr =
  !(
    "[object process]" ===
    Object.prototype.toString.call("undefined" != typeof process ? process : 0)
  ) && "undefined" != typeof window;
function qr(t, e) {
  return RegExp(t, e);
}
var Br,
  Hr,
  Kr = {
    UNSUPPORTED_Y: l(function () {
      var t = qr("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    }),
    BROKEN_CARET: l(function () {
      var t = qr("^r", "gy");
      return (t.lastIndex = 2), null != t.exec("str");
    }),
  },
  Xr = RegExp.prototype.exec,
  Yr = String.prototype.replace,
  zr = Xr,
  Jr =
    ((Hr = /b*/g),
    Xr.call((Br = /a/), "a"),
    Xr.call(Hr, "a"),
    0 !== Br.lastIndex || 0 !== Hr.lastIndex),
  Qr = Kr.UNSUPPORTED_Y || Kr.BROKEN_CARET,
  Zr = void 0 !== /()??/.exec("")[1];
(Jr || Zr || Qr) &&
  (zr = function (t) {
    var e,
      n,
      r,
      o,
      i = this,
      a = Qr && i.sticky,
      c = kr.call(i),
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
      Zr && (n = new RegExp("^" + u + "$(?!\\s)", c)),
      Jr && (e = i.lastIndex),
      (r = Xr.call(a ? n : i, l)),
      a
        ? r
          ? ((r.input = r.input.slice(s)),
            (r[0] = r[0].slice(s)),
            (r.index = i.lastIndex),
            (i.lastIndex += r[0].length))
          : (i.lastIndex = 0)
        : Jr && r && (i.lastIndex = i.global ? r.index + r[0].length : e),
      Zr &&
        r &&
        r.length > 1 &&
        Yr.call(r[0], n, function () {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (r[o] = void 0);
        }),
      r
    );
  });
var to = zr;
oe({ target: "RegExp", proto: !0, forced: /./.exec !== to }, { exec: to });
var eo = K("species"),
  no = !l(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: "7" }), t;
      }),
      "7" !== "".replace(t, "$<a>")
    );
  }),
  ro = "$0" === "a".replace(/./, "$0"),
  oo = K("replace"),
  io = !!/./[oo] && "" === /./[oo]("a", "$0"),
  ao = !l(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var n = "ab".split(t);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  }),
  co = function (t, e, n, r) {
    var o = K(t),
      i = !l(function () {
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
        !l(function () {
          var e = !1,
            n = /a/;
          return (
            "split" === t &&
              (((n = {}).constructor = {}),
              (n.constructor[eo] = function () {
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
      ("replace" === t && (!no || !ro || io)) ||
      ("split" === t && !ao)
    ) {
      var c = /./[o],
        u = n(
          o,
          ""[t],
          function (t, e, n, r, o) {
            return e.exec === to
              ? i && !o
                ? { done: !0, value: c.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: ro,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: io,
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
    r && k(RegExp.prototype[o], "sham", !0);
  },
  uo = function (t) {
    return function (e, n) {
      var r,
        o,
        i = String(v(e)),
        a = z(n),
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
  so = (uo(!1), uo(!0)),
  lo = function (t, e, n) {
    return e + (n ? so(t, e).length : 1);
  },
  fo = function (t, e) {
    var n = t.exec;
    if ("function" == typeof n) {
      var r = n.call(t, e);
      if ("object" != typeof r)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        );
      return r;
    }
    if ("RegExp" !== p(t))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return to.call(t, e);
  },
  po = Math.max,
  ho = Math.min,
  vo = Math.floor,
  go = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  yo = /\$([$&'`]|\d\d?)/g;
co("replace", 2, function (t, e, n, r) {
  var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = r.REPLACE_KEEPS_$0,
    a = o ? "$" : "$0";
  return [
    function (n, r) {
      var o = v(this),
        i = null == n ? void 0 : n[t];
      return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r);
    },
    function (t, r) {
      if ((!o && i) || ("string" == typeof r && -1 === r.indexOf(a))) {
        var u = n(e, t, this, r);
        if (u.done) return u.value;
      }
      var s = A(t),
        l = String(this),
        f = "function" == typeof r;
      f || (r = String(r));
      var p = s.global;
      if (p) {
        var h = s.unicode;
        s.lastIndex = 0;
      }
      for (var d = []; ; ) {
        var v = fo(s, l);
        if (null === v) break;
        if ((d.push(v), !p)) break;
        "" === String(v[0]) && (s.lastIndex = lo(l, Q(s.lastIndex), h));
      }
      for (var g, y = "", m = 0, w = 0; w < d.length; w++) {
        v = d[w];
        for (
          var b = String(v[0]),
            x = po(ho(z(v.index), l.length), 0),
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
        x >= m && ((y += l.slice(m, x) + P), (m = x + b.length));
      }
      return y + l.slice(m);
    },
  ];
  function c(t, n, r, o, i, a) {
    var c = r + t.length,
      u = o.length,
      s = yo;
    return (
      void 0 !== i && ((i = ie(i)), (s = go)),
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
              var f = vo(l / 10);
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
var mo,
  wo = Object.defineProperty,
  bo = {},
  xo = function (t) {
    throw t;
  },
  So = nt.indexOf,
  Eo = [].indexOf,
  Oo = !!Eo && 1 / [1].indexOf(1, -0) < 0,
  jo =
    !!(mo = [].indexOf) &&
    l(function () {
      mo.call(
        null,
        function () {
          throw 1;
        },
        1
      );
    }),
  Po = (function (t, e) {
    if (U(bo, "indexOf")) return bo.indexOf;
    e || (e = {});
    var n = [].indexOf,
      r = !!U(e, "ACCESSORS") && e.ACCESSORS,
      o = U(e, 0) ? e[0] : xo,
      i = U(e, 1) ? e[1] : void 0;
    return (bo.indexOf =
      !!n &&
      !l(function () {
        if (r && !S) return !0;
        var t = { length: -1 };
        r ? wo(t, 1, { enumerable: !0, get: xo }) : (t[1] = 1), n.call(t, o, i);
      }));
  })(0, { ACCESSORS: !0, 1: 0 });
oe(
  { target: "Array", proto: !0, forced: Oo || !jo || !Po },
  {
    indexOf: function (t) {
      return Oo
        ? Eo.apply(this, arguments) || 0
        : So(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var To = Object.assign,
  Ao = Object.defineProperty,
  Ro =
    !To ||
    l(function () {
      if (
        S &&
        1 !==
          To(
            { b: 1 },
            To(
              Ao({}, "a", {
                enumerable: !0,
                get: function () {
                  Ao(this, "b", { value: 3, enumerable: !1 });
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
        7 != To({}, t)[n] || "abcdefghijklmnopqrst" != ct(To({}, e)).join("")
      );
    })
      ? function (t, e) {
          for (
            var n = ie(t), r = arguments.length, o = 1, i = Kt.f, a = Wt.f;
            r > o;

          )
            for (
              var c,
                u = d(arguments[o++]),
                s = i ? ct(u).concat(i(u)) : ct(u),
                l = s.length,
                f = 0;
              l > f;

            )
              (c = s[f++]), (S && !a.call(u, c)) || (n[c] = u[c]);
          return n;
        }
      : To;
oe(
  { target: "Object", stat: !0, forced: Object.assign !== Ro },
  { assign: Ro }
);
var Io = Vt.f,
  _o = "".endsWith,
  $o = Math.min,
  ko = wr("endsWith"),
  Co =
    !ko &&
    !!(function () {
      var t = Io(String.prototype, "endsWith");
      return t && !t.writable;
    })();
oe(
  { target: "String", proto: !0, forced: !Co && !ko },
  {
    endsWith: function (t) {
      var e = String(v(this));
      yr(t);
      var n = arguments.length > 1 ? arguments[1] : void 0,
        r = Q(e.length),
        o = void 0 === n ? r : $o(Q(n), r),
        i = String(t);
      return _o ? _o.call(e, i, o) : e.slice(o - i.length, o) === i;
    },
  }
);
var Lo = [].push,
  Mo = Math.min,
  No = !l(function () {
    return !RegExp(4294967295, "y");
  });
co(
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
              var r = String(v(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
              if (0 === o) return [];
              if (void 0 === t) return [r];
              if (!gr(t)) return e.call(r, t, o);
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
                (i = to.call(l, r)) &&
                !(
                  (a = l.lastIndex) > s &&
                  (u.push(r.slice(s, i.index)),
                  i.length > 1 && i.index < r.length && Lo.apply(u, i.slice(1)),
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
          var o = v(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n);
        },
        function (t, o) {
          var i = n(r, t, this, o, r !== e);
          if (i.done) return i.value;
          var a = A(t),
            c = String(this),
            u = Xe(a, RegExp),
            s = a.unicode,
            l = new u(
              No ? a : "^(?:" + a.source + ")",
              (a.ignoreCase ? "i" : "") +
                (a.multiline ? "m" : "") +
                (a.unicode ? "u" : "") +
                (No ? "y" : "g")
            ),
            f = void 0 === o ? 4294967295 : o >>> 0;
          if (0 === f) return [];
          if (0 === c.length) return null === fo(l, c) ? [c] : [];
          for (var p = 0, h = 0, d = []; h < c.length; ) {
            l.lastIndex = No ? h : 0;
            var v,
              g = fo(l, No ? c : c.slice(h));
            if (
              null === g ||
              (v = Mo(Q(l.lastIndex + (No ? 0 : h)), c.length)) === p
            )
              h = lo(c, h, s);
            else {
              if ((d.push(c.slice(p, h)), d.length === f)) return d;
              for (var y = 1; y <= g.length - 1; y++)
                if ((d.push(g[y]), d.length === f)) return d;
              h = p = v;
            }
          }
          return d.push(c.slice(p)), d;
        },
      ]
    );
  },
  !No
);
const Uo = encodeURIComponent;
function Do(t) {
  return t && t.startsWith("'") ? t.substr(1, t.length - 2) : t;
}
const Fo = {
    type: "audio",
    name: "forvo",
    url: "https://forvo.com",
    makeUrl: ({ text: t, lang: e }) =>
      `https://ru.forvo.com/word/${Uo(t)}/#${e}`,
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
                .map(Do),
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
                  "женщина" === (r = Gr(r)) ? "f" : "мужчина" === r ? "m" : r),
              };
              var r;
              return (
                2 === e.length &&
                  (n.country = (function (t) {
                    return Gr(t);
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
  Wo = {
    type: "audio",
    name: "howjsay",
    url: "https://howjsay.com",
    getData: async ({ text: t }) => ({
      audio: [{ url: `https://howjsay.com/mp3/${encodeURIComponent(t)}.mp3` }],
    }),
  };
class Go {
  constructor(t, e) {
    (this.$ = t), (this.elem = e);
  }
  async $$(t) {
    const e = this.elem.find(t),
      n = [];
    return (
      e.each((t, e) => {
        n.push(new Go(this.$, this.$(e)));
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
class Vo {
  constructor(t) {
    this.$ = s.load(t);
  }
  $$(t) {
    const e = this.$(t),
      n = [];
    return (
      e.each((t, e) => {
        n.push(new Go(this.$, this.$(e)));
      }),
      Promise.resolve(n)
    );
  }
  close() {
    return Promise.resolve(void 0);
  }
}
async function qo(t) {
  Vr && (t = "https://api.allorigins.win/raw?url=" + encodeURIComponent(t));
  const e = await u(t, {
    headers: {
      "User-Agent": "lingua-bot",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!e.ok) throw new Error(e.statusText);
  const n = await e.text();
  return new Vo(n);
}
class Bo {
  constructor(t, e) {
    (this.page = t), (this.elem = e);
  }
  async $$(t) {
    return (await this.elem.$$(t)).map((t) => new Bo(this.page, t));
  }
  getAttribute(t) {
    return this.elem.getAttribute(t);
  }
  textContent() {
    return this.elem.textContent();
  }
}
class Ho {
  constructor(t, e) {
    (this.browser = t), (this.page = e);
  }
  async $$(t) {
    try {
      await this.page.waitForSelector(t, { timeout: 5e3 });
    } catch (t) {}
    return (await this.page.$$(t)).map((t) => new Bo(this.page, t));
  }
  async close() {
    await this.page.close(), await this.browser.close();
  }
}
const Ko = [
  {
    type: "visual",
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
    type: "universal",
    engine: "playwright",
    name: "wordnik",
    url: "https://www.wordnik.com",
    makeUrl: ({ text: t }) => "/words/" + t,
    plan: [{ selector: ".flickr-module .thumbs img", visual: ["@src"] }],
  },
  {
    type: "universal",
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
  Fo,
  Wo,
];
function Xo(r) {
  return async ({ text: o, lang: i }) => {
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
              if (Vr) return await qo(t);
              const { chromium: e } = require("playwright"),
                n = await e.launch(),
                r = await n.newPage();
              return await r.goto(t), new Ho(n, r);
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
            const n = Gr(await e.textContent());
            if (n && !s(t, n)) return [n];
          },
          f = async (t, e, n) => {
            const r = [];
            for (const o of n) {
              let n;
              (n = o.startsWith("@")
                ? await e.getAttribute(o.substr(1))
                : Gr(await e.text())),
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
}
function Yo(t, e = {}) {
  const n = e.sources || Ko.filter((t) => !e.type || t.type === e.type);
  return Promise.all(n.map(Xo).map((e) => e(t)));
}
export { Yo as fetchData, Ko as sources };
//# sourceMappingURL=bundle.modern.js.map
