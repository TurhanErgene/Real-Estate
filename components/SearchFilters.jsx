import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { mdCancel } from 'react-icons/md'
import Image from 'next/image'

const SearchFilters = () => {

  const [filters, setFilters] = useState({})

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      search filters
    </Flex>
  )
}

export default SearchFilters