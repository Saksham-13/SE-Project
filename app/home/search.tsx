import Link from "next/link"
import { Input } from "@/components/ui/input"
export default function Search() {
    return(
        <nav className="fixed top-0 z-10 w-full bg-white flex items-center justify-between px-6 py-4 border-b">
        <Link className="font-semibold text-lg" href="#">
          Used Electronics
        </Link>
        <div className="flex-1 ml-8">
          <form>
            <div className="relative">
              <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input className="pl-8 w-full bg-white" placeholder="Search products..." type="search" />
            </div>
          </form>
        </div>
      </nav>
    )
}
function IconSearch(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }