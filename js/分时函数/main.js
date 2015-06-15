//分时函数
var timeChunk = function(ary, fn, count) {
	var obj,
		t;
	var len = ary.length;
	var start = function() {
		for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
			obj = ary.shift();
			fn(obj);
		}
	}
	return function() {
		t = setInterval(function() {
			if (ary.length === 0) {
				return clearInterval(t);
			}
			start();

		}, 200);
	}
}
//demo
var ary = [];

for(var i =0;i<1000;i++){
	ary.push(i);
}

var renderList = timeChunk(ary,function(n){
	var div = document.createElement('div');
	div.innerHTML = n;
	document.body.appendChild(div);
},10);

renderList();