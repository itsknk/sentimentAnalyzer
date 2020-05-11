## sentimentAnalyzer
A web app built on node.js that returns the underlying emotion from a given text.

Check the demo here: https://sentiment-analyzer-node.herokuapp.com/

## Required Dependencies
As it requires express, it's better to make an express-boilerplate using `npm install -g express-generator`
Then type `express sentimentAnalyzer --no-view` to create the express boilerplate folder.
Now open sentimentAnalyzer directory, run `npm install` and install the following dependencies:
1. Nodemon - `npm install --save nodemon` and add `"dev": "nodemon ./bin/www"` under scripts inside package.json file.
2. Natural - `npm install --save natural`.
3. Apos to Lex - `npm install --save apos-to-lex-form`.
4. Spelling-Corrector - `npm install --save spelling-corrector`.
5. StopWord - `npm install --save stopword`. 

## Usage
1. Clone the repository or Download the zip file.
2. Open the folder and copy the files.
3. Now replace the app.js from this folder to the sentimentAnalyzer director created.
4. Navigate to routes folder and paste the nlp.js file.
4. Now open the public folder and replace the contents of index.html from this repo and paste the index.js file in the javascripts directory.
5. Fire up the terminal and run `npm run dev` and navigate to localhost:3000.

## License
[MIT](https://github.com/itsknk/sentimentAnalyzer/blob/master/LICENSE)
