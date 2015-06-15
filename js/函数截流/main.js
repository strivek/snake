var throttle = function(fn, interval) {
	var _self = fn,
		timer,
		firstTime = true;
	return function() {
		var args = arguments;
		_me = this;
		if (firstTime) {
			_self.apply(_me, args);
			return firstTime = false;
		}
		if (timer) { //定时器还存在，上一次延时还没有完成
			return false;
		}
		timer = setTimeout(function() {
			clearTimeout(timer);
			timer = null;
			_self.apply(_me, args);

		}, interval || 500);
	}
}
//demo
window.onresize = throttle(function(){
	console.log(1);
},500)