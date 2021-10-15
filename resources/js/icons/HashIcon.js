import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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