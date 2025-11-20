import Link from "next/link";
import classes from "./main-header.module.css"
import logoImg from "@/assets/logo.png";


export default function MainHeader() {
 return (
    <header className={classes.header}>
         <Link href="/" className={classes.logo}> 
           <img
            
            src={logoImg.src}
           alt="A palte with food on it"
           />
           NextLevel Food
         </Link>

         <nav className={classes.nav}>
            <ul>
                <li>
                    <Link  href="/meals">Browse Meal</Link>
                </li>


                 <li>
                    <Link  href="/commuity">Foodies Community</Link>
                </li>
            </ul>
         </nav>
    </header>
 )
}