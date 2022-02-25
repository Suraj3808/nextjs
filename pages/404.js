
import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {
    const router = useRouter();
    const handleInput=() => {
        router.push("/");
    };

    useEffect(() => {
        setTimeout(()=> {
            router.push("/");
        },3000)
       
    },[]);
   
    return (
      <>
      <div className="error">
      <h1>404 Error  page</h1>
      </div>
      

      <div style={{ textAlign: "center"}}>
      <a onClick={handleInput}>clickMe for HomePage</a> 
      </div>
      
   
      
      </>
         
    );
  };
  
  
  export default ErrorPage;