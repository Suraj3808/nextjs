import Navbar from "../../components/Navbar";
import Link from "next/link";



// fatch API  with the help of  getStaticProps
export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
        props: {
            data: data,
        }
    }

}


const blog = ({ data }) => {
    return (
        <>

            <Navbar />

            {/* display starting 5 datas of API */}

            {data.slice(0, 5).map((currElem) => {
                return (
                    <div key={currElem.id} className="ssr-styles">

                        <h3>{currElem.id}</h3>

                        <Link href={`/blog/${currElem.id}`}>
                            <h2>{currElem.title}</h2>
                        </Link>

                    </div>
                );
            })}

        </>
    );
};

export default blog;
