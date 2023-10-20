/* eslint-disable  */

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
(function () {
  const innerGlobal = typeof window !== 'undefined' ? window : global;
  const exportTo = {};
  (function (window, global, module) {
    /*
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
    */
    let q;

    function aa(a) {
      let b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++],
        } : {
          done: !0,
        };
      };
    }

    const ba = typeof Object.defineProperties === 'function' ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a;
    };

    function ca(a) {
      a = [typeof globalThis === 'object' && globalThis, a, typeof window === 'object' && window, typeof self === 'object' && self, typeof global === 'object' && global];

      for (let b = 0; b < a.length; ++b) {
        const c = a[b];
        if (c && c.Math == Math) return c;
      }

      throw Error('Cannot find global object');
    }

    const da = ca(this);

    function ha(a, b) {
      if (b) {
        a: {
          for (var c = da, d = a.split('.'), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }

          d = d[d.length - 1];
          e = c[d];
          f = b(e);
          f != e && f != null && ba(c, d, {
            configurable: !0,
            writable: !0,
            value: f,
          });
        }
      }
    }

    ha('Symbol', (a) => {
      function b(f) {
        if (this instanceof b) throw new TypeError('Symbol is not a constructor');
        return new c(`${d + (f || '')}_${e++}`, f);
      }

      function c(f, g) {
        this.g = f;
        ba(this, 'description', {
          configurable: !0,
          writable: !0,
          value: g,
        });
      }

      if (a) return a;

      c.prototype.toString = function () {
        return this.g;
      };

      var d = `jscomp_symbol_${1E9 * Math.random() >>> 0}_`;
      var e = 0;
      return b;
    });
    ha('Symbol.iterator', (a) => {
      if (a) return a;
      a = Symbol('Symbol.iterator');

      for (let b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '), c = 0; c < b.length; c++) {
        const d = da[b[c]];
        typeof d === 'function' && typeof d.prototype[a] !== 'function' && ba(d.prototype, a, {
          configurable: !0,
          writable: !0,

          value() {
            return ia(aa(this));
          },

        });
      }

      return a;
    });

    function ia(a) {
      a = {
        next: a,
      };

      a[Symbol.iterator] = function () {
        return this;
      };

      return a;
    }

    function r(a) {
      const b = typeof Symbol !== 'undefined' && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: aa(a),
      };
    }

    function ja(a) {
      if (!(a instanceof Array)) {
        a = r(a);

        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);

        a = c;
      }

      return a;
    }

    const ka = typeof Object.create === 'function' ? Object.create : function (a) {
      function b() {}

      b.prototype = a;
      return new b();
    };
    let la;
    if (typeof Object.setPrototypeOf === 'function') la = Object.setPrototypeOf; else {
      let ma;

      a: {
        const na = {
          a: !0,
        };
        const oa = {};

        try {
          oa.__proto__ = na;
          ma = oa.a;
          break a;
        } catch (a) {}

        ma = !1;
      }

      la = ma ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(`${a} is not extensible`);
        return a;
      } : null;
    }
    const pa = la;

    function qa(a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b); else {
        for (const c in b) {
          if (c != 'prototype') {
            if (Object.defineProperties) {
              const d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
          }
        }
      }
      a.Eg = b.prototype;
    }

    function ra() {
      this.s = !1;
      this.l = null;
      this.h = void 0;
      this.g = 1;
      this.j = this.m = 0;
      this.D = this.i = null;
    }

    function sa(a) {
      if (a.s) throw new TypeError('Generator is already running');
      a.s = !0;
    }

    ra.prototype.u = function (a) {
      this.h = a;
    };

    function ta(a, b) {
      a.i = {
        $d: b,
        fe: !0,
      };
      a.g = a.m || a.j;
    }

    ra.prototype.return = function (a) {
      this.i = {
        return: a,
      };
      this.g = this.j;
    };

    function u(a, b, c) {
      a.g = c;
      return {
        value: b,
      };
    }

    ra.prototype.v = function (a) {
      this.g = a;
    };

    function z(a) {
      a.g = 0;
    }

    function A(a, b, c) {
      a.m = b;
      void 0 != c && (a.j = c);
    }

    function ua(a) {
      a.m = 0;
      a.j = 2;
    }

    function va(a, b) {
      a.g = b;
      a.m = 0;
    }

    function C(a) {
      a.m = 0;
      const b = a.i.$d;
      a.i = null;
      return b;
    }

    function wa(a) {
      a.D = [a.i];
      a.m = 0;
      a.j = 0;
    }

    function xa(a, b) {
      let c = a.D.splice(0)[0];
      (c = a.i = a.i || c) ? c.fe ? a.g = a.m || a.j : void 0 != c.v && a.j < c.v ? (a.g = c.v, a.i = null) : a.g = a.j : a.g = b;
    }

    function za(a) {
      this.g = new ra();
      this.h = a;
    }

    function Aa(a, b) {
      sa(a.g);
      const c = a.g.l;
      if (c) {
        return Ba(a, 'return' in c ? c.return : (d) => ({
          value: d,
          done: !0,
        }), b, a.g.return);
      }
      a.g.return(b);
      return Ca(a);
    }

    function Ba(a, b, c, d) {
      try {
        const e = b.call(a.g.l, c);
        if (!(e instanceof Object)) throw new TypeError(`Iterator result ${e} is not an object`);
        if (!e.done) return a.g.s = !1, e;
        var f = e.value;
      } catch (g) {
        return a.g.l = null, ta(a.g, g), Ca(a);
      }

      a.g.l = null;
      d.call(a.g, f);
      return Ca(a);
    }

    function Ca(a) {
      for (; a.g.g;) {
        try {
          var b = a.h(a.g);
          if (b) {
            return a.g.s = !1, {
              value: b.value,
              done: !1,
            };
          }
        } catch (c) {
          a.g.h = void 0, ta(a.g, c);
        }
      }

      a.g.s = !1;

      if (a.g.i) {
        b = a.g.i;
        a.g.i = null;
        if (b.fe) throw b.$d;
        return {
          value: b.return,
          done: !0,
        };
      }

      return {
        value: void 0,
        done: !0,
      };
    }

    function Ea(a) {
      this.next = function (b) {
        sa(a.g);
        a.g.l ? b = Ba(a, a.g.l.next, b, a.g.u) : (a.g.u(b), b = Ca(a));
        return b;
      };

      this.throw = function (b) {
        sa(a.g);
        a.g.l ? b = Ba(a, a.g.l.throw, b, a.g.u) : (ta(a.g, b), b = Ca(a));
        return b;
      };

      this.return = function (b) {
        return Aa(a, b);
      };

      this[Symbol.iterator] = function () {
        return this;
      };
    }

    function Fa(a, b) {
      const c = new Ea(new za(b));
      pa && a.prototype && pa(c, a.prototype);
      return c;
    }

    function Ha(a) {
      function b(d) {
        return a.next(d);
      }

      function c(d) {
        return a.throw(d);
      }

      return new Promise((d, e) => {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }

        f(a.next());
      });
    }

    function I(a) {
      return Ha(new Ea(new za(a)));
    }

    ha('Promise', (a) => {
      function b(g) {
        this.h = 0;
        this.i = void 0;
        this.g = [];
        this.s = !1;
        const h = this.j();

        try {
          g(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
        }
      }

      function c() {
        this.g = null;
      }

      function d(g) {
        return g instanceof b ? g : new b((h) => {
          h(g);
        });
      }

      if (a) return a;

      c.prototype.h = function (g) {
        if (this.g == null) {
          this.g = [];
          const h = this;
          this.i(() => {
            h.l();
          });
        }

        this.g.push(g);
      };

      const e = da.setTimeout;

      c.prototype.i = function (g) {
        e(g, 0);
      };

      c.prototype.l = function () {
        for (; this.g && this.g.length;) {
          const {
            g,
          } = this;
          this.g = [];

          for (let h = 0; h < g.length; ++h) {
            const k = g[h];
            g[h] = null;

            try {
              k();
            } catch (l) {
              this.j(l);
            }
          }
        }

        this.g = null;
      };

      c.prototype.j = function (g) {
        this.i(() => {
          throw g;
        });
      };

      b.prototype.j = function () {
        function g(l) {
          return function (m) {
            k || (k = !0, l.call(h, m));
          };
        }

        var h = this;
        var k = !1;
        return {
          resolve: g(this.J),
          reject: g(this.l),
        };
      };

      b.prototype.J = function (g) {
        if (g === this) this.l(new TypeError('A Promise cannot resolve to itself')); else if (g instanceof b) this.N(g); else {
          switch (typeof g) {
            case 'object':
              var h = g != null;
              break;

            case 'function':
              h = !0;
              break;

            default:
              h = !1;
          }

          h ? this.H(g) : this.m(g);
        }
      };

      b.prototype.H = function (g) {
        let h = void 0;

        try {
          h = g.then;
        } catch (k) {
          this.l(k);
          return;
        }

        typeof h === 'function' ? this.T(h, g) : this.m(g);
      };

      b.prototype.l = function (g) {
        this.u(2, g);
      };

      b.prototype.m = function (g) {
        this.u(1, g);
      };

      b.prototype.u = function (g, h) {
        if (this.h != 0) throw Error(`Cannot settle(${g}, ${h}): Promise already settled in state${this.h}`);
        this.h = g;
        this.i = h;
        this.h === 2 && this.L();
        this.D();
      };

      b.prototype.L = function () {
        const g = this;
        e(() => {
          if (g.F()) {
            const h = da.console;
            typeof h !== 'undefined' && h.error(g.i);
          }
        }, 1);
      };

      b.prototype.F = function () {
        if (this.s) return !1;
        let g = da.CustomEvent;
        const h = da.Event;
        const k = da.dispatchEvent;
        if (typeof k === 'undefined') return !0;
        typeof g === 'function' ? g = new g('unhandledrejection', {
          cancelable: !0,
        }) : typeof h === 'function' ? g = new h('unhandledrejection', {
          cancelable: !0,
        }) : (g = da.document.createEvent('CustomEvent'), g.initCustomEvent('unhandledrejection', !1, !0, g));
        g.promise = this;
        g.reason = this.i;
        return k(g);
      };

      b.prototype.D = function () {
        if (this.g != null) {
          for (let g = 0; g < this.g.length; ++g) f.h(this.g[g]);

          this.g = null;
        }
      };

      var f = new c();

      b.prototype.N = function (g) {
        const h = this.j();
        g.tc(h.resolve, h.reject);
      };

      b.prototype.T = function (g, h) {
        const k = this.j();

        try {
          g.call(h, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };

      b.prototype.then = function (g, h) {
        function k(p, t) {
          return typeof p === 'function' ? function (v) {
            try {
              l(p(v));
            } catch (w) {
              m(w);
            }
          } : t;
        }

        let l;
        let m;
        const n = new b((p, t) => {
          l = p;
          m = t;
        });
        this.tc(k(g, l), k(h, m));
        return n;
      };

      b.prototype.catch = function (g) {
        return this.then(void 0, g);
      };

      b.prototype.tc = function (g, h) {
        function k() {
          switch (l.h) {
            case 1:
              g(l.i);
              break;

            case 2:
              h(l.i);
              break;

            default:
              throw Error(`Unexpected state: ${l.h}`);
          }
        }

        var l = this;
        this.g == null ? f.h(k) : this.g.push(k);
        this.s = !0;
      };

      b.resolve = d;

      b.reject = function (g) {
        return new b((h, k) => {
          k(g);
        });
      };

      b.race = function (g) {
        return new b((h, k) => {
          for (let l = r(g), m = l.next(); !m.done; m = l.next()) d(m.value).tc(h, k);
        });
      };

      b.all = function (g) {
        const h = r(g);
        let k = h.next();
        return k.done ? d([]) : new b((l, m) => {
          function n(v) {
            return function (w) {
              p[v] = w;
              t--;
              t == 0 && l(p);
            };
          }

          var p = [];
          var t = 0;

          do p.push(void 0), t++, d(k.value).tc(n(p.length - 1), m), k = h.next(); while (!k.done);
        });
      };

      return b;
    });

    function Ia(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    ha('WeakMap', (a) => {
      function b(k) {
        this.g = (h += Math.random() + 1).toString();

        if (k) {
          k = r(k);

          for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1]);
        }
      }

      function c() {}

      function d(k) {
        const l = typeof k;
        return l === 'object' && k !== null || l === 'function';
      }

      function e(k) {
        if (!Ia(k, g)) {
          const l = new c();
          ba(k, g, {
            value: l,
          });
        }
      }

      function f(k) {
        const l = Object[k];
        l && (Object[k] = function (m) {
          if (m instanceof c) return m;
          Object.isExtensible(m) && e(m);
          return l(m);
        });
      }

      if (function () {
        if (!a || !Object.seal) return !1;

        try {
          const k = Object.seal({});
          const l = Object.seal({});
          const m = new a([[k, 2], [l, 3]]);
          if (m.get(k) != 2 || m.get(l) != 3) return !1;
          m.delete(k);
          m.set(l, 4);
          return !m.has(k) && m.get(l) == 4;
        } catch (n) {
          return !1;
        }
      }()) return a;
      var g = `$jscomp_hidden_${Math.random()}`;
      f('freeze');
      f('preventExtensions');
      f('seal');
      var h = 0;

      b.prototype.set = function (k, l) {
        if (!d(k)) throw Error('Invalid WeakMap key');
        e(k);
        if (!Ia(k, g)) throw Error(`WeakMap key fail: ${k}`);
        k[g][this.g] = l;
        return this;
      };

      b.prototype.get = function (k) {
        return d(k) && Ia(k, g) ? k[g][this.g] : void 0;
      };

      b.prototype.has = function (k) {
        return d(k) && Ia(k, g) && Ia(k[g], this.g);
      };

      b.prototype.delete = function (k) {
        return d(k) && Ia(k, g) && Ia(k[g], this.g) ? delete k[g][this.g] : !1;
      };

      return b;
    });
    ha('Map', (a) => {
      function b() {
        const h = {};
        return h.Sa = h.next = h.head = h;
      }

      function c(h, k) {
        let l = h.g;
        return ia(() => {
          if (l) {
            for (; l.head != h.g;) l = l.Sa;

            for (; l.next != l.head;) {
              return l = l.next, {
                done: !1,
                value: k(l),
              };
            }

            l = null;
          }

          return {
            done: !0,
            value: void 0,
          };
        });
      }

      function d(h, k) {
        let l = k && typeof k;
        l == 'object' || l == 'function' ? f.has(k) ? l = f.get(k) : (l = `${++g}`, f.set(k, l)) : l = `p_${k}`;
        const m = h.h[l];

        if (m && Ia(h.h, l)) {
          for (let n = 0; n < m.length; n++) {
            const p = m[n];

            if (k !== k && p.key !== p.key || k === p.key) {
              return {
                id: l,
                list: m,
                index: n,
                ga: p,
              };
            }
          }
        }

        return {
          id: l,
          list: m,
          index: -1,
          ga: void 0,
        };
      }

      function e(h) {
        this.h = {};
        this.g = b();
        this.size = 0;

        if (h) {
          h = r(h);

          for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]);
        }
      }

      if (function () {
        if (!a || typeof a !== 'function' || !a.prototype.entries || typeof Object.seal !== 'function') return !1;

        try {
          const h = Object.seal({
            x: 4,
          });
          const k = new a(r([[h, 's']]));
          if (k.get(h) != 's' || k.size != 1 || k.get({
            x: 4,
          }) || k.set({
            x: 4,
          }, 't') != k || k.size != 2) return !1;
          const l = k.entries();
          let m = l.next();
          if (m.done || m.value[0] != h || m.value[1] != 's') return !1;
          m = l.next();
          return m.done || m.value[0].x != 4 || m.value[1] != 't' || !l.next().done ? !1 : !0;
        } catch (n) {
          return !1;
        }
      }()) return a;
      var f = new WeakMap();

      e.prototype.set = function (h, k) {
        h = h === 0 ? 0 : h;
        const l = d(this, h);
        l.list || (l.list = this.h[l.id] = []);
        l.ga ? l.ga.value = k : (l.ga = {
          next: this.g,
          Sa: this.g.Sa,
          head: this.g,
          key: h,
          value: k,
        }, l.list.push(l.ga), this.g.Sa.next = l.ga, this.g.Sa = l.ga, this.size++);
        return this;
      };

      e.prototype.delete = function (h) {
        h = d(this, h);
        return h.ga && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.ga.Sa.next = h.ga.next, h.ga.next.Sa = h.ga.Sa, h.ga.head = null, this.size--, !0) : !1;
      };

      e.prototype.clear = function () {
        this.h = {};
        this.g = this.g.Sa = b();
        this.size = 0;
      };

      e.prototype.has = function (h) {
        return !!d(this, h).ga;
      };

      e.prototype.get = function (h) {
        return (h = d(this, h).ga) && h.value;
      };

      e.prototype.entries = function () {
        return c(this, (h) => [h.key, h.value]);
      };

      e.prototype.keys = function () {
        return c(this, (h) => h.key);
      };

      e.prototype.values = function () {
        return c(this, (h) => h.value);
      };

      e.prototype.forEach = function (h, k) {
        for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this);
      };

      e.prototype[Symbol.iterator] = e.prototype.entries;
      var g = 0;
      return e;
    });
    ha('Set', (a) => {
      function b(c) {
        this.g = new Map();

        if (c) {
          c = r(c);

          for (var d; !(d = c.next()).done;) this.add(d.value);
        }

        this.size = this.g.size;
      }

      if (function () {
        if (!a || typeof a !== 'function' || !a.prototype.entries || typeof Object.seal !== 'function') return !1;

        try {
          const c = Object.seal({
            x: 4,
          });
          const d = new a(r([c]));
          if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
            x: 4,
          }) != d || d.size != 2) return !1;
          const e = d.entries();
          let f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done;
        } catch (g) {
          return !1;
        }
      }()) return a;

      b.prototype.add = function (c) {
        c = c === 0 ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };

      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };

      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };

      b.prototype.has = function (c) {
        return this.g.has(c);
      };

      b.prototype.entries = function () {
        return this.g.entries();
      };

      b.prototype.values = function () {
        return this.g.values();
      };

      b.prototype.keys = b.prototype.values;
      b.prototype[Symbol.iterator] = b.prototype.values;

      b.prototype.forEach = function (c, d) {
        const e = this;
        this.g.forEach((f) => c.call(d, f, f, e));
      };

      return b;
    });

    function Ja(a, b, c) {
      a instanceof String && (a = String(a));

      for (let d = a.length, e = 0; e < d; e++) {
        const f = a[e];
        if (b.call(c, f, e, a)) {
          return {
            ha: e,
            ze: f,
          };
        }
      }

      return {
        ha: -1,
        ze: void 0,
      };
    }

    ha('Array.prototype.findIndex', (a) => a || function (b, c) {
      return Ja(this, b, c).ha;
    });
    ha('Object.is', (a) => a || function (b, c) {
      return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
    });
    ha('Array.prototype.includes', (a) => a || function (b, c) {
      let d = this;
      d instanceof String && (d = String(d));
      const e = d.length;
      let f = c || 0;

      for (f < 0 && (f = Math.max(f + e, 0)); f < e; f++) {
        const g = d[f];
        if (g === b || Object.is(g, b)) return !0;
      }

      return !1;
    });

    function Ka(a, b, c) {
      if (a == null) throw new TypeError(`The 'this' value for String.prototype.${c} must not be null or undefined`);
      if (b instanceof RegExp) throw new TypeError(`First argument to String.prototype.${c} must not be a regular expression`);
      return `${a}`;
    }

    ha('String.prototype.includes', (a) => a || function (b, c) {
      return Ka(this, b, 'includes').indexOf(b, c || 0) !== -1;
    });
    ha('Array.prototype.find', (a) => a || function (b, c) {
      return Ja(this, b, c).ze;
    });
    ha('String.prototype.startsWith', (a) => a || function (b, c) {
      for (var d = Ka(this, b, 'startsWith'), e = d.length, f = b.length, g = Math.max(0, Math.min(c | 0, d.length)), h = 0; h < f && g < e;) if (d[g++] != b[h++]) return !1;

      return h >= f;
    });

    function La(a, b) {
      a instanceof String && (a += '');
      let c = 0;
      let d = !1;
      const e = {
        next() {
          if (!d && c < a.length) {
            const f = c++;
            return {
              value: b(f, a[f]),
              done: !1,
            };
          }

          d = !0;
          return {
            done: !0,
            value: void 0,
          };
        },

      };

      e[Symbol.iterator] = function () {
        return e;
      };

      return e;
    }

    ha('Array.prototype.keys', (a) => a || function () {
      return La(this, (b) => b);
    });
    const Ma = typeof Object.assign === 'function' ? Object.assign : function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (d) for (const e in d) Ia(d, e) && (a[e] = d[e]);
      }

      return a;
    };
    ha('Object.assign', (a) => a || Ma);
    ha('Array.from', (a) => a || function (b, c, d) {
      c = c != null ? c : function (h) {
        return h;
      };
      const e = [];
      let f = typeof Symbol !== 'undefined' && Symbol.iterator && b[Symbol.iterator];

      if (typeof f === 'function') {
        b = f.call(b);

        for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++));
      } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));

      return e;
    });
    ha('Array.prototype.values', (a) => a || function () {
      return La(this, (b, c) => c);
    });
    ha('Promise.prototype.finally', (a) => a || function (b) {
      return this.then((c) => Promise.resolve(b()).then(() => c), (c) => Promise.resolve(b()).then(() => {
        throw c;
      }));
    });
    ha('Array.prototype.entries', (a) => a || function () {
      return La(this, (b, c) => [b, c]);
    });
    ha('String.prototype.repeat', (a) => a || function (b) {
      let c = Ka(this, null, 'repeat');
      if (b < 0 || b > 1342177279) throw new RangeError('Invalid count value');
      b |= 0;

      for (var d = ''; b;) if (b & 1 && (d += c), b >>>= 1) c += c;

      return d;
    });
    ha('Object.values', (a) => a || function (b) {
      const c = [];
      let d;

      for (d in b) Ia(b, d) && c.push(b[d]);

      return c;
    });
    ha('Math.log2', (a) => a || function (b) {
      return Math.log(b) / Math.LN2;
    });
    ha('Object.entries', (a) => a || function (b) {
      const c = [];
      let d;

      for (d in b) Ia(b, d) && c.push([d, b[d]]);

      return c;
    });
    const Na = this || self;

    function M(a, b) {
      const c = a.split('.');
      let d = Na;
      c[0] in d || typeof d.execScript === 'undefined' || d.execScript(`var ${c[0]}`);

      for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} : d[e] = b;
    }
    /*
    @license
    Shaka Player
    Copyright 2016 Google LLC
    SPDX-License-Identifier: Apache-2.0
    */

    function Oa(a) {
      this.i = Math.exp(Math.log(0.5) / a);
      this.h = this.g = 0;
    }

    function Pa(a, b, c) {
      const d = Math.pow(a.i, b);
      c = c * (1 - d) + d * a.g;
      isNaN(c) || (a.g = c, a.h += b);
    }

    function Ra(a) {
      return a.g / (1 - Math.pow(a.i, a.h));
    }

    function Sa() {
      this.h = new Oa(2);
      this.i = new Oa(5);
      this.g = 0;
    }

    Sa.prototype.getBandwidthEstimate = function (a) {
      return this.g < 128E3 ? a : Math.min(Ra(this.h), Ra(this.i));
    };

    function Ta() {}

    function Ua() {}

    function Va() {}

    function Wa(a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];

      Xa.has(a) || (Xa.add(a), Va.apply(Ta, ja(c)));
    }

    function Ya() {}

    function Za() {}

    function $a() {}

    function ab() {}

    var Xa = new Set();

    if (window.console && window.console.log.bind) {
      const bb = {};
      const cb = (bb[1] = console.error.bind(console), bb[2] = console.warn.bind(console), bb[3] = console.info.bind(console), bb[4] = console.log.bind(console), bb[5] = console.debug.bind(console), bb[6] = console.debug.bind(console), bb);
      Va = cb[2];
      Ua = cb[1];
    }

    function fb(a, b) {
      for (var c = [], d = r(a), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));

      return c;
    }

    function gb(a, b) {
      for (let c = r(a), d = c.next(); !d.done; d = c.next()) if (!b(d.value)) return !1;

      return !0;
    }

    const ib = function hb(a) {
      let c;
      return Fa(hb, (d) => {
        d.g == 1 && (c = 0);
        if (d.g != 3) return c < a ? u(d, c, 3) : d.v(0);
        c++;
        return d.v(2);
      });
    };

    const lb = function jb(a) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return Fa(jb, (k) => {
        k.g == 1 && (c = -1, e = d = void 0, f = r(a), g = f.next());

        if (k.g != 5) {
          if (g.done) {
            return c == -1 ? k.v(0) : u(k, {
              ha: c,
              Df: d,
              item: e,
              next: void 0,
            }, 0);
          }

          h = g.value;
          return c >= 0 ? u(k, {
            ha: c,
            item: e,
            Df: d,
            next: h,
          }, 5) : k.v(5);
        }

        c++;
        d = e;
        e = h;
        g = f.next();
        return k.v(2);
      });
    };

    function mb(a, b) {
      return typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b) ? !0 : a === b;
    }

    function nb(a, b) {
      const c = a.indexOf(b);
      c > -1 && a.splice(c, 1);
    }

    function ob(a, b, c) {
      c || (c = mb);
      if (a.length != b.length) return !1;
      b = b.slice();
      let d = {};
      a = r(a);

      for (let e = a.next(); !e.done; d = {
        Tc: d.Tc,
      }, e = a.next()) {
        d.Tc = e.value;
        e = b.findIndex(function (f) {
          return function (g) {
            return c(f.Tc, g);
          };
        }(d));
        if (e == -1) return !1;
        b[e] = b[b.length - 1];
        b.pop();
      }

      return b.length == 0;
    }

    function pb(a, b, c) {
      c || (c = mb);
      if (a.length != b.length) return !1;

      for (let d = 0; d < a.length; d++) if (!c(a[d], b[d])) return !1;

      return !0;
    }

    function qb(a, b, c) {
      this.startTime = a;
      this.direction = rb;
      this.endTime = b;
      this.payload = c;
      this.region = new tb();
      this.position = null;
      this.positionAlign = ub;
      this.size = 0;
      this.textAlign = vb;
      this.writingMode = wb;
      this.lineInterpretation = xb;
      this.line = null;
      this.lineHeight = '';
      this.lineAlign = yb;
      this.displayAlign = zb;
      this.fontSize = this.border = this.backgroundImage = this.backgroundColor = this.color = '';
      this.fontWeight = Ab;
      this.fontStyle = Bb;
      this.linePadding = this.letterSpacing = this.fontFamily = '';
      this.opacity = 1;
      this.textDecoration = [];
      this.wrapLine = !0;
      this.id = '';
      this.nestedCues = [];
      this.spacer = this.lineBreak = !1;
      this.cellResolution = {
        columns: 32,
        rows: 15,
      };
    }

    qb.prototype.clone = function () {
      const a = new qb(0, 0, '');
      let b;

      for (b in this) a[b] = this[b], a[b] && a[b].constructor == Array && (a[b] = a[b].slice());

      return a;
    };

    function Cb(a, b) {
      if (a.startTime != b.startTime || a.endTime != b.endTime || a.payload != b.payload) return !1;

      for (const c in a) {
        if (c != 'startTime' && c != 'endTime' && c != 'payload') {
          if (c == 'nestedCues') {
            if (!pb(a.nestedCues, b.nestedCues, Cb)) return !1;
          } else if (c == 'region' || c == 'cellResolution') {
            for (const d in a[c]) {
              if (a[c][d] != b[c][d]) return !1;
            }
          } else if (Array.isArray(a[c])) {
            if (!pb(a[c], b[c])) return !1;
          } else if (a[c] != b[c]) return !1;
        }
      }

      return !0;
    }

    M('shaka.text.Cue', qb);
    var ub = 'auto';
    qb.positionAlign = {
      LEFT: 'line-left',
      RIGHT: 'line-right',
      CENTER: 'center',
      AUTO: ub,
    };
    var vb = 'center';
    const Db = {
      LEFT: 'left',
      RIGHT: 'right',
      CENTER: vb,
      START: 'start',
      END: 'end',
    };
    qb.textAlign = Db;
    var zb = 'after';
    const Eb = {
      BEFORE: 'before',
      CENTER: 'center',
      AFTER: zb,
    };
    qb.displayAlign = Eb;
    var rb = 'ltr';
    qb.direction = {
      HORIZONTAL_LEFT_TO_RIGHT: rb,
      HORIZONTAL_RIGHT_TO_LEFT: 'rtl',
    };
    var wb = 'horizontal-tb';
    qb.writingMode = {
      HORIZONTAL_TOP_TO_BOTTOM: wb,
      VERTICAL_LEFT_TO_RIGHT: 'vertical-lr',
      VERTICAL_RIGHT_TO_LEFT: 'vertical-rl',
    };
    var xb = 0;
    qb.lineInterpretation = {
      LINE_NUMBER: xb,
      PERCENTAGE: 1,
    };
    var yb = 'start';
    const Fb = {
      CENTER: 'center',
      START: yb,
      END: 'end',
    };
    qb.lineAlign = Fb;
    const Gb = {
      white: '#FFF',
      lime: '#0F0',
      cyan: '#0FF',
      red: '#F00',
      yellow: '#FF0',
      magenta: '#F0F',
      blue: '#00F',
      black: '#000',
    };
    qb.defaultTextColor = Gb;
    const Hb = {
      bg_white: '#FFF',
      bg_lime: '#0F0',
      bg_cyan: '#0FF',
      bg_red: '#F00',
      bg_yellow: '#FF0',
      bg_magenta: '#F0F',
      bg_blue: '#00F',
      bg_black: '#000',
    };
    qb.defaultTextBackgroundColor = Hb;
    var Ab = 400;
    qb.fontWeight = {
      NORMAL: Ab,
      BOLD: 700,
    };
    var Bb = 'normal';
    const Ib = {
      NORMAL: Bb,
      ITALIC: 'italic',
      OBLIQUE: 'oblique',
    };
    qb.fontStyle = Ib;
    qb.textDecoration = {
      UNDERLINE: 'underline',
      LINE_THROUGH: 'lineThrough',
      OVERLINE: 'overline',
    };

    function tb() {
      this.id = '';
      this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
      this.height = this.width = 100;
      this.viewportAnchorUnits = this.widthUnits = this.heightUnits = Jb;
      this.scroll = Kb;
    }

    M('shaka.text.CueRegion', tb);
    var Jb = 1;
    tb.units = {
      PX: 0,
      PERCENTAGE: Jb,
      LINES: 2,
    };
    var Kb = '';
    tb.scrollMode = {
      NONE: Kb,
      UP: 'up',
    };

    function Lb() {}

    function Mb(a, b) {
      if (!a && !b) return !0;
      if (!a || !b || a.byteLength != b.byteLength) return !1;
      if (Nb(a) == Nb(b) && (a.byteOffset || 0) == (b.byteOffset || 0)) return !0;

      for (let c = Ob(a), d = Ob(b), e = r(ib(a.byteLength)), f = e.next(); !f.done; f = e.next()) if (f = f.value, c[f] != d[f]) return !1;

      return !0;
    }

    function Nb(a) {
      return a instanceof ArrayBuffer ? a : a.buffer;
    }

    function Qb(a) {
      return a instanceof ArrayBuffer ? a : a.byteOffset == 0 && a.byteLength == a.buffer.byteLength ? a.buffer : new Uint8Array(a).buffer;
    }

    function Ob(a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Rb(a, void 0 === b ? 0 : b, c, Uint8Array);
    }

    function Sb(a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Rb(a, void 0 === b ? 0 : b, c, DataView);
    }

    function Rb(a, b, c, d) {
      const e = (a.byteOffset || 0) + a.byteLength;
      b = Math.max(0, Math.min((a.byteOffset || 0) + b, e));
      return new d(Nb(a), b, Math.min(b + Math.max(c, 0), e) - b);
    }

    M('shaka.util.BufferUtils', Lb);
    Lb.toDataView = Sb;
    Lb.toUint8 = Ob;
    Lb.toArrayBuffer = Qb;
    Lb.equal = Mb;

    function Tb(a, b) {
      this.g = a;
      this.h = b;
    }

    Tb.prototype.toString = function () {
      return `v${this.g}.${this.h}`;
    };

    function Ub(a, b) {
      const c = new Tb(4, 0);
      const d = Vb;
      const e = d.g;
      const f = c.h - e.h;
      ((c.g - e.g || f) > 0 ? d.i : d.h)(d.g, c, a, b);
    }

    function Wb(a, b, c, d) {
      Va([c, 'has been deprecated and will be removed in', b, '. We are currently at version', a, '. Additional information:', d].join(' '));
    }

    function Xb(a, b, c, d) {
      Ua([c, 'has been deprecated and has been removed in', b, '. We are now at version', a, '. Additional information:', d].join(''));
    }

    var Vb = null;

    function Yb(a, b) {
      return a.concat(b);
    }

    function Zb() {}

    function $b(a) {
      return a != null;
    }

    function ac(a) {
      const b = Object.create(a.prototype || Object.prototype);

      try {
        var c = a.call(b);
        c || (Ub('Factories requiring new', 'Factories should be plain functions'), c = b);
      } catch (d) {
        Ub('Factories requiring new', 'Factories should be plain functions'), c = new a();
      }

      return c;
    }

    function bc() {}

    M('shaka.dependencies', bc);

    bc.has = function (a) {
      return cc.has(a);
    };

    bc.add = function (a, b) {
      if (!dc[a]) throw Error(`${a} is not supported`);
      cc.set(a, () => b);
    };

    var dc = {
      muxjs: 'muxjs',
    };
    bc.Allowed = dc;
    var cc = new Map([['muxjs', function () {
      return window.muxjs;
    }]]);

    function O(a, b, c, d) {
      for (var e = [], f = 3; f < arguments.length; ++f) e[f - 3] = arguments[f];

      this.severity = a;
      this.category = b;
      this.code = c;
      this.data = e;
      this.handled = !1;
    }

    O.prototype.toString = function () {
      return `shaka.util.Error ${JSON.stringify(this, null, '  ')}`;
    };

    M('shaka.util.Error', O);
    O.Severity = {
      RECOVERABLE: 1,
      CRITICAL: 2,
    };
    O.Category = {
      NETWORK: 1,
      TEXT: 2,
      MEDIA: 3,
      MANIFEST: 4,
      STREAMING: 5,
      DRM: 6,
      PLAYER: 7,
      CAST: 8,
      STORAGE: 9,
      ADS: 10,
    };
    O.Code = {
      UNSUPPORTED_SCHEME: 1E3,
      BAD_HTTP_STATUS: 1001,
      HTTP_ERROR: 1002,
      TIMEOUT: 1003,
      MALFORMED_DATA_URI: 1004,
      REQUEST_FILTER_ERROR: 1006,
      RESPONSE_FILTER_ERROR: 1007,
      MALFORMED_TEST_URI: 1008,
      UNEXPECTED_TEST_REQUEST: 1009,
      ATTEMPTS_EXHAUSTED: 1010,
      INVALID_TEXT_HEADER: 2E3,
      INVALID_TEXT_CUE: 2001,
      UNABLE_TO_DETECT_ENCODING: 2003,
      BAD_ENCODING: 2004,
      INVALID_XML: 2005,
      INVALID_MP4_TTML: 2007,
      INVALID_MP4_VTT: 2008,
      UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
      INVALID_MP4_CEA: 2010,
      TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
      CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS: 2012,
      TEXT_ONLY_WEBVTT_SRC_EQUALS: 2013,
      MISSING_TEXT_PLUGIN: 2014,
      BUFFER_READ_OUT_OF_BOUNDS: 3E3,
      JS_INTEGER_OVERFLOW: 3001,
      EBML_OVERFLOW: 3002,
      EBML_BAD_FLOATING_POINT_SIZE: 3003,
      MP4_SIDX_WRONG_BOX_TYPE: 3004,
      MP4_SIDX_INVALID_TIMESCALE: 3005,
      MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
      WEBM_CUES_ELEMENT_MISSING: 3007,
      WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
      WEBM_SEGMENT_ELEMENT_MISSING: 3009,
      WEBM_INFO_ELEMENT_MISSING: 3010,
      WEBM_DURATION_ELEMENT_MISSING: 3011,
      WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
      WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
      MEDIA_SOURCE_OPERATION_FAILED: 3014,
      MEDIA_SOURCE_OPERATION_THREW: 3015,
      VIDEO_ERROR: 3016,
      QUOTA_EXCEEDED_ERROR: 3017,
      TRANSMUXING_FAILED: 3018,
      CONTENT_TRANSFORMATION_FAILED: 3019,
      UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
      DASH_INVALID_XML: 4001,
      DASH_NO_SEGMENT_INFO: 4002,
      DASH_EMPTY_ADAPTATION_SET: 4003,
      DASH_EMPTY_PERIOD: 4004,
      DASH_WEBM_MISSING_INIT: 4005,
      DASH_UNSUPPORTED_CONTAINER: 4006,
      DASH_PSSH_BAD_ENCODING: 4007,
      DASH_NO_COMMON_KEY_SYSTEM: 4008,
      DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
      DASH_CONFLICTING_KEY_IDS: 4010,
      RESTRICTIONS_CANNOT_BE_MET: 4012,
      HLS_PLAYLIST_HEADER_MISSING: 4015,
      INVALID_HLS_TAG: 4016,
      HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
      DASH_DUPLICATE_REPRESENTATION_ID: 4018,
      HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
      HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
      HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
      HLS_REQUIRED_TAG_MISSING: 4024,
      HLS_COULD_NOT_GUESS_CODECS: 4025,
      HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
      DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
      DASH_XLINK_DEPTH_LIMIT: 4028,
      HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
      CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
      CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
      HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
      HLS_INTERNAL_SKIP_STREAM: 4035,
      NO_VARIANTS: 4036,
      PERIOD_FLATTENING_FAILED: 4037,
      INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
      HLS_VARIABLE_NOT_FOUND: 4039,
      STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
      NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
      REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
      FAILED_TO_CREATE_CDM: 6002,
      FAILED_TO_ATTACH_TO_VIDEO: 6003,
      INVALID_SERVER_CERTIFICATE: 6004,
      FAILED_TO_CREATE_SESSION: 6005,
      FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
      LICENSE_REQUEST_FAILED: 6007,
      LICENSE_RESPONSE_REJECTED: 6008,
      ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
      NO_LICENSE_SERVER_GIVEN: 6012,
      OFFLINE_SESSION_REMOVED: 6013,
      EXPIRED: 6014,
      SERVER_CERTIFICATE_REQUIRED: 6015,
      INIT_DATA_TRANSFORM_ERROR: 6016,
      SERVER_CERTIFICATE_REQUEST_FAILED: 6017,
      LOAD_INTERRUPTED: 7E3,
      OPERATION_ABORTED: 7001,
      NO_VIDEO_ELEMENT: 7002,
      OBJECT_DESTROYED: 7003,
      CONTENT_NOT_LOADED: 7004,
      CAST_API_UNAVAILABLE: 8E3,
      NO_CAST_RECEIVERS: 8001,
      ALREADY_CASTING: 8002,
      UNEXPECTED_CAST_ERROR: 8003,
      CAST_CANCELED_BY_USER: 8004,
      CAST_CONNECTION_TIMED_OUT: 8005,
      CAST_RECEIVER_APP_UNAVAILABLE: 8006,
      STORAGE_NOT_SUPPORTED: 9E3,
      INDEXED_DB_ERROR: 9001,
      DEPRECATED_OPERATION_ABORTED: 9002,
      REQUESTED_ITEM_NOT_FOUND: 9003,
      MALFORMED_OFFLINE_URI: 9004,
      CANNOT_STORE_LIVE_OFFLINE: 9005,
      NO_INIT_DATA_FOR_OFFLINE: 9007,
      LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
      NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
      KEY_NOT_FOUND: 9012,
      MISSING_STORAGE_CELL: 9013,
      STORAGE_LIMIT_REACHED: 9014,
      DOWNLOAD_SIZE_CALLBACK_ERROR: 9015,
      CS_IMA_SDK_MISSING: 1E4,
      CS_AD_MANAGER_NOT_INITIALIZED: 10001,
      SS_IMA_SDK_MISSING: 10002,
      SS_AD_MANAGER_NOT_INITIALIZED: 10003,
      CURRENT_DAI_REQUEST_NOT_FINISHED: 10004,
    };
    /*
    @license
    Copyright 2008 The Closure Library Authors
    SPDX-License-Identifier: Apache-2.0
    */

    const ec = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    /*
    @license
    Copyright 2006 The Closure Library Authors
    SPDX-License-Identifier: Apache-2.0
    */

    function gc(a) {
      let b;
      a instanceof gc ? (hc(this, a.Da), this.qb = a.qb, this.Ga = a.Ga, ic(this, a.Eb), this.xa = a.xa, jc(this, a.g.clone()), this.fb = a.fb) : a && (b = String(a).match(ec)) ? (hc(this, b[1] || '', !0), this.qb = kc(b[2] || ''), this.Ga = kc(b[3] || '', !0), ic(this, b[4]), this.xa = kc(b[5] || '', !0), jc(this, b[6] || '', !0), this.fb = kc(b[7] || '')) : this.g = new lc(null);
    }

    q = gc.prototype;
    q.Da = '';
    q.qb = '';
    q.Ga = '';
    q.Eb = null;
    q.xa = '';
    q.fb = '';

    q.toString = function () {
      const a = [];
      let b = this.Da;
      b && a.push(mc(b, nc, !0), ':');

      if (b = this.Ga) {
        a.push('//');
        const c = this.qb;
        c && a.push(mc(c, nc, !0), '@');
        a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, '%$1'));
        b = this.Eb;
        b != null && a.push(':', String(b));
      }

      if (b = this.xa) this.Ga && b.charAt(0) != '/' && a.push('/'), a.push(mc(b, b.charAt(0) == '/' ? oc : pc, !0));
      (b = this.g.toString()) && a.push('?', b);
      (b = this.fb) && a.push('#', mc(b, qc));
      return a.join('');
    };

    q.resolve = function (a) {
      let b = this.clone();
      b.Da === 'data' && (b = new gc());
      let c = !!a.Da;
      c ? hc(b, a.Da) : c = !!a.qb;
      c ? b.qb = a.qb : c = !!a.Ga;
      c ? b.Ga = a.Ga : c = a.Eb != null;
      let d = a.xa;
      if (c) ic(b, a.Eb); else if (c = !!a.xa) {
        if (d.charAt(0) != '/') {
          if (this.Ga && !this.xa) d = `/${d}`; else {
            var e = b.xa.lastIndexOf('/');
            e != -1 && (d = b.xa.substr(0, e + 1) + d);
          }
        }
        if (d == '..' || d == '.') d = ''; else if (d.indexOf('./') != -1 || d.indexOf('/.') != -1) {
          e = d.lastIndexOf('/', 0) == 0;
          d = d.split('/');

          for (var f = [], g = 0; g < d.length;) {
            const h = d[g++];
            h == '.' ? e && g == d.length && f.push('') : h == '..' ? ((f.length > 1 || f.length == 1 && f[0] != '') && f.pop(), e && g == d.length && f.push('')) : (f.push(h), e = !0);
          }

          d = f.join('/');
        }
      }
      c ? b.xa = d : c = a.g.toString() !== '';
      c ? jc(b, a.g.clone()) : c = !!a.fb;
      c && (b.fb = a.fb);
      return b;
    };

    q.clone = function () {
      return new gc(this);
    };

    function hc(a, b, c) {
      a.Da = c ? kc(b, !0) : b;
      a.Da && (a.Da = a.Da.replace(/:$/, ''));
    }

    function ic(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || b < 0) throw Error(`Bad port number ${b}`);
        a.Eb = b;
      } else a.Eb = null;
    }

    function jc(a, b, c) {
      b instanceof lc ? a.g = b : (c || (b = mc(b, rc)), a.g = new lc(b));
    }

    function kc(a, b) {
      return a ? b ? decodeURI(a) : decodeURIComponent(a) : '';
    }

    function mc(a, b, c) {
      return a != null ? (a = encodeURI(a).replace(b, sc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), a) : null;
    }

    function sc(a) {
      a = a.charCodeAt(0);
      return `%${(a >> 4 & 15).toString(16)}${(a & 15).toString(16)}`;
    }

    var nc = /[#\/\?@]/g;
    var pc = /[#\?:]/g;
    var oc = /[#\?]/g;
    var rc = /[#\?@]/g;
    var qc = /#/g;

    function lc(a) {
      this.g = a || null;
    }

    q = lc.prototype;
    q.ua = null;
    q.vc = null;

    q.add = function (a, b) {
      if (!this.ua && (this.ua = {}, this.vc = 0, this.g)) {
        for (var c = this.g.split('&'), d = 0; d < c.length; d++) {
          const e = c[d].indexOf('=');
          let f = null;

          if (e >= 0) {
            var g = c[d].substring(0, e);
            f = c[d].substring(e + 1);
          } else g = c[d];

          g = decodeURIComponent(g.replace(/\+/g, ' '));
          f = f || '';
          this.add(g, decodeURIComponent(f.replace(/\+/g, ' ')));
        }
      }
      this.g = null;
      (c = this.ua.hasOwnProperty(a) && this.ua[a]) || (this.ua[a] = c = []);
      c.push(b);
      this.vc++;
      return this;
    };

    q.toString = function () {
      if (this.g) return this.g;
      if (!this.ua) return '';
      const a = [];
      let b;

      for (b in this.ua) {
        for (let c = encodeURIComponent(b), d = this.ua[b], e = 0; e < d.length; e++) {
          let f = c;
          d[e] !== '' && (f += `=${encodeURIComponent(d[e])}`);
          a.push(f);
        }
      }

      return this.g = a.join('&');
    };

    q.clone = function () {
      const a = new lc();
      a.g = this.g;

      if (this.ua) {
        const b = {};
        let c;

        for (c in this.ua) b[c] = this.ua[c].concat();

        a.ua = b;
        a.vc = this.vc;
      }

      return a;
    };

    function tc(a, b) {
      if (b.length == 0) return a;
      const c = b.map((d) => new gc(d));
      return a.map((d) => new gc(d)).map((d) => c.map((e) => d.resolve(e))).reduce(Yb, []).map((d) => d.toString());
    }

    function uc(a, b) {
      return {
        keySystem: a,
        licenseServerUri: '',
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: '',
        videoRobustness: '',
        serverCertificate: null,
        serverCertificateUri: '',
        sessionType: '',
        initData: b || [],
        keyIds: new Set(),
      };
    }

    function vc(a, b) {
      if (b.length == 1) return b[0];
      const c = wc(a, b);
      if (c != null) return c;
      throw new O(2, 4, 4025, b);
    }

    function wc(a, b) {
      for (let c = r(xc[a]), d = c.next(); !d.done; d = c.next()) {
        d = d.value;

        for (let e = r(b), f = e.next(); !f.done; f = e.next()) if (f = f.value, d.test(f.trim())) return f.trim();
      }

      return a == yc ? '' : null;
    }

    var yc = 'text';
    const zc = {
      Na: 'video',
      bb: 'audio',
      aa: yc,
      Mb: 'image',
      $f: 'application',
    };
    var xc = {
      audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
      video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
      text: [/^vtt$/, /^wvtt/, /^stpp/],
    };

    function Ac() {
      let a;
      let b;
      const c = new Promise((d, e) => {
        a = d;
        b = e;
      });
      c.resolve = a;
      c.reject = b;
      return c;
    }

    Ac.prototype.resolve = function () {};

    Ac.prototype.reject = function () {};

    function Bc(a) {
      this.h = a;
      this.g = void 0;
    }

    Bc.prototype.value = function () {
      void 0 == this.g && (this.g = this.h());
      return this.g;
    };

    function Cc() {}

    function Dc(a) {
      if (!a) return '';
      a = Ob(a);
      a[0] == 239 && a[1] == 187 && a[2] == 191 && (a = a.subarray(3));
      a = new TextDecoder().decode(a);
      a.includes('\ufffd') && Ua('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!');
      return a;
    }

    function Ec(a, b, c) {
      if (!a) return '';
      if (!c && a.byteLength % 2 != 0) throw new O(2, 2, 2004);
      let d = Math.floor(a.byteLength / 2);
      c = new Uint16Array(d);
      a = Sb(a);
      d = r(ib(d));

      for (let e = d.next(); !e.done; e = d.next()) e = e.value, c[e] = a.getUint16(2 * e, b);

      return Fc.value()(c);
    }

    function Gc(a) {
      function b(d) {
        return c.byteLength <= d || c[d] >= 32 && c[d] <= 126;
      }

      if (!a) return '';
      var c = Ob(a);
      if (c[0] == 239 && c[1] == 187 && c[2] == 191) return Dc(c);
      if (c[0] == 254 && c[1] == 255) return Ec(c.subarray(2), !1);
      if (c[0] == 255 && c[1] == 254) return Ec(c.subarray(2), !0);
      if (c[0] == 0 && c[2] == 0) return Ec(a, !1);
      if (c[1] == 0 && c[3] == 0) return Ec(a, !0);
      if (b(0) && b(1) && b(2) && b(3)) return Dc(a);
      throw new O(2, 2, 2003);
    }

    function Hc(a) {
      const b = new TextEncoder();
      return Qb(b.encode(a));
    }

    function Ic(a, b) {
      for (var c = new ArrayBuffer(2 * a.length), d = new DataView(c), e = r(lb(a)), f = e.next(); !f.done; f = e.next()) f = f.value, d.setUint16(2 * f.ha, f.item.charCodeAt(0), b);

      return c;
    }

    M('shaka.util.StringUtils', Cc);

    Cc.resetFromCharCode = function () {
      Fc.g = void 0;
    };

    Cc.toUTF16 = Ic;
    Cc.toUTF8 = Hc;
    Cc.fromBytesAutoDetect = Gc;
    Cc.fromUTF16 = Ec;
    Cc.fromUTF8 = Dc;
    var Fc = new Bc(() => {
      function a(c) {
        try {
          const d = new Uint8Array(c);
          return String.fromCharCode.apply(null, d).length > 0;
        } catch (e) {
          return !1;
        }
      }

      for (let b = {
        Ua: 65536,
      }; b.Ua > 0; b = {
          Ua: b.Ua,
        }, b.Ua /= 2) {
        if (a(b.Ua)) {
          return (function (c) {
            return function (d) {
              for (var e = '', f = 0; f < d.length; f += c.Ua) e += String.fromCharCode.apply(null, d.subarray(f, f + c.Ua));

              return e;
            };
          }(b));
        }
      }

      return null;
    });

    function Jc() {}

    function Kc(a) {
      a = Ob(a);
      a = Fc.value()(a);
      return btoa(a);
    }

    function Lc(a, b) {
      b = void 0 == b ? !0 : b;
      const c = Kc(a).replace(/\+/g, '-').replace(/\//g, '_');
      return b ? c : c.replace(/[=]*$/, '');
    }

    function Mc(a) {
      let b = window.atob(a.replace(/-/g, '+').replace(/_/g, '/'));
      a = new Uint8Array(b.length);
      b = r(lb(b));

      for (let c = b.next(); !c.done; c = b.next()) c = c.value, a[c.ha] = c.item.charCodeAt(0);

      return a;
    }

    function Nc(a) {
      let b = a.length / 2;
      const c = new Uint8Array(b);
      b = r(ib(b));

      for (let d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = window.parseInt(a.substr(2 * d, 2), 16);

      return c;
    }

    function Oc(a) {
      let b = Ob(a);
      a = '';
      b = r(b);

      for (let c = b.next(); !c.done; c = b.next()) c = c.value, c = c.toString(16), c.length == 1 && (c = `0${c}`), a += c;

      return a;
    }

    function Pc(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];

      let d = 0;
      let e = r(b);

      for (c = e.next(); !c.done; c = e.next()) d += c.value.byteLength;

      d = new Uint8Array(d);
      e = 0;
      b = r(b);

      for (c = b.next(); !c.done; c = b.next()) c = c.value, d.set(Ob(c), e), e += c.byteLength;

      return d;
    }

    M('shaka.util.Uint8ArrayUtils', Jc);
    Jc.concat = Pc;
    Jc.toHex = Oc;
    Jc.fromHex = Nc;
    Jc.fromBase64 = Mc;
    Jc.toBase64 = Lc;
    Jc.toStandardBase64 = Kc;

    Jc.equal = function (a, b) {
      Ub('shaka.util.Uint8ArrayUtils.equal', 'Please use shaka.util.BufferUtils.equal instead.');
      return Mb(a, b);
    };

    function Qc() {
      const a = this;
      this.s = cc.get('muxjs')();
      this.g = new this.s.mp4.Transmuxer({
        keepOriginalTimestamps: !0,
      });
      this.h = null;
      this.m = [];
      this.j = [];
      this.i = [];
      this.l = !1;
      this.g.on('data', (b) => {
        a.j = b.captions;
        a.i = b.metadata;
        a.m.push(Pc(b.initSegment, b.data));
      });
      this.g.on('done', () => {
        const b = {
          data: Pc.apply(Jc, ja(a.m)),
          captions: a.j,
          metadata: a.i,
        };
        a.h.resolve(b);
        a.l = !1;
      });
    }

    Qc.prototype.destroy = function () {
      this.g.dispose();
      this.g = null;
      return Promise.resolve();
    };

    function Rc(a, b) {
      if (!cc.get('muxjs')() || !Sc(a)) return !1;
      if (b) return MediaSource.isTypeSupported(Tc(b, a));
      const c = Tc('audio', a);
      const d = Tc('video', a);
      return MediaSource.isTypeSupported(c) || MediaSource.isTypeSupported(d);
    }

    function Sc(a) {
      return a.toLowerCase().split(';')[0].split('/')[1] == 'mp2t';
    }

    function Tc(a, b) {
      let c = b.replace(/mp2t/i, 'mp4');
      a == 'audio' && (c = c.replace('video', 'audio'));
      const d = /avc1\.(66|77|100)\.(\d+)/.exec(c);

      if (d) {
        let e = 'avc1.';
        const f = d[1];
        const g = Number(d[2]);
        e = (f == '66' ? `${e}4200` : f == '77' ? `${e}4d00` : `${e}6400`) + (g >> 4).toString(16);
        e += (g & 15).toString(16);
        c = c.replace(d[0], e);
      }

      return c;
    }

    function Uc(a, b) {
      a.l = !0;
      a.h = new Ac();
      a.m = [];
      a.j = [];
      a.i = [];
      const c = Ob(b);
      a.g.push(c);
      a.g.flush();
      a.l && a.h.reject(new O(2, 3, 3018));
      return a.h;
    }

    function Vc(a, b) {
      let c = a;
      b && (c += `; codecs="${b}"`);
      return c;
    }

    function Wc(a, b, c) {
      a = Vc(a, b);
      return cc.get('muxjs')() && Sc(a) ? Tc(c, a) : a;
    }

    function Xc(a) {
      a = a.split('.');
      const b = a[0];
      a.pop();
      return b;
    }

    function Yc(a) {
      a = a.split(/ *; */);
      a.shift();
      return (a = a.find((b) => b.startsWith('codecs='))) ? a.split('=')[1].replace(/^"|"$/g, '') : '';
    }

    new Map().set('codecs', 'codecs').set('frameRate', 'framerate').set('bandwidth', 'bitrate')
      .set('width', 'width')
      .set('height', 'height')
      .set('channelsCount', 'channels');

    function Zc(a) {
      this.s = null;
      this.i = a;
      this.j = this.D = 0;
      this.l = Infinity;
      this.h = this.g = null;
      this.u = '';
      this.m = new Map();
    }

    function $c(a) {
      return ad[a] || a == 'application/cea-608' || a == 'application/cea-708' ? !0 : !1;
    }

    Zc.prototype.destroy = function () {
      this.i = this.s = null;
      this.m.clear();
      return Promise.resolve();
    };

    function bd(a, b, c, d) {
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) return u(h, Promise.resolve(), 2);
        if (!a.s || !a.i) return h.return();
        if (c == null || d == null) return a.s.parseInit(Ob(b)), h.return();
        e = {
          periodStart: a.D,
          segmentStart: c,
          segmentEnd: d,
        };
        f = a.s.parseMedia(Ob(b), e);
        g = f.filter((k) => k.startTime >= a.j && k.startTime < a.l);
        a.i.append(g);
        a.g == null && (a.g = Math.max(c, a.j));
        a.h = Math.min(d, a.l);
        z(h);
      });
    }

    Zc.prototype.remove = function (a, b) {
      const c = this;
      return I((d) => {
        if (d.g == 1) return u(d, Promise.resolve(), 2);
        !c.i || !c.i.remove(a, b) || c.g == null || b <= c.g || a >= c.h || (a <= c.g && b >= c.h ? c.g = c.h = null : a <= c.g && b < c.h ? c.g = b : a > c.g && b >= c.h && (c.h = a));
        z(d);
      });
    };

    function cd(a, b, c) {
      a.j = b;
      a.l = c;
    }

    function dd(a, b, c) {
      a.u = b;
      if (b = a.m.get(b)) for (let d = r(b.keys()), e = d.next(); !e.done; e = d.next()) (e = b.get(e.value).filter((f) => f.endTime <= c)) && a.i.append(e);
    }

    function ed(a) {
      const b = [];
      a = r(a);

      for (let c = a.next(); !c.done; c = a.next()) {
        c = c.value, b.push({
          stream: c.stream,
          cue: new qb(c.startTime, c.endTime, c.text),
        });
      }

      return b;
    }

    function fd(a, b, c, d, e) {
      let f = `${c} ${d}`;
      const g = new Map();
      b = r(b);

      for (var h = b.next(); !h.done; h = b.next()) {
        var k = h.value;
        h = k.stream;
        k = k.cue;
        g.has(h) || g.set(h, new Map());
        g.get(h).has(f) || g.get(h).set(f, []);
        k.startTime += e;
        k.endTime += e;
        k.startTime >= a.j && k.startTime < a.l && (g.get(h).get(f).push(k), h == a.u && a.i.append([k]));
      }

      e = r(g.keys());

      for (f = e.next(); !f.done; f = e.next()) for (f = f.value, a.m.has(f) || a.m.set(f, new Map()), b = r(g.get(f).keys()), h = b.next(); !h.done; h = b.next()) h = h.value, k = g.get(f).get(h), a.m.get(f).set(h, k);

      a.g = a.g == null ? Math.max(c, a.j) : Math.min(a.g, Math.max(c, a.j));
      a.h = Math.max(a.h, Math.min(d, a.l));
    }

    M('shaka.text.TextEngine', Zc);
    Zc.prototype.destroy = Zc.prototype.destroy;

    Zc.findParser = function (a) {
      return ad[a];
    };

    Zc.unregisterParser = function (a) {
      delete ad[a];
    };

    Zc.registerParser = function (a, b) {
      ad[a] = b;
    };

    var ad = {};

    function gd(a, b) {
      a = id(a);
      b = id(b);
      return a.split('-')[0] == b.split('-')[0];
    }

    function jd(a, b) {
      a = id(a);
      b = id(b);
      const c = a.split('-');
      const d = b.split('-');
      return c[0] == d[0] && c.length == 1 && d.length == 2;
    }

    function kd(a, b) {
      a = id(a);
      b = id(b);
      const c = a.split('-');
      const d = b.split('-');
      return c.length == 2 && d.length == 2 && c[0] == d[0];
    }

    function id(a) {
      let b = a.split('-');
      a = b[0] || '';
      b = b[1] || '';
      a = a.toLowerCase();
      a = ld.get(a) || a;
      return (b = b.toUpperCase()) ? `${a}-${b}` : a;
    }

    function md(a, b) {
      a = id(a);
      b = id(b);
      return b == a ? 4 : jd(b, a) ? 3 : kd(b, a) ? 2 : jd(a, b) ? 1 : 0;
    }

    function nd(a) {
      return a.language ? id(a.language) : a.audio && a.audio.language ? id(a.audio.language) : a.video && a.video.language ? id(a.video.language) : 'und';
    }

    function od(a, b) {
      for (var c = id(a), d = new Set(), e = r(b), f = e.next(); !f.done; f = e.next()) d.add(id(f.value));

      e = r(d);

      for (f = e.next(); !f.done; f = e.next()) if (f = f.value, f == c) return f;

      e = r(d);

      for (f = e.next(); !f.done; f = e.next()) if (f = f.value, jd(f, c)) return f;

      e = r(d);

      for (f = e.next(); !f.done; f = e.next()) if (f = f.value, kd(f, c)) return f;

      d = r(d);

      for (f = d.next(); !f.done; f = d.next()) if (f = f.value, jd(c, f)) return f;

      return null;
    }

    var ld = new Map([['aar', 'aa'], ['abk', 'ab'], ['afr', 'af'], ['aka', 'ak'], ['alb', 'sq'], ['amh', 'am'], ['ara', 'ar'], ['arg', 'an'], ['arm', 'hy'], ['asm', 'as'], ['ava', 'av'], ['ave', 'ae'], ['aym', 'ay'], ['aze', 'az'], ['bak', 'ba'], ['bam', 'bm'], ['baq', 'eu'], ['bel', 'be'], ['ben', 'bn'], ['bih', 'bh'], ['bis', 'bi'], ['bod', 'bo'], ['bos', 'bs'], ['bre', 'br'], ['bul', 'bg'], ['bur', 'my'], ['cat', 'ca'], ['ces', 'cs'], ['cha', 'ch'], ['che', 'ce'], ['chi', 'zh'], ['chu', 'cu'], ['chv', 'cv'], ['cor', 'kw'], ['cos', 'co'], ['cre', 'cr'], ['cym', 'cy'], ['cze', 'cs'], ['dan', 'da'], ['deu', 'de'], ['div', 'dv'], ['dut', 'nl'], ['dzo', 'dz'], ['ell', 'el'], ['eng', 'en'], ['epo', 'eo'], ['est', 'et'], ['eus', 'eu'], ['ewe', 'ee'], ['fao', 'fo'], ['fas', 'fa'], ['fij', 'fj'], ['fin', 'fi'], ['fra', 'fr'], ['fre', 'fr'], ['fry', 'fy'], ['ful', 'ff'], ['geo', 'ka'], ['ger', 'de'], ['gla', 'gd'], ['gle', 'ga'], ['glg', 'gl'], ['glv', 'gv'], ['gre', 'el'], ['grn', 'gn'], ['guj', 'gu'], ['hat', 'ht'], ['hau', 'ha'], ['heb', 'he'], ['her', 'hz'], ['hin', 'hi'], ['hmo', 'ho'], ['hrv', 'hr'], ['hun', 'hu'], ['hye', 'hy'], ['ibo', 'ig'], ['ice', 'is'], ['ido', 'io'], ['iii', 'ii'], ['iku', 'iu'], ['ile', 'ie'], ['ina', 'ia'], ['ind', 'id'], ['ipk', 'ik'], ['isl', 'is'], ['ita', 'it'], ['jav', 'jv'], ['jpn', 'ja'], ['kal', 'kl'], ['kan', 'kn'], ['kas', 'ks'], ['kat', 'ka'], ['kau', 'kr'], ['kaz', 'kk'], ['khm', 'km'], ['kik', 'ki'], ['kin', 'rw'], ['kir', 'ky'], ['kom', 'kv'], ['kon', 'kg'], ['kor', 'ko'], ['kua', 'kj'], ['kur', 'ku'], ['lao', 'lo'], ['lat', 'la'], ['lav', 'lv'], ['lim', 'li'], ['lin', 'ln'], ['lit', 'lt'], ['ltz', 'lb'], ['lub', 'lu'], ['lug', 'lg'], ['mac', 'mk'], ['mah', 'mh'], ['mal', 'ml'], ['mao', 'mi'], ['mar', 'mr'], ['may', 'ms'], ['mkd', 'mk'], ['mlg', 'mg'], ['mlt', 'mt'], ['mon', 'mn'], ['mri', 'mi'], ['msa', 'ms'], ['mya', 'my'], ['nau', 'na'], ['nav', 'nv'], ['nbl', 'nr'], ['nde', 'nd'], ['ndo', 'ng'], ['nep', 'ne'], ['nld', 'nl'], ['nno', 'nn'], ['nob', 'nb'], ['nor', 'no'], ['nya', 'ny'], ['oci', 'oc'], ['oji', 'oj'], ['ori', 'or'], ['orm', 'om'], ['oss', 'os'], ['pan', 'pa'], ['per', 'fa'], ['pli', 'pi'], ['pol', 'pl'], ['por', 'pt'], ['pus', 'ps'], ['que', 'qu'], ['roh', 'rm'], ['ron', 'ro'], ['rum', 'ro'], ['run', 'rn'], ['rus', 'ru'], ['sag', 'sg'], ['san', 'sa'], ['sin', 'si'], ['slk', 'sk'], ['slo', 'sk'], ['slv', 'sl'], ['sme', 'se'], ['smo', 'sm'], ['sna', 'sn'], ['snd', 'sd'], ['som', 'so'], ['sot', 'st'], ['spa', 'es'], ['sqi', 'sq'], ['srd', 'sc'], ['srp', 'sr'], ['ssw', 'ss'], ['sun', 'su'], ['swa', 'sw'], ['swe', 'sv'], ['tah', 'ty'], ['tam', 'ta'], ['tat', 'tt'], ['tel', 'te'], ['tgk', 'tg'], ['tgl', 'tl'], ['tha', 'th'], ['tib', 'bo'], ['tir', 'ti'], ['ton', 'to'], ['tsn', 'tn'], ['tso', 'ts'], ['tuk', 'tk'], ['tur', 'tr'], ['twi', 'tw'], ['uig', 'ug'], ['ukr', 'uk'], ['urd', 'ur'], ['uzb', 'uz'], ['ven', 've'], ['vie', 'vi'], ['vol', 'vo'], ['wel', 'cy'], ['wln', 'wa'], ['wol', 'wo'], ['xho', 'xh'], ['yid', 'yi'], ['yor', 'yo'], ['zha', 'za'], ['zho', 'zh'], ['zul', 'zu']]);

    function pd() {
      this.g = {};
    }

    q = pd.prototype;

    q.push = function (a, b) {
      this.g.hasOwnProperty(a) ? this.g[a].push(b) : this.g[a] = [b];
    };

    q.get = function (a) {
      return (a = this.g[a]) ? a.slice() : null;
    };

    q.remove = function (a, b) {
      a in this.g && (this.g[a] = this.g[a].filter((c) => c != b), this.g[a].length == 0 && delete this.g[a]);
    };

    function qd(a, b) {
      for (const c in a.g) b(c, a.g[c]);
    }

    q.size = function () {
      return Object.keys(this.g).length;
    };

    q.keys = function () {
      return Object.keys(this.g);
    };

    function rd(a) {
      this.h = a;
      this.g = null;
    }

    rd.prototype.S = function (a) {
      const b = this;
      this.stop();
      let c = !0;
      let d = null;

      this.g = function () {
        window.clearTimeout(d);
        c = !1;
      };

      d = window.setTimeout(() => {
        c && b.h();
      }, 1E3 * a);
      return this;
    };

    rd.prototype.stop = function () {
      this.g && (this.g(), this.g = null);
    };

    function P(a) {
      this.h = a;
      this.g = null;
    }

    P.prototype.Hb = function () {
      this.stop();
      this.h();
      return this;
    };

    P.prototype.S = function (a) {
      const b = this;
      this.stop();
      this.g = new rd(() => {
        b.h();
      }).S(a);
      return this;
    };

    P.prototype.Ba = function (a) {
      const b = this;
      this.stop();
      this.g = new rd(() => {
        b.g.S(a);
        b.h();
      }).S(a);
      return this;
    };

    P.prototype.stop = function () {
      this.g && (this.g.stop(), this.g = null);
    };

    M('shaka.util.Timer', P);
    P.prototype.stop = P.prototype.stop;
    P.prototype.tickEvery = P.prototype.Ba;
    P.prototype.tickAfter = P.prototype.S;
    P.prototype.tickNow = P.prototype.Hb;

    function sd() {
      return window.MediaSource && MediaSource.isTypeSupported ? !0 : !1;
    }

    function td(a) {
      return ud().canPlayType(a) != '';
    }

    function vd() {
      return wd('Tizen');
    }

    function xd() {
      return wd('CrKey');
    }

    function yd() {
      return !!navigator.vendor && navigator.vendor.includes('Apple') && !vd();
    }

    function zd() {
      if (!yd()) return null;
      let a = navigator.userAgent.match(/Version\/(\d+)/);
      return a ? parseInt(a[1], 10) : (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/)) ? parseInt(a[1], 10) : null;
    }

    function wd(a) {
      return (navigator.userAgent || '').includes(a);
    }

    function ud() {
      if (Ad) return Ad;
      Bd || (Bd = new P(() => {
        Ad = null;
      }));
      (Ad = document.getElementsByTagName('video')[0] || document.getElementsByTagName('audio')[0]) || (Ad = document.createElement('video'));
      Bd.S(1);
      return Ad;
    }

    var Bd = null;
    var Ad = null;

    function Cd(a, b, c, d, e) {
      let f = a.variants;
      if (b.length || c.length) f = Dd(f, b, c);
      f = Ed(f, d);
      b = Fd(f);
      b = Gd(b);
      const g = Hd(b, e);
      a.variants = a.variants.filter((h) => (Id(h) == g ? !0 : !1));
    }

    function Fd(a) {
      const b = new pd();
      a = r(a);

      for (let c = a.next(); !c.done; c = a.next()) {
        c = c.value;
        const d = Id(c);
        b.push(d, c);
      }

      return b;
    }

    function Gd(a) {
      let b = 0;
      const c = new Map();
      const d = a.size();
      qd(a, (e, f) => {
        for (let g = r(f), h = g.next(); !h.done; h = g.next()) {
          h = h.value;
          let k = h.video;

          if (k && k.width && k.height) {
            k = k.width * k.height * (k.frameRate || 1);
            c.has(k) || c.set(k, new pd());
            const l = c.get(k);
            l.push(e, h);
            l.size() === d && (b = Math.max(b, k));
          }
        }
      });
      return b ? c.get(b) : a;
    }

    function Dd(a, b, c) {
      let d = {};
      b = r(b);

      for (let e = b.next(); !e.done; d = {
        ed: d.ed,
      }, e = b.next()) {
        if (d.ed = e.value, e = a.filter(function (f) {
          return function (g) {
            return g.video && g.video.codecs.startsWith(f.ed);
          };
        }(d)), e.length) {
          a = e;
          break;
        }
      }

      d = {};
      c = r(c);

      for (b = c.next(); !b.done; d = {
        Qc: d.Qc,
      }, b = c.next()) {
        if (d.Qc = b.value, b = a.filter(function (f) {
          return function (g) {
            return g.audio && g.audio.codecs.startsWith(f.Qc);
          };
        }(d)), b.length) {
          a = b;
          break;
        }
      }

      return a;
    }

    function Hd(a, b) {
      for (let c = r(b), d = c.next(); !d.done; d = c.next()) {
        if (d = d.value, d == Jd || d == Kd) {
          if (a = Ld(a, d), a.size() == 1) return a.keys()[0];
        } else if (d == Md) break;
      }

      return Nd(a);
    }

    function Ld(a, b) {
      let c = 0;
      const d = new pd();
      qd(a, (e, f) => {
        for (var g = 0, h = 0, k = r(f), l = k.next(); !l.done; l = k.next()) l = l.value, l.decodingInfos.length && (g += l.decodingInfos[0][b] ? 1 : 0, h++);

        g /= h;
        g > c ? (d.g = {}, d.push(e, f), c = g) : g == c && d.push(e, f);
      });
      return d;
    }

    function Nd(a) {
      let b = '';
      let c = Infinity;
      qd(a, (d, e) => {
        for (var f = 0, g = 0, h = r(e), k = h.next(); !k.done; k = h.next()) f += k.value.bandwidth || 0, ++g;

        f /= g;
        f < c && (b = d, c = f);
      });
      return b;
    }

    function Id(a) {
      let b = '';
      a.video && (b = Xc(a.video.codecs));
      let c = '';
      a.audio && (c = Xc(a.audio.codecs));
      return `${b}-${c}`;
    }

    function Od(a, b, c) {
      a.variants = a.variants.filter((d) => Pd(d, b, c));
    }

    function Pd(a, b, c) {
      function d(f, g, h) {
        return f >= g && f <= h;
      }

      const e = a.video;
      return e && e.width && e.height && (!d(e.width, b.minWidth, Math.min(b.maxWidth, c.width)) || !d(e.height, b.minHeight, Math.min(b.maxHeight, c.height)) || !d(e.width * e.height, b.minPixels, b.maxPixels)) || a && a.video && a.video.frameRate && !d(a.video.frameRate, b.minFrameRate, b.maxFrameRate) || !d(a.bandwidth, b.minBandwidth, b.maxBandwidth) ? !1 : !0;
    }

    function Qd(a, b) {
      return I((c) => {
        if (c.g == 1) return u(c, Rd(b, b.offlineSessionIds.length > 0), 2);
        Sd(a, b);
        Td(b);
        Ud(b);
        z(c);
      });
    }

    function Rd(a, b) {
      return I((c) => {
        if (c.g == 1) return u(c, Vd(a.variants, b), 2);
        a.variants = a.variants.filter((d) => {
          let e = d.video;
          if (wd('Xbox One') && e && (e.width && e.width > 1920 || e.height && e.height > 1080) && e.codecs.includes('avc1.')) return Za(Wd(d)), !1;
          (e = d.decodingInfos.some((f) => f.supported)) || Za(Wd(d));
          return e;
        });
        z(c);
      });
    }

    function Vd(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      return I((t) => {
        if (c = a.some((v) => v.decodingInfos.length)) return t.return();
        d = navigator.mediaCapabilities;
        e = [];

        f = function (v, w) {
          let x;
          return I((y) => {
            if (y.g == 1) return A(y, 2), u(y, d.decodingInfo(w), 4);
            if (y.g != 2) return x = y.h, v.decodingInfos.push(x), va(y, 0);
            C(y);
            JSON.stringify(w);
            z(y);
          });
        };

        g = r(a);

        for (h = g.next(); !h.done; h = g.next()) for (k = h.value, l = Xd(k, b), m = r(l), n = m.next(); !n.done; n = m.next()) p = n.value, e.push(f(k, p));

        return u(t, Promise.all(e), 0);
      });
    }

    function Xd(a, b) {
      const c = a.audio;
      const d = a.video;
      const e = {
        type: 'media-source',
      };

      if (d) {
        var f = d.codecs;

        if (d.codecs.includes(',')) {
          var g = d.codecs.split(',');
          f = vc('video', g);
          f = f == 'vp9' ? 'vp09.00.10.08' : f;
          g = vc('audio', g);
          g = Wc(d.mimeType, g, 'audio');
          e.audio = {
            contentType: g,
            channels: 2,
            bitrate: a.bandwidth || 1,
            samplerate: 1,
            spatialRendering: !1,
          };
        }

        f = Wc(d.mimeType, f == 'vp9' ? 'vp09.00.10.08' : f, 'video');
        e.video = {
          contentType: f,
          width: d.width || 1,
          height: d.height || 1,
          bitrate: d.bandwidth || a.bandwidth || 1,
          framerate: d.frameRate || 1,
        };
      }

      c && (f = c.codecs.toLowerCase() == 'ac-3' && vd() ? 'ec-3' : c.codecs, f = Wc(c.mimeType, f, 'audio'), e.audio = {
        contentType: f,
        channels: c.channelsCount || 2,
        bitrate: c.bandwidth || a.bandwidth || 1,
        samplerate: c.audioSamplingRate || 1,
        spatialRendering: c.spatialAudio,
      });
      let h = (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : []);
      if (!h.length) return [e];
      f = [];
      g = new Map();
      h = r(h);

      for (var k = h.next(); !k.done; k = h.next()) {
        var l = k.value;
        g.get(l.keySystem) || g.set(l.keySystem, []);
        g.get(l.keySystem).push(l);
      }

      h = b ? 'required' : 'optional';
      l = b ? ['persistent-license'] : ['temporary'];

      for (let m = r(g.keys()), n = m.next(); !n.done; n = m.next()) {
        let p = n.value;
        n = _objectSpread({}, e);
        let t = g.get(p);
        p = {
          keySystem: p,
          initDataType: 'cenc',
          persistentState: h,
          distinctiveIdentifier: 'optional',
          sessionTypes: l,
        };
        t = r(t);

        for (k = t.next(); !k.done; k = t.next()) {
          k = k.value;

          if (k.initData && k.initData.length) {
            for (let v = new Set(), w = r(k.initData), x = w.next(); !x.done; x = w.next()) v.add(x.value.initDataType);

            p.initDataType = k.initData[0].initDataType;
          }

          k.distinctiveIdentifierRequired && (p.distinctiveIdentifier = 'required');
          k.persistentStateRequired && (p.persistentState = 'required');
          k.sessionType && (p.sessionTypes = [k.sessionType]);
          c && (p.audio ? p.audio.robustness = p.audio.robustness || k.audioRobustness : p.audio = {
            robustness: k.audioRobustness,
          });
          d && (p.video ? p.video.robustness = p.video.robustness || k.videoRobustness : p.video = {
            robustness: k.videoRobustness,
          });
        }

        n.keySystemConfiguration = p;
        f.push(n);
      }

      return f;
    }

    function Sd(a, b) {
      b.variants = b.variants.filter((c) => {
        const d = c.audio;
        c = c.video;
        return d && a && a.audio && !Yd(d, a.audio) || c && a && a.video && !Yd(c, a.video) ? !1 : !0;
      });
    }

    function Td(a) {
      a.textStreams = a.textStreams.filter((b) => $c(Vc(b.mimeType, b.codecs)));
    }

    function Ud(a) {
      a.imageStreams = a.imageStreams.filter((b) => {
        const c = ['image/svg+xml', 'image/png', 'image/jpeg'];
        (wd('Web0S') || vd() || xd()) && c.push('image/webp');
        return c.includes(b.mimeType);
      });
    }

    function Yd(a, b) {
      return a.mimeType != b.mimeType || a.codecs.split('.')[0] != b.codecs.split('.')[0] ? !1 : !0;
    }

    function Zd(a) {
      const b = a.audio;
      const c = a.video;
      const d = b ? b.codecs : null;
      const e = c ? c.codecs : null;
      const f = [];
      e && f.push(e);
      d && f.push(d);
      let g = [];
      c && g.push(c.mimeType);
      b && g.push(b.mimeType);
      g = g[0] || null;
      let h = [];
      b && h.push(b.kind);
      c && h.push(c.kind);
      h = h[0] || null;
      const k = new Set();
      if (b) for (var l = r(b.roles), m = l.next(); !m.done; m = l.next()) k.add(m.value);
      if (c) for (l = r(c.roles), m = l.next(); !m.done; m = l.next()) k.add(m.value);
      a = {
        id: a.id,
        active: !1,
        type: 'variant',
        bandwidth: a.bandwidth,
        language: a.language,
        label: null,
        kind: h,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: g,
        codecs: f.join(', '),
        audioCodec: d,
        videoCodec: e,
        primary: a.primary,
        roles: Array.from(k),
        audioRoles: null,
        forced: !1,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null,
        originalImageId: null,
      };
      c && (a.videoId = c.id, a.originalVideoId = c.originalId, a.width = c.width || null, a.height = c.height || null, a.frameRate = c.frameRate || null, a.pixelAspectRatio = c.pixelAspectRatio || null, a.videoBandwidth = c.bandwidth || null);
      b && (a.audioId = b.id, a.originalAudioId = b.originalId, a.channelsCount = b.channelsCount, a.audioSamplingRate = b.audioSamplingRate, a.audioBandwidth = b.bandwidth || null, a.label = b.label, a.audioRoles = b.roles);
      return a;
    }

    function $d(a) {
      return {
        id: a.id,
        active: !1,
        type: yc,
        bandwidth: 0,
        language: a.language,
        label: a.label,
        kind: a.kind || null,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: a.mimeType,
        codecs: a.codecs || null,
        audioCodec: null,
        videoCodec: null,
        primary: a.primary,
        roles: a.roles,
        audioRoles: null,
        forced: a.forced,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: a.originalId,
        originalImageId: null,
      };
    }

    function ae(a) {
      return {
        id: a.id,
        active: !1,
        type: 'image',
        bandwidth: a.bandwidth || 0,
        language: '',
        label: null,
        kind: null,
        width: a.width || null,
        height: a.height || null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: a.mimeType,
        codecs: null,
        audioCodec: null,
        videoCodec: null,
        primary: !1,
        roles: [],
        audioRoles: null,
        forced: !1,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: a.tilesLayout || null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null,
        originalImageId: a.originalId,
      };
    }

    function be(a) {
      a.__shaka_id || (a.__shaka_id = ce++);
      return a.__shaka_id;
    }

    function de(a) {
      const b = ee(a);
      b.active = a.mode != 'disabled';
      b.type = 'text';
      b.originalTextId = a.id;
      a.kind == 'captions' && (b.mimeType = 'application/cea-608');
      a.kind && (b.roles = [a.kind]);
      a.kind == 'forced' && (b.forced = !0);
      return b;
    }

    function fe(a) {
      const b = ee(a);
      b.active = a.enabled;
      b.type = 'variant';
      b.originalAudioId = a.id;
      a.kind == 'main' && (b.primary = !0);
      a.kind && (b.roles = [a.kind], b.audioRoles = [a.kind], b.label = a.label);
      return b;
    }

    function ee(a) {
      return {
        id: be(a),
        active: !1,
        type: '',
        bandwidth: 0,
        language: id(a.language),
        label: a.label,
        kind: a.kind,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: null,
        codecs: null,
        audioCodec: null,
        videoCodec: null,
        primary: !1,
        roles: [],
        forced: !1,
        audioRoles: null,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null,
        originalImageId: null,
      };
    }

    function ge(a) {
      return a.allowedByApplication && a.allowedByKeySystem;
    }

    function he(a) {
      return a.filter((b) => ge(b));
    }

    function Ed(a, b) {
      let c = a.filter((g) => g.audio && g.audio.channelsCount);
      const d = new Map();
      c = r(c);

      for (var e = c.next(); !e.done; e = c.next()) {
        e = e.value;
        const f = e.audio.channelsCount;
        d.has(f) || d.set(f, []);
        d.get(f).push(e);
      }

      c = Array.from(d.keys());
      if (c.length == 0) return a;
      e = c.filter((g) => g <= b);
      return e.length ? d.get(Math.max.apply(Math, ja(e))) : d.get(Math.min.apply(Math, ja(c)));
    }

    function ie(a, b, c, d) {
      let e = a;
      const f = a.filter((k) => k.primary);
      f.length && (e = f);
      const g = e.length ? e[0].language : '';
      e = e.filter((k) => k.language == g);

      if (b) {
        const h = od(id(b), a.map((k) => k.language));
        h && (e = a.filter((k) => id(k.language) == h));
      }

      e = e.filter((k) => k.forced == d);

      if (c) {
        if (a = je(e, c), a.length) return a;
      } else if (a = e.filter((k) => k.roles.length == 0), a.length) return a;

      a = e.map((k) => k.roles).reduce(Yb, []);
      return a.length ? je(e, a[0]) : e;
    }

    function je(a, b) {
      return a.filter((c) => c.roles.includes(b));
    }

    function Wd(a) {
      const b = [];
      a.audio && b.push(ke(a.audio));
      a.video && b.push(ke(a.video));
      return b.join(', ');
    }

    function ke(a) {
      return a.type == 'audio' ? `type=audio codecs=${a.codecs} bandwidth=${a.bandwidth} channelsCount=${a.channelsCount} audioSamplingRate=${a.audioSamplingRate}` : a.type == 'video' ? `type=video codecs=${a.codecs} bandwidth=${a.bandwidth} frameRate=${a.frameRate} width=${a.width} height=${a.height}` : 'unexpected stream type';
    }

    var ce = 0;
    var Jd = 'smooth';
    var Kd = 'powerEfficient';
    var Md = 'bandwidth';

    function le() {
      const a = this;
      this.j = null;
      this.i = !1;
      this.g = new Sa();
      navigator.connection && navigator.connection.addEventListener('change', () => {
        if (a.o.useNetworkInformation && a.i) {
          a.g = new Sa();
          const b = a.chooseVariant();
          b && a.j(b);
        }
      });
      this.h = [];
      this.m = 1;
      this.s = !1;
      this.o = this.l = null;
    }

    q = le.prototype;

    q.stop = function () {
      this.j = null;
      this.i = !1;
      this.h = [];
      this.m = 1;
      this.l = null;
    };

    q.init = function (a) {
      this.j = a;
    };

    q.chooseVariant = function () {
      let a = me(this.o.restrictions, this.h);
      const b = this.g.getBandwidthEstimate(ne(this));
      this.h.length && !a.length && (a = me(null, this.h), a = [a[0]]);
      let c = a[0] || null;
      a = r(lb(a));

      for (let d = a.next(); !d.done; d = a.next()) {
        let e = d.value;
        d = e.item;
        const f = isNaN(this.m) ? 1 : Math.abs(this.m);
        e = f * (e.next || {
          bandwidth: Infinity,
        }).bandwidth / this.o.bandwidthUpgradeTarget;
        b >= f * d.bandwidth / this.o.bandwidthDowngradeTarget && b <= e && (c = d);
      }

      this.l = Date.now();
      return c;
    };

    q.enable = function () {
      this.i = !0;
    };

    q.disable = function () {
      this.i = !1;
    };

    q.segmentDownloaded = function (a, b) {
      let c = this.g;

      if (!(b < 16E3)) {
        const d = 8E3 * b / a;
        const e = a / 1E3;
        c.g += b;
        Pa(c.h, e, d);
        Pa(c.i, e, d);
      }

      if (this.l != null && this.i) {
        a: {
          if (!this.s) {
            if (!(this.g.g >= 128E3)) break a;
            this.s = !0;
          } else if (Date.now() - this.l < 1E3 * this.o.switchInterval) break a;

          c = this.chooseVariant();
          this.g.getBandwidthEstimate(ne(this));
          c && this.j(c);
        }
      }
    };

    q.getBandwidthEstimate = function () {
      return this.g.getBandwidthEstimate(this.o.defaultBandwidthEstimate);
    };

    q.setVariants = function (a) {
      this.h = a;
    };

    q.playbackRateChanged = function (a) {
      this.m = a;
    };

    q.configure = function (a) {
      this.o = a;
    };

    function ne(a) {
      let b = a.o.defaultBandwidthEstimate;
      navigator.connection && navigator.connection.downlink && a.o.useNetworkInformation && (b = 1E6 * navigator.connection.downlink);
      return b;
    }

    function me(a, b) {
      a && (b = b.filter((c) => Pd(c, a, {
        width: Infinity,
        height: Infinity,
      })));
      return b.sort((c, d) => c.bandwidth - d.bandwidth);
    }

    M('shaka.abr.SimpleAbrManager', le);
    le.prototype.configure = le.prototype.configure;
    le.prototype.playbackRateChanged = le.prototype.playbackRateChanged;
    le.prototype.setVariants = le.prototype.setVariants;
    le.prototype.getBandwidthEstimate = le.prototype.getBandwidthEstimate;
    le.prototype.segmentDownloaded = le.prototype.segmentDownloaded;
    le.prototype.disable = le.prototype.disable;
    le.prototype.enable = le.prototype.enable;
    le.prototype.chooseVariant = le.prototype.chooseVariant;
    le.prototype.init = le.prototype.init;
    le.prototype.stop = le.prototype.stop;

    function oe(a, b) {
      this.h = a;
      this.g = new Set([a]);
      b = b || [];

      for (let c = r(b), d = c.next(); !d.done; d = c.next()) this.add(d.value);
    }

    oe.prototype.add = function (a) {
      return pe(this.h, a) ? (this.g.add(a), !0) : !1;
    };

    function pe(a, b) {
      let c;

      if (!(c = !!a.audio != !!b.audio || !!a.video != !!b.video || a.language != b.language) && (c = a.audio && b.audio)) {
        c = a.audio;
        var d = b.audio;
        c = !((!(!c.channelsCount || !d.channelsCount || c.channelsCount > 2 || d.channelsCount > 2) || c.channelsCount == d.channelsCount) && qe(c, d) && re(c.roles, d.roles));
      }

      !c && (c = a.video && b.video) && (c = a.video, d = b.video, c = !(qe(c, d) && re(c.roles, d.roles)));
      return c ? !1 : !0;
    }

    oe.prototype.values = function () {
      return this.g.values();
    };

    function qe(a, b) {
      if (a.mimeType != b.mimeType) return !1;
      const c = a.codecs.split(',').map((g) => Xc(g));
      const d = b.codecs.split(',').map((g) => Xc(g));
      if (c.length != d.length) return !1;
      c.sort();
      d.sort();

      for (let e = r(ib(c.length)), f = e.next(); !f.done; f = e.next()) if (f = f.value, c[f] != d[f]) return !1;

      return !0;
    }

    function re(a, b) {
      let c = new Set(a);
      const d = new Set(b);
      c.delete('main');
      d.delete('main');
      if (c.size != d.size) return !1;
      c = r(c);

      for (let e = c.next(); !e.done; e = c.next()) if (!d.has(e.value)) return !1;

      return !0;
    }

    function se(a) {
      this.g = a;
      this.h = new te(a.language, '', a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0, '');
    }

    se.prototype.create = function (a) {
      const b = this;
      const c = a.filter((d) => pe(b.g, d));
      return c.length ? new oe(c[0], c) : this.h.create(a);
    };

    function te(a, b, c, d) {
      this.i = a;
      this.j = b;
      this.g = c;
      this.h = void 0 === d ? '' : d;
    }

    te.prototype.create = function (a) {
      let b = [];
      b = ue(a, this.i);
      let c = a.filter((d) => d.primary);
      b = b.length ? b : c.length ? c : a;
      a = ve(b, this.j);
      a.length && (b = a);
      this.g && (a = Ed(b, this.g), a.length && (b = a));
      this.h && (a = we(b, this.h), a.length && (b = a));
      a = new oe(b[0]);
      b = r(b);

      for (c = b.next(); !c.done; c = b.next()) c = c.value, pe(a.h, c) && a.add(c);

      return a;
    };

    function ue(a, b) {
      const c = id(b);
      const d = od(c, a.map((e) => nd(e)));
      return d ? a.filter((e) => d == nd(e)) : [];
    }

    function ve(a, b) {
      return a.filter((c) => (c.audio ? b ? c.audio.roles.includes(b) : c.audio.roles.length == 0 : !1));
    }

    function we(a, b) {
      return a.filter((c) => (c.audio ? c.audio.label.toLowerCase() == b.toLowerCase() : !1));
    }

    function xe() {
      this.g = ye;
      this.h = new Map().set(ye, 2).set(ze, 1);
    }

    function Ae(a, b, c) {
      a.h.set(ye, c).set(ze, b);
    }

    var ze = 0;
    var ye = 1;

    function Be(a, b) {
      const c = Ce();
      this.l = a.maxAttempts == null ? c.maxAttempts : a.maxAttempts;
      this.j = a.baseDelay == null ? c.baseDelay : a.baseDelay;
      this.s = a.fuzzFactor == null ? c.fuzzFactor : a.fuzzFactor;
      this.m = a.backoffFactor == null ? c.backoffFactor : a.backoffFactor;
      this.g = 0;
      this.h = this.j;
      if (this.i = void 0 === b ? !1 : b) this.g = 1;
    }

    function De(a) {
      let b;
      let c;
      return I((d) => {
        if (d.g == 1) {
          if (a.g >= a.l) if (a.i) a.g = 1, a.h = a.j; else throw new O(2, 7, 1010);
          b = a.g;
          a.g++;
          if (b == 0) return d.return();
          c = a.h * (1 + (2 * Math.random() - 1) * a.s);
          return u(d, new Promise((e) => {
            new P(e).S(c / 1E3);
          }), 2);
        }

        a.h *= a.m;
        z(d);
      });
    }

    function Ce() {
      return {
        maxAttempts: 2,
        baseDelay: 1E3,
        backoffFactor: 2,
        fuzzFactor: 0.5,
        timeout: 3E4,
        stallTimeout: 5E3,
        connectionTimeout: 1E4,
      };
    }

    function Ee(a, b) {
      this.promise = a;
      this.i = b;
      this.g = !1;
    }

    function Fe(a) {
      return new Ee(Promise.reject(a), () => Promise.resolve());
    }

    function Ge() {
      const a = Promise.reject(new O(2, 7, 7001));
      a.catch(() => {});
      return new Ee(a, () => Promise.resolve());
    }

    function He(a) {
      return new Ee(Promise.resolve(a), () => Promise.resolve());
    }

    function Ie(a) {
      return new Ee(a, () => a.catch(() => {}));
    }

    Ee.prototype.abort = function () {
      this.g = !0;
      return this.i();
    };

    function Je(a) {
      return new Ee(Promise.all(a.map((b) => b.promise)), () => Promise.all(a.map((b) => b.abort())));
    }

    Ee.prototype.finally = function (a) {
      this.promise.then(() => a(!0), () => a(!1));
      return this;
    };

    Ee.prototype.ba = function (a, b) {
      function c(h) {
        return function (k) {
          if (e.g && h) f.reject(g); else {
            const l = h ? a : b;
            l ? d = Ke(l, k, f) : (h ? f.resolve : f.reject)(k);
          }
        };
      }

      function d() {
        f.reject(g);
        return e.abort();
      }

      var e = this;
      var f = new Ac();
      var g = new O(2, 7, 7001);
      this.promise.then(c(!0), c(!1));
      return new Ee(f, () => d());
    };

    function Ke(a, b, c) {
      try {
        const d = a(b);
        if (d && d.promise && d.abort) {
          return c.resolve(d.promise), function () {
            return d.abort();
          };
        }
        c.resolve(d);
        return function () {
          return Promise.resolve(d).then(() => {}, () => {});
        };
      } catch (e) {
        return c.reject(e), function () {
          return Promise.resolve();
        };
      }
    }

    M('shaka.util.AbortableOperation', Ee);
    Ee.prototype.chain = Ee.prototype.ba;
    Ee.prototype.finally = Ee.prototype.finally;
    Ee.all = Je;
    Ee.prototype.abort = Ee.prototype.abort;
    Ee.notAbortable = Ie;
    Ee.completed = He;
    Ee.aborted = Ge;
    Ee.failed = Fe;

    function Q(a, b) {
      b = void 0 === b ? {} : b;

      for (const c in b) {
        Object.defineProperty(this, c, {
          value: b[c],
          writable: !0,
          enumerable: !0,
        });
      }

      this.defaultPrevented = this.cancelable = this.bubbles = !1;
      this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
      this.type = a;
      this.isTrusted = !1;
      this.target = this.currentTarget = null;
      this.g = !1;
    }

    Q.prototype.preventDefault = function () {
      this.cancelable && (this.defaultPrevented = !0);
    };

    Q.prototype.stopImmediatePropagation = function () {
      this.g = !0;
    };

    Q.prototype.stopPropagation = function () {};

    M('shaka.util.FakeEvent', Q);

    function Le() {
      this.qc = new pd();
      this.pc = this;
    }

    Le.prototype.addEventListener = function (a, b) {
      this.qc.push(a, b);
    };

    Le.prototype.removeEventListener = function (a, b) {
      this.qc.remove(a, b);
    };

    Le.prototype.dispatchEvent = function (a) {
      let b = this.qc.get(a.type) || [];
      let c = this.qc.get('All');
      c && (b = b.concat(c));
      b = r(b);

      for (c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        a.target = this.pc;
        a.currentTarget = this.pc;

        try {
          c.handleEvent ? c.handleEvent(a) : c.call(this, a);
        } catch (d) {}

        if (a.g) break;
      }

      return a.defaultPrevented;
    };

    function Me(a) {
      function b(d) {
        switch (typeof d) {
          case 'undefined':
          case 'boolean':
          case 'number':
          case 'string':
          case 'symbol':
          case 'function':
            return d;

          default:
            if (!d || d.buffer && d.buffer.constructor == ArrayBuffer) return d;
            if (c.has(d)) return null;
            var e = d.constructor == Array;
            if (d.constructor != Object && !e) return null;
            c.add(d);
            var f = e ? [] : {};
            var g;

            for (g in d) f[g] = b(d[g]);

            e && (f.length = d.length);
            return f;
        }
      }

      var c = new Set();
      return b(a);
    }

    function Ne(a) {
      const b = {};
      let c;

      for (c in a) b[c] = a[c];

      return b;
    }

    function Oe() {
      this.g = [];
    }

    function Pe(a, b) {
      a.g.push(b.finally(() => {
        nb(a.g, b);
      }));
    }

    Oe.prototype.destroy = function () {
      for (var a = [], b = r(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.promise.catch(() => {}), a.push(c.abort());

      this.g = [];
      return Promise.all(a);
    };

    function Qe(a) {
      Le.call(this);
      this.i = !1;
      this.l = new Oe();
      this.g = new Set();
      this.h = new Set();
      this.j = a || null;
      this.m = !1;
    }

    qa(Qe, Le);
    q = Qe.prototype;

    q.Nd = function (a) {
      this.m = a;
    };

    function Re(a, b, c, d) {
      c = c || Se;
      const e = Te[a];
      if (!e || c >= e.priority) {
        Te[a] = {
          priority: c,
          Cf: b,
          Ef: void 0 === d ? !1 : d,
        };
      }
    }

    q.Ff = function (a) {
      this.g.add(a);
    };

    q.Wf = function (a) {
      this.g.delete(a);
    };

    q.Ke = function () {
      this.g.clear();
    };

    q.Gf = function (a) {
      this.h.add(a);
    };

    q.Xf = function (a) {
      this.h.delete(a);
    };

    q.Le = function () {
      this.h.clear();
    };

    function Ue(a, b, c) {
      return {
        uris: a,
        method: 'GET',
        body: null,
        headers: {},
        allowCrossSiteCredentials: !1,
        retryParameters: b,
        licenseRequestType: null,
        sessionId: null,
        streamDataCallback: void 0 === c ? null : c,
      };
    }

    q.destroy = function () {
      this.i = !0;
      this.g.clear();
      this.h.clear();
      return this.l.destroy();
    };

    q.request = function (a, b) {
      const c = this;
      const d = new Ve();

      if (this.i) {
        var e = Promise.reject(new O(2, 7, 7001));
        e.catch(() => {});
        return new We(e, () => Promise.resolve(), d);
      }

      b.method = b.method || 'GET';
      b.headers = b.headers || {};
      b.retryParameters = b.retryParameters ? Me(b.retryParameters) : Ce();
      b.uris = Me(b.uris);
      e = Xe(this, a, b);
      const f = e.ba(() => Ye(c, a, b, new Be(b.retryParameters, !1), 0, null, d));
      const g = f.ba((n) => Ze(c, a, n));
      const h = Date.now();
      let k = 0;
      e.promise.then(() => {
        k = Date.now() - h;
      }, () => {});
      let l = 0;
      f.promise.then(() => {
        l = Date.now();
      }, () => {});
      const m = g.ba((n) => {
        const p = Date.now() - l;
        const t = n.response;
        t.timeMs += k;
        t.timeMs += p;
        n.rf || !c.j || t.fromCache || a != $e || c.j(t.timeMs, t.data.byteLength);
        return t;
      }, (n) => {
        n && (n.severity = 2);
        throw n;
      });
      e = new We(m.promise, () => m.abort(), d);
      Pe(this.l, e);
      return e;
    };

    function Xe(a, b, c) {
      let d = He(void 0);
      let e = {};
      a = r(a.g);

      for (let f = a.next(); !f.done; e = {
        Zc: e.Zc,
      }, f = a.next()) {
        e.Zc = f.value, d = d.ba(function (g) {
          return function () {
            c.body && (c.body = Qb(c.body));
            return g.Zc(b, c);
          };
        }(e));
      }

      return d.ba(void 0, (g) => {
        if (g instanceof O && g.code == 7001) throw g;
        throw new O(2, 1, 1006, g);
      });
    }

    function Ye(a, b, c, d, e, f, g) {
      a.m && (c.uris[e] = c.uris[e].replace('http://', 'https://'));
      const h = new gc(c.uris[e]);
      let k = h.Da;
      let l = !1;
      k || (k = location.protocol, k = k.slice(0, -1), hc(h, k), c.uris[e] = h.toString());
      k = k.toLowerCase();
      const m = (k = Te[k]) ? k.Cf : null;
      if (!m) return Fe(new O(2, 1, 1E3, h));
      const n = k.Ef;
      let p = null;
      let t = null;
      let v = !1;
      let w;
      return Ie(De(d)).ba(() => {
        if (a.i) return Ge();
        w = Date.now();
        const x = m(c.uris[e], c, b, (D, B, F) => {
          p && p.stop();
          t && t.S(E / 1E3);
          a.j && b == $e && (a.j(D, B), l = !0, g.g = F);
        });
        if (!n) return x;
        const y = c.retryParameters.connectionTimeout;
        y && (p = new P(() => {
          v = !0;
          x.abort();
        }), p.S(y / 1E3));
        var E = c.retryParameters.stallTimeout;
        E && (t = new P(() => {
          v = !0;
          x.abort();
        }));
        return x;
      }).ba((x) => {
        p && p.stop();
        t && t.stop();
        void 0 == x.timeMs && (x.timeMs = Date.now() - w);
        return {
          response: x,
          rf: l,
        };
      }, (x) => {
        p && p.stop();
        t && t.stop();
        if (a.i) return Ge();
        v && (x = new O(1, 1, 1003, c.uris[e], b));

        if (x instanceof O) {
          if (x.code == 7001) throw x;
          if (x.code == 1010) throw f;

          if (x.severity == 1) {
            const y = new Q('retry', {
              error: x,
            });
            a.dispatchEvent(y);
            e = (e + 1) % c.uris.length;
            return Ye(a, b, c, d, e, x, g);
          }
        }

        throw x;
      });
    }

    function Ze(a, b, c) {
      let d = He(void 0);
      let e = {};
      a = r(a.h);

      for (let f = a.next(); !f.done; e = {
        $c: e.$c,
      }, f = a.next()) {
        e.$c = f.value, d = d.ba(function (g) {
          return function () {
            const h = c.response;
            h.data && (h.data = Qb(h.data));
            return g.$c(b, h);
          };
        }(e));
      }

      return d.ba(() => c, (g) => {
        let h = 2;

        if (g instanceof O) {
          if (g.code == 7001) throw g;
          h = g.severity;
        }

        throw new O(h, 1, 1007, g);
      });
    }

    M('shaka.net.NetworkingEngine', Qe);
    Qe.prototype.request = Qe.prototype.request;
    Qe.prototype.destroy = Qe.prototype.destroy;
    Qe.makeRequest = Ue;

    Qe.defaultRetryParameters = function () {
      return Ce();
    };

    Qe.prototype.clearAllResponseFilters = Qe.prototype.Le;
    Qe.prototype.unregisterResponseFilter = Qe.prototype.Xf;
    Qe.prototype.registerResponseFilter = Qe.prototype.Gf;
    Qe.prototype.clearAllRequestFilters = Qe.prototype.Ke;
    Qe.prototype.unregisterRequestFilter = Qe.prototype.Wf;
    Qe.prototype.registerRequestFilter = Qe.prototype.Ff;

    Qe.unregisterScheme = function (a) {
      delete Te[a];
    };

    Qe.registerScheme = Re;
    Qe.prototype.setForceHTTPS = Qe.prototype.Nd;

    function Ve() {
      this.g = 0;
    }

    Qe.NumBytesRemainingClass = Ve;

    function We(a, b, c) {
      Ee.call(this, a, b);
      this.h = c;
    }

    qa(We, Ee);
    Qe.PendingRequest = We;
    var $e = 1;
    Qe.RequestType = {
      MANIFEST: 0,
      SEGMENT: $e,
      LICENSE: 2,
      APP: 3,
      TIMING: 4,
      SERVER_CERTIFICATE: 5,
    };
    var Se = 3;
    Qe.PluginPriority = {
      FALLBACK: 1,
      PREFERRED: 2,
      APPLICATION: Se,
    };
    var Te = {};

    function af(a) {
      this.g = !1;
      this.h = new Ac();
      this.i = a;
    }

    af.prototype.destroy = function () {
      const a = this;
      if (this.g) return this.h;
      this.g = !0;
      return this.i().then(() => {
        a.h.resolve();
      }, () => {
        a.h.resolve();
      });
    };

    function bf(a, b) {
      if (a.g) {
        if (b instanceof O && b.code == 7003) throw b;
        throw new O(2, 7, 7003, b);
      }
    }

    function cf() {
      this.g = new pd();
    }

    q = cf.prototype;

    q.release = function () {
      this.ob();
      this.g = null;
    };

    q.A = function (a, b, c, d) {
      this.g && (a = new df(a, b, c, d), this.g.push(b, a));
    };

    q.va = function (a, b, c, d) {
      function e(g) {
        f.Ca(a, b, e);
        c(g);
      }

      var f = this;
      this.A(a, b, e, d);
    };

    q.Ca = function (a, b, c) {
      if (this.g) {
        let d = this.g.get(b) || [];
        d = r(d);

        for (let e = d.next(); !e.done; e = d.next()) e = e.value, e.target != a || c != e.listener && c || (e.Ca(), this.g.remove(b, e));
      }
    };

    q.ob = function () {
      if (this.g) {
        let a = this.g;
        let b = [];
        let c;

        for (c in a.g) b.push.apply(b, ja(a.g[c]));

        a = r(b);

        for (b = a.next(); !b.done; b = a.next()) b.value.Ca();

        this.g.g = {};
      }
    };

    M('shaka.util.EventManager', cf);
    cf.prototype.removeAll = cf.prototype.ob;
    cf.prototype.unlisten = cf.prototype.Ca;
    cf.prototype.listenOnce = cf.prototype.va;
    cf.prototype.listen = cf.prototype.A;
    cf.prototype.release = cf.prototype.release;

    function df(a, b, c, d) {
      this.target = a;
      this.type = b;
      this.listener = c;
      this.g = ef(a, d);
      this.target.addEventListener(b, c, this.g);
    }

    df.prototype.Ca = function () {
      this.target.removeEventListener(this.type, this.listener, this.g);
      this.listener = this.target = null;
      this.g = !1;
    };

    function ef(a, b) {
      if (void 0 == b) return !1;
      if (typeof b === 'boolean') return b;
      const c = new Set(['passive', 'capture']);
      Object.keys(b).filter((d) => !c.has(d));
      return ff(a) ? b : b.capture || !1;
    }

    function ff(a) {
      let b = gf;

      if (void 0 == b) {
        b = !1;

        try {
          const c = {};
          let d = {
            get() {
              b = !0;
              return !1;
            },

          };
          Object.defineProperty(c, 'passive', d);
          Object.defineProperty(c, 'capture', d);

          d = function () {};

          a.addEventListener('test', d, c);
          a.removeEventListener('test', d, c);
        } catch (e) {
          b = !1;
        }

        gf = b;
      }

      return b || !1;
    }

    var gf = void 0;

    function hf() {}

    function jf(a) {
      a = Gc(a);
      return new gc(a).Ga;
    }

    function kf(a, b, c) {
      function d(h) {
        Sb(f).setUint32(g, h.byteLength, !0);
        g += 4;
        f.set(Ob(h), g);
        g += h.byteLength;
      }

      if (!c || !c.byteLength) throw new O(2, 6, 6015);
      let e;
      typeof b === 'string' ? e = Ic(b, !0) : e = b;
      a = Gc(a);
      a = Ic(a, !0);
      var f = new Uint8Array(12 + a.byteLength + e.byteLength + c.byteLength);
      var g = 0;
      d(a);
      d(e);
      d(c);
      return f;
    }

    M('shaka.util.FairPlayUtils', hf);
    hf.initDataTransform = kf;
    hf.defaultGetContentId = jf;

    function lf(a) {
      for (var b = new Map(), c = r(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, a[d]);

      return b;
    }

    function mf(a) {
      const b = {};
      a.forEach((c, d) => {
        b[d] = c;
      });
      return b;
    }

    function of(a, b) {
      if (a || b) {
        if (a && !b || b && !a) return !1;
      } else return !0;

      if (a.size != b.size) return !1;

      for (let c = r(a), d = c.next(); !d.done; d = c.next()) {
        let e = r(d.value);
        d = e.next().value;
        e = e.next().value;
        if (!b.has(d)) return !1;
        d = b.get(d);
        if (d != e || void 0 == d) return !1;
      }

      return !0;
    }

    function pf(a, b) {
      const c = this;
      b = void 0 === b ? 1 : b;
      this.C = a;
      this.D = new Set();
      this.g = this.m = null;
      this.pa = this.T = !1;
      this.F = 0;
      this.i = null;
      this.h = new cf();
      this.j = new Map();
      this.u = [];
      this.s = new Ac();
      this.o = null;

      this.l = function (d) {
        c.s.reject(d);
        a.onError(d);
      };

      this.qa = new Map();
      this.Y = new Map();
      this.N = new P(() => rf(c));
      this.J = !1;
      this.H = [];
      this.L = !1;
      this.da = new P(() => {
        sf(c);
      }).Ba(b);
      this.s.catch(() => {});
      this.I = new af(() => tf(c));
    }

    q = pf.prototype;

    q.destroy = function () {
      return this.I.destroy();
    };

    function tf(a) {
      return I((b) => {
        switch (b.g) {
          case 1:
            return a.h.release(), a.h = null, a.s.reject(), a.da.stop(), a.da = null, a.N.stop(), a.N = null, u(b, uf(a), 2);

          case 2:
            if (!a.g) {
              b.v(3);
              break;
            }

            A(b, 4);
            return u(b, a.g.setMediaKeys(null), 6);

          case 6:
            va(b, 5);
            break;

          case 4:
            C(b);

          case 5:
            a.g = null;

          case 3:
            a.i = null, a.D.clear(), a.m = null, a.u = [], a.o = null, a.l = function () {}, a.C = null, z(b);
        }
      });
    }

    q.configure = function (a) {
      this.o = a;
    };

    function vf(a, b, c) {
      a.pa = !0;
      a.u = [];
      a.J = c;
      return wf(a, b);
    }

    function xf(a, b, c) {
      a.u = c;
      a.J = c.length > 0;
      return wf(a, b);
    }

    function yf(a, b, c, d, e, f) {
      const g = new Map();
      e = {
        audioCapabilities: e,
        videoCapabilities: f,
        distinctiveIdentifier: 'optional',
        persistentState: 'required',
        sessionTypes: ['persistent-license'],
        label: b,
      };
      e.drmInfos = [{
        keySystem: b,
        licenseServerUri: c,
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !0,
        audioRobustness: '',
        videoRobustness: '',
        serverCertificate: d,
        serverCertificateUri: '',
        initData: null,
        keyIds: null,
      }];
      g.set(b, e);
      return zf(a, g, []);
    }

    function wf(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      return I((x) => {
        if (x.g == 1) {
          if (c = Af(a)) for (d = r(b), e = d.next(); !e.done; e = d.next()) f = e.value, f.video && (f.video.drmInfos = [c]), f.audio && (f.audio.drmInfos = [c]);
          g = b.some((y) => (y.video && y.video.drmInfos.length || y.audio && y.audio.drmInfos.length ? !0 : !1));
          g || (h = lf(a.o.servers), Bf(b, h));
          k = r(b);

          for (e = k.next(); !e.done; e = k.next()) for (l = e.value, m = Cf(l), n = r(m), p = n.next(); !p.done; p = n.next()) t = p.value, Df(t, lf(a.o.servers), lf(a.o.advanced || {}));

          return u(x, Vd(b, a.J), 2);
        }

        v = g || Object.keys(a.o.servers).length;
        if (!v) return a.T = !0, x.return(Promise.resolve());
        w = zf(a, void 0, b);
        return x.return(g ? w : w.catch(() => {}));
      });
    }

    q.Pb = function (a) {
      const b = this;
      let c;
      let d;
      return I((e) => {
        if (e.g == 1) {
          if (!b.m) {
            return b.h.va(a, 'encrypted', () => {
              b.l(new O(2, 6, 6010));
            }), e.return();
          }
          b.g = a;
          b.h.va(b.g, 'play', () => {
            for (let f = r(b.H), g = f.next(); !g.done; g = f.next()) Ef(b, g.value);

            b.L = !0;
            b.H = [];
          });
          'webkitCurrentPlaybackTargetIsWireless' in b.g && b.h.A(b.g, 'webkitcurrentplaybacktargetiswirelesschanged', () => uf(b));
          c = b.g.setMediaKeys(b.m);
          c = c.catch((f) => Promise.reject(new O(2, 6, 6003, f.message)));
          return u(e, c, 2);
        }

        bf(b.I);
        Ff(b);
        b.i.initData.length || b.u.length || (d = function (f) {
          return Gf(b, f.initDataType, Ob(f.initData));
        }, b.h.A(b.g, 'encrypted', d));
        z(e);
      });
    };

    function Hf(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      return I((g) => {
        switch (g.g) {
          case 1:
            if (!a.m || !a.i) return g.return();

            if (!a.i.serverCertificateUri || a.i.serverCertificate && a.i.serverCertificate.length) {
              g.v(2);
              break;
            }

            b = Ue([a.i.serverCertificateUri], a.o.retryParameters);
            A(g, 3);
            c = a.C.lb.request(5, b);
            return u(g, c.promise, 5);

          case 5:
            d = g.h;
            a.i.serverCertificate = Ob(d.data);
            va(g, 4);
            break;

          case 3:
            throw e = C(g), new O(2, 6, 6017, e);

          case 4:
            if (a.I.g) return g.return();

          case 2:
            if (!a.i.serverCertificate || !a.i.serverCertificate.length) return g.return();
            A(g, 6);
            return u(g, a.m.setServerCertificate(a.i.serverCertificate), 8);

          case 8:
            va(g, 0);
            break;

          case 6:
            throw f = C(g), new O(2, 6, 6004, f.message);
        }
      });
    }

    function If(a, b) {
      let c;
      let d;
      let e;
      return I((f) => {
        if (f.g == 1) return u(f, Jf(a, b), 2);
        c = f.h;
        if (!c) return f.return();
        d = [];
        if (e = a.j.get(c)) e.Ka = new Ac(), d.push(e.Ka);
        d.push(c.remove());
        return u(f, Promise.all(d), 0);
      });
    }

    function Ff(a) {
      for (var b = (a.i ? a.i.initData : []) || [], c = r(b), d = c.next(); !d.done; d = c.next()) d = d.value, Gf(a, d.initDataType, d.initData);

      c = r(a.u);

      for (d = c.next(); !d.done; d = c.next()) Jf(a, d.value);

      b.length || a.u.length || a.s.resolve();
      return a.s;
    }

    function Gf(a, b, c) {
      let d = a.j.values();
      d = r(d);

      for (let e = d.next(); !e.done; e = d.next()) if (Mb(c, e.value.initData) && !wd('Tizen 2')) return;

      Kf(a, b, c, a.i.sessionType);
    }

    function Lf(a) {
      return a ? !!a.match(/^com\.(microsoft|chromecast)\.playready/) : !1;
    }

    function Mf(a) {
      a = a.j.keys();
      a = fb(a, (b) => b.sessionId);
      return Array.from(a);
    }

    q.Tb = function () {
      let a = Infinity;
      let b = this.j.keys();
      b = r(b);

      for (let c = b.next(); !c.done; c = b.next()) c = c.value, isNaN(c.expiration) || (a = Math.min(a, c.expiration));

      return a;
    };

    q.zc = function () {
      return mf(this.Y);
    };

    function zf(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      return I((x) => {
        switch (x.g) {
          case 1:
            d = new Map();

            if (c.length) {
              e = Nf(a, c, d);
              x.v(2);
              break;
            }

            return u(x, Of(a, b), 3);

          case 3:
            e = x.h;

          case 2:
            f = e;
            if (!f) throw new O(2, 6, 6001);
            bf(a.I);
            A(x, 4);
            a.D.clear();
            g = f.getConfiguration();
            h = g.audioCapabilities || [];
            k = g.videoCapabilities || [];
            l = r(h);

            for (m = l.next(); !m.done; m = l.next()) n = m.value, a.D.add(n.contentType.toLowerCase());

            p = r(k);

            for (m = p.next(); !m.done; m = p.next()) t = m.value, a.D.add(t.contentType.toLowerCase());

            if (c.length) {
              var y = f.keySystem;
              var E = d.get(f.keySystem);
              var D = [];
              var B = [];
              var F = [];
              var G = [];
              var H = new Set();
              Pf(E, D, F, B, G, H);
              const L = a.J ? 'persistent-license' : 'temporary';
              y = {
                keySystem: y,
                licenseServerUri: D[0],
                distinctiveIdentifierRequired: E[0].distinctiveIdentifierRequired,
                persistentStateRequired: E[0].persistentStateRequired,
                sessionType: E[0].sessionType || L,
                audioRobustness: E[0].audioRobustness || '',
                videoRobustness: E[0].videoRobustness || '',
                serverCertificate: F[0],
                serverCertificateUri: B[0],
                initData: G,
                keyIds: H,
              };
              E = r(E);

              for (D = E.next(); !D.done; D = E.next()) D = D.value, D.distinctiveIdentifierRequired && (y.distinctiveIdentifierRequired = D.distinctiveIdentifierRequired), D.persistentStateRequired && (y.persistentStateRequired = D.persistentStateRequired);

              E = y;
            } else {
              E = f.keySystem, y = b.get(f.keySystem), D = [], B = [], F = [], G = [], H = new Set(), Pf(y.drmInfos, D, F, B, G, H), E = {
                keySystem: E,
                licenseServerUri: D[0],
                distinctiveIdentifierRequired: y.distinctiveIdentifier == 'required',
                persistentStateRequired: y.persistentState == 'required',
                sessionType: y.sessionTypes[0] || 'temporary',
                audioRobustness: (y.audioCapabilities ? y.audioCapabilities[0].robustness : '') || '',
                videoRobustness: (y.videoCapabilities ? y.videoCapabilities[0].robustness : '') || '',
                serverCertificate: F[0],
                serverCertificateUri: B[0],
                initData: G,
                keyIds: H,
              };
            }

            a.i = E;
            if (!a.i.licenseServerUri) throw new O(2, 6, 6012, a.i.keySystem);
            return u(x, f.createMediaKeys(), 6);

          case 6:
            return v = x.h, bf(a.I), a.m = v, a.T = !0, u(x, Hf(a), 7);

          case 7:
            bf(a.I);
            va(x, 0);
            break;

          case 4:
            w = C(x);
            bf(a.I, w);
            a.i = null;
            a.D.clear();
            if (w instanceof O) throw w;
            throw new O(2, 6, 6002, w.message);
        }
      });
    }

    function Nf(a, b, c) {
      for (var d = r(b), e = d.next(); !e.done; e = d.next()) {
        var f = r(Cf(e.value));

        for (e = f.next(); !e.done; e = f.next()) e = e.value, c.has(e.keySystem) || c.set(e.keySystem, []), c.get(e.keySystem).push(e);
      }

      if (c.size == 1 && c.has('')) throw new O(2, 6, 6E3);
      d = {};
      a = r(a.o.preferredKeySystems);

      for (e = a.next(); !e.done; d = {
        Xc: d.Xc,
      }, e = a.next()) {
        for (d.Xc = e.value, f = r(b), e = f.next(); !e.done; e = f.next()) {
          if (e = e.value.decodingInfos.find(function (l) {
            return function (m) {
              return m.supported && m.keySystemAccess != null && m.keySystemAccess.keySystem == l.Xc;
            };
          }(d))) return e.keySystemAccess;
        }
      }

      a = r([!0, !1]);

      for (e = a.next(); !e.done; e = a.next()) {
        for (d = e.value, f = r(b), e = f.next(); !e.done; e = f.next()) {
          const g = r(e.value.decodingInfos);

          for (e = g.next(); !e.done; e = g.next()) {
            const h = e.value;

            if (h.supported && h.keySystemAccess) {
              e = c.get(h.keySystemAccess.keySystem);
              const k = r(e);

              for (e = k.next(); !e.done; e = k.next()) if (!!e.value.licenseServerUri == d) return h.keySystemAccess;
            }
          }
        }
      }

      return null;
    }

    function Of(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      return I((y) => {
        switch (y.g) {
          case 1:
            if (b.size == 1 && b.has('')) throw new O(2, 6, 6E3);
            d = r(b.values());

            for (e = d.next(); !e.done; e = d.next()) f = e.value, f.audioCapabilities.length == 0 && delete f.audioCapabilities, f.videoCapabilities.length == 0 && delete f.videoCapabilities;

            g = r(a.o.preferredKeySystems);
            h = g.next();

          case 2:
            if (h.done) {
              y.v(4);
              break;
            }

            k = h.value;

            if (!b.has(k)) {
              y.v(3);
              break;
            }

            l = b.get(k);
            A(y, 6);
            return u(y, navigator.requestMediaKeySystemAccess(k, [l]), 8);

          case 8:
            return c = y.h, y.return(c);

          case 6:
            C(y);

          case 7:
            bf(a.I);

          case 3:
            h = g.next();
            y.v(2);
            break;

          case 4:
            m = r([!0, !1]), n = m.next();

          case 9:
            if (n.done) {
              y.v(11);
              break;
            }

            p = n.value;
            t = r(b.keys());
            h = t.next();

          case 12:
            if (h.done) {
              n = m.next();
              y.v(9);
              break;
            }

            v = h.value;
            w = b.get(v);
            x = w.drmInfos.some((E) => !!E.licenseServerUri);

            if (x != p) {
              y.v(13);
              break;
            }

            A(y, 15);
            return u(y, navigator.requestMediaKeySystemAccess(v, [w]), 17);

          case 17:
            return c = y.h, y.return(c);

          case 15:
            C(y);

          case 16:
            bf(a.I);

          case 13:
            h = t.next();
            y.v(12);
            break;

          case 11:
            return y.return(c);
        }
      });
    }

    function Af(a) {
      a = lf(a.o.clearKeys);
      if (a.size == 0) return null;
      const b = [];
      const c = [];
      a.forEach((e, f) => {
        let g = Nc(f);
        const h = Nc(e);
        g = {
          kty: 'oct',
          kid: Lc(g, !1),
          k: Lc(h, !1),
        };
        b.push(g);
        c.push(g.kid);
      });
      a = JSON.stringify({
        keys: b,
      });
      let d = JSON.stringify({
        kids: c,
      });
      d = [{
        initData: Ob(Hc(d)),
        initDataType: 'keyids',
      }];
      return {
        keySystem: 'org.w3.clearkey',
        licenseServerUri: `data:application/json;base64,${window.btoa(a)}`,
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: '',
        videoRobustness: '',
        serverCertificate: null,
        serverCertificateUri: '',
        sessionType: '',
        initData: d,
        keyIds: new Set(c),
      };
    }

    function Jf(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        switch (h.g) {
          case 1:
            try {
              c = a.m.createSession('persistent-license');
            } catch (k) {
              return d = new O(2, 6, 6005, k.message), a.l(d), h.return(Promise.reject(d));
            }

            a.h.A(c, 'message', (k) => {
              a.g && a.o.delayLicenseRequestUntilPlayed && a.g.paused && !a.L ? a.H.push(k) : Ef(a, k);
            });
            a.h.A(c, 'keystatuseschange', (k) => Qf(a, k));
            e = {
              initData: null,
              loaded: !1,
              Dd: Infinity,
              Ka: null,
              type: 'persistent-license',
            };
            a.j.set(c, e);
            A(h, 2);
            return u(h, c.load(b), 4);

          case 4:
            f = h.h;
            bf(a.I);
            if (!f) return a.j.delete(c), a.l(new O(2, 6, 6013)), h.return(Promise.resolve());
            e.loaded = !0;
            Rf(a) && a.s.resolve();
            return h.return(c);

          case 2:
            g = C(h), bf(a.I, g), a.j.delete(c), a.l(new O(2, 6, 6005, g.message));

          case 3:
            return h.return(Promise.resolve());
        }
      });
    }

    function Kf(a, b, c, d) {
      try {
        var e = a.m.createSession(d);
      } catch (f) {
        a.l(new O(2, 6, 6005, f.message));
        return;
      }

      a.h.A(e, 'message', (f) => {
        a.g && a.o.delayLicenseRequestUntilPlayed && a.g.paused && !a.L ? a.H.push(f) : Ef(a, f);
      });
      a.h.A(e, 'keystatuseschange', (f) => Qf(a, f));
      a.j.set(e, {
        initData: c,
        loaded: !1,
        Dd: Infinity,
        Ka: null,
        type: d,
      });

      try {
        c = a.o.initDataTransform(c, b, a.i);
      } catch (f) {
        b = f;
        f instanceof O || (b = new O(2, 6, 6016, f));
        a.l(b);
        return;
      }

      a.o.logLicenseExchange && Lc(c);
      e.generateRequest(b, c).catch((f) => {
        if (!a.I.g) {
          a.j.delete(e);
          const g = f.errorCode;

          if (g && g.systemCode) {
            var h = g.systemCode;
            h < 0 && (h += Math.pow(2, 32));
            h = `0x${h.toString(16)}`;
          }

          a.l(new O(2, 6, 6006, f.message, f, h));
        }
      });
    }

    function Sf(a, b, c) {
      b == 'skd' && (b = c.serverCertificate, c = jf(a), a = kf(a, c, b));
      return a;
    }

    function Ef(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      I((x) => {
        switch (x.g) {
          case 1:
            return c = b.target, a.o.logLicenseExchange && Lc(b.message), d = a.j.get(c), e = a.i.licenseServerUri, f = a.o.advanced[a.i.keySystem], b.messageType == 'individualization-request' && f && f.individualizationServer && (e = f.individualizationServer), g = Ue([e], a.o.retryParameters), g.body = b.message, g.method = 'POST', g.licenseRequestType = b.messageType, g.sessionId = c.sessionId, Lf(a.i.keySystem) && Tf(g), h = Date.now(), A(x, 2), l = a.C.lb.request(2, g), u(x, l.promise, 4);

          case 4:
            k = x.h;
            va(x, 3);
            break;

          case 2:
            return m = C(x), n = new O(2, 6, 6007, m), a.l(n), d && d.Ka && d.Ka.reject(n), x.return();

          case 3:
            if (a.I.g) return x.return();
            a.F += (Date.now() - h) / 1E3;
            a.o.logLicenseExchange && Lc(k.data);
            A(x, 5);
            return u(x, c.update(k.data), 7);

          case 7:
            va(x, 6);
            break;

          case 5:
            return p = C(x), t = new O(2, 6, 6008, p.message), a.l(t), d && d.Ka && d.Ka.reject(t), x.return();

          case 6:
            v = new Q('drmsessionupdate'), a.C.onEvent(v), d && (d.Ka && d.Ka.resolve(), w = new P(() => {
              d.loaded = !0;
              Rf(a) && a.s.resolve();
            }), w.S(Uf)), z(x);
        }
      });
    }

    function Tf(a) {
      let b = Ec(a.body, !0, !0);

      if (b.includes('PlayReadyKeyMessage')) {
        b = new DOMParser().parseFromString(b, 'application/xml');

        for (let c = r(b.getElementsByTagName('HttpHeader')), d = c.next(); !d.done; d = c.next()) d = d.value, a.headers[d.getElementsByTagName('name')[0].textContent] = d.getElementsByTagName('value')[0].textContent;

        a.body = Mc(b.getElementsByTagName('Challenge')[0].textContent);
      } else a.headers['Content-Type'] = 'text/xml; charset=utf-8';
    }

    function Qf(a, b) {
      const c = b.target;
      const d = a.j.get(c);
      let e = !1;
      c.keyStatuses.forEach((g, h) => {
        if (typeof h === 'string') {
          var k = h;
          h = g;
          g = k;
        }

        if (Lf(a.i.keySystem) && h.byteLength == 16 && navigator.userAgent.match(/Edge?\//)) {
          k = Sb(h);
          const l = k.getUint32(0, !0);
          const m = k.getUint16(4, !0);
          const n = k.getUint16(6, !0);
          k.setUint32(0, l, !1);
          k.setUint16(4, m, !1);
          k.setUint16(6, n, !1);
        }

        g != 'status-pending' && (d.loaded = !0);
        g == 'expired' && (e = !0);
        k = Oc(h);
        a.qa.set(k, g);
      });
      const f = c.expiration - Date.now();
      (f < 0 || e && f < 1E3) && d && !d.Ka && (a.j.delete(c), c.close().catch(() => {}));
      Rf(a) && (a.s.resolve(), a.N.S(Vf));
    }

    function rf(a) {
      let b = a.qa;
      const c = a.Y;
      c.clear();
      b.forEach((d, e) => c.set(e, d));
      b = Array.from(c.values());
      b.length && b.every((d) => d == 'expired') && a.l(new O(2, 6, 6014));
      a.C.Gc(mf(c));
    }

    function Wf() {
      let a;
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => (k.g == 1 ? (a = 'org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime'.split(' '), b = [{
        contentType: 'video/mp4; codecs="avc1.42E01E"',
      }, {
        contentType: 'video/webm; codecs="vp8"',
      }], c = {
        initDataTypes: ['cenc'],
        videoCapabilities: b,
      }, d = {
        videoCapabilities: b,
        persistentState: 'required',
        sessionTypes: ['persistent-license'],
      }, e = [d, c], f = new Map(), g = function (l) {
        let m;
        let n;
        let p;
        return I((t) => {
          switch (t.g) {
            case 1:
              return A(t, 2), u(t, navigator.requestMediaKeySystemAccess(l, e), 4);

            case 4:
              return m = t.h, p = (n = m.getConfiguration().sessionTypes) ? n.includes('persistent-license') : !1, wd('Tizen 3') && (p = !1), f.set(l, {
                persistentState: p,
              }), u(t, m.createMediaKeys(), 5);

            case 5:
              va(t, 0);
              break;

            case 2:
              C(t), f.set(l, null), z(t);
          }
        });
      }, h = a.map((l) => g(l)), u(k, Promise.all(h), 2)) : k.return(mf(f))));
    }

    function Xf(a) {
      let b;
      return I((c) => {
        if (c.g == 1) {
          return b = new Promise((d, e) => {
            new P(e).S(Yf);
          }), A(c, 2), u(c, Promise.race([Promise.all([a.close(), a.closed]), b]), 4);
        }
        if (c.g != 2) return va(c, 0);
        C(c);
        z(c);
      });
    }

    function uf(a) {
      let b;
      return I((c) => {
        b = Array.from(a.j.entries());
        a.j.clear();
        return u(c, Promise.all(b.map((d) => {
          d = r(d);
          const e = d.next().value;
          const f = d.next().value;
          return I((g) => {
            if (g.g == 1) return A(g, 2), a.pa || a.u.includes(e.sessionId) || f.type !== 'persistent-license' ? u(g, Xf(e), 5) : u(g, e.remove(), 5);
            if (g.g != 2) return va(g, 0);
            C(g);
            z(g);
          });
        })), 0);
      });
    }

    function Zf(a, b) {
      if (!a.length) return b;
      if (!b.length) return a;

      for (var c = [], d = r(a), e = d.next(); !e.done; e = d.next()) {
        e = e.value;

        for (let f = r(b), g = f.next(); !g.done; g = f.next()) {
          if (g = g.value, e.keySystem == g.keySystem) {
            f = [];
            f = f.concat(e.initData || []);
            f = f.concat(g.initData || []);
            const h = e.keyIds && g.keyIds ? new Set([].concat(ja(e.keyIds), ja(g.keyIds))) : e.keyIds || g.keyIds;
            c.push({
              keySystem: e.keySystem,
              licenseServerUri: e.licenseServerUri || g.licenseServerUri,
              distinctiveIdentifierRequired: e.distinctiveIdentifierRequired || g.distinctiveIdentifierRequired,
              persistentStateRequired: e.persistentStateRequired || g.persistentStateRequired,
              videoRobustness: e.videoRobustness || g.videoRobustness,
              audioRobustness: e.audioRobustness || g.audioRobustness,
              serverCertificate: e.serverCertificate || g.serverCertificate,
              serverCertificateUri: e.serverCertificateUri || g.serverCertificateUri,
              initData: f,
              keyIds: h,
            });
            break;
          }
        }
      }

      return c;
    }

    function Cf(a) {
      return (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : []);
    }

    function sf(a) {
      a.j.forEach((b, c) => {
        const d = b.Dd;
        let e = c.expiration;
        isNaN(e) && (e = Infinity);
        e != d && (a.C.onExpirationUpdated(c.sessionId, e), b.Dd = e);
      });
    }

    function Rf(a) {
      a = a.j.values();
      return gb(a, (b) => b.loaded);
    }

    function Bf(a, b) {
      const c = [];
      b.forEach((f, g) => {
        c.push({
          keySystem: g,
          licenseServerUri: f,
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          audioRobustness: '',
          videoRobustness: '',
          serverCertificate: null,
          serverCertificateUri: '',
          initData: [],
          keyIds: new Set(),
        });
      });

      for (let d = r(a), e = d.next(); !e.done; e = d.next()) e = e.value, e.video && (e.video.drmInfos = c), e.audio && (e.audio.drmInfos = c);
    }

    function Pf(a, b, c, d, e, f) {
      let g = {};
      a = r(a);

      for (let h = a.next(); !h.done; g = {
        oa: g.oa,
      }, h = a.next()) {
        g.oa = h.value;
        b.includes(g.oa.licenseServerUri) || b.push(g.oa.licenseServerUri);
        d.includes(g.oa.serverCertificateUri) || d.push(g.oa.serverCertificateUri);
        g.oa.serverCertificate && (c.some(function (m) {
          return function (n) {
            return Mb(n, m.oa.serverCertificate);
          };
        }(g)) || c.push(g.oa.serverCertificate));

        if (g.oa.initData) {
          h = {};

          for (var k = r(g.oa.initData), l = k.next(); !l.done; h = {
            jc: h.jc,
          }, l = k.next()) {
            h.jc = l.value, e.some(function (m) {
              return function (n) {
                const p = m.jc;
                return n.keyId && n.keyId == p.keyId ? !0 : n.initDataType == p.initDataType && Mb(n.initData, p.initData);
              };
            }(h)) || e.push(h.jc);
          }
        }

        if (g.oa.keyIds) for (h = r(g.oa.keyIds), k = h.next(); !k.done; k = h.next()) f.add(k.value);
      }
    }

    function Df(a, b, c) {
      if (a.keySystem && (a.keySystem != 'org.w3.clearkey' || !a.licenseServerUri)) {
        b.size && (b = b.get(a.keySystem) || '', a.licenseServerUri = b);
        a.keyIds || (a.keyIds = new Set());

        if (c = c.get(a.keySystem)) {
          a.distinctiveIdentifierRequired || (a.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), a.persistentStateRequired || (a.persistentStateRequired = c.persistentStateRequired), a.videoRobustness || (a.videoRobustness = c.videoRobustness), a.audioRobustness || (a.audioRobustness = c.audioRobustness), a.serverCertificate || (a.serverCertificate = c.serverCertificate), c.sessionType && (a.sessionType = c.sessionType), a.serverCertificateUri || (a.serverCertificateUri = c.serverCertificateUri);
        }

        window.cast && window.cast.__platform__ && a.keySystem == 'com.microsoft.playready' && (a.keySystem = 'com.chromecast.playready');
      }
    }

    var Yf = 1;
    var Uf = 5;
    var Vf = 0.5;
    const $f = new Bc(() => Qb(new Uint8Array([0])));

    function ag() {}

    function bg(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        if (k.g == 1) {
          if (d && (e = cg[d.toLowerCase()])) return k.return(e);
          if (f = dg(a)) if (g = eg[f]) return k.return(g);
          return d ? k.v(2) : u(k, fg(a, b, c), 3);
        }

        if (k.g != 2 && (d = k.h) && (h = cg[d])) return k.return(h);
        throw new O(2, 4, 4E3, a);
      });
    }

    function fg(a, b, c) {
      let d;
      let e;
      let f;
      return I((g) => {
        if (g.g == 1) return d = Ue([a], c), d.method = 'HEAD', u(g, b.request(0, d).promise, 2);
        e = g.h;
        f = e.headers['content-type'];
        return g.return(f ? f.toLowerCase().split(';').shift() : '');
      });
    }

    function dg(a) {
      a = new gc(a).xa.split('/').pop().split('.');
      return a.length == 1 ? '' : a.pop().toLowerCase();
    }

    M('shaka.media.ManifestParser', ag);

    ag.unregisterParserByMime = function (a) {
      delete cg[a];
    };

    ag.registerParserByMime = function (a, b) {
      cg[a] = b;
    };

    ag.registerParserByExtension = function (a, b) {
      eg[a] = b;
    };

    var cg = {};
    var eg = {};

    function gg(a, b) {
      this.R = Sb(a);
      this.h = b == hg;
      this.g = 0;
    }

    q = gg.prototype;

    q.na = function () {
      return this.g < this.R.byteLength;
    };

    q.Z = function () {
      return this.g;
    };

    q.Xe = function () {
      return this.R.byteLength;
    };

    q.$ = function () {
      try {
        const a = this.R.getUint8(this.g);
        this.g += 1;
        return a;
      } catch (b) {
        throw ig();
      }
    };

    q.Fb = function () {
      try {
        const a = this.R.getUint16(this.g, this.h);
        this.g += 2;
        return a;
      } catch (b) {
        throw ig();
      }
    };

    q.M = function () {
      try {
        const a = this.R.getUint32(this.g, this.h);
        this.g += 4;
        return a;
      } catch (b) {
        throw ig();
      }
    };

    q.me = function () {
      try {
        const a = this.R.getInt32(this.g, this.h);
        this.g += 4;
        return a;
      } catch (b) {
        throw ig();
      }
    };

    q.nb = function () {
      try {
        if (this.h) {
          var a = this.R.getUint32(this.g, !0);
          var b = this.R.getUint32(this.g + 4, !0);
        } else b = this.R.getUint32(this.g, !1), a = this.R.getUint32(this.g + 4, !1);
      } catch (c) {
        throw ig();
      }

      if (b > 2097151) throw new O(2, 3, 3001);
      this.g += 8;
      return b * Math.pow(2, 32) + a;
    };

    q.$a = function (a) {
      if (this.g + a > this.R.byteLength) throw ig();
      const b = Ob(this.R, this.g, a);
      this.g += a;
      return b;
    };

    q.skip = function (a) {
      if (this.g + a > this.R.byteLength) throw ig();
      this.g += a;
    };

    q.oe = function (a) {
      if (this.g < a) throw ig();
      this.g -= a;
    };

    q.seek = function (a) {
      if (a < 0 || a > this.R.byteLength) throw ig();
      this.g = a;
    };

    q.ac = function () {
      for (var a = this.g; this.na() && this.R.getUint8(this.g) != 0;) this.g += 1;

      a = Ob(this.R, a, this.g - a);
      this.g += 1;
      return Dc(a);
    };

    function ig() {
      return new O(2, 3, 3E3);
    }

    M('shaka.util.DataViewReader', gg);
    gg.prototype.readTerminatedString = gg.prototype.ac;
    gg.prototype.seek = gg.prototype.seek;
    gg.prototype.rewind = gg.prototype.oe;
    gg.prototype.skip = gg.prototype.skip;
    gg.prototype.readBytes = gg.prototype.$a;
    gg.prototype.readUint64 = gg.prototype.nb;
    gg.prototype.readInt32 = gg.prototype.me;
    gg.prototype.readUint32 = gg.prototype.M;
    gg.prototype.readUint16 = gg.prototype.Fb;
    gg.prototype.readUint8 = gg.prototype.$;
    gg.prototype.getLength = gg.prototype.Xe;
    gg.prototype.getPosition = gg.prototype.Z;
    gg.prototype.hasMoreData = gg.prototype.na;
    var hg = 1;
    gg.Endianness = {
      BIG_ENDIAN: 0,
      LITTLE_ENDIAN: hg,
    };

    function jg() {
      this.i = [];
      this.h = [];
      this.g = !1;
    }

    q = jg.prototype;

    q.box = function (a, b) {
      const c = kg(a);
      this.i[c] = lg;
      this.h[c] = b;
      return this;
    };

    q.V = function (a, b) {
      const c = kg(a);
      this.i[c] = mg;
      this.h[c] = b;
      return this;
    };

    q.stop = function () {
      this.g = !0;
    };

    q.parse = function (a, b, c) {
      a = new gg(a, 0);

      for (this.g = !1; a.na() && !this.g;) this.Ic(0, a, b, c);
    };

    q.Ic = function (a, b, c, d) {
      const e = b.Z();
      if (d && e + 8 > b.R.byteLength) this.g = !0; else {
        let f = b.M();
        let g = b.M();
        let h = !1;

        switch (f) {
          case 0:
            f = b.R.byteLength - e;
            break;

          case 1:
            if (d && b.Z() + 8 > b.R.byteLength) {
              this.g = !0;
              return;
            }

            f = b.nb();
            h = !0;
        }

        const k = this.h[g];

        if (k) {
          let l = null;
          let m = null;

          if (this.i[g] == mg) {
            if (d && b.Z() + 4 > b.R.byteLength) {
              this.g = !0;
              return;
            }

            m = b.M();
            l = m >>> 24;
            m &= 16777215;
          }

          g = e + f;
          c && g > b.R.byteLength && (g = b.R.byteLength);
          d && g > b.R.byteLength ? this.g = !0 : (d = g - b.Z(), b = d > 0 ? b.$a(d) : new Uint8Array(0), b = new gg(b, 0), k({
            parser: this,
            partialOkay: c || !1,
            version: l,
            flags: m,
            reader: b,
            size: f,
            start: e + a,
            has64BitSize: h,
          }));
        } else b.skip(Math.min(e + f - b.Z(), b.R.byteLength - b.Z()));
      }
    };

    function ng(a) {
      for (let b = og(a); a.reader.na() && !a.parser.g;) a.parser.Ic(a.start + b, a.reader, a.partialOkay);
    }

    function pg(a) {
      const b = og(a);
      let c = a.reader.M();
      c = r(ib(c));

      for (let d = c.next(); !d.done && (a.parser.Ic(a.start + b, a.reader, a.partialOkay), !a.parser.g); d = c.next());
    }

    function qg(a) {
      return function (b) {
        a(b.reader.$a(b.reader.R.byteLength - b.reader.Z()));
      };
    }

    function kg(a) {
      let b = 0;
      a = r(a);

      for (let c = a.next(); !c.done; c = a.next()) b = b << 8 | c.value.charCodeAt(0);

      return b;
    }

    function rg(a) {
      return String.fromCharCode(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255);
    }

    function og(a) {
      return 8 + (a.has64BitSize ? 8 : 0) + (a.flags != null ? 4 : 0);
    }

    M('shaka.util.Mp4Parser', jg);
    jg.headerSize = og;
    jg.typeToString = rg;
    jg.allData = qg;
    jg.sampleDescription = pg;
    jg.children = ng;
    jg.prototype.parseNext = jg.prototype.Ic;
    jg.prototype.parse = jg.prototype.parse;
    jg.prototype.stop = jg.prototype.stop;
    jg.prototype.fullBox = jg.prototype.V;
    jg.prototype.box = jg.prototype.box;
    var lg = 0;
    var mg = 1;

    function sg(a) {
      function b() {
        d = !0;
      }

      function c(l) {
        f.push(l);
        ng(l);
      }

      a = Ob(a);
      var d = !1;
      let e;
      var f = [];
      const g = [];
      new jg().box('moov', c).box('trak', c).box('mdia', c)
        .box('minf', c)
        .box('stbl', c)
        .V('stsd', (l) => {
          e = l;
          f.push(l);
          pg(l);
        })
        .V('encv', b)
        .V('enca', b)
        .V('avc1', (l) => {
          g.push({
            box: l,
            yd: 1701733238,
          });
        })
        .V('ec-3', (l) => {
          g.push({
            box: l,
            yd: 1701733217,
          });
        })
        .V('mp4a', (l) => {
          g.push({
            box: l,
            yd: 1701733217,
          });
        })
        .parse(a);
      if (d) return a;
      if (g.length == 0 || !e) throw ab(Oc(a)), new O(2, 3, 3019);
      g.reverse();

      for (let h = r(g), k = h.next(); !k.done; k = h.next()) k = k.value, a = tg(a, e, k.box, f, k.yd);

      return a;
    }

    function tg(a, b, c, d, e) {
      let f = ug.value();
      let g = a.subarray(c.start, c.start + c.size);
      const h = Sb(g);
      let k = new Uint8Array(c.size + f.byteLength);
      k.set(g, 0);
      g = Sb(k);
      g.setUint32(4, e);
      k.set(f, c.size);
      e = h.getUint32(4);
      g.setUint32(c.size + 16, e);
      vg(k, 0, k.byteLength);
      e = new Uint8Array(a.byteLength + k.byteLength);
      c = wd('Xbox One') ? c.start : c.start + c.size;
      f = a.subarray(c);
      e.set(a.subarray(0, c));
      e.set(k, c);
      e.set(f, c + k.byteLength);
      a = r(d);

      for (d = a.next(); !d.done; d = a.next()) d = d.value, vg(e, d.start, d.size + k.byteLength);

      k = Sb(e, b.start);
      b = og(b);
      a = k.getUint32(b);
      k.setUint32(b, a + 1);
      return e;
    }

    function vg(a, b, c) {
      a = Sb(a, b);
      b = a.getUint32(0);
      b != 0 && (b == 1 ? (a.setUint32(8, c >> 32), a.setUint32(12, c & 4294967295)) : a.setUint32(0, c));
    }

    var ug = new Bc(() => new Uint8Array([0, 0, 0, 80, 115, 105, 110, 102, 0, 0, 0, 12, 102, 114, 109, 97, 0, 0, 0, 0, 0, 0, 0, 20, 115, 99, 104, 109, 0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0, 0, 0, 0, 40, 115, 99, 104, 105, 0, 0, 0, 32, 116, 101, 110, 99, 0, 0, 0, 0, 0, 0, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

    function wg(a, b, c, d, e) {
      if (d >= e) return null;

      for (var f = -1, g = -1, h = 0; h < c.length; h++) {
        if (c[h].some((B) => B != null && B.g.trim() != '')) {
          f = h;
          break;
        }
      }

      for (h = c.length - 1; h >= 0; h--) {
        if (c[h].some((B) => B != null && B.g.trim() != '')) {
          g = h;
          break;
        }
      }

      if (f === -1 || g === -1) return null;

      for (let k = h = !1, l = 'white', m = 'black', n = xg(d, e, h, k, l, m); f <= g; f++) {
        for (var p = c[f], t = -1, v = -1, w = 0; w < p.length; w++) {
          if (p[w] != null && p[w].g.trim() !== '') {
            t = w;
            break;
          }
        }

        for (w = p.length - 1; w >= 0; w--) {
          if (p[w] != null && p[w].g.trim() !== '') {
            v = w;
            break;
          }
        }

        if (t === -1 || v === -1) p = yg(d, e), a.nestedCues.push(p); else {
          for (; t <= v; t++) {
            if (w = p[t]) {
              const x = w.l;
              const y = w.i;
              const E = w.j;
              const D = w.h;
              if (x != h || y != k || E != l || D != m) n.payload && a.nestedCues.push(n), n = xg(d, e, x, y, E, D), h = x, k = y, l = E, m = D;
              n.payload += w.g;
            } else n.payload += ' ';
          }

          n.payload && a.nestedCues.push(n);
          f !== g && (n = yg(d, e), a.nestedCues.push(n));
          n = xg(d, e, h, k, l, m);
        }
      }

      return a.nestedCues.length ? {
        cue: a,
        stream: b,
      } : null;
    }

    function xg(a, b, c, d, e, f) {
      a = new qb(a, b, '');
      c && a.textDecoration.push('underline');
      d && (a.fontStyle = 'italic');
      a.color = e;
      a.backgroundColor = f;
      return a;
    }

    function yg(a, b) {
      const c = new qb(a, b, '');
      c.lineBreak = !0;
      return c;
    }

    function zg(a, b, c, d, e) {
      this.g = a;
      this.l = b;
      this.i = c;
      this.h = d;
      this.j = e;
    }

    function Ag(a, b) {
      this.i = [];
      this.g = 1;
      this.h = 0;
      this.D = a;
      this.u = b;
      this.j = this.m = !1;
      this.l = 'white';
      this.s = 'black';
      Bg(this);
    }

    function Cg(a, b, c) {
      return wg(new qb(b, c, ''), `CC${a.D << 1 | a.u + 1}`, a.i, b, c);
    }

    function Bg(a) {
      Dg(a, 0, 15);
      a.g = 1;
    }

    function Eg(a, b, c) {
      if (!(c < 32 || c > 127)) {
        let d = '';

        switch (b) {
          case Fg:
            d = Gg.has(c) ? Gg.get(c) : String.fromCharCode(c);
            break;

          case Hg:
            d = Ig.get(c);
            break;

          case Jg:
            a.i[a.g].pop();
            d = Kg.get(c);
            break;

          case Lg:
            a.i[a.g].pop(), d = Mg.get(c);
        }

        d && a.i[a.g].push(new zg(d, a.m, a.j, a.s, a.l));
      }
    }

    function Ng(a, b, c, d) {
      if (b >= c) for (--d; d >= 0; d--) a.i[b + d] = a.i[c + d].map((f) => f); else for (let e = 0; e < d; e++) a.i[b + e] = a.i[c + e].map((f) => f);
    }

    function Dg(a, b, c) {
      for (let d = 0; d <= c; d++) a.i[b + d] = [];
    }

    var Fg = 0;
    var Hg = 1;
    var Jg = 2;
    var Lg = 3;
    var Gg = new Map([[39, '\u2019'], [42, '\u00e1'], [92, '\u00e9'], [92, '\u00e9'], [94, '\u00ed'], [95, '\u00f3'], [96, '\u00fa'], [123, '\u00e7'], [124, '\u00f7'], [125, '\u00d1'], [126, '\u00f1'], [127, '\u2588']]);
    var Ig = new Map([[48, '\u00ae'], [49, '\u00b0'], [50, '\u00bd'], [51, '\u00bf'], [52, '\u2122'], [53, '\u00a2'], [54, '\u00a3'], [55, '\u266a'], [56, '\u00e0'], [57, '\u2800'], [58, '\u00e8'], [59, '\u00e2'], [60, '\u00ea'], [61, '\u00ee'], [62, '\u00f4'], [63, '\u00fb']]);
    var Kg = new Map([[32, '\u00c1'], [33, '\u00c9'], [34, '\u00d3'], [35, '\u00da'], [36, '\u00dc'], [37, '\u00fc'], [38, '\u2018'], [39, '\u00a1'], [40, '*'], [41, "'"], [42, '\u2500'], [43, '\u00a9'], [44, '\u2120'], [45, '\u00b7'], [46, '\u201c'], [47, '\u201d'], [48, '\u00c0'], [49, '\u00c2'], [50, '\u00c7'], [51, '\u00c8'], [52, '\u00ca'], [53, '\u00cb'], [54, '\u00eb'], [55, '\u00ce'], [56, '\u00cf'], [57, '\u00ef'], [58, '\u00d4'], [59, '\u00d9'], [60, '\u00f9'], [61, '\u00db'], [62, '\u00ab'], [63, '\u00bb']]);
    var Mg = new Map([[32, '\u00c3'], [33, '\u00e3'], [34, '\u00cd'], [35, '\u00cc'], [36, '\u00ec'], [37, '\u00d2'], [38, '\u00f2'], [39, '\u00d5'], [40, '\u00f5'], [41, '{'], [42, '}'], [43, '\\'], [44, '^'], [45, '_'], [46, '|'], [47, '~'], [48, '\u00c4'], [49, '\u00e4'], [50, '\u00d6'], [51, '\u00f6'], [52, '\u00df'], [53, '\u00a5'], [54, '\u00a4'], [55, '\u2502'], [56, '\u00c5'], [57, '\u00e5'], [58, '\u00d8'], [59, '\u00f8'], [60, '\u250c'], [61, '\u2510'], [62, '\u2514'], [63, '\u2518']]);

    function Og(a, b) {
      this.h = Pg;
      this.s = new Ag(a, b);
      this.i = new Ag(a, b);
      this.l = new Ag(a, b);
      this.g = this.i;
      this.j = 0;
      this.m = null;
    }

    function Qg(a, b, c) {
      a.g = a.i;
      const d = a.g;
      let e = null;
      a.h !== Rg && a.h !== Sg && (e = Cg(d, a.j, c), c = a.i, c.g = c.h > 0 ? c.h : 0, Dg(c, 0, 15), c = a.l, c.g = c.h > 0 ? c.h : 0, Dg(c, 0, 15), d.g = 15);
      a.h = Rg;
      d.h = b;
      return e;
    }

    function Tg(a) {
      a.h = Ug;
      a.g = a.l;
      a.g.h = 0;
    }

    function Vg(a) {
      Wa('Cea608DataChannel', 'CEA-608 text mode entered, but is unsupported');
      a.g = a.s;
      a.h = Sg;
    }

    var Pg = 0;
    var Ug = 1;
    var Rg = 3;
    var Sg = 4;
    const Wg = 'black green blue cyan red yellow magenta black'.split(' ');
    const Xg = 'white green blue cyan red yellow magenta white_italics'.split(' ');

    function Yg() {
      this.l = !1;
      this.F = this.J = 0;
      this.H = Zg;
      this.i = [];
      this.g = this.h = this.j = 0;
      this.D = this.s = !1;
      this.u = 'white';
      this.m = 'black';
      $g(this);
    }

    function $g(a) {
      a.i = [];

      for (let b = 0; b < 15; b++) a.i.push(ah());
    }

    function ah() {
      for (var a = [], b = 0; b < 42; b++) a.push(null);

      return a;
    }

    function bh(a, b) {
      ch(a) && (a.i[a.h][a.g] = new zg(b, a.D, a.s, a.m, a.u), a.g++);
    }

    function ch(a) {
      const b = a.g < a.F && a.g >= 0;
      return a.h < a.J && a.h >= 0 && b;
    }

    Yg.prototype.isVisible = function () {
      return this.l;
    };

    function dh(a, b, c) {
      const d = new qb(a.j, b, '');
      d.textAlign = a.H === eh ? 'left' : a.H === fh ? 'right' : vb;
      if (c = wg(d, `svc${c}`, a.i, a.j, b)) a.j = b;
      return c;
    }

    var eh = 0;
    var fh = 1;
    var Zg = 2;

    function gh() {
      this.i = [];
      this.h = null;
      this.g = 0;
    }

    function hh(a, b) {
      b.type === 3 ? (a.g = 2 * (b.value & 63) - 1, a.h = []) : a.h && (a.g > 0 && (a.h.push(b), a.g--), a.g === 0 && (a.i.push(new ih(a.h)), a.h = null, a.g = 0));
    }

    function ih(a) {
      this.g = 0;
      this.h = a;
    }

    ih.prototype.na = function () {
      return this.g < this.h.length;
    };

    ih.prototype.Z = function () {
      return this.g;
    };

    function jh(a) {
      if (!a.na()) throw new O(2, 2, 3E3);
      return a.h[a.g++];
    }

    ih.prototype.skip = function (a) {
      if (this.g + a > this.h.length) throw new O(2, 2, 3E3);
      this.g += a;
    };

    function kh(a) {
      this.i = a;
      this.h = [null, null, null, null, null, null, null, null];
      this.g = null;
    }

    function lh(a, b, c, d) {
      if (c >= 128 && c <= 135) d = c & 7, a.h[d] && (a.g = a.h[d]); else {
        if (c === 136) {
          c = jh(b).value;
          b = null;
          c = r(mh(a, c));

          for (var e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = dh(e, d, a.i)), $g(e);

          return b;
        }

        if (c === 137) for (b = jh(b).value, b = r(mh(a, b)), c = b.next(); !c.done; c = b.next()) c = a.h[c.value], c.isVisible() || (c.j = d), c.l = !0; else {
          if (c === 138) {
            c = jh(b).value;
            b = null;
            c = r(mh(a, c));

            for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = dh(e, d, a.i)), e.l = !1;

            return b;
          }

          if (c === 139) {
            c = jh(b).value;
            b = null;
            c = r(mh(a, c));

            for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() ? b = dh(e, d, a.i) : e.j = d, e.l = !e.l;

            return b;
          }

          if (c === 140) return b = jh(b).value, nh(a, b, d);
          if (c === 143) return d = nh(a, 255, d), oh(a), d;
          if (c === 144) b.skip(1), d = jh(b).value, a.g && (a.g.s = (d & 128) > 0, a.g.D = (d & 64) > 0); else if (c === 145) d = jh(b).value, c = jh(b).value, b.skip(1), a.g && (b = ph((c & 48) >> 4, (c & 12) >> 2, c & 3), a.g.u = ph((d & 48) >> 4, (d & 12) >> 2, d & 3), a.g.m = b); else if (c === 146) d = jh(b).value, b = jh(b).value, a.g && (a = a.g, a.h = d & 15, a.g = b & 63); else if (c === 151) {
            b.skip(1), b.skip(1), d = jh(b).value, b.skip(1), a.g && (a.g.H = d & 3);
          } else if (c >= 152 && c <= 159) {
            c = (c & 15) - 8;
            e = a.h[c] !== null;

            if (!e) {
              var f = new Yg();
              f.j = d;
              a.h[c] = f;
            }

            d = jh(b).value;
            jh(b);
            jh(b);
            f = jh(b).value;
            const g = jh(b).value;
            b = jh(b).value;
            e && (b & 7) === 0 || (b = a.h[c], b.h = 0, b.g = 0, b.D = !1, b.s = !1, b.u = 'white', b.m = 'black');
            b = a.h[c];
            b.l = (d & 32) > 0;
            b.J = (f & 15) + 1;
            b.F = (g & 63) + 1;
            a.g = a.h[c];
          }
        }
      }
      return null;
    }

    var mh = function qh(a, b) {
      let d;
      let e;
      return Fa(qh, (f) => {
        f.g == 1 && (d = 0);
        if (f.g != 5) return d < 8 ? (e = (b & 1) === 1) && a.h[d] ? u(f, d, 5) : f.v(5) : f.v(0);
        b >>= 1;
        d++;
        return f.v(2);
      });
    };

    function nh(a, b, c) {
      let d = null;
      b = r(mh(a, b));

      for (let e = b.next(); !e.done; e = b.next()) {
        e = e.value;
        const f = a.h[e];
        f.isVisible() && (d = dh(f, c, a.i));
        a.h[e] = null;
      }

      return d;
    }

    function oh(a) {
      a.g = null;
      a.h = [null, null, null, null, null, null, null, null];
    }

    function ph(a, b, c) {
      const d = {
        0: 0,
        1: 0,
        2: 1,
        3: 1,
      };
      a = d[a];
      b = d[b];
      c = d[c];
      return rh[a << 2 | b << 1 | c];
    }

    const sh = new Map([[32, ' '], [33, '\u00a0'], [37, '\u2026'], [42, '\u0160'], [44, '\u0152'], [48, '\u2588'], [49, '\u2018'], [50, '\u2019'], [51, '\u201c'], [52, '\u201d'], [53, '\u2022'], [57, '\u2122'], [58, '\u0161'], [60, '\u0153'], [61, '\u2120'], [63, '\u0178'], [118, '\u215b'], [119, '\u215c'], [120, '\u215d'], [121, '\u215e'], [122, '\u2502'], [123, '\u2510'], [124, '\u2514'], [125, '\u2500'], [126, '\u2518'], [127, '\u250c']]);
    var rh = 'black blue green cyan red magenta yellow white'.split(' ');

    function th() {
      this.h = [];
      this.g = [];
      this.i = new gh();
      this.l = 0;
      this.u = new Map([['CC1', new Og(0, 0)], ['CC2', new Og(0, 1)], ['CC3', new Og(1, 0)], ['CC4', new Og(1, 1)]]);
      this.s = this.m = 0;
      this.j = new Map();
      uh(this);
    }

    function uh(a) {
      a.m = 0;
      a.s = 0;
      a = r(a.u.values());

      for (let b = a.next(); !b.done; b = a.next()) b = b.value, b.h = 2, b.g = b.i, b.m = null, Bg(b.i), Bg(b.l), Bg(b.s);
    }

    function vh(a) {
      function b(f, g) {
        return f.pts - g.pts || f.order - g.order;
      }

      const c = [];
      a.h.sort(b);
      a.g.sort(b);

      for (var d = r(a.h), e = d.next(); !e.done; e = d.next()) (e = wh(a, e.value)) && c.push(e);

      d = r(a.g);

      for (e = d.next(); !e.done; e = d.next()) hh(a.i, e.value);

      d = r(a.i.i);

      for (e = d.next(); !e.done; e = d.next()) e = xh(a, e.value), c.push.apply(c, ja(e));

      a.i.i = [];
      a.h = [];
      a.g = [];
      return c;
    }

    function wh(a, b) {
      let c = b.type;

      if ((b.za & 112) === 16) {
        var d = b.za >> 3 & 1;
        c === 0 ? a.m = d : a.s = d;
      }

      c = a.u.get(`CC${c << 1 | (c ? a.s : a.m) + 1}`);
      if (b.za === 255 && b.Pa === 255 || !b.za && !b.Pa || !yh(b.za) || !yh(b.Pa)) return ++a.l >= 45 && uh(a), null;
      a.l = 0;
      b.za &= 127;
      b.Pa &= 127;
      if (!b.za && !b.Pa) return null;
      d = null;

      if ((b.za & 112) === 16) {
        a: {
          var e = b.za;
          d = b.Pa;
          if (c.m === (e << 8 | d)) c.m = null; else if (c.m = e << 8 | d, (e & 240) === 16 && (d & 192) === 64) {
            e = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | d >> 5 & 1];
            let f = (d & 30) >> 1;
            var g = 'white';
            var h = !1;
            f < 7 ? g = Xg[f] : f === 7 && (h = !0);
            d = (d & 1) === 1;

            if (c.h !== Sg) {
              f = c.g;

              if (c.h === Rg && e !== f.g) {
                const k = 1 + e - f.h;
                Ng(f, k, 1 + f.g - f.h, f.h);
                Dg(f, 0, k - 1);
                Dg(f, e + 1, 15 - e);
              }

              f.g = e;
              c.g.m = d;
              c.g.j = h;
              c.g.l = g;
              c.g.s = 'black';
            }
          } else if ((e & 247) === 17 && (d & 240) === 32) c.g.m = !1, c.g.j = !1, c.g.l = 'white', Eg(c.g, Fg, 32), g = !1, e = Xg[(d & 14) >> 1], e === 'white_italics' && (e = 'white', g = !0), c.g.m = (d & 1) === 1, c.g.j = g, c.g.l = e; else if ((e & 247) === 16 && (d & 240) === 32 || (e & 247) === 23 && (d & 255) === 45) g = 'black', (e & 7) === 0 && (g = Wg[(d & 14) >> 1]), c.g.s = g; else if ((e & 247) === 17 && (d & 240) === 48) Eg(c.g, Hg, d); else if ((e & 246) === 18 && (d & 224) === 32) Eg(c.g, e & 1 ? Lg : Jg, d); else if ((e & 246) === 20 && (d & 240) === 32) {
            d = b.pts;
            e = null;

            switch (b.Pa) {
              case 32:
                Tg(c);
                break;

              case 33:
                c = c.g;
                c.i[c.g].pop();
                break;

              case 37:
                e = Qg(c, 2, d);
                break;

              case 38:
                e = Qg(c, 3, d);
                break;

              case 39:
                e = Qg(c, 4, d);
                break;

              case 40:
                Eg(c.g, Fg, 32);
                break;

              case 41:
                c.h = 2;
                c.g = c.i;
                c.g.h = 0;
                c.j = d;
                break;

              case 42:
                Bg(c.s);
                Vg(c);
                break;

              case 43:
                Vg(c);
                break;

              case 44:
                e = c.i;
                g = null;
                c.h !== Sg && (g = Cg(e, c.j, d));
                Dg(e, 0, 15);
                e = g;
                break;

              case 45:
                e = c.g;
                c.h !== Rg ? e = null : (g = Cg(e, c.j, d), h = e.g - e.h + 1, Ng(e, h - 1, h, e.h), Dg(e, 0, h - 1), Dg(e, e.g, 15 - e.g), c.j = d, e = g);
                break;

              case 46:
                Dg(c.l, 0, 15);
                break;

              case 47:
                e = null, c.h !== Sg && (e = Cg(c.i, c.j, d)), g = c.l, c.l = c.i, c.i = g, Tg(c), c.j = d;
            }

            d = e;
            break a;
          }
          d = null;
        }
      } else e = b.Pa, Eg(c.g, Fg, b.za), Eg(c.g, Fg, e);

      return d;
    }

    function xh(a, b) {
      const c = [];

      try {
        for (; b.na();) {
          const d = jh(b).value;
          let e = (d & 224) >> 5;
          const f = d & 31;
          e === 7 && f != 0 && (e = jh(b).value & 63);

          if (e != 0) {
            a.j.has(e) || a.j.set(e, new kh(e));

            for (let g = a.j.get(e), h = b.Z(); b.Z() - h < f;) {
              e = b;
              const k = jh(e);
              let l = k.value;
              const m = k.pts;

              if (l === 16) {
                const n = jh(e);
                l = l << 16 | n.value;
              }

              if (l >= 0 && l <= 31) {
                var p = m;

                if (g.g) {
                  const t = g.g;
                  e = null;

                  switch (l) {
                    case 8:
                      !ch(t) || t.g <= 0 && t.h <= 0 || (t.g <= 0 ? (t.g = t.F - 1, t.h--) : t.g--, t.i[t.h][t.g] = null);
                      break;

                    case 13:
                      t.isVisible() && (e = dh(t, p, g.i));

                      if (t.h + 1 >= t.J) {
                        p = t;

                        for (var v = 0, w = 1; w < 15; w++, v++) p.i[v] = p.i[w];

                        for (w = 0; w < 1; w++, v++) p.i[v] = ah();
                      } else t.h++;

                      t.g = 0;
                      break;

                    case 14:
                      t.isVisible() && (e = dh(t, p, g.i));
                      t.i[t.h] = ah();
                      t.g = 0;
                      break;

                    case 12:
                      t.isVisible() && (e = dh(t, p, g.i)), $g(t), p = t, p.h = 0, p.g = 0;
                  }

                  var x = e;
                } else x = null;
              } else if (l >= 128 && l <= 159) x = lh(g, e, l, m); else {
                if (l >= 4096 && l <= 4127) p = l & 255, p >= 8 && p <= 15 ? e.skip(1) : p >= 16 && p <= 23 ? e.skip(2) : p >= 24 && p <= 31 && e.skip(3); else if (l >= 4224 && l <= 4255) p = l & 255, p >= 128 && p <= 135 ? e.skip(4) : p >= 136 && p <= 143 && e.skip(5); else if (l >= 32 && l <= 127) {
                  e = l, g.g && (e === 127 ? bh(g.g, '\u266a') : bh(g.g, String.fromCharCode(e)));
                } else if (l >= 160 && l <= 255) g.g && bh(g.g, String.fromCharCode(l)); else if (l >= 4128 && l <= 4223) {
                  if (e = l & 255, g.g) {
                    if (sh.has(e)) {
                      const y = sh.get(e);
                      bh(g.g, y);
                    } else bh(g.g, '_');
                  }
                } else l >= 4256 && l <= 4351 && g.g && ((l & 255) != 160 ? bh(g.g, '_') : bh(g.g, '[CC]'));
                x = null;
              }

              (e = x) && c.push(e);
            }
          }
        }
      } catch (E) {
        if (E instanceof O && E.code === 3E3) Wa('CEA708_INVALID_DATA', 'Buffer read out of bounds / invalid CEA-708 Data.'); else throw E;
      }

      return c;
    }

    function yh(a) {
      for (var b = 0; a;) b ^= a & 1, a >>= 1;

      return b === 1;
    }

    function zh() {}

    const Bh = function Ah(a, b) {
      let d;
      let e;
      let f;
      let g;
      return Fa(Ah, (h) => {
        if (h.g == 1) {
          for (var k = 0, l = 0, m = 0; l < b.length;) k == 2 && b[l] == 3 ? k = 0 : (b[l] == 0 ? k++ : k = 0, b[m] = b[l], m++), l++;

          d = l - m;
          e = 0;
        }

        if (h.g != 4) {
          if (!(e + d < b.length)) return h.v(0);

          for (f = 0; b[e] == 255;) f += 255, e++;

          f += b[e++];

          for (g = 0; b[e] == 255;) g += 255, e++;

          g += b[e++];
          return f != 4 ? h.v(4) : u(h, b.subarray(e, e + g), 4);
        }

        e += g;
        return h.v(2);
      });
    };

    function Ch(a, b) {
      let c = null;
      let d = null;
      const e = a.M();
      b & 1 && a.skip(8);
      b & 2 && a.skip(4);
      b & 8 && (c = a.M());
      b & 16 && (d = a.M());
      return {
        trackId: e,
        Yd: c,
        Ne: d,
      };
    }

    function Dh(a, b) {
      return {
        hd: b == 1 ? a.nb() : a.M(),
      };
    }

    function Eh(a, b) {
      b == 1 ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4));
      return {
        timescale: a.M(),
      };
    }

    function Fh(a, b, c) {
      const d = a.M();
      const e = [];
      c & 1 && a.skip(4);
      c & 4 && a.skip(4);

      for (let f = r(ib(d)), g = f.next(); !g.done; g = f.next()) {
        g = {
          Jd: null,
          sampleSize: null,
          Kc: null,
        }, c & 256 && (g.Jd = a.M()), c & 512 && (g.sampleSize = a.M()), c & 1024 && a.skip(4), c & 2048 && (g.Kc = b == 0 ? a.M() : a.me()), e.push(g);
      }

      return {
        Dg: d,
        pe: e,
      };
    }

    function Gh() {
      this.j = new zh();
      this.i = new Map();
      this.h = this.g = 0;
    }

    Gh.prototype.init = function (a) {
      const b = this;
      const c = [];
      const d = [];
      new jg().box('moov', ng).box('mvex', ng).V('trex', (e) => {
        let f = e.reader;
        f.skip(4);
        f.skip(4);
        e = f.M();
        f = f.M();
        b.g = e;
        b.h = f;
      })
        .box('trak', ng)
        .V('tkhd', (e) => {
          const f = e.reader;
          e.version == 1 ? (f.skip(8), f.skip(8), e = f.nb()) : (f.skip(4), f.skip(4), e = f.M());
          c.push(e);
        })
        .box('mdia', ng)
        .V('mdhd', (e) => {
          e = Eh(e.reader, e.version);
          d.push(e.timescale);
        })
        .parse(a, !0);
      if (!c.length || !d.length || c.length != d.length) throw new O(2, 2, 2010);
      c.forEach((e, f) => {
        b.i.set(e, d[f]);
      });
    };

    Gh.prototype.parse = function (a) {
      const b = this;
      const c = [];
      let d = this.g;
      let e = this.h;
      let f = [];
      let g = null;
      let h = 9E4;
      new jg().box('moof', ng).box('traf', ng).V('trun', (k) => {
        f = Fh(k.reader, k.version, k.flags).pe;
      })
        .V('tfhd', (k) => {
          k = Ch(k.reader, k.flags);
          d = k.Yd || b.g;
          e = k.Ne || b.h;
          k = k.trackId;
          b.i.has(k) && (h = b.i.get(k));
        })
        .V('tfdt', (k) => {
          g = Dh(k.reader, k.version).hd;
        })
        .box('mdat', (k) => {
          if (g === null) throw new O(2, 2, 2010);
          k = k.reader;
          let l = g;
          const m = h;
          const n = d;
          const p = e;
          const t = f;
          let v = 0;
          let w = p;

          for (t.length && (w = t[0].sampleSize || p); k.na();) {
            const x = k.M();

            if ((k.$() & 31) == 6) {
              let y = 0;
              t.length > v && (y = t[v].Kc || 0);
              y = (l + y) / m;

              for (let E = r(Bh(b.j, k.$a(x - 1))), D = E.next(); !D.done; D = E.next()) {
                c.push({
                  Bf: D.value,
                  pts: y,
                });
              }
            } else k.skip(x - 1);

            w -= x + 4;
            w == 0 && (l = t.length > v ? l + (t[v].Jd || n) : l + n, v++, w = t.length > v ? t[v].sampleSize || p : p);
          }
        })
        .parse(a, !1);
      return c;
    };

    function Ih() {
      this.h = new Gh();
      this.g = new th();
    }

    Ih.prototype.init = function (a) {
      this.h.init(a);
    };

    function Jh(a, b) {
      let c = a.h.parse(b);
      c = r(c);

      for (let d = c.next(); !d.done; d = c.next()) {
        let e = d.value;
        let f = Ob(e.Bf);
        d = a.g;
        e = e.pts;
        f = new gg(f, 0);

        if (f.$() === 181 && f.Fb() === 49 && f.M() === 1195456820 && f.$() === 3) {
          let g = f.$();

          if ((g & 64) !== 0) {
            g &= 31;
            f.skip(1);

            for (let h = 0; h < g; h++) {
              let k = f.$();
              const l = (k & 4) >> 2;
              const m = f.$();
              const n = f.$();
              l && (k &= 3, k === 0 || k === 1 ? d.h.push({
                pts: e,
                type: k,
                za: m,
                Pa: n,
                order: d.h.length,
              }) : (d.g.push({
                pts: e,
                type: k,
                value: m,
                order: d.g.length,
              }), d.g.push({
                pts: e,
                type: 2,
                value: n,
                order: d.g.length,
              })));
            }
          }
        }
      }

      return vh(a.g);
    }

    function Kh(a) {
      return !a || a.length == 1 && a.end(0) - a.start(0) < 1E-6 ? null : a.length ? a.end(a.length - 1) : null;
    }

    function Lh(a, b, c) {
      c = void 0 === c ? 0 : c;
      return !a || !a.length || a.length == 1 && a.end(0) - a.start(0) < 1E-6 || b > a.end(a.length - 1) ? !1 : b + c >= a.start(0);
    }

    function Mh(a, b) {
      if (!a || !a.length || a.length == 1 && a.end(0) - a.start(0) < 1E-6) return 0;

      for (var c = 0, d = r(Nh(a)), e = d.next(); !e.done; e = d.next()) {
        let f = e.value;
        e = f.start;
        f = f.end;
        f > b && (c += f - Math.max(e, b));
      }

      return c;
    }

    function Oh(a, b, c) {
      if (!a || !a.length || a.length == 1 && a.end(0) - a.start(0) < 1E-6) return null;
      a = Nh(a).findIndex((d, e, f) => d.start > b && (e == 0 || f[e - 1].end - b <= c));
      return a >= 0 ? a : null;
    }

    function Nh(a) {
      if (!a) return [];

      for (var b = [], c = r(ib(a.length)), d = c.next(); !d.done; d = c.next()) {
        d = d.value, b.push({
          start: a.start(d),
          end: a.end(d),
        });
      }

      return b;
    }

    function Ph(a, b, c, d) {
      const e = this;
      this.g = a;
      this.m = c;
      this.j = {};
      this.J = {};
      this.i = null;

      this.L = d || function () {};

      this.l = {};
      this.h = new cf();
      this.u = {};
      this.D = b;
      this.F = new Ac();
      this.s = Qh(this, this.F);
      this.I = new af(() => Rh(e));
      this.H = '';
    }

    function Qh(a, b) {
      const c = new MediaSource();
      a.h.va(c, 'sourceopen', () => {
        URL.revokeObjectURL(a.H);
        b.resolve();
      });
      a.H = Sh(c);
      a.g.src = a.H;
      return c;
    }

    q = Ph.prototype;

    q.destroy = function () {
      return this.I.destroy();
    };

    function Rh(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      return I((l) => {
        if (l.g == 1) {
          b = [];

          for (c in a.l) for (d = a.l[c], e = d[0], a.l[c] = d.slice(0, 1), e && b.push(e.p.catch(Zb)), f = r(d.slice(1)), g = f.next(); !g.done; g = f.next()) h = g.value, h.p.reject(new O(2, 7, 7003, void 0));

          a.i && b.push(a.i.destroy());
          a.m && b.push(a.m.destroy());

          for (k in a.u) b.push(a.u[k].destroy());

          return u(l, Promise.all(b), 2);
        }

        a.h && (a.h.release(), a.h = null);
        a.g && (a.g.removeAttribute('src'), a.g.load(), a.g = null);
        a.s = null;
        a.i = null;
        a.m = null;
        a.j = {};
        a.u = {};
        a.D = null;
        a.l = {};
        z(l);
      });
    }

    q.init = function (a, b) {
      const c = this;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        if (m.g == 1) return d = zc, u(m, c.F, 2);
        e = {};
        f = r(a.keys());

        for (g = f.next(); !g.done; e = {
          ra: e.ra,
        }, g = f.next()) {
          e.ra = g.value, h = a.get(e.ra), k = Vc(h.mimeType, h.codecs), e.ra == d.aa ? Th(c, k) : (!b && MediaSource.isTypeSupported(k) || !Rc(k, e.ra) || (c.u[e.ra] = new Qc(), k = Tc(e.ra, k)), l = c.s.addSourceBuffer(k), c.h.A(l, 'error', (function (n) {
            return function () {
              c.l[n.ra][0].p.reject(new O(2, 3, 3014, c.g.error ? c.g.error.code : 0));
            };
          }(e))), c.h.A(l, 'updateend', (function (n) {
            return function () {
              return Uh(c, n.ra);
            };
          }(e))), c.j[e.ra] = l, c.J[e.ra] = k, c.l[e.ra] = []);
        }

        z(m);
      });
    };

    function Th(a, b) {
      a.i || (a.i = new Zc(a.m));
      b != 'application/cea-608' && b != 'application/cea-708' && (a.i.s = ac(ad[b]));
    }

    function Vh(a) {
      return a.s ? a.s.readyState == 'ended' : !0;
    }

    function Wh(a, b) {
      if (b == yc) var c = a.i.g; else c = Xh(a, b), c = !c || c.length == 1 && c.end(0) - c.start(0) < 1E-6 ? null : c.length == 1 && c.start(0) < 0 ? 0 : c.length ? c.start(0) : null;
      return c;
    }

    function Yh(a, b) {
      return b == yc ? a.i.h : Kh(Xh(a, b));
    }

    function Zh(a, b, c) {
      if (b == yc) return a = a.i, a.h == null || a.h < c ? 0 : a.h - Math.max(c, a.g);
      a = Xh(a, b);
      return Mh(a, c);
    }

    q.xc = function () {
      const a = {
        total: Nh(this.g.buffered),
        audio: Nh(Xh(this, 'audio')),
        video: Nh(Xh(this, 'video')),
        text: [],
      };

      if (this.i) {
        const b = this.i.g;
        const c = this.i.h;
        b != null && c != null && a.text.push({
          start: b,
          end: c,
        });
      }

      return a;
    };

    function Xh(a, b) {
      try {
        return a.j[b].buffered;
      } catch (c) {
        return null;
      }
    }

    function $h(a, b, c, d, e, f) {
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      return I((v) => {
        if (v.g == 1) {
          g = zc;
          if (b == g.aa) return u(v, bd(a.i, c, d, e), 0);
          if (a.u[b]) return u(v, Uc(a.u[b], c), 10);
          if (f) {
            return a.i || Th(a, 'text/vtt'), d == null && e == null ? a.D.init(c) : (h = Jh(a.D, c), h.length && (k = a.j[g.Na].timestampOffset, fd(a.i, h, d, e, k))), c = ai(a, c, d, b), u(v, bi(a, b, () => {
              a.j[b].appendBuffer(c);
            }), 0);
          }
          c = ai(a, c, d, b);
          return u(v, bi(a, b, () => {
            a.j[b].appendBuffer(c);
          }), 0);
        }

        l = v.h;
        a.i || Th(a, 'text/vtt');
        l.metadata && (m = a.j[b].timestampOffset, a.L(l.metadata, m, e));
        l.captions && l.captions.length && (n = a.j[g.Na].timestampOffset, p = ed(l.captions), fd(a.i, p, d, e, n));
        t = l.data;
        t = ai(a, t, d, b);
        return u(v, bi(a, b, () => {
          a.j[b].appendBuffer(t);
        }), 0);
      });
    }

    function ci(a, b) {
      const c = Yh(a, 'video') || 0;
      dd(a.i, b, c);
    }

    function di(a) {
      a.i && dd(a.i, '', 0);
    }

    q.remove = function (a, b, c) {
      const d = this;
      let e;
      return I((f) => {
        e = zc;
        return a == e.aa ? u(f, d.i.remove(b, c), 0) : u(f, bi(d, a, () => {
          c <= b ? Uh(d, a) : d.j[a].remove(b, c);
        }), 0);
      });
    };

    function ei(a, b) {
      let c;
      return I((d) => {
        c = zc;
        return b == c.aa ? a.i ? u(d, a.i.remove(0, Infinity), 0) : d.return() : u(d, bi(a, b, () => {
          const e = a.s.duration;
          e <= 0 ? Uh(a, b) : a.j[b].remove(0, e);
        }), 0);
      });
    }

    q.flush = function (a) {
      const b = this;
      let c;
      return I((d) => {
        c = zc;
        return a == c.aa ? d.return() : u(d, bi(b, a, () => {
          b.g.currentTime -= 0.001;
          Uh(b, a);
        }), 0);
      });
    };

    function fi(a, b, c, d, e) {
      let f;
      return I((g) => {
        f = zc;
        return b == f.aa ? (a.i.D = c, cd(a.i, d, e), g.return()) : u(g, Promise.all([bi(a, b, () => {
          const h = a.j[b].appendWindowStart;
          const k = a.j[b].appendWindowEnd;
          a.j[b].abort();
          a.j[b].appendWindowStart = h;
          a.j[b].appendWindowEnd = k;
          Uh(a, b);
        }), bi(a, b, () => {
          let h = c;
          h < 0 && (h += 0.001);
          a.j[b].timestampOffset = h;
          Uh(a, b);
        }), bi(a, b, () => {
          a.j[b].appendWindowStart = 0;
          a.j[b].appendWindowEnd = e;
          a.j[b].appendWindowStart = d;
          Uh(a, b);
        })]), 0);
      });
    }

    q.endOfStream = function (a) {
      const b = this;
      return I((c) => u(c, gi(b, () => {
        Vh(b) || (a ? b.s.endOfStream(a) : b.s.endOfStream());
      }), 0));
    };

    q.Ja = function (a) {
      const b = this;
      return I((c) => u(c, gi(b, () => {
        b.s.duration = a;
      }), 0));
    };

    q.getDuration = function () {
      return this.s.duration;
    };

    function Uh(a, b) {
      const c = a.l[b][0];
      c && (c.p.resolve(), hi(a, b));
    }

    function bi(a, b, c) {
      bf(a.I);
      c = {
        start: c,
        p: new Ac(),
      };
      a.l[b].push(c);
      a.l[b].length == 1 && ii(a, b);
      return c.p;
    }

    function gi(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        switch (k.g) {
          case 1:
            bf(a.I);
            c = [];
            d = {};

            for (e in a.j) {
              d.Kb = new Ac(), f = {
                start: (function (l) {
                  return function () {
                    return l.Kb.resolve();
                  };
                }(d)),
                p: d.Kb,
              }, a.l[e].push(f), c.push(d.Kb), a.l[e].length == 1 && f.start(), d = {
                Kb: d.Kb,
              };
            }

            A(k, 2);
            return u(k, Promise.all(c), 4);

          case 4:
            va(k, 3);
            break;

          case 2:
            throw g = C(k), g;

          case 3:
            try {
              b();
            } catch (l) {
              throw new O(2, 3, 3015, l);
            } finally {
              for (h in a.j) hi(a, h);
            }

            z(k);
        }
      });
    }

    function hi(a, b) {
      a.l[b].shift();
      ii(a, b);
    }

    function ii(a, b) {
      const c = a.l[b][0];
      if (c) {
        try {
          c.start();
        } catch (d) {
          d.name == 'QuotaExceededError' ? c.p.reject(new O(2, 3, 3017, b)) : c.p.reject(new O(2, 3, 3015, d)), hi(a, b);
        }
      }
    }

    function ai(a, b, c, d) {
      const e = a.g.mediaKeys;
      c == null && e && (vd() || wd('Xbox One')) && a.J[d].split(';')[0].split('/')[1] == 'mp4' && (b = sg(b));
      return b;
    }

    var Sh = window.URL.createObjectURL;

    function ji(a, b, c) {
      this.ma = a;
      this.ja = b;
      this.ea = c;
    }

    ji.prototype.Wb = function () {
      return this.ja;
    };

    ji.prototype.Sb = function () {
      return this.ea;
    };

    function ki(a, b) {
      return a && b ? a.Wb() == b.Wb() && a.Sb() == b.Sb() && pb(a.ma(), b.ma()) : a == b;
    }

    M('shaka.media.InitSegmentReference', ji);
    ji.prototype.getEndByte = ji.prototype.Sb;
    ji.prototype.getStartByte = ji.prototype.Wb;

    function li(a, b, c, d, e, f, g, h, k, l, m) {
      l = void 0 === l ? [] : l;
      this.startTime = a;
      this.j = this.endTime = b;
      this.i = c;
      this.ja = d;
      this.ea = e;
      this.h = f;
      this.timestampOffset = g;
      this.appendWindowStart = h;
      this.appendWindowEnd = k;
      this.g = l;
      this.tilesLayout = void 0 === m ? '' : m;
    }

    q = li.prototype;

    q.ma = function () {
      return this.i();
    };

    q.hf = function () {
      return this.startTime;
    };

    q.Ve = function () {
      return this.endTime;
    };

    q.Wb = function () {
      return this.ja;
    };

    q.Sb = function () {
      return this.ea;
    };

    q.nf = function () {
      return this.tilesLayout;
    };

    M('shaka.media.SegmentReference', li);
    li.prototype.getTilesLayout = li.prototype.nf;
    li.prototype.getEndByte = li.prototype.Sb;
    li.prototype.getStartByte = li.prototype.Wb;
    li.prototype.getEndTime = li.prototype.Ve;
    li.prototype.getStartTime = li.prototype.hf;
    li.prototype.getUris = li.prototype.ma;

    function U(a, b, c) {
      this.j = a;
      this.Jc = b;
      this.m = this.l = Infinity;
      this.g = 1;
      this.h = this.i = null;
      this.s = 0;
      this.u = !0;
      this.D = 0;
      this.F = void 0 === c ? !0 : c;
      this.H = 0;
    }

    q = U.prototype;

    q.getDuration = function () {
      return this.l;
    };

    q.af = function () {
      return this.g;
    };

    q.Ja = function (a) {
      this.l = a;
    };

    q.gf = function () {
      return this.j;
    };

    q.ue = function (a) {
      this.s = a;
    };

    q.ec = function (a) {
      this.u = a;
    };

    q.Qd = function (a) {
      this.m = a;
    };

    q.Rf = function (a) {
      this.Jc = a;
    };

    q.Ue = function () {
      return this.Jc;
    };

    q.Cb = function (a) {
      if (a.length != 0) {
        const b = a[a.length - 1].endTime;
        this.Bd(a[0].startTime);
        this.g = a.reduce((c, d) => Math.max(c, d.endTime - d.startTime), this.g);
        this.h = Math.max(this.h, b);
        this.j != null && this.F && (this.j = (Date.now() + this.s) / 1E3 - this.h - this.g);
      }
    };

    q.Bd = function (a) {
      this.i = this.i == null ? a : Math.min(this.i, a);
    };

    q.zd = function (a) {
      this.g = Math.max(this.g, a);
    };

    q.offset = function (a) {
      this.i != null && (this.i += a);
      this.h != null && (this.h += a);
    };

    q.X = function () {
      return Infinity == this.l && !this.u;
    };

    q.kb = function () {
      return Infinity != this.l && !this.u;
    };

    q.Za = function () {
      return Math.max(this.D, this.gb() - this.m);
    };

    q.ve = function (a) {
      this.D = a;
    };

    q.gb = function () {
      return this.X() || this.kb() ? Math.min(Math.max(0, (Date.now() + this.s) / 1E3 - this.g - this.j) + this.H, this.l) : this.h || this.l;
    };

    q.Vb = function (a) {
      const b = Math.max(this.i, this.D);
      return Infinity == this.m ? Math.ceil(1E3 * b) / 1E3 : Math.max(b, Math.min(this.gb() - this.m + a, this.Qa()));
    };

    q.zb = function () {
      return this.Vb(0);
    };

    q.Qa = function () {
      return Math.max(0, this.gb() - (this.X() || this.kb() ? this.Jc : 0));
    };

    q.ye = function () {
      return this.j == null || this.h != null && this.F ? !1 : !0;
    };

    q.te = function (a) {
      this.H = a;
    };

    M('shaka.media.PresentationTimeline', U);
    U.prototype.setAvailabilityTimeOffset = U.prototype.te;
    U.prototype.usingPresentationStartTime = U.prototype.ye;
    U.prototype.getSeekRangeEnd = U.prototype.Qa;
    U.prototype.getSeekRangeStart = U.prototype.zb;
    U.prototype.getSafeSeekRangeStart = U.prototype.Vb;
    U.prototype.getSegmentAvailabilityEnd = U.prototype.gb;
    U.prototype.setUserSeekStart = U.prototype.ve;
    U.prototype.getSegmentAvailabilityStart = U.prototype.Za;
    U.prototype.isInProgress = U.prototype.kb;
    U.prototype.isLive = U.prototype.X;
    U.prototype.offset = U.prototype.offset;
    U.prototype.notifyMaxSegmentDuration = U.prototype.zd;
    U.prototype.notifyMinSegmentStartTime = U.prototype.Bd;
    U.prototype.notifySegments = U.prototype.Cb;
    U.prototype.getDelay = U.prototype.Ue;
    U.prototype.setDelay = U.prototype.Rf;
    U.prototype.setSegmentAvailabilityDuration = U.prototype.Qd;
    U.prototype.setStatic = U.prototype.ec;
    U.prototype.setClockOffset = U.prototype.ue;
    U.prototype.getPresentationStartTime = U.prototype.gf;
    U.prototype.setDuration = U.prototype.Ja;
    U.prototype.getMaxSegmentDuration = U.prototype.af;
    U.prototype.getDuration = U.prototype.getDuration;

    function mi(a, b) {
      this.j = a;
      this.m = ni(a);
      this.g = a.g.currentTime;
      this.l = Date.now() / 1E3;
      this.h = !1;
      this.s = b;

      this.i = function () {};
    }

    mi.prototype.release = function () {
      this.j = null;

      this.i = function () {};
    };

    function oi(a, b) {
      a.i = b;
    }

    function pi(a) {
      this.g = a;
    }

    function ni(a) {
      if (a.g.paused || a.g.playbackRate == 0 || a.g.buffered.length == 0) var b = !1; else {
        a: {
          b = a.g.currentTime;
          a = r(Nh(a.g.buffered));

          for (let c = a.next(); !c.done; c = a.next()) {
            if (c = c.value, !(b < c.start - 0.1 || b > c.end - 0.5)) {
              b = !0;
              break a;
            }
          }

          b = !1;
        }
      }
      return b;
    }

    function qi(a, b, c, d, e) {
      const f = this;
      this.g = a;
      this.D = b;
      this.o = c;
      this.u = e;
      this.h = new cf();
      this.s = !1;
      this.F = a.readyState;
      this.j = !1;
      this.i = d;
      this.m = !1;
      this.h.A(a, 'waiting', () => ri(f));
      this.l = new P(() => {
        ri(f);
      }).Ba(0.25);
    }

    qi.prototype.release = function () {
      this.h && (this.h.release(), this.h = null);
      this.l != null && (this.l.stop(), this.l = null);
      this.i && (this.i.release(), this.i = null);
      this.g = this.D = this.u = null;
    };

    qi.prototype.Ed = function () {
      this.m = !0;
      ri(this);
    };

    function ri(a) {
      if (a.g.readyState != 0) {
        if (a.g.seeking) {
          if (!a.s) return;
        } else a.s = !1;

        if (!a.g.paused || a.g.currentTime == 0) {
          a.g.readyState != a.F && (a.j = !1, a.F = a.g.readyState);
          let b;

          if (!(b = !a.i)) {
            b = a.i;
            var c = b.j;
            var d = ni(c);
            var e = c.g.currentTime;
            var f = Date.now() / 1E3;
            if (b.g != e || b.m != d) b.l = f, b.g = e, b.m = d, b.h = !1;
            e = f - b.l;
            if (d = e >= b.s && d && !b.h) b.i(b.g, e), b.h = !0, b.g = c.g.currentTime;
            b = !d;
          }

          if (b) {
            let g = a.o.smallGapLimit;
            e = a.g.currentTime;
            b = a.g.buffered;
            c = Oh(b, e, a.o.gapDetectionThreshold);

            if (!(c == null || c == 0 && !a.m || (d = b.start(c), d >= a.D.Qa()))) {
              f = d - e;
              g = f <= g;
              let h = !1;
              f < 0.001 || (g || a.j || (a.j = !0, e = new Q('largegap', {
                currentTime: e,
                gapSize: f,
              }), e.cancelable = !0, a.u(e), a.o.jumpLargeGaps && !e.defaultPrevented && (h = !0)), !g && !h) || (c != 0 && b.end(c - 1), a.g.currentTime = d);
            }
          }
        }
      }
    }

    function si(a, b, c, d) {
      b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b ? d() : (b = ti.value().get(b), c.va(a, b, d));
    }

    var ti = new Bc(() => new Map([[HTMLMediaElement.HAVE_METADATA, 'loadedmetadata'], [HTMLMediaElement.HAVE_CURRENT_DATA, 'loadeddata'], [HTMLMediaElement.HAVE_FUTURE_DATA, 'canplay'], [HTMLMediaElement.HAVE_ENOUGH_DATA, 'canplaythrough']]));

    function ui(a, b, c) {
      const d = this;
      this.g = a;
      this.l = b;
      this.j = c;
      this.m = !1;
      this.h = new cf();
      this.i = new vi(a);
      si(this.g, HTMLMediaElement.HAVE_METADATA, this.h, () => {
        wi(d, d.j);
      });
    }

    ui.prototype.release = function () {
      this.h && (this.h.release(), this.h = null);
      this.i != null && (this.i.release(), this.i = null);

      this.l = function () {};

      this.g = null;
    };

    function xi(a) {
      return a.m ? a.g.currentTime : a.j;
    }

    function yi(a, b) {
      a.g.readyState > 0 ? zi(a.i, b) : si(a.g, HTMLMediaElement.HAVE_METADATA, a.h, () => {
        wi(a, a.j);
      });
    }

    function wi(a, b) {
      Math.abs(a.g.currentTime - b) < 0.001 ? Ai(a) : (a.h.va(a.g, 'seeking', () => {
        Ai(a);
      }), zi(a.i, a.g.currentTime == 0 ? b : a.g.currentTime));
    }

    function Ai(a) {
      a.m = !0;
      a.h.A(a.g, 'seeking', () => a.l());
    }

    function vi(a) {
      const b = this;
      this.h = a;
      this.m = 10;
      this.l = this.j = this.i = 0;
      this.g = new P(() => {
        b.i <= 0 ? b.g.stop() : b.h.currentTime != b.j ? b.g.stop() : (b.h.currentTime = b.l, b.i--);
      });
    }

    vi.prototype.release = function () {
      this.g && (this.g.stop(), this.g = null);
      this.h = null;
    };

    function zi(a, b) {
      a.j = a.h.currentTime;
      a.l = b;
      a.i = a.m;
      a.h.currentTime = b;
      a.g.Ba(0.1);
    }

    function Bi(a) {
      function b() {
        c.i == null ? c.j = !0 : (c.h.va(c.g, 'seeking', () => {
          c.j = !0;
        }), c.g.currentTime = Math.max(0, c.g.currentTime + c.i));
      }

      var c = this;
      this.g = a;
      this.j = !1;
      this.i = null;
      this.h = new cf();
      si(this.g, HTMLMediaElement.HAVE_CURRENT_DATA, this.h, () => {
        b();
      });
    }

    Bi.prototype.release = function () {
      this.h && (this.h.release(), this.h = null);
      this.g = null;
    };

    Bi.prototype.m = function (a) {
      this.i = this.j ? this.i : a;
    };

    Bi.prototype.l = function () {
      return (this.j ? this.g.currentTime : this.i) || 0;
    };

    Bi.prototype.F = function () {};

    function Ci(a, b, c, d, e, f) {
      const g = this;
      this.i = a;
      this.g = b.presentationTimeline;
      this.H = b.minBufferTime || 0;
      this.o = c;
      this.D = e;
      this.u = null;
      this.j = new qi(a, b.presentationTimeline, c, Di(a, c), f);
      this.h = new ui(a, () => {
        a: {
          var h = g.j;
          h.s = !0;
          h.m = !1;
          h.j = !1;
          let k = xi(g.h);
          h = Ei(g, k);

          if (Math.abs(h - k) > 0.001 && (k = Date.now() / 1E3, !g.u || g.u < k - 1)) {
            g.u = k;
            yi(g.h, h);
            h = void 0;
            break a;
          }

          g.D();
          h = void 0;
        }

        return h;
      }, Fi(this, d));
      this.s = new P(() => {
        if (g.i.readyState != 0 && !g.i.paused) {
          let h = xi(g.h);
          let k = g.g.zb();
          const l = g.g.Qa();
          l - k < 3 && (k = l - 3);
          h < k && (h = Ei(g, h), g.i.currentTime = h);
        }
      }).Ba(0.25);
    }

    Ci.prototype.release = function () {
      this.h && (this.h.release(), this.h = null);
      this.j && (this.j.release(), this.j = null);
      this.s && (this.s.stop(), this.s = null);
      this.i = this.h = this.g = this.o = null;

      this.D = function () {};
    };

    Ci.prototype.m = function (a) {
      yi(this.h, a);
    };

    Ci.prototype.l = function () {
      const a = xi(this.h);
      return this.i.readyState > 0 && !this.i.paused ? Gi(this, a) : a;
    };

    function Fi(a, b) {
      b == null ? b = Infinity > a.g.getDuration() ? a.g.zb() : a.g.Qa() : b < 0 && (b = a.g.Qa() + b);
      return Hi(a, Gi(a, b));
    }

    Ci.prototype.F = function () {
      this.j.Ed();
    };

    function Hi(a, b) {
      const c = a.g.getDuration();
      return b >= c ? c - a.o.durationBackoff : b;
    }

    function Ei(a, b) {
      let c = Math.max(a.H, a.o.rebufferingGoal);
      const d = a.o.safeSeekOffset;
      let e = a.g.zb();
      const f = a.g.Qa();
      const g = a.g.getDuration();
      f - e < 3 && (e = f - 3);
      const h = a.g.Vb(c);
      const k = a.g.Vb(d);
      c = a.g.Vb(c + d);
      return b >= g ? Hi(a, b) : b > f ? f : b < e ? Lh(a.i.buffered, k) ? k : c : b >= h || Lh(a.i.buffered, b) ? b : c;
    }

    function Gi(a, b) {
      let c = a.g.zb();
      if (b < c) return c;
      c = a.g.Qa();
      return b > c ? c : b;
    }

    function Di(a, b) {
      if (!b.stallEnabled) return null;
      const c = b.stallSkip;
      const d = new mi(new pi(a), b.stallThreshold);
      oi(d, () => {
        c ? a.currentTime += c : (a.pause(), a.play());
      });
      return d;
    }

    function V(a) {
      this.g = a;
      this.h = null;
      this.i = 0;
      this.j = !1;
    }

    q = V.prototype;

    q.destroy = function () {
      Ub('shaka.media.SegmentIndex', 'Please use release() instead of destroy().');
      this.release();
      return Promise.resolve();
    };

    q.release = function () {
      this.j || (this.g = [], this.h && this.h.stop(), this.h = null);
    };

    q.uf = function () {
      this.j = !0;
    };

    q.find = function (a) {
      for (let b = this.g.length - 1, c = b; c >= 0; --c) {
        const d = this.g[c];
        const e = c < b ? this.g[c + 1].startTime : d.endTime;
        if (a >= d.startTime && a < e) return c + this.i;
      }

      return this.g.length && a < this.g[0].startTime ? this.i : null;
    };

    q.get = function (a) {
      if (this.g.length == 0) return null;
      a -= this.i;
      return a < 0 || a >= this.g.length ? null : this.g[a];
    };

    q.offset = function (a) {
      if (!this.j) for (let b = r(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.startTime += a, c.endTime += a, c.timestampOffset += a;
    };

    q.Ec = function (a) {
      !this.j && a.length && (this.g = this.g.filter((b) => b.startTime < a[0].startTime), this.g.push.apply(this.g, ja(a)));
    };

    q.Bb = function (a, b) {
      const c = this;
      a = a.filter((d) => d.endTime > b && (c.g.length == 0 || d.endTime > c.g[0].startTime));
      this.Ec(a);
      this.eb(b);
    };

    q.eb = function (a) {
      if (!this.j) {
        const b = this.g.length;
        this.g = this.g.filter((c) => c.endTime > a);
        this.i += b - this.g.length;
      }
    };

    q.Ya = function (a, b, c) {
      c = void 0 === c ? !1 : c;

      if (!this.j) {
        for (; this.g.length;) if (this.g[this.g.length - 1].startTime >= b) this.g.pop(); else break;

        for (; this.g.length;) if (this.g[0].endTime <= a) this.g.shift(), c || this.i++; else break;

        this.g.length != 0 && (a = this.g[this.g.length - 1], this.g[this.g.length - 1] = new li(a.startTime, b, a.i, a.ja, a.ea, a.h, a.timestampOffset, a.appendWindowStart, a.appendWindowEnd, a.g, a.tilesLayout));
      }
    };

    q.Mc = function (a, b) {
      const c = this;
      this.j || (this.h && this.h.stop(), this.h = new P(() => {
        const d = b();
        d ? c.g.push.apply(c.g, ja(d)) : (c.h.stop(), c.h = null);
      }), this.h.Ba(a));
    };

    V.prototype[Symbol.iterator] = function () {
      return this.yb(0);
    };

    V.prototype.yb = function (a) {
      let b = this.find(a);
      if (b == null) return null;
      b--;
      const c = this.get(b + 1);
      let d = -1;
      if (c && c.g.length > 0) {
        for (let e = c.g.length - 1; e >= 0; --e) {
          const f = c.g[e];

          if (a >= f.startTime && a < f.endTime) {
            b++;
            d = e - 1;
            break;
          }
        }
      }
      return new Ii(this, b, d);
    };

    function Ji(a, b, c) {
      return new V([new li(a, a + b, () => c, 0, null, null, a, a, a + b)]);
    }

    M('shaka.media.SegmentIndex', V);
    V.forSingleSegment = Ji;
    V.prototype.getIteratorForTime = V.prototype.yb;
    V.prototype.updateEvery = V.prototype.Mc;
    V.prototype.fit = V.prototype.Ya;
    V.prototype.evict = V.prototype.eb;
    V.prototype.mergeAndEvict = V.prototype.Bb;
    V.prototype.merge = V.prototype.Ec;
    V.prototype.offset = V.prototype.offset;
    V.prototype.get = V.prototype.get;
    V.prototype.find = V.prototype.find;
    V.prototype.markImmutable = V.prototype.uf;
    V.prototype.release = V.prototype.release;
    V.prototype.destroy = V.prototype.destroy;

    function Ii(a, b, c) {
      this.i = a;
      this.h = b;
      this.g = c;
    }

    Ii.prototype.seek = function (a) {
      Ub('shaka.media.SegmentIterator', 'Please use SegmentIndex.getIteratorForTime instead of seek().');
      (a = this.i.yb(a)) ? (this.h = a.h, this.g = a.g) : (this.h = Number.MAX_VALUE, this.g = 0);
      return this.next().value;
    };

    Ii.prototype.current = function () {
      let a = this.i.get(this.h);
      a && a.g.length > 0 && a.ma().length && this.g >= a.g.length && (this.h++, this.g = 0, a = this.i.get(this.h));
      return a && a.g.length > 0 ? a.g[this.g] : a;
    };

    Ii.prototype.next = function () {
      let a = this.i.get(this.h);
      a && a.g.length > 0 ? (this.g++, a.ma().length && this.g == a.g.length && (this.h++, this.g = 0)) : (this.h++, this.g = 0);
      a = this.current();
      return {
        value: a,
        done: !a,
      };
    };

    M('shaka.media.SegmentIterator', Ii);
    Ii.prototype.next = Ii.prototype.next;
    Ii.prototype.current = Ii.prototype.current;
    Ii.prototype.seek = Ii.prototype.seek;

    function Ki() {
      V.call(this, []);
      this.l = [];
    }

    qa(Ki, V);
    q = Ki.prototype;

    q.clone = function () {
      const a = new Ki();
      a.l = this.l.slice();
      return a;
    };

    q.release = function () {
      for (let a = r(this.l), b = a.next(); !b.done; b = a.next()) b.value.release();

      this.l = [];
    };

    q.find = function (a) {
      for (let b = 0, c = r(this.l), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        const e = d.find(a);
        if (e != null) return e + b;
        b += d.i + d.g.length;
      }

      return null;
    };

    q.get = function (a) {
      for (let b = 0, c = r(this.l), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        const e = d.get(a - b);
        if (e) return e;
        b += d.i + d.g.length;
      }

      return null;
    };

    q.offset = function () {};

    q.Ec = function () {};

    q.eb = function () {};

    q.Bb = function () {};

    q.Ya = function () {};

    q.Mc = function () {};

    M('shaka.media.MetaSegmentIndex', Ki);
    Ki.prototype.updateEvery = Ki.prototype.Mc;
    Ki.prototype.fit = Ki.prototype.Ya;
    Ki.prototype.mergeAndEvict = Ki.prototype.Bb;
    Ki.prototype.evict = Ki.prototype.eb;
    Ki.prototype.merge = Ki.prototype.Ec;
    Ki.prototype.offset = Ki.prototype.offset;
    Ki.prototype.get = Ki.prototype.get;
    Ki.prototype.find = Ki.prototype.find;
    Ki.prototype.release = Ki.prototype.release;

    function Li(a) {
      const b = this;
      this.g = a;
      this.j = !1;
      this.i = this.g.Bc();
      this.h = new P(() => {
        b.g.ke(0.25 * b.i);
      });
    }

    Li.prototype.release = function () {
      this.h && (this.h.stop(), this.h = null);
      this.g = null;
    };

    Li.prototype.set = function (a) {
      this.i = a;
      Mi(this);
    };

    Li.prototype.yc = function () {
      return this.g.yc();
    };

    function Mi(a) {
      a.h.stop();
      const b = a.j ? 0 : a.i;
      if (b >= 0) {
        try {
          a.g.Bc() != b && a.g.Pd(b);
          return;
        } catch (c) {}
      }
      a.h.Ba(0.25);
      a.g.Bc() != 0 && a.g.Pd(0);
    }

    function Ni(a) {
      const b = this;
      this.h = a;
      this.g = new Set();
      this.i = new P(() => {
        Oi(b, !1);
      }).Ba(0.25);
    }

    Ni.prototype.release = function () {
      this.i.stop();

      for (let a = r(this.g), b = a.next(); !b.done; b = a.next()) b.value.release();

      this.g.clear();
    };

    function Oi(a, b) {
      for (let c = r(a.g), d = c.next(); !d.done; d = c.next()) {
        d = d.value;

        for (let e = a.h.currentTime, f = b, g = r(d.l.g), h = g.next(); !h.done; h = g.next()) {
          h = h.value;
          const k = d.j.get(h);
          const l = e < h.startTime ? Pi : e > h.endTime ? Qi : Ri;
          d.j.set(h, l);

          for (let m = r(d.m), n = m.next(); !n.done; n = m.next()) n = n.value, n.tb == k && n.sb == l && n.jb(h, f);
        }
      }
    }

    function Si(a) {
      const b = this;

      this.h = function () {};

      this.g = new Set();
      this.j = a;
      this.i = new P(() => {
        for (let c = b.j(), d = r(b.g), e = d.next(); !e.done; e = d.next()) e = e.value, e.endTime < c.start && b.g.delete(e);
      }).Ba(2);
    }

    Si.prototype.release = function () {
      this.h = function () {};

      this.g.clear();
      this.i.stop();
    };

    function Ti(a, b) {
      a.h = b;
    }

    function Ui(a) {
      const b = this;
      this.l = a;
      this.j = new Map();

      this.g = function () {};

      this.h = function () {};

      this.i = function () {};

      this.m = [{
        tb: null,
        sb: Ri,

        jb(c, d) {
          return b.g(c, d);
        },

      }, {
        tb: Pi,
        sb: Ri,

        jb(c, d) {
          return b.g(c, d);
        },

      }, {
        tb: Qi,
        sb: Ri,

        jb(c, d) {
          return b.g(c, d);
        },

      }, {
        tb: Ri,
        sb: Pi,

        jb(c, d) {
          return b.h(c, d);
        },

      }, {
        tb: Ri,
        sb: Qi,

        jb(c, d) {
          return b.h(c, d);
        },

      }, {
        tb: Pi,
        sb: Qi,

        jb(c, d) {
          return b.i(c, d);
        },

      }, {
        tb: Qi,
        sb: Pi,

        jb(c, d) {
          return b.i(c, d);
        },

      }];
    }

    Ui.prototype.release = function () {
      this.l = null;
      this.j.clear();

      this.g = function () {};

      this.h = function () {};

      this.i = function () {};
    };

    function Vi(a, b, c, d) {
      a.g = b;
      a.h = c;
      a.i = d;
    }

    var Pi = 1;
    var Ri = 2;
    var Qi = 3;

    function Wi(a, b, c, d, e) {
      a = Ue(a, d, e);
      if (b != 0 || c != null) a.headers.Range = c ? `bytes=${b}-${c}` : `bytes=${b}-`;
      return a;
    }

    function Xi(a, b) {
      const c = this;
      this.C = b;
      this.B = a;
      this.o = null;
      this.l = 1;
      this.i = this.h = null;
      this.g = new Map();
      this.m = !1;
      this.s = null;
      this.j = !1;
      this.I = new af(() => Yi(c));
    }

    Xi.prototype.destroy = function () {
      return this.I.destroy();
    };

    function Yi(a) {
      let b;
      let c;
      let d;
      let e;
      return I((f) => {
        if (f.g == 1) {
          b = [];
          c = r(a.g.values());

          for (d = c.next(); !d.done; d = c.next()) e = d.value, Zi(e), b.push($i(e));

          return u(f, Promise.all(b), 2);
        }

        a.g.clear();
        a.C = null;
        a.B = null;
        a.o = null;
        z(f);
      });
    }

    Xi.prototype.configure = function (a) {
      this.o = a;
      this.s = new Be({
        maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
        baseDelay: a.retryParameters.baseDelay,
        backoffFactor: a.retryParameters.backoffFactor,
        fuzzFactor: a.retryParameters.fuzzFactor,
        timeout: 0,
        stallTimeout: 0,
        connectionTimeout: 0,
      }, !0);
    };

    Xi.prototype.start = function () {
      const a = this;
      return I((b) => {
        if (b.g == 1) return u(b, aj(a), 2);
        bf(a.I);
        a.m = !0;
        z(b);
      });
    };

    function bj(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      I((k) => {
        switch (k.g) {
          case 1:
            return c = zc, A(k, 2), u(k, ei(a.C.P, c.aa), 4);

          case 4:
            va(k, 3);
            break;

          case 2:
            if (d = C(k), a.C) a.C.onError(d);

          case 3:
            e = Vc(b.mimeType, b.codecs);
            Th(a.C.P, e);
            f = a.C.P.m;
            if (g = f.isTextVisible() || a.o.alwaysStreamText) h = cj(b), a.g.set(c.aa, h), dj(a, h, 0);
            z(k);
        }
      });
    }

    function ej(a) {
      const b = a.g.get(yc);
      b && (Zi(b), $i(b).catch(() => {}), a.g.delete(yc));
      a.i = null;
    }

    function fj(a, b) {
      const c = a.g.get('video');

      if (c) {
        let d = c.stream;
        if (d) {
          if (b) {
            const e = d.trickModeVideo;
            e && !c.pb && (gj(a, e, !1, 0, !1), c.pb = d);
          } else if (d = c.pb) c.pb = null, gj(a, d, !0, 0, !1);
        }
      }
    }

    function hj(a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? 0 : d;
      e = void 0 === e ? !1 : e;
      a.h = b;
      a.m && (b.video && gj(a, b.video, c, d, e), b.audio && gj(a, b.audio, c, d, e));
    }

    function ij(a, b) {
      a.i = b;
      a.m && gj(a, b, !0, 0, !1);
    }

    function gj(a, b, c, d, e) {
      const f = a.g.get(b.type);
      f || b.type != yc ? f && (f.pb && (b.trickModeVideo ? (f.pb = b, b = b.trickModeVideo) : f.pb = null), f.stream != b || e) && (b.type == yc && Th(a.C.P, Vc(b.mimeType, b.codecs)), f.stream = b, f.ca = null, c && (f.Qb ? f.Pc = !0 : f.Ra ? (f.rb = !0, f.uc = d, f.Pc = !0) : (Zi(f), jj(a, f, !0, d).catch((g) => {
        if (a.C) a.C.onError(g);
      }))), kj(a, f).catch((g) => {
        if (a.C) a.C.onError(g);
      })) : bj(a, b);
    }

    function kj(a, b) {
      let c;
      let d;
      return I((e) => {
        if (e.g == 1) {
          if (!b.wa) return e.return();
          c = b.stream;
          d = b.wa;
          return c.segmentIndex ? e.v(2) : u(e, c.createSegmentIndex(), 2);
        }

        if (b.wa != d || b.stream != c) return e.return();
        let f = a.C.Ac();
        const g = Yh(a.C.P, b.type);
        let h = b.stream.segmentIndex.find(b.Aa ? b.Aa.endTime : f);
        let k = h == null ? null : b.stream.segmentIndex.get(h);
        h = k ? k.ea ? k.ea - k.ja : null : null;
        k && !h && (h = (k.endTime - k.startTime) * (b.stream.bandwidth || 0) / 8);
        h ? ((k = k.h) && (h += (k.ea ? k.ea - k.ja : null) || 0), k = a.C.getBandwidthEstimate(), f = 8 * h / k < (g || 0) - f - Math.max(a.B.minBufferTime || 0, a.o.rebufferingGoal) || b.wa.h.g > h ? !0 : !1) : f = !1;
        f && b.wa.abort();
        z(e);
      });
    }

    function lj(a, b) {
      b.Qb || b.rb || (b.Ra ? (b.rb = !0, b.uc = 0) : Wh(a.C.P, b.type) == null ? b.La == null && dj(a, b, 0) : (Zi(b), jj(a, b, !1, 0).catch((c) => {
        if (a.C) a.C.onError(c);
      })));
    }

    function aj(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      return I((n) => {
        if (n.g == 1) {
          b = zc;
          if (!a.h) throw new O(2, 5, 5006);
          c = new Map();
          d = new Set();
          a.h.audio && (c.set(b.bb, a.h.audio), d.add(a.h.audio));
          a.h.video && (c.set(b.Na, a.h.video), d.add(a.h.video));
          a.i && (c.set(b.aa, a.i), d.add(a.i));
          e = a.C.P;
          f = a.o.forceTransmuxTS;
          return u(n, e.init(c, f), 2);
        }

        bf(a.I);
        const p = a.B.presentationTimeline.getDuration();
        Infinity > p ? a.C.P.Ja(p) : a.C.P.Ja(Math.pow(2, 32));
        g = r(c.keys());

        for (h = g.next(); !h.done; h = g.next()) {
          k = h.value, l = c.get(k), a.g.has(k) || (m = cj(l), a.g.set(k, m), dj(a, m, 0));
        }

        z(n);
      });
    }

    function cj(a) {
      return {
        stream: a,
        type: a.type,
        ca: null,
        Aa: null,
        Dc: null,
        vd: null,
        ud: null,
        td: null,
        pb: null,
        endOfStream: !1,
        Ra: !1,
        La: null,
        rb: !1,
        uc: 0,
        Pc: !1,
        Qb: !1,
        Hd: !1,
        Xb: !1,
        wa: null,
      };
    }

    Xi.prototype.Zb = function (a) {
      const b = this;
      let c;
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        switch (h.g) {
          case 1:
            bf(b.I);
            if (a.Ra || a.La == null || a.Qb) return h.return();
            a.La = null;

            if (!a.rb) {
              h.v(2);
              break;
            }

            return u(h, jj(b, a, a.Pc, a.uc), 3);

          case 3:
            return h.return();

          case 2:
            if (a.stream.segmentIndex) {
              h.v(4);
              break;
            }

            c = a.stream;
            return u(h, a.stream.createSegmentIndex(), 5);

          case 5:
            if (c != a.stream) return a.La == null && dj(b, a, 0), h.return();

          case 4:
            A(h, 6);
            d = mj(b, a);
            d != null && (dj(b, a, d), a.Xb = !1);
            va(h, 7);
            break;

          case 6:
            return e = C(h), u(h, nj(b, e), 8);

          case 8:
            return h.return();

          case 7:
            f = Array.from(b.g.values());

            if (!b.m || !f.every((k) => k.endOfStream)) {
              h.v(0);
              break;
            }

            return u(h, b.C.P.endOfStream(), 10);

          case 10:
            bf(b.I), g = b.C.P.getDuration(), g != 0 && g < b.B.presentationTimeline.getDuration() && b.B.presentationTimeline.Ja(g), z(h);
        }
      });
    };

    function mj(a, b) {
      if (oj(b)) return ci(a.C.P, b.stream.originalId || ''), null;
      b.type == yc && di(a.C.P);
      let c = a.C.Ac();
      const d = b.Aa ? b.Aa.endTime : c;
      let e = Zh(a.C.P, b.type, c);
      let f = Math.max(a.B.minBufferTime || 0, a.o.rebufferingGoal, a.o.bufferingGoal) * a.l;
      if (d >= a.B.presentationTimeline.getDuration()) return b.endOfStream = !0, b.type == 'video' && (c = a.g.get(yc)) && oj(c) && (c.endOfStream = !0), null;
      b.endOfStream = !1;
      if (e >= f) return a.o.updateIntervalSeconds / 2;
      e = Yh(a.C.P, b.type);
      e = pj(a, b, c, e);
      if (!e) return a.o.updateIntervalSeconds;
      f = Infinity;
      let g = Array.from(a.g.values());
      g = r(g);

      for (let h = g.next(); !h.done; h = g.next()) h = h.value, oj(h) || h.ca && !h.ca.current() || (f = Math.min(f, h.Aa ? h.Aa.endTime : c));

      if (d >= f + a.B.presentationTimeline.g) return a.o.updateIntervalSeconds;
      qj(a, b, c, e).catch(() => {});
      return null;
    }

    function pj(a, b, c, d) {
      if (b.ca) return b.ca.current();
      if (b.Aa || d) return b.ca = b.stream.segmentIndex.yb(b.Aa ? b.Aa.endTime : d), b.ca && b.ca.next().value;
      a = a.o.inaccurateManifestTolerance;
      d = Math.max(c - a, 0);
      let e = null;
      a && (b.ca = b.stream.segmentIndex.yb(d), e = b.ca && b.ca.next().value);
      e || (b.ca = b.stream.segmentIndex.yb(c), e = b.ca && b.ca.next().value);
      return e;
    }

    function qj(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      return I((x) => {
        switch (x.g) {
          case 1:
            return e = zc, f = b.stream, g = b.ca, b.Ra = !0, A(x, 2), u(x, rj(a, b, d), 4);

          case 4:
            bf(a.I);
            if (a.j) return x.return();
            h = f.mimeType == 'video/mp4' || f.mimeType == 'audio/mp4';
            k = window.ReadableStream;

            if (a.o.lowLatencyMode && k && h) {
              return n = new Uint8Array(0), p = function (y) {
                let E;
                let D;
                let B;
                return I((F) => {
                  bf(a.I);
                  if (a.j) return F.return();
                  n = sj(n, y);
                  E = !1;
                  D = 0;
                  new jg().box('mdat', (G) => {
                    D = G.size + G.start;
                    E = !0;
                  }).parse(n, !1, !0);
                  if (!E) return F.v(0);
                  B = n.subarray(0, D);
                  n = n.subarray(D);
                  return u(F, tj(a, b, c, f, d, B), 0);
                });
              }, u(x, uj(a, b, d, p), 6);
            }

            l = uj(a, b, d);
            return u(x, l, 7);

          case 7:
            return m = x.h, bf(a.I), a.j ? x.return() : b.rb ? (b.Ra = !1, dj(a, b, 0), x.return()) : u(x, tj(a, b, c, f, d, m), 6);

          case 6:
            bf(a.I);
            if (a.j) return x.return();
            b.Aa = d;
            g.next();
            b.Ra = !1;
            b.Hd = !1;
            t = a.C.P.xc();
            v = t[b.type];
            $a(JSON.stringify(v));
            b.rb || a.C.Ed();
            dj(a, b, 0);
            va(x, 0);
            break;

          case 2:
            w = C(x);
            bf(a.I, w);
            if (a.j) return x.return();
            b.Ra = !1;
            if (w.code == 7001) b.Ra = !1, b.La = null, dj(a, b, 0), x.v(0); else if (b.type == e.aa && a.o.ignoreTextStreamFailures) a.g.delete(e.aa), x.v(0); else if (w.code == 3017) vj(a, b, w), x.v(0); else if (w.code == 1001 && w.data && w.data[1] == 404) b.Ra = !1, b.La = null, dj(a, b, 1), x.v(0); else return b.Xb = !0, w.severity = 2, u(x, nj(a, w), 0);
        }
      });
    }

    function sj(a, b) {
      const c = new Uint8Array(a.length + b.length);
      c.set(a);
      c.set(b, a.length);
      return c;
    }

    function vj(a, b, c) {
      if (!Array.from(a.g.values()).some((e) => e != b && e.Hd)) {
        const d = Math.round(100 * a.l);
        if (d > 20) a.l -= 0.2; else if (d > 4) a.l -= 0.04; else {
          b.Xb = !0;
          a.j = !0;
          a.C.onError(c);
          return;
        }
        b.Hd = !0;
      }

      dj(a, b, 4);
    }

    function rj(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        d = [];
        e = Math.max(0, c.appendWindowStart - 0.1);
        f = c.appendWindowEnd + 0.01;
        g = c.timestampOffset;
        if (g != b.vd || e != b.ud || f != b.td) {
          h = function () {
            let n;
            return I((p) => {
              if (p.g == 1) return A(p, 2), b.ud = e, b.td = f, b.vd = g, u(p, fi(a.C.P, b.type, g, e, f), 4);
              if (p.g != 2) return va(p, 0);
              n = C(p);
              b.ud = null;
              b.td = null;
              b.vd = null;
              throw n;
            });
          }, d.push(h());
        }
        !ki(c.h, b.Dc) && (b.Dc = c.h) && (k = uj(a, b, c.h), l = function () {
          let n;
          let p;
          let t;
          return I((v) => {
            switch (v.g) {
              case 1:
                return A(v, 2), u(v, k, 4);

              case 4:
                return n = v.h, bf(a.I), p = b.stream.closedCaptions && b.stream.closedCaptions.size > 0, u(v, $h(a.C.P, b.type, n, null, null, p), 5);

              case 5:
                va(v, 0);
                break;

              case 2:
                throw t = C(v), b.Dc = null, t;
            }
          });
        }, d.push(l()));
        return u(m, Promise.all(d), 0);
      });
    }

    function tj(a, b, c, d, e, f) {
      let g;
      return I((h) => {
        if (h.g == 1) {
          return g = d.closedCaptions && d.closedCaptions.size > 0, d.emsgSchemeIdUris != null && d.emsgSchemeIdUris.length > 0 && new jg().V('emsg', (k) => {
            let l = d.emsgSchemeIdUris;

            if (k.version === 0) {
              var m = k.reader.ac();
              var n = k.reader.ac();
              var p = k.reader.M();
              var t = k.reader.M();
              var v = k.reader.M();
              var w = k.reader.M();
              var x = e.startTime + t / p;
            } else p = k.reader.M(), x = k.reader.nb() / p + e.timestampOffset, t = x - e.startTime, v = k.reader.M(), w = k.reader.M(), m = k.reader.ac(), n = k.reader.ac();

            k = k.reader.$a(k.reader.R.byteLength - k.reader.Z());
            l.includes(m) && (m == 'urn:mpeg:dash:event:2012' ? a.C.Af() : (l = new Q(wj, {
              detail: {
                startTime: x,
                endTime: x + v / p,
                schemeIdUri: m,
                value: n,
                timescale: p,
                presentationTimeDelta: t,
                eventDuration: v,
                id: w,
                messageData: k,
              },
            }), a.C.onEvent(l)));
          }).parse(f), u(h, xj(a, b, c), 2);
        }

        if (h.g != 3) return bf(a.I), u(h, $h(a.C.P, b.type, f, e.startTime, e.endTime, g), 3);
        bf(a.I);
        z(h);
      });
    }

    function xj(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) {
          d = Math.max(a.o.bufferBehind, a.B.presentationTimeline.g);
          e = Wh(a.C.P, b.type);
          if (e == null) return h.return();
          f = c - e;
          g = f - d;
          return g <= 0.01 ? h.return() : u(h, a.C.P.remove(b.type, e, e + g), 2);
        }

        bf(a.I);
        z(h);
      });
    }

    function oj(a) {
      return a && a.type == yc && (a.stream.mimeType == 'application/cea-608' || a.stream.mimeType == 'application/cea-708');
    }

    function uj(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        if (k.g == 1) return e = $e, f = Wi(c.ma(), c.ja, c.ea, a.o.retryParameters, d), g = a.C.lb.request(e, f), b.wa = g, u(k, g.promise, 2);
        h = k.h;
        b.wa = null;
        return k.return(h.data);
      });
    }

    function jj(a, b, c, d) {
      let e;
      let f;
      return I((g) => {
        if (g.g == 1) return b.rb = !1, b.Pc = !1, b.uc = 0, b.Qb = !0, b.Aa = null, b.Dc = null, b.ca = null, d ? (e = a.C.Ac(), f = a.C.P.getDuration(), u(g, a.C.P.remove(b.type, e + d, f), 3)) : u(g, ei(a.C.P, b.type), 4);
        if (g.g != 3) return bf(a.I), c ? u(g, a.C.P.flush(b.type), 3) : g.v(3);
        bf(a.I);
        b.Qb = !1;
        b.endOfStream = !1;
        dj(a, b, 0);
        z(g);
      });
    }

    function dj(a, b, c) {
      const d = b.type;
      if (d != yc || a.g.has(d)) {
        b.La = new rd(() => {
          let e;
          return I((f) => {
            if (f.g == 1) return A(f, 2), u(f, a.Zb(b), 4);
            if (f.g != 2) return va(f, 0);
            e = C(f);
            if (a.C) a.C.onError(e);
            z(f);
          });
        }).S(c);
      }
    }

    function Zi(a) {
      a.La != null && (a.La.stop(), a.La = null);
    }

    function $i(a) {
      return I((b) => (a.wa ? u(b, a.wa.abort(), 0) : b.v(0)));
    }

    function nj(a, b) {
      return I((c) => {
        if (c.g == 1) return u(c, De(a.s), 2);
        bf(a.I);
        a.C.onError(b);
        b.handled || a.o.failureCallback(b);
        z(c);
      });
    }

    function yj(a, b) {
      const c = zj();
      const d = this;
      this.j = b;
      this.i = a;
      this.l = c;
      this.s = null;
      this.m = [];
      this.h = this.g = null;
      this.u = Promise.resolve().then(() => Aj(d));
      this.I = new af(() => Bj(d));
    }

    yj.prototype.destroy = function () {
      return this.I.destroy();
    };

    function Bj(a) {
      let b;
      let c;
      let d;
      return I((e) => {
        if (e.g == 1) return a.h && a.h.abort(), Cj(a), u(e, a.u, 2);
        a.g && a.g.Ha.mb();
        b = r(a.m);

        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.Ha.mb();

        a.g = null;
        a.m = [];
        a.j = null;
        z(e);
      });
    }

    function Dj(a, b) {
      const c = {
        Db() {},

        Fc() {},

        mb() {},

        onError() {},

        Hc() {},

        Cg() {},

      };
      a.m.push({
        create: b,
        Ha: c,
      });
      a.h && a.h.abort();
      Cj(a);
      return c;
    }

    function Aj(a) {
      return I((b) => {
        if (a.I.g) b = b.v(0); else {
          if (a.m.length == 0 || a.g && !a.g.ib) var c = !1; else {
            a.g && (a.g.Ha.mb(), a.g = null);
            c = a.m.shift();
            const d = c.create(a.l);
            d ? (c.Ha.Db(), a.g = {
              node: d.node,
              payload: d.payload,
              ib: d.ib,
              Ha: c.Ha,
            }) : c.Ha.Hc();
            c = !0;
          }
          c ? c = Promise.resolve() : a.g ? c = Ej(a) : (a.j.zf(a.i), a.s = new Ac(), c = a.s);
          b = u(b, c, 1);
        }
        return b;
      });
    }

    function Ej(a) {
      let b;
      let c;
      return I((d) => {
        switch (d.g) {
          case 1:
            return a.i = a.j.cf(a.i, a.l, a.g.node, a.g.payload), A(d, 2), a.h = a.j.Pe(a.i, a.l, a.g.payload), u(d, a.h.promise, 4);

          case 4:
            a.h = null;
            a.i == a.g.node && (a.g.Ha.Fc(), a.g = null);
            va(d, 0);
            break;

          case 2:
            b = C(d);
            if (b.code == 7001) a.g.Ha.mb(); else a.g.Ha.onError(b);
            a.g = null;
            a.h = null;
            c = a;
            return u(d, a.j.handleError(a.l, b), 5);

          case 5:
            c.i = d.h, z(d);
        }
      });
    }

    function Cj(a) {
      a.s && (a.s.resolve(), a.s = null);
    }

    function Fj(a) {
      this.g = null;

      for (let b = r(Array.from(a.textTracks)), c = b.next(); !c.done; c = b.next()) c = c.value, c.mode = 'disabled', c.label == 'Shaka Player TextTrack' && (this.g = c);

      this.g || (this.g = a.addTextTrack('subtitles', 'Shaka Player TextTrack'));
      this.g.mode = 'hidden';
    }

    q = Fj.prototype;

    q.remove = function (a, b) {
      if (!this.g) return !1;
      Gj(this.g, (c) => c.startTime < b && c.endTime > a);
      return !0;
    };

    q.append = function (a) {
      function b(g) {
        let h = [];
        let k = g.fontWeight >= 700;
        const l = g.fontStyle == 'italic';
        const m = g.textDecoration.includes('underline');
        k && h.push('b');
        l && h.push('i');
        m && h.push('u');
        k = h.reduce((n, p) => `${n}<${p}>`, '');
        h = h.reduceRight((n, p) => `${n}</${p}>`, '');
        return g.lineBreak || g.spacer ? (g.spacer && Ub('shaka.extern.Cue', 'Please use lineBreak instead of spacer.'), '\n') : g.nestedCues.length ? g.nestedCues.map(b).join('') : k + g.payload + h;
      }

      let c = a.map((g) => {
        if (g.nestedCues.length) {
          const h = g.clone();
          h.nestedCues = [];
          h.payload = b(g);
          return h;
        }

        return g;
      });
      const d = [];
      a = this.g.cues ? Array.from(this.g.cues) : [];
      let e = {};
      c = r(c);

      for (let f = c.next(); !f.done; e = {
        ub: e.ub,
      }, f = c.next()) {
        e.ub = f.value, a.some(function (g) {
          return function (h) {
            return h.startTime == g.ub.startTime && h.endTime == g.ub.endTime && h.text == g.ub.payload ? !0 : !1;
          };
        }(e)) || (f = Hj(e.ub)) && d.push(f);
      }

      a = d.slice().sort((g, h) => (g.startTime != h.startTime ? g.startTime - h.startTime : g.endTime != h.endTime ? g.endTime - h.startTime : 'line' in VTTCue.prototype ? d.indexOf(h) - d.indexOf(g) : d.indexOf(g) - d.indexOf(h)));
      a = r(a);

      for (e = a.next(); !e.done; e = a.next()) this.g.addCue(e.value);
    };

    q.destroy = function () {
      this.g && (Gj(this.g, () => !0), this.g.mode = 'disabled');
      this.g = null;
      return Promise.resolve();
    };

    q.isTextVisible = function () {
      return this.g.mode == 'showing';
    };

    q.setTextVisibility = function (a) {
      this.g.mode = a ? 'showing' : 'hidden';
    };

    function Hj(a) {
      if (a.startTime >= a.endTime) return null;
      const b = new VTTCue(a.startTime, a.endTime, a.payload);
      b.lineAlign = a.lineAlign;
      b.positionAlign = a.positionAlign;
      a.size && (b.size = a.size);

      try {
        b.align = a.textAlign;
      } catch (c) {}

      a.textAlign == 'center' && b.align != 'center' && (b.align = 'middle');
      a.writingMode == 'vertical-lr' ? b.vertical = 'lr' : a.writingMode == 'vertical-rl' && (b.vertical = 'rl');
      a.lineInterpretation == 1 && (b.snapToLines = !1);
      a.line != null && (b.line = a.line);
      a.position != null && (b.position = a.position);
      return b;
    }

    function Gj(a, b) {
      const c = a.mode;
      a.mode = c == 'showing' ? 'showing' : 'hidden';

      for (let d = r(Array.from(a.cues)), e = d.next(); !e.done; e = d.next()) (e = e.value) && b(e) && a.removeCue(e);

      a.mode = c;
    }

    M('shaka.text.SimpleTextDisplayer', Fj);
    Fj.prototype.setTextVisibility = Fj.prototype.setTextVisibility;
    Fj.prototype.isTextVisible = Fj.prototype.isTextVisible;
    Fj.prototype.destroy = Fj.prototype.destroy;
    Fj.prototype.append = Fj.prototype.append;
    Fj.prototype.remove = Fj.prototype.remove;

    function Ij() {}

    function Jj(a) {
      for (; a.firstChild;) a.removeChild(a.firstChild);
    }

    M('shaka.util.Dom', Ij);
    Ij.removeAllChildren = Jj;

    function Kj(a, b) {
      const c = this;
      this.u = !1;
      this.j = [];
      this.g = a;
      this.m = b;
      this.i = document.createElement('div');
      this.i.classList.add('shaka-text-container');
      this.i.style.textAlign = 'center';
      this.i.style.display = 'flex';
      this.i.style.flexDirection = 'column';
      this.i.style.alignItems = 'center';
      this.i.style.justifyContent = 'flex-end';
      this.m.appendChild(this.i);
      this.D = new P(() => {
        Lj(c);
      }).Ba(0.25);
      this.l = new Map();
      this.h = new cf();
      this.h.A(document, 'fullscreenchange', () => {
        Lj(c, !0);
      });
      this.s = null;
      'ResizeObserver' in window && (this.s = new ResizeObserver(() => {
        Lj(c, !0);
      }), this.s.observe(this.i));
    }

    q = Kj.prototype;

    q.append = function (a) {
      const b = [].concat(ja(this.j));
      let c = {};
      a = r(a);

      for (let d = a.next(); !d.done; c = {
        hc: c.hc,
      }, d = a.next()) {
        c.hc = d.value, b.some(function (e) {
          return function (f) {
            return Cb(f, e.hc);
          };
        }(c)) || this.j.push(c.hc);
      }

      Lj(this);
    };

    q.destroy = function () {
      this.m.removeChild(this.i);
      this.i = null;
      this.u = !1;
      this.j = [];
      this.D && this.D.stop();
      this.l.clear();
      this.h && (this.h.release(), this.h = null);
      this.s && (this.s.disconnect(), this.s = null);
    };

    q.remove = function (a, b) {
      if (!this.i) return !1;
      this.j = this.j.filter((c) => c.startTime < a || c.endTime >= b);
      Lj(this);
      return !0;
    };

    q.isTextVisible = function () {
      return this.u;
    };

    q.setTextVisibility = function (a) {
      this.u = a;
    };

    function Lj(a, b) {
      function c(h) {
        return a.j.includes(h) && a.u && h.startTime <= d && h.endTime > d;
      }

      b = void 0 === b ? !1 : b;

      for (var d = a.g.currentTime, e = r(a.l.keys()), f = e.next(); !f.done; f = e.next()) {
        if (f = f.value, !c(f) || b) {
          var g = a.l.get(f);
          a.i.removeChild(g);
          a.l.delete(f);
        }
      }

      e = new Set(a.l.values());
      f = r(Array.from(a.i.childNodes));

      for (g = f.next(); !g.done; g = f.next()) g = g.value, e.has(g) || a.i.removeChild(g);

      e = a.j.filter((h) => c(h) && !a.l.has(h)).sort((h, k) => (h.startTime != k.startTime ? h.startTime - k.startTime : h.endTime - k.endTime));
      e = r(e);

      for (f = e.next(); !f.done; f = e.next()) f = f.value, g = Mj(a, a.i, f, !1), a.l.set(f, g);
    }

    function Mj(a, b, c, d) {
      let e = d ? 'span' : 'div';
      if (c.lineBreak || c.spacer) c.spacer && Ub('shaka.extern.Cue', 'Please use lineBreak instead of spacer.'), e = 'br';
      const f = document.createElement(e);
      e != 'br' && Nj(a, f, c, d);
      e = f;
      !d && c.nestedCues.length && (e = document.createElement('span'), e.classList.add('shaka-text-wrapper'), f.appendChild(e));
      c = r(c.nestedCues);

      for (d = c.next(); !d.done; d = c.next()) Mj(a, e, d.value, !0);

      b.appendChild(f);
      return f;
    }

    function Nj(a, b, c, d) {
      let e = b.style;
      const f = c.nestedCues.length == 0;
      e.whiteSpace = 'pre-wrap';
      const g = c.payload.replace(/\s+$/g, (h) => '\u00a0'.repeat(h.length));
      d ? b.textContent = g : g.length && (e = document.createElement('span'), e.textContent = g, b.appendChild(e), e = e.style);
      e.backgroundColor = c.backgroundColor;
      e.border = c.border;
      e.color = c.color;
      e.direction = c.direction;
      e.opacity = c.opacity;
      e.paddingLeft = Oj(c.linePadding, c, a.m);
      e.paddingRight = Oj(c.linePadding, c, a.m);
      c.backgroundImage && (e.backgroundImage = `url('${c.backgroundImage}')`, e.backgroundRepeat = 'no-repeat', e.backgroundSize = 'contain', e.backgroundPosition = 'center', c.backgroundColor == '' && (e.backgroundColor = 'transparent'));
      d ? e.display = 'inline' : (e.display = 'flex', e.flexDirection = 'column', e.alignItems = 'center', e.justifyContent = c.displayAlign == 'before' ? 'flex-start' : c.displayAlign == 'center' ? 'center' : 'flex-end');
      f || (e.margin = '0');
      e.fontFamily = c.fontFamily;
      e.fontWeight = c.fontWeight.toString();
      e.fontStyle = c.fontStyle;
      e.letterSpacing = c.letterSpacing;
      e.fontSize = Oj(c.fontSize, c, a.m);
      c.line ? c.lineInterpretation == 1 && (e.position = 'absolute', c.writingMode == wb ? c.lineAlign == yb ? e.top = `${c.line}%` : c.lineAlign == 'end' && (e.bottom = `${c.line}%`) : c.writingMode == 'vertical-lr' ? c.lineAlign == yb ? e.left = `${c.line}%` : c.lineAlign == 'end' && (e.right = `${c.line}%`) : c.lineAlign == yb ? e.right = `${c.line}%` : c.lineAlign == 'end' && (e.left = `${c.line}%`)) : c.region && c.region.id && (!d && !f || c.backgroundImage) && (a = c.region.widthUnits == Jb ? '%' : 'px', b = c.region.viewportAnchorUnits == Jb ? '%' : 'px', e.height = c.region.height + (c.region.heightUnits == Jb ? '%' : 'px'), e.width = c.region.width + a, e.position = 'absolute', e.top = c.region.viewportAnchorY + b, e.left = c.region.viewportAnchorX + b);
      e.lineHeight = c.lineHeight;
      c.position && (c.writingMode == wb ? e.paddingLeft = c.position : e.paddingTop = c.position);
      c.positionAlign == 'line-left' ? e.cssFloat = 'left' : c.positionAlign == 'line-right' && (e.cssFloat = 'right');
      e.textAlign = c.textAlign;
      e.textDecoration = c.textDecoration.join(' ');
      e.writingMode = c.writingMode;
      'writingMode' in document.documentElement.style && e.writingMode == c.writingMode || (e.webkitWritingMode = c.writingMode);
      c.size && (c.writingMode == wb ? e.width = `${c.size}%` : e.height = `${c.size}%`);
    }

    function Oj(a, b, c) {
      var d = (d = new RegExp(/(\d*\.?\d+)([a-z]+|%+)/).exec(a)) ? {
        value: Number(d[1]),
        Vf: d[2],
      } : null;
      if (!d) return a;
      const e = d.value;

      switch (d.Vf) {
        case '%':
          return `${e / 100 * c.clientHeight / b.cellResolution.rows}px`;

        case 'c':
          return `${c.clientHeight * e / b.cellResolution.rows}px`;

        default:
          return a;
      }
    }

    M('shaka.text.UITextDisplayer', Kj);
    Kj.prototype.setTextVisibility = Kj.prototype.setTextVisibility;
    Kj.prototype.isTextVisible = Kj.prototype.isTextVisible;
    Kj.prototype.remove = Kj.prototype.remove;
    Kj.prototype.destroy = Kj.prototype.destroy;
    Kj.prototype.append = Kj.prototype.append;

    function Pj(a) {
      function b(f) {
        let g = [];
        let h = f.fontWeight >= 700;
        const k = f.fontStyle == 'italic';
        const l = f.textDecoration.includes('underline');
        h && g.push('b');
        k && g.push('i');
        l && g.push('u');
        h = g.reduce((m, n) => `${m}<${n}>`, '');
        g = g.reduceRight((m, n) => `${m}</${n}>`, '');
        return f.lineBreak || f.spacer ? (f.spacer && Ub('shaka.text.Cue', 'Please use lineBreak instead of spacer.'), '\n') : f.nestedCues.length ? f.nestedCues.map(b).join('') : h + f.payload + g;
      }

      let c = a.map((f) => {
        if (f.nestedCues.length) {
          const g = f.clone();
          g.nestedCues = [];
          g.payload = b(f);
          return g;
        }

        return f;
      });
      a = 'WEBVTT\n\n';
      c = r(c);

      for (let d = c.next(); !d.done; d = c.next()) {
        d = d.value;

        const e = function (f) {
          const g = Math.floor(f / 3600);
          const h = Math.floor(f / 60 % 60);
          const k = Math.floor(f % 60);
          f = Math.floor(1E3 * f % 1E3);
          return `${(g < 10 ? '0' : '') + g}:${h < 10 ? '0' : ''}${h}:${k < 10 ? '0' : ''}${k}.${f < 100 ? f < 10 ? '00' : '0' : ''}${f}`;
        };

        a += `${e(d.startTime)} --\x3e ${e(d.endTime)}${(function (f) {
          const g = [];

          switch (f.textAlign) {
            case 'left':
              g.push('align:left');
              break;

            case 'right':
              g.push('align:right');
              break;

            case vb:
              g.push('align:middle');
              break;

            case 'start':
              g.push('align:start');
              break;

            case 'end':
              g.push('align:end');
          }

          switch (f.writingMode) {
            case 'vertical-lr':
              g.push('vertical:lr');
              break;

            case 'vertical-rl':
              g.push('vertical:rl');
          }

          return g.length ? ` ${g.join(' ')}` : '';
        }(d))}\n`;
        a += `${d.payload}\n\n`;
      }

      return a;
    }

    M('shaka.text.WebVttGenerator', () => {});

    function Qj() {}

    function Rj(a, b, c, d, e) {
      const f = (e in d);
      let g = !0;
      let h;

      for (h in b) {
        let k = `${e}.${h}`;
        const l = f ? d[e] : c[h];
        f || h in c ? void 0 === b[h] ? void 0 === l || f ? delete a[h] : a[h] = Me(l) : l.constructor == Object && b[h] && b[h].constructor == Object ? (a[h] || (a[h] = Me(l)), k = Rj(a[h], b[h], l, d, k), g = g && k) : typeof b[h] !== typeof l || b[h] == null || typeof b[h] !== 'function' && b[h].constructor != l.constructor ? (Ua(`Invalid config, wrong type for ${k}`), g = !1) : (typeof c[h] === 'function' && c[h].length != b[h].length && Va(`Unexpected number of arguments for ${k}`), a[h] = b[h]) : (Ua(`Invalid config, unrecognized key ${k}`), g = !1);
      }

      return g;
    }

    function Sj(a, b) {
      for (var c = {}, d = c, e = 0, f = 0; ;) {
        e = a.indexOf('.', e);
        if (e < 0) break;
        if (e == 0 || a[e - 1] != '\\') f = a.substring(f, e).replace(/\\\./g, '.'), d[f] = {}, d = d[f], f = e + 1;
        e += 1;
      }

      d[a.substring(f).replace(/\\\./g, '.')] = b;
      return c;
    }

    M('shaka.util.ConfigUtils', Qj);
    Qj.convertToConfigObject = Sj;
    Qj.mergeConfigObjects = Rj;

    function Tj() {}

    function Uj() {
      let a = Infinity;
      navigator.connection && navigator.connection.saveData && (a = 360);
      const b = {
        retryParameters: Ce(),
        servers: {},
        clearKeys: {},
        advanced: {},
        delayLicenseRequestUntilPlayed: !1,
        initDataTransform: Sf,
        logLicenseExchange: !1,
        updateExpirationTime: 1,
        preferredKeySystems: [],
      };
      const c = {
        retryParameters: Ce(),
        availabilityWindowOverride: NaN,
        disableAudio: !1,
        disableVideo: !1,
        disableText: !1,
        disableThumbnails: !1,
        defaultPresentationDelay: 0,
        dash: {
          clockSyncUri: '',
          ignoreDrmInfo: !1,
          disableXlinkProcessing: !1,
          xlinkFailGracefully: !1,
          ignoreMinBufferTime: !1,
          autoCorrectDrift: !0,
          initialSegmentLimit: 1E3,
          ignoreSuggestedPresentationDelay: !1,
          ignoreEmptyAdaptationSet: !1,
          ignoreMaxSegmentDuration: !1,
          keySystemsByURI: {
            'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
            'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
            'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
            'urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95': 'com.microsoft.playready',
            'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime',
          },

          manifestPreprocessor(g) {
            return g;
          },

        },
        hls: {
          ignoreTextStreamFailures: !1,
          ignoreImageStreamFailures: !1,
          useFullSegmentsForStartTime: !1,
        },
      };
      const d = {
        retryParameters: Ce(),

        failureCallback(g) {
          return [g];
        },

        rebufferingGoal: 2,
        bufferingGoal: 10,
        bufferBehind: 30,
        ignoreTextStreamFailures: !1,
        alwaysStreamText: !1,
        startAtSegmentBoundary: !1,
        gapDetectionThreshold: 0.1,
        smallGapLimit: 0.5,
        jumpLargeGaps: !1,
        durationBackoff: 1,
        forceTransmuxTS: !1,
        safeSeekOffset: 5,
        stallEnabled: !0,
        stallThreshold: 1,
        stallSkip: 0.1,
        useNativeHlsOnSafari: !0,
        inaccurateManifestTolerance: 2,
        lowLatencyMode: !1,
        autoLowLatencyMode: !1,
        forceHTTPS: !1,
        preferNativeHls: !1,
        updateIntervalSeconds: 1,
      };
      if (navigator.userAgent.match(/Edge\//) || vd() || xd()) d.gapDetectionThreshold = 0.5;
      if (wd('Web0S') || vd() || xd()) d.stallSkip = 0;
      const e = {
        trackSelectionCallback(g) {
          return I((h) => h.return(g));
        },

        downloadSizeCallback(g) {
          let h;
          return I((k) => {
            if (k.g == 1) return navigator.storage && navigator.storage.estimate ? u(k, navigator.storage.estimate(), 3) : k.return(!0);
            h = k.h;
            return k.return(h.usage + g < 0.95 * h.quota);
          });
        },

        progressCallback(g, h) {
          return [g, h];
        },

        usePersistentLicense: !0,
      };
      const f = {
        drm: b,
        manifest: c,
        streaming: d,
        offline: e,

        abrFactory() {
          return new le();
        },

        abr: {
          enabled: !0,
          useNetworkInformation: !0,
          defaultBandwidthEstimate: 1E6,
          switchInterval: 8,
          bandwidthUpgradeTarget: 0.85,
          bandwidthDowngradeTarget: 0.95,
          restrictions: {
            minWidth: 0,
            maxWidth: Infinity,
            minHeight: 0,
            maxHeight: a,
            minPixels: 0,
            maxPixels: Infinity,
            minFrameRate: 0,
            maxFrameRate: Infinity,
            minBandwidth: 0,
            maxBandwidth: Infinity,
          },
        },
        preferredAudioLanguage: '',
        preferredTextLanguage: '',
        preferredVariantRole: '',
        preferredTextRole: '',
        preferredAudioChannelCount: 2,
        preferredVideoCodecs: [],
        preferredAudioCodecs: [],
        preferForcedSubs: !1,
        preferredDecodingAttributes: [],
        restrictions: {
          minWidth: 0,
          maxWidth: Infinity,
          minHeight: 0,
          maxHeight: Infinity,
          minPixels: 0,
          maxPixels: Infinity,
          minFrameRate: 0,
          maxFrameRate: Infinity,
          minBandwidth: 0,
          maxBandwidth: Infinity,
        },
        playRangeStart: 0,
        playRangeEnd: Infinity,

        textDisplayFactory() {
          return null;
        },

      };

      e.trackSelectionCallback = function (g) {
        return I((h) => h.return(Vj(g, f.preferredAudioLanguage)));
      };

      return f;
    }

    function Wj(a, b, c) {
      const d = {
        '.drm.servers': '',
        '.drm.clearKeys': '',
        '.drm.advanced': {
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          videoRobustness: '',
          audioRobustness: '',
          sessionType: '',
          serverCertificate: new Uint8Array(0),
          serverCertificateUri: '',
          individualizationServer: '',
        },
      };
      return Rj(a, b, c || Uj(), d, '');
    }

    function Vj(a, b) {
      let c = a.filter((h) => h.type == 'variant');
      let d = [];
      const e = od(b, c.map((h) => h.language));
      e && (d = c.filter((h) => id(h.language) == e));
      d.length == 0 && (d = c.filter((h) => h.primary));
      d.length == 0 && (c.map((h) => h.language), d = c);
      const f = d.filter((h) => h.height && h.height <= 480);
      f.length && (f.sort((h, k) => k.height - h.height), d = f.filter((h) => h.height == f[0].height));
      c = [];

      if (d.length) {
        var g = Math.floor(d.length / 2);
        d.sort((h, k) => h.bandwidth - k.bandwidth);
        c.push(d[g]);
      }

      d = r(a);

      for (g = d.next(); !g.done; g = d.next()) g = g.value, g.type != yc && g.type != 'image' || c.push(g);

      return c;
    }

    M('shaka.util.PlayerConfiguration', Tj);
    Tj.mergeConfigObjects = Wj;

    function Xj() {
      this.g = null;
      this.h = [];
    }

    function Yj(a, b) {
      if (a.g == null) {
        a.g = {
          timestamp: Date.now() / 1E3,
          state: b,
          duration: 0,
        };
      } else {
        const c = Date.now() / 1E3;
        a.g.duration = c - a.g.timestamp;
        a.g.state != b && (a.h.push(a.g), a.g = {
          timestamp: c,
          state: b,
          duration: 0,
        });
      }
    }

    function Zj(a, b) {
      let c = 0;
      a.g && a.g.state == b && (c += a.g.duration);

      for (let d = r(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, c += e.state == b ? e.duration : 0;

      return c;
    }

    function ak(a) {
      function b(f) {
        return {
          timestamp: f.timestamp,
          state: f.state,
          duration: f.duration,
        };
      }

      for (var c = [], d = r(a.h), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));

      a.g && c.push(b(a.g));
      return c;
    }

    function bk() {
      this.i = this.h = null;
      this.g = [];
    }

    function ck(a, b, c) {
      a.i != b && (a.i = b, a.g.push({
        timestamp: Date.now() / 1E3,
        id: b.id,
        type: 'text',
        fromAdaptation: c,
        bandwidth: null,
      }));
    }

    function dk() {
      this.s = this.u = this.J = this.F = this.m = this.j = this.H = this.l = this.i = this.L = this.N = this.T = this.D = this.Y = NaN;
      this.g = new Xj();
      this.h = new bk();
    }

    function W(a, b) {
      Le.call(this);
      const c = this;
      this.l = ek;
      this.nc = this.g = null;
      this.Y = !1;
      this.h = new cf();
      this.fd = this.u = this.Wa = this.B = this.rc = this.s = this.i = this.fc = this.H = this.oc = this.F = this.Fa = this.D = this.J = this.m = this.O = null;
      this.nd = 1E9;
      this.o = fk(this);
      this.md = {
        width: Infinity,
        height: Infinity,
      };
      this.j = null;
      this.pa = new te(this.o.preferredAudioLanguage, this.o.preferredVariantRole, this.o.preferredAudioChannelCount);
      this.qa = this.o.preferredTextLanguage;
      this.Nb = this.o.preferredTextRole;
      this.Xa = this.o.preferForcedSubs;
      this.gd = [];
      b && b(this);
      this.O = gk(this);
      this.O.Nd(this.o.streaming.forceHTTPS);
      this.L = null;
      hk && (this.L = ac(hk));
      this.h.A(window, 'online', () => {
        c.Id();
      });
      this.sa = {
        name: 'detach',
      };
      this.Oa = {
        name: 'attach',
      };
      this.T = {
        name: 'unload',
      };
      this.pd = {
        name: 'manifest-parser',
      };
      this.ld = {
        name: 'manifest',
      };
      this.Ea = {
        name: 'media-source',
      };
      this.jd = {
        name: 'drm-engine',
      };
      this.N = {
        name: 'load',
      };
      this.qd = {
        name: 'src-equals-drm-engine',
      };
      this.Ma = {
        name: 'src-equals',
      };
      const d = new Map();
      d.set(this.Oa, (e, f) => Ie(ik(c, e, f)));
      d.set(this.sa, (e) => {
        e.G && (c.h.Ca(e.G, 'error'), e.G = null);
        c.g = null;
        e = Promise.resolve();
        return Ie(e);
      });
      d.set(this.T, (e) => Ie(jk(c, e)));
      d.set(this.Ea, (e) => {
        e = kk(c, e);
        return Ie(e);
      });
      d.set(this.pd, (e, f) => {
        const g = lk(c, e, f);
        return Ie(g);
      });
      d.set(this.ld, (e) => mk(c, e));
      d.set(this.jd, (e) => {
        e = nk(c, e);
        return Ie(e);
      });
      d.set(this.N, (e, f) => Ie(ok(c, e, f)));
      d.set(this.qd, (e, f) => {
        const g = pk(c, e, f);
        return Ie(g);
      });
      d.set(this.Ma, (e, f) => qk(c, e, f));
      this.da = new yj(this.sa, {
        cf(e, f, g, h) {
          let k = null;
          e == c.sa && (k = g == c.sa ? c.sa : c.Oa);
          e == c.Oa && (k = g == c.sa || f.G != h.G ? c.sa : g == c.Oa ? c.Oa : g == c.Ea || g == c.N ? c.Ea : g == c.Ma ? c.qd : null);
          e == c.Ea && (k = g == c.N && f.G == h.G ? c.pd : c.T);
          e == c.pd && (k = rk(c.N, c.ld, c.T, g, f, h));
          e == c.ld && (k = rk(c.N, c.jd, c.T, g, f, h));
          e == c.jd && (k = rk(c.N, c.N, c.T, g, f, h));
          e == c.qd && (k = g == c.Ma && f.G == h.G ? c.Ma : c.T);
          if (e == c.N || e == c.Ma) k = c.T;
          e == c.T && (k = h.G && f.G == h.G ? c.Oa : c.sa);
          return k;
        },

        Pe(e, f, g) {
          c.dispatchEvent(sk(tk, {
            state: e.name,
          }));
          return d.get(e)(f, g);
        },

        handleError(e) {
          return I((f) => (f.g == 1 ? u(f, jk(c, e), 2) : f.return(e.G ? c.Oa : c.sa)));
        },

        zf(e) {
          c.dispatchEvent(sk(uk, {
            state: e.name,
          }));
        },

      });
      a && this.Pb(a, !0);
    }

    qa(W, Le);

    function sk(a, b) {
      return new Q(a, b);
    }

    q = W.prototype;

    q.destroy = function () {
      const a = this;
      let b;
      return I((c) => {
        switch (c.g) {
          case 1:
            if (a.l == vk) return c.return();
            a.l = vk;
            b = Dj(a.da, () => ({
              node: a.sa,
              payload: zj(),
              ib: !1,
            }));
            return u(c, new Promise((d) => {
              b.Db = function () {};

              b.Fc = function () {
                d();
              };

              b.mb = function () {
                d();
              };

              b.onError = function () {
                d();
              };

              b.Hc = function () {
                d();
              };
            }), 2);

          case 2:
            return u(c, a.da.destroy(), 3);

          case 3:
            a.h && (a.h.release(), a.h = null);
            a.fd = null;
            a.u = null;
            a.o = null;
            a.j = null;
            a.nc = null;

            if (!a.O) {
              c.v(0);
              break;
            }

            return u(c, a.O.destroy(), 5);

          case 5:
            a.O = null, z(c);
        }
      });
    };

    q.Pb = function (a, b) {
      b = void 0 === b ? !0 : b;
      if (this.l == vk) return Promise.reject(wk());
      const c = zj();
      c.G = a;
      sd() || (b = !1);
      const d = b ? this.Ea : this.Oa;
      const e = Dj(this.da, () => ({
        node: d,
        payload: c,
        ib: !1,
      }));

      e.Db = function () {};

      return xk(e);
    };

    q.detach = function () {
      const a = this;
      if (this.l == vk) return Promise.reject(wk());
      const b = Dj(this.da, () => ({
        node: a.sa,
        payload: zj(),
        ib: !1,
      }));

      b.Db = function () {};

      return xk(b);
    };

    q.Td = function (a) {
      const b = this;
      a = void 0 === a ? !0 : a;
      if (this.l == vk) return Promise.reject(wk());
      sd() || (a = !1);
      const c = zj();
      const d = Dj(this.da, (e) => {
        const f = e.G && a ? b.Ea : e.G ? b.Oa : b.sa;
        c.G = e.G;
        return {
          node: f,
          payload: c,
          ib: !1,
        };
      });

      d.Db = function () {};

      return xk(d);
    };

    q.load = function (a, b, c) {
      const d = this;
      if (this.l == vk) return Promise.reject(wk());
      this.dispatchEvent(sk(yk));
      const e = zj();
      e.uri = a;
      e.Rd = Date.now() / 1E3;
      c && (e.mimeType = c);
      void 0 !== b && (e.startTime = b);
      const f = zk(this, e) ? this.Ma : this.N;
      const g = Dj(this.da, (h) => {
        if (h.G == null) return null;
        e.G = h.G;
        return {
          node: f,
          payload: e,
          ib: !0,
        };
      });
      this.j = new dk();

      g.Db = function () {};

      return new Promise((h, k) => {
        g.Hc = function () {
          return k(new O(2, 7, 7002));
        };

        g.Fc = function () {
          h();
          d.dispatchEvent(sk(Ak));
        };

        g.mb = function () {
          return k(wk());
        };

        g.onError = function (l) {
          return k(l);
        };
      });
    };

    function zk(a, b) {
      if (!sd()) return !0;
      let c = b.mimeType;
      const d = b.uri || '';
      c || (c = dg(d), c = Bk[c]);

      if (c) {
        if ((b.G || ud()).canPlayType(c) == '') return !1;
        if (!sd() || !(c in cg || dg(d) in eg) || a.o.streaming.preferNativeHls) return !0;
        if (yd()) return a.o.streaming.useNativeHlsOnSafari;
      }

      return !1;
    }

    function ik(a, b, c) {
      b.G == null && (b.G = c.G, a.h.A(b.G, 'error', () => {
        const d = Ck(a);
        d && Dk(a, d);
      }));
      a.g = b.G;
      return Promise.resolve();
    }

    function jk(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      return I((n) => {
        switch (n.g) {
          case 1:
            return a.l != vk && (a.l = ek), c = a.gd.map((p) => p()), a.gd = [], u(n, Promise.all(c), 2);

          case 2:
            a.dispatchEvent(sk(Ek));
            b.mimeType = null;
            b.startTime = null;
            b.uri = null;
            b.G && (a.h.Ca(b.G, 'loadedmetadata'), a.h.Ca(b.G, 'playing'), a.h.Ca(b.G, 'pause'), a.h.Ca(b.G, 'ended'), a.h.Ca(b.G, 'ratechange'));
            a.Fa && (a.Fa.release(), a.Fa = null);
            a.oc && (a.oc.stop(), a.oc = null);

            if (!a.s) {
              n.v(3);
              break;
            }

            return u(n, a.s.stop(), 4);

          case 4:
            a.s = null, a.rc = null;

          case 3:
            if (!a.u) {
              n.v(5);
              break;
            }

            return u(n, a.u.stop(), 5);

          case 5:
            if (!a.i) {
              n.v(7);
              break;
            }

            return u(n, a.i.destroy(), 8);

          case 8:
            a.i = null;

          case 7:
            a.F && (a.F.release(), a.F = null);
            a.D && (a.D.release(), a.D = null);

            if (!a.J) {
              n.v(9);
              break;
            }

            return u(n, a.J.destroy(), 10);

          case 10:
            a.J = null;

          case 9:
            if (a.L) a.L.onAssetUnload();

            if (!b.G || !b.G.src) {
              n.v(11);
              break;
            }

            return u(n, new Promise((p) => new P(p).S(0.1)), 12);

          case 12:
            for (b.G.removeAttribute('src'), b.G.load(); b.G.lastChild;) b.G.removeChild(b.G.firstChild);

          case 11:
            if (!a.m) {
              n.v(13);
              break;
            }

            return u(n, a.m.destroy(), 14);

          case 14:
            a.m = null;

          case 13:
            a.Wa = null;
            a.H = null;

            if (a.B) {
              d = r(a.B.variants);

              for (e = d.next(); !e.done; e = d.next()) for (f = e.value, g = r([f.audio, f.video]), h = g.next(); !h.done; h = g.next()) (k = h.value) && k.segmentIndex && k.segmentIndex.release();

              l = r(a.B.textStreams);

              for (h = l.next(); !h.done; h = l.next()) m = h.value, m.segmentIndex && m.segmentIndex.release();
            }

            a.B = null;
            a.j = new dk();
            a.kd = null;
            Fk(a);
            z(n);
        }
      });
    }

    function kk(a, b) {
      let c;
      let d;
      let e;
      let f;
      return I((g) => {
        if (g.g == 1) {
          return c = new Ih(), d = a.o.textDisplayFactory, e = ac(d), a.kd = d, f = Gk(b.G, c, e, (h, k, l) => {
            h = r(h);

            for (let m = h.next(); !m.done; m = h.next()) {
              if (m = m.value, m.data && m.cueTime && m.frames) {
                for (var n = m.cueTime + k, p = l, t = r(m.frames), v = t.next(); !v.done; v = t.next()) Hk(a, n, p, 'ID3', v.value);

                if (a.L) a.L.onHlsTimedMetadata(m, n);
              }
            }
          }), u(g, f.F, 2);
        }
        a.J = f;
        z(g);
      });
    }

    function lk(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) return b.mimeType = c.mimeType, b.uri = c.uri, d = b.uri, e = a.O, a.Wa = d, f = a, u(h, bg(d, e, a.o.manifest.retryParameters, b.mimeType), 2);
        f.rc = h.h;
        a.s = ac(a.rc);
        g = Me(a.o.manifest);
        c.G && c.G.nodeName === 'AUDIO' && (g.disableVideo = !0);
        a.s.configure(g);
        z(h);
      });
    }

    function mk(a, b) {
      const c = b.uri;
      const d = a.O;
      a.fc = new Si(() => a.bc());
      Ti(a.fc, (g) => {
        Ik(a, Jk, g);
        if (a.L) a.L.onDashTimedMetadata(g);
      });
      const e = {
        networkingEngine: d,

        filter(g) {
          return I((h) => h.return(a.wc(g)));
        },

        makeTextStreamsForClosedCaptions(g) {
          return Kk(a, g);
        },

        onTimelineRegionAdded(g) {
          const h = a.fc;

          a: {
            var k = r(h.g);

            for (let l = k.next(); !l.done; l = k.next()) {
              if (l = l.value, l.schemeIdUri == g.schemeIdUri && l.id == g.id && l.startTime == g.startTime && l.endTime == g.endTime) {
                k = l;
                break a;
              }
            }

            k = null;
          }

          k == null && (h.g.add(g), h.h(g));
        },

        onEvent(g) {
          return a.dispatchEvent(g);
        },

        onError(g) {
          return Dk(a, g);
        },

        isLowLatencyMode() {
          return a.o.streaming.lowLatencyMode;
        },

        isAutoLowLatencyMode() {
          return a.o.streaming.autoLowLatencyMode;
        },

        enableLowLatencyMode() {
          a.configure('streaming.lowLatencyMode', !0);
        },

      };
      const f = Date.now() / 1E3;
      return new Ee((function () {
        let g;
        let h;
        let k;
        let l;
        return I((m) => {
          if (m.g == 1) return g = a, u(m, a.s.start(c, e), 2);
          g.B = m.h;
          h = sk(Lk);
          a.dispatchEvent(h);
          if (a.B.variants.length == 0) throw new O(2, 4, 4036);
          Mk(a.B);
          k = Date.now() / 1E3;
          l = k - f;
          a.j.H = l;
          z(m);
        });
      }()), () => a.s.stop());
    }

    function nk(a, b) {
      let c;
      let d;
      return I((e) => (e.g == 1 ? (c = Date.now() / 1E3, d = !0, a.m = Nk(a, {
        lb: a.O,

        onError(f) {
          Dk(a, f);
        },

        Gc(f) {
          Ok(a, f);
        },

        onExpirationUpdated(f, g) {
          Pk(a, f, g);
        },

        onEvent(f) {
          a.dispatchEvent(f);
          f.type == Qk && d && (d = !1, a.j.j = Date.now() / 1E3 - c);
        },

      }), a.m.configure(a.o.drm), u(e, xf(a.m, a.B.variants, a.B.offlineSessionIds), 2)) : e.g != 3 ? u(e, a.m.Pb(b.G), 3) : u(e, a.wc(a.B), 0)));
    }

    function ok(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      return I((w) => {
        switch (w.g) {
          case 1:
            b.startTime = c.startTime;
            d = b.G;
            e = b.uri;
            a.Wa = e;
            a.F = new Li({
              Bc() {
                return b.G.playbackRate;
              },

              yc() {
                return b.G.defaultPlaybackRate;
              },

              Pd(x) {
                b.G.playbackRate = x;
              },

              ke(x) {
                b.G.currentTime += x;
              },

            });

            f = function () {
              return Rk(a);
            };

            g = function () {
              return Sk(a);
            };

            a.h.A(d, 'playing', f);
            a.h.A(d, 'pause', f);
            a.h.A(d, 'ended', f);
            a.h.A(d, 'ratechange', g);
            h = a.o.abrFactory;
            a.u && a.fd == h || (a.fd = h, a.u = ac(h), typeof a.u.playbackRateChanged !== 'function' && (Ub('AbrManager', 'Please use an AbrManager with playbackRateChanged function.'), a.u.playbackRateChanged = function () {}), a.u.configure(a.o.abr));
            a.pa = new te(a.o.preferredAudioLanguage, a.o.preferredVariantRole, a.o.preferredAudioChannelCount);
            a.qa = a.o.preferredTextLanguage;
            a.Nb = a.o.preferredTextRole;
            a.Xa = a.o.preferForcedSubs;
            Tk(a.B.presentationTimeline, a.o.playRangeStart, a.o.playRangeEnd);
            a.u.init((x, y, E) => {
              a.i && x != a.i.h && Uk(a, x, !0, void 0 === y ? !1 : y, void 0 === E ? 0 : E);
            });
            a.D = Vk(a, b.startTime);
            a.Fa = Wk(a);
            k = Math.max(a.B.minBufferTime, a.o.streaming.rebufferingGoal);
            Xk(a, k);
            Cd(a.B, a.o.preferredVideoCodecs, a.o.preferredAudioCodecs, a.o.preferredAudioChannelCount, a.o.preferredDecodingAttributes);
            a.i = Yk(a);
            a.i.configure(a.o.streaming);
            a.l = Zk;
            a.dispatchEvent(sk($k));
            l = null;

            if (m = a.Cc().find((x) => x.active)) {
              w.v(2);
              break;
            }

            l = al(a) ? a.u.chooseVariant() : null;
            Uk(a, l, !0, !1, 0);

            if (!a.o.streaming.startAtSegmentBoundary) {
              w.v(3);
              break;
            }

            n = a.D.l();
            return u(w, bl(l, n), 4);

          case 4:
            p = w.h, a.D.m(p);

          case 3:
            cl(a, null, Zd(l));

          case 2:
            return t = a.hb().find((x) => x.active), t || ((v = ie(a.B.textStreams, a.qa, a.Nb, a.Xa)[0] || null) && ck(a.j.h, v, !0), l && (v ? (l.audio && dl(a, l.audio, v) && (a.Y = !0), a.Y && a.J.m.setTextVisibility(!0), el(a)) : a.Y = !1), v && (a.o.streaming.alwaysStreamText || a.sd()) && ij(a.i, v)), u(w, a.i.start(), 5);

          case 5:
            a.o.abr.enabled && (a.u.enable(), fl(a)), Sd(a.i ? a.i.h : null, a.B), gl(a.B), hl(a), al(a), a.B.variants.some((x) => x.primary), a.h.va(d, 'loadedmetadata', () => {
              a.j.l = Date.now() / 1E3 - c.Rd;
            }), z(w);
        }
      });
    }

    function pk(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => (m.g == 1 ? (d = zc, e = Date.now() / 1E3, f = !0, a.m = Nk(a, {
        lb: a.O,

        onError(n) {
          Dk(a, n);
        },

        Gc(n) {
          Ok(a, n);
        },

        onExpirationUpdated(n, p) {
          Pk(a, n, p);
        },

        onEvent(n) {
          a.dispatchEvent(n);
          n.type == Qk && f && (f = !1, a.j.j = Date.now() / 1E3 - e);
        },

      }), a.m.configure(a.o.drm), g = b.uri || '', h = dg(g), k = Bk[h], k == 'application/x-mpegurl' && yd() && (k = 'application/vnd.apple.mpegurl'), k || (k = 'video/mp4'), l = {
        id: 0,
        language: 'und',
        primary: !1,
        audio: null,
        video: {
          id: 0,
          originalId: null,

          createSegmentIndex() {
            return Promise.resolve();
          },

          segmentIndex: null,
          mimeType: c.mimeType ? c.mimeType.split(';')[0] : k,
          codecs: c.mimeType ? Yc(c.mimeType) : '',
          encrypted: !0,
          drmInfos: [],
          keyIds: new Set(),
          language: 'und',
          label: null,
          type: d.Na,
          primary: !1,
          trickModeVideo: null,
          emsgSchemeIdUris: null,
          roles: [],
          forced: !1,
          channelsCount: null,
          audioSamplingRate: null,
          spatialAudio: !1,
          closedCaptions: null,
        },
        bandwidth: 100,
        allowedByApplication: !0,
        allowedByKeySystem: !0,
        decodingInfos: [],
      }, u(m, xf(a.m, [l], []), 2)) : u(m, a.m.Pb(b.G), 0)));
    }

    function qk(a, b, c) {
      function d() {
        return Rk(a);
      }

      b.uri = c.uri;
      b.startTime = c.startTime;
      a.Wa = b.uri;
      a.D = new Bi(b.G);
      b.startTime != null && a.D.m(b.startTime);
      a.F = new Li({
        Bc() {
          return b.G.playbackRate;
        },

        yc() {
          return b.G.defaultPlaybackRate;
        },

        Pd(g) {
          b.G.playbackRate = g;
        },

        ke(g) {
          b.G.currentTime += g;
        },

      });
      Xk(a, a.o.streaming.rebufferingGoal);
      a.h.A(b.G, 'playing', d);
      a.h.A(b.G, 'pause', d);
      a.h.A(b.G, 'ended', d);
      a.h.A(b.G, 'ratechange', () => Sk(a));
      a.g.preload != 'none' && a.h.va(a.g, 'loadedmetadata', () => {
        a.j.l = Date.now() / 1E3 - c.Rd;
      });
      a.g.audioTracks && (a.h.A(a.g.audioTracks, 'addtrack', () => hl(a)), a.h.A(a.g.audioTracks, 'removetrack', () => hl(a)), a.h.A(a.g.audioTracks, 'change', () => hl(a)));
      a.g.textTracks && (a.h.A(a.g.textTracks, 'addtrack', (g) => {
        if (g.track) {
          switch (g = g.track, g.kind) {
            case 'metadata':
              il(a, g);
              break;

            case 'chapters':
              jl(a, g);
              break;

            default:
              hl(a);
          }
        }
      }), a.h.A(a.g.textTracks, 'removetrack', () => hl(a)), a.h.A(a.g.textTracks, 'change', () => hl(a)));
      b.G.src = b.uri;
      (vd() || wd('Web0S')) && b.G.load();
      a.l = kl;
      a.dispatchEvent(sk($k));
      const e = new Ac();
      si(a.g, HTMLMediaElement.HAVE_METADATA, a.h, () => {
        e.resolve();
      });
      let f = !1;
      a.gd.push(() => {
        f = !0;
      });
      si(a.g, HTMLMediaElement.HAVE_CURRENT_DATA, a.h, () => {
        let g;
        return I((h) => {
          if (h.g == 1) {
            if (f) return h.return();
            ll(a);
            g = ml(a);
            return g.find((k) => k.mode != 'disabled') ? h.v(2) : u(h, new Promise((k) => {
              a.h.va(a.g.textTracks, 'change', k);
              new P(k).S(1);
            }), 2);
          }

          if (f) return h.return();
          nl(a);
          z(h);
        });
      });
      a.g.error ? e.reject(Ck(a)) : a.g.preload == 'none' && (Va('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'), e.resolve());
      a.h.va(a.g, 'error', () => {
        e.reject(Ck(a));
      });
      return new Ee(e, () => {
        e.reject(new O(2, 7, 7001));
        return Promise.resolve();
      });
    }

    function ll(a) {
      const b = a.o.preferredAudioLanguage;

      if (b != '') {
        a.Kd(b);
        const c = a.o.preferredVariantRole;
        c != '' && a.Kd(b, c);
      }
    }

    function nl(a) {
      const b = a.o.preferredTextLanguage;
      const c = a.o.preferForcedSubs;

      if (b != '') {
        a.Ld(b, '', c);
        const d = a.o.preferredTextRole;
        d != '' && a.Ld(b, d, c);
      }
    }

    function il(a, b) {
      b.kind == 'metadata' && (b.mode = 'hidden', a.h.A(b, 'cuechange', () => {
        if (b.activeCues) for (let c = r(b.activeCues), d = c.next(); !d.done; d = c.next()) if (d = d.value, Hk(a, d.startTime, d.endTime, d.type, d.value), a.L) a.L.onCueMetadataChange(d.value);
      }), new P(() => {
        let c = ol(a);
        c = r(c);

        for (let d = c.next(); !d.done; d = c.next()) d.value.mode = 'hidden';
      }).Hb().S(0.5));
    }

    function Hk(a, b, c, d, e) {
      a.dispatchEvent(sk(pl, {
        startTime: b,
        endTime: c,
        Ag: d,
        payload: e,
      }));
    }

    function jl(a, b) {
      b && b.kind == 'chapters' && (b.mode = 'hidden', new P(() => {
        let c = ql(a);
        c = r(c);

        for (let d = c.next(); !d.done; d = c.next()) d.value.mode = 'hidden';
      }).Hb().S(0.5));
    }

    function Mk(a) {
      function b(c) {
        return c.video && c.audio || c.video && c.video.codecs.includes(',');
      }

      a.variants.some(b) && (a.variants = a.variants.filter(b));
    }

    function Nk(a, b) {
      return new pf(b, a.o.drm.updateExpirationTime);
    }

    function gk(a) {
      return new Qe((b, c) => {
        a.u && a.u.segmentDownloaded(b, c);
      });
    }

    function Vk(a, b) {
      return new Ci(a.g, a.B, a.o.streaming, b, () => {
        a.Fa && Oi(a.Fa, !0);
        if (a.i) {
          for (let c = a.i, d = c.C.Ac(), e = c.o.smallGapLimit, f = r(c.g.keys()), g = f.next(); !g.done; g = f.next()) {
            g = g.value;
            let h = c.g.get(g);
            h.ca = null;
            let k = c.C.P;
            g == yc ? (k = k.i, k = k.g == null || k.h == null ? !1 : d >= k.g && d < k.h) : (k = Xh(k, g), k = Lh(k, d, e));
            if (!k && (Yh(c.C.P, g) != null && lj(c, h), h.wa && (h.wa.abort(), h.wa = null), g === yc)) for (g = c.C.P.D.g, g.l = 0, g.h = [], g.g = [], h = g.i, h.i = [], h.h = [], h.g = 0, uh(g), g = r(g.j.values()), h = g.next(); !h.done; h = g.next()) oh(h.value);
          }
        }
        a.H && rl(a);
      }, (c) => a.dispatchEvent(c));
    }

    function Wk(a) {
      const b = new Ui(a.fc);
      Vi(b, (d) => {
        Ik(a, sl, d);
      }, (d) => {
        Ik(a, tl, d);
      }, (d, e) => {
        e || (Ik(a, sl, d), Ik(a, tl, d));
      });
      const c = new Ni(a.g);
      c.g.add(b);
      return c;
    }

    function Xk(a, b) {
      a.H = new xe();
      a.H.g = ze;
      Ae(a.H, b, Math.min(0.5, b / 2));
      Fk(a);
      a.oc = new P(() => {
        rl(a);
      }).Ba(0.25);
    }

    function rl(a) {
      switch (a.l) {
        case kl:
          if (a.g.ended) var b = !0; else {
            var c = Kh(a.g.buffered);
            b = c != null && c >= a.g.duration - 1;
          }
          break;

        case Zk:
          a: if (a.g.ended || Vh(a.J)) b = !0; else {
            if (a.B.presentationTimeline.X()) {
              c = a.B.presentationTimeline.gb();
              var d = Kh(a.g.buffered);

              if (d != null && d >= c) {
                b = !0;
                break a;
              }
            }

            b = !1;
          }

          break;

        default:
          b = !1;
      }

      d = Mh(a.g.buffered, a.g.currentTime);
      c = a.H;
      const e = b;
      const f = c.h.get(c.g);
      b = c.g;
      d = e || d >= f ? ye : ze;
      c.g = d;
      b != d && Fk(a);
    }

    function Gk(a, b, c, d) {
      return new Ph(a, b, c, d);
    }

    function Yk(a) {
      return new Xi(a.B, {
        Ac() {
          return a.D.l();
        },

        getBandwidthEstimate() {
          return a.u.getBandwidthEstimate();
        },

        P: a.J,
        lb: a.O,

        onError(b) {
          return Dk(a, b);
        },

        onEvent(b) {
          return a.dispatchEvent(b);
        },

        Af() {
          a.s && a.s.update && a.s.update();
        },

        Ed() {
          a.D && a.D.F();
          rl(a);
        },

      });
    }

    q.configure = function (a, b) {
      arguments.length == 2 && typeof a === 'string' && (a = Sj(a, b));
      a.manifest && a.manifest.dash && 'defaultPresentationDelay' in a.manifest.dash && (Ub('manifest.dash.defaultPresentationDelay configuration', 'Please Use manifest.defaultPresentationDelay instead.'), a.manifest.defaultPresentationDelay = a.manifest.dash.defaultPresentationDelay, delete a.manifest.dash.defaultPresentationDelay);
      a.streaming && a.streaming.lowLatencyMode && (void 0 == a.streaming.inaccurateManifestTolerance && (a.streaming.inaccurateManifestTolerance = 0), void 0 == a.streaming.rebufferingGoal && (a.streaming.rebufferingGoal = 0.01));
      const c = Wj(this.o, a, fk(this));
      ul(this);
      return c;
    };

    function ul(a) {
      if (a.s) {
        var b = Me(a.o.manifest);
        a.g && a.g.nodeName === 'AUDIO' && (b.disableVideo = !0);
        a.s.configure(b);
      }

      a.m && a.m.configure(a.o.drm);

      if (a.i) {
        a.i.configure(a.o.streaming);

        try {
          vl(a, a.B);
        } catch (f) {
          Dk(a, f);
        }

        a.u && al(a);
        b = a.i.h;
        !b || b.allowedByApplication && b.allowedByKeySystem || wl(a);
      }

      a.O && a.O.Nd(a.o.streaming.forceHTTPS);

      if (a.J && (b = a.o.textDisplayFactory, a.kd != b)) {
        let c = ac(b);
        const d = a.J;
        const e = d.m;
        d.m = c;
        e && (c.setTextVisibility(e.isTextVisible()), e.destroy());
        d.i && (d.i.i = c);
        a.kd = b;
        a.i && (b = a.i, (c = b.g.get(yc)) && gj(b, c.stream, !0, 0, !0));
      }

      a.u && (a.u.configure(a.o.abr), a.o.abr.enabled ? a.u.enable() : a.u.disable(), fl(a));
      a.H && (b = a.o.streaming.rebufferingGoal, a.B && (b = Math.max(b, a.B.minBufferTime)), Ae(a.H, b, Math.min(0.5, b / 2)));
      a.B && Tk(a.B.presentationTimeline, a.o.playRangeStart, a.o.playRangeEnd);
    }

    q.getConfiguration = function () {
      const a = fk(this);
      Wj(a, this.o, fk(this));
      return a;
    };

    q.Se = function () {
      if (this.g) {
        let a = this.g.buffered.length;
        a = a ? this.g.buffered.end(a - 1) : 0;
        let b = this.getConfiguration().streaming.bufferingGoal;
        b = Math.min(this.g.currentTime + b, this.bc().end);
        if (a >= b) return 1;
        if (!(a <= this.g.currentTime) && a < b) return (a - this.g.currentTime) / (b - this.g.currentTime);
      }

      return 0;
    };

    q.Lf = function () {
      for (const a in this.o) delete this.o[a];

      Wj(this.o, fk(this), fk(this));
      ul(this);
    };

    q.Ye = function () {
      return this.l;
    };

    q.bf = function () {
      return this.g;
    };

    q.Ub = function () {
      return this.O;
    };

    q.od = function () {
      return this.Wa;
    };

    q.be = function () {
      return this.L ? this.L : null;
    };

    q.X = function () {
      return this.B ? this.B.presentationTimeline.X() : this.g && this.g.src ? Infinity == this.g.duration : !1;
    };

    q.kb = function () {
      return this.B ? this.B.presentationTimeline.kb() : !1;
    };

    q.sf = function () {
      if (this.B) {
        const a = this.B.variants;
        return a.length ? !a[0].video : !1;
      }

      return this.g && this.g.src ? this.g.videoTracks ? this.g.videoTracks.length == 0 : this.g.videoHeight == 0 : !1;
    };

    q.bc = function () {
      if (this.B) {
        var a = this.B.presentationTimeline;
        return {
          start: a.zb(),
          end: a.Qa(),
        };
      }

      return this.g && this.g.src && (a = this.g.seekable, a.length) ? {
        start: a.start(0),
        end: a.end(a.length - 1),
      } : {
        start: 0,
        end: 0,
      };
    };

    q.qf = function () {
      this.X() && (this.g.currentTime = this.bc().end);
    };

    q.keySystem = function () {
      const a = this.drmInfo();
      return a ? a.keySystem : '';
    };

    q.drmInfo = function () {
      return this.m ? this.m.i : null;
    };

    q.Tb = function () {
      return this.m ? this.m.Tb() : Infinity;
    };

    q.zc = function () {
      return this.m ? this.m.zc() : {};
    };

    q.rd = function () {
      return this.H ? this.H.g == ze : !1;
    };

    q.df = function () {
      return this.g ? this.F ? this.F.i : 1 : 0;
    };

    q.Uf = function (a) {
      a == 0 ? Va('A trick play rate of 0 is unsupported!') : (this.g.paused && this.g.play(), this.F.set(a), this.l == Zk && (this.u.playbackRateChanged(a), fj(this.i, Math.abs(a) > 1)));
    };

    q.Ie = function () {
      const a = this.F.yc();
      this.l == kl && this.F.set(a);
      this.l == Zk && (this.F.set(a), this.u.playbackRateChanged(a), fj(this.i, !1));
    };

    q.Cc = function () {
      if (this.B) {
        for (var a = this.i ? this.i.h : null, b = [], c = r(this.B.variants), d = c.next(); !d.done; d = c.next()) {
          if (d = d.value, ge(d)) {
            const e = Zd(d);
            e.active = d == a;
            b.push(e);
          }
        }

        return b;
      }

      return this.g && this.g.audioTracks ? Array.from(this.g.audioTracks).map((f) => fe(f)) : [];
    };

    q.hb = function () {
      if (this.B) {
        for (var a = this.i ? this.i.i : null, b = [], c = r(this.B.textStreams), d = c.next(); !d.done; d = c.next()) {
          d = d.value;
          const e = $d(d);
          e.active = d == a;
          b.push(e);
        }

        return b;
      }

      return this.g && this.g.src && this.g.textTracks ? ml(this).map((f) => de(f)) : [];
    };

    q.We = function () {
      return this.B ? this.B.imageStreams.map((a) => ae(a)) : [];
    };

    q.mf = function (a, b) {
      const c = this;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      return I((F) => {
        if (F.g == 1) return c.B ? (d = c.B.imageStreams.find((G) => G.id == a)) ? d.segmentIndex ? F.v(3) : u(F, d.createSegmentIndex(), 3) : F.return(null) : F.v(2);

        if (F.g != 2) {
          e = d.segmentIndex.find(b);
          if (e == null) return F.return(null);
          f = d.segmentIndex.get(e);
          g = f.tilesLayout || d.tilesLayout;
          h = /(\d+)x(\d+)/.exec(g);
          if (!h) return F.return(null);
          k = d.width || 0;
          l = d.height || 0;
          m = parseInt(h[1], 10);
          n = parseInt(h[2], 10);
          p = k / m;
          t = l / n;
          v = m * n;
          w = f.j - f.startTime;
          x = w / v;
          y = f.startTime;
          D = E = 0;
          v > 1 && (B = Math.floor((b - f.startTime) / x), y = f.startTime + B * x, E = B % m * p, D = Math.floor(B / m) * t);
          return F.return({
            height: t,
            positionX: E,
            positionY: D,
            startTime: y,
            duration: x,
            uris: f.ma(),
            width: p,
          });
        }

        return F.return(null);
      });
    };

    q.re = function (a) {
      if (this.B && this.i) {
        var b = this.B.textStreams.find((d) => d.id == a.id);
        b && b != this.i.i && (ck(this.j.h, b, !1), ij(this.i, b), xl(this), this.qa = b.language);
      } else if (this.g && this.g.src && this.g.textTracks) {
        b = ml(this);
        b = r(b);

        for (let c = b.next(); !c.done; c = b.next()) c = c.value, be(c) == a.id ? c.mode = this.Y ? 'showing' : 'hidden' : c.mode = 'disabled';

        xl(this);
      }
    };

    q.se = function (a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 0 : c;

      if (this.B && this.i) {
        this.o.abr.enabled && Va('Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().');
        const d = this.B.variants.find((e) => e.id == a.id);
        d && ge(d) && (Uk(this, d, !1, b, c), this.pa = new se(d), al(this));
      } else if (this.g && this.g.audioTracks) {
        for (b = Array.from(this.g.audioTracks), b = r(b), c = b.next(); !c.done; c = b.next()) {
          if (c = c.value, be(c) == a.id) {
            yl(this, c);
            break;
          }
        }
      }
    };

    q.Re = function () {
      return zl(this.Cc());
    };

    q.lf = function () {
      return zl(this.hb());
    };

    q.Qe = function () {
      return Array.from(Al(this.Cc()));
    };

    q.kf = function () {
      return Array.from(Al(this.hb()));
    };

    q.Kd = function (a, b) {
      if (this.B && this.D) {
        this.pa = new te(a, b || '', 0, '');

        var c = function (k, l) {
          return k.video || l.video ? k.video && l.video ? Math.abs((k.video.height || 0) - (l.video.height || 0)) + Math.abs((k.video.width || 0) - (l.video.width || 0)) : Infinity : 0;
        };

        var d = this.i.h;
        var e = this.pa.create(this.B.variants);
        var f = null;
        e = r(e.values());

        for (var g = e.next(); !g.done; g = e.next()) if (g = g.value, !f || c(f, d) > c(g, d)) f = g;

        f ? (c = Zd(f), this.se(c, !0)) : wl(this);
      } else if (this.g && this.g.audioTracks) {
        e = Array.from(this.g.audioTracks);
        c = id(a);
        f = d = null;
        e = r(e);

        for (g = e.next(); !g.done; g = e.next()) {
          g = g.value;
          const h = fe(g);
          id(h.language) == c && (d = g, b ? h.roles.includes(b) && (f = g) : h.roles.length == 0 && (f = g));
        }

        f ? yl(this, f) : d && yl(this, d);
      }
    };

    q.Ld = function (a, b, c) {
      c = void 0 === c ? !1 : c;

      if (this.B && this.D) {
        if (this.qa = a, this.Nb = b || '', this.Xa = c, (a = ie(this.B.textStreams, this.qa, this.Nb, this.Xa)[0] || null) && a != this.i.i && (ck(this.j.h, a, !1), this.o.streaming.alwaysStreamText || this.sd())) ij(this.i, a), xl(this);
      } else {
        const d = id(a);
        (a = this.hb().find((e) => id(e.language) == d && (!b || e.roles.includes(b)) && e.forced == c)) && this.re(a);
      }
    };

    q.Mf = function (a) {
      if (this.B && this.D) {
        for (var b = null, c = r(this.B.variants), d = c.next(); !d.done; d = c.next()) {
          if (d = d.value, d.audio.label == a) {
            b = d;
            break;
          }
        }

        b != null && (this.pa = new te(b.language, '', 0, a), wl(this));
      }
    };

    q.sd = function () {
      const a = this.Y;
      return this.J ? this.J.m.isTextVisible() : this.g && this.g.src && this.g.textTracks ? ml(this).some((b) => b.mode == 'showing') : a;
    };

    q.ce = function () {
      return this.g && this.g.src && this.g.textTracks ? ql(this).map((a) => de(a)) : [];
    };

    q.Te = function (a) {
      const b = id(a);
      let c = ql(this).find((e) => id(e.language) == b);
      if (!c || !c.cues) return [];
      a = [];
      c = r(c.cues);

      for (let d = c.next(); !d.done; d = c.next()) {
        d = d.value, a.push({
          title: d.text,
          startTime: d.startTime,
          endTime: d.endTime,
        });
      }

      return a;
    };

    function ml(a) {
      return Array.from(a.g.textTracks).filter((b) => b.kind != 'metadata' && b.kind != 'chapters' && b.label != 'Shaka Player TextTrack');
    }

    function ol(a) {
      return Array.from(a.g.textTracks).filter((b) => b.kind == 'metadata');
    }

    function ql(a) {
      return Array.from(a.g.textTracks).filter((b) => b.kind == 'chapters');
    }

    q.Sf = function (a) {
      a = !!a;

      if (this.Y != a) {
        this.Y = a;
        if (this.l == Zk) this.J.m.setTextVisibility(a), this.o.streaming.alwaysStreamText || (a ? this.i.i || (a = ie(this.B.textStreams, this.qa, this.Nb, this.Xa), a.length > 0 && (ij(this.i, a[0]), xl(this))) : ej(this.i)); else if (this.g && this.g.src && this.g.textTracks) {
          let b = ml(this);
          b = r(b);

          for (let c = b.next(); !c.done; c = b.next()) c = c.value, c.mode != 'disabled' && (c.mode = a ? 'showing' : 'hidden');
        }
        el(this);
      }
    };

    q.ff = function () {
      if (!this.X()) return null;
      let a = this.da.l;
      let b = 0;
      if (this.D) b = this.D.l(); else if (a) {
        if (a.startTime == null) return new Date();
        b = a.startTime;
      }
      return this.B ? new Date(1E3 * (this.B.presentationTimeline.j + b)) : this.g && this.g.getStartDate ? (a = this.g.getStartDate(), isNaN(a.getTime()) ? null : new Date(a.getTime() + 1E3 * b)) : null;
    };

    q.de = function () {
      if (!this.X()) return null;
      if (this.B) return new Date(1E3 * this.B.presentationTimeline.j);

      if (this.g && this.g.getStartDate) {
        const a = this.g.getStartDate();
        return isNaN(a.getTime()) ? null : a;
      }

      return null;
    };

    q.xc = function () {
      if (this.l == Zk) return this.J.xc();
      const a = {
        total: [],
        audio: [],
        video: [],
        text: [],
      };
      this.l == kl && (a.total = Nh(this.g.buffered));
      return a;
    };

    q.getStats = function () {
      if (this.l != Zk && this.l != kl) {
        return {
          width: NaN,
          height: NaN,
          streamBandwidth: NaN,
          decodedFrames: NaN,
          droppedFrames: NaN,
          corruptedFrames: NaN,
          estimatedBandwidth: NaN,
          completionPercent: NaN,
          loadLatency: NaN,
          manifestTimeSeconds: NaN,
          drmTimeSeconds: NaN,
          playTime: NaN,
          pauseTime: NaN,
          bufferingTime: NaN,
          licenseTime: NaN,
          liveLatency: NaN,
          maxSegmentDuration: NaN,
          switchHistory: [],
          stateHistory: [],
        };
      }

      Rk(this);
      let a = this.g;
      let b = a.currentTime / a.duration;

      if (!isNaN(b)) {
        var c = this.j;
        b = Math.round(100 * b);
        c.i = isNaN(c.i) ? b : Math.max(c.i, b);
      }

      a.getVideoPlaybackQuality && (a = a.getVideoPlaybackQuality(), c = this.j, b = Number(a.totalVideoFrames), c.T = Number(a.droppedVideoFrames), c.N = b, this.j.L = Number(a.corruptedVideoFrames));
      this.m ? (a = this.m, a = a.F ? a.F : NaN) : a = NaN;
      this.j.m = a;

      if (this.l == Zk) {
        if (a = this.i.h) this.j.u = (this.F ? this.F.i : 1) * a.bandwidth;
        a && a.video && (c = this.j, b = a.video.height || NaN, c.Y = a.video.width || NaN, c.D = b);
        this.X() && (a = this.de().valueOf() + 1E3 * this.bc().end, this.j.F = (Date.now() - a) / 1E3);
        this.B && this.B.presentationTimeline && (this.j.J = this.B.presentationTimeline.g);
        a = this.u.getBandwidthEstimate();
        this.j.s = a;
      }

      let d = this.j;
      a = d.Y;
      c = d.D;
      b = d.u;
      const e = d.N;
      const f = d.T;
      const g = d.L;
      const h = d.s;
      const k = d.i;
      const {
        l,
      } = d;
      const m = d.H;
      const n = d.j;
      const p = Zj(d.g, 'playing');
      const t = Zj(d.g, 'paused');
      const v = Zj(d.g, 'buffering');
      const w = d.m;
      const x = d.F;
      const y = d.J;
      const E = ak(d.g);
      const D = [];
      d = r(d.h.g);

      for (let B = d.next(); !B.done; B = d.next()) {
        B = B.value, D.push({
          timestamp: B.timestamp,
          id: B.id,
          type: B.type,
          fromAdaptation: B.fromAdaptation,
          bandwidth: B.bandwidth,
        });
      }

      return {
        width: a,
        height: c,
        streamBandwidth: b,
        decodedFrames: e,
        droppedFrames: f,
        corruptedFrames: g,
        estimatedBandwidth: h,
        completionPercent: k,
        loadLatency: l,
        manifestTimeSeconds: m,
        drmTimeSeconds: n,
        playTime: p,
        pauseTime: t,
        bufferingTime: v,
        licenseTime: w,
        liveLatency: x,
        maxSegmentDuration: y,
        stateHistory: E,
        switchHistory: D,
      };
    };

    q.addTextTrack = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !1 : g;
      Ub('addTextTrack', 'Please use an addTextTrackAsync.');
      if (this.l != Zk && this.l != kl) throw new O(1, 7, 7004);

      if (!d) {
        var h = dg(a);
        d = Bl[h];
        if (!d) throw new O(1, 2, 2011, h);
      }

      if (this.l == kl) {
        if (d != 'text/vtt') throw new O(1, 2, 2013, d);
        g && (c = 'forced');
        d = document.createElement('track');
        d.src = a;
        d.label = f || '';
        d.kind = c;
        d.srclang = b;
        this.g.getAttribute('crossorigin') || this.g.setAttribute('crossorigin', 'anonymous');
        this.g.appendChild(d);
        if (a = this.hb().find((k) => k.language == b && k.label == (f || '') && k.kind == c)) return hl(this), a;
        throw new O(1, 2, 2012);
      }

      h = this.B.presentationTimeline.getDuration();
      if (Infinity == h) throw new O(1, 4, 4033);
      a = {
        id: this.nd++,
        originalId: null,

        createSegmentIndex() {
          return Promise.resolve();
        },

        segmentIndex: Ji(0, h, [a]),
        mimeType: d || '',
        codecs: e || '',
        kind: c,
        encrypted: !1,
        drmInfos: [],
        keyIds: new Set(),
        language: b,
        label: f || null,
        type: yc,
        primary: !1,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: [],
        forced: !!g,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        closedCaptions: null,
      };
      if (!$c(Vc(a.mimeType, a.codecs))) throw new O(2, 2, 2014, d);
      this.B.textStreams.push(a);
      hl(this);
      return $d(a);
    };

    q.Ee = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !1 : g;
      const h = this;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      return I((w) => {
        switch (w.g) {
          case 1:
            if (h.l != Zk && h.l != kl) throw new O(1, 7, 7004);

            if (d) {
              w.v(2);
              break;
            }

            return u(w, Cl(h, a), 3);

          case 3:
            d = w.h;

          case 2:
            if (h.l != kl) {
              w.v(4);
              break;
            }

            g && (c = 'forced');
            return u(w, Dl(h, a, b, c, d, f), 5);

          case 5:
            k = h.hb();
            if (l = k.find((x) => x.language == b && x.label == (f || '') && x.kind == c)) return hl(h), w.return(l);
            throw new O(1, 2, 2012);

          case 4:
            m = zc;
            n = h.B.presentationTimeline.getDuration();

            if (Infinity == n) {
              throw new O(1, 4, 4033);
            }

            p = {
              id: h.nd++,
              originalId: null,

              createSegmentIndex() {
                return Promise.resolve();
              },

              segmentIndex: Ji(0, n, [a]),
              mimeType: d || '',
              codecs: e || '',
              kind: c,
              encrypted: !1,
              drmInfos: [],
              keyIds: new Set(),
              language: b,
              label: f || null,
              type: m.aa,
              primary: !1,
              trickModeVideo: null,
              emsgSchemeIdUris: null,
              roles: [],
              forced: !!g,
              channelsCount: null,
              audioSamplingRate: null,
              spatialAudio: !1,
              closedCaptions: null,
            };
            t = Vc(p.mimeType, p.codecs);
            v = $c(t);
            if (!v) throw new O(2, 2, 2014, d);
            h.B.textStreams.push(p);
            hl(h);
            return w.return($d(p));
        }
      });
    };

    q.De = function (a, b, c) {
      const d = this;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        switch (m.g) {
          case 1:
            if (d.l != Zk && d.l != kl) throw new O(1, 7, 7004);

            if (c) {
              m.v(2);
              break;
            }

            return u(m, Cl(d, a), 3);

          case 3:
            c = m.h;

          case 2:
            return u(m, Dl(d, a, b, 'chapters', c), 4);

          case 4:
            e = d.ce();

            if (f = e.find((n) => n.language == b)) {
              g = ql(d);
              h = r(g);

              for (k = h.next(); !k.done; k = h.next()) l = k.value, jl(d, l);

              return m.return(f);
            }

            throw new O(1, 2, 2012);
        }
      });
    };

    function Cl(a, b) {
      let c;
      let d;
      return I((e) => {
        switch (e.g) {
          case 1:
            c = dg(b);
            if (d = Bl[c]) return e.return(d);
            A(e, 2);
            return u(e, fg(b, a.O, a.o.streaming.retryParameters), 4);

          case 4:
            d = e.h;
            va(e, 3);
            break;

          case 2:
            C(e);

          case 3:
            if (d) return e.return(d);
            throw new O(1, 2, 2011, c);
        }
      });
    }

    function Dl(a, b, c, d, e, f) {
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        if (m.g == 1) return e == 'text/vtt' ? m.v(2) : u(m, El(b, a.O, a.o.streaming.retryParameters), 3);

        if (m.g != 2) {
          g = m.h;
          let n = e;
          let p = ad[n];

          if (p) {
            n = p();
            p = {
              periodStart: 0,
              segmentStart: 0,
              segmentEnd: a.g.duration,
            };
            const t = Ob(g);
            n = n.parseMedia(t, p);
            n = Pj(n);
          } else throw new O(2, 2, 2014, n);

          h = n;
          k = new Blob([h], {
            type: 'text/vtt',
          });
          b = Sh(k);
          e = 'text/vtt';
        }

        l = document.createElement('track');
        l.src = b;
        l.label = f || '';
        l.kind = d;
        l.srclang = c;
        a.g.getAttribute('crossorigin') || a.g.setAttribute('crossorigin', 'anonymous');
        a.g.appendChild(l);
        z(m);
      });
    }

    function El(a, b, c) {
      let d;
      let e;
      let f;
      return I((g) => {
        if (g.g == 1) return d = $e, e = Ue([a], c), e.method = 'GET', u(g, b.request(d, e).promise, 2);
        f = g.h;
        return g.return(f.data);
      });
    }

    q.Od = function (a, b) {
      this.md.width = a;
      this.md.height = b;
    };

    q.Id = function () {
      if (this.l == Zk) {
        var a = this.i;
        if (a.I.g) a = !1; else if (a.j) a = !1; else {
          for (let b = r(a.g.values()), c = b.next(); !c.done; c = b.next()) c = c.value, c.Xb && (c.Xb = !1, dj(a, c, 0.1));

          a = !0;
        }
      } else a = !1;

      return a;
    };

    q.Ze = function () {
      Va("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");
      return this.B;
    };

    q.$e = function () {
      return this.rc;
    };

    function fk(a) {
      const b = Uj();

      b.streaming.failureCallback = function (c) {
        const d = [1001, 1002, 1003];
        a.X() && d.includes(c.code) && (c.severity = 1, a.Id());
      };

      b.textDisplayFactory = function () {
        return a.nc ? new Kj(a.g, a.nc) : new Fj(a.g);
      };

      return b;
    }

    q.we = function (a) {
      this.nc = a;
    };

    function Kk(a, b) {
      for (var c = new Set(), d = r(b.textStreams), e = d.next(); !e.done; e = d.next()) e = e.value, e.mimeType != 'application/cea-608' && e.mimeType != 'application/cea-708' || c.add(e.originalId);

      d = r(b.variants);

      for (e = d.next(); !e.done; e = d.next()) {
        if ((e = e.value.video) && e.closedCaptions) {
          for (let f = r(e.closedCaptions.keys()), g = f.next(); !g.done; g = f.next()) {
            if (g = g.value, !c.has(g)) {
              let h = g.startsWith('CC') ? 'application/cea-608' : 'application/cea-708';
              const k = new Ki();
              h = {
                id: a.nd++,
                originalId: g,

                createSegmentIndex() {
                  return Promise.resolve();
                },

                segmentIndex: k,
                mimeType: h,
                codecs: '',
                kind: 'caption',
                encrypted: !1,
                drmInfos: [],
                keyIds: new Set(),
                language: e.closedCaptions.get(g),
                label: null,
                type: yc,
                primary: !1,
                trickModeVideo: null,
                emsgSchemeIdUris: null,
                roles: e.roles,
                forced: !1,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                closedCaptions: null,
              };
              b.textStreams.push(h);
              c.add(g);
            }
          }
        }
      }
    }

    q.wc = function (a) {
      const b = this;
      return I((c) => {
        if (c.g == 1) return u(c, Fl(b, a), 2);
        vl(b, a);
        z(c);
      });
    };

    function Fl(a, b) {
      let c;
      return I((d) => {
        if (d.g == 1) return c = a.i ? a.i.h : null, u(d, Qd(c, b), 2);
        gl(b);
        z(d);
      });
    }

    function vl(a, b) {
      if (a.l != vk) {
        for (var c = a.o.restrictions, d = a.md, e = !1, f = r(b.variants), g = f.next(); !g.done; g = f.next()) {
          g = g.value;
          const h = g.allowedByApplication;
          g.allowedByApplication = Pd(g, c, d);
          h != g.allowedByApplication && (e = !0);
        }

        e && a.i && hl(a);

        if ((c = a.m ? a.m.i : null) && a.m.m) {
          for (d = r(b.variants), e = d.next(); !e.done; e = d.next()) {
            for (e = e.value, e = r((e.video ? e.video.drmInfos : []).concat(e.audio ? e.audio.drmInfos : [])), f = e.next(); !f.done; f = e.next()) {
              if (f = f.value, f.keySystem == c.keySystem) {
                for (f = r(f.initData || []), g = f.next(); !g.done; g = f.next()) g = g.value, Gf(a.m, g.initDataType, g.initData);
              }
            }
          }
        }

        Gl(a, b);
      }
    }

    function bl(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) {
          return c = a.audio, d = a.video, e = function (k, l) {
            let m;
            let n;
            return I((p) => {
              if (p.g == 1) return k ? u(p, k.createSegmentIndex(), 2) : p.return(null);
              m = k.segmentIndex[Symbol.iterator]().seek(l);
              if (!m) return p.return(null);
              n = m.startTime;
              return p.return(n);
            });
          }, u(h, e(c, b), 2);
        }
        if (h.g != 3) return f = h.h, u(h, e(d, b), 3);
        g = h.h;
        return g != null && f != null ? h.return(Math.max(g, f)) : g != null ? h.return(g) : f != null ? h.return(f) : h.return(b);
      });
    }

    function Fk(a) {
      const b = a.rd();

      if (a.j && a.H && a.D) {
        const c = a.F;
        c.j = b;
        Mi(c);
        Rk(a);
      }

      a.dispatchEvent(sk(Hl, {
        buffering: b,
      }));
    }

    function Sk(a) {
      let b = a.g.playbackRate;
      b != 0 && (a.F && a.F.set(b), b = sk(Il), a.dispatchEvent(b));
    }

    function Rk(a) {
      if (a.j && a.H) {
        const b = a.j.g;
        a.H.g == ze ? Yj(b, 'buffering') : a.g.paused ? Yj(b, 'paused') : a.g.ended ? Yj(b, 'ended') : Yj(b, 'playing');
      }
    }

    function al(a) {
      try {
        Gl(a, a.B);
      } catch (c) {
        return Dk(a, c), !1;
      }

      let b = a.B.variants.filter((c) => ge(c));
      b = a.pa.create(b);
      a.u.setVariants(Array.from(b.values()));
      return !0;
    }

    function wl(a) {
      let b;
      (b = al(a) ? a.u.chooseVariant() : null) && Uk(a, b, !0, !0, 0);
    }

    function Uk(a, b, c, d, e) {
      const f = a.i.h;
      if (b == f) d && hj(a.i, b, d, e, !0); else {
        const g = a.j.h;
        g.h != b && (g.h = b, g.g.push({
          timestamp: Date.now() / 1E3,
          id: b.id,
          type: 'variant',
          fromAdaptation: c,
          bandwidth: b.bandwidth,
        }));
        hj(a.i, b, d, e);
        d = null;
        f && (d = Zd(f));
        b = Zd(b);
        c ? cl(a, d, b) : Jl(a, d, b);
      }
    }

    function yl(a, b) {
      let c = Array.from(a.g.audioTracks).find((e) => e.enabled);
      b.enabled = !0;
      b.id !== c.id && (c.enabled = !1);
      c = fe(c);
      const d = fe(b);
      Jl(a, c, d);
    }

    function dl(a, b, c) {
      a = id(a.o.preferredTextLanguage);
      b = id(b.language);
      c = id(c.language);
      return gd(c, a) && !gd(b, c);
    }

    function cl(a, b, c) {
      b = sk(Kl, {
        yf: b,
        xf: c,
      });
      Ll(a, b);
    }

    function hl(a) {
      const b = sk(Ml);
      Ll(a, b);
    }

    function Jl(a, b, c) {
      b = sk(Nl, {
        yf: b,
        xf: c,
      });
      Ll(a, b);
    }

    function xl(a) {
      const b = sk(Ol);
      Ll(a, b);
    }

    function el(a) {
      const b = sk(Pl);
      Ll(a, b);
    }

    function fl(a) {
      const b = sk(Ql, {
        Bg: a.o.abr.enabled,
      });
      Ll(a, b);
    }

    function Dk(a, b) {
      if (a.l != vk) {
        const c = sk(Rl, {
          detail: b,
        });
        a.dispatchEvent(c);
        c.defaultPrevented && (b.handled = !0);
      }
    }

    function Ik(a, b, c) {
      a.dispatchEvent(sk(b, {
        detail: {
          schemeIdUri: c.schemeIdUri,
          value: c.value,
          startTime: c.startTime,
          endTime: c.endTime,
          id: c.id,
          eventElement: c.eventElement,
        },
      }));
    }

    function Ck(a) {
      if (!a.g.error) return null;
      const b = a.g.error.code;
      if (b == 1) return null;
      let c = a.g.error.msExtendedCode;
      c && (c < 0 && (c += Math.pow(2, 32)), c = c.toString(16));
      return new O(2, 3, 3016, b, c, a.g.error.message);
    }

    function Ok(a, b) {
      if (a.i) {
        let c = Object.keys(b);
        let d = c.length == 1 && c[0] == '00';
        let e = !1;

        if (c.length) {
          c = r(a.B.variants);

          for (let f = c.next(); !f.done; f = c.next()) {
            f = f.value;
            let g = [];
            f.audio && g.push(f.audio);
            f.video && g.push(f.video);
            g = r(g);

            for (let h = g.next(); !h.done; h = g.next()) {
              let k = h.value;
              h = f.allowedByKeySystem;

              if (k.keyIds.size) {
                f.allowedByKeySystem = !0;
                k = r(k.keyIds);

                for (let l = k.next(); !l.done; l = k.next()) l = l.value, l = b[d ? '00' : l], f.allowedByKeySystem = f.allowedByKeySystem && !!l && !Sl.includes(l);
              }

              h != f.allowedByKeySystem && (e = !0);
            }
          }
        }

        e && al(a);
        (d = a.i.h) && !d.allowedByKeySystem && wl(a);
        e && hl(a);
      }
    }

    function Pk(a, b, c) {
      if (a.s && a.s.onExpirationUpdated) a.s.onExpirationUpdated(b, c);
      b = sk(Tl);
      a.dispatchEvent(b);
    }

    function Tk(a, b, c) {
      b > 0 && (a.X() || a.ve(b));
      b = a.getDuration();
      c < b && (a.X() || a.Ja(c));
    }

    function Gl(a, b) {
      let c = a.m ? a.m.zc() : {};
      let d = Object.keys(c);
      d = d.length && d[0] == '00';

      for (var e = !1, f = !1, g = new Set(), h = new Set(), k = r(b.variants), l = k.next(); !l.done; l = k.next()) {
        l = l.value;
        let m = [];
        l.audio && m.push(l.audio);
        l.video && m.push(l.video);
        m = r(m);

        for (let n = m.next(); !n.done; n = m.next()) {
          if (n = n.value, n.keyIds.size) {
            n = r(n.keyIds);

            for (let p = n.next(); !p.done; p = n.next()) {
              p = p.value;
              const t = c[d ? '00' : p];
              t ? Sl.includes(t) && h.add(t) : g.add(p);
            }
          }
        }

        l.allowedByApplication ? l.allowedByKeySystem && (e = !0) : f = !0;
      }

      if (!e) {
        throw c = {
          hasAppRestrictions: f,
          missingKeys: Array.from(g),
          restrictedKeyStatuses: Array.from(h),
        }, new O(2, 4, 4012, c);
      }
    }

    function gl(a) {
      if (!a.variants.some(ge)) throw new O(2, 4, 4032);
    }

    function Ll(a, b) {
      I((c) => {
        if (c.g == 1) return u(c, Promise.resolve(), 2);
        a.l != vk && a.dispatchEvent(b);
        z(c);
      });
    }

    function Al(a) {
      const b = new Set();
      a = r(a);

      for (let c = a.next(); !c.done; c = a.next()) c = c.value, c.language ? b.add(id(c.language)) : b.add('und');

      return b;
    }

    function zl(a) {
      const b = new Map();
      const c = new Map();
      a = r(a);

      for (let d = a.next(); !d.done; d = a.next()) {
        d = d.value;
        let e = 'und';
        let f = [];
        d.language && (e = id(d.language));
        d.type == 'variant' ? f = d.audioRoles : f = d.roles;
        f && f.length || (f = ['']);
        b.has(e) || b.set(e, new Set());
        f = r(f);

        for (let g = f.next(); !g.done; g = f.next()) g = g.value, b.get(e).add(g), d.label && (c.has(e) || c.set(e, new Map()), c.get(e).set(g, d.label));
      }

      const h = [];
      b.forEach((k, l) => {
        for (let m = r(k), n = m.next(); !n.done; n = m.next()) {
          n = n.value;
          let p = null;
          c.has(l) && c.get(l).has(n) && (p = c.get(l).get(n));
          h.push({
            language: l,
            role: n,
            label: p,
          });
        }
      });
      return h;
    }

    function wk() {
      return new O(2, 7, 7E3);
    }

    function rk(a, b, c, d, e, f) {
      return d == a && e.G == f.G && e.uri == f.uri && e.mimeType == f.mimeType ? b : c;
    }

    function zj() {
      return {
        G: null,
        mimeType: null,
        startTime: null,
        Rd: NaN,
        uri: null,
      };
    }

    function xk(a) {
      return new Promise((b, c) => {
        a.mb = function () {
          return c(wk());
        };

        a.Fc = function () {
          return b();
        };

        a.onError = function (d) {
          return c(d);
        };

        a.Hc = function () {
          return c(wk());
        };
      });
    }

    M('shaka.Player', W);
    W.prototype.setVideoContainer = W.prototype.we;
    W.prototype.getManifestParserFactory = W.prototype.$e;
    W.prototype.getManifest = W.prototype.Ze;
    W.prototype.retryStreaming = W.prototype.Id;
    W.prototype.setMaxHardwareResolution = W.prototype.Od;
    W.prototype.addChaptersTrack = W.prototype.De;
    W.prototype.addTextTrackAsync = W.prototype.Ee;
    W.prototype.addTextTrack = W.prototype.addTextTrack;
    W.prototype.getStats = W.prototype.getStats;
    W.prototype.getBufferedInfo = W.prototype.xc;
    W.prototype.getPresentationStartTimeAsDate = W.prototype.de;
    W.prototype.getPlayheadTimeAsDate = W.prototype.ff;
    W.prototype.setTextTrackVisibility = W.prototype.Sf;
    W.prototype.getChapters = W.prototype.Te;
    W.prototype.getChaptersTracks = W.prototype.ce;
    W.prototype.isTextTrackVisible = W.prototype.sd;
    W.prototype.selectVariantsByLabel = W.prototype.Mf;
    W.prototype.selectTextLanguage = W.prototype.Ld;
    W.prototype.selectAudioLanguage = W.prototype.Kd;
    W.prototype.getTextLanguages = W.prototype.kf;
    W.prototype.getAudioLanguages = W.prototype.Qe;
    W.prototype.getTextLanguagesAndRoles = W.prototype.lf;
    W.prototype.getAudioLanguagesAndRoles = W.prototype.Re;
    W.prototype.selectVariantTrack = W.prototype.se;
    W.prototype.selectTextTrack = W.prototype.re;
    W.prototype.getThumbnails = W.prototype.mf;
    W.prototype.getImageTracks = W.prototype.We;
    W.prototype.getTextTracks = W.prototype.hb;
    W.prototype.getVariantTracks = W.prototype.Cc;
    W.prototype.cancelTrickPlay = W.prototype.Ie;
    W.prototype.trickPlay = W.prototype.Uf;
    W.prototype.getPlaybackRate = W.prototype.df;
    W.prototype.isBuffering = W.prototype.rd;
    W.prototype.getKeyStatuses = W.prototype.zc;
    W.prototype.getExpiration = W.prototype.Tb;
    W.prototype.drmInfo = W.prototype.drmInfo;
    W.prototype.keySystem = W.prototype.keySystem;
    W.prototype.goToLive = W.prototype.qf;
    W.prototype.seekRange = W.prototype.bc;
    W.prototype.isAudioOnly = W.prototype.sf;
    W.prototype.isInProgress = W.prototype.kb;
    W.prototype.isLive = W.prototype.X;
    W.prototype.getAdManager = W.prototype.be;
    W.prototype.getAssetUri = W.prototype.od;
    W.prototype.getNetworkingEngine = W.prototype.Ub;
    W.prototype.getMediaElement = W.prototype.bf;
    W.prototype.getLoadMode = W.prototype.Ye;
    W.prototype.resetConfiguration = W.prototype.Lf;
    W.prototype.getBufferFullness = W.prototype.Se;
    W.prototype.getConfiguration = W.prototype.getConfiguration;
    W.prototype.configure = W.prototype.configure;
    W.prototype.load = W.prototype.load;
    W.prototype.unload = W.prototype.Td;
    W.prototype.detach = W.prototype.detach;
    W.prototype.attach = W.prototype.Pb;

    W.probeSupport = function (a) {
      a = void 0 === a ? !0 : a;
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) return b = {}, a ? u(h, Wf(), 3) : h.v(2);
        h.g != 2 && (b = h.h);
        let k = {};

        if (sd()) {
          for (var l in cg) k[l] = !0;

          for (var m in eg) k[m] = !0;
        }

        l = {
          mpd: 'application/dash+xml',
          m3u8: 'application/x-mpegurl',
          ism: 'application/vnd.ms-sstr+xml',
        };
        m = r(['application/dash+xml', 'application/x-mpegurl', 'application/vnd.apple.mpegurl', 'application/vnd.ms-sstr+xml']);

        for (let n = m.next(); !n.done; n = m.next()) n = n.value, k[n] = sd() ? !!cg[n] : td(n);

        for (var p in l) {
          k[p] = sd() ? !!eg[p] : td(l[p]);
        }

        c = k;
        k = {};
        p = r('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(','));

        for (l = p.next(); !l.done; l = p.next()) l = l.value, k[l] = sd() ? $c(l) ? !0 : MediaSource.isTypeSupported(l) || Rc(l) : td(l), m = l.split(';')[0], k[m] = k[m] || k[l];

        d = k;
        e = {
          manifest: c,
          media: d,
          drm: b,
        };
        f = Ul;

        for (g in f) e[g] = f[g]();

        return h.return(e);
      });
    };

    W.isBrowserSupported = function () {
      window.Promise || Va('A Promise implementation or polyfill is required');
      window.TextDecoder && window.TextEncoder || Va('A TextDecoder/TextEncoder implementation or polyfill is required');
      if (!(window.Promise && window.Uint8Array && window.TextDecoder && window.TextEncoder && Array.prototype.forEach) || wd('Trident/')) return !1;
      const a = zd();
      return a && a < 12 || !(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration) ? !1 : sd() ? !0 : td('application/x-mpegurl');
    };

    W.setAdManagerFactory = function (a) {
      hk = a;
    };

    W.registerSupportPlugin = function (a, b) {
      Ul[a] = b;
    };

    W.prototype.destroy = W.prototype.destroy;
    var Ql = 'abrstatuschanged';
    var Kl = 'adaptation';
    var Hl = 'buffering';
    var Qk = 'drmsessionupdate';
    var wj = 'emsg';
    var Rl = 'error';
    var Tl = 'expirationupdated';
    var Ak = 'loaded';
    var yk = 'loading';
    var Lk = 'manifestparsed';
    var pl = 'metadata';
    var tk = 'onstatechange';
    var uk = 'onstateidle';
    var Il = 'ratechange';
    var $k = 'streaming';
    var Ol = 'textchanged';
    var Pl = 'texttrackvisibility';
    var Jk = 'timelineregionadded';
    var sl = 'timelineregionenter';
    var tl = 'timelineregionexit';
    var Ml = 'trackschanged';
    var Ek = 'unloading';
    var Nl = 'variantchanged';
    const Vl = {
      ag: Ql,
      bg: Kl,
      cg: Hl,
      dg: Qk,
      fg: wj,
      Error: Rl,
      gg: Tl,
      hg: 'largegap',
      ig: Ak,
      jg: yk,
      kg: Lk,
      Metadata: pl,
      lg: tk,
      mg: uk,
      ng: Il,
      og: 'sessiondata',
      pg: $k,
      qg: Ol,
      rg: Pl,
      sg: Jk,
      tg: sl,
      ug: tl,
      vg: Ml,
      wg: Ek,
      xg: Nl,
    };
    var vk = 0;
    var ek = 1;
    var Zk = 2;
    var kl = 3;
    W.LoadMode = {
      DESTROYED: vk,
      NOT_LOADED: ek,
      MEDIA_SOURCE: Zk,
      SRC_EQUALS: kl,
    };
    W.version = 'v3.2.0';
    const Wl = ['3', '2'];
    Vb = new function (a) {
      this.g = a;
      this.i = Wb;
      this.h = Xb;
    }(new Tb(Number(Wl[0]), Number(Wl[1])));
    var Sl = ['output-restricted', 'internal-error'];
    var Ul = {};
    var hk = null;
    var Bk = {
      mp4: 'video/mp4',
      m4v: 'video/mp4',
      m4a: 'audio/mp4',
      webm: 'video/webm',
      weba: 'audio/webm',
      mkv: 'video/webm',
      ts: 'video/mp2t',
      ogv: 'video/ogg',
      ogg: 'audio/ogg',
      mpg: 'video/mpeg',
      mpeg: 'video/mpeg',
      m3u8: 'application/x-mpegurl',
      mp3: 'audio/mpeg',
      aac: 'audio/aac',
      flac: 'audio/flac',
      wav: 'audio/wav',
    };
    var Bl = {
      sbv: 'text/x-subviewer',
      srt: 'text/srt',
      vtt: 'text/vtt',
      webvtt: 'text/vtt',
      ttml: 'application/ttml+xml',
      lrc: 'application/x-subtitle-lrc',
      ssa: 'text/x-ssa',
      ass: 'text/x-ssa',
    };

    function Xl() {
      this.h = [];
      this.j = this.i = this.g = 0;
    }

    function Yl(a, b) {
      const c = this;
      this.i = a;
      this.g = b;
      this.j = !1;
      this.l = this.g.getVolume();
      this.h = new cf();
      this.h.A(this.g, google.ima.AdEvent.Type.PAUSED, () => {
        c.j = !0;
      });
      this.h.A(this.g, google.ima.AdEvent.Type.RESUMED, () => {
        c.j = !1;
      });
    }

    q = Yl.prototype;

    q.getDuration = function () {
      return this.i.getDuration();
    };

    q.getMinSuggestedDuration = function () {
      return this.i.getMinSuggestedDuration();
    };

    q.getRemainingTime = function () {
      return this.g.getRemainingTime();
    };

    q.isPaused = function () {
      return this.j;
    };

    q.isSkippable = function () {
      return this.i.getSkipTimeOffset() >= 0;
    };

    q.getTimeUntilSkippable = function () {
      let a = this.i.getSkipTimeOffset();
      a = this.getRemainingTime() - a;
      return Math.max(a, 0);
    };

    q.canSkipNow = function () {
      return this.g.getAdSkippableState();
    };

    q.skip = function () {
      return this.g.skip();
    };

    q.pause = function () {
      return this.g.pause();
    };

    q.play = function () {
      return this.g.resume();
    };

    q.getVolume = function () {
      return this.g.getVolume();
    };

    q.setVolume = function (a) {
      return this.g.setVolume(a);
    };

    q.isMuted = function () {
      return this.g.getVolume() == 0;
    };

    q.resize = function (a, b) {
      this.g.resize(a, b, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL);
    };

    q.setMuted = function (a) {
      a ? (this.l = this.getVolume(), this.setVolume(0)) : this.setVolume(this.l);
    };

    q.getSequenceLength = function () {
      const a = this.i.getAdPodInfo();
      return a == null ? 1 : a.getTotalAds();
    };

    q.getPositionInSequence = function () {
      const a = this.i.getAdPodInfo();
      return a == null ? 1 : a.getAdPosition();
    };

    q.release = function () {
      this.g = this.i = null;
    };

    M('shaka.ads.ClientSideAd', Yl);
    Yl.prototype.release = Yl.prototype.release;
    Yl.prototype.getPositionInSequence = Yl.prototype.getPositionInSequence;
    Yl.prototype.getSequenceLength = Yl.prototype.getSequenceLength;
    Yl.prototype.setMuted = Yl.prototype.setMuted;
    Yl.prototype.resize = Yl.prototype.resize;
    Yl.prototype.isMuted = Yl.prototype.isMuted;
    Yl.prototype.setVolume = Yl.prototype.setVolume;
    Yl.prototype.getVolume = Yl.prototype.getVolume;
    Yl.prototype.play = Yl.prototype.play;
    Yl.prototype.pause = Yl.prototype.pause;
    Yl.prototype.skip = Yl.prototype.skip;
    Yl.prototype.canSkipNow = Yl.prototype.canSkipNow;
    Yl.prototype.getTimeUntilSkippable = Yl.prototype.getTimeUntilSkippable;
    Yl.prototype.isSkippable = Yl.prototype.isSkippable;
    Yl.prototype.isPaused = Yl.prototype.isPaused;
    Yl.prototype.getRemainingTime = Yl.prototype.getRemainingTime;
    Yl.prototype.getMinSuggestedDuration = Yl.prototype.getMinSuggestedDuration;
    Yl.prototype.getDuration = Yl.prototype.getDuration;

    function Zl(a, b, c, d) {
      const e = this;
      this.m = a;
      this.g = b;
      this.u = NaN;
      this.j = d;
      this.s = null;
      this.h = new cf();
      google.ima.settings.setLocale(c);
      a = new google.ima.AdDisplayContainer(this.m, this.g);
      a.initialize();
      this.l = new google.ima.AdsLoader(a);
      this.l.getSettings().setPlayerType('shaka-player');
      this.l.getSettings().setPlayerVersion('v3.2.0');
      this.i = null;
      this.h.va(this.l, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (f) => {
        $l(e, f);
      });
      this.h.A(this.l, google.ima.AdErrorEvent.Type.AD_ERROR, (f) => {
        am(e, f);
      });

      this.g.onended = function () {
        e.l.contentComplete();
      };
    }

    Zl.prototype.stop = function () {
      this.i && this.i.stop();
      this.m && Jj(this.m);
    };

    function am(a, b) {
      b.getError();
      bm(a, null);
      a.j(new Q('ad-cue-points-changed', {
        cuepoints: [],
      }));
    }

    function $l(a, b) {
      a.j(new Q('ads-loaded', {
        loadTime: Date.now() / 1E3 - a.u,
      }));
      a.i = b.getAdsManager(a.g);
      a.j(new Q('ima-ad-manager-loaded', {
        imaAdManager: a.i,
      }));
      let c = a.i.getCuePoints();

      if (c.length) {
        const d = [];
        c = r(c);

        for (let e = c.next(); !e.done; e = c.next()) d.push(new cm(e.value));

        a.j(new Q('ad-cue-points-changed', {
          cuepoints: d,
        }));
      }

      dm(a);

      try {
        a.i.init(a.g.offsetWidth, a.g.offsetHeight, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), a.h.A(a.g, 'loadeddata', () => {
          a.i.resize(a.g.offsetWidth, a.g.offsetHeight, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL);
        }), a.i.start();
      } catch (f) {
        bm(a, null);
      }
    }

    function dm(a) {
      a.h.A(a.i, google.ima.AdErrorEvent.Type.AD_ERROR, (b) => {
        am(a, b);
      });
      a.h.A(a.i, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, (b) => {
        em(a, b);
      });
      a.h.A(a.i, google.ima.AdEvent.Type.STARTED, (b) => {
        em(a, b);
      });
      a.h.A(a.i, google.ima.AdEvent.Type.FIRST_QUARTILE, (b) => {
        a.j(new Q('ad-first-quartile', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.MIDPOINT, (b) => {
        a.j(new Q('ad-midpoint', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.THIRD_QUARTILE, (b) => {
        a.j(new Q('ad-third-quartile', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.COMPLETE, (b) => {
        a.j(new Q('ad-complete', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, (b) => {
        bm(a, b);
      });
      a.h.A(a.i, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, (b) => {
        bm(a, b);
      });
      a.h.A(a.i, google.ima.AdEvent.Type.SKIPPED, (b) => {
        a.j(new Q('ad-skipped', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.VOLUME_CHANGED, (b) => {
        a.j(new Q('ad-volume-changed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.VOLUME_MUTED, (b) => {
        a.j(new Q('ad-muted', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.PAUSED, (b) => {
        a.s.j = !0;
        a.j(new Q('ad-paused', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.RESUMED, (b) => {
        a.s.j = !1;
        a.j(new Q('ad-resumed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, (b) => {
        a.j(new Q('ad-skip-state-changed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.CLICK, (b) => {
        a.j(new Q('ad-clicked', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.AD_PROGRESS, (b) => {
        a.j(new Q('ad-progress', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.AD_BUFFERING, (b) => {
        a.j(new Q('ad-buffering', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.IMPRESSION, (b) => {
        a.j(new Q('ad-impression', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.DURATION_CHANGE, (b) => {
        a.j(new Q('ad-duration-changed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.USER_CLOSE, (b) => {
        a.j(new Q('ad-closed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.LOADED, (b) => {
        a.j(new Q('ad-loaded', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, (b) => {
        a.j(new Q('all-ads-completed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.LINEAR_CHANGED, (b) => {
        a.j(new Q('ad-linear-changed', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.AD_METADATA, (b) => {
        a.j(new Q('ad-metadata', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.LOG, (b) => {
        a.j(new Q('ad-recoverable-error', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.AD_BREAK_READY, (b) => {
        a.j(new Q('ad-break-ready', {
          originalEvent: b,
        }));
      });
      a.h.A(a.i, google.ima.AdEvent.Type.INTERACTION, (b) => {
        a.j(new Q('ad-interaction', {
          originalEvent: b,
        }));
      });
    }

    function em(a, b) {
      const c = b.getAd();
      a.s = new Yl(c, a.i);
      a.j(new Q('ad-started', {
        ad: a.s,
        sdkAdObject: c,
        originalEvent: b,
      }));
      a.m.setAttribute('ad-active', 'true');
      a.g.pause();
    }

    function bm(a, b) {
      a.j(new Q('ad-stopped', {
        originalEvent: b,
      }));
      a.m.removeAttribute('ad-active');
      a.g.play();
    }

    function fm(a, b) {
      this.i = a;
      this.h = null;
      this.g = b;
    }

    q = fm.prototype;

    q.getDuration = function () {
      return this.h ? this.h.duration : -1;
    };

    q.getMinSuggestedDuration = function () {
      return this.getDuration();
    };

    q.getRemainingTime = function () {
      return this.h ? this.h.duration - this.h.currentTime : -1;
    };

    q.isPaused = function () {
      return this.g.paused;
    };

    q.isSkippable = function () {
      return this.i.isSkippable();
    };

    q.getTimeUntilSkippable = function () {
      let a = this.i.getSkipTimeOffset();
      a = this.getRemainingTime() - a;
      return Math.max(a, 0);
    };

    q.canSkipNow = function () {
      return this.getTimeUntilSkippable() == 0;
    };

    q.skip = function () {
      this.g.currentTime += this.getRemainingTime();
    };

    q.pause = function () {
      return this.g.pause();
    };

    q.play = function () {
      return this.g.play();
    };

    q.getVolume = function () {
      return this.g.volume;
    };

    q.setVolume = function (a) {
      this.g.volume = a;
    };

    q.isMuted = function () {
      return this.g.muted;
    };

    q.resize = function () {};

    q.setMuted = function (a) {
      this.g.muted = a;
    };

    q.getSequenceLength = function () {
      const a = this.i.getAdPodInfo();
      return a == null ? 1 : a.getTotalAds();
    };

    q.getPositionInSequence = function () {
      const a = this.i.getAdPodInfo();
      return a == null ? 1 : a.getAdPosition();
    };

    q.release = function () {
      this.g = this.h = this.i = null;
    };

    M('shaka.ads.ServerSideAd', fm);
    fm.prototype.release = fm.prototype.release;
    fm.prototype.getPositionInSequence = fm.prototype.getPositionInSequence;
    fm.prototype.getSequenceLength = fm.prototype.getSequenceLength;
    fm.prototype.setMuted = fm.prototype.setMuted;
    fm.prototype.resize = fm.prototype.resize;
    fm.prototype.isMuted = fm.prototype.isMuted;
    fm.prototype.setVolume = fm.prototype.setVolume;
    fm.prototype.getVolume = fm.prototype.getVolume;
    fm.prototype.play = fm.prototype.play;
    fm.prototype.pause = fm.prototype.pause;
    fm.prototype.skip = fm.prototype.skip;
    fm.prototype.canSkipNow = fm.prototype.canSkipNow;
    fm.prototype.getTimeUntilSkippable = fm.prototype.getTimeUntilSkippable;
    fm.prototype.isSkippable = fm.prototype.isSkippable;
    fm.prototype.isPaused = fm.prototype.isPaused;
    fm.prototype.getRemainingTime = fm.prototype.getRemainingTime;
    fm.prototype.getMinSuggestedDuration = fm.prototype.getMinSuggestedDuration;
    fm.prototype.getDuration = fm.prototype.getDuration;

    function gm(a, b, c, d) {
      const e = this;
      this.u = a;
      this.g = b;
      this.l = null;
      this.J = NaN;
      this.j = d;
      this.H = !1;
      this.D = this.m = this.s = null;
      this.F = '';
      this.h = new cf();
      a = new google.ima.dai.api.UiSettings();
      a.setLocale(c);
      this.i = new google.ima.dai.api.StreamManager(this.g, this.u, a);
      this.j(new Q('ima-stream-manager-loaded', {
        imaStreamManager: this.i,
      }));
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.LOADED, (f) => {
        hm(e, f);
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.ERROR, () => {
        e.F.length ? e.l.resolve(e.F) : e.l.reject('IMA Stream request returned an error and there was no backup asset uri provided.');
        e.l = null;
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED, () => {});
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.STARTED, (f) => {
        f = f.getAd();
        e.m = new fm(f, e.g);
        e.D && (e.m.h = e.D);
        e.j(new Q('ad-started', {
          ad: e.m,
        }));
        e.u.setAttribute('ad-active', 'true');
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED, () => {
        e.u.removeAttribute('ad-active');
        const f = e.g.currentTime;
        e.s && e.s > f && (e.g.currentTime = e.s, e.s = null);
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.AD_PROGRESS, (f) => {
        e.D = f.getStreamData().adProgressData;
        e.m && (e.m.h = e.D);
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE, () => {
        e.j(new Q('ad-first-quartile'));
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.MIDPOINT, () => {
        e.j(new Q('ad-midpoint'));
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE, () => {
        e.j(new Q('ad-third-quartile'));
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.COMPLETE, () => {
        e.j(new Q('ad-complete'));
        e.j(new Q('ad-stopped'));
        e.u.removeAttribute('ad-active');
        e.m = null;
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.SKIPPED, () => {
        e.j(new Q('ad-skipped'));
        e.j(new Q('ad-stopped'));
      });
      this.h.A(this.i, google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED, (f) => {
        let g = f.getStreamData();
        f = [];
        g = r(g.cuepoints);

        for (let h = g.next(); !h.done; h = g.next()) h = h.value, f.push(new cm(h.start, h.end));

        e.j(new Q('ad-cue-points-changed', {
          cuepoints: f,
        }));
      });
    }

    gm.prototype.stop = function () {
      this.i.reset();
      this.F = '';
      this.s = null;
    };

    gm.prototype.onCueMetadataChange = function (a) {
      if (a.key && a.data) {
        const b = {};
        b[a.key] = a.data;
        this.i.onTimedMetadata(b);
      }
    };

    function hm(a, b) {
      a.j(new Q('ads-loaded', {
        loadTime: Date.now() / 1E3 - a.J,
      }));
      const c = b.getStreamData().url;
      a.l.resolve(c);
      a.l = null;
      a.H || a.h.A(a.g, 'seeked', () => {
        const d = a.g.currentTime;

        if (d != 0) {
          a.i.streamTimeForContentTime(d);
          const e = a.i.previousCuePointForStreamTime(d);
          e && !e.played && (a.s = d, a.g.currentTime = e.start);
        }
      });
    }

    function Y() {
      Le.call(this);
      this.g = this.h = null;
      this.j = new Xl();
      this.i = navigator.language;
    }

    qa(Y, Le);
    q = Y.prototype;

    q.setLocale = function (a) {
      this.i = a;
    };

    q.initClientSide = function (a, b) {
      const c = this;
      if (!window.google || !google.ima || !google.ima.AdsLoader) throw new O(2, 10, 1E4);
      this.h = new Zl(a, b, this.i, (d) => {
        if (d && d.type) {
          switch (d.type) {
            case 'ads-loaded':
              c.j.h.push(d.loadTime);
              break;

            case 'ad-started':
              c.j.g++;
              break;

            case 'ad-complete':
              c.j.i++;
              break;

            case 'ad-skipped':
              c.j.j++;
          }
        }
        c.dispatchEvent(d);
      });
    };

    q.onAssetUnload = function () {
      this.h && this.h.stop();
      this.dispatchEvent(new Q('ad-stopped'));
      this.j = new Xl();
    };

    q.requestClientSideAds = function (a) {
      if (!this.h) throw new O(1, 10, 10001);
      const b = this.h;
      b.u = Date.now() / 1E3;
      b.l.requestAds(a);
    };

    q.initServerSide = function (a, b) {
      const c = this;
      if (!window.google || !google.ima || !google.ima.dai) throw new O(2, 10, 10002);
      this.g = new gm(a, b, this.i, (d) => {
        if (d && d.type) {
          switch (d.type) {
            case 'ads-loaded':
              c.j.h.push(d.loadTime);
              break;

            case 'ad-started':
              c.j.g++;
              break;

            case 'ad-complete':
              c.j.i++;
              break;

            case 'ad-skipped':
              c.j.j++;
          }
        }
        c.dispatchEvent(d);
      });
    };

    q.requestServerSideStream = function (a, b) {
      b = void 0 === b ? '' : b;
      if (!this.g) throw new O(1, 10, 10003);
      a.adTagParameters || (a.adTagParameters = {});
      let c = a.adTagParameters;
      (c.mpt || c.mpv) && Va('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
      a.adTagParameters.mpt = 'shaka-player';
      a.adTagParameters.mpv = 'v3.2.0';
      c = this.g;
      const d = b;
      c.l ? c = Promise.reject(new O(1, 10, 10004)) : (a instanceof google.ima.dai.api.LiveStreamRequest && (c.H = !0), c.l = new Ac(), c.i.requestStream(a), c.F = d || '', c.J = Date.now() / 1E3, c = c.l);
      return c;
    };

    q.replaceServerSideAdTagParameters = function (a) {
      if (!this.g) throw new O(1, 10, 10003);
      (a.mpt || a.mpv) && Va('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
      a.mpt = 'Shaka Player';
      a.mpv = 'v3.2.0';
      this.g.i.replaceAdTagParameters(a);
    };

    q.getStats = function () {
      const a = this.j;
      return {
        loadTimes: a.h,
        started: a.g,
        playedCompletely: a.i,
        skipped: a.j,
      };
    };

    q.onDashTimedMetadata = function (a) {
      if (this.g && a.schemeIdUri == 'urn:google:dai:2018') {
        const b = a.schemeIdUri;
        const c = a.eventElement ? a.eventElement.getAttribute('messageData') : null;
        this.g.i.processMetadata(b, c, a.startTime);
      }
    };

    q.onHlsTimedMetadata = function (a, b) {
      this.g && this.g.i.processMetadata('ID3', a.data, b);
    };

    q.onCueMetadataChange = function (a) {
      if (this.g) this.g.onCueMetadataChange(a);
    };

    M('shaka.ads.AdManager', Y);
    Y.prototype.onCueMetadataChange = Y.prototype.onCueMetadataChange;
    Y.prototype.onHlsTimedMetadata = Y.prototype.onHlsTimedMetadata;
    Y.prototype.onDashTimedMetadata = Y.prototype.onDashTimedMetadata;
    Y.prototype.getStats = Y.prototype.getStats;
    Y.prototype.replaceServerSideAdTagParameters = Y.prototype.replaceServerSideAdTagParameters;
    Y.prototype.requestServerSideStream = Y.prototype.requestServerSideStream;
    Y.prototype.initServerSide = Y.prototype.initServerSide;
    Y.prototype.requestClientSideAds = Y.prototype.requestClientSideAds;
    Y.prototype.onAssetUnload = Y.prototype.onAssetUnload;
    Y.prototype.initClientSide = Y.prototype.initClientSide;
    Y.prototype.setLocale = Y.prototype.setLocale;

    function cm(a, b) {
      this.start = a;
      this.end = void 0 === b ? null : b;
    }

    Y.ADS_LOADED = 'ads-loaded';
    Y.AD_STARTED = 'ad-started';
    Y.AD_FIRST_QUARTILE = 'ad-first-quartile';
    Y.AD_MIDPOINT = 'ad-midpoint';
    Y.AD_THIRD_QUARTILE = 'ad-third-quartile';
    Y.AD_COMPLETE = 'ad-complete';
    Y.AD_STOPPED = 'ad-stopped';
    Y.AD_SKIPPED = 'ad-skipped';
    Y.AD_VOLUME_CHANGED = 'ad-volume-changed';
    Y.AD_MUTED = 'ad-muted';
    Y.AD_PAUSED = 'ad-paused';
    Y.AD_RESUMED = 'ad-resumed';
    Y.AD_SKIP_STATE_CHANGED = 'ad-skip-state-changed';
    Y.CUEPOINTS_CHANGED = 'ad-cue-points-changed';
    Y.IMA_AD_MANAGER_LOADED = 'ima-ad-manager-loaded';
    Y.IMA_STREAM_MANAGER_LOADED = 'ima-stream-manager-loaded';
    Y.AD_CLICKED = 'ad-clicked';
    Y.AD_PROGRESS = 'ad-progress';
    Y.AD_BUFFERING = 'ad-buffering';
    Y.AD_IMPRESSION = 'ad-impression';
    Y.AD_DURATION_CHANGED = 'ad-duration-changed';
    Y.AD_CLOSED = 'ad-closed';
    Y.AD_LOADED = 'ad-loaded';
    Y.ALL_ADS_COMPLETED = 'all-ads-completed';
    Y.AD_LINEAR_CHANGED = 'ad-linear-changed';
    Y.AD_METADATA = 'ad-metadata';
    Y.AD_RECOVERABLE_ERROR = 'ad-recoverable-error';
    Y.AD_BREAK_READY = 'ad-break-ready';
    Y.AD_INTERACTION = 'ad-interaction';

    hk = function () {
      return new Y();
    };

    function im(a) {
      return JSON.stringify(a, (b, c) => {
        if (typeof c !== 'function') {
          if (c instanceof Event || c instanceof Q) {
            var d = {};

            for (f in c) {
              var e = c[f];
              e && typeof e === 'object' ? f == 'detail' && (d[f] = e) : f in Event || (d[f] = e);
            }

            return d;
          }

          if (c instanceof Error) {
            var f = new Set(['name', 'message', 'stack']);

            for (d in c) f.add(d);

            e = r(Object.getOwnPropertyNames(c));

            for (d = e.next(); !d.done; d = e.next()) f.add(d.value);

            e = {};
            f = r(f);

            for (d = f.next(); !d.done; d = f.next()) d = d.value, e[d] = c[d];

            f = {
              __type__: 'Error',
              contents: e,
            };
          } else if (c instanceof TimeRanges) {
            for (f = {
              __type__: 'TimeRanges',
              length: c.length,
              start: [],
              end: [],
            }, d = r(Nh(c)), e = d.next(); !e.done; e = d.next()) {
              e = e.value;
              const g = e.end;
              f.start.push(e.start);
              f.end.push(g);
            }
          } else {
            f = c instanceof Uint8Array ? {
              __type__: 'Uint8Array',
              entries: Array.from(c),
            } : typeof c === 'number' ? isNaN(c) ? 'NaN' : isFinite(c) ? c : c < 0 ? '-Infinity' : 'Infinity' : c;
          }

          return f;
        }
      });
    }

    function jm(a) {
      return JSON.parse(a, (b, c) => {
        if (c == 'NaN') var d = NaN; else if (c == '-Infinity') d = -Infinity; else if (c == 'Infinity') d = Infinity; else if (c && typeof c === 'object' && c.__type__ == 'TimeRanges') d = km(c); else if (c && typeof c === 'object' && c.__type__ == 'Uint8Array') d = new Uint8Array(c.entries); else if (c && typeof c === 'object' && c.__type__ == 'Error') {
          d = c.contents;
          const e = Error(d.message);
          let f;

          for (f in d) e[f] = d[f];

          d = e;
        } else d = c;
        return d;
      });
    }

    function km(a) {
      return {
        length: a.length,

        start(b) {
          return a.start[b];
        },

        end(b) {
          return a.end[b];
        },

      };
    }

    const lm = 'ended play playing pause pausing ratechange seeked seeking timeupdate volumechange'.split(' ');
    const mm = 'buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume'.split(' ');
    const nm = ['loop', 'playbackRate'];
    const om = ['pause', 'play'];
    const pm = {
      getAssetUri: 2,
      getAudioLanguages: 4,
      getAudioLanguagesAndRoles: 4,
      getBufferFullness: 1,
      getBufferedInfo: 2,
      getConfiguration: 4,
      getExpiration: 2,
      getKeyStatuses: 2,
      getPlaybackRate: 2,
      getTextLanguages: 4,
      getTextLanguagesAndRoles: 4,
      getTextTracks: 2,
      getStats: 5,
      getVariantTracks: 2,
      getImageTracks: 2,
      getThumbnails: 2,
      isAudioOnly: 10,
      isBuffering: 1,
      isInProgress: 1,
      isLive: 10,
      isTextTrackVisible: 1,
      keySystem: 10,
      seekRange: 1,
      getLoadMode: 10,
    };
    const qm = {
      getPlayheadTimeAsDate: 1,
      getPresentationStartTimeAsDate: 20,
    };
    const rm = [['getConfiguration', 'configure']];
    const sm = [['isTextTrackVisible', 'setTextTrackVisibility']];
    const tm = 'addChaptersTrack addTextTrack addTextTrackAsync cancelTrickPlay configure getChapters getChaptersTracks resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay goToLive'.split(' ');
    const um = ['attach', 'detach', 'load', 'unload'];

    function vm(a, b, c, d, e, f) {
      const g = this;
      this.L = a;
      this.j = new P(b);
      this.da = c;
      this.D = !1;
      this.u = d;
      this.J = e;
      this.T = f;
      this.h = this.m = !1;
      this.Y = '';
      this.s = null;

      this.F = function () {
        return wm(g);
      };

      this.H = function (h, k) {
        let l = jm(k);

        switch (l.type) {
          case 'event':
            var m = l.targetName;
            l = l.event;
            l = new Q(l.type, l);
            g.u(m, l);
            break;

          case 'update':
            m = l.update;

            for (var n in m) {
              l = g.g[n] || {};

              for (var p in m[n]) l[p] = m[n][p];
            }

            g.D && (g.da(), g.D = !1);
            break;

          case 'asyncComplete':
            if (n = l.id, l = l.error, p = g.i[n], delete g.i[n], p) {
              if (l) {
                n = new O(l.severity, l.category, l.code);

                for (m in l) n[m] = l[m];

                p.reject(n);
              } else p.resolve();
            }
        }
      };

      this.g = {
        video: {},
        player: {},
      };
      this.N = 0;
      this.i = {};
      this.l = null;
      xm.add(this);
    }

    q = vm.prototype;

    q.destroy = function () {
      xm.delete(this);
      ym(this);
      zm && Am(this);
      this.j && (this.j.stop(), this.j = null);
      this.J = this.u = null;
      this.h = this.m = !1;
      this.H = this.F = this.l = this.i = this.g = this.s = null;
      return Promise.resolve();
    };

    q.ta = function () {
      return this.h;
    };

    q.Gd = function () {
      return this.Y;
    };

    q.init = function () {
      if (this.L.length) {
        if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
          this.m = !0;
          this.j.Hb();
          let a = new chrome.cast.SessionRequest(this.L);
          a = new chrome.cast.ApiConfig(a, (b) => {
            for (let c = r(xm), d = c.next(); !d.done; d = c.next()) Bm(d.value, b);
          }, (b) => {
            for (let c = r(xm), d = c.next(); !d.done; d = c.next()) d = d.value, Cm = b == 'available', d.j.Hb();
          }, 'origin_scoped');
          chrome.cast.initialize(a, () => {}, () => {});
          Cm && this.j.S(Dm);
          (a = zm) && a.status != chrome.cast.SessionStatus.STOPPED ? Bm(this, a) : zm = null;
        } else window.__onGCastApiAvailable || (window.__onGCastApiAvailable = Em), window.__onGCastApiAvailable != Em && Va('A global Cast SDK hook is already installed! Shaka Player will be unable to receive a notification when the Cast SDK is ready.');
      }
    };

    q.Md = function (a) {
      this.s = a;
      this.h && Fm(this, {
        type: 'appData',
        appData: this.s,
      });
    };

    q.cast = function (a) {
      const b = this;
      return I((c) => {
        if (!b.m) throw new O(1, 8, 8E3);
        if (!Cm) throw new O(1, 8, 8001);
        if (b.h) throw new O(1, 8, 8002);
        b.l = new Ac();
        chrome.cast.requestSession((d) => Gm(b, a, d), (d) => Hm(b, d));
        return u(c, b.l, 0);
      });
    };

    function Im(a) {
      if (a.h) {
        const b = a.T();
        chrome.cast.requestSession((c) => Gm(a, b, c), (c) => Hm(a, c));
      }
    }

    q.wb = function () {
      if (this.h) {
        ym(this);

        if (zm) {
          Am(this);

          try {
            zm.stop(() => {}, () => {});
          } catch (a) {}

          zm = null;
        }

        wm(this);
      }
    };

    q.get = function (a, b) {
      const c = this;

      if (a == 'video') {
        if (om.includes(b)) {
          return function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];

            return c.ne.apply(c, [a, b].concat(ja(e)));
          };
        }
      } else if (a == 'player') {
        if (qm[b] && !this.get('player', 'isLive')()) return function () {};
        if (tm.includes(b)) {
          return function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];

            return c.ne.apply(c, [a, b].concat(ja(e)));
          };
        }

        if (um.includes(b)) {
          return function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];

            return c.If.apply(c, [a, b].concat(ja(e)));
          };
        }

        if (pm[b]) {
          return function () {
            return c.g[a][b];
          };
        }
      }

      return this.g[a][b];
    };

    q.set = function (a, b, c) {
      this.g[a][b] = c;
      Fm(this, {
        type: 'set',
        targetName: a,
        property: b,
        value: c,
      });
    };

    function Gm(a, b, c) {
      zm = c;
      c.addUpdateListener(a.F);
      c.addMessageListener('urn:x-cast:com.google.shaka.v2', a.H);
      wm(a);
      Fm(a, {
        type: 'init',
        initState: b,
        appData: a.s,
      });
      a.l.resolve();
    }

    function Hm(a, b) {
      let c = 8003;

      switch (b.code) {
        case 'cancel':
          c = 8004;
          break;

        case 'timeout':
          c = 8005;
          break;

        case 'receiver_unavailable':
          c = 8006;
      }

      a.l.reject(new O(2, 8, c, b));
    }

    q.ne = function (a, b, c) {
      for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];

      Fm(this, {
        type: 'call',
        targetName: a,
        methodName: b,
        args: d,
      });
    };

    q.If = function (a, b, c) {
      for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];

      e = new Ac();
      const f = this.N.toString();
      this.N++;
      this.i[f] = e;

      try {
        Fm(this, {
          type: 'asyncCall',
          targetName: a,
          methodName: b,
          args: d,
          id: f,
        });
      } catch (g) {
        e.reject(g);
      }

      return e;
    };

    function Bm(a, b) {
      const c = a.T();
      a.l = new Ac();
      a.D = !0;
      Gm(a, c, b);
    }

    function Am(a) {
      const b = zm;
      b.removeUpdateListener(a.F);
      b.removeMessageListener('urn:x-cast:com.google.shaka.v2', a.H);
    }

    function wm(a) {
      const b = zm ? zm.status == 'connected' : !1;

      if (a.h && !b) {
        a.J();

        for (const c in a.g) a.g[c] = {};

        ym(a);
      }

      a.h = b;
      a.Y = b ? zm.receiver.friendlyName : '';
      a.j.Hb();
    }

    function ym(a) {
      for (const b in a.i) {
        const c = a.i[b];
        delete a.i[b];
        c.reject(new O(1, 7, 7E3));
      }
    }

    function Fm(a, b) {
      let c = im(b);
      let d = zm;

      try {
        d.sendMessage('urn:x-cast:com.google.shaka.v2', c, () => {}, Ya);
      } catch (e) {
        throw c = new O(2, 8, 8005, e), d = new Q('error', {
          detail: c,
        }), a.u('player', d), a.wb(), c;
      }
    }

    var Dm = 0.02;
    var Cm = !1;
    var zm = null;
    var xm = new Set();

    function Em(a) {
      if (a) {
        a = r(xm);

        for (let b = a.next(); !b.done; b = a.next()) b.value.init();
      }
    }

    function Jm(a, b, c) {
      Le.call(this);
      const d = this;
      this.j = a;
      this.i = b;
      this.h = this.s = this.l = this.u = this.m = null;
      this.F = c;
      this.D = new Map();
      this.g = new vm(c, () => Km(d), () => Lm(d), (e, f) => Mm(d, e, f), () => Nm(d), () => Om(d));
      Pm(this);
    }

    qa(Jm, Le);
    q = Jm.prototype;

    q.destroy = function (a) {
      a && this.g.wb();
      this.h && (this.h.release(), this.h = null);
      a = [];
      this.i && (a.push(this.i.destroy()), this.i = null);
      this.g && (a.push(this.g.destroy()), this.g = null);
      this.u = this.m = this.j = null;
      return Promise.all(a);
    };

    q.pf = function () {
      return this.m;
    };

    q.ef = function () {
      return this.u;
    };

    q.Ge = function () {
      return this.g.m && Cm;
    };

    q.ta = function () {
      return this.g.ta();
    };

    q.Gd = function () {
      return this.g.Gd();
    };

    q.cast = function () {
      const a = this;
      let b;
      return I((c) => (c.g == 1 ? (b = Om(a), u(c, a.g.cast(b), 2)) : a.i ? u(c, a.i.Td(), 0) : c.return()));
    };

    q.Md = function (a) {
      this.g.Md(a);
    };

    q.Tf = function () {
      Im(this.g);
    };

    q.wb = function () {
      this.g.wb();
    };

    q.Je = function (a) {
      const b = this;
      return I((c) => {
        if (c.g == 1) {
          if (a == b.F) return c.return();
          b.F = a;
          b.g.wb();
          return u(c, b.g.destroy(), 2);
        }

        b.g = null;
        b.g = new vm(a, () => Km(b), () => Lm(b), (d, e) => Mm(b, d, e), () => Nm(b), () => Om(b));
        b.g.init();
        z(c);
      });
    };

    function Pm(a) {
      a.g.init();
      a.h = new cf();

      for (var b = r(lm), c = b.next(); !c.done; c = b.next()) {
        a.h.A(a.j, c.value, (f) => {
          a.g.ta() || (f = new Q(f.type, f), a.l.dispatchEvent(f));
        });
      }

      for (const d in Vl) {
        a.h.A(a.i, Vl[d], (f) => {
          a.g.ta() || a.s.dispatchEvent(f);
        });
      }

      a.m = {};
      b = {};

      for (const e in a.j) {
        b.Ib = e, Object.defineProperty(a.m, b.Ib, {
          configurable: !1,
          enumerable: !0,
          get: (function (f) {
            return function () {
              return Qm(a, f.Ib);
            };
          }(b)),
          set: (function (f) {
            return function (g) {
              const h = f.Ib;
              a.g.ta() ? a.g.set('video', h, g) : a.j[h] = g;
            };
          }(b)),
        }), b = {
          Ib: b.Ib,
        };
      }

      a.u = {};
      Rm(a, (f) => {
        Object.defineProperty(a.u, f, {
          configurable: !1,
          enumerable: !0,

          get() {
            return Sm(a, f);
          },

        });
      });
      Tm(a);
      a.l = new Le();
      a.l.pc = a.m;
      a.s = new Le();
      a.s.pc = a.u;
    }

    function Tm(a) {
      const b = new Map();
      Rm(a, (c, d) => {
        if (b.has(d)) {
          const e = b.get(d);
          c.length < e.length ? a.D.set(c, e) : a.D.set(e, c);
        } else b.set(d, c);
      });
    }

    function Rm(a, b) {
      function c(l) {
        return l == 'constructor' || typeof d[l] !== 'function' ? !1 : !e.has(l);
      }

      var d = a.i;
      var e = new Set();

      for (f in d) c(f) && (e.add(f), b(f, d[f]));

      var f = Object.getPrototypeOf(d);

      for (let g = Object.getPrototypeOf({}); f && f != g;) {
        for (let h = r(Object.getOwnPropertyNames(f)), k = h.next(); !k.done; k = h.next()) k = k.value, c(k) && (e.add(k), b(k, d[k]));

        f = Object.getPrototypeOf(f);
      }
    }

    function Om(a) {
      const b = {
        video: {},
        player: {},
        playerAfterLoad: {},
        manifest: a.i.od(),
        startTime: null,
      };
      a.j.pause();

      for (var c = r(nm), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.j[d];

      a.j.ended || (b.startTime = a.j.currentTime);
      c = r(rm);

      for (d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        d = e[1];
        e = a.i[e[0]]();
        b.player[d] = e;
      }

      c = r(sm);

      for (d = c.next(); !d.done; d = c.next()) e = d.value, d = e[1], e = a.i[e[0]](), b.playerAfterLoad[d] = e;

      return b;
    }

    function Km(a) {
      const b = new Q('caststatuschanged');
      a.dispatchEvent(b);
    }

    function Lm(a) {
      const b = new Q(a.m.paused ? 'pause' : 'play');
      a.l.dispatchEvent(b);
    }

    function Nm(a) {
      for (var b = r(rm), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        c = d[1];
        d = a.g.get('player', d[0])();
        a.i[c](d);
      }

      const e = a.g.get('player', 'getAssetUri')();
      c = a.g.get('video', 'ended');
      b = Promise.resolve();
      const f = a.j.autoplay;
      d = null;
      c || (d = a.g.get('video', 'currentTime'));
      e && (a.j.autoplay = !1, b = a.i.load(e, d));
      const g = {};
      c = r(nm);

      for (d = c.next(); !d.done; d = c.next()) d = d.value, g[d] = a.g.get('video', d);

      b.then(() => {
        if (a.j) {
          for (var h = r(nm), k = h.next(); !k.done; k = h.next()) k = k.value, a.j[k] = g[k];

          h = r(sm);

          for (k = h.next(); !k.done; k = h.next()) {
            let l = k.value;
            k = l[1];
            l = a.g.get('player', l[0])();
            a.i[k](l);
          }

          a.j.autoplay = f;
          e && a.j.play();
        }
      }, (h) => {
        h = new Q(Rl, {
          detail: h,
        });
        a.i.dispatchEvent(h);
      });
    }

    function Qm(a, b) {
      if (b == 'addEventListener') {
        return function (d, e, f) {
          return a.l.addEventListener(d, e, f);
        };
      }
      if (b == 'removeEventListener') {
        return function (d, e, f) {
          return a.l.removeEventListener(d, e, f);
        };
      }

      if (a.g.ta() && Object.keys(a.g.g.video).length == 0) {
        var c = a.j[b];
        if (typeof c !== 'function') return c;
      }

      return a.g.ta() ? a.g.get('video', b) : (c = a.j[b], typeof c === 'function' && (c = c.bind(a.j)), c);
    }

    function Sm(a, b) {
      a.D.has(b) && (b = a.D.get(b));
      if (b == 'addEventListener') {
        return function (c, d, e) {
          return a.s.addEventListener(c, d, e);
        };
      }
      if (b == 'removeEventListener') {
        return function (c, d, e) {
          return a.s.removeEventListener(c, d, e);
        };
      }
      if (b == 'getMediaElement') {
        return function () {
          return a.m;
        };
      }
      if (b == 'getSharedConfiguration') return a.g.get('player', 'getConfiguration');
      if (b == 'getNetworkingEngine') {
        return function () {
          return a.i.Ub();
        };
      }
      if (b == 'getDrmEngine') {
        return function () {
          return a.i.m;
        };
      }
      if (b == 'getAdManager') {
        return function () {
          return a.i.be();
        };
      }
      if (b == 'setVideoContainer') {
        return function (c) {
          return a.i.we(c);
        };
      }

      if (a.g.ta()) {
        if (b == 'getManifest' || b == 'drmInfo') {
          return function () {
            Va(`${b}() does not work while casting!`);
            return null;
          };
        }
        if (b == 'attach' || b == 'detach') {
          return function () {
            Va(`${b}() does not work while casting!`);
            return Promise.resolve();
          };
        }
      }

      return a.g.ta() && Object.keys(a.g.g.video).length == 0 && pm[b] || !a.g.ta() ? a.i[b].bind(a.i) : a.g.get('player', b);
    }

    function Mm(a, b, c) {
      a.g.ta() && (b == 'video' ? a.l.dispatchEvent(c) : b == 'player' && a.s.dispatchEvent(c));
    }

    M('shaka.cast.CastProxy', Jm);
    Jm.prototype.changeReceiverId = Jm.prototype.Je;
    Jm.prototype.forceDisconnect = Jm.prototype.wb;
    Jm.prototype.suggestDisconnect = Jm.prototype.Tf;
    Jm.prototype.setAppData = Jm.prototype.Md;
    Jm.prototype.cast = Jm.prototype.cast;
    Jm.prototype.receiverName = Jm.prototype.Gd;
    Jm.prototype.isCasting = Jm.prototype.ta;
    Jm.prototype.canCast = Jm.prototype.Ge;
    Jm.prototype.getPlayer = Jm.prototype.ef;
    Jm.prototype.getVideo = Jm.prototype.pf;
    Jm.prototype.destroy = Jm.prototype.destroy;

    function Um(a, b, c, d) {
      Le.call(this);
      const e = this;
      this.g = a;
      this.i = b;
      this.h = new cf();
      this.N = {
        video: a,
        player: b,
      };

      this.H = c || function () {};

      this.T = d || function (f) {
        return f;
      };

      this.j = null;
      this.J = !1;
      this.s = !0;
      this.m = 0;
      this.F = !1;
      this.D = !0;
      this.u = this.l = null;
      this.L = new P(() => {
        Zm(e);
      });
      $m(this);
    }

    qa(Um, Le);
    q = Um.prototype;

    q.isConnected = function () {
      return this.J;
    };

    q.tf = function () {
      return this.s;
    };

    q.Pf = function (a) {
      this.j = a;
    };

    q.Me = function () {
      this.j = null;
    };

    q.Qf = function (a) {
      this.j || (this.j = {
        metadataType: cast.receiver.media.MetadataType.GENERIC,
      });
      this.j.title = a;
    };

    q.Of = function (a) {
      this.j || (this.j = {
        metadataType: cast.receiver.media.MetadataType.GENERIC,
      });
      this.j.images = [{
        url: a,
      }];
    };

    q.Nf = function (a) {
      this.j || (this.j = {});
      this.j.artist = a;
      this.j.metadataType = cast.receiver.media.MetadataType.MUSIC_TRACK;
    };

    q.destroy = function () {
      const a = this;
      let b;
      let c;
      return I((d) => {
        if (d.g == 1) return a.h && (a.h.release(), a.h = null), b = [], a.i && (b.push(a.i.destroy()), a.i = null), a.L && (a.L.stop(), a.L = null), a.g = null, a.N = null, a.H = null, a.J = !1, a.s = !0, a.l = null, a.u = null, u(d, Promise.all(b), 2);
        c = cast.receiver.CastReceiverManager.getInstance();
        c.stop();
        z(d);
      });
    };

    function $m(a) {
      let b = cast.receiver.CastReceiverManager.getInstance();

      b.onSenderConnected = function () {
        return an(a);
      };

      b.onSenderDisconnected = function () {
        return an(a);
      };

      b.onSystemVolumeChanged = function () {
        const e = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
        e && bn(a, {
          type: 'update',
          update: {
            video: {
              volume: e.level,
              muted: e.muted,
            },
          },
        }, a.l);
        bn(a, {
          type: 'event',
          targetName: 'video',
          event: {
            type: 'volumechange',
          },
        }, a.l);
      };

      a.u = b.getCastMessageBus('urn:x-cast:com.google.cast.media');

      a.u.onMessage = function (e) {
        return cn(a, e);
      };

      a.l = b.getCastMessageBus('urn:x-cast:com.google.shaka.v2');

      a.l.onMessage = function (e) {
        return dn(a, e);
      };

      b.start();
      b = r(lm);

      for (let c = b.next(); !c.done; c = b.next()) a.h.A(a.g, c.value, (e) => en(a, 'video', e));

      for (const d in Vl) a.h.A(a.i, Vl[d], (e) => en(a, 'player', e));

      cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ? a.i.Od(3840, 2160) : a.i.Od(1920, 1080);
      a.h.A(a.g, 'loadeddata', () => {
        a.F = !0;
      });
      a.h.A(a.i, 'loading', () => {
        a.s = !1;
        fn(a);
      });
      a.h.A(a.g, 'playing', () => {
        a.s = !1;
        fn(a);
      });
      a.h.A(a.g, 'pause', () => {
        fn(a);
      });
      a.h.A(a.i, 'unloading', () => {
        a.s = !0;
        fn(a);
      });
      a.h.A(a.g, 'ended', () => {
        new P(() => {
          a.g && a.g.ended && (a.s = !0, fn(a));
        }).S(gn);
      });
    }

    function an(a) {
      a.m = 0;
      a.D = !0;
      a.J = cast.receiver.CastReceiverManager.getInstance().getSenders().length != 0;
      fn(a);
    }

    function fn(a) {
      let b;
      I((c) => {
        if (c.g == 1) return u(c, Promise.resolve(), 2);
        if (!a.i) return c.return();
        b = new Q('caststatuschanged');
        a.dispatchEvent(b);
        hn(a) || jn(a);
        z(c);
      });
    }

    function kn(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      I((t) => {
        switch (t.g) {
          case 1:
            for (d in b.player) e = b.player[d], a.i[d](e);

            a.H(c);
            f = a.g.autoplay;
            return b.manifest ? (a.g.autoplay = !1, A(t, 5), u(t, a.i.load(b.manifest, b.startTime), 7)) : u(t, Promise.resolve(), 3);

          case 7:
            va(t, 3);
            break;

          case 5:
            return g = C(t), h = Rl, k = new Q(h, {
              detail: g,
            }), a.i && a.i.dispatchEvent(k), t.return();

          case 3:
            if (!a.i) return t.return();

            for (l in b.video) m = b.video[l], a.g[l] = m;

            for (n in b.playerAfterLoad) p = b.playerAfterLoad[n], a.i[n](p);

            a.g.autoplay = f;
            b.manifest && (a.g.play(), jn(a));
            z(t);
        }
      });
    }

    function en(a, b, c) {
      a.i && (Zm(a), bn(a, {
        type: 'event',
        targetName: b,
        event: c,
      }, a.l));
    }

    function Zm(a) {
      a.L.S(ln);

      for (var b = {
          video: {},
          player: {},
        }, c = r(mm), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.g[d];

      if (a.i.X()) for (const e in qm) a.m % qm[e] == 0 && (b.player[e] = a.i[e]());

      for (const f in pm) a.m % pm[f] == 0 && (b.player[f] = a.i[f]());

      if (c = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) b.video.volume = c.level, b.video.muted = c.muted;
      a.F && (a.m += 1);
      bn(a, {
        type: 'update',
        update: b,
      }, a.l);
      hn(a);
    }

    function hn(a) {
      return a.D && (a.g.duration || a.i.X()) ? (mn(a), a.D = !1, !0) : !1;
    }

    function mn(a, b) {
      const c = {
        contentId: a.i.od(),
        streamType: a.i.X() ? 'LIVE' : 'BUFFERED',
        contentType: '',
      };
      a.i.X() || (c.duration = a.g.duration);
      a.j && (c.metadata = a.j);
      jn(a, void 0 === b ? 0 : b, c);
    }

    function dn(a, b) {
      let c = jm(b.data);

      switch (c.type) {
        case 'init':
          a.m = 0;
          a.F = !1;
          a.D = !0;
          kn(a, c.initState, c.appData);
          Zm(a);
          break;

        case 'appData':
          a.H(c.appData);
          break;

        case 'set':
          var d = c.targetName;
          var e = c.property;
          c = c.value;

          if (d == 'video') {
            var f = cast.receiver.CastReceiverManager.getInstance();

            if (e == 'volume') {
              f.setSystemVolumeLevel(c);
              break;
            } else if (e == 'muted') {
              f.setSystemVolumeMuted(c);
              break;
            }
          }

          a.N[d][e] = c;
          break;

        case 'call':
          d = a.N[c.targetName];
          d[c.methodName].apply(d, c.args);
          break;

        case 'asyncCall':
          d = c.targetName;
          e = c.methodName;
          d == 'player' && e == 'load' && (a.m = 0, a.F = !1);
          var g = c.id;
          var h = b.senderId;
          f = a.N[d];
          c = f[e].apply(f, c.args);
          d == 'player' && e == 'load' && (c = c.then(() => {
            a.D = !0;
          }));
          c.then(() => nn(a, h, g, null), (k) => nn(a, h, g, k));
      }
    }

    function cn(a, b) {
      const c = jm(b.data);

      switch (c.type) {
        case 'PLAY':
          a.g.play();
          jn(a);
          break;

        case 'PAUSE':
          a.g.pause();
          jn(a);
          break;

        case 'SEEK':
          var d = c.currentTime;
          var e = c.resumeState;
          d != null && (a.g.currentTime = Number(d));
          e && e == 'PLAYBACK_START' ? (a.g.play(), jn(a)) : e && e == 'PLAYBACK_PAUSE' && (a.g.pause(), jn(a));
          break;

        case 'STOP':
          a.i.Td().then(() => {
            a.i && jn(a);
          });
          break;

        case 'GET_STATUS':
          mn(a, Number(c.requestId));
          break;

        case 'VOLUME':
          e = c.volume;
          d = e.level;
          e = e.muted;
          var f = a.g.volume;
          var g = a.g.muted;
          d != null && (a.g.volume = Number(d));
          e != null && (a.g.muted = e);
          f == a.g.volume && g == a.g.muted || jn(a);
          break;

        case 'LOAD':
          a.m = 0;
          a.F = !1;
          a.D = !1;
          d = c.media;
          e = c.currentTime;
          f = a.T(d.contentId);
          g = c.autoplay || !0;
          a.H(d.customData);
          g && (a.g.autoplay = !0);
          a.i.load(f, e).then(() => {
            a.i && mn(a);
          }).catch((h) => {
            let k = 'LOAD_FAILED';
            h.category == 7 && h.code == 7E3 && (k = 'LOAD_CANCELLED');
            bn(a, {
              requestId: Number(c.requestId),
              type: k,
            }, a.u);
          });
          break;

        default:
          bn(a, {
            requestId: Number(c.requestId),
            type: 'INVALID_REQUEST',
            reason: 'INVALID_COMMAND',
          }, a.u);
      }
    }

    function nn(a, b, c, d) {
      a.i && bn(a, {
        type: 'asyncComplete',
        id: c,
        error: d,
      }, a.l, b);
    }

    function bn(a, b, c, d) {
      a.J && (a = im(b), d ? c.getCastChannel(d).send(a) : c.broadcast(a));
    }

    function jn(a, b, c) {
      c = void 0 === c ? null : c;
      const d = {
        mediaSessionId: 0,
        playbackRate: a.g.playbackRate,
        playerState: a.s ? on : a.i.rd() ? pn : a.g.paused ? qn : rn,
        currentTime: a.g.currentTime,
        supportedMediaCommands: 63,
        volume: {
          level: a.g.volume,
          muted: a.g.muted,
        },
      };
      c && (d.media = c);
      bn(a, {
        requestId: void 0 === b ? 0 : b,
        type: 'MEDIA_STATUS',
        status: [d],
      }, a.u);
    }

    M('shaka.cast.CastReceiver', Um);
    Um.prototype.destroy = Um.prototype.destroy;
    Um.prototype.setContentArtist = Um.prototype.Nf;
    Um.prototype.setContentImage = Um.prototype.Of;
    Um.prototype.setContentTitle = Um.prototype.Qf;
    Um.prototype.clearContentMetadata = Um.prototype.Me;
    Um.prototype.setContentMetadata = Um.prototype.Pf;
    Um.prototype.isIdle = Um.prototype.tf;
    Um.prototype.isConnected = Um.prototype.isConnected;
    var ln = 0.5;
    var gn = 5;
    var on = 'IDLE';
    var rn = 'PLAYING';
    var pn = 'BUFFERING';
    var qn = 'PAUSED';

    function sn(a) {
      const b = this;
      this.g = [];
      this.h = [];
      this.data = [];
      new jg().box('moov', ng).V('pssh', (c) => {
        if (!(c.version > 1)) {
          let d = Ob(c.reader.R, -12, c.size);
          b.data.push(d);
          b.g.push(Oc(c.reader.$a(16)));

          if (c.version > 0) {
            d = c.reader.M();
            d = r(ib(d));

            for (let e = d.next(); !e.done; e = d.next()) e = Oc(c.reader.$a(16)), b.h.push(e);
          }
        }
      }).parse(a);
    }

    function tn(a, b) {
      const c = a.length;
      const d = b.length + 16 + c;
      const e = new Uint8Array(d);
      const f = Sb(e);
      let g = 0;
      f.setUint32(g, d);
      g += 4;
      f.setUint32(g, 1886614376);
      g += 4;
      f.setUint32(g, 0);
      g += 4;
      e.set(b, g);
      g += b.length;
      f.setUint32(g, c);
      e.set(a, g + 4);
      return e;
    }

    function un(a) {
      if (!a) return a;
      let b = new sn(a);
      if (b.data.length <= 1) return a;
      a = [];
      let c = {};
      b = r(b.data);

      for (let d = b.next(); !d.done; c = {
        ic: c.ic,
      }, d = b.next()) {
        c.ic = d.value, a.some(function (e) {
          return function (f) {
            return Mb(f, e.ic);
          };
        }(c)) || a.push(c.ic);
      }

      return Pc.apply(Jc, ja(a));
    }

    function vn(a, b) {
      const c = wn(a, b);
      return c.length != 1 ? null : c[0];
    }

    function xn(a, b, c) {
      a = yn(a, b, c);
      return a.length != 1 ? null : a[0];
    }

    function wn(a, b) {
      return Array.from(a.childNodes).filter((c) => c instanceof Element && c.tagName == b);
    }

    function zn(a) {
      return Array.from(a.childNodes).filter((b) => b instanceof Element);
    }

    function yn(a, b, c) {
      return Array.from(a.childNodes).filter((d) => d instanceof Element && d.localName == c && d.namespaceURI == b);
    }

    function An(a, b, c) {
      return a.hasAttributeNS(b, c) ? a.getAttributeNS(b, c) : null;
    }

    function Bn(a) {
      return Array.from(a.childNodes).every(Cn) ? a.textContent.trim() : null;
    }

    function Cn(a) {
      return a.nodeType == Node.TEXT_NODE || a.nodeType == Node.CDATA_SECTION_NODE;
    }

    function Dn(a, b, c, d) {
      d = void 0 === d ? null : d;
      let e = null;
      a = a.getAttribute(b);
      a != null && (e = c(a));
      return e == null ? d : e;
    }

    function En(a) {
      if (!a) return null;
      /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += 'Z');
      a = Date.parse(a);
      return isNaN(a) ? null : Math.floor(a / 1E3);
    }

    function Fn(a) {
      if (!a) return null;
      a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
      if (!a) return null;
      a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
      return isFinite(a) ? a : null;
    }

    function Gn(a) {
      let b = /([0-9]+)-([0-9]+)/.exec(a);
      if (!b) return null;
      a = Number(b[1]);
      if (!isFinite(a)) return null;
      b = Number(b[2]);
      return isFinite(b) ? {
        start: a,
        end: b,
      } : null;
    }

    function Hn(a) {
      a = Number(a);
      return a % 1 === 0 ? a : null;
    }

    function In(a) {
      a = Number(a);
      return a % 1 === 0 && a > 0 ? a : null;
    }

    function Jn(a) {
      a = Number(a);
      return a % 1 === 0 && a >= 0 ? a : null;
    }

    function Kn(a) {
      a = Number(a);
      return isNaN(a) ? null : a;
    }

    function Ln(a) {
      let b;
      a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1]) / Number(b[2]) : Number(a);
      return isNaN(a) ? null : a;
    }

    function Mn(a, b) {
      const c = new DOMParser();
      let d = null;
      let e = null;

      try {
        e = c.parseFromString(a, 'text/xml');
      } catch (f) {}

      e && e.documentElement.tagName == b && (d = e.documentElement);
      return d && d.getElementsByTagName('parsererror').length > 0 ? null : d;
    }

    function Nn(a, b) {
      try {
        const c = Dc(a);
        return Mn(c, b);
      } catch (d) {
        return null;
      }
    }

    function On(a, b, c) {
      let d = Pn(a);
      let e = null;
      a = [];
      let f = [];
      let g = new Set(d.map((h) => h.keyId));
      g.delete(null);
      if (g.size > 1) throw new O(2, 4, 4010);
      b || (f = d.filter((h) => (h.qe == 'urn:mpeg:dash:mp4protection:2011' ? (e = h.init || e, !1) : !0)), f.length && (a = Qn(e, f, c), a.length == 0 && (a = [uc('', e)])));
      if (d.length && (b || !f.length)) for (a = [], b = r(Object.values(c)), c = b.next(); !c.done; c = b.next()) c = c.value, c != 'org.w3.clearkey' && a.push(uc(c, e));

      if (g = Array.from(g)[0] || null) {
        for (b = r(a), c = b.next(); !c.done; c = b.next()) {
          for (c = r(c.value.initData), d = c.next(); !d.done; d = c.next()) d.value.keyId = g;
        }
      }

      return {
        Xd: g,
        yg: e,
        drmInfos: a,
        ae: !0,
      };
    }

    function Rn(a, b, c, d) {
      const e = On(a, c, d);

      if (b.ae) {
        a = b.drmInfos.length == 1 && !b.drmInfos[0].keySystem;
        c = e.drmInfos.length == 0;
        if (b.drmInfos.length == 0 || a && !c) b.drmInfos = e.drmInfos;
        b.ae = !1;
      } else if (e.drmInfos.length > 0 && (b.drmInfos = b.drmInfos.filter((f) => e.drmInfos.some((g) => g.keySystem == f.keySystem)), b.drmInfos.length == 0)) throw new O(2, 4, 4008);

      return e.Xd || b.Xd;
    }

    function Sn(a) {
      let b = 0;
      let c = Sb(a);
      let d = c.getUint32(b, !0);
      if (d != a.byteLength) return [];

      a: {
        a = b + 6;

        for (b = []; a < c.byteLength - 1;) {
          d = c.getUint16(a, !0);
          a += 2;
          const e = c.getUint16(a, !0);
          a += 2;

          if ((e & 1) != 0 || e + a > c.byteLength) {
            c = [];
            break a;
          }

          const f = Ob(c, a, e);
          b.push({
            type: d,
            value: f,
          });
          a += e;
        }

        c = b;
      }

      return c;
    }

    function Tn(a) {
      a = r(a.getElementsByTagName('DATA'));

      for (let b = a.next(); !b.done; b = a.next()) {
        b = r(b.value.childNodes);

        for (let c = b.next(); !c.done; c = b.next()) if (c = c.value, c instanceof Element && c.tagName == 'LA_URL') return c.textContent;
      }

      return '';
    }

    function Un(a) {
      a = xn(a.node, 'urn:microsoft:playready', 'pro');
      if (!a) return '';
      a = Mc(a.textContent);
      a = Sn(a).filter((b) => b.type === Vn)[0];
      if (!a) return '';
      a = Ec(a.value, !0);
      return (a = Mn(a, 'WRMHEADER')) ? Tn(a) : '';
    }

    function Qn(a, b, c) {
      const d = [];
      b = r(b);

      for (let e = b.next(); !e.done; e = b.next()) {
        e = e.value;
        let f = c[e.qe];

        if (f) {
          var g;

          if (g = xn(e.node, 'urn:microsoft:playready', 'pro')) {
            g = Mc(g.textContent);
            const h = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
            g = [{
              initData: tn(g, h),
              initDataType: 'cenc',
              keyId: e.keyId,
            }];
          } else g = null;

          g = uc(f, e.init || a || g);
          if (f = Wn.get(f)) g.licenseServerUri = f(e);
          d.push(g);
        }
      }

      return d;
    }

    function Pn(a) {
      const b = [];
      a = r(a);

      for (let c = a.next(); !c.done; c = a.next()) (c = Xn(c.value)) && b.push(c);

      return b;
    }

    function Xn(a) {
      let b = a.getAttribute('schemeIdUri');
      let c = An(a, 'urn:mpeg:cenc:2013', 'default_KID');
      const d = yn(a, 'urn:mpeg:cenc:2013', 'pssh').map(Bn);
      if (!b) return null;
      b = b.toLowerCase();
      if (c && (c = c.replace(/-/g, '').toLowerCase(), c.includes(' '))) throw new O(2, 4, 4009);
      let e = [];

      try {
        e = d.map((f) => ({
          initDataType: 'cenc',
          initData: Mc(f),
          keyId: null,
        }));
      } catch (f) {
        throw new O(2, 4, 4007);
      }

      return {
        node: a,
        qe: b,
        keyId: c,
        init: e.length > 0 ? e : null,
      };
    }

    var Vn = 1;
    var Wn = new Map().set('com.widevine.alpha', (a) => ((a = xn(a.node, 'urn:microsoft', 'laurl')) ? a.getAttribute('licenseUrl') || '' : '')).set('com.microsoft.playready', Un).set('com.microsoft.playready.recommendation', Un)
      .set('com.microsoft.playready.software', Un)
      .set('com.microsoft.playready.hardware', Un);

    function Yn(a, b, c, d, e) {
      const f = {
        RepresentationID: b,
        Number: c,
        Bandwidth: d,
        Time: e,
      };
      return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, (g, h, k, l) => {
        if (g == '$$') return '$';
        let m = f[h];
        if (m == null) return g;
        h == 'RepresentationID' && k && (k = void 0);
        h == 'Time' && (m = Math.round(m));

        switch (l) {
          case void 0:
          case 'd':
          case 'i':
          case 'u':
            g = m.toString();
            break;

          case 'o':
            g = m.toString(8);
            break;

          case 'x':
            g = m.toString(16);
            break;

          case 'X':
            g = m.toString(16).toUpperCase();
            break;

          default:
            g = m.toString();
        }

        k = window.parseInt(k, 10) || 1;
        return Array(Math.max(0, k - g.length) + 1).join('0') + g;
      });
    }

    function Zn(a, b) {
      let c = $n(a, b, 'timescale');
      let d = 1;
      c && (d = In(c) || 1);
      let e = $n(a, b, 'duration');
      c = In(e || '');
      a.K.contentType == 'image' && (c = Kn(e || ''));
      c && (c /= d);
      let f = $n(a, b, 'startNumber');
      e = Number($n(a, b, 'presentationTimeOffset')) || 0;
      let g = Jn(f || '');
      if (f == null || g == null) g = 1;
      let h = ao(a, b, 'SegmentTimeline');
      f = null;

      if (h) {
        f = d;
        const k = a.W.duration || Infinity;
        let l = wn(h, 'S');
        h = [];
        let m = -e;
        l = r(lb(l));

        for (let n = l.next(); !n.done; n = l.next()) {
          n = n.value;
          let p = n.item;
          let t = n.next;
          let v = Dn(p, 't', Jn);
          n = Dn(p, 'd', Jn);
          const w = Dn(p, 'r', Hn);
          v != null && (v -= e);
          if (!n) break;
          p = v != null ? v : m;
          v = w || 0;
          if (v < 0) {
            if (t) {
              t = Dn(t, 't', Jn);
              if (t == null) break; else if (p >= t) break;
              v = Math.ceil((t - p) / n) - 1;
            } else {
              if (Infinity == k) break; else if (p / f >= k) break;
              v = Math.ceil((k * f - p) / n) - 1;
            }
          }
          h.length > 0 && p != m && (h[h.length - 1].end = p / f);
          t = r(ib(v + 1));

          for (v = t.next(); !v.done; v = t.next()) {
            m = p + n, h.push({
              start: p / f,
              end: m / f,
              Yf: p,
            }), p = m;
          }
        }

        f = h;
      }

      return {
        timescale: d,
        ia: c,
        Gb: g,
        Ta: e / d || 0,
        Ud: e,
        timeline: f,
      };
    }

    function $n(a, b, c) {
      return [b(a.K), b(a.ka), b(a.fa)].filter($b).map((d) => d.getAttribute(c)).reduce((d, e) => d || e);
    }

    function ao(a, b, c) {
      return [b(a.K), b(a.ka), b(a.fa)].filter($b).map((d) => vn(d, c)).reduce((d, e) => d || e);
    }

    function bo(a, b, c, d, e, f) {
      for (var g = An(a, 'http://www.w3.org/1999/xlink', 'href'), h = An(a, 'http://www.w3.org/1999/xlink', 'actuate') || 'onRequest', k = r(Array.from(a.attributes)), l = k.next(); !l.done; l = k.next()) l = l.value, l.namespaceURI == 'http://www.w3.org/1999/xlink' && a.removeAttributeNS(l.namespaceURI, l.localName);

      if (f >= 5) return Fe(new O(2, 4, 4028));
      if (h != 'onLoad') return Fe(new O(2, 4, 4027));
      const m = tc([d], [g]);
      return e.request(0, Ue(m, b)).ba((n) => {
        n = Nn(n.data, a.tagName);
        if (!n) return Fe(new O(2, 4, 4001, g));

        for (; a.childNodes.length;) a.removeChild(a.childNodes[0]);

        for (; n.childNodes.length;) {
          var p = n.childNodes[0];
          n.removeChild(p);
          a.appendChild(p);
        }

        n = r(Array.from(n.attributes));

        for (p = n.next(); !p.done; p = n.next()) a.setAttributeNode(p.value.cloneNode(!1));

        return co(a, b, c, m[0], e, f + 1);
      });
    }

    function co(a, b, c, d, e, f) {
      f = void 0 === f ? 0 : f;

      if (An(a, 'http://www.w3.org/1999/xlink', 'href')) {
        var g = bo(a, b, c, d, e, f);
        c && (g = g.ba(void 0, () => co(a, b, c, d, e, f)));
        return g;
      }

      g = [];

      for (let h = r(Array.from(a.childNodes)), k = h.next(); !k.done; k = h.next()) k = k.value, k instanceof Element && (An(k, 'http://www.w3.org/1999/xlink', 'href') == 'urn:mpeg:dash:resolve-to-zero:2013' ? a.removeChild(k) : k.tagName != 'SegmentTimeline' && g.push(co(k, b, c, d, e, f)));

      return Je(g).ba(() => a);
    }

    function eo(a, b, c, d, e, f, g) {
      let h;
      const k = new jg().V('sidx', (l) => {
        h = fo(b, d, e, f, g, c, l);
      });
      a && k.parse(a);
      if (h) return h;
      throw new O(2, 3, 3004);
    }

    function fo(a, b, c, d, e, f, g) {
      const h = [];
      g.reader.skip(4);
      const k = g.reader.M();
      if (k == 0) throw new O(2, 3, 3005);

      if (g.version == 0) {
        var l = g.reader.M();
        var m = g.reader.M();
      } else l = g.reader.nb(), m = g.reader.nb();

      g.reader.skip(2);
      let n = g.reader.Fb();
      a = a + g.size + m;
      n = r(ib(n));

      for (m = n.next(); !m.done; m = n.next()) {
        let p = g.reader.M();
        m = (p & 2147483648) >>> 31;
        p &= 2147483647;
        const t = g.reader.M();
        g.reader.skip(4);
        if (m == 1) throw new O(2, 3, 3006);
        h.push(new li(l / k + c, (l + t) / k + c, () => f, a, a + p - 1, b, c, d, e));
        l += t;
        a += p;
      }

      g.parser.stop();
      return h;
    }

    function go(a) {
      this.h = Sb(a);
      this.g = new gg(this.h, 0);
    }

    go.prototype.na = function () {
      return this.g.na();
    };

    function ho(a) {
      let b = io(a);
      if (b.length > 7) throw new O(2, 3, 3002);
      let c = 0;
      b = r(b);

      for (var d = b.next(); !d.done; d = b.next()) c = 256 * c + d.value;

      b = io(a);

      a: {
        d = r(jo);

        for (var e = d.next(); !e.done; e = d.next()) {
          if (Mb(b, new Uint8Array(e.value))) {
            d = !0;
            break a;
          }
        }

        d = !1;
      }

      if (d) b = a.h.byteLength - a.g.Z(); else {
        if (b.length == 8 && b[1] & 224) throw new O(2, 3, 3001);
        d = 0;
        e = r(lb(b));

        for (let f = e.next(); !f.done; f = e.next()) {
          f = f.value;
          const g = f.item;
          d = f.ha == 0 ? g & (1 << 8 - b.length) - 1 : 256 * d + g;
        }

        b = d;
      }
      b = a.g.Z() + b <= a.h.byteLength ? b : a.h.byteLength - a.g.Z();
      d = Sb(a.h, a.g.Z(), b);
      a.g.skip(b);
      return new ko(c, d);
    }

    function io(a) {
      const b = a.g.Z();
      let c = a.g.$();
      if (c == 0) throw new O(2, 3, 3002);
      c = 8 - Math.floor(Math.log2(c));
      a.g.skip(c - 1);
      return Ob(a.h, b, c);
    }

    var jo = [[255], [127, 255], [63, 255, 255], [31, 255, 255, 255], [15, 255, 255, 255, 255], [7, 255, 255, 255, 255, 255], [3, 255, 255, 255, 255, 255, 255], [1, 255, 255, 255, 255, 255, 255, 255]];

    function ko(a, b) {
      this.id = a;
      this.g = b;
    }

    function lo(a) {
      if (a.g.byteLength > 8) throw new O(2, 3, 3002);
      if (a.g.byteLength == 8 && a.g.getUint8(0) & 224) throw new O(2, 3, 3001);

      for (var b = 0, c = r(ib(a.g.byteLength)), d = c.next(); !d.done; d = c.next()) d = a.g.getUint8(d.value), b = 256 * b + d;

      return b;
    }

    function mo(a, b, c, d, e, f, g, h, k) {
      function l() {
        return e;
      }

      const m = [];
      a = new go(a.g);

      for (var n = null, p = null; a.na();) {
        let t = ho(a);

        if (t.id == 187) {
          let v = no(t);
          v && (t = c * v.Zf, v = b + v.Hf, n != null && m.push(new li(n + g, t + g, l, p, v - 1, f, g, h, k)), n = t, p = v);
        }
      }

      n != null && m.push(new li(n + g, d + g, l, p, null, f, g, h, k));
      return m;
    }

    function no(a) {
      let b = new go(a.g);
      a = ho(b);
      if (a.id != 179) throw new O(2, 3, 3013);
      a = lo(a);
      b = ho(b);
      if (b.id != 183) throw new O(2, 3, 3012);
      b = new go(b.g);

      for (var c = 0; b.na();) {
        const d = ho(b);

        if (d.id == 241) {
          c = lo(d);
          break;
        }
      }

      return {
        Zf: a,
        Hf: c,
      };
    }

    function oo(a, b) {
      let c = ao(a, b, 'Initialization');
      if (!c) return null;
      let d = a.K.ya;
      let e = c.getAttribute('sourceURL');
      e && (d = tc(a.K.ya, [e]));
      e = 0;
      let f = null;
      if (c = Dn(c, 'range', Gn)) e = c.start, f = c.end;
      return new ji(() => d, e, f);
    }

    function po(a, b) {
      const c = Number($n(a, qo, 'presentationTimeOffset')) || 0;
      const d = $n(a, qo, 'timescale');
      let e = 1;
      d && (e = In(d) || 1);
      const f = c / e || 0;
      const g = oo(a, qo);
      ro(a, g);
      const h = Ne(a);
      return {
        xb() {
          let k = ao(h, qo, 'RepresentationIndex');
          let l = h.K.ya;
          k && (k = k.getAttribute('sourceURL')) && (l = tc(h.K.ya, [k]));
          k = so(h);
          return to(h, b, g, l, k.start, k.end, f);
        },

      };
    }

    function to(a, b, c, d, e, f, g) {
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      return I((G) => {
        if (G.g == 1) return h = a.presentationTimeline, k = !a.cb || !a.W.ge, l = a.W.start, m = a.W.duration, n = a.K.mimeType.split('/')[1], p = b, t = null, v = [p(d, e, f), n == 'webm' ? p(c.ma(), c.ja, c.ea) : null], p = null, u(G, Promise.all(v), 2);
        w = G.h;
        x = w[0];
        y = w[1] || null;
        E = null;
        D = l - g;
        B = l;
        F = m ? l + m : Infinity;
        if (n == 'mp4') var H = eo(x, e, d, c, D, B, F); else {
          H = new go(y);
          if (ho(H).id != 440786851) throw new O(2, 3, 3008);
          let L = ho(H);
          if (L.id != 408125543) throw new O(2, 3, 3009);
          H = L.g.byteOffset;
          L = new go(L.g);

          for (var J = null; L.na();) {
            var K = ho(L);

            if (K.id == 357149030) {
              J = K;
              break;
            }
          }

          if (!J) throw new O(2, 3, 3010);
          J = new go(J.g);
          K = 1E6;

          for (L = null; J.na();) {
            const R = ho(J);
            if (R.id == 2807729) K = lo(R); else if (R.id == 17545) if (R.g.byteLength == 4) L = R.g.getFloat32(0); else if (R.g.byteLength == 8) L = R.g.getFloat64(0); else throw new O(2, 3, 3003);
          }

          if (L == null) throw new O(2, 3, 3011);
          J = K / 1E9;
          L *= J;
          K = ho(new go(x));
          if (K.id != 475249515) throw new O(2, 3, 3007);
          H = mo(K, H, J, L, d, c, D, B, F);
        }
        E = H;
        h.Cb(E);
        t = new V(E);
        k && t.Ya(B, F, !0);
        return G.return(t);
      });
    }

    function qo(a) {
      return a.cc;
    }

    function so(a) {
      const b = ao(a, qo, 'RepresentationIndex');
      a = $n(a, qo, 'indexRange');
      a = Gn(a || '');
      b && (a = Dn(b, 'range', Gn, a));
      return a;
    }

    function ro(a, b) {
      uo(a, b);
      if (!so(a)) throw new O(2, 4, 4002);
    }

    function uo(a, b) {
      const c = a.K.mimeType.split('/')[1];
      if (a.K.contentType != yc && c != 'mp4' && c != 'webm') throw new O(2, 4, 4006);
      if (c == 'webm' && !b) throw new O(2, 4, 4005);
    }

    function vo(a, b) {
      let c = oo(a, wo);
      let d = xo(a);
      if (!d.ia && !d.timeline && d.Ab.length > 1) throw new O(2, 4, 4002);
      if (!d.ia && !a.W.duration && !d.timeline && d.Ab.length == 1) throw new O(2, 4, 4002);
      if (d.timeline && d.timeline.length == 0) throw new O(2, 4, 4002);
      let e = null;
      let f = null;
      a.fa.id && a.K.id && (f = `${a.fa.id},${a.K.id}`, e = b[f]);
      c = yo(a.W.start, a.W.duration, a.K.ya, d, c);
      d = !e;
      e ? e.Bb(c, a.presentationTimeline.Za()) : (a.presentationTimeline.Cb(c), e = new V(c), f && a.cb && (b[f] = e));
      a.cb && a.W.ge || e.Ya(a.W.start, a.W.duration ? a.W.start + a.W.duration : Infinity, d);
      return {
        xb() {
          return Promise.resolve(e);
        },

      };
    }

    function wo(a) {
      return a.ab;
    }

    function xo(a) {
      const b = zo(a);
      a = Zn(a, wo);
      let c = a.Gb;
      c == 0 && (c = 1);
      let d = 0;
      a.ia ? d = a.ia * (c - 1) : a.timeline && a.timeline.length > 0 && (d = a.timeline[0].start);
      return {
        ia: a.ia,
        startTime: d,
        Gb: c,
        Ta: a.Ta,
        timeline: a.timeline,
        Ab: b,
      };
    }

    function yo(a, b, c, d, e) {
      let f = d.Ab.length;
      d.timeline && d.timeline.length != d.Ab.length && (f = Math.min(d.timeline.length, d.Ab.length));
      const g = a - d.Ta;
      const h = b ? a + b : Infinity;
      const k = [];
      let l = d.startTime;
      let m = {};
      f = r(ib(f));

      for (let n = f.next(); !n.done; m = {
        Vc: m.Vc,
      }, n = f.next()) {
        n = n.value;
        const p = d.Ab[n];
        m.Vc = tc(c, [p.wf]);
        let t = void 0;
        t = d.ia != null ? l + d.ia : d.timeline ? d.timeline[n].end : l + b;
        k.push(new li(a + l, a + t, (function (v) {
          return function () {
            return v.Vc;
          };
        }(m)), p.start, p.end, e, g, a, h));
        l = t;
      }

      return k;
    }

    function zo(a) {
      return [a.K.ab, a.ka.ab, a.fa.ab].filter($b).map((b) => wn(b, 'SegmentURL')).reduce((b, c) => (b.length > 0 ? b : c)).map((b) => {
        b.getAttribute('indexRange') && !a.ee && (a.ee = !0);
        const c = b.getAttribute('media');
        b = Dn(b, 'mediaRange', Gn, {
          start: 0,
          end: null,
        });
        return {
          wf: c,
          start: b.start,
          end: b.end,
        };
      });
    }

    function Ao(a, b, c, d, e, f) {
      const g = Bo(a);
      const h = Co(a);
      Do(h);
      const k = Ne(a);
      if (h.Yb) {
        return uo(a, g), {
          xb() {
            let v = Yn(h.Yb, k.K.id, null, k.bandwidth || null, null);
            v = tc(k.K.ya, [v]);
            return to(k, b, g, v, 0, null, h.Ta);
          },

        };
      }
      if (h.ia) {
        return d || (a.presentationTimeline.zd(h.ia), a.presentationTimeline.Bd(a.W.start)), {
          xb() {
            return Eo(k, h, e, g, f);
          },

        };
      }
      let l = null;
      d = null;
      a.fa.id && a.K.id && (d = `${a.fa.id},${a.K.id}`, l = c[d]);
      const m = Fo(k, h, g);
      const n = a.W.start;
      const p = a.W.duration ? a.W.start + a.W.duration : Infinity;
      const t = Infinity != p;
      l ? (t && new V(m).Ya(n, p, !0), l.Bb(m, a.presentationTimeline.Za())) : (a.presentationTimeline.Cb(m), l = new V(m), d && a.cb && (c[d] = l));
      t && l.Ya(n, p);
      return {
        xb() {
          return Promise.resolve(l);
        },

      };
    }

    function Go(a) {
      return a.dc;
    }

    function Co(a) {
      const b = Zn(a, Go);
      const c = $n(a, Go, 'media');
      a = $n(a, Go, 'index');
      return {
        ia: b.ia,
        timescale: b.timescale,
        Gb: b.Gb,
        Ta: b.Ta,
        Ud: b.Ud,
        timeline: b.timeline,
        xd: c,
        Yb: a,
      };
    }

    function Do(a) {
      let b = a.Yb ? 1 : 0;
      b += a.timeline ? 1 : 0;
      b += a.ia ? 1 : 0;
      if (b == 0) throw new O(2, 4, 4002);
      b != 1 && (a.Yb && (a.timeline = null), a.ia = null);
      if (!a.Yb && !a.xd) throw new O(2, 4, 4002);
    }

    function Eo(a, b, c, d, e) {
      function f(J) {
        let K = (J - t) * p;
        const R = K + b.Ta;
        let S = K + l;
        K = S + p;
        const X = Math.min(K, h());
        S = new li(S, X, () => {
          const T = Yn(w, y, J, x, R * v);
          return tc(E, [T]);
        }, 0, null, d, D, l, h());
        S.j = K;
        return S;
      }

      function g() {
        const J = [Math.max(k.Za(), l), Math.min(k.gb(), h())].map((K) => K - l);
        return [Math.ceil(J[0] / p), Math.ceil(J[1] / p) - 1].map((K) => K + t);
      }

      function h() {
        const J = m != null && e[m] || n;
        return J ? l + J : Infinity;
      }

      var k = a.presentationTimeline;
      var l = a.W.start;
      var m = a.fa.id;
      var n = a.W.duration;
      var p = b.ia;
      var t = b.Gb;
      var v = b.timescale;
      var w = b.xd;
      var x = a.bandwidth || null;
      var y = a.K.id;
      var E = a.K.ya;
      var D = l - b.Ta;
      let B = g();
      a = a.cb ? Math.max(B[0], B[1] - c + 1) : B[0];
      B = B[1];
      c = [];

      for (var F = a; F <= B; ++F) {
        const G = f(F);
        c.push(G);
      }

      const H = new V(c);
      c = k.gb() < h();
      F = k.X();

      if (c || F) {
        let L = Math.max(a, B + 1);
        H.Mc(p, () => {
          const J = k.Za();
          H.eb(J);
          let K = r(g());
          K.next();
          K = K.next().value;

          for (var R = []; L <= K;) {
            const S = f(L);
            R.push(S);
            L++;
          }

          return J > h() && !R.length ? null : R;
        });
      }

      return Promise.resolve(H);
    }

    function Fo(a, b, c) {
      const d = a.W.start;
      let e = a.W.duration;
      const f = d - b.Ta;
      e = e ? d + e : Infinity;

      for (var g = [], h = {}, k = r(lb(b.timeline)), l = k.next(); !l.done; h = {
        Uc: h.Uc,
        Yc: h.Yc,
        bd: h.bd,
        Rc: h.Rc,
        dd: h.dd,
        Sc: h.Sc,
      }, l = k.next()) {
        l = l.value;
        let m = l.item;
        const n = m.start;
        const p = m.Yf;
        m = m.end;
        h.bd = l.ha + b.Gb;
        h.dd = p + b.Ud;
        h.Yc = a.K.id;
        h.Rc = a.bandwidth || null;
        h.Uc = b.xd;
        h.Sc = a.K.ya;
        g.push(new li(d + n, d + m, (function (t) {
          return function () {
            const v = Yn(t.Uc, t.Yc, t.bd, t.Rc || null, t.dd);
            return tc(t.Sc, [v]).map((w) => w.toString());
          };
        }(h)), 0, null, c, f, d, e));
      }

      return g;
    }

    function Bo(a) {
      const b = $n(a, Go, 'initialization');
      if (!b) return null;
      const c = a.K.id;
      const d = a.bandwidth || null;
      const e = a.K.ya;
      return new ji(() => {
        const f = Yn(b, c, null, d, null);
        return tc(e, [f]);
      }, 0, null);
    }

    function Ho() {
      this.l = [];
      this.g = [];
      this.h = [];
      this.j = [];
      this.i = [];
      this.m = new Set();
    }

    Ho.prototype.release = function () {
      for (let a = r(this.g.concat(this.h, this.j, this.i)), b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();

      this.g = [];
      this.h = [];
      this.j = [];
      this.i = [];
      this.l = [];
    };

    function Io(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      let X;
      let T;
      let N;
      let ea;
      let fa;
      let ya;
      let Ga;
      let sb;
      return I((Qa) => {
        switch (Qa.g) {
          case 1:
            d = zc;
            Jo(b);
            Ko(b);
            Lo(b);
            Mo(b);

            if (!c && b.length == 1) {
              e = b[0];
              a.g = e.sc;
              a.h = e.Oc;
              a.j = e.textStreams;
              a.i = e.imageStreams;
              Qa.v(2);
              break;
            }

            f = -1;
            g = r(lb(b));

            for (h = g.next(); !h.done; h = g.next()) l = k = h.value, m = l.ha, n = l.item, a.m.has(n.id) || (a.m.add(n.id), f == -1 && (f = m));

            if (f == -1) return Qa.return();
            p = b.map((Da) => Da.sc);
            t = b.map((Da) => Da.Oc);
            v = b.map((Da) => Da.textStreams);
            w = b.map((Da) => Da.imageStreams);
            x = r(v);

            for (y = x.next(); !y.done; y = x.next()) E = y.value, E.push(No(d.aa));

            D = r(w);

            for (B = D.next(); !B.done; B = D.next()) F = B.value, F.push(No(d.Mb));

            return u(Qa, Oo(a.g, p, f, Po, Qo), 3);

          case 3:
            return u(Qa, Oo(a.h, t, f, Po, Qo), 4);

          case 4:
            return u(Qa, Oo(a.j, v, f, Po, Qo), 5);

          case 5:
            return u(Qa, Oo(a.i, w, f, Po, Qo), 2);

          case 2:
            G = 0;
            H = [];

            if (a.h.length && a.g.length) {
              for (X = r(a.g), T = X.next(); !T.done; T = X.next()) {
                for (N = T.value, ea = r(a.h), fa = ea.next(); !fa.done; fa = ea.next()) {
                  ya = fa.value, Ga = Zf(N.drmInfos, ya.drmInfos), N.drmInfos.length && ya.drmInfos.length && !Ga.length || (sb = G++, H.push({
                    id: sb,
                    language: N.language,
                    primary: N.primary,
                    audio: N,
                    video: ya,
                    bandwidth: (N.bandwidth || 0) + (ya.bandwidth || 0),
                    drmInfos: Ga,
                    allowedByApplication: !0,
                    allowedByKeySystem: !0,
                    decodingInfos: [],
                  }));
                }
              }
            } else {
              for (L = a.h.concat(a.g), J = r(L), K = J.next(); !K.done; K = J.next()) {
                R = K.value, S = G++, H.push({
                  id: S,
                  language: R.language,
                  primary: R.primary,
                  audio: R.type == d.bb ? R : null,
                  video: R.type == d.Na ? R : null,
                  bandwidth: R.bandwidth || 0,
                  drmInfos: R.drmInfos,
                  allowedByApplication: !0,
                  allowedByKeySystem: !0,
                  decodingInfos: [],
                });
              }
            }

            a.l = H;
            z(Qa);
        }
      });
    }

    function Jo(a) {
      a = r(a);

      for (let b = a.next(); !b.done; b = a.next()) {
        b = b.value;

        for (var c = [], d = r(b.sc), e = d.next(); !e.done; e = d.next()) {
          e = e.value;

          for (var f = !1, g = r(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.channelsCount == h.channelsCount && e.language == h.language && e.bandwidth == h.bandwidth && e.label == h.label && e.codecs == h.codecs && e.mimeType == h.mimeType && ob(e.roles, h.roles) && e.audioSamplingRate == h.audioSamplingRate && e.primary == h.primary && (f = !0);

          f || c.push(e);
        }

        b.sc = c;
      }
    }

    function Lo(a) {
      a = r(a);

      for (let b = a.next(); !b.done; b = a.next()) {
        b = b.value;

        for (var c = [], d = r(b.textStreams), e = d.next(); !e.done; e = d.next()) {
          e = e.value;

          for (var f = !1, g = r(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.language == h.language && e.label == h.label && e.codecs == h.codecs && e.mimeType == h.mimeType && ob(e.roles, h.roles) && (f = !0);

          f || c.push(e);
        }

        b.textStreams = c;
      }
    }

    function Ko(a) {
      a = r(a);

      for (let b = a.next(); !b.done; b = a.next()) {
        b = b.value;

        for (var c = [], d = r(b.Oc), e = d.next(); !e.done; e = d.next()) {
          e = e.value;

          for (var f = !1, g = r(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.width == h.width && e.frameRate == h.frameRate && e.codecs == h.codecs && e.mimeType == h.mimeType && e.label == h.label && ob(e.roles, h.roles) && of(e.closedCaptions, h.closedCaptions) && e.bandwidth == h.bandwidth && (f = !0);

          f || c.push(e);
        }

        b.Oc = c;
      }
    }

    function Mo(a) {
      a = r(a);

      for (let b = a.next(); !b.done; b = a.next()) {
        b = b.value;

        for (var c = [], d = r(b.imageStreams), e = d.next(); !e.done; e = d.next()) {
          e = e.value;

          for (var f = !1, g = r(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.width == h.width && e.codecs == h.codecs && e.mimeType == h.mimeType && (f = !0);

          f || c.push(e);
        }

        b.imageStreams = c;
      }
    }

    function Ro(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      return I((S) => {
        switch (S.g) {
          case 1:
            b = zc;
            if (a.length == 1) return S.return(a[0]);
            c = a.map((X) => X.filter((T) => T.type == b.bb));
            d = a.map((X) => X.filter((T) => T.type == b.Na));
            e = a.map((X) => X.filter((T) => T.type == b.aa));
            f = a.map((X) => X.filter((T) => T.type == b.Mb));
            g = r(e);

            for (h = g.next(); !h.done; h = g.next()) k = h.value, k.push(So(b.aa));

            l = r(f);

            for (m = l.next(); !m.done; m = l.next()) n = m.value, n.push(So(b.Mb));

            return u(S, Oo([], c, 0, To, Uo), 2);

          case 2:
            return p = S.h, u(S, Oo([], d, 0, To, Uo), 3);

          case 3:
            return t = S.h, u(S, Oo([], e, 0, To, Uo), 4);

          case 4:
            return v = S.h, u(S, Oo([], f, 0, To, Uo), 5);

          case 5:
            w = S.h;
            x = 0;
            if (t.length && p.length) for (F = r(p), G = F.next(); !G.done; G = F.next()) for (H = G.value, L = r(t), J = L.next(); !J.done; J = L.next()) K = J.value, R = x++, K.variantIds.push(R), H.variantIds.push(R); else {
              for (y = t.concat(p), E = r(y), D = E.next(); !D.done; D = E.next()) {
                B = D.value, B.variantIds = [x++];
              }
            }
            return S.return(t.concat(p).concat(v).concat(w));
        }
      });
    }

    function Oo(a, b, c, d, e) {
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      let X;
      let T;
      return I((N) => {
        switch (N.g) {
          case 1:
            f = zc;
            g = [];
            h = r(lb(b));

            for (k = h.next(); !k.done; k = h.next()) m = l = k.value, n = m.ha, p = m.item, n >= c ? g.push(new Set(p)) : g.push(new Set());

            t = r(a);
            v = t.next();

          case 2:
            if (v.done) {
              N.v(4);
              break;
            }

            w = v.value;
            return u(N, Vo(w, b, c, e, g), 5);

          case 5:
            x = N.h;
            if (!x) throw new O(2, 4, 4037);
            v = t.next();
            N.v(2);
            break;

          case 4:
            y = r(g), E = y.next();

          case 6:
            if (E.done) {
              N.v(8);
              break;
            }

            D = E.value;
            B = r(D);
            F = B.next();

          case 9:
            if (F.done) {
              E = y.next();
              N.v(6);
              break;
            }

            G = F.value;
            return u(N, Wo(G, b, d, e, g), 12);

          case 12:
            (H = N.h) && a.push(H);
            F = B.next();
            N.v(9);
            break;

          case 8:
            L = r(g);

            for (E = L.next(); !E.done; E = L.next()) {
              for (J = E.value, K = {}, R = r(J), F = R.next(); !F.done; K = {
                Va: K.Va,
              }, F = R.next()) {
                if (K.Va = F.value, S = K.Va.type == f.aa && !K.Va.language, X = K.Va.type == f.Mb && !K.Va.tilesLayout, !S && !X && (T = a.some(function (ea) {
                  return function (fa) {
                    return fa.mimeType == ea.Va.mimeType && Xc(fa.codecs) == Xc(ea.Va.codecs);
                  };
                }(K)))) throw new O(2, 4, 4037);
              }
            }

            return N.return(a);
        }
      });
    }

    function Vo(a, b, c, d, e) {
      let f;
      return I((g) => {
        if (g.g == 1) return (f = Xo(b, a)) ? u(g, Yo(f), 2) : g.return(!1);
        Zo(a, f, c, d, e);
        return g.return(!0);
      });
    }

    function Yo(a) {
      const b = [];
      a = r(a);

      for (let c = a.next(); !c.done; c = a.next()) c = c.value, b.push(c.createSegmentIndex()), c.trickModeVideo && !c.trickModeVideo.segmentIndex && b.push(c.trickModeVideo.createSegmentIndex());

      return Promise.all(b);
    }

    function Wo(a, b, c, d, e) {
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) return f = c(a), (g = Xo(b, f)) ? f.createSegmentIndex ? u(h, Yo(g), 2) : h.v(2) : h.return(null);
        Zo(f, g, 0, d, e);
        return h.return(f);
      });
    }

    function Zo(a, b, c, d, e) {
      b = r(lb(b));

      for (let f = b.next(); !f.done; f = b.next()) {
        let g = f.value;
        f = g.ha;
        g = g.item;

        if (f >= c) {
          d(a, g);
          let h = !0;
          a.type == 'audio' && md(a.language, g.language) == 0 && (h = !1);
          h && e[f].delete(g);
        }
      }
    }

    function Po(a) {
      a = _objectSpread({}, a);
      a.originalId = null;

      a.createSegmentIndex = function () {
        return Promise.resolve();
      };

      a.segmentIndex = new Ki();
      a.emsgSchemeIdUris = [];
      a.keyIds = new Set();
      a.closedCaptions = null;
      a.trickModeVideo = null;
      return a;
    }

    function To(a) {
      a = _objectSpread({}, a);
      a.keyIds = new Set();
      a.segments = [];
      a.variantIds = [];
      a.closedCaptions = null;
      return a;
    }

    function Qo(a, b) {
      a.roles = Array.from(new Set(a.roles.concat(b.roles)));
      b.emsgSchemeIdUris && (a.emsgSchemeIdUris = Array.from(new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))));
      let c = b.keyIds;
      c = new Set([].concat(ja(a.keyIds), ja(c)));
      a.keyIds = c;
      a.originalId == null ? a.originalId = b.originalId : a.originalId += `,${b.originalId || ''}`;
      c = Zf(a.drmInfos, b.drmInfos);
      if (b.drmInfos.length && a.drmInfos.length && !c.length) throw new O(2, 4, 4038);
      a.drmInfos = c;
      a.encrypted = a.encrypted || b.encrypted;

      if (b.closedCaptions) {
        a.closedCaptions || (a.closedCaptions = new Map());
        c = r(b.closedCaptions);

        for (let d = c.next(); !d.done; d = c.next()) {
          let e = r(d.value);
          d = e.next().value;
          e = e.next().value;
          a.closedCaptions.set(d, e);
        }
      }

      a.segmentIndex.l.push(b.segmentIndex);
      b.trickModeVideo ? (a.trickModeVideo || (a.trickModeVideo = Po(b.trickModeVideo), a.trickModeVideo.segmentIndex = a.segmentIndex.clone()), Qo(a.trickModeVideo, b.trickModeVideo)) : a.trickModeVideo && Qo(a.trickModeVideo, b);
    }

    function Uo(a, b) {
      a.roles = Array.from(new Set(a.roles.concat(b.roles)));
      let c = b.keyIds;
      c = new Set([].concat(ja(a.keyIds), ja(c)));
      a.keyIds = c;
      a.encrypted = a.encrypted && b.encrypted;
      a.segments.push.apply(a.segments, ja(b.segments));

      if (b.closedCaptions) {
        a.closedCaptions || (a.closedCaptions = new Map());
        c = r(b.closedCaptions);

        for (let d = c.next(); !d.done; d = c.next()) {
          let e = r(d.value);
          d = e.next().value;
          e = e.next().value;
          a.closedCaptions.set(d, e);
        }
      }
    }

    function Xo(a, b) {
      for (var c = [], d = r(a), e = d.next(); !e.done; e = d.next()) {
        let f = b;
        const g = {
          audio: $o,
          video: $o,
          text: ap,
          image: bp,
        }[f.type];
        const h = {
          audio: cp,
          video: dp,
          text: ep,
          image: fp,
        }[f.type];
        let k = null;
        e = r(e.value);

        for (let l = e.next(); !l.done; l = e.next()) l = l.value, !g(f, l) || k && !h(f, k, l) || (k = l);

        f = k;
        if (!f) return null;
        c.push(f);
      }

      return c;
    }

    function $o(a, b) {
      let c;

      if (!(c = b.mimeType != a.mimeType || Xc(b.codecs) != Xc(a.codecs)) && (c = a.drmInfos)) {
        c = a.drmInfos;
        const d = b.drmInfos;
        c = !(c.length && d.length ? Zf(c, d).length > 0 : 1);
      }

      return c ? !1 : !0;
    }

    function ap(a, b) {
      return a.language ? b.language ? md(a.language, b.language) == 0 || b.kind != a.kind ? !1 : !0 : !0 : !1;
    }

    function bp(a) {
      return a.tilesLayout ? !0 : !1;
    }

    function cp(a, b, c) {
      if (a.id == c.id) return !0;
      let d = md(a.language, b.language);
      let e = md(a.language, c.language);
      if (e > d) return !0;
      if (e < d) return !1;
      if (!b.primary && c.primary) return !0;
      if (b.primary && !c.primary) return !1;
      if (a.roles.length) return d = b.roles.filter((f) => a.roles.includes(f)), e = c.roles.filter((f) => a.roles.includes(f)), e.length > d.length ? !0 : e.length < d.length ? !1 : c.roles.length < b.roles.length;
      if (!c.roles.length && b.roles.length) return !0;
      if (c.roles.length && !b.roles.length) return !1;
      d = gp(a.channelsCount, b.channelsCount, c.channelsCount);
      if (d == hp) return !0;
      if (d == ip) return !1;
      d = gp(a.audioSamplingRate, b.audioSamplingRate, c.audioSamplingRate);
      return d == hp ? !0 : d == ip ? !1 : a.bandwidth && jp(a.bandwidth, b.bandwidth, c.bandwidth) == hp ? !0 : !1;
    }

    function dp(a, b, c) {
      if (a.id == c.id) return !0;
      let d = gp(a.width * a.height, b.width * b.height, c.width * c.height);
      if (d == hp) return !0;
      if (d == ip) return !1;

      if (a.frameRate) {
        d = gp(a.frameRate, b.frameRate, c.frameRate);
        if (d == hp) return !0;
        if (d == ip) return !1;
      }

      return a.bandwidth && jp(a.bandwidth, b.bandwidth, c.bandwidth) == hp ? !0 : !1;
    }

    function ep(a, b, c) {
      if (a.id == c.id) return !0;
      let d = md(a.language, b.language);
      let e = md(a.language, c.language);
      if (e > d) return !0;
      if (e < d) return !1;
      if (!b.primary && c.primary) return !0;
      if (b.primary && !c.primary) return !1;

      if (a.roles.length) {
        d = b.roles.filter((f) => a.roles.includes(f));
        e = c.roles.filter((f) => a.roles.includes(f));
        if (e.length > d.length) return !0;
        if (e.length < d.length) return !1;
      } else {
        if (!c.roles.length && b.roles.length) return !0;
        if (c.roles.length && !b.roles.length) return !1;
      }

      return c.mimeType != a.mimeType || c.codecs != a.codecs || b.mimeType == a.mimeType && b.codecs == a.codecs ? !1 : !0;
    }

    function fp(a, b, c) {
      return a.id == c.id ? !0 : gp(a.width * a.height, b.width * b.height, c.width * c.height) == hp ? !0 : !1;
    }

    function So(a) {
      return {
        id: 0,
        originalId: '',
        primary: !1,
        type: a,
        mimeType: '',
        codecs: '',
        language: '',
        label: null,
        width: null,
        height: null,
        encrypted: !1,
        keyIds: new Set(),
        segments: [],
        variantIds: [],
        roles: [],
        forced: !1,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        closedCaptions: null,
      };
    }

    function No(a) {
      return {
        id: 0,
        originalId: '',

        createSegmentIndex() {
          return Promise.resolve();
        },

        segmentIndex: new V([]),
        mimeType: '',
        codecs: '',
        encrypted: !1,
        drmInfos: [],
        keyIds: new Set(),
        language: '',
        label: null,
        type: a,
        primary: !1,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: [],
        forced: !1,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        closedCaptions: null,
      };
    }

    function gp(a, b, c) {
      if (b == a && a != c) return ip;
      if (c == a && a != b) return hp;

      if (b > a) {
        if (c <= a || c - a < b - a) return hp;
        if (c - a > b - a) return ip;
      } else {
        if (c > a) return ip;
        if (a - c < a - b) return hp;
        if (a - c > a - b) return ip;
      }

      return kp;
    }

    function jp(a, b, c) {
      b = Math.abs(a - b);
      a = Math.abs(a - c);
      return a < b ? hp : b < a ? ip : kp;
    }

    var hp = 1;
    var kp = 0;
    var ip = -1;

    function lp() {
      const a = this;
      this.C = this.o = null;
      this.h = [];
      this.B = null;
      this.D = 1;
      this.l = {};
      this.H = {};
      this.g = new Ho();
      this.u = 0;
      this.F = new Oa(5);
      this.s = new P(() => {
        a.Zb();
      });
      this.i = new Oe();
      this.j = Infinity;
      this.m = !1;
    }

    q = lp.prototype;

    q.configure = function (a) {
      this.o = a;
    };

    q.start = function (a, b) {
      const c = this;
      let d;
      return I((e) => {
        if (e.g == 1) return c.m = b.isLowLatencyMode(), c.h = [a], c.C = b, u(e, mp(c), 2);
        d = e.h;
        c.C && np(c, d);
        if (!c.C) throw new O(2, 7, 7001);
        return e.return(c.B);
      });
    };

    q.stop = function () {
      for (let a = r(Object.values(this.l)), b = a.next(); !b.done; b = a.next()) b.value.release();

      this.g && this.g.release();
      this.o = this.C = null;
      this.h = [];
      this.B = null;
      this.l = {};
      this.g = null;
      this.s != null && (this.s.stop(), this.s = null);
      return this.i.destroy();
    };

    q.update = function () {
      const a = this;
      let b;
      return I((c) => {
        if (c.g == 1) return A(c, 2), u(c, mp(a), 4);
        if (c.g != 2) return va(c, 0);
        b = C(c);
        if (!a.C || !b) return c.return();
        a.C.onError(b);
        z(c);
      });
    };

    q.onExpirationUpdated = function () {};

    function mp(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        if (k.g == 1) return b = Ue(a.h, a.o.retryParameters), c = a.C.networkingEngine, d = Date.now(), e = c.request(0, b), Pe(a.i, e), u(k, e.promise, 2);

        if (k.g != 3) {
          f = k.h;
          if (!a.C) return k.return(0);
          f.uri && !a.h.includes(f.uri) && a.h.unshift(f.uri);
          return u(k, op(a, f.data, f.uri), 3);
        }

        g = Date.now();
        h = (g - d) / 1E3;
        Pa(a.F, 1, h);
        return k.return(h);
      });
    }

    function op(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        if (k.g == 1) {
          d = Nn(b, 'MPD');
          if (!d) throw new O(2, 4, 4001, c);
          if (e = a.o.dash.disableXlinkProcessing) return k.return(pp(a, d, c));
          f = a.o.dash.xlinkFailGracefully;
          g = co(d, a.o.retryParameters, f, c, a.C.networkingEngine);
          Pe(a.i, g);
          return u(k, g.promise, 2);
        }

        h = k.h;
        return k.return(pp(a, h, c));
      });
    }

    function pp(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      let X;
      let T;
      let N;
      let ea;
      let fa;
      let ya;
      return I((Ga) => {
        switch (Ga.g) {
          case 1:
            (d = a.o.dash.manifestPreprocessor) && d(b);
            e = [c];
            f = wn(b, 'Location').map(Bn).filter($b);
            f.length > 0 && (g = tc(e, f), e = a.h = g);
            h = wn(b, 'BaseURL');
            k = h.map(Bn);
            l = tc(e, k);
            m = 0;
            h && h.length && (m = Dn(h[0], 'availabilityTimeOffset', Kn) || 0);
            n = a.o.dash.ignoreMinBufferTime;
            p = 0;
            n || (p = Dn(b, 'minBufferTime', Fn) || 0);
            a.u = Dn(b, 'minimumUpdatePeriod', Fn, -1);
            t = Dn(b, 'availabilityStartTime', En);
            v = Dn(b, 'timeShiftBufferDepth', Fn);
            w = a.o.dash.ignoreSuggestedPresentationDelay;
            x = null;
            w || (x = Dn(b, 'suggestedPresentationDelay', Fn));
            y = a.o.dash.ignoreMaxSegmentDuration;
            E = null;
            y || (E = Dn(b, 'maxSegmentDuration', Fn));
            D = b.getAttribute('type') || 'static';
            if (a.B) for (B = a.B.presentationTimeline, F = r(Object.values(a.l)), G = F.next(); !G.done; G = F.next()) H = G.value, H.eb(B.Za()); else L = a.o.defaultPresentationDelay || 1.5 * p, J = x != null ? x : L, B = new U(t, J, a.o.dash.autoCorrectDrift);
            K = b.getAttribute('profiles') || '';
            R = {
              cb: D != 'static',
              presentationTimeline: B,
              fa: null,
              W: null,
              ka: null,
              K: null,
              bandwidth: 0,
              ee: !1,
              vb: m,
              profiles: K.split(','),
            };
            var sb = Dn(b, 'mediaPresentationDuration', Fn);
            var Qa = [];
            var Da = 0;
            var fc = wn(b, 'Period');
            fc = r(lb(fc));

            for (let kb = fc.next(); !kb.done; kb = fc.next()) {
              let Pb = kb.value;
              kb = Pb.item;
              Pb = Pb.next;
              Da = Dn(kb, 'start', Fn, Da);
              const nf = Dn(kb, 'duration', Fn);
              let db = null;

              if (Pb) {
                const hd = Dn(Pb, 'start', Fn);
                hd != null && (db = hd - Da);
              } else sb != null && (db = sb - Da);

              db == null && (db = nf);
              kb = qp(a, R, l, {
                start: Da,
                duration: db,
                node: kb,
                ge: db == null || !Pb,
              });
              Qa.push(kb);
              R.fa.id && db && (a.H[R.fa.id] = db);

              if (db == null) {
                Da = null;
                break;
              }

              Da += db;
            }

            S = sb != null ? {
              periods: Qa,
              duration: sb,
              Zd: !1,
            } : {
              periods: Qa,
              duration: Da,
              Zd: !0,
            };
            X = S.duration;
            T = S.periods;
            B.ec(D == 'static');
            D != 'static' && S.Zd || B.Ja(X || Infinity);
            a.j && !a.m && (N = a.C.isAutoLowLatencyMode()) && (a.C.enableLowLatencyMode(), a.m = a.C.isLowLatencyMode());
            a.m ? B.te(a.j) : a.j && Va('Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.');
            (ea = B.X()) && !isNaN(a.o.availabilityWindowOverride) && (v = a.o.availabilityWindowOverride);
            v == null && (v = Infinity);
            B.Qd(v);
            B.zd(E || 1);
            return u(Ga, Io(a.g, T, R.cb), 2);

          case 2:
            if (a.B) {
              a.B.variants = a.g.l;
              a.B.textStreams = a.g.j;
              a.B.imageStreams = a.g.i;
              a.C.filter(a.B);
              Ga.v(3);
              break;
            }

            a.B = {
              presentationTimeline: B,
              variants: a.g.l,
              textStreams: a.g.j,
              imageStreams: a.g.i,
              offlineSessionIds: [],
              minBufferTime: p || 0,
            };

            if (!B.ye()) {
              Ga.v(3);
              break;
            }

            fa = wn(b, 'UTCTiming');
            return u(Ga, rp(a, l, fa), 5);

          case 5:
            ya = Ga.h;
            if (!a.C) return Ga.return();
            B.ue(ya);

          case 3:
            a.C.makeTextStreamsForClosedCaptions(a.B), z(Ga);
        }
      });
    }

    function qp(a, b, c, d) {
      b.fa = sp(d.node, null, c);
      b.W = d;
      b.fa.vb = b.vb;
      b.fa.id || (b.fa.id = `__shaka_period_${d.start}`);
      c = wn(d.node, 'EventStream');
      c = r(c);

      for (var e = c.next(); !e.done; e = c.next()) tp(a, d.start, d.duration, e.value);

      c = wn(d.node, 'AdaptationSet').map((m) => up(a, b, m)).filter($b);

      if (b.cb) {
        d = [];
        e = r(c);

        for (var f = e.next(); !f.done; f = e.next()) {
          f = r(f.value.Kf);

          for (var g = f.next(); !g.done; g = f.next()) d.push(g.value);
        }

        if (d.length != new Set(d).size) throw new O(2, 4, 4018);
      }

      d = c.filter((m) => !m.Sd);
      c = c.filter((m) => m.Sd);
      c = r(c);

      for (e = c.next(); !e.done; e = c.next()) {
        e = e.value;
        f = e.Sd.split(' ');
        g = r(d);

        for (var h = g.next(); !h.done; h = g.next()) {
          let k = h.value;

          if (f.includes(k.id)) {
            h = {};
            k = r(k.streams);

            for (let l = k.next(); !l.done; h = {
              mc: h.mc,
            }, l = k.next()) {
              h.mc = l.value, h.mc.trickModeVideo = e.streams.find(function (m) {
                return function (n) {
                  return Xc(m.mc.codecs) == Xc(n.codecs);
                };
              }(h));
            }
          }
        }
      }

      e = a.o.disableAudio ? [] : vp(d, 'audio');
      g = a.o.disableVideo ? [] : vp(d, 'video');
      f = a.o.disableText ? [] : vp(d, yc);
      c = a.o.disableThumbnails ? [] : vp(d, 'image');
      if (!g.length && !e.length) throw new O(2, 4, 4004);
      d = [];
      e = r(e);

      for (h = e.next(); !h.done; h = e.next()) d.push.apply(d, ja(h.value.streams));

      e = [];
      g = r(g);

      for (h = g.next(); !h.done; h = g.next()) e.push.apply(e, ja(h.value.streams));

      g = [];
      f = r(f);

      for (h = f.next(); !h.done; h = f.next()) g.push.apply(g, ja(h.value.streams));

      f = [];
      c = r(c);

      for (h = c.next(); !h.done; h = c.next()) f.push.apply(f, ja(h.value.streams));

      return {
        id: b.fa.id,
        sc: d,
        Oc: e,
        textStreams: g,
        imageStreams: f,
      };
    }

    function vp(a, b) {
      return a.filter((c) => c.contentType == b);
    }

    function up(a, b, c) {
      b.ka = sp(c, b.fa, null);
      let d = !1;
      let e = wn(c, 'Role');
      const f = e.map((B) => B.getAttribute('value')).filter($b);
      let g = void 0;
      let h = b.ka.contentType == yc;
      h && (g = 'subtitle');
      e = r(e);

      for (var k = e.next(); !k.done; k = e.next()) {
        k = k.value;
        var l = k.getAttribute('schemeIdUri');
        if (l == null || l == 'urn:mpeg:dash:role:2011') {
          switch (k = k.getAttribute('value'), k) {
            case 'main':
              d = !0;
              break;

            case 'caption':
            case 'subtitle':
              g = k;
          }
        }
      }

      l = wn(c, 'EssentialProperty');
      e = null;
      k = !1;
      l = r(l);

      for (var m = l.next(); !m.done; m = l.next()) {
        m = m.value, m.getAttribute('schemeIdUri') == 'http://dashif.org/guidelines/trickmode' ? e = m.getAttribute('value') : k = !0;
      }

      l = wn(c, 'Accessibility');
      const n = new Map();
      l = r(l);

      for (m = l.next(); !m.done; m = l.next()) {
        var p = m.value;
        m = p.getAttribute('schemeIdUri');
        p = p.getAttribute('value');

        if (m == 'urn:scte:dash:cc:cea-608:2015') {
          if (m = 1, p != null) {
            p = p.split(';');

            for (var t = r(p), v = t.next(); !v.done; v = t.next()) {
              var w = v.value;
              let x = v = void 0;
              w.includes('=') ? (w = w.split('='), v = w[0].startsWith('CC') ? w[0] : `CC${w[0]}`, x = w[1]) : (v = `CC${m}`, p.length == 2 ? m += 2 : m++, x = w);
              n.set(v, id(x));
            }
          } else n.set('CC1', 'und');
        } else if (m == 'urn:scte:dash:cc:cea-708:2015') {
          if (m = 1, p != null) for (p = r(p.split(';')), v = p.next(); !v.done; v = p.next()) v = v.value, w = t = void 0, v.includes('=') ? (v = v.split('='), t = `svc${v[0]}`, w = v[1].split(',')[0].split(':').pop()) : (t = `svc${m}`, m++, w = v), n.set(t, id(w)); else n.set('svc1', 'und');
        } else m == 'urn:mpeg:dash:role:2011' && p != null && (f.push(p), p == 'captions' && (g = 'caption'));
      }

      if (k) return null;
      k = wn(c, 'ContentProtection');
      const y = On(k, a.o.dash.ignoreDrmInfo, a.o.dash.keySystemsByURI);
      const E = id(c.getAttribute('lang') || 'und');
      let D = c.getAttribute('label');
      (k = wn(c, 'Label')) && k.length && (k = k[0], k.textContent && (D = k.textContent));
      k = wn(c, 'Representation');
      c = k.map((B) => wp(a, b, y, g, E, D, d, f, n, B)).filter((B) => !!B);

      if (c.length == 0) {
        e = b.ka.contentType == 'image';
        if (a.o.dash.ignoreEmptyAdaptationSet || h || e) return null;
        throw new O(2, 4, 4003);
      }

      if (!b.ka.contentType || b.ka.contentType == 'application') {
        for (b.ka.contentType = xp(c[0].mimeType, c[0].codecs), h = r(c), l = h.next(); !l.done; l = h.next()) {
          l.value.type = b.ka.contentType;
        }
      }

      h = r(c);

      for (l = h.next(); !l.done; l = h.next()) for (l = l.value, m = r(y.drmInfos), p = m.next(); !p.done; p = m.next()) p = p.value, p.keyIds = p.keyIds && l.keyIds ? new Set([].concat(ja(p.keyIds), ja(l.keyIds))) : p.keyIds || l.keyIds;

      h = k.map((B) => B.getAttribute('id')).filter($b);
      return {
        id: b.ka.id || `__fake__${a.D++}`,
        contentType: b.ka.contentType,
        language: E,
        zg: d,
        streams: c,
        drmInfos: y.drmInfos,
        Sd: e,
        Kf: h,
      };
    }

    function wp(a, b, c, d, e, f, g, h, k, l) {
      b.K = sp(l, b.ka, null);
      a.j = Math.min(a.j, b.K.vb);
      if (!yp(b.K)) return null;
      const m = b.W.start;
      b.bandwidth = Dn(l, 'bandwidth', In) || 0;
      let n = b.K.contentType;
      const p = n == yc || n == 'application';
      n = n == 'image';

      try {
        var t = function (G, H, L) {
          return zp(a, G, H, L);
        };

        if (b.K.cc) var v = po(b, t); else if (b.K.ab) v = vo(b, a.l); else if (b.K.dc) v = Ao(b, t, a.l, !!a.B, a.o.dash.initialSegmentLimit, a.H); else {
          const w = b.K.ya;
          const x = b.W.duration || 0;
          v = {
            xb() {
              return Promise.resolve(Ji(m, x, w));
            },

          };
        }
      } catch (G) {
        if ((p || n) && G.code == 4002) return null;
        throw G;
      }

      t = wn(l, 'ContentProtection');
      t = Rn(t, c, a.o.dash.ignoreDrmInfo, a.o.dash.keySystemsByURI);
      t = new Set(t ? [t] : []);
      let y = !1;
      wn(l, 'SupplementalProperty').some((G) => G.getAttribute('schemeIdUri') == 'tag:dolby.com,2018:dash:EC3_ExtensionType:2018' && G.getAttribute('value') == 'JOC') && (b.K.mimeType = 'audio/eac3-joc', y = !0);
      let E = !1;
      p && (E = h.includes('forced_subtitle'));
      let D;
      if (n && ((l = wn(l, 'EssentialProperty').find((G) => ['http://dashif.org/thumbnail_tile', 'http://dashif.org/guidelines/thumbnail_tile'].includes(G.getAttribute('schemeIdUri')))) && (D = l.getAttribute('value')), !D)) return null;
      let B;
      l = b.K.codecs;
      b.profiles.includes('http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10') && (l.includes('hvc1.2.4.L153.B0') || l.includes('hev1.2.4.L153.B0')) && (B = 'PQ');
      var F = {
        id: a.D++,
        originalId: b.K.id,

        createSegmentIndex() {
          let G;
          return I((H) => {
            if (H.g == 1) {
              if (F.segmentIndex) return H.v(0);
              G = F;
              return u(H, v.xb(), 3);
            }

            G.segmentIndex = H.h;
            z(H);
          });
        },

        segmentIndex: null,
        mimeType: b.K.mimeType,
        codecs: b.K.codecs,
        frameRate: b.K.frameRate,
        pixelAspectRatio: b.K.pixelAspectRatio,
        bandwidth: b.bandwidth,
        width: b.K.width,
        height: b.K.height,
        kind: d,
        encrypted: c.drmInfos.length > 0,
        drmInfos: c.drmInfos,
        keyIds: t,
        language: e,
        label: f,
        type: b.ka.contentType,
        primary: g,
        trickModeVideo: null,
        emsgSchemeIdUris: b.K.emsgSchemeIdUris,
        roles: h,
        forced: E,
        channelsCount: b.K.Cd,
        audioSamplingRate: b.K.audioSamplingRate,
        spatialAudio: y,
        closedCaptions: k,
        hdr: B,
        tilesLayout: D,
      };
      return F;
    }

    q.Zb = function () {
      const a = this;
      let b;
      let c;
      return I((d) => {
        switch (d.g) {
          case 1:
            return b = 0, A(d, 2), u(d, mp(a), 4);

          case 4:
            b = d.h;
            va(d, 3);
            break;

          case 2:
            c = C(d), a.C && (c.severity = 1, a.C.onError(c));

          case 3:
            if (!a.C) return d.return();
            np(a, b);
            z(d);
        }
      });
    };

    function np(a, b) {
      a.u < 0 || a.s.S(Math.max(3, a.u - b, Ra(a.F)));
    }

    function sp(a, b, c) {
      b = b || {
        contentType: '',
        mimeType: '',
        codecs: '',
        emsgSchemeIdUris: [],
        frameRate: void 0,
        pixelAspectRatio: void 0,
        Cd: null,
        audioSamplingRate: null,
        vb: 0,
      };
      c = c || b.ya;
      let d = wn(a, 'BaseURL');
      const e = d.map(Bn);
      let f = a.getAttribute('contentType') || b.contentType;
      const g = a.getAttribute('mimeType') || b.mimeType;
      const h = a.getAttribute('codecs') || b.codecs;
      const k = Dn(a, 'frameRate', Ln) || b.frameRate;
      const l = a.getAttribute('sar') || b.pixelAspectRatio;
      let m = wn(a, 'InbandEventStream');
      const n = b.emsgSchemeIdUris.slice();
      m = r(m);

      for (var p = m.next(); !p.done; p = m.next()) p = p.value.getAttribute('schemeIdUri'), n.includes(p) || n.push(p);

      m = wn(a, 'AudioChannelConfiguration');
      m = Ap(m) || b.Cd;
      p = Dn(a, 'audioSamplingRate', Jn) || b.audioSamplingRate;
      f || (f = xp(g, h));
      const t = vn(a, 'SegmentBase');
      const v = vn(a, 'SegmentTemplate');
      const w = t ? Dn(t, 'availabilityTimeOffset', Kn) || 0 : 0;
      const x = v ? Dn(v, 'availabilityTimeOffset', Kn) || 0 : 0;
      d = d && d.length ? Dn(d[0], 'availabilityTimeOffset', Kn) || 0 : 0;
      d = b.vb + d + w + x;
      return {
        ya: tc(c, e),
        cc: t || b.cc,
        ab: vn(a, 'SegmentList') || b.ab,
        dc: v || b.dc,
        width: Dn(a, 'width', Jn) || b.width,
        height: Dn(a, 'height', Jn) || b.height,
        contentType: f,
        mimeType: g,
        codecs: h,
        frameRate: k,
        pixelAspectRatio: l,
        emsgSchemeIdUris: n,
        id: a.getAttribute('id'),
        Cd: m,
        audioSamplingRate: p,
        vb: d,
      };
    }

    function Ap(a) {
      a = r(a);

      for (let b = a.next(); !b.done; b = a.next()) {
        let c = b.value;

        if (b = c.getAttribute('schemeIdUri')) {
          if (c = c.getAttribute('value')) {
            switch (b) {
              case 'urn:mpeg:dash:outputChannelPositionList:2012':
                return c.trim().split(/ +/).length;

              case 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011':
              case 'urn:dts:dash:audio_channel_configuration:2012':
                b = parseInt(c, 10);
                if (!b) continue;
                return b;

              case 'tag:dolby.com,2014:dash:audio_channel_configuration:2011':
              case 'urn:dolby:dash:audio_channel_configuration:2011':
                b = parseInt(c, 16);
                if (!b) continue;

                for (a = 0; b;) b & 1 && ++a, b >>= 1;

                return a;

              case 'urn:mpeg:mpegB:cicp:ChannelConfiguration':
                if (b = [0, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12, 14, 12, 14], (c = parseInt(c, 10)) && c > 0 && c < b.length) return b[c];
            }
          }
        }
      }

      return null;
    }

    function yp(a) {
      let b = a.cc ? 1 : 0;
      b += a.ab ? 1 : 0;
      b += a.dc ? 1 : 0;
      if (b == 0) return a.contentType == yc || a.contentType == 'application' ? !0 : !1;
      b != 1 && (a.cc && (a.ab = null), a.dc = null);
      return !0;
    }

    function Bp(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        if (m.g == 1) return e = tc(b, [c]), f = Ue(e, a.o.retryParameters), f.method = d, g = a.C.networkingEngine.request(4, f), Pe(a.i, g), u(m, g.promise, 2);
        h = m.h;

        if (d == 'HEAD') {
          if (!h.headers || !h.headers.date) return m.return(0);
          k = h.headers.date;
        } else k = Dc(h.data);

        l = Date.parse(k);
        return isNaN(l) ? m.return(0) : m.return(l - Date.now());
      });
    }

    function rp(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      return I((n) => {
        switch (n.g) {
          case 1:
            d = c.map((p) => ({
              scheme: p.getAttribute('schemeIdUri'),
              value: p.getAttribute('value'),
            })), e = a.o.dash.clockSyncUri, !d.length && e && d.push({
              scheme: 'urn:mpeg:dash:utc:http-head:2014',
              value: e,
            }), f = r(d), g = f.next();

          case 2:
            if (g.done) {
              n.v(4);
              break;
            }

            h = g.value;
            A(n, 5);
            k = h.scheme;
            l = h.value;

            switch (k) {
              case 'urn:mpeg:dash:utc:http-head:2014':
              case 'urn:mpeg:dash:utc:http-head:2012':
                return n.v(7);

              case 'urn:mpeg:dash:utc:http-xsdate:2014':
              case 'urn:mpeg:dash:utc:http-iso:2014':
              case 'urn:mpeg:dash:utc:http-xsdate:2012':
              case 'urn:mpeg:dash:utc:http-iso:2012':
                return n.v(8);

              case 'urn:mpeg:dash:utc:direct:2014':
              case 'urn:mpeg:dash:utc:direct:2012':
                return m = Date.parse(l), n.return(isNaN(m) ? 0 : m - Date.now());

              case 'urn:mpeg:dash:utc:http-ntp:2014':
              case 'urn:mpeg:dash:utc:ntp:2014':
              case 'urn:mpeg:dash:utc:sntp:2014':
                Va('NTP UTCTiming scheme is not supported');
                break;

              default:
                Va('Unrecognized scheme in UTCTiming element', k);
            }

            n.v(9);
            break;

          case 7:
            return u(n, Bp(a, b, l, 'HEAD'), 10);

          case 10:
            return n.return(n.h);

          case 8:
            return u(n, Bp(a, b, l, 'GET'), 11);

          case 11:
            return n.return(n.h);

          case 9:
            va(n, 3);
            break;

          case 5:
            C(n);

          case 3:
            g = f.next();
            n.v(2);
            break;

          case 4:
            return Va('A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!'), n.return(0);
        }
      });
    }

    function tp(a, b, c, d) {
      const e = d.getAttribute('schemeIdUri') || '';
      const f = d.getAttribute('value') || '';
      const g = Dn(d, 'timescale', Jn) || 1;
      d = r(wn(d, 'Event'));

      for (let h = d.next(); !h.done; h = d.next()) {
        h = h.value;
        let k = Dn(h, 'presentationTime', Jn) || 0;
        let l = Dn(h, 'duration', Jn) || 0;
        k = k / g + b;
        l = k + l / g;
        c != null && (k = Math.min(k, b + c), l = Math.min(l, b + c));
        h = {
          schemeIdUri: e,
          value: f,
          startTime: k,
          endTime: l,
          id: h.getAttribute('id') || '',
          eventElement: h,
        };
        a.C.onTimelineRegionAdded(h);
      }
    }

    function zp(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      let k;
      return I((l) => {
        if (l.g == 1) return e = $e, f = Wi(b, c, d, a.o.retryParameters), g = a.C.networkingEngine, h = g.request(e, f), Pe(a.i, h), u(l, h.promise, 2);
        k = l.h;
        return l.return(k.data);
      });
    }

    function xp(a, b) {
      return $c(Vc(a, b)) ? yc : a.split('/')[0];
    }

    M('shaka.dash.DashParser', lp);

    eg.mpd = function () {
      return new lp();
    };

    cg['application/dash+xml'] = function () {
      return new lp();
    };

    cg['video/vnd.mpeg.dash.mpd'] = function () {
      return new lp();
    };

    function Cp(a, b, c, d) {
      this.g = a;
      this.type = b;
      this.U = c;
      this.segments = d || null;
    }

    function Dp(a, b, c, d) {
      this.id = a;
      this.name = b;
      this.g = c;
      this.value = void 0 === d ? null : d;
    }

    Dp.prototype.toString = function () {
      function a(d) {
        return `${d.name}=${isNaN(Number(d.value)) ? `"${d.value}"` : d.value}`;
      }

      let b = `#${this.name}`;
      const c = this.g ? this.g.map(a) : [];
      this.value && c.unshift(this.value);
      c.length > 0 && (b += `:${c.join(',')}`);
      return b;
    };

    Dp.prototype.getAttribute = function (a) {
      const b = this.g.filter((c) => c.name == a);
      return b.length ? b[0] : null;
    };

    function Z(a, b, c) {
      return (a = a.getAttribute(b)) ? a.value : c || null;
    }

    function Ep(a, b) {
      const c = a.getAttribute(b);
      if (!c) throw new O(2, 4, 4023, b);
      return c.value;
    }

    function Fp(a, b, c) {
      c = void 0 === c ? [] : c;
      this.U = b;
      this.g = a;
      this.h = c;
    }

    function Gp(a, b) {
      this.name = a;
      this.value = b;
    }

    function Hp(a, b) {
      return a.filter((c) => c.name == b);
    }

    function Ip(a, b) {
      return a.filter((c) => Ep(c, 'TYPE') == b);
    }

    function Jp(a, b) {
      const c = Hp(a, b);
      return c.length ? c[0] : null;
    }

    function Kp(a, b, c) {
      c = void 0 === c ? 0 : c;
      return (a = Jp(a, b)) ? Number(a.value) : c;
    }

    function Lp(a) {
      this.h = a;
      this.g = 0;
    }

    function Mp(a) {
      Np(a, /[ \t]+/gm);
    }

    function Np(a, b) {
      b.lastIndex = a.g;
      let c = b.exec(a.h);
      c = c == null ? null : {
        position: c.index,
        length: c[0].length,
        results: c,
      };
      if (a.g == a.h.length || c == null || c.position != a.g) return null;
      a.g += c.length;
      return c.results;
    }

    function Op(a) {
      return a.g == a.h.length ? null : (a = Np(a, /[^ \t\n]*/gm)) ? a[0] : null;
    }

    function Pp() {
      this.g = 0;
    }

    function Qp(a, b, c) {
      b = Dc(b);
      b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, '\n').trim();
      let d = b.split(/\n+/m);
      if (!/^#EXTM3U($|[ \t\n])/m.test(d[0])) throw new O(2, 4, 4015);
      b = 0;

      for (var e = !0, f = r(d), g = f.next(); !g.done; g = f.next()) {
        if (g = g.value, /^#(?!EXT)/m.test(g) || e) e = !1; else if (g = Rp(a.g++, g), --a.g, Sp.includes(g.name)) {
          b = 1;
          break;
        } else g.name == 'EXT-X-STREAM-INF' && (e = !0);
      }

      f = [];
      e = !0;
      g = r(lb(d));

      for (let h = g.next(); !h.done; h = g.next()) {
        let k = h.value;
        h = k.ha;
        let l = k.item;
        k = k.next;
        if (/^#(?!EXT)/m.test(l) || e) e = !1; else {
          l = Rp(a.g++, l);

          if (Tp.includes(l.name)) {
            if (b != 1) throw new O(2, 4, 4017);
            k = d.splice(h, d.length - h);
            d = c;
            e = [];
            g = [];
            h = [];
            l = null;
            k = r(k);

            for (let m = k.next(); !m.done; m = k.next()) m = m.value, /^(#EXT)/.test(m) ? (m = Rp(a.g++, m), Sp.includes(m.name) ? f.push(m) : m.name == 'EXT-X-MAP' ? l = m : m.name == 'EXT-X-PART' ? h.push(m) : m.name == 'EXT-X-PRELOAD-HINT' ? Z(m, 'TYPE') == 'PART' ? h.push(m) : Z(m, 'TYPE') == 'MAP' && (m.name = 'EXT-X-MAP', l = m) : g.push(m)) : /^#(?!EXT)/m.test(m) || (m = tc([d], [m.trim()])[0], l && g.push(l), e.push(new Fp(m, g, h)), g = [], h = []);

            h.length && (l && g.push(l), e.push(new Fp('', g, h)));
            return new Cp(c, b, f, e);
          }

          f.push(l);
          l.name == 'EXT-X-STREAM-INF' && (l.g.push(new Gp('URI', k)), e = !0);
        }
      }

      return new Cp(c, b, f);
    }

    function Rp(a, b) {
      let c = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
      if (!c) throw new O(2, 4, 4016, b);
      const d = c[1];
      let e = c[2];
      c = [];
      let f;

      if (e) {
        e = new Lp(e);
        let g;
        (g = Np(e, /^([^,=]+)(?:,|$)/g)) && (f = g[1]);

        for (let h = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; g = Np(e, h);) c.push(new Gp(g[1], g[2] || g[3]));
      }

      return new Dp(a, d, c, f);
    }

    var Sp = 'EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP'.split(' ');
    var Tp = 'EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP'.split(' ');

    function Up() {}

    function Vp(a) {
      try {
        const b = Wp(a);
        return He({
          uri: a,
          le: a,
          data: b.data,
          headers: {
            'content-type': b.contentType,
          },
        });
      } catch (c) {
        return Fe(c);
      }
    }

    function Wp(a) {
      let b = a.split(':');
      if (b.length < 2 || b[0] != 'data') throw new O(2, 1, 1004, a);
      b = b.slice(1).join(':').split(',');
      if (b.length < 2) throw new O(2, 1, 1004, a);
      let c = b[0];
      a = window.decodeURIComponent(b.slice(1).join(','));
      b = c.split(';');
      c = b[0];
      let d = !1;
      b.length > 1 && b[b.length - 1] == 'base64' && (d = !0, b.pop());
      let e;
      d ? e = Mc(a) : e = Hc(a);
      return {
        data: e,
        contentType: c,
      };
    }

    M('shaka.net.DataUriPlugin', Up);
    Up.parse = Vp;
    Re('data', Vp);

    function Xp() {
      const a = this;
      this.o = this.C = null;
      this.Ma = 1;
      this.l = new Map();
      this.s = new Map();
      this.Fa = new Set();
      this.g = new Map();
      this.h = null;
      this.L = '';
      this.Y = new Pp();
      this.Ea = 0;
      this.u = new P(() => {
        a.Zb();
      });
      this.j = Yp;
      this.B = null;
      this.pa = 0;
      this.F = Infinity;
      this.T = this.Xa = 0;
      this.D = new Oe();
      this.qa = [];
      this.J = new Map();
      this.Wa = !1;
      this.m = new Map();
      this.N = null;
      this.da = new Map();
      this.H = new Map();
      this.i = !1;
    }

    q = Xp.prototype;

    q.configure = function (a) {
      this.o = a;
    };

    q.start = function (a, b) {
      const c = this;
      let d;
      let e;
      return I((f) => {
        if (f.g == 1) return c.C = b, c.i = b.isLowLatencyMode(), u(f, Zp(c, Ue([a], c.o.retryParameters), 0), 2);
        if (f.g != 3) return d = f.h, c.L = d.uri, u(f, $p(c, d.data), 3);
        e = c.Ea;
        e > 0 && c.u.S(e);
        return f.return(c.B);
      });
    };

    q.stop = function () {
      this.u && (this.u.stop(), this.u = null);
      const a = [];
      this.D && (a.push(this.D.destroy()), this.D = null);
      this.o = this.C = null;
      this.Fa.clear();
      this.B = null;
      this.g.clear();
      this.s.clear();
      this.m.clear();
      this.l.clear();
      return Promise.all(a);
    };

    q.update = function () {
      const a = this;
      let b;
      let c;
      let d;
      return I((e) => {
        if (e.g == 1) {
          if (a.j == Yp) return e.return();
          b = [];
          a.N = null;
          c = Array.from(a.g.values());
          return c.length ? u(e, aq(a, c[0]), 2) : e.v(2);
        }

        for (d = 1; d < c.length; d++) b.push(aq(a, c[d]));

        return u(e, Promise.all(b), 0);
      });
    };

    function aq(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      return I((w) => {
        if (w.g == 1) return c = bq, d = b.Ce, e = new gc(d), a.i && b.He && jc(e, new lc('_HLS_skip=YES')), u(w, Zp(a, Ue([e.toString()], a.o.retryParameters), 0), 2);

        if (w.g != 3) {
          f = w.h;
          g = Qp(a.Y, f.data, f.uri);
          if (g.type != 1) throw new O(2, 4, 4017);
          h = Hp(g.U, 'EXT-X-DEFINE');
          k = cq(a, h);
          l = b.stream;
          return u(w, dq(a, b.Nc, g, l.type, l.mimeType, b.wd, k, b.Oe), 3);
        }

        m = w.h;
        l.segmentIndex.Bb(m, a.h.Za());
        m.length && (n = Kp(g.U, 'EXT-X-MEDIA-SEQUENCE', 0), p = b.wd.get(n), l.segmentIndex.eb(p));
        t = m[m.length - 1];
        if (v = Jp(g.U, 'EXT-X-ENDLIST')) eq(a, c.Be), a.h.Ja(t.endTime);
        z(w);
      });
    }

    q.onExpirationUpdated = function () {};

    function $p(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      return I((X) => {
        switch (X.g) {
          case 1:
            c = Qp(a.Y, b, a.L);
            if (c.type != 0) throw new O(2, 4, 4022);
            d = Hp(c.U, 'EXT-X-DEFINE');

            for (var T = r(d), N = T.next(); !N.done; N = T.next()) {
              var ea = N.value;
              N = Z(ea, 'NAME');
              ea = Z(ea, 'VALUE');
              N && ea && (a.l.has(N) || a.l.set(N, ea));
            }

            e = Hp(c.U, 'EXT-X-MEDIA');
            f = Hp(c.U, 'EXT-X-STREAM-INF');
            g = Hp(c.U, 'EXT-X-IMAGE-STREAM-INF');
            T = r(f);

            for (N = T.next(); !N.done; N = T.next()) {
              let fa = N.value;
              ea = Z(fa, 'AUDIO');
              N = Z(fa, 'VIDEO');
              var ya = Z(fa, 'SUBTITLES');
              fa = fq(a, fa);

              if (ya) {
                const Ga = wc(yc, fa);
                a.m.set(ya, Ga);
                nb(fa, Ga);
              }

              ea && (ya = vc('audio', fa), a.m.set(ea, ya));
              N && (ea = vc('video', fa), a.m.set(N, ea));
            }

            h = Hp(c.U, 'EXT-X-SESSION-DATA');
            k = r(h);

            for (l = k.next(); !l.done; l = k.next()) {
              if (m = l.value, n = Z(m, 'DATA-ID'), p = Z(m, 'URI'), t = Z(m, 'LANGUAGE'), v = Z(m, 'VALUE'), w = {
                id: n,
              }, p && (w.uri = tc([a.L], [p])[0]), t && (w.language = t), v && (w.value = v), x = new Q('sessiondata', w), a.C) a.C.onEvent(x);
            }

            return u(X, gq(a, e), 2);

          case 2:
            T = Ip(e, 'CLOSED-CAPTIONS');
            T = r(T);

            for (N = T.next(); !N.done; N = T.next()) ya = N.value, N = hq(ya), ea = Ep(ya, 'GROUP-ID'), ya = Ep(ya, 'INSTREAM-ID'), a.J.get(ea) || a.J.set(ea, new Map()), a.J.get(ea).set(ya, N);

            return u(X, iq(a, f), 3);

          case 3:
            return y = X.h, u(X, jq(a, e), 4);

          case 4:
            return E = X.h, u(X, kq(a, g), 5);

          case 5:
            D = X.h;
            if (!a.C) throw new O(2, 7, 7001);
            if (a.Wa && y.length == 0) throw new O(2, 4, 4034);
            F = B = Infinity;
            G = r(a.g.values());

            for (H = G.next(); !H.done; H = G.next()) L = H.value, B = Math.min(B, L.je), L.stream.type != 'text' && (F = Math.min(F, L.vf - L.je));

            a.j != Yp ? (a.h = new U(0, a.o.defaultPresentationDelay ? a.o.defaultPresentationDelay : a.T ? a.T : 3 * a.pa), a.h.ec(!1)) : (a.h = new U(null, 0), a.h.ec(!0));
            lq(a);
            if (a.j != Yp) a.Ea = a.F, J = bq, a.j == J.Ae && (K = a.h.Jc, isNaN(a.o.availabilityWindowOverride) || (K = a.o.availabilityWindowOverride), a.h.Qd(K)); else for (a.h.Ja(F), a.h.offset(-B), R = r(a.g.values()), H = R.next(); !H.done; H = R.next()) S = H.value, S.stream.segmentIndex.offset(-B), S.stream.segmentIndex.Ya(0, F);
            a.B = {
              presentationTimeline: a.h,
              variants: y,
              textStreams: E,
              imageStreams: D,
              offlineSessionIds: [],
              minBufferTime: 0,
            };
            a.C.makeTextStreamsForClosedCaptions(a.B);
            z(X);
        }
      });
    }

    function cq(a, b) {
      for (var c = new Map(), d = r(b), e = d.next(); !e.done; e = d.next()) {
        let f = e.value;
        e = Z(f, 'NAME');
        const g = Z(f, 'VALUE');
        f = Z(f, 'IMPORT');
        e && g && c.set(e, g);
        f && (e = a.l.get(f)) && c.set(f, e);
      }

      return c;
    }

    function jq(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      return I((v) => {
        if (v.g == 1) {
          return c = Ip(b, 'SUBTITLES'), d = c.map((w) => {
            let x;
            let y;
            let E;
            return I((D) => {
              if (D.g == 1) {
                if (x = a.o.disableText) return D.return(null);
                A(D, 2);
                return u(D, mq(a, w), 4);
              }

              if (D.g != 2) return y = D.h, D.return(y.stream);
              E = C(D);
              if (a.o.hls.ignoreTextStreamFailures) return D.return(null);
              throw E;
            });
          }), u(v, Promise.all(d), 2);
        }
        e = v.h;
        f = r(c);

        for (g = f.next(); !g.done; g = f.next()) {
          if (h = g.value, k = Ep(h, 'GROUP-ID'), l = a.m.get(k)) {
            if (m = a.s.get(k)) {
              for (n = r(m), p = n.next(); !p.done; p = n.next()) t = p.value, t.stream.codecs = l;
            }
          }
        }

        return v.return(e.filter((w) => w));
      });
    }

    function kq(a, b) {
      let c;
      let d;
      return I((e) => {
        if (e.g == 1) {
          return c = b.map((f) => {
            let g;
            let h;
            let k;
            return I((l) => {
              if (l.g == 1) {
                if (g = a.o.disableThumbnails) return l.return(null);
                A(l, 2);
                return u(l, nq(a, f), 4);
              }

              if (l.g != 2) return h = l.h, l.return(h.stream);
              k = C(l);
              if (a.o.hls.ignoreImageStreamFailures) return l.return(null);
              throw k;
            });
          }), u(e, Promise.all(c), 2);
        }
        d = e.h;
        return e.return(d.filter((f) => f));
      });
    }

    function gq(a, b) {
      let c;
      return I((d) => {
        if (d.g == 1) {
          return b = b.filter((e) => {
            const f = Z(e, 'URI') || '';
            return Z(e, 'TYPE') != 'SUBTITLES' && f != '';
          }), b.length ? u(d, mq(a, b[0]), 2) : d.v(2);
        }
        c = b.slice(1).map((e) => mq(a, e));
        return u(d, Promise.all(c), 0);
      });
    }

    function iq(a, b) {
      let c;
      let d;
      let e;
      return I((f) => {
        if (f.g == 1) {
          return c = b.map((g) => {
            let h;
            let k;
            let l;
            let m;
            let n;
            let p;
            let t;
            let v;
            return I((w) => {
              if (w.g == 1) return h = Z(g, 'FRAME-RATE'), k = Number(Z(g, 'AVERAGE-BANDWIDTH')) || Number(Ep(g, 'BANDWIDTH')), l = Z(g, 'RESOLUTION'), m = r(l ? l.split('x') : [null, null]), n = m.next().value, p = m.next().value, t = Z(g, 'VIDEO-RANGE'), u(w, oq(a, g), 2);

              if (v = w.h) {
                for (var x = w.return, y = v.audio, E = v.video, D = r(E), B = D.next(); !B.done; B = D.next()) {
                  if (B = B.value.stream) {
                    B.width = Number(n) || void 0, B.height = Number(p) || void 0, B.frameRate = Number(h) || void 0, B.hdr = t || void 0;
                  }
                }

                D = a.o.disableAudio;
                if (!y.length || D) y = [null];
                D = a.o.disableVideo;
                if (!E.length || D) E = [null];
                D = [];
                y = r(y);

                for (B = y.next(); !B.done; B = y.next()) {
                  B = B.value;

                  for (let F = r(E), G = F.next(); !G.done; G = F.next()) {
                    let H = G.value;
                    G = B ? B.stream : null;
                    const L = H ? H.stream : null;
                    const J = B ? B.stream.drmInfos : null;
                    const K = H ? H.stream.drmInfos : null;
                    H = `${H ? H.Nc : ''} - ${B ? B.Nc : ''}`;
                    G && L && J.length && K.length && !(Zf(J, K).length > 0) || a.Fa.has(H) || (G = {
                      id: a.Ma++,
                      language: G ? G.language : 'und',
                      primary: !!G && G.primary || !!L && L.primary,
                      audio: G,
                      video: L,
                      bandwidth: k,
                      allowedByApplication: !0,
                      allowedByKeySystem: !0,
                      decodingInfos: [],
                    }, D.push(G), a.Fa.add(H));
                  }
                }

                w = x.call(w, D);
              } else w = w.return([]);

              return w;
            });
          }), u(f, Promise.all(c), 2);
        }

        d = f.h;
        e = d.reduce(Yb, []);
        e = e.filter((g) => g != null);
        return f.return(e);
      });
    }

    function oq(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      return I((x) => {
        if (x.g == 1) {
          return c = zc, d = fq(a, b), e = Z(b, 'AUDIO'), f = Z(b, 'VIDEO'), h = (g = e || f) && a.s.has(g) ? a.s.get(g) : [], k = {
            audio: e ? h : [],
            video: f ? h : [],
          }, m = !1, n = Ep(b, 'URI'), p = k.audio.find((y) => y && y.Nc == n), t = wc(c.Na, d), (v = wc(c.bb, d)) && !t ? l = c.bb : !h.length && v && t ? (l = c.Na, d = [[t, v].join()]) : k.audio.length && p ? (l = c.bb, m = !0) : l = k.video.length ? c.bb : c.Na, m ? x.v(2) : u(x, pq(a, b, d, l), 3);
        }
        x.g != 2 && (w = x.h);
        if (w) k[w.stream.type] = [w]; else if (w === null) return x.return(null);
        qq(k);
        return x.return(k);
      });
    }

    function fq(a, b) {
      let c = [];
      a.o.disableVideo || c.push('avc1.42E01E');
      a.o.disableAudio || c.push('mp4a.40.2');
      let d = Z(b, 'CODECS', c.join(',')).split(/\s*,\s*/);
      c = new Set();
      const e = [];
      d = r(d);

      for (let f = d.next(); !f.done; f = d.next()) {
        f = f.value;
        const g = Xc(f);
        c.has(g) || (e.push(f), c.add(g));
      }

      return e;
    }

    function hq(a) {
      a = Z(a, 'LANGUAGE') || 'und';
      return id(a);
    }

    function qq(a) {
      a = r(a.audio.concat(a.video));

      for (let b = a.next(); !b.done; b = a.next()) {
        if (b = b.value) {
          let c = b.stream.codecs.split(',');
          c = c.filter((d) => d != 'mp4a.40.34');
          b.stream.codecs = c.join(',');
        }
      }
    }

    function mq(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      return I((x) => {
        if (x.g == 1) {
          c = Ep(b, 'GROUP-ID');
          d = '';
          let y = Ep(b, 'TYPE').toLowerCase();
          y == 'subtitles' && (y = yc);
          e = y;
          e != yc && c && a.m.has(c) && (d = a.m.get(c));
          f = rq(Ep(b, 'URI'), a.l);
          if (a.g.has(f)) return x.return(a.g.get(f));
          g = hq(b);
          h = Z(b, 'NAME');
          k = b.getAttribute('DEFAULT');
          l = k == 'YES';
          e == 'audio' ? y = (y = Z(b, 'CHANNELS')) ? parseInt(y.split('/')[0], 10) : null : y = null;
          m = y;
          e == 'audio' ? y = (y = Z(b, 'CHANNELS')) ? y.includes('/JOC') : !1 : y = !1;
          n = y;
          p = Z(b, 'CHARACTERISTICS');
          t = Z(b, 'FORCED');
          v = t == 'YES';
          return u(x, sq(a, f, d, e, g, l, h, m, null, p, v, n), 2);
        }

        w = x.h;
        a.s.has(c) ? a.s.get(c).push(w) : a.s.set(c, [w]);
        if (w == null) return x.return(null);
        if (a.g.has(f)) return x.return(a.g.get(f));
        a.g.set(f, w);
        return x.return(w);
      });
    }

    function nq(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        if (k.g == 1) {
          c = rq(Ep(b, 'URI'), a.l);
          d = Z(b, 'CODECS', 'jpeg') || '';
          if (a.g.has(c)) return k.return(a.g.get(c));
          e = hq(b);
          f = Z(b, 'NAME');
          g = Z(b, 'CHARACTERISTICS');
          return u(k, sq(a, c, d, 'image', e, !1, f, null, null, g, !1, !1), 2);
        }

        h = k.h;
        if (h == null) return k.return(null);
        if (a.g.has(c)) return k.return(a.g.get(c));
        a.g.set(c, h);
        return k.return(h);
      });
    }

    function pq(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        if (k.g == 1) {
          e = rq(Ep(b, 'URI'), a.l);
          if (a.g.has(e)) return k.return(a.g.get(e));
          const l = Z(b, 'CLOSED-CAPTIONS');
          f = d == 'video' && l && l != 'NONE' ? a.J.get(l) : null;
          g = vc(d, c);
          return u(k, sq(a, e, g, d, 'und', !1, null, null, f, null, !1, !1), 2);
        }

        h = k.h;
        if (h == null) return k.return(null);
        if (a.g.has(e)) return k.return(a.g.get(e));
        a.g.set(e, h);
        return k.return(h);
      });
    }

    function sq(a, b, c, d, e, f, g, h, k, l, m, n) {
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      let X;
      let T;
      let N;
      let ea;
      let fa;
      let ya;
      let Ga;
      let sb;
      let Qa;
      let Da;
      let fc;
      let kb;
      let Pb;
      let nf;
      let db;
      let hd;
      let Hh;
      let qf;
      let Vm;
      let Wm;
      let Xm;
      let Ym;
      return I((eb) => {
        switch (eb.g) {
          case 1:
            return p = tc([a.L], [b])[0], u(eb, Zp(a, Ue([p], a.o.retryParameters), 0), 2);

          case 2:
            t = eb.h;
            p = t.uri;
            v = Qp(a.Y, t.data, p);
            if (v.type != 1) throw new O(2, 4, 4017);
            w = [];
            if (v.segments) for (x = r(v.segments), y = x.next(); !y.done; y = x.next()) E = y.value, D = Hp(E.U, 'EXT-X-KEY'), w.push.apply(w, ja(D));
            B = !1;
            F = [];
            G = new Set();
            H = r(w);

            for (L = H.next(); !L.done; L = H.next()) {
              if (J = L.value, K = Ep(J, 'METHOD'), K != 'NONE') {
                B = !0;
                if (K == 'AES-128') return a.Wa = !0, eb.return(null);
                R = Ep(J, 'KEYFORMAT');

                if (X = (S = tq[R]) ? S(J) : null) {
                  if (X.keyIds) for (T = r(X.keyIds), N = T.next(); !N.done; N = T.next()) ea = N.value, G.add(ea);
                  F.push(X);
                }
              }
            }

            if (B && !F.length) throw new O(2, 4, 4026);
            fa = Hp(v.U, 'EXT-X-DEFINE');
            ya = cq(a, fa);
            uq(a, v);
            return u(eb, vq(a, d, c, v, ya), 3);

          case 3:
            return Ga = eb.h, wq.includes(Ga) && (c = ''), sb = new Map(), Qa = new Map(), A(eb, 4), u(eb, dq(a, b, v, d, Ga, sb, ya, Qa), 6);

          case 6:
            Da = eb.h;
            va(eb, 5);
            break;

          case 4:
            fc = C(eb);
            if (fc.code == 4035) return Va('Skipping unsupported HLS stream', Ga, b), eb.return(null);
            throw fc;

          case 5:
            kb = Da[0].startTime;
            Pb = Da[Da.length - 1].endTime;
            nf = new V(Da);
            db = d == yc ? 'subtitle' : void 0;
            hd = [];
            if (l) for (Hh = r(l.split(',')), qf = Hh.next(); !qf.done; qf = Hh.next()) Vm = qf.value, hd.push(Vm);
            Xm = (Wm = Jp(v.U, 'EXT-X-SERVER-CONTROL')) ? Wm.getAttribute('CAN-SKIP-UNTIL') != null : !1;
            Ym = {
              id: a.Ma++,
              originalId: g,

              createSegmentIndex() {
                return Promise.resolve();
              },

              segmentIndex: nf,
              mimeType: Ga,
              codecs: c,
              kind: db,
              encrypted: B,
              drmInfos: F,
              keyIds: G,
              language: e,
              label: g,
              type: d,
              primary: f,
              trickModeVideo: null,
              emsgSchemeIdUris: null,
              frameRate: void 0,
              pixelAspectRatio: void 0,
              width: void 0,
              height: void 0,
              bandwidth: void 0,
              roles: hd,
              forced: m,
              channelsCount: h,
              audioSamplingRate: null,
              spatialAudio: n,
              closedCaptions: k,
              hdr: void 0,
              tilesLayout: void 0,
            };
            return eb.return({
              stream: Ym,
              Nc: b,
              Ce: p,
              je: kb,
              vf: Pb,
              wd: sb,
              Oe: Qa,
              He: Xm,
            });
        }
      });
    }

    function uq(a, b) {
      let c = Jp(b.U, 'EXT-X-PLAYLIST-TYPE');
      let d = Jp(b.U, 'EXT-X-ENDLIST');
      d = c && c.value == 'VOD' || d;
      c = c && c.value == 'EVENT' && !d;
      c = !d && !c;
      if (d) eq(a, Yp); else {
        c ? eq(a, xq) : eq(a, yq);
        d = Jp(b.U, 'EXT-X-TARGETDURATION');
        if (!d) throw new O(2, 4, 4024, 'EXT-X-TARGETDURATION');
        d = Number(d.value);
        c = Jp(b.U, 'EXT-X-PART-INF');
        a.i && c ? (a.Xa = Number(Ep(c, 'PART-TARGET')), a.F = Math.min(a.Xa, a.F), c = Jp(b.U, 'EXT-X-SERVER-CONTROL'), a.T = c ? Number(Ep(c, 'PART-HOLD-BACK')) : 0) : a.F = Math.min(d, a.F);
        a.pa = Math.max(d, a.pa);
      }
    }

    function zq(a, b, c, d) {
      c = Jp(c, 'EXT-X-MAP');
      if (!c) return null;
      const e = Ep(c, 'URI');
      d = rq(tc([b], [e])[0], d);
      b = [d, Z(c, 'BYTERANGE', '')].join('-');
      a.da.has(b) || (c = Aq(d, c), a.da.set(b, c));
      return a.da.get(b);
    }

    function Aq(a, b) {
      let c = 0;
      let d = null;
      const e = Z(b, 'BYTERANGE');
      e && (c = e.split('@'), d = Number(c[0]), c = Number(c[1]), d = c + d - 1);
      return new ji(() => [a], c, d);
    }

    function Bq(a, b, c, d, e, f, g, h, k) {
      const l = d.U;
      const m = rq(d.g, g);
      const n = Jp(l, 'EXTINF');
      let p = g = 0;
      let t = null;
      const v = [];

      if (a.i && d.h.length) {
        a = {};
        d = r(lb(d.h));

        for (let w = d.next(); !w.done; a = {
          Wc: a.Wc,
        }, w = d.next()) {
          w = w.value;
          let x = w.ha;
          w = w.item;
          let y = x == 0 ? c : v[v.length - 1];
          x = x == 0 ? e : y.endTime;
          let E = Number(Z(w, 'DURATION'));
          E = x + E;
          let D = 0;
          let B = null;
          w.name == 'EXT-X-PRELOAD-HINT' ? D = (y = Z(w, 'BYTERANGE-START')) ? Number(y) : 0 : (D = Z(w, 'BYTERANGE'), y = r(Cq(y, D)), D = y.next().value, B = y.next().value);
          w = Z(w, 'URI');
          a.Wc = tc([h], [w])[0];
          v.push(new li(x, E, (function (F) {
            return function () {
              return [F.Wc];
            };
          }(a)), D, B, b, f, 0, Infinity));
        }
      } else if (!n) throw new O(2, 4, 4024, 'EXTINF');

      n ? g = e + Number(n.value.split(',')[0]) : g = v[v.length - 1].endTime;
      (h = Jp(l, 'EXT-X-BYTERANGE')) ? (t = r(Cq(c, h.value)), p = t.next().value, t = t.next().value) : v.length && (p = v[0].ja, t = v[v.length - 1].ea);
      c = '';
      k == 'image' && (c = '1x1', (k = Jp(l, 'EXT-X-TILES')) && (c = Ep(k, 'LAYOUT')));
      return new li(e, g, () => (m.length ? [m] : []), p, t, b, f, 0, Infinity, v, c);
    }

    function Cq(a, b) {
      let c = 0;
      let d = null;
      b && (c = b.split('@'), d = Number(c[0]), c = c[1] ? Number(c[1]) : a.ea + 1, d = c + d - 1);
      return [c, d];
    }

    function lq(a) {
      if (a.h) {
        for (let b = r(a.qa), c = b.next(); !c.done; c = b.next()) a.h.Cb(c.value);

        a.qa = [];
      }
    }

    function dq(a, b, c, d, e, f, g, h) {
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      let X;
      let T;
      let N;
      let ea;
      return I((fa) => {
        switch (fa.g) {
          case 1:
            k = c.segments;
            m = Kp(c.U, 'EXT-X-MEDIA-SEQUENCE', 0);
            p = (n = Jp(c.U, 'EXT-X-SKIP')) ? Number(Z(n, 'SKIPPED-SEGMENTS')) : 0;
            t = m + p;

            if (a.j != Yp && f.has(t)) {
              v = f.get(t);
              fa.v(2);
              break;
            }

            if (a.N != null) {
              fa.v(3);
              break;
            }

            l = zq(a, c.g, k[0].U, g);
            w = a;
            return u(fa, Dq(a, b, l, e, t, !1, k[0], g, d), 4);

          case 4:
            w.N = fa.h;

          case 3:
            v = a.N;

          case 2:
            x = k[0].g;
            Za(x.split('/').pop());
            y = Kp(c.U, 'EXT-X-DISCONTINUITY-SEQUENCE');
            if (a.i && (h.has(y) || h.set(y, t), p)) for (; h.has(y + 1) && h.get(y + 1) < t;) y++;
            E = a.H.get(y) || 0;
            D = [];

            B = function (ya) {
              return lb(ya);
            };

            F = r(B(k));
            G = F.next();

          case 5:
            if (G.done) {
              fa.v(7);
              break;
            }

            L = H = G.value;
            J = L.ha;
            K = L.item;
            R = D[D.length - 1];
            S = J == 0 ? v : R.endTime;
            t = m + p + J;
            f.set(t, S);
            l = zq(a, c.g, K.U, g);
            X = Jp(K.U, 'EXT-X-DISCONTINUITY');

            if (!X) {
              fa.v(8);
              break;
            }

            y++;
            h.set(y, t);
            return u(fa, Eq(a, y, b, l, e, t, K, g, S, d), 9);

          case 9:
            E = fa.h;

          case 8:
            !a.i && (T = a.C.isAutoLowLatencyMode()) && (a.C.enableLowLatencyMode(), a.i = a.C.isLowLatencyMode());
            N = Jp(K.U, 'EXTINF');
            a.i || N ? (ea = Bq(a, l, R, K, S, E, g, c.g, d), D.push(ea)) : a.i || Va('Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.');
            G = F.next();
            fa.v(5);
            break;

          case 7:
            return a.qa.push(D), lq(a), fa.return(D);
        }
      });
    }

    function Eq(a, b, c, d, e, f, g, h, k, l) {
      let m;
      let n;
      return I((p) => {
        if (p.g == 1) return m = 0, a.H.has(b) ? (m = a.H.get(b), p.v(2)) : u(p, Dq(a, c, d, e, f, !0, g, h, l), 3);
        p.g != 2 && (n = p.h, m = k - n, a.H.set(b, m));
        return p.return(m);
      });
    }

    function Fq(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        switch (k.g) {
          case 1:
            c = $e;
            d = Wi(b.ma(), b.ja, b.ea, a.o.retryParameters);
            if (a.o.hls.useFullSegmentsForStartTime) return k.return(Zp(a, d, c));
            e = Wi(b.ma(), b.ja, b.ja + 2048 - 1, a.o.retryParameters);
            A(k, 2);
            return u(k, Zp(a, e, c), 4);

          case 4:
            return f = k.h, k.return(f);

          case 2:
            g = C(k);
            if (g.code == 7001) throw g;
            Va('Unable to fetch the starting part of HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.', e.uris[0]);
            return u(k, Zp(a, d, c), 5);

          case 5:
            return h = k.h, k.return(h);
        }
      });
    }

    function Dq(a, b, c, d, e, f, g, h, k) {
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      return I((y) => {
        switch (y.g) {
          case 1:
            l = Bq(a, c, null, g, 0, 0, h, '', k);
            if (a.B && !f && (m = a.g.get(b), n = m.wd.get(e), void 0 != n)) return y.return(n);
            d = d.toLowerCase();
            if (wq.includes(d)) throw Va(`Raw formats are not yet supported.  Skipping ${d}`), new O(1, 4, 4035);
            if (d == 'video/webm') throw Va('WebM in HLS is not yet supported.  Skipping.'), new O(1, 4, 4035);

            if (d != 'video/mp4' && d != 'audio/mp4') {
              y.v(2);
              break;
            }

            p = [Fq(a, l)];
            c && p.push(Fq(a, c));
            return u(y, Promise.all(p), 3);

          case 3:
            return t = y.h, v = t[0], w = t[1] || t[0], y.return(Gq(b, v.uri, v.data, w.data));

          case 2:
            if (d != 'video/mp2t') {
              y.v(4);
              break;
            }

            return u(y, Fq(a, l), 5);

          case 5:
            return x = y.h, y.return(Hq(b, x.uri, x.data));

          case 4:
            throw new O(2, 4, 4030, b);
        }
      });
    }

    function Gq(a, b, c, d) {
      let e = 0;
      new jg().box('moov', ng).box('trak', ng).box('mdia', ng)
        .V('mdhd', (h) => {
          e = Eh(h.reader, h.version).timescale;
          h.parser.stop();
        })
        .parse(d, !0);
      if (!e) throw new O(2, 4, 4030, a, b);
      let f = 0;
      let g = !1;
      new jg().box('moof', ng).box('traf', ng).V('tfdt', (h) => {
        f = Dh(h.reader, h.version).hd / e;
        g = !0;
        h.parser.stop();
      })
        .parse(c, !0);
      if (!g) throw new O(2, 4, 4030, a, b);
      return f;
    }

    function Hq(a, b, c) {
      function d() {
        f.seek(g + 188);
        h = f.$();
        h != 71 && (f.seek(g + 192), h = f.$());
        h != 71 && (f.seek(g + 204), h = f.$());
        h != 71 && e();
        f.oe(1);
      }

      function e() {
        throw new O(2, 4, 4030, a, b);
      }

      for (var f = new gg(c, 0), g = 0, h = 0; ;) {
        if (g = f.Z(), h = f.$(), h != 71 && e(), c = f.Fb(), (c & 8191) == 8191) d(); else if (c & 16384) {
          if (c = (f.$() & 48) >> 4, c != 0 && c != 2 || e(), c == 3 && (c = f.$(), f.skip(c)), f.M() >> 8 != 1) d(); else {
            f.skip(3);
            c = f.$() >> 6;
            c != 0 && c != 1 || e();
            f.$() == 0 && e();
            c = f.$();
            const k = f.Fb();
            const l = f.Fb();
            return (1073741824 * ((c & 14) >> 1) + ((k & 65534) << 14 | (l & 65534) >> 1)) / 9E4;
          }
        } else d();
      }
    }

    function rq(a, b) {
      let c = String(a).replace(/%7B/g, '{').replace(/%7D/g, '}');
      let d = c.match(/{\$\w*}/g);

      if (d) {
        d = r(d);

        for (let e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          const f = e.slice(2, e.length - 1);
          const g = b.get(f);
          if (g) c = c.replace(e, g); else throw new O(2, 4, 4039, f);
        }
      }

      return c;
    }

    function vq(a, b, c, d, e) {
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      return I((x) => {
        if (x.g == 1) {
          f = zc;
          g = $e;
          h = rq(d.segments[0].g, e);
          k = new gc(h);
          l = k.xa.split('.').pop();
          m = Iq[b];
          if (n = m[l]) return x.return(n);
          if (b == f.aa) return c && c != 'vtt' && c != 'wvtt' ? x.return('application/mp4') : x.return('text/vtt');
          if (b == f.Mb && (!c || c == 'jpeg')) return x.return('image/jpeg');
          p = Ue([h], a.o.retryParameters);
          p.method = 'HEAD';
          return u(x, Zp(a, p, g), 2);
        }

        t = x.h;
        v = t.headers['content-type'];
        return v ? x.return(v.split(';')[0]) : (w = m.mp4, x.return(w));
      });
    }

    q.Zb = function () {
      const a = this;
      let b;
      let c;
      return I((d) => {
        if (d.g == 1) {
          if (!a.C) return d.return();
          A(d, 2);
          return u(d, a.update(), 4);
        }

        if (d.g != 2) return b = a.Ea, a.u.S(b), va(d, 0);
        c = C(d);
        if (!a.C) return d.return();
        c.severity = 1;
        a.C.onError(c);
        a.u.S(0.1);
        z(d);
      });
    };

    function eq(a, b) {
      a.j = b;
      a.h && a.h.ec(a.j == Yp);
      a.j != Yp || a.u.stop();
    }

    function Zp(a, b, c) {
      if (!a.D) throw new O(2, 7, 7001);
      b = a.C.networkingEngine.request(c, b);
      Pe(a.D, b);
      return b.promise;
    }

    M('shaka.hls.HlsParser', Xp);
    var wq = ['audio/aac', 'audio/ac3', 'audio/ec3', 'audio/mpeg'];
    var Iq = {
      audio: {
        mp4: 'audio/mp4',
        mp4a: 'audio/mp4',
        m4s: 'audio/mp4',
        m4i: 'audio/mp4',
        m4a: 'audio/mp4',
        m4f: 'audio/mp4',
        cmfa: 'audio/mp4',
        ts: 'video/mp2t',
        aac: 'audio/aac',
        ac3: 'audio/ac3',
        ec3: 'audio/ec3',
        mp3: 'audio/mpeg',
      },
      video: {
        mp4: 'video/mp4',
        mp4v: 'video/mp4',
        m4s: 'video/mp4',
        m4i: 'video/mp4',
        m4v: 'video/mp4',
        m4f: 'video/mp4',
        cmfv: 'video/mp4',
        ts: 'video/mp2t',
      },
      text: {
        mp4: 'application/mp4',
        m4s: 'application/mp4',
        m4i: 'application/mp4',
        m4f: 'application/mp4',
        cmft: 'application/mp4',
        vtt: 'text/vtt',
        ttml: 'application/ttml+xml',
      },
      image: {
        jpg: 'image/jpeg',
        png: 'image/png',
        svg: 'image/svg+xml',
        webp: 'image/webp',
        avif: 'image/avif',
      },
    };
    var tq = {
      'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': function (a) {
        let b = Ep(a, 'METHOD');
        if (!['SAMPLE-AES', 'SAMPLE-AES-CTR'].includes(b)) return null;
        b = Ep(a, 'URI');
        b = Wp(b);
        b = Ob(b.data);
        b = uc('com.widevine.alpha', [{
          initDataType: 'cenc',
          initData: b,
        }]);
        if (a = Z(a, 'KEYID')) b.keyIds = new Set([a.toLowerCase().substr(2)]);
        return b;
      },
      'com.microsoft.playready': function (a) {
        let b = Ep(a, 'METHOD');
        if (!['SAMPLE-AES', 'SAMPLE-AES-CTR'].includes(b)) return null;
        a = Ep(a, 'URI');
        a = Wp(a);
        a = Ob(a.data);
        b = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
        a = tn(a, b);
        return uc('com.microsoft.playready', [{
          initDataType: 'cenc',
          initData: a,
        }]);
      },
    };
    var Yp = 'VOD';
    var yq = 'EVENT';
    var xq = 'LIVE';
    var bq = {
      Be: Yp,
      eg: yq,
      Ae: xq,
    };

    eg.m3u8 = function () {
      return new Xp();
    };

    cg['application/x-mpegurl'] = function () {
      return new Xp();
    };

    cg['application/vnd.apple.mpegurl'] = function () {
      return new Xp();
    };

    function Jq(a, b, c, d, e, f) {
      if (c >= 200 && c <= 299 && c != 202) {
        return {
          uri: e || d,
          le: d,
          data: b,
          headers: a,
          fromCache: !!a['x-shaka-from-cache'],
        };
      }

      e = null;

      try {
        e = Gc(b);
      } catch (g) {}

      throw new O(c == 401 || c == 403 ? 2 : 1, 1, 1001, d, c, e, a, f);
    }

    function Kq() {}

    function Lq(a, b, c, d) {
      const e = new Mq();
      lf(b.headers).forEach((k, l) => {
        e.append(l, k);
      });
      const f = new Nq();
      const g = {
        Vd: !1,
        xe: !1,
      };
      a = Oq(a, c, {
        body: b.body || void 0,
        headers: e,
        method: b.method,
        signal: f.signal,
        credentials: b.allowCrossSiteCredentials ? 'include' : void 0,
      }, g, d, b.streamDataCallback);
      a = new Ee(a, () => {
        g.Vd = !0;
        f.abort();
        return Promise.resolve();
      });

      if (b = b.retryParameters.timeout) {
        const h = new P(() => {
          g.xe = !0;
          f.abort();
        });
        h.S(b / 1E3);
        a.finally(() => {
          h.stop();
        });
      }

      return a;
    }

    function Oq(a, b, c, d, e, f) {
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      return I((B) => {
        switch (B.g) {
          case 1:
            return g = Pq, h = Qq, n = m = 0, p = Date.now(), A(B, 2), u(B, g(a, c), 4);

          case 4:
            return k = B.h, t = k.clone().body.getReader(), w = (v = k.headers.get('Content-Length')) ? parseInt(v, 10) : 0, x = function (F) {
              function G() {
                let H;
                let L;
                return I((J) => {
                  switch (J.g) {
                    case 1:
                      return A(J, 2), u(J, t.read(), 4);

                    case 4:
                      H = J.h;
                      va(J, 3);
                      break;

                    case 2:
                      return C(J), J.return();

                    case 3:
                      if (H.done) {
                        J.v(5);
                        break;
                      }

                      m += H.value.byteLength;

                      if (!f) {
                        J.v(5);
                        break;
                      }

                      return u(J, f(H.value), 5);

                    case 5:
                      L = Date.now();
                      if (L - p > 100 || H.done) e(L - p, m - n, w - m), n = m, p = L;
                      H.done ? F.close() : (F.enqueue(H.value), G());
                      z(J);
                  }
                });
              }

              G();
            }, new h({
              start: x,
            }), u(B, k.arrayBuffer(), 5);

          case 5:
            l = B.h;
            va(B, 3);
            break;

          case 2:
            y = C(B);
            if (d.Vd) throw new O(1, 1, 7001, a, b);
            if (d.xe) throw new O(1, 1, 1003, a, b);
            throw new O(1, 1, 1002, a, y, b);

          case 3:
            return E = {}, D = k.headers, D.forEach((F, G) => {
              E[G.trim()] = F;
            }), B.return(Jq(E, l, k.status, a, k.url, b));
        }
      });
    }

    function Rq() {
      if (window.ReadableStream) {
        try {
          new ReadableStream({});
        } catch (a) {
          return !1;
        }
      } else return !1;
      return !(!window.fetch || !window.AbortController);
    }

    M('shaka.net.HttpFetchPlugin', Kq);
    Kq.isSupported = Rq;
    Kq.parse = Lq;
    var Pq = window.fetch;
    var Nq = window.AbortController;
    var Qq = window.ReadableStream;
    var Mq = window.Headers;
    Rq() && (Re('http', Lq, 2, !0), Re('https', Lq, 2, !0));

    function Sq() {}

    function Tq(a, b, c, d) {
      const e = new Uq();
      let f = Date.now();
      let g = 0;
      const h = new Promise((k, l) => {
        e.open(b.method, a, !0);
        e.responseType = 'arraybuffer';
        e.timeout = b.retryParameters.timeout;
        e.withCredentials = b.allowCrossSiteCredentials;

        e.onabort = function () {
          l(new O(1, 1, 7001, a, c));
        };

        e.onload = function (n) {
          n = n.target;
          let p = n.getAllResponseHeaders().trim().split('\r\n');
          const t = {};
          p = r(p);

          for (let v = p.next(); !v.done; v = p.next()) v = v.value.split(': '), t[v[0].toLowerCase()] = v.slice(1).join(': ');

          try {
            const w = Jq(t, n.response, n.status, a, n.responseURL, c);
            k(w);
          } catch (x) {
            l(x);
          }
        };

        e.onerror = function (n) {
          l(new O(1, 1, 1002, a, n, c));
        };

        e.ontimeout = function () {
          l(new O(1, 1, 1003, a, c));
        };

        e.onprogress = function (n) {
          const p = Date.now();
          if (p - f > 100 || n.lengthComputable && n.loaded == n.total) d(p - f, n.loaded - g, n.total - n.loaded), g = n.loaded, f = p;
        };

        for (const m in b.headers) e.setRequestHeader(m.toLowerCase(), b.headers[m]);

        e.send(b.body);
      });
      return new Ee(h, () => {
        e.abort();
        return Promise.resolve();
      });
    }

    M('shaka.net.HttpXHRPlugin', Sq);
    Sq.parse = Tq;
    var Uq = window.XMLHttpRequest;
    Re('http', Tq, 1, !0);
    Re('https', Tq, 1, !0);

    function Vq() {
      this.h = this.j = this.i = 0;
      this.g = new Map();
      this.l = 0;
    }

    function Wq(a, b) {
      a.i += b;
      const c = a.l;
      a.l++;
      a.g.set(c, b);
      return c;
    }

    Vq.prototype.close = function (a, b) {
      if (this.g.has(a)) {
        const c = this.g.get(a);
        this.g.delete(a);
        this.j += c;
        this.h += b;
      }
    };

    function Xq(a) {
      const b = this;
      this.O = a;
      this.g = new Map();
      this.I = new af(() => {
        const c = Array.from(b.g.values());
        return Promise.all(c.map((d) => d.catch(() => {})));
      });
      this.h = [];

      this.ie = function () {};

      this.he = function () {};

      this.Ob = new Vq();
    }

    Xq.prototype.destroy = function () {
      return this.I.destroy();
    };

    function Yq(a, b, c) {
      a.ie = b;
      a.he = c;
    }

    function Zq(a) {
      const b = a.h.map((c) => c());
      a.h = [];
      return Promise.all(b);
    }

    function $q(a, b, c, d, e, f) {
      bf(a.I);
      const g = Wq(a.Ob, d);
      d = (a.g.get(b) || Promise.resolve()).then(() => {
        let h;
        let k;
        let l;
        let m;
        let n;
        let p;
        let t;
        return I((v) => {
          if (v.g == 1) return u(v, ar(a, c), 2);
          h = v.h;
          if (a.I.g) throw new O(2, 9, 7001);
          if (e) for (m in k = Ob(h), l = new sn(k), l.data) n = Number(m), p = l.data[n], t = l.g[n], a.he(p, t);
          a.Ob.close(g, h.byteLength);
          const w = a.Ob;
          a.ie(w.i == 0 ? 0 : w.j / w.i, a.Ob.h);
          return v.return(f(h));
        });
      });
      a.g.set(b, d);
      return d;
    }

    function br(a, b, c) {
      bf(a.I);
      const d = (a.g.get(b) || Promise.resolve()).then(() => I((e) => u(e, c(), 0)));
      a.g.set(b, d);
    }

    function cr(a) {
      return I((b) => (b.g == 1 ? u(b, Promise.all(a.g.values()), 2) : b.return(a.Ob.h)));
    }

    function ar(a, b) {
      let c;
      let d;
      let e;
      let f;
      return I((g) => {
        if (g.g == 1) {
          return c = $e, d = a.O.request(c, b), e = function () {
            return d.abort();
          }, a.h.push(e), u(g, d.promise, 2);
        }
        f = g.h;
        nb(a.h, e);
        return g.return(f.data);
      });
    }

    function dr(a, b) {
      const c = this;
      this.i = a;
      this.h = a.objectStore(b);
      this.g = new Ac();

      a.onabort = function (d) {
        d.preventDefault();
        c.g.reject();
      };

      a.onerror = function (d) {
        d.preventDefault();
        c.g.reject();
      };

      a.oncomplete = function () {
        c.g.resolve();
      };
    }

    dr.prototype.abort = function () {
      const a = this;
      return I((b) => {
        if (b.g == 1) {
          try {
            a.i.abort();
          } catch (c) {}

          A(b, 2);
          return u(b, a.g, 4);
        }

        if (b.g != 2) return va(b, 0);
        C(b);
        z(b);
      });
    };

    function er(a, b) {
      return new Promise((c, d) => {
        const e = a.h.openCursor();
        e.onerror = d;

        e.onsuccess = function () {
          let f;
          return I((g) => {
            if (g.g == 1) {
              if (e.result == null) return c(), g.return();
              f = e.result;
              return u(g, b(f.key, f.value, f), 2);
            }

            f.continue();
            z(g);
          });
        };
      });
    }

    dr.prototype.store = function () {
      return this.h;
    };

    dr.prototype.promise = function () {
      return this.g;
    };

    function fr(a) {
      this.h = a;
      this.g = [];
    }

    fr.prototype.destroy = function () {
      return Promise.all(this.g.map((a) => a.abort()));
    };

    function gr(a, b) {
      return hr(a, b, 'readwrite');
    }

    function hr(a, b, c) {
      c = a.h.transaction([b], c);
      const d = new dr(c, b);
      a.g.push(d);
      d.promise().then(() => {
        nb(a.g, d);
      }, () => {
        nb(a.g, d);
      });
      return d;
    }

    function ir(a, b, c) {
      this.g = new fr(a);
      this.i = b;
      this.h = c;
    }

    q = ir.prototype;

    q.destroy = function () {
      return this.g.destroy();
    };

    q.hasFixedKeySpace = function () {
      return !0;
    };

    q.addSegments = function () {
      return jr(this.i);
    };

    q.removeSegments = function (a, b) {
      return kr(this, this.i, a, b);
    };

    q.getSegments = function (a) {
      const b = this;
      let c;
      return I((d) => {
        if (d.g == 1) return u(d, lr(b, b.i, a), 2);
        c = d.h;
        return d.return(c.map((e) => b.Wd(e)));
      });
    };

    q.addManifests = function () {
      return jr(this.h);
    };

    q.updateManifestExpiration = function (a, b) {
      const c = gr(this.g, this.h);
      const d = c.store();

      d.get(a).onsuccess = function (e) {
        if (e = e.target.result) e.expiration = b, d.put(e, a);
      };

      return c.promise();
    };

    q.removeManifests = function (a, b) {
      return kr(this, this.h, a, b);
    };

    q.getManifests = function (a) {
      const b = this;
      let c;
      return I((d) => {
        if (d.g == 1) return u(d, lr(b, b.h, a), 2);
        c = d.h;
        return d.return(Promise.all(c.map((e) => b.Rb(e))));
      });
    };

    q.getAllManifests = function () {
      const a = this;
      let b;
      let c;
      return I((d) => (d.g == 1 ? (b = hr(a.g, a.h, 'readonly'), c = new Map(), u(d, er(b, (e, f) => {
        let g;
        return I((h) => {
          if (h.g == 1) return u(h, a.Rb(f), 2);
          g = h.h;
          c.set(e, g);
          z(h);
        });
      }), 2)) : d.g != 3 ? u(d, b.promise(), 3) : d.return(c)));
    };

    q.Wd = function (a) {
      return a;
    };

    q.Rb = function (a) {
      return Promise.resolve(a);
    };

    function jr(a) {
      return Promise.reject(new O(2, 9, 9011, `Cannot add new value to ${a}`));
    }

    q.add = function (a, b) {
      const c = this;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        if (m.g == 1) {
          d = gr(c.g, a);
          e = d.store();
          f = [];
          g = {};
          h = r(b);

          for (k = h.next(); !k.done; g = {
            lc: g.lc,
          }, k = h.next()) {
            l = k.value, g.lc = e.add(l), g.lc.onsuccess = (function (n) {
              return function () {
                f.push(n.lc.result);
              };
            }(g));
          }

          return u(m, d.promise(), 2);
        }

        return m.return(f);
      });
    };

    function kr(a, b, c, d) {
      a = gr(a.g, b);
      b = a.store();
      let e = {};
      c = r(c);

      for (let f = c.next(); !f.done; e = {
        kc: e.kc,
      }, f = c.next()) {
        e.kc = f.value, b.delete(e.kc).onsuccess = (function (g) {
          return function () {
            return d(g.kc);
          };
        }(e));
      }

      return a.promise();
    }

    function lr(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        if (m.g == 1) {
          d = hr(a.g, b, 'readonly');
          e = d.store();
          f = {};
          g = [];
          h = {};
          k = r(c);

          for (l = k.next(); !l.done; h = {
            Lb: h.Lb,
            Jb: h.Jb,
          }, l = k.next()) {
            h.Jb = l.value, h.Lb = e.get(h.Jb), h.Lb.onsuccess = (function (n) {
              return function () {
                void 0 == n.Lb.result && g.push(n.Jb);
                f[n.Jb] = n.Lb.result;
              };
            }(h));
          }

          return u(m, d.promise(), 2);
        }

        if (g.length) throw new O(2, 9, 9012, `Could not find values for ${g}`);
        return m.return(c.map((n) => f[n]));
      });
    }

    function mr(a) {
      this.g = new fr(a);
    }

    mr.prototype.destroy = function () {
      return this.g.destroy();
    };

    mr.prototype.getAll = function () {
      const a = this;
      let b;
      let c;
      return I((d) => (d.g == 1 ? (b = hr(a.g, 'session-ids', 'readonly'), c = [], u(d, er(b, (e, f) => {
        c.push(f);
      }), 2)) : d.g != 3 ? u(d, b.promise(), 3) : d.return(c)));
    };

    mr.prototype.add = function (a) {
      const b = gr(this.g, 'session-ids');
      const c = b.store();
      a = r(a);

      for (let d = a.next(); !d.done; d = a.next()) c.add(d.value);

      return b.promise();
    };

    mr.prototype.remove = function (a) {
      const b = this;
      let c;
      return I((d) => (d.g == 1 ? (c = gr(b.g, 'session-ids'), u(d, er(c, (e, f, g) => {
        a.includes(f.sessionId) && g.delete();
      }), 2)) : u(d, c.promise(), 0)));
    };

    function nr() {
      this.g = new Map();
    }

    nr.prototype.destroy = function () {
      for (var a = [], b = r(this.g.values()), c = b.next(); !c.done; c = b.next()) a.push(c.value.destroy());

      this.g.clear();
      return Promise.all(a);
    };

    nr.prototype.init = function () {
      const a = this;
      or.forEach((e, f) => {
        const g = e();
        g && a.g.set(f, g);
      });

      for (var b = [], c = r(this.g.values()), d = c.next(); !d.done; d = c.next()) b.push(d.value.init());

      return Promise.all(b);
    };

    function pr(a) {
      let b = null;
      a.g.forEach((c, d) => {
        c.getCells().forEach((e, f) => {
          e.hasFixedKeySpace() || b || (b = {
            path: {
              Ia: d,
              la: f,
            },
            la: e,
          });
        });
      });
      if (b) return b;
      throw new O(2, 9, 9013, 'Could not find a cell that supports add-operations');
    }

    function qr(a, b) {
      a.g.forEach((c, d) => {
        c.getCells().forEach((e, f) => {
          b({
            Ia: d,
            la: f,
          }, e);
        });
      });
    }

    function rr(a, b, c) {
      a = a.g.get(b);
      if (!a) throw new O(2, 9, 9013, `Could not find mechanism with name ${b}`);
      b = a.getCells().get(c);
      if (!b) throw new O(2, 9, 9013, `Could not find cell with name ${c}`);
      return b;
    }

    function sr(a, b) {
      a.g.forEach((c) => {
        b(c.getEmeSessionCell());
      });
    }

    function tr(a) {
      const b = Array.from(a.g.keys());
      if (!b.length) throw new O(2, 9, 9E3, 'No supported storage mechanisms found');
      return a.g.get(b[0]).getEmeSessionCell();
    }

    function ur(a) {
      let b;
      let c;
      let d;
      return I((e) => (e.g == 1 ? (b = Array.from(a.g.values()), c = b.length > 0, c || (d = or, d.forEach((f) => {
        (f = f()) && b.push(f);
      })), u(e, Promise.all(b.map((f) => f.erase())), 2)) : c ? e.v(0) : u(e, Promise.all(b.map((f) => f.destroy())), 0)));
    }

    function vr(a, b) {
      or.set(a, b);
    }

    M('shaka.offline.StorageMuxer', nr);

    nr.unregister = function (a) {
      or.delete(a);
    };

    nr.register = vr;
    nr.prototype.destroy = nr.prototype.destroy;
    var or = new Map();

    function wr() {
      ir.apply(this, arguments);
    }

    qa(wr, ir);

    wr.prototype.updateManifestExpiration = function (a, b) {
      const c = this;
      let d;
      let e;
      let f;
      return I((g) => {
        d = gr(c.g, c.h);
        e = d.store();
        f = new Ac();

        e.get(a).onsuccess = function (h) {
          (h = h.target.result) ? (h.expiration = b, e.put(h), f.resolve()) : f.reject(new O(2, 9, 9012, `Could not find values for ${a}`));
        };

        return u(g, Promise.all([d.promise(), f]), 0);
      });
    };

    wr.prototype.Rb = function (a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) {
          b = [];

          for (c = 0; c < a.periods.length; ++c) d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime, e = d - a.periods[c].startTime, f = xr(a.periods[c], e), b.push(f);

          return u(h, Ro(b), 2);
        }

        g = h.h;
        return h.return({
          creationTime: 0,
          originalManifestUri: a.originalManifestUri,
          duration: a.duration,
          size: a.size,
          expiration: a.expiration == null ? Infinity : a.expiration,
          streams: g,
          sessionIds: a.sessionIds,
          drmInfo: a.drmInfo,
          appMetadata: a.appMetadata,
        });
      });
    };

    function xr(a, b) {
      yr(a);

      for (let c = r(a.streams), d = c.next(); !d.done; d = c.next());

      return a.streams.map((e) => zr(e, a.startTime, b));
    }

    function zr(a, b, c) {
      const d = a.initSegmentUri ? Ar(a.initSegmentUri) : null;
      const e = b + a.presentationTimeOffset;
      const f = b + c;
      return {
        id: a.id,
        originalId: null,
        primary: a.primary,
        type: a.contentType,
        mimeType: a.mimeType,
        codecs: a.codecs,
        frameRate: a.frameRate,
        pixelAspectRatio: void 0,
        hdr: void 0,
        kind: a.kind,
        language: a.language,
        label: a.label,
        width: a.width,
        height: a.height,
        initSegmentKey: d,
        encrypted: a.encrypted,
        keyIds: new Set([a.keyId]),
        segments: a.segments.map((g) => {
          const h = Ar(g.uri);
          return {
            startTime: b + g.startTime,
            endTime: b + g.endTime,
            dataKey: h,
            initSegmentKey: d,
            appendWindowStart: b,
            appendWindowEnd: f,
            timestampOffset: e,
            tilesLayout: '',
          };
        }),
        variantIds: a.variantIds,
        roles: [],
        forced: !1,
        audioSamplingRate: null,
        channelsCount: null,
        spatialAudio: !1,
        closedCaptions: null,
        tilesLayout: void 0,
      };
    }

    wr.prototype.Wd = function (a) {
      return {
        data: a.data,
      };
    };

    function Ar(a) {
      let b;
      if ((b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) || (b = /^offline:segment\/([0-9]+)$/.exec(a))) return Number(b[1]);
      throw new O(2, 9, 9004, `Could not parse uri ${a}`);
    }

    function yr(a) {
      let b = a.streams.filter((h) => h.contentType == 'audio');
      a = a.streams.filter((h) => h.contentType == 'video');

      if (!b.every((h) => h.variantIds) || !a.every((h) => h.variantIds)) {
        for (var c = r(b), d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];

        c = r(a);

        for (d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];

        c = 0;

        if (a.length && !b.length) {
          var e = c++;
          var f = r(a);

          for (d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e);
        }

        if (!a.length && b.length) {
          for (e = c++, f = r(b), d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e);
        }

        if (a.length && b.length) {
          for (b = r(b), d = b.next(); !d.done; d = b.next()) {
            for (d = d.value, e = r(a), f = e.next(); !f.done; f = e.next()) {
              f = f.value;
              const g = c++;
              d.variantIds.push(g);
              f.variantIds.push(g);
            }
          }
        }
      }
    }

    function Br() {
      ir.apply(this, arguments);
    }

    qa(Br, ir);

    Br.prototype.Rb = function (a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) {
          b = [];

          for (c = 0; c < a.periods.length; ++c) {
            d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime;
            e = d - a.periods[c].startTime;

            for (var k = a.periods[c], l = [], m = r(k.streams), n = m.next(); !n.done; n = m.next()) n = n.value, n.variantIds.length != 0 && l.push(Cr(n, k.startTime, k.startTime + e));

            f = l;
            b.push(f);
          }

          return u(h, Ro(b), 2);
        }

        g = h.h;
        return h.return({
          appMetadata: a.appMetadata,
          creationTime: 0,
          drmInfo: a.drmInfo,
          duration: a.duration,
          expiration: a.expiration == null ? Infinity : a.expiration,
          originalManifestUri: a.originalManifestUri,
          sessionIds: a.sessionIds,
          size: a.size,
          streams: g,
        });
      });
    };

    function Cr(a, b, c) {
      return {
        id: a.id,
        originalId: a.originalId,
        primary: a.primary,
        type: a.contentType,
        mimeType: a.mimeType,
        codecs: a.codecs,
        frameRate: a.frameRate,
        pixelAspectRatio: a.pixelAspectRatio,
        hdr: void 0,
        kind: a.kind,
        language: a.language,
        label: a.label,
        width: a.width,
        height: a.height,
        encrypted: a.encrypted,
        keyIds: new Set([a.keyId]),
        segments: a.segments.map((d) => ({
          startTime: b + d.startTime,
          endTime: b + d.endTime,
          initSegmentKey: a.initSegmentKey,
          appendWindowStart: b,
          appendWindowEnd: c,
          timestampOffset: b - a.presentationTimeOffset,
          dataKey: d.dataKey,
          tilesLayout: '',
        })),
        variantIds: a.variantIds,
        roles: [],
        forced: !1,
        audioSamplingRate: null,
        channelsCount: null,
        spatialAudio: !1,
        closedCaptions: null,
        tilesLayout: void 0,
      };
    }

    function Dr() {
      ir.apply(this, arguments);
    }

    qa(Dr, ir);

    Dr.prototype.hasFixedKeySpace = function () {
      return !1;
    };

    Dr.prototype.addSegments = function (a) {
      return this.add(this.i, a);
    };

    Dr.prototype.addManifests = function (a) {
      return this.add(this.h, a);
    };

    Dr.prototype.Rb = function (a) {
      a.expiration == null && (a.expiration = Infinity);
      return Promise.resolve(a);
    };

    function Er() {
      this.m = this.j = this.i = this.h = this.g = this.l = null;
    }

    q = Er.prototype;

    q.init = function () {
      const a = this;
      const b = new Ac();
      const c = window.indexedDB.open('shaka_offline_db', 5);

      c.onsuccess = function () {
        let d = c.result;
        a.l = d;
        let e = d.objectStoreNames;
        e = e.contains('manifest') && e.contains('segment') ? new wr(d, 'segment', 'manifest') : null;
        a.g = e;
        e = d.objectStoreNames;
        e = e.contains('manifest-v2') && e.contains('segment-v2') ? new Br(d, 'segment-v2', 'manifest-v2') : null;
        a.h = e;
        e = d.objectStoreNames;
        e = e.contains('manifest-v3') && e.contains('segment-v3') ? new Br(d, 'segment-v3', 'manifest-v3') : null;
        a.i = e;
        e = d.objectStoreNames;
        e = e.contains('manifest-v5') && e.contains('segment-v5') ? new Dr(d, 'segment-v5', 'manifest-v5') : null;
        a.j = e;
        d = d.objectStoreNames.contains('session-ids') ? new mr(d) : null;
        a.m = d;
        b.resolve();
      };

      c.onupgradeneeded = function () {
        for (let d = c.result, e = r(['segment-v5', 'manifest-v5', 'session-ids']), f = e.next(); !f.done; f = e.next()) {
          f = f.value, d.objectStoreNames.contains(f) || d.createObjectStore(f, {
            autoIncrement: !0,
          });
        }
      };

      c.onerror = function (d) {
        b.reject(new O(2, 9, 9001, c.error));
        d.preventDefault();
      };

      return b;
    };

    q.destroy = function () {
      const a = this;
      return I((b) => {
        switch (b.g) {
          case 1:
            if (!a.g) {
              b.v(2);
              break;
            }

            return u(b, a.g.destroy(), 2);

          case 2:
            if (!a.h) {
              b.v(4);
              break;
            }

            return u(b, a.h.destroy(), 4);

          case 4:
            if (!a.i) {
              b.v(6);
              break;
            }

            return u(b, a.i.destroy(), 6);

          case 6:
            if (!a.j) {
              b.v(8);
              break;
            }

            return u(b, a.j.destroy(), 8);

          case 8:
            if (!a.m) {
              b.v(10);
              break;
            }

            return u(b, a.m.destroy(), 10);

          case 10:
            a.l && a.l.close(), z(b);
        }
      });
    };

    q.getCells = function () {
      const a = new Map();
      this.g && a.set('v1', this.g);
      this.h && a.set('v2', this.h);
      this.i && a.set('v3', this.i);
      this.j && a.set('v5', this.j);
      return a;
    };

    q.getEmeSessionCell = function () {
      return this.m;
    };

    q.erase = function () {
      const a = this;
      return I((b) => {
        switch (b.g) {
          case 1:
            if (!a.g) {
              b.v(2);
              break;
            }

            return u(b, a.g.destroy(), 2);

          case 2:
            if (!a.h) {
              b.v(4);
              break;
            }

            return u(b, a.h.destroy(), 4);

          case 4:
            if (!a.i) {
              b.v(6);
              break;
            }

            return u(b, a.i.destroy(), 6);

          case 6:
            if (!a.j) {
              b.v(8);
              break;
            }

            return u(b, a.j.destroy(), 8);

          case 8:
            return a.l && a.l.close(), u(b, Fr(), 10);

          case 10:
            return a.l = null, a.g = null, a.h = null, a.i = null, a.j = null, u(b, a.init(), 0);
        }
      });
    };

    function Fr() {
      const a = new Ac();
      const b = window.indexedDB.deleteDatabase('shaka_offline_db');

      b.onblocked = function () {};

      b.onsuccess = function () {
        a.resolve();
      };

      b.onerror = function (c) {
        a.reject(new O(2, 9, 9001, b.error));
        c.preventDefault();
      };

      return a;
    }

    vr('idb', () => (xd() || !window.indexedDB ? null : new Er()));

    function Gr(a, b, c, d) {
      this.g = a;
      this.i = b;
      this.h = c;
      this.l = d;
      this.j = ['offline:', a, '/', b, '/', c, '/', d].join('');
    }

    Gr.prototype.Ia = function () {
      return this.i;
    };

    Gr.prototype.la = function () {
      return this.h;
    };

    Gr.prototype.key = function () {
      return this.l;
    };

    Gr.prototype.toString = function () {
      return this.j;
    };

    function Hr(a) {
      a = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);
      if (a == null) return null;
      const b = a[1];
      if (b != 'manifest' && b != 'segment') return null;
      const c = a[2];
      if (!c) return null;
      const d = a[3];
      return d && b != null ? new Gr(b, c, d, Number(a[4])) : null;
    }

    function Ir(a, b) {
      this.h = a;
      this.g = b;
    }

    function Jr(a, b) {
      const c = new U(null, 0);
      c.Ja(b.duration);
      let d = b.streams.filter((l) => l.type == 'audio');
      let e = b.streams.filter((l) => l.type == 'video');
      d = Kr(a, d, e, c);
      e = b.streams.filter((l) => l.type == yc).map((l) => Lr(a, l, c));
      const f = b.streams.filter((l) => l.type == 'image').map((l) => Lr(a, l, c));
      const g = b.drmInfo ? [b.drmInfo] : [];

      if (b.drmInfo) {
        for (let h = r(d.values()), k = h.next(); !k.done; k = h.next()) {
          k = k.value, k.audio && k.audio.encrypted && (k.audio.drmInfos = g), k.video && k.video.encrypted && (k.video.drmInfos = g);
        }
      }

      return {
        presentationTimeline: c,
        minBufferTime: 2,
        offlineSessionIds: b.sessionIds,
        variants: Array.from(d.values()),
        textStreams: e,
        imageStreams: f,
      };
    }

    function Kr(a, b, c, d) {
      for (var e = new Set(), f = r(b), g = f.next(); !g.done; g = f.next()) {
        var h = r(g.value.variantIds);

        for (g = h.next(); !g.done; g = h.next()) e.add(g.value);
      }

      f = r(c);

      for (g = f.next(); !g.done; g = f.next()) for (h = r(g.value.variantIds), g = h.next(); !g.done; g = h.next()) e.add(g.value);

      f = new Map();
      e = r(e);

      for (g = e.next(); !g.done; g = e.next()) {
        g = g.value, f.set(g, {
          id: g,
          language: '',
          primary: !1,
          audio: null,
          video: null,
          bandwidth: 0,
          allowedByApplication: !0,
          allowedByKeySystem: !0,
          decodingInfos: [],
        });
      }

      b = r(b);

      for (e = b.next(); !e.done; e = b.next()) {
        for (e = e.value, g = Lr(a, e, d), h = r(e.variantIds), e = h.next(); !e.done; e = h.next()) e = f.get(e.value), e.language = g.language, e.primary = e.primary || g.primary, e.audio = g;
      }

      c = r(c);

      for (b = c.next(); !b.done; b = c.next()) for (e = b.value, b = Lr(a, e, d), g = r(e.variantIds), e = g.next(); !e.done; e = g.next()) e = f.get(e.value), e.primary = e.primary || b.primary, e.video = b;

      return f;
    }

    function Lr(a, b, c) {
      const d = b.segments.map((e) => Mr(a, e));
      c.Cb(d);
      return {
        id: b.id,
        originalId: b.originalId,

        createSegmentIndex() {
          return Promise.resolve();
        },

        segmentIndex: new V(d),
        mimeType: b.mimeType,
        codecs: b.codecs,
        width: b.width || void 0,
        height: b.height || void 0,
        frameRate: b.frameRate,
        pixelAspectRatio: b.pixelAspectRatio,
        hdr: b.hdr,
        kind: b.kind,
        encrypted: b.encrypted,
        drmInfos: [],
        keyIds: b.keyIds,
        language: b.language,
        label: b.label,
        type: b.type,
        primary: b.primary,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: b.roles,
        forced: b.forced,
        channelsCount: b.channelsCount,
        audioSamplingRate: b.audioSamplingRate,
        spatialAudio: b.spatialAudio,
        closedCaptions: b.closedCaptions,
        tilesLayout: b.tilesLayout,
      };
    }

    function Mr(a, b) {
      const c = new Gr('segment', a.h, a.g, b.dataKey);
      return new li(b.startTime, b.endTime, () => [c.toString()], 0, null, b.initSegmentKey != null ? Nr(a, b.initSegmentKey) : null, b.timestampOffset, b.appendWindowStart, b.appendWindowEnd, [], b.tilesLayout || '');
    }

    function Nr(a, b) {
      const c = new Gr('segment', a.h, a.g, b);
      return new ji(() => [c.toString()], 0, null);
    }

    function Or() {
      this.g = null;
    }

    q = Or.prototype;

    q.configure = function () {};

    q.start = function (a, b) {
      const c = this;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        switch (m.g) {
          case 1:
            d = Hr(a);
            c.g = d;
            if (d == null || d.g != 'manifest') throw new O(2, 1, 9004, a);
            e = new nr();
            ua(m);
            return u(m, e.init(), 4);

          case 4:
            return u(m, rr(e, d.Ia(), d.la()), 5);

          case 5:
            return f = m.h, u(m, f.getManifests([d.key()]), 6);

          case 6:
            return g = m.h, h = g[0], k = new Ir(d.Ia(), d.la()), l = Jr(k, h), b.makeTextStreamsForClosedCaptions(l), m.return(l);

          case 2:
            return wa(m), u(m, e.destroy(), 7);

          case 7:
            xa(m, 0);
        }
      });
    };

    q.stop = function () {
      return Promise.resolve();
    };

    q.update = function () {};

    q.onExpirationUpdated = function (a, b) {
      const c = this;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      return I((m) => {
        switch (m.g) {
          case 1:
            return d = c.g, e = new nr(), A(m, 2, 3), u(m, e.init(), 5);

          case 5:
            return u(m, rr(e, d.Ia(), d.la()), 6);

          case 6:
            return f = m.h, u(m, f.getManifests([d.key()]), 7);

          case 7:
            g = m.h;
            h = g[0];
            k = h.sessionIds.includes(a);
            l = void 0 == h.expiration || h.expiration > b;

            if (!k || !l) {
              m.v(3);
              break;
            }

            return u(m, f.updateManifestExpiration(d.key(), b), 3);

          case 3:
            return wa(m), u(m, e.destroy(), 10);

          case 10:
            xa(m, 0);
            break;

          case 2:
            C(m), m.v(3);
        }
      });
    };

    cg['application/x-offline-manifest'] = function () {
      return new Or();
    };

    function Pr() {}

    function Qr(a) {
      const b = Hr(a);
      b && b.g == 'manifest' ? (a = {
        uri: a,
        le: a,
        data: new ArrayBuffer(0),
        headers: {
          'content-type': 'application/x-offline-manifest',
        },
      }, a = He(a)) : a = b && b.g == 'segment' ? Rr(b.key(), b) : Fe(new O(2, 1, 9004, a));
      return a;
    }

    function Rr(a, b) {
      const c = new nr();
      return He(void 0).ba(() => c.init()).ba(() => rr(c, b.Ia(), b.la())).ba((d) => d.getSegments([b.key()]))
        .ba((d) => ({
          uri: b,
          data: d[0].data,
          headers: {},
        }))
        .finally(() => c.destroy());
    }

    M('shaka.offline.OfflineScheme', Pr);
    Pr.plugin = Qr;
    Re('offline', Qr);

    function Sr(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      return I((l) => {
        switch (l.g) {
          case 1:
            d = [];

            for (var m = [], n = r(c), p = n.next(); !p.done; p = n.next()) {
              p = p.value;

              for (var t = !1, v = r(m), w = v.next(); !w.done; w = v.next()) {
                if (w = w.value, Tr(w.info, p)) {
                  w.sessionIds.push(p.sessionId);
                  t = !0;
                  break;
                }
              }

              t || m.push({
                info: p,
                sessionIds: [p.sessionId],
              });
            }

            e = r(m);
            f = e.next();

          case 2:
            if (f.done) {
              l.v(4);
              break;
            }

            g = f.value;
            h = Ur(a, b, g);
            return u(l, h, 5);

          case 5:
            k = l.h;
            d = d.concat(k);
            f = e.next();
            l.v(2);
            break;

          case 4:
            return l.return(d);
        }
      });
    }

    function Ur(a, b, c) {
      let d;
      let e;
      return I((f) => {
        switch (f.g) {
          case 1:
            return d = new pf({
              lb: b,

              onError() {},

              Gc() {},

              onExpirationUpdated() {},

              onEvent() {},

            }), A(f, 2), d.configure(a), u(f, yf(d, c.info.keySystem, c.info.licenseUri, c.info.serverCertificate, c.info.audioCapabilities, c.info.videoCapabilities), 4);

          case 4:
            va(f, 3);
            break;

          case 2:
            return C(f), u(f, d.destroy(), 5);

          case 5:
            return f.return([]);

          case 3:
            return A(f, 6), u(f, Hf(d), 8);

          case 8:
            va(f, 7);
            break;

          case 6:
            return C(f), u(f, d.destroy(), 9);

          case 9:
            return f.return([]);

          case 7:
            return e = [], u(f, Promise.all(c.sessionIds.map((g) => I((h) => {
              if (h.g == 1) return A(h, 2), u(h, If(d, g), 4);
              if (h.g != 2) return e.push(g), va(h, 0);
              C(h);
              z(h);
            }))), 10);

          case 10:
            return u(f, d.destroy(), 11);

          case 11:
            return f.return(e);
        }
      });
    }

    function Tr(a, b) {
      function c(d, e) {
        return d.robustness == e.robustness && d.contentType == e.contentType;
      }

      return a.keySystem == b.keySystem && a.licenseUri == b.licenseUri && ob(a.audioCapabilities, b.audioCapabilities, c) && ob(a.videoCapabilities, b.videoCapabilities, c);
    }

    function Vr(a, b, c) {
      const d = b.presentationTimeline.getDuration();
      b = Wr(b);
      return {
        offlineUri: null,
        originalManifestUri: a,
        duration: d,
        size: 0,
        expiration: Infinity,
        tracks: b,
        appMetadata: c,
      };
    }

    function Xr(a, b) {
      let c = Jr(new Ir(a.Ia(), a.la()), b);
      const d = b.appMetadata || {};
      c = Wr(c);
      return {
        offlineUri: a.toString(),
        originalManifestUri: b.originalManifestUri,
        duration: b.duration,
        size: b.size,
        expiration: b.expiration,
        tracks: c,
        appMetadata: d,
      };
    }

    function Wr(a) {
      const b = [];
      let c = he(a.variants);
      c = r(c);

      for (let d = c.next(); !d.done; d = c.next()) b.push(Zd(d.value));

      a = r(a.textStreams);

      for (c = a.next(); !c.done; c = a.next()) b.push($d(c.value));

      return b;
    }

    function Yr() {
      this.g = {};
    }

    function Zr(a, b, c) {
      c = c.endTime - c.startTime;
      return $r(a, b) * c;
    }

    function $r(a, b) {
      let c = a.g[b];
      c == null && (c = 0);
      return c;
    }

    function as(a) {
      const b = this;
      if (a && a.constructor != W) throw new O(2, 9, 9008);
      this.O = this.o = null;
      a ? (this.o = a.o, this.O = a.Ub()) : (this.o = Uj(), this.O = new Qe());
      this.Lc = [];
      this.$b = [];
      this.Fd = [];
      const c = !a;
      this.I = new af(() => {
        let d;
        let e;
        let f;
        let g;
        let h;
        return I((k) => {
          switch (k.g) {
            case 1:
              return u(k, Promise.all(b.Fd.map((l) => Zq(l))), 2);

            case 2:
              d = function () {};

              e = [];
              f = r(b.$b);

              for (g = f.next(); !g.done; g = f.next()) h = g.value, e.push(h.then(d, d));

              return u(k, Promise.all(e), 3);

            case 3:
              if (!c) {
                k.v(4);
                break;
              }

              return u(k, b.O.destroy(), 4);

            case 4:
              b.o = null, b.O = null, z(k);
          }
        });
      });
    }

    function bs() {
      if (sd()) {
        a: {
          var a = r(or.values());

          for (let b = a.next(); !b.done; b = a.next()) {
            if (b = b.value, b = b()) {
              b.destroy();
              a = !0;
              break a;
            }
          }

          a = !1;
        }
      } else a = !1;
      return a;
    }

    q = as.prototype;

    q.destroy = function () {
      return this.I.destroy();
    };

    q.configure = function (a, b) {
      arguments.length == 2 && typeof a === 'string' && (a = Sj(a, b));
      a.manifest && a.manifest.dash && 'defaultPresentationDelay' in a.manifest.dash && (Ub('manifest.dash.defaultPresentationDelay configuration', 'Please Use manifest.defaultPresentationDelay instead.'), a.manifest.defaultPresentationDelay = a.manifest.dash.defaultPresentationDelay, delete a.manifest.dash.defaultPresentationDelay);
      return Wj(this.o, a);
    };

    q.getConfiguration = function () {
      const a = Uj();
      Wj(a, this.o, Uj());
      return a;
    };

    q.Ub = function () {
      return this.O;
    };

    q.store = function (a, b, c) {
      const d = this;
      const e = this.getConfiguration();
      const f = new Xq(this.O);
      this.Fd.push(f);
      b = cs(this, a, b || {}, () => {
        let h;
        return I((k) => {
          if (k.g == 1) return u(k, bg(a, d.O, e.manifest.retryParameters, c || null), 2);
          h = k.h;
          return k.return(ac(h));
        });
      }, e, f);
      const g = new Ee(b, () => Zq(f));
      g.finally(() => {
        nb(d.Fd, f);
      });

      g.then = function (h) {
        Ub('shaka.offline.Storage.store.then', 'Storage operations now return a shaka.util.AbortableOperation, rather than a promise.  Please update to conform to this new API; you can use the |chain| method instead.');
        return g.promise.then(h);
      };

      return ds(this, g);
    };

    q.jf = function () {
      Ub('shaka.offline.Storage.getStoreInProgress', 'Multiple concurrent downloads are now supported.');
      return !1;
    };

    function cs(a, b, c, d, e, f) {
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      return I((y) => {
        switch (y.g) {
          case 1:
            return es(), h = g = null, k = new nr(), m = l = null, A(y, 2, 3), u(y, d(), 5);

          case 5:
            return g = y.h, u(y, fs(a, b, g, e), 6);

          case 6:
            n = y.h;
            gs(a);
            p = !n.presentationTimeline.X() && !n.presentationTimeline.kb();
            if (!p) throw new O(2, 9, 9005, b);
            return u(y, hs(a, n, (E) => {
              m = m || E;
            }, e), 7);

          case 7:
            h = y.h;
            gs(a);
            if (m) throw m;
            return u(y, a.wc(n, e), 8);

          case 8:
            return u(y, k.init(), 9);

          case 9:
            return gs(a), u(y, pr(k), 10);

          case 10:
            return l = y.h, gs(a), u(y, is(a, l.la, h, n, b, c, e, f), 11);

          case 11:
            t = y.h;
            gs(a);
            if (m) throw m;
            return u(y, l.la.addManifests([t]), 12);

          case 12:
            return v = y.h, gs(a), w = new Gr('manifest', l.path.Ia, l.path.la, v[0]), y.return(Xr(w, t));

          case 3:
            return wa(y), a.Lc = [], u(y, k.destroy(), 13);

          case 13:
            if (!g) {
              y.v(14);
              break;
            }

            return u(y, g.stop(), 14);

          case 14:
            if (!h) {
              y.v(16);
              break;
            }

            return u(y, h.destroy(), 16);

          case 16:
            xa(y, 0);
            break;

          case 2:
            x = C(y);

            if (!l) {
              y.v(18);
              break;
            }

            return u(y, l.la.removeSegments(a.Lc, () => {}), 18);

          case 18:
            throw m || x;
        }
      });
    }

    q.wc = function (a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      let B;
      let F;
      let G;
      let H;
      let L;
      let J;
      let K;
      let R;
      let S;
      let X;
      let T;
      return I((N) => {
        switch (N.g) {
          case 1:
            c = {
              width: Infinity,
              height: Infinity,
            };
            Od(a, b.restrictions, c);
            Rd(a, b.offline.usePersistentLicense);
            d = [];
            e = b.preferredAudioChannelCount;
            f = b.preferredDecodingAttributes;
            g = b.preferredVideoCodecs;
            h = b.preferredAudioCodecs;
            Cd(a, g, h, e, f);
            k = r(a.variants);

            for (l = k.next(); !l.done; l = k.next()) m = l.value, d.push(Zd(m));

            n = r(a.textStreams);

            for (p = n.next(); !p.done; p = n.next()) t = p.value, d.push($d(t));

            v = r(a.imageStreams);

            for (w = v.next(); !w.done; w = v.next()) x = w.value, d.push(ae(x));

            return u(N, b.offline.trackSelectionCallback(d), 2);

          case 2:
            y = N.h;
            E = a.presentationTimeline.getDuration();
            D = 0;
            B = r(y);

            for (F = B.next(); !F.done; F = B.next()) G = F.value, H = G.bandwidth * E / 8, D += H;

            A(N, 3);
            return u(N, b.offline.downloadSizeCallback(D), 5);

          case 5:
            L = N.h;
            if (!L) throw new O(2, 9, 9014);
            va(N, 4);
            break;

          case 3:
            J = C(N);
            if (J instanceof O) throw J;
            throw new O(2, 9, 9015);

          case 4:
            K = new Set();
            R = new Set();
            S = new Set();
            X = r(y);

            for (F = X.next(); !F.done; F = X.next()) {
              T = F.value, T.type == 'variant' && K.add(T.id), T.type == 'text' && R.add(T.id), T.type == 'image' && S.add(T.id);
            }

            a.variants = a.variants.filter((ea) => K.has(ea.id));
            a.textStreams = a.textStreams.filter((ea) => R.has(ea.id));
            a.imageStreams = a.imageStreams.filter((ea) => S.has(ea.id));
            js(a);
            z(N);
        }
      });
    };

    function is(a, b, c, d, e, f, g, h) {
      let k;
      let l;
      let m;
      let n;
      let p;
      let t;
      let v;
      let w;
      let x;
      let y;
      let E;
      let D;
      return I((B) => {
        switch (B.g) {
          case 1:
            return k = Vr(e, d, f), l = g.offline.progressCallback, m = function (F, G) {
              k.size = G;
              l(k, F);
            }, n = function (F, G) {
              v && g.offline.usePersistentLicense && w == G && Gf(c, 'cenc', F);
            }, Yq(h, m, n), p = d.variants.some((F) => {
              const G = F.audio && F.audio.encrypted;
              return F.video && F.video.encrypted || G;
            }), t = d.variants.some((F) => (F.video ? F.video.drmInfos : []).concat(F.audio ? F.audio.drmInfos : []).some((G) => G.initData && G.initData.length)), v = p && !t, w = null, v && (x = c.i, w = ks.get(x.keySystem)), ua(B), E = y = ls(a, h, b, c, d, e, f, g), u(B, cr(h), 4);

          case 4:
            E.size = B.h;
            y.expiration = c.Tb();
            D = Mf(c);
            y.sessionIds = g.offline.usePersistentLicense ? D : [];
            if (p && g.offline.usePersistentLicense && !D.length) throw new O(2, 9, 9007);
            return B.return(y);

          case 2:
            return wa(B), u(B, h.destroy(), 5);

          case 5:
            xa(B, 0);
        }
      });
    }

    q.remove = function (a) {
      return ms(this, ns(this, a));
    };

    function ns(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      return I((k) => {
        switch (k.g) {
          case 1:
            es();
            c = Hr(b);
            if (c == null || c.g != 'manifest') throw new O(2, 9, 9004, b);
            d = c;
            e = new nr();
            ua(k);
            return u(k, e.init(), 4);

          case 4:
            return u(k, rr(e, d.Ia(), d.la()), 5);

          case 5:
            return f = k.h, u(k, f.getManifests([d.key()]), 6);

          case 6:
            return g = k.h, h = g[0], u(k, Promise.all([os(a, h, e), ps(f, d, h)]), 2);

          case 2:
            return wa(k), u(k, e.destroy(), 8);

          case 8:
            xa(k, 0);
        }
      });
    }

    function qs(a, b) {
      for (var c = [], d = r(a.streams), e = d.next(); !e.done; e = d.next()) {
        e = e.value, b && e.type == 'video' ? c.push({
          contentType: Vc(e.mimeType, e.codecs),
          robustness: a.drmInfo.videoRobustness,
        }) : b || e.type != 'audio' || c.push({
          contentType: Vc(e.mimeType, e.codecs),
          robustness: a.drmInfo.audioRobustness,
        });
      }

      return c;
    }

    function os(a, b, c) {
      return I((d) => u(d, rs(a.O, a.o.drm, c, b), 0));
    }

    function ps(a, b, c) {
      function d() {}

      const e = ss(c);
      Xr(b, c);
      return Promise.all([a.removeSegments(e, d), a.removeManifests([b.key()], d)]);
    }

    q.Jf = function () {
      return ms(this, ts(this));
    };

    function ts(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      return I((n) => {
        switch (n.g) {
          case 1:
            return es(), b = a.O, c = a.o.drm, d = new nr(), e = !1, ua(n), u(n, d.init(), 4);

          case 4:
            f = [], sr(d, (p) => f.push(p)), g = r(f), h = g.next();

          case 5:
            if (h.done) {
              n.v(2);
              break;
            }

            k = h.value;
            return u(n, k.getAll(), 8);

          case 8:
            return l = n.h, u(n, Sr(c, b, l), 9);

          case 9:
            return m = n.h, u(n, k.remove(m), 10);

          case 10:
            m.length != l.length && (e = !0);
            h = g.next();
            n.v(5);
            break;

          case 2:
            return wa(n), u(n, d.destroy(), 11);

          case 11:
            xa(n, 3);
            break;

          case 3:
            return n.return(!e);
        }
      });
    }

    q.list = function () {
      return ms(this, us());
    };

    function us() {
      let a;
      let b;
      let c;
      return I((d) => {
        switch (d.g) {
          case 1:
            return es(), a = [], b = new nr(), ua(d), u(d, b.init(), 4);

          case 4:
            return c = Promise.resolve(), qr(b, (e, f) => {
              c = c.then(() => {
                let g;
                return I((h) => {
                  if (h.g == 1) return u(h, f.getAllManifests(), 2);
                  g = h.h;
                  g.forEach((k, l) => {
                    const m = Xr(new Gr('manifest', e.Ia, e.la, l), k);
                    a.push(m);
                  });
                  z(h);
                });
              });
            }), u(d, c, 2);

          case 2:
            return wa(d), u(d, b.destroy(), 6);

          case 6:
            xa(d, 3);
            break;

          case 3:
            return d.return(a);
        }
      });
    }

    function fs(a, b, c, d) {
      let e;
      let f;
      let g;
      let h;
      let k;
      return I((l) => {
        if (l.g == 1) {
          return e = null, f = a.O, g = {
            networkingEngine: f,

            filter() {
              return Promise.resolve();
            },

            makeTextStreamsForClosedCaptions() {},

            onTimelineRegionAdded() {},

            onEvent() {},

            onError(m) {
              e = m;
            },

            isLowLatencyMode() {
              return !1;
            },

            isAutoLowLatencyMode() {
              return !1;
            },

            enableLowLatencyMode() {},

          }, c.configure(d.manifest), gs(a), u(l, c.start(b, g), 2);
        }

        if (l.g != 3) {
          return h = l.h, gs(a), k = vs(h), u(l, Promise.all(fb(k, (m) => m.createSegmentIndex())), 3);
        }

        gs(a);
        if (e) throw e;
        return l.return(h);
      });
    }

    function hs(a, b, c, d) {
      let e;
      return I((f) => {
        switch (f.g) {
          case 1:
            return e = new pf({
              lb: a.O,
              onError: c,

              Gc() {},

              onExpirationUpdated() {},

              onEvent() {},

            }), e.configure(d.drm), u(f, vf(e, b.variants, d.offline.usePersistentLicense), 2);

          case 2:
            return u(f, Hf(e), 3);

          case 3:
            return u(f, Ff(e), 4);

          case 4:
            return f.return(e);
        }
      });
    }

    function ls(a, b, c, d, e, f, g, h) {
      for (var k = new Yr(), l = r(e.variants), m = l.next(); !m.done; m = l.next()) {
        var n = k;
        m = m.value;
        var p = m.audio;
        var t = m.video;
        p && !t && (n.g[p.id] = p.bandwidth || m.bandwidth);
        !p && t && (n.g[t.id] = t.bandwidth || m.bandwidth);

        if (p && t) {
          var v = p.bandwidth || 393216;
          let w = t.bandwidth || m.bandwidth - v;
          w <= 0 && (w = m.bandwidth);
          n.g[p.id] = v;
          n.g[t.id] = w;
        }
      }

      l = r(e.textStreams);

      for (n = l.next(); !n.done; n = l.next()) k.g[n.value.id] = 52;

      l = r(e.imageStreams);

      for (n = l.next(); !n.done; n = l.next()) n = n.value, k.g[n.id] = n.bandwidth || 2048;

      n = new Map();
      n.set(null, Promise.resolve(null));
      m = new Map();
      p = vs(e);
      l = new Map();
      p = r(p);

      for (t = p.next(); !t.done; t = p.next()) t = t.value, v = ws(a, b, c, k, e, t, h, n, m), l.set(t.id, v);

      a = r(e.variants);

      for (m = a.next(); !m.done; m = a.next()) b = m.value, b.audio && l.get(b.audio.id).variantIds.push(b.id), b.video && l.get(b.video.id).variantIds.push(b.id);

      a = Array.from(l.values());
      h = h.offline.usePersistentLicense;
      (b = d.i) && h && (b.initData = []);
      return {
        creationTime: Date.now(),
        originalManifestUri: f,
        duration: e.presentationTimeline.getDuration(),
        size: 0,
        expiration: d.Tb(),
        streams: a,
        sessionIds: h ? Mf(d) : [],
        drmInfo: b,
        appMetadata: g,
      };
    }

    function ws(a, b, c, d, e, f, g, h, k) {
      const l = {
        id: f.id,
        originalId: f.originalId,
        primary: f.primary,
        type: f.type,
        mimeType: f.mimeType,
        codecs: f.codecs,
        frameRate: f.frameRate,
        pixelAspectRatio: f.pixelAspectRatio,
        hdr: f.hdr,
        kind: f.kind,
        language: f.language,
        label: f.label,
        width: f.width || null,
        height: f.height || null,
        encrypted: f.encrypted,
        keyIds: f.keyIds,
        segments: [],
        variantIds: [],
        roles: f.roles,
        forced: f.forced,
        channelsCount: f.channelsCount,
        audioSamplingRate: f.audioSamplingRate,
        spatialAudio: f.spatialAudio,
        closedCaptions: f.closedCaptions,
        tilesLayout: f.tilesLayout,
      };
      const m = f.id;
      xs(f, e.presentationTimeline.Za(), (n) => {
        const p = ys(a, b, m, f.id, c, d, n.h, g, h);
        const t = zs(a, b, m, f.id, c, d, n, g, k);
        br(b, m, () => {
          let v;
          let w;
          return I((x) => {
            if (x.g == 1) return u(x, p, 2);
            if (x.g != 3) return v = x.h, u(x, t, 3);
            w = x.h;
            l.segments.push({
              initSegmentKey: v,
              startTime: n.startTime,
              endTime: n.endTime,
              appendWindowStart: n.appendWindowStart,
              appendWindowEnd: n.appendWindowEnd,
              timestampOffset: n.timestampOffset,
              tilesLayout: n.tilesLayout,
              dataKey: w,
            });
            z(x);
          });
        });
      });
      return l;
    }

    function ys(a, b, c, d, e, f, g, h, k) {
      if (k.has(g)) return k.get(g);
      h = Wi(g.ma(), g.ja, g.ea, h.streaming.retryParameters);
      b = $q(b, c, h, 0.5 * $r(f, d), !0, (l) => {
        let m;
        return I((n) => {
          if (n.g == 1) {
            return u(n, e.addSegments([{
              data: l,
            }]), 2);
          }
          m = n.h;
          a.Lc.push(m[0]);
          return n.return(m[0]);
        });
      });
      k.set(g, b);
      return b;
    }

    function zs(a, b, c, d, e, f, g, h, k) {
      const l = [g.ma()[0], g.ja, g.ea].join('-');
      if (k.has(l)) return k.get(l);
      h = Wi(g.ma(), g.ja, g.ea, h.streaming.retryParameters);
      b = $q(b, c, h, Zr(f, d, g), !1, (m) => {
        let n;
        return I((p) => {
          if (p.g == 1) {
            return u(p, e.addSegments([{
              data: m,
            }]), 2);
          }
          n = p.h;
          a.Lc.push(n[0]);
          return p.return(n[0]);
        });
      });
      k.set(l, b);
      return b;
    }

    function xs(a, b, c) {
      b = a.segmentIndex.find(b);
      if (b != null) for (let d = a.segmentIndex.get(b); d;) c(d), d = a.segmentIndex.get(++b);
    }

    function gs(a) {
      if (a.I.g) throw new O(2, 9, 7001);
    }

    function es() {
      if (!bs()) throw new O(2, 9, 9E3);
    }

    function ms(a, b) {
      return I((c) => {
        if (c.g == 1) return a.$b.push(b), ua(c), u(c, b, 4);
        if (c.g != 2) return c.return(c.h);
        wa(c);
        nb(a.$b, b);
        return xa(c, 0);
      });
    }

    function ds(a, b) {
      const c = b.promise;
      a.$b.push(c);
      return b.finally(() => {
        nb(a.$b, c);
      });
    }

    function ss(a) {
      const b = [];
      a = r(a.streams);

      for (let c = a.next(); !c.done; c = a.next()) {
        c = r(c.value.segments);

        for (let d = c.next(); !d.done; d = c.next()) d = d.value, d.initSegmentKey != null && b.push(d.initSegmentKey), b.push(d.dataKey);
      }

      return b;
    }

    function rs(a, b, c, d) {
      let e;
      let f;
      let g;
      return I((h) => {
        if (h.g == 1) {
          if (!d.drmInfo) return h.return();
          e = tr(c);
          f = d.sessionIds.map((k) => ({
            sessionId: k,
            keySystem: d.drmInfo.keySystem,
            licenseUri: d.drmInfo.licenseServerUri,
            serverCertificate: d.drmInfo.serverCertificate,
            audioCapabilities: qs(d, !1),
            videoCapabilities: qs(d, !0),
          }));
          return u(h, Sr(b, a, f), 2);
        }

        return h.g != 3 ? (g = h.h, u(h, e.remove(g), 3)) : u(h, e.add(f.filter((k) => !g.includes(k.sessionId))), 0);
      });
    }

    function vs(a) {
      for (var b = new Set(), c = r(a.textStreams), d = c.next(); !d.done; d = c.next()) b.add(d.value);

      c = r(a.imageStreams);

      for (d = c.next(); !d.done; d = c.next()) b.add(d.value);

      a = r(a.variants);

      for (c = a.next(); !c.done; c = a.next()) c = c.value, c.audio && b.add(c.audio), c.video && b.add(c.video);

      return b;
    }

    function js(a) {
      a.variants.map((f) => f.video);
      let b = new Set(a.variants.map((f) => f.audio));
      a = a.textStreams;

      for (var c = r(b), d = c.next(); !d.done; d = c.next()) {
        d = r(b);

        for (let e = d.next(); !e.done; e = d.next());
      }

      b = r(a);

      for (c = b.next(); !c.done; c = b.next()) for (c = r(a), d = c.next(); !d.done; d = c.next());
    }

    M('shaka.offline.Storage', as);

    as.deleteAll = function () {
      let a;
      return I((b) => (b.g == 1 ? (a = new nr(), ua(b), u(b, ur(a), 2)) : b.g != 5 ? (wa(b), u(b, a.destroy(), 5)) : xa(b, 0)));
    };

    as.prototype.list = as.prototype.list;
    as.prototype.removeEmeSessions = as.prototype.Jf;
    as.prototype.remove = as.prototype.remove;
    as.prototype.getStoreInProgress = as.prototype.jf;
    as.prototype.store = as.prototype.store;
    as.prototype.getNetworkingEngine = as.prototype.Ub;
    as.prototype.getConfiguration = as.prototype.getConfiguration;
    as.prototype.configure = as.prototype.configure;
    as.prototype.destroy = as.prototype.destroy;
    as.support = bs;
    var ks = new Map().set('org.w3.clearkey', '1077efecc0b24d02ace33c1e52e2fb4b').set('com.widevine.alpha', 'edef8ba979d64acea3c827dcd51d21ed').set('com.microsoft.playready', '9a04f07998404286ab92e65be0885f95')
      .set('com.microsoft.playready.recommendation', '9a04f07998404286ab92e65be0885f95')
      .set('com.microsoft.playready.software', '9a04f07998404286ab92e65be0885f95')
      .set('com.microsoft.playready.hardware', '9a04f07998404286ab92e65be0885f95')
      .set('com.adobe.primetime', 'f239e769efa348509c16a903c6932efb');
    Ul.offline = bs;

    function As() {}

    function Bs(a, b) {
      for (var c = {
          priority: b || 0,
          Fe: a,
        }, d = r(lb(Cs)), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        const f = e.ha;

        if (e.item.priority < c.priority) {
          Cs.splice(f, 0, c);
          return;
        }
      }

      Cs.push(c);
    }

    M('shaka.polyfill', As);
    As.register = Bs;

    As.installAll = function () {
      for (let a = r(Cs), b = a.next(); !b.done; b = a.next()) {
        b = b.value;

        try {
          b.Fe();
        } catch (c) {
          Va('Error installing polyfill!', c);
        }
      }
    };

    var Cs = [];

    function Ds(a) {
      const b = a.toLowerCase().replace('aria', 'aria-');
      Object.defineProperty(Element.prototype, a, {
        get() {
          return this.getAttribute(b);
        },

        set(c) {
          c == null || void 0 == c ? this.removeAttribute(b) : this.setAttribute(b, c);
        },

      });
    }

    Bs(() => {
      if (!Object.getOwnPropertyDescriptor(Element.prototype, 'ariaHidden')) for (let a = r(['ariaHidden', 'ariaLabel', 'ariaPressed', 'ariaSelected']), b = a.next(); !b.done; b = a.next()) Ds(b.value);
    });
    Bs(() => {
      Es();
    }, -2);

    function Fs(a) {
      const b = a.type.replace(/^(webkit|moz|MS)/, '').toLowerCase();
      const c = document.createEvent('Event');
      c.initEvent(b, a.bubbles, a.cancelable);
      a.target.dispatchEvent(c);
    }

    Bs(() => {
      if (window.Document) {
        let a = Element.prototype;
        a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
        a = Document.prototype;
        a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitCancelFullScreen;
        'fullscreenElement' in document || (Object.defineProperty(document, 'fullscreenElement', {
          get() {
            return document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement;
          },

        }), Object.defineProperty(document, 'fullscreenEnabled', {
          get() {
            return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled;
          },

        }));
        document.addEventListener('webkitfullscreenchange', Fs);
        document.addEventListener('webkitfullscreenerror', Fs);
        document.addEventListener('mozfullscreenchange', Fs);
        document.addEventListener('mozfullscreenerror', Fs);
        document.addEventListener('MSFullscreenChange', Fs);
        document.addEventListener('MSFullscreenError', Fs);
      }
    });
    Bs(() => {});

    function Gs(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      return I((t) => {
        switch (t.g) {
          case 1:
            b = {
              supported: !1,
              powerEfficient: !0,
              smooth: !0,
              keySystemAccess: null,
              configuration: a,
            };
            if (!a || a.video && (c = a.video.contentType, d = MediaSource.isTypeSupported(c), !d) || a.audio && (e = a.audio.contentType, f = MediaSource.isTypeSupported(e), !f)) return t.return(b);
            if (!a.keySystemConfiguration) return b.supported = !0, t.return(Promise.resolve(b));
            g = a.keySystemConfiguration;
            h = [];
            k = [];
            g.audio && (l = {
              robustness: g.audio.robustness || '',
              contentType: a.audio.contentType,
            }, h.push(l));
            g.video && (m = {
              robustness: g.video.robustness || '',
              contentType: a.video.contentType,
            }, k.push(m));
            n = {
              initDataTypes: [g.initDataType],
              distinctiveIdentifier: g.distinctiveIdentifier,
              persistentState: g.persistentState,
              sessionTypes: g.sessionTypes,
            };
            h.length && (n.audioCapabilities = h);
            k.length && (n.videoCapabilities = k);
            A(t, 3);
            return u(t, navigator.requestMediaKeySystemAccess(g.keySystem, [n]), 5);

          case 5:
            p = t.h;
            va(t, 4);
            break;

          case 3:
            C(t);

          case 4:
            p && (b.supported = !0, b.keySystemAccess = p);

          case 2:
            return t.return(b);
        }
      });
    }

    Bs(() => {
      !xd() && navigator.mediaCapabilities || !window.MediaSource || (navigator.mediaCapabilities || (navigator.mediaCapabilities = {}), navigator.mediaCapabilities.decodingInfo = Gs);
    }, -1);

    function Hs() {
      const a = MediaSource.prototype.addSourceBuffer;

      MediaSource.prototype.addSourceBuffer = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];

        c = a.apply(this, c);

        c.abort = function () {};

        return c;
      };
    }

    function Is() {
      const a = SourceBuffer.prototype.remove;

      SourceBuffer.prototype.remove = function (b, c) {
        return a.call(this, b, c - 0.001);
      };
    }

    function Js() {
      const a = MediaSource.isTypeSupported;

      MediaSource.isTypeSupported = function (b) {
        return b.split(/ *; */)[0].split('/')[1].toLowerCase() == 'mp2t' ? !1 : a(b);
      };
    }

    function Ks() {
      const a = MediaSource.isTypeSupported;

      MediaSource.isTypeSupported = function (b) {
        return Xc(b) != 'opus' && a(b);
      };
    }

    function Ls() {
      const a = MediaSource.isTypeSupported;

      MediaSource.isTypeSupported = function (b) {
        const c = b.split(/ *; */);
        c.shift();
        return c.some((d) => d.startsWith('codecs=')) ? cast.__platform__.canDisplayType(b) : a(b);
      };
    }

    function Ms() {
      const a = MediaSource.isTypeSupported;

      MediaSource.isTypeSupported = function (b) {
        const c = b.split(/ *; */);
        const d = c.findIndex((g) => g.startsWith('codecs='));
        if (d < 0) return a(b);
        const e = c[d].replace('codecs=', '').replace(/"/g, '').split(/\s*,\s*/);
        const f = e.findIndex((g) => g.startsWith('vp09'));
        f >= 0 && (e[f] = 'vp9', c[d] = `codecs="${e.join(',')}"`, b = c.join('; '));
        return a(b);
      };
    }

    Bs(() => {
      const a = zd();
      window.MediaSource && (window.cast && cast.__platform__ && cast.__platform__.canDisplayType ? Ls() : a ? (Js(), a <= 12 ? (Hs(), Is()) : Hs()) : (wd('Tizen 2') || wd('Tizen 3') || wd('Tizen 4')) && Ks());
      window.MediaSource && MediaSource.isTypeSupported('video/webm; codecs="vp9"') && !MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"') && Ms();
    });

    function Ns() {
      function a() {
        switch (window.orientation) {
          case -90:
            b.type = 'landscape-secondary';
            b.angle = 270;
            break;

          case 0:
            b.type = 'portrait-primary';
            b.angle = 0;
            break;

          case 90:
            b.type = 'landscape-primary';
            b.angle = 90;
            break;

          case 180:
            b.type = 'portrait-secondary', b.angle = 180;
        }
      }

      var b = new Os();
      screen.orientation = b;
      a();
      window.addEventListener('orientationchange', () => {
        a();
        const c = new Q('change', {});
        b.dispatchEvent(c);
      });
    }

    function Os() {
      Le.call(this);
      this.type = '';
      this.angle = 0;
    }

    qa(Os, Le);

    Os.prototype.lock = function (a) {
      function b(d) {
        return screen.lockOrientation ? screen.lockOrientation(d) : screen.mozLockOrientation ? screen.mozLockOrientation(d) : screen.msLockOrientation ? screen.msLockOrientation(d) : !1;
      }

      let c = !1;

      switch (a) {
        case 'natural':
          c = b('default');
          break;

        case 'any':
          c = !0;
          this.unlock();
          break;

        default:
          c = b(a);
      }

      if (c) return Promise.resolve();
      a = Error('screen.orientation.lock() is not available on this device');
      a.name = 'NotSupportedError';
      a.code = DOMException.NOT_SUPPORTED_ERR;
      return Promise.reject(a);
    };

    Os.prototype.unlock = function () {
      screen.unlockOrientation ? screen.unlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation();
    };

    Bs(() => {
      screen.orientation || void 0 != window.orientation && Ns();
    });

    function Ps(a, b) {
      try {
        const c = new Qs(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    }

    function Rs(a) {
      const b = this.mediaKeys;
      b && b != a && Ss(b, null);
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? Ss(a, this) : Promise.resolve();
    }

    function Ts(a) {
      a = Ob(a.initData);
      if (Sb(a).getUint32(0, !0) + 4 != a.byteLength) throw new RangeError('Malformed FairPlay init data');
      a = Ec(a.subarray(4), !0);
      a = Hc(a);
      const b = new Event('encrypted');
      b.initDataType = 'skd';
      b.initData = Qb(a);
      this.dispatchEvent(b);
    }

    function Qs(a, b) {
      this.keySystem = a;

      if (a.startsWith('com.apple.fps')) {
        for (var c = r(b), d = c.next(); !d.done; d = c.next()) {
          let e = d.value;
          if (e.persistentState == 'required') d = null; else {
            d = {
              audioCapabilities: [],
              videoCapabilities: [],
              persistentState: 'optional',
              distinctiveIdentifier: 'optional',
              initDataTypes: e.initDataTypes,
              sessionTypes: ['temporary'],
              label: e.label,
            };
            let f = !1;
            let g = !1;

            if (e.audioCapabilities) {
              for (var h = r(e.audioCapabilities), k = h.next(); !k.done; k = h.next()) {
                k = k.value, k.contentType && (f = !0, WebKitMediaKeys.isTypeSupported(this.keySystem, k.contentType.split(';')[0]) && (d.audioCapabilities.push(k), g = !0));
              }
            }

            if (e.videoCapabilities) for (e = r(e.videoCapabilities), k = e.next(); !k.done; k = e.next()) h = k.value, h.contentType && (f = !0, WebKitMediaKeys.isTypeSupported(this.keySystem, h.contentType.split(';')[0]) && (d.videoCapabilities.push(h), g = !0));
            f || (g = WebKitMediaKeys.isTypeSupported(this.keySystem, 'video/mp4'));
            d = g ? d : null;
          }

          if (d) {
            this.g = d;
            return;
          }
        }
      }

      c = Error('Unsupported keySystem');
      c.name = 'NotSupportedError';
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    }

    Qs.prototype.createMediaKeys = function () {
      const a = new Us(this.keySystem);
      return Promise.resolve(a);
    };

    Qs.prototype.getConfiguration = function () {
      return this.g;
    };

    function Us(a) {
      this.g = new WebKitMediaKeys(a);
      this.h = new cf();
    }

    Us.prototype.createSession = function (a) {
      a = a || 'temporary';
      if (a != 'temporary') throw new TypeError(`Session type ${a} is unsupported on this platform.`);
      return new Vs(this.g, a);
    };

    Us.prototype.setServerCertificate = function () {
      return Promise.resolve(!1);
    };

    function Ss(a, b) {
      a.h.ob();
      if (!b) return Promise.resolve();
      a.h.A(b, 'webkitneedkey', Ts);

      try {
        return si(b, HTMLMediaElement.HAVE_METADATA, a.h, () => {
          b.webkitSetMediaKeys(a.g);
        }), Promise.resolve();
      } catch (c) {
        return Promise.reject(c);
      }
    }

    function Vs(a) {
      Le.call(this);
      this.j = null;
      this.l = a;
      this.i = this.g = null;
      this.h = new cf();
      this.sessionId = '';
      this.expiration = NaN;
      this.closed = new Ac();
      this.keyStatuses = new Ws();
    }

    qa(Vs, Le);
    q = Vs.prototype;

    q.generateRequest = function (a, b) {
      const c = this;
      this.g = new Ac();

      try {
        const d = this.l.createSession('video/mp4', Ob(b));
        this.j = d;
        this.sessionId = d.sessionId || '';
        this.h.A(this.j, 'webkitkeymessage', (e) => {
          c.g && (c.g.resolve(), c.g = null);
          e = new Q('message', {
            messageType: void 0 == c.keyStatuses.g ? 'license-request' : 'license-renewal',
            message: Qb(e.message),
          });
          c.dispatchEvent(e);
        });
        this.h.A(d, 'webkitkeyadded', () => {
          c.i && (Xs(c, 'usable'), c.i.resolve(), c.i = null);
        });
        this.h.A(d, 'webkitkeyerror', () => {
          const e = Error('EME PatchedMediaKeysApple key error');
          e.errorCode = c.j.error;
          if (c.g != null) c.g.reject(e), c.g = null; else if (c.i != null) c.i.reject(e), c.i = null; else {
            switch (c.j.error.code) {
              case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
              case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
                Xs(c, 'output-not-allowed');
                break;

              default:
                Xs(c, 'internal-error');
            }
          }
        });
        Xs(this, 'status-pending');
      } catch (e) {
        this.g.reject(e);
      }

      return this.g;
    };

    q.load = function () {
      return Promise.reject(Error('MediaKeySession.load not yet supported'));
    };

    q.update = function (a) {
      this.i = new Ac();

      try {
        this.j.update(Ob(a));
      } catch (b) {
        this.i.reject(b);
      }

      return this.i;
    };

    q.close = function () {
      try {
        this.j.close(), this.closed.resolve(), this.h.ob();
      } catch (a) {
        this.closed.reject(a);
      }

      return this.closed;
    };

    q.remove = function () {
      return Promise.reject(Error('MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform'));
    };

    function Xs(a, b) {
      let c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.g = b;
      c = new Q('keystatuseschange');
      a.dispatchEvent(c);
    }

    function Ws() {
      this.size = 0;
      this.g = void 0;
    }

    q = Ws.prototype;

    q.forEach = function (a) {
      this.g && a(this.g, $f.value());
    };

    q.get = function (a) {
      if (this.has(a)) return this.g;
    };

    q.has = function (a) {
      const b = $f.value();
      return this.g && Mb(a, b) ? !0 : !1;
    };

    q.entries = function () {};

    q.keys = function () {};

    q.values = function () {};

    Bs(() => {
      window.HTMLVideoElement && window.WebKitMediaKeys && (delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Rs, window.MediaKeys = Us, window.MediaKeySystemAccess = Qs, navigator.requestMediaKeySystemAccess = Ps);
    });

    function Ys(a, b) {
      try {
        const c = new Zs(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    }

    function $s(a) {
      if (a.initData) {
        const b = new CustomEvent('encrypted');
        b.initDataType = 'cenc';
        b.initData = Qb(un(a.initData));
        this.dispatchEvent(b);
      }
    }

    function Zs(a, b) {
      this.keySystem = a;

      for (var c = !1, d = r(b), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        const f = {
          audioCapabilities: [],
          videoCapabilities: [],
          persistentState: 'optional',
          distinctiveIdentifier: 'optional',
          initDataTypes: e.initDataTypes,
          sessionTypes: ['temporary'],
          label: e.label,
        };
        let g = !1;

        if (e.audioCapabilities) {
          for (var h = r(e.audioCapabilities), k = h.next(); !k.done; k = h.next()) {
            k = k.value, k.contentType && (g = !0, MSMediaKeys.isTypeSupported(this.keySystem, k.contentType.split(';')[0]) && (f.audioCapabilities.push(k), c = !0));
          }
        }

        if (e.videoCapabilities) for (h = r(e.videoCapabilities), k = h.next(); !k.done; k = h.next()) k = k.value, k.contentType && (g = !0, MSMediaKeys.isTypeSupported(this.keySystem, k.contentType.split(';')[0]) && (f.videoCapabilities.push(k), c = !0));
        g || (c = MSMediaKeys.isTypeSupported(this.keySystem, 'video/mp4'));
        e.persistentState == 'required' && (c = !1);

        if (c) {
          this.g = f;
          return;
        }
      }

      c = Error('Unsupported keySystem');
      c.name = 'NotSupportedError';
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    }

    Zs.prototype.createMediaKeys = function () {
      const a = new at(this.keySystem);
      return Promise.resolve(a);
    };

    Zs.prototype.getConfiguration = function () {
      return this.g;
    };

    function bt(a) {
      const b = this.mediaKeys;
      b && b != a && ct(b, null);
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? ct(a, this) : Promise.resolve();
    }

    function at(a) {
      this.g = new MSMediaKeys(a);
      this.h = new cf();
    }

    at.prototype.createSession = function (a) {
      a = a || 'temporary';
      if (a != 'temporary') throw new TypeError(`Session type ${a} is unsupported on this platform.`);
      return new dt(this.g, a);
    };

    at.prototype.setServerCertificate = function () {
      return Promise.resolve(!1);
    };

    function ct(a, b) {
      a.h.ob();
      if (!b) return Promise.resolve();
      a.h.A(b, 'msneedkey', $s);

      try {
        return si(b, HTMLMediaElement.HAVE_METADATA, a.h, () => {
          b.msSetMediaKeys(a.g);
        }), Promise.resolve();
      } catch (c) {
        return Promise.reject(c);
      }
    }

    function dt(a) {
      Le.call(this);
      this.j = null;
      this.l = a;
      this.i = this.g = null;
      this.h = new cf();
      this.sessionId = '';
      this.expiration = NaN;
      this.closed = new Ac();
      this.keyStatuses = new et();
    }

    qa(dt, Le);
    q = dt.prototype;

    q.generateRequest = function (a, b) {
      const c = this;
      this.g = new Ac();

      try {
        this.j = this.l.createSession('video/mp4', Ob(b), null), this.h.A(this.j, 'mskeymessage', (d) => {
          c.g && (c.g.resolve(), c.g = null);
          d = new Q('message', {
            messageType: void 0 == c.keyStatuses.g ? 'license-request' : 'license-renewal',
            message: Qb(d.message),
          });
          c.dispatchEvent(d);
        }), this.h.A(this.j, 'mskeyadded', () => {
          c.g ? (ft(c, 'usable'), c.g.resolve(), c.g = null) : c.i && (ft(c, 'usable'), c.i.resolve(), c.i = null);
        }), this.h.A(this.j, 'mskeyerror', () => {
          const d = Error('EME PatchedMediaKeysMs key error');
          d.errorCode = c.j.error;
          if (c.g != null) c.g.reject(d), c.g = null; else if (c.i != null) c.i.reject(d), c.i = null; else {
            switch (c.j.error.code) {
              case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
              case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                ft(c, 'output-not-allowed');
                break;

              default:
                ft(c, 'internal-error');
            }
          }
        }), ft(this, 'status-pending');
      } catch (d) {
        this.g.reject(d);
      }

      return this.g;
    };

    q.load = function () {
      return Promise.reject(Error('MediaKeySession.load not yet supported'));
    };

    q.update = function (a) {
      this.i = new Ac();

      try {
        this.j.update(Ob(a));
      } catch (b) {
        this.i.reject(b);
      }

      return this.i;
    };

    q.close = function () {
      try {
        this.j.close(), this.closed.resolve(), this.h.ob();
      } catch (a) {
        this.closed.reject(a);
      }

      return this.closed;
    };

    q.remove = function () {
      return Promise.reject(Error('MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform'));
    };

    function ft(a, b) {
      let c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.g = b;
      c = new Q('keystatuseschange');
      a.dispatchEvent(c);
    }

    function et() {
      this.size = 0;
      this.g = void 0;
    }

    q = et.prototype;

    q.forEach = function (a) {
      this.g && a(this.g, $f.value());
    };

    q.get = function (a) {
      if (this.has(a)) return this.g;
    };

    q.has = function (a) {
      const b = $f.value();
      return this.g && Mb(a, b) ? !0 : !1;
    };

    q.entries = function () {};

    q.keys = function () {};

    q.values = function () {};

    Bs(() => {
      !window.HTMLVideoElement || !window.MSMediaKeys || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, window.MediaKeys = at, window.MediaKeySystemAccess = Zs, navigator.requestMediaKeySystemAccess = Ys, HTMLMediaElement.prototype.setMediaKeys = bt);
    });

    function gt() {
      return Promise.reject(Error('The key system specified is not supported.'));
    }

    function ht(a) {
      return a == null ? Promise.resolve() : Promise.reject(Error('MediaKeys not supported.'));
    }

    function it() {
      throw new TypeError('Illegal constructor.');
    }

    it.prototype.createSession = function () {};

    it.prototype.setServerCertificate = function () {};

    function jt() {
      this.keySystem = '';
      throw new TypeError('Illegal constructor.');
    }

    jt.prototype.getConfiguration = function () {};

    jt.prototype.createMediaKeys = function () {};

    Bs(() => {
      !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (navigator.requestMediaKeySystemAccess = gt, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = ht, window.MediaKeys = it, window.MediaKeySystemAccess = jt);
    }, -10);

    function kt(a) {
      const b = lt;
      return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a;
    }

    function mt(a, b) {
      try {
        const c = new nt(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    }

    function ot(a) {
      const b = this.mediaKeys;
      b && b != a && pt(b, null);
      delete this.mediaKeys;
      (this.mediaKeys = a) && pt(a, this);
      return Promise.resolve();
    }

    function nt(a, b) {
      this.g = this.keySystem = a;
      let c = !1;
      a == 'org.w3.clearkey' && (this.g = 'webkit-org.w3.clearkey', c = !1);
      let d = !1;
      let e = document.getElementsByTagName('video');
      e = e.length ? e[0] : document.createElement('video');

      for (let f = r(b), g = f.next(); !g.done; g = f.next()) {
        g = g.value;
        const h = {
          audioCapabilities: [],
          videoCapabilities: [],
          persistentState: 'optional',
          distinctiveIdentifier: 'optional',
          initDataTypes: g.initDataTypes,
          sessionTypes: ['temporary'],
          label: g.label,
        };
        let k = !1;

        if (g.audioCapabilities) {
          for (var l = r(g.audioCapabilities), m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType.split(';')[0], this.g) && (h.audioCapabilities.push(m), d = !0));
        }

        if (g.videoCapabilities) for (l = r(g.videoCapabilities), m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType, this.g) && (h.videoCapabilities.push(m), d = !0));
        k || (d = e.canPlayType('video/mp4', this.g) || e.canPlayType('video/webm', this.g));
        g.persistentState == 'required' && (c ? (h.persistentState = 'required', h.sessionTypes = ['persistent-license']) : d = !1);

        if (d) {
          this.h = h;
          return;
        }
      }

      c = 'Unsupported keySystem';
      if (a == 'org.w3.clearkey' || a == 'com.widevine.alpha') c = 'None of the requested configurations were supported.';
      c = Error(c);
      c.name = 'NotSupportedError';
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    }

    nt.prototype.createMediaKeys = function () {
      const a = new qt(this.g);
      return Promise.resolve(a);
    };

    nt.prototype.getConfiguration = function () {
      return this.h;
    };

    function qt(a) {
      this.l = a;
      this.g = null;
      this.h = new cf();
      this.i = [];
      this.j = new Map();
    }

    function pt(a, b) {
      a.g = b;
      a.h.ob();
      const c = lt;
      b && (a.h.A(b, `${c}needkey`, (d) => {
        const e = new CustomEvent('encrypted');
        e.initDataType = 'cenc';
        e.initData = Qb(d.initData);
        a.g.dispatchEvent(e);
      }), a.h.A(b, `${c}keymessage`, (d) => {
        const e = rt(a, d.sessionId);
        e && (d = new Q('message', {
          messageType: void 0 == e.keyStatuses.g ? 'licenserequest' : 'licenserenewal',
          message: d.message,
        }), e.h && (e.h.resolve(), e.h = null), e.dispatchEvent(d));
      }), a.h.A(b, `${c}keyadded`, (d) => {
        if (d = rt(a, d.sessionId)) {
          st(d, 'usable'), d.g && d.g.resolve(), d.g = null;
        }
      }), a.h.A(b, `${c}keyerror`, (d) => {
        const e = rt(a, d.sessionId);
        e && e.handleError(d);
      }));
    }

    qt.prototype.createSession = function (a) {
      a = a || 'temporary';
      if (a != 'temporary' && a != 'persistent-license') throw new TypeError(`Session type ${a} is unsupported on this platform.`);
      const b = this.g || document.createElement('video');
      b.src || (b.src = 'about:blank');
      a = new tt(b, this.l, a);
      this.i.push(a);
      return a;
    };

    qt.prototype.setServerCertificate = function () {
      return Promise.resolve(!1);
    };

    function rt(a, b) {
      let c = a.j.get(b);
      return c || ((c = a.i.shift()) ? (c.sessionId = b, a.j.set(b, c), c) : null);
    }

    function tt(a, b, c) {
      Le.call(this);
      this.j = a;
      this.m = !1;
      this.g = this.h = null;
      this.i = b;
      this.l = c;
      this.sessionId = '';
      this.expiration = NaN;
      this.closed = new Ac();
      this.keyStatuses = new ut();
    }

    qa(tt, Le);
    q = tt.prototype;

    q.handleError = function (a) {
      let b = Error('EME v0.1b key error');
      const c = a.errorCode;
      c.systemCode = a.systemCode;
      b.errorCode = c;
      !a.sessionId && this.h ? (a.systemCode == 45 && (b.message = 'Unsupported session type.'), this.h.reject(b), this.h = null) : a.sessionId && this.g ? (this.g.reject(b), this.g = null) : (b = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? st(this, 'output-restricted') : b == 1 ? st(this, 'expired') : st(this, 'internal-error'));
    };

    function vt(a, b, c) {
      if (a.m) return Promise.reject(Error('The session is already initialized.'));
      a.m = !0;

      try {
        if (a.l == 'persistent-license') {
          if (c) var d = Ob(Hc(`LOAD_SESSION|${c}`)); else {
            const e = Hc('PERSISTENT|');
            d = Pc(e, b);
          }
        } else d = Ob(b);
      } catch (g) {
        return Promise.reject(g);
      }

      a.h = new Ac();
      const f = kt('generateKeyRequest');

      try {
        a.j[f](a.i, d);
      } catch (g) {
        if (g.name != 'InvalidStateError') return a.h = null, Promise.reject(g);
        new P(() => {
          try {
            a.j[f](a.i, d);
          } catch (h) {
            a.h.reject(h), a.h = null;
          }
        }).S(0.01);
      }

      return a.h;
    }

    function wt(a, b, c) {
      if (a.g) a.g.then(() => wt(a, b, c)).catch(() => wt(a, b, c)); else {
        a.g = b;

        if (a.i == 'webkit-org.w3.clearkey') {
          var d = Dc(c);
          var e = JSON.parse(d);
          e.keys[0].kty != 'oct' && (a.g.reject(Error('Response is not a valid JSON Web Key Set.')), a.g = null);
          d = Mc(e.keys[0].k);
          e = Mc(e.keys[0].kid);
        } else d = Ob(c), e = null;

        const f = kt('addKey');

        try {
          a.j[f](a.i, d, e, a.sessionId);
        } catch (g) {
          a.g.reject(g), a.g = null;
        }
      }
    }

    function st(a, b) {
      let c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.g = b;
      c = new Q('keystatuseschange');
      a.dispatchEvent(c);
    }

    q.generateRequest = function (a, b) {
      return vt(this, b, null);
    };

    q.load = function (a) {
      return this.l == 'persistent-license' ? vt(this, null, a) : Promise.reject(Error('Not a persistent session.'));
    };

    q.update = function (a) {
      const b = new Ac();
      wt(this, b, a);
      return b;
    };

    q.close = function () {
      if (this.l != 'persistent-license') {
        if (!this.sessionId) return this.closed.reject(Error('The session is not callable.')), this.closed;
        const a = kt('cancelKeyRequest');

        try {
          this.j[a](this.i, this.sessionId);
        } catch (b) {}
      }

      this.closed.resolve();
      return this.closed;
    };

    q.remove = function () {
      return this.l != 'persistent-license' ? Promise.reject(Error('Not a persistent session.')) : this.close();
    };

    function ut() {
      this.size = 0;
      this.g = void 0;
    }

    q = ut.prototype;

    q.forEach = function (a) {
      this.g && a(this.g, $f.value());
    };

    q.get = function (a) {
      if (this.has(a)) return this.g;
    };

    q.has = function (a) {
      const b = $f.value();
      return this.g && Mb(a, b) ? !0 : !1;
    };

    q.entries = function () {};

    q.keys = function () {};

    q.values = function () {};

    var lt = '';
    Bs(() => {
      if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
        if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) lt = 'webkit'; else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
        navigator.requestMediaKeySystemAccess = mt;
        delete HTMLMediaElement.prototype.mediaKeys;
        HTMLMediaElement.prototype.mediaKeys = null;
        HTMLMediaElement.prototype.setMediaKeys = ot;
        window.MediaKeys = qt;
        window.MediaKeySystemAccess = nt;
      }
    });

    function xt(a) {
      a = a.target;

      if (a.webkitPresentationMode == 'picture-in-picture') {
        document.pictureInPictureElement = a;
        var b = new Event('enterpictureinpicture');
        a.dispatchEvent(b);
      } else document.pictureInPictureElement == a && (document.pictureInPictureElement = null), b = new Event('leavepictureinpicture'), a.dispatchEvent(b);
    }

    function yt() {
      return this.webkitSupportsPresentationMode('picture-in-picture') ? (this.webkitSetPresentationMode('picture-in-picture'), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error('PiP not allowed by video element'));
    }

    function zt() {
      const a = document.pictureInPictureElement;
      return a ? (a.webkitSetPresentationMode('inline'), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error('No picture in picture element found'));
    }

    function At() {
      return this.hasAttribute('disablePictureInPicture') ? !0 : !this.webkitSupportsPresentationMode('picture-in-picture');
    }

    function Bt(a) {
      a ? this.setAttribute('disablePictureInPicture', '') : this.removeAttribute('disablePictureInPicture');
    }

    Bs(() => {
      if (window.HTMLVideoElement) {
        const a = HTMLVideoElement.prototype;
        a.requestPictureInPicture && document.exitPictureInPicture || !a.webkitSupportsPresentationMode || (document.pictureInPictureEnabled = !0, document.pictureInPictureElement = null, a.requestPictureInPicture = yt, Object.defineProperty(a, 'disablePictureInPicture', {
          get: At,
          set: Bt,
          enumerable: !0,
          configurable: !0,
        }), document.exitPictureInPicture = zt, document.addEventListener('webkitpresentationmodechanged', xt, !0));
      }
    });

    function Ct() {
      return new Promise((a, b) => {
        navigator.webkitTemporaryStorage.queryUsageAndQuota((c, d) => {
          a({
            usage: c,
            quota: d,
          });
        }, b);
      });
    }

    Bs(() => {
      navigator.storage && navigator.storage.estimate || !navigator.webkitTemporaryStorage || !navigator.webkitTemporaryStorage.queryUsageAndQuota || ('storage' in navigator || (navigator.storage = {}), navigator.storage.estimate = Ct);
    });
    Bs(() => {
      if (window.HTMLMediaElement) {
        const a = HTMLMediaElement.prototype.play;

        HTMLMediaElement.prototype.play = function () {
          const b = a.apply(this);
          b && b.catch(() => {});
          return b;
        };
      }
    });

    function Dt() {
      return {
        droppedVideoFrames: this.webkitDroppedFrameCount,
        totalVideoFrames: this.webkitDecodedFrameCount,
        corruptedVideoFrames: 0,
        creationTime: NaN,
        totalFrameDelay: 0,
      };
    }

    Bs(() => {
      if (window.HTMLVideoElement) {
        const a = HTMLVideoElement.prototype;
        !a.getVideoPlaybackQuality && 'webkitDroppedFrameCount' in a && (a.getVideoPlaybackQuality = Dt);
      }
    });

    function Et(a, b, c) {
      return new window.TextTrackCue(a, b, c);
    }

    function Ft(a, b, c) {
      return new window.TextTrackCue(`${a}-${b}-${c}`, a, b, c);
    }

    Bs(() => {
      if (!window.VTTCue && window.TextTrackCue) {
        let a = null;
        const b = TextTrackCue.length;
        if (b == 3) a = Et; else if (b == 6) a = Ft; else {
          try {
            var c = !!Et(1, 2, '');
          } catch (d) {
            c = !1;
          }

          c && (a = Et);
        }
        a && (window.VTTCue = function (d, e, f) {
          return a(d, e, f);
        });
      }
    });

    function Gt() {}

    Gt.prototype.parseInit = function () {};

    Gt.prototype.parseMedia = function (a, b) {
      let c = null;
      const d = [];
      let e = Dc(a).split(/\r?\n/);
      e = r(e);

      for (let f = e.next(); !f.done; f = e.next()) {
        if ((f = f.value) && !/^\s+$/.test(f) && (f = Ht.exec(f))) {
          let g = It.exec(f[1]);
          g = 60 * parseInt(g[1], 10) + parseFloat(g[2].replace(',', '.'));
          f = new qb(g, b.segmentEnd ? b.segmentEnd : g + 2, f[2]);
          c && (c.endTime = g, d.push(c));
          c = f;
        }
      }

      c && d.push(c);
      return d;
    };

    M('shaka.text.LrcTextParser', Gt);
    Gt.prototype.parseMedia = Gt.prototype.parseMedia;
    Gt.prototype.parseInit = Gt.prototype.parseInit;
    var Ht = /^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/;
    var It = /^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;

    ad['application/x-subtitle-lrc'] = function () {
      return new Gt();
    };

    function Jt() {}

    Jt.prototype.parseInit = function () {};

    Jt.prototype.parseMedia = function (a, b) {
      let c = Dc(a);
      const d = [];
      let e = new DOMParser();
      let f = null;
      if (c == '') return d;

      try {
        f = e.parseFromString(c, 'text/xml');
      } catch (D) {
        throw new O(2, 2, 2005, 'Failed to parse TTML.');
      }

      if (f) {
        if (c = f.getElementsByTagName('parsererror')[0]) throw new O(2, 2, 2005, c.textContent);
        let g = f.getElementsByTagName('tt')[0];
        if (!g) throw new O(2, 2, 2005, 'TTML does not contain <tt> tag.');
        e = g.getElementsByTagName('body')[0];
        if (!e) return [];
        c = An(g, 'http://www.w3.org/ns/ttml#parameter', 'frameRate');
        let h = An(g, 'http://www.w3.org/ns/ttml#parameter', 'subFrameRate');
        let k = An(g, 'http://www.w3.org/ns/ttml#parameter', 'frameRateMultiplier');
        let l = An(g, 'http://www.w3.org/ns/ttml#parameter', 'tickRate');
        let m = An(g, 'http://www.w3.org/ns/ttml#parameter', 'cellResolution');
        f = g.getAttribute('xml:space') || 'default';
        let n = An(g, 'http://www.w3.org/ns/ttml#styling', 'extent');
        if (f != 'default' && f != 'preserve') throw new O(2, 2, 2005, `Invalid xml:space value: ${f}`);
        f = f == 'default';
        c = new Kt(c, h, k, l);
        m = m ? (m = /^(\d+) (\d+)$/.exec(m)) ? {
          columns: parseInt(m[1], 10),
          rows: parseInt(m[2], 10),
        } : null : null;
        h = (h = g.getElementsByTagName('metadata')[0]) ? zn(h) : [];
        k = Array.from(g.getElementsByTagName('style'));
        g = Array.from(g.getElementsByTagName('region'));
        l = [];

        for (var p = r(g), t = p.next(); !t.done; t = p.next()) {
          let v = t.value;
          t = new tb();
          let w = v.getAttribute('xml:id');

          if (w) {
            t.id = w;
            let x = null;
            n && (x = Lt.exec(n) || Mt.exec(n));
            w = x ? Number(x[1]) : null;
            x = x ? Number(x[2]) : null;
            var y;
            var E;

            if (y = Nt(v, k, 'extent')) {
              y = (E = Lt.exec(y)) || Mt.exec(y), y != null && (t.width = Number(y[1]), t.height = Number(y[2]), E || (w != null && (t.width = 100 * t.width / w), x != null && (t.height = 100 * t.height / x)), t.widthUnits = E || w != null ? Jb : 0, t.heightUnits = E || x != null ? Jb : 0);
            }

            if (v = Nt(v, k, 'origin')) y = (E = Lt.exec(v)) || Mt.exec(v), y != null && (t.viewportAnchorX = Number(y[1]), t.viewportAnchorY = Number(y[2]), E || (x != null && (t.viewportAnchorY = 100 * t.viewportAnchorY / x), w != null && (t.viewportAnchorX = 100 * t.viewportAnchorX / w)), t.viewportAnchorUnits = E || w != null ? Jb : 0);
          } else t = null;

          t && l.push(t);
        }

        if (wn(e, 'p').length) throw new O(2, 2, 2001, '<p> can only be inside <div> in TTML');
        e = r(wn(e, 'div'));

        for (n = e.next(); !n.done; n = e.next()) {
          n = n.value;
          if (wn(n, 'span').length) throw new O(2, 2, 2001, '<span> can only be inside <p> in TTML');
          if ((p = wn(n, 'p')) && p.length) for (n = r(p), p = n.next(); !p.done; p = n.next()) (p = Ot(p.value, b.periodStart, c, h, k, g, l, f, !1, m)) && d.push(p); else (n = Ot(n, b.periodStart, c, h, k, g, l, f, !1, m)) && d.push(n);
        }
      }

      return d;
    };

    function Ot(a, b, c, d, e, f, g, h, k, l) {
      let m = a.parentNode;

      if (a.nodeType == Node.TEXT_NODE) {
        var n = document.createElement('span');
        n.textContent = a.textContent;
        a = n;
      }

      h = (a.getAttribute('xml:space') || (h ? 'default' : 'preserve')) == 'default';
      n = /\S/.test(a.textContent);
      if (!(a.hasAttribute('begin') || a.hasAttribute('end') || a.hasAttribute('dur') || n || a.tagName == 'br' || k && !h)) return null;
      let p = Pt(a, c);
      n = p.start;

      for (p = p.end; m && m.nodeType == Node.ELEMENT_NODE && m.tagName != 'tt';) p = Qt(m, c, n, p), n = p.start, p = p.end, m = m.parentNode;

      n == null && (n = 0);
      n += b;
      p = p == null ? Infinity : p + b;
      if (a.tagName == 'br') return d = new qb(n, p, ''), d.lineBreak = !0, d;
      let t = '';
      m = [];
      if (Array.from(a.childNodes).every((y) => y.nodeType == Node.TEXT_NODE)) t = a.textContent, h && (t = t.trim(), t = t.replace(/\s+/g, ' ')); else for (let v = r(a.childNodes), w = v.next(); !w.done; w = v.next()) (w = Ot(w.value, b, c, d, e, f, g, h, !0, l)) && m.push(w);
      b = new qb(n, p, t);
      b.nestedCues = m;
      l && (b.cellResolution = l);

      if ((f = Rt(a, 'region', f, '')[0]) && f.getAttribute('xml:id')) {
        const x = f.getAttribute('xml:id');
        b.region = g.filter((y) => y.id == x)[0];
      }

      g = null;
      l = r(St);

      for (c = l.next(); !c.done && !(g = Rt(a, 'backgroundImage', d, '#', c.value)[0]); c = l.next());

      Tt(b, a, f, g, e, k, m.length == 0);
      return b;
    }

    function Tt(a, b, c, d, e, f, g) {
      f = f || g;
      Ut(b, c, e, 'direction', f) == 'rtl' && (a.direction = 'rtl');
      g = Ut(b, c, e, 'writingMode', f);
      g == 'tb' || g == 'tblr' ? a.writingMode = 'vertical-lr' : g == 'tbrl' ? a.writingMode = 'vertical-rl' : g == 'rltb' || g == 'rl' ? a.direction = 'rtl' : g && (a.direction = rb);
      (g = Ut(b, c, e, 'textAlign', f)) ? (a.positionAlign = Vt[g], a.lineAlign = Wt[g], a.textAlign = Db[g.toUpperCase()]) : a.textAlign = 'start';
      if (g = Ut(b, c, e, 'displayAlign', f)) a.displayAlign = Eb[g.toUpperCase()];
      if (g = Ut(b, c, e, 'color', f)) a.color = g;
      if (g = Ut(b, c, e, 'backgroundColor', f)) a.backgroundColor = g;
      if (g = Ut(b, c, e, 'border', f)) a.border = g;
      if (g = Ut(b, c, e, 'fontFamily', f)) a.fontFamily = g;
      (g = Ut(b, c, e, 'fontWeight', f)) && g == 'bold' && (a.fontWeight = 700);
      g = Ut(b, c, e, 'wrapOption', f);
      a.wrapLine = g && g == 'noWrap' ? !1 : !0;
      (g = Ut(b, c, e, 'lineHeight', f)) && g.match(Xt) && (a.lineHeight = g);
      (g = Ut(b, c, e, 'fontSize', f)) && (g.match(Xt) || g.match(Yt)) && (a.fontSize = g);
      if (g = Ut(b, c, e, 'fontStyle', f)) a.fontStyle = Ib[g.toUpperCase()];

      if (d) {
        g = d.getAttribute('imageType') || d.getAttribute('imagetype');
        const h = d.getAttribute('encoding');
        d = d.textContent.trim();
        g == 'PNG' && h == 'Base64' && d && (a.backgroundImage = `data:image/png;base64,${d}`);
      }

      (d = Ut(b, c, e, 'letterSpacing', f)) && d.match(Xt) && (a.letterSpacing = d);
      (d = Ut(b, c, e, 'linePadding', f)) && d.match(Xt) && (a.linePadding = d);
      if (f = Ut(b, c, e, 'opacity', f)) a.opacity = parseFloat(f);
      (c = Nt(c, e, 'textDecoration')) && Zt(a, c);
      (b = $t(b, e, 'textDecoration')) && Zt(a, b);
    }

    function Zt(a, b) {
      for (let c = r(b.split(' ')), d = c.next(); !d.done; d = c.next()) {
        switch (d.value) {
          case 'underline':
            a.textDecoration.includes('underline') || a.textDecoration.push('underline');
            break;

          case 'noUnderline':
            a.textDecoration.includes('underline') && nb(a.textDecoration, 'underline');
            break;

          case 'lineThrough':
            a.textDecoration.includes('lineThrough') || a.textDecoration.push('lineThrough');
            break;

          case 'noLineThrough':
            a.textDecoration.includes('lineThrough') && nb(a.textDecoration, 'lineThrough');
            break;

          case 'overline':
            a.textDecoration.includes('overline') || a.textDecoration.push('overline');
            break;

          case 'noOverline':
            a.textDecoration.includes('overline') && nb(a.textDecoration, 'overline');
        }
      }
    }

    function Ut(a, b, c, d, e) {
      e = void 0 === e ? !0 : e;
      return (a = $t(a, c, d)) ? a : e ? Nt(b, c, d) : null;
    }

    function Nt(a, b, c) {
      if (!a) return null;
      const d = An(a, 'http://www.w3.org/ns/ttml#styling', c);
      return d || au(a, b, c);
    }

    function $t(a, b, c) {
      const d = An(a, 'http://www.w3.org/ns/ttml#styling', c);
      return d || au(a, b, c);
    }

    function au(a, b, c) {
      a = Rt(a, 'style', b, '');

      for (var d = null, e = 0; e < a.length; e++) {
        let f = An(a[e], 'urn:ebu:tt:style', c);
        f || (f = An(a[e], 'http://www.w3.org/ns/ttml#styling', c));
        f || (f = $t(a[e], b, c));
        f && (d = f);
      }

      return d;
    }

    function Rt(a, b, c, d, e) {
      const f = [];
      if (!a || c.length < 1) return f;
      let g = a;

      for (a = null; g && !(a = e ? An(g, e, b) : g.getAttribute(b)) && (g = g.parentNode, g instanceof Element););

      if (b = a) {
        for (b = r(b.split(' ')), e = b.next(); !e.done; e = b.next()) {
          for (e = e.value, a = r(c), g = a.next(); !g.done; g = a.next()) {
            if (g = g.value, d + g.getAttribute('xml:id') == e) {
              f.push(g);
              break;
            }
          }
        }
      }
      return f;
    }

    function Qt(a, b, c, d) {
      a = Pt(a, b);
      c == null ? c = a.start : a.start != null && (c += a.start);
      d == null ? d = a.end : a.start != null && (d += a.start);
      return {
        start: c,
        end: d,
      };
    }

    function Pt(a, b) {
      const c = bu(a.getAttribute('begin'), b);
      let d = bu(a.getAttribute('end'), b);
      const e = bu(a.getAttribute('dur'), b);
      d == null && e != null && (d = c + e);
      return {
        start: c,
        end: d,
      };
    }

    function bu(a, b) {
      let c = null;

      if (cu.test(a)) {
        c = cu.exec(a);
        const d = Number(c[1]);
        const e = Number(c[2]);
        let f = Number(c[3]);
        let g = Number(c[4]);
        g += (Number(c[5]) || 0) / b.h;
        f += g / b.frameRate;
        c = f + 60 * e + 3600 * d;
      } else if (du.test(a)) c = eu(du, a); else if (fu.test(a)) c = eu(fu, a); else if (gu.test(a)) c = gu.exec(a), c = Number(c[1]) / b.frameRate; else if (hu.test(a)) c = hu.exec(a), c = Number(c[1]) / b.g; else if (iu.test(a)) c = eu(iu, a); else if (a) throw new O(2, 2, 2001, 'Could not parse cue time range in TTML');

      return c;
    }

    function eu(a, b) {
      const c = a.exec(b);
      return c == null || c[0] == '' ? null : (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0);
    }

    M('shaka.text.TtmlTextParser', Jt);
    Jt.prototype.parseMedia = Jt.prototype.parseMedia;
    Jt.prototype.parseInit = Jt.prototype.parseInit;

    function Kt(a, b, c, d) {
      this.frameRate = Number(a) || 30;
      this.h = Number(b) || 1;
      this.g = Number(d);
      this.g == 0 && (this.g = a ? this.frameRate * this.h : 1);
      c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= Number(a[1]) / Number(a[2]));
    }

    var Lt = /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/;
    var Yt = /^(\d{1,2}(?:\.\d+)?|100)%$/;
    var Xt = /^(\d+px|\d+em|\d*\.?\d+c)$/;
    var Mt = /^(\d+)px (\d+)px$/;
    var cu = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/;
    var du = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/;
    var fu = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/;
    var gu = /^(\d*(?:\.\d*)?)f$/;
    var hu = /^(\d*(?:\.\d*)?)t$/;
    var iu = /^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/;
    var Wt = {
      left: yb,
      center: 'center',
      right: 'end',
      start: yb,
      end: 'end',
    };
    var Vt = {
      left: 'line-left',
      center: 'center',
      right: 'line-right',
    };
    var St = ['http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt', 'http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt'];

    ad['application/ttml+xml'] = function () {
      return new Jt();
    };

    function ju() {
      this.s = new Jt();
    }

    ju.prototype.parseInit = function (a) {
      let b = !1;
      new jg().box('moov', ng).box('trak', ng).box('mdia', ng)
        .box('minf', ng)
        .box('stbl', ng)
        .V('stsd', pg)
        .box('stpp', (c) => {
          b = !0;
          c.parser.stop();
        })
        .parse(a);
      if (!b) throw new O(2, 2, 2007);
    };

    ju.prototype.parseMedia = function (a, b) {
      const c = this;
      let d = !1;
      let e = [];
      new jg().box('mdat', qg((f) => {
        d = !0;
        e = e.concat(c.s.parseMedia(f, b));
      })).parse(a, !1);
      if (!d) throw new O(2, 2, 2007);
      return e;
    };

    M('shaka.text.Mp4TtmlParser', ju);
    ju.prototype.parseMedia = ju.prototype.parseMedia;
    ju.prototype.parseInit = ju.prototype.parseInit;

    ad['application/mp4; codecs="stpp"'] = function () {
      return new ju();
    };

    ad['application/mp4; codecs="stpp.ttml.im1t"'] = function () {
      return new ju();
    };

    ad['application/mp4; codecs="stpp.TTML.im1t"'] = function () {
      return new ju();
    };

    function ku() {}

    ku.prototype.parseInit = function () {};

    ku.prototype.parseMedia = function (a, b) {
      let c = Dc(a);
      c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, '\n');
      let d = c.split(/\n{2,}/m);
      if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new O(2, 2, 2E3);
      c = b.periodStart;

      if (d[0].includes('X-TIMESTAMP-MAP')) {
        var e = d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m);
        var f = d[0].match(/MPEGTS:(\d+)/m);

        if (e && f) {
          c = lu(new Lp(e[1]));
          if (c == null) throw new O(2, 2, 2E3);
          f = Number(f[1]);

          for (e = b.segmentStart; e >= 95443.7176888889;) e -= 95443.7176888889, f += 8589934592;

          c = b.periodStart + f / 9E4 - c;
        }
      }

      f = [];
      e = r(d[0].split('\n'));

      for (var g = e.next(); !g.done; g = e.next()) {
        if (g = g.value, /^Region:/.test(g)) {
          g = new Lp(g);
          var h = new tb();
          Op(g);
          Mp(g);

          for (var k = Op(g); k;) {
            var l = h;
            var m = k;
            (k = /^id=(.*)$/.exec(m)) ? l.id = k[1] : (k = /^width=(\d{1,2}|100)%$/.exec(m)) ? l.width = Number(k[1]) : (k = /^lines=(\d+)$/.exec(m)) ? (l.height = Number(k[1]), l.heightUnits = 2) : (k = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m)) ? (l.regionAnchorX = Number(k[1]), l.regionAnchorY = Number(k[2])) : (k = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m)) ? (l.viewportAnchorX = Number(k[1]), l.viewportAnchorY = Number(k[2])) : /^scroll=up$/.exec(m) && (l.scroll = 'up');
            Mp(g);
            k = Op(g);
          }

          f.push(h);
        }
      }

      e = new Map();
      mu(e);
      g = [];
      d = r(d.slice(1));

      for (h = d.next(); !h.done; h = d.next()) {
        h = h.value.split('\n');

        if ((h.length != 1 || h[0]) && !/^NOTE($|[ \t])/.test(h[0]) && h[0] == 'STYLE' && h[1].includes('::cue')) {
          l = 'global';
          (k = h[1].match(/\((.*)\)/)) && (l = k.pop());
          k = h.slice(2, -1);
          h[1].includes('}') && (m = /\{(.*?)\}/.exec(h[1])) && (k = m[1].split(';'));
          m = new qb(0, 0, '');

          for (var n = !1, p = 0; p < k.length; p++) {
            var t = /^\s*([^:]+):\s*(.*)/.exec(k[p]);

            if (t) {
              const v = t[2].trim().replace(';', '');

              switch (t[1].trim()) {
                case 'background-color':
                  n = !0;
                  m.backgroundColor = v;
                  break;

                case 'color':
                  n = !0;
                  m.color = v;
                  break;

                case 'font-family':
                  n = !0;
                  m.fontFamily = v;
                  break;

                case 'font-size':
                  n = !0;
                  m.fontSize = v;
                  break;

                case 'font-weight':
                  parseInt(v, 10) >= 700 && (n = !0, m.fontWeight = 700);
                  break;

                case 'font-style':
                  switch (v) {
                    case 'normal':
                      n = !0;
                      m.fontStyle = Bb;
                      break;

                    case 'italic':
                      n = !0;
                      m.fontStyle = 'italic';
                      break;

                    case 'oblique':
                      n = !0, m.fontStyle = 'oblique';
                  }

                  break;

                case 'opacity':
                  n = !0;
                  m.opacity = parseFloat(v);
                  break;

                case 'white-space':
                  n = !0, m.wrapLine = v != 'noWrap';
              }
            }
          }

          n && e.set(l, m);
        }

        p = c;
        if (h.length == 1 && !h[0] || /^NOTE($|[ \t])/.test(h[0]) || h[0] == 'STYLE') h = null; else {
          l = null;
          h[0].includes('--\x3e') || (l = h[0], h.splice(0, 1));
          k = new Lp(h[0]);
          m = lu(k);
          t = Np(k, /[ \t]+--\x3e[ \t]+/g);
          n = lu(k);
          if (m == null || t == null || n == null) throw new O(2, 2, 2001, 'Could not parse cue time range in WebVTT');
          m += p;
          n += p;
          p = h.slice(1).join('\n').trim();
          e.has('global') ? (h = e.get('global').clone(), h.startTime = m, h.endTime = n, h.payload = '') : h = new qb(m, n, '');
          nu(p, h, e);
          Mp(k);

          for (m = Op(k); m;) ou(h, m, f), Mp(k), m = Op(k);

          l != null && (h.id = l);
        }
        h && g.push(h);
      }

      return g;
    };

    function mu(a) {
      for (var b = r(Object.entries(Gb)), c = b.next(); !c.done; c = b.next()) {
        var d = r(c.value);
        c = d.next().value;
        d = d.next().value;
        var e = new qb(0, 0, '');
        e.color = d;
        a.set(c, e);
      }

      b = r(Object.entries(Hb));

      for (c = b.next(); !c.done; c = b.next()) d = r(c.value), c = d.next().value, d = d.next().value, e = new qb(0, 0, ''), e.backgroundColor = d, a.set(c, e);
    }

    function nu(a, b, c) {
      c.size === 0 && mu(c);

      a: {
        var d = a;
        a = [];

        for (var e = -1, f = '', g = 0; g < d.length; g++) {
          if (d[g] === '/') {
            let h = d.indexOf('>', g);

            if (h <= g) {
              a = d;
              break a;
            }

            h = d.substring(g + 1, h);
            const k = a.pop();
            if (k === h) f += `/${h}>`; else {
              if (!k.startsWith('c.') || h !== 'c') {
                a = d;
                break a;
              }

              f += `/${k}>`;
            }
            g += h.length + 1;
          } else d[g] === '<' ? e = g + 1 : d[g] === '>' && e > 0 && (a.push(d.substr(e, g - e)), e = -1), f += d[g];
        }

        a = f;
      }

      if (e = Mn(`<span>${a}</span>`, 'span')) {
        d = [];
        e = e.childNodes;

        if (e.length == 1 && (f = e[0], f.nodeType == Node.TEXT_NODE || f.nodeType == Node.CDATA_SECTION_NODE)) {
          b.payload = a;
          return;
        }

        a = r(e);

        for (e = a.next(); !e.done; e = a.next()) pu(e.value, b, d, c);

        b.nestedCues = d;
      } else b.payload = a;
    }

    function qu(a, b) {
      return a && a.length > 0 ? a : b;
    }

    function pu(a, b, c, d) {
      const e = b.clone();

      if (a.nodeType === Node.ELEMENT_NODE && a.nodeName) {
        for (var f = r(a.nodeName.split(/[ .]+/)), g = f.next(); !g.done; g = f.next()) {
          g = g.value;

          if (d.has(g)) {
            const h = d.get(g);
            h && (e.backgroundColor = qu(h.backgroundColor, e.backgroundColor), e.color = qu(h.color, e.color), e.fontFamily = qu(h.fontFamily, e.fontFamily), e.fontSize = qu(h.fontSize, e.fontSize), e.fontWeight = h.fontWeight, e.fontStyle = h.fontStyle, e.opacity = h.opacity, e.wrapLine = h.wrapLine);
          }

          switch (g) {
            case 'b':
              e.fontWeight = 700;
              break;

            case 'i':
              e.fontStyle = 'italic';
              break;

            case 'u':
              e.textDecoration.push('underline');
          }
        }
      }

      if (Cn(a)) for (f = !0, d = r(a.textContent.split('\n')), a = d.next(); !a.done; a = d.next()) a = a.value, f || (f = b.clone(), f.lineBreak = !0, c.push(f)), a.length > 0 && (f = e.clone(), f.payload = a, c.push(f)), f = !1; else for (b = r(a.childNodes), a = b.next(); !a.done; a = b.next()) pu(a.value, e, c, d);
    }

    function ou(a, b, c) {
      let d;
      if (d = /^align:(start|middle|center|end|left|right)$/.exec(b)) b = d[1], b == 'middle' ? a.textAlign = vb : a.textAlign = Db[b.toUpperCase()]; else if (d = /^vertical:(lr|rl)$/.exec(b)) a.writingMode = d[1] == 'lr' ? 'vertical-lr' : 'vertical-rl'; else if (d = /^size:([\d.]+)%$/.exec(b)) a.size = Number(d[1]); else if (d = /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) {
        a.position = Number(d[1]), d[2] && (b = d[2], a.positionAlign = b == 'line-left' || b == 'start' ? 'line-left' : b == 'line-right' || b == 'end' ? 'line-right' : 'center');
      } else if (d = /^region:(.*)$/.exec(b)) {
        if (b = ru(c, d[1])) a.region = b;
      } else if (c = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = 1, a.line = Number(c[1]), c[2] && (a.lineAlign = Fb[c[2].toUpperCase()]); else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = xb, a.line = Number(c[1]), c[2] && (a.lineAlign = Fb[c[2].toUpperCase()]);
    }

    function ru(a, b) {
      const c = a.filter((d) => d.id == b);
      return c.length ? c[0] : null;
    }

    function lu(a) {
      a = Np(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
      if (a == null) return null;
      const b = Number(a[2]);
      const c = Number(a[3]);
      return b > 59 || c > 59 ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0);
    }

    M('shaka.text.VttTextParser', ku);
    ku.prototype.parseMedia = ku.prototype.parseMedia;
    ku.prototype.parseInit = ku.prototype.parseInit;

    ad['text/vtt'] = function () {
      return new ku();
    };

    ad['text/vtt; codecs="vtt"'] = function () {
      return new ku();
    };

    ad['text/vtt; codecs="wvtt"'] = function () {
      return new ku();
    };

    function su() {
      this.g = null;
    }

    su.prototype.parseInit = function (a) {
      const b = this;
      let c = !1;
      new jg().box('moov', ng).box('trak', ng).box('mdia', ng)
        .V('mdhd', (d) => {
          d = Eh(d.reader, d.version);
          b.g = d.timescale;
        })
        .box('minf', ng)
        .box('stbl', ng)
        .V('stsd', pg)
        .box('wvtt', () => {
          c = !0;
        })
        .parse(a);
      if (!this.g) throw new O(2, 2, 2008);
      if (!c) throw new O(2, 2, 2008);
    };

    su.prototype.parseMedia = function (a, b) {
      if (!this.g) throw new O(2, 2, 2008);
      let c = 0;
      let d = [];
      let e;
      const f = [];
      let g = !1;
      let h = !1;
      let k = !1;
      let l = null;
      new jg().box('moof', ng).box('traf', ng).V('tfdt', (B) => {
        g = !0;
        c = Dh(B.reader, B.version).hd;
      })
        .V('tfhd', (B) => {
          l = Ch(B.reader, B.flags).Yd;
        })
        .V('trun', (B) => {
          h = !0;
          d = Fh(B.reader, B.version, B.flags).pe;
        })
        .box('mdat', qg((B) => {
          k = !0;
          e = B;
        }))
        .parse(a, !1);
      if (!k && !g && !h) throw new O(2, 2, 2008);

      for (let m = c, n = new gg(e, 0), p = r(d), t = p.next(); !t.done; t = p.next()) {
        t = t.value;
        const v = t.Jd || l;
        const w = t.Kc ? c + t.Kc : m;
        m = w + (v || 0);
        let x = 0;

        do {
          let y = n.M();
          x += y;
          const E = n.M();
          let D = null;
          rg(E) == 'vttc' ? y > 8 && (D = n.$a(y - 8)) : n.skip(y - 8);
          v && D && (y = tu(D, b.periodStart + w / this.g, b.periodStart + m / this.g), f.push(y));
        } while (t.sampleSize && x < t.sampleSize);
      }

      return f.filter($b);
    };

    function tu(a, b, c) {
      let d;
      let e;
      let f;
      new jg().box('payl', qg((g) => {
        d = Dc(g);
      })).box('iden', qg((g) => {
        e = Dc(g);
      })).box('sttg', qg((g) => {
        f = Dc(g);
      }))
        .parse(a);
      return d ? uu(d, e, f, b, c) : null;
    }

    function uu(a, b, c, d, e) {
      d = new qb(d, e, '');
      nu(a, d, new Map());
      b && (d.id = b);
      if (c) for (a = new Lp(c), b = Op(a); b;) ou(d, b, []), Mp(a), b = Op(a);
      return d;
    }

    M('shaka.text.Mp4VttParser', su);
    su.prototype.parseMedia = su.prototype.parseMedia;
    su.prototype.parseInit = su.prototype.parseInit;

    ad['application/mp4; codecs="wvtt"'] = function () {
      return new su();
    };

    function vu() {}

    vu.prototype.parseInit = function () {};

    vu.prototype.parseMedia = function (a) {
      let b = Dc(a).replace(/\r+/g, '');
      b = b.trim();
      a = [];
      if (b == '') return a;
      b = r(b.split('\n\n'));

      for (let c = b.next(); !c.done; c = b.next()) {
        c = c.value.split('\n');
        let d = new Lp(c[0]);
        const e = wu(d);
        const f = Np(d, /,/g);
        d = wu(d);
        if (e == null || f == null || d == null) throw new O(2, 2, 2001, 'Could not parse cue time range in SubViewer');
        a.push(new qb(e, d, c.slice(1).join('\n').trim()));
      }

      return a;
    };

    function wu(a) {
      a = Np(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
      if (a == null) return null;
      const b = Number(a[2]);
      const c = Number(a[3]);
      return b > 59 || c > 59 ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0);
    }

    M('shaka.text.SbvTextParser', vu);
    vu.prototype.parseMedia = vu.prototype.parseMedia;
    vu.prototype.parseInit = vu.prototype.parseInit;

    ad['text/x-subviewer'] = function () {
      return new vu();
    };

    function xu() {
      this.s = new ku();
    }

    xu.prototype.parseInit = function () {};

    xu.prototype.parseMedia = function (a, b) {
      let c = Dc(a);
      c = yu(c);
      c = Ob(Hc(c));
      return this.s.parseMedia(c, b);
    };

    function yu(a) {
      let b = 'WEBVTT\n\n';
      if (a == '') return b;
      a = a.replace(/\r+/g, '');
      a = a.trim();
      a = r(a.split('\n\n'));

      for (let c = a.next(); !c.done; c = a.next()) c = c.value.split(/\n/), c[0].match(/\d+/) && c.shift(), c[0] = c[0].replace(/,/g, '.'), b += `${c.join('\n')}\n\n`;

      return b;
    }

    M('shaka.text.SrtTextParser', xu);
    xu.srt2webvtt = yu;
    xu.prototype.parseMedia = xu.prototype.parseMedia;
    xu.prototype.parseInit = xu.prototype.parseInit;

    ad['text/srt'] = function () {
      return new xu();
    };

    function zu() {}

    zu.prototype.parseInit = function () {};

    zu.prototype.parseMedia = function (a) {
      let b = '';
      let c = '';
      a = Dc(a).split(/\r?\n\s*\r?\n/);
      a = r(a);

      for (var d = a.next(); !d.done; d = a.next()) {
        var e = Au.exec(d.value);
        e && (d = e[1], e = e[2], d == 'V4 Styles' || d == 'V4+ Styles' ? b = e : d == 'Events' && (c = e));
      }

      a = [];
      d = null;
      b = r(b.split(/\r?\n/));

      for (var f = b.next(); !f.done; f = b.next()) {
        if (e = f.value, !/^\s*;/.test(e) && (f = Bu.exec(e))) {
          if (e = f[1].trim(), f = f[2].trim(), e == 'Format') d = f.split(Cu); else if (e == 'Style') {
            e = f.split(Cu);
            f = {};

            for (var g = 0; g < d.length && g < e.length; g++) f[d[g]] = e[g];

            a.push(f);
          }
        }
      }

      d = [];
      b = null;
      e = {};
      c = r(c.split(/\r?\n/));

      for (f = c.next(); !f.done; e = {
        cd: e.cd,
      }, f = c.next()) {
        if (f = f.value, !/^\s*;/.test(f) && (g = Bu.exec(f))) {
          if (f = g[1].trim(), g = g[2].trim(), f == 'Format') b = g.split(Cu); else if (f == 'Dialogue') {
            g = g.split(Cu);
            f = {};

            for (var h = 0; h < b.length && h < g.length; h++) f[b[h]] = g[h];

            h = Du(f.Start);
            const k = Du(f.End);
            g = new qb(h, k, g.slice(b.length - 1).join(',').replace(/\\N/g, '\n').replace(/\{[^}]+\}/g, ''));
            e.cd = f.Style;
            (f = a.find(function (l) {
              return function (m) {
                return m.Name == l.cd;
              };
            }(e))) && Eu(g, f);
            d.push(g);
          }
        }
      }

      return d;
    };

    function Eu(a, b) {
      let c = b.Fontname;
      c && (a.fontFamily = c);
      if (c = b.Fontsize) a.fontSize = `${c}px`;
      if (c = b.PrimaryColour) if (c = Fu(c)) a.color = c;
      if (c = b.BackColour) if (c = Fu(c)) a.backgroundColor = c;
      b.Bold && (a.fontWeight = 700);
      b.Italic && (a.fontStyle = 'italic');
      b.Underline && a.textDecoration.push('underline');
      if (c = b.Spacing) a.letterSpacing = `${c}px`;

      if (c = b.Alignment) {
        switch (parseInt(c, 10)) {
          case 1:
            a.displayAlign = zb;
            a.textAlign = 'start';
            break;

          case 2:
            a.displayAlign = zb;
            a.textAlign = vb;
            break;

          case 3:
            a.displayAlign = zb;
            a.textAlign = 'end';
            break;

          case 5:
            a.displayAlign = 'before';
            a.textAlign = 'start';
            break;

          case 6:
            a.displayAlign = 'before';
            a.textAlign = vb;
            break;

          case 7:
            a.displayAlign = 'before';
            a.textAlign = 'end';
            break;

          case 9:
            a.displayAlign = 'center';
            a.textAlign = 'start';
            break;

          case 10:
            a.displayAlign = 'center';
            a.textAlign = vb;
            break;

          case 11:
            a.displayAlign = 'center', a.textAlign = 'end';
        }
      }

      if (c = b.AlphaLevel) a.opacity = parseFloat(c);
    }

    function Fu(a) {
      a = parseInt(a.replace('&H', ''), 16);
      return a >= 0 ? `rgba(${a & 255},${a >> 8 & 255},${a >> 16 & 255},${(a >> 24 & 255 ^ 255) / 255})` : null;
    }

    function Du(a) {
      a = Gu.exec(a);
      return 3600 * (a[1] ? parseInt(a[1].replace(':', ''), 10) : 0) + 60 * parseInt(a[2], 10) + parseFloat(a[3]);
    }

    M('shaka.text.SsaTextParser', zu);
    zu.prototype.parseMedia = zu.prototype.parseMedia;
    zu.prototype.parseInit = zu.prototype.parseInit;
    var Au = /^\s*\[([^\]]+)\]\r?\n([\s\S]*)/;
    var Bu = /^\s*([^:]+):\s*(.*)/;
    var Cu = /\s*,\s*/;
    var Gu = /^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;

    ad['text/x-ssa'] = function () {
      return new zu();
    };
    /*
    @license
    EME Encryption Scheme Polyfill
    Copyright 2019 Google LLC
    SPDX-License-Identifier: Apache-2.0
    */

    function Hu() {}

    let Iu;

    function Ju() {
      Iu ? console.debug('EmeEncryptionSchemePolyfill: Already installed.') : navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration ? (Iu = navigator.requestMediaKeySystemAccess, console.debug('EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support.'), navigator.requestMediaKeySystemAccess = Ku) : console.debug('EmeEncryptionSchemePolyfill: EME not found');
    }

    function Ku(a, b) {
      const c = this;
      let d;
      return I((e) => {
        if (e.g == 1) return console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess'), u(e, Iu.call(c, a, b), 2);
        d = e.h;
        if (Lu(d)) return console.debug('EmeEncryptionSchemePolyfill: Native encryptionScheme support found.'), navigator.requestMediaKeySystemAccess = Iu, e.return(d);
        console.debug('EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.');
        navigator.requestMediaKeySystemAccess = Mu;
        return e.return(Mu.call(c, a, b));
      });
    }

    function Mu(a, b) {
      const c = this;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      let n;
      let p;
      return I((t) => {
        if (t.g == 1) {
          console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess');
          d = Nu(a);
          e = [];
          f = r(b);

          for (g = f.next(); !g.done; g = f.next()) h = g.value, k = Ou(h.videoCapabilities, d), l = Ou(h.audioCapabilities, d), h.videoCapabilities && h.videoCapabilities.length && !k.length || h.audioCapabilities && h.audioCapabilities.length && !l.length || (m = _objectSpread({}, h), m.videoCapabilities = k, m.audioCapabilities = l, e.push(m));

          if (!e.length) {
            throw n = Error('Unsupported keySystem or supportedConfigurations.'), n.name = 'NotSupportedError', n.code = DOMException.NOT_SUPPORTED_ERR, n;
          }

          return u(t, Iu.call(c, a, e), 2);
        }

        p = t.h;
        return t.return(new Pu(p, d));
      });
    }

    function Ou(a, b) {
      return a ? a.filter((c) => !c.encryptionScheme || c.encryptionScheme == b) : a;
    }

    M('EmeEncryptionSchemePolyfill', Hu);
    Hu.install = Ju;

    function Qu() {}

    let Ru;

    function Su() {
      Ru ? console.debug('McEncryptionSchemePolyfill: Already installed.') : navigator.mediaCapabilities ? (Ru = navigator.mediaCapabilities.decodingInfo, console.debug('McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support.'), navigator.mediaCapabilities.decodingInfo = Tu) : console.debug('McEncryptionSchemePolyfill: MediaCapabilities not found');
    }

    function Tu(a) {
      const b = this;
      let c;
      let d;
      return I((e) => {
        if (e.g == 1) return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), u(e, Ru.call(b, a), 2);
        c = e.h;
        if (!a.keySystemConfiguration) return e.return(c);
        if ((d = c.keySystemAccess) && Lu(d)) return console.debug('McEncryptionSchemePolyfill: Native encryptionScheme support found.'), navigator.mediaCapabilities.decodingInfo = Ru, e.return(c);
        console.debug('McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.');
        navigator.mediaCapabilities.decodingInfo = Uu;
        return e.return(Uu.call(b, a));
      });
    }

    function Uu(a) {
      const b = this;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let k;
      let l;
      let m;
      return I((n) => {
        switch (n.g) {
          case 1:
            return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), c = null, a.keySystemConfiguration && (d = a.keySystemConfiguration, e = d.keySystem, f = d.audio && d.audio.encryptionScheme, g = d.video && d.video.encryptionScheme, c = Nu(e), h = {
              powerEfficient: !1,
              smooth: !1,
              supported: !1,
              keySystemAccess: null,
              configuration: a,
            }, f && f != c || g && g != c) ? n.return(h) : u(n, Ru.call(b, a), 2);

          case 2:
            k = n.h;

            if (k.keySystemAccess) {
              k.keySystemAccess = new Pu(k.keySystemAccess, c);
              n.v(3);
              break;
            }

            if (!a.keySystemConfiguration) {
              n.v(3);
              break;
            }

            var p = a.keySystemConfiguration;
            var t = [];
            var v = [];
            p.audio && t.push({
              robustness: p.audio.robustness || '',
              contentType: a.audio.contentType,
            });
            p.video && v.push({
              robustness: p.video.robustness || '',
              contentType: a.video.contentType,
            });
            p = {
              initDataTypes: p.initDataType ? [p.initDataType] : [],
              distinctiveIdentifier: p.distinctiveIdentifier,
              persistentState: p.persistentState,
              sessionTypes: p.sessionTypes,
            };
            t.length && (p.audioCapabilities = t);
            v.length && (p.videoCapabilities = v);
            l = p;
            m = k;
            return u(n, navigator.requestMediaKeySystemAccess(a.keySystemConfiguration.keySystem, [l]), 5);

          case 5:
            m.keySystemAccess = n.h;

          case 3:
            return n.return(k);
        }
      });
    }

    M('McEncryptionSchemePolyfill', Qu);
    Qu.install = Su;

    function Pu(a, b) {
      this.h = a;
      this.g = b;
      this.keySystem = a.keySystem;
    }

    Pu.prototype.getConfiguration = function () {
      const a = this.h.getConfiguration();
      if (a.videoCapabilities) for (var b = r(a.videoCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.g;
      if (a.audioCapabilities) for (b = r(a.audioCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.g;
      return a;
    };

    Pu.prototype.createMediaKeys = function () {
      return this.h.createMediaKeys();
    };

    function Nu(a) {
      if (a.startsWith('com.widevine') || a.startsWith('com.microsoft') || a.startsWith('com.adobe') || a.startsWith('org.w3')) return 'cenc';
      if (a.startsWith('com.apple')) return 'cbcs-1-9';
      console.warn('EmeEncryptionSchemePolyfill: Unknown key system:', a, 'Please contribute!');
      return null;
    }

    function Lu(a) {
      a = a.getConfiguration();
      const b = a.audioCapabilities && a.audioCapabilities[0];
      return (a = a.videoCapabilities && a.videoCapabilities[0] || b) && void 0 !== a.encryptionScheme ? !0 : !1;
    }

    function Vu() {}

    function Es() {
      Ju();
      Su();
    }

    M('EncryptionSchemePolyfills', Vu);
    Vu.install = Es;
    typeof module !== 'undefined' && module.exports && (module.exports = Vu);
  }).call(exportTo, innerGlobal, innerGlobal, undefined);
  if (typeof exports !== 'undefined') for (const k in exportTo.shaka) exports[k] = exportTo.shaka[k]; else if (typeof define === 'function' && define.amd) define(() => exportTo.shaka); else innerGlobal.shaka = exportTo.shaka;
}()); // # sourceMappingURL=shaka-player.compiled.map
