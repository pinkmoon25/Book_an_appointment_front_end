import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { deleteAppointment } from '../../Redux/addReservation/addReservation';

const ReservationsPage = () => {
  const current_user = JSON.parse(useSelector((state) => state.loginStatus.user, shallowEqual));
  console.log(current_user)
 

  const cancelAppointment = (id) => {
    dispatch(deleteAppointment(id));
  };

  return (
    <div >
        <section className="relative flex flex-col w-full h-screen py-12">
      <h2 className="ml-10 text-2xl font-bold">Reservations</h2>
     <ul className="grid 2xl:grid-cols-4 xl:grid-cols-3 justify-center md:grid-cols-2 gap-10 p-2">
      {current_user.mentors.map((m) => (
       
          <li className="bg-slate-100 pb-2 h-90 rounded justify-center overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-center">
                <img className="w-full h-50 object-cover" src={m.image} alt="Sunset in the mountains" />
              </div>

              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{`${m.name} - ${m.skills}`}</h2>
                <p className="text-gray-700 text-base">
                 {m.bio}
                </p>
                <h3 className="font-bold text-l mb-2">{m.date}</h3>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-center">
                <button type="button" title="Cancel reservation" onClick={() => cancelAppointment(m.id)}>
                  Cancel Reservation
                </button>
              </div>
            </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default ReservationsPage;