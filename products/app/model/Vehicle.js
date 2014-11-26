Ext.define('Ecom.model.Vehicle', {
    extend: 'Ext.data.Model',
    fields: ['id','name','brand_id','model','year'],
    
    proxy: {
        type: 'ajax',
        url: 'data/vehicle.json',
        reader: {
            type: 'json',
            root: 'vehicles'
        }
    }
});