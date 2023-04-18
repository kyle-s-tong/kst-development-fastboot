import { module, test } from 'qunit';
import { setupTest } from 'kst-development-fastboot/tests/helpers';

module('Unit | Model | blog image', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('blog-image', {});
    assert.ok(model);
  });
});
