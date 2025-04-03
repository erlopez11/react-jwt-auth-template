import { useContext } from 'react';
import { userContext } from '../../contexts/UserContext';

const Dashboard = () => {
    return (
        <main>
            <h1>Welcome, {user.username}</h1>
            <p>This is the dashboard where you can see a list of all the users.</p>
        </main>
    );
};

export default Dashboard;