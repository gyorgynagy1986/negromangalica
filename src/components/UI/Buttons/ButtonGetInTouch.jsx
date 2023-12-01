import React from 'react'
import Link from 'next/link'
import style from './Button.module.css'

import { IBM_Plex_Sans } from 'next/font/google'

const font = IBM_Plex_Sans({ subsets: ['latin'], weight: "700" })


const ButtonGetInTouch = ({url, name, underline}) => {

  return (
    <Link href={url}><button className={`${style.buttonGetInTouch} ${underline && style.underline} ${font.className}`}>{name}</button></Link>
    )
}

export default ButtonGetInTouch