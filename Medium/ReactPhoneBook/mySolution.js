import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [formData, setFormData] = useState({
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  }) 

  const handleChange = ({target: {name, value}}) => {
    const updatedFormData = {...formData};
    updatedFormData[name]=value;
    setFormData({...updatedFormData})
  }
  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        value={formData.userFirstname}
        onChange={handleChange}
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        value={formData.userLastname}
        onChange={handleChange}
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        value={formData.userPhone}
        onChange={handleChange}
        type='text'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
        onClick={() => addEntryToPhoneBook(formData)}
      />
    </form>
  )
}

function InformationTable({tableData = []}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {tableData.map(({userFirstname, userLastname, userPhone}) => (
          <tr>
            <td style={style.tableCell}>{userFirstname}</td>
            <td style={style.tableCell}>{userLastname}</td>
            <td style={style.tableCell}>{userPhone}</td>
          </tr>
        ))}
      </thead> 
    </table>
  );
}

function Application(props) {
  const [contacts, setContacts] = useState([]);
  const handleAddContact = (newContact) => {
    const updatedContacts = [...contacts];
    const updatedSortedContacts = insertContactSorted(updatedContacts, newContact, 'userLastname');
    setContacts([...updatedSortedContacts]);
  }

  const insertContactSorted = (arr, contact, sortKey) => {
    if(arr.length === 0) return [contact];
    else {
      const sortedArr = [...arr];
      let inserted = false
      for(let index=0; index < arr.length; index++) {
        if(contact[sortKey] < arr[index][sortKey]) {
          sortedArr.splice(index, 0, contact);
          inserted = true
          break;
        }
      }
      if(!inserted) sortedArr.push(contact)
      return sortedArr;
    }
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={handleAddContact} />
      <InformationTable tableData={contacts} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);