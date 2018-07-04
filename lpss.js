$ui.render({ //按钮
    views: [
      {
        type: "button",
        props: {
          title: "Button"
        },
        layout: function(make, view) {
          make.center.equalTo(view.super)
          make.width.equalTo(64)
        },
        events: {
          tapped: function(sender) {
            //$ui.toast("Tapped")
			
			$http.get
			({
               url: 'https://raw.githubusercontent.com/forpw2009/lpss_r1/master/lpss.js',
               handler: function(resp) {
               var data = resp.data
                }
             })
          }
        }
      }
    ]
  })