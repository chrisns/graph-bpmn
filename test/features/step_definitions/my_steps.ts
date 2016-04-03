/* jslint node: true */
"use strict";
import * as chai from "chai";

const Yadda = require("yadda");
const English = Yadda.localisation.English;
const Dictionary = Yadda.Dictionary;
const converters = Yadda.converters;

chai.use(require("chai-as-promised"))
  .should();

class Wall {
  bottles:number;

  constructor(bottles:number) {
    this.bottles = bottles;
  }

  fall(num:number) {
    this.bottles -= num;
  }
}

let wall:Wall;
const dictionary = new Dictionary().define("NUM", /(\d+)/, converters.integer);
let library = English.library(dictionary)

  .given("$NUM green bottles are standing on the wall", (number_of_bottles:number) =>
    wall = new Wall(number_of_bottles)
  )

  .when("$NUM green bottle accidentally falls", (number_of_falling_bottles:number) =>
    wall.fall(number_of_falling_bottles)
  )

  .then("there (?:are|are still) $NUM green bottles standing on the wall", (number_of_bottles:number) =>
      wall.bottles.should.eql(number_of_bottles)

  );

module.exports = library;
