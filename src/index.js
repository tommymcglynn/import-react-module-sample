import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from "minimal-react-boilerplate";

const title = 'Will the package work?';

const root = (
    <div>
    <div>{title}</div>
    <MyComponent/>
    </div>
);

ReactDOM.render(
    root,
    document.getElementById('app')
);