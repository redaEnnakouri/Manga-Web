import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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