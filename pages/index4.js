//import Document, { Html, Head, Main, NextScript } from "next/document"
import Head from 'next/head'

import {
  Heading,
  Text,
  extendTheme,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'


//import { ChakraProvider } from "@chakra-ui/react";
//import { theme } from "../styles/theme";
//import Fonts from "./Fonts.js";




export default function Index() {

  return (

  
    <Container>
      <Head>
        <title>Home - Benjamin Carlson</title>
      </Head>
     
          <Heading>Hi, I'm Benjamin Carlson</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.</Text>
      
      
    </Container>
   

  )
}