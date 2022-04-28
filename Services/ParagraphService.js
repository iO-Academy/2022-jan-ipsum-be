const arrayToParagraph = (wordsArray) => {
    let paraString = ''

    let sentenceNum = getRandomInt(6, 8)

    let i = 1
    while (i < sentenceNum) {

        paraString += arrayToSentence(wordsArray)
        i++
    }
    return paraString
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const arrayToSentence = (wordsArray) => {
    let sentenceString = ""
    let wordNum = getRandomInt(8, 12)
    let i = 1
    let sentence = []
    let arrayLength = wordsArray.length

    while (i < wordNum) {
        let randomIndex = getRandomInt(0, (arrayLength - 1))
        sentence.push(wordsArray[randomIndex])
        i++
    }

    sentence.map((document) => {
        let random_boolean = Math.random() < 0.1
        //if random_boolean is true (10% chance) use a comma space separator, if not use a space
        let separator = random_boolean ? ", " : " "
        sentenceString += document.word + separator
    })

    //Capitalise first letter of string
    let result = sentenceString.charAt(0).toUpperCase() + sentenceString.slice(1)

    //Remove any comma separator at end of string
    result = result.replace(/(, )$/, "")

    //Return result with surrounding whitespace trimmed and full stop added to end
    return result.trim() + ". "
}

module.exports.arrayToParagraph = arrayToParagraph
