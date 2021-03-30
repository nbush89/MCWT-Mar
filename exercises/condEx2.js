const name1 = "Nicole";
const name2 = "Tanita";
const name3 = "Alexey";

if (name1.length > name2.length && name1.length > name3.length) {
  console.log(`${name1} is the longest name.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(`${name2} is the longest name.`);
} else if (name3.length > name2.length && name3.length > name1.length) {
  console.log(`${name2} is the longest name.`);
} else if (name1.length === name2.length && name1.length > name3.length) {
  console.log(`${name1} and ${name2} tie for the longest name`);
} else if (name3.length === name2.length && name3.length > name1.length) {
  console.log(`${name3} and ${name2} tie for the longest name`);
} else if (name1.length === name2.length && name1.length > name3.length) {
  console.log(`${name1} and ${name2} tie for the longest name`);
} else {
  console.log(`${name1}, ${name2}, and ${name3} are all the same length`);
}
