import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
export default function Home() {
  return (
      <>
        <Navbar />
        <Image src="/image.jpg" width= "1500" height= "706" quality= "10" alt="decoration"/>
        <h1>Welcome to my Website!</h1>

      </>
  )
}
