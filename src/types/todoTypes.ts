
export enum TASK_STATUS {
    Open, inProgress, Done
}

export interface BaseTodo{
    title: string;
    description: string;
}

export interface Itodo extends BaseTodo{ 
    id: string;
    status: TASK_STATUS;
    creation_date: number;
    update_date: number|null;
}
