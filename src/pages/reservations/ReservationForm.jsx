import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from '../../css/reservepage.module.css';
import { createAppointment } from '../../Redux/addReservation/addReservation';
import { getMentors } from '../../Redux/mentors/mentors';
import Input from '../../components/Input';
import Button from '../../components/Button';


const ReservationForm = () => {
  const [subject, setSubject] = useState('');
  // const [skills, setSkills] = useState('');
  const [date, setDate] = useState('');

  const { id } = useParams();
  const mentorRef = useRef(null);
  const dateRef = useRef(null);

  const myData = useSelector((state) => state.appointmentReducer, shallowEqual);

  const mentors = useSelector((state) => state.mentorsReducer);
  let mentor = mentors.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
  // {console.log(mentor)}

  const current_user = JSON.parse(useSelector((state) => state.loginStatus.user, shallowEqual));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMentors());
  }, [dispatch]);

  // const toggleMenu = () => {
  //   const navMenu = document.querySelector('#toggler');
  //   navMenu.classList.toggle(style.sidebarContainer);
  // };

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
      {/* <div id="toggler" className={style.sidebarContainer}>
        <Sidebar />
      </div> */}
      <section className={style.reserveContainer}>
        <div className={style.mainBody}>
          <div className={style.sideButton}>
            {/* <Button type="button" className={style.hamburger} onClick={toggleMenu}>
              <FaBars />
            </Button> */}
          </div>
          <div className={style.heading}>
            <h4 className={style.reserveFormHeading}> Book Appointment </h4>
          </div>
          <div className={style.bodyText}>
            <p className={style.paragraph}>
            {mentor?.bio}
            </p>
          </div>
          {/* <div className={style.success}>
            {myData.status === 200 && isSubmit ? (
              <div className={style.errors}>Reservation successful!</div>
            ) : (
              <p className={style.errorMsg}>{handleFailure()}</p>
            )}
          </div> */}
          <div className={style.formBody}>
            <form className={style.formBlock}>
              {/* <Input
                type="text"
                placeholder="skills"
                value={skills}
                className={style.formInput}
                onChange={(e) => setSkills(e.target.value)}
                required
                innerRef={skillRef}
              /> */}
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
              <Button type="submit" className={style.bookButton} onClick={() => handleSubmit()}>
                Book now
              </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationForm;