import {FaSpinner} from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function UserPicker() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/users');
            const data = await response.json();
            setUsers(data);
        }
        fetchData();
    }, []);

    if (users.length === 0) {
        return <FaSpinner className='icon-loading'/>
    }

    return (
        <select>
            {users.map(user => <option key={user.id}>{user.name}</option>)}
        </select>
    )
}