import Ember from 'ember';

var ProjectSearchFormComponent = Ember.Component.extend({
    // Number of results to show on one page
    pageSize: 8,

    hasMore: function(){
        var next = this.get('page') * this.get('pageSize');
        var count = this.get('count');
        return (next < count);
    }.property('count', 'page', 'pageSize'),

    more: function(){
        return this.get('count') - this.get('page') * this.get('pageSize');
    }.property('count', 'page', 'pageSize'),

    next: function () {
        return (this.get('more') > this.get('pageSize'))? this.get('pageSize') : this.get('more');
    }.property('more', 'pageSize'),

    actions: {
        showMore: function(){
            this.sendAction('showMore');
        },

        focusSearch() {
            let input = $('.control-search input');
            input.focus();
        }
    }
});

export default ProjectSearchFormComponent;
