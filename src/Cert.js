import moment from 'moment'
import {
    Box,
  Text,
  VStack,
  HStack
  } from "@chakra-ui/react";
  
const Cert = ({ data }) => {
  return data.map((item) => {
    return (
      <VStack spacing="15px"   display="flex"  d='column' key={item.id} w='auto' border="1px" borderColor="gray.200" m='10'> 
        <HStack fontSize='1.4em'>
        <Text >First Name:</Text> 
        <Text fontWeight='800'>{item.Firstname}</Text>
        </HStack>
        <HStack fontSize='1.4em'>
        <Text >Other Names:</Text> 
        <Text fontWeight='800'>{item.Othernames}</Text>
        </HStack>
        <HStack fontSize='1.4em'>
        <Text >Degree Type:</Text> 
        <Text fontWeight='800'>{item.type}</Text>
        </HStack>
        <HStack fontSize='1.4em'>
        <Text >Department:</Text> 
        <Text fontWeight='800'>{item.Department}</Text>
        </HStack>
        <HStack fontSize='1.4em'>
        <Text >Honor:</Text> 
        <Text fontWeight='800'>{item.Honor}</Text>
        </HStack>
        <HStack fontSize='1.4em'>
        <Text >Date Issued:</Text> 
        <Text fontWeight='800'>{moment(item.Date).format("MMMM Do YYYY")}</Text>
        </HStack>
        <Box d='flex' justifyContent='center'><img src={`http://localhost:1337${item.Image.url}`} alt=""/> </Box>
      </VStack>
    );
  });
};

export default Cert;
