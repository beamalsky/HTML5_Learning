(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
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


(lib.lRestart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("AgOAzIAAhMIgmAAIAAgZIBoAAIAAAZIgkAAIAABMg");
	this.shape.setTransform(82.6,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AAQAzIgIgSQgEgKgDgFQgDgEgDgCIgJgBIgDAAIAAAoIgfAAIAAhlIAzAAQANAAAIAFQAIAFADAIQAEAHAAAHQAAAHgDAGQgDAFgDABIgIAFQAFADADAEQAEAEAFAMIAKAWgAgRgGIAGAAQALAAAEgCQAEgDAAgHQAAgHgFgCQgEgDgKAAIgGAAg");
	this.shape_1.setTransform(71.8,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCCC").s().p("AAfAzIgJgVIgrAAIgIAVIggAAIAthlIAhAAIAtBlgAAPANIgPglIgOAlIAdAAg");
	this.shape_2.setTransform(59.4,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCCC").s().p("AgOAzIAAhMIglAAIAAgZIBoAAIAAAZIgmAAIAABMg");
	this.shape_3.setTransform(47.5,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AgIA0IgMgDQgHgBgJgEIAAgZIAQAIQAHADAJAAQAGAAADgCIACgFQAAgEgEgDQgDgDgIgDIgOgIQgGgDgEgGQgFgGAAgJQAAgIAFgHQAEgGAIgEQAIgEAMAAQAIAAAHACIAMADIAHADIAAAYIgPgIQgHgDgJAAQgFAAgCACQgDACAAADQAAADADADIAIAFIATAKQAGADAFAGQADAGAAAIQABAKgFAHQgFAHgJADQgIAEgLAAg");
	this.shape_4.setTransform(37.2,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCCC").s().p("AglAzIAAhlIBKAAIAAAVIgsAAIAAASIAqAAIAAAUIgqAAIAAAVIAtAAIAAAVg");
	this.shape_5.setTransform(28,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCCCC").s().p("AAQAzIgIgSQgEgKgDgFQgDgEgDgCIgJgBIgDAAIAAAoIgfAAIAAhlIAzAAQANAAAIAFQAIAFADAIQAEAHAAAHQAAAHgDAGQgDAFgDABIgIAFQAFADADAEQAEAEAFAMIAKAWgAgRgGIAGAAQALAAAEgCQAEgDAAgHQAAgHgFgCQgEgDgKAAIgGAAg");
	this.shape_6.setTransform(17.8,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF6699").ss(3,1,2).p("AnWifIOtAAQAdAAAAAeIAAEDQAAAegdAAIutAAQgdAAAAgeIAAkDQAAgeAdAAg");
	this.shape_7.setTransform(50,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AnWCgQgdAAAAgeIAAkDQAAgeAdAAIOtAAQAdAAAAAeIAAEDQAAAegdAAg");
	this.shape_8.setTransform(50,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0033").s().p("AgOAzIAAhMIglAAIAAgZIBnAAIAAAZIglAAIAABMg");
	this.shape_9.setTransform(82.7,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0033").s().p("AAQAzIgIgSQgEgKgDgFQgDgEgDgCIgJgBIgDAAIAAAoIgfAAIAAhlIAzAAQANAAAIAFQAIAFADAIQAEAHAAAHQAAAHgDAGQgDAFgDABIgIAFQAFADADAEQAEAEAFAMIAKAWgAgRgGIAGAAQALAAAEgCQAEgDAAgHQAAgHgFgCQgEgDgKAAIgGAAg");
	this.shape_10.setTransform(71.9,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0033").s().p("AAfAzIgJgVIgrAAIgIAVIggAAIAthlIAhAAIAtBlgAAPANIgPglIgOAlIAdAAg");
	this.shape_11.setTransform(59.5,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0033").s().p("AgOAzIAAhMIgmAAIAAgZIBpAAIAAAZIglAAIAABMg");
	this.shape_12.setTransform(47.6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0033").s().p("AgIA0IgMgDQgHgBgJgEIAAgZIAQAIQAHADAJAAQAGAAADgCIACgFQAAgEgEgDQgDgDgIgDIgOgIQgGgDgEgGQgFgGAAgJQAAgIAFgHQAEgGAIgEQAIgEAMAAQAIAAAHACIAMADIAGADIAAAYIgNgIQgIgDgJAAQgEAAgDACQgDACAAADQAAADADADIAIAFIATAKQAGADAFAGQAEAGAAAIQAAAKgFAHQgFAHgIADQgKAEgKAAg");
	this.shape_13.setTransform(37.3,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0033").s().p("AglAzIAAhlIBKAAIAAAVIgsAAIAAASIAqAAIAAAUIgqAAIAAAVIAtAAIAAAVg");
	this.shape_14.setTransform(28.1,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0033").s().p("AAQAzIgIgSQgEgKgDgFQgDgEgDgCIgJgBIgDAAIAAAoIgfAAIAAhlIAzAAQANAAAIAFQAIAFADAIQAEAHAAAHQAAAHgDAGQgDAFgDABIgIAFQAFADADAEQAEAEAFAMIAKAWgAgRgGIAGAAQALAAAEgCQAEgDAAgHQAAgHgFgCQgEgDgKAAIgGAAg");
	this.shape_15.setTransform(17.9,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAzIAAhMIglAAIAAgZIBnAAIAAAZIglAAIAABMg");
	this.shape_16.setTransform(82.7,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAzIgIgSQgEgKgDgFQgDgEgDgCIgJgBIgDAAIAAAoIgfAAIAAhlIAzAAQANAAAIAFQAIAFADAIQAEAHAAAHQAAAHgDAGQgDAFgDABIgIAFQAFADADAEQAEAEAFAMIAKAWgAgRgGIAGAAQALAAAEgCQAEgDAAgHQAAgHgFgCQgEgDgKAAIgGAAg");
	this.shape_17.setTransform(71.9,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAzIgJgVIgrAAIgIAVIggAAIAthlIAhAAIAtBlgAAPANIgPglIgOAlIAdAAg");
	this.shape_18.setTransform(59.5,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAzIAAhMIgmAAIAAgZIBpAAIAAAZIglAAIAABMg");
	this.shape_19.setTransform(47.6,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIA0IgMgDQgHgBgJgEIAAgZIAQAIQAHADAJAAQAGAAADgCIACgFQAAgEgEgDQgDgDgIgDIgOgIQgGgDgEgGQgFgGAAgJQAAgIAFgHQAEgGAIgEQAIgEAMAAQAIAAAHACIAMADIAGADIAAAYIgNgIQgIgDgJAAQgEAAgDACQgDACAAADQAAADADADIAIAFIATAKQAGADAFAGQAEAGAAAIQAAAKgFAHQgFAHgIADQgKAEgKAAg");
	this.shape_20.setTransform(37.3,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglAzIAAhlIBKAAIAAAVIgsAAIAAASIAqAAIAAAUIgqAAIAAAVIAtAAIAAAVg");
	this.shape_21.setTransform(28.1,16);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAzIgIgSQgEgKgDgFQgDgEgDgCIgJgBIgDAAIAAAoIgfAAIAAhlIAzAAQANAAAIAFQAIAFADAIQAEAHAAAHQAAAHgDAGQgDAFgDABIgIAFQAFADADAEQAEAEAFAMIAKAWgAgRgGIAGAAQALAAAEgCQAEgDAAgHQAAgHgFgCQgEgDgKAAIgGAAg");
	this.shape_22.setTransform(17.9,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,103,35);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.numberText = new cjs.Text("98", "bold 18px 'Arial Black'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 27;
	this.numberText.lineWidth = 48;
	this.numberText.parent = this;
	this.numberText.setTransform(26,14.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6699").ss(1,1,1).p("AkBkBIIDAAIAAIDIoDAAg");
	this.shape.setTransform(26.4,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AkAEBIAAoCIICAAIAAICg");
	this.shape_1.setTransform(26.4,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.numberText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberedBox, new cjs.Rectangle(-0.4,-1,53.5,53.5), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("A3cfQMAAAg+fMAu5AAAMAAAA+fg");
	this.shape.setTransform(150.1,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,300.3,400), null);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lRestart();
	this.instance.parent = this;
	this.instance.setTransform(100,238);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBQQgGgDgEgGQgDgGAAgHQAAgHADgFQAEgGAGgEQAFgDAGAAQAHAAAGADQAGAEADAGQADAFAAAHQAAALgHAHQgHAHgLAAQgFAAgGgDgAgEAbIgEgFIgHgTIgHgaQgCgOAAgJQAAgTAIgJQAIgIAIAAQAKAAAHAIQAIAJAAATQAAAJgCAOIgHAaIgGATIgEAEQgCACgEAAIgEgBg");
	this.shape.setTransform(203.4,148.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVA9IAAhAQAAgJgDgIQgDgHgLAAQgEAAgEACIgHAFIgFAGIgFAGIAABFIgqAAIAAh3IAqAAIAAASQAKgLAKgEQAJgFANAAQArAAAAA0IAABFg");
	this.shape_1.setTransform(192.3,150.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBSIAAh2IApAAIAAB2gAgIgwQgEgDgCgEQgDgEAAgFQAAgHAFgFQAGgFAGAAQAHAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgHAAQgEAAgEgCg");
	this.shape_2.setTransform(180.9,148.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqBSIgqheIgqBeIgdAAIhFijIAzAAIAiBZIAmhZIAiAAIAmBZIAkhZIAyAAIhHCjg");
	this.shape_3.setTransform(163,148.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag3AtQgIgQAAgTIAAhGIArAAIAABAQAAAKADAHQADAHALAAQAIAAAGgFQAFgFAGgIIAAhGIAqAAIAAB3IgqAAIAAgRQgJAJgKAFQgJAFgOAAQgbAAgIgQg");
	this.shape_4.setTransform(133.9,150.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA2QgQgIgIgOQgHgOAAgSQAAgMAEgMQAEgLAJgIQAJgJAMgEQANgFAQAAQARAAANAFQANAFAIAIQAJAIAEALQAEAMAAAMQAAASgHAOQgIAOgPAIQgQAIgWAAQgVAAgPgIgAgRgVQgGAIAAANQAAAOAGAIQAHAIAKAAQAMAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(118.7,150.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBRIAAhJIhBhYIAzAAIAlAzIAlgzIA0AAIhABXIAABKg");
	this.shape_6.setTransform(102,148.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCCCC").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_7.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOverView, new cjs.Rectangle(0,0,300,400), null);


// stage content:
(lib.countgamegraphics3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Square
	this.instance = new lib.NumberedBox();
	this.instance.parent = this;
	this.instance.setTransform(-75.9,39.9,1,1,0,0,0,27.7,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// EndScreen
	this.instance_1 = new lib.GameOverView();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,200,1,1,0,0,0,150,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,200,1,1,0,0,0,150.1,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.4,200,403.9,400);
// library properties:
lib.properties = {
	id: 'F45AF3C025BF4C23B0EEEF3C8EFC5632',
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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
an.compositions['F45AF3C025BF4C23B0EEEF3C8EFC5632'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;