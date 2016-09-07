// ==UserScript==
// @name           2+2 full ignore
// @include        http://forumserver.twoplustwo.com/*
// @grant        none
// ==/UserScript==

var query = "//a[@class='bigusername']";
var snapshot = document.evaluate(query,
	                          document,
	                          null,
	                          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
	                          null);
var ignores = ['user1', 'user2'];
var i;
for(i = 0; i < snapshot.snapshotLength; ++i) {
	var node = snapshot.snapshotItem(i);
	try {
		var name = '' + node.textContent;
		if(ignores.indexOf(name) > -1) {
			var userText = node.parentNode.innerHTML;
			node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = " ";
		}
	}
	catch(e) {
	}
}
// ==/UserScript==
