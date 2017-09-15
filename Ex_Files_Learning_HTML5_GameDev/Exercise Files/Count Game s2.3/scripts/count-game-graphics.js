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

	// Text
	this.numberText = new cjs.Text("98", "30px 'Arial'", "#343638");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 36;
	this.numberText.lineWidth = 48;
	this.numberText.setTransform(22.8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(1));

	// Texture
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BBC9CC").ss(1,0,1).p("ADmgYIAAAxAC4gYIAAAxADOgYIAAAxACggYIAAAxACJgYIAAAxAAtgYIAAAxABEgYIAAAxABzgYIAAAxABbgYIAAAxAAAgYIAAAxAAWgYIAAAxAgWgYIAAAxAgtgYIAAAxAiJgYIAAAxAhygYIAAAxAhEgYIAAAxAhbgYIAAAxAi3gYIAAAxAiggYIAAAxAjOgYIAAAxAjlgYIAAAx");
	this.shape.setTransform(25,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Gradient Overlay
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","rgba(114,123,125,0.969)"],[0.224,1],-3.7,-10.3,0,-2.9,-10.3,53.1).s().p("AjmD6QgTgBAAgSIAAnNQAAgTATAAIHNAAQASAAABATIAAHNQgBASgSABg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5E4E7").s().p("AjmD6QgTgBAAgSIAAnNQAAgTATAAIHNAAQASAAABATIAAHNQgBASgSABg");
	this.shape_2.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,52,51);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4E7").s().p("AVUePQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASMePQgPgOAAgWQAAgUAPgPQAPgPAVABQAVgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPEePQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL8ePQgPgOABgWQgBgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI0ePQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFsePQgOgOAAgWQAAgUAOgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACkePQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgiePQgPgOAAgWQAAgUAPgPQAPgPATABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjqePQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAOAPAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmyePQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp6ePQgPgOAAgWQAAgUAPgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtCePQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwKePQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzSePQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2aePQgOgOAAgWQAAgUAOgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVUbHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgASMbHQgPgPAAgVQAAgUAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgVAAQgVAAgPgPgAPEbHQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAL8bHQgPgPABgVQgBgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAI0bHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAFsbHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPgACkbHQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAgibHQgPgPAAgVQAAgUAPgPQAPgOATAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgTAAgPgPgAjqbHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAOAPAAAUQAAAVgOAPQgOAPgWAAQgUAAgPgPgAmybHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAp6bHQgPgPAAgVQAAgUAPgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAtCbHQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAwKbHQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAzSbHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgA2abHQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPgAVUX/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAWAAAOAQQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMX/QgPgPAAgUQAAgVAPgOQAPgQAVAAQAVAAAOAQQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEX/QgPgPAAgUQAAgVAPgOQAPgQAVAAQAUAAAPAQQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8X/QgPgPABgUQgBgVAPgOQAPgQAVAAQAUAAAPAQQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0X/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAWAAAOAQQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFsX/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAVAAAPAQQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACkX/QgPgPAAgUQAAgVAPgOQAPgQAVAAQAUAAAPAQQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgiX/QgPgPAAgUQAAgVAPgOQAPgQATAAQAUAAAPAQQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqX/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAWAAAOAQQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmyX/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAWAAAOAQQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6X/QgPgPAAgUQAAgVAPgOQAPgQAUAAQAWAAAOAQQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCX/QgPgPAAgUQAAgVAPgOQAPgQAVAAQAUAAAPAQQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKX/QgPgPAAgUQAAgVAPgOQAPgQAVAAQAUAAAPAQQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSX/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAWAAAOAQQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2aX/QgOgPAAgUQAAgVAOgOQAPgQAUAAQAVAAAPAQQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVUU3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMU3QgPgPAAgUQAAgVAPgOQAPgPAVgBQAVABAOAPQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEU3QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8U3QgPgPABgUQgBgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0U3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFsU3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACkU3QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgiU3QgPgPAAgUQAAgVAPgOQAPgPATgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqU3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmyU3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6U3QgPgPAAgUQAAgVAPgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCU3QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKU3QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSU3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2aU3QgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVURvQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASMRvQgPgOAAgWQAAgUAPgOQAPgQAVABQAVgBAOAQQAPAOAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPERvQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL8RvQgPgOABgWQgBgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI0RvQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFsRvQgOgOAAgWQAAgUAOgOQAPgQAUABQAVgBAPAQQAPAOAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACkRvQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgiRvQgPgOAAgWQAAgUAPgOQAPgQATABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjqRvQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAOAOAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmyRvQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp6RvQgPgOAAgWQAAgUAPgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtCRvQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwKRvQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzSRvQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2aRvQgOgOAAgWQAAgUAOgOQAPgQAUABQAVgBAPAQQAPAOAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVUOnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASMOnQgPgOAAgWQAAgUAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPEOnQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL8OnQgPgOABgWQgBgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI0OnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFsOnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACkOnQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgiOnQgPgOAAgWQAAgUAPgPQAPgOATAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjqOnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAOAPAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmyOnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp6OnQgPgOAAgWQAAgUAPgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtCOnQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwKOnQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzSOnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2aOnQgOgOAAgWQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVULfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAVgPAOQgOAPgWAAQgUAAgPgPgASMLfQgPgOAAgVQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVQAAAVgPAOQgOAPgVAAQgVAAgPgPgAPELfQgPgOAAgVQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAVgOAOQgPAPgUAAQgVAAgPgPgAL8LfQgPgOABgVQgBgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAVgOAOQgPAPgUAAQgVAAgPgPgAI0LfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAVgPAOQgOAPgWAAQgUAAgPgPgAFsLfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAVgPAOQgPAPgVAAQgUAAgPgPgACkLfQgPgOAAgVQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAVgOAOQgPAPgUAAQgVAAgPgPgAgiLfQgPgOAAgVQAAgVAPgPQAPgPATAAQAUAAAPAPQAOAPAAAVQAAAVgOAOQgPAPgUAAQgTAAgPgPgAjqLfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAWAAAOAPQAOAPAAAVQAAAVgOAOQgOAPgWAAQgUAAgPgPgAmyLfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAVgPAOQgOAPgWAAQgUAAgPgPgAp6LfQgPgOAAgVQAAgVAPgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAVgPAOQgOAPgWAAQgUAAgPgPgAtCLfQgPgOAAgVQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAVgOAOQgPAPgUAAQgVAAgPgPgAwKLfQgPgOAAgVQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAVgOAOQgPAPgUAAQgVAAgPgPgAzSLfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAVgPAOQgOAPgWAAQgUAAgPgPgA2aLfQgOgOAAgVQAAgVAOgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAVgPAOQgPAPgVAAQgUAAgPgPgAVUIXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMIXQgPgPAAgUQAAgVAPgOQAPgPAVgBQAVABAOAPQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEIXQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8IXQgPgPABgUQgBgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0IXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFsIXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACkIXQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgiIXQgPgPAAgUQAAgVAPgOQAPgPATgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqIXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmyIXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6IXQgPgPAAgUQAAgVAPgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCIXQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKIXQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSIXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2aIXQgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVUFPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAWAAAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMFPQgPgPAAgUQAAgVAPgOQAPgPAVAAQAVAAAOAPQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEFPQgPgPAAgUQAAgVAPgOQAPgPAVAAQAUAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8FPQgPgPABgUQgBgVAPgOQAPgPAVAAQAUAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0FPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAWAAAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFsFPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAVAAAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACkFPQgPgPAAgUQAAgVAPgOQAPgPAVAAQAUAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgiFPQgPgPAAgUQAAgVAPgOQAPgPATAAQAUAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqFPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAWAAAOAPQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmyFPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAWAAAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6FPQgPgPAAgUQAAgVAPgOQAPgPAUAAQAWAAAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCFPQgPgPAAgUQAAgVAPgOQAPgPAVAAQAUAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKFPQgPgPAAgUQAAgVAPgOQAPgPAVAAQAUAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSFPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAWAAAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2aFPQgOgPAAgUQAAgVAOgOQAPgPAUAAQAVAAAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVUCHQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASMCHQgPgOAAgWQAAgUAPgPQAPgPAVABQAVgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPECHQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL8CHQgPgOABgWQgBgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI0CHQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFsCHQgOgOAAgWQAAgUAOgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACkCHQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgiCHQgPgOAAgWQAAgUAPgPQAPgPATABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjqCHQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAOAPAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmyCHQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp6CHQgPgOAAgWQAAgUAPgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtCCHQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwKCHQgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzSCHQgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2aCHQgOgOAAgWQAAgUAOgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVUg/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgASMg/QgPgPAAgVQAAgUAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgVAAQgVAAgPgPgAPEg/QgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAL8g/QgPgPABgVQgBgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAI0g/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAFsg/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPgACkg/QgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAgig/QgPgPAAgVQAAgUAPgPQAPgOATAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgTAAgPgPgAjqg/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAOAPAAAUQAAAVgOAPQgOAPgWAAQgUAAgPgPgAmyg/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAp6g/QgPgPAAgVQAAgUAPgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAtCg/QgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAwKg/QgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAzSg/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgA2ag/QgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPgAVUkHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMkHQgPgPAAgUQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEkHQgPgPAAgUQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8kHQgPgPABgUQgBgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0kHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFskHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACkkHQgPgPAAgUQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgikHQgPgPAAgUQAAgVAPgPQAPgPATAAQAUAAAPAPQAOAPAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqkHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAWAAAOAPQAOAPAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmykHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6kHQgPgPAAgUQAAgVAPgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCkHQgPgPAAgUQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKkHQgPgPAAgUQAAgVAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSkHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2akHQgOgPAAgUQAAgVAOgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVUnPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMnPQgPgPAAgUQAAgVAPgOQAPgPAVgBQAVABAOAPQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEnPQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8nPQgPgPABgUQgBgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0nPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFsnPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACknPQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAginPQgPgPAAgUQAAgVAPgOQAPgPATgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqnPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmynPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6nPQgPgPAAgUQAAgVAPgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCnPQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKnPQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSnPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2anPQgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVUqXQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAOgWAAQgUAAgPgOgASMqXQgPgOAAgWQAAgUAPgOQAPgQAVABQAVgBAOAQQAPAOAAAUQAAAWgPAOQgOAOgVAAQgVAAgPgOgAPEqXQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAOgUAAQgVAAgPgOgAL8qXQgPgOABgWQgBgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAOgUAAQgVAAgPgOgAI0qXQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAOgWAAQgUAAgPgOgAFsqXQgOgOAAgWQAAgUAOgOQAPgQAUABQAVgBAPAQQAPAOAAAUQAAAWgPAOQgPAOgVAAQgUAAgPgOgACkqXQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAOgUAAQgVAAgPgOgAgiqXQgPgOAAgWQAAgUAPgOQAPgQATABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAOgUAAQgTAAgPgOgAjqqXQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAOAOAAAUQAAAWgOAOQgOAOgWAAQgUAAgPgOgAmyqXQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAOgWAAQgUAAgPgOgAp6qXQgPgOAAgWQAAgUAPgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAOgWAAQgUAAgPgOgAtCqXQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAOgUAAQgVAAgPgOgAwKqXQgPgOAAgWQAAgUAPgOQAPgQAVABQAUgBAPAQQAOAOAAAUQAAAWgOAOQgPAOgUAAQgVAAgPgOgAzSqXQgOgOAAgWQAAgUAOgOQAPgQAUABQAWgBAOAQQAPAOAAAUQAAAWgPAOQgOAOgWAAQgUAAgPgOgA2aqXQgOgOAAgWQAAgUAOgOQAPgQAUABQAVgBAPAQQAPAOAAAUQAAAWgPAOQgPAOgVAAQgUAAgPgOgAVUtfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASMtfQgPgOAAgWQAAgUAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPEtfQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL8tfQgPgOABgWQgBgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI0tfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFstfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACktfQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgitfQgPgOAAgWQAAgUAPgPQAPgOATAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjqtfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAOAPAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmytfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp6tfQgPgOAAgWQAAgUAPgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtCtfQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwKtfQgPgOAAgWQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzStfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2atfQgOgOAAgWQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVUwnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASMwnQgPgOAAgWQAAgUAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPEwnQgPgOAAgWQAAgUAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL8wnQgPgOABgWQgBgUAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI0wnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFswnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACkwnQgPgOAAgWQAAgUAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgiwnQgPgOAAgWQAAgUAPgPQAPgPATAAQAUAAAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjqwnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAWAAAOAPQAOAPAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmywnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp6wnQgPgOAAgWQAAgUAPgPQAPgPAUAAQAWAAAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtCwnQgPgOAAgWQAAgUAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwKwnQgPgOAAgWQAAgUAPgPQAPgPAVAAQAUAAAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzSwnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAWAAAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2awnQgOgOAAgWQAAgUAOgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVUzvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASMzvQgPgPAAgUQAAgVAPgOQAPgPAVgBQAVABAOAPQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPEzvQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL8zvQgPgPABgUQgBgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI0zvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFszvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACkzvQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgizvQgPgPAAgUQAAgVAPgOQAPgPATgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjqzvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmyzvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp6zvQgPgPAAgUQAAgVAPgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtCzvQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwKzvQgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzSzvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2azvQgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVU23QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgASM23QgPgPAAgUQAAgVAPgOQAPgPAVgBQAVABAOAPQAPAOAAAVQAAAUgPAPQgOAOgVAAQgVAAgPgOgAPE23QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAL823QgPgPABgUQgBgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAI023QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAFs23QgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgACk23QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAgi23QgPgPAAgUQAAgVAPgOQAPgPATgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgTAAgPgOgAjq23QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAOAOAAAVQAAAUgOAPQgOAOgWAAQgUAAgPgOgAmy23QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAp623QgPgPAAgUQAAgVAPgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgAtC23QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAwK23QgPgPAAgUQAAgVAPgOQAPgPAVgBQAUABAPAPQAOAOAAAVQAAAUgOAPQgPAOgUAAQgVAAgPgOgAzS23QgOgPAAgUQAAgVAOgOQAPgPAUgBQAWABAOAPQAPAOAAAVQAAAUgPAPQgOAOgWAAQgUAAgPgOgA2a23QgOgPAAgUQAAgVAOgOQAPgPAUgBQAVABAPAPQAPAOAAAVQAAAUgPAPQgPAOgVAAQgUAAgPgOgAVU5/QgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgASM5/QgPgOAAgWQAAgUAPgPQAPgPAVABQAVgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgVAAQgVAAgPgPgAPE5/QgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAL85/QgPgOABgWQgBgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAI05/QgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAFs5/QgOgOAAgWQAAgUAOgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgACk5/QgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAgi5/QgPgOAAgWQAAgUAPgPQAPgPATABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgTAAgPgPgAjq5/QgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAOAPAAAUQAAAWgOAOQgOAPgWAAQgUAAgPgPgAmy5/QgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAp65/QgPgOAAgWQAAgUAPgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgAtC5/QgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAwK5/QgPgOAAgWQAAgUAPgPQAPgPAVABQAUgBAPAPQAOAPAAAUQAAAWgOAOQgPAPgUAAQgVAAgPgPgAzS5/QgOgOAAgWQAAgUAOgPQAPgPAUABQAWgBAOAPQAPAPAAAUQAAAWgPAOQgOAPgWAAQgUAAgPgPgA2a5/QgOgOAAgWQAAgUAOgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAWgPAOQgPAPgVAAQgUAAgPgPgAVU9HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgASM9HQgPgPAAgVQAAgUAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgVAAQgVAAgPgPgAPE9HQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAL89HQgPgPABgVQgBgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAI09HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAFs9HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPgACk9HQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAgi9HQgPgPAAgVQAAgUAPgPQAPgOATAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgTAAgPgPgAjq9HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAOAPAAAUQAAAVgOAPQgOAPgWAAQgUAAgPgPgAmy9HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAp69HQgPgPAAgVQAAgUAPgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgAtC9HQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAwK9HQgPgPAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAPQgPAPgUAAQgVAAgPgPgAzS9HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAWAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgWAAQgUAAgPgPgA2a9HQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F3FF").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
	this.shape_1.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RestartButton();
	this.instance.setTransform(196.5,283.1,1,1,0,0,0,121.5,51);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.RestartButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6EFF8").s().p("AgcBrIAAg1IA6AAIAAA1gAgTAnIgLhgIAAgxIA+AAIAAAxIgNBgg");
	this.shape.setTransform(217.1,103.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6EFF8").s().p("AAWBPIAAhUQAAgOgGgGQgFgGgKgBQgJABgGAIQgHAIAAATIAABLIg8AAIAAiaIA4AAIAAAaQAMgQANgGQALgHASAAQAZAAAOAOQAOAQAAAeIAABhg");
	this.shape_1.setTransform(202.1,105.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6EFF8").s().p("Ag7A+QgdgYAAgmQAAgiAYgXQAYgXAoAAQAuAAAXAbQAUAWAAAfQAAAjgYAXQgYAXgpAAQgkAAgXgTgAgUgdQgIAKAAATQAAAVAIAKQAJAJALAAQANAAAIgJQAIgKAAgVQAAgTgIgKQgJgKgMAAQgLAAgJAKg");
	this.shape_2.setTransform(182.1,106.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6EFF8").s().p("AAlBrIgliFIgkCFIhBAAIgwjVIA/AAIAXB2IAhh2IA9AAIAhB2IAXh2IA/AAIgwDVg");
	this.shape_3.setTransform(157.1,103.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6EFF8").s().p("AhDBBQgOgQAAgeIAAhhIA8AAIAABTQAAAPAGAHQAFAFAKAAQAIAAAHgIQAHgIAAgTIAAhLIA8AAIAACZIg4AAIAAgZQgMAQgNAHQgLAGgSAAQgZAAgOgOg");
	this.shape_4.setTransform(122.1,106.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6EFF8").s().p("Ag7A+QgdgYAAgmQAAgiAYgXQAYgXAoAAQAuAAAXAbQAUAWAAAfQAAAjgYAXQgXAXgqAAQgkAAgXgTgAgUgdQgIAKAAATQAAAVAIAKQAJAJALAAQANAAAIgJQAIgKAAgVQAAgTgIgKQgJgKgMAAQgLAAgJAKg");
	this.shape_5.setTransform(102.1,106.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6EFF8").s().p("AggBrIAAhaIhTh7IBJAAIAqBJIArhJIBJAAIhTB7IAABag");
	this.shape_6.setTransform(80.5,103.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#343638").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
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