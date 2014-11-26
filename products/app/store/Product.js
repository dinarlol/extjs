
Ext.define('Ecom.store.Product', {
    extend: 'Ext.data.Store',
    requires: 'Ecom.model.Product',
    model: 'Ecom.model.Product',
    autoSync: true,
    autoLoad: true,
    //buffered: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/product.json',
            create: 'data/product.json',
            update: 'data/product.json',
            destroy: 'data/product.json'
        },
        reader: {
            type: 'json',
            successProperty: 'success',
            root: 'products',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            root: 'products'
        },
        listeners: {
            exception: function(proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: "Osperation un successful",
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    },
    listeners: {
        write: function(proxy, operation) {
            if (operation.action == 'destroy') {
                main.child('#form').setActiveRecord(null);
            }
            
            Ext.example.msg("Operation Successful");
        }
    },
 
    simpleSortMode: true,
    // Parameter name to send filtering information in
    filterParam: 'query',
    // The PHP script just use query=<whatever>
    encodeFilters: function(filters) {
        return filters[0].value;
    },
    remoteFilter: true,
    remoteSort: false,
    sorters: [{
            property: 'id',
            direction: 'DESC'
        }],
});