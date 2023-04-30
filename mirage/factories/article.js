import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  title() {
    return faker.lorem.words(8);
  },

  body() {
    return {
      processed: faker.lorem.paragraphs(15, '<br/>\n'),
    };
  },

  created() {
    return faker.date.recent();
  },
});
