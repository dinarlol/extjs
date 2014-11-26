/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */
Ext.define('Ecom.view.Product.Form.Panel.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.editproductpanel',
    frame: true,
    title: 'Edit Product',
    bodyPadding: 5,
    layout: 'fit',
    hidden: true,
    // Specifies that the items will now be arranged in columns

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },
    items: [{
            xtype: 'producteditform',
            //columnWidth: .30
        }]

});