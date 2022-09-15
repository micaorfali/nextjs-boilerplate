import {useState, createContext} from 'react';
const AppContext = createContext();

const AppProvider = ({
    defaultValue=[{name: 'Post', id:10}],
    children,
}) => {
    const [app, setApp] = useState([]);
    return(
        <AppContext.Provider value ={{app, setApp}}>
        {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};