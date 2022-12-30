import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import dystopia from '../public/images/dys.webp'
import seattle from '../public/images/Seattle_toy1.webp'
import helmet from '../public/images/helmet.webp'
// import nftscroller from '../public/images/nftscroller.webp'
// import dashboard from '../public/images/mbd.webp'
import car from '../public/images/car.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        <Section>
          <WorkGridItem id="https://www.dystopia.earth" title="Dystopia.Earth" thumbnail={dystopia}>
            My homeade NFT project focused on enviornmental stylized depiction.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="https://magenta-sorbet-e59544.netlify.app/"
            title="Car Renting DAPP"
            thumbnail={car}
          >
            Prototype concept of renting a vehicle on Avalanche Fuji test-net. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          3D Models
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        <Section delay={0.5}>
          <WorkGridItem id="https://www.moxerit.com/works" thumbnail={seattle} title="Seattle Space Needle">
            Seattle Space Needle toy render, was a study project for emulating plastic toys.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="https://www.moxerit.com/works" thumbnail={helmet} title="Gueira's Helmet">
            Printable helmet for props or cosplay.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
