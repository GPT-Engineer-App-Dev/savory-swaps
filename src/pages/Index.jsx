import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    title: "Chicken Tikka Masala",
    image: "/images/chicken-tikka-masala.jpg",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
  },
  {
    title: "Beef Stroganoff",
    image: "/images/beef-stroganoff.jpg",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="lg">Discover and share your favorite recipes!</Text>
        <Button as={RouterLink} to="/submit-recipe" colorScheme="teal" size="lg">Submit a Recipe</Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;