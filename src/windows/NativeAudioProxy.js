module.exports = {

    setOptions: function(successCallback, errorCallback, args) {
        var options = args[0];
        var res = NativeAudio.NativeAudioImpl.setOptions(options);

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
        var res = NativeAudio.NativeAudioImpl.preloadSimple(id, assetPath);

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
        var res = NativeAudio.NativeAudioImpl.preloadComplex(id, assetPath, volume, voices, delay);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    play: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudio.NativeAudioImpl.play(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    loop: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudio.NativeAudioImpl.loop(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    stop: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudio.NativeAudioImpl.stop(id);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    unload: function(successCallback, errorCallback, args) {
        var id = args[0];
        var res = NativeAudio.NativeAudioImpl.unload(id);

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
        var res = NativeAudio.NativeAudioImpl.setVolumeForComplexAsset(id, volume);

        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
};


require("cordova/exec/proxy").add("NativeAudio", module.exports);
