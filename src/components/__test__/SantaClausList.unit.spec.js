import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SantaList from '../SantaClausList.vue';

describe('SantaList', () => {
 
    describe('SantaList', () => {
        it('renders the component correctly', () => {
          const wrapper = mount(SantaList);
          expect(wrapper.find('h2').text()).toBe("Santa's List");
        });
      });

});