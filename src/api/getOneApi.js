import axios from "axios";

const getOneApi=async(id)=>{
   const response= await axios({
    url:`http://localhost/music/${id}`,
    method:"GET",
    headers:{'Content-Type':'application/json'},
    })
    return response.data
};
export default getOneApi;