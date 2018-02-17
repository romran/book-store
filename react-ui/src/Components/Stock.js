import React, { Component } from 'react'
import { DataTable } from 'react-data-components';

const url = 'https://api.myjson.com/bins/hj9u1';

class Stock extends Component {

    state = {
        data: []
    }

    buildTable = (data) => {

        const renderLinkUrl =
            (val, row) =>
                <a target="_blank" href={`${row['link']}`}>
                    Wikipedia
  </a>;

        const tableColumns = [
            { title: 'Stock ID', prop: 'stock_id' },
            { title: 'Author', prop: 'author' },
            { title: 'Title', prop: 'title' },
            { title: 'Country', prop: 'country' },
            { title: 'Language', prop: 'language' },
            { title: 'Pages', prop: 'pages' },
            { title: 'Year', prop: 'year' },
            { title: 'Link', render: renderLinkUrl, className: 'text-left' },
        ];

        return (
            <div>
                <h2 className='text-center'>Stock</h2>
                <DataTable
                    className="container"
                    keys="id"
                    columns={tableColumns}
                    initialData={data}
                    initialPageLength={10}
                    initialSortBy={{ prop: 'author', order: 'ascending' }}
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

export default Stock

