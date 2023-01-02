import { Box, Heading, Image } from '@chakra-ui/react'
import HeaderImage from '../../assets/about.jpg'
import { Footer } from '../../components/sections/footer/Footer'
import NavBar from '../../components/sections/navbar/Navbar'

export const Academia = () => {
  return (
    <Box>
      <NavBar />
      <Image src={HeaderImage} w={'100%'} alt="Header Image" />
      <Box px={50} py={20}>
        <Heading as={'h2'} textAlign={'center'} mb={2} overflow={'hidden'}>Academia</Heading>
        Academia here...
      </Box>
      <Footer />
    </Box>
  )
}
