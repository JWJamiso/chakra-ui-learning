import {
	VStack,
	Heading,
	Text,
	SimpleGrid,
	GridItem,
	Input,
	Select,
	FormControl,
	FormLabel,
	Checkbox,
	Button,
	useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
	const colSpan = useBreakpointValue({ base: 2, md: 1 });
	return (
		<VStack w="full" h="full" p={10} spacing={10} alignItems={"flex-start"}>
			<VStack spacing={3} alignItems={"flex-start"}>
				<Heading size="2xl">Your Details</Heading>
				<Text>If you already have an account, click here to login</Text>
			</VStack>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input placeholder="John" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input placeholder="Jamison" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input placeholder="15815 S Lakewood Pkwy West" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input placeholder="Phoenix" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Country</FormLabel>
						<Select placeholder="Select country">
							<option value="usa">United States</option>
							<option value="ca">Canada</option>
							<option value="mx">Mexico</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<Checkbox defaultChecked>Use Billing Address as Shipping</Checkbox>
				</GridItem>
				<GridItem colSpan={2}>
					<Button w="full">Place Order</Button>
				</GridItem>
			</SimpleGrid>
		</VStack>
	);
};

export default Details;
