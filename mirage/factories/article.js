import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  title() {
    return faker.lorem.lines(1);
  },

  body() {
    return {
      processed: faker.lorem.paragraphs(3, '<br/>\n'),
    };
  },

  created() {
    return faker.date.recent();
  },
});
