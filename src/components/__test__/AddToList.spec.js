import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest'
import AddToList from '@/components/AddToList.vue';


describe('AddToList.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(AddToList);
    });
    
    it('emits the form on submit', async () => {
        const userName = wrapper.find('input[type="text"][placeholder="Your name"]')
        await userName.setValue('Kym Jong Un');

        const userGift = wrapper.find('input[type="text"][placeholder="Add your gift name"]')
        await userGift.setValue('Nuclear bomb');
        await wrapper.find('#addGift').trigger('click'); //add a gift to gifts array
        await wrapper.find('input[type="checkbox"]').setChecked(true);
        await wrapper.find('#submit').trigger('submit'); 
        expect(wrapper.emitted()).toHaveProperty('add');
        expect(wrapper.emitted().add[0]).toEqual(['Kym Jong Un', ['Nuclear bomb'], true]);
    })
})