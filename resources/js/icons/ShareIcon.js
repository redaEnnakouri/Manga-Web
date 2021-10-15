import _mergeJSXProps from 'babel-helper-vue-jsx-merge-props';

export default {
    name: 'share-icon',

    functional: true,

    render: function render(h, ctx) {
        return h(
            'svg',
            _mergeJSXProps([{
                attrs: {
                    xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
                },
                class: 'feather feather-share',
            }, ctx.data]),
            [h(
                'circle',
                {
                    attrs: { cx: '18', cy: '5', r: '3' },
                },
                [],
            ), h(
                'circle',
                {
                    attrs: { cx: '6', cy: '12', r: '3' },
                },
                [],
            ), h(
                'circle',
                {
                    attrs: { cx: '18', cy: '19', r: '3' },
                },
                [],
            ), h(
                'line',
                {
                    attrs: {
                        x1: '8.59', y1: '13.51', x2: '15.42', y2: '17.49',
                    },
                },
                [],
            ), h(
                'line',
                {
                    attrs: {
                        x1: '15.41', y1: '6.51', x2: '8.59', y2: '10.49',
                    },
                },
                [],
            )],
        );
    },
};
