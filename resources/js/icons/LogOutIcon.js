import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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