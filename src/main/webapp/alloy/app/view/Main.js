Ext.define('Training.view.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'Ext.tab.Panel', 'Ext.layout.container.Border',
			'Training.view.movie.List' ],

	xtype : 'app-main',

	layout : {
		type : 'border'
	},

	items : [ {
		region : 'west',
		xtype : 'panel',
		title : 'west',
		width : 150
	}, {
		region : 'center',
		xtype : 'tabpanel',
		items : [ {
			title : 'Simple Form',
			bodyPadding : 20,
			items : [ {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name',
				emptyText : 'Please enter your name',
				enableKeyEvents : true
			}, {
				xtype : 'label',
				text : 'Awesome Field'
			} ]
		}, {
			title : 'Grid',
			bodyPadding : 20,
			items : [ {
				xtype : 'movielist'
			}, {
				xtype : 'movieform'
			} ]
		} ]
	} ]
});