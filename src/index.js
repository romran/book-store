/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 */
//////////////////////////////////////////
/* import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components';
import './App.css';

function buildTable(data) { */
 /*  const renderMapUrl =
    (val, row) =>
      <a href={`https://www.google.com/maps?q=${row['lat']},${row['long']}`}>
        Google Maps
      </a>; */

/*   const renderLinkUrl =
    (val, row) =>
      <a target="_blank" href={`${row['link']}`}>
        Wikipedia
  </a>;

  const tableColumns = [
    { title: 'Author', prop: 'author' },
    { title: 'Country', prop: 'country' },
    { title: 'Language', prop: 'language' },
    { title: 'Link', render: renderLinkUrl, className: 'text-center' },
    { title: 'Pages', prop: 'pages' },
    { title: 'Title', prop: 'title' },
    { title: 'Year', prop: 'year' },
 */
    /* { title: 'Name', prop: 'name' },
    { title: 'City', prop: 'city' },
    { title: 'Street address', prop: 'street' },
    { title: 'Phone', prop: 'phone', defaultContent: '<no phone>' },
    { title: 'Map', render: renderMapUrl, className: 'text-center' }, */
/*   ];

  return (
    <DataTable
      className="container"
      keys="id"
      columns={tableColumns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'author', order: 'ascending' }}
      pageLengthOptions={[5, 10, 20]}
    />
  );
}


let url = 'https://api.myjson.com/bins/1bz3lp';


fetch(url)
  .then(res => res.json())
  .then((rows) => {
    ReactDOM.render(buildTable(rows), document.getElementById('root'));
  }); */



import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './App.css';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));