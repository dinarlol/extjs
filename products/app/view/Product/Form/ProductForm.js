/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */

Ext.define('Ecom.view.Product.Form.ProductForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.productform',
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
            id: "brand_id",
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
                    vehicleCombo.store.remoteFilter = true;
                    vehicleCombo.store.on('load', function(s) {
                        s.remoteFilter = false;
                    }, this, {single: true})
                    vehicleCombo.store.filter("brand_id", selVal);
                    vehicleCombo.store.proxy.extraParams = {filter: "brand_id"};

                    vehicleCombo.store.load();

                }
            },
            selectOnFocus: true,
        },
        {
            xtype: 'combobox',
            name: 'vehicle',
            id: 'vehicle',
            store: "Vehicle",
            editable: false,
            fieldLabel: 'Vehicle Name',
            valueField: 'id',
            displayField: 'name',
            mode: 'local',
            //triggerAction: 'all',
            emptyText: 'Select a Vehicle...',
            allowBlank: false,
            msgTarget: 'under',
        },
        {
            xtype: 'combobox',
            name: 'vehiclemodel',
            id: 'vehiclemodel',
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
            name: 'Code',
            fieldWidth: 80,
            msgTarget: 'under',
            allowBlank: false,
            flex: 1,
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'Name',
            fieldWidth: 80,
            msgTarget: 'under',
            allowBlank: false

        }, {
            xtype: 'textarea',
            fieldLabel: 'Description',
            name: 'Description',
            fieldWidth: 80,
            msgTarget: 'under',
            allowBlank: false
        }, {
            xtype: 'filefield',
            id: 'form-file-fail',
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
            name: 'Price',
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
            text: 'Save',
            handler: function() {

                var form = this.up('form').getForm();
                if (!form.isValid()) {
                    Ext.Msg.alert('Attention', 'You need to fix some errors!');
                    return false;
                }

                var product = Ext.create('Ecom.model.Product', form.getValues());
                var errors = product.validate();
                console.log(errors);
                form.loadRecord(product);

                form.markInvalid(errors);

                if (form.isValid()) {

                    form.submit({
                        clientValidation: true,
                        url: 'data/brand.json',
                        success: function(form, action) {
                            Ext.Msg.alert('Successfuly created new product');
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Product not save');
                        }
                    });

                }
            }
        },
        {
            xtype: 'button',
            text: 'Reset',
            handler: function() {
                this.up('form').getForm().reset();
            }

        },
    ],
});