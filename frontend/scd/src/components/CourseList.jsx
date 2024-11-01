

// export default CourseList;
// frontend/src/components/CourseList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedCourses, setExpandedCourses] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/courses')
//       .then(response => {
//         setCourses(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching courses:", error);
//         setLoading(false);
//       });
//   }, []);

//   const toggleVideos = (courseId) => {
//     setExpandedCourses(prevState => ({
//       ...prevState,
//       [courseId]: !prevState[courseId]
//     }));
//   };

//   if (loading) return <p>Loading courses...</p>;

//   return (
//     <div className="course-list">
//       {courses.map(course => (
//         <div 
//           key={course.id} 
//           className="course" 
//           onClick={() => toggleVideos(course.id)}
//         >
//           <h2>{course.title}</h2>
//           <p>{course.description}</p>
//           {expandedCourses[course.id] && (
//             <div className="video-list">
//               {course.videos.map((video_url, index) => (
//                 <iframe
//                   key={index}
//                   width="560"
//                   height="315"
//                   src={video_url.replace("watch?v=", "embed/")}
//                   title={`Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseList;
// frontend/src/components/CourseList.js
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedCourses, setExpandedCourses] = useState({});
//   const videoRefs = useRef({});

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/courses')
//       .then(response => {
//         setCourses(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching courses:", error);
//         setLoading(false);
//       });
//   }, []);

//   const toggleVideos = (courseId) => {
//     setExpandedCourses(prevState => ({
//       ...prevState,
//       [courseId]: !prevState[courseId]
//     }));
//   };

//   const handleVideoPause = (videoId, event) => {
//     const currentTime = event.target.currentTime;
//     localStorage.setItem(`video-${videoId}-time`, currentTime);
//   };

//   const handleVideoPlay = (videoId, event) => {
//     const savedTime = sessionStorage.getItem(`video-${videoId}-time`);
//     if (savedTime) {
//       event.target.currentTime = parseFloat(savedTime);
//     }
//   };

//   if (loading) return <p>Loading courses...</p>;

//   return (
//     <div className="course-list">
//       {courses.map(course => (
//         <div 
//           key={course.id} 
//           className="course" 
//           onClick={() => toggleVideos(course.id)}
//         >
//           <h2>{course.title}</h2>
//           <p>{course.description}</p>
//           {expandedCourses[course.id] && (
//             <div className="video-list">
//               {course.videos.map((video_url, index) => {
//                 const videoId = `${course.id}-${index}`;
//                 return (
//                   <iframe
//                     key={index}
//                     width="560"
//                     height="315"
//                     ref={el => (videoRefs.current[videoId] = el)}
//                     src={video_url.replace("watch?v=", "embed/")}
//                     title={`Video ${index + 1}`}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     onPause={(e) => handleVideoPause(videoId, e)}
//                     onPlay={(e) => handleVideoPlay(videoId, e)}
//                   ></iframe>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseList;
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/courses')
//       .then(response => {
//         setCourses(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching courses:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleVideoTimeUpdate = (e, courseId, videoIndex) => {
//     const currentTime = e.target.currentTime;
//     // Store the current time in localStorage
//     localStorage.setItem(`video_${courseId}_${videoIndex}_time`, currentTime);
//   };

//   const handleVideoLoadedMetadata = (e, courseId, videoIndex) => {
//     const savedTime = localStorage.getItem(`video_${courseId}_${videoIndex}_time`);
//     if (savedTime) {
//       e.target.currentTime = parseFloat(savedTime);
//     }
//   };

//   const isYouTubeUrl = (url) => {
//     return url.includes("youtube.com") || url.includes("youtu.be");
//   };

//   if (loading) return <p>Loading courses...</p>;

//   return (
//     <div className="course-list">
//       {courses.map(course => (
//         <div key={course.id} className="course">
//           <h2>{course.title}</h2>
//           <p>{course.description}</p>
//           <div className="video-list">
//             {course.videos.map((video_url, index) => (
//               isYouTubeUrl(video_url) ? (
//                 <iframe
//                   key={index}
//                   width="560"
//                   height="315"
//                   src={video_url.replace("watch?v=", "embed/")}
//                   title={`Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <video
//                   key={index}
//                   width="560"
//                   height="315"
//                   src={video_url}
//                   controls
//                   onTimeUpdate={(e) => handleVideoTimeUpdate(e, course.id, index)}
//                   onLoadedMetadata={(e) => handleVideoLoadedMetadata(e, course.id, index)}
//                 />
//               )
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseList;
// frontend/src/components/CourseList.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);

  const handleVideoPause = async (courseId, videoIndex) => {
    const currentTime = videoRefs.current[`${courseId}-${videoIndex}`].currentTime;

    try {
      // Send a request to update the video's URL with the timestamp
      await axios.post(`http://localhost:5000/api/courses/${courseId}/videos/${videoIndex}`, {
        currentTime
      });
      console.log(`Video timestamp updated at ${currentTime} seconds`);
    } catch (error) {
      console.error("Error updating video timestamp:", error);
    }
  };

  if (loading) return <p>Loading courses...</p>;

  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <div className="video-list">
            {course.videos.map((video_url, index) => (
              <iframe
                key={index}
                ref={(el) => (videoRefs.current[`${course.id}-${index}`] = el)}
                width="560"
                height="315"
                src={video_url.replace("watch?v=", "embed/")}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onPause={() => handleVideoPause(course.id, index)}
              ></iframe>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;

