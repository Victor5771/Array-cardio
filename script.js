const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1995 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Mairie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
    'Beck , Glenn','Becker , Carl','Benn , Tony','Baker , Jennifer','Brown , David', 'Bell , Sarah','Barnes , Michael','Bennett , Emily','Blake , Robert','Brewer , Maria',
    'Bryant , James','Burke , Jessica','Bowen , Christopher','Bates , Amanda',
    'Bowers , Daniel','Bennett , Melissa','Bush , Brian','Black , Ashley',
    'Baldwin , Matthew','Briggs , Olivia','Barnett , William','Byrd , Megan','Burton , Richard',
    'Bass , Elizabeth', 'Baldwin , Joseph','Boyd , Kimberly','Beasley , Patrick',
    'Barrera , Laura','Buckley , Tyler','Bailey , Michelle','Barton , Thomas','Bullock , Christina','Blake , Daniel','Burgess , Heather','Bishop , Kevin',
    'Bullock , Stephanie','Bush , Charles','Brady , Rebecca','Benson , Andrea', 'Bass , Timothy',
    'Becker , Jessica','Black , Benjamin', 'Bruce , Laura','Bauer , Nicholas','Barnett , Brandon','Bishop , Victoria','Brady , Jeffrey',
    'Beard , Natalie', 'Bolton , Brandon', 'Bowers , Jennifer','Burns , Christopher','Bentley , Amanda','Bass , Rachel',
    'Boone , Nicholas','Baldwin , Hannah','Barker , Zachary','Brewer , Victoria', 'Bates , Marie', 'Burke , Eric',
    'Blackwell , Allison','Brock , Jason','Beasley , Rachel','Briggs , Sean',
    'Barnes , Phillip','Blair , Brittany','Bush , Gerald',
    'Browning , Justin', 'Bruce , Lauren','Bolton , Marcus','Barnes , Courtney','Barron , Derek',
    'Buckley , Gregory','Bates , Christine','Brewer , Russell', 'Baker , Jacqueline',
    'Baldwin , Justin','Benson , Derek','Browning , Patrick','Barron , Marie',
    'Barnes , Brittany','Brennan , Jeremy', 'Bradshaw , Lindsay','Becker , Jordan',
    'Burns , Julia','Bass , Ronald','Briggs , Cynthia','Barnes , Gary','Baldwin , Dana','Barnett , Gerald','Bennett , Gerald',
  ];
  
//   Array.prototype.filter()
//  1. filter the list of inventors for those who were born in i500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);

   
// Array.prototype.map()
// 2.Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3.sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
// 4.How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);

console.log(totalYears);
// 5.Sort the investors by years lived 
const sortedByYearsLived = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);

console.table(sortedByYearsLived);

// create a first of Boulevards in paris that contain 'de' anywhere in the name
// 6.https://en.wikipidea.org/wiki/category:Boulevards_in_paris

// 7.sort Exercise
// sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
    const [aLast] = a.split(' , ');
    const [bLast] = b.split(' , ');
    return aLast > bLast ? 1 : -1;
});
console.log(sortedPeople);

// 8.reduce Exercise
const totalYearsPeople = people.reduce((total, person) => {
    const [, last, birthYear, deathYear] = person.match(/(\w+) , .*, (\d+), (\d+)/);
    return total + (parseInt(deathYear) - parseInt(birthYear));
}, 0);
console.log(totalYearsPeople);
