import { module, test } from 'qunit';

import { setupTest } from 'kst-development-fastboot/tests/helpers';

module('Unit | Model | enquiry', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('enquiry', {});
    assert.ok(model);
  });
});
