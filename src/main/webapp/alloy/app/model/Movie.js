Ext.define('Training.model.Movie', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'title',  type: 'string'},
        {name: 'year',   type: 'int'},
        {name: 'rating', type: 'string'},
        {name: 'runtime', type: 'int'}
    ],
    
    proxy: {
    	type: 'rest',
    	url: '/api/movies',
    	extraParams: {
    		page: 0,
    	},
    	reader: {
    		type: 'json', 
    		root: '_embedded.movies'
    	}
    }
});