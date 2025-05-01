interface NavbarSpanProps {
  text: string;
  href: string;
}

const NavbarSpan = ({ text, href }: NavbarSpanProps) => {
  return (
    <a
      href={href}
      className="hover:cursor-pointer text-brand-blue-500 dark:text-white dark:hover:text-brand-blue-500 hover:text-brand-blue-700 transition ease-in-out font-semibold"
    >
      {text}
    </a>
  );
};

export default NavbarSpan;
