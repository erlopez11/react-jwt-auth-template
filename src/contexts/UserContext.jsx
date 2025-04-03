import { createContext, useState } from 'react';

const UserContext = createContext();

//the children prop represents each component we provide context to
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user , setUser };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export {
    UserProvider,
    UserContext,
}