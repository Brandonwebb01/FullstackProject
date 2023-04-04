import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";
import CategoryTable from './TableComponents/CategoryTable/CategoryTable';
import ItemTable from './TableComponents/ItemTable/ItemTable';
import Navbar from './NavbarComponent/Navbar';
import { Route, Routes } from 'react-router';

const App = props => {
   const [entries, setEntries] = useState([]);
   const [entries1, setEntries1] = useState([]);
   const [editing, setEditing] = useState(false);
   const [selectedEntry, setSelectedEntry] = useState({});

   //useEffect that fires when the component renders
   useEffect(() => {
      let url = "http://127.0.0.1:3001/categories";
      axios.get(url) //npm install axios --save
         .then(res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });

      let url1 = "http://127.0.0.1:3001/items";
      axios.get(url1) //npm install axios --save
         .then(res => {
            console.log(res.data.entries1);
            setEntries1(res.data.entries1);
         })
         .catch(error => {
            console.log(error);
         });
   }, []);//empty array like ready

   //add entry function to pass into AddForm
   const _addEntry = entry => {
      //send entry to server via axios
      //update entries with response
      console.log("App _addEntry triggered");

      let url = "http://127.0.0.1:3001/categories";
      axios.post(url, {
         entry: entry
      })
         .then(res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });

         //make a let url1
         let url1 = "http://127.0.0.1:3001/items";
         axios.post(url1, {
            entry: entry
         })
            .then(res => {
               console.log(res.data.entries1);
               setEntries1(res.data.entries1);
            })
            .catch(error => {
               console.log(error);
            });
   }

   //edit entry function to pass into EditForm
   const _editEntry = entry => {
      //set selectedEntry to entry that we will be editing
      setSelectedEntry(entry);
      setEditing(true);
      //setEditing to true
      console.log("App _editEntry triggered");
   }

   const _updateEntry = entry => {
      //send entry to server via axios
      let url = `http://127.0.0.1:3001/entries/${entry.id}`;
      axios.patch(url, {
         entry: entry
      })
         .then(res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });

      //update entries with response
      setEditing(false);
      console.log("App _updateEntry triggered");
   }

   const _deleteEntry = entry => {
      //send entry to server via axios to delete
      let url = `http://localhost:3001/categories/${entry.categories_id}`;
      axios.delete(url, {
         entry: entry
      })
         .then(res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });

      //update entries with response
      console.log("App _deleteEntry triggered");
   }

   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" />
            <Route path="/Categories" element={<CategoryTable entries={entries} editEntry={_editEntry} deleteEntry={_deleteEntry} addEntry={_addEntry} />} />
            <Route path="/Items" element={<ItemTable entries={entries1} editEntry={_editEntry} deleteEntry={_deleteEntry} addEntry={_addEntry} />} />
         </Routes>
      </div>
   );
}

export default App;