import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import CheckOutBtn from './checkoutBtn'
import React, { useContext } from 'react'
import { globalStateContext } from '../pages/_app'
//import Image from "next/image";
export default function Nav() {
    const amount = useContext(globalStateContext)
    console.log(amount)
    return (
        <nav className={utilStyles.mainNav}>
            <Link href="/">
                <a className={utilStyles.logo}>Planty</a>
            </Link>
            <CheckOutBtn />
            <span>{amount}</span>
        </nav>
    )
}
