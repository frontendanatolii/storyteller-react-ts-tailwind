export function StoriesFooter() {
  return (
    <div className="flex gap-1 lg:gap-7 justify-start lg:justify-end pt-5 pb-7 items-center w-max lg:w-full">
      <div className="flex items-center gap-2">
        <p>Page</p>
        <input
          type="number"
          placeholder="1"
          className="border-solid border border-[#BBBCC2] rounded-md px-1 py-2 lg:px-3 w-8 lg:w-12"
          min={1}
          max={1}
          value={1}
        />
        <p>of 1</p>
      </div>
      <select className="border-solid border border-[#BBBCC2] rounded-md py-2 pr-7 pl-3">
        <option value="20">20 Rows</option>
        <option value="50">50 Rows</option>
        <option value="100">100 Rows</option>
      </select>
      <div className="flex">
        <button className="footerButtons rounded-l-md">
          <img src="./images/long-arrow-left.svg" alt="arrow left" className="w-4" />
        </button>
        <button className='footerButtons rounded-r-md'>
          <img src="./images/long-arrow-right.svg" alt="arrow right" className="w-4" />
        </button>
      </div>
    </div>
  )
}
