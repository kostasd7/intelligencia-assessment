import React from 'react'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableIcon from './TableIcon'
import BarChart from './BarChart'
import { ITerm } from '../interfaces/ITerm'

export const Main: ({ data }: { data: ITerm[] }) => JSX.Element = ({ data }: { data: ITerm[] }) => {
  const labelData = data.map((term: ITerm) => term.label)

  return (
    <main style={{ padding: '20px 40px' }}>
      <BarChart labelData={labelData}></BarChart>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Label</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Link</TableCell>
              <TableCell align="center">Is Defining Ontology</TableCell>
              <TableCell align="center">Is Obsolete</TableCell>
              <TableCell align="center">Is Preferred Root</TableCell>
              <TableCell align="center">Is Root</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: ITerm, index: number) => (
              <TableRow key={index}>
                <TableCell component="th">{index + 1}</TableCell>
                <TableCell><strong>{row.label}</strong></TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <Link href={row.iri} target="_blank" rel="noreferrer" underline="hover">{row.short_form}</Link>
                </TableCell>
                <TableIcon isChecked={row.is_defining_ontology}></TableIcon>
                <TableIcon isChecked={row.is_obsolete}></TableIcon>
                <TableIcon isChecked={row.is_preferred_root}></TableIcon>
                <TableIcon isChecked={row.is_root}></TableIcon>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  )
}

export default Main
