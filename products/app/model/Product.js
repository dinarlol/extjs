Ext.define('Ecom.model.Product', {
    extend: 'Ext.data.Model',
    fields: [{name: 'id', type: 'int'}, {name: 'category_id', type: 'int'}, {name: 'vehicle_id', type: 'int'}, {name: 'user_id', type: 'int'}, {name: 'description', type: 'string'}, {name: 'name', type: 'string'}, {name: 'code', type: 'string'},
        'image', {name: 'price', type: 'int'}, {name: 'initial_year', type: 'int'}, {name: 'end_year', type: 'int'}, 'last_update', {name: 'quantity', type: 'int'}],
    validations: [
        {type: 'presence', field: 'name', message: 'You have to enter a name, silly'},
        {type: 'length', field: 'name', min: 3, message: 'Correct name please'},
        {type: 'length', field: 'code', min: 23, message: 'Description too small'}
    ],
    belongsTo: [
        {
            name: 'category',
            instanceName: 'category',
            model: 'Ecom.model.Category',
            getterName: 'getCategory',
            setterName: 'setCategory',
            associationKey: 'id',
            foreignKey: 'category_id'
        }
    ],
    getImage: function() {
        return this.getBase64(this.get('image'));
    },
    getBase64: function(str) {
        return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    },
    proxy: {
        type: 'ajax',
        url: 'data/product.json',
        reader: {
            type: 'json',
            root: 'products'
        }
    },
    remoteSort: false,
    sorters: [{
            property: 'id',
            direction: 'DESC'
        }],
    pageSize: 50
}); 