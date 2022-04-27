const arrayToParagraph = (wordsArray) => {
    let string = "";

    wordsArray.map((document) => {
        let random_boolean = Math.random() < 0.1;
        //if random_boolean is true (10% chance) use a comma space separator, if not use a space
        let separator = random_boolean ? ", " : " ";
        string += document.word + separator;
    });

    //Capitalise first letter of string
    let result = string.charAt(0).toUpperCase() + string.slice(1);

    //Remove any comma separator at end of string
    result = result.replace(/(, )$/, "");

    //Return result with surrounding whitespace trimmed and full stop added to end
    return result.trim() + ".";
}

module.exports.arrayToParagraph = arrayToParagraph;
