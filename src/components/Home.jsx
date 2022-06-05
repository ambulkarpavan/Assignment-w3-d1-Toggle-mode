import React, { useContext } from 'react'
import { Button, FormControl, FormLabel, MenuButton, Switch, Progress} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import styles from "./Home.module.css"
import { AiFillSignal, AiOutlineVideoCamera } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { GoCommentDiscussion } from 'react-icons/go'
import { TbNotes } from 'react-icons/tb'
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const {isLight,toggleTheme} = useContext(ThemeContext);
  return (
           <div  className={styles.home} >
              <div className={styles.sidebar}>
               <div>
               <Image
                    borderRadius='full'
                    boxSize='80px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    // marginBottom="100px"
                       
                 
                      />
               </div>
                   <div>
                   <Button colorScheme='blue'> <AiFillSignal/></Button> <br />

                   <Button colorScheme='teal' variant='ghost'> <AiOutlineVideoCamera /> </Button> <br />
                   <Button colorScheme='teal' variant='ghost'> <BsTrash /> </Button> <br />
                   <Button colorScheme='teal' variant='ghost'>  <GoCommentDiscussion/></Button> <br />
                   <Button colorScheme='teal' variant='ghost'>  <TbNotes/></Button> <br />
                   <Button colorScheme='teal' variant='ghost'>  <FiSettings/></Button> 
              
                   </div>
                   <div>
                   <Button colorScheme='cyan' borderRadius="20px">+</Button>
                   </div>
</div>
<div className={styles.middle}>
<div>
<FormControl display='flex' justifyContent="space-between" alignItems='center'   marginTop="30px">
  <Heading marginRight="100px">My Dashboard</Heading>
  
  <FormLabel htmlFor='email-alerts' mb='0'>
   Dark mode
  </FormLabel>
  <Switch id='email-alerts' > </Switch>
  <button onClick={toggleTheme}>{`make ${isLight ? "Dark" : "Light"}`}</button>
</FormControl>



</div>

<div className={styles.infomain}>

  <div className={styles.info}>
    <div className={styles.info1}>
      <div><h2>Active users</h2></div>
      <div><h2> for August 2020</h2></div>
    </div>
    <div>
      <div className={styles.info2}>
        <div>   <Image
                    borderRadius='full'
                    boxSize='80px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    // marginBottom="100px"
                       
                 
                      /></div>
        <div>
          
        <label >Nrupul Dev</label> <p>Bangluru, India</p>
        </div>
   
      </div>
      <div><Progress value={40} size='xs' colorScheme='green' /></div>
      <div className={styles.info1}>
        <div>professional Level 15</div>
        <div>4723 points</div>
      </div>
</div>
      
    </div> <hr />


    
    <div className={styles.info}>
    <div className={styles.info1}>
      <div><h2>Active users</h2></div>
      <div><h2> for August 2020</h2></div>
    </div>
    <div>
      <div className={styles.info2}>
        <div>   <Image
                    borderRadius='full'
                    boxSize='80px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    // marginBottom="100px"
                       
                 
                      /></div>
        <div>
          
        <label >Nrupul Dev</label> <p>Bangluru, India</p>
        </div>
   
      </div>
      <div><Progress value={40} size='xs' colorScheme='green' /></div>
      <div className={styles.info1}>
        <div>professional Level 15</div>
        <div>4723 points</div>
      </div>
</div>
      
    </div> <hr />
    <div className={styles.info}>
    <div className={styles.info1}>
      <div><h2>Active users</h2></div>
      <div><h2> for August 2020</h2></div>
    </div>
    <div>
      <div className={styles.info2}>
        <div>   <Image
                    borderRadius='full'
                    boxSize='80px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    // marginBottom="100px"
                       
                 
                      /></div>
        <div>
          
        <label >Nrupul Dev</label> <p>Bangluru, India</p>
        </div>
   
      </div>
      <div><Progress value={40} size='xs' colorScheme='green' /></div>
      <div className={styles.info1}>
        <div>professional Level 15</div>
        <div>4723 points</div>
      </div>
</div>
      
    </div> 
   
  
</div>

</div>


    </div>
    
    
 
  )
}

export default Home