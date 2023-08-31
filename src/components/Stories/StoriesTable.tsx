import { Story } from "../../types/storyType";
import { TableItem } from "./TableItem";

export function StoriesTable({ stories, setStories }: { stories: Story[], setStories: React.Dispatch<React.SetStateAction<Story[]>> }) {
  return (
    <table className="w-max lg:w-full mt-9">
      <thead className="w-full">
        <tr className="">
          <th>
            <div className="tableHeadCell">
              <p>Title</p>
              <img src="./images/randomSortIcon.svg" alt="sort icon" />
            </div>
          </th>
          <th className="text-left">
            Pages
          </th>
          <th>
            <div className="tableHeadCell">
              <p>Last modified</p>
              <img src="./images/upSortIcon.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="tableHeadCell">
              <p>Status</p>
              <img src="./images/randomSortIcon.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="tableHeadCell">
              <p>Live from</p>
              <img src="./images/randomSortIcon.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="tableHeadCell">
              <p>Ends</p>
              <img src="./images/randomSortIcon.svg" alt="sort icon" />
            </div>
          </th>
          <th>{' '}</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {stories.map(story => (
          <TableItem
            key={story.id}
            story={story}
            setStories={setStories}
          />
        ))}
      </tbody>
    </table>
  )
}
