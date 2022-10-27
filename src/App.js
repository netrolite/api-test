import React, { useState } from 'react';

export default function App() {

        let api = fetch("https://reqres.in/api/users")
        .then(res => res.json)
        .then(res => console.log(res))
    
    
    return (
        <main>

        </main>
    )
}