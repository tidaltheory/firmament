import { defineComponent } from 'vue'

import { render } from '../../../__tests__/helpers'
import { Stack } from './stack'

const renderComponent = (props?: any) => {
    return render(
        defineComponent({
            components: { Stack },
            template: `<Stack><span>Item</span></Stack>`,
            ...props,
        }),
    )
}

describe('<Stack />', () => {
    it.skip('renders', () => {
        let { getByText } = renderComponent()

        expect(getByText('Item')).toBeInTheDocument()
    })
})
