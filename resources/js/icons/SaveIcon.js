import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'save-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-save" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 21 17 13 7 13 7 21" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 3 7 8 15 8" }
        },
        []
      )]
    );
  }
};