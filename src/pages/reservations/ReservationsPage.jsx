import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import classes from '../../css/reservepage.module.css';


const ReservationsPage = () => {
  const current_user = JSON.parse(useSelector((state) => state.loginStatus.user, shallowEqual));
  const [reservations, setReservations] = useState([]); 
 
  useEffect(()=>{
    const fetchReservations = async()=>{
    const res = await fetch(`http://localhost:3000/users/${current_user.id}`)
    const result = await res.json()
    setReservations(result)
    }
    fetchReservations()
  }, [])

  const deleteReservations = async (id)=>{
    const res = await fetch(`http://localhost:3000/api/v1/reservations/${id}`,{
      method: 'DELETE'
    })
    const result = await res.json()
    if(result.status === 200){
      let arr = reservations.filter((r) => r.id !== id)
      setReservations(arr)
    }
  }  

  return (
    <div >
      <section className="relative flex flex-col w-full h-screen py-12">
      <h2 className="d-flex flex-column align-items-center mb-2">Reservations</h2>
     <ul className="grid 2xl:grid-cols-4 xl:grid-cols-3 justify-center md:grid-cols-2 gap-10 p-2">
      {reservations?.map((r) => (
        <li className="bg-slate-100 pb-2 h-90 rounded justify-center overflow-hidden shadow-lg 
          transform transition duration-500 hover:scale-105" key={r.id}>
              <div className="flex justify-center">
                <img className="w-full h-50 object-cover" src={r.mentor.image} alt="Sunset in the mountains" />
              </div>

              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{`${r.mentor.name} - ${r.subject}`}</h2>
                <p className="text-gray-700 text-base">
                 {r.mentor.bio}
                </p>
                <h3 className="font-bold text-l mb-2">{r.date}</h3>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-center">
                <button type="button" title="Cancel reservation" onClick={() => deleteReservations(r.id)}>
                  Cancel Reservation
                </button>
              </div>
            </li>
            ))} 
        </ul>
        <Link to="/mentors">
          <div className={`${classes.back} d-flex justify-content-center align-items-center`}>
            <BsFillCaretLeftFill />
        </div>
        </Link>
      </section>
    </div>
  );
};

export default ReservationsPage;