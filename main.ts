//QUEATION 24
let name_1 : string = "ifra"
let name_2 : string = "ifra bano"
let name_3 : string = "ifra zahoor"

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
let favFruits: string [] = ["mango", "apple", "watermalon", "kiwi", "peach"]
 //if(favFruits.includes("mango")) {
   //  console.log("mango")
 //}
 //if(favFruits.includes("apple")) {
   // console.log("apple")
 //}
 //if(favFruits.includes("watermalon")) {
   //  console.log("watermalon")
// }
 //if(favFruits.includes("kiwi")) {
   //  console.log("You really like bananas!")
 //}
 //if(favFruits.includes("peach")) {
   // console.log("You really like bananas!")
 //}

 //Question30
 //let users: string [] = ["admin", "eric", "haseeb", "rameez", "laiba"]
//for(let user of users) {
  //   if(user === ("admin")){
    //     console.log(" Hello admin, would you like to see a status report?")
     //}else {
       //  console.log(`Hello ${user}, thank you for logging in again.`)
     //}
    //}
    //Questin31
    //let users : string [] = ["ifra","sharry","sharjeel","pari","admin"]
    //if (users.length === 0){
     // console.log("we need to find some users")
   // } else {
      //for(let user of users) {
           //if (user === "admin"){
          //console.log("hello admin, would you like to see a status report?")
          //       } else {
        //  console.log(`hello${users}, thank you for logging in again`)
      //      }
    //}
    //}
    //users = []
    //if (users.length === 0) {
    //  console.log("we need to find some users!")
  //  }
  //Question:32
  //let current_users : string [] = ["admin","Sharjeel","Ifra","Sharry","Pari"]
  //let new_users : string [] = ["admin","Pari","Laiba","Isra","tabbssum"]
  //let current_users_lower: string [] = current_users.map(user => user.toLowerCase())
 //for ( let new_user of new_users){
     //if (current_users_lower.includes (new_user.toLowerCase())){
      //   console.log(`Sorry ${new_user}, thats name is taken`)
    //}else{
  //      console.log(`yes ${new_user}, is still in avalaible list`)
//}
//}
//Question 33
//let number : number [] = [1,2,3,4,5,6,7,8,9]
//for (let number of numbers ){
//if (number === 1){
  //console.log(`${number}st`)//1st
  //} else if (number===2) {
    //console.log(`${number}nd`)//2nd
  //} else if (number===3){
    //console.log(`${number}rd`)//3rd
  //}else if (number===4){
    //console.log(`${number}th`)//4rth
//}
  //}
//Question 34
//let favourite_pizza: string [] = ["peperoni", "spicy", "chicken"]
 //for (let  pizza of favourite_pizza ) {
   //  console.log(pizza)
 //}
 //console.log("\n")
 //for (let pizza of favourite_pizza){
  //   console.log(`I really like ${pizza} pizza`)
 //}
 //console.log("\nI really like pizza!")
 //Question35
// let animals: string [] = ["loin", "cat", "dog"]
// for(let animal of animals) {
//     console.log(animal)
// }
// console.log("\n")
// for(let animal of animals) {
//     console.log(`A ${animal} has a tail`)
// }
// console.log("\n all of these are greater pets but i love dogs more")

//Question36
//function makeShirt (size: string, text: string): void {
  //console.log(`you order a ${size}shirt that say ${text}`)
//}
//makeShirt('large', "i love typescript")
//makeShirt('medium',"i need a big shirt")

//Question37
//function makeShirt(size: string = "large",  text: string = "I love typescript"): void{
//console.log(`you have order a ${size}, shirt that says ${text}`)
//}
//makeShirt();
//makeShirt('medium');

//Question 38
//function describe_city ( city: string, country: string = "Pakistan"):void{
  //     console.log(`${city} is in ${country}`)
  // }
  // describe_city("Karachi") // default city
  // describe_city("france", "europe") 
  // describe_city("Lahore"," Pakistan") // default city

//Question39
//function city_country (city: string, country: string): string {
  //     return `${city} , ${country}`
  // }
  // let c1 = city_country('Lahore', 'Pakistan')
  // let c3 = city_country('Paris', 'France')
  // let c2 = city_country('Tokyo', 'Japan')
  // console.log(c1)
  // console.log(c2)
  // console.log(c3)

  //Questin 40
  //function make_Album (artist: string, title: string): {artist: string; title: string} {
    //     const dictionaries = {
    //         artist:artist.charAt(0).toUpperCase() + artist.slice(1),
    //         title:title.charAt(0).toUpperCase() + title.slice(1)
    //     };
    //     return dictionaries;
    // }
    // let album =  make_Album("Haseeb", "Light");
    // console.log(album);
    //  album =  make_Album("Rameez", "seenbreez");
    // console.log(album);
    //  album =  make_Album("Affan", "red waves");
    // console.log(album);

    //Question 41
    //function show_magicians(magicians: string[]): void {
     // for (const magician of magicians) {
       // console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
      //}
    //}
    //const magician: string[] = ["sharry","sharjeel","ifra"]
    //show_magicians(magician)

    //Question 42
    //function make_great(magicians: string[]): void {
      //for(let i = 0; i < magicians.length; i++) {
      // magicians[i] + 'The great'
      //}
   /// }


//const magicians2: string[] = ["sharry","sharjeel" ,"ifra"];
//make_great(magicians2)
//show_magicians(magicians2);

//QUEStion 43
//function make_great2 (magicians: string[]): string[]{
  //  const great_magicians: string [] = []
    //   for (let i = 0; i < magicians.length; i++ ) {
      //     great_magicians.push(magicians[i] + ' the great');
       //}
      // return great_magicians;
   //}
   //const magicians3:  string [] = ["haseeb", "rameez", "affan"]
  // const great_Magician2: string[] = make_great2  (magicians3)
   //Show_magicians(magicians3);
   //Show_magicians(great_Magician2);

   //Questin 44
   //function sandwich(...item: string[]): void{
      //   console.log("Sandwich Order!")
        // for (let i = 0; i < item.length; i ++){
         //    console.log(`-${item[i]}`)
       //    }
     //}
     //console.log("enjoy your sandwich Huzaifa Naeem")
     //sandwich('vegetable','chicken')
   //  sandwich('beef','cheese')
 //sandwich('garlic chicken','mayo sauce')
    
 //Question 45
 //type car = {
     //  manufacture: string;
     //  modle: string;
     //  [key: string]: any;
   //}
  // function creat_car(manufacture: string, modle: string, optional: Record<string, any>): car{
      // return{
       //    manufacture,
       //    modle,
        //   ...optional
     //  }
  // }
   //const mycar: car = creat_car("Suzuki","Cultus", {color: "white", year: 2024}) 
  // console.log(mycar);





