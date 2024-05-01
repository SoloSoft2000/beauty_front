export const NavItem = ({ href, children }: { href: string, children: string}) => {
  return (
    <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
      <a href={href} className={`block px-3 py-2 rounded-md`}>
        {children}
      </a>
    </li>
  )
}