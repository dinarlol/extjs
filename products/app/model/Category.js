Ext.define('Ecom.model.Category', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
   autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/category.json',
        reader: {
            type: 'json',
            root: 'categories',
            successProperty: 'success'
        }
    }
    
   
});