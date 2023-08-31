interface Props {
  image: string,
  name: string,
}

export function SidebarItem({ image, name }: Props) {
  return (
    <div className='flex gap-3 items-center w-max mb-8 pr-12 pl-6'>
      <img src={image} alt={name} />
      <p className='text-white text-sm text-center font-light'>{name}</p>
    </div>
  )
}
