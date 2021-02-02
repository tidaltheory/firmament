import { PropType, defineComponent, h } from 'vue'

import { AlignItems, Gap } from '../../types'

type SpaceClass = Gap | Gap[]
type AlignClass = AlignItems | AlignItems[]

export const Inline = defineComponent({
    name: 'Inline',
    functional: true,
    props: {
        spaceClass: {
            type: String as PropType<SpaceClass>,
            default: 'gap-4',
        },
        alignClass: {
            type: String as PropType<AlignClass>,
            default: '',
        },
    },
    setup(props, { slots }) {
        let { spaceClass, alignClass } = props
        let inlineNodes = slots.default?.().filter((child) => child.type) || []

        return () =>
            h(
                'div',
                { class: ['flex flex-wrap', spaceClass, alignClass] },
                inlineNodes.map((node) => {
                    return h('div', {}, [node])
                }),
            )
    },
})
