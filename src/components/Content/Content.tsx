import { useState, useEffect } from "react";
import { Story } from "../../types/storyType";
import { SearchStories } from "../Stories/SearchStories";
import { StoriesFooter } from "../Stories/StoriesFooter";
import { StoriesTable } from "../Stories/StoriesTable";

const storiesFromServer: Array<Story> = [
  {
    id: 1,
    title: 'Daily Horoscope', 
    publishDate: '(No publish date set)', 
    photos: ['./images/photo1.png', './images/photo7.png', './images/photo3.png', './images/photo6.png', './images/photo5.png'], 
    lastModifyDate: 'Mar 31, 8:56 PM', 
    status: 'Draft', 
    liveFrom: null, 
    ends: null
  },
  {
    id: 2,
    title: 'Daily Horoscope', 
    publishDate: '(August 28)', 
    photos: ['./images/photo3.png', './images/photo2.png'], 
    lastModifyDate: 'Mar 31, 8:41 PM', 
    status: 'Scheduled', 
    liveFrom: 'Aug 28, 11:15 AM', 
    ends: 'Jun 7, 2:45 PM'
  },
  {
    id: 3,
    title: 'Daily Horoscope', 
    publishDate: '(October 16)', 
    photos: ['./images/photo1.png', './images/photo2.png', './images/photo8.png', './images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo6.png', './images/photo7.png'], 
    lastModifyDate: 'Mar 3, 5:11 PM', 
    status: 'Live', 
    liveFrom: 'Oct 16, 1:20 PM', 
    ends: 'Jan 12, 3:45 PM'
  },
  {
    id: 4,
    title: 'Daily Horoscope', 
    publishDate: '(No publish date set)', 
    photos: ['./images/photo1.png', './images/photo7.png', './images/photo3.png', './images/photo6.png', './images/photo5.png'], 
    lastModifyDate: 'Mar 31, 8:56 PM', 
    status: 'Draft', 
    liveFrom: null, 
    ends: null
  },
  {
    id: 5,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 2)', 
    photos: ['./images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo2.png', './images/photo8.png'], 
    lastModifyDate: 'Jul 2, 9:59 AM', 
    status: 'Past', 
    liveFrom: 'Jun 2, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 9,
    title: 'Daily Horoscope', 
    publishDate: '(August 28)', 
    photos: ['./images/photo3.png', './images/photo2.png'], 
    lastModifyDate: 'Mar 31, 8:41 PM', 
    status: 'Scheduled', 
    liveFrom: 'Aug 28, 11:15 AM', 
    ends: 'Jun 7, 2:45 PM'
  },
  {
    id: 6,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 2)', 
    photos: ['./images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo2.png', './images/photo8.png'], 
    lastModifyDate: 'Jul 2, 9:59 AM', 
    status: 'Past', 
    liveFrom: 'Jun 2, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 7,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 30)', 
    photos: ['./images/photo3.png', './images/photo8.png'], 
    lastModifyDate: 'Jun 30, 10:00 AM', 
    status: 'Live', 
    liveFrom: 'Jun 30, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 8,
    title: 'Daily Horoscope', 
    publishDate: '(October 16)', 
    photos: ['./images/photo1.png', './images/photo2.png', './images/photo8.png', './images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo6.png', './images/photo7.png'], 
    lastModifyDate: 'Mar 3, 5:11 PM', 
    status: 'Live', 
    liveFrom: 'Oct 16, 1:20 PM', 
    ends: 'Jan 12, 3:45 PM'
  },
  {
    id: 10,
    title: 'Daily Horoscope', 
    publishDate: '(No publish date set)', 
    photos: ['./images/photo1.png', './images/photo7.png', './images/photo3.png', './images/photo6.png', './images/photo5.png'], 
    lastModifyDate: 'Mar 31, 8:56 PM', 
    status: 'Draft', 
    liveFrom: null, 
    ends: null
  },
  {
    id: 11,
    title: 'Daily Horoscope', 
    publishDate: '(August 28)', 
    photos: ['./images/photo3.png', './images/photo2.png'], 
    lastModifyDate: 'Mar 31, 8:41 PM', 
    status: 'Scheduled', 
    liveFrom: 'Aug 28, 11:15 AM', 
    ends: 'Jun 7, 2:45 PM'
  },
  {
    id: 12,
    title: 'Daily Horoscope', 
    publishDate: '(October 16)', 
    photos: ['./images/photo1.png', './images/photo2.png', './images/photo8.png', './images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo6.png', './images/photo7.png'], 
    lastModifyDate: 'Mar 3, 5:11 PM', 
    status: 'Live', 
    liveFrom: 'Oct 16, 1:20 PM', 
    ends: 'Jan 12, 3:45 PM'
  },
  {
    id: 13,
    title: 'Daily Horoscope', 
    publishDate: '(No publish date set)', 
    photos: ['./images/photo1.png', './images/photo7.png', './images/photo3.png', './images/photo6.png', './images/photo5.png'], 
    lastModifyDate: 'Mar 31, 8:56 PM', 
    status: 'Draft', 
    liveFrom: null, 
    ends: null
  },
  {
    id: 14,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 2)', 
    photos: ['./images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo2.png', './images/photo8.png'], 
    lastModifyDate: 'Jul 2, 9:59 AM', 
    status: 'Past', 
    liveFrom: 'Jun 2, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 15,
    title: 'Daily Horoscope', 
    publishDate: '(August 28)', 
    photos: ['./images/photo3.png', './images/photo2.png'], 
    lastModifyDate: 'Mar 31, 8:41 PM', 
    status: 'Scheduled', 
    liveFrom: 'Aug 28, 11:15 AM', 
    ends: 'Jun 7, 2:45 PM'
  },
  {
    id: 16,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 2)', 
    photos: ['./images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo2.png', './images/photo8.png'], 
    lastModifyDate: 'Jul 2, 9:59 AM', 
    status: 'Past', 
    liveFrom: 'Jun 2, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 17,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 30)', 
    photos: ['./images/photo3.png', './images/photo8.png'], 
    lastModifyDate: 'Jun 30, 10:00 AM', 
    status: 'Live', 
    liveFrom: 'Jun 30, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 18,
    title: 'Daily Horoscope', 
    publishDate: '(October 16)', 
    photos: ['./images/photo1.png', './images/photo2.png', './images/photo8.png', './images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo6.png', './images/photo7.png'], 
    lastModifyDate: 'Mar 3, 5:11 PM', 
    status: 'Live', 
    liveFrom: 'Oct 16, 1:20 PM', 
    ends: 'Jan 12, 3:45 PM'
  },
  {
    id: 19,
    title: 'Weekly Wallpapers', 
    publishDate: '(June 30)', 
    photos: ['./images/photo3.png', './images/photo8.png'], 
    lastModifyDate: 'Jun 30, 10:00 AM', 
    status: 'Live', 
    liveFrom: 'Jun 30, 8:28 AM', 
    ends: 'Jul 30, 3:31 AM'
  },
  {
    id: 20,
    title: 'Daily Horoscope', 
    publishDate: '(October 16)', 
    photos: ['./images/photo1.png', './images/photo2.png', './images/photo8.png', './images/photo3.png', './images/photo4.png', './images/photo5.png', './images/photo6.png', './images/photo7.png'], 
    lastModifyDate: 'Mar 3, 5:11 PM', 
    status: 'Live', 
    liveFrom: 'Oct 16, 1:20 PM', 
    ends: 'Jan 12, 3:45 PM'
  },
]

export function Content() {
  const [stories, setStories] = useState(storiesFromServer);
  const [visibleStories, setVisibleStories] = useState(stories);
  const [visibleRows, setVisibleRows] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  // find index of first element of current page
  const firstIndex = ((currentPage * visibleRows) - visibleRows);
  // find index of last element of current page
  const lastIndex = (visibleRows * currentPage);

  useEffect(() => {
    setVisibleStories(stories);
  }, [stories])

  return (
    <div className='bg-contentBg h-full w-full px-3 lg:px-8 overflow-x-hidden flex flex-col justify-between'>
      <div>
        <SearchStories
          stories={stories}
          setStories={setVisibleStories}
          firstElementOnPage={firstIndex + 1 }
          lastElementOnPage={lastIndex}
        />
        <div className="inline-block lg:block bg-contentBg overflow-x-scroll lg:overflow-x-hidden w-full">
          <StoriesTable
            stories={visibleStories.slice(firstIndex, lastIndex)}
            setStories={setStories}
          />
        </div>
      </div>
      <StoriesFooter
        setVisibleRows={setVisibleRows}
        visibleRows={visibleRows}
        pages={Math.round((visibleStories.length + 1) / visibleRows)}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
