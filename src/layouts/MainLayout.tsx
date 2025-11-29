import Navbar from "../components/Navbar"

const MainLayout = ({children,title}:any) => {
  document.title = (title ? title + " | " : "") + "My Blogs"
  return (
    <div>
        <div className='sticky top-0 w-full h-full bg-[#2079b4] z-50'>
            <Navbar />
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainLayout