//bodyDom
ko.applyBindings({
	common: {
		title: "Knockout",
		author: "dalan"
	}
}, document.getElementById("bodyDom"))

//itemOne
var firstViewModel = {
	isHover: ko.observable(false),
	name: ko.observable("bobo"),
	age: ko.observable(18),
	submitForm: function(){
		alert("My name is " + this.name() + " , and I am " + this.age() + " years old!")
	}
}
ko.applyBindings(firstViewModel, document.getElementById("itemOne"))

//itemTwo
var secondViewModel = function(){
	var self = this
	self.isOver = ko.observable(false)
	self.onMouseOver = function(){
		self.isOver(true)
	}
	self.onMouseOut = function(){
		self.isOver(false)
	}
	self.listData = ko.observableArray([
		{ name: "bobo", age: 18 },
		{ name: "lily", age: 20 },
		{ name: "amy", age: 19 }
	])
	self.newName = ko.observable()
	self.newAge = ko.observable()
	self.deleteItem = function(){
		self.listData.remove(this)
	}
	self.addItem = function(){
		self.listData.push(
			{ name: self.newName(), age: self.newAge() }
		)
	}
}
ko.applyBindings(new secondViewModel(), document.getElementById("itemTwo"))

//itemThree
var threeViewModel = {
	isInner: ko.observable(false),
	newDom: ko.observable(""),
	innerNewDom: function(){
		var self = this
		self.newDom("<div class='newdiv'></div>" + self.newDom())
		self.isInner(true)
	}
}
ko.applyBindings(threeViewModel, document.getElementById("itemThree"))