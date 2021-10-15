import _mergeJSXProps from 'babel-helper-vue-jsx-merge-props';

var ActivityIcon = {
  name: 'activity-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-activity" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "22 12 18 12 15 21 9 3 6 12 2 12" }
        },
        []
      )]
    );
  }
};

var AirplayIcon = {
  name: 'airplay-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-airplay" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "12 15 17 21 7 21 12 15" }
        },
        []
      )]
    );
  }
};

var AlertCircleIcon = {
  name: 'alert-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var AlertOctagonIcon = {
  name: 'alert-octagon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-octagon" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var AlertTriangleIcon = {
  name: 'alert-triangle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-triangle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "12", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
        },
        []
      )]
    );
  }
};

var AlignCenterIcon = {
  name: 'align-center-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-center" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "10", x2: "6", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "18", x2: "6", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignJustifyIcon = {
  name: 'align-justify-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-justify" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "21", y1: "10", x2: "3", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignLeftIcon = {
  name: 'align-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "10", x2: "3", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignRightIcon = {
  name: 'align-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "21", y1: "10", x2: "7", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "7", y2: "18" }
        },
        []
      )]
    );
  }
};

var AnchorIcon = {
  name: 'anchor-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-anchor" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "5", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "8" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 12H2a10 10 0 0 0 20 0h-3" }
        },
        []
      )]
    );
  }
};

var ApertureIcon = {
  name: 'aperture-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-aperture" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.31", y1: "8", x2: "20.05", y2: "17.94" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9.69", y1: "8", x2: "21.17", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7.38", y1: "12", x2: "13.12", y2: "2.06" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9.69", y1: "16", x2: "3.95", y2: "6.06" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.31", y1: "16", x2: "2.83", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.62", y1: "12", x2: "10.88", y2: "21.94" }
        },
        []
      )]
    );
  }
};

var ArchiveIcon = {
  name: 'archive-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-archive" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "21 8 21 21 3 21 3 8" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "1", y: "3", width: "22", height: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "12", x2: "14", y2: "12" }
        },
        []
      )]
    );
  }
};

var ArrowDownCircleIcon = {
  name: 'arrow-down-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 12 12 16 16 12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var ArrowDownLeftIcon = {
  name: 'arrow-down-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "7", x2: "7", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 17 7 17 7 7" }
        },
        []
      )]
    );
  }
};

var ArrowDownRightIcon = {
  name: 'arrow-down-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "7", y1: "7", x2: "17", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 7 17 17 7 17" }
        },
        []
      )]
    );
  }
};

var ArrowDownIcon = {
  name: 'arrow-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "19 12 12 19 5 12" }
        },
        []
      )]
    );
  }
};

var ArrowLeftCircleIcon = {
  name: 'arrow-left-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-left-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 8 8 12 12 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "12", x2: "8", y2: "12" }
        },
        []
      )]
    );
  }
};

var ArrowLeftIcon = {
  name: 'arrow-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "12", x2: "5", y2: "12" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 19 5 12 12 5" }
        },
        []
      )]
    );
  }
};

var ArrowRightCircleIcon = {
  name: 'arrow-right-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-right-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 16 16 12 12 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var ArrowRightIcon = {
  name: 'arrow-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 5 19 12 12 19" }
        },
        []
      )]
    );
  }
};

var ArrowUpCircleIcon = {
  name: 'arrow-up-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 12 12 8 8 12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "8" }
        },
        []
      )]
    );
  }
};

var ArrowUpLeftIcon = {
  name: 'arrow-up-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "17", x2: "7", y2: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 17 7 7 17 7" }
        },
        []
      )]
    );
  }
};

var ArrowUpRightIcon = {
  name: 'arrow-up-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "7", y1: "17", x2: "17", y2: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 7 17 7 17 17" }
        },
        []
      )]
    );
  }
};

var ArrowUpIcon = {
  name: 'arrow-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "5 12 12 5 19 12" }
        },
        []
      )]
    );
  }
};

var AtSignIcon = {
  name: 'at-sign-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-at-sign" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" }
        },
        []
      )]
    );
  }
};

var AwardIcon = {
  name: 'award-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-award" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "8", r: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }
        },
        []
      )]
    );
  }
};

var BarChart2Icon = {
  name: 'bar-chart2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bar-chart-2" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "20", x2: "18", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "20", x2: "6", y2: "14" }
        },
        []
      )]
    );
  }
};

var BarChartIcon = {
  name: 'bar-chart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bar-chart" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "20", x2: "18", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "20", x2: "6", y2: "16" }
        },
        []
      )]
    );
  }
};

var BatteryChargingIcon = {
  name: 'battery-charging-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-battery-charging" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "13", x2: "23", y2: "11" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "11 6 7 12 13 12 9 18" }
        },
        []
      )]
    );
  }
};

var BatteryIcon = {
  name: 'battery-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-battery" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "6", width: "18", height: "12", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "13", x2: "23", y2: "11" }
        },
        []
      )]
    );
  }
};

var BellOffIcon = {
  name: 'bell-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bell-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var BellIcon = {
  name: 'bell-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bell" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" }
        },
        []
      )]
    );
  }
};

var BluetoothIcon = {
  name: 'bluetooth-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bluetooth" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" }
        },
        []
      )]
    );
  }
};

var BoldIcon = {
  name: 'bold-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bold" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }
        },
        []
      )]
    );
  }
};

var BookOpenIcon = {
  name: 'book-open-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-book-open" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }
        },
        []
      )]
    );
  }
};

var BookIcon = {
  name: 'book-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-book" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }
        },
        []
      )]
    );
  }
};

var BookmarkIcon = {
  name: 'bookmark-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bookmark" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var BoxIcon = {
  name: 'box-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-box" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2.32 6.16 12 11 21.68 6.16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22.76", x2: "12", y2: "11" }
        },
        []
      )]
    );
  }
};

var BriefcaseIcon = {
  name: 'briefcase-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-briefcase" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }
        },
        []
      )]
    );
  }
};

var CalendarIcon = {
  name: 'calendar-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-calendar" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "2", x2: "16", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "2", x2: "8", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "10", x2: "21", y2: "10" }
        },
        []
      )]
    );
  }
};

var CameraOffIcon = {
  name: 'camera-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-camera-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" }
        },
        []
      )]
    );
  }
};

var CameraIcon = {
  name: 'camera-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-camera" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "13", r: "4" }
        },
        []
      )]
    );
  }
};

var CastIcon = {
  name: 'cast-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cast" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "20", x2: "2", y2: "20" }
        },
        []
      )]
    );
  }
};

var CheckCircleIcon = {
  name: 'check-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22 4 12 14.01 9 11.01" }
        },
        []
      )]
    );
  }
};

var CheckSquareIcon = {
  name: 'check-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check-square" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 11 12 14 22 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }
        },
        []
      )]
    );
  }
};

var CheckIcon = {
  name: 'check-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "20 6 9 17 4 12" }
        },
        []
      )]
    );
  }
};

var ChevronDownIcon = {
  name: 'chevron-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6 9 12 15 18 9" }
        },
        []
      )]
    );
  }
};

var ChevronLeftIcon = {
  name: 'chevron-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 18 9 12 15 6" }
        },
        []
      )]
    );
  }
};

var ChevronRightIcon = {
  name: 'chevron-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 18 15 12 9 6" }
        },
        []
      )]
    );
  }
};

var ChevronUpIcon = {
  name: 'chevron-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "18 15 12 9 6 15" }
        },
        []
      )]
    );
  }
};

var ChevronsDownIcon = {
  name: 'chevrons-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "7 13 12 18 17 13" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 6 12 11 17 6" }
        },
        []
      )]
    );
  }
};

var ChevronsLeftIcon = {
  name: 'chevrons-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "11 17 6 12 11 7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "18 17 13 12 18 7" }
        },
        []
      )]
    );
  }
};

var ChevronsRightIcon = {
  name: 'chevrons-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "13 17 18 12 13 7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "6 17 11 12 6 7" }
        },
        []
      )]
    );
  }
};

var ChevronsUpIcon = {
  name: 'chevrons-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "17 11 12 6 7 11" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 18 12 13 7 18" }
        },
        []
      )]
    );
  }
};

var ChromeIcon = {
  name: 'chrome-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chrome" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21.17", y1: "8", x2: "12", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3.95", y1: "6.06", x2: "8.54", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10.88", y1: "21.94", x2: "15.46", y2: "14" }
        },
        []
      )]
    );
  }
};

var CircleIcon = {
  name: 'circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      )]
    );
  }
};

var ClipboardIcon = {
  name: 'clipboard-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clipboard" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }
        },
        []
      )]
    );
  }
};

var ClockIcon = {
  name: 'clock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clock" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 6 12 12 16 14" }
        },
        []
      )]
    );
  }
};

var CloudDrizzleIcon = {
  name: 'cloud-drizzle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-drizzle" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "8", y1: "19", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "13", x2: "8", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "19", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "16", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "17" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }
        },
        []
      )]
    );
  }
};

var CloudLightningIcon = {
  name: 'cloud-lightning-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-lightning" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "13 11 9 17 15 17 11 23" }
        },
        []
      )]
    );
  }
};

var CloudOffIcon = {
  name: 'cloud-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var CloudRainIcon = {
  name: 'cloud-rain-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-rain" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "13", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }
        },
        []
      )]
    );
  }
};

var CloudSnowIcon = {
  name: 'cloud-snow-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-snow" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "16", x2: "8", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "20", x2: "8", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "16", x2: "16", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "20", x2: "16", y2: "20" }
        },
        []
      )]
    );
  }
};

var CloudIcon = {
  name: 'cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }
        },
        []
      )]
    );
  }
};

var CodeIcon = {
  name: 'code-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-code" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 18 22 12 16 6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 6 2 12 8 18" }
        },
        []
      )]
    );
  }
};

var CodepenIcon = {
  name: 'codepen-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-codepen" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "15.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22 8.5 12 15.5 2 8.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 15.5 12 8.5 22 15.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "8.5" }
        },
        []
      )]
    );
  }
};

var CommandIcon = {
  name: 'command-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-command" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" }
        },
        []
      )]
    );
  }
};

var CompassIcon = {
  name: 'compass-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-compass" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }
        },
        []
      )]
    );
  }
};

var CopyIcon = {
  name: 'copy-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-copy" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }
        },
        []
      )]
    );
  }
};

var CornerDownLeftIcon = {
  name: 'corner-down-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-down-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 10 4 15 9 20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 4v7a4 4 0 0 1-4 4H4" }
        },
        []
      )]
    );
  }
};

var CornerDownRightIcon = {
  name: 'corner-down-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-down-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 10 20 15 15 20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4v7a4 4 0 0 0 4 4h12" }
        },
        []
      )]
    );
  }
};

var CornerLeftDownIcon = {
  name: 'corner-left-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-left-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "14 15 9 20 4 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 4h-7a4 4 0 0 0-4 4v12" }
        },
        []
      )]
    );
  }
};

var CornerLeftUpIcon = {
  name: 'corner-left-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-left-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "14 9 9 4 4 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 20h-7a4 4 0 0 1-4-4V4" }
        },
        []
      )]
    );
  }
};

var CornerRightDownIcon = {
  name: 'corner-right-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-right-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "10 15 15 20 20 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4h7a4 4 0 0 1 4 4v12" }
        },
        []
      )]
    );
  }
};

var CornerRightUpIcon = {
  name: 'corner-right-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-right-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "10 9 15 4 20 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 20h7a4 4 0 0 0 4-4V4" }
        },
        []
      )]
    );
  }
};

var CornerUpLeftIcon = {
  name: 'corner-up-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-up-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 14 4 9 9 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 20v-7a4 4 0 0 0-4-4H4" }
        },
        []
      )]
    );
  }
};

var CornerUpRightIcon = {
  name: 'corner-up-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-up-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 14 20 9 15 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 20v-7a4 4 0 0 1 4-4h12" }
        },
        []
      )]
    );
  }
};

var CpuIcon = {
  name: 'cpu-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cpu" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "4", width: "16", height: "16", rx: "2", ry: "2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "6", height: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "1", x2: "9", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "1", x2: "15", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "20", x2: "9", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "20", x2: "15", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "9", x2: "23", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "14", x2: "23", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "9", x2: "4", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "14", x2: "4", y2: "14" }
        },
        []
      )]
    );
  }
};

var CreditCardIcon = {
  name: 'credit-card-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-credit-card" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "4", width: "22", height: "16", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "10", x2: "23", y2: "10" }
        },
        []
      )]
    );
  }
};

var CropIcon = {
  name: 'crop-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-crop" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6.13 1L6 16a2 2 0 0 0 2 2h15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1 6.13L16 6a2 2 0 0 1 2 2v15" }
        },
        []
      )]
    );
  }
};

var CrosshairIcon = {
  name: 'crosshair-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-crosshair" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "22", y1: "12", x2: "18", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "12", x2: "2", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "6", x2: "12", y2: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var DatabaseIcon = {
  name: 'database-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-database" }, ctx.data]),
      [h(
        "ellipse",
        {
          attrs: { cx: "12", cy: "5", rx: "9", ry: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }
        },
        []
      )]
    );
  }
};

var DeleteIcon = {
  name: 'delete-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-delete" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "9", x2: "12", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "18", y2: "15" }
        },
        []
      )]
    );
  }
};

var DiscIcon = {
  name: 'disc-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-disc" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var DollarSignIcon = {
  name: 'dollar-sign-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-dollar-sign" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "1", x2: "12", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
        },
        []
      )]
    );
  }
};

var DownloadCloudIcon = {
  name: 'download-cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-download-cloud" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "8 17 12 21 16 17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "12", x2: "12", y2: "21" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" }
        },
        []
      )]
    );
  }
};

var DownloadIcon = {
  name: 'download-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-download" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 10 12 15 17 10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "3" }
        },
        []
      )]
    );
  }
};

var DropletIcon = {
  name: 'droplet-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-droplet" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }
        },
        []
      )]
    );
  }
};

var Edit2Icon = {
  name: 'edit2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "16 3 21 8 8 21 3 21 3 16 16 3" }
        },
        []
      )]
    );
  }
};

var Edit3Icon = {
  name: 'edit3-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit-3" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "14 2 18 6 7 17 3 17 3 13 14 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "22", x2: "21", y2: "22" }
        },
        []
      )]
    );
  }
};

var EditIcon = {
  name: 'edit-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "18 2 22 6 12 16 8 16 8 12 18 2" }
        },
        []
      )]
    );
  }
};

var ExternalLinkIcon = {
  name: 'external-link-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-external-link" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 3 21 3 21 9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "14", x2: "21", y2: "3" }
        },
        []
      )]
    );
  }
};

var EyeOffIcon = {
  name: 'eye-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-eye-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var EyeIcon = {
  name: 'eye-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-eye" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var FacebookIcon = {
  name: 'facebook-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-facebook" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }
        },
        []
      )]
    );
  }
};

var FastForwardIcon = {
  name: 'fast-forward-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-fast-forward" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "13 19 22 12 13 5 13 19" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "2 19 11 12 2 5 2 19" }
        },
        []
      )]
    );
  }
};

var FeatherIcon = {
  name: 'feather-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-feather" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "8", x2: "2", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "15", x2: "9", y2: "15" }
        },
        []
      )]
    );
  }
};

var FileMinusIcon = {
  name: 'file-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "15", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var FilePlusIcon = {
  name: 'file-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "15", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var FileTextIcon = {
  name: 'file-text-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-text" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "8", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "17", x2: "8", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "10 9 9 9 8 9" }
        },
        []
      )]
    );
  }
};

var FileIcon = {
  name: 'file-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "13 2 13 9 20 9" }
        },
        []
      )]
    );
  }
};

var FilmIcon = {
  name: 'film-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-film" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "2", x2: "7", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "2", x2: "17", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "7", x2: "7", y2: "7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "17", x2: "7", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "17", x2: "22", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "7", x2: "22", y2: "7" }
        },
        []
      )]
    );
  }
};

var FilterIcon = {
  name: 'filter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-filter" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }
        },
        []
      )]
    );
  }
};

var FlagIcon = {
  name: 'flag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-flag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "22", x2: "4", y2: "15" }
        },
        []
      )]
    );
  }
};

var FolderMinusIcon = {
  name: 'folder-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "14", x2: "15", y2: "14" }
        },
        []
      )]
    );
  }
};

var FolderPlusIcon = {
  name: 'folder-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "11", x2: "12", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "14", x2: "15", y2: "14" }
        },
        []
      )]
    );
  }
};

var FolderIcon = {
  name: 'folder-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var GiftIcon = {
  name: 'gift-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-gift" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "20 12 20 22 4 22 4 12" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "7" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" }
        },
        []
      )]
    );
  }
};

var GitBranchIcon = {
  name: 'git-branch-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-branch" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "6", y1: "3", x2: "6", y2: "15" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18", cy: "6", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "18", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M18 9a9 9 0 0 1-9 9" }
        },
        []
      )]
    );
  }
};

var GitCommitIcon = {
  name: 'git-commit-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-commit" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1.05", y1: "12", x2: "7", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17.01", y1: "12", x2: "22.96", y2: "12" }
        },
        []
      )]
    );
  }
};

var GitMergeIcon = {
  name: 'git-merge-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-merge" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "18", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 21V9a9 9 0 0 0 9 9" }
        },
        []
      )]
    );
  }
};

var GitPullRequestIcon = {
  name: 'git-pull-request-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-pull-request" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "18", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M13 6h3a2 2 0 0 1 2 2v7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "9", x2: "6", y2: "21" }
        },
        []
      )]
    );
  }
};

var GithubIcon = {
  name: 'github-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-github" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }
        },
        []
      )]
    );
  }
};

var GitlabIcon = {
  name: 'gitlab-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-gitlab" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }
        },
        []
      )]
    );
  }
};

var GlobeIcon = {
  name: 'globe-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-globe" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }
        },
        []
      )]
    );
  }
};

var GridIcon = {
  name: 'grid-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-grid" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "3", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "14", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "3", y: "14", width: "7", height: "7" }
        },
        []
      )]
    );
  }
};

var HardDriveIcon = {
  name: 'hard-drive-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-hard-drive" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "22", y1: "12", x2: "2", y2: "12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "16", x2: "6", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "16", x2: "10", y2: "16" }
        },
        []
      )]
    );
  }
};

var HashIcon = {
  name: 'hash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-hash" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "9", x2: "20", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "15", x2: "20", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "3", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "3", x2: "14", y2: "21" }
        },
        []
      )]
    );
  }
};

var HeadphonesIcon = {
  name: 'headphones-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-headphones" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 18v-6a9 9 0 0 1 18 0v6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" }
        },
        []
      )]
    );
  }
};

var HeartIcon = {
  name: 'heart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-heart" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }
        },
        []
      )]
    );
  }
};

var HelpCircleIcon = {
  name: 'help-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-help-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
        },
        []
      )]
    );
  }
};

var HomeIcon = {
  name: 'home-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-home" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 22 9 12 15 12 15 22" }
        },
        []
      )]
    );
  }
};

var ImageIcon = {
  name: 'image-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-image" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "8.5", r: "1.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "21 15 16 10 5 21" }
        },
        []
      )]
    );
  }
};

var InboxIcon = {
  name: 'inbox-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-inbox" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "22 12 16 12 14 15 10 15 8 12 2 12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }
        },
        []
      )]
    );
  }
};

var InfoIcon = {
  name: 'info-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-info" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "8" }
        },
        []
      )]
    );
  }
};

var InstagramIcon = {
  name: 'instagram-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-instagram" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17.5", y1: "6.5", x2: "17.5", y2: "6.5" }
        },
        []
      )]
    );
  }
};

var ItalicIcon = {
  name: 'italic-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-italic" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "4", x2: "10", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "20", x2: "5", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "4", x2: "9", y2: "20" }
        },
        []
      )]
    );
  }
};

var LayersIcon = {
  name: 'layers-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-layers" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 2 7 12 12 22 7 12 2" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 17 12 22 22 17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 12 12 17 22 12" }
        },
        []
      )]
    );
  }
};

var LayoutIcon = {
  name: 'layout-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-layout" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "9", x2: "21", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "21", x2: "9", y2: "9" }
        },
        []
      )]
    );
  }
};

var LifeBuoyIcon = {
  name: 'life-buoy-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-life-buoy" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "9.17", y2: "9.17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "14.83", x2: "19.07", y2: "19.07" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "9.17", x2: "19.07", y2: "4.93" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "9.17", x2: "18.36", y2: "5.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "19.07", x2: "9.17", y2: "14.83" }
        },
        []
      )]
    );
  }
};

var Link2Icon = {
  name: 'link2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-link-2" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var LinkIcon = {
  name: 'link-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-link" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }
        },
        []
      )]
    );
  }
};

var LinkedinIcon = {
  name: 'linkedin-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-linkedin" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "9", width: "4", height: "12" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "4", cy: "4", r: "2" }
        },
        []
      )]
    );
  }
};

var ListIcon = {
  name: 'list-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-list" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "8", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "21", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "18", x2: "21", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "12", x2: "3", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var LoaderIcon = {
  name: 'loader-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-loader" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "6", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" }
        },
        []
      )]
    );
  }
};

var LockIcon = {
  name: 'lock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-lock" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M7 11V7a5 5 0 0 1 10 0v4" }
        },
        []
      )]
    );
  }
};

var LogInIcon = {
  name: 'log-in-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-log-in" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "10 17 15 12 10 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "12", x2: "3", y2: "12" }
        },
        []
      )]
    );
  }
};

var LogOutIcon = {
  name: 'log-out-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-log-out" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 17 21 12 16 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "12", x2: "9", y2: "12" }
        },
        []
      )]
    );
  }
};

var MailIcon = {
  name: 'mail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mail" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22,6 12,13 2,6" }
        },
        []
      )]
    );
  }
};

var MapPinIcon = {
  name: 'map-pin-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-map-pin" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "10", r: "3" }
        },
        []
      )]
    );
  }
};

var MapIcon = {
  name: 'map-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-map" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "2", x2: "8", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "6", x2: "16", y2: "22" }
        },
        []
      )]
    );
  }
};

var Maximize2Icon = {
  name: 'maximize2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-maximize-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 3 21 3 21 9" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 21 3 21 3 15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "3", x2: "14", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "21", x2: "10", y2: "14" }
        },
        []
      )]
    );
  }
};

var MaximizeIcon = {
  name: 'maximize-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-maximize" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }
        },
        []
      )]
    );
  }
};

var MenuIcon = {
  name: 'menu-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-menu" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "3", y1: "12", x2: "21", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "18", x2: "21", y2: "18" }
        },
        []
      )]
    );
  }
};

var MessageCircleIcon = {
  name: 'message-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-message-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }
        },
        []
      )]
    );
  }
};

var MessageSquareIcon = {
  name: 'message-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-message-square" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var MicOffIcon = {
  name: 'mic-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mic-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
        },
        []
      )]
    );
  }
};

var MicIcon = {
  name: 'mic-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mic" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 10v2a7 7 0 0 1-14 0v-2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
        },
        []
      )]
    );
  }
};

var Minimize2Icon = {
  name: 'minimize2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minimize-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 14 10 14 10 20" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "20 10 14 10 14 4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "10", x2: "21", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "21", x2: "10", y2: "14" }
        },
        []
      )]
    );
  }
};

var MinimizeIcon = {
  name: 'minimize-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minimize" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }
        },
        []
      )]
    );
  }
};

var MinusCircleIcon = {
  name: 'minus-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var MinusSquareIcon = {
  name: 'minus-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var MinusIcon = {
  name: 'minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      )]
    );
  }
};

var MonitorIcon = {
  name: 'monitor-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-monitor" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "21", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "21" }
        },
        []
      )]
    );
  }
};

var MoonIcon = {
  name: 'moon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-moon" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }
        },
        []
      )]
    );
  }
};

var MoreHorizontalIcon = {
  name: 'more-horizontal-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-more-horizontal" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "19", cy: "12", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "5", cy: "12", r: "1" }
        },
        []
      )]
    );
  }
};

var MoreVerticalIcon = {
  name: 'more-vertical-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-more-vertical" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "5", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "19", r: "1" }
        },
        []
      )]
    );
  }
};

var MoveIcon = {
  name: 'move-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-move" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "5 9 2 12 5 15" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 5 12 2 15 5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 19 12 22 9 19" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "19 9 22 12 19 15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "22" }
        },
        []
      )]
    );
  }
};

var MusicIcon = {
  name: 'music-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-music" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 17 9 5 21 3 21 15" }
        },
        []
      )]
    );
  }
};

var Navigation2Icon = {
  name: 'navigation2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-navigation-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 19 21 12 17 5 21 12 2" }
        },
        []
      )]
    );
  }
};

var NavigationIcon = {
  name: 'navigation-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-navigation" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "3 11 22 2 13 21 11 13 3 11" }
        },
        []
      )]
    );
  }
};

var OctagonIcon = {
  name: 'octagon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-octagon" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }
        },
        []
      )]
    );
  }
};

var PackageIcon = {
  name: 'package-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-package" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2.32 6.16 12 11 21.68 6.16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22.76", x2: "12", y2: "11" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "3.5", x2: "17", y2: "8.5" }
        },
        []
      )]
    );
  }
};

var PaperclipIcon = {
  name: 'paperclip-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-paperclip" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" }
        },
        []
      )]
    );
  }
};

var PauseCircleIcon = {
  name: 'pause-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pause-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "15", x2: "10", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "15", x2: "14", y2: "9" }
        },
        []
      )]
    );
  }
};

var PauseIcon = {
  name: 'pause-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pause" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "6", y: "4", width: "4", height: "16" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "4", width: "4", height: "16" }
        },
        []
      )]
    );
  }
};

var PercentIcon = {
  name: 'percent-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-percent" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "5", x2: "5", y2: "19" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6.5", cy: "6.5", r: "2.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "17.5", cy: "17.5", r: "2.5" }
        },
        []
      )]
    );
  }
};

var PhoneCallIcon = {
  name: 'phone-call-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-call" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneForwardedIcon = {
  name: 'phone-forwarded-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-forwarded" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "19 1 23 5 19 9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "5", x2: "23", y2: "5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneIncomingIcon = {
  name: 'phone-incoming-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-incoming" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 2 16 8 22 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "16", y2: "8" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneMissedIcon = {
  name: 'phone-missed-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-missed" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "17", y2: "7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "1", x2: "23", y2: "7" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneOffIcon = {
  name: 'phone-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "1", y2: "23" }
        },
        []
      )]
    );
  }
};

var PhoneOutgoingIcon = {
  name: 'phone-outgoing-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-outgoing" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 7 23 1 17 1" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "8", x2: "23", y2: "1" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneIcon = {
  name: 'phone-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PieChartIcon = {
  name: 'pie-chart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pie-chart" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 12A10 10 0 0 0 12 2v10z" }
        },
        []
      )]
    );
  }
};

var PlayCircleIcon = {
  name: 'play-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-play-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "10 8 16 12 10 16 10 8" }
        },
        []
      )]
    );
  }
};

var PlayIcon = {
  name: 'play-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-play" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "5 3 19 12 5 21 5 3" }
        },
        []
      )]
    );
  }
};

var PlusCircleIcon = {
  name: 'plus-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var PlusSquareIcon = {
  name: 'plus-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var PlusIcon = {
  name: 'plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      )]
    );
  }
};

var PocketIcon = {
  name: 'pocket-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pocket" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 10 12 14 16 10" }
        },
        []
      )]
    );
  }
};

var PowerIcon = {
  name: 'power-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-power" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "12" }
        },
        []
      )]
    );
  }
};

var PrinterIcon = {
  name: 'printer-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-printer" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6 9 6 2 18 2 18 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "6", y: "14", width: "12", height: "8" }
        },
        []
      )]
    );
  }
};

var RadioIcon = {
  name: 'radio-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-radio" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" }
        },
        []
      )]
    );
  }
};

var RefreshCcwIcon = {
  name: 'refresh-ccw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-refresh-ccw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "1 4 1 10 7 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "23 20 23 14 17 14" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" }
        },
        []
      )]
    );
  }
};

var RefreshCwIcon = {
  name: 'refresh-cw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-refresh-cw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 4 23 10 17 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "1 20 1 14 7 14" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }
        },
        []
      )]
    );
  }
};

var RepeatIcon = {
  name: 'repeat-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-repeat" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "17 1 21 5 17 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3 11V9a4 4 0 0 1 4-4h14" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 23 3 19 7 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 13v2a4 4 0 0 1-4 4H3" }
        },
        []
      )]
    );
  }
};

var RewindIcon = {
  name: 'rewind-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rewind" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 19 2 12 11 5 11 19" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "22 19 13 12 22 5 22 19" }
        },
        []
      )]
    );
  }
};

var RotateCcwIcon = {
  name: 'rotate-ccw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rotate-ccw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "1 4 1 10 7 10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }
        },
        []
      )]
    );
  }
};

var RotateCwIcon = {
  name: 'rotate-cw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rotate-cw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 4 23 10 17 10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }
        },
        []
      )]
    );
  }
};

var RssIcon = {
  name: 'rss-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rss" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 11a9 9 0 0 1 9 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4a16 16 0 0 1 16 16" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "5", cy: "19", r: "1" }
        },
        []
      )]
    );
  }
};

var SaveIcon = {
  name: 'save-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-save" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 21 17 13 7 13 7 21" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 3 7 8 15 8" }
        },
        []
      )]
    );
  }
};

var ScissorsIcon = {
  name: 'scissors-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-scissors" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "18", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8.12", y1: "8.12", x2: "12", y2: "12" }
        },
        []
      )]
    );
  }
};

var SearchIcon = {
  name: 'search-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-search" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      )]
    );
  }
};

var SendIcon = {
  name: 'send-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-send" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "22", y1: "2", x2: "11", y2: "13" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "22 2 15 22 11 13 2 9 22 2" }
        },
        []
      )]
    );
  }
};

var ServerIcon = {
  name: 'server-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-server" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "6", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "18", x2: "6", y2: "18" }
        },
        []
      )]
    );
  }
};

var SettingsIcon = {
  name: 'settings-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-settings" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }
        },
        []
      )]
    );
  }
};

var Share2Icon = {
  name: 'share2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-share-2" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "5", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "12", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18", cy: "19", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }
        },
        []
      )]
    );
  }
};

var ShareIcon = {
  name: 'share-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-share" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 6 12 2 8 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "15" }
        },
        []
      )]
    );
  }
};

var ShieldOffIcon = {
  name: 'shield-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shield-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var ShieldIcon = {
  name: 'shield-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shield" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }
        },
        []
      )]
    );
  }
};

var ShoppingBagIcon = {
  name: 'shopping-bag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shopping-bag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 10a4 4 0 0 1-8 0" }
        },
        []
      )]
    );
  }
};

var ShoppingCartIcon = {
  name: 'shopping-cart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shopping-cart" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "9", cy: "21", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "20", cy: "21", r: "1" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" }
        },
        []
      )]
    );
  }
};

var ShuffleIcon = {
  name: 'shuffle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shuffle" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 3 21 3 21 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "20", x2: "21", y2: "3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "21 16 21 21 16 21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "15", x2: "21", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "4", x2: "9", y2: "9" }
        },
        []
      )]
    );
  }
};

var SidebarIcon = {
  name: 'sidebar-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sidebar" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "3", x2: "9", y2: "21" }
        },
        []
      )]
    );
  }
};

var SkipBackIcon = {
  name: 'skip-back-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-skip-back" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "19 20 9 12 19 4 19 20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5", y1: "19", x2: "5", y2: "5" }
        },
        []
      )]
    );
  }
};

var SkipForwardIcon = {
  name: 'skip-forward-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-skip-forward" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "5 4 15 12 5 20 5 4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "19", y1: "5", x2: "19", y2: "19" }
        },
        []
      )]
    );
  }
};

var SlackIcon = {
  name: 'slack-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-slack" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12.57", y1: "5.99", x2: "16.15", y2: "16.39" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7.85", y1: "7.61", x2: "11.43", y2: "18.01" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.39", y1: "7.85", x2: "5.99", y2: "11.43" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.01", y1: "12.57", x2: "7.61", y2: "16.15" }
        },
        []
      )]
    );
  }
};

var SlashIcon = {
  name: 'slash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-slash" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "19.07", y2: "19.07" }
        },
        []
      )]
    );
  }
};

var SlidersIcon = {
  name: 'sliders-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sliders" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "21", x2: "4", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "10", x2: "4", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "21", x2: "20", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "12", x2: "20", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "14", x2: "7", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "8", x2: "15", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "16", x2: "23", y2: "16" }
        },
        []
      )]
    );
  }
};

var SmartphoneIcon = {
  name: 'smartphone-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-smartphone" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var SpeakerIcon = {
  name: 'speaker-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-speaker" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "14", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "6", x2: "12", y2: "6" }
        },
        []
      )]
    );
  }
};

var SquareIcon = {
  name: 'square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      )]
    );
  }
};

var StarIcon = {
  name: 'star-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-star" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }
        },
        []
      )]
    );
  }
};

var StopCircleIcon = {
  name: 'stop-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-stop-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "6", height: "6" }
        },
        []
      )]
    );
  }
};

var SunIcon = {
  name: 'sun-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sun" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "1", x2: "12", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "12", x2: "3", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "12", x2: "23", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }
        },
        []
      )]
    );
  }
};

var SunriseIcon = {
  name: 'sunrise-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sunrise" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 18a5 5 0 0 0-10 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "18", x2: "3", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "23", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "22", x2: "1", y2: "22" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 6 12 2 16 6" }
        },
        []
      )]
    );
  }
};

var SunsetIcon = {
  name: 'sunset-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sunset" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 18a5 5 0 0 0-10 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "12", y2: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "18", x2: "3", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "23", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "22", x2: "1", y2: "22" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 5 12 9 8 5" }
        },
        []
      )]
    );
  }
};

var TabletIcon = {
  name: 'tablet-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tablet" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2", transform: "rotate(180 12 12)" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var TagIcon = {
  name: 'tag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "7", x2: "7", y2: "7" }
        },
        []
      )]
    );
  }
};

var TargetIcon = {
  name: 'target-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-target" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "6" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      )]
    );
  }
};

var TerminalIcon = {
  name: 'terminal-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-terminal" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 17 10 11 4 5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "20", y2: "19" }
        },
        []
      )]
    );
  }
};

var ThermometerIcon = {
  name: 'thermometer-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thermometer" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" }
        },
        []
      )]
    );
  }
};

var ThumbsDownIcon = {
  name: 'thumbs-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thumbs-down" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" }
        },
        []
      )]
    );
  }
};

var ThumbsUpIcon = {
  name: 'thumbs-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thumbs-up" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }
        },
        []
      )]
    );
  }
};

var ToggleLeftIcon = {
  name: 'toggle-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-toggle-left" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var ToggleRightIcon = {
  name: 'toggle-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-toggle-right" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "16", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var Trash2Icon = {
  name: 'trash2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trash-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "3 6 5 6 21 6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "11", x2: "10", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "11", x2: "14", y2: "17" }
        },
        []
      )]
    );
  }
};

var TrashIcon = {
  name: 'trash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trash" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "3 6 5 6 21 6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        },
        []
      )]
    );
  }
};

var TrendingDownIcon = {
  name: 'trending-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trending-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 18 13.5 8.5 8.5 13.5 1 6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 18 23 18 23 12" }
        },
        []
      )]
    );
  }
};

var TrendingUpIcon = {
  name: 'trending-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trending-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 6 13.5 15.5 8.5 10.5 1 18" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 6 23 6 23 12" }
        },
        []
      )]
    );
  }
};

var TriangleIcon = {
  name: 'triangle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-triangle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }
        },
        []
      )]
    );
  }
};

var TruckIcon = {
  name: 'truck-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-truck" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "3", width: "15", height: "13" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "16 8 20 8 23 11 23 16 16 16 16 8" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "5.5", cy: "18.5", r: "2.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18.5", cy: "18.5", r: "2.5" }
        },
        []
      )]
    );
  }
};

var TvIcon = {
  name: 'tv-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tv" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "15", rx: "2", ry: "2" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 2 12 7 7 2" }
        },
        []
      )]
    );
  }
};

var TwitterIcon = {
  name: 'twitter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-twitter" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }
        },
        []
      )]
    );
  }
};

var TypeIcon = {
  name: 'type-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-type" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 7 4 4 20 4 20 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "20", x2: "15", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "4", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var UmbrellaIcon = {
  name: 'umbrella-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-umbrella" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" }
        },
        []
      )]
    );
  }
};

var UnderlineIcon = {
  name: 'underline-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-underline" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "21", x2: "20", y2: "21" }
        },
        []
      )]
    );
  }
};

var UnlockIcon = {
  name: 'unlock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-unlock" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M7 11V7a5 5 0 0 1 9.9-1" }
        },
        []
      )]
    );
  }
};

var UploadCloudIcon = {
  name: 'upload-cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-upload-cloud" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 16 12 12 8 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "12", x2: "12", y2: "21" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 16 12 12 8 16" }
        },
        []
      )]
    );
  }
};

var UploadIcon = {
  name: 'upload-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-upload" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 8 12 3 7 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "3", x2: "12", y2: "15" }
        },
        []
      )]
    );
  }
};

var UserCheckIcon = {
  name: 'user-check-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-check" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 11 19 13 23 9" }
        },
        []
      )]
    );
  }
};

var UserMinusIcon = {
  name: 'user-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
        },
        []
      )]
    );
  }
};

var UserPlusIcon = {
  name: 'user-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
        },
        []
      )]
    );
  }
};

var UserXIcon = {
  name: 'user-x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-x" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "8", x2: "23", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "8", x2: "18", y2: "13" }
        },
        []
      )]
    );
  }
};

var UserIcon = {
  name: 'user-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "7", r: "4" }
        },
        []
      )]
    );
  }
};

var UsersIcon = {
  name: 'users-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-users" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "9", cy: "7", r: "4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M23 21v-2a4 4 0 0 0-3-3.87" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 3.13a4 4 0 0 1 0 7.75" }
        },
        []
      )]
    );
  }
};

var VideoOffIcon = {
  name: 'video-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-video-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var VideoIcon = {
  name: 'video-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-video" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "23 7 16 12 23 17 23 7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" }
        },
        []
      )]
    );
  }
};

var VoicemailIcon = {
  name: 'voicemail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-voicemail" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "5.5", cy: "11.5", r: "4.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18.5", cy: "11.5", r: "4.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5.5", y1: "16", x2: "18.5", y2: "16" }
        },
        []
      )]
    );
  }
};

var Volume1Icon = {
  name: 'volume1-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-1" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }
        },
        []
      )]
    );
  }
};

var Volume2Icon = {
  name: 'volume2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }
        },
        []
      )]
    );
  }
};

var VolumeXIcon = {
  name: 'volume-x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-x" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "9", x2: "17", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "9", x2: "23", y2: "15" }
        },
        []
      )]
    );
  }
};

var VolumeIcon = {
  name: 'volume-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      )]
    );
  }
};

var WatchIcon = {
  name: 'watch-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-watch" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 9 12 12 13.5 13.5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" }
        },
        []
      )]
    );
  }
};

var WifiOffIcon = {
  name: 'wifi-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wifi-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M10.71 5.05A16 16 0 0 1 22.58 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var WifiIcon = {
  name: 'wifi-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wifi" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 12.55a11 11 0 0 1 14.08 0" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1.42 9a16 16 0 0 1 21.16 0" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var WindIcon = {
  name: 'wind-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wind" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" }
        },
        []
      )]
    );
  }
};

var XCircleIcon = {
  name: 'x-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "9", x2: "9", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "9", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var XSquareIcon = {
  name: 'x-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "9", x2: "15", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "9", x2: "9", y2: "15" }
        },
        []
      )]
    );
  }
};

var XIcon = {
  name: 'x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
        },
        []
      )]
    );
  }
};

var YoutubeIcon = {
  name: 'youtube-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-youtube" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }
        },
        []
      )]
    );
  }
};

var ZapOffIcon = {
  name: 'zap-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zap-off" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "12.41 6.75 13 2 10.57 4.92" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "18.57 12.91 21 10 15.66 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 8 3 14 12 14 11 22 16 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var ZapIcon = {
  name: 'zap-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zap" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }
        },
        []
      )]
    );
  }
};

var ZoomInIcon = {
  name: 'zoom-in-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zoom-in" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "11", y1: "8", x2: "11", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "11", x2: "14", y2: "11" }
        },
        []
      )]
    );
  }
};

var ZoomOutIcon = {
  name: 'zoom-out-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zoom-out" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "11", x2: "14", y2: "11" }
        },
        []
      )]
    );
  }
};

export { ActivityIcon, AirplayIcon, AlertCircleIcon, AlertOctagonIcon, AlertTriangleIcon, AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, AnchorIcon, ApertureIcon, ArchiveIcon, ArrowDownCircleIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowDownIcon, ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, ArrowUpCircleIcon, ArrowUpLeftIcon, ArrowUpRightIcon, ArrowUpIcon, AtSignIcon, AwardIcon, BarChart2Icon, BarChartIcon, BatteryChargingIcon, BatteryIcon, BellOffIcon, BellIcon, BluetoothIcon, BoldIcon, BookOpenIcon, BookIcon, BookmarkIcon, BoxIcon, BriefcaseIcon, CalendarIcon, CameraOffIcon, CameraIcon, CastIcon, CheckCircleIcon, CheckSquareIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpIcon, ChromeIcon, CircleIcon, ClipboardIcon, ClockIcon, CloudDrizzleIcon, CloudLightningIcon, CloudOffIcon, CloudRainIcon, CloudSnowIcon, CloudIcon, CodeIcon, CodepenIcon, CommandIcon, CompassIcon, CopyIcon, CornerDownLeftIcon, CornerDownRightIcon, CornerLeftDownIcon, CornerLeftUpIcon, CornerRightDownIcon, CornerRightUpIcon, CornerUpLeftIcon, CornerUpRightIcon, CpuIcon, CreditCardIcon, CropIcon, CrosshairIcon, DatabaseIcon, DeleteIcon, DiscIcon, DollarSignIcon, DownloadCloudIcon, DownloadIcon, DropletIcon, Edit2Icon, Edit3Icon, EditIcon, ExternalLinkIcon, EyeOffIcon, EyeIcon, FacebookIcon, FastForwardIcon, FeatherIcon, FileMinusIcon, FilePlusIcon, FileTextIcon, FileIcon, FilmIcon, FilterIcon, FlagIcon, FolderMinusIcon, FolderPlusIcon, FolderIcon, GiftIcon, GitBranchIcon, GitCommitIcon, GitMergeIcon, GitPullRequestIcon, GithubIcon, GitlabIcon, GlobeIcon, GridIcon, HardDriveIcon, HashIcon, HeadphonesIcon, HeartIcon, HelpCircleIcon, HomeIcon, ImageIcon, InboxIcon, InfoIcon, InstagramIcon, ItalicIcon, LayersIcon, LayoutIcon, LifeBuoyIcon, Link2Icon, LinkIcon, LinkedinIcon, ListIcon, LoaderIcon, LockIcon, LogInIcon, LogOutIcon, MailIcon, MapPinIcon, MapIcon, Maximize2Icon, MaximizeIcon, MenuIcon, MessageCircleIcon, MessageSquareIcon, MicOffIcon, MicIcon, Minimize2Icon, MinimizeIcon, MinusCircleIcon, MinusSquareIcon, MinusIcon, MonitorIcon, MoonIcon, MoreHorizontalIcon, MoreVerticalIcon, MoveIcon, MusicIcon, Navigation2Icon, NavigationIcon, OctagonIcon, PackageIcon, PaperclipIcon, PauseCircleIcon, PauseIcon, PercentIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIncomingIcon, PhoneMissedIcon, PhoneOffIcon, PhoneOutgoingIcon, PhoneIcon, PieChartIcon, PlayCircleIcon, PlayIcon, PlusCircleIcon, PlusSquareIcon, PlusIcon, PocketIcon, PowerIcon, PrinterIcon, RadioIcon, RefreshCcwIcon, RefreshCwIcon, RepeatIcon, RewindIcon, RotateCcwIcon, RotateCwIcon, RssIcon, SaveIcon, ScissorsIcon, SearchIcon, SendIcon, ServerIcon, SettingsIcon, Share2Icon, ShareIcon, ShieldOffIcon, ShieldIcon, ShoppingBagIcon, ShoppingCartIcon, ShuffleIcon, SidebarIcon, SkipBackIcon, SkipForwardIcon, SlackIcon, SlashIcon, SlidersIcon, SmartphoneIcon, SpeakerIcon, SquareIcon, StarIcon, StopCircleIcon, SunIcon, SunriseIcon, SunsetIcon, TabletIcon, TagIcon, TargetIcon, TerminalIcon, ThermometerIcon, ThumbsDownIcon, ThumbsUpIcon, ToggleLeftIcon, ToggleRightIcon, Trash2Icon, TrashIcon, TrendingDownIcon, TrendingUpIcon, TriangleIcon, TruckIcon, TvIcon, TwitterIcon, TypeIcon, UmbrellaIcon, UnderlineIcon, UnlockIcon, UploadCloudIcon, UploadIcon, UserCheckIcon, UserMinusIcon, UserPlusIcon, UserXIcon, UserIcon, UsersIcon, VideoOffIcon, VideoIcon, VoicemailIcon, Volume1Icon, Volume2Icon, VolumeXIcon, VolumeIcon, WatchIcon, WifiOffIcon, WifiIcon, WindIcon, XCircleIcon, XSquareIcon, XIcon, YoutubeIcon, ZapOffIcon, ZapIcon, ZoomInIcon, ZoomOutIcon };
