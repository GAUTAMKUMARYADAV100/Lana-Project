const { v4: uuidv4 } = require('uuid');

class Word {
  constructor(word, meaning, pronunciation, usage, derivedFrom) {
    this.id = uuidv4(); // Generate a unique identifier
    this.word = word;
    this.meaning = meaning;
    this.pronunciation = pronunciation;
    this.usage = usage;
    this.derivedFrom = derivedFrom;
  }

  // Method to display word details
  displayWordDetails() {
    return {
      id: this.id,
      word: this.word,
      meaning: this.meaning,
      pronunciation: this.pronunciation,
      usage: this.usage,
      derivedFrom: this.derivedFrom,
    };
  }

  // Method to update word attributes
  updateWordDetails(newDetails) {
    this.word = newDetails.word || this.word;
    this.meaning = newDetails.meaning || this.meaning;
    this.pronunciation = newDetails.pronunciation || this.pronunciation;
    this.usage = newDetails.usage || this.usage;
    this.derivedFrom = newDetails.derivedFrom || this.derivedFrom;
  }
}

module.exports = Word;
