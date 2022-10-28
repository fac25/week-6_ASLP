import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import CheckOutBtn from './checkoutBtn'
//import Image from "next/image";
export default function Nav() {
    return (
        <nav className={utilStyles.mainNav}>
            <Link href="/">
                <a className={utilStyles.logo}>Planty</a>
            </Link>
            <CheckOutBtn />
        </nav>
    )
}
