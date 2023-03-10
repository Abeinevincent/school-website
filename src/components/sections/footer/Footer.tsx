import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaGoogle } from 'react-icons/fa'

export const Footer = () => (
  <Flex as="footer" w={"100%"} role="contentinfo"
    flexDirection={'column'}
    px={20}
    py={5}
    bg={'rgba(0,0,0,0.7)'}
    color={'white'}
  >
    <Stack
      spacing="8"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '12', md: '16' }}
    >
      <Stack spacing={{ base: '6', md: '8' }} align="start">
        <Image src="https://ticketug.com/TICKETUG4.png" w={120} alt='Logo' />
        <Text color="muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
        spacing={{ base: '12', md: '8' }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="lg" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button color={'white'} variant="link">How it works</Button>
              <Button color={'white'} variant="link">Pricing</Button>
              <Button color={'white'} variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="lg" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button color={'white'} variant="link">Privacy</Button>
              <Button color={'white'} variant="link">Terms</Button>
              <Button color={'white'} variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="lg" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
            <Input placeholder="Enter your email" type="email" required />
            <Button variant="facebook" bg={'teal'} type="submit" flexShrink={0}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      mb={0}
    >
      <Text fontSize="md" textAlign={'center'} color="subtle">
        &copy; {new Date().getFullYear()} Memorial Primary School, All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaInstagram fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaYoutube fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaFacebook fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
      </ButtonGroup>
    </Stack>
  </Flex>
)