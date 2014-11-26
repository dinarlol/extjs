Ext.define('Ecom.model.Brand', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    
    proxy: {
        type: 'ajax',
        url: 'data/brand.json',
        reader: {
            type: 'json',
            root: 'brands'
        }
    }
});