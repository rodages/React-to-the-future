import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Nav} from './components/bottom-nav'
import {Home} from './screens/home'
import Example from './components/Example';
import {useState} from 'react'


function App() {
  const [data, setData]=useState("empty component")
  return (
    <ChakraProvider theme={theme}>
        <Example thiscouldbeanymeaningfulname={"the text that I am passing"}  data={data} setData={setData} />
        <Home />
        <Nav />
    </ChakraProvider>
  );
}

export default App;
