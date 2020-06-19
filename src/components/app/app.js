import React from 'react';
import { Route } from 'react-router-dom';
import './app.css';
import Main from '../main/main';
import Game from '../game/game';

function App() {
    return (
        <div className="app">
            <Route path={"/main"} component={Main}></Route>
            <Route path={"/game"} component={Game}></Route>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default App;
export {calculateWinner};