import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'edit-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "18 2 22 6 12 16 8 16 8 12 18 2" }
        },
        []
      )]
    );
  }
};