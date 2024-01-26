'use client'

import { motion } from 'framer-motion'

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
            <h1>John Kyle Salaysay</h1>
        </motion.div>
    )
}