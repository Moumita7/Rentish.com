import { Box } from '@chakra-ui/react'
import React from 'react'

const SecondChild = ({status}) => {
  return (
    <Box display={status?"block":"none"}>SecondChild</Box>
  )
}

export default SecondChild