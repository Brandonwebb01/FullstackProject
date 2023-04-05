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
      //renders categories
      //Gets all categories from server
      let url = "http://127.0.0.1:3001/categories";
      axios.get(url) 
         .then(res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });
         //gets all items from server
      let url1 = "http://127.0.0.1:3001/items";
      axios.get(url1)
         .then(res => {
            console.log(res.data.entries1);
            setEntries1(res.data.entries1);
         })
         .catch(error => {
            console.log(error);
         });
   }, []);//empty array like ready

   //add entry function to pass into CategoryAddForm and ItemAddForm
   const _addEntry = entry => {
      //send entry to server via axios
      //posts new entry to categories
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

      //posts new entry to items
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

   //edit entry function to pass into CategoryEditForm and ItemEditForm
   const _editEntry = entry => {
      //set selectedEntry to entry that we will be editing
      setSelectedEntry(entry);
      setEditing(true);
      //setEditing to true
      console.log("App _editEntry triggered");
   }

   const _updateEntry = entry => {
      //send entry to server via axios
      //updates entry in categories
      let url = `http://127.0.0.1:3001/categories/${entry.id}`;
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
         //updates entry in items
      let url1 = `http://127.0.0.1:3001/items/${entry.id}`;
      axios.patch(url1, {
         entry: entry
      })
         .then(res => {
            console.log(res.data.entries1);
            setEntries1(res.data.entries1);
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
      //deletes entry from categories
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
         //deletes entry from items
      let url1 = `http://localhost:3001/items/${entry.item_id}`;
      axios.delete(url1, {
         entry: entry
      })
         .then(res => {
            console.log(res.data.entries1);
            setEntries1(res.data.entries1);
         })
         .catch(error => {
            console.log(error);
         });

      console.log("App _deleteEntry triggered");
   }

   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" />
            <Route path="/Categories" element={<CategoryTable entries={entries} editEntry={_editEntry} deleteEntry={_deleteEntry} addEntry={_addEntry}
               selectedEntry={selectedEntry} updateEntry={_updateEntry} editingEntry={editing} />} />
            <Route path="/Items" element={<ItemTable entries={entries1} editEntry={_editEntry} deleteEntry={_deleteEntry} addEntry={_addEntry}
               selectedEntry={selectedEntry} updateEntry={_updateEntry} editingEntry={editing} categories={entries} />} />
         </Routes>
      </div>
   );
}

export default App;