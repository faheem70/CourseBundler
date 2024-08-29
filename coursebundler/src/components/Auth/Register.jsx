import React, { useState } from 'react'
import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
};

const fileUploadStyle = {
    '&file-selector-button': fileUploadCss,
};

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const chnageImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', image);

        try {
            const { data } = await axios.post('http://localhost:4000/api/v1/createuser', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
             
            alert(data.message);
            navigate('/login');
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent={"center"} >

                <Heading children={'User Registeration'} />

                <form style={{ width: '100%' }} onSubmit={submitHandler}>
                    <Box my={'4'} justifyContent={'center'} display={'flex'}  >
                        <Avatar src={imagePrev} size={'xl'} />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name' />
                        <Input required id='name' value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='example'
                            type='text'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Address' />
                        <Input required id='email' value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='example@gmail.com'
                            type='email'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='password' children='Password' />
                        <Input required id='password' value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='********'
                            type='password'
                            focusBorderColor='yellow.500'
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
                        <Input accept='image/*'
                            css={fileUploadStyle}
                            required
                            id='chooseAvatar'
                            type='file'
                            focusBorderColor='yellow.500'

                            onChange={chnageImageHandler}


                        />


                    </Box>
                    <Button colorScheme='yellow' my={'4'} type='submit'>Sign Up</Button>
                    <Box my={'4'}>
                        User Already Exist?{' '}
                        <Link to='/login'>
                            <Button colorScheme='yellow' variant={'link'}>Login</Button>{' '} here
                        </Link>

                    </Box>

                </form>
            </VStack>

        </Container>
    )
}

export default Register