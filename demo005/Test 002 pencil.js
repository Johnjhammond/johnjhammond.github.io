(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Test 002 pencil_atlas_1", frames: [[0,0,1252,507],[0,509,1252,507]]},
		{name:"Test 002 pencil_atlas_2", frames: [[0,0,1920,1600]]},
		{name:"Test 002 pencil_atlas_3", frames: [[0,0,1920,1600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Test 002 pencil_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Test 002 pencil_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leftbank = function() {
	this.initialize(ss["Test 002 pencil_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mushrooms = function() {
	this.initialize(ss["Test 002 pencil_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-313.05,-126.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313,-126.7,626,253.5);


(lib.text01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-313.05,-126.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(-313,-126.7,626,253.5), null);


(lib.mushroom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mushrooms();
	this.instance.setTransform(-960,-800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mushroom, new cjs.Rectangle(-960,-800,1920,1600), null);


(lib.leftbank_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leftbank();
	this.instance.setTransform(-960,-800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-800,1920,1600);


(lib.bullet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullet, new cjs.Rectangle(-26,-26,52,52), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-313,-126.7,626,253.5), null);


(lib.bulletAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bullet();
	this.instance.setTransform(0,0,1.0002,1.0002);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.64,scaleY:0.64},49).to({scaleX:1,scaleY:1},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-25.8,51.6,51.6);


(lib.textbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_49 = function() {
		/* Stop a Movie Clip
		Stops the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently playing.
		*/
		
		this.movieClip_1.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// text
	this.instance = new lib.text01();

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.movieClip_1}]},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313,-126.7,626,253.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.textbox();
	this.instance.setTransform(0,-45.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313,-172.5,626,253.5);


// stage content:
(lib.Test002pencil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [99,229];
	// timeline functions:
	this.frame_99 = function() {
		/* Play a Movie Clip
		Plays the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently stopped.
		*/
		
		this.textbox01.play();
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.next01.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(102);
		}
	}
	this.frame_229 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(130).call(this.frame_229).wait(1));

	// textbox02
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(1554.4,-186.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({y:321.25},70,cjs.Ease.quadOut).wait(1));

	// mushroom
	this.instance_1 = new lib.mushroom();
	this.instance_1.setTransform(960,-381.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).wait(1).to({y:-365.3674},0).wait(1).to({y:-349.4454},0).wait(1).to({y:-333.4476},0).wait(1).to({y:-317.3881},0).wait(1).to({y:-301.2816},0).wait(1).to({y:-285.1432},0).wait(1).to({y:-268.988},0).wait(1).to({y:-252.8318},0).wait(1).to({y:-236.69},0).wait(1).to({y:-220.5785},0).wait(1).to({y:-204.5129},0).wait(1).to({y:-188.5087},0).wait(1).to({y:-172.5811},0).wait(1).to({y:-156.7451},0).wait(1).to({y:-141.015},0).wait(1).to({y:-125.405},0).wait(1).to({y:-109.9283},0).wait(1).to({y:-94.5977},0).wait(1).to({y:-79.4254},0).wait(1).to({y:-64.4226},0).wait(1).to({y:-49.5999},0).wait(1).to({y:-34.9671},0).wait(1).to({y:-20.5332},0).wait(1).to({y:-6.3064},0).wait(1).to({y:7.7061},0).wait(1).to({y:21.4976},0).wait(1).to({y:35.0623},0).wait(1).to({y:48.3954},0).wait(1).to({y:61.4925},0).wait(1).to({y:74.35},0).wait(1).to({y:88.0753},0).wait(1).to({y:101.5345},0).wait(1).to({y:114.7257},0).wait(1).to({y:127.6478},0).wait(1).to({y:140.3001},0).wait(1).to({y:152.6826},0).wait(1).to({y:164.7958},0).wait(1).to({y:176.6403},0).wait(1).to({y:188.2176},0).wait(1).to({y:199.5291},0).wait(1).to({y:210.5769},0).wait(1).to({y:221.3632},0).wait(1).to({y:231.8904},0).wait(1).to({y:242.1613},0).wait(1).to({y:252.1788},0).wait(1).to({y:261.9461},0).wait(1).to({y:271.4662},0).wait(1).to({y:280.7426},0).wait(1).to({y:289.7789},0).wait(1).to({y:298.5784},0).wait(1).to({y:307.1449},0).wait(1).to({y:315.4819},0).wait(1).to({y:323.5934},0).wait(1).to({y:331.4828},0).wait(1).to({y:339.1541},0).wait(1).to({y:346.6109},0).wait(1).to({y:353.857},0).wait(1).to({y:360.8961},0).wait(1).to({y:367.7319},0).wait(1).to({y:374.3681},0).wait(1).to({y:380.8084},0).wait(1).to({y:387.0563},0).wait(1).to({y:393.1153},0).wait(1).to({y:398.9891},0).wait(1).to({y:404.681},0).wait(1).to({y:410.1945},0).wait(1).to({y:415.533},0).wait(1).to({y:420.6996},0).wait(1).to({y:425.6977},0).wait(1).to({y:430.5304},0).wait(1).to({y:435.2009},0).wait(1).to({y:439.7121},0).wait(1).to({y:444.0672},0).wait(1).to({y:448.2691},0).wait(1).to({y:452.3205},0).wait(1).to({y:456.2245},0).wait(1).to({y:459.9836},0).wait(1).to({y:463.6006},0).wait(1).to({y:467.0782},0).wait(1).to({y:470.419},0).wait(1).to({y:473.6254},0).wait(1).to({y:476.6999},0).wait(1).to({y:479.645},0).wait(1).to({y:482.463},0).wait(1).to({y:485.1562},0).wait(1).to({y:487.7269},0).wait(1).to({y:490.1773},0).wait(1).to({y:492.5095},0).wait(1).to({y:494.7257},0).wait(1).to({y:496.8278},0).wait(1).to({y:498.818},0).wait(1).to({y:500.6982},0).wait(1).to({y:502.4702},0).wait(1).to({y:504.136},0).wait(1).to({y:505.6975},0).wait(1).to({y:507.1563},0).wait(1).to({y:508.5143},0).wait(1).to({y:509.7731},0).wait(1).to({y:510.9345},0).wait(1).to({y:512},0).wait(1));

	// bullet
	this.next01 = new lib.bulletAnim();
	this.next01.name = "next01";
	this.next01.setTransform(1482.4,393.8);
	this.next01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next01).wait(99).to({_off:false},0).to({y:1352.05},60,cjs.Ease.quadIn).to({_off:true},1).wait(70));

	// textbox
	this.textbox01 = new lib.textbox();
	this.textbox01.name = "textbox01";
	this.textbox01.setTransform(1512.4,-130.05);

	this.timeline.addTween(cjs.Tween.get(this.textbox01).to({y:242.05},99,cjs.Ease.quadOut).to({y:1200.3},60,cjs.Ease.quadIn).to({_off:true},1).wait(70));

	// leftbank
	this.instance_2 = new lib.leftbank_1("synched",0);
	this.instance_2.setTransform(960,-390.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:656},99,cjs.Ease.quadOut).to({y:1568.2},50,cjs.Ease.quadIn).to({_off:true},1).wait(80));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,-650.3,960,3018.5);
// library properties:
lib.properties = {
	id: 'E1ACF6536467E1419A992566549F8360',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Test 002 pencil_atlas_1.png", id:"Test 002 pencil_atlas_1"},
		{src:"images/Test 002 pencil_atlas_2.png", id:"Test 002 pencil_atlas_2"},
		{src:"images/Test 002 pencil_atlas_3.png", id:"Test 002 pencil_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E1ACF6536467E1419A992566549F8360'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;