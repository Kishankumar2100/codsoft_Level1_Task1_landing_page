// node_modules/tw-elements/dist/js/tw-elements.es.min.js
var Xl = Object.defineProperty;
var Gl = (s, t, e) => t in s ? Xl(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var Tt = (s, t, e) => (Gl(s, typeof t != "symbol" ? t + "" : t, e), e);
var Bs = (() => {
  const s = {};
  let t = 1;
  return {
    set(e, i, n) {
      typeof e[i] > "u" && (e[i] = {
        key: i,
        id: t
      }, t++), s[e[i].id] = n;
    },
    get(e, i) {
      if (!e || typeof e[i] > "u")
        return null;
      const n = e[i];
      return n.key === i ? s[n.id] : null;
    },
    delete(e, i) {
      if (typeof e[i] > "u")
        return;
      const n = e[i];
      n.key === i && (delete s[n.id], delete e[i]);
    }
  };
})();
var I = {
  setData(s, t, e) {
    Bs.set(s, t, e);
  },
  getData(s, t) {
    return Bs.get(s, t);
  },
  removeData(s, t) {
    Bs.delete(s, t);
  }
};
var ql = 1e6;
var Ql = 1e3;
var Dn = "transitionend";
var Zl = (s) => s == null ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
var Ot = (s) => {
  do
    s += Math.floor(Math.random() * ql);
  while (document.getElementById(s));
  return s;
};
var va = (s) => {
  let t = s.getAttribute("data-te-target");
  if (!t || t === "#") {
    let e = s.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
};
var Xn = (s) => {
  const t = va(s);
  return t && document.querySelector(t) ? t : null;
};
var Xt = (s) => {
  const t = va(s);
  return t ? document.querySelector(t) : null;
};
var Jl = (s) => {
  if (!s)
    return 0;
  let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(s);
  const i = Number.parseFloat(t), n = Number.parseFloat(e);
  return !i && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * Ql);
};
var Ea = (s) => {
  s.dispatchEvent(new Event(Dn));
};
var Ne = (s) => !s || typeof s != "object" ? false : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u");
var Gt = (s) => Ne(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null;
var N = (s, t, e) => {
  Object.keys(e).forEach((i) => {
    const n = e[i], o = t[i], r = o && Ne(o) ? "element" : Zl(o);
    if (!new RegExp(n).test(r))
      throw new Error(
        `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
      );
  });
};
var St = (s) => {
  if (!s || s.getClientRects().length === 0)
    return false;
  if (s.style && s.parentNode && s.parentNode.style) {
    const t = getComputedStyle(s), e = getComputedStyle(s.parentNode);
    return getComputedStyle(s).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
  }
  return false;
};
var ue = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? true : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false";
var Ta = (s) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof s.getRootNode == "function") {
    const t = s.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return s instanceof ShadowRoot ? s : s.parentNode ? Ta(s.parentNode) : null;
};
var vs = () => function() {
};
var Fe = (s) => {
  s.offsetHeight;
};
var Ca = () => {
  const { jQuery: s } = window;
  return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
};
var Vs = [];
var Aa = (s) => {
  document.readyState === "loading" ? (Vs.length || document.addEventListener("DOMContentLoaded", () => {
    Vs.forEach((t) => t());
  }), Vs.push(s)) : s();
};
var F = () => document.documentElement.dir === "rtl";
var tc = (s) => Array.from(s);
var M = (s) => document.createElement(s);
var he = (s) => {
  typeof s == "function" && s();
};
var ya = (s, t, e = true) => {
  if (!e) {
    he(s);
    return;
  }
  const i = 5, n = Jl(t) + i;
  let o = false;
  const r = ({ target: a }) => {
    a === t && (o = true, t.removeEventListener(Dn, r), he(s));
  };
  t.addEventListener(Dn, r), setTimeout(() => {
    o || Ea(t);
  }, n);
};
var wa = (s, t, e, i) => {
  let n = s.indexOf(t);
  if (n === -1)
    return s[!e && i ? s.length - 1 : 0];
  const o = s.length;
  return n += e ? 1 : -1, i && (n = (n + o) % o), s[Math.max(0, Math.min(n, o - 1))];
};
var ec = /[^.]*(?=\..*)\.|.*/;
var ic = /\..*/;
var sc = /::\d+$/;
var Ws = {};
var Eo = 1;
var nc = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var oc = /^(mouseenter|mouseleave)/i;
var ka = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function Oa(s, t) {
  return t && `${t}::${Eo++}` || s.uidEvent || Eo++;
}
function xa(s) {
  const t = Oa(s);
  return s.uidEvent = t, Ws[t] = Ws[t] || {}, Ws[t];
}
function rc(s, t) {
  return function e(i) {
    return i.delegateTarget = s, e.oneOff && u.off(s, i.type, t), t.apply(s, [i]);
  };
}
function ac(s, t, e) {
  return function i(n) {
    const o = s.querySelectorAll(t);
    for (let { target: r } = n; r && r !== this; r = r.parentNode)
      for (let a = o.length; a--; "")
        if (o[a] === r)
          return n.delegateTarget = r, i.oneOff && u.off(s, n.type, e), e.apply(r, [n]);
    return null;
  };
}
function Sa(s, t, e = null) {
  const i = Object.keys(s);
  for (let n = 0, o = i.length; n < o; n++) {
    const r = s[i[n]];
    if (r.originalHandler === t && r.delegationSelector === e)
      return r;
  }
  return null;
}
function Da(s, t, e) {
  const i = typeof t == "string", n = i ? e : t;
  let o = Ia(s);
  return ka.has(o) || (o = s), [i, n, o];
}
function To(s, t, e, i, n) {
  if (typeof t != "string" || !s)
    return;
  if (e || (e = i, i = null), oc.test(t)) {
    const m = (g) => function(b) {
      if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
        return g.call(this, b);
    };
    i ? i = m(i) : e = m(e);
  }
  const [o, r, a] = Da(
    t,
    e,
    i
  ), l = xa(s), c = l[a] || (l[a] = {}), d = Sa(
    c,
    r,
    o ? e : null
  );
  if (d) {
    d.oneOff = d.oneOff && n;
    return;
  }
  const _ = Oa(
    r,
    t.replace(ec, "")
  ), f = o ? ac(s, e, i) : rc(s, e);
  f.delegationSelector = o ? e : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = _, c[_] = f, s.addEventListener(a, f, o);
}
function In(s, t, e, i, n) {
  const o = Sa(t[e], i, n);
  o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
}
function lc(s, t, e, i) {
  const n = t[e] || {};
  Object.keys(n).forEach((o) => {
    if (o.includes(i)) {
      const r = n[o];
      In(
        s,
        t,
        e,
        r.originalHandler,
        r.delegationSelector
      );
    }
  });
}
function Ia(s) {
  return s = s.replace(ic, ""), nc[s] || s;
}
var u = {
  on(s, t, e, i) {
    To(s, t, e, i, false);
  },
  one(s, t, e, i) {
    To(s, t, e, i, true);
  },
  off(s, t, e, i) {
    if (typeof t != "string" || !s)
      return;
    const [n, o, r] = Da(
      t,
      e,
      i
    ), a = r !== t, l = xa(s), c = t.startsWith(".");
    if (typeof o < "u") {
      if (!l || !l[r])
        return;
      In(
        s,
        l,
        r,
        o,
        n ? e : null
      );
      return;
    }
    c && Object.keys(l).forEach((_) => {
      lc(
        s,
        l,
        _,
        t.slice(1)
      );
    });
    const d = l[r] || {};
    Object.keys(d).forEach((_) => {
      const f = _.replace(sc, "");
      if (!a || t.includes(f)) {
        const m = d[_];
        In(
          s,
          l,
          r,
          m.originalHandler,
          m.delegationSelector
        );
      }
    });
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s)
      return null;
    const i = Ca(), n = Ia(t), o = t !== n, r = ka.has(n);
    let a, l = true, c = true, d = false, _ = null;
    return o && i && (a = i.Event(t, e), i(s).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(n, l, true)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: true
    }), typeof e < "u" && Object.keys(e).forEach((f) => {
      Object.defineProperty(_, f, {
        get() {
          return e[f];
        }
      });
    }), d && _.preventDefault(), c && s.dispatchEvent(_), _.defaultPrevented && typeof a < "u" && a.preventDefault(), _;
  }
};
var ee = {
  on(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      u.on(s, n[o], e, i);
  },
  off(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      u.off(s, n[o], e, i);
  }
};
var cc = "5.1.3";
var vt = class {
  constructor(t) {
    t = Gt(t), t && (this._element = t, I.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    I.removeData(this._element, this.constructor.DATA_KEY), u.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, e, i = true) {
    ya(t, e, i);
  }
  /** Static */
  static getInstance(t) {
    return I.getData(Gt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return cc;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
};
var dc = "button";
var hc = "active";
var $a = class _$a extends vt {
  // Getters
  static get NAME() {
    return dc;
  }
  // Public
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(hc)
    );
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _$a.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
};
var Z = "top";
var dt = "bottom";
var ht = "right";
var J = "left";
var mi = "auto";
var Ye = [Z, dt, ht, J];
var _e = "start";
var Re = "end";
var La = "clippingParents";
var Gn = "viewport";
var ye = "popper";
var Ma = "reference";
var $n = Ye.reduce(function(s, t) {
  return s.concat([t + "-" + _e, t + "-" + Re]);
}, []);
var qn = [].concat(Ye, [mi]).reduce(function(s, t) {
  return s.concat([t, t + "-" + _e, t + "-" + Re]);
}, []);
var Na = "beforeRead";
var Ra = "read";
var Pa = "afterRead";
var Ha = "beforeMain";
var Ba = "main";
var Va = "afterMain";
var Wa = "beforeWrite";
var Fa = "write";
var Ya = "afterWrite";
var Es = [Na, Ra, Pa, Ha, Ba, Va, Wa, Fa, Ya];
function It(s) {
  return s ? (s.nodeName || "").toLowerCase() : null;
}
function ut(s) {
  if (s == null)
    return window;
  if (s.toString() !== "[object Window]") {
    var t = s.ownerDocument;
    return t && t.defaultView || window;
  }
  return s;
}
function me(s) {
  var t = ut(s).Element;
  return s instanceof t || s instanceof Element;
}
function ct(s) {
  var t = ut(s).HTMLElement;
  return s instanceof t || s instanceof HTMLElement;
}
function Qn(s) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = ut(s).ShadowRoot;
  return s instanceof t || s instanceof ShadowRoot;
}
function uc(s) {
  var t = s.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
    !ct(o) || !It(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(r) {
      var a = n[r];
      a === false ? o.removeAttribute(r) : o.setAttribute(r, a === true ? "" : a);
    }));
  });
}
function pc(s) {
  var t = s.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var n = t.elements[i], o = t.attributes[i] || {}, r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = r.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !ct(n) || !It(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
var Zn = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: uc,
  effect: pc,
  requires: ["computeStyles"]
};
function gt(s) {
  return s.split("-")[0];
}
var pe = Math.max;
var Ts = Math.min;
var Pe = Math.round;
function Ln() {
  var s = navigator.userAgentData;
  return s != null && s.brands && Array.isArray(s.brands) ? s.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ja() {
  return !/^((?!chrome|android).)*safari/i.test(Ln());
}
function He(s, t, e) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  var i = s.getBoundingClientRect(), n = 1, o = 1;
  t && ct(s) && (n = s.offsetWidth > 0 && Pe(i.width) / s.offsetWidth || 1, o = s.offsetHeight > 0 && Pe(i.height) / s.offsetHeight || 1);
  var r = me(s) ? ut(s) : window, a = r.visualViewport, l = !ja() && e, c = (i.left + (l && a ? a.offsetLeft : 0)) / n, d = (i.top + (l && a ? a.offsetTop : 0)) / o, _ = i.width / n, f = i.height / o;
  return {
    width: _,
    height: f,
    top: d,
    right: c + _,
    bottom: d + f,
    left: c,
    x: c,
    y: d
  };
}
function Jn(s) {
  var t = He(s), e = s.offsetWidth, i = s.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: s.offsetLeft,
    y: s.offsetTop,
    width: e,
    height: i
  };
}
function Ka(s, t) {
  var e = t.getRootNode && t.getRootNode();
  if (s.contains(t))
    return true;
  if (e && Qn(e)) {
    var i = t;
    do {
      if (i && s.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
function bt(s) {
  return ut(s).getComputedStyle(s);
}
function fc(s) {
  return ["table", "td", "th"].indexOf(It(s)) >= 0;
}
function qt(s) {
  return ((me(s) ? s.ownerDocument : (
    // $FlowFixMe[prop-missing]
    s.document
  )) || window.document).documentElement;
}
function ws(s) {
  return It(s) === "html" ? s : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    s.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    s.parentNode || // DOM Element detected
    (Qn(s) ? s.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    qt(s)
  );
}
function Co(s) {
  return !ct(s) || // https://github.com/popperjs/popper-core/issues/837
  bt(s).position === "fixed" ? null : s.offsetParent;
}
function _c(s) {
  var t = /firefox/i.test(Ln()), e = /Trident/i.test(Ln());
  if (e && ct(s)) {
    var i = bt(s);
    if (i.position === "fixed")
      return null;
  }
  var n = ws(s);
  for (Qn(n) && (n = n.host); ct(n) && ["html", "body"].indexOf(It(n)) < 0; ) {
    var o = bt(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function gi(s) {
  for (var t = ut(s), e = Co(s); e && fc(e) && bt(e).position === "static"; )
    e = Co(e);
  return e && (It(e) === "html" || It(e) === "body" && bt(e).position === "static") ? t : e || _c(s) || t;
}
function to(s) {
  return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
}
function li(s, t, e) {
  return pe(s, Ts(t, e));
}
function mc(s, t, e) {
  var i = li(s, t, e);
  return i > e ? e : i;
}
function Ua() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function za(s) {
  return Object.assign({}, Ua(), s);
}
function Xa(s, t) {
  return t.reduce(function(e, i) {
    return e[i] = s, e;
  }, {});
}
var gc = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, za(typeof t != "number" ? t : Xa(t, Ye));
};
function bc(s) {
  var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = gt(e.placement), l = to(a), c = [J, ht].indexOf(a) >= 0, d = c ? "height" : "width";
  if (!(!o || !r)) {
    var _ = gc(n.padding, e), f = Jn(o), m = l === "y" ? Z : J, g = l === "y" ? dt : ht, b = e.rects.reference[d] + e.rects.reference[l] - r[l] - e.rects.popper[d], T = r[l] - e.rects.reference[l], C = gi(o), w = C ? l === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = b / 2 - T / 2, E = _[m], A = w - f[d] - _[g], y = w / 2 - f[d] / 2 + v, S = li(E, y, A), O = l;
    e.modifiersData[i] = (t = {}, t[O] = S, t.centerOffset = S - y, t);
  }
}
function vc(s) {
  var t = s.state, e = s.options, i = e.element, n = i === void 0 ? "[data-popper-arrow]" : i;
  if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
    if ({}.NODE_ENV !== "production" && (ct(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Ka(t.elements.popper, n)) {
      ({}).NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = n;
  }
}
var Ga = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: bc,
  effect: vc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Be(s) {
  return s.split("-")[1];
}
var Ec = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Tc(s, t) {
  var e = s.x, i = s.y, n = t.devicePixelRatio || 1;
  return {
    x: Pe(e * n) / n || 0,
    y: Pe(i * n) / n || 0
  };
}
function Ao(s) {
  var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, r = s.offsets, a = s.position, l = s.gpuAcceleration, c = s.adaptive, d = s.roundOffsets, _ = s.isFixed, f = r.x, m = f === void 0 ? 0 : f, g = r.y, b = g === void 0 ? 0 : g, T = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = T.x, b = T.y;
  var C = r.hasOwnProperty("x"), w = r.hasOwnProperty("y"), v = J, E = Z, A = window;
  if (c) {
    var y = gi(e), S = "clientHeight", O = "clientWidth";
    if (y === ut(e) && (y = qt(e), bt(y).position !== "static" && a === "absolute" && (S = "scrollHeight", O = "scrollWidth")), y = y, n === Z || (n === J || n === ht) && o === Re) {
      E = dt;
      var k = _ && y === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        y[S]
      );
      b -= k - i.height, b *= l ? 1 : -1;
    }
    if (n === J || (n === Z || n === dt) && o === Re) {
      v = ht;
      var D = _ && y === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        y[O]
      );
      m -= D - i.width, m *= l ? 1 : -1;
    }
  }
  var x = Object.assign({
    position: a
  }, c && Ec), $ = d === true ? Tc({
    x: m,
    y: b
  }, ut(e)) : {
    x: m,
    y: b
  };
  if (m = $.x, b = $.y, l) {
    var P;
    return Object.assign({}, x, (P = {}, P[E] = w ? "0" : "", P[v] = C ? "0" : "", P.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, x, (t = {}, t[E] = w ? b + "px" : "", t[v] = C ? m + "px" : "", t.transform = "", t));
}
function Cc(s) {
  var t = s.state, e = s.options, i = e.gpuAcceleration, n = i === void 0 ? true : i, o = e.adaptive, r = o === void 0 ? true : o, a = e.roundOffsets, l = a === void 0 ? true : a;
  if ({}.NODE_ENV !== "production") {
    var c = bt(t.elements.popper).transitionProperty || "";
    r && ["transform", "top", "right", "bottom", "left"].some(function(_) {
      return c.indexOf(_) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: gt(t.placement),
    variation: Be(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ao(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ao(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var eo = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Cc,
  data: {}
};
var Di = {
  passive: true
};
function Ac(s) {
  var t = s.state, e = s.instance, i = s.options, n = i.scroll, o = n === void 0 ? true : n, r = i.resize, a = r === void 0 ? true : r, l = ut(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(d) {
    d.addEventListener("scroll", e.update, Di);
  }), a && l.addEventListener("resize", e.update, Di), function() {
    o && c.forEach(function(d) {
      d.removeEventListener("scroll", e.update, Di);
    }), a && l.removeEventListener("resize", e.update, Di);
  };
}
var io = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: Ac,
  data: {}
};
var yc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ss(s) {
  return s.replace(/left|right|bottom|top/g, function(t) {
    return yc[t];
  });
}
var wc = {
  start: "end",
  end: "start"
};
function yo(s) {
  return s.replace(/start|end/g, function(t) {
    return wc[t];
  });
}
function so(s) {
  var t = ut(s), e = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: i
  };
}
function no(s) {
  return He(qt(s)).left + so(s).scrollLeft;
}
function kc(s, t) {
  var e = ut(s), i = qt(s), n = e.visualViewport, o = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    o = n.width, r = n.height;
    var c = ja();
    (c || !c && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a + no(s),
    y: l
  };
}
function Oc(s) {
  var t, e = qt(s), i = so(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = pe(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = pe(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + no(s), l = -i.scrollTop;
  return bt(n || e).direction === "rtl" && (a += pe(e.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function oo(s) {
  var t = bt(s), e = t.overflow, i = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + i);
}
function qa(s) {
  return ["html", "body", "#document"].indexOf(It(s)) >= 0 ? s.ownerDocument.body : ct(s) && oo(s) ? s : qa(ws(s));
}
function ci(s, t) {
  var e;
  t === void 0 && (t = []);
  var i = qa(s), n = i === ((e = s.ownerDocument) == null ? void 0 : e.body), o = ut(i), r = n ? [o].concat(o.visualViewport || [], oo(i) ? i : []) : i, a = t.concat(r);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(ci(ws(r)))
  );
}
function Mn(s) {
  return Object.assign({}, s, {
    left: s.x,
    top: s.y,
    right: s.x + s.width,
    bottom: s.y + s.height
  });
}
function xc(s, t) {
  var e = He(s, false, t === "fixed");
  return e.top = e.top + s.clientTop, e.left = e.left + s.clientLeft, e.bottom = e.top + s.clientHeight, e.right = e.left + s.clientWidth, e.width = s.clientWidth, e.height = s.clientHeight, e.x = e.left, e.y = e.top, e;
}
function wo(s, t, e) {
  return t === Gn ? Mn(kc(s, e)) : me(t) ? xc(t, e) : Mn(Oc(qt(s)));
}
function Sc(s) {
  var t = ci(ws(s)), e = ["absolute", "fixed"].indexOf(bt(s).position) >= 0, i = e && ct(s) ? gi(s) : s;
  return me(i) ? t.filter(function(n) {
    return me(n) && Ka(n, i) && It(n) !== "body";
  }) : [];
}
function Dc(s, t, e, i) {
  var n = t === "clippingParents" ? Sc(s) : [].concat(t), o = [].concat(n, [e]), r = o[0], a = o.reduce(function(l, c) {
    var d = wo(s, c, i);
    return l.top = pe(d.top, l.top), l.right = Ts(d.right, l.right), l.bottom = Ts(d.bottom, l.bottom), l.left = pe(d.left, l.left), l;
  }, wo(s, r, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Qa(s) {
  var t = s.reference, e = s.element, i = s.placement, n = i ? gt(i) : null, o = i ? Be(i) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (n) {
    case Z:
      l = {
        x: r,
        y: t.y - e.height
      };
      break;
    case dt:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case ht:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case J:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = n ? to(n) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (o) {
      case _e:
        l[c] = l[c] - (t[d] / 2 - e[d] / 2);
        break;
      case Re:
        l[c] = l[c] + (t[d] / 2 - e[d] / 2);
        break;
    }
  }
  return l;
}
function Ve(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = i === void 0 ? s.placement : i, o = e.strategy, r = o === void 0 ? s.strategy : o, a = e.boundary, l = a === void 0 ? La : a, c = e.rootBoundary, d = c === void 0 ? Gn : c, _ = e.elementContext, f = _ === void 0 ? ye : _, m = e.altBoundary, g = m === void 0 ? false : m, b = e.padding, T = b === void 0 ? 0 : b, C = za(typeof T != "number" ? T : Xa(T, Ye)), w = f === ye ? Ma : ye, v = s.rects.popper, E = s.elements[g ? w : f], A = Dc(me(E) ? E : E.contextElement || qt(s.elements.popper), l, d, r), y = He(s.elements.reference), S = Qa({
    reference: y,
    element: v,
    strategy: "absolute",
    placement: n
  }), O = Mn(Object.assign({}, v, S)), k = f === ye ? O : y, D = {
    top: A.top - k.top + C.top,
    bottom: k.bottom - A.bottom + C.bottom,
    left: A.left - k.left + C.left,
    right: k.right - A.right + C.right
  }, x = s.modifiersData.offset;
  if (f === ye && x) {
    var $ = x[n];
    Object.keys(D).forEach(function(P) {
      var tt = [ht, dt].indexOf(P) >= 0 ? 1 : -1, et = [Z, dt].indexOf(P) >= 0 ? "y" : "x";
      D[P] += $[et] * tt;
    });
  }
  return D;
}
function Ic(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, c = l === void 0 ? qn : l, d = Be(i), _ = d ? a ? $n : $n.filter(function(g) {
    return Be(g) === d;
  }) : Ye, f = _.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  f.length === 0 && (f = _, {}.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, b) {
    return g[b] = Ve(s, {
      placement: b,
      boundary: n,
      rootBoundary: o,
      padding: r
    })[gt(b)], g;
  }, {});
  return Object.keys(m).sort(function(g, b) {
    return m[g] - m[b];
  });
}
function $c(s) {
  if (gt(s) === mi)
    return [];
  var t = ss(s);
  return [yo(s), t, yo(t)];
}
function Lc(s) {
  var t = s.state, e = s.options, i = s.name;
  if (!t.modifiersData[i]._skip) {
    for (var n = e.mainAxis, o = n === void 0 ? true : n, r = e.altAxis, a = r === void 0 ? true : r, l = e.fallbackPlacements, c = e.padding, d = e.boundary, _ = e.rootBoundary, f = e.altBoundary, m = e.flipVariations, g = m === void 0 ? true : m, b = e.allowedAutoPlacements, T = t.options.placement, C = gt(T), w = C === T, v = l || (w || !g ? [ss(T)] : $c(T)), E = [T].concat(v).reduce(function(be, Nt) {
      return be.concat(gt(Nt) === mi ? Ic(t, {
        placement: Nt,
        boundary: d,
        rootBoundary: _,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : Nt);
    }, []), A = t.rects.reference, y = t.rects.popper, S = /* @__PURE__ */ new Map(), O = true, k = E[0], D = 0; D < E.length; D++) {
      var x = E[D], $ = gt(x), P = Be(x) === _e, tt = [Z, dt].indexOf($) >= 0, et = tt ? "width" : "height", z = Ve(t, {
        placement: x,
        boundary: d,
        rootBoundary: _,
        altBoundary: f,
        padding: c
      }), _t = tt ? P ? ht : J : P ? dt : Z;
      A[et] > y[et] && (_t = ss(_t));
      var wi = ss(_t), Zt = [];
      if (o && Zt.push(z[$] <= 0), a && Zt.push(z[_t] <= 0, z[wi] <= 0), Zt.every(function(be) {
        return be;
      })) {
        k = x, O = false;
        break;
      }
      S.set(x, Zt);
    }
    if (O)
      for (var ki = g ? 3 : 1, Ns = function(Nt) {
        var Xe = E.find(function(xi) {
          var Jt = S.get(xi);
          if (Jt)
            return Jt.slice(0, Nt).every(function(Rs) {
              return Rs;
            });
        });
        if (Xe)
          return k = Xe, "break";
      }, ze = ki; ze > 0; ze--) {
        var Oi = Ns(ze);
        if (Oi === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[i]._skip = true, t.placement = k, t.reset = true);
  }
}
var Za = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Lc,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function ko(s, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: s.top - t.height - e.y,
    right: s.right - t.width + e.x,
    bottom: s.bottom - t.height + e.y,
    left: s.left - t.width - e.x
  };
}
function Oo(s) {
  return [Z, ht, dt, J].some(function(t) {
    return s[t] >= 0;
  });
}
function Mc(s) {
  var t = s.state, e = s.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = Ve(t, {
    elementContext: "reference"
  }), a = Ve(t, {
    altBoundary: true
  }), l = ko(r, i), c = ko(a, n, o), d = Oo(l), _ = Oo(c);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: _
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": _
  });
}
var Ja = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Mc
};
function Nc(s, t, e) {
  var i = gt(s), n = [J, Z].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
    placement: s
  })) : e, r = o[0], a = o[1];
  return r = r || 0, a = (a || 0) * n, [J, ht].indexOf(i) >= 0 ? {
    x: a,
    y: r
  } : {
    x: r,
    y: a
  };
}
function Rc(s) {
  var t = s.state, e = s.options, i = s.name, n = e.offset, o = n === void 0 ? [0, 0] : n, r = qn.reduce(function(d, _) {
    return d[_] = Nc(_, t.rects, o), d;
  }, {}), a = r[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = r;
}
var tl = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Rc
};
function Pc(s) {
  var t = s.state, e = s.name;
  t.modifiersData[e] = Qa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var ro = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Pc,
  data: {}
};
function Hc(s) {
  return s === "x" ? "y" : "x";
}
function Bc(s) {
  var t = s.state, e = s.options, i = s.name, n = e.mainAxis, o = n === void 0 ? true : n, r = e.altAxis, a = r === void 0 ? false : r, l = e.boundary, c = e.rootBoundary, d = e.altBoundary, _ = e.padding, f = e.tether, m = f === void 0 ? true : f, g = e.tetherOffset, b = g === void 0 ? 0 : g, T = Ve(t, {
    boundary: l,
    rootBoundary: c,
    padding: _,
    altBoundary: d
  }), C = gt(t.placement), w = Be(t.placement), v = !w, E = to(C), A = Hc(E), y = t.modifiersData.popperOffsets, S = t.rects.reference, O = t.rects.popper, k = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, D = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), x = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = {
    x: 0,
    y: 0
  };
  if (y) {
    if (o) {
      var P, tt = E === "y" ? Z : J, et = E === "y" ? dt : ht, z = E === "y" ? "height" : "width", _t = y[E], wi = _t + T[tt], Zt = _t - T[et], ki = m ? -O[z] / 2 : 0, Ns = w === _e ? S[z] : O[z], ze = w === _e ? -O[z] : -S[z], Oi = t.elements.arrow, be = m && Oi ? Jn(Oi) : {
        width: 0,
        height: 0
      }, Nt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ua(), Xe = Nt[tt], xi = Nt[et], Jt = li(0, S[z], be[z]), Rs = v ? S[z] / 2 - ki - Jt - Xe - D.mainAxis : Ns - Jt - Xe - D.mainAxis, Fl = v ? -S[z] / 2 + ki + Jt + xi + D.mainAxis : ze + Jt + xi + D.mainAxis, Ps = t.elements.arrow && gi(t.elements.arrow), Yl = Ps ? E === "y" ? Ps.clientTop || 0 : Ps.clientLeft || 0 : 0, ho = (P = x == null ? void 0 : x[E]) != null ? P : 0, jl = _t + Rs - ho - Yl, Kl = _t + Fl - ho, uo = li(m ? Ts(wi, jl) : wi, _t, m ? pe(Zt, Kl) : Zt);
      y[E] = uo, $[E] = uo - _t;
    }
    if (a) {
      var po, Ul = E === "x" ? Z : J, zl = E === "x" ? dt : ht, te = y[A], Si = A === "y" ? "height" : "width", fo = te + T[Ul], _o = te - T[zl], Hs = [Z, J].indexOf(C) !== -1, mo = (po = x == null ? void 0 : x[A]) != null ? po : 0, go = Hs ? fo : te - S[Si] - O[Si] - mo + D.altAxis, bo = Hs ? te + S[Si] + O[Si] - mo - D.altAxis : _o, vo = m && Hs ? mc(go, te, bo) : li(m ? go : fo, te, m ? bo : _o);
      y[A] = vo, $[A] = vo - te;
    }
    t.modifiersData[i] = $;
  }
}
var el = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Bc,
  requiresIfExists: ["offset"]
};
function Vc(s) {
  return {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  };
}
function Wc(s) {
  return s === ut(s) || !ct(s) ? so(s) : Vc(s);
}
function Fc(s) {
  var t = s.getBoundingClientRect(), e = Pe(t.width) / s.offsetWidth || 1, i = Pe(t.height) / s.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
function Yc(s, t, e) {
  e === void 0 && (e = false);
  var i = ct(t), n = ct(t) && Fc(t), o = qt(t), r = He(s, n, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !e) && ((It(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  oo(o)) && (a = Wc(t)), ct(t) ? (l = He(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = no(o))), {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function jc(s) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  s.forEach(function(o) {
    t.set(o.name, o);
  });
  function n(o) {
    e.add(o.name);
    var r = [].concat(o.requires || [], o.requiresIfExists || []);
    r.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && n(l);
      }
    }), i.push(o);
  }
  return s.forEach(function(o) {
    e.has(o.name) || n(o);
  }), i;
}
function Kc(s) {
  var t = jc(s);
  return Es.reduce(function(e, i) {
    return e.concat(t.filter(function(n) {
      return n.phase === i;
    }));
  }, []);
}
function Uc(s) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(s());
      });
    })), t;
  };
}
function Rt(s) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    e[i - 1] = arguments[i];
  return [].concat(e).reduce(function(n, o) {
    return n.replace(/%s/, o);
  }, s);
}
var ie = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var zc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var xo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Xc(s) {
  s.forEach(function(t) {
    [].concat(Object.keys(t), xo).filter(function(e, i, n) {
      return n.indexOf(e) === i;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(Rt(ie, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Rt(ie, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Es.indexOf(t.phase) < 0 && console.error(Rt(ie, t.name, '"phase"', "either " + Es.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Rt(ie, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Rt(ie, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Rt(ie, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Rt(ie, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + xo.map(function(i) {
            return '"' + i + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(i) {
        s.find(function(n) {
          return n.name === i;
        }) == null && console.error(Rt(zc, String(t.name), i, i));
      });
    });
  });
}
function Gc(s, t) {
  var e = /* @__PURE__ */ new Set();
  return s.filter(function(i) {
    var n = t(i);
    if (!e.has(n))
      return e.add(n), true;
  });
}
function qc(s) {
  var t = s.reduce(function(e, i) {
    var n = e[i.name];
    return e[i.name] = n ? Object.assign({}, n, i, {
      options: Object.assign({}, n.options, i.options),
      data: Object.assign({}, n.data, i.data)
    }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var So = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var Qc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var Do = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Io() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function ks(s) {
  s === void 0 && (s = {});
  var t = s, e = t.defaultModifiers, i = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? Do : n;
  return function(a, l, c) {
    c === void 0 && (c = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Do, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, _ = [], f = false, m = {
      state: d,
      setOptions: function(C) {
        var w = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, o, d.options, w), d.scrollParents = {
          reference: me(a) ? ci(a) : a.contextElement ? ci(a.contextElement) : [],
          popper: ci(l)
        };
        var v = Kc(qc([].concat(i, d.options.modifiers)));
        if (d.orderedModifiers = v.filter(function(x) {
          return x.enabled;
        }), {}.NODE_ENV !== "production") {
          var E = Gc([].concat(v, d.options.modifiers), function(x) {
            var $ = x.name;
            return $;
          });
          if (Xc(E), gt(d.options.placement) === mi) {
            var A = d.orderedModifiers.find(function(x) {
              var $ = x.name;
              return $ === "flip";
            });
            A || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = bt(l), S = y.marginTop, O = y.marginRight, k = y.marginBottom, D = y.marginLeft;
          [S, O, k, D].some(function(x) {
            return parseFloat(x);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = d.elements, w = C.reference, v = C.popper;
          if (!Io(w, v)) {
            ({}).NODE_ENV !== "production" && console.error(So);
            return;
          }
          d.rects = {
            reference: Yc(w, gi(v), d.options.strategy === "fixed"),
            popper: Jn(v)
          }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(x) {
            return d.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var E = 0, A = 0; A < d.orderedModifiers.length; A++) {
            if ({}.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Qc);
              break;
            }
            if (d.reset === true) {
              d.reset = false, A = -1;
              continue;
            }
            var y = d.orderedModifiers[A], S = y.fn, O = y.options, k = O === void 0 ? {} : O, D = y.name;
            typeof S == "function" && (d = S({
              state: d,
              options: k,
              name: D,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Uc(function() {
        return new Promise(function(T) {
          m.forceUpdate(), T(d);
        });
      }),
      destroy: function() {
        b(), f = true;
      }
    };
    if (!Io(a, l))
      return {}.NODE_ENV !== "production" && console.error(So), m;
    m.setOptions(c).then(function(T) {
      !f && c.onFirstUpdate && c.onFirstUpdate(T);
    });
    function g() {
      d.orderedModifiers.forEach(function(T) {
        var C = T.name, w = T.options, v = w === void 0 ? {} : w, E = T.effect;
        if (typeof E == "function") {
          var A = E({
            state: d,
            name: C,
            instance: m,
            options: v
          }), y = function() {
          };
          _.push(A || y);
        }
      });
    }
    function b() {
      _.forEach(function(T) {
        return T();
      }), _ = [];
    }
    return m;
  };
}
var Zc = ks();
var Jc = [io, ro, eo, Zn];
var td = ks({
  defaultModifiers: Jc
});
var ed = [io, ro, eo, Zn, tl, Za, el, Ga, Ja];
var je = ks({
  defaultModifiers: ed
});
var il = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterMain: Va,
  afterRead: Pa,
  afterWrite: Ya,
  applyStyles: Zn,
  arrow: Ga,
  auto: mi,
  basePlacements: Ye,
  beforeMain: Ha,
  beforeRead: Na,
  beforeWrite: Wa,
  bottom: dt,
  clippingParents: La,
  computeStyles: eo,
  createPopper: je,
  createPopperBase: Zc,
  createPopperLite: td,
  detectOverflow: Ve,
  end: Re,
  eventListeners: io,
  flip: Za,
  hide: Ja,
  left: J,
  main: Ba,
  modifierPhases: Es,
  offset: tl,
  placements: qn,
  popper: ye,
  popperGenerator: ks,
  popperOffsets: ro,
  preventOverflow: el,
  read: Ra,
  reference: Ma,
  right: ht,
  start: _e,
  top: Z,
  variationPlacements: $n,
  viewport: Gn,
  write: Fa
}, Symbol.toStringTag, { value: "Module" }));
function Fs(s) {
  return s === "true" ? true : s === "false" ? false : s === Number(s).toString() ? Number(s) : s === "" || s === "null" ? null : s;
}
function Ys(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
var p = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-te-${Ys(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-te-${Ys(t)}`);
  },
  getDataAttributes(s) {
    if (!s)
      return {};
    const t = {};
    return Object.keys(s.dataset).filter((e) => e.startsWith("te")).forEach((e) => {
      if (e.startsWith("teClass"))
        return;
      let i = e.replace(/^te/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Fs(s.dataset[e]);
    }), t;
  },
  getDataClassAttributes(s) {
    if (!s)
      return {};
    const t = {
      ...s.dataset
    };
    return Object.keys(t).filter((e) => e.startsWith("teClass")).forEach((e) => {
      let i = e.replace(/^teClass/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Fs(t[e]);
    }), t;
  },
  getDataAttribute(s, t) {
    return Fs(
      s.getAttribute(`data-te-${Ys(t)}`)
    );
  },
  offset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(s) {
    return {
      top: s.offsetTop,
      left: s.offsetLeft
    };
  },
  style(s, t) {
    Object.assign(s.style, t);
  },
  toggleClass(s, t) {
    s && js(t).forEach((e) => {
      s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e);
    });
  },
  addClass(s, t) {
    js(t).forEach(
      (e) => !s.classList.contains(e) && s.classList.add(e)
    );
  },
  addStyle(s, t) {
    Object.keys(t).forEach((e) => {
      s.style[e] = t[e];
    });
  },
  removeClass(s, t) {
    js(t).forEach(
      (e) => s.classList.contains(e) && s.classList.remove(e)
    );
  },
  hasClass(s, t) {
    return s.classList.contains(t);
  }
};
function js(s) {
  return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : false;
}
var id = 3;
var h = {
  closest(s, t) {
    return s.closest(t);
  },
  matches(s, t) {
    return s.matches(t);
  },
  find(s, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, s)
    );
  },
  findOne(s, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, s);
  },
  children(s, t) {
    return [].concat(...s.children).filter((i) => i.matches(t));
  },
  parents(s, t) {
    const e = [];
    let i = s.parentNode;
    for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== id; )
      this.matches(i, t) && e.push(i), i = i.parentNode;
    return e;
  },
  prev(s, t) {
    let e = s.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  next(s, t) {
    let e = s.nextElementSibling;
    for (; e; ) {
      if (this.matches(e, t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(s) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
    return this.find(t, s).filter(
      (e) => !ue(e) && St(e)
    );
  }
};
var Ks = "dropdown";
var sd = "te.dropdown";
var ge = `.${sd}`;
var ao = ".data-api";
var ns = "Escape";
var $o = "Space";
var Lo = "Tab";
var Nn = "ArrowUp";
var os = "ArrowDown";
var nd = 2;
var od = new RegExp(
  `${Nn}|${os}|${ns}`
);
var rd = `hide${ge}`;
var ad = `hidden${ge}`;
var ld = `show${ge}`;
var cd = `shown${ge}`;
var dd = `click${ge}${ao}`;
var Mo = `keydown${ge}${ao}`;
var hd = `keyup${ge}${ao}`;
var Pt = "show";
var ud = "dropup";
var pd = "dropend";
var fd = "dropstart";
var _d = "[data-te-navbar-ref]";
var Ii = "[data-te-dropdown-toggle-ref]";
var Us = "[data-te-dropdown-menu-ref]";
var md = "[data-te-navbar-nav-ref]";
var gd = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)";
var bd = F() ? "top-end" : "top-start";
var vd = F() ? "top-start" : "top-end";
var Ed = F() ? "bottom-end" : "bottom-start";
var Td = F() ? "bottom-start" : "bottom-end";
var Cd = F() ? "left-start" : "right-start";
var Ad = F() ? "right-start" : "left-start";
var yd = [{ opacity: "0" }, { opacity: "1" }];
var wd = [{ opacity: "1" }, { opacity: "0" }];
var $i = {
  duration: 550,
  iterations: 1,
  easing: "ease",
  fill: "both"
};
var kd = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: true,
  dropdownAnimation: "on"
};
var Od = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string"
};
var wt = class _wt extends vt {
  constructor(t, e) {
    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const i = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !i, this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return kd;
  }
  static get DefaultType() {
    return Od;
  }
  static get NAME() {
    return Ks;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ue(this._element) || this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    if (u.trigger(
      this._element,
      ld,
      t
    ).defaultPrevented)
      return;
    const i = _wt.getParentFromElement(this._element);
    this._inNavbar ? p.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(md) && [].concat(...document.body.children).forEach((n) => u.on(n, "mouseover", vs)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.setAttribute(`data-te-dropdown-${Pt}`, ""), this._animationCanPlay && this._menu.animate(yd, $i), this._element.setAttribute(`data-te-dropdown-${Pt}`, ""), setTimeout(
      () => {
        u.trigger(this._element, cd, t);
      },
      this._animationCanPlay ? $i.duration : 0
    );
  }
  hide() {
    if (ue(this._element) || !this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (u.on(
      document,
      Mo,
      Ii,
      _wt.dataApiKeydownHandler
    ), u.on(
      document,
      Mo,
      Us,
      _wt.dataApiKeydownHandler
    ), u.on(document, dd, _wt.clearMenus), u.on(document, hd, _wt.clearMenus), this._didInit = true);
  }
  _completeHide(t) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || u.trigger(
      this._element,
      rd,
      t
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((i) => u.off(i, "mouseover", vs)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(
      wd,
      $i
    )), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Pt}`), this._element.removeAttribute(`data-te-dropdown-${Pt}`), this._element.setAttribute("aria-expanded", "false"), p.removeDataAttribute(this._menu, "popper"), u.trigger(this._element, ad, t);
      },
      this._animationCanPlay ? $i.duration : 0
    ));
  }
  _getConfig(t) {
    if (t = {
      ...this.constructor.Default,
      ...p.getDataAttributes(this._element),
      ...t
    }, N(Ks, t, this.constructor.DefaultType), typeof t.reference == "object" && !Ne(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${Ks.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof il > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    this._config.reference === "parent" ? e = t : Ne(this._config.reference) ? e = Gt(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const i = this._getPopperConfig(), n = i.modifiers.find(
      (o) => o.name === "applyStyles" && o.enabled === false
    );
    this._popper = je(
      e,
      this._menu,
      i
    ), n && p.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.dataset[`teDropdown${Pt.charAt(0).toUpperCase() + Pt.slice(1)}`] === "";
  }
  _getMenuElement() {
    return h.next(this._element, Us)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.dataset.teDropdownPosition === pd)
      return Cd;
    if (t.dataset.teDropdownPosition === fd)
      return Ad;
    const e = getComputedStyle(this._menu).getPropertyValue("--te-position").trim() === "end";
    return t.dataset.teDropdownPosition === ud ? e ? vd : bd : e ? Td : Ed;
  }
  _detectNavbar() {
    return this._element.closest(_d) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (t.modifiers = [
      {
        name: "applyStyles",
        enabled: false
      }
    ]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({ key: t, target: e }) {
    const i = h.find(
      gd,
      this._menu
    ).filter(St);
    i.length && wa(
      i,
      e,
      t === os,
      !i.includes(e)
    ).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _wt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === nd || t.type === "keyup" && t.key !== Lo))
      return;
    const e = h.find(Ii);
    for (let i = 0, n = e.length; i < n; i++) {
      const o = _wt.getInstance(e[i]);
      if (!o || o._config.autoClose === false || !o._isShown())
        continue;
      const r = {
        relatedTarget: o._element
      };
      if (t) {
        const a = t.composedPath(), l = a.includes(o._menu);
        if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Lo || /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        t.type === "click" && (r.clickEvent = t);
      }
      o._completeHide(r);
    }
  }
  static getParentFromElement(t) {
    return Xt(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (/input|textarea/i.test(t.target.tagName) ? t.key === $o || t.key !== ns && (t.key !== os && t.key !== Nn || t.target.closest(Us)) : !od.test(t.key))
      return;
    const e = this.dataset[`teDropdown${Pt.charAt(0).toUpperCase() + Pt.slice(1)}`] === "";
    if (!e && t.key === ns || (t.preventDefault(), t.stopPropagation(), ue(this)))
      return;
    const i = this.matches(Ii) ? this : h.prev(this, Ii)[0], n = _wt.getOrCreateInstance(i);
    if (t.key === ns) {
      n.hide();
      return;
    }
    if (t.key === Nn || t.key === os) {
      e || n.show(), n._selectMenuItem(t);
      return;
    }
    (!e || t.key === $o) && _wt.clearMenus();
  }
};
var zs = "collapse";
var sl = "te.collapse";
var Os = `.${sl}`;
var No = {
  toggle: true,
  parent: null
};
var xd = {
  toggle: "boolean",
  parent: "(null|element)"
};
var Sd = `show${Os}`;
var Dd = `shown${Os}`;
var Id = `hide${Os}`;
var $d = `hidden${Os}`;
var Xs = "data-te-collapse-show";
var Ro = "data-te-collapse-collapsed";
var Li = "data-te-collapse-collapsing";
var Ld = "data-te-collapse-horizontal";
var Oe = "data-te-collapse-item";
var Po = `:scope [${Oe}] [${Oe}]`;
var Md = "width";
var Nd = "height";
var Rd = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]";
var Ho = "[data-te-collapse-init]";
var Pd = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
};
var Hd = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
var Ut = class _Ut extends vt {
  constructor(t, e, i) {
    super(t), this._isTransitioning = false, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._triggerArray = [];
    const n = h.find(Ho);
    for (let o = 0, r = n.length; o < r; o++) {
      const a = n[o], l = Xn(a), c = h.find(l).filter(
        (d) => d === this._element
      );
      l !== null && c.length && (this._selector = l, this._triggerArray.push(a));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return No;
  }
  static get NAME() {
    return zs;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], e;
    if (this._config.parent) {
      const d = h.find(
        Po,
        this._config.parent
      );
      t = h.find(
        Rd,
        this._config.parent
      ).filter((_) => !d.includes(_));
    }
    const i = h.findOne(this._selector);
    if (t.length) {
      const d = t.find((_) => i !== _);
      if (e = d ? _Ut.getInstance(d) : null, e && e._isTransitioning)
        return;
    }
    if (u.trigger(this._element, Sd).defaultPrevented)
      return;
    t.forEach((d) => {
      i !== d && _Ut.getOrCreateInstance(d, { toggle: false }).hide(), e || I.setData(d, sl, null);
    });
    const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    p.removeClass(this._element, this._classes.visible), p.removeClass(this._element, this._classes.hidden), p.addClass(this._element, r), this._element.removeAttribute(Oe), this._element.setAttribute(Li, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
    const a = () => {
      this._isTransitioning = false, p.removeClass(this._element, this._classes.hidden), p.removeClass(this._element, r), p.addClass(this._element, this._classes.visible), this._element.removeAttribute(Li), this._element.setAttribute(Oe, ""), this._element.setAttribute(Xs, ""), this._element.style[o] = "", u.trigger(this._element, Dd);
    }, c = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(a, this._element, true), this._element.style[o] = `${this._element[c]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || u.trigger(this._element, Id).defaultPrevented)
      return;
    const e = this._getDimension(), i = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Fe(this._element), p.addClass(this._element, i), p.removeClass(this._element, this._classes.visible), p.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Li, ""), this._element.removeAttribute(Oe), this._element.removeAttribute(Xs);
    const n = this._triggerArray.length;
    for (let r = 0; r < n; r++) {
      const a = this._triggerArray[r], l = Xt(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], false);
    }
    this._isTransitioning = true;
    const o = () => {
      this._isTransitioning = false, p.removeClass(this._element, i), p.addClass(this._element, this._classes.visible), p.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Li), this._element.setAttribute(Oe, ""), u.trigger(this._element, $d);
    };
    this._element.style[e] = "", this._queueCallback(o, this._element, true);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(Xs);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...No,
      ...p.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = Gt(t.parent), N(zs, t, xd), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...Pd,
      ...e,
      ...t
    }, N(zs, t, Hd), t;
  }
  _getDimension() {
    return this._element.hasAttribute(Ld) ? Md : Nd;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = h.find(
      Po,
      this._config.parent
    );
    h.find(Ho, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
      const i = Xt(e);
      i && this._addAriaAndCollapsedClass([e], this._isShown(i));
    });
  }
  _addAriaAndCollapsedClass(t, e) {
    t.length && t.forEach((i) => {
      e ? i.removeAttribute(Ro) : i.setAttribute(`${Ro}`, ""), i.setAttribute("aria-expanded", e);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = {};
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = false);
      const i = _Ut.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    });
  }
};
var Bo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var Vo = ".sticky-top";
var pi = class {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(
      this._element,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      Bo,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      Vo,
      "marginRight",
      (e) => e - t
    );
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, i) {
    const n = this.getWidth(), o = (r) => {
      if (r !== this._element && window.innerWidth > r.clientWidth + n)
        return;
      this._saveInitialAttribute(r, e);
      const a = window.getComputedStyle(r)[e];
      r.style[e] = `${i(
        Number.parseFloat(a)
      )}px`;
    };
    this._applyManipulationCallback(t, o);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Bo, "paddingRight"), this._resetElementAttributes(Vo, "marginRight");
  }
  _saveInitialAttribute(t, e) {
    const i = t.style[e];
    i && p.setDataAttribute(t, e, i);
  }
  _resetElementAttributes(t, e) {
    const i = (n) => {
      const o = p.getDataAttribute(n, e);
      typeof o > "u" ? n.style.removeProperty(e) : (p.removeDataAttribute(n, e), n.style[e] = o);
    };
    this._applyManipulationCallback(t, i);
  }
  _applyManipulationCallback(t, e) {
    Ne(t) ? e(t) : h.find(t, this._element).forEach(e);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
};
var Bd = {
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: "body",
  // give the choice to place backdrop under different elements
  clickCallback: null,
  backdropClasses: null
};
var Vd = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)",
  backdropClasses: "(array|null)"
};
var nl = "backdrop";
var Wo = `mousedown.te.${nl}`;
var lo = class {
  constructor(t) {
    this._config = this._getConfig(t), this._isAppended = false, this._element = null;
  }
  show(t) {
    if (!this._config.isVisible) {
      he(t);
      return;
    }
    this._append(), this._config.isAnimated && Fe(this._getElement());
    const e = this._config.backdropClasses || [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "fixed",
      "top-0",
      "left-0",
      "z-[1040]",
      "bg-black",
      "w-screen",
      "h-screen"
    ];
    p.removeClass(this._getElement(), "opacity-0"), p.addClass(this._getElement(), e), this._element.setAttribute("data-te-backdrop-show", ""), this._emulateAnimation(() => {
      he(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      he(t);
      return;
    }
    this._element.removeAttribute("data-te-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(() => {
      this.dispose(), he(t);
    });
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add("opacity-50"), this._element = t;
    }
    return this._element;
  }
  _getConfig(t) {
    return t = {
      ...Bd,
      ...typeof t == "object" ? t : {}
    }, t.rootElement = Gt(t.rootElement), N(nl, t, Vd), t;
  }
  _append() {
    this._isAppended || (this._config.rootElement.append(this._getElement()), u.on(this._getElement(), Wo, () => {
      he(this._config.clickCallback);
    }), this._isAppended = true);
  }
  dispose() {
    this._isAppended && (u.off(this._element, Wo), this._element.remove(), this._isAppended = false);
  }
  _emulateAnimation(t) {
    ya(
      t,
      this._getElement(),
      this._config.isAnimated
    );
  }
};
var bi = class {
  constructor(t, e = {}, i) {
    this._element = t, this._toggler = i, this._event = e.event || "blur", this._condition = e.condition || (() => true), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || false, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n) => {
      this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
    };
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap();
  }
  disable() {
    this._focusableElements.forEach((t) => {
      t.removeEventListener(this._event, this.handler);
    }), this._toggler && this._toggler.focus();
  }
  update() {
    this._setElements(), this._setFocusTrap();
  }
  _init() {
    const t = (e) => {
      !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
    };
    window.addEventListener("keydown", t);
  }
  _filterVisible(t) {
    return t.filter((e) => {
      if (!St(e))
        return false;
      const i = h.parents(e, "*");
      for (let n = 0; n < i.length; n++) {
        const o = window.getComputedStyle(i[n]);
        if (o && (o.display === "none" || o.visibility === "hidden"))
          return false;
      }
      return true;
    });
  }
  _setElements() {
    this._focusableElements = h.focusableChildren(this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
  }
  _setFocusTrap() {
    this._focusableElements.forEach((t, e) => {
      e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
    });
  }
};
var xs = (s, t = "hide") => {
  const e = `click.dismiss${s.EVENT_KEY}`, i = s.NAME;
  u.on(
    document,
    e,
    `[data-te-${i}-dismiss]`,
    function(n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), ue(this))
        return;
      const o = Xt(this) || this.closest(`.${i}`) || this.closest(`[data-te-${i}-init]`);
      if (!o)
        return;
      s.getOrCreateInstance(o)[t]();
    }
  );
};
var Fo = "offcanvas";
var Wd = "te.offcanvas";
var Ke = `.${Wd}`;
var Fd = ".data-api";
var Yd = `load${Ke}${Fd}`;
var jd = "Escape";
var Yo = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var Kd = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
};
var jo = "show";
var Ud = "[data-te-offcanvas-init][data-te-offcanvas-show]";
var zd = `show${Ke}`;
var Xd = `shown${Ke}`;
var Gd = `hide${Ke}`;
var qd = `hidden${Ke}`;
var Qd = `keydown.dismiss${Ke}`;
var rs = class _rs extends vt {
  constructor(t, e) {
    super(t), this._config = this._getConfig(e), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = false, this._init();
  }
  // Getters
  static get NAME() {
    return Fo;
  }
  static get Default() {
    return Yo;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || u.trigger(this._element, zd, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new pi().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-te-offcanvas-${jo}`, "");
    const i = () => {
      this._config.scroll || this._focustrap.trap(), u.trigger(this._element, Xd, { relatedTarget: t });
    };
    this._queueCallback(i, this._element, true);
  }
  hide() {
    if (!this._isShown || u.trigger(this._element, Gd).defaultPrevented)
      return;
    this._focustrap.disable(), this._element.blur(), this._isShown = false, this._element.removeAttribute(`data-te-offcanvas-${jo}`), this._backdrop.hide();
    const e = () => {
      this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new pi().reset(), u.trigger(this._element, qd);
    };
    this._queueCallback(e, this._element, true);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (u.on(
      window,
      Yd,
      () => h.find(Ud).forEach(
        (t) => _rs.getOrCreateInstance(t).show()
      )
    ), xs(_rs), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...Yo,
      ...p.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, N(Fo, t, Kd), t;
  }
  _initializeBackDrop() {
    return new lo({
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }
  _initializeFocusTrap() {
    return new bi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _addEventListeners() {
    u.on(this._element, Qd, (t) => {
      this._config.keyboard && t.key === jd && this.hide();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _rs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var Gs = "alert";
var Zd = "te.alert";
var ol = `.${Zd}`;
var Jd = `close${ol}`;
var th = `closed${ol}`;
var Ge = "data-te-alert-show";
var eh = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Ko = {
  animation: true,
  autohide: true,
  delay: 1e3
};
var ih = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
};
var sh = {
  fadeIn: "string",
  fadeOut: "string"
};
var Rn = class _Rn extends vt {
  constructor(t, e, i) {
    super(t), this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._didInit = false, this._init();
  }
  // Getters
  static get DefaultType() {
    return eh;
  }
  static get Default() {
    return Ko;
  }
  static get NAME() {
    return Gs;
  }
  // Public
  close() {
    if (u.trigger(this._element, Jd).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, p.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Ge), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Ge) && (p.removeClass(this._element, "hidden"), p.addClass(this._element, "block"), St(this._element))) {
        const t = (e) => {
          p.removeClass(this._element, "hidden"), p.addClass(this._element, "block"), u.off(e.target, "animationend", t);
        };
        this._element.setAttribute(Ge, ""), u.on(this._element, "animationend", t);
      }
      this._config.animation && (p.removeClass(this._element, this._classes.fadeOut), p.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Ge)) {
      this._element.removeAttribute(Ge);
      const t = (e) => {
        p.addClass(this._element, "hidden"), p.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), u.off(e.target, "animationend", t);
      };
      u.on(this._element, "animationend", t), p.removeClass(this._element, this._classes.fadeIn), p.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (xs(_Rn, "close"), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...Ko,
      ...p.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, N(Gs, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...ih,
      ...e,
      ...t
    }, N(Gs, t, sh), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), u.trigger(this._element, th), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Rn.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var qs = "carousel";
var nh = "te.carousel";
var pt = `.${nh}`;
var rl = ".data-api";
var oh = "ArrowLeft";
var rh = "ArrowRight";
var ah = 500;
var lh = 40;
var Uo = {
  interval: 5e3,
  keyboard: true,
  slide: false,
  pause: "hover",
  wrap: true,
  touch: true
};
var ch = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  slide: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
};
var dh = {
  pointer: "touch-pan-y",
  block: "!block",
  visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
  invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-0 data-[te-carousel-fade]:delay-600",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full"
};
var hh = {
  pointer: "string",
  block: "string",
  visible: "string",
  invisible: "string",
  slideRight: "string",
  slideLeft: "string"
};
var se = "next";
var ne = "prev";
var ce = "left";
var si = "right";
var uh = {
  [oh]: si,
  [rh]: ce
};
var ph = `slide${pt}`;
var zo = `slid${pt}`;
var fh = `keydown${pt}`;
var _h = `mouseenter${pt}`;
var mh = `mouseleave${pt}`;
var gh = `touchstart${pt}`;
var bh = `touchmove${pt}`;
var vh = `touchend${pt}`;
var Eh = `pointerdown${pt}`;
var Th = `pointerup${pt}`;
var Ch = `dragstart${pt}`;
var Ah = `load${pt}${rl}`;
var yh = `click${pt}${rl}`;
var wh = "data-te-carousel-init";
var oe = "data-te-carousel-active";
var kh = "data-te-carousel-slide";
var Oh = "data-te-carousel-item-end";
var Qs = "data-te-carousel-item-start";
var xh = "data-te-carousel-item-next";
var Sh = "data-te-carousel-item-prev";
var Dh = "data-te-carousel-pointer-event";
var Ih = "[data-te-carousel-init]";
var al = "[data-te-carousel-active]";
var co = "[data-te-carousel-item]";
var ve = `${al}${co}`;
var $h = `${co} img`;
var Lh = "[data-te-carousel-item-next], [data-te-carousel-item-prev]";
var Mh = "[data-te-carousel-indicators]";
var Nh = "[data-te-target]";
var Rh = "[data-te-slide], [data-te-slide-to]";
var Ph = "touch";
var Hh = "pen";
var Yt = class _Yt extends vt {
  constructor(t, e, i) {
    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._indicatorsElement = h.findOne(
      Mh,
      this._element
    ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return Uo;
  }
  static get NAME() {
    return qs;
  }
  // Public
  next() {
    this._slide(se);
  }
  nextWhenVisible() {
    !document.hidden && St(this._element) && this.next();
  }
  prev() {
    this._slide(ne);
  }
  pause(t) {
    t || (this._isPaused = true), h.findOne(Lh, this._element) && (Ea(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
  }
  cycle(t) {
    t || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
      (document.visibilityState ? this.nextWhenVisible : this.next).bind(
        this
      ),
      this._config.interval
    ));
  }
  to(t) {
    this._activeElement = h.findOne(
      ve,
      this._element
    );
    const e = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      u.one(this._element, zo, () => this.to(t));
      return;
    }
    if (e === t) {
      this.pause(), this.cycle();
      return;
    }
    const i = t > e ? se : ne;
    this._slide(i, this._items[t]);
  }
  // Private
  _init() {
    this._didInit || (u.on(
      document,
      yh,
      Rh,
      _Yt.dataApiClickHandler
    ), u.on(window, Ah, () => {
      const t = h.find(Ih);
      for (let e = 0, i = t.length; e < i; e++)
        _Yt.carouselInterface(
          t[e],
          _Yt.getInstance(t[e])
        );
    }), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...Uo,
      ...p.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, N(qs, t, ch), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...dh,
      ...e,
      ...t
    }, N(qs, t, hh), t;
  }
  _applyInitialClasses() {
    const t = h.findOne(
      ve,
      this._element
    );
    t.classList.add(
      this._classes.block,
      ...this._classes.visible.split(" ")
    ), this._setActiveIndicatorElement(t);
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= lh)
      return;
    const e = t / this.touchDeltaX;
    this.touchDeltaX = 0, e && this._slide(e > 0 ? si : ce);
  }
  _setActiveElementClass() {
    this._activeElement = h.findOne(
      ve,
      this._element
    ), p.addClass(this._activeElement, "hidden");
  }
  _addEventListeners() {
    this._config.keyboard && u.on(
      this._element,
      fh,
      (t) => this._keydown(t)
    ), this._config.pause === "hover" && (u.on(
      this._element,
      _h,
      (t) => this.pause(t)
    ), u.on(
      this._element,
      mh,
      (t) => this.cycle(t)
    )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
  }
  _addTouchEventListeners() {
    const t = (o) => this._pointerEvent && (o.pointerType === Hh || o.pointerType === Ph), e = (o) => {
      t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
    }, i = (o) => {
      this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
    }, n = (o) => {
      t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
        (r) => this.cycle(r),
        ah + this._config.interval
      ));
    };
    h.find($h, this._element).forEach(
      (o) => {
        u.on(
          o,
          Ch,
          (r) => r.preventDefault()
        );
      }
    ), this._pointerEvent ? (u.on(
      this._element,
      Eh,
      (o) => e(o)
    ), u.on(this._element, Th, (o) => n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${Dh}`, "")) : (u.on(this._element, gh, (o) => e(o)), u.on(this._element, bh, (o) => i(o)), u.on(this._element, vh, (o) => n(o)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = uh[t.key];
    e && (t.preventDefault(), this._slide(e));
  }
  _getItemIndex(t) {
    return this._items = t && t.parentNode ? h.find(co, t.parentNode) : [], this._items.indexOf(t);
  }
  _getItemByOrder(t, e) {
    const i = t === se;
    return wa(
      this._items,
      e,
      i,
      this._config.wrap
    );
  }
  _triggerSlideEvent(t, e) {
    const i = this._getItemIndex(t), n = this._getItemIndex(
      h.findOne(ve, this._element)
    );
    return u.trigger(this._element, ph, {
      relatedTarget: t,
      direction: e,
      from: n,
      to: i
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const e = h.findOne(
        al,
        this._indicatorsElement
      );
      e.removeAttribute(oe), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
      const i = h.find(
        Nh,
        this._indicatorsElement
      );
      for (let n = 0; n < i.length; n++)
        if (Number.parseInt(
          i[n].getAttribute("data-te-slide-to"),
          10
        ) === this._getItemIndex(t)) {
          i[n].setAttribute(`${oe}`, ""), i[n].setAttribute("aria-current", "true"), i[n].classList.add("!opacity-100");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || h.findOne(ve, this._element);
    if (!t)
      return;
    const e = Number.parseInt(
      t.getAttribute("data-te-interval"),
      10
    );
    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
  }
  _slide(t, e) {
    const i = this._directionToOrder(t), n = h.findOne(
      ve,
      this._element
    ), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), a = this._getItemIndex(r), l = !!this._interval, c = i === se, d = c ? Qs : Oh, _ = c ? xh : Sh, f = this._orderToDirection(i), m = d === Qs ? this._classes.slideLeft : this._classes.slideRight, g = d !== Qs ? this._classes.slideLeft : this._classes.slideRight;
    if (r && r.hasAttribute(oe)) {
      this._isSliding = false;
      return;
    }
    if (this._isSliding || this._triggerSlideEvent(r, f).defaultPrevented || !n || !r)
      return;
    this._isSliding = true, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
    const T = () => {
      u.trigger(this._element, zo, {
        relatedTarget: r,
        direction: f,
        from: o,
        to: a
      });
    };
    if (this._element.hasAttribute(kh)) {
      r.setAttribute(`${_}`, ""), r.classList.add(this._classes.block, g), Fe(r), n.setAttribute(`${d}`, ""), n.classList.add(
        m,
        ...this._classes.invisible.split(" ")
      ), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${d}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(
        this._classes.slideRight,
        this._classes.slideLeft
      );
      const C = () => {
        r.removeAttribute(d), r.removeAttribute(_), r.setAttribute(`${oe}`, ""), n.removeAttribute(oe), n.classList.remove(
          m,
          ...this._classes.invisible.split(" "),
          this._classes.block
        ), n.removeAttribute(_), n.removeAttribute(d), this._isSliding = false, setTimeout(T, 0);
      };
      this._queueCallback(C, n, true);
    } else
      n.removeAttribute(oe), n.classList.remove(this._classes.block), r.setAttribute(`${oe}`, ""), r.classList.add(this._classes.block), this._isSliding = false, T();
    l && this.cycle();
  }
  _directionToOrder(t) {
    return [si, ce].includes(t) ? F() ? t === ce ? ne : se : t === ce ? se : ne : t;
  }
  _orderToDirection(t) {
    return [se, ne].includes(t) ? F() ? t === ne ? ce : si : t === ne ? si : ce : t;
  }
  // Static
  static carouselInterface(t, e) {
    const i = _Yt.getOrCreateInstance(t, e);
    let { _config: n } = i;
    typeof e == "object" && (n = {
      ...n,
      ...e
    });
    const o = typeof e == "string" ? e : n.slide;
    if (typeof e == "number")
      i.to(e);
    else if (typeof o == "string") {
      if (typeof i[o] > "u")
        throw new TypeError(`No method named "${o}"`);
      i[o]();
    } else
      n.interval && n.carouselInit === null && (i.pause(), i.cycle());
  }
  static jQueryInterface(t) {
    return this.each(function() {
      _Yt.carouselInterface(this, t);
    });
  }
  static dataApiClickHandler(t) {
    const e = Xt(this);
    if (!e || !e.hasAttribute(wh))
      return;
    const i = {
      ...p.getDataAttributes(e),
      ...p.getDataAttributes(this)
    }, n = this.getAttribute("data-te-slide-to");
    n && (i.interval = false), _Yt.carouselInterface(e, i), n && _Yt.getInstance(e).to(n), t.preventDefault();
  }
};
var Zs = "modal";
var Bh = "te.modal";
var Et = `.${Bh}`;
var Xo = "Escape";
var Go = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var Vh = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
};
var Wh = {
  show: "transform-none",
  static: "scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out"
};
var Fh = {
  show: "string",
  static: "string",
  staticProperties: "string"
};
var Yh = `hide${Et}`;
var jh = `hidePrevented${Et}`;
var Kh = `hidden${Et}`;
var Uh = `show${Et}`;
var zh = `shown${Et}`;
var qo = `resize${Et}`;
var Qo = `click.dismiss${Et}`;
var Zo = `keydown.dismiss${Et}`;
var Xh = `mouseup.dismiss${Et}`;
var Jo = `mousedown.dismiss${Et}`;
var tr = "data-te-modal-open";
var er = "data-te-open";
var qe = "[data-te-modal-dialog-ref]";
var Gh = "[data-te-modal-body-ref]";
var Pn = class _Pn extends vt {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._dialog = h.findOne(qe, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new pi(), this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return Go;
  }
  static get NAME() {
    return Zs;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || u.trigger(this._element, Uh, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.setAttribute(tr, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), u.on(this._dialog, Jo, () => {
      u.one(this._element, Xh, (i) => {
        i.target === this._element && (this._ignoreBackdropClick = true);
      });
    }), this._showElement(t), this._showBackdrop());
  }
  hide() {
    if (!this._isShown || this._isTransitioning || u.trigger(this._element, Yh).defaultPrevented)
      return;
    this._isShown = false;
    const e = this._isAnimated();
    e && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), h.findOne(qe, this._element).classList.remove(this._classes.show), u.off(this._element, Qo), u.off(this._dialog, Jo), this._queueCallback(() => this._hideModal(), this._element, e), this._element.removeAttribute(er);
  }
  dispose() {
    [window, this._dialog].forEach(
      (t) => u.off(t, Et)
    ), this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _init() {
    this._didInit || (xs(_Pn), this._didInit = true);
  }
  _initializeBackDrop() {
    return new lo({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new bi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _getConfig(t) {
    return t = {
      ...Go,
      ...p.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, N(Zs, t, Vh), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...Wh,
      ...e,
      ...t
    }, N(Zs, t, Fh), t;
  }
  _showElement(t) {
    const e = this._isAnimated(), i = h.findOne(Gh, this._dialog);
    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${er}`, "true"), this._element.scrollTop = 0;
    const n = h.findOne(qe, this._element);
    n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), i && (i.scrollTop = 0), e && Fe(this._element);
    const o = () => {
      this._config.focus && this._focustrap.trap(), this._isTransitioning = false, u.trigger(this._element, zh, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, e);
  }
  _setEscapeEvent() {
    this._isShown ? u.on(document, Zo, (t) => {
      this._config.keyboard && t.key === Xo ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === Xo && this._triggerBackdropTransition();
    }) : u.off(this._element, Zo);
  }
  _setResizeEvent() {
    this._isShown ? u.on(window, qo, () => this._adjustDialog()) : u.off(window, qo);
  }
  _hideModal() {
    const t = h.findOne(qe, this._element);
    t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0"), setTimeout(() => {
      this._element.style.display = "none";
    }, 300), this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
      document.body.removeAttribute(tr), this._resetAdjustments(), this._scrollBar.reset(), u.trigger(this._element, Kh);
    });
  }
  _showBackdrop(t) {
    u.on(this._element, Qo, (e) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }
      e.target === e.currentTarget && (this._config.backdrop === true ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
    }), this._backdrop.show(t);
  }
  _isAnimated() {
    return !!h.findOne(qe, this._element);
  }
  _triggerBackdropTransition() {
    if (u.trigger(this._element, jh).defaultPrevented)
      return;
    const { classList: e, scrollHeight: i, style: n } = this._element, o = i > document.documentElement.clientHeight;
    !o && n.overflowY === "hidden" || e.contains(this._classes.static) || (o || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" ")), this._queueCallback(() => {
      e.remove(this._classes.static), setTimeout(() => {
        e.remove(...this._classes.staticProperties.split(" "));
      }, 300), o || this._queueCallback(() => {
        n.overflowY = "";
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
    (!i && t && !F() || i && !t && F()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !F() || !i && t && F()) && (this._element.style.paddingRight = `${e}px`);
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = _Pn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
};
var qh = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]);
var Qh = /^aria-[\w-]*$/i;
var Zh = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
var Jh = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
var tu = (s, t) => {
  const e = s.nodeName.toLowerCase();
  if (t.includes(e))
    return qh.has(e) ? !!(Zh.test(s.nodeValue) || Jh.test(s.nodeValue)) : true;
  const i = t.filter(
    (n) => n instanceof RegExp
  );
  for (let n = 0, o = i.length; n < o; n++)
    if (i[n].test(e))
      return true;
  return false;
};
var eu = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Qh],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function ir(s, t, e) {
  if (!s.length)
    return s;
  if (e && typeof e == "function")
    return e(s);
  const n = new window.DOMParser().parseFromString(s, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
  for (let r = 0, a = o.length; r < a; r++) {
    const l = o[r], c = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(c)) {
      l.remove();
      continue;
    }
    const d = [].concat(...l.attributes), _ = [].concat(
      t["*"] || [],
      t[c] || []
    );
    d.forEach((f) => {
      tu(f, _) || l.removeAttribute(f.nodeName);
    });
  }
  return n.body.innerHTML;
}
var sr = "tooltip";
var iu = "te.tooltip";
var Ct = `.${iu}`;
var su = "te-tooltip";
var nu = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var ou = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
};
var ru = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: F() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: F() ? "right" : "left"
};
var au = {
  animation: true,
  template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: false,
  selector: false,
  placement: "top",
  offset: [0, 0],
  container: false,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: true,
  sanitizeFn: null,
  allowList: eu,
  popperConfig: { hide: true }
};
var lu = {
  HIDE: `hide${Ct}`,
  HIDDEN: `hidden${Ct}`,
  SHOW: `show${Ct}`,
  SHOWN: `shown${Ct}`,
  INSERTED: `inserted${Ct}`,
  CLICK: `click${Ct}`,
  FOCUSIN: `focusin${Ct}`,
  FOCUSOUT: `focusout${Ct}`,
  MOUSEENTER: `mouseenter${Ct}`,
  MOUSELEAVE: `mouseleave${Ct}`
};
var cu = "fade";
var du = "modal";
var Js = "show";
var Qe = "show";
var tn = "out";
var nr = ".tooltip-inner";
var or = `.${du}`;
var rr = "hide.te.modal";
var Ze = "hover";
var en = "focus";
var hu = "click";
var uu = "manual";
var vi = class _vi extends vt {
  constructor(t, e) {
    if (typeof il > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
  }
  // Getters
  static get Default() {
    return au;
  }
  static get NAME() {
    return sr;
  }
  static get Event() {
    return lu;
  }
  static get DefaultType() {
    return ou;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (this._isEnabled)
      if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains(Js)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout), u.off(
      this._element.closest(or),
      rr,
      this._hideModalHandler
    ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled))
      return;
    const t = u.trigger(
      this._element,
      this.constructor.Event.SHOW
    ), e = Ta(this._element), i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
    if (t.defaultPrevented || !i)
      return;
    this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(nr).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
    const n = this.getTipElement(), o = Ot(this.constructor.NAME);
    n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(() => {
      this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
    }, 100);
    const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
    this._addAttachmentClass(a);
    const { container: l } = this._config;
    if (I.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), u.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = je(
      this._element,
      n,
      this._getPopperConfig(a)
    ), n.getAttribute("id").includes("tooltip"))
      switch (r) {
        case "bottom":
          n.classList.add("py-[0.4rem]");
          break;
        case "left":
          n.classList.add("px-[0.4rem]");
          break;
        case "right":
          n.classList.add("px-[0.4rem]");
          break;
        default:
          n.classList.add("py-[0.4rem]");
          break;
      }
    const d = this._resolvePossibleFunction(this._config.customClass);
    d && n.classList.add(...d.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((m) => {
      u.on(m, "mouseover", vs);
    });
    const _ = () => {
      const m = this._hoverState;
      this._hoverState = null, u.trigger(this._element, this.constructor.Event.SHOWN), m === tn && this._leave(null, this);
    }, f = this.tip.classList.contains("transition-opacity");
    this._queueCallback(_, this.tip, f);
  }
  hide() {
    if (!this._popper)
      return;
    const t = this.getTipElement(), e = () => {
      this._isWithActiveTrigger() || (this._hoverState !== Qe && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), u.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
    };
    if (u.trigger(
      this._element,
      this.constructor.Event.HIDE
    ).defaultPrevented)
      return;
    t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o) => u.off(o, "mouseover", vs)), this._activeTrigger[hu] = false, this._activeTrigger[en] = false, this._activeTrigger[Ze] = false;
    const n = this.tip.classList.contains("opacity-0");
    this._queueCallback(e, this.tip, n), this._hoverState = "";
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  // Protected
  isWithContent() {
    return !!this.getTitle();
  }
  getTipElement() {
    if (this.tip)
      return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const e = t.children[0];
    return this.setContent(e), e.classList.remove(cu, Js), this.tip = e, this.tip;
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), nr);
  }
  _sanitizeAndSetContent(t, e, i) {
    const n = h.findOne(i, t);
    if (!e && n) {
      n.remove();
      return;
    }
    this.setElementContent(n, e);
  }
  setElementContent(t, e) {
    if (t !== null) {
      if (Ne(e)) {
        e = Gt(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
        return;
      }
      this._config.html ? (this._config.sanitize && (e = ir(
        e,
        this._config.allowList,
        this._config.sanitizeFn
      )), t.innerHTML = e) : t.textContent = e;
    }
  }
  getTitle() {
    const t = this._element.getAttribute("data-te-original-title") || this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  // Private
  _initializeOnDelegatedTarget(t, e) {
    return e || this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        },
        {
          name: "onChange",
          enabled: true,
          phase: "afterWrite",
          fn: (i) => this._handlePopperPlacementChange(i)
        }
      ],
      onFirstUpdate: (i) => {
        i.options.placement !== i.placement && this._handlePopperPlacementChange(i);
      }
    };
    return {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return ru[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((e) => {
      if (e === "click")
        u.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (i) => this.toggle(i)
        );
      else if (e !== uu) {
        const i = e === Ze ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === Ze ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        u.on(
          this._element,
          i,
          this._config.selector,
          (o) => this._enter(o)
        ), u.on(
          this._element,
          n,
          this._config.selector,
          (o) => this._leave(o)
        );
      }
    }), this._hideModalHandler = () => {
      this._element && this.hide();
    }, u.on(
      this._element.closest(or),
      rr,
      this._hideModalHandler
    ), this._config.selector ? this._config = {
      ...this._config,
      trigger: "manual",
      selector: ""
    } : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
      "data-te-original-title"
    );
    (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
  }
  _enter(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? en : Ze] = true), e.getTipElement().classList.contains(Js) || e._hoverState === Qe) {
      e._hoverState = Qe;
      return;
    }
    if (clearTimeout(e._timeout), e._hoverState = Qe, !e._config.delay || !e._config.delay.show) {
      e.show();
      return;
    }
    e._timeout = setTimeout(() => {
      e._hoverState === Qe && e.show();
    }, e._config.delay.show);
  }
  _leave(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? en : Ze] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
      if (clearTimeout(e._timeout), e._hoverState = tn, !e._config.delay || !e._config.delay.hide) {
        e.hide();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === tn && e.hide();
      }, e._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger)
      if (this._activeTrigger[t])
        return true;
    return false;
  }
  _getConfig(t) {
    const e = p.getDataAttributes(this._element);
    return Object.keys(e).forEach((i) => {
      nu.has(i) && delete e[i];
    }), t = {
      ...this.constructor.Default,
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t.container = t.container === false ? document.body : Gt(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), N(sr, t, this.constructor.DefaultType), t.sanitize && (t.template = ir(
      t.template,
      t.allowList,
      t.sanitizeFn
    )), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(), e = new RegExp(
      `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
      "g"
    ), i = t.getAttribute("class").match(e);
    i !== null && i.length > 0 && i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
  }
  _getBasicClassPrefix() {
    return su;
  }
  _handlePopperPlacementChange(t) {
    const { state: e } = t;
    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _vi.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var pu = "popover";
var fu = "te.popover";
var At = `.${fu}`;
var _u = "te-popover";
var mu = {
  ...vi.Default,
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
};
var gu = {
  ...vi.DefaultType,
  content: "(string|element|function)"
};
var bu = {
  HIDE: `hide${At}`,
  HIDDEN: `hidden${At}`,
  SHOW: `show${At}`,
  SHOWN: `shown${At}`,
  INSERTED: `inserted${At}`,
  CLICK: `click${At}`,
  FOCUSIN: `focusin${At}`,
  FOCUSOUT: `focusout${At}`,
  MOUSEENTER: `mouseenter${At}`,
  MOUSELEAVE: `mouseleave${At}`
};
var vu = ".popover-header";
var Eu = ".popover-body";
var ll = class _ll extends vi {
  // Getters
  static get Default() {
    return mu;
  }
  static get NAME() {
    return pu;
  }
  static get Event() {
    return bu;
  }
  static get DefaultType() {
    return gu;
  }
  // Overrides
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), vu), this._sanitizeAndSetContent(t, this._getContent(), Eu);
  }
  // Private
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return _u;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _ll.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var sn = "scrollspy";
var Tu = "te.scrollspy";
var Ss = `.${Tu}`;
var Cu = ".data-api";
var ar = {
  offset: 10,
  method: "auto",
  target: ""
};
var Au = {
  offset: "number",
  method: "string",
  target: "(string|element)"
};
var yu = {
  active: "!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
};
var wu = {
  active: "string"
};
var ku = `activate${Ss}`;
var Ou = `scroll${Ss}`;
var xu = `load${Ss}${Cu}`;
var nn = "data-te-nav-link-active";
var cl = "[data-te-dropdown-item-ref]";
var Su = '[data-te-spy="scroll"]';
var Du = "[data-te-nav-list-ref]";
var Hn = "[data-te-nav-link-ref]";
var Iu = "[data-te-nav-item-ref]";
var dl = "[data-te-list-group-item-ref]";
var on = `${Hn}, ${dl}, ${cl}`;
var $u = "[data-te-dropdown-ref]";
var Lu = "[data-te-dropdown-toggle-ref]";
var Mu = "offset";
var lr = "position";
var Bn = class _Bn extends vt {
  constructor(t, e, i) {
    super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, u.on(this._scrollElement, Ou, () => this._process()), this.refresh(), this._process(), this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return ar;
  }
  static get NAME() {
    return sn;
  }
  // Public
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? Mu : lr, e = this._config.method === "auto" ? t : this._config.method, i = e === lr ? this._getScrollTop() : 0;
    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), h.find(
      on,
      this._config.target
    ).map((o) => {
      const r = Xn(o), a = r ? h.findOne(r) : null;
      if (a) {
        const l = a.getBoundingClientRect();
        if (l.width || l.height)
          return [
            p[e](a).top + i,
            r
          ];
      }
      return null;
    }).filter((o) => o).sort((o, r) => o[0] - r[0]).forEach((o) => {
      this._offsets.push(o[0]), this._targets.push(o[1]);
    });
  }
  dispose() {
    u.off(this._scrollElement, Ss), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (u.on(window, xu, () => {
      h.find(Su).forEach(
        (t) => new _Bn(t)
      );
    }), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...ar,
      ...p.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, t.target = Gt(t.target) || document.documentElement, N(sn, t, Au), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...yu,
      ...e,
      ...t
    }, N(sn, t, wu), t;
  }
  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
    if (this._scrollHeight !== e && this.refresh(), t >= i) {
      const n = this._targets[this._targets.length - 1];
      this._activeTarget !== n && this._activate(n);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null, this._clear();
      return;
    }
    for (let n = this._offsets.length; n--; )
      this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
  }
  _activate(t) {
    this._activeTarget = t, this._clear();
    const e = on.split(",").map(
      (n) => `${n}[data-te-target="${t}"],${n}[href="${t}"]`
    ), i = h.findOne(e.join(","), this._config.target);
    i.classList.add(...this._classes.active.split(" ")), i.setAttribute(nn, ""), i.getAttribute(cl) ? h.findOne(
      Lu,
      i.closest($u)
    ).classList.add(...this._classes.active.split(" ")) : h.parents(i, Du).forEach(
      (n) => {
        h.prev(
          n,
          `${Hn}, ${dl}`
        ).forEach((o) => {
          o.classList.add(...this._classes.active.split(" ")), o.setAttribute(nn, "");
        }), h.prev(n, Iu).forEach(
          (o) => {
            h.children(o, Hn).forEach(
              (r) => r.classList.add(...this._classes.active.split(" "))
            );
          }
        );
      }
    ), u.trigger(this._scrollElement, ku, {
      relatedTarget: t
    });
  }
  _clear() {
    h.find(on, this._config.target).filter(
      (t) => t.classList.contains(...this._classes.active.split(" "))
    ).forEach((t) => {
      t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(nn);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Bn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var cr = "tab";
var Nu = "te.tab";
var Ds = `.${Nu}`;
var Ru = `hide${Ds}`;
var Pu = `hidden${Ds}`;
var Hu = `show${Ds}`;
var Bu = `shown${Ds}`;
var Vu = "data-te-dropdown-menu-ref";
var we = "data-te-tab-active";
var as = "data-te-nav-active";
var Wu = "[data-te-dropdown-ref]";
var Fu = "[data-te-nav-ref]";
var dr = `[${we}]`;
var Yu = `[${as}]`;
var hr = ":scope > li > .active";
var ju = "[data-te-dropdown-toggle-ref]";
var Ku = ":scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]";
var Uu = {
  show: "opacity-100",
  hide: "opacity-0"
};
var zu = {
  show: "string",
  hide: "string"
};
var hl = class _hl extends vt {
  constructor(t, e) {
    super(t), this._classes = this._getClasses(e);
  }
  // Getters
  static get NAME() {
    return cr;
  }
  // Public
  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(as) === "")
      return;
    let t;
    const e = Xt(this._element), i = this._element.closest(Fu), n = h.findOne(
      Yu,
      i
    );
    if (i) {
      const l = i.nodeName === "UL" || i.nodeName === "OL" ? hr : dr;
      t = h.find(l, i), t = t[t.length - 1];
    }
    const o = t ? u.trigger(t, Ru, {
      relatedTarget: this._element
    }) : null;
    if (u.trigger(this._element, Hu, {
      relatedTarget: t
    }).defaultPrevented || o !== null && o.defaultPrevented)
      return;
    this._activate(
      this._element,
      i,
      null,
      n,
      this._element
    );
    const a = () => {
      u.trigger(t, Pu, {
        relatedTarget: this._element
      }), u.trigger(this._element, Bu, {
        relatedTarget: t
      });
    };
    e ? this._activate(
      e,
      e.parentNode,
      a,
      n,
      this._element
    ) : a();
  }
  // Private
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...Uu,
      ...e,
      ...t
    }, N(cr, t, zu), t;
  }
  _activate(t, e, i, n, o) {
    const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? h.find(hr, e) : h.children(e, dr))[0], l = i && a && a.hasAttribute(we), c = () => this._transitionComplete(
      t,
      a,
      i,
      n,
      o
    );
    a && l ? (p.removeClass(a, this._classes.show), p.addClass(a, this._classes.hide), this._queueCallback(c, t, true)) : c();
  }
  _transitionComplete(t, e, i, n, o) {
    if (e && n) {
      e.removeAttribute(we), n.removeAttribute(as);
      const a = h.findOne(
        Ku,
        e.parentNode
      );
      a && a.removeAttribute(we), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", false);
    }
    t.setAttribute(we, ""), o.setAttribute(as, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", true), Fe(t), t.classList.contains(this._classes.hide) && (p.removeClass(t, this._classes.hide), p.addClass(t, this._classes.show));
    let r = t.parentNode;
    if (r && r.nodeName === "LI" && (r = r.parentNode), r && r.hasAttribute(Vu)) {
      const a = t.closest(Wu);
      a && h.find(ju, a).forEach(
        (l) => l.setAttribute(we, "")
      ), t.setAttribute("aria-expanded", true);
    }
    i && i();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _hl.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var rn = "toast";
var Xu = "te.toast";
var Qt = `.${Xu}`;
var Gu = `mouseover${Qt}`;
var qu = `mouseout${Qt}`;
var Qu = `focusin${Qt}`;
var Zu = `focusout${Qt}`;
var Ju = `hide${Qt}`;
var tp = `hidden${Qt}`;
var ep = `show${Qt}`;
var ip = `shown${Qt}`;
var ur = "data-te-toast-hide";
var an = "data-te-toast-show";
var Mi = "data-te-toast-showing";
var sp = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var pr = {
  animation: true,
  autohide: true,
  delay: 5e3
};
var np = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
};
var op = {
  fadeIn: "string",
  fadeOut: "string"
};
var Vn = class _Vn extends vt {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners(), this._didInit = false, this._init();
  }
  // Getters
  static get DefaultType() {
    return sp;
  }
  static get Default() {
    return pr;
  }
  static get NAME() {
    return rn;
  }
  // Public
  show() {
    if (u.trigger(this._element, ep).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && (p.removeClass(this._element, this._classes.fadeOut), p.addClass(this._element, this._classes.fadeIn));
    const e = () => {
      this._element.removeAttribute(Mi), u.trigger(this._element, ip), this._maybeScheduleHide();
    };
    this._element.removeAttribute(ur), Fe(this._element), this._element.setAttribute(an, ""), this._element.setAttribute(Mi, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this._element || this._element.dataset.teToastShow === void 0 || u.trigger(this._element, Ju).defaultPrevented)
      return;
    const e = () => {
      let i = 0;
      this._config.animation && (i = 300, p.removeClass(this._element, this._classes.fadeIn), p.addClass(this._element, this._classes.fadeOut)), setTimeout(() => {
        this._element.setAttribute(ur, ""), this._element.removeAttribute(Mi), this._element.removeAttribute(an), u.trigger(this._element, tp);
      }, i);
    };
    this._element.setAttribute(Mi, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this._element.dataset.teToastShow !== void 0 && this._element.removeAttribute(an), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (xs(_Vn), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...pr,
      ...p.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, N(rn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...np,
      ...e,
      ...t
    }, N(rn, t, op), t;
  }
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout":
        this._hasMouseInteraction = e;
        break;
      case "focusin":
      case "focusout":
        this._hasKeyboardInteraction = e;
        break;
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const i = t.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    u.on(
      this._element,
      Gu,
      (t) => this._onInteraction(t, true)
    ), u.on(
      this._element,
      qu,
      (t) => this._onInteraction(t, false)
    ), u.on(
      this._element,
      Qu,
      (t) => this._onInteraction(t, true)
    ), u.on(
      this._element,
      Zu,
      (t) => this._onInteraction(t, false)
    );
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Vn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
(() => {
  var s = { 454: (i, n, o) => {
    o.d(n, { Z: () => l });
    var r = o(645), a = o.n(r)()(function(c) {
      return c[1];
    });
    a.push([i.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = a;
  }, 645: (i) => {
    i.exports = function(n) {
      var o = [];
      return o.toString = function() {
        return this.map(function(r) {
          var a = n(r);
          return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
        }).join("");
      }, o.i = function(r, a, l) {
        typeof r == "string" && (r = [[null, r, ""]]);
        var c = {};
        if (l)
          for (var d = 0; d < this.length; d++) {
            var _ = this[d][0];
            _ != null && (c[_] = true);
          }
        for (var f = 0; f < r.length; f++) {
          var m = [].concat(r[f]);
          l && c[m[0]] || (a && (m[2] ? m[2] = "".concat(a, " and ").concat(m[2]) : m[2] = a), o.push(m));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var i = new window.CustomEvent("test", { cancelable: true });
          if (i.preventDefault(), i.defaultPrevented !== true)
            throw new Error("Could not prevent default");
        } catch {
          var n = function(r, a) {
            var l, c;
            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), c = l.preventDefault, l.preventDefault = function() {
              c.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return true;
                } });
              } catch {
                this.defaultPrevented = true;
              }
            }, l;
          };
          n.prototype = window.Event.prototype, window.CustomEvent = n;
        }
    })();
  }, 379: (i, n, o) => {
    var r, a = function() {
      var v = {};
      return function(E) {
        if (v[E] === void 0) {
          var A = document.querySelector(E);
          if (window.HTMLIFrameElement && A instanceof window.HTMLIFrameElement)
            try {
              A = A.contentDocument.head;
            } catch {
              A = null;
            }
          v[E] = A;
        }
        return v[E];
      };
    }(), l = [];
    function c(v) {
      for (var E = -1, A = 0; A < l.length; A++)
        if (l[A].identifier === v) {
          E = A;
          break;
        }
      return E;
    }
    function d(v, E) {
      for (var A = {}, y = [], S = 0; S < v.length; S++) {
        var O = v[S], k = E.base ? O[0] + E.base : O[0], D = A[k] || 0, x = "".concat(k, " ").concat(D);
        A[k] = D + 1;
        var $ = c(x), P = { css: O[1], media: O[2], sourceMap: O[3] };
        $ !== -1 ? (l[$].references++, l[$].updater(P)) : l.push({ identifier: x, updater: w(P, E), references: 1 }), y.push(x);
      }
      return y;
    }
    function _(v) {
      var E = document.createElement("style"), A = v.attributes || {};
      if (A.nonce === void 0) {
        var y = o.nc;
        y && (A.nonce = y);
      }
      if (Object.keys(A).forEach(function(O) {
        E.setAttribute(O, A[O]);
      }), typeof v.insert == "function")
        v.insert(E);
      else {
        var S = a(v.insert || "head");
        if (!S)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        S.appendChild(E);
      }
      return E;
    }
    var f, m = (f = [], function(v, E) {
      return f[v] = E, f.filter(Boolean).join(`
`);
    });
    function g(v, E, A, y) {
      var S = A ? "" : y.media ? "@media ".concat(y.media, " {").concat(y.css, "}") : y.css;
      if (v.styleSheet)
        v.styleSheet.cssText = m(E, S);
      else {
        var O = document.createTextNode(S), k = v.childNodes;
        k[E] && v.removeChild(k[E]), k.length ? v.insertBefore(O, k[E]) : v.appendChild(O);
      }
    }
    function b(v, E, A) {
      var y = A.css, S = A.media, O = A.sourceMap;
      if (S ? v.setAttribute("media", S) : v.removeAttribute("media"), O && typeof btoa < "u" && (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), v.styleSheet)
        v.styleSheet.cssText = y;
      else {
        for (; v.firstChild; )
          v.removeChild(v.firstChild);
        v.appendChild(document.createTextNode(y));
      }
    }
    var T = null, C = 0;
    function w(v, E) {
      var A, y, S;
      if (E.singleton) {
        var O = C++;
        A = T || (T = _(E)), y = g.bind(null, A, O, false), S = g.bind(null, A, O, true);
      } else
        A = _(E), y = b.bind(null, A, E), S = function() {
          (function(k) {
            if (k.parentNode === null)
              return false;
            k.parentNode.removeChild(k);
          })(A);
        };
      return y(v), function(k) {
        if (k) {
          if (k.css === v.css && k.media === v.media && k.sourceMap === v.sourceMap)
            return;
          y(v = k);
        } else
          S();
      };
    }
    i.exports = function(v, E) {
      (E = E || {}).singleton || typeof E.singleton == "boolean" || (E.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
      var A = d(v = v || [], E);
      return function(y) {
        if (y = y || [], Object.prototype.toString.call(y) === "[object Array]") {
          for (var S = 0; S < A.length; S++) {
            var O = c(A[S]);
            l[O].references--;
          }
          for (var k = d(y, E), D = 0; D < A.length; D++) {
            var x = c(A[D]);
            l[x].references === 0 && (l[x].updater(), l.splice(x, 1));
          }
          A = k;
        }
      };
    };
  } }, t = {};
  function e(i) {
    var n = t[i];
    if (n !== void 0)
      return n.exports;
    var o = t[i] = { id: i, exports: {} };
    return s[i](o, o.exports, e), o.exports;
  }
  e.n = (i) => {
    var n = i && i.__esModule ? () => i.default : () => i;
    return e.d(n, { a: n }), n;
  }, e.d = (i, n) => {
    for (var o in n)
      e.o(n, o) && !e.o(i, o) && Object.defineProperty(i, o, { enumerable: true, get: n[o] });
  }, e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n), (() => {
    var i = e(379), n = e.n(i), o = e(454);
    function r(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var c = new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: true, detail: null });
        l.dispatchEvent(c) || (l.value = "");
      }
    }
    function a(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: false, detail: null })));
    }
    n()(o.Z, { insert: "head", singleton: false }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
    }, true), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
    }, true);
  })();
})();
var ln = "input";
var Ni = "te.input";
var ul = "data-te-input-wrapper-init";
var pl = "data-te-input-notch-ref";
var fl = "data-te-input-notch-leading-ref";
var _l = "data-te-input-notch-middle-ref";
var rp = "data-te-input-notch-trailing-ref";
var ap = "data-te-input-helper-ref";
var lp = "data-te-input-placeholder-active";
var Ht = "data-te-input-state-active";
var fr = "data-te-input-focused";
var _r = "data-te-input-form-counter";
var re = `[${ul}] input`;
var ae = `[${ul}] textarea`;
var Ee = `[${pl}]`;
var mr = `[${fl}]`;
var gr = `[${_l}]`;
var cp = `[${ap}]`;
var dp = {
  inputFormWhite: false
};
var hp = {
  inputFormWhite: "(boolean)"
};
var up = {
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0",
  notchLeadingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchLeadingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent",
  notchMiddleNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchMiddleWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0",
  notchTrailingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchTrailingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  counter: "text-right leading-[1.6]"
};
var pp = {
  notch: "string",
  notchLeading: "string",
  notchLeadingNormal: "string",
  notchLeadingWhite: "string",
  notchMiddle: "string",
  notchMiddleNormal: "string",
  notchMiddleWhite: "string",
  notchTrailing: "string",
  notchTrailingNormal: "string",
  notchTrailingWhite: "string",
  counter: "string"
};
var V = class _V {
  constructor(t, e, i) {
    this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(i), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = false, this._helper = null, this._counter = false, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (I.setData(t, Ni, this), this.init());
  }
  // Getters
  static get NAME() {
    return ln;
  }
  get input() {
    return h.findOne("input", this._element) || h.findOne("textarea", this._element);
  }
  // Public
  init() {
    this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = true);
  }
  update() {
    this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
  }
  forceActive() {
    this.input.setAttribute(Ht, ""), h.findOne(Ee, this.input.parentNode).setAttribute(
      Ht,
      ""
    );
  }
  forceInactive() {
    this.input.removeAttribute(Ht), h.findOne(
      Ee,
      this.input.parentNode
    ).removeAttribute(Ht);
  }
  dispose() {
    this._removeBorder(), I.removeData(this._element, Ni), this._element = null;
  }
  // Private
  _getConfig(t, e) {
    return t = {
      ...dp,
      ...p.getDataAttributes(e),
      ...typeof t == "object" ? t : {}
    }, N(ln, t, hp), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...up,
      ...e,
      ...t
    }, N(ln, t, pp), t;
  }
  _getLabelData() {
    this._label = h.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
  }
  _getHelper() {
    this._helper = h.findOne(cp, this._element);
  }
  _getCounter() {
    this._counter = p.getDataAttribute(
      this.input,
      "inputShowcounter"
    ), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
  }
  _getEvents() {
    u.on(
      document,
      "focus",
      re,
      _V.activate(new _V())
    ), u.on(
      document,
      "input",
      re,
      _V.activate(new _V())
    ), u.on(
      document,
      "blur",
      re,
      _V.deactivate(new _V())
    ), u.on(
      document,
      "focus",
      ae,
      _V.activate(new _V())
    ), u.on(
      document,
      "input",
      ae,
      _V.activate(new _V())
    ), u.on(
      document,
      "blur",
      ae,
      _V.deactivate(new _V())
    ), u.on(window, "shown.te.modal", (t) => {
      h.find(re, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.update();
        }
      ), h.find(ae, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.update();
        }
      );
    }), u.on(window, "shown.te.dropdown", (t) => {
      const e = t.target.parentNode.querySelector(
        "[data-te-dropdown-menu-ref]"
      );
      e && (h.find(re, e).forEach(
        (i) => {
          const n = _V.getInstance(i.parentNode);
          n && n.update();
        }
      ), h.find(ae, e).forEach(
        (i) => {
          const n = _V.getInstance(i.parentNode);
          n && n.update();
        }
      ));
    }), u.on(window, "shown.te.tab", (t) => {
      let e;
      t.target.href ? e = t.target.href.split("#")[1] : e = p.getDataAttribute(t.target, "target").split(
        "#"
      )[1];
      const i = h.findOne(`#${e}`);
      h.find(re, i).forEach((n) => {
        const o = _V.getInstance(n.parentNode);
        o && o.update();
      }), h.find(ae, i).forEach(
        (n) => {
          const o = _V.getInstance(n.parentNode);
          o && o.update();
        }
      );
    }), u.on(window, "reset", (t) => {
      h.find(re, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      ), h.find(ae, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      );
    }), u.on(window, "onautocomplete", (t) => {
      const e = _V.getInstance(t.target.parentNode);
      !e || !t.cancelable || e.forceActive();
    });
  }
  _showCounter() {
    if (h.find(
      `[${_r}]`,
      this._element
    ).length > 0)
      return;
    this._counterElement = document.createElement("div"), p.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(_r, "");
    const e = this.input.value.length;
    this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
  }
  _bindCounter() {
    u.on(this.input, "input", () => {
      const t = this.input.value.length;
      this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
    });
  }
  _toggleDefaultDatePlaceholder(t = this.input) {
    if (!(t.getAttribute("type") === "date"))
      return;
    !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
  }
  _showPlaceholder() {
    this.input.setAttribute(lp, "");
  }
  _getNotchData() {
    this._notchMiddle = h.findOne(
      gr,
      this._element
    ), this._notchLeading = h.findOne(
      mr,
      this._element
    );
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _getLabelPositionInInputGroup() {
    if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-te-input-group-ref"))
      return;
    const t = this.input, e = h.prev(
      t,
      "[data-te-input-group-text-ref]"
    )[0];
    e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
  }
  _applyDivs() {
    const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, i = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = h.find(Ee, this._element), o = M("div");
    p.addClass(o, this._classes.notch), o.setAttribute(pl, ""), this._notchLeading = M("div"), p.addClass(
      this._notchLeading,
      `${this._classes.notchLeading} ${t}`
    ), this._notchLeading.setAttribute(fl, ""), this._notchMiddle = M("div"), p.addClass(
      this._notchMiddle,
      `${this._classes.notchMiddle} ${e}`
    ), this._notchMiddle.setAttribute(_l, ""), this._notchTrailing = M("div"), p.addClass(
      this._notchTrailing,
      `${this._classes.notchTrailing} ${i}`
    ), this._notchTrailing.setAttribute(rp, ""), !(n.length >= 1) && (o.append(this._notchLeading), o.append(this._notchMiddle), o.append(this._notchTrailing), this._element.append(o));
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _removeBorder() {
    const t = h.findOne(Ee, this._element);
    t && t.remove();
  }
  _activate(t) {
    Aa(() => {
      this._getElements(t);
      const e = t ? t.target : this.input, i = h.findOne(
        Ee,
        this._element
      );
      t && t.type === "focus" && i.setAttribute(fr, ""), e.value !== "" && (e.setAttribute(Ht, ""), i.setAttribute(Ht, "")), this._toggleDefaultDatePlaceholder(e);
    });
  }
  _getElements(t) {
    if (t && (this._element = t.target.parentNode, this._label = h.findOne("label", this._element)), t && this._label) {
      const e = this._labelWidth;
      this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = h.findOne(
        gr,
        t.target.parentNode
      ), this._notchLeading = h.findOne(
        mr,
        t.target.parentNode
      ), this._applyNotch());
    }
  }
  _deactivate(t) {
    const e = t ? t.target : this.input, i = h.findOne(
      Ee,
      e.parentNode
    );
    i.removeAttribute(fr), e.value === "" && (e.removeAttribute(Ht), i.removeAttribute(Ht)), this._toggleDefaultDatePlaceholder(e);
  }
  static activate(t) {
    return function(e) {
      t._activate(e);
    };
  }
  static deactivate(t) {
    return function(e) {
      t._deactivate(e);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, Ni);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _V(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, Ni);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var br = "animation";
var cn = "te.animation";
var fp = {
  animation: "string",
  animationStart: "string",
  animationShowOnLoad: "boolean",
  onStart: "(null|function)",
  onEnd: "(null|function)",
  onHide: "(null|function)",
  onShow: "(null|function)",
  animationOnScroll: "(string)",
  animationWindowHeight: "number",
  animationOffset: "(number|string)",
  animationDelay: "(number|string)",
  animationReverse: "boolean",
  animationInterval: "(number|string)",
  animationRepeat: "(number|boolean)",
  animationReset: "boolean"
};
var _p = {
  animation: "fade",
  animationStart: "onClick",
  animationShowOnLoad: true,
  onStart: null,
  onEnd: null,
  onHide: null,
  onShow: null,
  animationOnScroll: "once",
  animationWindowHeight: 0,
  animationOffset: 0,
  animationDelay: 0,
  animationReverse: false,
  animationInterval: 0,
  animationRepeat: false,
  animationReset: false
};
var ml = class _ml {
  constructor(t, e) {
    this._element = t, this._animateElement = this._getAnimateElement(), this._isFirstScroll = true, this._repeatAnimateOnScroll = true, this._options = this._getConfig(e), this._element && (I.setData(t, cn, this), this._init());
  }
  // Getters
  static get NAME() {
    return br;
  }
  // Public
  init() {
    this._init();
  }
  startAnimation() {
    this._startAnimation();
  }
  stopAnimation() {
    this._clearAnimationClass();
  }
  changeAnimationType(t) {
    this._options.animation = t;
  }
  dispose() {
    u.off(this._element, "mousedown"), u.off(this._animateElement, "animationend"), u.off(window, "scroll"), u.off(this._element, "mouseover"), I.removeData(this._element, cn), this._element = null, this._animateElement = null, this._isFirstScroll = null, this._repeatAnimateOnScroll = null, this._options = null;
  }
  // Private
  _init() {
    switch (this._options.animationStart) {
      case "onHover":
        this._bindHoverEvents();
        break;
      case "onLoad":
        this._startAnimation();
        break;
      case "onScroll":
        this._bindScrollEvents();
        break;
      case "onClick":
        this._bindClickEvents();
        break;
    }
    this._bindTriggerOnEndCallback(), this._options.animationReset && this._bindResetAnimationAfterFinish();
  }
  _getAnimateElement() {
    const t = p.getDataAttribute(
      this._element,
      "animation-target"
    );
    return t ? h.find(t)[0] : this._element;
  }
  _getConfig(t) {
    const e = p.getDataAttributes(this._animateElement);
    return t = {
      ..._p,
      ...e,
      ...t
    }, N(br, t, fp), t;
  }
  _animateOnScroll() {
    const t = p.offset(this._animateElement).top, e = this._animateElement.offsetHeight, i = window.innerHeight, n = t + this._options.animationOffset <= i && t + this._options.animationOffset + e >= 0, o = this._animateElement.style.visibility === "visible";
    switch (true) {
      case (n && this._isFirstScroll):
        this._isFirstScroll = false, this._startAnimation();
        break;
      case (!n && this._isFirstScroll):
        this._isFirstScroll = false, this._hideAnimateElement();
        break;
      case (n && !o && this._repeatAnimateOnScroll):
        this._options.animationOnScroll !== "repeat" && (this._repeatAnimateOnScroll = false), this._callback(this._options.onShow), this._showAnimateElement(), this._startAnimation();
        break;
      case (!n && o && this._repeatAnimateOnScroll):
        this._hideAnimateElement(), this._clearAnimationClass(), this._callback(this._options.onHide);
        break;
    }
  }
  _addAnimatedClass() {
    p.addClass(
      this._animateElement,
      `animate-${this._options.animation}`
    );
  }
  _clearAnimationClass() {
    this._animateElement.classList.remove(`animate-${this._options.animation}`);
  }
  _startAnimation() {
    this._callback(this._options.onStart), this._addAnimatedClass(), this._options.animationRepeat && !this._options.animationInterval && this._setAnimationRepeat(), this._options.animationReverse && this._setAnimationReverse(), this._options.animationDelay && this._setAnimationDelay(), this._options.animationDuration && this._setAnimationDuration(), this._options.animationInterval && this._setAnimationInterval();
  }
  _setAnimationReverse() {
    p.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === true ? "infinite" : "2",
      animationDirection: "alternate"
    });
  }
  _setAnimationDuration() {
    p.style(this._animateElement, {
      animationDuration: `${this._options.animationDuration}ms`
    });
  }
  _setAnimationDelay() {
    p.style(this._animateElement, {
      animationDelay: `${this._options.animationDelay}ms`
    });
  }
  _setAnimationRepeat() {
    p.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === true ? "infinite" : this._options.animationRepeat
    });
  }
  _setAnimationInterval() {
    u.on(this._animateElement, "click", () => {
      this._clearAnimationClass(), setTimeout(() => {
        this._addAnimatedClass();
      }, this._options.animationInterval);
    });
  }
  _hideAnimateElement() {
    p.style(this._animateElement, { visibility: "hidden" });
  }
  _showAnimateElement() {
    p.style(this._animateElement, { visibility: "visible" });
  }
  _bindResetAnimationAfterFinish() {
    u.on(this._animateElement, "animationend", () => {
      this._clearAnimationClass();
    });
  }
  _bindTriggerOnEndCallback() {
    u.on(this._animateElement, "animationend", () => {
      this._callback(this._options.onEnd);
    });
  }
  _bindScrollEvents() {
    this._options.animationShowOnLoad || this._animateOnScroll(), u.on(window, "scroll", () => {
      this._animateOnScroll();
    });
  }
  _bindClickEvents() {
    u.on(this._element, "mousedown", () => {
      this._startAnimation();
    });
  }
  _bindHoverEvents() {
    u.one(this._element, "mouseover", () => {
      this._startAnimation();
    }), u.one(this._animateElement, "animationend", () => {
      setTimeout(() => {
        this._bindHoverEvents();
      }, 100);
    });
  }
  _callback(t) {
    t instanceof Function && t();
  }
  // Static
  static autoInit(t) {
    t._init();
  }
  static jQueryInterface(t) {
    new _ml(this[0], t).init();
  }
  static getInstance(t) {
    return I.getData(t, cn);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var dn = "ripple";
var Ri = "te.ripple";
var mp = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
var gp = ["[data-te-ripple-init]"];
var Pi = [0, 0, 0];
var bp = [
  { name: "primary", gradientColor: "#3B71CA" },
  { name: "secondary", gradientColor: "#9FA6B2" },
  { name: "success", gradientColor: "#14A44D" },
  { name: "danger", gradientColor: "#DC4C64" },
  { name: "warning", gradientColor: "#E4A11B" },
  { name: "info", gradientColor: "#54B4D3" },
  { name: "light", gradientColor: "#fbfbfb" },
  { name: "dark", gradientColor: "#262626" }
];
var vr = 0.5;
var vp = {
  rippleCentered: false,
  rippleColor: "",
  rippleColorDark: "",
  rippleDuration: "500ms",
  rippleRadius: 0,
  rippleUnbound: false
};
var Ep = {
  rippleCentered: "boolean",
  rippleColor: "string",
  rippleColorDark: "string",
  rippleDuration: "string",
  rippleRadius: "number",
  rippleUnbound: "boolean"
};
var Tp = {
  ripple: "relative overflow-hidden inline-block align-bottom",
  rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
  unbound: "overflow-visible"
};
var Cp = {
  ripple: "string",
  rippleWave: "string",
  unbound: "string"
};
var Cs = class _Cs {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && (I.setData(t, Ri, this), p.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = false, this._initialClasses = null, this.init();
  }
  // Getters
  static get NAME() {
    return dn;
  }
  // Public
  init() {
    this._addClickEvent(this._element);
  }
  dispose() {
    I.removeData(this._element, Ri), u.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
  }
  // Private
  _autoInit(t) {
    gp.forEach((e) => {
      h.closest(t.target, e) && (this._element = h.closest(t.target, e));
    }), this._element.style.minWidth || (p.style(this._element, {
      "min-width": getComputedStyle(this._element).width
    }), this._isMinWidthSet = true), this._initialClasses = [...this._element.classList], p.addClass(this._element, this._classes.ripple), this._options = this._getConfig(), this._createRipple(t);
  }
  _addClickEvent(t) {
    u.on(t, "mousedown", this._clickHandler);
  }
  _createRipple(t) {
    this._element.className.indexOf(this._classes.ripple) < 0 && p.addClass(this._element, this._classes.ripple);
    const { layerX: e, layerY: i } = t, n = e, o = i, r = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), c = {
      offsetX: this._options.rippleCentered ? r / 2 : n,
      offsetY: this._options.rippleCentered ? a / 2 : o,
      height: r,
      width: a
    }, d = this._getDiameter(c), _ = this._options.rippleRadius || d / 2, f = {
      delay: l * vr,
      duration: l - l * vr
    }, m = {
      left: this._options.rippleCentered ? `${a / 2 - _}px` : `${n - _}px`,
      top: this._options.rippleCentered ? `${r / 2 - _}px` : `${o - _}px`,
      height: `${this._options.rippleRadius * 2 || d}px`,
      width: `${this._options.rippleRadius * 2 || d}px`,
      transitionDelay: `0s, ${f.delay}ms`,
      transitionDuration: `${l}ms, ${f.duration}ms`
    }, g = M("div");
    this._createHTMLRipple({
      wrapper: this._element,
      ripple: g,
      styles: m
    }), this._removeHTMLRipple({ ripple: g, duration: l });
  }
  _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
    Object.keys(i).forEach(
      (n) => e.style[n] = i[n]
    ), p.addClass(e, this._classes.rippleWave), e.setAttribute("data-te-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
  }
  _removeHTMLRipple({ ripple: t, duration: e }) {
    this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(() => {
      t.classList.add("!opacity-0");
    }, 10), this._rippleTimer = setTimeout(() => {
      if (t && (t.remove(), this._element)) {
        h.find("[data-te-ripple-ref]", this._element).forEach(
          (n) => {
            n.remove();
          }
        ), this._isMinWidthSet && (p.style(this._element, { "min-width": "" }), this._isMinWidthSet = false);
        const i = this._initialClasses ? this._addedNewRippleClasses(
          this._classes.ripple,
          this._initialClasses
        ) : this._classes.ripple.split(" ");
        p.removeClass(this._element, i);
      }
    }, e);
  }
  _addedNewRippleClasses(t, e) {
    return t.split(" ").filter(
      (i) => e.findIndex((n) => i === n) === -1
    );
  }
  _durationToMsNumber(t) {
    return Number(t.replace("ms", "").replace("s", "000"));
  }
  _getConfig(t = {}) {
    const e = p.getDataAttributes(this._element);
    return t = {
      ...vp,
      ...e,
      ...t
    }, N(dn, t, Ep), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...Tp,
      ...e,
      ...t
    }, N(dn, t, Cp), t;
  }
  _getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
    const o = e <= i / 2, r = t <= n / 2, a = (f, m) => Math.sqrt(f ** 2 + m ** 2), l = e === i / 2 && t === n / 2, c = {
      first: o === true && r === false,
      second: o === true && r === true,
      third: o === false && r === true,
      fourth: o === false && r === false
    }, d = {
      topLeft: a(t, e),
      topRight: a(n - t, e),
      bottomLeft: a(t, i - e),
      bottomRight: a(n - t, i - e)
    };
    let _ = 0;
    return l || c.fourth ? _ = d.topLeft : c.third ? _ = d.topRight : c.second ? _ = d.bottomRight : c.first && (_ = d.bottomLeft), _ * 2;
  }
  _appendRipple(t, e) {
    e.appendChild(t), setTimeout(() => {
      p.addClass(t, "opacity-0 scale-100");
    }, 50);
  }
  _toggleUnbound(t) {
    this._options.rippleUnbound === true ? p.addClass(t, this._classes.unbound) : p.removeClass(t, this._classes.unbound);
  }
  _addColor(t) {
    let e = this._options.rippleColor || "rgb(0,0,0)";
    (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
    const i = bp.find(
      (r) => r.name === e.toLowerCase()
    ), n = i ? this._colorToRGB(i.gradientColor).join(",") : this._colorToRGB(e).join(","), o = mp.split("{{color}}").join(`${n}`);
    t.style.backgroundImage = `radial-gradient(circle, ${o})`;
  }
  _colorToRGB(t) {
    function e(o) {
      return o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`), [
        parseInt(o.substr(1, 2), 16),
        parseInt(o.substr(3, 2), 16),
        parseInt(o.substr(5, 2), 16)
      ];
    }
    function i(o) {
      const r = document.body.appendChild(
        document.createElement("fictum")
      ), a = "rgb(1, 2, 3)";
      return r.style.color = a, r.style.color !== a || (r.style.color = o, r.style.color === a || r.style.color === "") ? Pi : (o = getComputedStyle(r).color, document.body.removeChild(r), o);
    }
    function n(o) {
      return o = o.match(/[.\d]+/g).map((r) => +Number(r)), o.length = 3, o;
    }
    return t.toLowerCase() === "transparent" ? Pi : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = i(t)), t.indexOf("rgb") === 0 ? n(t) : Pi);
  }
  // Static
  static autoInitial(t) {
    return function(e) {
      t._autoInit(e);
    };
  }
  static jQueryInterface(t) {
    return this.each(function() {
      return I.getData(this, Ri) ? null : new _Cs(this, t);
    });
  }
  static getInstance(t) {
    return I.getData(t, Ri);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
function Q(s) {
  return s.getDate();
}
function ls(s) {
  return s.getDay();
}
function Y(s) {
  return s.getMonth();
}
function H(s) {
  return s.getFullYear();
}
function Ap(s, t, e) {
  const i = e.startDay, n = i > 0 ? 7 - i : 0, r = new Date(s, t).getDay() + n;
  return r >= 7 ? r - 7 : r;
}
function Wn(s) {
  return yp(s).getDate();
}
function yp(s) {
  return Dt(s.getFullYear(), s.getMonth() + 1, 0);
}
function De() {
  return /* @__PURE__ */ new Date();
}
function it(s, t) {
  return nt(s, t * 12);
}
function nt(s, t) {
  const e = Dt(
    s.getFullYear(),
    s.getMonth() + t,
    s.getDate()
  ), i = Q(s), n = Q(e);
  return i !== n && e.setDate(0), e;
}
function Te(s, t) {
  return Dt(s.getFullYear(), s.getMonth(), s.getDate() + t);
}
function Dt(s, t, e) {
  const i = new Date(s, t, e);
  return s >= 0 && s < 100 && i.setFullYear(i.getFullYear() - 1900), i;
}
function Er(s) {
  const t = s.split("-"), e = t[0], i = t[1], n = t[2];
  return Dt(e, i, n);
}
function wp(s) {
  return !Number.isNaN(s.getTime());
}
function xe(s, t) {
  return H(s) - H(t) || Y(s) - Y(t) || Q(s) - Q(t);
}
function de(s, t) {
  return s.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), s.getTime() === t.getTime();
}
function cs(s, t) {
  const i = H(s) - Op();
  return kp(i, t);
}
function kp(s, t) {
  return (s % t + t) % t;
}
function Op(s, t, e) {
  let i = 0;
  return e ? i = H(e) - s + 1 : t && (i = H(t)), i;
}
function As(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date();
  r.setHours(0, 0, 0, 0);
  const a = t && xe(s, t) <= -1, l = e && xe(s, e) >= 1, c = n && xe(s, r) <= -1, d = o && xe(s, r) >= 1, _ = i && i(s) === false;
  return a || l || _ || c || d;
}
function gl(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date(), a = i && H(i), l = i && Y(i), c = e && H(e), d = e && Y(e), _ = H(r), f = Y(r), m = l && a && (t > a || t === a && s > l), g = d && c && (t < c || t === c && s < d), b = n && (t < _ || t === _ && s < f), T = o && (t > _ || t === _ && s > f);
  return m || g || b || T;
}
function Fn(s, t, e, i, n) {
  const o = t && H(t), r = e && H(e), a = H(/* @__PURE__ */ new Date()), l = r && s > r, c = o && s < o, d = i && s < a, _ = n && s > a;
  return l || c || d || _;
}
function xp(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && o && xe(o, l) < 0 || s) && (o = l), o && di(
    t,
    o,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function Sp(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && n && xe(n, l) < 0 || s) && (n = l), n && di(
    t,
    n,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function di(s, t, e, i, n, o, r, a) {
  return e === "days" ? H(s) === H(t) && Y(s) === Y(t) : e === "months" ? H(s) === H(t) : e === "years" ? H(t) >= a && H(t) <= r : false;
}
var Dp = "data-te-datepicker-modal-container-ref";
var Ip = "data-te-datepicker-dropdown-container-ref";
var $p = "data-te-dropdown-backdrop-ref";
var Lp = "data-te-datepicker-date-text-ref";
var Tr = "data-te-datepicker-view-ref";
var Mp = "data-te-datepicker-previous-button-ref";
var Np = "data-te-datepicker-next-button-ref";
var Rp = "data-te-datepicker-ok-button-ref";
var Pp = "data-te-datepicker-cancel-button-ref";
var Hp = "data-te-datepicker-clear-button-ref";
var Bp = "data-te-datepicker-view-change-button-ref";
function Vp(s, t, e, i, n, o, r, a, l, c) {
  const d = Y(s), _ = H(s), f = Q(s), m = ls(s), g = M("div"), b = `
        ${Cr(
    s,
    d,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    c
  )}
    `, T = `
      ${Fp(f, m, d, n, c)}
      ${Cr(
    s,
    d,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    c
  )}
    `;
  return n.inline ? (p.addClass(g, c.datepickerDropdownContainer), g.setAttribute(Ip, l), g.innerHTML = b) : (p.addClass(g, c.modalContainer), g.setAttribute(Dp, l), g.innerHTML = T), g;
}
function Wp(s) {
  const t = M("div");
  return p.addClass(t, s), t.setAttribute($p, ""), t;
}
function Fp(s, t, e, i, n) {
  return `
      <div class="${n.datepickerHeader}">
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${i.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${Lp} >${i.weekdaysShort[t]}, ${i.monthsShort[e]} ${s}</span>
        </div>
      </div>
    `;
}
function Cr(s, t, e, i, n, o, r, a, l, c, d) {
  let _;
  return r.inline ? _ = `
    <div class="${d.datepickerMain}">
      ${yr(t, e, r, d)}
      <div class="${d.datepickerView}" ${Tr} tabindex="0">
        ${Ar(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    c,
    d
  )}
      </div>
    </div>
  ` : _ = `
    <div class="${d.datepickerMain}">
      ${yr(t, e, r, d)}
      <div class="${d.datepickerView}" ${Tr} tabindex="0">
        ${Ar(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    c,
    d
  )}
      </div>
      ${Yp(r, d)}
    </div>
  `, _;
}
function Ar(s, t, e, i, n, o, r, a, l, c) {
  let d;
  return o.view === "days" ? d = ds(s, e, o, c) : o.view === "months" ? d = hs(
    t,
    i,
    n,
    o,
    r,
    c
  ) : d = us(
    s,
    i,
    o,
    a,
    l,
    c
  ), d;
}
function yr(s, t, e, i) {
  return `
    <div class="${i.datepickerDateControls}">
      <button class="${i.datepickerViewChangeButton}" aria-label="${e.switchToMultiYearViewLabel}" ${Bp}>
        ${e.monthsFull[s]} ${t} ${kt(
    e,
    i
  )}
      </button>
      <div class="${i.datepickerArrowControls}">
        <button class="${i.datepickerPreviousButton}" aria-label="${e.prevMonthLabel}" ${Mp}>${e.changeMonthIconTemplate}</button>
        <button class="${i.datepickerNextButton}" aria-label="${e.nextMonthLabel}" ${Np}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `;
}
function kt(s, t) {
  return `
  <span class="${t.datepickerViewChangeIcon}">
  ${s.viewChangeIconTemplate}
  </span>
  `;
}
function Yp(s, t) {
  const e = `<button class="${t.datepickerFooterBtn}" aria-label="${s.okBtnLabel}" ${Rp}>${s.okBtnText}</button>`, i = `<button class="${t.datepickerFooterBtn}" aria-label="${s.cancelBtnLabel}" ${Pp}>${s.cancelBtnText}</button>`, n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${s.clearBtnLabel}" ${Hp}>${s.clearBtnText}</button>`;
  return `
        <div class="${t.datepickerFooter}">
          
        ${s.removeClearBtn ? "" : n}
        ${s.removeCancelBtn ? "" : i}
        ${s.removeOkBtn ? "" : e}
        </div>
      `;
}
function ds(s, t, e, i) {
  const n = jp(s, t, e), r = `
      <tr>
        ${e.weekdaysNarrow.map((l, c) => `<th class="${i.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[c]}">${l}</th>`).join("")}
      </tr>
    `, a = n.map((l) => `
        <tr>
          ${l.map((c) => `
              <td
              class="${i.datepickerCell} ${i.datepickerCellSmall}"
              data-te-date="${H(c.date)}-${Y(
    c.date
  )}-${Q(c.date)}"
              aria-label="${c.date}"
              aria-selected="${c.isSelected}"
              ${c.isSelected ? "data-te-datepicker-cell-selected" : ""}
              ${!c.currentMonth || c.disabled ? "data-te-datepicker-cell-disabled" : ""}
              ${c.isToday ? "data-te-datepicker-cell-current" : ""}
              >
                <div
                  class="${i.datepickerCellContent} ${i.datepickerCellContentSmall}"
                  style="${c.currentMonth ? "display: block" : "display: none"}"
                  >
                  ${c.dayNumber}
                  </div>
              </td>
            `).join("")}
        </tr>
      `).join("");
  return `
      <table class="${i.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `;
}
function jp(s, t, e) {
  const i = [], n = Y(s), o = Y(nt(s, -1)), r = Y(nt(s, 1)), a = H(s), l = Ap(a, n, e), c = Wn(s), d = Wn(nt(s, -1)), _ = 7;
  let f = 1, m = false;
  for (let g = 1; g < _; g++) {
    const b = [];
    if (g === 1) {
      const T = d - l + 1;
      for (let w = T; w <= d; w++) {
        const v = Dt(a, o, w);
        b.push({
          date: v,
          currentMonth: m,
          isSelected: t && de(v, t),
          isToday: de(v, De()),
          dayNumber: Q(v)
        });
      }
      m = true;
      const C = _ - b.length;
      for (let w = 0; w < C; w++) {
        const v = Dt(a, n, f);
        b.push({
          date: v,
          currentMonth: m,
          isSelected: t && de(v, t),
          isToday: de(v, De()),
          dayNumber: Q(v),
          disabled: As(
            v,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    } else
      for (let T = 1; T < 8; T++) {
        f > c && (f = 1, m = false);
        const C = Dt(
          a,
          m ? n : r,
          f
        );
        b.push({
          date: C,
          currentMonth: m,
          isSelected: t && de(C, t),
          isToday: de(C, De()),
          dayNumber: Q(C),
          disabled: As(
            C,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    i.push(b);
  }
  return i;
}
function hs(s, t, e, i, n, o) {
  const r = Kp(i, n), a = Y(De()), l = H(De()), c = `
      ${r.map((d) => `
          <tr>
            ${d.map((_) => {
    const f = i.monthsShort.indexOf(_);
    return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${gl(
      f,
      s,
      i.min,
      i.max,
      i.disablePast,
      i.disableFuture
    ) ? "data-te-datepicker-cell-disabled" : ""}
                
                data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}"
                ${f === e && s === t ? "data-te-datepicker-cell-selected" : ""}
                ${f === a && s === l ? "data-te-datepicker-cell-current" : ""}" data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}">
                  <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${_}</div>
                </td>
              `;
  }).join("")}
          </tr>
        `).join("")}
    `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${c}
        </tbody>
      </table>
    `;
}
function Kp(s, t) {
  const e = [];
  let i = [];
  for (let n = 0; n < s.monthsShort.length; n++)
    if (i.push(s.monthsShort[n]), i.length === t) {
      const o = i;
      e.push(o), i = [];
    }
  return e;
}
function us(s, t, e, i, n, o) {
  const r = Up(s, i, n), a = H(De()), l = `
    ${r.map((c) => `
        <tr>
          ${c.map((d) => `
              <td class="${o.datepickerCell} ${o.datepickerCellLarge}"  aria-label="${d}" data-te-year="${d}"
              ${Fn(
    d,
    e.min,
    e.max,
    e.disablePast,
    e.disableFuture
  ) ? "data-te-datepicker-cell-disabled" : ""}
              ${d === t ? "data-te-datepicker-cell-selected" : ""}
              ${d === a ? "data-te-datepicker-cell-current" : ""}
              >
                <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${d}</div>
              </td>
            `).join("")}
        </tr>
      `).join("")}
  `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `;
}
function Up(s, t, e) {
  const i = [], n = H(s), o = cs(s, t), r = n - o;
  let a = [];
  for (let l = 0; l < t; l++)
    if (a.push(r + l), a.length === e) {
      const c = a;
      i.push(c), a = [];
    }
  return i;
}
function zp(s, t) {
  return `
    <button id="${s}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `;
}
var Ie = 37;
var rt = 38;
var $e = 39;
var U = 40;
var Le = 36;
var Me = 35;
var hn = 33;
var un = 34;
var lt = 13;
var ps = 32;
var Is = 27;
var fi = 9;
var Xp = 8;
var Gp = 46;
var mt = 24;
var Hi = 4;
var Bi = 4;
var pn = "datepicker";
var fs = "te.datepicker";
var $s = `.${fs}`;
var qp = ".data-api";
var Qp = `close${$s}`;
var Zp = `open${$s}`;
var Jp = `dateChange${$s}`;
var Vi = `click${$s}${qp}`;
var bl = "data-te-datepicker-modal-container-ref";
var vl = "data-te-datepicker-dropdown-container-ref";
var Wi = "[data-te-datepicker-toggle-ref]";
var tf = `[${bl}]`;
var ef = `[${vl}]`;
var sf = "[data-te-datepicker-view-change-button-ref]";
var nf = "[data-te-datepicker-previous-button-ref]";
var of = "[data-te-datepicker-next-button-ref]";
var rf = "[data-te-datepicker-ok-button-ref]";
var af = "[data-te-datepicker-cancel-button-ref]";
var lf = "[data-te-datepicker-clear-button-ref]";
var cf = "[data-te-datepicker-view-ref]";
var df = "[data-te-datepicker-toggle-button-ref]";
var hf = "[data-te-datepicker-date-text-ref]";
var uf = "[data-te-dropdown-backdrop-ref]";
var pf = "animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var ff = "animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var _f = "animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var mf = "animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var gf = "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-zinc-700";
var bf = "w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]";
var vf = "relative h-full";
var Ef = "xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-zinc-800";
var Tf = "h-8 flex flex-col justify-end";
var Cf = "text-[10px] font-normal uppercase tracking-[1.7px] text-white";
var Af = "xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end";
var yf = "text-[34px] font-normal text-white";
var wf = "outline-none px-3";
var kf = "px-3 pt-2.5 pb-0 flex justify-between text-black/[64]";
var Of = "flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10";
var xf = "mt-2.5";
var Sf = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto";
var Df = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto";
var If = "h-14 flex absolute w-full bottom-0 justify-end items-center px-3";
var $f = "outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10";
var Lf = "mr-auto";
var Mf = "w-10 h-10 text-center text-[12px] font-normal dark:text-white";
var Nf = "text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group";
var Rf = "w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8";
var Pf = "w-[76px] h-[42px]";
var Hf = "mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500";
var Bf = "w-9 h-9 leading-9 rounded-[50%] text-[13px]";
var Vf = "w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]";
var Wf = "mx-auto w-[304px]";
var Ff = "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200";
var Yf = "inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white";
var jf = "w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-zinc-700";
var Kf = {
  title: "Select date",
  container: "body",
  disablePast: false,
  disableFuture: false,
  monthsFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  weekdaysFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"],
  okBtnText: "Ok",
  clearBtnText: "Clear",
  cancelBtnText: "Cancel",
  okBtnLabel: "Confirm selection",
  clearBtnLabel: "Clear selection",
  cancelBtnLabel: "Cancel selection",
  nextMonthLabel: "Next month",
  prevMonthLabel: "Previous month",
  nextYearLabel: "Next year",
  prevYearLabel: "Previous year",
  changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
  nextMultiYearLabel: "Next 24 years",
  prevMultiYearLabel: "Previous 24 years",
  switchToMultiYearViewLabel: "Choose year and month",
  switchToMonthViewLabel: "Choose date",
  switchToDayViewLabel: "Choose date",
  startDate: null,
  startDay: 0,
  format: "dd/mm/yyyy",
  view: "days",
  viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
  min: null,
  max: null,
  filter: null,
  inline: false,
  toggleButton: true,
  disableToggleButton: false,
  disableInput: false,
  animations: true,
  confirmDateOnSelect: false,
  removeOkBtn: false,
  removeCancelBtn: false,
  removeClearBtn: false
};
var Uf = {
  title: "string",
  container: "string",
  disablePast: "boolean",
  disableFuture: "boolean",
  monthsFull: "array",
  monthsShort: "array",
  weekdaysFull: "array",
  weekdaysShort: "array",
  weekdaysNarrow: "array",
  okBtnText: "string",
  clearBtnText: "string",
  cancelBtnText: "string",
  okBtnLabel: "string",
  clearBtnLabel: "string",
  cancelBtnLabel: "string",
  nextMonthLabel: "string",
  prevMonthLabel: "string",
  nextYearLabel: "string",
  prevYearLabel: "string",
  nextMultiYearLabel: "string",
  prevMultiYearLabel: "string",
  changeMonthIconTemplate: "string",
  switchToMultiYearViewLabel: "string",
  switchToMonthViewLabel: "string",
  switchToDayViewLabel: "string",
  startDate: "(null|string|date)",
  startDay: "number",
  format: "string",
  view: "string",
  viewChangeIconTemplate: "string",
  min: "(null|string|date)",
  max: "(null|string|date)",
  filter: "(null|function)",
  inline: "boolean",
  toggleButton: "boolean",
  disableToggleButton: "boolean",
  disableInput: "boolean",
  animations: "boolean",
  confirmDateOnSelect: "boolean",
  removeOkBtn: "boolean",
  removeCancelBtn: "boolean",
  removeClearBtn: "boolean"
};
var zf = {
  fadeIn: pf,
  fadeOut: ff,
  fadeInShort: _f,
  fadeOutShort: mf,
  modalContainer: gf,
  datepickerBackdrop: bf,
  datepickerMain: vf,
  datepickerHeader: Ef,
  datepickerTitle: Tf,
  datepickerTitleText: Cf,
  datepickerDate: Af,
  datepickerDateText: yf,
  datepickerView: wf,
  datepickerDateControls: kf,
  datepickerViewChangeButton: Of,
  datepickerViewChangeIcon: Yf,
  datepickerArrowControls: xf,
  datepickerPreviousButton: Sf,
  datepickerNextButton: Df,
  datepickerFooter: If,
  datepickerFooterBtn: $f,
  datepickerClearBtn: Lf,
  datepickerDayHeading: Mf,
  datepickerCell: Nf,
  datepickerCellSmall: Rf,
  datepickerCellLarge: Pf,
  datepickerCellContent: Hf,
  datepickerCellContentSmall: Bf,
  datepickerCellContentLarge: Vf,
  datepickerTable: Wf,
  datepickerToggleButton: Ff,
  datepickerDropdownContainer: jf
};
var Xf = {
  fadeIn: "string",
  fadeOut: "string",
  fadeInShort: "string",
  fadeOutShort: "string",
  modalContainer: "string",
  datepickerBackdrop: "string",
  datepickerMain: "string",
  datepickerHeader: "string",
  datepickerTitle: "string",
  datepickerTitleText: "string",
  datepickerDate: "string",
  datepickerDateText: "string",
  datepickerView: "string",
  datepickerDateControls: "string",
  datepickerViewChangeButton: "string",
  datepickerArrowControls: "string",
  datepickerPreviousButton: "string",
  datepickerNextButton: "string",
  datepickerFooter: "string",
  datepickerFooterBtn: "string",
  datepickerClearBtn: "string",
  datepickerDayHeading: "string",
  datepickerCell: "string",
  datepickerCellSmall: "string",
  datepickerCellLarge: "string",
  datepickerCellContent: "string",
  datepickerCellContentSmall: "string",
  datepickerCellContentLarge: "string",
  datepickerTable: "string",
  datepickerToggleButton: "string",
  datepickerDropdownContainer: "string"
};
var Gg = class {
  constructor(t, e, i) {
    this._element = t, this._input = h.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = false, this._toggleButtonId = Ot("datepicker-toggle-"), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this._scrollBar = new pi(), this._element && I.setData(t, fs, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
  }
  // Getters
  static get NAME() {
    return pn;
  }
  get container() {
    return h.findOne(
      `[${bl}='${this._toggleButtonId}']`
    ) || h.findOne(
      `[${vl}='${this._toggleButtonId}']`
    );
  }
  get options() {
    return this._options;
  }
  get activeCell() {
    let t;
    return this._view === "days" && (t = this._getActiveDayCell()), this._view === "months" && (t = this._getActiveMonthCell()), this._view === "years" && (t = this._getActiveYearCell()), t;
  }
  get activeDay() {
    return Q(this._activeDate);
  }
  get activeMonth() {
    return Y(this._activeDate);
  }
  get activeYear() {
    return H(this._activeDate);
  }
  get firstYearInView() {
    return this.activeYear - cs(this._activeDate, mt);
  }
  get lastYearInView() {
    return this.firstYearInView + mt - 1;
  }
  get viewChangeButton() {
    return h.findOne(sf, this.container);
  }
  get previousButton() {
    return h.findOne(nf, this.container);
  }
  get nextButton() {
    return h.findOne(of, this.container);
  }
  get okButton() {
    return h.findOne(rf, this.container);
  }
  get cancelButton() {
    return h.findOne(af, this.container);
  }
  get clearButton() {
    return h.findOne(lf, this.container);
  }
  get datesContainer() {
    return h.findOne(cf, this.container);
  }
  get toggleButton() {
    return h.findOne(df, this._element);
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  _getConfig(t) {
    const e = p.getDataAttributes(this._element);
    if (t = {
      ...Kf,
      ...e,
      ...t
    }, N(pn, t, Uf), t.max && typeof t.max == "string" && (t.max = new Date(t.max)), t.min && typeof t.min == "string" && (t.min = new Date(t.min)), t.startDay && t.startDay !== 0) {
      const i = this._getNewDaysOrderArray(t);
      t.weekdaysNarrow = i;
    }
    return t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...zf,
      ...e,
      ...t
    }, N(pn, t, Xf), t;
  }
  _getContainer() {
    return h.findOne(this._options.container);
  }
  _getNewDaysOrderArray(t) {
    const e = t.startDay, i = t.weekdaysNarrow;
    return i.slice(e).concat(i.slice(0, e));
  }
  _init() {
    !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
  }
  _appendToggleButton() {
    const t = zp(
      this._toggleButtonId,
      this._classes.datepickerToggleButton
    );
    this._element.insertAdjacentHTML("beforeend", t);
  }
  open() {
    if (this._input.readOnly || this._input.disabled)
      return;
    const t = u.trigger(this._element, Zp);
    if (this._isOpen || t.defaultPrevented)
      return;
    this._setInitialDate();
    const e = Wp(this._classes.datepickerBackdrop), i = Vp(
      this._activeDate,
      this._selectedDate,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Bi,
      mt,
      Hi,
      this._toggleButtonId,
      this._classes
    );
    this._options.inline ? this._openDropdown(i) : (this._openModal(e, i), this._scrollBar.hide()), this._animations && (p.addClass(this.container, this._classes.fadeIn), p.addClass(e, this._classes.fadeInShort)), this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._updateControlsDisabledState(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = true, setTimeout(() => {
      this._listenToOutsideClick();
    }, 0);
  }
  _openDropdown(t) {
    this._popper = je(this._input, t, {
      placement: "bottom-start"
    }), this._getContainer().appendChild(t);
  }
  _openModal(t, e) {
    const i = this._getContainer();
    i.appendChild(t), i.appendChild(e);
  }
  _setFocusTrap(t) {
    this._focusTrap = new bi(t, {
      event: "keydown",
      condition: (e) => e.key === "Tab"
    }), this._focusTrap.trap();
  }
  _listenToUserInput() {
    u.on(this._input, "input", (t) => {
      this._handleUserInput(t.target.value);
    });
  }
  _listenToToggleClick() {
    u.on(
      this._element,
      Vi,
      Wi,
      (t) => {
        t.preventDefault(), this.open();
      }
    );
  }
  _listenToToggleKeydown() {
    u.on(
      this._element,
      "keydown",
      Wi,
      (t) => {
        t.keyCode === lt && !this._isOpen && this.open();
      }
    );
  }
  _listenToDateSelection() {
    u.on(this.datesContainer, "click", (t) => {
      this._handleDateSelection(t);
    });
  }
  _handleDateSelection(t) {
    const e = t.target.nodeName === "DIV" ? t.target.parentNode.dataset : t.target.dataset, i = t.target.nodeName === "DIV" ? t.target.parentNode : t.target;
    if (e.teDate && this._pickDay(e.teDate, i), e.teMonth && e.teYear) {
      const n = parseInt(e.teMonth, 10), o = parseInt(e.teYear, 10);
      this._pickMonth(n, o);
    }
    if (e.teYear && !e.teMonth) {
      const n = parseInt(e.teYear, 10);
      this._pickYear(n);
    }
    this._options.inline || this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _updateHeaderDate(t, e, i) {
    const n = h.findOne(
      hf,
      this.container
    ), o = Y(t), r = Q(t), a = ls(t);
    n.innerHTML = `${i[a]}, ${e[o]} ${r}`;
  }
  _addControlsListeners() {
    u.on(this.nextButton, "click", () => {
      this._view === "days" ? this.nextMonth() : this._view === "years" ? this.nextYears() : this.nextYear(), this._updateControlsDisabledState();
    }), u.on(this.previousButton, "click", () => {
      this._view === "days" ? this.previousMonth() : this._view === "years" ? this.previousYears() : this.previousYear(), this._updateControlsDisabledState();
    }), u.on(this.viewChangeButton, "click", () => {
      this._view === "days" ? this._changeView("years") : (this._view === "years" || this._view === "months") && this._changeView("days");
    }), this._options.inline || this._listenToFooterButtonsClick();
  }
  _listenToFooterButtonsClick() {
    u.on(this.okButton, "click", () => this.handleOk()), u.on(this.cancelButton, "click", () => this.handleCancel()), u.on(this.clearButton, "click", () => this.handleClear());
  }
  _listenToOutsideClick() {
    u.on(document, Vi, (t) => {
      const e = t.target === this.container, i = this.container && this.container.contains(t.target);
      !e && !i && this.close();
    });
  }
  _listenToEscapeClick() {
    u.on(document, "keydown", (t) => {
      t.keyCode === Is && this._isOpen && this.close();
    });
  }
  _listenToKeyboardNavigation() {
    u.on(this.datesContainer, "keydown", (t) => {
      this._handleKeydown(t);
    });
  }
  _listenToDatesContainerFocus() {
    u.on(this.datesContainer, "focus", () => {
      this._focusActiveCell(this.activeCell);
    });
  }
  _listenToDatesContainerBlur() {
    u.on(this.datesContainer, "blur", () => {
      this._removeCurrentFocusStyles();
    });
  }
  _handleKeydown(t) {
    this._view === "days" && this._handleDaysViewKeydown(t), this._view === "months" && this._handleMonthsViewKeydown(t), this._view === "years" && this._handleYearsViewKeydown(t);
  }
  _handleDaysViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Ie:
        this._activeDate = Te(this._activeDate, F() ? 1 : -1);
        break;
      case $e:
        this._activeDate = Te(this._activeDate, F() ? -1 : 1);
        break;
      case rt:
        this._activeDate = Te(this._activeDate, -7);
        break;
      case U:
        this._activeDate = Te(this._activeDate, 7);
        break;
      case Le:
        this._activeDate = Te(
          this._activeDate,
          1 - Q(this._activeDate)
        );
        break;
      case Me:
        this._activeDate = Te(
          this._activeDate,
          Wn(this._activeDate) - Q(this._activeDate)
        );
        break;
      case hn:
        this._activeDate = nt(this._activeDate, -1);
        break;
      case un:
        this._activeDate = nt(this._activeDate, 1);
        break;
      case lt:
      case ps:
        this._selectDate(this._activeDate), this._handleDateSelection(t), t.preventDefault();
        return;
      default:
        return;
    }
    di(
      e,
      this._activeDate,
      this._view,
      mt,
      this._options.min,
      this._options.max
    ) || this._changeView("days"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _asyncFocusDatesContainer() {
    setTimeout(() => {
      this.datesContainer.focus();
    }, 0);
  }
  _focusActiveCell(t) {
    t && t.setAttribute("data-te-datepicker-cell-focused", "");
  }
  _removeHighlightFromCell(t) {
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  _getActiveDayCell() {
    const t = h.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = Er(i.dataset.teDate);
      return de(n, this._activeDate);
    });
  }
  _handleMonthsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Ie:
        this._activeDate = nt(this._activeDate, F() ? 1 : -1);
        break;
      case $e:
        this._activeDate = nt(this._activeDate, F() ? -1 : 1);
        break;
      case rt:
        this._activeDate = nt(this._activeDate, -4);
        break;
      case U:
        this._activeDate = nt(this._activeDate, 4);
        break;
      case Le:
        this._activeDate = nt(this._activeDate, -this.activeMonth);
        break;
      case Me:
        this._activeDate = nt(this._activeDate, 11 - this.activeMonth);
        break;
      case hn:
        this._activeDate = it(this._activeDate, -1);
        break;
      case un:
        this._activeDate = it(this._activeDate, 1);
        break;
      case lt:
      case ps:
        this._selectMonth(this.activeMonth);
        return;
      default:
        return;
    }
    di(
      e,
      this._activeDate,
      this._view,
      mt,
      this._options.min,
      this._options.max
    ) || this._changeView("months"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveMonthCell() {
    const t = h.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = parseInt(i.dataset.teYear, 10), o = parseInt(i.dataset.teMonth, 10);
      return n === this.activeYear && o === this.activeMonth;
    });
  }
  _handleYearsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell, n = 4, o = 24;
    switch (t.keyCode) {
      case Ie:
        this._activeDate = it(this._activeDate, F() ? 1 : -1);
        break;
      case $e:
        this._activeDate = it(this._activeDate, F() ? -1 : 1);
        break;
      case rt:
        this._activeDate = it(this._activeDate, -n);
        break;
      case U:
        this._activeDate = it(this._activeDate, n);
        break;
      case Le:
        this._activeDate = it(
          this._activeDate,
          -cs(this._activeDate, o)
        );
        break;
      case Me:
        this._activeDate = it(
          this._activeDate,
          o - cs(this._activeDate, o) - 1
        );
        break;
      case hn:
        this._activeDate = it(this._activeDate, -o);
        break;
      case un:
        this._activeDate = it(this._activeDate, o);
        break;
      case lt:
      case ps:
        this._selectYear(this.activeYear);
        return;
      default:
        return;
    }
    di(
      e,
      this._activeDate,
      this._view,
      mt,
      this._options.min,
      this._options.max
    ) || this._changeView("years"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveYearCell() {
    const t = h.find("td", this.datesContainer);
    return Array.from(t).find((i) => parseInt(i.dataset.teYear, 10) === this.activeYear);
  }
  _setInitialDate() {
    this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = /* @__PURE__ */ new Date();
  }
  close() {
    const t = u.trigger(this._element, Qp);
    !this._isOpen || t.defaultPrevented || (this._removeDatepickerListeners(), this._animations && p.addClass(this.container, this._classes.fadeOut), this._options.inline ? this._closeDropdown() : this._closeModal(), this._isOpen = false, this._view = this._options.view, this.toggleButton ? this.toggleButton.focus() : this._input.focus());
  }
  _closeDropdown() {
    const t = h.findOne(ef);
    window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t && document.body.removeChild(t), this._popper && this._popper.destroy()), t.addEventListener("animationend", () => {
      t && document.body.removeChild(t), this._popper && this._popper.destroy();
    }), this._removeFocusTrap();
  }
  _closeModal() {
    const t = h.findOne(uf), e = h.findOne(tf);
    !e || !t || (this._animations ? (p.addClass(t, this._classes.fadeOutShort), t.addEventListener("animationend", () => {
      this._removePicker(t, e), this._scrollBar.reset();
    })) : (this._removePicker(t, e), this._scrollBar.reset()));
  }
  _removePicker(t, e) {
    const i = this._getContainer();
    i.removeChild(t), i.removeChild(e);
  }
  _removeFocusTrap() {
    this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
  }
  _removeDatepickerListeners() {
    u.off(this.nextButton, "click"), u.off(this.previousButton, "click"), u.off(this.viewChangeButton, "click"), u.off(this.okButton, "click"), u.off(this.cancelButton, "click"), u.off(this.clearButton, "click"), u.off(this.datesContainer, "click"), u.off(this.datesContainer, "keydown"), u.off(this.datesContainer, "focus"), u.off(this.datesContainer, "blur"), u.off(document, Vi);
  }
  dispose() {
    this._isOpen && this.close(), this._removeInputAndToggleListeners();
    const t = h.findOne(
      `#${this._toggleButtonId}`
    );
    t && this._element.removeChild(t), I.removeData(this._element, fs), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
  }
  _removeInputAndToggleListeners() {
    u.off(this._input, "input"), u.off(
      this._element,
      Vi,
      Wi
    ), u.off(this._element, "keydown", Wi);
  }
  handleOk() {
    this._confirmSelection(this._headerDate), this.close();
  }
  _selectDate(t, e = this.activeCell) {
    const { min: i, max: n, filter: o, disablePast: r, disableFuture: a } = this._options;
    As(t, i, n, o, r, a) || (this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._selectedDate = t, this._selectedYear = H(t), this._selectedMonth = Y(t), this._headerDate = t, (this._options.inline || this.options.confirmDateOnSelect) && (this._confirmSelection(t), this.close()));
  }
  _selectYear(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerYear = t, this._asyncChangeView("months");
  }
  _selectMonth(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerMonth = t, this._asyncChangeView("days");
  }
  _removeSelectedStyles(t) {
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _addSelectedStyles(t) {
    t && t.setAttribute("data-te-datepicker-cell-selected", "");
  }
  _confirmSelection(t) {
    if (t) {
      const e = this.formatDate(t);
      this._input.value = e, u.trigger(this._element, Jp, { date: t }), u.trigger(this._input, "input");
    }
  }
  handleCancel() {
    this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
  }
  handleClear() {
    this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._setInitialDate(), this._changeView("days"), this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _removeCurrentSelectionStyles() {
    const t = h.findOne(
      "[data-te-datepicker-cell-selected]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _removeCurrentFocusStyles() {
    const t = h.findOne(
      "[data-te-datepicker-cell-focused]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  formatDate(t) {
    const e = Q(t), i = this._addLeadingZero(Q(t)), n = this._options.weekdaysShort[ls(t)], o = this._options.weekdaysFull[ls(t)], r = Y(t) + 1, a = this._addLeadingZero(Y(t) + 1), l = this._options.monthsShort[Y(t)], c = this._options.monthsFull[Y(t)], d = H(t).toString().length === 2 ? H(t) : H(t).toString().slice(2, 4), _ = H(t), f = this._options.format.split(
      /(d{1,4}|m{1,4}|y{4}|yy|!.)/g
    );
    let m = "";
    return f.forEach((g) => {
      switch (g) {
        case "dddd":
          g = g.replace(g, o);
          break;
        case "ddd":
          g = g.replace(g, n);
          break;
        case "dd":
          g = g.replace(g, i);
          break;
        case "d":
          g = g.replace(g, e);
          break;
        case "mmmm":
          g = g.replace(g, c);
          break;
        case "mmm":
          g = g.replace(g, l);
          break;
        case "mm":
          g = g.replace(g, a);
          break;
        case "m":
          g = g.replace(g, r);
          break;
        case "yyyy":
          g = g.replace(g, _);
          break;
        case "yy":
          g = g.replace(g, d);
          break;
      }
      m += g;
    }), m;
  }
  _addLeadingZero(t) {
    return parseInt(t, 10) < 10 ? `0${t}` : t;
  }
  _pickDay(t, e) {
    const i = Er(t), { min: n, max: o, filter: r, disablePast: a, disableFuture: l } = this._options;
    As(i, n, o, r, a, l) || (this._activeDate = i, this._selectDate(i, e));
  }
  _pickYear(t) {
    const { min: e, max: i, disablePast: n, disableFuture: o } = this._options;
    if (Fn(t, e, i, n, o))
      return;
    const r = Dt(t, this.activeMonth, this.activeDay);
    this._activeDate = r, this._selectedDate = r, this._selectYear(t);
  }
  _pickMonth(t, e) {
    const { min: i, max: n, disablePast: o, disableFuture: r } = this._options;
    if (gl(t, e, i, n, o, r) || Fn(e, i, n, o, r))
      return;
    const a = Dt(e, t, this.activeDay);
    this._activeDate = a, this._selectMonth(t);
  }
  nextMonth() {
    const t = nt(this._activeDate, 1), e = ds(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this._activeDate = t, this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousMonth() {
    const t = nt(this._activeDate, -1);
    this._activeDate = t;
    const e = ds(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  nextYear() {
    const t = it(this._activeDate, 1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    );
    const e = hs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Bi,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  previousYear() {
    const t = it(this._activeDate, -1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    );
    const e = hs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Bi,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  nextYears() {
    const t = it(this._activeDate, 24);
    this._activeDate = t;
    const e = us(
      t,
      this._selectedYear,
      this._options,
      mt,
      Hi,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousYears() {
    const t = it(this._activeDate, -24);
    this._activeDate = t;
    const e = us(
      t,
      this._selectedYear,
      this._options,
      mt,
      Hi,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  _asyncChangeView(t) {
    setTimeout(() => {
      this._changeView(t);
    }, 0);
  }
  _changeView(t) {
    this._view = t, this.datesContainer.blur(), t === "days" && (this.datesContainer.innerHTML = ds(
      this._activeDate,
      this._headerDate,
      this._options,
      this._classes
    )), t === "months" && (this.datesContainer.innerHTML = hs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Bi,
      this._classes
    )), t === "years" && (this.datesContainer.innerHTML = us(
      this._activeDate,
      this._selectedYear,
      this._options,
      mt,
      Hi,
      this._classes
    )), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t), this._updateControlsDisabledState();
  }
  _updateViewControlsAndAttributes(t) {
    t === "days" && (this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMultiYearViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMonthLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t === "months" && (this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToDayViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevYearLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t === "years" && (this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += kt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMonthViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMultiYearLabel
    ), this.nextButton.setAttribute(
      "aria-label",
      this._options.nextMultiYearLabel
    ));
  }
  _updateControlsDisabledState() {
    xp(
      this._options.disableFuture,
      this._activeDate,
      this._view,
      mt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.nextButton.disabled = true : this.nextButton.disabled = false, Sp(
      this._options.disablePast,
      this._activeDate,
      this._view,
      mt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.previousButton.disabled = true : this.previousButton.disabled = false;
  }
  _handleUserInput(t) {
    const e = this._getDelimeters(this._options.format), i = this._parseDate(t, this._options.format, e);
    wp(i) ? (this._activeDate = i, this._selectedDate = i, this._selectedYear = H(i), this._selectedMonth = Y(i), this._headerDate = i) : (this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null);
  }
  _getDelimeters(t) {
    return t.match(/[^(dmy)]{1,}/g);
  }
  _parseDate(t, e, i) {
    let n;
    i[0] !== i[1] ? n = i[0] + i[1] : n = i[0];
    const o = new RegExp(`[${n}]`), r = t.split(o), a = e.split(o), l = e.indexOf("mmm") !== -1, c = [];
    for (let b = 0; b < a.length; b++)
      a[b].indexOf("yy") !== -1 && (c[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (c[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (c[2] = { value: r[b], format: a[b] });
    let d;
    e.indexOf("mmmm") !== -1 ? d = this._options.monthsFull : d = this._options.monthsShort;
    const _ = Number(c[0].value), f = l ? this.getMonthNumberByMonthName(c[1].value, d) : Number(c[1].value) - 1, m = Number(c[2].value);
    return Dt(_, f, m);
  }
  getMonthNumberByMonthName(t, e) {
    return e.findIndex((i) => i === t);
  }
  static getInstance(t) {
    return I.getData(t, fs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Gf = ({
  format24: s,
  okLabel: t,
  cancelLabel: e,
  headID: i,
  footerID: n,
  bodyID: o,
  pickerID: r,
  clearLabel: a,
  inline: l,
  showClearBtn: c,
  amLabel: d,
  pmLabel: _
}, f) => {
  const m = `<div id='${r}' class='${f.timepickerWrapper}' data-te-timepicker-wrapper>
      <div class="${f.timepickerContainer}">
        <div class="${f.timepickerElements}">
        <div id='${i}' class='${f.timepickerHead}' style='padding-right:${s ? 50 : 10}px'>
        <div class='${f.timepickerHeadContent}'>
            <div class="${f.timepickerCurrentWrapper}">
              <span class="${f.timepickerCurrentButtonWrapper}">
                <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${f.timepickerDot}' disabled>:</button>
            <span class="${f.timepickerCurrentButtonWrapper}">
              <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${s ? "" : `<div class="${f.timepickerModeWrapper}">
                  <button type='button' class="${f.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${d}</button>
                  <button class="${f.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${_}</button>
                </div>`}
        </div>
      </div>
      ${l ? "" : `<div id='${o}' class='${f.timepickerClockWrapper}' data-te-timepicker-clock-wrapper>
            <div class='${f.timepickerClock}' data-te-timepicker-clock>
              <span class='${f.timepickerMiddleDot}' data-te-timepicker-middle-dot></span>
              <div class='${f.timepickerHandPointer}' data-te-timepicker-hand-pointer>
                <div class='${f.timepickerPointerCircle}' data-te-timepicker-circle></div>
              </div>
              ${s ? '<div class="' + f.timepickerClockInner + '" data-te-timepicker-clock-inner></div>' : ""}
            </div>
          </div>`}
    </div>
    <div id='${n}' class='${f.timepickerFooterWrapper}'>
      <div class="${f.timepickerFooter}">
        ${c ? `<button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>` : ""}
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`, g = `<div id='${r}' class='${f.timepickerInlineWrapper}' data-te-timepicker-wrapper>
        <div class="${f.timepickerInlineContainer}">
          <div class="${f.timepickerInlineElements}">
          <div id='${i}' class='${f.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${f.timepickerInlineHeadContent}'>
              <div class="${f.timepickerCurrentWrapper}">
                <span class="${f.timepickerInlineHourWrapper}" data-te-timepicker-inline-hour-icons>
                  <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineDot}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${f.timepickerCurrentMinuteWrapper}">
                <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${s ? "" : `<div class="${f.timepickerInlineModeWrapper}">
                      <button type='button' class="${f.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${d}</button>
                      <button class="${f.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${_}</button>
                      <button type='button' class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`}
              ${s ? `<button class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
</div>`;
  return l ? g : m;
};
var qf = (s, t, e) => {
  const { iconSVG: i } = s;
  return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${i}
  </button>
`;
};
var Ls = "data-te-timepicker-disabled";
var Fi = "data-te-timepicker-active";
var fe = (s) => {
  if (s === "")
    return;
  let t, e, i, n;
  return El(s) ? (t = s.getHours(), n = t, e = s.getMinutes(), t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM"), e = e < 10 ? `0${e}` : e) : ([t, e, i] = R(s, false), n = t, t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM")), {
    hours: t,
    minutes: e,
    amOrPm: i
  };
};
var El = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !Number.isNaN(s);
var wr = (s) => {
  if (s === "")
    return;
  let t, e;
  return El(s) ? (t = s.getHours(), e = s.getMinutes()) : [t, e] = R(s, false), e = Number(e) < 10 ? `0${Number(e)}` : e, {
    hours: t,
    minutes: e
  };
};
var Qf = (s, t, e) => u.on(document, s, t, ({ target: i }) => {
  if (i.hasAttribute(Fi))
    return;
  document.querySelectorAll(t).forEach((o) => {
    o.hasAttribute(Fi) && (p.removeClass(o, e.opacity), o.removeAttribute(Fi));
  }), p.addClass(i, e.opacity), i.setAttribute(Fi, "");
});
var kr = ({ clientX: s, clientY: t, touches: e }, i, n = false) => {
  const { left: o, top: r } = i.getBoundingClientRect();
  let a = {};
  return !n || !e ? a = {
    x: s - o,
    y: t - r
  } : n && Object.keys(e).length > 0 && (a = {
    x: e[0].clientX - o,
    y: e[0].clientY - r
  }), a;
};
var Yi = () => navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
var R = (s, t = true) => t ? s.value.replace(/:/gi, " ").split(" ") : s.replace(/:/gi, " ").split(" ");
var Tl = (s, t) => {
  const [e, i, n] = R(s, false), [o, r, a] = R(t, false);
  return n === "PM" && a === "AM" || n === a && e > o || i > r;
};
var Cl = () => {
  const s = /* @__PURE__ */ new Date(), t = s.getHours(), e = s.getMinutes();
  return `${t}:${e < 10 ? `0${e}` : e}`;
};
var jt = (s, t, e) => {
  if (!t)
    return s;
  let i = Cl();
  return e && (i = `${fe(i).hours}:${fe(i).minutes} ${fe(i).amOrPm}`), (s !== "" && Tl(i, s) || s === "") && (s = i), s;
};
var Kt = (s, t, e) => {
  if (!t)
    return s;
  let i = Cl();
  return e && (i = `${fe(i).hours}:${fe(i).minutes} ${fe(i).amOrPm}`), (s !== "" && !Tl(i, s) || s === "") && (s = i), s;
};
var Zf = ({ format12: s, maxTime: t, minTime: e, disablePast: i, disableFuture: n }, o, r) => {
  const a = R(o)[1];
  e = jt(e, i, s), t = Kt(t, n, s);
  const [l, c, d] = R(t, false), [_, f, m] = R(e, false);
  if (d !== void 0 || m !== void 0)
    return [r, a];
  if (!(l !== "" && _ === "" && Number(r) > Number(l)) && !(l === "" && _ !== "" && c === void 0 && f !== "" && Number(r) < Number(_)))
    return [r, a];
};
var Or = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, (n.textContent === "00" || Number(n.textContent === "12" && i ? "0" : n.textContent) > t) && (p.addClass(n, e.tipsDisabled), n.setAttribute(Ls, ""));
  });
};
var xr = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, n.textContent !== "00" && Number(n.textContent === "12" && i ? "0" : n.textContent) < Number(t) && (p.addClass(n, e.tipsDisabled), n.setAttribute(Ls, ""));
  });
};
var Al = (s, t, e, i) => {
  if (t === "12" || t === "24")
    return;
  const n = e ? 12 : 24;
  return i === "max" ? (Number(s) === n ? 0 : Number(s)) > Number(t) : (Number(s) === n ? 0 : Number(s)) < Number(t);
};
var Jf = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Al(i, e, o, "max") || Number(r.textContent) > t && Number(i) === Number(e)) && (p.addClass(r, n.tipsDisabled), r.setAttribute(Ls, ""));
  });
};
var t_ = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Al(i, e, o, "min") || Number(r.textContent) < t && Number(i) === Number(e)) && (p.addClass(r, n.tipsDisabled), r.setAttribute(Ls, ""));
  });
};
var e_ = (s) => s.startsWith("0") ? Number(s.slice(1)) : Number(s);
var hi = "timepicker";
var L = `data-te-${hi}`;
var Sr = "[data-te-toggle]";
var _s = `te.${hi}`;
var $t = `.${_s}`;
var Lt = ".data-api";
var Dr = `click${$t}${Lt}`;
var ji = `keydown${$t}${Lt}`;
var Ir = `mousedown${$t}${Lt}`;
var $r = `mouseup${$t}${Lt}`;
var Lr = `mousemove${$t}${Lt}`;
var Mr = `mouseleave${$t}${Lt}`;
var Nr = `mouseover${$t}${Lt}`;
var Rr = `touchmove${$t}${Lt}`;
var Pr = `touchend${$t}${Lt}`;
var Hr = `touchstart${$t}${Lt}`;
var i_ = `[${L}-am]`;
var s_ = `[${L}-pm]`;
var n_ = `[${L}-format24]`;
var Ki = `[${L}-current]`;
var Ui = `[${L}-hour-mode]`;
var o_ = `[${L}-toggle-button]`;
var fn = `${L}-cancel`;
var Br = `${L}-clear`;
var _n = `${L}-submit`;
var r_ = `${L}-icon`;
var mn = `${L}-icon-up`;
var gn = `${L}-icon-down`;
var a_ = `${L}-icon-inline-hour`;
var l_ = `${L}-icon-inline-minute`;
var Vr = `${L}-inline-hour-icons`;
var c_ = `${L}-current-inline`;
var d_ = "readonly";
var Wr = `${L}-invalid-feedback`;
var bn = `${L}-is-invalid`;
var Bt = `${L}-disabled`;
var B = `${L}-active`;
var h_ = `${L}-input`;
var le = `${L}-clock`;
var Je = `${L}-clock-inner`;
var vn = `${L}-wrapper`;
var Fr = `${L}-clock-wrapper`;
var zi = `${L}-hour`;
var En = `${L}-minute`;
var Xi = `${L}-tips-element`;
var K = `${L}-tips-hours`;
var X = `${L}-tips-minutes`;
var at = `${L}-tips-inner`;
var Gi = `${L}-tips-inner-element`;
var Yr = `${L}-middle-dot`;
var Tn = `${L}-hand-pointer`;
var Cn = `${L}-circle`;
var jr = `${L}-modal`;
var u_ = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`;
var p_ = {
  appendValidationInfo: true,
  bodyID: "",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  closeModalOnBackdropClick: true,
  closeModalOnMinutesClick: false,
  container: "body",
  defaultTime: "",
  disabled: false,
  disablePast: false,
  disableFuture: false,
  enableValidation: true,
  focusInputAfterApprove: false,
  footerID: "",
  format12: true,
  format24: false,
  headID: "",
  increment: false,
  inline: false,
  invalidLabel: "Invalid Time Format",
  maxTime: "",
  minTime: "",
  modalID: "",
  okLabel: "Ok",
  overflowHidden: true,
  pickerID: "",
  readOnly: false,
  showClearBtn: true,
  switchHoursToMinutesOnClick: true,
  iconSVG: u_,
  withIcon: true,
  pmLabel: "PM",
  amLabel: "AM",
  animations: true
};
var f_ = {
  appendValidationInfo: "boolean",
  bodyID: "string",
  cancelLabel: "string",
  clearLabel: "string",
  closeModalOnBackdropClick: "boolean",
  closeModalOnMinutesClick: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  enableValidation: "boolean",
  footerID: "string",
  format12: "boolean",
  format24: "boolean",
  headID: "string",
  increment: "boolean",
  inline: "boolean",
  invalidLabel: "string",
  modalID: "string",
  okLabel: "string",
  overflowHidden: "boolean",
  pickerID: "string",
  readOnly: "boolean",
  showClearBtn: "boolean",
  switchHoursToMinutesOnClick: "boolean",
  defaultTime: "(string|date|number)",
  iconSVG: "string",
  withIcon: "boolean",
  pmLabel: "string",
  amLabel: "string",
  animations: "boolean"
};
var __ = {
  tips: "absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent",
  tipsActive: "text-white bg-[#3b71ca] font-normal",
  tipsDisabled: "text-[#b3afaf] pointer-events-none bg-transparent",
  transform: "transition-[transform,height] ease-in-out duration-[400ms]",
  modal: "z-[1065]",
  clockAnimation: "animate-[show-up-clock_350ms_linear]",
  opacity: "!opacity-100",
  timepickerWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed",
  timepickerContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg",
  timepickerElements: "flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center",
  timepickerHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly",
  timepickerCurrentWrapper: "[direction:ltr] rtl:[direction:rtl]",
  timepickerCurrentButtonWrapper: "relative h-full",
  timepickerCurrentButton: "text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ",
  timepickerDot: "font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal",
  timepickerModeWrapper: "flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerModeAm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerModePm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerClockWrapper: "min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500",
  timepickerClock: "relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50",
  timepickerMiddleDot: "top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute",
  timepickerHandPointer: "bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute",
  timepickerPointerCircle: "-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute",
  timepickerClockInner: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]",
  timepickerFooterWrapper: "rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500",
  timepickerFooter: "w-full flex justify-between",
  timepickerFooterButton: "text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none",
  timepickerInlineWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg",
  timepickerInlineContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
  timepickerInlineElements: "flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerInlineHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg",
  timepickerInlineHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center",
  timepickerInlineHourWrapper: "relative h-full !opacity-100",
  timepickerCurrentMinuteWrapper: "relative h-full",
  timepickerInlineIconUp: "absolute fill-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineIconSvg: "h-4 w-4",
  timepickerInlineCurrentButton: "font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]",
  timepickerInlineIconDown: "absolute fill-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineDot: "font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]",
  timepickerInlineModeWrapper: "flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerInlineModeAm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6",
  timepickerInlineModePm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer",
  timepickerInlineSubmitButton: "hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0",
  timepickerToggleButton: "h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white"
};
var m_ = {
  tips: "string",
  tipsActive: "string",
  tipsDisabled: "string",
  transform: "string",
  modal: "string",
  clockAnimation: "string",
  opacity: "string",
  timepickerWrapper: "string",
  timepickerContainer: "string",
  timepickerElements: "string",
  timepickerHead: "string",
  timepickerHeadContent: "string",
  timepickerCurrentWrapper: "string",
  timepickerCurrentButtonWrapper: "string",
  timepickerCurrentButton: "string",
  timepickerDot: "string",
  timepickerModeWrapper: "string",
  timepickerModeAm: "string",
  timepickerModePm: "string",
  timepickerClockWrapper: "string",
  timepickerClock: "string",
  timepickerMiddleDot: "string",
  timepickerHandPointer: "string",
  timepickerPointerCircle: "string",
  timepickerClockInner: "string",
  timepickerFooterWrapper: "string",
  timepickerFooterButton: "string",
  timepickerInlineWrapper: "string",
  timepickerInlineContainer: "string",
  timepickerInlineElements: "string",
  timepickerInlineHead: "string",
  timepickerInlineHeadContent: "string",
  timepickerInlineHourWrapper: "string",
  timepickerCurrentMinuteWrapper: "string",
  timepickerInlineIconUp: "string",
  timepickerInlineIconSvg: "string",
  timepickerInlineCurrentButton: "string",
  timepickerInlineIconDown: "string",
  timepickerInlineDot: "string",
  timepickerInlineModeWrapper: "string",
  timepickerInlineModeAm: "string",
  timepickerInlineModePm: "string",
  timepickerInlineSubmitButton: "string",
  timepickerToggleButton: "string"
};
var qg = class {
  constructor(t, e = {}, i) {
    Tt(this, "_toggleAmPm", (t2) => {
      t2 === "PM" ? (this._isPmEnabled = true, this._isAmEnabled = false) : t2 === "AM" && (this._isPmEnabled = false, this._isAmEnabled = true);
    });
    Tt(this, "_toggleBackgroundColorCircle", (t2) => {
      if (this._modal.querySelector(`${t2}[${B}]`) !== null) {
        p.addStyle(this._circle, {
          backgroundColor: "#1976d2"
        });
        return;
      }
      p.addStyle(this._circle, {
        backgroundColor: "transparent"
      });
    });
    Tt(this, "_toggleClassActive", (t2, { textContent: e2 }, i2) => {
      const n = [...t2].find(
        (o) => Number(o) === Number(e2)
      );
      return i2.forEach((o) => {
        if (!o.hasAttribute(Bt)) {
          if (o.textContent === n) {
            p.addClass(o, this._classes.tipsActive), o.setAttribute(B, "");
            return;
          }
          p.removeClass(o, this._classes.tipsActive), o.removeAttribute(B);
        }
      });
    });
    Tt(this, "_makeMinutesDegrees", (t2, e2) => {
      const { increment: i2 } = this._options;
      return t2 < 0 ? (e2 = Math.round(360 + t2 / 6) % 60, t2 = 360 + Math.round(t2 / 6) * 6) : (e2 = Math.round(t2 / 6) % 60, t2 = Math.round(t2 / 6) * 6), i2 && (t2 = Math.round(t2 / 30) * 30, e2 = Math.round(t2 / 6) * 6 / 6, e2 === 60 && (e2 = "00")), t2 >= 360 && (t2 = 0), {
        degrees: t2,
        minute: e2,
        addDegrees: i2 ? 30 : 6
      };
    });
    Tt(this, "_makeHourDegrees", (t2, e2, i2) => {
      if (t2)
        return this._hasTargetInnerClass(t2) ? e2 < 0 ? (i2 = Math.round(360 + e2 / 30) % 24, e2 = 360 + e2) : (i2 = Math.round(e2 / 30) + 12, i2 === 12 && (i2 = "00")) : e2 < 0 ? (i2 = Math.round(360 + e2 / 30) % 12, e2 = 360 + e2) : (i2 = Math.round(e2 / 30) % 12, (i2 === 0 || i2 > 12) && (i2 = 12)), e2 >= 360 && (e2 = 0), {
          degrees: e2,
          hour: i2,
          addDegrees: 30
        };
    });
    Tt(this, "_makeInnerHoursDegrees", (t2, e2) => (t2 < 0 ? (e2 = Math.round(360 + t2 / 30) % 24, t2 = 360 + t2) : (e2 = Math.round(t2 / 30) + 12, e2 === 12 && (e2 = "00")), {
      degrees: t2,
      hour: e2,
      addDegrees: 30
    }));
    Tt(this, "_getAppendClock", (t2 = [], e2 = `[${le}]`, i2) => {
      let { minTime: n, maxTime: o } = this._options;
      const { inline: r, format12: a, disablePast: l, disableFuture: c } = this._options;
      n = jt(n, l, a), o = Kt(o, c, a);
      const [d, _, f] = R(
        o,
        false
      ), [m, g, b] = R(
        n,
        false
      );
      !r && a && this._isInvalidTimeFormat && !this._AM.hasAttribute(B) && (p.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(B, ""));
      const T = h.findOne(e2), C = 360 / t2.length;
      function w(y) {
        return y * (Math.PI / 180);
      }
      if (T === null)
        return;
      const v = (T.offsetWidth - 32) / 2, E = (T.offsetHeight - 32) / 2, A = v - 4;
      setTimeout(() => {
        let y;
        a && (y = h.findOne(
          `${Ui}[${B}]`
        ).textContent), this._handleDisablingTipsMinTime(
          y,
          b,
          g,
          m
        ), this._handleDisablingTipsMaxTime(
          y,
          f,
          _,
          d
        );
      }, 0), [...t2].forEach((y, S) => {
        const O = w(S * C), k = M("span"), D = M("span");
        D.innerHTML = y, p.addClass(k, this._classes.tips), k.setAttribute(i2, "");
        const x = k.offsetWidth, $ = k.offsetHeight;
        return p.addStyle(k, {
          left: `${v + Math.sin(O) * A - x}px`,
          bottom: `${E + Math.cos(O) * A - $}px`
        }), t2.includes("05") && k.setAttribute(X, ""), t2.includes("13") ? D.setAttribute(Gi, "") : D.setAttribute(Xi, ""), k.appendChild(D), T.appendChild(k);
      });
    });
    this._element = t, this._element && I.setData(t, _s, this), this._document = document, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._currentTime = null, this._toggleButtonId = Ot("timepicker-toggle-"), this.hoursArray = [
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ], this.innerHours = [
      "00",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ], this.minutesArray = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ], this.input = h.findOne("input", this._element), this.dataWithIcon = t.dataset.withIcon, this.dataToggle = t.dataset.toggle, this.customIcon = h.findOne(
      o_,
      this._element
    ), this._checkToggleButton(), this.inputFormatShow = h.findOne(
      n_,
      this._element
    ), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = h.findOne(
      Sr,
      this._element
    ), this.toggleElement = Object.values(
      t.querySelector(Sr).dataset
    )[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format24 && (this._options.format12 = false, this._currentTime = wr(this._inputValue)), this._options.format12 && (this._options.format24 = false, this._currentTime = fe(this._inputValue)), this._options.readOnly && this.input.setAttribute(d_, true), this.inputFormat === "true" && this.inputFormat !== "" && (this._options.format12 = false, this._options.format24 = true, this._currentTime = wr(this._inputValue)), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this.init(), this._isHours = true, this._isMinutes = false, this._isInvalidTimeFormat = false, this._isMouseMove = false, this._isInner = false, this._isAmEnabled = false, this._isPmEnabled = false, this._options.format12 && !this._options.defaultTime && (this._isPmEnabled = true), this._objWithDataOnChange = { degrees: null }, this._scrollBar = new pi();
  }
  // Getters
  static get NAME() {
    return hi;
  }
  // Public
  init() {
    const { format12: t, format24: e, enableValidation: i } = this._options;
    let n, o, r;
    if (this.input.setAttribute(h_, ""), this._currentTime !== void 0) {
      const { hours: a, minutes: l, amOrPm: c } = this._currentTime;
      n = Number(a) < 10 ? 0 : "", o = `${n}${Number(a)}:${l}`, r = c, t ? this.input.value = `${o} ${r}` : e && (this.input.value = `${o}`);
    } else
      n = "", o = "", r = "", this.input.value = "";
    this.input.value.length > 0 && this.input.value !== "" && (this.input.setAttribute(B, ""), u.trigger(this.input, "input")), !(this._options === null && this._element === null) && (i && this._getValidate("keydown change blur focus"), this._handleOpen(), this._listenToToggleKeydown());
  }
  dispose() {
    this._removeModal(), this._element !== null && I.removeData(this._element, _s), setTimeout(() => {
      this._element = null, this._options = null, this.input = null, this._focusTrap = null;
    }, 350), u.off(
      this._document,
      "click",
      `[data-te-toggle='${this.toggleElement}']`
    ), u.off(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`
    );
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  // private
  _checkToggleButton() {
    this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
  }
  _appendToggleButton() {
    const t = qf(
      this._options,
      this._toggleButtonId,
      this._classes
    );
    this.input.insertAdjacentHTML("afterend", t);
  }
  _getDomElements() {
    this._hour = h.findOne(`[${zi}]`), this._minutes = h.findOne(`[${En}]`), this._AM = h.findOne(i_), this._PM = h.findOne(s_), this._wrapper = h.findOne(`[${vn}]`), this._modal = h.findOne(`[${jr}]`), this._hand = h.findOne(`[${Tn}]`), this._circle = h.findOne(`[${Cn}]`), this._clock = h.findOne(`[${le}]`), this._clockInner = h.findOne(
      `[${Je}]`
    );
  }
  _handlerMaxMinHoursOptions(t, e, i, n, o, r) {
    if (!e && !i)
      return true;
    const { format24: a, format12: l, disablePast: c, disableFuture: d } = this._options, { _isAmEnabled: _, _isPmEnabled: f } = this, m = r.keyCode, g = r.target.hasAttribute(Je) || r.target.hasAttribute(at) || r.target.hasAttribute(Gi);
    i = jt(i, c, l), e = Kt(e, d, l), typeof e != "number" && (e = R(e, false)[0]);
    const b = e !== "" ? e * 30 : "", T = i !== "" ? i * 30 : "";
    t < 0 && (t = 360 + t), t = t === 360 ? 0 : t;
    const C = () => {
      const S = document.querySelectorAll(
        `[${Xi}]`
      ), O = document.querySelectorAll(
        `[${Gi}]`
      ), k = e_(this._hour.innerText);
      let D, x, $;
      return m === rt ? x = 1 : m === U && (x = -1), k === 12 && m === rt ? $ = 1 : k === 0 && m === rt ? $ = 13 : k === 0 && m === U ? $ = 23 : k === 13 && m === U ? $ = 0 : k === 1 && m === U ? $ = 12 : $ = k + x, S.forEach((P) => {
        Number(P.textContent) === $ && (D = P);
      }), O.forEach((P) => {
        Number(P.textContent) === $ && (D = P);
      }), !D.parentElement.hasAttribute(Bt);
    }, w = () => {
      const S = i !== "" && i > 12 ? (i - 12) * 30 : "", O = e !== "" && e > 12 ? (e - 12) * 30 : "";
      if (!(S && t < S || O && t > O || e && e < 12))
        return true;
    };
    if (a && r.type !== "keydown" && g)
      return w();
    if (r.type === "keydown")
      return C();
    const v = !o || o === "PM" && f || i !== "" && o === "AM" && _, E = !n || n === "PM" && f || e !== "" && n === "AM" && _, A = () => {
      const S = T === 360 && l ? 0 : T;
      if (i) {
        if (o === "PM" && _ || v && t < S)
          return;
      } else
        return true;
      return true;
    }, y = () => {
      const S = b === 360 && l ? 0 : b;
      if (e) {
        if (n === "AM" && f || E && t > S)
          return;
      } else
        return true;
      return true;
    };
    return A() && y();
  }
  _handleKeyboard() {
    u.on(this._document, ji, "", (t) => {
      let e, i, n;
      const {
        increment: o,
        maxTime: r,
        minTime: a,
        format12: l,
        disablePast: c,
        disableFuture: d
      } = this._options;
      let _ = R(a, false)[0], f = R(r, false)[0];
      const m = R(a, false)[2], g = R(r, false)[2];
      _ = jt(_, c, l), f = Kt(f, d, l), typeof f != "number" && (f = R(f, false)[0]);
      const b = h.findOne(`[${X}]`) === null, T = h.findOne(`[${at}]`) !== null, C = Number(this._hand.style.transform.replace(/[^\d-]/g, "")), w = h.find(
        `[${X}]`,
        this._modal
      ), v = h.find(
        `[${K}]`,
        this._modal
      ), E = h.find(
        `[${at}]`,
        this._modal
      );
      let A = this._makeHourDegrees(t.target, C, e).hour;
      const { degrees: y, addDegrees: S } = this._makeHourDegrees(
        t.target,
        C,
        e
      );
      let { minute: O, degrees: k } = this._makeMinutesDegrees(C, i);
      const D = this._makeMinutesDegrees(
        C,
        i
      ).addDegrees;
      let { hour: x } = this._makeInnerHoursDegrees(
        C,
        n
      );
      if (t.keyCode === Is) {
        const $ = h.findOne(
          `[${fn}]`,
          this._modal
        );
        u.trigger($, "click");
      } else if (b) {
        if (T && (t.keyCode === $e && (this._isInner = false, p.addStyle(this._hand, {
          height: "calc(40% + 1px)"
        }), this._hour.textContent = this._setHourOrMinute(
          A > 12 ? 1 : A
        ), this._toggleClassActive(this.hoursArray, this._hour, v), this._toggleClassActive(this.innerHours, this._hour, E)), t.keyCode === Ie && (this._isInner = true, p.addStyle(this._hand, {
          height: "21.5%"
        }), this._hour.textContent = this._setHourOrMinute(
          x >= 24 || x === "00" ? 0 : x
        ), this._toggleClassActive(this.innerHours, this._hour, E), this._toggleClassActive(
          this.hoursArray,
          this._hour - 1,
          v
        ))), t.keyCode === rt) {
          if (!this._handlerMaxMinHoursOptions(
            y + 30,
            f,
            _,
            g,
            m,
            t
          ))
            return;
          p.addStyle(this._hand, {
            transform: `rotateZ(${y + S}deg)`
          }), this._isInner ? (x += 1, x === 24 ? x = 0 : (x === 25 || x === "001") && (x = 13), this._hour.textContent = this._setHourOrMinute(x), this._toggleClassActive(this.innerHours, this._hour, E)) : (A += 1, this._hour.textContent = this._setHourOrMinute(
            A > 12 ? 1 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, v));
        }
        if (t.keyCode === U) {
          if (!this._handlerMaxMinHoursOptions(
            y - 30,
            f,
            _,
            g,
            m,
            t
          ))
            return;
          p.addStyle(this._hand, {
            transform: `rotateZ(${y - S}deg)`
          }), this._isInner ? (x -= 1, x === 12 ? x = 0 : x === -1 && (x = 23), this._hour.textContent = this._setHourOrMinute(x), this._toggleClassActive(this.innerHours, this._hour, E)) : (A -= 1, this._hour.textContent = this._setHourOrMinute(
            A === 0 ? 12 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, v));
        }
      } else
        t.keyCode === rt && (k += D, p.addStyle(this._hand, {
          transform: `rotateZ(${k}deg)`
        }), O += 1, o && (O += 4, O === "0014" && (O = 5)), this._minutes.textContent = this._setHourOrMinute(
          O > 59 ? 0 : O
        ), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          w
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        )), t.keyCode === U && (k -= D, p.addStyle(this._hand, {
          transform: `rotateZ(${k}deg)`
        }), o ? O -= 5 : O -= 1, O === -1 ? O = 59 : O === -5 && (O = 55), this._minutes.textContent = this._setHourOrMinute(O), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          w
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        ));
    });
  }
  _setActiveClassToTipsOnOpen(t, ...e) {
    if (!this._isInvalidTimeFormat)
      if (this._options.format24) {
        const i = h.find(
          `[${K}]`,
          this._modal
        ), n = h.find(
          `[${at}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t), this._addActiveClassToTip(n, t);
      } else {
        [...e].filter((n) => (n === "PM" ? (p.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(B, "")) : n === "AM" ? (p.addClass(this._AM, this._classes.opacity), this._AM.setAttribute(B, "")) : (p.removeClass(this._AM, this._classes.opacity), p.removeClass(this._PM, this._classes.opacity), this._AM.removeAttribute(B), this._PM.removeAttribute(B)), n));
        const i = h.find(
          `[${K}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t);
      }
  }
  _setTipsAndTimesDependOnInputValue(t, e) {
    const { inline: i, format12: n } = this._options;
    if (this._isInvalidTimeFormat)
      this._hour.textContent = "12", this._minutes.textContent = "00", i || p.addStyle(this._hand, {
        transform: "rotateZ(0deg)"
      }), n && (p.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(B, ""));
    else {
      const o = t > 12 ? t * 30 - 360 : t * 30;
      this._hour.textContent = t, this._minutes.textContent = e, i || (p.addStyle(this._hand, {
        transform: `rotateZ(${o}deg)`
      }), p.addStyle(this._circle, {
        backgroundColor: "#1976d2"
      }), (Number(t) > 12 || t === "00") && p.addStyle(this._hand, {
        height: "21.5%"
      }));
    }
  }
  _listenToToggleKeydown() {
    u.on(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`,
      (t) => {
        t.keyCode === lt && (t.preventDefault(), u.trigger(this.elementToggle, "click"));
      }
    );
  }
  _handleOpen() {
    const t = this._getContainer();
    ee.on(
      this._element,
      "click",
      `[data-te-toggle='${this.toggleElement}']`,
      (e) => {
        if (this._options === null)
          return;
        const i = p.getDataAttribute(this.input, "toggle") !== null ? 200 : 0;
        setTimeout(() => {
          p.addStyle(this.elementToggle, {
            pointerEvents: "none"
          }), this.elementToggle.blur();
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const { modalID: o, inline: r, format12: a } = this._options, [l, c, d] = n, _ = M("div");
          if ((Number(l) > 12 || l === "00") && (this._isInner = true), this.input.blur(), e.target.blur(), _.innerHTML = Gf(this._options, this._classes), p.addClass(_, this._classes.modal), _.setAttribute(jr, ""), _.setAttribute("role", "dialog"), _.setAttribute("tabIndex", "-1"), _.setAttribute("id", o), r ? (this._popper = je(this.input, _, {
            placement: "bottom-start"
          }), t.appendChild(_)) : (t.appendChild(_), this._scrollBar.hide()), this._getDomElements(), this._animations ? this._toggleBackdropAnimation() : p.addClass(this._wrapper, this._classes.opacity), this._setActiveClassToTipsOnOpen(l, c, d), this._appendTimes(), this._setActiveClassToTipsOnOpen(l, c, d), this._setTipsAndTimesDependOnInputValue(l, c), this.input.value === "") {
            const f = h.find(
              `[${K}]`,
              this._modal
            );
            a && (p.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(B, "")), this._hour.textContent = "12", this._minutes.textContent = "00", this._addActiveClassToTip(
              f,
              Number(this._hour.textContent)
            );
          }
          if (this._handleSwitchTimeMode(), this._handleOkButton(), this._handleClose(), r)
            this._handleHoverInlineBtn(), this._handleDocumentClickInline(), this._handleInlineClicks();
          else {
            this._handleSwitchHourMinute(), this._handleClockClick(), this._handleKeyboard();
            const f = document.querySelector(
              `${Ki}[${B}]`
            );
            p.addClass(f, this._classes.opacity), p.addStyle(this._hour, {
              pointerEvents: "none"
            }), p.addStyle(this._minutes, {
              pointerEvents: ""
            });
          }
          this._focusTrap = new bi(this._wrapper, {
            event: "keydown",
            condition: ({ key: f }) => f === "Tab"
          }), this._focusTrap.trap();
        }, i);
      }
    );
  }
  _handleInlineClicks() {
    let t, e;
    const i = (f) => {
      let m = f;
      return m > 59 ? m = 0 : m < 0 && (m = 59), m;
    }, n = (f) => {
      let m = f;
      return this._options.format24 ? (m > 24 ? m = 1 : m < 0 && (m = 23), m > 23 && (m = 0)) : (m > 12 ? m = 1 : m < 1 && (m = 12), m > 12 && (m = 1)), m;
    }, o = (f) => {
      const m = n(f);
      this._hour.textContent = this._setHourOrMinute(m);
    }, r = (f) => {
      const m = i(f);
      this._minutes.textContent = this._setHourOrMinute(m);
    }, a = () => {
      t += 1, o(t);
    }, l = () => {
      e += 1, r(e);
    }, c = () => {
      t -= 1, o(t);
    }, d = () => {
      e -= 1, r(e);
    }, _ = (f) => {
      clearInterval(this._interval), this._interval = setInterval(f, 100);
    };
    ee.on(
      this._modal,
      "click mousedown mouseup touchstart touchend contextmenu",
      `[${mn}], [${gn}]`,
      (f) => {
        t = Number(this._hour.textContent), e = Number(this._minutes.textContent);
        const { target: m, type: g } = f, b = g === "mousedown" || g === "touchstart";
        m.closest(`[${mn}]`) ? m.closest(`[${mn}]`).parentNode.hasAttribute(Vr) ? b ? _(a) : g === "mouseup" || g === "touchend" || g === "contextmenu" ? clearInterval(this._interval) : a() : b ? _(l) : g === "mouseup" || g === "touchend" || g === "contextmenu" ? clearInterval(this._interval) : l() : m.closest(`[${gn}]`) && (m.closest(`[${gn}]`).parentNode.hasAttribute(Vr) ? b ? _(c) : g === "mouseup" || g === "touchend" ? clearInterval(this._interval) : c() : b ? _(d) : g === "mouseup" || g === "touchend" ? clearInterval(this._interval) : d());
      }
    ), u.on(window, ji, (f) => {
      const m = f.code, g = document.activeElement.hasAttribute(zi), b = document.activeElement.hasAttribute(
        En
      ), T = document.activeElement === document.body;
      switch (t = Number(this._hour.textContent), e = Number(this._minutes.textContent), m) {
        case "ArrowUp":
          f.preventDefault(), T || g ? (this._hour.focus(), a()) : b && l();
          break;
        case "ArrowDown":
          f.preventDefault(), T || g ? (this._hour.focus(), c()) : b && d();
          break;
      }
    });
  }
  _handleClose() {
    u.on(
      this._modal,
      "click",
      `[${vn}], [${fn}], [${Br}]`,
      ({ target: t }) => {
        const { closeModalOnBackdropClick: e } = this._options, i = () => {
          var n;
          p.addStyle(this.elementToggle, {
            pointerEvents: "auto"
          }), this._animations && this._toggleBackdropAnimation(true), this._removeModal(), (n = this._focusTrap) == null || n.disable(), this._focusTrap = null, this.elementToggle ? this.elementToggle.focus() : this.input && this.input.focus();
        };
        if (t.hasAttribute(Br)) {
          this._toggleAmPm("PM"), this.input.value = "", this.input.removeAttribute(B);
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const [o, r, a] = n;
          this._setTipsAndTimesDependOnInputValue("12", "00"), this._setActiveClassToTipsOnOpen(o, r, a), this._hour.click();
        } else
          (t.hasAttribute(fn) || t.hasAttribute(_n) || t.hasAttribute(vn) && e) && i();
      }
    );
  }
  showValueInput() {
    return this.input.value;
  }
  _handleOkButton() {
    ee.on(
      this._modal,
      "click",
      `[${_n}]`,
      () => {
        let { maxTime: t, minTime: e } = this._options;
        const {
          format12: i,
          format24: n,
          readOnly: o,
          focusInputAfterApprove: r,
          disablePast: a,
          disableFuture: l
        } = this._options, c = this._document.querySelector(
          `${Ui}[${B}]`
        ), d = `${this._hour.textContent}:${this._minutes.textContent}`, _ = Number(this._hour.textContent), f = _ === 12 && i ? 0 : _, m = Number(this._minutes.textContent);
        e = jt(e, a, i), t = Kt(t, l, i);
        let [g, b, T] = R(
          t,
          false
        ), [C, w, v] = R(
          e,
          false
        );
        C = C === "12" && i ? "00" : C, g = g === "12" && i ? "00" : g;
        const E = f < Number(C), A = f > Number(g);
        let y = true;
        c && (y = T === c.textContent);
        let S = true;
        c && (S = v === c.textContent);
        const O = m > b && f === Number(g), k = m < w && f === Number(C);
        if (this.input.setAttribute(B, ""), p.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), t !== "") {
          if (y && (A || O))
            return;
          if (T === "AM" && c.textContent === "PM")
            return;
        }
        e !== "" && (S && (E || k) || v === "PM" && c.textContent === "AM") || Zf(
          this._options,
          this.input,
          this._hour.textContent
        ) !== void 0 && (this._isInvalidTimeFormat && this.input.removeAttribute(bn), !o && r && this.input.focus(), p.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), n ? this.input.value = d : c === null ? this.input.value = `${d} PM` : this.input.value = `${d} ${c.textContent}`, this._animations && this._toggleBackdropAnimation(true), this._removeModal(), u.trigger(this.input, "input.te.timepicker"), u.trigger(this.input, "input"));
      }
    );
  }
  _handleHoverInlineBtn() {
    ee.on(
      this._modal,
      "mouseover mouseleave",
      `[${c_}]`,
      ({ type: t, target: e }) => {
        const i = h.find(
          `[${a_}]`,
          this._modal
        ), n = h.find(
          `[${l_}]`,
          this._modal
        ), o = (l, c) => l.forEach((d) => {
          if (c) {
            p.addClass(d, this._classes.opacity), d.setAttribute(B, "");
            return;
          }
          p.removeClass(d, this._classes.opacity), d.removeAttribute(B);
        }), a = e.hasAttribute(zi) ? i : n;
        o(a, t === "mouseover");
      }
    );
  }
  _handleDocumentClickInline() {
    u.on(document, Dr, ({ target: t }) => {
      if (this._modal && !this._modal.contains(t) && !t.hasAttribute(r_)) {
        if (clearInterval(this._interval), p.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), this._removeModal(), !this._animations)
          return;
        this._toggleBackdropAnimation(true);
      }
    });
  }
  _handleSwitchHourMinute() {
    Qf(
      "click",
      Ki,
      this._classes
    ), u.on(
      this._modal,
      "click",
      Ki,
      () => {
        const { format24: t } = this._options, e = h.find(
          Ki,
          this._modal
        ), i = h.find(
          `[${X}]`,
          this._modal
        ), n = h.find(
          `[${K}]`,
          this._modal
        ), o = h.find(
          `[${at}]`,
          this._modal
        ), r = Number(this._hour.textContent), a = Number(this._minutes.textContent), l = (c, d) => {
          n.forEach((f) => f.remove()), i.forEach((f) => f.remove()), p.addClass(this._hand, this._classes.transform), setTimeout(() => {
            p.removeClass(this._hand, this._classes.transform);
          }, 401), this._getAppendClock(c, `[${le}]`, d);
          const _ = () => {
            const f = h.find(
              `[${K}]`,
              this._modal
            ), m = h.find(
              `[${X}]`,
              this._modal
            );
            this._addActiveClassToTip(f, r), this._addActiveClassToTip(m, a);
          };
          if (!t)
            setTimeout(() => {
              _();
            }, 401);
          else {
            const f = h.find(
              `[${at}]`,
              this._modal
            );
            setTimeout(() => {
              this._addActiveClassToTip(f, r), _();
            }, 401);
          }
        };
        e.forEach((c) => {
          c.hasAttribute(B) && (c.hasAttribute(En) ? (p.addClass(this._hand, this._classes.transform), p.addStyle(this._hand, {
            transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
            height: "calc(40% + 1px)"
          }), t && o.length > 0 && o.forEach((d) => d.remove()), l(
            this.minutesArray,
            X
          ), this._hour.style.pointerEvents = "", this._minutes.style.pointerEvents = "none") : c.hasAttribute(zi) && (p.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30}deg)`
          }), Number(this._hour.textContent) > 12 ? (p.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30 - 360}deg)`,
            height: "21.5%"
          }), Number(this._hour.textContent) > 12 && p.addStyle(this._hand, {
            height: "21.5%"
          })) : p.addStyle(this._hand, {
            height: "calc(40% + 1px)"
          }), t && this._getAppendClock(
            this.innerHours,
            `[${Je}]`,
            at
          ), o.length > 0 && o.forEach((d) => d.remove()), l(
            this.hoursArray,
            K
          ), p.addStyle(this._hour, {
            pointerEvents: "none"
          }), p.addStyle(this._minutes, {
            pointerEvents: ""
          })));
        });
      }
    );
  }
  _handleDisablingTipsMaxTime(t, e, i, n) {
    if (!this._options.maxTime && !this._options.disableFuture)
      return;
    const o = h.find(
      `[${K}]`
    ), r = h.find(
      `[${at}]`
    ), a = h.find(
      `[${X}]`
    );
    if (!e || e === t) {
      Or(
        r,
        n,
        this._classes,
        this._options.format12
      ), Or(
        o,
        n,
        this._classes,
        this._options.format12
      ), Jf(
        a,
        i,
        n,
        this._hour.textContent,
        this._classes,
        this._options.format12
      );
      return;
    }
    e === "AM" && t === "PM" && (o.forEach((l) => {
      p.addClass(l, this._classes.tipsDisabled), l.setAttribute(Bt, "");
    }), a.forEach((l) => {
      p.addClass(l, this._classes.tipsDisabled), l.setAttribute(Bt, "");
    }));
  }
  _handleDisablingTipsMinTime(t, e, i, n) {
    if (!this._options.minTime && !this._options.disablePast)
      return;
    const o = h.find(
      `[${K}]`
    ), r = h.find(
      `[${at}]`
    ), a = h.find(
      `[${X}]`
    );
    !e || e === t ? (xr(
      o,
      n,
      this._classes,
      this._options.format12
    ), xr(
      r,
      n,
      this._classes,
      this._options.format12
    ), t_(
      a,
      i,
      n,
      this._hour.textContent,
      this._classes,
      this._options.format12
    )) : e === "PM" && t === "AM" && (o.forEach((l) => {
      p.addClass(l, this._classes.tipsDisabled), l.setAttribute(Bt, "");
    }), a.forEach((l) => {
      p.addClass(l, this._classes.tipsDisabled), l.setAttribute(Bt, "");
    }));
  }
  _handleSwitchTimeMode() {
    u.on(
      document,
      "click",
      Ui,
      ({ target: t }) => {
        let { maxTime: e, minTime: i } = this._options;
        const { disablePast: n, disableFuture: o, format12: r } = this._options;
        i = jt(i, n, r), e = Kt(e, o, r);
        const [a, l, c] = R(
          e,
          false
        ), [d, _, f] = R(
          i,
          false
        ), m = h.find(
          `[${K}]`
        ), g = h.find(
          `[${X}]`
        );
        (() => {
          m.forEach((T) => {
            p.removeClass(T, this._classes.tipsDisabled), T.removeAttribute(Bt);
          }), g.forEach((T) => {
            p.removeClass(T, this._classes.tipsDisabled), T.removeAttribute(Bt);
          });
        })(), this._handleDisablingTipsMinTime(
          t.textContent,
          f,
          _,
          d
        ), this._handleDisablingTipsMaxTime(
          t.textContent,
          c,
          l,
          a
        ), this._toggleAmPm(t.textContent), t.hasAttribute(B) || (h.find(
          Ui
        ).forEach((C) => {
          C.hasAttribute(B) && (p.removeClass(C, this._classes.opacity), C.removeAttribute(B));
        }), p.addClass(t, this._classes.opacity), t.setAttribute(B, ""));
      }
    );
  }
  _handleClockClick() {
    let { maxTime: t, minTime: e } = this._options;
    const { disablePast: i, disableFuture: n, format12: o } = this._options;
    e = jt(e, i, o), t = Kt(t, n, o);
    const r = R(t, false)[2], a = R(e, false)[2], l = R(t, false)[0], c = R(e, false)[0], d = h.findOne(
      `[${Fr}]`
    );
    ee.on(
      document,
      `${Ir} ${$r} ${Lr} ${Mr} ${Nr} ${Hr} ${Rr} ${Pr}`,
      "",
      (_) => {
        Yi() || _.preventDefault();
        const { type: f, target: m } = _, { closeModalOnMinutesClick: g, switchHoursToMinutesOnClick: b } = this._options, T = h.findOne(
          `[${X}]`,
          this._modal
        ) !== null, C = h.findOne(
          `[${K}]`,
          this._modal
        ) !== null, w = h.findOne(
          `[${at}]`,
          this._modal
        ) !== null, v = h.find(
          `[${X}]`,
          this._modal
        ), E = kr(_, d), A = d.offsetWidth / 2;
        let y = Math.atan2(E.y - A, E.x - A);
        if (Yi()) {
          const D = kr(_, d, true);
          y = Math.atan2(D.y - A, D.x - A);
        }
        let S = null, O = null, k = null;
        if (f === "mousedown" || f === "mousemove" || f === "touchmove" || f === "touchstart")
          (f === "mousedown" || f === "touchstart" || f === "touchmove") && (this._hasTargetInnerClass(m) || m.hasAttribute(Fr) || m.hasAttribute(le) || m.hasAttribute(X) || m.hasAttribute(K) || m.hasAttribute(Cn) || m.hasAttribute(Tn) || m.hasAttribute(Yr) || m.hasAttribute(Xi)) && (this._isMouseMove = true, Yi() && _.touches && (S = _.touches[0].clientX, O = _.touches[0].clientY, k = document.elementFromPoint(S, O)));
        else if (f === "mouseup" || f === "touchend") {
          if (this._isMouseMove = false, this._hasTargetInnerClass(m) || m.hasAttribute(le) || m.hasAttribute(K) || m.hasAttribute(Cn) || m.hasAttribute(Tn) || m.hasAttribute(Yr) || m.hasAttribute(Xi)) {
            if ((C || w) && b) {
              const D = Number(this._hour.textContent) > l || Number(this._hour.textContent) < c;
              if (this._options.format24 && l !== "" && c !== "" && D)
                return;
              if (this._options.format24 && c !== "" && Number(this._hour.textContent) < c)
                return;
            }
            u.trigger(this._minutes, "click");
          }
          if (T && g) {
            const D = h.findOne(
              `[${_n}]`,
              this._modal
            );
            u.trigger(D, "click");
          }
        }
        if (T) {
          let D;
          const x = Math.trunc(y * 180 / Math.PI) + 90, { degrees: $, minute: P } = this._makeMinutesDegrees(x, D);
          if (this._handlerMaxMinMinutesOptions($, P) === void 0)
            return;
          const { degrees: tt, minute: et } = this._handlerMaxMinMinutesOptions($, P);
          if (this._isMouseMove) {
            if (p.addStyle(this._hand, {
              transform: `rotateZ(${tt}deg)`
            }), et === void 0)
              return;
            const z = () => et >= 10 || et === "00" ? et : `0${et}`;
            this._minutes.textContent = z(), this._toggleClassActive(
              this.minutesArray,
              this._minutes,
              v
            ), this._toggleBackgroundColorCircle(
              `[${X}]`
            ), this._objWithDataOnChange.degreesMinutes = tt, this._objWithDataOnChange.minutes = et;
          }
        }
        if (C || w) {
          let D, x = Math.trunc(y * 180 / Math.PI) + 90;
          if (x = Math.round(x / 30) * 30, p.addStyle(this._circle, {
            backgroundColor: "#1976d2"
          }), this._makeHourDegrees(m, x, D) === void 0)
            return;
          const $ = () => {
            if (Yi() && x && k) {
              const { degrees: P, hour: tt } = this._makeHourDegrees(k, x, D);
              return this._handleMoveHand(
                k,
                tt,
                P
              );
            } else {
              const { degrees: P, hour: tt } = this._makeHourDegrees(m, x, D);
              return this._handleMoveHand(m, tt, P);
            }
          };
          this._objWithDataOnChange.degreesHours = x, this._handlerMaxMinHoursOptions(
            x,
            l,
            c,
            r,
            a,
            _
          ) && $();
        }
        _.stopPropagation();
      }
    );
  }
  _hasTargetInnerClass(t) {
    return t.hasAttribute(Je) || t.hasAttribute(at) || t.hasAttribute(Gi);
  }
  _handleMoveHand(t, e, i) {
    const n = h.find(
      `[${K}]`,
      this._modal
    ), o = h.find(
      `[${at}]`,
      this._modal
    );
    this._isMouseMove && (this._hasTargetInnerClass(t) ? p.addStyle(this._hand, {
      height: "21.5%"
    }) : p.addStyle(this._hand, {
      height: "calc(40% + 1px)"
    }), p.addStyle(this._hand, {
      transform: `rotateZ(${i}deg)`
    }), this._hour.textContent = e >= 10 || e === "00" ? e : `0${e}`, this._toggleClassActive(this.hoursArray, this._hour, n), this._toggleClassActive(this.innerHours, this._hour, o), this._objWithDataOnChange.hour = e >= 10 || e === "00" ? e : `0${e}`);
  }
  _handlerMaxMinMinutesOptions(t, e) {
    let { maxTime: i, minTime: n } = this._options;
    const { format12: o, increment: r, disablePast: a, disableFuture: l } = this._options;
    n = jt(n, a, o), i = Kt(i, l, o);
    const c = R(i, false)[1], d = R(n, false)[1], _ = R(i, false)[0], f = R(n, false)[0], m = f === "12" && o ? "0" : f, g = _ === "12" && o ? "0" : _, b = R(i, false)[2], T = R(n, false)[2], C = c !== "" ? c * 6 : "", w = d !== "" ? d * 6 : "", v = Number(this._hour.textContent), E = v === 12 && o ? 0 : v;
    if (!b && !T) {
      if (i !== "" && n !== "") {
        if (Number(g) === E && t > C || Number(m) === E && t < w)
          return t;
      } else if (n !== "" && E <= Number(m)) {
        if (t <= w - 6)
          return t;
      } else if (i !== "" && E >= Number(g) && t >= C + 6)
        return t;
    } else {
      if (n !== "") {
        if (T === "PM" && this._isAmEnabled)
          return;
        if (T === "PM" && this._isPmEnabled) {
          if (E < Number(m))
            return;
          if (E <= Number(m) && t <= w - 6)
            return t;
        } else if (T === "AM" && this._isAmEnabled) {
          if (E < Number(m))
            return;
          if (E <= Number(m) && t <= w - 6)
            return t;
        }
      }
      if (i !== "") {
        if (b === "AM" && this._isPmEnabled)
          return;
        if (b === "PM" && this._isPmEnabled) {
          if (E >= Number(g) && t >= C + 6)
            return t;
        } else if (b === "AM" && this._isAmEnabled && E >= Number(g) && t >= C + 6)
          return t;
      }
    }
    return r && (t = Math.round(t / 30) * 30), t < 0 ? t = 360 + t : t >= 360 && (t = 0), {
      degrees: t,
      minute: e
    };
  }
  _removeModal() {
    this._animations ? setTimeout(() => {
      this._removeModalElements(), this._scrollBar.reset();
    }, 300) : (this._removeModalElements(), this._scrollBar.reset()), ee.off(
      this._document,
      `${Dr} ${ji} ${Ir} ${$r} ${Lr} ${Mr} ${Nr} ${Hr} ${Rr} ${Pr}`
    ), u.off(window, ji);
  }
  _removeModalElements() {
    this._modal && this._modal.remove();
  }
  _toggleBackdropAnimation(t = false) {
    t ? this._wrapper.classList.add("animate-[fade-out_350ms_ease-in-out]") : (this._wrapper.classList.add("animate-[fade-in_350ms_ease-in-out]"), this._options.inline || p.addClass(this._clock, this._classes.clockAnimation)), setTimeout(() => {
      this._wrapper.classList.remove(
        "animate-[fade-out_350ms_ease-in-out]",
        "animate-[fade-in_350ms_ease-in-out]"
      );
    }, 351);
  }
  _addActiveClassToTip(t, e) {
    t.forEach((i) => {
      Number(i.textContent) === Number(e) && (p.addClass(i, this._classes.tipsActive), i.setAttribute(B, ""));
    });
  }
  _setHourOrMinute(t) {
    return t < 10 ? `0${t}` : t;
  }
  _appendTimes() {
    const { format24: t } = this._options;
    if (t) {
      this._getAppendClock(
        this.hoursArray,
        `[${le}]`,
        K
      ), this._getAppendClock(
        this.innerHours,
        `[${Je}]`,
        at
      );
      return;
    }
    this._getAppendClock(
      this.hoursArray,
      `[${le}]`,
      K
    );
  }
  _getConfig(t) {
    const e = p.getDataAttributes(this._element);
    return t = {
      ...p_,
      ...e,
      ...t
    }, N(hi, t, f_), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...__,
      ...e,
      ...t
    }, N(hi, t, m_), t;
  }
  _getContainer() {
    return h.findOne(this._options.container);
  }
  _getValidate(t) {
    const { invalidLabel: e, format24: i, format12: n, appendValidationInfo: o } = this._options;
    let r;
    o && (r = M("div"), r.setAttribute(Wr, ""), r.innerHTML = e), ee.on(this.input, t, ({ target: a }) => {
      if (this._options === null || this.input.value === "")
        return;
      const l = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, c = /^([01]\d|2[0-3])(:[0-5]\d)$/, d = l.test(a.value);
      if (c.test(a.value) !== true && i || d !== true && n) {
        o && (this.input.setAttribute(bn, ""), this.input.parentNode.insertBefore(
          r,
          this.input.nextSibling
        )), p.addStyle(a, { marginBottom: 0 }), p.addStyle(r, { bottom: "-23px" }), this._isInvalidTimeFormat = true;
        return;
      }
      this.input.removeAttribute(bn), this._isInvalidTimeFormat = false;
      const f = h.findOne(
        `[${Wr}]`
      );
      f !== null && f.remove();
    });
  }
  // Static
  static getInstance(t) {
    return I.getData(t, _s);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
function xt(s) {
  return getComputedStyle(s);
}
function ot(s, t) {
  for (var e in t) {
    var i = t[e];
    typeof i == "number" && (i = i + "px"), s.style[e] = i;
  }
  return s;
}
function qi(s) {
  var t = document.createElement("div");
  return t.className = s, t;
}
var Kr = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function zt(s, t) {
  if (!Kr)
    throw new Error("No element matching method supported");
  return Kr.call(s, t);
}
function Se(s) {
  s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s);
}
function Ur(s, t) {
  return Array.prototype.filter.call(
    s.children,
    function(e) {
      return zt(e, t);
    }
  );
}
var j = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function(s) {
      return "ps__thumb-" + s;
    },
    rail: function(s) {
      return "ps__rail-" + s;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function(s) {
      return "ps--active-" + s;
    },
    scrolling: function(s) {
      return "ps--scrolling-" + s;
    }
  }
};
var yl = { x: null, y: null };
function wl(s, t) {
  var e = s.element.classList, i = j.state.scrolling(t);
  e.contains(i) ? clearTimeout(yl[t]) : e.add(i);
}
function kl(s, t) {
  yl[t] = setTimeout(
    function() {
      return s.isAlive && s.element.classList.remove(j.state.scrolling(t));
    },
    s.settings.scrollingThreshold
  );
}
function g_(s, t) {
  wl(s, t), kl(s, t);
}
var Ei = function(t) {
  this.element = t, this.handlers = {};
};
var Ol = { isEmpty: { configurable: true } };
Ei.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, false);
};
Ei.prototype.unbind = function(t, e) {
  var i = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? true : (i.element.removeEventListener(t, n, false), false);
  });
};
Ei.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Ol.isEmpty.get = function() {
  var s = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return s.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(Ei.prototype, Ol);
var Ue = function() {
  this.eventElements = [];
};
Ue.prototype.eventElement = function(t) {
  var e = this.eventElements.filter(function(i) {
    return i.element === t;
  })[0];
  return e || (e = new Ei(t), this.eventElements.push(e)), e;
};
Ue.prototype.bind = function(t, e, i) {
  this.eventElement(t).bind(e, i);
};
Ue.prototype.unbind = function(t, e, i) {
  var n = this.eventElement(t);
  n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
};
Ue.prototype.unbindAll = function() {
  this.eventElements.forEach(function(t) {
    return t.unbindAll();
  }), this.eventElements = [];
};
Ue.prototype.once = function(t, e, i) {
  var n = this.eventElement(t), o = function(r) {
    n.unbind(e, o), i(r);
  };
  n.bind(e, o);
};
function Qi(s) {
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(s);
  var t = document.createEvent("CustomEvent");
  return t.initCustomEvent(s, false, false, void 0), t;
}
function ys(s, t, e, i, n) {
  i === void 0 && (i = true), n === void 0 && (n = false);
  var o;
  if (t === "top")
    o = [
      "contentHeight",
      "containerHeight",
      "scrollTop",
      "y",
      "up",
      "down"
    ];
  else if (t === "left")
    o = [
      "contentWidth",
      "containerWidth",
      "scrollLeft",
      "x",
      "left",
      "right"
    ];
  else
    throw new Error("A proper axis should be provided");
  b_(s, e, o, i, n);
}
function b_(s, t, e, i, n) {
  var o = e[0], r = e[1], a = e[2], l = e[3], c = e[4], d = e[5];
  i === void 0 && (i = true), n === void 0 && (n = false);
  var _ = s.element;
  s.reach[l] = null, _[a] < 1 && (s.reach[l] = "start"), _[a] > s[o] - s[r] - 1 && (s.reach[l] = "end"), t && (_.dispatchEvent(Qi("ps-scroll-" + l)), t < 0 ? _.dispatchEvent(Qi("ps-scroll-" + c)) : t > 0 && _.dispatchEvent(Qi("ps-scroll-" + d)), i && g_(s, l)), s.reach[l] && (t || n) && _.dispatchEvent(Qi("ps-" + l + "-reach-" + s.reach[l]));
}
function W(s) {
  return parseInt(s, 10) || 0;
}
function v_(s) {
  return zt(s, "input,[contenteditable]") || zt(s, "select,[contenteditable]") || zt(s, "textarea,[contenteditable]") || zt(s, "button,[contenteditable]");
}
function E_(s) {
  var t = xt(s);
  return W(t.width) + W(t.paddingLeft) + W(t.paddingRight) + W(t.borderLeftWidth) + W(t.borderRightWidth);
}
var ke = {
  isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
};
function Mt(s) {
  var t = s.element, e = Math.floor(t.scrollTop), i = t.getBoundingClientRect();
  s.containerWidth = Math.round(i.width), s.containerHeight = Math.round(i.height), s.contentWidth = t.scrollWidth, s.contentHeight = t.scrollHeight, t.contains(s.scrollbarXRail) || (Ur(t, j.element.rail("x")).forEach(
    function(n) {
      return Se(n);
    }
  ), t.appendChild(s.scrollbarXRail)), t.contains(s.scrollbarYRail) || (Ur(t, j.element.rail("y")).forEach(
    function(n) {
      return Se(n);
    }
  ), t.appendChild(s.scrollbarYRail)), !s.settings.suppressScrollX && s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth ? (s.scrollbarXActive = true, s.railXWidth = s.containerWidth - s.railXMarginWidth, s.railXRatio = s.containerWidth / s.railXWidth, s.scrollbarXWidth = zr(
    s,
    W(s.railXWidth * s.containerWidth / s.contentWidth)
  ), s.scrollbarXLeft = W(
    (s.negativeScrollAdjustment + t.scrollLeft) * (s.railXWidth - s.scrollbarXWidth) / (s.contentWidth - s.containerWidth)
  )) : s.scrollbarXActive = false, !s.settings.suppressScrollY && s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight ? (s.scrollbarYActive = true, s.railYHeight = s.containerHeight - s.railYMarginHeight, s.railYRatio = s.containerHeight / s.railYHeight, s.scrollbarYHeight = zr(
    s,
    W(s.railYHeight * s.containerHeight / s.contentHeight)
  ), s.scrollbarYTop = W(
    e * (s.railYHeight - s.scrollbarYHeight) / (s.contentHeight - s.containerHeight)
  )) : s.scrollbarYActive = false, s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth && (s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth), s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight && (s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight), T_(t, s), s.scrollbarXActive ? t.classList.add(j.state.active("x")) : (t.classList.remove(j.state.active("x")), s.scrollbarXWidth = 0, s.scrollbarXLeft = 0, t.scrollLeft = s.isRtl === true ? s.contentWidth : 0), s.scrollbarYActive ? t.classList.add(j.state.active("y")) : (t.classList.remove(j.state.active("y")), s.scrollbarYHeight = 0, s.scrollbarYTop = 0, t.scrollTop = 0);
}
function zr(s, t) {
  return s.settings.minScrollbarLength && (t = Math.max(t, s.settings.minScrollbarLength)), s.settings.maxScrollbarLength && (t = Math.min(t, s.settings.maxScrollbarLength)), t;
}
function T_(s, t) {
  var e = { width: t.railXWidth }, i = Math.floor(s.scrollTop);
  t.isRtl ? e.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth - t.contentWidth : e.left = s.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - i : e.top = t.scrollbarXTop + i, ot(t.scrollbarXRail, e);
  var n = { top: i, height: t.railYHeight };
  t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + s.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - s.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + s.scrollLeft, ot(t.scrollbarYRail, n), ot(t.scrollbarX, {
    left: t.scrollbarXLeft,
    width: t.scrollbarXWidth - t.railBorderXWidth
  }), ot(t.scrollbarY, {
    top: t.scrollbarYTop,
    height: t.scrollbarYHeight - t.railBorderYWidth
  });
}
function C_(s) {
  s.element, s.event.bind(s.scrollbarY, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarYRail, "mousedown", function(t) {
    var e = t.pageY - window.pageYOffset - s.scrollbarYRail.getBoundingClientRect().top, i = e > s.scrollbarYTop ? 1 : -1;
    s.element.scrollTop += i * s.containerHeight, Mt(s), t.stopPropagation();
  }), s.event.bind(s.scrollbarX, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarXRail, "mousedown", function(t) {
    var e = t.pageX - window.pageXOffset - s.scrollbarXRail.getBoundingClientRect().left, i = e > s.scrollbarXLeft ? 1 : -1;
    s.element.scrollLeft += i * s.containerWidth, Mt(s), t.stopPropagation();
  });
}
function A_(s) {
  Xr(s, [
    "containerWidth",
    "contentWidth",
    "pageX",
    "railXWidth",
    "scrollbarX",
    "scrollbarXWidth",
    "scrollLeft",
    "x",
    "scrollbarXRail"
  ]), Xr(s, [
    "containerHeight",
    "contentHeight",
    "pageY",
    "railYHeight",
    "scrollbarY",
    "scrollbarYHeight",
    "scrollTop",
    "y",
    "scrollbarYRail"
  ]);
}
function Xr(s, t) {
  var e = t[0], i = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], c = t[7], d = t[8], _ = s.element, f = null, m = null, g = null;
  function b(w) {
    w.touches && w.touches[0] && (w[n] = w.touches[0].pageY), _[l] = f + g * (w[n] - m), wl(s, c), Mt(s), w.stopPropagation(), w.type.startsWith("touch") && w.changedTouches.length > 1 && w.preventDefault();
  }
  function T() {
    kl(s, c), s[d].classList.remove(j.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", b);
  }
  function C(w, v) {
    f = _[l], v && w.touches && (w[n] = w.touches[0].pageY), m = w[n], g = (s[i] - s[e]) / (s[o] - s[a]), v ? s.event.bind(s.ownerDocument, "touchmove", b) : (s.event.bind(s.ownerDocument, "mousemove", b), s.event.once(s.ownerDocument, "mouseup", T), w.preventDefault()), s[d].classList.add(j.state.clicking), w.stopPropagation();
  }
  s.event.bind(s[r], "mousedown", function(w) {
    C(w);
  }), s.event.bind(s[r], "touchstart", function(w) {
    C(w, true);
  });
}
function y_(s) {
  var t = s.element, e = function() {
    return zt(t, ":hover");
  }, i = function() {
    return zt(s.scrollbarX, ":focus") || zt(s.scrollbarY, ":focus");
  };
  function n(o, r) {
    var a = Math.floor(t.scrollTop);
    if (o === 0) {
      if (!s.scrollbarYActive)
        return false;
      if (a === 0 && r > 0 || a >= s.contentHeight - s.containerHeight && r < 0)
        return !s.settings.wheelPropagation;
    }
    var l = t.scrollLeft;
    if (r === 0) {
      if (!s.scrollbarXActive)
        return false;
      if (l === 0 && o < 0 || l >= s.contentWidth - s.containerWidth && o > 0)
        return !s.settings.wheelPropagation;
    }
    return true;
  }
  s.event.bind(s.ownerDocument, "keydown", function(o) {
    if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !i())) {
      var r = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
      if (r) {
        if (r.tagName === "IFRAME")
          r = r.contentDocument.activeElement;
        else
          for (; r.shadowRoot; )
            r = r.shadowRoot.activeElement;
        if (v_(r))
          return;
      }
      var a = 0, l = 0;
      switch (o.which) {
        case 37:
          o.metaKey ? a = -s.contentWidth : o.altKey ? a = -s.containerWidth : a = -30;
          break;
        case 38:
          o.metaKey ? l = s.contentHeight : o.altKey ? l = s.containerHeight : l = 30;
          break;
        case 39:
          o.metaKey ? a = s.contentWidth : o.altKey ? a = s.containerWidth : a = 30;
          break;
        case 40:
          o.metaKey ? l = -s.contentHeight : o.altKey ? l = -s.containerHeight : l = -30;
          break;
        case 32:
          o.shiftKey ? l = s.containerHeight : l = -s.containerHeight;
          break;
        case 33:
          l = s.containerHeight;
          break;
        case 34:
          l = -s.containerHeight;
          break;
        case 36:
          l = s.contentHeight;
          break;
        case 35:
          l = -s.contentHeight;
          break;
        default:
          return;
      }
      s.settings.suppressScrollX && a !== 0 || s.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Mt(s), n(a, l) && o.preventDefault());
    }
  });
}
function w_(s) {
  var t = s.element;
  function e(r, a) {
    var l = Math.floor(t.scrollTop), c = t.scrollTop === 0, d = l + t.offsetHeight === t.scrollHeight, _ = t.scrollLeft === 0, f = t.scrollLeft + t.offsetWidth === t.scrollWidth, m;
    return Math.abs(a) > Math.abs(r) ? m = c || d : m = _ || f, m ? !s.settings.wheelPropagation : true;
  }
  function i(r) {
    var a = r.deltaX, l = -1 * r.deltaY;
    return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [-l, -a] : [a, l];
  }
  function n(r, a, l) {
    if (!ke.isWebKit && t.querySelector("select:focus"))
      return true;
    if (!t.contains(r))
      return false;
    for (var c = r; c && c !== t; ) {
      if (c.classList.contains(j.element.consuming))
        return true;
      var d = xt(c);
      if (l && d.overflowY.match(/(scroll|auto)/)) {
        var _ = c.scrollHeight - c.clientHeight;
        if (_ > 0 && (c.scrollTop > 0 && l < 0 || c.scrollTop < _ && l > 0))
          return true;
      }
      if (a && d.overflowX.match(/(scroll|auto)/)) {
        var f = c.scrollWidth - c.clientWidth;
        if (f > 0 && (c.scrollLeft > 0 && a < 0 || c.scrollLeft < f && a > 0))
          return true;
      }
      c = c.parentNode;
    }
    return false;
  }
  function o(r) {
    var a = i(r), l = a[0], c = a[1];
    if (!n(r.target, l, c)) {
      var d = false;
      s.settings.useBothWheelAxes ? s.scrollbarYActive && !s.scrollbarXActive ? (c ? t.scrollTop -= c * s.settings.wheelSpeed : t.scrollTop += l * s.settings.wheelSpeed, d = true) : s.scrollbarXActive && !s.scrollbarYActive && (l ? t.scrollLeft += l * s.settings.wheelSpeed : t.scrollLeft -= c * s.settings.wheelSpeed, d = true) : (t.scrollTop -= c * s.settings.wheelSpeed, t.scrollLeft += l * s.settings.wheelSpeed), Mt(s), d = d || e(l, c), d && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
    }
  }
  typeof window.onwheel < "u" ? s.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && s.event.bind(t, "mousewheel", o);
}
function k_(s) {
  if (!ke.supportsTouch && !ke.supportsIePointer)
    return;
  var t = s.element;
  function e(g, b) {
    var T = Math.floor(t.scrollTop), C = t.scrollLeft, w = Math.abs(g), v = Math.abs(b);
    if (v > w) {
      if (b < 0 && T === s.contentHeight - s.containerHeight || b > 0 && T === 0)
        return window.scrollY === 0 && b > 0 && ke.isChrome;
    } else if (w > v && (g < 0 && C === s.contentWidth - s.containerWidth || g > 0 && C === 0))
      return true;
    return true;
  }
  function i(g, b) {
    t.scrollTop -= b, t.scrollLeft -= g, Mt(s);
  }
  var n = {}, o = 0, r = {}, a = null;
  function l(g) {
    return g.targetTouches ? g.targetTouches[0] : g;
  }
  function c(g) {
    return g.pointerType && g.pointerType === "pen" && g.buttons === 0 ? false : !!(g.targetTouches && g.targetTouches.length === 1 || g.pointerType && g.pointerType !== "mouse" && g.pointerType !== g.MSPOINTER_TYPE_MOUSE);
  }
  function d(g) {
    if (c(g)) {
      var b = l(g);
      n.pageX = b.pageX, n.pageY = b.pageY, o = (/* @__PURE__ */ new Date()).getTime(), a !== null && clearInterval(a);
    }
  }
  function _(g, b, T) {
    if (!t.contains(g))
      return false;
    for (var C = g; C && C !== t; ) {
      if (C.classList.contains(j.element.consuming))
        return true;
      var w = xt(C);
      if (T && w.overflowY.match(/(scroll|auto)/)) {
        var v = C.scrollHeight - C.clientHeight;
        if (v > 0 && (C.scrollTop > 0 && T < 0 || C.scrollTop < v && T > 0))
          return true;
      }
      if (b && w.overflowX.match(/(scroll|auto)/)) {
        var E = C.scrollWidth - C.clientWidth;
        if (E > 0 && (C.scrollLeft > 0 && b < 0 || C.scrollLeft < E && b > 0))
          return true;
      }
      C = C.parentNode;
    }
    return false;
  }
  function f(g) {
    if (c(g)) {
      var b = l(g), T = { pageX: b.pageX, pageY: b.pageY }, C = T.pageX - n.pageX, w = T.pageY - n.pageY;
      if (_(g.target, C, w))
        return;
      i(C, w), n = T;
      var v = (/* @__PURE__ */ new Date()).getTime(), E = v - o;
      E > 0 && (r.x = C / E, r.y = w / E, o = v), e(C, w) && g.preventDefault();
    }
  }
  function m() {
    s.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
      if (s.isInitialized) {
        clearInterval(a);
        return;
      }
      if (!r.x && !r.y) {
        clearInterval(a);
        return;
      }
      if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
        clearInterval(a);
        return;
      }
      if (!s.element) {
        clearInterval(a);
        return;
      }
      i(r.x * 30, r.y * 30), r.x *= 0.8, r.y *= 0.8;
    }, 10));
  }
  ke.supportsTouch ? (s.event.bind(t, "touchstart", d), s.event.bind(t, "touchmove", f), s.event.bind(t, "touchend", m)) : ke.supportsIePointer && (window.PointerEvent ? (s.event.bind(t, "pointerdown", d), s.event.bind(t, "pointermove", f), s.event.bind(t, "pointerup", m)) : window.MSPointerEvent && (s.event.bind(t, "MSPointerDown", d), s.event.bind(t, "MSPointerMove", f), s.event.bind(t, "MSPointerUp", m)));
}
var O_ = function() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1
  };
};
var x_ = {
  "click-rail": C_,
  "drag-thumb": A_,
  keyboard: y_,
  wheel: w_,
  touch: k_
};
var Ti = function(t, e) {
  var i = this;
  if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName)
    throw new Error("no element is specified to initialize PerfectScrollbar");
  this.element = t, t.classList.add(j.main), this.settings = O_();
  for (var n in e)
    this.settings[n] = e[n];
  this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
  var o = function() {
    return t.classList.add(j.state.focus);
  }, r = function() {
    return t.classList.remove(j.state.focus);
  };
  this.isRtl = xt(t).direction === "rtl", this.isRtl === true && t.classList.add(j.rtl), this.isNegativeScroll = function() {
    var c = t.scrollLeft, d = null;
    return t.scrollLeft = -1, d = t.scrollLeft < 0, t.scrollLeft = c, d;
  }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new Ue(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = qi(j.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = qi(j.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
  var a = xt(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = false, this.scrollbarXTop = W(a.top)) : this.isScrollbarXUsingBottom = true, this.railBorderXWidth = W(a.borderLeftWidth) + W(a.borderRightWidth), ot(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = W(a.marginLeft) + W(a.marginRight), ot(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = qi(j.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = qi(j.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
  var l = xt(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = false, this.scrollbarYLeft = W(l.left)) : this.isScrollbarYUsingRight = true, this.scrollbarYOuterWidth = this.isRtl ? E_(this.scrollbarY) : null, this.railBorderYWidth = W(l.borderTopWidth) + W(l.borderBottomWidth), ot(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = W(l.marginTop) + W(l.marginBottom), ot(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = {
    x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  }, this.isAlive = true, this.settings.handlers.forEach(function(c) {
    return x_[c](i);
  }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(c) {
    return i.onScroll(c);
  }), Mt(this);
};
Ti.prototype.update = function() {
  this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, ot(this.scrollbarXRail, { display: "block" }), ot(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = W(xt(this.scrollbarXRail).marginLeft) + W(xt(this.scrollbarXRail).marginRight), this.railYMarginHeight = W(xt(this.scrollbarYRail).marginTop) + W(xt(this.scrollbarYRail).marginBottom), ot(this.scrollbarXRail, { display: "none" }), ot(this.scrollbarYRail, { display: "none" }), Mt(this), ys(this, "top", 0, false, true), ys(this, "left", 0, false, true), ot(this.scrollbarXRail, { display: "" }), ot(this.scrollbarYRail, { display: "" }));
};
Ti.prototype.onScroll = function(t) {
  this.isAlive && (Mt(this), ys(this, "top", this.element.scrollTop - this.lastScrollTop), ys(
    this,
    "left",
    this.element.scrollLeft - this.lastScrollLeft
  ), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
};
Ti.prototype.destroy = function() {
  this.isAlive && (this.event.unbindAll(), Se(this.scrollbarX), Se(this.scrollbarY), Se(this.scrollbarXRail), Se(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = false);
};
Ti.prototype.removePsClasses = function() {
  this.element.className = this.element.className.split(" ").filter(function(t) {
    return !t.match(/^ps([-_].+|)$/);
  }).join(" ");
};
var S_ = {
  threshold: 10,
  direction: "all"
};
var D_ = class {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = {
      ...S_,
      ...e
    };
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      u.trigger(this._element, `swipe${r}`), u.trigger(this._element, "swipe", { direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (u.trigger(this._element, `swipe${n[o].direction}`), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
};
var I_ = class {
  constructor(t, e = "swipe", i = {}) {
    this._element = t, this._event = e, this.swipe = new D_(t, i), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this);
  }
  dispose() {
    this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler);
  }
  init() {
    this._element.addEventListener(
      "touchstart",
      (t) => this._handleTouchStart(t)
    ), this._element.addEventListener(
      "touchmove",
      (t) => this._handleTouchMove(t)
    ), window.addEventListener("touchend", (t) => this._handleTouchEnd(t));
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
};
var $_ = "group/ps overflow-hidden [overflow-anchor:none] [overflow-style:none] touch-none";
var L_ = "group/x absolute bottom-0 !top-auto h-[15px] hidden opacity-0 [transition:background-color_.2s_linear,_opacity_.2s_linear] motion-reduce:transition-none group-[&.ps--active-x]/ps:block group-[&.ps--active-x]/ps:bg-transparent group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 hover:bg-[#eee] focus:!opacity-90 focus:bg-[#eee] [&.ps--clicking]:!opacity-90 [&.ps--clicking]:bg-[#eee] outline-none";
var M_ = "absolute bottom-[2px] rounded-md h-1.5 opacity-0 group-hover/ps:opacity-100 group-focus/ps:opacity-100 group-active/ps:opacity-100 bg-[#aaa] [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:bg-[#999] group-hover/x:h-[11px] group-focus/x:bg-[#999] group-focus/x:h-[11px] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none";
var N_ = "group/y absolute right-0 !left-auto w-[15px] hidden opacity-0 [transition:background-color_.2s_linear,_opacity_.2s_linear] motion-reduce:transition-none group-[&.ps--active-y]/ps:block group-[&.ps--active-y]/ps:bg-transparent group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 hover:bg-[#eee] focus:!opacity-90 focus:bg-[#eee] [&.ps--clicking]:!opacity-90 [&.ps--clicking]:bg-[#eee] outline-none";
var R_ = "absolute right-[2px] rounded-md w-1.5 opacity-0 group-hover/ps:opacity-100 group-focus/ps:opacity-100 group-active/ps:opacity-100 bg-[#aaa] [transition:background-color_.2s_linear,_width_.2s_ease-in-out] group-hover/y:bg-[#999] group-hover/y:w-[11px] group-focus/y:bg-[#999] group-focus/y:w-[11px] group-[&.ps--clicking]/y:bg-[#999] group-[&.ps--clicking]/y:w-[11px] outline-none";
var P_ = (s = document) => {
  [
    { ps: "ps__rail-x", te: L_ },
    { ps: "ps__rail-y", te: N_ },
    { ps: "ps__thumb-x", te: M_ },
    { ps: "ps__thumb-y", te: R_ }
  ].forEach((e) => {
    p.addClass(
      h.findOne(`.${e.ps}`, s),
      e.te
    ), p.removeClass(
      h.findOne(`.${e.ps}`, s),
      e.ps
    );
  }), p.addClass(s, $_), p.removeClass(s, "ps");
};
var Gr = "sidenav";
var Zi = "te.sidenav";
var H_ = "data-te-sidenav-rotate-icon-ref";
var An = "[data-te-sidenav-toggle-ref]";
var B_ = "[data-te-collapse-init]";
var V_ = '[data-te-sidenav-slim="true"]';
var W_ = '[data-te-sidenav-slim="false"]';
var F_ = "[data-te-sidenav-menu-ref]";
var Ce = "[data-te-sidenav-collapse-ref]";
var ti = "[data-te-sidenav-link-ref]";
var Y_ = F() ? 100 : -100;
var j_ = F() ? -100 : 100;
var K_ = {
  sidenavAccordion: "(boolean)",
  sidenavBackdrop: "(boolean)",
  sidenavBackdropClass: "(null|string)",
  sidenavCloseOnEsc: "(boolean)",
  sidenavColor: "(string)",
  sidenavContent: "(null|string)",
  sidenavExpandable: "(boolean)",
  sidenavExpandOnHover: "(boolean)",
  sidenavFocusTrap: "(boolean)",
  sidenavHidden: "(boolean)",
  sidenavMode: "(string)",
  sidenavModeBreakpointOver: "(null|string|number)",
  sidenavModeBreakpointSide: "(null|string|number)",
  sidenavModeBreakpointPush: "(null|string|number)",
  sidenavBreakpointSm: "(number)",
  sidenavBreakpointMd: "(number)",
  sidenavBreakpointLg: "(number)",
  sidenavBreakpointXl: "(number)",
  sidenavBreakpoint2xl: "(number)",
  sidenavScrollContainer: "(null|string)",
  sidenavSlim: "(boolean)",
  sidenavSlimCollapsed: "(boolean)",
  sidenavSlimWidth: "(number)",
  sidenavPosition: "(string)",
  sidenavRight: "(boolean)",
  sidenavTransitionDuration: "(number)",
  sidenavWidth: "(number)"
};
var U_ = {
  sidenavAccordion: false,
  sidenavBackdrop: true,
  sidenavBackdropClass: null,
  sidenavCloseOnEsc: true,
  sidenavColor: "primary",
  sidenavContent: null,
  sidenavExpandable: true,
  sidenavExpandOnHover: false,
  sidenavFocusTrap: true,
  sidenavHidden: true,
  sidenavMode: "over",
  sidenavModeBreakpointOver: null,
  sidenavModeBreakpointSide: null,
  sidenavModeBreakpointPush: null,
  sidenavBreakpointSm: 640,
  sidenavBreakpointMd: 768,
  sidenavBreakpointLg: 1024,
  sidenavBreakpointXl: 1280,
  sidenavBreakpoint2xl: 1536,
  sidenavScrollContainer: null,
  sidenavSlim: false,
  sidenavSlimCollapsed: false,
  sidenavSlimWidth: 77,
  sidenavPosition: "fixed",
  sidenavRight: false,
  sidenavTransitionDuration: 300,
  sidenavWidth: 240
};
var ni = class _ni {
  constructor(t, e = {}) {
    Tt(this, "_addBackdropOnInit", () => {
      this._options.sidenavHidden || (this._backdrop.show(), u.off(this._element, "transitionend", this._addBackdropOnInit));
    });
    this._element = t, this._options = e, this._ID = Ot(""), this._content = null, this._initialContentStyle = null, this._slimCollapsed = false, this._activeNode = null, this._tempSlim = false, this._backdrop = this._initializeBackDrop(), this._focusTrap = null, this._perfectScrollbar = null, this._touch = null, this._setModeFromBreakpoints(), this.escHandler = (i) => {
      i.keyCode === Is && this.toggler && St(this.toggler) && (this._update(false), u.off(window, "keydown", this.escHandler));
    }, this.hashHandler = () => {
      this._setActiveElements();
    }, t && (I.setData(t, Zi, this), this._setup()), this.options.sidenavBackdrop && !this.options.sidenavHidden && this.options.sidenavMode === "over" && u.on(this._element, "transitionend", this._addBackdropOnInit), this._didInit = false, this._init();
  }
  // Getters
  static get NAME() {
    return Gr;
  }
  get container() {
    if (this.options.sidenavPosition === "fixed")
      return h.findOne("body");
    const t = (e) => !e.parentNode || e.parentNode === document ? e : e.parentNode.style.position === "relative" || e.parentNode.classList.contains("relative") ? e.parentNode : t(e.parentNode);
    return t(this._element);
  }
  get isVisible() {
    let t = 0, e = window.innerWidth;
    if (this.options.sidenavPosition !== "fixed") {
      const n = this.container.getBoundingClientRect();
      t = n.x, e = n.x + n.width;
    }
    const { x: i } = this._element.getBoundingClientRect();
    return this.options.sidenavRight ? Math.abs(i - e) > 10 : Math.abs(i - t) < 10;
  }
  get links() {
    return h.find(ti, this._element);
  }
  get navigation() {
    return h.find(F_, this._element);
  }
  get options() {
    const t = {
      ...U_,
      ...p.getDataAttributes(this._element),
      ...this._options
    };
    return N(Gr, t, K_), t;
  }
  get sidenavStyle() {
    return {
      width: `${this.width}px`,
      height: this.options.sidenavPosition === "fixed" ? "100vh" : "100%",
      position: this.options.sidenavPosition,
      transition: `all ${this.transitionDuration} linear`
    };
  }
  get toggler() {
    return h.find(An).find(
      (e) => {
        const i = p.getDataAttribute(e, "target");
        return h.findOne(i) === this._element;
      }
    );
  }
  get transitionDuration() {
    return `${this.options.sidenavTransitionDuration / 1e3}s`;
  }
  get translation() {
    return this.options.sidenavRight ? j_ : Y_;
  }
  get width() {
    return this._slimCollapsed ? this.options.sidenavSlimWidth : this.options.sidenavWidth;
  }
  get isBackdropVisible() {
    return !!this._backdrop._element;
  }
  // Public
  changeMode(t) {
    this._setMode(t);
  }
  dispose() {
    u.off(window, "keydown", this.escHandler), this.options.sidenavBackdrop && this._backdrop.dispose(), u.off(window, "hashchange", this.hashHandler), this._touch.dispose(), I.removeData(this._element, Zi), this._element = null;
  }
  hide() {
    this._emitEvents(false), this._update(false), this._options.sidenavBackdrop && this.isBackdropVisible && this._backdrop.hide();
  }
  show() {
    this._emitEvents(true), this._update(true), this._options.sidenavBackdrop && this._options.sidenavMode === "over" && this._backdrop.show();
  }
  toggle() {
    this._emitEvents(!this.isVisible), this._update(!this.isVisible);
  }
  toggleSlim() {
    this._setSlim(!this._slimCollapsed);
  }
  update(t) {
    this._options = t, this._setup();
  }
  getBreakpoint(t) {
    return this._transformBreakpointValuesToObject()[t];
  }
  // Private
  _init() {
    this._didInit || (u.on(
      document,
      "click",
      An,
      _ni.toggleSidenav()
    ), this._didInit = true);
  }
  _transformBreakpointValuesToObject() {
    return {
      sm: this.options.sidenavBreakpointSm,
      md: this.options.sidenavBreakpointMd,
      lg: this.options.sidenavBreakpointLg,
      xl: this.options.sidenavBreakpointXl,
      "2xl": this.options.sidenavBreakpoint2xl
    };
  }
  _setModeFromBreakpoints() {
    const t = window.innerWidth, e = this._transformBreakpointValuesToObject();
    if (t === void 0 || !e)
      return;
    const i = typeof this.options.sidenavModeBreakpointOver == "number" ? t - this.options.sidenavModeBreakpointOver : t - e[this.options.sidenavModeBreakpointOver], n = typeof this.options.sidenavModeBreakpointSide == "number" ? t - this.options.sidenavModeBreakpointSide : t - e[this.options.sidenavModeBreakpointSide], o = typeof this.options.sidenavModeBreakpointPush == "number" ? t - this.options.sidenavModeBreakpointPush : t - e[this.options.sidenavModeBreakpointPush], r = (l, c) => l - c < 0 ? -1 : c - l < 0 ? 1 : 0, a = [i, n, o].filter((l) => l != null && l >= 0).sort(r)[0];
    i > 0 && i === a ? (this._options.sidenavMode = "over", this._options.sidenavHidden = true) : n > 0 && n === a ? this._options.sidenavMode = "side" : o > 0 && o === a && (this._options.sidenavMode = "push");
  }
  _collapseItems() {
    this.navigation.forEach((t) => {
      h.find(Ce, t).forEach((i) => {
        Ut.getInstance(i).hide();
      });
    });
  }
  _getOffsetValue(t, { index: e, property: i, offsets: n }) {
    const o = this._getPxValue(
      this._initialContentStyle[e][n[i].property]
    ), r = t ? n[i].value : 0;
    return o + r;
  }
  _getProperty(...t) {
    return t.map((e, i) => i === 0 ? e : e[0].toUpperCase().concat(e.slice(1))).join("");
  }
  _getPxValue(t) {
    return t ? parseFloat(t) : 0;
  }
  _handleSwipe(t, e) {
    e && this._slimCollapsed && this.options.sidenavSlim && this.options.sidenavExpandable ? this.toggleSlim() : e || (this._slimCollapsed || !this.options.sidenavSlim || !this.options.sidenavExpandable ? this.toggler && St(this.toggler) && this.toggle() : this.toggleSlim());
  }
  _isActive(t, e) {
    return e ? e === t : t.attributes.href ? new URL(t, window.location.href).href === window.location.href : false;
  }
  _isAllToBeCollapsed() {
    return h.find(
      B_,
      this._element
    ).filter(
      (i) => i.getAttribute("aria-expanded") === "true"
    ).length === 0;
  }
  _isAllCollapsed() {
    return h.find(Ce, this._element).filter(
      (t) => St(t)
    ).length === 0;
  }
  _initializeBackDrop() {
    if (!this.options.sidenavBackdrop)
      return;
    const t = this.options.sidenavBackdropClass ? this.options.sidenavBackdropClass.split(" ") : this.options.sidenavPosition ? [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      this.options.sidenavPosition,
      "top-0",
      "left-0",
      "z-50",
      "bg-black/10",
      "dark:bg-black-60",
      "w-full",
      "h-full",
      this._element.id
    ] : null;
    return new lo({
      isVisible: this.options.sidenavBackdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      backdropClasses: t,
      clickCallback: () => this.hide()
    });
  }
  _updateBackdrop(t) {
    if (this.options.sidenavMode === "over") {
      t ? this._backdrop.show() : this.isBackdropVisible && this._backdrop.hide();
      return;
    }
    this.isBackdropVisible && this._backdrop.hide();
  }
  _setup() {
    this._setupTouch(), this.options.sidenavFocusTrap && this._setupFocusTrap(), this._setupCollapse(), this.options.sidenavSlim && this._setupSlim(), this._setupInitialStyling(), this._setupScrolling(), this.options.sidenavContent && this._setupContent(), this._setupActiveState(), this._setupRippleEffect(), this.options.sidenavHidden || this._updateOffsets(true, true), this.options.sidenavMode === "over" && this._setTabindex(true);
  }
  _setupActiveState() {
    this._setActiveElements(), this.links.forEach((t) => {
      u.on(t, "click", () => this._setActiveElements(t)), u.on(t, "keydown", (e) => {
        e.keyCode === lt && this._setActiveElements(t);
      });
    }), u.on(window, "hashchange", this.hashHandler);
  }
  _setupCollapse() {
    this.navigation.forEach((t, e) => {
      h.find(Ce, t).forEach(
        (n, o) => this._setupCollapseList({ list: n, index: o, menu: t, menuIndex: e })
      );
    });
  }
  _generateCollpaseID(t, e) {
    return `sidenav-collapse-${this._ID}-${e}-${t}`;
  }
  _setupCollapseList({ list: t, index: e, menu: i, menuIndex: n }) {
    const o = this._generateCollpaseID(e, n);
    t.setAttribute("id", o), t.setAttribute("data-te-collapse-item", "");
    const [r] = h.prev(t, ti);
    p.setDataAttribute(r, "collapse-init", ""), r.setAttribute("href", `#${o}`), r.setAttribute("role", "button");
    const a = Ut.getInstance(t) || new Ut(t, {
      toggle: false,
      parent: this.options.sidenavAccordion ? i : t
    });
    (t.dataset.teSidenavStateShow === "" || t.dataset.teCollapseShow === "") && this._rotateArrow(r, false), u.on(r, "click", (l) => {
      this._toggleCategory(l, a, t), this._tempSlim && this._isAllToBeCollapsed() && (this._setSlim(true), this._tempSlim = false), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), u.on(
      t,
      "show.te.collapse",
      () => this._rotateArrow(r, false)
    ), u.on(
      t,
      "hide.te.collapse",
      () => this._rotateArrow(r, true)
    ), u.on(t, "shown.te.collapse", () => {
      this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), u.on(t, "hidden.te.collapse", () => {
      this._tempSlim && this._isAllCollapsed() && (this._setSlim(true), this._tempSlim = false), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    });
  }
  _setupContent() {
    this._content = h.find(this.options.sidenavContent), this._content.forEach((t) => {
      const e = [
        "!p",
        "!m",
        "!px",
        "!pl",
        "!pr",
        "!mx",
        "!ml",
        "!mr",
        "!-p",
        "!-m",
        "!-px",
        "!-pl",
        "!-pr",
        "!-mx",
        "!-ml",
        "!-mr"
      ];
      [...t.classList].filter(
        (n) => e.findIndex((o) => n.includes(o)) >= 0
      ).forEach((n) => t.classList.remove(n));
    }), this._initialContentStyle = this._content.map((t) => {
      const { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r } = window.getComputedStyle(t);
      return { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r };
    });
  }
  _setupFocusTrap() {
    this._focusTrap = new bi(
      this._element,
      {
        event: "keydown",
        condition: (t) => t.keyCode === fi,
        onlyVisible: true
      },
      this.toggler
    );
  }
  _setupInitialStyling() {
    this._setColor(), p.style(this._element, this.sidenavStyle);
  }
  _setupScrolling() {
    let t = this._element;
    if (this.options.sidenavScrollContainer) {
      t = h.findOne(
        this.options.sidenavScrollContainer,
        this._element
      );
      const i = tc(t.parentNode.children).filter(
        (n) => n !== t
      ).reduce((n, o) => n + o.clientHeight, 0);
      p.style(t, {
        maxHeight: `calc(100% - ${i}px)`,
        position: "relative"
      });
    }
    this._perfectScrollbar = new Ti(t, {
      suppressScrollX: true,
      handlers: ["click-rail", "drag-thumb", "wheel", "touch"]
    }), P_(t);
  }
  _setupSlim() {
    this._slimCollapsed = this.options.sidenavSlimCollapsed, this._toggleSlimDisplay(this._slimCollapsed), this.options.sidenavExpandOnHover && (this._element.addEventListener("mouseenter", () => {
      this._slimCollapsed && this._setSlim(false);
    }), this._element.addEventListener("mouseleave", () => {
      this._slimCollapsed || this._setSlim(true);
    }));
  }
  _setupRippleEffect() {
    this.links.forEach((t) => {
      let e = Cs.getInstance(t), i = this.options.sidenavColor;
      if (e && e._options.sidenavColor !== this.options.sidenavColor)
        e.dispose();
      else if (e)
        return;
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (i = "white"), e = new Cs(t, { rippleColor: i });
    });
  }
  _setupTouch() {
    this._touch = new I_(this._element, "swipe", { threshold: 20 }), this._touch.init(), u.on(
      this._element,
      "swipeleft",
      (t) => this._handleSwipe(t, this.options.sidenavRight)
    ), u.on(
      this._element,
      "swiperight",
      (t) => this._handleSwipe(t, !this.options.sidenavRight)
    );
  }
  _setActive(t, e) {
    t.setAttribute("data-te-sidebar-state-active", ""), this._activeNode && t.removeAttribute("data-te-sidebar-state-active"), this._activeNode = t;
    const [i] = h.parents(
      this._activeNode,
      Ce
    );
    if (!i) {
      this._setActiveCategory();
      return;
    }
    const [n] = h.prev(i, ti);
    this._setActiveCategory(n), !e && !this._slimCollapsed && Ut.getInstance(i).show();
  }
  _setActiveCategory(t) {
    this.navigation.forEach((e) => {
      h.find(Ce, e).forEach((n) => {
        const [o] = h.prev(n, ti);
        o !== t ? o.removeAttribute("data-te-sidenav-state-active") : o.setAttribute("data-te-sidenav-state-active", "");
      });
    });
  }
  _setActiveElements(t) {
    this.navigation.forEach((e) => {
      h.find(ti, e).filter((n) => h.next(n, Ce).length === 0).forEach((n) => {
        this._isActive(n, t) && n !== this._activeNode && this._setActive(n, t);
      });
    }), t && this._updateFocus(this.isVisible);
  }
  _setColor() {
    const t = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "light",
      "dark"
    ], { sidenavColor: e } = this.options, i = t.includes(e) ? e : "primary";
    t.forEach((n) => {
      this._element.classList.remove(`sidenav-${n}`);
    }), p.addClass(this._element, `sidenav-${i}`);
  }
  _setContentOffsets(t, e, i) {
    this._content.forEach((n, o) => {
      const r = this._getOffsetValue(t, {
        index: o,
        property: "padding",
        offsets: e
      }), a = this._getOffsetValue(t, {
        index: o,
        property: "margin",
        offsets: e
      }), l = {};
      if (i || (l.transition = `all ${this.transitionDuration} linear`), l[e.padding.property] = `${r}px`, l[e.margin.property] = `${a}px`, p.style(n, l), !!t) {
        if (i) {
          p.style(n, {
            transition: this._initialContentStyle[o].transition
          });
          return;
        }
        u.on(n, "transitionend", () => {
          p.style(n, {
            transition: this._initialContentStyle[o].transition
          });
        });
      }
    });
  }
  _setMode(t) {
    this.options.sidenavMode !== t && (this._options.sidenavMode = t, this._update(this.isVisible));
  }
  _setSlim(t) {
    const e = t ? ["collapse", "collapsed"] : ["expand", "expanded"];
    this._triggerEvents(...e), t && this._collapseItems(), this._slimCollapsed = t, this._toggleSlimDisplay(t), p.style(this._element, { width: `${this.width}px` }), this._updateOffsets(this.isVisible);
  }
  _setTabindex(t) {
    this.links.forEach((e) => {
      e.tabIndex = t ? 0 : -1;
    });
  }
  _emitEvents(t) {
    const e = t ? ["show", "shown"] : ["hide", "hidden"];
    this._triggerEvents(...e);
  }
  _rotateArrow(t, e) {
    const [i] = h.children(t, `[${H_}]`);
    i && (e ? p.removeClass(i, "rotate-180") : p.addClass(i, "rotate-180"));
  }
  _toggleCategory(t, e) {
    t.preventDefault(), e.toggle(), this._slimCollapsed && this.options.sidenavExpandable && (this._tempSlim = true, this._setSlim(false));
  }
  _toggleSlimDisplay(t) {
    const e = h.find(
      V_,
      this._element
    ), i = h.find(
      W_,
      this._element
    ), n = () => {
      e.forEach((o) => {
        p.style(o, {
          display: this._slimCollapsed ? "unset" : "none"
        });
      }), i.forEach((o) => {
        p.style(o, {
          display: this._slimCollapsed ? "none" : "unset"
        });
      });
    };
    t ? setTimeout(
      () => n(),
      this.options.sidenavTransitionDuration
    ) : n();
  }
  async _triggerEvents(t, e) {
    u.trigger(this._element, `${t}.te.sidenav`), e && await setTimeout(() => {
      u.trigger(this._element, `${e}.te.sidenav`);
    }, this.options.sidenavTransitionDuration + 5);
  }
  _update(t) {
    this.toggler && this._updateTogglerAria(t), this._updateDisplay(t), this.options.sidenavBackdrop && this._updateBackdrop(t), this._updateOffsets(t), t && this.options.sidenavCloseOnEsc && this.options.sidenavMode !== "side" && u.on(window, "keydown", this.escHandler), this.options.sidenavFocusTrap && this._updateFocus(t);
  }
  _updateDisplay(t) {
    const e = t ? 0 : this.translation;
    p.style(this._element, {
      transform: `translateX(${e}%)`
    });
  }
  _updateFocus(t) {
    if (this._setTabindex(t), this.options.sidenavMode === "over" && this.options.sidenavFocusTrap) {
      if (t) {
        this._focusTrap.trap();
        return;
      }
      this._focusTrap.disable();
    }
    this._focusTrap.disable();
  }
  _updateOffsets(t, e = false) {
    const [i, n] = this.options.sidenavRight ? ["right", "left"] : ["left", "right"], o = {
      property: this._getProperty("padding", i),
      value: this.options.sidenavMode === "over" ? 0 : this.width
    }, r = {
      property: this._getProperty("margin", n),
      value: this.options.sidenavMode === "push" ? -1 * this.width : 0
    };
    u.trigger(this._element, "update.te.sidenav", {
      margin: r,
      padding: o
    }), this._content && (this._content.className = "", this._setContentOffsets(t, { padding: o, margin: r }, e));
  }
  _updateTogglerAria(t) {
    this.toggler.setAttribute("aria-expanded", t);
  }
  // Static
  static toggleSidenav() {
    return function(t) {
      const e = h.closest(t.target, An), i = p.getDataAttributes(e).target;
      h.find(i).forEach((n) => {
        (_ni.getInstance(n) || new _ni(n)).toggle();
      });
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, Zi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _ni(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, Zi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Yn = "stepper";
var ms = "te.stepper";
var Ms = `.${ms}`;
var Ci = `data-te-${Yn}`;
var oi = "horizontal";
var yt = "vertical";
var z_ = {
  stepperType: "string",
  stepperLinear: "boolean",
  stepperNoEditable: "boolean",
  stepperActive: "string",
  stepperCompleted: "string",
  stepperInvalid: "string",
  stepperDisabled: "string",
  stepperVerticalBreakpoint: "number",
  stepperMobileBreakpoint: "number",
  stepperMobileBarBreakpoint: "number"
};
var X_ = {
  stepperType: oi,
  stepperLinear: false,
  stepperNoEditable: false,
  stepperActive: "",
  stepperCompleted: "",
  stepperInvalid: "",
  stepperDisabled: "",
  stepperVerticalBreakpoint: 0,
  stepperMobileBreakpoint: 0,
  stepperMobileBarBreakpoint: 4
};
var qr = `mousedown${Ms}`;
var Qr = `keydown${Ms}`;
var G_ = `keyup${Ms}`;
var Zr = `resize${Ms}`;
var Vt = `[${Ci}-step-ref]`;
var G = `[${Ci}-head-ref]`;
var Jr = `[${Ci}-head-text-ref]`;
var Ji = `[${Ci}-head-icon-ref]`;
var st = `[${Ci}-content-ref]`;
var Qg = class {
  constructor(t, e) {
    this._element = t, this._options = this._getConfig(e), this._elementHeight = 0, this._steps = h.find(`${Vt}`, this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._element && (I.setData(t, ms, this), this._init());
  }
  // Getters
  static get NAME() {
    return Yn;
  }
  get activeStep() {
    return this._steps[this._activeStepIndex];
  }
  get activeStepIndex() {
    return this._activeStepIndex;
  }
  // Public
  dispose() {
    this._steps.forEach((t) => {
      u.off(t, qr), u.off(t, Qr);
    }), u.off(window, Zr), I.removeData(this._element, ms), this._element = null;
  }
  changeStep(t) {
    this._toggleStep(t);
  }
  nextStep() {
    this._toggleStep(this._activeStepIndex + 1);
  }
  previousStep() {
    this._toggleStep(this._activeStepIndex - 1);
  }
  // Private
  _init() {
    const t = h.find(`${Vt}`, this._element)[this._activeStepIndex].setAttribute("data-te", "active-step"), e = h.find(
      `${Jr}`,
      this._element
    ), i = h.find(
      `${Ji}`,
      this._element
    );
    switch (t ? (this._activeStepIndex = this._steps.indexOf(t), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    ), e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700")) : (e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    )), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType) {
      case yt:
        this._toggleVertical();
        break;
      default:
        this._toggleHorizontal();
        break;
    }
    (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
  }
  _getConfig(t) {
    const e = p.getDataAttributes(this._element);
    return t = {
      ...X_,
      ...e,
      ...t
    }, N(Yn, t, z_), t;
  }
  _bindMouseDown() {
    this._steps.forEach((t) => {
      const e = h.findOne(`${G}`, t);
      u.on(e, qr, (i) => {
        const n = h.parents(i.target, `${Vt}`)[0], o = this._steps.indexOf(n);
        i.preventDefault(), this._toggleStep(o);
      });
    });
  }
  _bindResize() {
    u.on(window, Zr, () => {
      this._currentView === yt && this._setSingleStepHeight(this.activeStep), this._currentView === oi && this._setHeight(this.activeStep), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView();
    });
  }
  _toggleStepperView() {
    const t = this._options.stepperVerticalBreakpoint < window.innerWidth, e = this._options.stepperVerticalBreakpoint > window.innerWidth, i = this._options.stepperMobileBreakpoint > window.innerWidth;
    t && this._currentView !== oi && this._toggleHorizontal(), e && !i && this._currentView !== yt && (this._steps.forEach((n) => {
      const o = h.findOne(`${st}`, n);
      this._resetStepperHeight(), this._showElement(o);
    }), this._toggleVertical());
  }
  _toggleStep(t) {
    this._activeStepIndex !== t && (this._options.stepperNoEditable && this._toggleDisabled(), this._showElement(
      h.findOne(`${st}`, this._steps[t])
    ), this._toggleActive(t), t > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === oi ? this._animateHorizontalStep(t) : (this._animateVerticalStep(t), this._setSingleStepHeight(this._steps[t])), this._toggleStepTabIndex(
      h.findOne(`${G}`, this.activeStep),
      h.findOne(`${G}`, this._steps[t])
    ), this._activeStepIndex = t, this._steps[this._activeStepIndex].setAttribute("data-te", "active-step"), this._steps.forEach((e, i) => {
      e[this._activeStepIndex] !== i && e.removeAttribute("data-te");
    }));
  }
  _resetStepperHeight() {
    this._element.style.height = "";
  }
  _setStepsHeight() {
    this._steps.forEach((t) => {
      const e = h.findOne(`${st}`, t), i = window.getComputedStyle(e);
      this._verticalStepperStyles.push({
        paddingTop: parseFloat(i.paddingTop),
        paddingBottom: parseFloat(i.paddingBottom)
      });
      const n = e.scrollHeight;
      e.style.height = `${n}px`;
    });
  }
  _setSingleStepHeight(t) {
    const e = h.findOne(`${st}`, t), i = this.activeStep === t, n = this._steps.indexOf(t);
    let o;
    i ? (e.style.height = "", o = e.scrollHeight) : o = e.scrollHeight + this._verticalStepperStyles[n].paddingTop + this._verticalStepperStyles[n].paddingBottom, e.style.height = `${o}px`;
  }
  _toggleVertical() {
    this._currentView = yt, this._setStepsHeight(), this._hideInactiveSteps();
  }
  _toggleHorizontal() {
    this._currentView = oi, this._setHeight(this.activeStep), this._hideInactiveSteps();
  }
  _toggleStepperClass() {
    h.findOne(
      "[data-te-stepper-type]",
      this._element
    ) !== null && this._steps.forEach((e) => {
      h.findOne(`${st}`, e).classList.remove("!my-0"), h.findOne(`${st}`, e).classList.remove("!py-0"), h.findOne(`${st}`, e).classList.remove("!h-0");
    });
  }
  _toggleStepClass(t, e, i) {
    i && this._steps[t].classList[e](i);
  }
  _bindKeysNavigation() {
    this._toggleStepTabIndex(
      false,
      h.findOne(`${G}`, this.activeStep)
    ), this._steps.forEach((t) => {
      const e = h.findOne(`${G}`, t);
      u.on(e, Qr, (i) => {
        const n = h.parents(
          i.currentTarget,
          `${Vt}`
        )[0], o = h.next(n, `${Vt}`)[0], r = h.prev(n, `${Vt}`)[0], a = h.findOne(
          `${G}`,
          n
        ), l = h.findOne(
          `${G}`,
          this.activeStep
        );
        let c = null, d = null;
        if (o && (c = h.findOne(`${G}`, o)), r && (d = h.findOne(`${G}`, r)), i.keyCode === Ie && this._currentView !== yt && (d ? (this._toggleStepTabIndex(a, d), this._toggleOutlineStyles(a, d), d.focus()) : c && (this._toggleStepTabIndex(a, c), this._toggleOutlineStyles(a, c), c.focus())), i.keyCode === $e && this._currentView !== yt && (c ? (this._toggleStepTabIndex(a, c), this._toggleOutlineStyles(a, c), c.focus()) : d && (this._toggleStepTabIndex(a, d), this._toggleOutlineStyles(a, d), d.focus())), i.keyCode === U && this._currentView === yt && (i.preventDefault(), c && (this._toggleStepTabIndex(a, c), this._toggleOutlineStyles(a, c), c.focus())), i.keyCode === rt && this._currentView === yt && (i.preventDefault(), d && (this._toggleStepTabIndex(a, d), this._toggleOutlineStyles(a, d), d.focus())), i.keyCode === Le) {
          const _ = h.findOne(
            `${G}`,
            this._steps[0]
          );
          this._toggleStepTabIndex(a, _), this._toggleOutlineStyles(a, _), _.focus();
        }
        if (i.keyCode === Me) {
          const _ = this._steps[this._steps.length - 1], f = h.findOne(`${G}`, _);
          this._toggleStepTabIndex(a, f), this._toggleOutlineStyles(a, f), f.focus();
        }
        (i.keyCode === lt || i.keyCode === ps) && (i.preventDefault(), this.changeStep(this._steps.indexOf(n))), i.keyCode === fi && (this._toggleStepTabIndex(a, l), this._toggleOutlineStyles(a, false), l.focus());
      }), u.on(e, G_, (i) => {
        const n = h.parents(
          i.currentTarget,
          `${Vt}`
        )[0], o = h.findOne(
          `${G}`,
          n
        ), r = h.findOne(
          `${G}`,
          this.activeStep
        );
        i.keyCode === fi && (this._toggleStepTabIndex(o, r), this._toggleOutlineStyles(false, r), r.focus());
      });
    });
  }
  _toggleStepTabIndex(t, e) {
    t && t.setAttribute("tabIndex", -1), e && e.setAttribute("tabIndex", 0);
  }
  _toggleOutlineStyles(t, e) {
    t && (t.style.outline = ""), e && (e.style.outline = "revert");
  }
  _toggleDisabled() {
    const t = h.find(`${G}`, this._element), e = h.find(
      `${Ji}`,
      this._element
    );
    t[this._activeStepIndex].classList.add("color-[#858585]"), t[this._activeStepIndex].classList.add("cursor-default"), e[this._activeStepIndex].classList.add("!bg-[#858585]"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperDisabled
    );
  }
  _toggleActive(t) {
    const e = h.find(
      `${Jr}`,
      this._element
    ), i = h.find(
      `${Ji}`,
      this._element
    );
    e[t].classList.add("font-medium"), i[t].classList.add("!bg-primary-100"), i[t].classList.add("!text-primary-700"), i[t].classList.remove("!bg-success-100"), i[t].classList.remove("!text-success-700"), e[this._activeStepIndex].classList.remove("font-medium"), i[this._activeStepIndex].classList.remove("!bg-primary-100"), i[this._activeStepIndex].classList.remove(
      "!text-primary-700"
    ), this._toggleStepClass(t, "add", this._options.stepperActive), this._toggleStepClass(
      this._activeStepIndex,
      "remove",
      this._options.stepperActive
    );
  }
  _toggleCompleted(t) {
    const e = h.find(
      `${Ji}`,
      this._element
    );
    e[t].classList.add("!bg-success-100"), e[t].classList.add("!text-success-700"), e[t].classList.remove("!bg-danger-100"), e[t].classList.remove("!text-danger-700"), this._toggleStepClass(t, "add", this._options.stepperCompleted), this._toggleStepClass(t, "remove", this._options.stepperInvalid);
  }
  _hideInactiveSteps() {
    this._steps.forEach((t) => {
      t.getAttribute("data-te") || this._hideElement(h.findOne(`${st}`, t));
    });
  }
  _setHeight(t) {
    const e = h.findOne(`${st}`, t), i = getComputedStyle(e), n = h.findOne(`${G}`, t), o = getComputedStyle(n), r = e.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom), a = n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom);
    this._element.style.height = `${a + r}px`;
  }
  _hideElement(t) {
    !h.parents(
      t,
      `${Vt}`
    )[0].getAttribute("data-te") && this._currentView !== yt || (t.classList.add("!my-0"), t.classList.add("!py-0"), t.classList.add("!h-0"));
  }
  _showElement(t) {
    this._currentView === yt ? (t.classList.remove("!my-0"), t.classList.remove("!py-0"), t.classList.remove("!h-0")) : t.style.display = "block";
  }
  _animateHorizontalStep(t) {
    const e = t > this._activeStepIndex, i = h.findOne(
      `${st}`,
      this._steps[t]
    ), n = h.findOne(
      `${st}`,
      this.activeStep
    );
    let o, r;
    this._steps.forEach((d, _) => {
      const f = h.findOne(`${st}`, d);
      _ !== t && _ !== this._activeStepIndex && this._hideElement(f);
    });
    const a = "translate-x-[150%]", l = "-translate-x-[150%]", c = "translate-0";
    e ? (r = l, o = c, i.classList.remove("translate-x-[150%]"), i.classList.remove("-translate-x-[150%]")) : (r = a, o = c, i.classList.remove("-translate-x-[150%]"), i.classList.remove("translate-x-[150%]")), n.classList.add(r), i.classList.add(o), this._setHeight(this._steps[t]);
  }
  _animateVerticalStep(t) {
    const e = h.findOne(
      `${st}`,
      this._steps[t]
    ), i = h.findOne(
      `${st}`,
      this.activeStep
    );
    this._hideElement(i), this._showElement(e);
  }
  static getInstance(t) {
    return I.getData(t, ms);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var ta = "data-te-input-state-active";
var ts = "data-te-input-selected";
var ea = "data-te-input-multiple-active";
var ia = "[data-te-form-check-input]";
var sa = class {
  constructor(t, e, i, n, o, r, a, l, c, d, _) {
    this.id = t, this.nativeOption = e, this.multiple = i, this.value = n, this.label = o, this.selected = r, this.disabled = a, this.hidden = l, this.secondaryText = c, this.groupId = d, this.icon = _, this.node = null, this.active = false;
  }
  select() {
    this.multiple ? this._selectMultiple() : this._selectSingle();
  }
  _selectSingle() {
    this.selected || (this.node.setAttribute(ts, ""), this.node.setAttribute("aria-selected", true), this.selected = true, this.nativeOption && (this.nativeOption.selected = true));
  }
  _selectMultiple() {
    if (!this.selected) {
      const t = h.findOne(
        ia,
        this.node
      );
      t.checked = true, this.node.setAttribute(ts, ""), this.node.setAttribute("aria-selected", true), this.selected = true, this.nativeOption && (this.nativeOption.selected = true);
    }
  }
  deselect() {
    this.multiple ? this._deselectMultiple() : this._deselectSingle();
  }
  _deselectSingle() {
    this.selected && (this.node.removeAttribute(ts), this.node.setAttribute("aria-selected", false), this.selected = false, this.nativeOption && (this.nativeOption.selected = false));
  }
  _deselectMultiple() {
    if (this.selected) {
      const t = h.findOne(
        ia,
        this.node
      );
      t.checked = false, this.node.removeAttribute(ts), this.node.setAttribute("aria-selected", false), this.selected = false, this.nativeOption && (this.nativeOption.selected = false);
    }
  }
  setNode(t) {
    this.node = t;
  }
  setActiveStyles() {
    if (!this.active) {
      if (this.multiple) {
        this.node.setAttribute(ea, "");
        return;
      }
      this.active = true, this.node.setAttribute(ta, "");
    }
  }
  removeActiveStyles() {
    this.active && (this.active = false, this.node.removeAttribute(ta)), this.multiple && this.node.removeAttribute(ea);
  }
};
var q_ = class {
  constructor(t = false) {
    this._multiple = t, this._selections = [];
  }
  select(t) {
    this._multiple ? this._selections.push(t) : this._selections = [t];
  }
  deselect(t) {
    if (this._multiple) {
      const e = this._selections.findIndex(
        (i) => t === i
      );
      this._selections.splice(e, 1);
    } else
      this._selections = [];
  }
  clear() {
    this._selections = [];
  }
  get selection() {
    return this._selections[0];
  }
  get selections() {
    return this._selections;
  }
  get label() {
    return this._selections[0] && this.selection.label;
  }
  get labels() {
    return this._selections.map((t) => t.label).join(", ");
  }
  get value() {
    return this.selections[0] && this.selection.value;
  }
  get values() {
    return this._selections.map((t) => t.value);
  }
};
function jn(s) {
  return s.filter((t) => !t.disabled).every((t) => t.selected);
}
var Q_ = "data-te-select-form-outline-ref";
var Z_ = "data-te-select-wrapper-ref";
var J_ = "data-te-select-input-ref";
var tm = "data-te-select-clear-btn-ref";
var em = "data-te-select-dropdown-container-ref";
var im = "data-te-select-dropdown-ref";
var sm = "data-te-select-options-wrapper-ref";
var nm = "data-te-select-options-list-ref";
var om = "data-te-select-input-filter-ref";
var xl = "data-te-select-option-ref";
var rm = "data-te-select-option-all-ref";
var am = "data-te-select-option-text-ref";
var lm = "data-te-form-check-input";
var cm = "data-te-select-option-group-ref";
var dm = "data-te-select-option-group-label-ref";
var Sl = "data-te-select-selected";
var hm = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`;
var um = (s) => {
  s.code === "Tab" || s.code === "Esc" || s.preventDefault();
};
function es(s, t, e, i, n) {
  t.selectSize === "default" && p.addClass(s, e), t.selectSize === "sm" && p.addClass(s, i), t.selectSize === "lg" && p.addClass(s, n);
}
function pm(s, t, e, i) {
  const n = document.createElement("div");
  n.setAttribute("id", s), n.setAttribute(Z_, "");
  const o = M("div");
  o.setAttribute(Q_, ""), p.addClass(o, i.formOutline);
  const r = M("input"), a = t.selectFilter ? "combobox" : "listbox", l = t.multiple ? "true" : "false", c = t.disabled ? "true" : "false";
  r.setAttribute(J_, ""), p.addClass(r, i.selectInput), es(
    r,
    t,
    i.selectInputSizeDefault,
    i.selectInputSizeSm,
    i.selectInputSizeLg
  ), t.selectFormWhite && p.addClass(r, i.selectInputWhite), r.setAttribute("type", "text"), r.setAttribute("role", a), r.setAttribute("aria-multiselectable", l), r.setAttribute("aria-disabled", c), r.setAttribute("aria-haspopup", "true"), r.setAttribute("aria-expanded", false), t.tabIndex && r.setAttribute("tabIndex", t.tabIndex), t.disabled && r.setAttribute("disabled", ""), t.selectPlaceholder !== "" && r.setAttribute("placeholder", t.selectPlaceholder), t.selectValidation ? (p.addStyle(r, {
    "pointer-events": "none",
    "caret-color": "transparent"
  }), p.addStyle(o, { cursor: "pointer" })) : r.setAttribute("readonly", "true"), t.selectValidation && (r.setAttribute("required", "true"), r.setAttribute("aria-required", "true"), r.addEventListener("keydown", um));
  const d = M("div");
  p.addClass(d, i.selectValidationValid);
  const _ = document.createTextNode(
    `${t.selectValidFeedback}`
  );
  d.appendChild(_);
  const f = M("div");
  p.addClass(f, i.selectValidationInvalid);
  const m = document.createTextNode(
    `${t.selectInvalidFeedback}`
  );
  f.appendChild(m);
  const g = M("span");
  g.setAttribute(tm, ""), p.addClass(g, i.selectClearBtn), es(
    g,
    t,
    i.selectClearBtnDefault,
    i.selectClearBtnSm,
    i.selectClearBtnLg
  ), t.selectFormWhite && p.addClass(g, i.selectClearBtnWhite);
  const b = document.createTextNode("✕");
  g.appendChild(b), g.setAttribute("tabindex", "0");
  const T = M("span");
  return p.addClass(T, i.selectArrow), es(
    T,
    t,
    i.selectArrowDefault,
    i.selectArrowSm,
    i.selectArrowLg
  ), t.selectFormWhite && p.addClass(T, i.selectArrowWhite), T.innerHTML = hm, o.appendChild(r), e && (p.addClass(e, i.selectLabel), es(
    e,
    t,
    i.selectLabelSizeDefault,
    i.selectLabelSizeSm,
    i.selectLabelSizeLg
  ), t.selectFormWhite && p.addClass(e, i.selectLabelWhite), o.appendChild(e)), t.selectValidation && (o.appendChild(d), o.appendChild(f)), t.selectClearButton && o.appendChild(g), o.appendChild(T), n.appendChild(o), n;
}
function na(s, t, e, i, n, o, r, a) {
  const l = document.createElement("div");
  l.setAttribute(em, ""), p.addClass(l, a.selectDropdownContainer), l.setAttribute("id", `${s}`), l.style.width = `${e}px`;
  const c = document.createElement("div");
  c.setAttribute("tabindex", 0), c.setAttribute(im, ""), p.addClass(c, a.dropdown);
  const d = M("div");
  d.setAttribute(sm, ""), p.addClass(d, a.optionsWrapper), p.addClass(d, a.optionsWrapperScrollbar), d.style.maxHeight = `${i}px`;
  const _ = Dl(
    o,
    n,
    t,
    a
  );
  return d.appendChild(_), t.selectFilter && c.appendChild(
    fm(t.selectSearchPlaceholder, a)
  ), c.appendChild(d), r && c.appendChild(r), l.appendChild(c), l;
}
function Dl(s, t, e, i) {
  const n = M("div");
  n.setAttribute(nm, ""), p.addClass(n, i.optionsList);
  let o;
  return e.multiple ? o = mm(
    s,
    t,
    e,
    i
  ) : o = _m(s, e, i), o.forEach((r) => {
    n.appendChild(r);
  }), n;
}
function fm(s, t) {
  const e = M("div");
  p.addClass(e, t.inputGroup);
  const i = M("input");
  return i.setAttribute(om, ""), p.addClass(i, t.selectFilterInput), i.placeholder = s, i.setAttribute("role", "searchbox"), i.setAttribute("type", "text"), e.appendChild(i), e;
}
function _m(s, t, e) {
  return Il(s, t, e);
}
function mm(s, t, e, i) {
  let n = null;
  e.selectAll && (n = gm(
    t,
    s,
    e,
    i
  ));
  const o = Il(s, e, i);
  return n ? [n, ...o] : o;
}
function Il(s, t, e) {
  const i = [];
  return s.forEach((n) => {
    if (Object.prototype.hasOwnProperty.call(
      n,
      "options"
    )) {
      const r = Tm(n, t, e);
      i.push(r);
    } else
      i.push($l(n, t, e));
  }), i;
}
function gm(s, t, e, i) {
  const n = jn(t), o = M("div");
  return o.setAttribute(xl, ""), p.addClass(o, i.selectOption), o.setAttribute(rm, ""), p.addStyle(o, {
    height: `${e.selectOptionHeight}px`
  }), o.setAttribute("role", "option"), o.setAttribute("aria-selected", n), n && o.setAttribute(Sl, ""), o.appendChild(Ll(s, e, i)), s.setNode(o), o;
}
function $l(s, t, e) {
  if (s.node)
    return s.node;
  const i = M("div");
  return i.setAttribute(xl, ""), p.addClass(i, e.selectOption), p.addStyle(i, {
    height: `${t.selectOptionHeight}px`
  }), p.setDataAttribute(i, "id", s.id), i.setAttribute("role", "option"), i.setAttribute("aria-selected", s.selected), i.setAttribute("aria-disabled", s.disabled), s.selected && i.setAttribute(Sl, ""), s.disabled && i.setAttribute("data-te-select-option-disabled", true), s.hidden && p.addClass(i, "hidden"), i.appendChild(Ll(s, t, e)), s.icon && i.appendChild(Em(s, e)), s.setNode(i), i;
}
function Ll(s, t, e) {
  const i = M("span");
  i.setAttribute(am, ""), p.addClass(i, e.selectOptionText);
  const n = document.createTextNode(s.label);
  return t.multiple && i.appendChild(vm(s, e)), i.appendChild(n), (s.secondaryText || typeof s.secondaryText == "number") && i.appendChild(
    bm(s.secondaryText, e)
  ), i;
}
function bm(s, t) {
  const e = M("span");
  p.addClass(e, t.selectOptionSecondaryText);
  const i = document.createTextNode(s);
  return e.appendChild(i), e;
}
function vm(s, t) {
  const e = M("input");
  e.setAttribute("type", "checkbox"), p.addClass(e, t.formCheckInput), e.setAttribute(lm, "");
  const i = M("label");
  return s.selected && e.setAttribute("checked", true), s.disabled && e.setAttribute("disabled", true), e.appendChild(i), e;
}
function Em(s, t) {
  const e = M("span"), i = M("img");
  return p.addClass(i, t.selectOptionIcon), i.src = s.icon, e.appendChild(i), e;
}
function Tm(s, t, e) {
  const i = M("div");
  i.setAttribute(cm, ""), p.addClass(i, e.selectOptionGroup), i.setAttribute("role", "group"), i.setAttribute("id", s.id), s.hidden && p.addClass(i, "hidden");
  const n = M("label");
  return n.setAttribute(dm, ""), p.addClass(n, e.selectOptionGroupLabel), p.addStyle(n, { height: `${t.selectOptionHeight}px` }), n.setAttribute("for", s.id), n.textContent = s.label, i.appendChild(n), s.options.forEach((o) => {
    i.appendChild($l(o, t, e));
  }), i;
}
function Cm(s, t) {
  const e = M("div");
  return e.innerHTML = s, p.addClass(e, t.selectLabel), p.addClass(e, t.selectFakeValue), e;
}
var yn = "select";
var ri = "te.select";
var Ai = `.${ri}`;
var Am = `close${Ai}`;
var ym = `open${Ai}`;
var oa = `optionSelect${Ai}`;
var ra = `optionDeselect${Ai}`;
var wm = `valueChange${Ai}`;
var km = "change";
var aa = "data-te-select-init";
var Ml = "data-te-select-no-results-ref";
var la = "data-te-select-open";
var q = "data-te-input-state-active";
var Wt = "data-te-input-focused";
var wn = "data-te-input-disabled";
var Om = "data-te-select-option-group-label-ref";
var xm = "data-te-select-option-all-ref";
var ei = "data-te-select-selected";
var Sm = "[data-te-select-label-ref]";
var ca = "[data-te-select-input-ref]";
var Dm = "[data-te-select-input-filter-ref]";
var Im = "[data-te-select-dropdown-ref]";
var $m = "[data-te-select-options-wrapper-ref]";
var da = "[data-te-select-options-list-ref]";
var Lm = "[data-te-select-option-ref]";
var Mm = "[data-te-select-clear-btn-ref]";
var Nm = "[data-te-select-custom-content-ref]";
var Rm = `[${Ml}]`;
var ha = "[data-te-select-form-outline-ref]";
var Pm = "[data-te-select-toggle]";
var kn = "[data-te-input-notch-ref]";
var Hm = 200;
var Bm = {
  selectAutoSelect: false,
  selectContainer: "body",
  selectClearButton: false,
  disabled: false,
  selectDisplayedLabels: 5,
  selectFormWhite: false,
  multiple: false,
  selectOptionsSelectedLabel: "options selected",
  selectOptionHeight: 38,
  selectAll: true,
  selectAllLabel: "Select all",
  selectSearchPlaceholder: "Search...",
  selectSize: "default",
  selectVisibleOptions: 5,
  selectFilter: false,
  selectFilterDebounce: 300,
  selectNoResultText: "No results",
  selectValidation: false,
  selectValidFeedback: "Valid",
  selectInvalidFeedback: "Invalid",
  selectPlaceholder: ""
};
var Vm = {
  selectAutoSelect: "boolean",
  selectContainer: "string",
  selectClearButton: "boolean",
  disabled: "boolean",
  selectDisplayedLabels: "number",
  selectFormWhite: "boolean",
  multiple: "boolean",
  selectOptionsSelectedLabel: "string",
  selectOptionHeight: "number",
  selectAll: "boolean",
  selectAllLabel: "string",
  selectSearchPlaceholder: "string",
  selectSize: "string",
  selectVisibleOptions: "number",
  selectFilter: "boolean",
  selectFilterDebounce: "number",
  selectNoResultText: "string",
  selectValidation: "boolean",
  selectValidFeedback: "string",
  selectInvalidFeedback: "string",
  selectPlaceholder: "string"
};
var Wm = {
  dropdown: "relative outline-none min-w-[100px] m-0 scale-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-zinc-700",
  formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
  formOutline: "relative",
  initialized: "hidden",
  inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
  noResult: "flex items-center px-4",
  optionsList: "list-none m-0 p-0",
  optionsWrapper: "overflow-y-auto",
  optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5",
  selectArrowWhite: "text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white",
  selectArrowDefault: "top-2",
  selectArrowLg: "top-[13px]",
  selectArrowSm: "top-1",
  selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200",
  selectClearBtnWhite: "!text-gray-50",
  selectClearBtnDefault: "top-2 text-base",
  selectClearBtnLg: "top-[11px] text-base",
  selectClearBtnSm: "top-1 text-[0.8rem]",
  selectDropdownContainer: "z-[1070]",
  selectFakeValue: "transform-none hidden data-[te-input-state-active]:block",
  selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
  selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600",
  selectInputWhite: "!text-gray-50",
  selectInputSizeDefault: "py-[0.32rem] px-3 leading-[1.6]",
  selectInputSizeLg: "py-[0.32rem] px-3 leading-[2.15]",
  selectInputSizeSm: "py-[0.33rem] px-3 text-xs leading-[1.5]",
  selectLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary",
  selectLabelWhite: "!text-gray-50",
  selectLabelSizeDefault: "pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]",
  selectLabelSizeLg: "pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]",
  selectLabelSizeSm: "pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]",
  selectOption: "flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30",
  selectOptionGroup: "group/opt",
  selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
  selectOptionIcon: "w-7 h-7 rounded-full",
  selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300",
  selectOptionText: "group",
  selectValidationValid: "hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block",
  selectValidationInvalid: "hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block"
};
var Fm = {
  dropdown: "string",
  formCheckInput: "string",
  formOutline: "string",
  initialized: "string",
  inputGroup: "string",
  noResult: "string",
  optionsList: "string",
  optionsWrapper: "string",
  optionsWrapperScrollbar: "string",
  selectArrow: "string",
  selectArrowDefault: "string",
  selectArrowLg: "string",
  selectArrowSm: "string",
  selectClearBtn: "string",
  selectClearBtnDefault: "string",
  selectClearBtnLg: "string",
  selectClearBtnSm: "string",
  selectDropdownContainer: "string",
  selectFakeValue: "string",
  selectFilterInput: "string",
  selectInput: "string",
  selectInputSizeDefault: "string",
  selectInputSizeLg: "string",
  selectInputSizeSm: "string",
  selectLabel: "string",
  selectLabelSizeDefault: "string",
  selectLabelSizeLg: "string",
  selectLabelSizeSm: "string",
  selectOption: "string",
  selectOptionGroup: "string",
  selectOptionGroupLabel: "string",
  selectOptionIcon: "string",
  selectOptionSecondaryText: "string",
  selectOptionText: "string"
};
var Nl = class _Nl {
  constructor(t, e, i) {
    this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._optionsToRender = this._getOptionsToRender(t), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._filteredOptionsList = null, this._selectionModel = new q_(this.multiple), this._activeOptionIndex = -1, this._activeOption = null, this._wrapperId = Ot("select-wrapper-"), this._dropdownContainerId = Ot("select-dropdown-container-"), this._selectAllId = Ot("select-all-"), this._debounceTimeoutId = null, this._dropdownHeight = this._config.selectOptionHeight * this._config.selectVisibleOptions, this._popper = null, this._input = null, this._label = h.next(this._element, Sm)[0], this._notch = null, this._fakeValue = null, this._isFakeValueActive = false, this._customContent = h.next(
      t,
      Nm
    )[0], this._toggleButton = null, this._elementToggle = null, this._wrapper = null, this._inputEl = null, this._dropdownContainer = null, this._container = null, this._selectAllOption = null, this._init(), this._mutationObserver = null, this._isOpen = false, this._addMutationObserver(), this._element && I.setData(t, ri, this);
  }
  static get NAME() {
    return yn;
  }
  get filterInput() {
    return h.findOne(
      Dm,
      this._dropdownContainer
    );
  }
  get dropdown() {
    return h.findOne(Im, this._dropdownContainer);
  }
  get optionsList() {
    return h.findOne(
      da,
      this._dropdownContainer
    );
  }
  get optionsWrapper() {
    return h.findOne(
      $m,
      this._dropdownContainer
    );
  }
  get clearButton() {
    return h.findOne(Mm, this._wrapper);
  }
  get options() {
    return this._filteredOptionsList ? this._filteredOptionsList : this._plainOptions;
  }
  get value() {
    return this.multiple ? this._selectionModel.values : this._selectionModel.value;
  }
  get multiple() {
    return this._config.multiple;
  }
  get hasSelectAll() {
    return this.multiple && this._config.selectAll;
  }
  get hasSelection() {
    return this._selectionModel.selection || this._selectionModel.selections.length > 0;
  }
  _getConfig(t) {
    const e = p.getDataAttributes(this._element);
    return t = {
      ...Bm,
      ...e,
      ...t
    }, this._element.hasAttribute("multiple") && (t.multiple = true), this._element.hasAttribute("disabled") && (t.disabled = true), this._element.tabIndex && (t.tabIndex = this._element.getAttribute("tabIndex")), N(yn, t, Vm), t;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...Wm,
      ...e,
      ...t
    }, N(yn, t, Fm), t;
  }
  _getOptionsToRender(t) {
    const e = [];
    return t.childNodes.forEach((n) => {
      if (n.nodeName === "OPTGROUP") {
        const o = {
          id: Ot("group-"),
          label: n.label,
          disabled: n.hasAttribute("disabled"),
          hidden: n.hasAttribute("hidden"),
          options: []
        };
        n.childNodes.forEach((a) => {
          a.nodeName === "OPTION" && o.options.push(
            this._createOptionObject(a, o)
          );
        }), e.push(o);
      } else
        n.nodeName === "OPTION" && e.push(this._createOptionObject(n));
    }), e;
  }
  _getPlainOptions(t) {
    if (!h.findOne("optgroup", this._element))
      return t;
    const i = [];
    return t.forEach((n) => {
      Object.prototype.hasOwnProperty.call(
        n,
        "options"
      ) ? n.options.forEach((r) => {
        i.push(r);
      }) : i.push(n);
    }), i;
  }
  _createOptionObject(t, e = {}) {
    const i = Ot("option-"), n = e.id ? e.id : null, o = e.disabled ? e.disabled : false, r = t.selected || t.hasAttribute(ei), a = t.hasAttribute("disabled") || o, l = t.hasAttribute("hidden") || e && e.hidden, c = this.multiple, d = t.value, _ = t.label, f = p.getDataAttribute(
      t,
      "selectSecondaryText"
    ), m = p.getDataAttribute(t, "select-icon");
    return new sa(
      i,
      t,
      c,
      d,
      _,
      r,
      a,
      l,
      f,
      n,
      m
    );
  }
  _getNavigationOptions() {
    const t = this.options.filter((e) => !e.hidden);
    return this.hasSelectAll ? [this._selectAllOption, ...t] : t;
  }
  _init() {
    this._renderMaterialWrapper(), this._wrapper = h.findOne(`#${this._wrapperId}`), this._input = h.findOne(ca, this._wrapper), this._config.disabled && this._input.setAttribute(wn, "");
    const t = this._config.selectContainer;
    t === "body" ? this._container = document.body : this._container = h.findOne(t), this._initOutlineInput(), this._setDefaultSelections(), this._updateInputValue(), this._appendFakeValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._bindComponentEvents(), this.hasSelectAll && (this._selectAllOption = this._createSelectAllOption()), this._dropdownContainer = na(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    ), this._setFirstActiveOption(), this._listenToFocusChange();
  }
  _renderMaterialWrapper() {
    const t = pm(
      this._wrapperId,
      this._config,
      this._label,
      this._classes
    );
    this._element.parentNode.insertBefore(t, this._element), p.addClass(this._element, this._classes.initialized), t.appendChild(this._element);
  }
  _initOutlineInput() {
    const t = h.findOne(
      ha,
      this._wrapper
    );
    new V(t, {
      inputFormWhite: this._config.selectFormWhite
    }).init(), this._notch = h.findOne(kn, this._wrapper);
  }
  _bindComponentEvents() {
    this._listenToComponentKeydown(), this._listenToWrapperClick(), this._listenToClearBtnClick(), this._listenToClearBtnKeydown();
  }
  _setDefaultSelections() {
    this.options.forEach((t) => {
      t.selected && this._selectionModel.select(t);
    });
  }
  _listenToComponentKeydown() {
    u.on(this._wrapper, "keydown", this._handleKeydown.bind(this));
  }
  _handleKeydown(t) {
    this._isOpen && !this._config.selectFilter ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
  }
  _handleOpenKeydown(t) {
    const e = t.keyCode, i = e === Is || e === rt && t.altKey || e === fi;
    if (e === fi && this._config.selectAutoSelect && !this.multiple && this._handleAutoSelection(this._activeOption), i) {
      this.close(), this._input.focus();
      return;
    }
    switch (e) {
      case U:
        this._setNextOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case rt:
        this._setPreviousOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case Le:
        this._setFirstOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case Me:
        this._setLastOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case lt:
        t.preventDefault(), this._activeOption && (this.hasSelectAll && this._activeOptionIndex === 0 ? this._handleSelectAll() : this._handleSelection(this._activeOption));
        return;
      default:
        return;
    }
    t.preventDefault();
  }
  _handleClosedKeydown(t) {
    const e = t.keyCode;
    if (e === lt && t.preventDefault(), (e === lt || e === U && t.altKey || e === U && this.multiple) && this.open(), this.multiple)
      switch (e) {
        case U:
          this.open();
          break;
        case rt:
          this.open();
          break;
        default:
          return;
      }
    else
      switch (e) {
        case U:
          this._setNextOptionActive(), this._handleSelection(this._activeOption);
          break;
        case rt:
          this._setPreviousOptionActive(), this._handleSelection(this._activeOption);
          break;
        case Le:
          this._setFirstOptionActive(), this._handleSelection(this._activeOption);
          break;
        case Me:
          this._setLastOptionActive(), this._handleSelection(this._activeOption);
          break;
        default:
          return;
      }
    t.preventDefault();
  }
  _scrollToOption(t) {
    if (!t)
      return;
    let e;
    const i = this.options.filter((d) => !d.hidden);
    this.hasSelectAll ? e = i.indexOf(t) + 1 : e = i.indexOf(t);
    const n = this._getNumberOfGroupsBeforeOption(e), o = e + n, r = this.optionsWrapper, a = r.offsetHeight, l = this._config.selectOptionHeight, c = r.scrollTop;
    if (e > -1) {
      const d = o * l, _ = d + l > c + a;
      d < c ? r.scrollTop = d : _ ? r.scrollTop = d - a + l : r.scrollTop = c;
    }
  }
  _getNumberOfGroupsBeforeOption(t) {
    const e = this.options.filter((r) => !r.hidden), i = this._optionsToRender.filter((r) => !r.hidden), n = this.hasSelectAll ? t - 1 : t;
    let o = 0;
    for (let r = 0; r <= n; r++)
      e[r].groupId && i[o] && i[o].id && e[r].groupId === i[o].id && o++;
    return o;
  }
  _setNextOptionActive() {
    let t = this._activeOptionIndex + 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t += 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setPreviousOptionActive() {
    let t = this._activeOptionIndex - 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t -= 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setFirstOptionActive() {
    const e = this._getNavigationOptions();
    this._updateActiveOption(e[0], 0);
  }
  _setLastOptionActive() {
    const t = this._getNavigationOptions(), e = t.length - 1;
    this._updateActiveOption(t[e], e);
  }
  _updateActiveOption(t, e) {
    const i = this._activeOption;
    i && i.removeActiveStyles(), t.setActiveStyles(), this._activeOptionIndex = e, this._activeOption = t;
  }
  _listenToWrapperClick() {
    u.on(this._wrapper, "click", () => {
      this.toggle();
    });
  }
  _listenToClearBtnClick() {
    u.on(this.clearButton, "click", (t) => {
      t.preventDefault(), t.stopPropagation(), this._handleClear();
    });
  }
  _listenToClearBtnKeydown() {
    u.on(this.clearButton, "keydown", (t) => {
      t.keyCode === lt && (this._handleClear(), t.preventDefault(), t.stopPropagation());
    });
  }
  _handleClear() {
    if (this.multiple)
      this._selectionModel.clear(), this._deselectAllOptions(this.options), this.hasSelectAll && this._updateSelectAllState();
    else {
      const t = this._selectionModel.selection;
      this._selectionModel.clear(), t.deselect();
    }
    this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(null), this._emitNativeChangeEvent();
  }
  _listenToOptionsClick() {
    u.on(this.optionsWrapper, "click", (t) => {
      if (t.target.hasAttribute(
        Om
      ))
        return;
      const i = t.target.nodeName === "DIV" ? t.target : h.closest(t.target, Lm);
      if (i.hasAttribute(xm)) {
        this._handleSelectAll();
        return;
      }
      const o = i.dataset.teId, r = this.options.find((a) => a.id === o);
      r && !r.disabled && this._handleSelection(r);
    });
  }
  _handleSelectAll() {
    this._selectAllOption.selected ? (this._deselectAllOptions(this.options), this._selectAllOption.deselect()) : (this._selectAllOptions(this.options), this._selectAllOption.select()), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _selectAllOptions(t) {
    t.forEach((e) => {
      !e.selected && !e.disabled && (this._selectionModel.select(e), e.select());
    });
  }
  _deselectAllOptions(t) {
    t.forEach((e) => {
      e.selected && !e.disabled && (this._selectionModel.deselect(e), e.deselect());
    });
  }
  _handleSelection(t) {
    this.multiple ? (this._handleMultiSelection(t), this.hasSelectAll && this._updateSelectAllState()) : this._handleSingleSelection(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleAutoSelection(t) {
    this._singleOptionSelect(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleSingleSelection(t) {
    this._singleOptionSelect(t), this.close(), this._input.focus();
  }
  _singleOptionSelect(t) {
    const e = this._selectionModel.selections[0];
    e && e !== t && (this._selectionModel.deselect(e), e.deselect(), e.node.setAttribute(ei, false), u.trigger(this._element, ra, {
      value: e.value
    })), (!e || e && t !== e) && (this._selectionModel.select(t), t.select(), t.node.setAttribute(ei, true), u.trigger(this._element, oa, {
      value: t.value
    }), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent());
  }
  _handleMultiSelection(t) {
    t.selected ? (this._selectionModel.deselect(t), t.deselect(), t.node.setAttribute(ei, false), u.trigger(this._element, ra, {
      value: t.value
    })) : (this._selectionModel.select(t), t.select(), t.node.setAttribute(ei, true), u.trigger(this._element, oa, {
      value: t.value
    })), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _emitValueChangeEvent(t) {
    u.trigger(this._element, wm, { value: t });
  }
  _emitNativeChangeEvent() {
    u.trigger(this._element, km);
  }
  _updateInputValue() {
    const t = this.multiple ? this._selectionModel.labels : this._selectionModel.label;
    let e;
    this.multiple && this._config.selectDisplayedLabels !== -1 && this._selectionModel.selections.length > this._config.selectDisplayedLabels ? e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}` : e = t, !this.multiple && !this._isSelectionValid(this._selectionModel.selection) ? this._input.value = "" : this._isLabelEmpty(this._selectionModel.selection) ? this._input.value = " " : e ? this._input.value = e : this.multiple || !this._optionsToRender[0] ? this._input.value = "" : this._input.value = this._optionsToRender[0].label;
  }
  _isSelectionValid(t) {
    return !(t && (t.disabled || t.value === ""));
  }
  _isLabelEmpty(t) {
    return !!(t && t.label === "");
  }
  _appendFakeValue() {
    if (!this._selectionModel.selection || this._selectionModel._multiple)
      return;
    const t = this._selectionModel.selection.label;
    this._fakeValue = Cm(t, this._classes), h.findOne(
      ha,
      this._wrapper
    ).appendChild(this._fakeValue);
  }
  _updateLabelPosition() {
    const t = this._element.hasAttribute(aa), e = this._input.value !== "";
    this._label && (t && (e || this._isOpen || this._isFakeValueActive) ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q, "")));
  }
  _updateLabelPositionWhileClosing() {
    this._label && (this._input.value !== "" || this._isFakeValueActive ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q)));
  }
  _updateFakeLabelPosition() {
    this._fakeValue && (this._input.value === "" && this._fakeValue.innerHTML !== "" ? (this._isFakeValueActive = true, this._fakeValue.setAttribute(q, "")) : (this._isFakeValueActive = false, this._fakeValue.removeAttribute(q)));
  }
  _updateClearButtonVisibility() {
    if (!this.clearButton)
      return;
    this._selectionModel.selection || this._selectionModel.selections.length > 0 ? p.addStyle(this.clearButton, { display: "block" }) : p.addStyle(this.clearButton, { display: "none" });
  }
  _updateSelectAllState() {
    const t = this._selectAllOption.selected, e = jn(this.options);
    !e && t ? this._selectAllOption.deselect() : e && !t && this._selectAllOption.select();
  }
  toggle() {
    this._isOpen ? this.close() : this.open();
  }
  open() {
    const t = this._config.disabled, e = u.trigger(this._element, ym);
    this._isOpen || t || e.defaultPrevented || (this._openDropdown(), this._updateDropdownWidth(), this._setFirstActiveOption(), this._scrollToOption(this._activeOption), this._config.selectFilter && (setTimeout(() => {
      this.filterInput.focus();
    }, 0), this._listenToSelectSearch(), this._listenToDropdownKeydown()), this._listenToOptionsClick(), this._listenToOutsideClick(), this._listenToWindowResize(), this._isOpen = true, this._updateLabelPosition(), this._setInputActiveStyles());
  }
  _openDropdown() {
    this._popper = je(this._input, this._dropdownContainer, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 1]
          }
        }
      ]
    }), this._container.appendChild(this._dropdownContainer), setTimeout(() => {
      this.dropdown.setAttribute(la, "");
    }, 0);
  }
  _updateDropdownWidth() {
    const t = this._input.offsetWidth;
    p.addStyle(this._dropdownContainer, { width: `${t}px` });
  }
  _setFirstActiveOption() {
    const t = this._getNavigationOptions(), e = this._activeOption;
    e && e.removeActiveStyles();
    const i = this.multiple ? this._selectionModel.selections[0] : this._selectionModel.selection;
    i ? (this._activeOption = i, i.setActiveStyles(), this._activeOptionIndex = t.findIndex(
      (n) => n === i
    )) : (this._activeOption = null, this._activeOptionIndex = -1);
  }
  _setInputActiveStyles() {
    this._input.setAttribute(Wt, ""), h.findOne(kn, this._wrapper).setAttribute(
      Wt,
      ""
    );
  }
  _listenToWindowResize() {
    u.on(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleWindowResize() {
    this._dropdownContainer && this._updateDropdownWidth();
  }
  _listenToSelectSearch() {
    this.filterInput.addEventListener("input", (t) => {
      const e = t.target.value, i = this._config.selectFilterDebounce;
      this._debounceFilter(e, i);
    });
  }
  _debounceFilter(t, e) {
    this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(() => {
      this._filterOptions(t);
    }, e);
  }
  _filterOptions(t) {
    const e = [];
    this._optionsToRender.forEach((o) => {
      const r = Object.prototype.hasOwnProperty.call(
        o,
        "options"
      ), a = !r && o.label.toLowerCase().includes(t.toLowerCase()), l = {};
      r && (l.label = o.label, l.options = this._filter(t, o.options), l.options.length > 0 && e.push(l)), a && e.push(o);
    });
    const i = this._config.selectNoResultText !== "", n = e.length !== 0;
    if (n)
      this._updateOptionsListTemplate(e), this._popper.forceUpdate(), this._filteredOptionsList = this._getPlainOptions(e), this.hasSelectAll && this._updateSelectAllState(), this._setFirstActiveOption();
    else if (!n && i) {
      const o = this._getNoResultTemplate();
      this.optionsWrapper.innerHTML = o;
    }
  }
  _updateOptionsListTemplate(t) {
    const e = h.findOne(da, this._dropdownContainer) || h.findOne(Rm, this._dropdownContainer), i = Dl(
      t,
      this._selectAllOption,
      this._config,
      this._classes
    );
    this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(i);
  }
  _getNoResultTemplate() {
    return `<div class="${this._classes.noResult}" ${Ml} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`;
  }
  _filter(t, e) {
    const i = t.toLowerCase();
    return e.filter(
      (n) => n.label.toLowerCase().includes(i)
    );
  }
  _listenToDropdownKeydown() {
    u.on(
      this.dropdown,
      "keydown",
      this._handleOpenKeydown.bind(this)
    );
  }
  _listenToOutsideClick() {
    this._outsideClick = this._handleOutSideClick.bind(this), u.on(document, "click", this._outsideClick);
  }
  _listenToFocusChange(t = true) {
    if (t === false) {
      u.remove(
        this._input,
        "focus",
        () => this._notch.setAttribute(Wt, "")
      ), u.remove(
        this._input,
        "blur",
        () => this._notch.removeAttribute(Wt)
      );
      return;
    }
    u.on(
      this._input,
      "focus",
      () => this._notch.setAttribute(Wt, "")
    ), u.on(
      this._input,
      "blur",
      () => this._notch.removeAttribute(Wt)
    );
  }
  _handleOutSideClick(t) {
    const e = this._wrapper && this._wrapper.contains(t.target), i = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
    let o;
    this._toggleButton || (this._elementToggle = h.find(Pm)), this._elementToggle && this._elementToggle.forEach((r) => {
      const a = p.getDataAttribute(
        r,
        "select-toggle"
      );
      (a === this._element.id || this._element.classList.contains(a)) && (this._toggleButton = r, o = this._toggleButton.contains(t.target));
    }), !e && !i && !n && !o && this.close();
  }
  close() {
    const t = u.trigger(this._element, Am);
    !this._isOpen || t.defaultPrevented || (this._config.selectFilter && this.hasSelectAll && (this._resetFilterState(), this._updateOptionsListTemplate(this._optionsToRender), this._config.multiple && this._updateSelectAllState()), this._removeDropdownEvents(), this.dropdown.removeAttribute(la), setTimeout(() => {
      this._input.removeAttribute(Wt), this._input.blur(), h.findOne(kn, this._wrapper).removeAttribute(
        Wt
      ), this._label && !this.hasSelection && (this._label.removeAttribute(q), this._notch.setAttribute(q, ""), this._input.removeAttribute(q), this._notch.removeAttribute(q)), this._updateLabelPositionWhileClosing();
    }, 0), setTimeout(() => {
      this._container && this._dropdownContainer.parentNode === this._container && this._container.removeChild(this._dropdownContainer), this._popper.destroy(), this._isOpen = false, u.off(this.dropdown, "transitionend");
    }, Hm));
  }
  _resetFilterState() {
    this.filterInput.value = "", this._filteredOptionsList = null;
  }
  _removeDropdownEvents() {
    u.off(document, "click", this._outsideClick), this._config.selectFilter && u.off(this.dropdown, "keydown"), u.off(this.optionsWrapper, "click");
  }
  _addMutationObserver() {
    this._mutationObserver = new MutationObserver(() => {
      this._wrapper && (this._updateSelections(), this._updateDisabledState());
    }), this._observeMutationObserver();
  }
  _updateSelections() {
    this._optionsToRender = this._getOptionsToRender(this._element), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._selectionModel.clear(), this._setDefaultSelections(), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this.hasSelectAll && this._updateSelectAllState();
    const t = this._config.filter && this.filterInput && this.filterInput.value;
    this._isOpen && !t ? (this._updateOptionsListTemplate(this._optionsToRender), this._setFirstActiveOption()) : this._isOpen && t ? (this._filterOptions(this.filterInput.value), this._setFirstActiveOption()) : this._dropdownContainer = na(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    );
  }
  _updateDisabledState() {
    const t = h.findOne(ca, this._wrapper);
    this._element.hasAttribute("disabled") ? (this._config.disabled = true, t.setAttribute("disabled", ""), t.setAttribute(wn, "")) : (this._config.disabled = false, t.removeAttribute("disabled"), t.removeAttribute(wn));
  }
  _observeMutationObserver() {
    this._mutationObserver && this._mutationObserver.observe(this._element, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  }
  _disconnectMutationObserver() {
    this.mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
  }
  _createSelectAllOption() {
    const t = this._selectAllId, e = null, i = true, n = "select-all", o = this._config.selectAllLabel, r = jn(this.options), a = false, l = false, c = null, d = null, _ = null;
    return new sa(
      t,
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      c,
      d,
      _
    );
  }
  dispose() {
    this._removeComponentEvents(), this._destroyMaterialSelect(), this._listenToFocusChange(false), I.removeData(this._element, ri);
  }
  _removeComponentEvents() {
    u.off(this.input, "click"), u.off(this.wrapper, this._handleKeydown.bind(this)), u.off(this.clearButton, "click"), u.off(this.clearButton, "keydown"), u.off(window, "resize", this._handleWindowResize.bind(this));
  }
  _destroyMaterialSelect() {
    this._isOpen && this.close(), this._destroyMaterialTemplate();
  }
  _destroyMaterialTemplate() {
    const t = this._wrapper.parentNode, e = h.find("label", this._wrapper);
    t.appendChild(this._element), e.forEach((i) => {
      t.appendChild(i);
    }), e.forEach((i) => {
      i.removeAttribute(q);
    }), p.removeClass(this._element, this._classes.initialized), this._element.removeActiveStyles(aa), t.removeChild(this._wrapper);
  }
  setValue(t) {
    this.options.filter((i) => i.selected).forEach((i) => i.nativeOption.selected = false), Array.isArray(t) ? t.forEach((i) => {
      this._selectByValue(i);
    }) : this._selectByValue(t), this._updateSelections();
  }
  _selectByValue(t) {
    const e = this.options.find(
      (i) => i.value === t
    );
    return e ? (e.nativeOption.selected = true, true) : false;
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, ri);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _Nl(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, ri);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Ym = (s) => {
  Aa(() => {
    const t = Ca();
    if (t) {
      const e = s.NAME, i = t.fn[e];
      t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface);
    }
  });
};
var jm = (s, t) => {
  u.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      e.preventDefault(), s.getOrCreateInstance(this).toggle();
    }
  );
};
var Km = (s, t) => {
  u.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), ue(this))
        return;
      s.getOrCreateInstance(this).show();
    }
  );
};
var Um = (s, t) => {
  u.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      const i = Xt(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), ue(this))
        return;
      u.one(i, s.EVENT_HIDDEN, () => {
        St(this) && this.focus();
      });
      const n = h.findOne(s.OPEN_SELECTOR);
      n && n !== i && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
};
var zm = (s, t) => {
  u.on(
    document,
    `click.te.${s.NAME}`,
    t,
    (e) => {
      e.preventDefault();
      const i = e.target.closest(t);
      s.getOrCreateInstance(i).toggle();
    }
  );
};
var Xm = (s, t) => {
  u.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      const i = Xt(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), u.one(i, s.EVENT_SHOW, (r) => {
        r.defaultPrevented || u.one(i, s.EVENT_HIDDEN, () => {
          St(this) && this.focus();
        });
      });
      const n = h.findOne(
        `[${s.OPEN_SELECTOR}="true"]`
      );
      n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
};
var Gm = (s, t) => {
  u.one(
    document,
    "mousedown",
    t,
    s.autoInitial(new s())
  );
};
var qm = (s, t) => {
  u.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
      const i = Xn(this);
      h.find(i).forEach((o) => {
        s.getOrCreateInstance(o, { toggle: false }).toggle();
      });
    }
  );
};
var Ft = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
};
var gs = {
  line: {
    options: {
      ...Ft,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        intersect: false,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...Ft,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        intersect: false,
        mode: "index"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: true,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...Ft,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  doughnut: {
    options: {
      ...Ft,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  polarArea: {
    options: {
      ...Ft,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  radar: {
    options: {
      ...Ft,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  scatter: {
    options: {
      ...Ft,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        intersect: false,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...Ft,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: true,
      legend: {
        display: true
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
var Qm = (s, t) => {
  const e = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", i = (o) => typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o) => {
    const r = {};
    return Object.keys(o).forEach((a) => {
      if (a.match(/dataset.*/)) {
        const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
        r[l] = i(o[a]);
      }
    }), r;
  };
  h.find(t).forEach((o) => {
    if (p.getDataAttribute(o, "chart") !== "bubble" && p.getDataAttribute(o, "chart") !== "scatter") {
      const r = p.getDataAttributes(o), a = {
        data: {
          datasets: [n(r)]
        }
      };
      return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new s(o, {
        ...a,
        ...gs[a.type]
      });
    }
    return null;
  });
};
var ai = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: false
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: false
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: false
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-init]",
    isToggler: false
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: false
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: false
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: false
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: false
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: false
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: false
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: false
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: false
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: false
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: false,
    advanced: Qm
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: true,
    callback: zm
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: true,
    callback: qm
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: true,
    callback: jm
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: true,
    callback: Xm
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: true,
    callback: Gm
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: true,
    callback: Um
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: true,
    callback: Km
  }
};
var Zm = (s) => ai[s.NAME] || null;
var Jm = (s) => {
  if (!s || [].includes(s.NAME))
    return;
  [].push(s.NAME);
  const t = Zm(s), e = (t == null ? void 0 : t.isToggler) || false;
  if (Ym(s), t != null && t.advanced) {
    t == null || t.advanced(s, t == null ? void 0 : t.selector);
    return;
  }
  if (e) {
    t == null || t.callback(s, t == null ? void 0 : t.selector);
    return;
  }
  h.find(t == null ? void 0 : t.selector).forEach((i) => {
    let n = s.getInstance(i);
    n || (n = new s(i));
  });
};
var tg = (s) => {
  s.forEach((t) => Jm(t));
};
var eg = (s, t = false) => {
  const e = Object.keys(ai).map((i) => {
    if (!!document.body.querySelector(ai[i].selector)) {
      const o = s[ai[i].name];
      return !o && ![].includes(i) && t && console.warn(
        `Please import ${ai[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  tg(e);
};
var ig = ({ inputID: s, labelText: t }, e) => (eg({ Input: V }, false), `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${s}"
          placeholder="Example label" />
        <label
          for="${s}"
          class="${e.chipsLabel}"
          >${t}
        </label>

        <div data-te-input-notch-ref class="${e.chipsNotchesWrapper}">
        <div class="${e.chipsNotchesLeading}" data-te-input-notch-leading-ref style="width: 9px;"></div>
        <div class="${e.chipsNotchesMiddle}" data-te-input-notch-middle-ref style="width: 87.2px;"></div>
        <div class="${e.chipsNotchesTrailing}" data-te-input-notch-trailing-ref></div>
      </div>
    </div>`);
var sg = ({ text: s, iconSVG: t }, e) => `<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${s}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`;
var bs = "chip";
var ng = `te.${bs}`;
var Rl = "data-te-chip-close";
var On = `[${Rl}]`;
var og = "delete.te.chips";
var rg = "select.te.chip";
var ag = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>';
var lg = {
  text: "string",
  closeIcon: "boolean",
  img: "object",
  iconSVG: "string"
};
var cg = {
  text: "",
  closeIcon: false,
  img: { path: "", alt: "" },
  iconSVG: ag
};
var dg = {
  icon: "float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out",
  chipElement: "flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded",
  chipCloseIcon: "w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
};
var hg = {
  icon: "string",
  chipElement: "string",
  chipCloseIcon: "string"
};
var ii = class {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i);
  }
  // Getters
  static get NAME() {
    return bs;
  }
  // Public
  init() {
    this._appendCloseIcon(), this._handleDelete(), this._handleTextChip(), this._handleClickOnChip();
  }
  dispose() {
    this._element = null, this._options = null, u.off(this._element, "click");
  }
  appendChip() {
    const { text: t, closeIcon: e, iconSVG: i } = this._options;
    return sg({ text: t, closeIcon: e, iconSVG: i }, this._classes);
  }
  // Private
  _appendCloseIcon(t = this._element) {
    if (!(h.find(On, this._element).length > 0) && this._options.closeIcon) {
      const e = M("span");
      e.classList = this._classes.icon, e.setAttribute(Rl), e.innerHTML = this._options.iconSVG, t.insertAdjacentElement("beforeend", e);
    }
  }
  _handleClickOnChip() {
    u.on(this._element, "click", (t) => {
      const { textContent: e } = t.target, i = {};
      i.tag = e.trim(), u.trigger(rg, { event: t, obj: i });
    });
  }
  _handleDelete() {
    h.find(
      On,
      this._element
    ).length !== 0 && u.on(this._element, "click", On, () => {
      u.trigger(this._element, og), this._element.remove();
    });
  }
  _handleTextChip() {
    this._element.innerText === "" && (this._element.innerText = this._options.text);
  }
  _getConfig(t) {
    const e = {
      ...cg,
      ...p.getDataAttributes(this._element),
      ...t
    };
    return N(bs, e, lg), e;
  }
  _getClasses(t) {
    const e = p.getDataClassAttributes(this._element);
    return t = {
      ...dg,
      ...e,
      ...t
    }, N(bs, t, hg), t;
  }
  static getInstance(t) {
    return I.getData(t, ng);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var ui = "chips";
var yi = `data-te-${ui}`;
var ua = `te.${ui}`;
var ug = `${yi}-init`;
var ft = `${yi}-active`;
var pa = `${yi}-initial`;
var Pl = `${yi}-placeholder`;
var pg = `${yi}-input-wrapper`;
var Kn = "data-te-chip-init";
var Hl = "data-te-chip-close";
var Bl = "data-te-chip-text";
var fg = `[${ft}]`;
var Un = `[${Kn}]`;
var _g = `${Un}${fg}`;
var xn = `[${Hl}]`;
var mg = `[${pg}]`;
var gg = `[${Bl}]`;
var bg = `[${Pl}]`;
var vg = "data-te-input-notch-leading-ref";
var Eg = "data-te-input-notch-middle-ref";
var Tg = `[${vg}]`;
var Cg = `[${Eg}]`;
var Ae = "data-te-input-state-active";
var Sn = "[data-te-input-notch-ref]";
var Ag = "add.te.chips";
var yg = "arrowDown.te.chips";
var wg = "arrowLeft.te.chips";
var kg = "arrowRight.te.chips";
var Og = "arrowUp.te.chips";
var fa = "delete.te.chips";
var _a = "select.te.chips";
var xg = {
  inputID: "string",
  parentSelector: "string",
  initialValues: "array",
  editable: "boolean",
  labelText: "string"
};
var Sg = {
  inputID: Ot("chips-input-"),
  parentSelector: "",
  initialValues: [{ tag: "init1" }, { tag: "init2" }],
  editable: false,
  labelText: "Example label"
};
var Dg = {
  opacity: "opacity-0",
  inputWrapperPadding: "p-[5px]",
  transition: "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  contentEditable: "outline-none !border-[3px] !border-solid !border-[#b2b3b4]",
  chipsInputWrapper: "relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  chipsInput: "peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
  chipsLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200",
  chipsNotchesWrapper: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  chipsNotchesLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-gray-300 dark:border-gray-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  chipsNotchesMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent border-gray-300 dark:border-gray-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  chipsNotchesTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-gray-300 dark:border-gray-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
};
var Ig = {
  opacity: "string",
  inputWrapperPadding: "string",
  transition: "string",
  contentEditable: "string",
  chipsInputWrapper: "string",
  chipsInput: "string",
  chipsLabel: "string",
  chipsNotchesWrapper: "string",
  chipsNotchesLeading: "string",
  chipsNotchesMiddle: "string",
  chipsNotchesTrailing: "string"
};
var Zg = class extends ii {
  constructor(e, i = {}, n) {
    super(e, i);
    Tt(this, "_handleBlurInput", ({ target: e2 }) => {
      e2.value.length > 0 && this._handleCreateChip(e2, e2.value), this.allChips.length > 0 ? (e2.setAttribute(ft, ""), this.input.setAttribute(Ae, ""), h.findOne(
        Sn,
        this.input.parentNode
      ).setAttribute(Ae, ""), this.chipsInputWrapper.classList.add(
        ...this._classes.inputWrapperPadding.split(" ")
      )) : (e2.removeAttribute(ft), this.input.removeAttribute(Ae), h.findOne(
        Sn,
        this.input.parentNode
      ).removeAttribute(Ae), this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      )), this.allChips.forEach((i2) => i2.removeAttribute(ft));
    });
    this._element = e, this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._element && I.setData(e, ua, this), this._options = this._getConfig(i), this._classes = this._getClasses(n), this.numberClicks = 0, this.init();
  }
  // Getters
  static get NAME() {
    return ui;
  }
  get activeChip() {
    return h.findOne(_g, this._element);
  }
  get input() {
    return h.findOne("input", this._element);
  }
  get allChips() {
    return h.find(Un, this._element);
  }
  get chipsInputWrapper() {
    return h.findOne(mg, this._element);
  }
  // Public
  init() {
    this._setChipsClass(), this._appendInputToElement(Pl), this._handleInitialValue(), this._handleInputText(), this._handleKeyboard(), this._handleChipsOnSelect(), this._handleEditable(), this._handleChipsFocus(), this._handleClicksOnChips(), this._getLabelData(), this._getLabelWidth(), this._getNotchData(), this._applyNotch();
  }
  dispose() {
    this._element = null, this._options = null;
  }
  // Private
  _getNotchData() {
    this._notchMiddle = h.findOne(
      Cg,
      this._element
    ), this._notchLeading = h.findOne(
      Tg,
      this._element
    );
  }
  _getLabelData() {
    this._label = h.findOne("label", this._element);
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _setChipsClass() {
    this._element.setAttribute(ug, "");
  }
  _handleDeleteEvents(e) {
    const [i] = this.allChips.slice(-1);
    if (this.activeChip === null)
      i.remove(), this._handleEvents(e, fa);
    else {
      const n = this.allChips.findIndex((a) => a === this.activeChip), o = this._handleActiveChipAfterRemove(n), r = [];
      if (this.activeChip === null)
        return;
      this.activeChip.remove(), this._handleEvents(e, fa), this.numberClicks = n, o.setAttribute(ft, ""), this.allChips.forEach((a) => {
        a.hasAttribute(ft) && (r.push(a), r.length > 1 && this.allChips.forEach((l) => l.remove()));
      });
    }
  }
  _handleUpEvents(e) {
    this.numberClicks += 1, this.numberClicks === this.allChips.length + 1 && (this.numberClicks = 0), this._handleRightKeyboardArrow(this.numberClicks), this._handleEvents(e, kg), this._handleEvents(e, Og);
  }
  _handleDownEvents(e) {
    this.numberClicks -= 1, this.numberClicks <= 0 && (this.numberClicks = this.allChips.length), this._handleLeftKeyboardArrow(this.numberClicks), this._handleEvents(e, wg), this._handleEvents(e, yg);
  }
  _keyboardEvents(e) {
    const { target: i, keyCode: n, ctrlKey: o } = e;
    i.value.length > 0 || this.allChips.length === 0 || (n === Xp || n === Gp ? this._handleDeleteEvents(e) : n === $e || n === rt ? this._handleUpEvents(e) : n === Ie || n === U ? this._handleDownEvents(e) : n === 65 && o && this._handleAddActiveClass());
  }
  _handleKeyboard() {
    u.on(
      this.input,
      "keydown",
      (e) => this._keyboardEvents(e)
    );
  }
  _handleEditable() {
    const { editable: e } = this._options;
    e && this.allChips.forEach((i) => {
      u.on(i, "dblclick", (n) => {
        const o = h.findOne(xn, i);
        i.classList.add(...this._classes.contentEditable.split(" ")), i.contentEditable = true, i.focus(), setTimeout(() => {
          p.addStyle(o, { display: "none" });
        }, 200), o.classList.add(...this._classes.opacity.split(" ")), n.target.textContent, u.trigger(i, _a, {
          event: n,
          allChips: this.allChips
        });
      }), u.on(document, "click", ({ target: n }) => {
        const o = h.findOne(xn, i), r = h.findOne(gg, i), a = n === i, l = i && i.contains(n);
        !a && !l && (i.contentEditable = false, i.classList.remove(...this._classes.contentEditable.split(" ")), r.textContent !== "" && setTimeout(() => {
          p.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
        }, 160)), r.textContent === "" && (setTimeout(() => {
          i.classList.add(...this._classes.opacity.split(" "));
        }, 200), setTimeout(() => {
          i.remove();
        }, 300));
      });
    });
  }
  _handleRemoveActiveClass() {
    this.allChips.forEach((e) => e.removeAttribute(ft));
  }
  _handleAddActiveClass() {
    this.allChips.forEach((e) => e.setAttribute(ft, ""));
  }
  _handleRightKeyboardArrow(e) {
    this._handleRemoveActiveClass(), e === 0 && (e = 1), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleLeftKeyboardArrow(e) {
    this._handleRemoveActiveClass(), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleActiveChipAfterRemove(e) {
    const i = e === 0 ? 1 : e - 1;
    return this.allChips[i];
  }
  _handleClicksOnChips() {
    u.on(this._element, "click", () => {
      this.allChips.length === 0 && (this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      ), this.input.removeAttribute(ft));
    });
  }
  _handleTextContent() {
    const e = [];
    return this.allChips.forEach((i) => e.push({ tag: i.textContent.trim() })), e;
  }
  _handleEvents(e, i) {
    const n = this._handleTextContent(), o = this.allChips.filter(
      (r) => r.hasAttribute(ft) && r
    );
    u.trigger(this._element, i, {
      event: e,
      allChips: this.allChips,
      arrOfObjects: n,
      active: o,
      activeObj: {
        tag: o.length <= 0 ? "" : o[0].textContent.trim()
      }
    });
  }
  _handleChipsFocus() {
    u.on(this._element, "click", ({ target: { attributes: e } }) => {
      const i = [...e];
      i.includes(Kn) || i.includes(Hl) || i.includes(Bl) || this.input.focus();
    });
  }
  _handleInitialValue() {
    if (this._appendInputToElement(pa), this._element.hasAttribute(pa)) {
      const { initialValues: e } = this._options;
      e.forEach(
        ({ tag: i }) => this._handleCreateChip(this.input, i)
      ), h.findOne(
        Sn,
        this.input.parentNode
      ).setAttribute(Ae, ""), this.input.setAttribute(ft, ""), this.input.setAttribute(Ae, "");
    }
    this.allChips.length > 0 && (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    ));
  }
  _handleKeysInputToElement(e) {
    const { keyCode: i, target: n } = e;
    if (n.hasAttribute(Kn)) {
      const o = h.findOne(xn, n);
      i === lt && (n.contentEditable = false, n.classList.remove(...this._classes.contentEditable.split(" ")), n.textContent !== "" ? setTimeout(() => {
        p.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
      }, 160) : n.textContent === "" && (setTimeout(() => {
        n.classList.add(...this._classes.opacity.split(" "));
      }, 200), setTimeout(() => {
        n.remove();
      }, 300)));
      return;
    }
    if (i === lt) {
      if (n.value === "")
        return;
      this._handleCreateChip(n, n.value), this._handleRemoveActiveClass(), this.numberClicks = this.allChips.length + 1, this._handleEvents(e, Ag);
    }
    this.allChips.length > 0 ? (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    )) : this.chipsInputWrapper.classList.remove(
      ...this._classes.inputWrapperPadding.split(" ")
    );
  }
  _handleInputText() {
    const e = h.findOne(
      bg,
      this._element
    );
    u.on(
      this._element,
      "keyup",
      e,
      (i) => this._handleKeysInputToElement(i)
    ), u.on(this.input, "blur", (i) => this._handleBlurInput(i));
  }
  _appendInputToElement(e) {
    if (!this._element.hasAttribute(e))
      return;
    const i = ig(this._options, this._classes);
    this._element.insertAdjacentHTML("beforeend", i);
  }
  _handleCreateChip(e, i) {
    const n = M("div"), o = ii.getInstance(n), r = new ii(o, { text: i }, this._classes);
    this._options.parentSelector !== "" ? document.querySelector(this._options.parentSelector).insertAdjacentHTML("beforeend", r.appendChip()) : e.insertAdjacentHTML("beforebegin", r.appendChip()), e.value = "", h.find(Un).forEach((a) => {
      let l = ii.getInstance(a);
      return l || (l = new ii(a, {}, this._classes)), l.init();
    }), this._handleEditable();
  }
  _handleChipsOnSelect() {
    this.allChips.forEach((e) => {
      u.on(this._element, "click", (i) => {
        u.trigger(e, _a, {
          event: i,
          allChips: this.allChips
        });
      });
    });
  }
  _handleAddActiveClassWithKebyboard(e) {
    let i;
    this.allChips[e - 1] === void 0 ? i = this.allChips[e - 2] : i = this.allChips[e - 1], i.setAttribute(ft);
  }
  _getConfig(e) {
    const i = {
      ...Sg,
      ...p.getDataAttributes(this._element),
      ...e
    };
    return N(ui, i, xg), i;
  }
  _getClasses(e) {
    const i = p.getDataClassAttributes(this._element);
    return e = {
      ...Dg,
      ...i,
      ...e
    }, N(ui, e, Ig), e;
  }
  static getInstance(e) {
    return I.getData(e, ua);
  }
  static getOrCreateInstance(e, i = {}) {
    return this.getInstance(e) || new this(e, typeof i == "object" ? i : null);
  }
};
var $g = function(t) {
  return Lg(t) && !Mg(t);
};
function Lg(s) {
  return !!s && typeof s == "object";
}
function Mg(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || Pg(s);
}
var Ng = typeof Symbol == "function" && Symbol.for;
var Rg = Ng ? Symbol.for("react.element") : 60103;
function Pg(s) {
  return s.$$typeof === Rg;
}
function Hg(s) {
  return Array.isArray(s) ? [] : {};
}
function _i(s, t) {
  return t.clone !== false && t.isMergeableObject(s) ? We(Hg(s), s, t) : s;
}
function Bg(s, t, e) {
  return s.concat(t).map(function(i) {
    return _i(i, e);
  });
}
function Vg(s, t) {
  if (!t.customMerge)
    return We;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : We;
}
function Wg(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return Object.propertyIsEnumerable.call(s, t);
  }) : [];
}
function ma(s) {
  return Object.keys(s).concat(Wg(s));
}
function Vl(s, t) {
  try {
    return t in s;
  } catch {
    return false;
  }
}
function Fg(s, t) {
  return Vl(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function Yg(s, t, e) {
  var i = {};
  return e.isMergeableObject(s) && ma(s).forEach(function(n) {
    i[n] = _i(s[n], e);
  }), ma(t).forEach(function(n) {
    Fg(s, n) || (Vl(s, n) && e.isMergeableObject(t[n]) ? i[n] = Vg(n, e)(s[n], t[n], e) : i[n] = _i(t[n], e));
  }), i;
}
function We(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || Bg, e.isMergeableObject = e.isMergeableObject || $g, e.cloneUnlessOtherwiseSpecified = _i;
  var i = Array.isArray(t), n = Array.isArray(s), o = i === n;
  return o ? i ? e.arrayMerge(s, t, e) : Yg(s, t, e) : _i(t, e);
}
We.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, n) {
    return We(i, n, e);
  }, {});
};
var jg = We;
var zn = jg;
var ga = "chart";
var is = "te.chart";
var Kg = "chart";
var ba = (s, t, e) => {
  const i = (n, o, r) => {
    const a = n.slice();
    return o.forEach((l, c) => {
      typeof a[c] > "u" ? a[c] = r.cloneUnlessOtherwiseSpecified(
        l,
        r
      ) : r.isMergeableObject(l) ? a[c] = zn(n[c], l, r) : n.indexOf(l) === -1 && a.push(l);
    }), a;
  };
  return zn(e[t], s, {
    arrayMerge: i
  });
};
var Ug = {
  darkTicksColor: "#fff",
  darkLabelColor: "#fff",
  darkGridLinesColor: "#555",
  darkmodeOff: "undefined",
  darkBgColor: "#262626",
  options: null
};
var zg = {
  darkTicksColor: "string",
  darkLabelColor: "string",
  darkGridLinesColor: "string",
  darkmodeOff: "(string|null)",
  darkBgColor: "string",
  options: "(object|null)"
};
var Wl = class _Wl {
  constructor(t, e, i = {}, n = {}) {
    this._waitForCharts(t, e, i, n);
  }
  async _getChartjs() {
    const {
      Chart: t,
      ArcElement: e,
      LineElement: i,
      BarElement: n,
      PointElement: o,
      BarController: r,
      BubbleController: a,
      DoughnutController: l,
      LineController: c,
      PieController: d,
      PolarAreaController: _,
      RadarController: f,
      ScatterController: m,
      CategoryScale: g,
      LinearScale: b,
      LogarithmicScale: T,
      RadialLinearScale: C,
      TimeScale: w,
      TimeSeriesScale: v,
      Decimation: E,
      Filler: A,
      Legend: y,
      Title: S,
      Tooltip: O,
      SubTitle: k
    } = await import("./chart.es-XXRIIEE6.js").then((D) => D.f);
    return t.register(
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      c,
      d,
      _,
      f,
      m,
      g,
      b,
      T,
      C,
      w,
      v,
      E,
      A,
      y,
      S,
      O,
      k
    ), t;
  }
  async _getChartDataLabels() {
    const { ChartDataLabels: t } = await import("./chartjs-plugin-datalabels.es-EJAJLYD7.js");
    return t;
  }
  async _waitForCharts(t, e, i = {}, n = {}) {
    this._Chartjs = await this._getChartjs(), this._ChartDataLabels = await this._getChartDataLabels(), this._element = t, this._data = e, this._options = i, this._type = e.type, this._canvas = null, this._chart = null, this._darkOptions = this._getDarkConfig(n), this._darkModeClassContainer = document.querySelector("html"), this._prevConfig = null, this._observer = null, this._element && (I.setData(t, is, this), p.addClass(this._element, Kg), this._chartConstructor()), this._darkOptions.darkmodeOff !== null && (this._handleMode(this.systemColorMode), this._observer = new MutationObserver(this._observerCallback.bind(this)), this._observer.observe(this._darkModeClassContainer, {
      attributes: true
    }));
  }
  // Getters
  static get NAME() {
    return ga;
  }
  get systemColorMode() {
    return localStorage.theme || (this._darkModeClassContainer.classList.contains("dark") ? "dark" : "light");
  }
  // Public
  dispose() {
    this._observer.disconnect(), I.removeData(this._element, is), this._element = null;
  }
  update(t, e) {
    t && (this._data = { ...this._data, ...t }, this._chart.data = this._data), this._prevConfig = this._chart.options, this._options = { ...this._options, ...e }, this._chart.options = zn(this._chart.options, this._options), this._chart.update();
  }
  // Private
  _getDarkConfig(t) {
    let e = {};
    const i = p.getDataAttributes(this._element);
    Object.keys(i).forEach(
      (c) => c.startsWith("dark") && (e[c] = i[c])
    ), e = {
      ...Ug,
      ...e
    };
    const n = {
      y: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      },
      x: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      }
    }, o = {
      r: {
        ticks: {
          color: e.darkTicksColor,
          backdropColor: e.darkBgColor
        },
        grid: {
          color: e.darkGridLinesColor
        },
        pointLabels: {
          color: e.darkTicksColor
        }
      }
    }, l = {
      scales: ["pie", "doughnut", "polarArea", "radar"].includes(this._type) ? ["polarArea", "radar"].includes(this._type) ? o : {} : n,
      plugins: {
        legend: {
          labels: {
            color: e.darkLabelColor
          }
        }
      }
    };
    return t = {
      ...e,
      options: {
        ...l
      },
      ...t
    }, N(ga, t, zg), t;
  }
  _chartConstructor() {
    if (this._data) {
      this._createCanvas();
      const t = ba(this._options, this._type, gs), e = [];
      t.dataLabelsPlugin && e.push(this._ChartDataLabels), this._chart = new this._Chartjs(this._canvas, {
        ...this._data,
        ...t,
        plugins: e
      });
    }
  }
  _createCanvas() {
    this._canvas || (this._element.nodeName === "CANVAS" ? this._canvas = this._element : (this._canvas = M("canvas"), this._element.appendChild(this._canvas)));
  }
  _handleMode(t) {
    t === "dark" ? (this._changeDatasetBorderColor(), this.update(null, this._darkOptions.options)) : (this._changeDatasetBorderColor(false), this._prevConfig && this.update(null, this._prevConfig));
  }
  _observerCallback(t) {
    for (const e of t)
      e.type === "attributes" && this._handleMode(this.systemColorMode);
  }
  _changeDatasetBorderColor(t = true) {
    [...this._data.data.datasets].forEach(
      (e) => ["pie", "doughnut", "polarArea"].includes(this._type) && (e.borderColor = t ? this._darkOptions.darkBgColor : "#fff")
    );
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = I.getData(this, is);
      if (!(!n && /dispose/.test(t))) {
        if (!n) {
          const o = e ? ba(e, i, gs) : gs[i];
          n = new _Wl(this, {
            ...t,
            ...o
          });
        }
        if (typeof t == "string") {
          if (typeof n[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          n[t](e, i);
        }
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, is);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
export {
  Rn as Alert,
  ml as Animate,
  $a as Button,
  Yt as Carousel,
  Wl as Chart,
  ii as Chip,
  Zg as ChipsInput,
  Ut as Collapse,
  Gg as Datepicker,
  wt as Dropdown,
  V as Input,
  Pn as Modal,
  rs as Offcanvas,
  ll as Popover,
  Cs as Ripple,
  Bn as ScrollSpy,
  Nl as Select,
  ni as Sidenav,
  Qg as Stepper,
  hl as Tab,
  qg as Timepicker,
  Vn as Toast,
  vi as Tooltip,
  eg as initTE
};
/*! Bundled license information:

tw-elements/dist/js/tw-elements.es.min.js:
  (*!
  * Taliwind Elements 1.0.0-beta2
  * 
  * Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
  * Copyright © 2023 MDBootstrap.com
  * 
  * Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
  * In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
  * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
  * 
  *)
  (*!
   * perfect-scrollbar v1.5.3
   * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   *)
*/
//# sourceMappingURL=tw-elements.js.map
