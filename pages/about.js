import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";

const About = () => {
    return (
        <>

            <Head>
              
                <title>AboutPage</title>
            </Head>
              
            <Navbar />
            {/* component based css */}
            <div className={styles.fontstyle}>
                <h1> welcome to about page</h1>
            </div>

            <div style={{ textAlign: "center"}}>


                {/* internally image importing */}
                <Image src="/image1.jpg" width="500" height="300" alt="abotImages"></Image>

                {/* external image using  */}

                <Image src="https://wallpapercave.com/wp/wp2646347.jpg" width="500" height="300" alt="abotImages"></Image>


            </div>

        </>

    );
};


export default About;