import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { RiDeleteBin7Fill } from "react-icons/ri"
const Profile = () => {
    const user = {
        name: "Maaz",
        email: "maaz@gmail.com",
        createdAt: String(new Date().toISOString()),
        subscriptions: {
            status: "not defined"
        },
        playlist: [
            {
                course: "set",
                poster: "set"
            }
        ]
    };
    const removeFromPlaylisHandler = id => {
        console.log(id);
    }
    const changeSubmitHandler = (e, image) => {
        e.preventDefault();
        console.log(image);
    }
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Container>
            <Heading children="Profile" m="8" textTransform={'uppercase'} />
            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '12']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button colorScheme='yellow' variant={'ghost'} onClick={onOpen}>Change Photo</Button>

                </VStack>
                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text children='Name' fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children='Email' fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children='CreatedAt' fontWeight={'bold'} />
                        <Text children={user.createdAt.split("T")[0]} />
                    </HStack>
                    {user.role !== 'admin' && (
                        <HStack>
                            <Text children="Subscription" fontWeight={'bold'} />
                            {user.subscriptions.status === 'active' ? (
                                <Button color={'yellow.500'} variant="unstyled">Cancel Subscription</Button>
                            ) : (
                                <Link to='/subscribe'>
                                    <Button colorScheme='yellow'>Subscribe</Button>
                                </Link>
                            )}
                        </HStack>
                    )}

                    <Stack direction={['column', 'row']}
                        alignItems={'center'}>
                        <Link to={'/updateprofile'}>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to={'/changepassword'}>
                            <Button>Change Password</Button>
                        </Link>

                    </Stack>
                </VStack>
            </Stack>

            <Heading children="Playlist" size={'md'} my={'8'} />
            {
                user.playlist.length > 0 && (
                    <Stack
                        direction={['column', 'row']}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        p='4'
                    >
                        {
                            user.playlist.map((element,) => (
                                <VStack w='48' m={'2'} key={element.course}>
                                    <Image boxSize={'full'} objectFit='contain' src={element.poster} />

                                    <HStack >
                                        <Link to={`/course/${element.course}`}>
                                            <Button colorScheme='yellow' variant={'ghost'}>Watch Now</Button>
                                        </Link>
                                        <Button onClick={() => removeFromPlaylisHandler(element.course)}>
                                            <RiDeleteBin7Fill />
                                        </Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }
            <ChangePhotoBox changeSubmitHandler={changeSubmitHandler} isOpen={isOpen} onClose={onClose} />

        </Container>
    )
}

export default Profile;


export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
};
function ChangePhotoBox({ isOpen, onClose, changeSubmitHandler }) {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };
    const closeHandler = () => {
        onClose();
        setImage('');
        setImagePrev("");
    }
    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px) '} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeSubmitHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                                <Input type='file' css={{ '&::file-selector-button': fileUploadCss }} onChange={changeImage} />
                                <Button w='full' colorScheme='yellow' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr='3' onClick={closeHandler}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
