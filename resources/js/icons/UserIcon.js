import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'user-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "7", r: "4" }
        },
        []
      )]
    );
  }
};