declare module '*.vue' {
    import type { DefineComponent } from 'vue'

    type AnyObject = Record<string, unknown>
    let component: DefineComponent<AnyObject, AnyObject, any>
    export default component
}
