import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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