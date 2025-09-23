import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('counter + 1', async() => {
    const wrapper = mount(Counter,{props:{modelValue:0}})
    await wrapper.trigger('click')
    expect(wrapper.text()).toContain('2024-1')
  })
})