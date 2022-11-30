import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import TableCell from '@mui/material/TableCell'

export const TableIcon: ({ isChecked }: { isChecked: boolean }) => JSX.Element = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <TableCell align="center">
    {
    (isChecked)
      ? <CheckIcon color='success'></CheckIcon>
      : <CloseIcon color='error'></CloseIcon>
    }
    </TableCell>
  )
}

export default TableIcon
