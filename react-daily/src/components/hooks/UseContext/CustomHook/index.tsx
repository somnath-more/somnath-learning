import { useContext } from 'react'
import { CreateDataStore } from '../ContextProvider';

const useUserContext = () => {
    const context=useContext(CreateDataStore);
    if(!context){
        throw new Error("useUserContext must be used within a CreateDateProvider")
    }
    return context;
}

export default useUserContext