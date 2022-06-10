import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonials';
import CTA from '../components/CTA';
import WorkSamples from '../components/Worksamples';
import CTAPricing from '../components/CTA_Pricing';
import TestimonialsMiddle from '../components/Testimonials_Middle';
import Steps from '../components/Steps';
import CTABottom from '../components/CTA_Bottom';

export default function Home() {
  return (
		<div>
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <WorkSamples />
      <CTAPricing />
      <TestimonialsMiddle />
      <Steps />
      <CTABottom />
		</div>
	);
}
