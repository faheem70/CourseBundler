import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading
                textAlign={['center', 'left']}
                maxW={'200px'}
                size={'sm'}
                fontFamily={'sans-serif'}
                noOfLines={3}
                children={title}
            />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text children={'Creator :'} fontWeight={'bold'} textTransform={'uppercase'} />
                <Text children={creator} fontFamily={'body'} textTransform={'uppercase'} />
            </HStack>
            <Heading
                textAlign={'center'}
                size={'xs'}
                children={`Lectures - ${lectureCount}`}
                textTransform={'uppercase'} />
            <Heading

                size={'xs'}
                children={`Views - ${views}`}
                textTransform={'uppercase'} />
            <Stack direction={['column', 'row']}
                alignItems={'center'}>
                <Link to={`/course/${id}`}>
                    <Button colorScheme='yellow'>Watch Now</Button>
                </Link>
                <Button variant={'ghost'} colorScheme='yellow' onClick={() => addToPlaylistHandler}>Add To Playlist</Button>
            </Stack>


        </VStack>
    )
}


const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    const addToPlaylistHandler = () => {
        console.log("Add To playlist")
    }
    const categories = [
        "App Development",
        "Web Development",
        "Data Structures & Algrithm",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science"
    ];

    return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading children='All Courses' m={'8'} />

            <Input value={keyword} onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search a course' type='text' focusBorderColor='yellow' />

            <HStack overflowX={'auto'} padding={'8'} css={{ '&:: -webkit-scrollbar': { display: 'none' } }}>
                {
                    categories.map((item, index) => (
                        <Button colorScheme='yellow' variant={'ghost'} key={index} onClick={() => setCategory(item)} minW={'60'}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>

            <Stack
                direction={['column', 'row']}
                flexWrap={'wrap'}
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}

            >
                <Course
                    title={"sample"}
                    description={'sample'}
                    views={33}
                    imageSrc={"https://www.totalphase.com/media/blog/2022/11/960x0.jpg"}
                    id={'sample'}
                    creator={'saomle p'}
                    lectureCount={23}
                    addToPlaylistHandler={addToPlaylistHandler}

                />

            </Stack>

        </Container>
    )
}

export default Courses