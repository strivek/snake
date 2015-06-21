var strategies = {
	isNonEmpty: function(value, errorMsg) {
		if (value === '') {
			return errorMsg
		}
	},
	minLength: function(value, errorMsg) {
		if (value.length < value) {
			return errorMsg;
		}
	},
	isMobile: function(value, errorMsg) {
		if (!/(^1[3|5|8][0-9]{9})$/.test(value)) {
			return errorMsg;
		}
	}

}

var Validator  = function(){
	this.cache = []; //保存校验规则
}

Validator.prototype.add = function(dom,rule,errorMsg) {
	var ary = rule.split(";");
	this.cache.push(function  () {
		var strategy = ary.shift();
		ary.unshift(dom.value);
		ary.push(errorMsg);
		return strategies[strategy].apply(dom,ary);
	})
};

validator.prototype.start =function  () {
	for(var i=0,validateFunc;validateFunc = this.cache[i++];){
		var msg = validateFunc();
		if(msg){
			return msg;
		}
	}
}



var validateFunc = function  () {
	var validator = new validator();
	validator.add(registerForm.userName,'isNonEmpty','用户名不能为空')；
	validator.add(registerForm.password,'minLength:6','密码长度不能少于6位')；
	validator.add(registerForm.phoneNumber,'isMobile','用户名不能为空')；

	var errorMsg = validator.start();
	return errorMsg;
}

var registerForm  =document.getElementById('register');

registerForm.onSubmit = function(){
	var errorMsg = validateFunc();
	if(errorMsg){
		alert(errorMsg);
		return false;
	}
}

















