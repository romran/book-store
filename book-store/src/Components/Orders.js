import React, { Component } from 'react'
import { DataTable } from 'react-data-components';

const url = 'https://api.myjson.com/bins/ba09l';

class Orders extends Component {

  state = {
    data: []
  }

  buildTable = (data) => {
 
    const tableColumns = [
      { title: 'Order Date', prop: 'date' },
      { title: 'Order', prop: 'order' },
      { title: 'Name', prop: 'name' },
      { title: 'City', prop: 'city' },
      { title: 'Street', prop: 'street' },
      { title: 'Phone', prop: 'phone', defaultContent: '<no phone>' },
     ];

    return (
      <div>
        <h2 className='text-center'>Orders</h2>
        <DataTable
          className="container"
          keys="id"
          columns={tableColumns}
          initialData={data}
          initialPageLength={10}
          initialSortBy={{ prop: 'date', order: 'ascending' }}
          pageLengthOptions={[10, 20, 30]}
        />
      </div>
    )
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then((rows) => {
        this.setState({ data: rows })
      })
  }

  render() {
    return <div>{this.buildTable(this.state.data)}</div>
  }
}

export default Orders
