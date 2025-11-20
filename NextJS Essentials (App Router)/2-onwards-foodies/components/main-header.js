import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css"
import logoImg from "@/assets/logo.png";


export default function MainHeader() {
 return (
    <header className={classes.header}>
         <Link href="/" className={classes.logo}> 
           <Image
           src={logoImg}
           alt="A palte with food on it"
            priority 
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