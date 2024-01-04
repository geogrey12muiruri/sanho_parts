import React from 'react';
import { SiVolvo } from "react-icons/si";
import FilterImage from '../../assets/image/filter1.png'
import FilterImage2 from '../../assets/image/filter2.jpeg'
import FilterImage3 from '../../assets/image/filter3.jpeg'
import FilterImage4 from '../../assets/image/filter4.jpeg'

const FiltersPage = () => {
  // Updated filter data
  const filtersData = [
    { partNumber: 'D638-002-02', description: 'Fuel filter', viewInWebLink: 'http://www.votai.net/search.aspx?s=13022658' },
    { partNumber: 'D17-002-02/1R0658', description: 'Oil filter', viewInWebLink: 'http://www.votai.net/search.aspx?s=13022658' },
    { partNumber: 'D00-034-01', description: 'Water separator', viewInWebLink: 'http://www.votai.net/search.aspx?s=13022658' },
    { partNumber: '6I0273T', description: 'Air filter', viewInWebLink: 'http://www.votai.net/search.aspx?s=13022658' },
    { partNumber: '61000070005', description: 'Oil filter', viewInWebLink: 'http://www.votai.net/search.aspx?s=13022658' },
    { partNumber: '612600081335', description: 'Water separator', viewInWebLink: 'http://www.votai.net/search.aspx?s=13022658' },
    {partNumber: '612600081334', description: 'fuel filter', viewInWebLink: 'https://www.bing.com/search?pglt=43&q=612600081334&cvid=230f770a548a461a937b643c463740f0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEyMjZqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531'},
    {partNumber: '612600110540', description: 'air filter', viewInWebLink: 'https://www.bing.com/search?pglt=43&q=612600110540&cvid=8e4709a8eb3c437985fb692b2d11e657&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzg5N2owajGoAgCwAgA&FORM=ANNTA1&PC=U531'},
    {partNumber: '16Y-15-07000', description: 'transmission magnet element', viewInWebLink: 'https://www.bing.com/search?pglt=43&q=16Y-15-07000&cvid=9d00142a68e44edaba43b8917602ddb3&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzc3OWowajGoAgCwAgA&FORM=ANNTA1&PC=U531'},
    {partNumber: '195-13-13420', description: 'torque filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=a18a26acba139dcfJmltdHM9MTcwMjUxMjAwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE5MQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=195-13-13420&u=a1aHR0cHM6Ly93d3cuZmlsdGVycy1raW5nLmNvbS9oeWRyYXVsaWMtZmlsdGVyLTE5NS0xMy0xMzQyMF9wMTU2MC5odG1s&ntb=1'},
    {partNumber: '16Y-75-23200', description: 'transmission&steering filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=3ad5b9bf427a9dd9JmltdHM9MTcwMjUxMjAwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3OA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-75-23200&u=a1aHR0cHM6Ly93d3cubHVzZW5nLmNjL3Byb2R1Y3RzLzE2eS03NS0yMzIwMC1maWx0ZXItZWxlbWVudC0xNWMwMjI2LXNoYW50dWktbGl1Z29uZy1kb3plcg&ntb=1'},
    {partNumber: '16Y-76-09200', description: 'steering filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=e75c3d736aeb552dJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Ng&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-76-09200&u=a1aHR0cHM6Ly93d3cuY29tcGF0aWJsZWZpbHRlci5jb20vcHJvZHVjdC9kNjBlLTgtYnVsbGRvemVyLW9pbC1maWx0ZXItZWxlbWVudC0xNnktNzYtMDkyMDAtc3RlZXJpbmctY2x1dGNoLWZpbHRlci1lbGVtZW50LTE0NC00OS0xMzg1My8&ntb=1'},
    {partNumber: '16Y-60-13000', description: 'hydraulic filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=b24b541693cc04aaJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4MQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-60-13000&u=a1aHR0cHM6Ly93d3cudG9wZmlsdHJhdGlvbnMuY29tL3Byb2R1Y3QvSHlkcmF1bGljLUZpbHRlci0xNlktNjAtMTMwMDAtSEY2MjEzLVA1NTExNjAtMTQ0LTYwMS0xMTYtMC5odG1s&ntb=1'},
    {partNumber: 'LF9009', description: 'oil filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=eda7be3892d3019aJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4OQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=LF9009&u=a1aHR0cHM6Ly93d3cub2lsZmlsdGVyLWNyb3NzcmVmZXJlbmNlLmNvbS9jb252ZXJ0L0ZMRUVUR1VBUkQvTEY5MDA5&ntb=1'},
    {partNumber: 'FS1212', description: 'fuel filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=c5d7d10413a6dcc9JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4NQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=FS1212&u=a1aHR0cHM6Ly9zaG9wLmN1bW1pbnMuY29tL1NDL3Byb2R1Y3QvZmxlZXRndWFyZC1mdWVsd2F0ZXItc2VwYXJhdG9yLXNwaW5vbi1mczEyMTIvMDF0NE4wMDAwMDQ4b1c1UUFJ&ntb=1'},
    {partNumber: 'WF2076/3305370', description: 'water filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=f6c9ab5834038e00JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4NQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=WF2076%2f3305370&u=a1aHR0cHM6Ly9zaG9wLmN1bW1pbnMuY29tL0NTU05BU3RvcmUvcy9wcm9kdWN0L2EydzROMDAwMDAzc05YZVFBTS9mbGVldGd1YXJkLXdhdGVyLXNwaW5vbi1maWx0ZXItd2YyMDc2&ntb=1'},
    {partNumber: '6127-81-7412T', description: 'air filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=483dcc7aa50dbb0bJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3OQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=6127-81-7412T&u=a1aHR0cHM6Ly93d3cuYWlyZmlsdGVyLWNyb3NzcmVmZXJlbmNlLmNvbS9jb252ZXJ0L0tPTUFUU1UvNjEyNy04MS03NDEy&ntb=1'},
    {partNumber: '175-60-27380', description: 'hydraulic filter', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=7a850b4b8fa5d5e7JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4Mw&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=175-60-27380&u=a1aHR0cHM6Ly93d3cub2lsZmlsdGVyLWNyb3NzcmVmZXJlbmNlLmNvbS9jb252ZXJ0L0tPTUFUU1UvMTc1LTYwLTI3Mzgw&ntb=1'},
  ];

  return (
    <div>
      {/* Brands Section */}
      <div className="text-center mt-8 text-white">
        <p className="text-lg font-semibold mb-2 text-orange-950">Spare parts suitable for:</p>
        <div className="flex justify-center mb-4">
           <SiVolvo className='h-5 w-5' />
          <span className="mx-2">VOLVO</span>
          <span className="mx-2">JCB</span>
          <span className="mx-2">CATERPILLAR</span>
          <span className="mx-2">Hyundai</span>
          <span className="mx-2">KOMATSU</span>
          <span className="mx-2">Shantui</span>
        </div>
        <hr className="border-gray-300 border-dashed my-4" />
      </div>

      {/* Filters Section */}
      <div className="text-center">
        <h2 className="text-3xl text-orange-950 font-bold mb-2">Filters</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the best performance for your Machine</p>
        {/* Replace with actual filter image source */}
        <div className='container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white '>
          <img src={FilterImage} alt="Filter"  />
          <img src={FilterImage2} alt="Filter"  />
          <img src={FilterImage3} alt="Filter"  />
          <img src={FilterImage4} alt="Filter"  />
        </div>
        <div className='bg-orange-950 p-8 text-white mb-10 text-xl'>
        <p className="text-gray-600 mb-4">
          Sanho filters are designed and manufactured to the specific specifications of each application.
          Using quality filtration means less component wear, reduces operational costs, and increases the lifespan of your machine.
        </p>
        <p className="italic text-sm text-gray-500 mb-4">
          In this page, we show only an overview of the parts in this family.
          Sanho has all the parts for the operation of your machine.
          For any information, please consult our technical service or your sales rep.
        </p>
        </div>
        

        {/* Filters List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtersData.map((filter) => (
            <div key={filter.partNumber} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">{filter.partNumber}</p>
              <p className="text-gray-600 mb-2">{filter.description}</p>
              <a href={filter.viewInWebLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View in Web</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersPage;
