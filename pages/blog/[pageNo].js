
import { useRouter } from "next/router";

import { useEffect } from "react";

const pageNo = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000)

  }, []);
  const pageNumber = router.query.pageNo;
  return (
    <>
      <h1> blog numer  {pageNumber} is not avialable   </h1>

      <div style={{ textAlign: "center" }}>
        <a onClick={handleInput}>clickMe for HomePage</a>
      </div>

    </>

  );
};

export default pageNo;



























