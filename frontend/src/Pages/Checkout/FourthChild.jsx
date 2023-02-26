import { Box } from '@chakra-ui/react'
import React from 'react'

const FourthChild = ({status}) => {
  return (
    <Box display={status?"block":"none"}>FourthChild</Box>
  )
}

export default FourthChild