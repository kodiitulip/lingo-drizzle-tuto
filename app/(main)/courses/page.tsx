import { getCourses, getUserProgress } from '@/db/queries';
import React from 'react';
import { List } from './list';

const CoursesPage = async () => {
  const [courses, userProgress] = await Promise.all([getCourses(), getUserProgress()]);

  return (
    <div className='h-full max-w-228 px-3 mx-auto space-y-6'>
      <h1 className='text-2xl font-bold text-neutral-700'>Language Courses</h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
