import { TASK_STATUS } from "../Interfaces/Itodo";

export const getStatus = (status:TASK_STATUS|number): {text: string; emoji: string} => {
    return status===TASK_STATUS.Open?{text: 'open', emoji: '🔴'}
    :status===TASK_STATUS.inProgress?{text: 'in Progress', emoji:'🟡'}: 
    status === TASK_STATUS.Done?{text: 'done', emoji: '🟢'}: {text: 'HZ', emoji: '🤷‍♂️'}
}