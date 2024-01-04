import UndercarriageCarousel from "./UndercarriageCarousel";


const UnderCarriage = () => {
  const undercarriageData = [
    { partNumber: '16Y-40-06000', description: 'carrier roller', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=746a5368ab40ae7dJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Mg&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-40-06000&u=a1aHR0cHM6Ly9mb2N1cy1idWxsZG96ZXIuY29tL3Byb2R1Y3RzL3NoYW50dWktc2QxNi1wYXJ0cy1jYXJyaWVyLXJvbGxlci1hc3N5LTE2eS00MC0wNjAwMA&ntb=1' },
    { partNumber: '203MJ-000T1B', description: 'track link', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=b17a7e6b4d2c04e6JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3MQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=203MJ-000T1B&u=a1aHR0cHM6Ly93d3cuc2hpbmRhcnkuY29tL2luZHVzdHJpYWwtbWFjaGluZXJ5LXBhcnRzL3NwYXJlLXBhcnRzLWZvci1zaGFudHVpLXNkMTZzaGFuZ2NoYWkuaHRtbA&ntb=1' },
    { partNumber: '203MA-00151', description: 'track shoes', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=c7ff3200140393c2JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3NQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=203MA-00151&u=a1aHR0cHM6Ly93d3cuZm9jdXMtYnVsbGRvemVyLmNvbS9wcm9kdWN0cy9zaGFudHVpLXNkMTYtdHJhY2stc2hvZS01MTBtbS0yMDNtYS0wMDE1MS04MjAzLW1hLTAwMTUxMQ&ntb=1' },
    {partNumber: '16Y-40-09000', description: 'track roller single', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=17644df5bf1d0375JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3OA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-40-09000&u=a1aHR0cHM6Ly93d3cubWVwcG9uLmNvbS9wcm9kdWN0LzE2eS00MC0wOTAwMC0xNnktNDAtMDkxMDAtc2hhbnR1aS1zZDI2LXRyYWNrLXJvbGxlci8&ntb=1'},
    {partNumber: '16Y-40-10000', description: 'track roller double', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=3ee71ce3bc90e679JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Nw&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-40-10000&u=a1aHR0cHM6Ly93d3cuZm9jdXMtYnVsbGRvemVyLmNvbS9wcm9kdWN0cy9zaGFudHVpLXNkMTYtZG91YmxlLWZsYW5nZS10cmFjay1yb2xsZXItYXNzeS0xNnktNDAtMTAwMDA&ntb=1'},
    {partNumber: '16Y-40-03000', description: 'idler', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=20668007e8028ccfJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3Mg&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-40-03000&u=a1aHR0cHM6Ly9mb2N1cy1idWxsZG96ZXIuY29tL3Byb2R1Y3RzL3NoYW50dWktc2QxNi1idWxsZG96ZXItbGRsZXItMTZ5LTQwLTAzMDAw&ntb=1'}, 
    {partNumber: '16Y-40-02000', description: 'dozer track frame', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=e76a8ffa992dd0daJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3NQ&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-40-02000&u=a1aHR0cHM6Ly9jbmNoZW5nYmFvLmVuLm1hZGUtaW4tY2hpbmEuY29tL3Byb2R1Y3QvRUtybWJlb1RhTFJzL0NoaW5hLVNoYW50dWktU2hlaHdhLVpvb21saW9uLURvemVyLVRyYWNrLUZyYW1lLTE2TC00MC0xMDAwMC0xNkwtNDAtMzAwMDAtMTZ5LTQwLTAxMDAwLTE2eS00MC0wMjAwMC5odG1s&ntb=1'},
    {partNumber: '16Y-18-00014', description: 'Sprocket', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=688a6fd1dd743e05JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4MA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-18-00014&u=a1aHR0cHM6Ly9mb2N1cy1idWxsZG96ZXIuY29tL3Byb2R1Y3RzL3NoYW50dWktc2QxNi1zcHJvY2tldC10b290aC1ibG9jay1zZWdtZW50LTE2eS0xOC0wMDA0OS0xNnktMTgtMDAwMTQ&ntb=1'},
    {partNumber: '203MA-00026', description: 'bolt & nut', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=800b6e2a5d946a4bJmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE3OA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=203MA-00026&u=a1aHR0cHM6Ly93d3cuYWxpYmFiYS5jb20vcHJvZHVjdC1kZXRhaWwvSGlnaC1RdWFsaXR5LUJ1bGxkb3plci1TRDE2LVRyYWNrLVNob2VfMTYwMDQ1NTI2MjEwMC5odG1s&ntb=1'},
    {partNumber: '16Y-18-00013', description: 'bolt & nut', viewInWebLink: 'https://www.bing.com/ck/a?!&&p=8a3d55533599f5c0JmltdHM9MTcwMjU5ODQwMCZpZ3VpZD0zZGQ2NDRiNC1mNWE1LTY3YjAtMTMwZi01NzM0ZjRiMTY2ZGMmaW5zaWQ9NTE4NA&ptn=3&ver=2&hsh=3&fclid=3dd644b4-f5a5-67b0-130f-5734f4b166dc&psq=16Y-18-00013&u=a1aHR0cHM6Ly9icC1iZW5lcGFydHMuZW4ubWFkZS1pbi1jaGluYS5jb20vcHJvZHVjdC9pd0JHcHZYelpRWUsvQ2hpbmEtMTZ5LTE4LTAwMDEzLVNlZ21lbnQtQm9sdC1NMjJYNzEuaHRtbA&ntb=1'},


    // Add more undercarriage components as needed
  ];

  return (
    <div>
      {/* Carousel */}
     <UndercarriageCarousel />

      {/* Hero Section */}
      <div className="bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Our Under-Carriage Components</h1>
        <p className="text-lg text-gray-700">
          View from a wide range of our high-quality under-carriage components.
        </p>
      </div>

      {/* Undercarriage List */}
      <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {undercarriageData.map((component) => (
          <div key={component.partNumber} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">{component.partNumber}</p>
            <p className="text-gray-600 mb-2">{component.description}</p>
            <a href={component.viewInWebLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View in Web</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnderCarriage;
