import { Box, Text } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

import { ITask } from '../../@types/Task.interface';
import { ItemTypes } from '../../ItemTypes';
import TaskCard from '../TaskCard/TaskCard';

interface IProps {
	title: string;
	tasks?: ITask[];
	changeTask: (taskId: number, columnName: string) => void;
}

export const Column = ({ title, tasks, changeTask }: IProps) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.BOX,
		drop: () => ({ title: title }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;

	const borderColor = isActive ? 'green' : 'lightgray';

	return (
		<Box ref={drop} p="5px" minW="30%" borderInline={`1px solid ${borderColor}`} maxW="30%">
			<Text mb="32px" size="sm" color="gray">
				{title.toUpperCase()}
			</Text>
			{tasks && tasks.map((task) => <TaskCard changeTask={changeTask} key={task.id} {...task} />)}
		</Box>
	);
};
