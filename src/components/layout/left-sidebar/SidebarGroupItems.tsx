interface SidebarGroupItemsProps {
  items: {
    label: string;
    href: string;
  }[];
}

const SidebarGroupItems: React.FC<SidebarGroupItemsProps> = ({ items }) => {
  return (
    <nav role="navigation" className="space-y-1 w-full">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          role="link"
          aria-label={item.label}
          tabIndex={0}
          className="flex flex-1 items-center gap-1 py-1 px-2 text-sm leading-5 text-black-100 space-y-3"
        >
          <span className="w-4 h-4 items-center justify-center flex">
            <span className="w-1.5 h-1.5 size-full rounded-full bg-black-20 " />
          </span>

          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default SidebarGroupItems;
