import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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