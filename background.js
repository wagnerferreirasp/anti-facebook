chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id,{code:"document.getElementById('mainContainer').innerHTML = ''"});
        chrome.tabs.executeScript(tab.id,{code:"document.getElementsByClassName('_4kny')[0].innerHTML = ''"});
});
alert("Agora voce pode trabalhar tranquilo!");
