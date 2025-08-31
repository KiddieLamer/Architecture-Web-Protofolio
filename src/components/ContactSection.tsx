import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Let's collaborate to create stunning architectural visualizations 
          that showcase your project's full potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <Link 
                  href="mailto:info@room.studio"
                  className="hover:opacity-70 transition-opacity"
                >
                  info@room.studio
                </Link>
              </div>
              <div>
                <Link 
                  href="tel:+48573896800"
                  className="hover:opacity-70 transition-opacity"
                >
                  +48 573-896-800
                </Link>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
            <div className="flex gap-4">
              <Link 
                href="https://t.me/roomstudio"
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
                target="_blank"
              >
                Telegram
              </Link>
              <Link 
                href="https://wa.me/48573896800"
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition-colors"
                target="_blank"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/studio"
            className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Learn About Us
          </Link>
          <Link 
            href="/work"
            className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-semibold"
          >
            View Our Portfolio
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            <Link 
              href="https://linkedin.com/company/room-studio"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://behance.net/room-studio"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              Behance
            </Link>
            <Link 
              href="https://instagram.com/room.studio"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              Instagram
            </Link>
            <Link 
              href="https://pinterest.com/roomstudio"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}