// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Footer from "../components/Sections/Footer";
import Top_repos from "../components/Top_repos";
import Topdlrepos from "../components/Topdlrepos";
// import Top_genrepos from "../components/Top_genrepos";
import {Heading} from '@chakra-ui/react'


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Heading style={{ textAlign: 'center', marginBottom: '20px' }}>Top ML Repositories</Heading>
      <Top_repos />
      <Heading style={{ textAlign: 'center', marginBottom: '20px' }}>Top DL Repositories</Heading>
      <Topdlrepos />
      {/* <Top_genrepos /> */}
      <Blog />

      {/* <Contact /> */}
     
      <Footer />
    </>
  );
}