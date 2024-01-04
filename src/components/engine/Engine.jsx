import React from 'react';
import EngineImage from '../../assets/image/engine1.jpeg'
import EngineImage2 from '../../assets/image/engine2.jpeg'
import EngineImage3 from '../../assets/image/engine3.jpeg'
import EngineImage4 from '../../assets/image/engine4.jpeg'

const Engine = () => {
  // Updated filter data
  const engineData = [
    { partNumber: 'CP10Z-P10Z005', description: 'injector pump', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=b982fc9b3284db7bJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3MQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=CP10Z-P10Z005&u=a1aHR0cHM6Ly93d3cudHJhZGV3aGVlbC5jb20vcC9zaGFuZy1jaGFpLWRpZXNlbC1lbmdpbmUtcGFydHMtZnVlbC0xMDU2MDU4Lw&ntb=1' },
    { partNumber: 'C06AL-06AL102+A', description: 'shut off solenoid', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=0e2fab7fe5192041JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTIwNQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=C06AL-06AL102%2bA&u=a1aHR0cHM6Ly9tY2MtcGFydHMuZW4ubWFkZS1pbi1jaGluYS5jb20vcHJvZHVjdC9GZExhTWxnV0FEUlYvQ2hpbmEtTG92b2wtRW5naW5lLUNyYW5rc2hhZnQtQzA2YWwtMDZhbDEwMi0wNmFsMTAyLmh0bWw&ntb=1' },
    { partNumber: 'S00004327+01', description: 'alternator', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=a2cbf1b8b15e11daJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Mg&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=S00004327%2b01&u=a1aHR0cDovL3d3dy5jbmtvbWF0c3UuY29tL0QyNzVBLTUtRDI3NUFYLTVELWJ1bGxkb3plci1yYWRpYXRvci0xN00tMDMtNDExMDEtMTdNLTAzLTQxMTExLTE5NS0wMy01MTExMC0xOTUtMDMtMDA2MDAtMTk1LTAzLTAwNzAwLXBkOTY1NTg2NDYuaHRtbA&ntb=1' },
    { partNumber: 'C11AB-4N3181+B', description: 'start motor', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=252e973ca5c3866fJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Nw&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=C11AB-4N3181%2bB&u=a1aHR0cHM6Ly93d3cubWVwcG9uLmNvbS9wcm9kdWN0L2MxMWFiLTRuMzE4MWItYzYxMjEtc2MxMS1zdGFydGVyLW1vdG9yLTQxOTAwMDA1MzYxMzItNDExMDAwMDE4NjEyMy03MjAwMDAwNTQ3LTg2MDExMjk3Mi1wczA5NDU0LXBzMTQ2NTUtc3AxMDE2MzUtdzAxNDIwMjQyMC13MDE0MjAwMjQxLTQxMTAwMDEwMDUxNDctNDExMDAwMDkwNzA3MS8&ntb=1' },
    { partNumber: 'C38AB-38AB006+A', description: 'turbo charger', viewInWebLink: 'https://www.meppon.com/wp-content/uploads/2020/03/C38AB-38AB005A-%E5%A2%9E%E5%8E%8B%E5%99%A8%E9%83%A8%E4%BB%B6-4190000536301-PS10014-4110000186337-TURBOCHARGER-4.jpg' },
    { partNumber: 'C05AL-05AL502+A', description: 'Piston', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=8849227b3981b8feJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Ng&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=C05AL-05AL502%2bA&u=a1aHR0cHM6Ly93d3cubWVwcG9uLmNvbS9wcm9kdWN0LzA1YWw1MDItcGlzdG9uLWMwNWFsLTA1YWw1MDJhLw&ntb=1' },
    {partNumber: '2P8889', description: 'sleeve', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=c8ce9f0ef6440b1bJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE5NQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=2P8889&u=a1aHR0cHM6Ly9hZnRlcm1hcmtldC5leHByZXNzL2NhdGVycGlsbGFyLzJwODg4OQ&ntb=1'},
    {partNumber: '6I0499', description: 'Piston ring', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=982d29f6a98ea8f9JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Ng&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=6I0499&u=a1aHR0cHM6Ly93d3cubWVwcG9uLmNvbS9wcm9kdWN0L2MwNWFiLTZpMDQ5OWEtYzA1YWwtMTAwNjY5NC0xMDA2Njk1LTYxMDQ5OS1waXN0b24tcmluZy8&ntb=1'},
    {partNumber: '8N1721', description: 'connecting rod', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=e7c294d8072b1147JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Mg&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=8N1721&u=a1aHR0cHM6Ly9wYXJ0cy5jYXQuY29tL2VuL2NhdGNvcnAvOE4tMTcyMQ&ntb=1'},
    {partNumber: 'C26AB-8N7005+A', description: 'injector nozzle', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=bc82020f4de28a1cJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3MQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=C26AB-8N7005%2bA&u=a1aHR0cHM6Ly93d3cuamgtc3BhcmVwYXJ0cy5jb20vcHJvZHVjdC9GdWVsLUluamVjdG9yLUMyNkFCLThONzAwNS1BLTQxMTAwMDAxODY1MTItZm9yLVNETEctTEc5MzMtTEc5MzYtTEc5MzgtTEc5NTYtTEc5NTgtTEc5NjgtV2hlZWwtTG9hZGVyLVNwYXJlLVBhcnRzLmh0bWw&ntb=1'},
    {partNumber: '4W5738', description: 'main bearing', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=93a77474b287980eJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTIwMA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=4W5738&u=a1aHR0cHM6Ly9hZnRlcm1hcmtldC5zdXBwbHkvY2F0ZXJwaWxsYXIvNFc1NzM4Lmh0bWw&ntb=1'},
    {partNumber: '4W5739', description: 'connecting rod', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=516733037202c404JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE5MA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=4W5739&u=a1aHR0cHM6Ly93d3cuYWdraXRzLmNvbS9jYXRlcnBpbGxhci0xNjcwLTMzMDQtMzMwNi1kMzE1LWQzMzAtY29ubmVjdGluZy1yb2QtYmVhcmluZ3Mtb2UtNHc1NzM5LmFzcHg&ntb=1'},
    {partNumber: 'C06AL-06AL102+A', description: 'cranckshaft', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=c9eb2c6e3645314fJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4NA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=C06AL-06AL102%2bA&u=a1aHR0cHM6Ly9tY2MtcGFydHMuZW4ubWFkZS1pbi1jaGluYS5jb20vcHJvZHVjdC9GZExhTWxnV0FEUlYvQ2hpbmEtTG92b2wtRW5naW5lLUNyYW5rc2hhZnQtQzA2YWwtMDZhbDEwMi0wNmFsMTAyLmh0bWw&ntb=1'},
    
  ];

  return (
    <div>
      {/* Brands Section */}
      <div className="text-center mt-8 text-white">
        <p className="text-lg font-semibold mb-2 text-orange-950">Spare parts suitable for:</p>
        <div className="flex justify-center mb-4">
          <span className="mx-2">VOLVO</span>
          <span className="mx-2">CUMMINS</span>
          <span className="mx-2">CATERPILLAR</span>
          <span className="mx-2">CASE</span>
          <span className="mx-2">KOMATSU</span>
        </div>
        <hr className="border-gray-300 border-dashed my-4" />
      </div>

      {/* Filters Section */}
      <div className="text-center">
        <h2 className="text-3xl text-orange-950 font-bold mb-2">Engine Parts</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the best performance for your Machine</p>
        {/* Replace with actual filter image source */}
        <div className='container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white '>
          <img src={EngineImage} alt="Filter"  />
          <img src={EngineImage2} alt="Filter"  />
          <img src={EngineImage3} alt="Filter"  />
          <img src={EngineImage4} alt="Filter"  />
        </div>
        <div className='bg-orange-950 p-8 text-white mb-10 text-xl'>
        <p className="text-gray-600 mb-4">
        We provide an extensive range of quality and durable engine parts     . We offer a wide range of engine spare parts for all types of engines, including genuine parts, OEM parts, aftermarket parts, and replacement parts for the following brands: Caterpillar, Cummins, Komatsu, Volvo, Perkins, Deutz, Detroit Diesel, Yanmar, Kubota, Mitsubishi, Isuzu, Hino, John Deere, and more.     .
        </p>
        <p className="italic text-sm text-gray-500 mb-4">
          In this page, we show only an overview of the parts in this family.
          Sanho has all the parts for the operation of your machine.
          For any information, please consult our technical service or your sales rep.
        </p>
        </div>
        

        {/* Filters List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {engineData.map((filter) => (
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

export default Engine;
