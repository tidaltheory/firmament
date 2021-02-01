import { PropType, defineComponent, h } from 'vue'

import { AlignItems, SpaceY } from '../../types'
import { Divider } from '../divider/divider'

type SpaceClass = SpaceY | SpaceY[]
type AlignClass = AlignItems | AlignItems[]

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
        alignClass: {
            type: String as PropType<AlignClass>,
            default: '',
        },
        dividers: Boolean,
    },
    setup(props, { slots }) {
        let { spaceClass, alignClass, dividers } = props
        let wrapperClass = 'flex flex-col'
        let stackNodes = slots.default?.().filter((child) => child.type) || []

        return () =>
            h(
                'div',
                { class: spaceClass },
                stackNodes.map((node, index) => {
                    let showDivider = dividers && index > 0
                    return h(
                        'div',
                        {
                            class: showDivider
                                ? [spaceClass, wrapperClass, alignClass]
                                : [wrapperClass, alignClass],
                        },
                        showDivider
                            ? [h(Divider), h('div', {}, [node])]
                            : [node],
                    )
                }),
            )
    },
})
