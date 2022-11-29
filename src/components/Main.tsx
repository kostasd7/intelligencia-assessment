import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { ITerm } from '../interfaces/ITerm'

export const Main: ({ data }: { data: ITerm[] }) => JSX.Element = ({ data }: { data: ITerm[] }) => {
  return (
      <main>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Label</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Short Form</TableCell>
              <TableCell>Url</TableCell>
              <TableCell>Is Defining Ontology</TableCell>
              <TableCell>Is Obsolete</TableCell>
              <TableCell>Is Preferred Root</TableCell>
              <TableCell align="right">Is Root</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: ITerm, index: number) => (
                <TableRow key={index}>
                  <TableCell><strong>{index + 1}</strong></TableCell>
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.short_form}</TableCell>
                  <TableCell><a href={row.iri} target="_blank" rel="noreferrer">{row.iri}</a></TableCell>
                  <TableCell>
                    {row.is_defining_ontology ? <CheckIcon color='success'></CheckIcon> : <CloseIcon color='error'></CloseIcon>}
                  </TableCell>
                  <TableCell>
                    {row.is_obsolete ? <CheckIcon color='success'></CheckIcon> : <CloseIcon color='error'></CloseIcon>}
                  </TableCell>
                  <TableCell>
                    {row.is_preferred_root ? <CheckIcon color='success'></CheckIcon> : <CloseIcon color='error'></CloseIcon>}
                  </TableCell>
                  <TableCell align="right">
                    {row.is_root ? <CheckIcon color='success'></CheckIcon> : <CloseIcon color='error'></CloseIcon>}
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
  )
}

export default Main
