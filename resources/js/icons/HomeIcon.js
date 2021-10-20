import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
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