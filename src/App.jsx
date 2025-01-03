import React from 'react'
import DataTable from 'react-data-table-component'
import './App.css'

function App() {
  const data = [
    {id:1,name:'jjohn',email:'ab@a.com',age:10},
    {id:2,name:'jjulia',email:'da@a.com',age:9},
    {id:3,name:'jjaam',email:'aa@a.com',age:18},
    {id:4,name:'Rafi',email:'axx@a.com',age:12},
    {id:5,name:'jjia',email:'qqa@a.com',age:17},
    {id:6,name:'jabed',email:'lla@a.com',age:19},
    {id:7,name:'jubbi',email:'amm@a.com',age:20},
    {id:8,name:'kalin',email:'yja@a.com',age:11},
    {id:9,name:'fahad',email:'uka@a.com',age:10},
    {id:10,name:'lilaa',email:'uka@a.com',age:10},
    {id:11,name:'Nina',email:'uka@a.com',age:10},
    {id:12,name:'Ruby',email:'uka@a.com',age:10},
    {id:13,name:'Junior',email:'uka@a.com',age:10},
  ]
  const columns = [
    {name:'ID', selector:row => row.id, sortable:true},
    {name:'Name', selector:row => row.name, sortable:true},
    {name:'Email', selector:row => row.email, sortable:true},
    {name:'Age', selector:row => row.age, sortable:true},
  ]
  return (
    <>
      <h1>React data table</h1>
      <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage={5}
      defaultSortField="name"
      highlightOnHover
      defaultSortAsc={true}
      />
    </>
  );
}

export default App
