//Question no 2
//let personName="Eric";
//console.log('hello' ,personName, "would you like to learn some typescripe to
//Q3 Name cases
//let personName: string ="ifra";
//inlowercase
//console.log("lowercase:", personName.toLowerCase());
// in Uppercase
//console.log("uppercase:", personName.toUpperCase());
 //tittle case
 //console.log("tittlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
//Q3 Name cases
//let personName : string = "ifra";
//in lowercase
//console.log(personName.toLowerCase());
//console.log(personName.toUpperCase());
//task # 04
 //let quote: string = ("“A person who never made a mistake never tried anything new.”");
 //let author: string = ("Albert Einstein");
//console.log(`${author} once said, ${quote}`);
//Q5
//let famousPerson= "Isaac Newton";
//let quote: string = ("“A person who never made a mistake never tried anything new.”");
//let message: string = (`${famousPerson} once said ${quote}`);
//console.log(message);


//Q6
//let personName: String = "\t \n Ifra zahoor \n \t";
//console.log("orignal:", personName);
//console.log("stripped:", personName.trim());

//task # 07-08
 //console.log(5 + 3);
 //console.log(10 - 2);
 //console.log(4 * 2);
 //console.log(16 / 2)

 //Q9 fovorite Number: store your favorite number in a variable then, using that variable, creat a
//let fav_number = 4;
 //console.log("My favorite Number is : ", fav_number);
 //Q9
 //let fav_number = 24;
 //console.log("My Favorite Number is : ", fav_number);
 //fav_number = 24;
//console.log("My Favorite Number is : ", fav_number);


 //Question 10
 //author: [ifra bano]
 //date: [Monday , feburary 12 , 2024]

 //task9: printing my favorite number.
 //let favoriteNumber: number = 4;
 // reveling my favorite number in a message formate.
 //console.log(`My favorite number is ${favoriteNumber},`);

 //Question 11
 //let names : string [] = ["ifra","sharry","tabbssum","zahoor"];
 //console.log(names[0]);
 //console.log(names[1]);
 //console.log(names[2]);
 //console.log(names[3]);

 //Question 12
 //let names : string [] = ["ifra","sharjeel","tabbssum","zahoor"];

 //let message : string  = " Do you like to play Cricket?"
//console.log(names[0] + message )
//console.log(names[1] + message )
//console.log(names[2] + message )
//console.log(names[3] + message )

//Queation 13
//let transportation : string [] = ["Honda motercycle","car","Bus","cycle"];
//transportation.map((items) => console.log(`“I would like to own a” ${items}`));

//Question 14
//let guestlist = ["ifra","sharjeel","tabbssum","zahoor"];
//guestlist.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`));

//Question 15
//let guestArray : string [] = ["ifra","ayesha","isra","laiba"];
//let canNOTAttend : string  = "Iqra";
//let message : string = ("Can't not attend the Dinner");
//console.log(canNOTAttend + " " + message);
//let newGuestArray : string = "afshan"
 //guestArray [guestArray.indexOf(canNOTAttend)] = newGuestArray;
//guestArray.map((itmes) => console.log(`Dear ${itmes} you are invited to the Dinner`))

//Question 16
//let guestArray : string [] = ["ifra", "ayesha", "isra", "laiba"];
//let canNOTAttend : string = "ayesha"
//let newGuest : string = "Sharry"
//guestArray [guestArray.indexOf(canNOTAttend)] = newGuest;
//console.log(guestArray)
//guestArray.map((items) =>
//console.log(`Dear ${items}, i found a bigger Dinner table so I am invited more peoples.`));
//part2
//let begGuest : string = "sharjeel";
  //guestArray.unshift((begGuest))
 //console.log(guestArray);
              // ------------part #3 Middle-----------
  //let midGuest: string = "khushi";
  //let middleIndex = (guestArray.length/ 3)
  //guestArray.splice(middleIndex, 0, midGuest)
 //console.log(guestArray);
//              // ------------part #4 Appendend-----------
//guestArray.push("Aliana")
 //console.log(guestArray);
//              // ------------part #5 new invitation messages-----------
 //guestArray.map((items)=> console.log(`${items}, You are invited in themore category on dinner`))

//Question 17
//innitial list of guest 
//let guest: string[] = ["Afshan" , "Iqra" , "Shehzen" , "zoha" , "Bisma"];
//information that only two people can be invited
//console.log("Due to limited space, only two people can be invited for Dinner");
// Removing guest untill only two names remain
//while(guest.length > 2) { 
   // var removeGuest = guest.pop();
    //    console.log(`Sorry, ${removeGuest}, you're no longer invited to dinner`);
 //}
// // print invitation to the remaining two guests
 //guest.forEach((guests) => {
   //console.log(`Dear, ${guests}, you're still invited to dinner.`)
 //});
// //           removing last two name  from the list
 //guest.push();
 //guest.push();
//           printing the final list
 //console.log("final guest list:", guest);
 //Question 18
// store the location in an array
//let placeToVisite: string [] = ["tokyo" , "pakistan" , "america" , "china" , "japan"];
// print the array in its original order
//console.log("originalorder:" , placeToVisite);
//print the array in alphabetical order without modifying the actual list
//console.log("Alphabetical order:", [...placeToVisite].sort());
//show that the array is still in its original order
//console.log("original order after sorting:", placeToVisite);
//Print array in Reverse Alphabetical Order.
 //console.log(" Reverse Alphabetical order",[...placeTovisit].sort().reverse());
// //        the array is still in its orignal order
 //console.log("orignal order after reverse sorting", placeTovisit);
// //       reverse order of the list 
// placeTovisit.reverse();
 //console.log("reverse order:", placeTovisit);
// //  reverse the order of the list again to get back to the orignal order
// placeTovisit.reverse();
 //console.log("Back to orignal order", placeTovisit);
// // sort the array in alphabetic order
// placeTovisit.sort((a, b) => b.localeCompare (a))
 //console.log("sorting in reverse alphabetic order", placeTovisit);

 //Question19
 //let invitation: string [] = ["Sharry", "Parri"];
  //let count_invitation: number = invitation.length;
  //console.log(`${count_invitation}, people will come to the dinner`);

  //Question20
  //let City: string[] = ["Islamabad", "Punjab", "Karachi", "Lahore", "Multan"];
 //console.log("List of City:");
 //console.log(City);

 //Question 21
 //let person: {name: string, fname: string, age: number} = {name:"ifra", fname: "female" ,age: 25}
 //console.log(person)

 //Question22
 //let day: string[]= ["Monday", "Tuesday", "Wednesday", "Thusrday", "Friday", "Saturday", "Sunday", ]
 //console.log(day{7});
 //console.log(day[3]);

 //Question 23
//let car = "subaru";
//console.log("is car == 'subaru'? predict true");
//console.log(car == 'subaru');
//console.log("is car != 'Honda city'? predict true");
//console.log(car != 'Honda city');
//console.log("Is car == 'subaru'? I predicted false")
//console.log("car == 'subaru'")
//console.log("is car == 'subaru'? predict true");
//console.log(car == 'subaru');
 //console.log("Is car === 'Sabaru'? I predicted False.")
// console.log(car === 'Sabaru'); // false
// console.log("Is car !== 'Cultus'? I predicted true.")
// console.log(car !== 'Cultus'); // True
// console.log("Is car !== 'subaru'? I predicted false.")
// console.log(car !== 'subaru'); // false
// console.log("Is car != 'V8'? I predicted true.")
// console.log(car != 'V8'); // true
// console.log("Is car !== 'subaru'? I predicted false.")
// console.log(car !== 'subaru'); // false
// console.log("Is car > 'mehran'? I predict true.");
// console.log(car > 'mehran');  // true
// console.log("Is car <= 'Ford'? I predict false.");
// console.log(car <= 'Ford'); // false
 
 //QUEATION 24
//let name_1 : string = "ifra"
//let name_2 : string = "ifra bano"
//let name_3 : string = "ifra zahoor"

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





