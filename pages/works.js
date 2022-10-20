import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import dystopia from '../public/images/dys.webp'
import dyscontract from '../public/images/dystcontract.webp'
import remcontract from '../public/images/remcontract.webp'
import seattle from '../public/images/Seattle_toy1.webp'
import helmet from '../public/images/helmet.webp'
import nftscroller from '../public/images/nftscroller.webp'
import dashboard from '../public/images/mbd.webp'
import car from '../public/images/car.webp'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dystopia" title="Dystopia.Earth" thumbnail={dystopia}>
            My homeade NFT project focused on enviornmental stylized depiction.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dashboard"
            title="Dashboard"
            thumbnail={dashboard}
          >
            Moby Dashboard, implementation of a wallet tracker " for transactions of nfts.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="car"
            title="Car Renting DAPP"
            thumbnail={car}
          >
            Prototype concept of renting a vehicle on Avalanche Fuji test-net. 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="nftscroller" thumbnail={nftscroller} title="NFT-Scroller">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="dyscontract" thumbnail={dyscontract} title="Dystopia Contract">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="remcontract" thumbnail={remcontract} title="Remillio Contract">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="seattle" thumbnail={seattle} title="Seattle Space Needle">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="helmet" thumbnail={helmet} title="Gueira's Helmet">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
