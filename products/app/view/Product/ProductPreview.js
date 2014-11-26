/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */
function getBase64(str) {

    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}


Ext.define('Ecom.view.Product.ProductPreview', {
    alias: 'widget.productpreview',
    extend: 'Ext.panel.Panel',
    deferInitialRefresh: false,
    initComponent: function() {
        this.getBase64 = function(str) {
            return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
        },
                this.items = [{
                xtype: 'dataview',
                layout: 'fit',
                prepareData: function(recordData, ri, record) {
                    recordData.image = getBase64(recordData.image);
                    return recordData;
                },
                itemTpl: ['<p><div><img src="data:image/jpeg;base64,{image}"></div>',
                    '<div> Name: {name}   </div>',
                    '<div> price: {price}   </div>',
                    '<div> quantity: {quantity}   </div>',
                    '<div> code: {code}   </div>',
                    '</p>',
                    '<p> {description} </p>', ],
                store: {
                    autoLoad: true,
                    fields: ['name', 'code', 'price', 'image', 'quantity', 'code', 'description'],
                    proxy: {
                        type: 'ajax',
                        url: 'data/product.json',
                        reader: {
                            type: 'json',
                            root: 'products'
                        }
   }
                },
                deferInitialRefresh: false,
            }]
        this.callParent();
    }
});