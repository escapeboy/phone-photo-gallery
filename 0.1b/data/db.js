(function() {
    var base_url = 'http://gallery1.procode.biz/gallery1';

    myPhotoGallery.db = {
        newest: new DevExpress.data.CustomStore({
            load: function(){
                return $.getJSON(base_url+'/newest');
            }
        })
    }
})();