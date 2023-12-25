import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
    const courses = [{
        _id: "absjrhww87",
        poster: {
            url: "https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png"
        },
        title: 'ajeem@gmail.com',
        category: 'App Development',
        createdBy: "admin2",
        views: 123,
        numOfVideos: 14,

    }]
    const { isOpen, onClose, onOpen } = useDisclosure();
    const courseDetailsHandler = (userId) => {
        onOpen();
    }

    const deleteButtonHandler = (userId) => {
        console.log(userId);
    }
    const deleteLectureButtonHandler = (courseId, lectureId) => {
        console.log(courseId);
        console.log(lectureId);
    }
    const addLectureHandler = (e, courseId, title, description, video) => {
        e.preventDefault();
    }
    return (
        <Grid
            minH={'100vh'}
            templateColumns={['1fr', '5fr 1fr']}
        >
            <Box p={['0', '8']} overflowX={'auto'}>
                <Heading
                    textTransform={'uppercase'}
                    children="All Users"
                    my={16}
                    textAlign={['center', 'left']}
                />
                <TableContainer w={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>All available courses in the database</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Poster</Th>
                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th>Creator</Th>
                                <Th isNumeric>Views</Th>
                                <Th isNumeric>Lectures</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.map(item => (
                                    <Row
                                        courseDetailsHandler={courseDetailsHandler}
                                        deleteButtonHandler={deleteButtonHandler}
                                        key={item._id} item={item} />
                                ))
                            }
                        </Tbody>
                    </Table>

                </TableContainer>
                <CourseModal isOpen={isOpen} onClose={onClose}
                    id={'adbnfndfj'}

                    deleteButtonHandler={deleteLectureButtonHandler}
                    addLectureHandler={addLectureHandler}
                    courseTitle={'App course'}
                />

            </Box>
            <Sidebar />
        </Grid>
    )
}

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
    return (
        <>
            <Tr>
                <Td>#{item._id}</Td>
                <Td><Image src={item.poster.url} /></Td>
                <Td>{item.title}</Td>
                <Td textTransform={'uppercase'}>{item.category}</Td>
                <Td>{item.createdBy}</Td>
                <Td isNumeric>{item.views}</Td>
                <Td isNumeric>{item.numOfVideos}</Td>

                <Td isNumeric>
                    <HStack justifyContent={'flex-end'}>
                        <Button
                            onClick={() => courseDetailsHandler(item._id)}
                            variant={'outline'} color={'purple.500'}>View Lectures</Button>
                        <Button
                            onClick={() => deleteButtonHandler(item._id)}
                            color={'purple.600'}>

                            <RiDeleteBin7Fill />
                        </Button>


                    </HStack>
                </Td>
            </Tr>
        </>
    )
}