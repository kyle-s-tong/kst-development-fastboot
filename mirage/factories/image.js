import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  uri() {
    return {
      url: faker.image.business(),
    };
  },
});