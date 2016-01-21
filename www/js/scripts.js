function onBodyLoad(){       
    document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady(){
  	var attachFastClick = Origami.fastclick;
	attachFastClick(document.body);
}

$(function(){
    onBodyLoad();
    onDeviceReady();
});