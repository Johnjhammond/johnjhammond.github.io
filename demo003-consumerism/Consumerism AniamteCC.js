(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Consumerism AniamteCC_atlas_", frames: [[0,0,1920,1080]]},
		{name:"Consumerism AniamteCC_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"Consumerism AniamteCC_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"Consumerism AniamteCC_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"Consumerism AniamteCC_atlas_5", frames: [[0,1082,1852,140],[1062,1224,240,172],[1304,1224,530,70],[0,1224,1060,140],[0,0,1920,1080]]}
];


// symbols:



(lib.CachedBmp_30 = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(img.CachedBmp_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4038,2283);


(lib.CachedBmp_28 = function() {
	this.initialize(img.CachedBmp_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4206,2315);


(lib.CachedBmp_27 = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(img.CachedBmp_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4212,2321);


(lib.CachedBmp_25 = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4044,2289);


(lib._01inequality = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._02GlobalWarming = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._03deforestation = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._04ToxicWaste = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._05slaveLabor = function() {
	this.initialize(ss["Consumerism AniamteCC_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._05slaveLabor();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._04ToxicWaste();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._03deforestation();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._02GlobalWarming();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1920,1080), null);


(lib.OUTRO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-462.95,-34.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-462.9,-34.9,926,70);


(lib.img1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._01inequality();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.HITAREA2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(-1009.45,-570.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1009.4,-570.8,2019,1141.5);


(lib.FADEUPWHITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-1051.55,-578.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1051.5,-578.8,2103,1157.5);


(lib.basketGSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-59.95,-42.9,0.4998,0.4998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-42.9,119.9,86);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HITAREA2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1009.4,-570.8,2019,1141.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.Symbol2();
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({y:496.8},0).wait(1).to({y:453.6},0).wait(1).to({y:410.4},0).wait(1).to({y:367.2},0).wait(1).to({y:324},0).wait(1).to({y:280.8},0).wait(1).to({y:237.6},0).wait(1).to({y:194.4},0).wait(1).to({y:151.2},0).wait(1).to({y:108},0).wait(1).to({y:64.8},0).wait(1).to({y:21.6},0).wait(1).to({y:-21.6},0).wait(1).to({y:-64.8},0).wait(1).to({y:-108},0).wait(1).to({y:-151.2},0).wait(1).to({y:-194.4},0).wait(1).to({y:-237.6},0).wait(1).to({y:-280.8},0).wait(1).to({y:-324},0).wait(1).to({y:-367.2},0).wait(1).to({y:-410.4},0).wait(1).to({y:-453.6},0).wait(1).to({y:-496.8},0).wait(1).to({y:-540},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(960,1620,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1575},0).wait(1).to({y:1530},0).wait(1).to({y:1485},0).wait(1).to({y:1440},0).wait(1).to({y:1395},0).wait(1).to({y:1350},0).wait(1).to({y:1305},0).wait(1).to({y:1260},0).wait(1).to({y:1215},0).wait(1).to({y:1170},0).wait(1).to({y:1125},0).wait(1).to({y:1080},0).wait(1).to({y:1035},0).wait(1).to({y:990},0).wait(1).to({y:945},0).wait(1).to({y:900},0).wait(1).to({y:855},0).wait(1).to({y:810},0).wait(1).to({y:765},0).wait(1).to({y:720},0).wait(1).to({y:675},0).wait(1).to({y:630},0).wait(1).to({y:585},0).wait(1).to({y:540},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1080,1920,3240);


(lib.IMG5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1033.0435},0).wait(1).to({y:986.087},0).wait(1).to({y:939.1304},0).wait(1).to({y:892.1739},0).wait(1).to({y:845.2174},0).wait(1).to({y:798.2609},0).wait(1).to({y:751.3044},0).wait(1).to({y:704.3478},0).wait(1).to({y:657.3913},0).wait(1).to({y:610.4348},0).wait(1).to({y:563.4783},0).wait(1).to({y:516.5217},0).wait(1).to({y:469.5652},0).wait(1).to({y:422.6087},0).wait(1).to({y:375.6522},0).wait(1).to({y:328.6957},0).wait(1).to({y:281.7391},0).wait(1).to({y:234.7826},0).wait(1).to({y:187.8261},0).wait(1).to({y:140.8696},0).wait(1).to({y:93.913},0).wait(1).to({y:46.9565},0).wait(1).to({y:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,2160);


(lib.IMG4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.Symbol4("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({y:-45},0).wait(1).to({y:-90},0).wait(1).to({y:-135},0).wait(1).to({y:-180},0).wait(1).to({y:-225},0).wait(1).to({y:-270},0).wait(1).to({y:-315},0).wait(1).to({y:-360},0).wait(1).to({y:-405},0).wait(1).to({y:-450},0).wait(1).to({y:-495},0).wait(1).to({y:-540},0).wait(1).to({y:-585},0).wait(1).to({y:-630},0).wait(1).to({y:-675},0).wait(1).to({y:-720},0).wait(1).to({y:-765},0).wait(1).to({y:-810},0).wait(1).to({y:-855},0).wait(1).to({y:-900},0).wait(1).to({y:-945},0).wait(1).to({y:-990},0).wait(1).to({y:-1035},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1033.0435},0).wait(1).to({y:986.087},0).wait(1).to({y:939.1304},0).wait(1).to({y:892.1739},0).wait(1).to({y:845.2174},0).wait(1).to({y:798.2609},0).wait(1).to({y:751.3044},0).wait(1).to({y:704.3478},0).wait(1).to({y:657.3913},0).wait(1).to({y:610.4348},0).wait(1).to({y:563.4783},0).wait(1).to({y:516.5217},0).wait(1).to({y:469.5652},0).wait(1).to({y:422.6087},0).wait(1).to({y:375.6522},0).wait(1).to({y:328.6957},0).wait(1).to({y:281.7391},0).wait(1).to({y:234.7826},0).wait(1).to({y:187.8261},0).wait(1).to({y:140.8696},0).wait(1).to({y:93.913},0).wait(1).to({y:46.9565},0).wait(1).to({y:0},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-1575,1920,3195);


(lib.IMG03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({y:-45},0).wait(1).to({y:-90},0).wait(1).to({y:-135},0).wait(1).to({y:-180},0).wait(1).to({y:-225},0).wait(1).to({y:-270},0).wait(1).to({y:-315},0).wait(1).to({y:-360},0).wait(1).to({y:-405},0).wait(1).to({y:-450},0).wait(1).to({y:-495},0).wait(1).to({y:-540},0).wait(1).to({y:-585},0).wait(1).to({y:-630},0).wait(1).to({y:-675},0).wait(1).to({y:-720},0).wait(1).to({y:-765},0).wait(1).to({y:-810},0).wait(1).to({y:-855},0).wait(1).to({y:-900},0).wait(1).to({y:-945},0).wait(1).to({y:-990},0).wait(1).to({y:-1035},0).wait(1).to({y:-1080},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1033.0435},0).wait(1).to({y:986.087},0).wait(1).to({y:939.1304},0).wait(1).to({y:892.1739},0).wait(1).to({y:845.2174},0).wait(1).to({y:798.2609},0).wait(1).to({y:751.3044},0).wait(1).to({y:704.3478},0).wait(1).to({y:657.3913},0).wait(1).to({y:610.4348},0).wait(1).to({y:563.4783},0).wait(1).to({y:516.5217},0).wait(1).to({y:469.5652},0).wait(1).to({y:422.6087},0).wait(1).to({y:375.6522},0).wait(1).to({y:328.6957},0).wait(1).to({y:281.7391},0).wait(1).to({y:234.7826},0).wait(1).to({y:187.8261},0).wait(1).to({y:140.8696},0).wait(1).to({y:93.913},0).wait(1).to({y:46.9565},0).wait(1).to({y:0},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-1620,1920,3240);


(lib.IMG02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-1620,1920,3240);


(lib.IMG01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.img1b("synched",0);
	this.instance.setTransform(0,-1080);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(1).to({y:-1125},0).wait(1).to({y:-1170},0).wait(1).to({y:-1215},0).wait(1).to({y:-1260},0).wait(1).to({y:-1305},0).wait(1).to({y:-1350},0).wait(1).to({y:-1395},0).wait(1).to({y:-1440},0).wait(1).to({y:-1485},0).wait(1).to({y:-1530},0).wait(1).to({y:-1575},0).wait(1).to({y:-1620},0).wait(1).to({y:-1665},0).wait(1).to({y:-1710},0).wait(1).to({y:-1755},0).wait(1).to({y:-1800},0).wait(1).to({y:-1845},0).wait(1).to({y:-1890},0).wait(1).to({y:-1935},0).wait(1).to({y:-1980},0).wait(1).to({y:-2025},0).wait(1).to({y:-2070},0).wait(1).to({y:-2115},0).wait(1).to({y:-2160},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.img1b("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-45},0).wait(1).to({y:-90},0).wait(1).to({y:-135},0).wait(1).to({y:-180},0).wait(1).to({y:-225},0).wait(1).to({y:-270},0).wait(1).to({y:-315},0).wait(1).to({y:-360},0).wait(1).to({y:-405},0).wait(1).to({y:-450},0).wait(1).to({y:-495},0).wait(1).to({y:-540},0).wait(1).to({y:-585},0).wait(1).to({y:-630},0).wait(1).to({y:-675},0).wait(1).to({y:-720},0).wait(1).to({y:-765},0).wait(1).to({y:-810},0).wait(1).to({y:-855},0).wait(1).to({y:-900},0).wait(1).to({y:-945},0).wait(1).to({y:-990},0).wait(1).to({y:-1035},0).wait(1).to({y:-1080},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-2700,1920,3240);


// stage content:
(lib.ConsumerismAniamteCC02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_2.on('click', function () {
			/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
			_this.gotoAndPlay(50);
		});
	}
	this.frame_48 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
	}
	this.frame_73 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(75);
		});
	}
	this.frame_98 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(100);
		});
	}
	this.frame_122 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(124);
		});
	}
	this.frame_146 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(148);
		});
	}
	this.frame_170 = function() {
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(172);
		});
	}
	this.frame_248 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(25).call(this.frame_73).wait(25).call(this.frame_98).wait(24).call(this.frame_122).wait(24).call(this.frame_146).wait(24).call(this.frame_170).wait(78).call(this.frame_248).wait(1));

	// Actions
	this.movieClip_2 = new lib.Symbol6();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(969.4,542.8);

	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-41.55,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.movieClip_2}]}).to({state:[{t:this.instance},{t:this.movieClip_2}]},48).to({state:[{t:this.instance},{t:this.movieClip_2}]},25).to({state:[{t:this.instance},{t:this.movieClip_2}]},25).to({state:[{t:this.instance},{t:this.movieClip_2}]},24).to({state:[{t:this.instance},{t:this.movieClip_2}]},24).to({state:[{t:this.instance},{t:this.movieClip_2}]},24).to({state:[{t:this.instance},{t:this.movieClip_2}]},78).wait(1));

	// Basket
	this.instance_1 = new lib.basketGSymbol("synched",0);
	this.instance_1.setTransform(960,650,1.0004,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.0074,scaleY:1.007,x:959.9976,y:650.0004},0).wait(1).to({scaleX:1.0144,scaleY:1.0139,x:959.9951,y:650.0008},0).wait(1).to({scaleX:1.0213,scaleY:1.0209,x:959.9927,y:650.0011},0).wait(1).to({scaleX:1.0283,scaleY:1.0279,x:959.9903,y:650.0015},0).wait(1).to({scaleX:1.0353,scaleY:1.0348,x:959.9878,y:650.0019},0).wait(1).to({scaleX:1.0422,scaleY:1.0418,x:959.9854,y:650.0023},0).wait(1).to({scaleX:1.0492,scaleY:1.0487,x:959.983,y:650.0026},0).wait(1).to({scaleX:1.0562,scaleY:1.0557,x:959.9805,y:650.003},0).wait(1).to({scaleX:1.0632,scaleY:1.0627,x:959.9781,y:650.0034},0).wait(1).to({scaleX:1.0701,scaleY:1.0696,x:959.9757,y:650.0038},0).wait(1).to({scaleX:1.0771,scaleY:1.0766,x:959.9733,y:650.0042},0).wait(1).to({scaleX:1.0841,scaleY:1.0836,x:959.9708,y:650.0045},0).wait(1).to({scaleX:1.0911,scaleY:1.0905,x:959.9684,y:650.0049},0).wait(1).to({scaleX:1.098,scaleY:1.0975,x:959.966,y:650.0053},0).wait(1).to({scaleX:1.105,scaleY:1.1044,x:959.9635,y:650.0057},0).wait(1).to({scaleX:1.112,scaleY:1.1114,x:959.9611,y:650.006},0).wait(1).to({scaleX:1.1189,scaleY:1.1184,x:959.9587,y:650.0064},0).wait(1).to({scaleX:1.1259,scaleY:1.1253,x:959.9562,y:650.0068},0).wait(1).to({scaleX:1.1329,scaleY:1.1323,x:959.9538,y:650.0072},0).wait(1).to({scaleX:1.1399,scaleY:1.1393,x:959.9514,y:650.0076},0).wait(1).to({scaleX:1.1468,scaleY:1.1462,x:959.9489,y:650.0079},0).wait(1).to({scaleX:1.1538,scaleY:1.1532,x:959.9465,y:650.0083},0).wait(1).to({scaleX:1.1608,scaleY:1.1601,x:959.9441,y:650.0087},0).wait(1).to({scaleX:1.1678,scaleY:1.1671,x:959.9416,y:650.0091},0).wait(1).to({scaleX:1.1608,scaleY:1.1602,x:959.942,y:650.0094},0).wait(1).to({scaleX:1.1539,scaleY:1.1532,x:959.9423,y:650.0098},0).wait(1).to({scaleX:1.1469,scaleY:1.1462,x:959.9427,y:650.0102},0).wait(1).to({scaleX:1.1399,scaleY:1.1393,x:959.943,y:650.0106},0).wait(1).to({scaleX:1.133,scaleY:1.1323,x:959.9434,y:650.0109},0).wait(1).to({scaleX:1.126,scaleY:1.1254,x:959.9437,y:650.0113},0).wait(1).to({scaleX:1.1191,scaleY:1.1184,x:959.9441,y:650.0117},0).wait(1).to({scaleX:1.1121,scaleY:1.1115,x:959.9444,y:650.0121},0).wait(1).to({scaleX:1.1052,scaleY:1.1045,x:959.9448,y:650.0124},0).wait(1).to({scaleX:1.0982,scaleY:1.0976,x:959.9451,y:650.0128},0).wait(1).to({scaleX:1.0913,scaleY:1.0906,x:959.9455,y:650.0132},0).wait(1).to({scaleX:1.0843,scaleY:1.0837,x:959.9458,y:650.0136},0).wait(1).to({scaleX:1.0774,scaleY:1.0767,x:959.9462,y:650.014},0).wait(1).to({scaleX:1.0704,scaleY:1.0697,x:959.9465,y:650.0143},0).wait(1).to({scaleX:1.0635,scaleY:1.0628,x:959.9469,y:650.0147},0).wait(1).to({scaleX:1.0565,scaleY:1.0558,x:959.9472,y:650.0151},0).wait(1).to({scaleX:1.0495,scaleY:1.0489,x:959.9475,y:650.0155},0).wait(1).to({scaleX:1.0426,scaleY:1.0419,x:959.9479,y:650.0159},0).wait(1).to({scaleX:1.0356,scaleY:1.035,x:959.9482,y:650.0162},0).wait(1).to({scaleX:1.0287,scaleY:1.028,x:959.9486,y:650.0166},0).wait(1).to({scaleX:1.0217,scaleY:1.0211,x:959.9489,y:650.017},0).wait(1).to({scaleX:1.0148,scaleY:1.0141,x:959.9493,y:650.0174},0).wait(1).to({scaleX:1.0078,scaleY:1.0072,x:959.9496,y:650.0177},0).wait(1).to({scaleX:1.0009,scaleY:1.0002,x:959.95,y:650.0181},0).wait(1).to({y:650.0185},0).wait(1).to({y:604.5073},0).wait(1).to({y:558.9961},0).wait(1).to({y:513.4849},0).wait(1).to({y:467.9737},0).wait(1).to({scaleY:1.0001,y:422.4626},0).wait(1).to({scaleX:1.0008,y:376.9514},0).wait(1).to({y:331.4402},0).wait(1).to({y:285.929},0).wait(1).to({y:240.4178},0).wait(1).to({y:194.9066},0).wait(1).to({y:149.3954},0).wait(1).to({y:103.8843},0).wait(1).to({y:58.3731},0).wait(1).to({y:12.8619},0).wait(1).to({y:-32.6493},0).wait(1).to({y:-78.1605},0).wait(1).to({scaleY:1,y:-123.6717},0).wait(1).to({y:-169.1829},0).wait(1).to({y:-214.6941},0).wait(1).to({y:-260.2052},0).wait(1).to({y:-305.7164},0).wait(1).to({y:-351.2276},0).wait(1).to({y:-396.7388},0).wait(1).to({y:-442.25},0).to({_off:true},1).wait(175));

	// OUTRO
	this.instance_2 = new lib.OUTRO("synched",0);
	this.instance_2.setTransform(961.4,542.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).wait(1).to({alpha:0.0549},0).wait(1).to({alpha:0.1074},0).wait(1).to({alpha:0.1599},0).wait(1).to({alpha:0.2124},0).wait(1).to({alpha:0.2649},0).wait(1).to({alpha:0.3174},0).wait(1).to({alpha:0.3699},0).wait(1).to({alpha:0.4224},0).wait(1).to({alpha:0.4749},0).wait(1).to({alpha:0.5275},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.6325},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.7375},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.8425},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.9475},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// TEXT
	this.instance_3 = new lib.CachedBmp_24();
	this.instance_3.setTransform(695.05,461.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_25();
	this.instance_4.setTransform(696.05,462.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},49).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).wait(1).to({x:696.0083,y:417.7583},0).wait(1).to({x:695.9667,y:372.7167},0).wait(1).to({x:695.925,y:327.675},0).wait(1).to({x:695.8833,y:282.6333},0).wait(1).to({x:695.8417,y:237.5917},0).wait(1).to({x:695.8,y:192.55},0).wait(1).to({x:695.7583,y:147.5083},0).wait(1).to({x:695.7167,y:102.4667},0).wait(1).to({x:695.675,y:57.425},0).wait(1).to({x:695.6333,y:12.3833},0).wait(1).to({x:695.5917,y:-32.6583},0).wait(1).to({x:695.55,y:-77.7},0).wait(1).to({x:695.5083,y:-122.7417},0).wait(1).to({x:695.4667,y:-167.7833},0).wait(1).to({x:695.425,y:-212.825},0).wait(1).to({x:695.3833,y:-257.8667},0).wait(1).to({x:695.3417,y:-302.9083},0).wait(1).to({x:695.3,y:-347.95},0).wait(1).to({x:695.2583,y:-392.9917},0).wait(1).to({x:695.2167,y:-438.0333},0).wait(1).to({x:695.175,y:-483.075},0).wait(1).to({x:695.1333,y:-528.1167},0).wait(1).to({x:695.0917,y:-573.1583},0).wait(1).to({x:695.05,y:-618.2},0).to({_off:true},1).wait(175));

	// Layer_9
	this.instance_5 = new lib.FADEUPWHITE("synched",0);
	this.instance_5.setTransform(975.45,546.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({_off:false},0).wait(1).to({regY:-0.1,y:546.7,alpha:0.0345},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.1034},0).wait(1).to({alpha:0.1379},0).wait(1).to({alpha:0.1724},0).wait(1).to({alpha:0.2069},0).wait(1).to({alpha:0.2414},0).wait(1).to({alpha:0.2759},0).wait(1).to({alpha:0.3103},0).wait(1).to({alpha:0.3448},0).wait(1).to({alpha:0.3793},0).wait(1).to({alpha:0.4138},0).wait(1).to({alpha:0.4483},0).wait(1).to({alpha:0.4828},0).wait(1).to({alpha:0.5172},0).wait(1).to({alpha:0.5517},0).wait(1).to({alpha:0.5862},0).wait(1).to({alpha:0.6207},0).wait(1).to({alpha:0.6552},0).wait(1).to({alpha:0.6897},0).wait(1).to({alpha:0.7241},0).wait(1).to({alpha:0.7586},0).wait(1).to({alpha:0.7931},0).wait(1).to({alpha:0.8276},0).wait(1).to({alpha:0.8621},0).wait(1).to({alpha:0.8966},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.9655},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_8
	this.instance_6 = new lib.CachedBmp_26();
	this.instance_6.setTransform(-77.6,-33.55,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(170).to({_off:false},0).wait(79));

	// IMG5
	this.instance_7 = new lib.IMG5("synched",0);
	this.instance_7.setTransform(960,540);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).to({_off:true},54).wait(49));

	// IMG4
	this.instance_8 = new lib.IMG4("synched",0);
	this.instance_8.setTransform(960,540);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).to({_off:true},48).wait(79));

	// IMG3
	this.instance_9 = new lib.IMG03("synched",0);
	this.instance_9.setTransform(960,540);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(98).to({_off:false},0).to({_off:true},51).wait(100));

	// IMG2
	this.instance_10 = new lib.IMG02("synched",0);
	this.instance_10.setTransform(960,540);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({_off:false},0).to({_off:true},50).wait(125));

	// IMG1
	this.instance_11 = new lib.IMG01("synched",0);
	this.instance_11.setTransform(960,1620);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({_off:true},50).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(882.4,-540,1146,2700);
// library properties:
lib.properties = {
	id: 'D21664F89AA4364793A8D6672F7E1C0D',
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_29.png", id:"CachedBmp_29"},
		{src:"images/CachedBmp_28.png", id:"CachedBmp_28"},
		{src:"images/CachedBmp_26.png", id:"CachedBmp_26"},
		{src:"images/CachedBmp_23.png", id:"CachedBmp_23"},
		{src:"images/Consumerism AniamteCC_atlas_.png", id:"Consumerism AniamteCC_atlas_"},
		{src:"images/Consumerism AniamteCC_atlas_2.png", id:"Consumerism AniamteCC_atlas_2"},
		{src:"images/Consumerism AniamteCC_atlas_3.png", id:"Consumerism AniamteCC_atlas_3"},
		{src:"images/Consumerism AniamteCC_atlas_4.png", id:"Consumerism AniamteCC_atlas_4"},
		{src:"images/Consumerism AniamteCC_atlas_5.png", id:"Consumerism AniamteCC_atlas_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['D21664F89AA4364793A8D6672F7E1C0D'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;