import {
	Heading,
	Text,
	VStack,
	HStack,
	Button,
	AspectRatio,
	Image,
	Stack,
	Divider,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";

const YourCart = () => {
	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
	return (
		<VStack w="full" h="full" p={10} spacing={10} alignItems={"flex-start"} bg={bgColor}>
			<VStack spacing={3} alignItems={"flex-start"}>
				<Heading size="2xl">Your Cart</Heading>
				<Text>
					If your price is too hard on your eyes,
					<br />
					<Button onClick={toggleColorMode} variant="link" colorScheme="black">
						Try changing the color scheme
					</Button>
				</Text>
			</VStack>
			<HStack spacing={6} alignItems="center" w="full">
				<AspectRatio ratio={1} w={24} borderRadius="md" overflow="hidden">
					<Image src="/images/skateboard.jpg" alt="Skateboard" />
				</AspectRatio>
				<Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center">
					<VStack spacing={0} alignItems={"flex-start"}>
						<Heading size="md" textAlign="end">
							Penny Board
						</Heading>
						<Text>PNYCOMP27541</Text>
					</VStack>
					<Heading size="md" textAlign="end">
						$119.00
					</Heading>
				</Stack>
			</HStack>
			<VStack spacing={4} alignItems="stretch" w="full">
				<HStack justifyContent="space-between">
					<Text>Subtotal</Text>
					<Text fontWeight="bold">$119.00</Text>
				</HStack>
				<HStack justifyContent="space-between">
					<Text>Shipping</Text>
					<Text fontWeight="bold">$19.99</Text>
				</HStack>
				<HStack justifyContent="space-between">
					<Text>Taxes</Text>
					<Text fontWeight="bold">$23.80</Text>
				</HStack>
			</VStack>
			<Divider />
			<HStack justifyContent="space-between" w="full">
				<Text>Total</Text>
				<Heading size="lg">$162.79</Heading>
			</HStack>
		</VStack>
	);
};

export default YourCart;
