import { PropType, defineComponent, h } from 'vue'

import Divider from '../divider/divider.vue'

const spaceClassNames = {
    2: {
        space: 'pt-2',
        offset: 'before:-mt-2',
    },
    4: {
        space: 'pt-4',
        offset: 'before:-mt-4',
    },
}

type SpaceClass = 'none' | keyof typeof spaceClassNames

export const Stack = defineComponent({
    name: 'Stack',
    functional: true,
    components: {
        Divider,
    },
    props: {
        space: {
            type: String as PropType<SpaceClass>,
            default: 'none',
        },
        dividers: Boolean,
    },
    setup(props, { slots }) {
        let { space, dividers } = props
        let stackNodes = slots.default?.().filter((child) => child.type) || []
        let spaceClasses = space !== 'none' ? spaceClassNames[space] : null
        let spaceClass = spaceClasses?.space
        let offsetClass = spaceClasses
            ? `before:block before:empty-content ${spaceClasses.offset}`
            : null

        return () =>
            h(
                'div',
                { class: offsetClass },
                stackNodes.map((node, index) => {
                    return h(
                        'div',
                        { class: spaceClass },
                        dividers && index > 0
                            ? [
                                  h(Divider),
                                  h('div', { class: spaceClass }, [node]),
                              ]
                            : [node],
                    )
                }),
            )
    },
})
