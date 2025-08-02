import Content from "./components/Content"
import SideBar from "./components/SideBar"

function App() {
  return (
   <div>


      <div className="flex justify-between pr-20">

        <SideBar/>

        <div className="mt-20">

        <Content />
        </div>

      </div>


   </div>
  )
}

export default App