<template>
    <div className="container my-24">
        <Stack space-class="space-y-8">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
                Columns
            </h2>
            <div className="prose">
                <Text as="p">
                    To lay out content horizontally, use the Columns and Column
                    components. The Columns component sets the spacing and
                    alignment. The Column child components set their own width.
                </Text>
            </div>
            <div class="w-auto">
                <Stack>
                    <Columns>
                        <Column width-class="w-1/5">
                            <Placeholder class="h-8">1/5</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-1/4">
                            <Placeholder class="h-8">1/4</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-1/3">
                            <Placeholder class="h-8">1/3</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-2/5">
                            <Placeholder class="h-8">2/5</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-1/2">
                            <Placeholder class="h-8">1/2</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-3/5">
                            <Placeholder class="h-8">3/5</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-2/3">
                            <Placeholder class="h-8">2/3</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-3/4">
                            <Placeholder class="h-8">3/4</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column width-class="w-4/5">
                            <Placeholder class="h-8">4/5</Placeholder>
                        </Column>
                        <Column>
                            <Placeholder class="h-8">Fluid</Placeholder>
                        </Column>
                    </Columns>
                </Stack>
            </div>
        </Stack>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Column, Columns, Stack, Text } from 'firmament'
import Placeholder from '../../components/placeholder.vue'
export default defineComponent({
    components: { Column, Columns, Stack, Text, Placeholder },
})
</script>
