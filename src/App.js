import React, { useState } from 'react';

export default function App() {
    console.log("start");

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: "User1"
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    
    
    return (
        <main>

        </main>
    )
}