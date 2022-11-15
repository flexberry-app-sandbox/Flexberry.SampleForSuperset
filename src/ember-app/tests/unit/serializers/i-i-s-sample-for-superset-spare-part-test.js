import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sample-for-superset-spare-part', 'Unit | Serializer | i-i-s-sample-for-superset-spare-part', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sample-for-superset-spare-part',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sample-for-superset-car-type',

    'model:i-i-s-sample-for-superset-brand',
    'model:i-i-s-sample-for-superset-car',
    'model:i-i-s-sample-for-superset-producing-country',
    'model:i-i-s-sample-for-superset-spare-part',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
