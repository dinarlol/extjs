Ext.define('Ecom.model.Vehicle', {
    extend: 'Ext.data.Model',
    
    fields: ['id', 'name'],
    
    proxy: {
        type: 'ajax',
        url: 'data/categories.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});