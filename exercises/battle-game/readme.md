## Grant Battle Game Testing Demo

### To Set up Tests
1. In the terminal, run `npm init`  (Accept all defaults.)
2. Run `npm install --save-dev karma jasmine karma-jasmine karma-chrome-launcher`
3. Run `karma init`  (Select jasmine for framework, Chrome for browser, and src/*.js and test/*.js for location of your files. For everything else, use the defaults.)
4. Finally run `karma start` to kick off the tests. It will automatically re-run them every time you save a file.