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

    for (let i = 0; i < this.words.length; i++) {
      let key = this.words[i];
      let value = this.words[i + 1] || null;

      if (markovChain[key]){
        if (!(markovChain[key].includes(value))){
          markovChain[key].push(value);
        }
      } else {
        markovChain[key] = [value]
      }
    }

    return markovChain;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let markovChain = this.chains;
    let key = this.words[0]
    let res = [];

    while (key !== null){
      let idx = Math.floor(Math.random() * markovChain[key].length);
      res.push(markovChain[key][idx])
      key = markovChain[key][idx]
    }

    return res.join(" ");
  }
}

module.exports = {MarkovMachine};

