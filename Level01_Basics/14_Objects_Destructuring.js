const university = {
    allamaIqbalOpenUniversity: "AIOU",
    bhauddinZikriaUniversity: "BZU",
    bhawalpurIslamiaUniversity: "BIU"
}

const {allamaIqbalOpenUniversity: allama, bhauddinZikriaUniversity: zikria} = university; // syntax of object destructuring. accessing values by writing short code.

console.log(zikria);
console.log(allama);

const university1 = {
    allamaIqbalOpenUniversity: "aiou",
    bhauddinZikriaUniversity: "bzu",
    bhawalpurIslamiaUniversity: "biu"
}


const {allamaIqbalOpenUniversity: allama1, bhauddinZikriaUniversity: zikria1} = university1; // syntax of destructuring. accessing values by writing short code.

console.log(zikria1);
console.log(allama1);

const university2 = {
    allamaIqbalOpenUniversity2: "aiou",
    bhauddinZikriaUniversity2: "bzu",
    bhawalpurIslamiaUniversity2: "biu"
}


const {allamaIqbalOpenUniversity2, bhauddinZikriaUniversity2} = university2; // syntax of destructuring. Now not need to write "university.allamaIqbalOpenUniversity". You can only write "allamaiqbalopenuniversity"

console.log(allamaIqbalOpenUniversity2);
console.log(bhauddinZikriaUniversity2);

