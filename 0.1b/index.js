(function() {
    "use strict";

    var myPhotoGallery = window.myPhotoGallery = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        myPhotoGallery.app = new DevExpress.framework.html.HtmlApplication({
            namespace: myPhotoGallery,
            
            navigationType: "slideout",
            navigation: [
              {
                title: "Home",
                action: "#home",
                icon: "home"
              },
              {
                title: "Newest",
                action: "#newest",
                icon: "globe"
              },
              {
                title: "Popular",
                action: "#popular",
                icon: "chart"
              },
              {
                title: "Likes",
                action: "#likes",
                icon: "like"
              },
              {
                title: "Favorites",
                action: "#favorites",
                icon: "favorites"
              }
            ]
        });
        
        myPhotoGallery.app.router.register(":view", { view: "home" });
        myPhotoGallery.app.navigate();
    });
    
})();