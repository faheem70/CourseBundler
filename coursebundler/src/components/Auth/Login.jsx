import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent={"center"} spacing={'16'}>

                <Heading children={'Welcome To Bundler'} />

                <form style={{ width: '100%' }}>
                    <Box>
                        <FormLabel htmlFor='email' children='Email Address' />
                        <Input required id='email' value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='example@gmail.com'
                            type='email'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box>
                        <FormLabel htmlFor='password' children='Password' />
                        <Input required id='password' value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='********'
                            type='password'
                            focusBorderColor='yellow.500'
                        />
                    </Box>

                    <Box>
                        <Link to='/forgetpassword'>
                            <Button fontSize={'sm'} variant={'link'}>Forgot Pssword?</Button>
                        </Link>

                    </Box>
                    <Button colorScheme='yellow' my={'4'} type='submit'>Login</Button>
                    <Box my={'4'}>
                        New User?{' '}
                        <Link to='/signup'>
                            <Button colorScheme='yellow' variant={'link'}>Sign Up</Button>{' '} here
                        </Link>

                    </Box>

                </form>
            </VStack>

        </Container>
    )
}

export default Login