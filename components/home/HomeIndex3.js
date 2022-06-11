import React from 'react';

import product from '../../product.json';
import NextLink from 'next/link';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
import homeStyle from './home.module.css';
const HomeIndex3 = () => {
  const dataProductHome = product.products.filter(
    (prod) => prod.forHome === true
  );

  return (
    <Flex
      width="100%"
      bg="blackAlpha.100"
      minHeight="100vh"
      maxHeight={['none', 'none', 'none', '100vh']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Flex flexDirection="column" position="relative" flexBasis="35%">
        {dataProductHome.map((product, index) => (
          <Flex
            maxWidth="100%"
            key={index}
            display={product.id === 10 ? 'none' : 'flex'}
            backgroundColor={product.id === 11 ? '#d62828' : 'orange.500'}
            h="50%"
            justifyContent="center"
            overflow="hidden"
          >
            <Flex
              position="absolute"
              textColor="white"
              textAlign="start"
              flexDirection="column"
              left="0"
              fontSize={['20px', '26px']}
            >
              <Text backgroundColor="black" padding="10px 20px">
                {product.title}
              </Text>
              <Text
                width="100px"
                textAlign="center"
                backgroundColor="black"
                display="inline"
                padding="5px 10px"
                fontSize="16px"
              >
                ${product.price}
              </Text>
            </Flex>
            <NextLink href={`/product/${product.id}`}>
              <Link
                maxWidth="100%"
                display="flex"
                alignitem="center"
                justifyContent="center"
                className={homeStyle.imageHome}
              >
                <Image width="300px" src={product.image} alt={product.title} />
              </Link>
            </NextLink>
          </Flex>
        ))}
      </Flex>
      <Flex flexBasis="72%" h="100vh" position="relative" overflow="hidden">
        <Flex
          position="absolute"
          textColor="white"
          textAlign="start"
          flexDirection="column"
          left="0"
          fontSize={['20px', '22px', '26px']}
        >
          <Text backgroundColor="black" padding="15px 25px">
            {dataProductHome[1].title}
          </Text>
          <Text
            backgroundColor="black"
            textAlign="center"
            display="inline"
            fontSize="18px"
            padding="10px 20px"
            width="100px"
          >
            ${dataProductHome[1].price}
          </Text>
        </Flex>
        <Box
          width="100%"
          display="flex"
          alignitem="center"
          justifyContent="center"
        >
          <NextLink href={`/product/${dataProductHome[1].id}`}>
            <Link
              display="flex"
              alignitem="center"
              justifyContent="center"
              className={homeStyle.imageHome}
            >
              <Image
                width={['300px', '100%']}
                src={dataProductHome[1].image}
                alt={dataProductHome[1].title}
              />
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeIndex3;
