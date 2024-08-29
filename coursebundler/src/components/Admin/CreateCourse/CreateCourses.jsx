import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar';
import axios from 'axios';

const CreateCourses = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [imagePrev, setImagePrev] = useState('');

    const categories = [
        "App Development",
        "Web Development",
        "Data Structures & Algorithm",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science"
    ];

    const changeImageHandler = (e) => {
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
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('createdBy', createdBy);
        formData.append('file', image);

        try {
            const { data } = await axios.post('http://localhost:4000/api/v1/createcourse', formData, {
                withCredentials:true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(data.message);
            setTitle('');
            setDescription('');
            setCreatedBy('');
            setCategory('');
            setImage(null);
            setImagePrev('');
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Container py={'16'}>
                <form onSubmit={submitHandler}>
                    <Heading textTransform={'uppercase'} my={16} textAlign={['center', 'left']}>
                        Create Course
                    </Heading>
                    <VStack m={'auto'} spacing={'8'}>
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder='Title'
                            type='text'
                            focusBorderColor='purple.300'
                        />
                        <Input
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder='Description'
                            type='text'
                            focusBorderColor='purple.300'
                        />
                        <Input
                            value={createdBy}
                            onChange={e => setCreatedBy(e.target.value)}
                            placeholder='Creator Name'
                            type='text'
                            focusBorderColor='purple.300'
                        />
                        <Select
                            focusBorderColor='purple.300'
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value={""}>Category</option>
                            {categories.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </Select>

                        <Input
                            accept='image/*'
                            css={{
                                '&::file-selector-button': {
                                    color: 'purple',
                                }
                            }}
                            required
                            id='chooseAvatar'
                            type='file'
                            focusBorderColor='purple.300'
                            onChange={changeImageHandler}
                        />
                        {imagePrev && (
                            <Image src={imagePrev} boxSize='64' objectFit={'contain'} />
                        )}
                        <Button w={'full'} colorScheme='purple' type='submit'>
                            Create
                        </Button>
                    </VStack>
                </form>
            </Container>
            <Sidebar />
        </Grid>
    );
}

export default CreateCourses;
