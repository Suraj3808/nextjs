import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Head from "next/head";
const contact = () => {
  return (
    <>

      <Head>

        <title> welcome to ContactPage</title>
      </Head>

      <Navbar />
      <div className={styles.mapimg}>
   
         {/* inline css */}
      {/* <h1 style={{ color: "yellow", fontSize: "40px" }}>contact Details</h1> */}

      <Image src="https://cdn.dribbble.com/users/1162650/screenshots/14622029/media/9315001afc29dfb09c6e9d79a08b079b.gif" width="800" height="500" alt="abotImages">

      </Image>
          </div>

     
    </>

  );
};


export default contact;