export const getDate = (date: number|null = Date.now()) =>{
    return date?new Date(date).toLocaleDateString():'';
}