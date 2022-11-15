import {
  defineNamespace,
  defineProjections,
  Model as ProducingCountryMixin
} from '../mixins/regenerated/models/i-i-s-sample-for-superset-producing-country';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ProducingCountryMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
