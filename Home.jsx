import React, { useEffect, useState } from 'react'
import axios from '../Utils/axios'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
    const [product, setProduct] = useState([])
    const getProducts = () => {

        axios.get("/products").then(res => {
            // console.log(res.data)
            setProduct(res.data)
        }).catch(err => {
            console.error("Error fetching products:", err)
        })
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <Hero />
            <LatestCollection />
            <OurPolicy/>
            <NewsLetterBox/>
        </>
    )
}

export default Home
