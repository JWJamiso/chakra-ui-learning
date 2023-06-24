import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "./details";
import YourCart from "./yourcart";

const IndexPage = () => {
	return (
		<Container maxW="container.xl" p={0}>
			<Flex h="100vh" py={20}>
				<Details />
				<YourCart />
			</Flex>
		</Container>
	);
};

export default IndexPage;
