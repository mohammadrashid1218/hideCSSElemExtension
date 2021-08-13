console.log("You're on a Twitter page!")

classesToSelect = ".css-1dbjc4n.r-1p0dtai.r-113qch9.r-105ug2t.r-u8s1d.r-13qz1uu.r-18phcnl"
 //Don't ask me why twitter css classes are alphabet soup I don't know lol

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
