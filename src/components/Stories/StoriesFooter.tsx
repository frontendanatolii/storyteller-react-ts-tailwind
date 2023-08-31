import { useEffect } from "react";

interface Props {
  setVisibleRows: React.Dispatch<React.SetStateAction<number>>,
  visibleRows: number,
  pages: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number
}

export function StoriesFooter({ setVisibleRows, visibleRows, pages, setCurrentPage, currentPage }: Props) {
  const onVisibleRowsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVisibleRows(+event.target.value);
  };

  const onPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(+event.target.value);
  }

  const onRightArrowClick = () => {
    setCurrentPage(prevState => prevState + 1);
  }

  const onLeftArrowClick = () => {
    setCurrentPage(prevState => prevState - 1);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [visibleRows])

  return (
    <div className="flex gap-1 lg:gap-7 justify-start lg:justify-end pt-5 pb-7 items-center w-max lg:w-full">
      <div className="flex items-center gap-2">
        <p>Page</p>
        <input
          type="number"
          placeholder="1"
          className="border-solid border border-[#BBBCC2] rounded-md px-1 py-2 lg:px-3 w-8 lg:w-14"
          min={1}
          max={pages}
          value={currentPage}
          onChange={onPageChange}
        />
        <p>of {pages}</p>
      </div>
      <select onChange={onVisibleRowsChange} value={`${visibleRows}`} className="border-solid border border-[#BBBCC2] rounded-md py-2 pr-7 pl-3">
        <option value="5">5 Rows</option>
        <option value="10">10 Rows</option>
        <option value="20">20 Rows</option>
      </select>
      <div className="flex">
        <button
          className="footerButtons rounded-l-md disabled:cursor-not-allowed disabled:bg-neutral-500"
          disabled={currentPage === 1}
          onClick={onLeftArrowClick}
        >
          <img src="./images/long-arrow-left.svg" alt="arrow left" className="w-4" />
        </button>
        <button
          className='footerButtons rounded-r-md disabled:cursor-not-allowed disabled:bg-neutral-500'
          disabled={currentPage === pages}
          onClick={onRightArrowClick}
        >
          <img src="./images/long-arrow-right.svg" alt="arrow right" className="w-4" />
        </button>
      </div>
    </div>
  )
}
