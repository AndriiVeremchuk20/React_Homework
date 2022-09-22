//Open, in Progress, Done
export enum TASK_STATUS {
    Open, inProgress, Done
}

/*
id
title
description
status
creation date
update date
*/
export interface IbaseTodo{
    title: string;
    description: string;
}

export interface Itodo extends IbaseTodo { 
    id: string;
    status: TASK_STATUS;
    creation_date: number;
    update_date: number|null;
}