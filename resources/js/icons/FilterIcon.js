import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'filter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-filter" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }
        },
        []
      )]
    );
  }
};