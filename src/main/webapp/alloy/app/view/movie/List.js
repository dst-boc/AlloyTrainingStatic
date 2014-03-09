Ext.define('Training.view.movie.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.movielist',
	store : 'Movies',
	title : 'Movies',
	columns : [ {
		text : 'Title',
		dataIndex : 'title',
		flex: 1
	}, {
		text : 'Year',
		dataIndex : 'year'
	}, {
		text : 'Rating',
		dataIndex : 'rating'
	}, {
		text : 'Runtime',
		dataIndex : 'runtime'
	} ]
});