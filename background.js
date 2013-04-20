// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function updateIcon() {
  if (current == "cutebaycat-icon.png") {
    current = "cutebaycat-icon2.png";
    chrome.browserAction.setIcon({path:current});
    chrome.browserAction.setTitle({text:"Bid first. Bid last!"});
  } else if (current == "cutebaycat-icon2.png") {
    current = "cutebaycat-icon3.png";
    chrome.browserAction.setIcon({path:current});
    chrome.browserAction.setTitle({text:"Bid last. No bid!"});
  } else {
    current = "cutebaycat-icon.png";
    chrome.browserAction.setIcon({path:current});
    chrome.browserAction.setTitle({text:"No bid! Bid first!"});
  }
/*  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {greeting: current}, function(response) {
      console.log(response.farewell);
    });
  });*/
};

current = "cutebaycat-icon3.png";
chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
