import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'book-open-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-book-open" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }
        },
        []
      )]
    );
  }
};