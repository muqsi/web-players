var objElem = document.createElement('object');
objElem.type = 'application/avplayer';

/*
//Adjust the size and position of the media display area 
//by changing the CSS style attribute
objElem.style.left = 100 + 'px';
objElem.style.top = 200 + 'px';
objElem.style.width = 600 + 'px';
objElem.style.height = 400 + 'px';
*/

//Append the object element to your document
document.body.appendChild(objElem);
webapis.avplay.open('yourMediaURI');

var avPlayDrmServers = {
  DeleteLicenseAfterUse: true,
  LicenseServer: 'http://pr.drm.intigral-ott.net/PlayReady/RightsManager.asmx?deviceId=MjM0Mjc5MzctYjBiMy0zZGRlLTg1NTYtYjkzMGVmMjA4ODZm'
};

webapis.avplay.setDrm(
  "PLAYREADY",
  "SetProperties",
  JSON.stringify(avPlayDrmServers)
);

var listener = {
  onbufferingstart: function() {
    console.log("Buffering start.");
  },

  onbufferingprogress: function(percent) {
    console.log("Buffering progress data : " + percent);
  },

  onbufferingcomplete: function() {
    console.log("Buffering complete.");
  },
  onstreamcompleted: function() {
    console.log("Stream Completed");
    webapis.avplay.stop();
  },

  oncurrentplaytime: function(currentTime) {
    console.log("Current playtime: " + currentTime);
  },

  onerror: function(eventType) {
    console.log("event type error : " + eventType);
  },

  onevent: function(eventType, eventData) {
    console.log("event type: " + eventType + ", data: " + eventData);
  },

  onsubtitlechange: function(duration, text, data3, data4) {
    console.log("subtitleText: " + text);
  },
  ondrmevent: function(drmEvent, drmData) {
    console.log("DRM callback: " + drmEvent + ", data: " + drmData);
  }
};

webapis.avplay.setListener(listener);