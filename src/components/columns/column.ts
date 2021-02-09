import { PropType, defineComponent, h } from 'vue'

import { AlignItems } from '../../types'

type AlignClass = AlignItems | AlignItems[]

export const Column = defineComponent({
    name: 'Column',
    functional: true,
    props: {
        widthClass: {
            type: String as PropType<AlignClass>,
            default: '',
        },
    },
    setup(props, { slots }) {
        let { widthClass } = props
        let columnClass = [
            'min-w-0',
            widthClass ? `flex-grow-0 flex-shrink-0 ${widthClass}` : 'w-full',
        ]

        return () => h('div', { class: columnClass }, slots.default?.())
    },
})
