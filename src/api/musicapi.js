import axios from "axios";

const musicapi=async(data)=>{
   const response= await axios({
    url:`http://localhost/music/create`,
    method:"POST",
    headers:{'Content-Type':'application/json'},
    data:JSON.stringify(data)
    })
    return response.data
};
export default musicapi;