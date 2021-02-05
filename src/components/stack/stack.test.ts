import '@testing-library/jest-dom'

import { render } from '@testing-library/vue'

import { Stack } from './stack'

describe('<Stack />', () => {
    it('renders', () => {
        let { getByText } = render(Stack, {
            slots: { default: '<span>Item</span>' },
        })

        expect(getByText('Item')).toBeInTheDocument()
    })
})
