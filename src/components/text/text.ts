import { defineComponent, h } from 'vue'

/**
 * Provides a limited subset of typography-related properties. Also
 * handles other text utilities; like trimming leading whitespace,
 * truncating, and text selection.
 *
 * @todo Add typography-related class prop types.
 */
export const Text = defineComponent({
    name: 'Text',
    functional: true,
    props: {
        as: {
            type: String,
            default: 'span',
        },
        truncate: { type: Boolean },
        preventSelection: { type: Boolean },
    },
    setup(props, { attrs, slots }) {
        let { as, truncate, preventSelection } = props
        let content = truncate
            ? h('span', { class: 'block truncate' }, slots.default?.())
            : slots.default?.()

        return () =>
            h(
                as,
                {
                    ...attrs,
                    class: ['block capsize', preventSelection && 'select-none'],
                },
                content,
            )
    },
})
