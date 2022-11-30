import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
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
              <><span>{skill.name}</span></>
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
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 767,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
        {mentorsList}
        </Carousel>
      </div>
    </>
  );
};

export default MentorsPage;