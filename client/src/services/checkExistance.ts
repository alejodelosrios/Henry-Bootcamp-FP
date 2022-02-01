export const checkExistance = (array: object[], id: number) => {
    let idsArray = [];
    idsArray = array.map((p:any)=> p.id);
    return idsArray.includes(id);
};
