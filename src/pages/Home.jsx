import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to="/login">Homepage</Link>
        </div>
    );
}

export default Home;