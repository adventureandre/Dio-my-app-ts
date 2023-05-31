import React from 'react';
import {Box, Button, Card, Center, ChakraProvider, Input} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>
                   <Center> <h1>Faça o login</h1></Center>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                   <Center><Button colorScheme='teal' size='lg' width='100%' marginTop='5px' >Entrar</Button></Center>
                </Box>

            </Box>
        </ChakraProvider>
    );
}

export default App;
