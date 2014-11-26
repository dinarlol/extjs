/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */

Ext.define('Ecom.view.Product.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productgrid',
    itemId: 'grideditform',
    selType: 'rowmodel',
    columns: [{
            dataIndex: 'id',
            text: 'Id',
            // instead of specifying filter config just specify filterable=true
            // to use store's field's type p        roperty (if type property not
            // explicitly specified in store config it will be 'auto' which
            // GridFilters will assume to be 'StringFilter'
            filterable: true,
            width: 30
                    //,filter: {type: 'numeric'}
        }, {
            dataIndex: 'name',
            text: 'Name',
            itemId: 'Name',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            dataIndex: 'code',
            text: 'Code',
            itemId: 'code',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            dataIndex: 'initial_year',
            text: 'Intial Year',
            filter: {
                type: 'numeric'
            },
        }, {
            dataIndex: 'image',
            text: 'image',
        }, {
            dataIndex: 'end_year',
            text: 'End Year',
            filter: {
                type: 'numeric'
            },
        }, {
            dataIndex: 'quantity',
            text: 'Quantity',
            filter: {
                type: 'numeric'
            },
        },
        {
            dataIndex: 'category_id',
            text: 'Category',
            itemId: 'category',
            flex: 1,
        }, {
            dataIndex: 'vehicle_id',
            text: 'Vehicle',
            itemId: 'vehicle_id',
        }, {
            dataIndex: 'vehicle_id',
            text: 'Vehicle',
            itemId: 'vehicle_id',
        },
    ],
    store: "Product",
    dockedItems: [
        {
            xtype: 'form',
            dock: 'top',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    fieldLabel: 'Search',
                    xtype: 'searchfield',
                    store: "Product",
                }, {
                    xtype: 'button',
                    formBind: true,
                    itemId: 'add',
                    text: 'Add',
                    handler: function(button, event) {
                        this.addProduct = Ext.create('Ext.window.Window', {
                            title: 'New Product',
                            layout: 'vbox',
                            autoShow: true,
                            items: {
                                xtype: 'newproductpanel',
                            }
                        });
                    } // end button handler
                },
                {
                    xtype: 'button',
                    formBind: true,
                    itemId: 'delete',
                    // disabled: true,
                    text: 'Delete',
                    iconCls: 'icon - delete ',
                    handler: function() {
                        var grid = Ext.ComponentQuery.query('#grideditform')[0];
                       var selected = grid.getView().getSelectionModel().getSelection();
              me = this;
                            var store = me.ownerCt.ownerCt.store;
                        if(selected.length>0) {
                for(var i=0;i<selected.length;i++) {
                    store.remove(selected[i]);
                }
                
                 var dpfrm = Ext.ComponentQuery.query('#editform')[0];
            dpfrm.hide();

            var dpimg = Ext.ComponentQuery.query('#displayimage')[0];
            dpimg.setSrc('');
                
                store.load();
            }
                        
                   
                        /*
                         proxy.extraParams["delete"] = selection.data.id;
                         proxy.extraParams.start = 0;
                         store.load();
                         */
                    } // end button handler

                },
            ] //end items
        }




    ],
    viewConfig: {
        stripeRows: true
    },
});