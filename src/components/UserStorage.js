import { useState, useEffect } from "react";

export default function UserStorage() {
    const [user, setUser] = useState('Sanjiv');
    useEffect(() => {
        const localUser = window.localStorage.getItem('user');
        if (localUser) {
            setUser(localUser);
        }
    }, []);

    useEffect(() => {
       window.localStorage.setItem('user', user);
    }, [user])

    return (
        <select value={user} onChange={event => setUser(event.target.value)}>
            <option>Jason</option>
            <option>Akiko</option>
            <option>Clarisse</option>
            <option>Sanjiv</option>
        </select>
    )
}