/*
 * Developed BY XCodeLink (www.xcodelink.com)
 */
Ext.define('Ecom.controller.Product', {
    extend: 'Ext.app.Controller',
    refs: [{
            ref: 'newproductpanel',
            selector: 'form'
        }],
    init: function() {

        this.control({
            'productgrid': {
                selectionchange: this.gridSelectionChange,
                viewready: this.onViewReady
            }
        });
    },
    gridSelectionChange: function(model, records) {
        if (records[0]) {


            var dpfrm = Ext.ComponentQuery.query('#editform')[0];
            dpfrm.loadRecord(records[0]);
            dpfrm.show();

            var dpimg = Ext.ComponentQuery.query('#displayimage')[0];
            dpimg.setSrc('data:image/jpeg;base64,' + records[0].getImage());

        }
    },
    onViewReady: function(grid) {

    }


});