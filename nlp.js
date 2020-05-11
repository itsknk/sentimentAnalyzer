const express = require('express');
const natural = require('natural');
const aposToLexForm = require('apos-to-lex-form');
const SpellCorrector = require('spelling-corrector');
const sw = require('stopword');

const router = express.Router();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

router.post('/s-analyzer', function(req, res, next) {
  const { entertext } = req.body; //text from frontend
  const {WordTokenizer} = natural;
  const tokenizer = new WordTokenizer();
  // converts apos to normal i.e, you're to you are
  const lexedReview = aposToLexForm(entertext); 
  // converts all upper case to lower
  const casedReview = lexedReview.toLowerCase();
  // removes all non-alphabets and special characters 
  const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, ''); 
  //breaks the entered text into individual elements
  const tokenizedReview = tokenizer.tokenize(alphaOnlyReview); 
  tokenizedReview.forEach((word, index)=> {
  	tokenizedReview[index] = spellCorrector.correct(word); //checks for spelling mistakes and considers correct text
  });
  //removes stopwords like or, but etc as they don't have any effect on sentiment
  const filteredReview = sw.removeStopwords(tokenizedReview); 

  const {SentimentAnalyzer, PorterStemmer} = natural;
  const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
  const analysis = analyzer.getSentiment(filteredReview);
  res.status(200).json({analysis});

});

module.exports = router;


