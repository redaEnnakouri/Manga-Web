import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'AlignLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
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
      "class": "feather feather-align-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};