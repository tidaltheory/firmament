<template>
    <div className="container my-24">
        <div className="prose">
            <h2>Examples</h2>
            <Examples :examples="examples" />
        </div>
    </div>
</template>

<script>
import { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'
import routes from '../routes.json'

// eslint-disable-next-line vue/one-component-per-file
const Examples = defineComponent({
    props: ['examples'],
    setup(props) {
        return () => {
            return h(
                'ul',
                props.examples.map((example) =>
                    h(
                        'li',
                        { key: example.path },
                        example.children
                            ? h('h3', { class: 'text-xl' }, example.name)
                            : [
                                  h(
                                      RouterLink,
                                      { to: example.path },
                                      () => example.name,
                                  ),
                              ],
                        example.children &&
                            h(Examples, { examples: example.children }),
                    ),
                ),
            )
        }
    },
})

// eslint-disable-next-line vue/one-component-per-file
export default {
    components: { Examples },
    setup() {
        return {
            examples: routes,
        }
    },
}
</script>
