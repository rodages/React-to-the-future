import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    VStack,
    StackDivider
  } from '@chakra-ui/react'
  import { Box, Center, Stack, Heading, Text } from '@chakra-ui/react';

  import { Button, ButtonGroup,IconButton } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { SearchIcon,StarIcon } from '@chakra-ui/icons'

  function DescriptionModal({component,value, title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    function Feature({ title, value, ...rest }) {
        console.log(title,value)
        return (
            <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{value}</Text>
            </Box>
        )
        }


    const components = {
       CO:{
        name:'Carbon monoxide (CO)',
        description:'Carbon monoxide (CO) is one of the most common and widely distributed air pollutants. It is a colourless, odourless, and tasteless gas that is poorly soluble in water. Carbon monoxide exposure is still one of the leading causes of unintentional and suicidal poisonings, and it causes a large number of deaths annually both in Europe and in the United States.',
        measures:'Global background concentrations of carbon monoxide range between 0.06 and 0.14 mg/m3 (0.05– 0.12 ppm).'
       }, 
       NO2:{
        name:'Nitrogen dioxide (NO2)',
        description:`Nitrogen dioxide (NO2) is a gas that is mainly produced during the combustion of fossil fuels, along with nitric oxide (NO). NO2 can also be formed when NO reacts with certain gases in the atmosphere.
        
        Short-term exposure to concentrations of NO2 can cause inflammation of the airways and increase susceptibility to respiratory infections and to allergens. NO2 can exacerbate the symptoms of those already suffering from lung or heart conditions. NO2 can also cause changes to the environment. Deposition of Nitrogen to the environment both directly as a gas (dry deposition) and in precipitation (wet deposition) can change soil chemistry and affect biodiversity in sensitive habitats.`,
        measures:'Global background concentrations of carbon monoxide range between 0.06 and 0.14 mg/m3 (0.05– 0.12 ppm).'
       },  
       OZONE:{
        name:'OZONE (O3)',
        description:'Ozone (O3) is a gas which is damaging to human health and can trigger inflammation of the respiratory tract, eyes, nose and throat as well as asthma attacks. In addition, ozone can have adverse effects on the environment through oxidative damage to vegetation including crops.',
        measures:'The Air Quality Standards Regulations 2010 set the target that that a three-year average of 8-hour mean concentrations of O3 should not exceed 120 µg/m3 more than 25 times.'
       }, 
       PM10:{
        name:'Particulate matter (PM)',
        description:`Particulate matter (PM) is everything in the air that is not a gas and therefore consists of a huge variety of chemical compounds and materials, some of which can be toxic. Due to the small size of many of the particles that form PM some of these toxins may enter the bloodstream and be transported around the body, lodging in the heart, brain and other organs.
        
        As a result, particulates are classified according to size. The UK is currently focused on measuring the fractions of PM where particles are less than 10 micrometres in diameter (PM10) and less than 2.5 micrometres in diameter (PM2.5) based on the latest evidence on the effects of PM to health.`,
        measures:'An annual average of 40 µg/m3 for PM10'
       },  
       PM25:{
        name:'Particulate matter (PM)',
        description:`Particulate matter (PM) is everything in the air that is not a gas and therefore consists of a huge variety of chemical compounds and materials, some of which can be toxic. Due to the small size of many of the particles that form PM some of these toxins may enter the bloodstream and be transported around the body, lodging in the heart, brain and other organs.
        
        As a result, particulates are classified according to size. The UK is currently focused on measuring the fractions of PM where particles are less than 10 micrometres in diameter (PM10) and less than 2.5 micrometres in diameter (PM2.5) based on the latest evidence on the effects of PM to health.`,
        measures: 'An annual average of 20 µg/m3 for PM2.5.'
       },   
       SO2:{
        name:'Sulphur dioxide (SO2)',
        description:`Sulphur dioxide (SO2) is a corrosive, acidic gas which is predominantly produced from the combustion of coal or crude oil.

        Direct exposure to SO2 is associated with asthma and chronic bronchitis and can lead to irritation and constriction of the airways.`,
        measures: '20 µg/m3 (EU[1], critical level for vegetation, winter & WHO[2], reference level for daily mean)'
       },   
    }


    return (
      <>
        <Feature 
            title={title}
            value={value}
            onClick={onOpen}
            aria-label={`${components[component].name} description`} />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{components[component].name} - {value}</ModalHeader>
            <ModalCloseButton />
           
            
            <ModalBody>{components[component].description}</ModalBody>
            <ModalBody>{components[component].measures}</ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DescriptionModal