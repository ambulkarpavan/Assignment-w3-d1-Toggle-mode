import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Heading,
  } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'

  import { BiHomeAlt } from 'react-icons/bi';
  import { FiTrendingUp } from 'react-icons/fi';
  import { MdOutlineExplore } from 'react-icons/md';
  import { AiOutlineStar } from 'react-icons/ai';
  import { FiSettings } from 'react-icons/fi';
  import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
       
        <Drawer  placement={placement} onClose={onClose}  >
          <DrawerOverlay  backgroundColor="aliceblue"  >
         
         </DrawerOverlay>
          <DrawerContent >
            {/* <DrawerHeader color="black" fontWeight="600" fontSize="25px" marginLeft="30px">Logo</DrawerHeader> */}
            <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    marginBottom="100px"
                    marginLeft="20px"
                    />
            <DrawerBody>
          
<Button

  size='md'
  height='55px'
//   width='250px'
padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
 backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <BiHomeAlt />
</Button>

<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <FiTrendingUp />
</Button>
<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <MdOutlineExplore></MdOutlineExplore> 
</Button>
<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <AiOutlineStar/>
</Button>
<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <FiSettings/>
</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
       
 
      </>
    )
}

export default Sidebar



