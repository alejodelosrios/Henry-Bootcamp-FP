export const checkExistance = (array: object[], id: number) => {
    const idsArray = array.map((p:any)=> p.id);
    return idsArray.includes(id);
};
