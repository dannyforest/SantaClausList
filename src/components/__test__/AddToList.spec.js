import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
import AddToList from '@/components/AddToList.vue';


describe('AddToList.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(AddTolist);
    });
    it('emits the form on submit', async () => {
        const userName = wrapper.find('input[type="text"][placeholder="Your name"]')
        await userName.setValue('Kym Jong Un');

        const userGift = wrapper.find('input[type="text"][placeholder="Add your gift name"]')
        await userGift.setValue('Nuclear bomb');
        
        await wrapper.find('input[type="checkbox"]').setChecked(true);

        await wrapper.find('form').trigger('submit.prevent');
        expect(wrapper.emitted()).toHaveProperty('add');
        expect(wrapper.emitted().add[0]).toEqual(['Kym Jong Un', ['Nuclear bomb'], true]);
    })
})