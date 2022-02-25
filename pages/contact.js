import Navbar from "../components/Navbar";
import Head from "next/head";
const contact = () => {
  return (
    <>

      <Head>

        <title> welcome to ContactPage</title>
      </Head>

      <Navbar />

      
      {/* inline css */}
      <h1 style={{ color: "yellow", fontSize: "40px" }}>contact page</h1>
    </>

  );
};


export default contact;