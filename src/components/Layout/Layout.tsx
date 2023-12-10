import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Aside from '../Aside/Aside';

export const Layout = () => {
	return (
		<Flex>
			<Aside />
			<Box w="100%" bg="#F2F4F7">
				<Outlet />
			</Box>
		</Flex>
	);
};
