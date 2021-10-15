import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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