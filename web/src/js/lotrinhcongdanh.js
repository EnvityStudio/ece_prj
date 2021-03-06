// dev1:101,392
// dev2:187,391
// dev3:263,397
// dev4:354,391
// techl1:440,364
// tachl2:517,365
// techM:589,366
// cto:686,366
// qal1:349,457
var myID = Common.currentUser().id;
(function ($, appName) {
    /// <param name="appName">namespace of application.</param>
    'use strict';
    var getCareerPath = () => {
        var url = '/user/location?user_id='+myID;
        serviceInvoker.get(url, {}, {
            error: function (response) {
                if (response.responseJSON && response.responseJSON.ErrorCode > 0) {
                }
                else {
                }
            },
            success: function (response) {
              setCoordinate(response.data);
                // Common.storeToken('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
                // Common.redirect('/index.html');
            }
        });
    }

    function setCoordinate(data){
        var imageWidth = $("#myPosition").css("width");
        var imageHeight = $("#myPosition").css("height");
        var myPositionWidth = parseInt(imageWidth.substring(0,imageWidth.length-2));
        var myPositionHeight = parseInt(imageHeight.substring(0,imageHeight.length-2));
        // alert("myPositionWidth: "+myPositionWidth + "  ---  myPositionHeight: "+myPositionHeight);
        var myLeft = data.toado_x - myPositionWidth/2;
        var myTop = data.toado_y - myPositionHeight;
        // alert("top: "+myTop + "  ---  left: "+myLeft);
        $('#myPosition').css("left",myLeft+"px");
        $('#myPosition').css("top",myTop+"px");
      }

    appName.reIndex = (param) => {
        // var data =
        // {
        //   'toado_x':440,
        //   'toado_y':364,
        // };
        // setCoordinate(data);
        getCareerPath();
    }

    appName.init = function(){
        if (!Common.checkAuthen()) {
            Common.redirect('/login.html');
        }
    };

}(jQuery, window.lotrinhcongdanhModule = window.lotrinhcongdanhModule || {}));
