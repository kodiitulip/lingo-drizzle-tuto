import { FeedWrapper } from '@/components/bits/pages/feed-wrapper';
import { StickyWrapper } from '@/components/bits/pages/sticky-wrapper';
import { Header } from './header';
import { UserProgress } from '@/components/bits/pages/user-progress';
import { getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';

const LearnPage = async () => {
  const [userProgress] = await Promise.all([getUserProgress()]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <div className='flex flex-row-reverse gap-12 px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
