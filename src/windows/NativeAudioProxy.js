module.exports = {
    
    setOptions: function(successCallback, errorCallback, options) {
        var res = NativeAudioRT.NativeAudioRTImpl.setOptions(options);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    preloadSimple: function(successCallback, errorCallback, id, assetPath) {
        var res = NativeAudioRT.NativeAudioRTImpl.preloadSimple(id, assetPath);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },

    preloadComplex: function(successCallback, errorCallback, id, assetPath, volume, voices, delay) {
        var res = NativeAudioRT.NativeAudioRTImpl.preloadComplex(id, assetPath, volume, voices, delay);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },
    
    play: function(successCallback, errorCallback, id) {
        var res = NativeAudioRT.NativeAudioRTImpl.play(id);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },
    
    loop: function(successCallback, errorCallback, id) {
        var res = NativeAudioRT.NativeAudioRTImpl.loop(id);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },
    
    stop: function(successCallback, errorCallback, id) {
        var res = NativeAudioRT.NativeAudioRTImpl.stop(id);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    },
    
    unload: function(successCallback, errorCallback, id) {
        var res = NativeAudioRT.NativeAudioRTImpl.unload(id);
        
        if (res == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }       
    },
    
    setVolumeForComplexAsset: function(successCallback, errorCallback, id, volume) {
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