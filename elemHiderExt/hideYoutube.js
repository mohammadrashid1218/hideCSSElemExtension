console.log("You're on a Youtube page!")

classesToSelect = ".ytp-chrome-bottom, .ytp-gradient-bottom, .ytp-chrome-top, .ytp-gradient-top"

function hideElems() {
  var elemsToHide;
  elemsToHide = document.querySelectorAll(classesToSelect);
  for (const elem of elemsToHide) {
  	elem.style.visibility = 'hidden';
  }
}

function showElems() {
  var elemsToHide;
  elemsToHide = document.querySelectorAll(classesToSelect);
  for (const elem of elemsToHide) {
  	elem.style.visibility = 'visible';
  }
}

let visibilityToggle = 0;

browser.runtime.onMessage.addListener(request => {
  //console.log("Message from background script: " + request.coolMessage);
  if (visibilityToggle == 0) {
    hideElems();
    visibilityToggle = 1;
    return Promise.resolve({coolResponse: "Elements set to hidden!"});
  } else {
    showElems();
    visibilityToggle = 0;
    return Promise.resolve({coolResponse: "Elements set to visible!"});
  }
});
