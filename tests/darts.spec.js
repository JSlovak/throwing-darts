/*jshint esversion: 6*/

var chai = require("chai");
var expect = chai.expect;

var scoreThrows = require("../throwing-darts.js");

describe("scoreThrows", function(){

  it("should be a function", function(){
    expect(scoreThrows).to.be.a("function");
  });

  it("should return a number", function(){
    expect(scoreThrows([4])).to.be.a("number");

  });

  it("should take an array as an argument", function(){
    expect(throwing-darts.bind({throw1: 5, throw2: 7})).to.throw(" Not able to calculate your score");
    expect(throwing-darts.bind(null).to.throw(" Not able to calculate your score"));
  });

  // it("should only take numbers as values in that array", function(){

  // });


  // it("should return a score of 0 if the array is empty", fucntion() {

  // });

  // it("should calculate the score correctly", function(){

  // });

  // it("should add 100 to score if all throws are under a radius of 5", function(){

  // });




});