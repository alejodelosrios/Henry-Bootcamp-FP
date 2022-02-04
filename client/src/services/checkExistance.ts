export const checkExistance = (array: object[], id: number) => {
    // let idsArray = [];
    let idsArray = array.map((p:any)=> p.id);
    return idsArray.includes(id);
};
