module.exports = {

    setOptions: function(successCallback, errorCallback, args) {
        var options = args[0];
        var res = NativeAudioRT.NativeAudioRTImpl.setOptions(options);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    preloadSimple: function(successCallback, errorCallback, args) {
        var id = args[0];
        var assetPath = args[1];
        var res = NativeAudioRT.NativeAudioRTImpl.preloadSimple(id, assetPath);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    preloadComplex: function(successCallback, errorCallback, args) {
        var id = args[0];
        var assetPath = args[1];
        var volume = args[2];
        var voices = args[3];
        var delay = args[4];
        var res = NativeAudioRT.NativeAudioRTImpl.preloadComplex(id, assetPath, volume, voices, delay);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    play: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudioRT.NativeAudioRTImpl.play(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    loop: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudioRT.NativeAudioRTImpl.loop(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    stop: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudioRT.NativeAudioRTImpl.stop(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    unload: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudioRT.NativeAudioRTImpl.unload(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    setVolumeForComplexAsset: function(successCallback, errorCallback, args) {
        var id = args[0];
        var volume = args[1];
        var res = NativeAudioRT.NativeAudioRTImpl.setVolumeForComplexAsset(id, volume);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
};


require("cordova/exec/proxy").add("NativeAudio", module.exports);
