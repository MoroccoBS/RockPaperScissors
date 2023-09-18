import Link from "next/link";

interface FooterProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  LinkText: string;
  href: string;
}

export default function Footer({ setModal, LinkText, href }: FooterProps) {
  return (
    <div className="fixed bottom-2 w-full flex justify-between sm:flex-row flex-col gap-4 p-2 sm:px-10 px-4 items-center">
      <Link
        href={href}
        scroll={false}
        className="lowercase w-max px-8 text-xl py-2 border-2 bg-white text-DarkText rounded-xl hover:rounded-3xl hover:px-14 hover:shadow-2xl hover:scale-105 transition-all duration-500"
      >
        <span className="uppercase">{LinkText.slice(0, 1)}</span>
        {LinkText.slice(1)}
      </Link>
      <button
        onClick={() => setModal(true)}
        className="w-max px-10 text-xl py-2 border-2 border-white rounded-xl hover:rounded-3xl hover:px-12 hover:shadow-2xl transition-all duration-500"
      >
        Rules
      </button>
    </div>
  );
}
