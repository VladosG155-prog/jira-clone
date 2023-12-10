import { Badge } from '@chakra-ui/react';

interface IProps {
	title: string;
	color: string;
}

export const Tag = ({ title, color }: IProps) => {
	return (
		<Badge borderRadius="6px" py="6px" px="12px" w="auto" colorScheme={color}>
			{title}
		</Badge>
	);
};
