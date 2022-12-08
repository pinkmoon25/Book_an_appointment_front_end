import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from '../../css/reserveform.module.css';
import createAppointment from '../../Redux/addReservation/addReservation';
import { getMentors } from '../../Redux/mentors/mentors';
import Sidebar from '../sidebar/sidebar'
import Input from '../../components/Input';
import Button from '../../components/Button';


const ReservationForm = () => {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');

  const { id } = useParams();
  const mentorRef = useRef(null);
  const dateRef = useRef(null);


  const mentors = useSelector((state) => state.mentorsReducer);
  let mentor = mentors.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
 
  const current_user = JSON.parse(useSelector((state) => state.loginStatus.user, shallowEqual));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMentors());
  }, [dispatch]);


  const handleSubmit = () => {
    const newData = {
      mentor_id: parseInt(id, 10),
      user_id: current_user.id,
      date,
      subject,
    };
    dispatch(createAppointment(newData));
    navigate('/reservations');
  }


  return (
    <>
      {/* <div id="toggler" className={style.sidebarContainer}> */}
        <Sidebar />
      {/* </div> */}
      <section className={style.reservationContainer}>
        <div className={style.mainBody}>
          <div className={style.heading}>
            <h1 className={style.reserveFormHeading}> Book Appointment </h1>
          </div>
          <div className={style.bodyText}>
            <h1 className={style.paragraph}>
            {mentor?.bio}
            </h1>
          </div>
            <div className={style.formBody}>
            <form className={style.formBlock}>
              <select
                name="availableMentors"
                id="availableMentors"
                value={subject}
                className={style.selectMentors}
                onChange={(e) => setSubject(e.target.value)}
                ref={mentorRef}
              >
                <option value="">
                  Choose a skill
                </option>
                {mentor?.skills.map((m) => (
                  <option key={m.id} value={m.name}>
                    {m.name}
                  </option>
                ))}
              </select>
              <Input
                type="date"
                value={date}
                className={style.inputDate}
                innerRef={dateRef}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <br />
            </form>
          </div>
          <div className={style.buttonBody}>
              <Button type="submit" className={style.formBtn} onClick={() => handleSubmit()}>
                Book now
              </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationForm;