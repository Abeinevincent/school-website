import { Box, Heading, Image, Text } from '@chakra-ui/react'
import NavBar from '../../components/sections/navbar/Navbar'
import HeaderImage from '../../assets/about.jpg'
import { Footer } from '../../components/sections/footer/Footer'

export const Gallery = () => {
  return (
    <Box>
      <NavBar />
      <Image src={HeaderImage} w={'100%'} alt="Header Image" />
      <Box px={50} py={20}>
        <Heading as={'h2'} textAlign={'center'} mb={2} overflow={'hidden'}>Our Gallery </Heading>
        Gallery here...
      </Box>
      <Footer />
    </Box>
  )
}
