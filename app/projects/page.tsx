"use client"
import { useRouter } from "next/navigation";
import Navbar from '../../components/Navbar';
import ProjectCardList from "@/components/ProjectCardList";
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

import BioCard from "@/components/TeamInfo";
import Box from "@mui/joy/Box";

import styles from './about.module.css';
export default function About() {
  const router = useRouter();
  const handleContactClick = () => {
    router.push('/contact');
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <ProjectCardList/>
      <Footer />
    </div>
  )}
