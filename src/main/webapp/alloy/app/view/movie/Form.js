Ext.define('Training.view.movie.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.movieform',
	title : 'Movie Form',
	bodyPadding : 20,
	defaults : {
		width : 400
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
		emptyText : 'Please choose rating'
	}, {
		xtype : 'numberfield',
		name : 'runtime',
		fieldLabel : 'Runtime',
		allowBlank : false,
		minValue : 1,
		maxLength : 4,
		enforceMaxLength : true,
		emptyText : 'Please enter runtime'
	} ]
});