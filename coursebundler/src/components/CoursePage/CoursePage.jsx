import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import intro from '../../assets/video/intro.mp4';

const CoursePage = () => {
    const [lectureNumber, setLecturNumber] = useState(0);

    const lectures = [
        {
            _id: 'sadfvdc1',
            title: 'sample1',
            description: 'sample sescfr seeekdk dkdfd',
            video: {
                url: 'dfsldd',
            },
        },
        {
            _id: 'sadfvdc2',
            title: 'sample2',
            description: 'sample sescfr seeekdk dkdfd',
            video: {
                url: 'dfsldd',
            },
        },
        {
            _id: 'sadfvdc2',
            title: 'sample2',
            description: 'sample sescfr seeekdk dkdfd',
            video: {
                url: 'dfsldd',
            },
        },
    ];

    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList='nodownload noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                    src={intro}
                ></video>
                <Heading m='4' children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading m='4' children='Description' />
                <Text m={'4'} children={lectures[lectureNumber].description} />
            </Box>
            <VStack>
                {lectures.map((element, index) => (
                    <button
                        onClick={() => setLecturNumber(index)}
                        key={element._id}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            textAlign: 'center',
                            margin: 0,
                            borderBottom: '1px solid rgba(0,0,0,0.2)',
                        }}
                    >
                        <Text noOfLines={1}>
                            #{index + 1} {element.title}
                        </Text>
                    </button>
                ))}
            </VStack>
        </Grid>
    );
};

export default CoursePage;
