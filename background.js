let url_string = document.location.href;
let check_x = "<b>asAds33CC1rxa1</b>";

url_x = url_string+"?"
doc_x = document.querySelectorAll('input:is([type="hidden"]), input:is([type="text"])')
i_x = 0
const ignore = ["google.com","www.google.com"];


var selector = $('input:is([type="hidden"]), input:is([type="text"])');
var count = 0;
var waitForEl = function(selector, callback) {
    var selector = $('input:is([type="hidden"]), input:is([type="text"])');
    count++;
    console.log("count: " + count);
    if (selector.length) {
        callback();
    } else {
        setTimeout(function() {
            waitForEl(selector, callback);
        }, 1000);
    }
};
waitForEl(selector, function() {
    if (!ignore.includes(document.location.host)){
      $(document).ready(function() {
        $(window).load(function() {
          console.log("hi")
          doc_x.forEach(item => {
            i_x++
            url_x += item.name+"="+check_x+"&"
            if (doc_x.length==i_x){
              $.ajax({
                type: "GET",
                url: url_x,
                cache: false,
                data: {},
                  success: function(html){
                    if(html.includes(check_x)){
                      alert("XSS: "+url_x)
                      console.log(url_x)
                      console.log(html.includes(check_x));
                    }
                  }
                });
            }
          })
        });
      });

    }
});
