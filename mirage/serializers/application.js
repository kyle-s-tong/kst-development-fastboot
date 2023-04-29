import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  typeKeyForModel(model) {
    console.log(model);
    if (model.modelName === 'article') {
      return 'node--article';
    }

    if (model.modelName === 'image') {
      return 'file--file';
    }
  },

  keyForRelationship(key) {
    if (key === 'image') {
      return 'field_image';
    }
  },

  links(article) {
    return {
      image: {
        related: {
          href: `http://localhost:8080/jsonapi/node/article/${article.id}/field_image?resourceVersion=id%3A3`,
        },
      },
    };
  },

  alwaysIncludeLinkageData: true,
});
