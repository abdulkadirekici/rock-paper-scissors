# Rock, Paper, Scissors!

A code playground.

## The game
  - Don't know it? See it on [wikipedia][1]
  - Player modes:
    - Player vs Computer
    - Computer vs Computer
  - Game modes:
    - Traditional
    - [Rock - Paper - Scissors - Lizard - Spock][2]

## Installing the game
  - Download this repository whichever way you prefer.
  - Install [Bower][3] if you don't have it already
  - Run `bower install` in the project root

## Running the game
Point the browser to /index.html

## Running the test specs
Point the browser to the /spec/index.html

## TODO's
 - Highlight the winner
 - Make the weapons be displayed under each player box
 - Clean screen state after each game / offer a "New game" button
 - Improve tests coverage
 - Use new Backbone version's features such as the #listenTo + #remove to keep the application as clean as possible during its lifespan in the browser :)
 - Review code and see if adding some more comments could improve its readability

## Technologies used
Take a look at `component.json` for the current versions used.

For the app iteself:

  - Backbone.js
  - jQuery
  - Lo-Dash
  - Require.js
  - HTML 5 (some more semantic tags...)
  - CSS (bootstrapped by Twitter Bootstrap)

For development:

  - Jasmine
  - Bower
  - GIT
  - Markdown (this file :) )

 [1]: http://en.wikipedia.org/wiki/Rock-paper-scissors
 [2]: http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock
 [3]: https://github.com/twitter/bower
