function onEvaluate(success) {
    if (!success) {
        // application failed to load
    }
    console.log("evaluated done");

}

App.onLaunch = function(options) {
    var baseurl = options.BASEURL;
    App.launchOptions = options;
    evaluateScripts([`${baseurl}js/atv.min.js`, `${baseurl}js/app.js`], onEvaluate);
};
