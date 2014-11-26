/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */
Ext.define('Ecom.view.Product.Form.ProductEditForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.producteditform',
    margin: '0 0 0 10',
    title: 'Product details',
    defaultType: 'textfield',
    items: [{
            xtype: 'combobox',
            name: 'category_id',
            store: "Category",
            editable: false,
            fieldLabel: 'Category Name',
            valueField: 'id',
            displayField: 'name',
            mode: 'local',
            allowBlank: false,
            msgTarget: 'under',
            emptyText: 'Select a Category...',
        },
        {
            xtype: 'combobox',
            name: 'brand_id',
            itemId: "brand_id_edit",
            store: "Brand",
            editable: false,
            fieldLabel: 'Brand Name',
            valueField: 'id',
            displayField: 'name',
            mode: 'local',
            allowBlank: false,
            msgTarget: 'under',
            emptyText: 'Select a Brand...',
            listeners: {
                select: function(combo, record, index) {
                    var selVal = Ext.getCmp('brand').getValue();
                    var vehicleCombo = Ext.getCmp('vehicle');
                    vehicleCombo.setValue("");
                    vehicleCombo.store.clearFilter();
                    vehicleCombo.store.remoteFilter = true;// optional
                    vehicleCombo.store.on('load', function(s) {
                        s.remoteFilter = false;
                    }, this, {single: true}) // optional
                    vehicleCombo.store.filter("brand_id", selVal);
                    vehicleCombo.store.proxy.extraParams = {filter: "brand_id"};

                    vehicleCombo.store.load();

                }
            },
            selectOnFocus: true,
        },
        {
            xtype: 'combobox',
            name: 'vehicle_id',
            itemId: 'vehicle',
            store: "Vehicle",
            editable: false,
            fieldLabel: 'Vehicle Name',
            valueField: 'id',
            displayField: 'name',
            mode: 'local',
            emptyText: 'Select a Vehicle...',
            allowBlank: false,
            msgTarget: 'under',
        },
        {
            xtype: 'combobox',
            name: 'vehiclemodel',
            itemId: 'vehiclemodel',
            store: "Vehicle",
            editable: true,
            fieldLabel: 'Vehicle Model',
            valueField: 'id',
            displayField: 'model',
            mode: 'local',
            emptyText: 'Select a Vehicle Model...',
            allowBlank: false,
            msgTarget: 'under'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Vehicle Year',
            value: 2013,
            minValue: 1900,
            maxValue: 2050,
            allowBlank: false,
            name: 'vehicleYear'
        },
        , {
            xtype: 'textfield',
            fieldLabel: 'Code',
            name: 'code',
            fieldWidth: 80,
            msgTarget: 'under',
            allowBlank: false,
            flex: 1,
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            fieldWidth: 80,
            msgTarget: 'under',
            allowBlank: false

        }, {
            xtype: 'textarea',
            fieldLabel: 'Description',
            name: 'description',
            fieldWidth: 80,
            msgTarget: 'under',
            allowBlank: false
        }, {
            xtype: 'filefield',
            itemId: 'form-file-fail',
            emptyText: 'Select an image',
            fieldLabel: 'Image',
            name: 'image',
            buttonText: '',
            buttonConfig: {
                iconCls: 'upload-icon'
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Price',
            name: 'price',
            msgTarget: 'under',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Initial Year',
            name: 'initial_year',
            msgTarget: 'under',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'End Year',
            name: 'end_year',
            msgTarget: 'under',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'quantity',
            name: 'quantity',
            msgTarget: 'under',
            allowBlank: false
        }, {
            xtype: 'button',
            text: 'Update',
            handler: function() {

                var form = this.up('form').getForm();
                if (!form.isValid()) {
                    Ext.Msg.alert('Attention', 'You need to fix some errors!');
                    return false;
                }
                else {
                }
                var product = Ext.create('Ecom.model.Product', form.getValues());
                var errors = product.validate();

                form.loadRecord(product);

                form.markInvalid(errors);


                form.submit({
                    clientValidation: true,
                    url: 'update.php',
                    success: function(form, action) {
                        Ext.Msg.alert('Product Updated Successfuly');
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Product Updated Failed');

                    }
                });



            }
        },
    ],
});