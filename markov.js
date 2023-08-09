/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    let markovChain = {};

    for (let word of this.words){ // check for duplicates
      markovChain[word] = [];
    }

    for (let i = 0; i < this.words.length; i++) {
      let key = this.words[i];
      let value = this.words[i + 1] || null;

      markovChain[key].push(value);
    }

    return markovChain;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
    let words = this.words;
    let markovChain = this.chains;
    let string = [];

    for (let word of words){
      let idx = Math.floor(Math.random() * markovChain[word].length);
      // string.push(chains[word][idx]);
      if (markovChain[word] !== null) {
        string.push(markovChain[word][idx]);
      }
    }

    return string.join(" ").trim();
  }
}

module.exports = {MarkovMachine};

