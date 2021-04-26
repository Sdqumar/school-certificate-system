import { useState } from "react";
import Cert from "./Cert";
import {
  Box,
  Input,
  Button,
  Heading,
  FormControl,
useToast
} from "@chakra-ui/react";

function App() {
  const [certnumber, setCettnumber] = useState("");
  const [data, setData] = useState([]);
  const toast = useToast()
  const onsubmit = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:1337/certificates?Certnumber=${certnumber}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        data.length === 0 && toast({
          title: "Certificate not found.",
          position: 'top',
          status: "error",
          variant: 'solid',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box w="auto" m="auto" mt="5">
      <Heading as="h2" size="xl" textAlign="center">
        Certificate Verification System
      </Heading>
      <Box maxW="50%" m="auto" mt="5">
        <form onSubmit={onsubmit}>
          <FormControl isRequired>
        
            <Input
              type="text"
              onChange={(e) => setCettnumber(e.target.value)}
            />
            <Button
              as="button"
              colorScheme="teal"
              variant="outline"
              m="auto"
              d="block"
              mt="5"
            >
              Check
            </Button>
          </FormControl>
        </form>
      </Box>
      {data.length !== 0 && <Cert data={data} />}
    </Box>
  );
}

export default App;
