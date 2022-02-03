export const checkExistance = (array: object[], id: number) => {
    // let idsArray = [];
    console.log(array);
    let idsArray = array.map((p:any)=> p.id);
    return idsArray.includes(id);
};
