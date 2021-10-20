import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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