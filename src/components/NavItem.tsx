// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const NavItem = ({ href, children }: { href: string, children: string | any[]}) => {
  return (
    <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
      <a href={href} className={`block px-3 py-2 rounded-md`}>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
        {children}
      </a>
    </li>
  )
}