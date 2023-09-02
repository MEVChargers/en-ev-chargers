'use client';
import {
    chakra,
    Stack,
    Flex,
    useColorModeValue,
    Container,
    List,
    ListIcon,
    ListItem
  } from '@chakra-ui/react';
  import { BsCheck } from 'react-icons/bs';
  import { products } from '../components/data/productdata.js';
  import React, { useState } from 'react';
  import {
    Box,
    Heading,
    Text,
    Img,
    Center,
    HStack,
  } from '@chakra-ui/react';
  import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
  import { Link } from 'react-router-dom';

  const data = {
    heading: 'Get the best AC EV chargers.',
    subHeading: 'We delivery chargers to anywhere in UAE, that includes Abu Dhabi, Dubai, and Sharjah.',
    features: ['Portable and Wallbox EV chargers', 'Fast charging', 'Easy to use', '3 Phase and Single Phase chargers', 'Up to 11 kW charging power per hour.'],
    image:
      'https://i.postimg.cc/Zq2w6yBG/continuous-line-art-green-energy-concept-sustainable-power-storage-electric-neon-rechargeable-supply.png'
  };
  
  const AC = () => {
    const [liked, setLiked] = useState(false);

    const handleScrollClick = () => {
        // Calculate the target scroll position, for example, scroll down by 200 pixels
        const targetScrollPosition = window.scrollY + 400;
    
        // Animate the scroll to the target position
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth', // Use smooth scrolling for a nicer effect
        });
      };

// filter products by function making them only chargers
const Achargers = products.filter((product) =>
  product.function === 'charger' && product.id < 24
);
    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }}> 
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Flex
     boxShadow={useColorModeValue(
        '0 4px 6px rgba(0, 128, 0, 0.6)', // Green shadow for light mode
        '0 4px 6px rgba(0, 128, 0, 0.9)'  // Green shadow for dark mode
      )}
      
          backgroundSize="cover"
          backgroundImage={`url(${data.image})`}
          p={{ base: 4, sm: 8 }}
          rounded="lg"
        >
          <Stack direction="column" spacing={5} textAlign="left" flexGrow={3}  color="white">
            <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              {data.heading}
            </chakra.h1>
            <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold">
              {data.subHeading}
            </chakra.h1>
            <List spacing={3}>
              {data.features.map((feature, index) => (
                <ListItem key={index}>
                  <ListIcon as={BsCheck} color="green.100" />
                  {feature}
                </ListItem>
              ))}
            </List>
            <Link
        d="inline-flex"
        alignItems="center"
        justifyContent="center"
        fontSize="md"
        fontWeight="500"
        p={3}
        lineHeight={1.2}
        h={10}
        w="max-content"
        rounded="md"
        textDecoration="none"
        color="white"
        bg="blackAlpha.400"
        shadow="lg"
        onClick={handleScrollClick} // Call the scroll function on button click
      >
        Click here to proceed
      </Link>
          </Stack>
        </Flex>
      </Container>
  {Achargers.map((product, index) => (
          <Center py={2}>
    <Box
      key={index}
      w="xs"
      rounded={'sm'}
      my={5}
      mx={[0, 5]}
      overflow={'hidden'}
      bg="white"
      border={'1px'}
      borderColor="black"
      boxShadow={('6px 6px 0 black')}>
      <Box h={'200px'} borderBottom={'1px'} borderColor="black"   display="flex"
  justifyContent="center" // Center horizontally
  alignItems="center" // Center vertically
  >
        <Img
          src={product.imageSource} 
          roundedTop={'sm'}
          objectFit="cover" 
          w={'145px'}
          alt={'EV Charger Dubai'}
        />
      </Box>
           
      <Box p={4}>
        <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
          <Text fontSize={'xs'} fontWeight="medium">
            {product.function} 
          </Text>
        </Box>
        <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
          {product.title} 
        </Heading>
        <Text color={'gray.500'} noOfLines={2}>
          {product.description} 
        </Text>
      </Box>
      <HStack borderTop={'1px'} color="black">
      <Flex
          p={3}
          alignItems="center"
          justifyContent={'space-between'}
          roundedBottom={'sm'}
          cursor={'pointer'}
          w="full">
        <Link to={`/products/${product.id}`} > 
      
          <Text fontSize={'md'} fontWeight={'semibold'}>
            View more
          </Text>
          <BsArrowUpRight />
        </Link>
        </Flex>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={'space-between'}
          roundedBottom={'sm'}
          borderLeft={'1px'}
          cursor="pointer"
          onClick={() => setLiked(!liked)}>
          {liked ? (
            <BsHeartFill fill="red" fontSize={'24px'} />
          ) : (
            <BsHeart fontSize={'24px'} />
          )}
        </Flex>
      </HStack>
    </Box>
</Center>
  ))}

      </Container>


    );
  };
  
  export default AC;
  