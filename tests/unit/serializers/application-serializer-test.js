import { module, test } from 'qunit';

import { setupTest } from 'kst-development-fastboot/tests/helpers';

module('Unit | Serializer | application serializer', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application-serializer');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('application-serializer', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
