import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sample-for-superset-brand', 'Unit | Model | i-i-s-sample-for-superset-brand', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
