Ext.define('Training.controller.Movies', {
	extend : 'Ext.app.Controller',

	models : [ 'Movie' ],

	stores : [ 'Movies', 'Ratings' ],

	views : [ 'movie.List', 'movie.Form' ],

	init : function() {
		console.log('init::Movies Controller');

		// ExtJS automagically create getter and setter for Model.
		console.log('Model Name: ' + this.getMovieModel().getName());

		// ExtJS automagicall create getter and setter for Store as well.
		console.log('Movie Count: ' + this.getMoviesStore().getCount());

		this.control({
			'movieform' : {
				saveMovie : this.saveMovie
			},
		});
	},

	saveMovie : function(form, formCmp) {
		var movie = Ext.create('Training.model.Movie', form.getValues());

		if (movie.isValid()) {
			movie.save({
				success : function(movie, operation) {
					Ext.log('Movie is successfully saved.');
				},
				failure : function(movie, operation) {
					Ext.log({
						level : 'error',
						dump : movie
					}, "Movie can't be saved.");
				}
			});
		}
	}
});