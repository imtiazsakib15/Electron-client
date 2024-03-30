import Link from "next/link";
import icon from "@/assets/icon.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-[#003566ff] min-h-screen text-white font-medium font-mono py-8 px-4 space-y-5">
        <div className="flex items-center gap-1">
          <Image
            className="w-6 h-6 sm:w-7 sm:h-7"
            src={icon}
            alt="Brand Icon"
          />
          <Link
            href="/"
            className="font-medium text-lg sm:text-xl font-mono text-inherit"
          >
            Electron
          </Link>
        </div>
        <hr />
        <div>
          <Link href="/dashboard">Overview</Link>
        </div>
        <div>
          <Link href="/dashboard/users/all">All User</Link>
        </div>
        <div>
          <details className="focus-visible:outline-none">
            <summary className="cursor-default">Categories</summary>
            <ul className="ps-8 pt-2 space-y-2">
              <li>
                <Link href="/dashboard/categories/all">All</Link>
              </li>
              <li>
                <Link href="/dashboard/categories/create">Create</Link>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <details className="focus-visible:outline-none">
            <summary className="cursor-default">Products</summary>
            <ul className="ps-8 pt-2 space-y-2">
              <li>
                <Link href="/dashboard/products/all">All</Link>
              </li>
              <li>
                <Link href="/dashboard/products/create">Create</Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
