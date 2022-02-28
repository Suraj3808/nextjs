import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";
import Head from "next/head";
import Image from "next/image";
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
      

      {/* internal css */}
      <style jsx>
        {`
          h1{
            color:green;
            display:flex;
            justify-content: center;er;
          }
        
        `}
      </style>
      {/* external image using  */}
     <div className={styles.homeimage}>
     <Image src="https://wallpapercave.com/wp/wp2646347.jpg" width="800" height="500" alt="abotImages"></Image>
     </div>
     
    </>

  );
};


export default Home;




















