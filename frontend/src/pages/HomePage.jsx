import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Container maxW="container.x1" py={12}>
            <VStack spacing={8}>
                
                <Text fontSize={"30"} fontWeight={"bold"}
                        bgGradiant={"linear(to-r, cyan.400, blue.500)"}
                        bgClip={"text"} texAlign={"center"}>
                        
                        Current Products 🚀
                </Text>

                <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
                    No products found. {" "}

                    <Link to={"/create"}>
                        <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
                            Create a new product
                        </Text>
                    </Link>

                </Text>
            </VStack>
        </Container>
    )
}
export default HomePage;