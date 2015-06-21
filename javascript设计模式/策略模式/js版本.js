var strategies = {
	"S": function(salay) {
		return salay * 4;
	}
	"A": function(salay) {
		return salay * 3;
	}
	"B": function(salay) {
		return salay * 2
	}
}
var calculateBouns = function(level, salay) {
	return strategies[level](salay);
}

console.log(calculateBouns("S", 10000));