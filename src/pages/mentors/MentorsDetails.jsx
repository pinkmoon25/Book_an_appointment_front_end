import React, { useEffect } from 'react';
import { useParams,  useLocation, Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getMentors } from '../../Redux/mentors/mentors';
import { BsArrowRightCircle, BsFillCaretLeftFill, BsStarFill, BsStar } from 'react-icons/bs';
import Rating from 'react-rating';
import classes from '../../css/mentors.module.css';


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
        <div className="flex flex-col w-full lg:w-78 lg:mr-20 py-10 px-10 lg:px-0">
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
                  {mentor.skills.map((s) => (
                    <li
                      key={s.id}
                      className="odd:bg-gray-200 bg-gray-100 py-2 px-4"
                    >
                       <div className="flex items-center justify-center">
                         <div className="w-12 mr-2">
                           <img src={s.icon} alt="Skills" />
                           </div>
                           <h3 className="grow">{s.name}</h3>
                           <div>
                             <Rating
                              step={1}
                              initialRating={s.rating}
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
                    <div className={`${classes.reserve} ${classes.reserveDiv} p-2 d-flex`}>
                <Link to= { `/reservation/${mentor.id}`} state={{mentor}} className={`btn btn-light ${classes.reserveBtn}`}>
                  Reserve
                </Link>
                <BsArrowRightCircle className="mx-2" size={40} color="white" />
                </div>
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
          <Link to="/mentors">
          <div className={`${classes.backNav} d-flex justify-content-center align-items-center`}>
            <BsFillCaretLeftFill />
        </div>
        </Link>
    </div>
  )
}

export default MentorsDetails;