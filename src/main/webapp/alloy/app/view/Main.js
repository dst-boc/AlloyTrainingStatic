Ext.define(
    'Training.view.Main',
    {
        extend: 'Ext.container.Container',
        requires: [
                   'Ext.tab.Panel',
                   'Ext.layout.container.Border' ],

        xtype: 'app-main',

        layout: {
            type: 'border'
        },

        items: [
                {
                    region: 'west',
                    xtype: 'panel',
                    title: 'west',
                    width: 150
                },
                {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [ {
                        title: 'Center Tab 1',
                        bodyPadding: 20,
                        items: [
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    fieldLabel: 'Name',
                                    emptyText: 'Please enter your name',
                                    enableKeyEvents: true
                                },
                                {
                                    xtype: 'label',
                                    text: 'Awesome Field'
                                } ]
                    } ]
                } ]
    });