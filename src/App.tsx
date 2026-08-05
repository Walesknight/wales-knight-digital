import { Helmet } from "react-helmet-async";

import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Wales Knight Digital Technologies | Website Development, SEO &
          Digital Marketing
        </title>

        <meta
          name="description"
          content="Wales Knight Digital Technologies helps businesses grow through professional website development, SEO, Google Business Profile optimization, branding, AI automation and digital marketing."
        />

        <meta
          name="keywords"
          content="Website Development, Web Design, SEO, Digital Marketing, Google Business Profile, Branding, AI Automation, Nigeria, Lagos"
        />

        <meta
          name="author"
          content="Wales Knight Digital Technologies"
        />

        <meta
          property="og:title"
          content="Wales Knight Digital Technologies"
        />

        <meta
          property="og:description"
          content="Professional websites, SEO, AI automation and digital marketing solutions for growing businesses."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="/logo.png"
        />

        <meta
          property="og:url"
          content="https://walesknight.com"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <MainLayout>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CTA />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;