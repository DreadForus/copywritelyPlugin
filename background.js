chrome.browserAction.onClicked.addListener(function(activeTab){

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;

        const url = "https://dev.copywritely.com/tools/copywritely/create_new_task_from_plugin?url=" + url;

        chrome.tabs.create({ url: url });
    });
});
