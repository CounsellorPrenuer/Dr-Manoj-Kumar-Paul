import Image from "next/image";
import { client } from "@/sanity/client";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">
            <Image src="/logo.png" alt="Logo" width={150} height={50} className="object-contain" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#founder" className="hover:text-blue-600">About Founder</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#packages" className="hover:text-blue-600">Mentoria Packages</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Dr. Manoj Career Coach</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering your career journey with expert guidance.</p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">Get Started</a>
      </section>

      <section id="founder" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto overflow-hidden">
               {/* Dummy Founder Photo */}
               <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">Photo</div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">About the Founder</h2>
            <p className="text-lg text-gray-600">Dr. Manoj Kumar Paul is an expert career coach dedicated to helping professionals achieve their potential. With years of experience in mentoring, he guides individuals towards successful career paths.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Service {i}</h3>
                <p className="text-gray-600">Expert guidance and support tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mentoria Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-64 w-full">
                  <Image src={`/Mentoria${i}.png`} alt={`Mentoria Package ${i}`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Package {i}</h3>
                  <button className="text-blue-600 font-medium">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          <div className="italic text-xl text-gray-600">"An absolute game changer for my career path!"</div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-xl mb-4">Phone: 9435566454</p>
          <p className="text-xl mb-8">Email: manojpaulrmc@gmail.com</p>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; 2026 Dr. Manoj Kumar Paul. All rights reserved.</p>
      </footer>
    </div>
  );
}
