import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { dataset } from './data/data_3_items'

const requiredCols = ['id', 'gen', 'sp', 'ssp', 'group', 'en', 'cnt', 'loc', 'type', 'length', 'time', 'date', 'uploaded', 'bird-seen', 'smp']

export const TableComponent = () => {
  const getColumns = (): GridColDef[] => {
    return Object.keys(dataset[0]).filter(obj => {
      return requiredCols.includes(obj)
    }).map(obj => {
      return ({
        field: obj,
        headerName: obj.toUpperCase(),
        width: 120
      })
    })
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dataset}
        columns={getColumns()}
      />
    </div>
  )
}