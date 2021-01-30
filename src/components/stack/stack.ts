import { PropType, defineComponent, h } from 'vue'

import { Divider } from '../divider/divider'

type SpaceClass = 'space-y-4' | string

export const Stack = defineComponent({
    name: 'Stack',
    functional: true,
    components: {
        Divider,
    },
    props: {
        spaceClass: {
            type: String as PropType<SpaceClass>,
            default: 'space-y-4',
        },
        dividers: Boolean,
    },
    setup(props, { slots }) {
        let { spaceClass, dividers } = props
        let stackNodes = slots.default?.().filter((child) => child.type) || []

        return () =>
            h(
                'div',
                { class: spaceClass },
                stackNodes.map((node, index) => {
                    let showDivider = dividers && index > 0
                    return h(
                        'div',
                        { class: showDivider ? spaceClass : undefined },
                        showDivider
                            ? [h(Divider), h('div', {}, [node])]
                            : [node],
                    )
                }),
            )
    },
})
