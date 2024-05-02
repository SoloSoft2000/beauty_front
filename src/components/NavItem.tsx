type NavItemProps = {
  href: string;
  isActive?: boolean;
  children: string | any[];
};

export const NavItem = ({ href, isActive = false, children }: NavItemProps) => {
  const Child = () => {
    return (
      <div className={`flex justify-between w-80 px-3 py-2 rounded-md`}>
        {children}
      </div>
    );
  };

  return (
    <>
      {isActive ? (
        <a className="flex py-2 justify-center items-center bg-gray-800 text-[#E3CBBD] duration-300">
          <Child />
        </a>
      ) : (
        <a
          href={href}
          className="flex justify-center py-2 items-center bg-[#E3CBBD] text-gray-800 hover:cursor-pointer hover:text-[#E3CBBD] hover:bg-gray-500 duration-300"
        >
          <Child />
        </a>
      )}
    </>
  );
};
