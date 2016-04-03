"use strict";
const chai = require("chai");
const Yadda = require("yadda");
const English = Yadda.localisation.English;
const Dictionary = Yadda.Dictionary;
const converters = Yadda.converters;
chai.use(require("chai-as-promised"))
    .should();
class Wall {
    constructor(bottles) {
        this.bottles = bottles;
    }
    fall(num) {
        this.bottles -= num;
    }
}
let wall;
const dictionary = new Dictionary().define("NUM", /(\d+)/, converters.integer);
let library = English.library(dictionary)
    .given("$NUM green bottles are standing on the wall", (number_of_bottles) => wall = new Wall(number_of_bottles))
    .when("$NUM green bottle accidentally falls", (number_of_falling_bottles) => wall.fall(number_of_falling_bottles))
    .then("there (?:are|are still) $NUM green bottles standing on the wall", (number_of_bottles) => wall.bottles.should.eql(number_of_bottles));
module.exports = library;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlfc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteV9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxZQUFZLENBQUM7QUFDYixNQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7QUFDM0MsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUNwQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBRXBDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDbEMsTUFBTSxFQUFFLENBQUM7QUFFWjtJQUdFLFlBQVksT0FBYztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVU7UUFDYixJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztJQUN0QixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQUksSUFBUyxDQUFDO0FBQ2QsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0UsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FFdEMsS0FBSyxDQUFDLDZDQUE2QyxFQUFFLENBQUMsaUJBQXdCLEtBQzdFLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUNuQztLQUVBLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLHlCQUFnQyxLQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQ3JDO0tBRUEsSUFBSSxDQUFDLGlFQUFpRSxFQUFFLENBQUMsaUJBQXdCLEtBQzlGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUU3QyxDQUFDO0FBRUosTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gXCJjaGFpXCI7XG5cbmNvbnN0IFlhZGRhID0gcmVxdWlyZShcInlhZGRhXCIpO1xuY29uc3QgRW5nbGlzaCA9IFlhZGRhLmxvY2FsaXNhdGlvbi5FbmdsaXNoO1xuY29uc3QgRGljdGlvbmFyeSA9IFlhZGRhLkRpY3Rpb25hcnk7XG5jb25zdCBjb252ZXJ0ZXJzID0gWWFkZGEuY29udmVydGVycztcblxuY2hhaS51c2UocmVxdWlyZShcImNoYWktYXMtcHJvbWlzZWRcIikpXG4gIC5zaG91bGQoKTtcblxuY2xhc3MgV2FsbCB7XG4gIGJvdHRsZXM6bnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGJvdHRsZXM6bnVtYmVyKSB7XG4gICAgdGhpcy5ib3R0bGVzID0gYm90dGxlcztcbiAgfVxuXG4gIGZhbGwobnVtOm51bWJlcikge1xuICAgIHRoaXMuYm90dGxlcyAtPSBudW07XG4gIH1cbn1cblxubGV0IHdhbGw6V2FsbDtcbmNvbnN0IGRpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpLmRlZmluZShcIk5VTVwiLCAvKFxcZCspLywgY29udmVydGVycy5pbnRlZ2VyKTtcbmxldCBsaWJyYXJ5ID0gRW5nbGlzaC5saWJyYXJ5KGRpY3Rpb25hcnkpXG5cbiAgLmdpdmVuKFwiJE5VTSBncmVlbiBib3R0bGVzIGFyZSBzdGFuZGluZyBvbiB0aGUgd2FsbFwiLCAobnVtYmVyX29mX2JvdHRsZXM6bnVtYmVyKSA9PlxuICAgIHdhbGwgPSBuZXcgV2FsbChudW1iZXJfb2ZfYm90dGxlcylcbiAgKVxuXG4gIC53aGVuKFwiJE5VTSBncmVlbiBib3R0bGUgYWNjaWRlbnRhbGx5IGZhbGxzXCIsIChudW1iZXJfb2ZfZmFsbGluZ19ib3R0bGVzOm51bWJlcikgPT5cbiAgICB3YWxsLmZhbGwobnVtYmVyX29mX2ZhbGxpbmdfYm90dGxlcylcbiAgKVxuXG4gIC50aGVuKFwidGhlcmUgKD86YXJlfGFyZSBzdGlsbCkgJE5VTSBncmVlbiBib3R0bGVzIHN0YW5kaW5nIG9uIHRoZSB3YWxsXCIsIChudW1iZXJfb2ZfYm90dGxlczpudW1iZXIpID0+XG4gICAgICB3YWxsLmJvdHRsZXMuc2hvdWxkLmVxbChudW1iZXJfb2ZfYm90dGxlcylcblxuICApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpYnJhcnk7XG4iXX0=