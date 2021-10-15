import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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