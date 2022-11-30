import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styles from '../../css/mentors.module.css';
import { getMentors } from '../../Redux/mentors/mentors';


const MentorsPage = () => {
  const mentors = useSelector((state) => state.mentorsReducer, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMentors());
  }, []);

  const mentorsList = mentors.map((mentor) => (
    <div key={mentor.id}>
      <Link to={`/mentors/${mentor.id}`} className={styles.mentorSingle} state={mentor}>
        <div className="d-flex flex-column align-items-center mb-5">
          <img src={mentor.image} alt={mentor.name} className={styles.img} />
          <h5 className={`text-dark p-4 ${styles.border}`}>{mentor.name}</h5>
          <p className="text-secondary">{mentor.bio}</p>
          <div>
            {mentor.skills.map((skill) =>(
              <><span>{skill.name}</span> <img src={skill.icon} alt={skill.name}/></>
            ))}
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <div className={styles.mrntorsContainer}>
        <div className={styles.header}>
          <h3>LIST OF Mentors</h3>
          <p className="text-secondary">Please select a mentor to view details</p>
        </div>
        {mentorsList}
      </div>
    </>
  );
};

export default MentorsPage;