import { createContext } from 'react';

const UserContext = createContext();

//the children prop represents each component we provide context to
const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider>

        </UserContext.Provider>
    );
};

export {
    UserProvider,
}