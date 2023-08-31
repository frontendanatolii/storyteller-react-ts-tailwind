import { useState, useEffect } from "react";
import { Story } from "../../types/storyType";

interface Props {
  setStories: React.Dispatch<React.SetStateAction<Story[]>>,
  stories: Story[],
  lastElementOnPage: number,
  firstElementOnPage: number
}

export function SearchStories({setStories, stories, lastElementOnPage, firstElementOnPage}: Props) {
  const [visibleStatus, setVisibleStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const onStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVisibleStatus(event.target.value);
  };

  const changeVisibleStories = () => {
    setStories(stories.filter(story => story.status === visibleStatus));
  };

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    setStories(stories.filter(story => story.title.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery]);

  useEffect(() => {
    if (visibleStatus === 'All') {
      setStories(stories)
    } else {
      changeVisibleStories();
    }
  }, [visibleStatus]);

  return (
    <div className='flex flex-col pt-5'>
      <div className="flex mb-4 justify-between">
        <h1 className='text-3xl font-bold'>Stories</h1>
        <button className='greenButton px-3 flex lg:hidden'>
          <p className="text-2xl text-center">+</p>
          New Story
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-8 items-center'>
          <div className='flex border-solid border border-[#BBBCC2] rounded-md'>
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 rounded-l-md w-full focus:outline-none"
              onChange={onQueryChange}
            />
            <img src="./images/selectIcon.svg" alt="" className='bg-searchIcon py-2 px-3 rounded-r-md' />
          </div>
          <select
            value={visibleStatus}
            onChange={onStatusChange}
            className='py-2 px-3 w-56 border-solid border border-[#BBBCC2] rounded-md'
          >
            <option value="All">All Statuses</option>
            <option value="Live">Live</option>
            <option value="Past">Past</option>
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled</option>
          </select>
          <p className="hidden lg:block">Showing {firstElementOnPage} to {lastElementOnPage} of {stories.length}</p>
        </div>
        <button className='greenButton py-1 px-4 hidden lg:flex'>
          <p className="text-2xl text-center">+</p>
          New Story
        </button>
      </div>
    </div>
  )
}
