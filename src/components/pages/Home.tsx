'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

import logo from '/kyle.svg'

export default function HomePage(){

    const variants = {
        initial : {
            x: 0,
        }, 
        animate : {
            x : 500,
        transition : {
            type: "spring", stiffness: 100
        }
        }
    }
    return(
        <motion.div variants={variants}>
            <Image
            src={logo}
            height={500}
            width={500}
            alt="image"
             />
            <h1>John Kyle Salaysay</h1>
        </motion.div>
    )
}