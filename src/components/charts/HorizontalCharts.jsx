import Bitcoin from "../../assets/bitcoin.png";
import Ether from "../../assets/etherum.png";
import { ChartElem } from "../index";


export const options = {
   
    scales: {
        display: false,
        y: {
            display: false
        },
        x: {
            display: false
        }
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
        display: false,
        text: '',
        }
    },
};

const labels = ['', '', '', ''];


  export const data = {
    labels,
    datasets: [
      {
        data: [100, 400, 300, 200],
        backgroundColor: '#236ef9',
        borderColor: 'rgba(71, 51, 166, 1)',
        borderRadius: 9,
      }
    ],
};

export const dataTwo = {
    labels,
    datasets: [
      {
        data: [100, 300, 700, 500],
        backgroundColor: '#236ef9',
        borderColor: 'rgba(71, 51, 166, 1)',
        borderRadius: 9,
      }
    ],
};


const HorizontalChart = () => {
  return (
    <div className={`flex flex-wrap justify-around h-full`}>
        <div className={`rounded-[10px] border-[2px] border-gray-200 hover:cursor-pointer hover:shadow-lg hover:border-[#236ef9] pt-[18.71px] px-[18.71px] pb-[14.97px] mb-6 lg:min-w-[40rem]`}>
            <div className="flex justify-between items-center">
                <div className="">
                    <p className="text-[11.23px] text-gray-400">Workspace Growth</p>
                    <h4 className="text-[18.71px] font-semibold">$98, 790.00</h4>
                </div>
                <img className="w-7" src={Ether} alt={Ether} />
            </div>
            <ChartElem options={options} data={dataTwo} />
        </div>
        <div className={` rounded-[10px] border-[2px] border-gray-200 hover:cursor-pointer hover:shadow-lg hover:border-[#236ef9] pt-[18.71px] px-[18.71px] pb-[14.97px] mb-6 lg:min-w-[40rem]`}>
            <div className="flex justify-between items-center">
                <div className="">
                    <p className="text-[11.23px] text-gray-400">Workspace Growth</p>
                    <h4 className="text-[18.71px] font-semibold">$98, 790.00</h4>
                </div>
                <img className="w-7" src={Ether} alt={Ether} />
            </div>
            <ChartElem options={options} data={dataTwo} />
        </div>
    </div>
  )
}

export default HorizontalChart