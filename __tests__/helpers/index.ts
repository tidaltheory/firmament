import { mount } from '@vue/test-utils'

import { getQueriesForElement, logDOM } from '@testing-library/dom'

// Currently, vue-testing-library does not support Vue 3.
// This is a placeholder for now that will suffice for basic
// Testing usage
export const render = (component: any) => {
    let attachTo = document.createElement('div')
    let baseElement = document.body

    baseElement.appendChild(attachTo)

    let wrapper = mount(component, {
        attachTo: attachTo,
    })

    function cleanup() {
        if (
            wrapper.element.parentNode &&
            wrapper.element.parentNode === document.body
        ) {
            document.body.removeChild(wrapper.element)
        }

        try {
            wrapper.unmount()
        } finally {
            // DO nothing
        }
    }

    // async function fireEvent(...args) {
    //     dtlFireEvent(...args)
    //     await waitFor(() => {})
    // }

    // Object.keys(dtlFireEvent).forEach((key) => {
    //     fireEvent[key] = async (...args) => {
    //         dtlFireEvent[key](...args)
    //         await waitFor(() => {})
    //     }
    // })

    return {
        ...getQueriesForElement(document.body),
        debug: (el = baseElement) => logDOM(el),
        cleanup,
        // fireEvent,
        wrapper,
    }
}

export * from '@testing-library/dom'
