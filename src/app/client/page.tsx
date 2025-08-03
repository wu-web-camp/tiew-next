import Link from "next/link";

// Client data with logos and names
const clients = [
  {
    id: 1,
    name: "fs",
    logo: "fs",
    color: "text-blue-600"
  },
  {
    id: 2,
    name: "Google Fonts",
    logo: "Google Fonts",
    color: "text-gray-800"
  },
  {
    id: 3,
    name: "amazon",
    logo: "amazon",
    color: "text-gray-800"
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "Microsoft",
    color: "text-gray-800"
  },
  {
    id: 5,
    name: "Help Scout",
    logo: "Help Scout",
    color: "text-gray-800"
  },
  {
    id: 6,
    name: "Optimizely",
    logo: "Optimizely",
    color: "text-gray-800"
  },
  {
    id: 7,
    name: "Circle",
    logo: "Circle",
    color: "text-gray-800"
  },
  {
    id: 8,
    name: "breezy",
    logo: "breezy",
    color: "text-gray-800"
  },
  {
    id: 9,
    name: "attio",
    logo: "attio",
    color: "text-gray-800"
  },
  {
    id: 10,
    name: "PayPal",
    logo: "PayPal",
    color: "text-gray-800"
  },
  {
    id: 11,
    name: "mparticle",
    logo: "mparticle",
    color: "text-gray-800"
  },
  {
    id: 12,
    name: "HubSpot",
    logo: "HubSpot",
    color: "text-gray-800"
  }
];

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#8B3636" }}>
            Some of our valuable clients
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional results
          </p>
        </div>

        {/* Client Logos Grid - 5 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6 flex items-center justify-center transform hover:-translate-y-2"
            >
              {/* Client Logo */}
              <div className="text-center">
                {client.name === "fs" && (
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300">fs</div>
                )}
                {client.name === "Google Fonts" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">B</div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">Google Fonts</span>
                  </div>
                )}
                {client.name === "amazon" && (
                  <div className="flex items-center space-x-1 group-hover:scale-105 transition-all duration-300">
                    <span className="text-lg font-bold text-gray-800 group-hover:text-orange-600">amazon</span>
                    <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                      <svg className="w-2 h-2 text-white group-hover:translate-x-0.5 transition-transform duration-300" fill="currentColor" viewBox="0 0 8 8">
                        <path d="M0 4l2-2h4l2 2-2 2H2L0 4z"/>
                      </svg>
                    </div>
                  </div>
                )}
                {client.name === "Microsoft" && (
                  <div className="flex items-center space-x-1 group-hover:scale-105 transition-all duration-300">
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6 group-hover:rotate-3 transition-transform duration-300">
                      <div className="bg-red-500 rounded-sm group-hover:bg-red-600 transition-colors duration-300"></div>
                      <div className="bg-green-500 rounded-sm group-hover:bg-green-600 transition-colors duration-300"></div>
                      <div className="bg-blue-500 rounded-sm group-hover:bg-blue-600 transition-colors duration-300"></div>
                      <div className="bg-yellow-500 rounded-sm group-hover:bg-yellow-600 transition-colors duration-300"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800 ml-2 group-hover:text-gray-900">Microsoft</span>
                  </div>
                )}
                {client.name === "Help Scout" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 4h12v2H2V4zm0 3h12v2H2V7zm0 3h12v2H2v-2z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600">Help Scout</span>
                  </div>
                )}
                {client.name === "Optimizely" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white font-bold text-xs group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 group-hover:rotate-6">e</div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-purple-600">Optimizely</span>
                  </div>
                )}
                {client.name === "Circle" && (
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-800 transition-all duration-300">
                    <div className="w-4 h-4 bg-white rounded-full group-hover:bg-gray-200 transition-colors duration-300"></div>
                  </div>
                )}
                {client.name === "breezy" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 group-hover:animate-bounce">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 2C4.5 2 1.5 5 1.5 8.5S4.5 15 8 15s6.5-3 6.5-6.5S11.5 2 8 2zm0 11c-2.5 0-4.5-2-4.5-4.5S5.5 4 8 4s4.5 2 4.5 4.5S10.5 13 8 13z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-500">breezy</span>
                  </div>
                )}
                {client.name === "attio" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="flex space-x-1 group-hover:space-x-2 transition-all duration-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-red-600 group-hover:scale-125 transition-all duration-300"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:bg-yellow-600 group-hover:scale-125 transition-all duration-300"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full group-hover:bg-green-600 group-hover:scale-125 transition-all duration-300"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">attio</span>
                  </div>
                )}
                {client.name === "PayPal" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">P</div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600">PayPal</span>
                  </div>
                )}
                {client.name === "mparticle" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 8h4l2-4 2 4h4"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">mparticle</span>
                  </div>
                )}
                {client.name === "HubSpot" && (
                  <div className="flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300 group-hover:rotate-12">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 2L2 6v6l6 4 6-4V6l-6-4z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-orange-600">HubSpot</span>
                  </div>
                )}
                {client.name === "miro" && (
                  <div className="text-lg font-bold text-blue-800 group-hover:text-blue-900 group-hover:scale-110 transition-all duration-300">miro</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to join our client roster?
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Work with the same world-class talent that powers these industry leaders.
          </p>
          <Link href="#" className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ color: "#8B3636" }}>
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}