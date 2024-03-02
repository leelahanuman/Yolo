import axios from "axios";

const getAllMusicApi=async()=>{
   const response= await axios({
    url:`http://localhost/music/get`,
    method:"GET",
    headers:{'Content-Type':'application/json'},
    })
    return response.data
};
export default getAllMusicApi;