import Navbar from "../components/Navbar";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript,Nextjs" />
        <meta name="suraj Singh" content="Next.Js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HomePage</title>
      </Head>

      <Navbar />
      <h1> welcome to home Page</h1>

      {/* internal css */}
      <style jsx>
        {`
          h1{
            color:green;
          }
        
        `}
      </style>
    </>

  );
};


export default Home;




















