import { Box, Text } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

import { ITask } from '../../@types/Task.interface';
import { ItemTypes } from '../../ItemTypes';
import TaskCard from '../TaskCard/TaskCard';

interface IProps {
	title: string;
	tasks?: ITask[];
}

export const Column = ({ title, tasks }: IProps) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.BOX,
		drop: () => ({ name: 'Dustbin' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;
	let backgroundColor = '#222';
	if (isActive) {
		backgroundColor = 'darkgreen';
	} else if (canDrop) {
		backgroundColor = 'darkkhaki';
	}

	return (
		<Box ref={drop} background={backgroundColor} maxW="30%">
			<Text mb="32px" size="sm" color="gray">
				{title.toUpperCase()}
			</Text>
			{tasks && tasks.map((task) => <TaskCard key={task.id} {...task} />)}
		</Box>
	);
};
