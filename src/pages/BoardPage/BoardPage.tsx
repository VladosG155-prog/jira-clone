import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ITask } from '../../@types/Task.interface';
import { Column } from '../../components/Column/Column';

const tags = [
	{ title: 'Design', color: 'gray' },
	{ title: 'Development', color: 'green' },
];
const tasksInitial: ITask[] = [
	{
		id: 1,
		title: 'Make a Kanban App',
		date: '12th Jan',
		authorName: 'Prahlad',
		description: 'Please use trello and designs in Dribbble as reference. And carry on...',
		tags: tags,
		columnName: 'To Do',
	},
];

export const BoardPage = () => {
	const [tasks, setTasks] = useState(tasksInitial);

	const changeTask = (taskId: number, columnName: string): void => {
		const copyTasks = [...tasks];

		const foundedCard = copyTasks.findIndex((task: ITask) => task.id === taskId);

		copyTasks[foundedCard].columnName = columnName;

		setTasks(copyTasks);
	};

	const getTaskByColumn = (tasks: ITask[], columnName: string) => {
		return tasks.filter((task) => task.columnName === columnName);
	};

	return (
		<Flex p="80px" justifyContent="space-between" w="100%">
			<DndProvider backend={HTML5Backend}>
				<Column
					title="To Do"
					changeTask={changeTask}
					tasks={getTaskByColumn(tasks, 'To Do')}></Column>
				<Column
					title="Doing"
					changeTask={changeTask}
					tasks={getTaskByColumn(tasks, 'Doing')}></Column>
				<Column
					title="Done"
					changeTask={changeTask}
					tasks={getTaskByColumn(tasks, 'Done')}></Column>
			</DndProvider>
		</Flex>
	);
};
