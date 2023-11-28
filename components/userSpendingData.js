// UserSpendingData.js
import React, { useState } from 'react';

function UserSpendingData({ onAddSpending }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handlePriceChange = (event) => setPrice(event.target.value);
    const handleDateChange = (event) => setDate(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !price || !category || !date) {
            setError('Please fill out all fields.');
            return;
        }

        const inputData = { name, price, date, category };
        onAddSpending(inputData); // Call the function passed as a prop

        // Clear the form fields and error message
        setName('');
        setPrice('');
        setDate('');
        setCategory('');
        setError('');
    };

    return (
        /* USER SPENDING DATA */
        <div style={{ marginLeft: '200px', marginTop: '2.5rem' }}>
            <div className='spending-Container' style={{
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
                position: 'relative'
            }}>
                <h2 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginLeft: '20px',
                    position: 'absolute',
                    top: '20px',
                    left: '30px',
                }}>Input your spending:</h2>
                <div className='inner-container' style={{
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
                }}>
                    <form className='spending-inputs' onSubmit={handleSubmit} style={{ width: '80%' }}>
                        <div className='form-group' style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '1rem',
                            alignItems: 'center',
                        }}>
                            <label htmlFor='name'
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginRight: '1rem',
                                    display: 'block',
                                }}>
                                Name:
                            </label>
                            <input type='text' id='name' name='name' value={name} placeholder='Starbucks' style={{
                                borderRadius: '5px',
                                padding: '0.5rem',
                                width: '40%',
                                color: 'black',
                            }} onChange={handleNameChange} />
                            <label htmlFor='price' style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                marginLeft: '2rem',
                                marginRight: '1rem',
                                display: 'block',
                            }}>
                                Price:
                            </label>
                            <div style={{
                                position: 'relative',
                                width: '40%',
                            }}>
                                <input
                                    type='text'
                                    id='price'
                                    name='price'
                                    value={price}
                                    placeholder='$5.00'
                                    style={{
                                        borderRadius: '5px',
                                        padding: '0.5rem 0.5rem 0.5rem 20px',
                                        width: '100%',
                                        color: 'black',
                                    }}
                                    onChange={handlePriceChange}
                                />
                                <span className='dollar-sign' style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '8px',
                                    transform: 'translateY(-50%)',
                                    fontSize: '18px',

                                    pointerEvents: 'none',
                                    color: 'black',
                                }}>
                                    $
                                </span>
                            </div>
                        </div>
                        <div className='form-group' style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '1rem',
                            alignItems: 'center',
                        }}>
                            <label htmlFor='date'
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginRight: '1rem',
                                    display: 'block',
                                }}>
                                Date:
                            </label>
                            <input type='date' id='date' value={date} style={{
                                borderRadius: '5px',
                                padding: '0.5rem',
                                width: '40%',
                                color: 'black',
                            }} onChange={handleDateChange} />
                            <label htmlFor='category' style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                marginLeft: '2rem',
                                marginRight: '1rem',
                                display: 'block',
                            }}>
                                Category:
                            </label>
                            <select id='category' name='category' value={category} style={{
                                borderRadius: '5px',
                                padding: '0.5rem',
                                width: '40%',
                                color: 'black',
                            }} onChange={handleCategoryChange}>
                                <option value='groceries'>Groceries</option>
                                <option value='food'>Food</option>
                                <option value='restaurants'>Restaurants</option>
                                <option value='entertainment'>Entertainment</option>
                                <option value='clothing'>Clothing</option>
                                <option value='gifts'>Gifts</option>
                                <option value='transportation'>Transportation</option>
                                <option value='bills'>Bills</option>
                                <option value='health'>Health</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                        <div className="button-container" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <button type='submit' style={{
                                display: 'inline-block',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                padding: '0.5rem',
                                marginTop: '1rem',
                                borderRadius: '15px',
                                border: '2px solid black',
                                backgroundColor: '#EE5454',
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#f22323';
                                    e.target.style.boxShadow = '8px 8px 0 0 black';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#EE5454';
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
                <div className='error-message' style={{
                    color: 'red',
                    textAlign: 'center',
                    marginTop: '1rem',
                }}>
                    {error}
                </div>
            )}
        </div>
    );
}

export default UserSpendingData;
