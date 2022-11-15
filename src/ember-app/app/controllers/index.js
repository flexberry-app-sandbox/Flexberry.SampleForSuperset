import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.sample-for-superset.caption'),
          title: i18n.t('forms.application.sitemap.sample-for-superset.title'),
          children: [{
            link: 'i-i-s-sample-for-superset-brand-l',
            caption: i18n.t('forms.application.sitemap.sample-for-superset.i-i-s-sample-for-superset-brand-l.caption'),
            title: i18n.t('forms.application.sitemap.sample-for-superset.i-i-s-sample-for-superset-brand-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-sample-for-superset-car-l',
            caption: i18n.t('forms.application.sitemap.sample-for-superset.i-i-s-sample-for-superset-car-l.caption'),
            title: i18n.t('forms.application.sitemap.sample-for-superset.i-i-s-sample-for-superset-car-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-sample-for-superset-producing-country-l',
            caption: i18n.t('forms.application.sitemap.sample-for-superset.i-i-s-sample-for-superset-producing-country-l.caption'),
            title: i18n.t('forms.application.sitemap.sample-for-superset.i-i-s-sample-for-superset-producing-country-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})