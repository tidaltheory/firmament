import { defineComponent, h } from 'vue'

export const Divider = defineComponent({
    name: 'Divider',
    functional: true,
    setup() {
        return () =>
            h(
                'div',
                { class: 'relative z-10 w-full h-px -mb-px' },
                h('div', { class: 'absolute w-full h-px bg-gray-300' }),
            )
    },
})
