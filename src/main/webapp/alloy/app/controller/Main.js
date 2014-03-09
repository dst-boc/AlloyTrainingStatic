Ext.define('Training.controller.Main', {
	extend : 'Ext.app.Controller',

	init : function() {
		this.control({
			'app-main textfield[name=name]' : {
				change : this.updateLabel
			},
		});

	},

	updateLabel : function(field, newValue) {
		field.nextSibling('label').setText(newValue);
	}
});
