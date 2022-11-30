import React, { useEffect } from 'react';
import { useParams,  useLocation } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getMentors } from '../../Redux/mentors/mentors';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { IoIosArrowDropright } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';


const MentorsDetails = () => {
    const mentors = useSelector((state) => state.mentorsReducer, shallowEqual);
    const dispatch = useDispatch();
  
    const { id } = useParams();
    const { state } = useLocation();
  
    useEffect(
      () => {
        dispatch(getMentors());
      },
      [dispatch],
      state,
    );
  
    let mentor = mentors.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
  
    localStorage.setItem('item', JSON.stringify(state));
  
    mentor = JSON.parse(localStorage.getItem('item'));


  const addReservation = () => {
    navigate('', { state: { mentor } });
  };

    const returnToMentors = () => {
        navigate('/mentors');
      };

  return (
    <div className="relative flex flex-col w-full h-screen lg:py-12">
    {mentor && (
      <div className="flex flex-col lg:flex-row grow h-full lg:pt-20 lg:pb-10 ">
        <div className="grow lg:w-2/5 flex items-center justify-center px-10 rounded-full aspect-square">
          <img
            src={mentor.image}
            className="object-cover block rounded-full aspect-square w-100"
            alt="Mentor"
          />
        </div>
        <div className="flex flex-col w-full lg:w-72 lg:mr-20 py-10 px-10 lg:px-0">
          <h1 className="text-center lg:text-right font-bold text-2xl">
            {mentor.name}
          </h1>
          <p className="mb-10 text-center lg:text-right">{mentor.bio}</p>
          <div className="flex flex-col grow">
            <div className="grow flex flex-col rounded-2xl overflow-hidden border">
              <div className="flex justify-center items-center gap-4 border-b">
                <h3 className="font-bold my-4">
                  Available Courses
                </h3>
              </div>
              {mentor.skills.length > 0 && (
                <ul className="grow-0">
                  {mentor.skills.map((mentorDetail) => (
                    <li
                      key={mentorDetail.id}
                      className="odd:bg-gray-200 bg-gray-100 py-2 px-4"
                    >
                       <div className="flex items-center justify-center">
                         <div className="w-12 mr-2">
                           <img src={mentorDetail.icon} alt="Skills" />
                           </div>
                           <h3 className="grow">{mentorDetail.name}</h3>
                           <div>
                             <Rating
                              step={1}
                              initialRating={mentorDetail.rating}
                              readonly
                              stop={5}
                              fractions={2}
                              emptySymbol={<BsStar color="#F4C362" />}
                              fullSymbol={<BsStarFill color="#F4C362" />}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {(mentor.skills.length === 0) && (
                  <div className="text-center text-sm p-4">
                    <p>No skills found!</p>
                  </div>
                )}
              </div>
              {mentor.skills.length > 0 && (
                <div className="my-10 flex justify-center">
                  <Button
                    child={
                      (
                        <div className="flex items-center gap-3 justify-center">
                          <p>Book now</p>
                          <IoIosArrowDropright size={20} />
                        </div>
                      )
                    }
                    onClick={addReservation}
                  />
                </div>
              )}
            </div>
            {
              mentor.skills.length === 0
              && (
                <div className="flex w-full justify-center">
                  <p>No course found for this mentor</p>
                </div>
              )
            }
          </div>
        </div>
      )}
       <Button
            variant="primary"
            type="submit"
            // className={classes.submitBtn}
            onClick={returnToMentors}
          >
            Back
          </Button>
    </div>
  )
}

{/* <div className={styles.detailContainer}>
<div className={styles.container}>
  <img src={mentor.image} alt={mentor.name} className={styles.docImage} />
  <div className={styles.mentorInfoDiv}>
    <div className={`text-end ${styles.mentorInfo}`}>
      <h1 className="fw-bolder fs-4">{mentor.name}</h1>
      <p className={styles.desc}>{mentor.bio}</p>
    </div>
    {mentor.skills.map((skill) =>(
              <><span>{skill.name}</span>
              <span>{skill.icon}</span></>
            ))}
    <div className="d-flex justify-content-end">
      <div className={`${styles.reserve} ${styles.reserveDiv} p-2 d-flex`}>
        <Link to="/reserve" state={mentor} className={`btn btn-light ${styles.reserveBtn}`}>
          Reserve
        </Link>
        <BsArrowRightCircle className="mx-2" size={40} color="white" />
      </div>
    </div>
  </div>
</div>
<Link to="/mentors">
  <div className={`${styles.backNav} d-flex justify-content-center align-items-center`}>
    <BsFillCaretLeftFill />
  </div>
</Link>
</div> */}
// )
// };

export default MentorsDetails