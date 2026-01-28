import { useState, useEffect } from "react";

// Image paths (these will be in /public/Images/)
const IMAGES = {
  logo: "/Images/IMG_2155.jpeg",
  hero: "/Images/Facetune_12-12-2022-05-24-28.jpeg",
  teaching: "/Images/Facetune_12-12-2022-05-24-28.jpeg",
  trophy1: "/Images/IMG_6559.png",
  trophy2: "/Images/IMG_1813.jpeg",
  trophy3: "/Images/IMG_6279.jpeg",
  juniors: "/Images/IMG_1574.jpeg",
  juniorBoys: "/Images/IMG_8883.jpeg",
  course: "/Images/IMG_8604.jpeg",
  group: "/Images/IMG_8547.jpeg",
  aboutPhoto: "/Images/IMG_2974.jpeg",
};

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "location", label: "Location" },
  { id: "success", label: "Student Success" },
  { id: "faq", label: "FAQ" },
  { id: "book", label: "Book a Lesson" },
];

const TESTIMONIALS = [
  {
    text: "TD has an excellent communication style and knows what he's teaching. Very lucky to have him as part of my development.",
    author: "Student Review",
  },
  {
    text: "TD was able to quickly diagnose my problem and provide some drills to improve my swing path. Thanks much!",
    author: "Student Review",
  },
  {
    text: "TD was very professional and made my sister and I feel good about the skills he was teaching us!",
    author: "Student Review",
  },
];

const FAQS = [
  {
    question: "What should I bring to my lesson?",
    answer: "Bring your clubs, comfortable golf attire, and any training aids you currently use. If you're new to golf, clubs can be provided.",
  },
  {
    question: "How long are lessons?",
    answer: "Private lessons are 1 hour. Playing lessons and group sessions vary in length depending on the format.",
  },
  {
    question: "Do you teach beginners?",
    answer: "Absolutely. I work with golfers of all skill levels, from complete beginners to competitive junior and adult players.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "Please provide at least 24 hours notice for cancellations. Late cancellations may be subject to a fee.",
  },
  {
    question: "What technology do you use in lessons?",
    answer: "I utilize video analysis, launch monitors, and 3D biomechanics tools to provide data-driven feedback and track your progress.",
  },
  {
    question: "Do you offer playing lessons?",
    answer: "Yes, playing lessons are a great way to work on course management, shot selection, and on-course execution.",
  },
];

// Logo Component
function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 rounded flex items-center justify-center overflow-hidden">
        <img src={IMAGES.logo} alt="TD Logo" className="w-full h-full object-contain" />
      </div>
      <span className="font-serif text-xl tracking-wide text-stone-900">TD NORTH GOLF</span>
    </div>
  );
}

// Navigation
function Navigation({ activeSection, onNavigate, isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-stone-100/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-stone-900 font-medium"
                    : isScrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 transition-all ${isScrolled ? "bg-stone-900" : "bg-stone-100"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 transition-opacity ${isScrolled ? "bg-stone-900" : "bg-stone-100"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 transition-all ${isScrolled ? "bg-stone-900" : "bg-stone-100"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-stone-200 pt-4 bg-stone-100 -mx-6 px-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className="block w-full text-left py-2 text-stone-700 hover:text-stone-900"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection({ onNavigate }) {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-stone-900">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${IMAGES.teaching})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-stone-100/10 border border-stone-100/20 text-stone-100 text-sm tracking-widest uppercase">
              Arlington, Texas
            </span>
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <img src={IMAGES.logo} alt="TD North Golf Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <h1 className="font-serif text-5xl md:text-7xl text-stone-100 leading-tight">
              Science-Driven
              <br />
              <span className="text-stone-400">Golf Instruction</span>
            </h1>
          </div>
          
          <p className="text-lg text-stone-300 mb-8 leading-relaxed max-w-xl">
            Unlock your potential through biomechanics-based coaching. I help golfers of all levels build efficient, powerful, and repeatable swings.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("book")}
              className="px-8 py-4 bg-stone-100 text-stone-900 font-medium tracking-wide hover:bg-white transition-colors"
            >
              Book a Lesson
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="px-8 py-4 border border-stone-100/30 text-stone-100 font-medium tracking-wide hover:bg-stone-100/10 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-100/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-stone-100/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">About</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              TD North
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                I grew up in a coaching family in West Texas, playing multiple sports through college. I played golf at #1 ranked Odessa College and the University of St. Thomas, then graduated with a Bachelor's in Exercise Science from the University of Houston. I then moved on to receive a Master's in Golf Biomechanics from Texas Woman's University.
              </p>
              <p>
                As a dedicated instructor, I'm passionate about delivering an exceptional learning experience that combines clear communication, personalized coaching, and a genuine love for the game.
              </p>
              <p>
                My goal is for every client to leave each session with confidence, clarity, and tangible progress in their skills. I take pride in creating an encouraging environment that meets players where they are and helps them unlock their potential. Committed to constant growth, I continuously study the latest coaching methods, technology, and player development strategies to ensure my instruction evolves alongside the game.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200">
              <h3 className="font-medium text-stone-900 mb-4">Certifications & Mentors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600">
                <div>
                  <p className="font-medium text-stone-800 mb-2">Certifications</p>
                  <ul className="space-y-1">
                    <li>Golf Digest Instructor Certification</li>
                    <li>Trackman Level 1 & 2</li>
                    <li>Swing Catalyst Certified</li>
                    <li>TPI Level 1 & 2, Junior Level 1 & 2, 3D Biomechanics Level 1 & 2</li>
                    <li>Scott Cowx Certified (3x)</li>
                    <li>Dana Dalquist Certification</li>
                    <li>Dr. Kwon Biomechanics Level 1 & 2</li>
                    <li>Golf.com Top 100 Teachers Summit 2025</li>
                    <li>PGA Show 2026</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-stone-800 mb-2">Mentors</p>
                  <ul className="space-y-1">
                    <li>Justin Poynter (Crown Golf)</li>
                    <li>Joey Wuertemberger (Crown Golf)</li>
                    <li>Billy Tuten (Former PGA Tour)</li>
                    <li>Dr. Young-Hoo Kwon (TWU Biomechanics)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-stone-200 relative overflow-hidden">
              <img
                src={IMAGES.aboutPhoto}
                alt="TD North"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-stone-900 flex items-center justify-center p-6">
              <div className="text-center text-stone-100">
                <div className="text-4xl font-serif mb-1">5+</div>
                <div className="text-xs tracking-widest uppercase">Years Teaching</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection({ onNavigate }) {
  const services = [
    {
      title: "Private Lessons",
      subtitle: "Adults",
      price: "$150",
      unit: "per hour",
      description: "One-on-one coaching with video analysis, launch monitor data, and personalized instruction tailored to your goals.",
      features: ["Video analysis", "Launch monitor feedback", "Custom practice plan"],
    },
    {
      title: "Private Lessons",
      subtitle: "Juniors",
      price: "$125",
      unit: "per hour",
      description: "Age-appropriate instruction focused on building fundamentals, athletic development, and a love for the game.",
      features: ["Age-appropriate coaching", "Fundamental development", "Competition preparation"],
    },
    {
      title: "Unlimited Package",
      subtitle: "Serious Players",
      price: "$1,500",
      unit: "per month",
      description: "For dedicated golfers ready to commit to significant improvement. Unlimited access to coaching and practice guidance.",
      features: ["Unlimited lessons", "Priority scheduling", "Ongoing support"],
    },
    {
      title: "Junior Development",
      subtitle: "Group Training",
      price: "Contact",
      unit: "for details",
      description: "Structured group training for junior golfers looking to develop their skills in a competitive, supportive environment.",
      features: ["Small group setting", "Skill development", "Tournament prep"],
    },
    {
      title: "Online Coaching",
      subtitle: "Remote Instruction",
      price: "Contact",
      unit: "for details",
      description: "Can't make it in person? Get personalized coaching from anywhere through video analysis, virtual sessions, and ongoing support.",
      features: ["Video swing analysis", "Virtual lesson sessions", "Flexible scheduling"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">
            Lesson Options
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Choose the instruction format that fits your goals and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-stone-800/50 border border-stone-700 p-6 hover:border-stone-500 transition-colors group"
            >
              <div className="mb-4">
                <h3 className="font-serif text-xl text-stone-100">{service.title}</h3>
                <p className="text-stone-500 text-sm">{service.subtitle}</p>
              </div>
              
              <div className="mb-4">
                <span className="text-3xl font-serif text-stone-100">{service.price}</span>
                <span className="text-stone-500 text-sm ml-2">{service.unit}</span>
              </div>

              <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-stone-500 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-stone-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate("book")}
                className="w-full py-3 border border-stone-600 text-stone-300 text-sm tracking-wide hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  return (
    <section id="location" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              Crown Golf at<br />Texas Rangers Golf Club
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Located at the new Texas Rangers Golf Club in Arlington, Texas. The facility features a 23-acre practice area including a double-ended range, practice hole, and two short game areas with multiple greens—everything you need to develop every aspect of your game.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-stone-900">Address</p>
                  <p className="text-stone-600">701 Brown Blvd, Arlington, TX 76011</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-stone-900">Hours</p>
                  <p className="text-stone-600">Monday – Friday: 9am – 5pm</p>
                  <p className="text-stone-600">Sunday: 9am – 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-stone-900">Phone</p>
                  <p className="text-stone-600">(432) 770-5253</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-stone-200 overflow-hidden">
              <img src={IMAGES.course} alt="Golf course" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-stone-200 overflow-hidden">
              <img src={IMAGES.group} alt="Group on course" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-video bg-stone-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0!2d-97.108!3d32.767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d0b0b0b0b0b%3A0x0!2sTexas%20Rangers%20Golf%20Club!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Student Success Section
function SuccessSection() {
  const achievements = [
    "Coaching players at every level—from beginners to competitive juniors and adults",
    "Developing junior golfers and guiding them through the college recruiting process",
    "Multiple wins at junior and collegiate tournaments from students",
    "Building long-term player development plans that produce lasting results",
  ];

  return (
    <section id="success" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">Results</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">
            Student Success
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Nothing is more rewarding than watching students achieve their goals on the course.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="aspect-[3/4] bg-stone-800 overflow-hidden">
            <img src={IMAGES.trophy2} alt="Student with trophies" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] bg-stone-800 overflow-hidden">
            <img src={IMAGES.trophy3} alt="Student winning tournament" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] bg-stone-800 overflow-hidden">
            <img src={IMAGES.juniors} alt="Junior golfers" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-serif text-2xl text-stone-100 mb-6">Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-stone-300">
                  <span className="w-2 h-2 bg-stone-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-video bg-stone-800 overflow-hidden">
            <img src={IMAGES.juniorBoys} alt="Junior golfers with medals" className="w-full h-full object-cover object-[center_30%]" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="font-serif text-2xl text-stone-100 mb-8 text-center">What Students Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-stone-800/50 border border-stone-700 p-6">
                <svg className="w-8 h-8 text-stone-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-stone-300 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="text-stone-500 text-sm">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Instagram Feed Section
function InstagramSection() {
  useEffect(() => {
    // Load Elfsight Instagram widget script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <section id="instagram" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">Follow Along</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            @tdnorthgolf
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Follow me on Instagram for swing tips, student highlights, and behind-the-scenes content.
          </p>
        </div>

        {/* Elfsight Instagram Feed */}
        <div className="elfsight-app-c6dc85df-08a1-42d4-b4ce-2027af637836" data-elfsight-app-lazy></div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/tdnorthgolf/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-100 font-medium tracking-wide hover:bg-stone-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @tdnorthgolf
          </a>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-stone-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-stone-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-stone-900">{faq.question}</span>
                <span className={`text-2xl text-stone-400 transition-transform ${openIndex === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Booking Section
function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Formspree or similar
    const form = e.target;
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true)); // Still show success for demo
  };

  return (
    <section id="book" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm tracking-widest text-stone-500 uppercase mb-4 block">Get Started</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-6">
              Book a Lesson
            </h2>
            <p className="text-stone-400 leading-relaxed mb-8">
              Ready to improve your game? Book online through Vagaro or send me a message with any questions.
            </p>

            {/* Vagaro Booking Button */}
            <a
              href="https://www.vagaro.com/crowngolfperformancearlington"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-stone-100 text-stone-900 font-medium tracking-wide hover:bg-white transition-colors mb-8"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Online with Vagaro
            </a>

            <div className="pt-8 border-t border-stone-700">
              <p className="text-stone-500 text-sm mb-4">Or contact directly:</p>
              <div className="space-y-2 text-stone-300">
                <p>📧 tdnorthgolf@gmail.com</p>
                <p>📞 (432) 770-5253</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-800/50 border border-stone-700 p-8">
            <h3 className="font-serif text-xl text-stone-100 mb-6">Send a Message</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-stone-100 font-medium mb-2">Message Sent!</p>
                <p className="text-stone-400">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-600 text-stone-100 focus:border-stone-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-600 text-stone-100 focus:border-stone-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-600 text-stone-100 focus:border-stone-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-sm mb-2">What are you looking for?</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-600 text-stone-100 focus:border-stone-400 focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="private">Private Lessons</option>
                    <option value="junior">Junior Lessons</option>
                    <option value="unlimited">Unlimited Package</option>
                    <option value="group">Junior Development Group</option>
                    <option value="online">Online / Remote Coaching</option>
                    <option value="other">Other / General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-600 text-stone-100 focus:border-stone-400 focus:outline-none resize-none"
                    placeholder="Tell me about your golf goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-stone-100 text-stone-900 font-medium tracking-wide hover:bg-white transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-stone-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/tdnorthgolf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-600 text-sm">
          © {new Date().getFullYear()} TD North Golf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isScrolled={isScrolled}
      />
      
      <HeroSection onNavigate={handleNavigate} />
      <AboutSection />
      <ServicesSection onNavigate={handleNavigate} />
      <LocationSection />
      <SuccessSection />
      <InstagramSection />
      <FAQSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
