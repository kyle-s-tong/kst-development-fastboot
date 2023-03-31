import { module, test } from 'qunit';
import { setupTest } from 'kst-development-fastboot/tests/helpers';

module('Unit | Adapter | article', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:article');
    assert.ok(adapter);
  });
});
