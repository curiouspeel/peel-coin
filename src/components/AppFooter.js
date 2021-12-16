import '../App.css'
import React from 'react';

function AppFooter(props) {
    return (
        <footer className="App-footer">
            <p>&copy; {props.author}</p>
        </footer>
    );
}

export default AppFooter;