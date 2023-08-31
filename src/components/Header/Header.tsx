interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isOpen: boolean
}

export function Header({ setIsOpen, isOpen }: Props) {
  return (
    <div className='flex justify-between items-center px-5 py-3 overflow-hidden'>
      <div className="flex gap-5">
        <button className="lg:hidden" onClick={() => setIsOpen((prevState) => !prevState)}>
          <img src={isOpen ? './images/closeIcon.svg' : './images/mobileMenu.svg'} alt="menu" />
        </button>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        <img src="./images/questionsIcon.svg" alt="questions" className="mt-auto" />
        <p className='bg-userBg rounded-full text-white text-lg font-medium text-center py-1 px-2'>
          RJ
        </p>
      </div>
    </div>
  )
}
