import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Type2 = () => {
  const filteredProducts = products.filter((product) => product.portType === 'type2');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box>
      <Helmet>
        <title>Type 2 EV Chargers | MEV Charger </title>
        <meta
          name="description"
          content="Explore our selection of Type 2 electric vehicle chargers. MEV Charger offers reliable and high-performance chargers for Type 2 vehicles."
        />
        <meta name="keyword" content='Tesla fast chargers'/>
        <meta property="og:title" content="Type 2 EV Chargers" />
        <meta
          property="og:description"
          content="Explore our selection of Type 2 electric vehicle chargers. MEV Charger offers reliable and high-performance chargers for Type 2 vehicles."
        />
        <meta property="og:url" content="https://en.mevcharger.com/products/type2" />        
      </Helmet>
      <Button colorScheme='green' m={2} >
        <Link href="/pick">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5} ml={6}>
      <Link href={`./${product.id}`}> 
          <Image src={product.imageUrl} alt={product.name} boxSize="300px" objectFit="cover" />
          </Link>
          <Box ml={4}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text>AED {product.price}</Text>
            {product.salePrice && (
              <Text as="s" color="gray.500" ml={2}>
                AED {product.salePrice}
              </Text>
            )}
            <Text mb={2}>{product.description}</Text>
            <Link href="https://wa.me/971501679410">
              <Button colorScheme="green" width="half">
                Order on WhatsApp
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Type2;
