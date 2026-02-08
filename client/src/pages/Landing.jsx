import React, { useState, useEffect } from 'react';

export default function CCCareLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      icon: "❤️",
      title: "UW WELL-FIT Cancer Exercise",
      description: "Evidence-based exercise programs for individuals during and after cancer treatment, including START-FIT and STAY-FIT programs.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: "👥",
      title: "STEPS for Stroke Recovery",
      description: "Specialized exercise program designed to help individuals living with the effects of stroke regain function and independence.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🧬",
      title: "Brain & Body Program",
      description: "Comprehensive program for individuals experiencing dementia or mild cognitive impairment and their care partners.",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "1000+", label: "Research Participants" },
    { number: "50+", label: "Published Studies" },
    { number: "100%", label: "Community Focused" }
  ];

  const researchAreas = [
    "Cancer survivorship and exercise oncology",
    "Stroke rehabilitation and recovery",
    "Cognitive health and dementia prevention",
    "Health optimization and performance",
    "Clinical exercise physiology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">C³</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">CCCare</h1>
                <p className="text-xs text-slate-600 -mt-0.5">University of Waterloo</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Programs</a>
              <a href="#research" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Research</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">About</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#programs" className="block text-slate-700 hover:text-amber-600 py-2 font-medium">Programs</a>
              <a href="#research" className="block text-slate-700 hover:text-amber-600 py-2 font-medium">Research</a>
              <a href="#about" className="block text-slate-700 hover:text-amber-600 py-2 font-medium">About</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-blue-50 opacity-50"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
                🏆 20 Years of Research Excellence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Advancing Health Through
                <span className="block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mt-2">
                  Research & Community
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                CCCare is a multidisciplinary research centre dedicated to improving health outcomes through innovative programs, cutting-edge research, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Explore Programs</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg border-2 border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                  View Research
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop" 
                    alt="Research Excellence" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Latest Study</p>
                    <p className="text-sm text-slate-600">Exercise & Colon Cancer</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600">Structured exercise significantly improves survival rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Evidence-Based Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our specialized programs combine research excellence with compassionate care to support individuals on their health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl border-2 border-slate-100 p-8 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{program.description}</p>
                <button className="text-amber-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-semibold mb-6">
                🔬 Cutting-Edge Research
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Leading Innovation in Applied Health Research
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our multidisciplinary research team advances understanding in prevention, management, and treatment of clinical conditions through rigorous scientific investigation.
              </p>
              
              <div className="space-y-4 mb-8">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm">
                      ✓
                    </div>
                    <p className="text-slate-700 font-medium">{area}</p>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>View Current Studies</span>
                <span>→</span>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Featured</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Exercise & Colon Cancer Survival
                </h3>
                <p className="text-slate-600 mb-4">
                  Landmark study demonstrates structured exercise significantly improves survival rates in colon cancer patients
                </p>
                <a href="#" className="text-amber-600 font-semibold text-sm flex items-center space-x-1 hover:space-x-2 transition-all">
                  <span>Read Publication</span>
                  <span>→</span>
                </a>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Join Our Research</h3>
                <p className="mb-6 opacity-90">
                  Participate in groundbreaking studies and contribute to advancing health science
                </p>
                <button className="w-full px-6 py-3 bg-white text-amber-600 rounded-full font-bold hover:shadow-xl transition-all">
                  Become a Participant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Education & Training
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Developing the next generation of health professionals through experiential learning and research opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 border border-slate-100">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Volunteer Opportunities</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Gain hands-on experience in exercise management and clinical research while supporting our community programs
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2 text-slate-700">
                  <span className="text-blue-600">✓</span>
                  <span>Practical clinical experience</span>
                </li>
                <li className="flex items-center space-x-2 text-slate-700">
                  <span className="text-blue-600">✓</span>
                  <span>Research participation</span>
                </li>
                <li className="flex items-center space-x-2 text-slate-700">
                  <span className="text-blue-600">✓</span>
                  <span>Professional mentorship</span>
                </li>
              </ul>
              <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>Apply Now</span>
                <span>→</span>
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-10 border border-amber-100">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Seminars & Workshops</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Join our educational events featuring leading researchers and practitioners in applied health sciences
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2 text-slate-700">
                  <span className="text-amber-600">✓</span>
                  <span>Expert-led sessions</span>
                </li>
                <li className="flex items-center space-x-2 text-slate-700">
                  <span className="text-amber-600">✓</span>
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-center space-x-2 text-slate-700">
                  <span className="text-amber-600">✓</span>
                  <span>Continuing education credits</span>
                </li>
              </ul>
              <button className="text-amber-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>View Events</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our community programs, participate in research, or explore educational opportunities at CCCare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C³</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CCCare</h3>
                  <p className="text-xs text-slate-400">UWaterloo</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Centre for Community, Clinical and Applied Research Excellence
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">UW WELL-FIT</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">STEPS Program</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Brain & Body</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Faculty Fitness</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Research</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Current Studies</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Past Research</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Publications</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Participate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Directions</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Volunteer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2026 CCCare, University of Waterloo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Terms</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}