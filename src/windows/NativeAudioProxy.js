var OPT_FADE_MUSIC = "fadeMusic";
var _fadeMusic = false; 

var _graph = null;
var _deviceOutput = null;


var _fileInputs = {};

function addFileInput(id, node, volume, voices, delay) {
    if (!_fileInputs[id]) {    
        _fileInputs[id] = {};
        _fileInputs[id].sound = result.fileInputNode;
        
        _fileInputs[id].settings = {};
        _fileInputs[id].settings.volume = volume;
        _fileInputs[id].settings.voices = voices;                    
        _fileInputs[id].settings.delay = delay;
        
        retun true; 
    } else {
        handleError('file with id ' + id + ' is already loaded');
        return false;
    }
}


function handleError(msg) {
    console.log('NativeAudioProxy: ' + msg);
}


function createAudioGraphAsync() {
    var settings = new Windows.Media.Audio.AudioGraphSettings();
    
    return Windows.Media.Audio.AudioGraph.createAsync(settings).then(
        function (result) {
            _graph = result.graph;    
            return _graph.createDeviceOutputNodeAsync(Windows.Media.Render.AudioRenderCategory.backgroundCapableMedia);
        }
    ).then(
        function (result) {
            _deviceOutput = result.deviceOutput;
            _graph.ResetAllNodes();
            _graph.Start();
        }
    );
}



module.exports = {
    
    setOptions: function(successCallback, errorCallback, options) {
        if (options[OPT_FADE_MUSIC])
            _fadeMusic = options[OPT_FADE_MUSIC];
    },

    preloadSimple: function(successCallback, errorCallback, id, assetPath) {
        // 
            var finalize = function () {
                _graph.createFileInputNodeAsync(assetPath).done(
                function (result) {  
                    if (addFileInput(id, result.fileInputNode, 1, 1, 0)) {
                        _fileInputNode.Stop();
                        _fileInputNode.AddOutgoingConnection(_deviceOutput);
                        successCallback();
                    else {
                        errorCallback('file with id ' + id + ' is already loaded');
                    }
                },
                function (e) { handleError('error preloading file ' + e);  errorCallback(e); }
            );
        //  ^
        //  |
        
        if (_deviceOutput === null) {
            createAudioGraphAsync().done(
                finalize,
                function (e) { handleError('error preloading file ' + e);  errorCallback(e); }
            );
        }
    },

    preloadComplex: function(successCallback, errorCallback, id, assetPath, volume, voices, delay) {
        //
            var finalize = function () {
                _graph.createFileInputNodeAsync(assetPath).done(
                function (result) {  
                    if (addFileInput(id, result.fileInputNode, volume, voices, delay)) {
                        _fileInputNode.Stop();
                        _fileInputNode.AddOutgoingConnection(_deviceOutput);
                        successCallback();
                    } else {
                        errorCallback('file with id ' + id + ' is already loaded');
                    }     
                },
                function (e) { handleError('error preloading file ' + e);  errorCallback(e); }
            );
        //  ^
        //  |
        
        if (_deviceOutput === null) {
            createAudioGraphAsync().done(
                finalize,
                function (e) { handleError('error preloading file ' + e);  errorCallback(e); }
            );
        }
    },
    
    play: function(successCallback, errorCallback, id) {
        if (_fileInputs[id]) {
            var sound = _fileInputs[id].sound;
            var settings = _fileInputs[id].settings;
            
            sound.outgoingGain = settings.volume;
            sound.seek(settings.delay);
            sound.start();
            
        ) else {
            handleError('error preloading file ' + e);  
            errorCallback(e);
        }
    },
    
    loop: function(successCallback, errorCallback, id) {
        var sound = _fileInputs[id].sound;
        var settings = _fileInputs[id].settings;
        
        sound.outgoingGain = settings.volume;
        sound.seek(settings.delay);
        sound.loopCount = null;
        sound.start();
    },
    
    stop: function(successCallback, errorCallback, id) {
        var sound = _fileInputs[id].sound;
        
        sound.stop();
    },
    
    unload: function(successCallback, errorCallback, id) {
        delete _fileInputs[id];
    },
    
    setVolumeForComplexAsset: function(successCallback, errorCallback, id, volume) {
        var sound = _fileInputs[id].sound;
        
        sound.outgoingGain = volume;
    }
};


require("cordova/exec/proxy").add("NativeAudio", module.exports);