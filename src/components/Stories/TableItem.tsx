import { Story } from "../../types/storyType";

interface Props {
  story: Story,
  setStories: React.Dispatch<React.SetStateAction<Story[]>>,
}

export function TableItem({ 
  story,
  setStories
}: Props) {
  const {
    id,
    title, 
    publishDate, 
    photos, 
    lastModifyDate, 
    status, 
    liveFrom, 
    ends
  } = story

  function checkStatus() {
    switch (status) {
      case 'Live':
        return 'statusLive'
      case 'Past': 
        return 'statusPast'
      default:
        return 'statusDraft'
    }
  };

  const onDeleteStory = (id: number) => {
    setStories((prevStories) => prevStories.filter(story => story.id !== id))
  }

  return (
    <tr className="w-full">
      <td className="py-4">
        <div className="flex flex-col pr-5">
          <h3 className='text-storyTitle text-lg'>
            {title}
          </h3>
          <p className='text-storyPublishDateColor font-normal'>
            {publishDate}
          </p>
        </div>
      </td>
      <td>
        <div className="flex gap-1 pr-5">
          {photos.slice(0, 5).map(photo => (
            <img src={photo} alt="event moments" key={photo} />
          ))}
          {photos.length > 5 ? (
            <div className='bg-otherPhotosBg text-center rounded-sm px-1 text-lg flex items-center'>
              +{photos.length - 5}
            </div>
          ) : null}
        </div>
      </td>
      <td className="storyDate pr-5">{lastModifyDate}</td>
      <td>
        <p className={'status pr-5 ' + checkStatus()}>{status}</p>
      </td>
      <td className='storyDate pr-5'>{!liveFrom ? '—' : liveFrom}</td>
      <td className="storyDate pr-5">{!ends ? '—' : ends}</td>
      <td>
        <button onClick={() => onDeleteStory(id)} className="border-solid border-2 border-red-500 px-4 py-[11px] rounded-md">
          <img src="./images/deleteIcon.svg" alt="delete icon" />
        </button>
      </td>
      <td>
        <div className="greenButton py-2 px-4">
          <img src="./images/editIcon.svg" alt="edit icon" />
          <p>Edit</p>
        </div>
      </td>
    </tr>
  )
}
