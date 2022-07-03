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
  import { Button, ButtonGroup,IconButton } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { SearchIcon,StarIcon } from '@chakra-ui/icons'

  function HistoryModal({history,setData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(history,"history")
    return (
      <>
        <IconButton onClick={onOpen} aria-label='history or favourites' colorScheme='pink' icon={<StarIcon />} />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>History of Previous Search Results</ModalHeader>
            <ModalCloseButton />
            {/* <ModalBody>
            modal body
            </ModalBody> */}
            {history.length<1?
            <ModalBody>No searches made yet</ModalBody>:
            <ModalBody>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                >
                    {history.map((item,i)=><Button 
                    onClick={()=>{
                        setData(item)
                        onClose()
                    }}
                    key={i}>{item.placeName} ({item.aqiInfo.category}-{item.aqiInfo.concentration}) </Button>)}
                </VStack>
            </ModalBody>
            }
  
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

  export default HistoryModal