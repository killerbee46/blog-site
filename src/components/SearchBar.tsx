import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }:any) {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

 const handleSearch = () => {
const timer = setTimeout(() => {
  onSearch ?
  onSearch() :
  navigate(`/blogs?q=${searchText}`)
    }, 500);
    return () => clearTimeout(timer);
 }

  return (
    <div className="relative">
      <input
      type="text"
      placeholder="Search posts..."
      className="outline-0 border-2 p-1 ps-3 rounded-xl min-w-[100px] border-amber-50 text-white font-medium pr-10"
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
    />
    <div className="absolute flex h-full top-0 bottom-0 justify-center flex-col right-2 cursor-pointer text-white b-r-1 pe-1" onClick={handleSearch}>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  );
}
