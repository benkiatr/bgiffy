import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

export default function Gif ({id,title,url})
{
    return  (
        <Box bg={'blue.100'} p={'2'} rounded={'md'}>
            <Image alt={title} w="auto" src={url} />
            <Text as={'small'}>{id}</Text>
            <Text as={'h4'}>{title}</Text>
        </Box>
    )
}