Ext.define('Ecom.form.ProductForm' ,{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.productform',
 
    margin: '0 0 0 10',
 
    title:'Company details',
 
    defaults: {
        width: 440,
        labelWidth: 90
    },
 
    defaultType: 'textfield',
 
    items : [{
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
                //triggerAction: 'all',
                emptyText: 'Select a Category...',
                //selectOnFocus:true  
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
                //triggerAction: 'all',
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
                //selectOnFocus:true,

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
                //triggerAction: 'all',
                emptyText: 'Select a Vehicle Model...',
                allowBlank: false,
                msgTarget: 'under'     //selectOnFocus:true  
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
                // labelAlign: 'top',
                //     cls: 'field-margin',
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
                //   formBind: true,
                //  disabled: true,
                text: 'Save',
                //formBind: true,
                //scope: this,
                //width: 40,

                handler: function() {

                    var form = this.up('form').getForm();
                    console.log(form);
                    //  var record = form.getRecord();
                    if (!form.isValid()) {
                        Ext.Msg.alert('Attention', 'You need to fix some errors!');
                        return false;
                    }
                    else {
                        //    record.set(form.getValues())
                    }

                    console.log(form);
                    var form = this.up('form').getForm();
                    var product = Ext.create('Ecom.model.Product', form.getValues());
                    var errors = product.validate();

                    form.loadRecord(product);

                    form.markInvalid(errors);

                    console.log(form.isValid());

                    if (form.isValid()) {
                        var out = [];
                        Ext.Object.each(form.getValues(), function(key, value) {
                            out.push(key + '=' + value);
                        });
                        Ext.Msg.alert('Submitted Values', out.join('<br />'));
                    }
                    
                    form.submit({
                        clientValidation: true,
                        url: 'register.php',
                        success: function(form, action) {
                        },
                        failure: function(form, action) {

                        }
                    });



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