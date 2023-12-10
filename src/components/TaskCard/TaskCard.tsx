import { Box, Stack, Text } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../ItemTypes';
import { Tag } from '../Tag/Tag';

interface IProps {
	title: string;
	date: string;
	authorName: string;
	description?: string;
	tags?: { title: string; color: string }[];
	messages?: string[];
}

interface DropResult {
	name: string;
}

const TaskCard = ({ title, date, authorName, description, tags }: IProps) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.BOX,
		item: { name },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult<DropResult>();
			if (item && dropResult) {
				alert(`You dropped ${item.name} into ${dropResult.name}!`);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));

	const opacity = isDragging ? 0.4 : 1;

	return (
		<Box
			ref={drag}
			display="flex"
			borderRadius="8px"
			opacity={opacity}
			boxShadow="xs"
			flexDir="column"
			bg="white"
			p="20px">
			<Text size="lg" mb="6xp">
				{title}
			</Text>
			<Box mb="16px" display="flex" alignItems="center">
				<Text size="sm" color="lightgray">
					{date}
				</Text>
				<Box
					width="4px"
					height="4px"
					bg="lightGray"
					display="block"
					marginX="10px"
					borderRadius="100%"
				/>
				<Text size="sm" color="lightgray">
					Created by{' '}
					<Text color="gray" as="span">
						{authorName}
					</Text>
				</Text>
			</Box>
			<Text size="sm" mb="12px" color="lightgray">
				{description}
			</Text>
			<Stack direction="row">
				{tags && tags.map((tag) => <Tag key={tag.title} title={tag.title} color={tag.color} />)}
			</Stack>
		</Box>
	);
};
export default TaskCard;
