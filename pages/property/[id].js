import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

import { baseUrl, fetchApi } from "../../utils/fetchApi"
import ImageScrollbar from "../../components/ImageScrollbar"


const PropertDetails = ({ propertyDetails: { price, rentFrequency, room, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, photos} }) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    { photos && <ImageScrollbar data={photos}/>}

  </Box>
)

export async function getServerSideProps({ params: { id }}){ //*
  const data = fetchApi(`${baseUrl}/properties/detail?ExternalIDs=${id}`)

  return { 
    props: {
      propertyDetails: data
    }
  }
}