import {
  CreditCardIcon,
  HomeIcon,
  ArrowDownOnSquareStackIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Inicio',
    href: '/dashboard',
    icon: HomeIcon 
  },

  {
    name: 'Faturas',
    href: '/dashboard/fatura',
    icon: CreditCardIcon,
  },
  { 
    name: 'Contrato',
    href: '/dashboard/contrato',
    icon: ArrowDownOnSquareStackIcon,
    },

    {
      name: 'Suporte',
      href: '/dashboard/suporte',
      icon: ChatBubbleLeftEllipsisIcon,

    }
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-100 hover:text-yellow-700 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
