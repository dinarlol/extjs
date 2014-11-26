/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */

Ext.define('Ecom.view.Product.ProductTab', {
    extend: 'Ext.TabPanel',
    alias: 'widget.crudproducttabs',
    //height: 270,
    layout: {
        type: 'fit'
    },
    defaults: {
        // split: true
    },
    items: [{
            title: 'Product Management',
            xtype: 'panel',
            anchor: '100%',
            bodyPadding: 5,
            layout: 'border',
            bindToModel: true,
            items: [{
                    region: 'north',
                    xtype: 'productgrid',
                    align: 'center',
                    height: 320, 
                }, {
                    region: 'east',
                    xtype: 'image',
                    itemId: 'displayimage',
                    width: 420,
                },
                {
                    region: 'center',
                    xtype: 'editproductpanel',
                    itemId: 'editform',
                }

            ]
        },
        {
            region: 'center',
            title: 'Product Preview',
            xtype: 'productpreview',
            align: 'center',
            autoShow: true,

        },
 ,
    ]


});