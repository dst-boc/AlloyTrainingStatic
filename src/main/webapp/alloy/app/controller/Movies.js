 Ext.define('Training.controller.Movies', {
     extend: 'Ext.app.Controller',
     
     models: ['Movie'],
     
     stores: ['Movies'],

     init: function() {
    	 console.log('Movie Controller!');
    	 console.log(this.getMoviesStore().getCount());
     }
 });