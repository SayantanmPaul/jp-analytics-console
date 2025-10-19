const GroupHeader = ({ lable }: { lable: string }) => {
  return (
    <header className="px-1 py-2" tabIndex={0}>
      <h2 className="text-sm font-semibold leading-5 space-y-3 w-full">{lable}</h2>
    </header>
  );
};

export default GroupHeader;
