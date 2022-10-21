import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#A82428', '#A82428')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? '#A82428' : undefined}
        color={active ? '#0e151a' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>

  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      mt={[ 4, 10 ]}
      borderRadius="25px"
      as="nav"
      width={[ "80vw", "70vw", "60vw", "50vw", "15vw"]}
      py={[0 , 2]}
      mr={['auto', 'auto', 'auto', 'auto', 0]}
      ml={['auto', 'auto', 'auto', 'auto', 36]}
      zIndex={2}
      bottom={[0, 0, 0, 0, 52]}
      left={[0]}
      right={[0]}
      position={[ 'relative', 'relative', 'relative', 'relative', 'fixed' ]}
      bg={"#0e151a"}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        wrap="wrap"
        alignItems="center"
      >

        <Stack
          direction={{ base: 'column', xl: 'column' }}
          display={{ base: 'none', xl: 'flex' }}
          width={{ base: 'full', xl: 'full' }}
          alignItems="left"
          justify="flex-end"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          
          <LinkItem
           _hover={{textDecoration: "none !important", }} bg="none" pr={6} color="#A82428"  letterSpacing={1.4} fontWeight={'bold'}  href="/" path={path}>
          Chase Alber
          </LinkItem>
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          {/* <LinkItem href="/snippets" path={path}>
            Snippets
          </LinkItem> */}
          <LinkItem
            target="_blank"
            href="https://github.com/moxerit"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            
            Source
            <IoLogoGithub />
          </LinkItem>
          {/* <LinkItem _hover={{textDecoration: "none !important", background: "#A82428", textColor: "#0e151a"  }}  border={"2px solid #A82428"} borderRadius={"25px"}  href="/connect" path={path}>
            Connect
          </LinkItem> */}
        </Stack>

        <Box flex={1} p={2}  align="middle">
          {/* <ThemeToggleButton /> */}

          <Box color="#A82428" w="100%" justify-content="center" display={{ base: 'inline-block', xl: 'none' }}>
            <Menu isLazy id="navbar-menu" >
              <MenuButton

                _hover={{
                  border: "3px dotted #A82428 !important",
                }}
                _active={{
                  background:"#0e151a !important",
                  border: "3px solid #A82428 !important",
                }}
                bg={'#0e151a'}
                border="3px dotted #0e151a !important"
                p={6}
                borderRadius="25px"
                width={"100%"}
                as={IconButton}
                viewBox="0 0 24 24"
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                mb={0}
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                {/* <NextLink href="/snippets" passHref>
                  <MenuItem as={Link}>Snippets</MenuItem>
                </NextLink> */}
                <MenuItem
                  as={Link}
                  href="https://github.com/Moxerit/Portfolio"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar