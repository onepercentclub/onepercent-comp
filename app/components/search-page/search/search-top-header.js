import Ember from 'ember';
import ReadMoreMixin from 'reef/mixins/read-more';

export default Ember.Component.extend(ReadMoreMixin, {
    isLocation: Ember.computed.equal('storeKey', 'location'),
    headerImage: Ember.computed.alias('headerData.image.full'),
    headerImageLogo: Ember.computed.alias('headerData.image_logo.full'),
    projectCount: Ember.computed.alias('searchQuery.meta.count'),

    isNormalSearch: function() {
        // check more info link
        this.showHideReadmore();
        return this.get('headerImage');
    }.property('headerImage'),

    showCategory: function() {
        return (
            this.get('lists.categories.length') && (
                this.get('searchQuery.category') ||
                this.get('settings.searchOptions.show_category')
            )
        );
    }.property('searchQuery.category', 'settings.searchOptions.show_category', 'lists.categories'),

    actions: {
        clearForm() {
            if (this.get('taskSearch')) {
                this.set('searchQuery.skill', null);
                this.set('searchQuery.start', null);
                this.set('searchQuery.end', null);
            } else {
                this.set('searchQuery.theme', null);
                this.set('searchQuery.project_type', null);
                this.set('searchQuery.ordering', null);
                this.set('searchQuery.location', null);
            }
            this.set('searchQuery.text', '');
            this.set('searchQuery.status', null);
            this.set('searchQuery.country', null);
        }
    }
});
