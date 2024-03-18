import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SantaList from '../SantaClausList.vue';

describe('SantaList', () => {
 
    describe('SantaList', () => {
        it('renders the component correctly', () => {
          const wrapper = mount(SantaList);
          console.log(wrapper.html());
          expect(wrapper.find('h2').exists()).toBe(true);
          expect(wrapper.find('h2').text()).toBe("Santa's List");
        });
      });

});