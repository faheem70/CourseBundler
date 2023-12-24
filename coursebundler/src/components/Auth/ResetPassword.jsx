import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');

    const params = useParams();
    console.log(params.token);

    return (
        <Container py={'16'} h={'90vh'}>
            <form>
                <Heading children='Reset Password'
                    my={'16'}
                    alignItems={'center'}
                    textTransform={'uppercase'}
                    textAlign={['center', 'left']}
                />
                <VStack spacing={'8'}>
                    <Input required value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='password'
                        type='password'
                        focusBorderColor='yellow.500'
                    />
                    <Button type='submit' colorScheme='yellow'>Reset Password</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ResetPassword