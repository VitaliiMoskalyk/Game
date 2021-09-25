'use strict';
/**
 * Create Maze game
 * Game starts when mouse croosses green line
 * Game ends when mouse croosses light green field
 * User wins when mouse croosses light red line
 */

const refs = {
    start: document.querySelector('.start'),
    finish: document.querySelector('.finish'),
    indicator: document.querySelector('#indicator'),
    maze: document.querySelector('#maze'),
};

let isPlayingGame = false;

const startingGame = refs.start.addEventListener('mouseover', beginningGame);
const finishingGame = refs.finish.addEventListener('mouseover',finishGame);
function beginningGame(ev) {
    if (ev.target.classList.contains('block')) return;
    isPlayingGame = true;
    refs.indicator.textContent = 'Is Playing'; 
};

function finishGame() {
    if (isPlayingGame) {
       isPlayingGame = false;
        refs.indicator.textContent = 'You Win :)'; 

    }
    
};

refs.maze.addEventListener('mouseover', blockEventGame);


function blockEventGame(ev) {
    if (isPlayingGame && ev.target.classList.contains('block')) {
        isPlayingGame = false;
        return refs.indicator.textContent = 'You LOSE';
    }

};
refs.maze.addEventListener('mouseleave', mouseMazeLeaveEvent);

function mouseMazeLeaveEvent ()  {
    if (isPlayingGame) {
        isPlayingGame = false;
        return refs.indicator.textContent = 'Pause';
    }

};