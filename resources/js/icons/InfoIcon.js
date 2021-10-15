import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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