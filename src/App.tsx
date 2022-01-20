import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './pages/Login';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';

export const App = () => {

  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard children={undefined} />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
