 Ext.define('Training.controller.Movies', {
     extend: 'Ext.app.Controller',
     
     models: ['Movie'],
     
     stores: ['Movies'],

     init: function() {
    	 console.log('init::Movies Controller');
    	 
    	 // ExtJS automagically create getter and setter for Model.
    	 console.log('Model Name: ' + this.getMovieModel().getName());
    	 
    	 // ExtJS automagicall create getter and setter for Store as well.
    	 console.log('Movie Count: ' + this.getMoviesStore().getCount());
     }
 });