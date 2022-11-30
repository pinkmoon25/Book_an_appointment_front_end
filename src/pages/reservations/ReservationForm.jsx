import React, { useState }from 'react'


const ReservationForm = () => {
    const [date, setDate] = useState('')



  const handleSubmit = (e)=> { 
    e.preventDefault();

    console.log(date)
  }

  return (
    <div>
        <form onSubmit={handleSubmit()}>
            <h1>Reservation</h1>
              <input name='date' type='date' value={date} onChange={(e)=> setDate(e.target.value)}/>
              <select name="skills" id="skills">
                <option value='react'>react</option>
              </select>
              <input type='submit' value='Book'/> 
      </form>
    </div>
  )
}

export default ReservationForm