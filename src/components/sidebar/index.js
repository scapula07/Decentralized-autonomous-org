import reachImg from "../../assests/logo.png"
import {AiFillHome,AiFillGithub} from "react-icons/ai"
import {MdHowToVote,MdAdminPanelSettings} from "react-icons/md"
import {BiTime} from "react-icons/bi"
import {FaDiscord} from "react-icons/fa"
const SideBar=()=>{
  return(
    <div className="h-full px-6 ">
        <div className="title-top flex w-full justify-center py-6 border-b border-slate-200">
            <h5 className="text-white text-md font-bold">RE<span><img src={reachImg} alt="" className="inline w-4 h-4" /></span>CH <span className="font-light"> DAO</span></h5>
        </div>

        <div className="lists  py-12">
            <main className="flex flex-col space-y-6">
                <h5 className="flex items-center space-x-4"><AiFillHome  className="text-lg text-white"/><span className="text-white">Home</span></h5>
                <h5 className="flex items-center space-x-4"><MdHowToVote  className="text-lg text-white"/><span className="text-white">Polls</span></h5>
                <h5 className="flex items-center space-x-4"><MdAdminPanelSettings  className="text-lg text-white"/><span className="text-white">Governor</span></h5>
                <h5 className="flex items-center space-x-4"><BiTime  className="text-lg text-white"/><span className="text-white">Periods</span></h5>

            </main>

        </div>

        <div className="socials w-full relative pt-56  ">
          <main className="flex justify-center border-t py-8 space-x-4 ">
            <h5 className="flex items-center "><AiFillGithub className="text-white text-lg "/></h5>
            <h5 className="flex items-center"><FaDiscord  className="text-white text-lg "/></h5>
            </main>
        </div>

    </div>
  )
}

export default SideBar