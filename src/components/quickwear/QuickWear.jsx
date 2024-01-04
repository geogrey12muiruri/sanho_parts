import React from 'react';
import QuickWearImage from '../../assets/quickwear/quick1.jpeg'
import QuickWearImage2 from '../../assets/quickwear/quick2.jpeg'
import QuickWearImage3 from '../../assets/quickwear/quick3.jpeg'
import QuickWearImage4 from '../../assets/quickwear/quick4.jpeg'
import './quickwear.css'
import { CSSTransition } from 'react-transition-group';


import ShantuiIcon from '../../assets/icons/shantui.svg';
import SdlgIcon from '../../assets/icons/sdlg.ico';
import CatIcon from '../../assets/icons/cat.png';
import XgmaIcon from '../../assets/icons/xgma.png';
import KomatsuIcon from '../../assets/icons/komatsu.ico';
import XcmgIcon from '../../assets/icons/xcmg.ico';


const QuickWear = () => {
  // Updated quick wear parts data
  const quickWearData = [
    { partNumber: '16Y-80-00019', description: 'Cutting Blade', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=f6d969326e986705JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4NA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-80-00019&u=a1aHR0cHM6Ly9mb2N1cy1idWxsZG96ZXIuY29tL3Byb2R1Y3RzL3NoYW50dWktc2QxNi1idWxsZG96ZXItY3V0dGluZy1lZGdlLTE2eS04MC0wMDAxOQ&ntb=1' },
    { partNumber: '16Y-81-00003', description: 'End bit L', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=80262ff487f5977fJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3OA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-81-00003&u=a1aHR0cHM6Ly93d3cubWVwcG9uLmNvbS9wcm9kdWN0LzE2eS04MS0wMDAwMy1iaXQtZW5kLXNoYW50dWktc2QxNi8&ntb=1' },
    { partNumber: '16Y-81-00002', description: 'End bit R', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=e51abfa30c06a041JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3OA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-81-00002&u=a1aHR0cHM6Ly9mb2N1cy1idWxsZG96ZXIuY29tL3Byb2R1Y3RzL3NoYW50dWktc2QxNi1wYXJ0cy1sZWZ0LWVuZC1iaXQtMTZ5LTgxLTAwMDAyLTE2eS04MS0wMDAwMw&ntb=1' },
    {partNumber: '154-71-41270/154-70-22270', description: 'bolt&nut', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=d5a3aac11ae104bcJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4NA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=154-71-41270%2f154-70-22270&u=a1aHR0cHM6Ly9mb2N1cy1idWxsZG96ZXIuY29tL3Byb2R1Y3RzL3NoYW50dWktc2QxNi1wYXJ0cy1ib2x0cy1hbmQtbnV0cy0xNTQtNzEtNDEyNzA&ntb=1'},
    {partNumber: "16Y-84-00010", description: 'ripper tips', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=3573f850cb56bdcaJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4MA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-84-00010&u=a1aHR0cHM6Ly93d3cubWFzdC1wYXJ0cy5jb20vcHJvZHVjdC9zaGFudHVpLWJ1bGxkb3plci1zZDE2LXJpcHBlci1wb2ludC0xNnktODQtMDAwMTAv&ntb=1'},
    {partNumber: '09244-02508', description: 'pin for ripper', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=fd77bb7795019cbaJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Nw&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=09244-02508&u=a1aHR0cHM6Ly93d3cuc2otZ2V0LmNvbS9wcm9kdWN0LzA5MjQ0LTAyNTA4LWtvbWF0c3UtYnVsbGRvemVyLXBpbi1kNjUtMTU1LWQ2MC0zNTUv&ntb=1'},
    {partNumber: '154-70-11314', description: 'cutting blade', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=ee64d76c321b73bfJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4Mg&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=154-70-11314&u=a1aHR0cHM6Ly9yb21hY3BhcnRzLmNvbS8xNTQtNzAtMTEzMTQtY3V0dGluZy1lZGdlcy00NS02My1sb25nLw&ntb=1'},
    {partNumber: '154-81-11191', description: 'cutting blade', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=e5df363f40636eb4JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4Mg&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=154-81-11191&u=a1aHR0cHM6Ly9yb21hY3BhcnRzLmNvbS8xNTQtODEtMTExOTEtY3V0dGluZy1lZGdlcy0zMi04OC1sb25nLw&ntb=1'},
    {partNumber: '150-70-21346', description: 'end bit R', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=d43fb6977e7765aeJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Nw&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=150-70-21346&u=a1aHR0cHM6Ly93d3cuZmgtbmQuY29tL3Byb2R1Y3QvMTUwLTcwLTIxMzQ2LWtvbWF0c3Utc2hhbnR1aS1lbmQtYmxhZGUv&ntb=1' },
    {partNumber: '150-70-21356', description: 'end bit L', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=068b6e7ab5356240JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Nw&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=150-70-21356&u=a1aHR0cHM6Ly9yb21hY3BhcnRzLmNvbS8xNTAtNzAtMjEzNTYtZW5kLWJpdHMtaG90LWN1cHBlZC8&ntb=1'}// Add more quick wear parts as needed
  ];
  // Brand icons and corresponding names
  const brands = [
    { name: 'SDLG', icon: SdlgIcon },
    { name: 'SHANTUI', icon: ShantuiIcon },
    { name: 'CATERPILLAR', icon: CatIcon },
    { name: 'XGMA', icon: XgmaIcon },
    { name: 'KOMATSU', icon: KomatsuIcon },
    { name: 'XCMG', icon: XcmgIcon },
  ];
  return (
    <div>
      {/* Brands Section */}
      <div className="text-center mt-8 text-white p-6 w-full">
  <p className="text-lg font-semibold mb-2 text-orange-950">Spare parts suitable for:</p>
  <div className="flex justify-center mb-4 w-full">
    {brands.map((brand) => (
      <CSSTransition
        key={brand.name}
        in={true} // Change this to a state variable later
        timeout={500} // Adjust fade-in duration
        classNames="brand-fade-in"
      >
        <div className="flex items-center mx-2">
          <img src={brand.icon} alt={brand.name} className="mr-2 w-6 h-6" />
          <span>{brand.name}</span>
        </div>
      </CSSTransition>
    ))}
  </div>
  <hr className="border-gray-300 border-dashed my-4" />
</div>

      {/* Quick Wear Parts Section */}
      <div className="text-center">
        <h2 className="text-3xl text-orange-950 font-bold mb-2">Quick Wear Parts</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the best performance for your Machine</p>
        {/* Replace with actual quick wear parts image source */}
        <div className='container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white '>
          <img src={QuickWearImage} alt="Quick Wear Part" />
          <img src={QuickWearImage2} alt="Quick Wear Part" />
          <img src={QuickWearImage3} alt="Quick Wear Part" />
          <img src={QuickWearImage4} alt="Quick Wear Part" />
        </div>
        <div className="bg-orange-950/[opacity: 75%] px-8 py-8 text-orange-400 text-xl mb-10 shadow-md">
  <p className="text-gray-200 mb-4">
    Sanho quick wear parts are designed and manufactured to the specific specifications of each application.
    Using quality quick wear parts means less component wear, reduces operational costs, and increases the lifespan of your machine.
  </p>
  <p className="italic text-sm text-gray-400 mb-4">
    In this page, we show only an overview of the parts in this family.
    Sanho has all the parts for the operation of your machine.
    For any information, please consult our technical service or your sales rep.
  </p>
</div>


        {/* Quick Wear Parts List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {quickWearData.map((part) => (
            <div key={part.partNumber} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">{part.partNumber}</p>
              <p className="text-gray-600 mb-2">{part.description}</p>
              <a href={part.viewInWebLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View in Web</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickWear;
