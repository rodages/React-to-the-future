import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiHome,
  FiHexagon,
} from 'react-icons/fi';
const LinkItems = [
  { name: 'Test', icon: FiHome },
  { name: 'About us', icon: FiHexagon },
];
export function Nav({ children }) {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      {...rest}>
      <img src="/assets/logo.png" />
      <Box>
      {LinkItems.map((link) => (
        <Box bg="white">
          <NavItem w="200px" key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Box>
      ))}
      </Box>
    </Box>
  );
};
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="/aboutus" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
