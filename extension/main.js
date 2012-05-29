chrome.input.ime.onActivate.addListener(function(engineId) {
    skk.initDictionary();
});

chrome.input.ime.onFocus.addListener(function(engineId, ctx) {
    skk.context = ctx;
});

chrome.input.ime.onKeyEvent.addListener(function(engineId, keyevent) {
    if (keyevent.type != 'keydown') {
        return;
    }

    skk.modes[skk.currentMode](keyevent);
});
