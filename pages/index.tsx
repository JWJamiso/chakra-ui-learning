import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "./details";
import YourCart from "./yourcart";
import LoginForm from "./userform";

const IndexPage = () => {
	return (
		<Container maxW="container.xl" p={0}>
			<Flex h={{ base: "auto", md: "100vh" }} py={[0, 10, 20]} direction={{ base: "column-reverse", md: "row" }}>
				<LoginForm />
				{/* <Details />
				<YourCart /> */}
			</Flex>
		</Container>
	);
};

export default IndexPage;
