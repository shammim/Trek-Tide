import React from 'react';

const TrekTideHome = () => {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Trek Tide</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Destinations</a>
            <a href="#" className="hover:text-gray-300">Travel Events</a>
            <a href="#" className="hover:text-gray-300">Travel Guides</a>
            <a href="#" className="hover:text-gray-300">Community</a>
            <a href="#" className="hover:text-gray-300">Gallery</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Book Your Adventure</a>
            <a href="#" className="hover:text-gray-300">Account</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Trek Search */}
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('path_to_your_hero_image.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Find Your Next Trek</h1>
            <div className="bg-white text-black p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Type of Trek</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Mountain Majesty</option>
                    <option>Terrain Treasures</option>
                    <option>Hidden Gems</option>
                    <option>Coastal Paradise</option>
                    <option>Solo Wanderlust</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">No. of Travellers</label>
                  <div className="flex space-x-2">
                    <input type="number" placeholder="Adults" className="w-1/2 p-2 border border-gray-300 rounded" />
                    <input type="number" placeholder="Children" className="w-1/2 p-2 border border-gray-300 rounded" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Date of Trek</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block mb-2">Room Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Hotels</option>
                    <option>Camping</option>
                    <option>Hostel</option>
                    <option>Lodges</option>
                    <option>Guesthouses</option>
                    <option>Cabins</option>
                    <option>Homestays</option>
                    <option>Shelters</option>
                    <option>Glamping</option>
                    <option>Eco-Lodge</option>
                  </select>
                </div>
                <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded">Search Trek</button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Popular Different Terrain Tours */}
      <section className="container mx-auto my-16">
        <h2 className="text-3xl font-bold mb-8">Popular Different Terrain Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example tour cards */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src="path_to_tour_image.jpg" alt="Tour" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Mountain Majesty</h3>
              <p className="mt-2 text-gray-600">Experience the grandeur of the mountains...</p>
            </div>
          </div>
          {/* Repeat for more tours */}
        </div>
      </section>

      {/* Featured Destination Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Destination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="path_to_featured_image.jpg" alt="Featured Destination" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">The Enchanted Forest</h3>
              <p className="text-gray-600">Discover the magic of the Enchanted Forest, where nature's beauty meets mystical experiences...</p>
              <a href="#" className="mt-4 bg-blue-900 text-white py-2 px-4 rounded">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto my-16">
        <h2 className="text-3xl font-bold mb-8">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example blog cards */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src="path_to_blog_image.jpg" alt="Blog" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Trekking Tips</h3>
              <p className="mt-2 text-gray-600">Get the best tips for your next trekking adventure...</p>
            </div>
          </div>
          {/* Repeat for more blog posts */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example testimonial cards */}
            <div className="border p-4 rounded-lg bg-blue-800">
              <p className="italic">"The trek was incredible and the guides were top-notch!"</p>
              <p className="mt-2 font-bold">- John Doe</p>
            </div>
            {/* Repeat for more testimonials */}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" />
            <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Trek Tide. All Rights Reserved.</p>
          <div className="space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrekTideHome;
