import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'clipboard-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clipboard" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }
        },
        []
      )]
    );
  }
};