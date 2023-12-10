import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { BoardPage } from './pages/BoardPage/BoardPage';

const root = document.getElementById('root');

if (!root) throw new Error('root not found');

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/board',
				element: <BoardPage />,
			},
		],
	},
]);

container.render(
	<ChakraProvider>
		<RouterProvider router={router}></RouterProvider>
	</ChakraProvider>,
);
