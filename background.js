chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id,{code:"document.getElementById('mainContainer').innerHTML = ''"});
});
window.close();
