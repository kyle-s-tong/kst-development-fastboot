import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  keyForAttribute(attr) {
    return attr.replace(/_/g, '-'); // blog_post_comment becomes blog-post-comment
  }
}
