import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../components/data/productdata.js';
import { Box, Heading, Flex, Text, Image } from '@chakra-ui/react';

const RelatedProducts = () => {
  // Get the current product's tags from the URL
  const currentProductId = window.location.pathname.split('/')[2];
  // from the id of the current product, get the product object
  const currentProduct = products.find(product => product.id === currentProductId);
  // from the product object, get the tags
  const currentProductTags = currentProduct.tags;

  // Map through all products and return the ones that have the same tags as the current product
  const relatedProducts = products.filter(product => {
    return product.id !== currentProductId && product.tags && product.tags.some(tag => currentProductTags.includes(tag));
  });


  return (
    <Box justifyContent={'center'} >
      <Heading as="h2" size="lg">Related Products:</Heading>
      <Flex flexWrap="wrap" alignContent={'center'} justifyContent={'left'}>
        {relatedProducts.map(product => (
            <Link to={`/products/${product.id}`}>
          <Box key={product.id} flexBasis={{ base: '50%', md: '25%' }}  m={2} border='1px' borderColor='gray.200' maxWidth={250} maxHeight={350}>
          <Image src={product.imageUrl} alt={product.name} width="100%" height="225px" />
            {product.name}
            <Flex>
            <Text fontSize="5xl" fontWeight="900">
                {product.salePrice? product.salePrice: product.price}
              </Text> 
            <Text fontSize="3xl" fontWeight="600">
                AED
              </Text>
                  </Flex>     </Box>
              
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default RelatedProducts;
