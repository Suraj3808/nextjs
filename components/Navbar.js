import Link from "next/link";
const Navbar = () => {
    return (
      <>
      
           <nav>
           <div>
     <ul>
       
       <Link href="/">
         <a >Home</a>
       </Link>
       
       
       <Link href="/about">
         <a >About</a>
       </Link>
       
      
      
      <Link href="/contact">
         <a>Contact</a>
       </Link>
      
       
      
      <Link href="/blog">
         <a>Blog</a>
       </Link>
      

     </ul>
     </div>
   </nav>
      </>
         
    );
  };
  
  
  export default Navbar;