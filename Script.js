
var money = 0;
var addedMoney = 1;
var moneyUpgradeLevel = 0;
var loops = 1;
var loopLevel = 0;

var clickForMoney = function() {
	var totalAddedMoney = 0;
	for(let i = 0; i < loops; i++) {
		totalAddedMoney += addedMoney;
	}
	money += addedMoney;
	var element = document.getElementById('money');
	element.innerHTML = money;
}

var moneyUpgrade0 = function() {
	if(moneyUpgradeLevel === 0 && money >= 20) {
		addedMoney += 1;
		moneyUpgradeLevel++;
		money -= 20;
		var element = document.getElementById('money');
		element.innerHTML = money;
		refreshUpgrades();
	}
}

var refreshUpgrades = function() {
	var tablee = document.querySelector('#upgradesSection tbody');
	console.log(tablee);
	var code = '<tr><td>MoneyUpgrade</td><td>'+moneyUpgradeLevel+'</td><td><button onclick=\'moneyUpgrade'+moneyUpgradeLevel+'()\'>'+moneyUpgradeCost()+'</button></td></tr>'
	/*
		todo
		Abfrage ob upgrade > 10
		Loop upgrade
	*/
	tablee.innerHTML = code;
}

var moneyUpgradeCost = function() {
	var cost = 0;
	for(let i = 0; i < moneyUpgradeLevel+1; i++) {
		cost += 20;
	}
	return(cost);
}
