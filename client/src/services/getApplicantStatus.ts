
export default (postul:any, applicantId:number)=>{
    return postul?.filter((ap:any) => ap.applicantId === applicantId)[0];
}
