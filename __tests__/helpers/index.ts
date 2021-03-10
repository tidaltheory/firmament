import { VueWrapper, mount } from '@vue/test-utils'

import { getQueriesForElement, logDOM } from '@testing-library/dom'

let mountedWrappers = new Set<VueWrapper<any>>()

// Currently, vue-testing-library does not support Vue 3.
// This is a placeholder for now that will suffice for basic
// Testing usage
export const render = (
    component: any,
    options?: Omit<Parameters<typeof mount>[1], 'attachTo'>,
) => {
    let div = document.createElement('div')
    let baseElement = document.body
    let container = baseElement.appendChild(div)
    let attachTo = document.createElement('div')

    container.appendChild(attachTo)

    let wrapper = mount(component, {
        ...options,
        attachTo: attachTo,
    })

    mountedWrappers.add(wrapper)
    container.appendChild(wrapper.element)

    return {
        ...getQueriesForElement(document.body),
        debug() {
            logDOM(div)
        },
    }
}

function cleanup() {
    mountedWrappers.forEach(cleanupAtWrapper)
}

function cleanupAtWrapper(wrapper: VueWrapper<any>) {
    if (
        wrapper.element.parentNode &&
        wrapper.element.parentNode.parentNode === document.body
    ) {
        document.body.removeChild(wrapper.element.parentNode)
    }

    try {
        wrapper.unmount()
    } catch {
    } finally {
        mountedWrappers.delete(wrapper)
    }
}

if (typeof afterEach === 'function') {
    afterEach(() => cleanup())
}

//     return {
//         ...getQueriesForElement(document.body),
//         debug: (el = baseElement) => logDOM(el),
//         cleanup,
//         // fireEvent,
//         wrapper,
//     }
// }

export * from '@testing-library/dom'
