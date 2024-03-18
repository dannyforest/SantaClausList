import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  // Test for rendering static content
  it('renders static content correctly', () => {
    const wrapper = mount(Footer)
    // Check for contact information title
    expect(wrapper.text()).toContain('Informations de contact')
    // Check for a specific contact detail
    expect(wrapper.text()).toContain('Email: info@monsite.com')
    // Check for links section
    expect(wrapper.text()).toContain('Liens utiles')
    // Check for a specific link text
    expect(wrapper.find('a[href="#"]').text()).toBe('Accueil')
  })
})
