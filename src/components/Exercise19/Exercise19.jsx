import React, { useState } from 'react';

// Contact form sorted by last name
const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
}

function UserForm({ users, setUsers }) {
  const [input, setInput] = useState({
    firstName: 'Coder',
    lastName: 'Byte',
    phone: '8885559999',
  });

  const handleChange = (e) => {
    setInput(prevInput => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, phone} = input;

    const newUsers = [...users, {
      firstName,
      lastName,
      phone,
    }];

    setUsers(newUsers.sort((a, b) => {
      const lastNameA = a.lastName;
      const lastNameB = b.lastName;

      return lastNameA < lastNameB ? -1 : lastNameA > lastNameB ? 1 : 0;
    }));
    setInput({
      firstName: '',
      lastName: '',
      phone: '',
    });
  }

  return (
      <form
          onSubmit={handleSubmit}
          style={style.form.container}
          className='user-form'
      >
          <label>First name:</label>
          <br />
          <input
              style={style.form.inputs}
              className='user-first-name'
              name='firstName'
              type="text"
              onChange={handleChange}
              value={input.firstName}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
              style={style.form.inputs}
              className='user-last-name'
              name='lastName'
              type='text'
              onChange={handleChange}
              value={input.lastName}
          />
          <br />
          <label>Phone:</label>
          <br />
          <input
              style={style.form.inputs}
              className='user-phone'
              name='phone'
              type='text'
              onChange={handleChange}
              value={input.phone}
          />
          <br />
          <input
              style={style.form.submitBtn}
              className='submit-btn'
              type='submit'
              value='Add User'
          />
      </form>
  )
}

function UserTable({ users }) {
  return (
    <table style={style.table} className='user-table'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {users.map((user) => (
              <tr key={user.firstName + user.lastName + user.phone}>
                  <td style={style.tableCell}>{user.firstName}</td>
                  <td style={style.tableCell}>{user.lastName}</td>
                  <td style={style.tableCell}>{user.phone}</td>
              </tr>
          )
          )}
      </thead>
    </table>
  )
}

export default function Exercise19() {
    const [users, setUsers] = useState([])
    return (
        <section className='contact-form'>
            <UserForm users={users} setUsers={setUsers} />
            <UserTable users={users} />
        </section>
    )
}
