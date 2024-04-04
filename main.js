var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//QUEATION 24
var name_1 = "ifra";
var name_2 = "ifra bano";
var name_3 = "ifra zahoor";
//if (name_1 == name_3){
//  console.log("names are equal")
//} else {
// console.log("names are not equal")
//}
//if (name_1 != name_2){
// console.log("names are equal")
//} else {
//}
//let age_1: number = 18
//let age_2: number = 22
//if (age_1 ==18){
// console.log("eligal for vote")
//}
//if (age_1 != 22){
// console.log("eligal for vote in older category")
//}
//if (age_1 <=age_2){//less then ye chota hai
//console.log("younger")
//}
//if (age_2 >=age_1){//greather then bara hai num1 se
// console.log("older")
//}
//if (age_1 == 18 && age_2 == 22){
// console.log("person is eligle for vote")
//}
//if (age_1 == 18 || age_2 != 22){
//  console.log("person is eligle not for vote")
//}
// let country: string  [] = ["Pakistan", "China", "Dubai", "Iraq" ]
//if (country.includes("Pakistan")){
//  console.log("Pakistan is in  country list")
//}
//if (!country.includes("america")
//Question # 25
//let alien_color : string = "green";
//if(alien_color == "green"){
// console.log("you  earn 5 points")
//}
// let alien_color : string = "red";
// if(alien_color == "green"){
//     console.log("no output")
//Question#26//
//let alien_color : string = "green";
//if (alien_color == "green"){
//  console.log("player just earned 5 points for shooting the alien ")
//} else {
//console.log("player just earned 10 points")
//}
//let alien_color : string = "red";
//if (alien_color == "green"){
// console.log("player just earned 5 points for shooting the alien ")
//} else {
//console.log("player just earned 10 points")
//}
//Question27
//let alien_color: string = "red"
//if (alien_color == "green") {
//console.log("5 point")
//} else if (alien_color == "yellow") {
//console.log("10 points")
//} else {
//    console.log("15 points")
//}
//Question 28//age 2,4,13,65,older
//18 se bari age wala run huwa yani 20 agar yhe 1 hota tu 2 run hota or agar 12 hota tu 13 or agar 54 tu 65
//run hota
//let age: number = 18
//if (age < 2) {
// console.log("you are a baby")
//} else if(age < 4) {
//console.log("you are a toddler")
//} else if(age < 13){
//console.log("you are a kid")
//} else if (age < 20){
//console.log("you are a teenager")
//} else if (age < 65){
//console.log("you are a adult")
//} else {
//console.log("you are older")
//}
//Questin 29 You really like bananas!
var favFruits = ["mango", "apple", "watermalon", "kiwi", "peach"];
function creat_car(manufacture, modle, optional) {
    return __assign({ manufacture: manufacture, modle: modle }, optional);
}
var mycar = creat_car("Suzuki", "Cultus", { color: "white", year: 2024 });
console.log(mycar);
