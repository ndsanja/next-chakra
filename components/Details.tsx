import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
const Details = () => {
  const colSpanVal = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" spacing={10} p={10} alignItems="flex-start">
      <VStack space={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have a account, please sign in here !</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpanVal}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Jhon" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanVal}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Jl. Tanjung Srengat Blitar" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanVal}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Jakarta Pusat" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanVal}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="indonesia">Indonesia</option>
              <option value="malaysia">Malaysia</option>
              <option value="singapura">Singapura</option>
              <option value="thailand">Thailand</option>
              <option value="philipina">Phililphina</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to Billing Addreses</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" variant="primary">
            Primary Button
          </Button>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" variant="secondary">
            Secondary Button
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default Details;
