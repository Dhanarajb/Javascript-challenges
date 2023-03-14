// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.

// let Marks_mass = 78;
// let Johns_mass = 95;
// let Marks_height = 1.69;
// let Johns_height = 1.88;

// const BMI_Marks = Marks_mass / (Marks_height * Marks_height);
// const BMI_Johns = Johns_mass / (Johns_height * Johns_height);
// let markHigherBMI = BMI_Johns > BMI_Marks ? "'John's BMI is higher than Mark's'" : "'Mark's BMI is higher than John's'";
// console.log(BMI_Johns, BMI_Marks, markHigherBMI);

// const result = document.getElementById('bmi');
// result.append(
//   'BMI_Johns: - ',
//   BMI_Johns,
//   ' ',
//   'BMI_Marks: - ',
//   BMI_Marks,
//   ' ',
//   'markHigherBMI: - ',
//   markHigherBMI
// );
// result.style.border='1px solid black'
// result.style.padding='10px'
// -------------------------------------------------
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the tropy ');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win Tropy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('both wins tropy');
} else {
  console.log('No one win');
}
