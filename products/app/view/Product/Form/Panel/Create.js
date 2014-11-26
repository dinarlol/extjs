/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */
Ext.define('Ecom.view.Product.Form.Panel.Create', {
    extend: 'Ext.form.Panel',
    alias: 'widget.newproductpanel',
    frame: true,
    title: 'Product Data',
    bodyPadding: 5,
    layout: 'fit',
    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },
    items: [{
            xtype: 'productform',
        }]

});