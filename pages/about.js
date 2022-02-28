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


            <div style={{ textAlign: "center" }}>






                {/* component based css */}
                <div className={styles.aboutimg}>

                    <div className={styles.aboutimg1}>
                        {/* internally image importing */}
                        <Image src="/image1.jpg" width="500" height="300" alt="abotImages"></Image>
                        </div>

                        <div className={styles.aboutimg2}>
                            {/* external image using  */}
                            <Image src="https://wallpapercave.com/wp/wp2646347.jpg" width="500" height="300" alt="abotImages"></Image>

                        </div>
                   


                </div>
            </div>

        </>

    );
};


export default About;