// import NextLink from 'next/link'
import {
  Container,
  Box,
  Avatar
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'




const Home = () => (
  <Layout>
  <Container minW={["90vw", "90vw", "90vw", "90vw", "70vw"]} >
      <Box borderRadius="lg" bg="transparent" p={10} w={"100%"} mh={"30vh"} mt={[22, 22, 36]} align="center">
        <Box 
        display="flex"
        textAlign="center"
        alignItems="center"
        mb={6}
        mt={3}
        >
          <Avatar display={{base: 'none', md : 'flex'}} h="10em" w="10em" background="transparent" p={1} mr={4} size='xxl' name='Chase Alber' src="https://i.imgur.com/vDg2giC.jpg" />
          <Paragraph>
          Hey there! My name is Chase and I am a developer focused on full-stack, web3, and mobile applications. I spend my free time modeling props in Blender or slinging dries on the Missouri river.
          I am currently building up my blog for Japanese artists and developers in the web3 workspace.
          </Paragraph>
          
          
        </Box>
        
          
      </Box>
      
      
    </Container>
    </Layout>
)

export default Home
