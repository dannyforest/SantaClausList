import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import About from '@/views/AboutView.vue'

describe('Footer.vue', () => {
  // Test for rendering static content
  it('renders the h1', () => {
    const wrapper = mount(About)
    expect(wrapper.find('h1').text()).toContain('minty')
  })
})