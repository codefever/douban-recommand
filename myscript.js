chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.action == "getSelected"){sendResponse({data: window.getSelection().toString()});}
    else {sendResponse({});}
});
