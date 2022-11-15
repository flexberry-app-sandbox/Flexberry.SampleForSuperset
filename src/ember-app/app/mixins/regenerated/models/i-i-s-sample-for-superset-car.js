import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  carBody: DS.attr('i-i-s-sample-for-superset-car-type'),
  carDate: DS.attr('date'),
  carNumber: DS.attr('string'),
  brand: DS.belongsTo('i-i-s-sample-for-superset-brand', { inverse: null, async: false }),
  sparePart: DS.hasMany('i-i-s-sample-for-superset-spare-part', { inverse: 'car', async: false })
});

export let ValidationRules = {
  carBody: {
    descriptionKey: 'models.i-i-s-sample-for-superset-car.validations.carBody.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  carDate: {
    descriptionKey: 'models.i-i-s-sample-for-superset-car.validations.carDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  carNumber: {
    descriptionKey: 'models.i-i-s-sample-for-superset-car.validations.carNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  brand: {
    descriptionKey: 'models.i-i-s-sample-for-superset-car.validations.brand.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  sparePart: {
    descriptionKey: 'models.i-i-s-sample-for-superset-car.validations.sparePart.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CarE', 'i-i-s-sample-for-superset-car', {
    carNumber: attr('Car number', { index: 0 }),
    carBody: attr('Car body', { index: 1 }),
    carDate: attr('Car date', { index: 2 }),
    brand: belongsTo('i-i-s-sample-for-superset-brand', 'Brand', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    sparePart: hasMany('i-i-s-sample-for-superset-spare-part', 'Spare part', {
      name: attr('Name', { index: 0 }),
      quantity: attr('Quantity', { index: 1 }),
      used: attr('Used', { index: 2 }),
      producingCountry: belongsTo('i-i-s-sample-for-superset-producing-country', 'Producing country', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('CarL', 'i-i-s-sample-for-superset-car', {
    carNumber: attr('Car number', { index: 0 }),
    carBody: attr('Car body', { index: 1 }),
    carDate: attr('Car date', { index: 2 }),
    brand: belongsTo('i-i-s-sample-for-superset-brand', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
