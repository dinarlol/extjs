/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */
Ext.application({
    name: 'Ecom',
    appFolder: 'app',
    controllers: [
        'Product'
    ],
    views: [
        'Product.Form.ProductForm', 'Product.Grid', 'Product.ProductPreview', 'Product.ProductTab', 'Product.Form.Panel.Create', 'Product.Form.Panel.Edit', 'Product.Form.ProductEditForm'
    ],
    requires: [
        'Ecom.form.SearchField'
    ],
    autoCreateViewport: true,
    models: ['Category', 'Brand', 'Vehicle', 'Product'],
    stores: ['Category', 'Brand', 'Vehicle', 'Product'],
    controllers: ['Product']


});


//myStore.getProxy().extraParams= {search: "something"}