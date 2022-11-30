import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { PageSize } from '../constants/PageSize'
import { TRootState } from '../reducers'
import { setSize } from '../actions/setSize'
import { ISizeState } from '../interfaces/ISizeState'
import { ILoadingState } from '../interfaces/ILoadingState'

export const Header: () => JSX.Element = () => {
  const pageSizes = Object.values(PageSize).filter(Number.isFinite)
  const size = useSelector<TRootState, ISizeState['size']>(
    (state) => state.sizeReducer.size
  )
  const loading = useSelector<TRootState, ILoadingState['loading']>(
    (state) => state.loadingReducer.loading
  )
  const dispatch = useDispatch()
  const onChange = (event: SelectChangeEvent): void => {
    dispatch(setSize(+event.target.value))
  }

  return (
      <header>
          <AppBar position="sticky" sx={{ bgcolor: 'lightsteelblue' }}>
            <Toolbar>
              <Typography variant="h2" color="inherit" noWrap sx={{ flexGrow: 5 }}>
                Frontend Assessment
              </Typography>
                <FormControl variant="filled" disabled={loading} sx={{ flexGrow: 1 }}>
                    <InputLabel id="items">Items per page</InputLabel>
                    <Select
                        labelId="items"
                        value={`${size}`}
                        label="Items"
                        onChange={onChange}
                    >
                        {pageSizes.map((pageSize) =>
                            <MenuItem key={pageSize.toString()} value={pageSize} >{pageSize}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Toolbar>
          </AppBar>
      </header>
  )
}

export default Header
