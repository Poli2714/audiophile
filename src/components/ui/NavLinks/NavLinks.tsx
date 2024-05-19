import { NavItem } from './components';

const navItemLabels = ['home', 'headphones', 'speakers', 'earphones'];

function NavLinks() {
  return (
    <>
      {navItemLabels.map((label, i) => (
        <li key={i}>
          <NavItem label={label} />
        </li>
      ))}
    </>
  );
}

export default NavLinks;
