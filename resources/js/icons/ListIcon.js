import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ListIcon',
  functional: true,
  render: function render(h, ctx) {
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-list"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};