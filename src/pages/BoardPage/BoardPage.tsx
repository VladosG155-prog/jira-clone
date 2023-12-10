import { Flex } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ITask } from '../../@types/Task.interface';
import { Column } from '../../components/Column/Column';

const tags = [
	{ title: 'Design', color: 'gray' },
	{ title: 'Development', color: 'green' },
];
const tasks: ITask[] = [
	{
		id: 1,
		title: 'Make a Kanban App',
		date: '12th Jan',
		authorName: 'Prahlad',
		description: 'Please use trello and designs in Dribbble as reference. And carry on...',
		tags: tags,
	},
];

export const BoardPage = () => {
	return (
		<Flex p="80px" justifyContent="space-between" w="100%">
			<DndProvider backend={HTML5Backend}>
				<Column title="To Do" tasks={tasks}></Column>
				<Column title="Doing" tasks={tasks}></Column>
				<Column title="Done" tasks={tasks}></Column>
			</DndProvider>
		</Flex>
	);
};
