// backend/server.js
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Endpoint to get courses with videos
app.get('/api/courses', (req, res) => {
  const query = `
    SELECT c.id, c.title, c.description, v.video_url
    FROM Courses c
    LEFT JOIN CourseVideos v ON c.id = v.course_id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching courses:', err);
      return res.status(500).json({ error: 'Failed to fetch courses' });
    }

    const courses = results.reduce((acc, row) => {
      const { id, title, description, video_url } = row;
      let course = acc.find(c => c.id === id);

      if (!course) {
        course = { id, title, description, videos: [] };
        acc.push(course);
      }
      if (video_url) course.videos.push(video_url);

      return acc;
    }, []);

    res.json(courses);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
