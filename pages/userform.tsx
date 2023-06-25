import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";

const LoginForm = () => {
	return (
		<Box w="full" maxW="md" mx="auto">
			<Heading textAlign="center" mb={6}>
				Sign In
			</Heading>
			<Box borderWidth="1px" borderRadius="lg" p={8}>
				<Stack spacing={4}>
					<FormControl>
						<FormLabel>Email address</FormLabel>
						<Input type="email" placeholder="Enter your email address" />
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input type="password" placeholder="Enter your password" />
					</FormControl>
					<Button colorScheme="blue" type="submit">
						Sign In
					</Button>
				</Stack>
			</Box>
			<Text mt={4} textAlign="center">
				Don't have an account?{" "}
				<Box as="a" color="blue.500" href="#">
					Sign up
				</Box>
			</Text>
		</Box>
	);
};

export default LoginForm;
