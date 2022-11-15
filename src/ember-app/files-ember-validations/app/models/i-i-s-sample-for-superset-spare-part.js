import {
  defineNamespace,
  defineProjections,
  Model as SparePartMixin
} from '../mixins/regenerated/models/i-i-s-sample-for-superset-spare-part';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(SparePartMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
