import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
    // Here you would typically send the recipe data to a server
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl">Submit Your Recipe</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Recipe Name</FormLabel>
          <Input name="name" value={recipe.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="ingredients" isRequired>
          <FormLabel>Ingredients</FormLabel>
          <Textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
        </FormControl>
        <FormControl id="instructions" isRequired>
          <FormLabel>Instructions</FormLabel>
          <Textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Submit Recipe</Button>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;