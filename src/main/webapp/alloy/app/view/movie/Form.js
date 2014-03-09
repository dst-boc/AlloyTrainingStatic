Ext.define('Training.view.movie.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.movieform',
	title : 'Movie Form',
	bodyPadding : 20,
	defaults : {
		width : 400,
		msgTarget : 'under'
	},
	defaultType : 'textfield',
	items : [ {
		name : 'title',
		fieldLabel : 'Title',
		allowBlank : false,
		emptyText : 'Please enter title'
	}, {
		xtype : 'numberfield',
		name : 'year',
		fieldLabel : 'Year',
		allowBlank : false,
		minValue : 1826,
		maxValue : 4000,
		maxLength : 4,
		enforceMaxLength : true,
		emptyText : 'Please enter year'
	}, {
		xtype : 'combobox',
		name : 'rating',
		fieldLabel : 'Rating',
		displayField : 'name',
		valueField : 'value',
		store : 'Ratings',
		queryMode : 'local',
		emptyText : 'Please choose rating',
		forceSelection : true
	}, {
		xtype : 'numberfield',
		name : 'runtime',
		fieldLabel : 'Runtime',
		allowBlank : false,
		minValue : 1,
		maxLength : 4,
		enforceMaxLength : true,
		emptyText : 'Please enter runtime'
	} ],

	buttons : [ {
		text : 'Reset',
		handler : function() {
			this.up('form').getForm().reset();
		}
	}, {
		text : 'Submit',
		formBind : true, // only enabled once the form is valid
		disabled : true,
		handler : function() {
			var formCmp = this.up('form');
			var form = formCmp.getForm();
			formCmp.fireEvent('saveMovie', form, formCmp);
		}
	} ],
});