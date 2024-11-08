import React, { ReactNode } from 'react'
interface CreateDataStoreProps{
    name: string;
    email: string;
}
interface ContextProviderProps{
    children: ReactNode;  // The children components to render within the context provider.  These components can consume the context data.  For example, a component that displays a user's name and email.  The context data is passed as a prop to these components.  The context data is passed as a prop to these components.  For example, a component that displays a user's name and email.  The context data is passed as a prop to these components.  For example, a component that displays a user's name and email.  The context data is passed as a prop to these components.  For example, a component that displays a user's name and email.  The context data is passed as a prop to these components.  For example, a component that displays a user's name and email.  The context data is passed as a prop to these components.  For example, a component that displays a user's name and email.  The context data
}

export const CreateDataStore = React.createContext<CreateDataStoreProps|undefined>(undefined)
const ContextProvider : React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <CreateDataStore.Provider value={{ name: 'somnath', email: 'somnath.more19@vit.edu' }}>
        {children}
    </CreateDataStore.Provider>
  )
}

export default ContextProvider