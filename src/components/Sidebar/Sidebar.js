import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-[#003566ff] min-h-screen text-white font-medium font-mono py-8 px-4 space-y-5">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            Electron
          </Link>
        </div>
        <hr />
        <div>
          <Link href="/dashboard">Overview</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
