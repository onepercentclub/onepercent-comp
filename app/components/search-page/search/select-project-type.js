import Ember from 'ember';

/*
This is a select box to select project 'type' and 'status'.
 */

export default Ember.Component.extend({
    classNames: ['custom-select-box'],
    projectType: null,
    projectStatus: null,
    activeSelectBox: false,
    optionValuePath: 'id',
    optionLabelPath: 'name',

    selected: function(){
        // Determine if something is selected
        return (this.get('selectedStatus') || this.get('selectedType'));
    }.property('projectStatus', 'projectType'),

    selectedValue: function(){
        // Return the select value(s) or default to prompt.
        var status = this.get('selectedStatus'),
            type = this.get('selectedType');
        if (status && type) {
            this.set('activeSelectBox', true);
            return status.name + ' & ' + type.name;
        }
        if (status) {
            this.set('activeSelectBox', true);
            return status.name;
        }
        if (type) {
            this.set('activeSelectBox', true);
            return type.name;
        }
        this.set('activeSelectBox', false);
        return this.get('prompt');
    }.property('projectStatus', 'projectType'),

    selectedStatus: function(){
        // Return the full object for the selected status.
        var status = this.get('projectStatus');
        if (status) {
            this.set('activeSelectBox', true);
            return this.statuses.filterBy('id', status)[0];
        }
        this.set('activeSelectBox', false);
        return null
    }.property('projectStatus'),

    selectedType: function(){
        // Return the full object for the selected type.
        var type = this.get('projectType');
        if (type) {
            this.set('activeSelectBox', true);
            return this.get('types').filterBy('id', type)[0];
        }
        this.set('activeSelectBox', false);
        return null
    }.property('projectType'),

    statuses: Ember.A([
        {id: 'campaign,voting', name: `Running`},
        {id: 'done-complete,done-incomplete,voting-done', name: `Realised`}
    ]),

    types: function () {
        let types = this.get('settings.searchOptions.filter_types') || Ember.A();

        return Ember.A([
                {id: 'funding', name: `Funding`},
                {id: 'voting', name: `Voting`},
                {id: 'volunteering', name: `Volunteering`}
        ]).filter((type) => {
            return types.contains(type.id);
        });
    }.property('settings.searchOptions.filter_types'),

    actions: {
        unselectAll: function() {
            this.set('projectStatus', null);
            this.set('projectType', null);
        },
        selectStatus: function(projectStatus) {
            if (projectStatus == this.get('projectStatus')){
                this.set('projectStatus', null);
            } else {
                this.set('projectStatus', projectStatus.id);
            }
        },
        selectType: function(projectType) {
            if (projectType == this.get('projectType')){
                this.set('projectType', null);
            } else {
                this.set('projectType', projectType.id);
            }
        },
        toggleMenu() {
            if (this.Resolution.isSmall) {
                this.toggleProperty('isShowMenu');
            }
        },
        clearSelect() {
            this.set('projectStatus', null);
            this.set('projectType', null);
            this.set('activeSelectBox', false);
        },
    }
});
