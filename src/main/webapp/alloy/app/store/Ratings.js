Ext.define('Training.store.Ratings', {
	extend : 'Ext.data.Store',
	fields : [ 'name', 'value' ],
	data : [ {
		'name' : 'G',
		'value' : 'G'
	}, {
		'name' : 'PG',
		'value' : 'PG'
	}, {
		'name' : 'PG-13',
		'value' : 'PG-13'
	}, {
		'name' : 'R',
		'value' : 'R'
	}, {
		'name' : 'NC-17',
		'value' : 'NC-17'
	} ]
});