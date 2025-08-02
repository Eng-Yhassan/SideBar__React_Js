import Icons from "./Icons"
import Pages from "./Pages"

function SideBar() {
    return (
        <div>


            <div>
                {/* Main div */}

                <div className="bg-green-600 w-[250px] h-screen text-white shadow-lg shadow-black">

                    {/* Side Bar */}
                    <div className="text-3xl text-right mr-4">

                    <Icons Icons="fa-bars" />
                    </div>

                    {/* Pages Div*/}
                    <div className="space-y-16 mt-20 ml-4 text-2xl">

                        <div className="flex gap-2 ">
                            <Icons Icons="fa-dashboard" />
                            <Pages page="Dashboard" />
                        </div>
                        <div className="flex gap-2 ">
                            <Icons Icons="fa-p" />
                            <Pages page="Product" />
                        </div>
                        <div className="flex gap-2 ">
                            <Icons Icons="fa-s" />
                            <Pages page="Services" />
                        </div>
                        <div className="flex gap-2 ">
                            <Icons Icons="fa-user" />
                            <Pages page="Parent" />
                        </div>
                        <div className="flex gap-2 ">
                            <Icons Icons="fa-clipboard-user" />
                            <Pages page="Attendence" />
                        </div>
                        <div className="flex gap-2 ">
                            <Icons Icons="fa-headphones" />
                            <Pages page="Help" />
                        </div>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default SideBar