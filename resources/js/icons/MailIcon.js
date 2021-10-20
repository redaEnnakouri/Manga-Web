import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'mail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mail" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22,6 12,13 2,6" }
        },
        []
      )]
    );
  }
};