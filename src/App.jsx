import Courses from "./components/courses"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div>


      <div className="flex justify-between pr-20">

        <SideBar />
        
        <div className="flex gap-10 mt-10">
          <Courses color="bg-[#ff7f50] w-[350px] h-[140px] pt-10 pl-7 rounded-md" Course="Courses" />
          <Courses color="bg-[#87ceea] w-[350px] h-[140px] pt-10 pl-7 rounded-md" Course="Employee" />
          <Courses color="bg-[#fea500] w-[350px] h-[140px] pt-10 pl-7 rounded-md" Course="Classes" />
        </div>

      </div>


    </div>
  )
}

export default App