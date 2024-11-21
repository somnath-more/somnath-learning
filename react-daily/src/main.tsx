import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import ContextProvider from './components/hooks/UseContext/ContextProvider/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContextProvider> */}
      <App/>
    {/* </ContextProvider> */}

  </StrictMode>,
)
