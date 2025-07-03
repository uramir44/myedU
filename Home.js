import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Struggling with Assignments or Thesis?</h1>
        <p className="text-lg mb-6">We provide expert academic assistance for students — fast, reliable, and 100% confidential. We can also prepare everything on request.</p>
        <Button className="bg-white text-blue-700 font-semibold">Get Help Now</Button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Assignment Help",
            "Thesis Support",
            "Research Assistance",
            "Plagiarism Check",
            "Proofreading & Editing",
            "Citation & Referencing"
          ].map(service => (
            <Card key={service} className="shadow-md">
              <CardContent className="p-6 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold text-xl mb-2">1. Submit Your Work</h3>
            <p>Upload your document and tell us what kind of help you need.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">2. We Review</h3>
            <p>We assess your file and respond quickly with the support plan.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">3. Get Help</h3>
            <p>Receive personalized academic support within your deadline.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg">We’re a team of experienced academic professionals helping students succeed. Our services are 100% confidential, plagiarism-free, and tailored to your needs. Whether it’s a last-minute assignment or a complex thesis, we’ve got you covered.</p>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form action="https://formspree.io/f/your-id" method="POST" encType="multipart/form-data" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded" />
          <textarea name="message" placeholder="Describe what you need help with..." rows="4" required className="w-full p-3 border rounded"></textarea>
          <input type="file" name="file" className="w-full" />
          <Button type="submit" className="bg-blue-600 w-full">Submit Request</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Academic Assist. All rights reserved.</p>
        <p>Email: your@email.com | WhatsApp: +1234567890</p>
      </footer>
    </main>
  );
}
