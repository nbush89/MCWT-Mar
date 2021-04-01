// let name1 = '1256';
// let name2 = '1235';
// let name3 = '123';
// let maxLength = Math.max(name1.length, name2.length, name3.length);
// let names = [name1, name2, name3].filter((name)=>name.length === maxLength);
// if(names.length === 2){
//     console.log(`${names.join(' and ')} are the longest names`)
// }else if(names.length === 3){
//     console.log(`All three names, ${names.join(', ')} are the same length`)
// }else{
//     console.log(`${names[0]} is the longest names`)
// }






// let name1 = '1224';
// let name2 = '1234';
// let name3 = '1234';

// let name1l = name1.length
// let name2l = name2.length
// let name3l = name3.length

// if(name1l > name2l && name1l > name3l){
//     console.log(`${name1} is the longest name`)
// }else if(name2l > name1l && name2l > name3l){
//     console.log(`${name2} is the longest name`)
// }else if(name3l > name1l && name3l > name2l){
//     console.log(`${name3} is the longest name`)
// }else if(name1l === name2l && name1l > name3l){
//     console.log(`${name1} and ${name2} are the longest names`)
// }else if(name1l === name3l && name1l > name2l){
//     console.log(`${name1} and ${name3} are the longest names`)
// }else if(name3l === name2l && name3l > name1l){
//     console.log(`${name3} and ${name2} are the longest names`)
// }else if(name1l === name2l && name1l === name3l){
//     console.log(`All three names, ${name1}, ${name2}, ${name3} are the same length`)
// }

// let name1 = '122';
// let name2 = '124';
// let name3 = '1234';

// let maxLength = Math.max(name1.length, name2.length, name3.length);
// let names =''
// if(name1.length === maxLength){
//     names += name1 + ' ';
// }

// if(name2.length === maxLength){
//     names += name2 + ' ';
// }

// if(name3.length === maxLength){
//     names += name3 + ' ';
// }
// console.log(names);


/*
ryhsdtj
sedrtjh
sertdj
sdtrjdryy
sedrtjsryj
*/
//One name is longest "Ada Lovelace has the longest name."
// 7 possible outcomes
// name1 is longest
// name2 
// name3
// 1 &2
// let myOtherVar = 0;
// for (let myCoolVariable = myOtherVar; myCoolVariable >= myOtherVar; myCoolVariable--) {
//      console.log(myCoolVariable);
//   }
// let i = '123';
// do{
    
//     console.log(i);
//     i += '1'
// }while(i.length <=3)

// let languages = ["Java", "JavaScript", "Ruby", "Python", "C#", "PHP", "HTML", "CSS"];
// for (let language of languages) {
//   console.log(language);
// }

const grandCircus = { location: "Detroit", rooms: 6, colors: ["teal", "orange", "charcoal"] };
for (let prop in grandCircus) {
  console.log(prop)
}
