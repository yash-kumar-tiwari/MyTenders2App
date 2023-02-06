import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { _webapi } from "../apiURL";
import axios from "axios";

function Verifyuser()
{
  const params = useParams();

  useEffect(()=>{
    axios.get(_webapi+"verifyuser?email="+params.email).then((result)=>{
      console.log("Verification Succeed");
    })
  },[]);
  
  return(
  <div id='verifyuser'>
    <Navigate to='/login' />
  </div>
  )
}

export default Verifyuser;