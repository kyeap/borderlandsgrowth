import React, {useState} from "react"
import { useSpring, animated } from "react-spring";

import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion"
  import { ChakraProvider,Box, Button } from "@chakra-ui/react"

export const AccordionSpring = (dropdown) => {
    const [open, set] = useState(false);


    const motion = useSpring({ 
        to: { opacity: 1, height: open? 100 : 0 }, 
        from: { opacity: 0, height: open? 0 : 100 },
        reset: true,
        // delay: 200,
    });
    
    return (
        <>
            <animated.div style={ motion}>
                I will fade in
            </animated.div>
            <div onClick={()=>set(!open)}>+</div>
        </>
    )
}

export const AccordionBorderlands = (props) => {
    const {title,date,text ,download ,link } = props;
    return (
        <AccordionItem
            border="0px"
        >
             {({ isExpanded }) => (
                <>
                    <AccordionButton
                        background="#600080"
                        color="white"
                        margin="20px 0"
                        _expanded={{ bg: "#555C61", color: "white" }}
                        _hover = {{bg:"#97a2a9"}}
                    >
                        <Box 
                            flex="1" 
                            textAlign="left"
                        >
                            {title}
                        </Box>
                        {isExpanded ? "-" : "+"}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Box
                            color="rgb(156, 156, 156)"
                        >
                            {date}
                        </Box>
                        <Box>
                            {text}
                        </Box>
                        {
                            download && 
                            <Box
                                border="solid 1px rgb(230, 230, 230)"
                                padding="10px"
                                margin= "10px 0"
                            >   
                                <div>Documents to download</div>
                                <div>{link}</div>
                            </Box>
                        }
                        <Box
                            alignItems="right"
                            display="flex"
                            justifyContent="flex-end"
                        >
                            <a href={link}>
                                <Button 
                                    background="rgb(96, 0, 128)"
                                    color="white"
                                >   
                                    Read More
                                </Button>
                            </a>
                        </Box>
                    </AccordionPanel>
                </>
            )}  
        </AccordionItem>
    )
}

export const AccordionNews = (props) => {
    const {title,textArr} = props;
    
    return (
        <AccordionItem
            m="20px 0"
            border="solid 3px #836098"
        >
            {({ isExpanded }) => (
                <>
                    <AccordionButton
                        // className="container-table-bottom"
                        display="flex"
                        borderBottom= {isExpanded?"solid 3px #836098":"0"}
                        color="#836098"   
                        bg="white"
                        fontSize= "28px"
                        padding="0"
                        lineHeight= {{base:"28px",lg:"22px"}}
                        _expanded = {{bg: "white", color:"black"}}
                        _last = "none"
                    >
                        <Box
                            padding= "14px 25px"
                            borderRight= "solid 3px #836098"
                            cursor= "pointer"
                            flexBasis= {{base:"85%",lg:"95%"}}
                            textAlign="left"
                        >
                            {title}
                        </Box>
                        <Box
                            flexBasis= {{base:"15%",lg:"5%"}}
                        > 
                            {isExpanded? "-":"+"}
                        </Box>
                    </AccordionButton>
                    <AccordionPanel
                        padding="0"
                    >
                        <Box
                            m="25px"
                        >
                            {textArr.map((paragraph) => {
                                return (
                                    <>
                                        <p>{paragraph}</p>
                                    </>
                                )
                            })}
                        </Box>
                        <Button
                            border-top= "solid 3px #836098"
                            padding= "30px"
                            color= "#836098"
                            fontSize= "24px"
                            bg="white"
                            w="100%"
                            borderTop="solid 3px #836098"
                            borderRadius="0"
                            fontSize= "24px"
                        >
                            Read More
                        </Button>
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    )
}