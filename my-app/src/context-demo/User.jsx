import UserContext from './UserContext';

const User = ({children}) => {
    return (
        <UserContext.Provider value="Koushik D K">
            {children}
        </UserContext.Provider>
    )
}

export default User;