import { Box, Heading, Image, Text } from '@chakra-ui/react'
import NavBar from '../../components/sections/navbar/Navbar'
import HeaderImage from '../../assets/about.jpg'
import { Footer } from '../../components/sections/footer/Footer'
export const About = () => {
  return (
    <Box>
      <NavBar />
      <Image src={HeaderImage} w={'100%'} alt="Header Image" />
      <Box px={5} py={20}>
        <Heading as={'h2'} textAlign={'center'} mb={2} overflow={'hidden'}>Who we Are </Heading>
        <Box
          w={'100%'}
          h={"20%"}
          mb={10}
          bg={'gray.100'}
          borderBottom={'2px solid green'}
          p={10}
        >
          <Heading as={'h4'} overflow={'hidden'}>Our Story</Heading>
          <Text overflowY={'hidden'}>
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
          </Text>
        </Box>
        <Heading textAlign={'center'} overflow={'hidden'} mb={2} as={'h2'}>Our Mission and Vision</Heading>
        <Box
          w={'100%'}
          h={"20%"}
          mb={10}
          bg={'gray.100'}
          borderBottom={'2px solid green'}
          p={10}
        >
          <Heading overflow={'hidden'} as={'h4'}>Our Mission</Heading>
          <Text>
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
          </Text>
          <Heading overflow={'hidden'} as={'h4'}>Our Vision</Heading>
          <Text>
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
          </Text>

        </Box>
        <Heading textAlign={'center'} mb={2} overflow={'hidden'} as={'h2'}>Our Core Values</Heading>
        <Box
          w={'100%'}
          h={"20%"}
          mb={10}
          bg={'gray.100'}
          borderBottom={'2px solid green'}
          p={10}
        >
          <Heading overflow={'hidden'} as={'h4'}>Core Values</Heading>
          <Text>
            Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sequi obcaecati
            laudantium reiciendis vero quos, itaque dolorum enim quas. Eum quo odit porro repudiandae dicta
            asperiores possimus nostrum sit eligendi!
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}