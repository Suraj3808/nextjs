import Link from "next/link";
const Navbar = () => {
    return (
      <>
      
           <nav>
           <div className="styles.header">
     <ul>
       <li>
       <Link href="/">
         <a >Home</a>
       </Link>
       </li>
       <li>
       <Link href="/about">
         <a >About</a>
       </Link>
       </li>
      
      <li>
      <Link href="/contact">
         <a>Contact</a>
       </Link>
      </li>
       
     </ul>
     </div>
   </nav>
      </>
         
    );
  };
  
  
  export default Navbar;