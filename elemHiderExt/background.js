function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {coolMessage: "The shortcut was pressed!"}
    ).then(response => {console.log("Message from the content script: " + response.coolResponse)})
  }
}

browser.commands.onCommand.addListener((command) => {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs)
});
