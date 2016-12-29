import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['search-navigation'],

    showCategory: function(){
        return (
            this.get('searchQuery.category') &&
            !this.get('settings.searchOptions.show_category')
        );
    }.property('searchQuery.category', 'settings.searchOptions.show_category'),

    currentCategory: function () {
        return this.get('lists.categories').filter((category) => {
            return category.id == this.get('searchQuery.category');
        });
    }.property('searchQuery.category', 'lists.categories')
});
