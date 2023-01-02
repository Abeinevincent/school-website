import { Box, Heading, Image } from "@chakra-ui/react";
import Hero from "../../components/layout/landingpage/Hero";
import LandingPage from "../../components/layout/landingpage/LandingPage";
import NavBar from "../../components/sections/navbar/Navbar";
import HeaderImage from '../../assets/about.jpg'
import { Footer } from "../../components/sections/footer/Footer";

export default function Home() {
    const token = localStorage.getItem('token')
    return (
        // <LandingPage>
        //     <Hero
        //         title="Black Friday Offer"
        //         subtitle="With our black friday offer, you can shop millions of products at reduced prices at the comfort of your living room"
        //         image="https://source.unsplash.com/collection/404339/800x600"
        //         ctaText="Click Here to Continue"
        //         ctaLink={token ? '/products' : '/register'}
        //     />
        // </LandingPage>
        <Box>
            <NavBar />
            <Image src={HeaderImage} w={'100%'} alt="Header Image" />
            <Box px={50} py={20}>
                <Heading as={'h2'} textAlign={'center'} mb={2} overflow={'hidden'}>Home</Heading>
               Home...
            </Box>
            <Footer/>
        </Box>
    );
}
