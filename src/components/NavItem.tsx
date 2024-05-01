export const NavItem = ({ href, children }: { href: string, children: string | any[]}) => {
  return (
    <li className="flex mt-6 items-center cursor-pointer hover:text-[#EC5252] duration-150">
      <a href={href} className={`flex justify-between w-64 px-3 py-2 rounded-md`}>
        {children}
      </a>
    </li>
  )
}