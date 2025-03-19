import '../index.css'
import Cards from './Cards'
const NewArivals = () => {



  return (
    <div className="flex flex-col items-center justify-center " >
        <h1 className="text-[40px] font-semibold flex items-center justify-center">New Arrivals</h1>
        <div className="flex flex-row items-center justify-center w-auto bg-orange-500 ">
            <ul className="flex flex-row decoration-0 gap-10 text-2xl p-0 m-0 items-center justify-center">
                <li className="h-[40px] min-w-[108px] px-[25px cursor-pointer] text-[14px]   border border-[#ebebeb] rounded-[3px] bg-white flex items-center justify-center ">ALL</li>
                
                
            </ul>

        </div>
        <div className='w-[80%] flex flex-row flex-wrap h-auto mt-10'>
            <Cards/>
        </div>
    </div>
  )
}

export default NewArivals