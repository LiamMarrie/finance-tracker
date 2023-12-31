import React, { useState } from 'react';

function Income({ onAddIncome }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !amount || !category || !date) { 
      setError('Please fill out all fields.');
      return;
    }
  
    const incomeData = { name, amount, date, category }; 
    onAddIncome(incomeData);
  
    //alert user new income item has been created
    alert(`New income item '${name}' has been added successfully with an amount of $${amount}.`);
  
    //reset form fields
    setName('');
    setAmount('');
    setDate('');
    setCategory('');
    setError('');
  };  

  return (
    <div>
      <h3 style={{color: 'white', maxWidth: '750px', marginBottom: '20px', fontSize: '17px', marginLeft: '40px'}}>
        Entering your income data on the <strong>income page</strong> is simple. Just input the name of the company or investment, amount earned, date, and category.
      </h3>
      <div style={{ marginLeft: '200px', marginTop: '2.5rem' }}>
        <div
          className="income-Container"
          style={{
            backgroundColor: '#3B4D66',
            color: 'white',
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '350px',
            borderRadius: '10px',
            border: '2px solid black',
            boxShadow: '8px 8px 0 0 black',
            position: 'relative',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '20px',
              position: 'absolute',
              top: '20px',
              left: '30px',
            }}
          >
            Input your income:
          </h2>
          <div
            className="inner-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ABC1E1',
              padding: '3rem',
              width: '90%',
              height: '70%',
              borderRadius: '10px',
              border: '2px solid black',
              boxShadow: '8px 8px 0 0 black',
            }}
          >
            <form className="income-inputs" onSubmit={handleSubmit} style={{ width: '80%' }}>
              <div
                className="form-group"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '1rem',
                  alignItems: 'center',
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginRight: '1rem',
                    display: 'block',
                  }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Salary"
                  style={{
                    borderRadius: '5px',
                    padding: '0.5rem',
                    width: '40%',
                    color: 'black',
                  }}
                  onChange={handleNameChange}
                />
                <label
                  htmlFor="amount"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginLeft: '2rem',
                    marginRight: '1rem',
                    display: 'block',
                  }}
                >
                  Amount:
                </label>
                <div
                  style={{
                    position: 'relative',
                    width: '40%',
                  }}
                >
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={amount}
                    placeholder="1000.00"
                    style={{
                      borderRadius: '5px',
                      padding: '0.5rem 0.5rem 0.5rem 20px',
                      width: '100%',
                      color: 'black',
                    }}
                    onChange={handleAmountChange}
                  />
                  <span
                    className="dollar-sign"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '8px',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      pointerEvents: 'none',
                      color: 'black',
                    }}
                  >
                    $
                  </span>
                </div>
              </div>
              <div
                className="form-group"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '1rem',
                  alignItems: 'center',
                }}
              >
                <label
                  htmlFor="date"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginRight: '1rem',
                    display: 'block',
                  }}
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  style={{
                    borderRadius: '5px',
                    padding: '0.5rem',
                    width: '40%',
                    color: 'black',
                  }}
                  onChange={handleDateChange}
                />
                <label
                  htmlFor="category"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginLeft: '2rem',
                    marginRight: '1rem',
                    display: 'block',
                  }}
                >
                  Category:
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  style={{
                    borderRadius: '5px',
                    padding: '0.5rem',
                    width: '40%',
                    color: 'black',
                  }}
                  onChange={handleCategoryChange}
                >
                  <option value="default" style={{ color: 'grey' }}>
                    - Select -
                  </option>
                  <option value="salary">Salary</option>
                  <option value="bonus">Bonus</option>
                  <option value="freelance">Freelance</option>
                  <option value="gifts">Gifts</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div
                className='button-container'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <button
                  type='submit'
                  style={{
                      display: 'inline-block',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      padding: '0.5rem',
                      marginTop: '1rem',
                      borderRadius: '15px',
                      border: '2px solid black',
                      backgroundColor:'#0f4c81',
                  }}
                  onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1f375f';
                      e.target.style.boxShadow = '8px 8px 0 0 black';
                      e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#0f4c81';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'scale(1)';
                  }}
                  onClick={handleSubmit}
                >
                  - Add Spending -
                </button>
              </div>
            </form>
          </div>
        </div>
        {error && (
          <div
            className="error-message"
            style={{
              color: 'red',
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Income;
