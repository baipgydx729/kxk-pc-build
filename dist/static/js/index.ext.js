(function (e) {
  function n(n) {
    for (
      var i, a, u = n[0], c = n[1], s = n[2], l = 0, p = [];
      l < u.length;
      l++
    )
      (a = u[l]),
        Object.prototype.hasOwnProperty.call(t, a) && t[a] && p.push(t[a][0]),
        (t[a] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    f && f(n);
    while (p.length) p.shift()();
    return r.push.apply(r, s || []), o();
  }
  function o() {
    for (var e, n = 0; n < r.length; n++) {
      for (var o = r[n], i = !0, u = 1; u < o.length; u++) {
        var c = o[u];
        0 !== t[c] && (i = !1);
      }
      i && (r.splice(n--, 1), (e = a((a.s = o[0]))));
    }
    return e;
  }
  var i = {},
    t = { index: 0 },
    r = [];
  function a(n) {
    if (i[n]) return i[n].exports;
    var o = (i[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
  }
  (a.e = function (e) {
    var n = [],
      o = t[e];
    if (0 !== o)
      if (o) n.push(o[2]);
      else {
        var i = new Promise(function (n, i) {
          o = t[e] = [n, i];
        });
        n.push((o[2] = i));
        var r,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          a.nc && u.setAttribute("nonce", a.nc),
          (u.src = (function (e) {
            return (
              a.p +
              "static/js/" +
              ({ "pages-index": "pages-index" }[e] || e) +
              "." +
              { "pages-index": "fad0fe8f" }[e] +
              ".js"
            );
          })(e));
        var c = new Error();
        r = function (n) {
          (u.onerror = u.onload = null), clearTimeout(s);
          var o = t[e];
          if (0 !== o) {
            if (o) {
              var i = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = i),
                (c.request = r),
                o[1](c);
            }
            t[e] = void 0;
          }
        };
        var s = setTimeout(function () {
          r({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = r), document.head.appendChild(u);
      }
    return Promise.all(n);
  }),
    (a.m = e),
    (a.c = i),
    (a.d = function (e, n, o) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (a.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            o,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
          );
      return o;
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = "/"),
    (a.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = u.push.bind(u);
  (u.push = n), (u = u.slice());
  for (var s = 0; s < u.length; s++) n(u[s]);
  var f = c;
  r.push([0, "chunk-vendors"]), o();
})({
  0: function (e, n, o) {
    e.exports = o("c0f8");
  },
  "3bb9": function (e, n, o) {
    "use strict";
    o("7a82"),
      Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = void 0);
    n.default = { pages: [{ path: "pages/index" }] };
  },
  "77e4": function (e, n, o) {
    "use strict";
    (function (e) {
      var n = o("4ea4").default;
      o("13d5"), o("d3b7"), o("ddb0"), o("ac1f"), o("5319");
      var i = n(o("e143")),
        t = {
          keys: function () {
            return [];
          },
        };
      (e["____DCE1EDF____"] = !0),
        delete e["____DCE1EDF____"],
        (e.__uniConfig = { globalStyle: {} }),
        (e.__uniConfig.compilerVersion = "3.8.7"),
        (e.__uniConfig.darkmode = !1),
        (e.__uniConfig.themeConfig = {}),
        (e.__uniConfig.uniPlatform = "h5"),
        (e.__uniConfig.appId = "__UNI__52101D7"),
        (e.__uniConfig.appName = "xunda-app-web"),
        (e.__uniConfig.appVersion = "1.0.0"),
        (e.__uniConfig.appVersionCode = "100"),
        (e.__uniConfig.router = { mode: "hash", base: "/" }),
        (e.__uniConfig.publicPath = "/"),
        (e.__uniConfig["async"] = {
          loading: "AsyncLoading",
          error: "AsyncError",
          delay: 200,
          timeout: 6e4,
        }),
        (e.__uniConfig.debug = !1),
        (e.__uniConfig.networkTimeout = {
          request: 6e4,
          connectSocket: 6e4,
          uploadFile: 6e4,
          downloadFile: 6e4,
        }),
        (e.__uniConfig.sdkConfigs = {}),
        (e.__uniConfig.qqMapKey = void 0),
        (e.__uniConfig.googleMapKey = void 0),
        (e.__uniConfig.aMapKey = void 0),
        (e.__uniConfig.aMapSecurityJsCode = void 0),
        (e.__uniConfig.aMapServiceHost = void 0),
        (e.__uniConfig.locale = ""),
        (e.__uniConfig.fallbackLocale = void 0),
        (e.__uniConfig.locales = t.keys().reduce(function (e, n) {
          var o = n.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
            i = t(n);
          return Object.assign(e[o] || (e[o] = {}), i.common || i), e;
        }, {})),
        (e.__uniConfig.nvue = { "flex-direction": "column" }),
        (e.__uniConfig.__webpack_chunk_load__ = o.e),
        i.default.component("pages-index", function (e) {
          var n = {
            component: o
              .e("pages-index")
              .then(
                function () {
                  return e(o("d5d9"));
                }.bind(null, o)
              )
              .catch(o.oe),
            delay: __uniConfig["async"].delay,
            timeout: __uniConfig["async"].timeout,
          };
          return (
            __uniConfig["async"]["loading"] &&
              (n.loading = {
                name: "SystemAsyncLoading",
                render: function (e) {
                  return e(__uniConfig["async"]["loading"]);
                },
              }),
            __uniConfig["async"]["error"] &&
              (n.error = {
                name: "SystemAsyncError",
                render: function (e) {
                  return e(__uniConfig["async"]["error"]);
                },
              }),
            n
          );
        }),
        (e.__uniRoutes = [
          {
            path: "/",
            alias: "/pages/index",
            component: {
              render: function (e) {
                return e(
                  "Page",
                  {
                    props: Object.assign(
                      { isQuit: !0, isEntry: !0 },
                      __uniConfig.globalStyle,
                      {}
                    ),
                  },
                  [e("pages-index", { slot: "page" })]
                );
              },
            },
            meta: {
              id: 1,
              name: "pages-index",
              isNVue: !1,
              maxWidth: 0,
              pagePath: "pages/index",
              isQuit: !0,
              isEntry: !0,
              windowTop: 44,
            },
          },
          {
            path: "/choose-location",
            component: {
              render: function (e) {
                return e("Page", { props: { navigationStyle: "custom" } }, [
                  e("system-choose-location", { slot: "page" }),
                ]);
              },
            },
            meta: { name: "choose-location", pagePath: "/choose-location" },
          },
          {
            path: "/open-location",
            component: {
              render: function (e) {
                return e("Page", { props: { navigationStyle: "custom" } }, [
                  e("system-open-location", { slot: "page" }),
                ]);
              },
            },
            meta: { name: "open-location", pagePath: "/open-location" },
          },
        ]),
        e.UniApp && new e.UniApp();
    }).call(this, o("c8ba"));
  },
  a4dc: function (e, n, o) {
    "use strict";
    o("7a82"),
      Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = void 0);
    n.default = { appid: "__UNI__DCE1EDF" };
  },
  c0f8: function (e, n, o) {
    "use strict";
    (function (e) {
        o("e260"),
        o("e6cf"),
        o("cca6"),
        o("a79d"),
        o("77e4"),
        o("1c31"),
        o("a9ff"),
        (window.uniCloud = e);
    }).call(this, o("a9ff")["default"]);
  },
});
