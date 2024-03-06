


let role = prompt("What is your role?");


if (role === "admin") {
    text = "ich bin für update und create und delete zuständig";
} 

else if (role === "moderator") {
    text = "ich bin für update und create zuständig";
}

else {

    text = "hello user";
}
document.write(text);

// Funktion zur Analyse des Textes
function analyzeText(text) {
    
    // Anzahl der Wörter im Text
    let wordCount = text.split(" ").length;

    // anzahl unterschiedlicher Wörter
    let uniqueWords = new Set(text.split(/\s+/)).size;

    // Längstes Wort im Text
    let longestWord = text.split(/\s+/).reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    // Häufigkeit jedes Wortes im Text
    let wordFrequency = {};
    text.split(/\s+/).forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    return { wordCount, uniqueWords, longestWord, wordFrequency };
}

// Funktion zum Ausgeben der Statistiken
function printStatistics(stats) {
    console.log("Anzahl der Wörter im Text:", stats.wordCount);
    console.log("Anzahl unterschiedlicher Wörter:", stats.uniqueWords);
    console.log("Längstes Wort im Text:", stats.longestWord);
    console.log("Häufigkeit jedes Wortes im Text:");
    for (const [word, freq] of Object.entries(stats.wordFrequency)) {
        console.log(`${word}: ${freq}`);
    }
}

// Textanalyse durchführen und Statistiken ausgeben
let stats = analyzeText(text);
printStatistics(stats);


