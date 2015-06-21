//绩效规则s,b,a
var perS = function  (argument) {}

perS.prototype.calculate = function(salay) {
	return salay*4;
};

var perA = function  (argument) {}

perA.prototype.calculate = function(salay) {
	return salay*3;
};


var perB = function  (argument) {}

perB.prototype.calculate = function(salay) {
	return salay*2;
};

//奖金

var Bonus = function(){
	this.salay = null,   //原始工资
	this.strategy=null,  //规则对象
}

Bonus.prototype.setSalary = function(salay) {
	this.salay = salay;
};
Bonus.prototype.setStrategy = function(strategy) {
	this.setStrategy =strategy;
};
Bonus.prototype.getBonus = function(){
	return this.setStrategy.calculate(this.salay);
}
// 使用
var bouns = new Bonus();

bonus.setSalary(10000);
bouns.setStrategy(new perB());
console.log(bonus.getBonus());