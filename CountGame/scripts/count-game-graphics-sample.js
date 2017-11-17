(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6064").s().p("AgtA9IAAh2IAqAAIAAAUQAEgNAHgEQAHgFAJgBQAKAAAMAHIgOAhQgIgEgFAAQgJAAgEAHQgGALAAAaIAAApg");
	this.shape.setTransform(136.1,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6064").s().p("AgkA3QgOgGgJgPQgIgPgBgTQAAgaASgRQATgSAfAAQAXAAAPAIQAPAIAIAOQAIAPAAAWIAAAFIhaAAQABALAFAFQAGAIAJAAQAHAAAGgDQAEgCAEgGIAtAEQgKASgPAIQgPAIgaAAQgXAAgNgHgAAWgJQgBgNgGgGQgGgGgJAAQgJAAgHAJQgDAFgCALIArAAIAAAAg");
	this.shape_1.setTransform(122.4,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6064").s().p("AgTA7Igyh1IAwAAIAVBKIAYhKIAuAAIgzB1g");
	this.shape_2.setTransform(107.8,35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6064").s().p("AgrBMQgSgJgLgTQgMgUAAgcQAAgnAXgWQAWgXAnAAQAoAAAXAWQAWAWAAAoQAAAbgKATQgKASgSAKQgSALgcAAQgaAAgSgJgAgYgiQgJALAAAXQAAAZAJALQAKAKAOAAQAQAAAJgKQAJgLAAgZQAAgYgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_3.setTransform(91.1,33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6064").s().p("AgLBPQgIgEgEgKQgEgIAAgVIAAgoIgQAAIAAghIAQAAIAAgWIAsgXIAAAtIAZAAIAAAhIgZAAIAAApQAAAHACADQACAEAGAAQAFAAAJgDIADAgQgRADgPAAQgPAAgIgEg");
	this.shape_4.setTransform(68.8,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6064").s().p("AgtA9IAAh2IAqAAIAAAUQAEgNAHgEQAHgFAJgBQAKAAAMAHIgOAhQgIgEgFAAQgJAAgEAHQgGALAAAaIAAApg");
	this.shape_5.setTransform(59.6,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D6064").s().p("Ag4A0QgLgKAAgOQAAgOAIgJQAIgGAVgFIAggHIAQgFQAAgJgEgDQgDgEgJAAQgJAAgGAEQgEADgDAIIgrgFQACgLAFgHQAEgHAJgEQAGgEALgCQALgCANAAQATAAAMADQANACAIAHQAGAFADAKQAEAJAAAIIAAAzIABANIAEAMIgrAAIgDgHIgCgHQgJAIgIAEQgLAFgQAAQgVAAgLgKgAAAAJQgOADgDAEQgEAEAAAEQAAAGAEADQADAEAIAAQAGAAAGgEQAGgEADgFQADgGAAgIIAAgHg");
	this.shape_6.setTransform(45.9,35.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D6064").s().p("AgLBPQgIgEgEgKQgEgIAAgVIAAgoIgQAAIAAghIAQAAIAAgWIAsgXIAAAtIAZAAIAAAhIgZAAIAAApQAAAHACADQACAEAGAAQAFAAAJgDIADAgQgRADgPAAQgPAAgIgEg");
	this.shape_7.setTransform(33.1,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D6064").s().p("Ag3BEQgQgQgCgZIAwgDQACAMAFAGQAHAKANAAQALAAAGgFQAGgFAAgHQAAgGgGgFQgGgFgSgFQghgHgPgLQgOgMAAgUQAAgMAHgLQAIgMAOgGQAPgHAYAAQAfAAARAMQARAMADAZIgwADQgCgLgGgFQgGgFgJAAQgJAAgFAEQgEADAAAGQAAAEAEADQADADANADQAgAHAPAIQAOAHAHAJQAGALAAANQAAAQgJANQgIAOgQAHQgQAHgYAAQgoAAgQgRg");
	this.shape_8.setTransform(19.7,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Overlay
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(114,123,125,0.31)"],[0,0.137,0.435,0.651],1.7,-30.7,1.8,32.2).s().p("AraE6QgTAAAAgSIAApPQAAgSATAAIW1AAQASAAABASIAAJPQgBASgSAAg");
	this.shape_9.setTransform(75,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4));

	// Background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E5F6FA").ss(3,0,1).p("Arak5IW1AAQATAAAAASIAAJPQAAASgTAAI21AAQgTAAAAgSIAApPQAAgSATAAg");
	this.shape_10.setTransform(75,31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BDC5CD").s().p("AraE6QgSAAAAgSIAApPQAAgSASAAIW1AAQASAAAAASIAAJPQAAASgSAAg");
	this.shape_11.setTransform(75,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CED7E0").s().p("AraE6QgSAAAAgSIAApPQAAgSASAAIW1AAQASAAAAASIAAJPQAAASgSAAg");
	this.shape_12.setTransform(75,31.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C8287").s().p("AraE6QgSAAAAgSIAApPQAAgSASAAIW1AAQASAAAAASIAAJPQAAASgSAAg");
	this.shape_13.setTransform(75,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_12},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_10}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,153,66);


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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,52,51);


(lib.Background = function(mode,startPosition,loop) {
this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("A3cfQMAAAg+fMAu5AAAMAAAA+fg");
	this.shape.setTransform(150.1,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);

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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);


// stage content:
(lib.Countgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Box
	this.instance = new lib.NumberedBox();
	this.instance.setTransform(229,174.9,1,1,0,0,0,25,25);

	this.instance_1 = new lib.NumberedBox();
	this.instance_1.setTransform(177,163.9,1,1,0,0,0,25,25);

	this.instance_2 = new lib.NumberedBox();
	this.instance_2.setTransform(130.2,146.8,1,1,0,0,0,25,25);

	this.instance_3 = new lib.NumberedBox();
	this.instance_3.setTransform(164.2,129.2,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Background
	this.instance_4 = new lib.Background();
	this.instance_4.setTransform(145,195,1,1,0,0,0,145,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,200,300,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;