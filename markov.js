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

    for (let word of this.words){
      markovChain[word] = []
    }

    for (let i = 0; i < this.words.length; i++) {
      let key = this.words[i];
      let value = this.words[i + 1] || null;

      markovChain[key].push(value)
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
    let chains = this.chains
    let string = "";

    for (let word in chains){
      let idx = Math.floor(Math.random() * chains[word].length);
      string += chains[word][idx]
    }

    return string
  }
}

module.exports = {MarkovMachine};

