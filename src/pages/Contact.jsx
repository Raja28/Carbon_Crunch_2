
export default function Contact() {
  return (
    <section className="relative overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-clash text-4xl md:text-5xl font-semibold">
            Get in Touch
          </h2>
          <p className="font-manrope text-gray-400 mt-4 max-w-xl mx-auto">
            Have questions or want to work with us?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-400">
                Ahmedabad, Gujarat, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-400">
                support@nftplatform.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-400">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500 resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full h-[52px]
                rounded-lg
                font-semibold tracking-wide
                bg-gradient-to-br from-[#DD24E1] to-[#5117F4]
                shadow-[0_0_25px_rgba(157,80,255,0.45)]
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(157,80,255,0.7)]
                active:scale-[0.98]
              "
            >
              Send Message
            </button>
          </form>

        </div>
      </div>

      {/* Glow Background */}
      <div
        className="absolute -z-10 left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, #DD24E1 0%, #5117F4 70%)",
        }}
      />
    </section>
  );
}
