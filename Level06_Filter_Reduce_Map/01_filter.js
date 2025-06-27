const schoolClasses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const seniorClasses = schoolClasses.filter( (seniorClass) => seniorClass > 5 ); // implicit return if one line of code.
console.log(seniorClasses);

const lastClass = schoolClasses.filter( (seniorClass) => {
    return seniorClass > 9
} ); // explicit return if one line of code.
console.log(lastClass);

// <============Above logic with forFach loop============>

const overs = [1, 2, 3, 4, 5, 6]
let endOfMatch = []

overs.forEach((over) => {
    if (over > 4) {
        endOfMatch.push(over)
    }
})
console.log(endOfMatch); // Output: [5, 6]


// <============Simple project for filtering============>
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const genereBooks = books.filter((genBook) => genBook.genre === "Fiction") // Books having genre "Fiction"

console.log(genereBooks);

const publishBooks = books.filter((pubBook) => pubBook.publish > 2000); // books published after 2000 

console.log(publishBooks);

const filteredBooks = books.filter((filBook) => filBook.publish <= 1990 && filBook.edition >= 2005 ) // Applied multiple filters

console.log(filteredBooks);

