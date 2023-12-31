import { useState, useEffect } from 'react'


export default function TransactionForm({ onCreate }) {
  const [newTodo, setNewTodo] = useState({
    name: '',
    description: '',

    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'amount' ? Number(value) : value;

    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: newValue,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newTodo);
    setNewTodo({
      amount: 0,
      description: '',

    });
  };


  return (
    <>
      <h3>Add a Income</h3>
      <form  onSubmit={handleSubmit}>
       
       <label>
         <span>Descritpion ($):</span>
         <input
             type="text"
             name="description"
             placeholder="Description"
             value={newTodo.description}
            onChange={handleChange}
             required
         />
       </label>
       <label>
         <span>Amount ($):</span>
         <input
             type="number"
             name="amount"
             placeholder="amount"
             value={newTodo.amount}
             onChange={handleChange}
             required
         />
       </label>
       <button>Add Transaction</button>
     </form>
    </>
  )
}

