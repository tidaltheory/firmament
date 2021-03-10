import { PropType, defineComponent, h } from 'vue'

import { AlignItems, Gap, JustifyContent } from '../../types'

type SpaceClass = Gap | Gap[]
type AlignClass = JustifyContent | JustifyContent[]
type AlignYClass = AlignItems | AlignItems[]

export const Columns = defineComponent({
    name: 'Columns',
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
        alignYClass: {
            type: String as PropType<AlignYClass>,
            default: '',
        },
    },
    setup(props, { slots }) {
        let { spaceClass, alignClass, alignYClass } = props

        return () =>
            h(
                'div',
                { class: ['flex', spaceClass, alignClass, alignYClass] },
                slots.default?.(),
            )
    },
})
