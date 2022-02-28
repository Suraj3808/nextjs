import react from "react";
import Navbar from "../../components/Navbar";




//To get the path from url

export const getStaticPaths = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((currElem)=> {

    return{
      params:{
        pageNo:currElem.id.toString(),
      },
    };

  });

  return {
     paths,
     fallback:false,
  };

};

// fatch API  with the help of  getStaticProps
export const getStaticProps = async (context) => {
   const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
      props: {
          data: data,
      },
  };

};


const myData =({data}) => {
  const {id,title,body} = data;
return(
  <>
  <Navbar />
  
  <div key={id} className="ssr-styles" >

                <h1>{id}</h1>
              
              <h2>{title}</h2>

              <p>{data.body}</p>
              
                </div>
  
  
  </>
);

};

export default myData;

































// import { useRouter } from "next/router";

// import { useEffect } from "react";

// const pageNo = () => {
//   const router = useRouter();

//   const handleInput = () => {
//     router.push("/");
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       router.push("/");
//     }, 3000)

//   }, []);
//   const pageNumber = router.query.pageNo;
//   return (
//     <>
//       <h1> blog numer  {pageNumber} is not avialable   </h1>

//       <div style={{ textAlign: "center" }}>
//         <a onClick={handleInput}>clickMe for HomePage</a>
//       </div>

//     </>

//   );
// };

// export default pageNo;



























