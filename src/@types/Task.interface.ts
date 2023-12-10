export interface ITask {
	id: number;
	title: string;
	date: string;
	authorName: string;
	description?: string;
	tags?: { title: string; color: string }[];
	messages?: string[];
}
