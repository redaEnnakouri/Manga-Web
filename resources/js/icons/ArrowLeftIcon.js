import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLeftIcon',
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
      "class": "feather feather-arrow-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "12",
        x2: "5",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 19 5 12 12 5"
      }
    })]);
  }
};