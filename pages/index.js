import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
      <div className= "home">
        <Navbar />
        <Image className= "front-matter" src="/image.jpg" width= "1500" height= "638" quality= "1" alt="decoration"/>


        <h1 className= "title" style= {{color: "green", fontWeight: "800", fontSize: "80px"}}>Maqsud Mallick!</h1>
        <h1>Personal Site</h1>
      <Footer />
      </div>
  )
}
