import { module, test } from 'qunit';
import { setupTest } from 'kst-development-fastboot/tests/helpers';

module('Unit | Adapter | blog image', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:blog-image');
    assert.ok(adapter);
  });
});
