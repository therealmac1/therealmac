import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Menu, X, ChevronRight, Check } from "lucide-react";

const TherealmacWebsite = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "automotive", label: "Automotive Solutions" },
    { id: "projects", label: "Projects" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      title: "Website Design & Development",
      description:
        "Custom websites that represent your brand and convert visitors into customers with strategic design and seamless functionality.",
    },
    {
      title: "Automotive Website Systems",
      description:
        "Complete dealership platforms with vehicle listings, advanced filters, WhatsApp integration, and powerful admin dashboards built for sales.",
    },
    {
      title: "Logistics & Transport Platforms",
      description:
        "Streamlined booking systems, fleet management, and customer portals designed to optimize operations and enhance user experience.",
    },
    {
      title: "Web Applications & Dashboards",
      description:
        "Business tools and internal systems that increase efficiency, provide real-time insights, and scale with your growth.",
    },
  ];

  const automotiveFeatures = [
    "Dynamic vehicle inventory with real-time updates",
    "Advanced search and filter system",
    'WhatsApp "Buy Now" and "Test Drive" CTAs',
    "Mobile-optimized browsing experience",
    "Powerful admin dashboard for inventory management",
    "Lead capture and customer tracking",
    "Finance calculator integration",
    "Multi-location support",
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₦350,000 - ₦600,000",
      description: "Perfect for small businesses and personal brands",
      features: [
        "Professional 5-page website",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO setup",
        "30 days support",
      ],
    },
    {
      name: "Business",
      price: "₦700,000 - ₦1,200,000",
      description: "For growing businesses needing more functionality",
      features: [
        "Up to 10 pages",
        "Custom design system",
        "Advanced SEO optimization",
        "Content management system",
        "WhatsApp integration",
        "60 days support",
      ],
      popular: true,
    },
    {
      name: "Automotive Pro",
      price: "₦1,500,000 - ₦2,500,000",
      description: "Complete dealership solution",
      features: [
        "Full vehicle listing system",
        "Admin dashboard",
        "Advanced filters & search",
        "Lead management tools",
        "Analytics integration",
        "90 days support & training",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "Large-scale platforms and complex applications",
      features: [
        "Unlimited pages & features",
        "Custom web applications",
        "API integrations",
        "Multi-user systems",
        "Ongoing maintenance",
        "Priority support",
      ],
    },
  ];

  useEffect(() => {
    // initialize EmailJS with your public key (do once)
    emailjs.init("gWjQuTl2xXVqFU-NC");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const templateParams = {
      Name: form.name.value,
      Email: form.email.value,
      ProjectType: form.projectType.value,
      Message: form.message.value,
    };

    emailjs
      .send("service_nvsl4f5", "template_9d3e0jv", templateParams)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
      });
  };

  const renderHome = () => (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-zinc-900 rounded-full mb-6">
            <span className="text-amber-500 text-sm font-medium">
              Lagos-Based • Global Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automotive & Business
            <br />
            <span className="text-amber-500">Websites Built to Convert</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Premium web solutions designed by an automotive professional who
            understands your industry. Not just websites, complete digital
            systems that drive sales and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => setActiveNav("automotive")}
              className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105"
            >
              View Automotive Solutions
            </button>
            <button
              type="button"
              onClick={() => setActiveNav("contact")}
              className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all border border-zinc-800"
            >
              Start a Project
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-900">
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">
                5+ Years
              </div>
              <div className="text-zinc-400">In Automotive & Tech</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">20+</div>
              <div className="text-zinc-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-zinc-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Build
            </h2>
            <p className="text-xl text-zinc-400">
              Specialized solutions for automotive, logistics, and business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setActiveNav("services")}
              className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:gap-4 transition-all"
            >
              Explore All Services <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Therealmac?
            </h2>
            <p className="text-xl text-zinc-400">
              We're not just developers—we understand your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-zinc-400">
                Built by a team of experienced professionals with a strong
                understanding of diverse industries, enabling us to create
                websites that truly reflect each client's business vision and
                objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Conversion-Focused</h3>
              <p className="text-zinc-400">
                Every element designed to turn visitors into customers, not just
                look pretty.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Solutions</h3>
              <p className="text-zinc-400">
                From design to deployment, training to maintenance—we handle
                everything.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-10 rounded-2xl hover:bg-zinc-800 transition-all"
            >
              <h2 className="text-3xl font-bold mb-4 text-amber-500">
                {service.title}
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                type="button"
                onClick={() => setActiveNav("contact")}
                className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:gap-4 transition-all"
              >
                Get Started <ChevronRight size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Need Something Custom?
          </h3>
          <p className="text-black/80 text-lg mb-6">
            We build bespoke solutions for unique business challenges
          </p>
          <button
            type="button"
            onClick={() => setActiveNav("contact")}
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-zinc-900 transition-all"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );

  const renderAutomotive = () => (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-500 text-black rounded-full mb-6 font-semibold">
            OUR SPECIALTY
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Automotive Website Solutions
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Complete dealership platforms built by someone who understands the
            car business—not just a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Perfect For</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-zinc-300">
                  Car Dealerships looking to increase online sales
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-zinc-300">
                  Auto Brokers needing professional online presence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-zinc-300">
                  Car Rental Companies wanting streamlined booking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-zinc-300">
                  Auto Parts Suppliers expanding online
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {automotiveFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className="text-amber-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 rounded-2xl border border-amber-500/20">
          <h2 className="text-3xl font-bold mb-4">Why It's Different</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Most web developers build generic websites. We build automotive
            sales systems. Having worked in the car business, I understand what
            drives conversions: clear pricing, trust signals, easy contact
            methods, and mobile-first design.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Your customers don't just want to browse—they want to buy, rent, or
            book a test drive immediately. Our platforms are engineered for that
            exact behavior with strategically placed WhatsApp CTAs, simplified
            forms, and a checkout-like experience.
          </p>
          <button
            type="button"
            onClick={() => setActiveNav("projects")}
            className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all"
          >
            See Demo Projects
          </button>
        </div>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Projects & Demos
          </h1>
          <p className="text-xl text-zinc-400">
            See our automotive solutions in action
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden mb-12">
          <div className="p-10">
            <div className="inline-block px-3 py-1 bg-amber-500 text-black text-sm font-semibold rounded mb-4">
              FEATURED PROJECT
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Premium Auto Dealership Platform
            </h2>
            <p className="text-lg text-zinc-400 mb-6">
              A complete car dealership website with vehicle inventory
              management, advanced search filters, WhatsApp integration, and
              powerful admin dashboard.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-950 p-6 rounded-xl">
                <div className="text-2xl font-bold text-amber-500 mb-2">
                  50+
                </div>
                <div className="text-zinc-400">Vehicle Listings</div>
              </div>
              <div className="bg-zinc-950 p-6 rounded-xl">
                <div className="text-2xl font-bold text-amber-500 mb-2">12</div>
                <div className="text-zinc-400">Filter Options</div>
              </div>
              <div className="bg-zinc-950 p-6 rounded-xl">
                <div className="text-2xl font-bold text-amber-500 mb-2">
                  Mobile
                </div>
                <div className="text-zinc-400">Optimized</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">
                  Real-time inventory updates
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">
                  One-click WhatsApp inquiries
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">
                  Admin dashboard for inventory
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Lead tracking system</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Finance calculator</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">SEO optimized pages</span>
              </div>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-3">Results</h4>
              <p className="text-zinc-300 leading-relaxed">
                This platform enabled the dealership to showcase their entire
                inventory online, capture leads 24/7, and close sales faster
                with integrated WhatsApp communication. The admin dashboard
                reduced inventory management time by 70%.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveNav("contact")}
              className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all"
            >
              Build Something Like This
            </button>
          </div>
        </div>

        <div className="text-center bg-zinc-900 p-10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Want to See Your Industry Solution?
          </h3>
          <p className="text-lg text-zinc-400 mb-6">
            Whether it's logistics, e-commerce, or custom business tools—we can
            build it.
          </p>
          <button
            type="button"
            onClick={() => setActiveNav("contact")}
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );

  const renderPricing = () => (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Investment</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Premium solutions with transparent pricing. Quality work requires
            proper investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-zinc-900 rounded-2xl p-8 ${
                plan.popular ? "ring-2 ring-amber-500 relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-amber-500 mb-2">
                {plan.price}
              </div>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check
                      className="text-amber-500 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setActiveNav("contact")}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Payment Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-amber-500">
                50% Upfront
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Initial deposit to begin design and development. This secures
                your project timeline and allows us to dedicate resources to
                your build.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-amber-500">
                50% On Completion
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Final payment upon project completion and your approval. We
                don't launch until you're completely satisfied with the result.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <h3 className="text-xl font-bold mb-3">
              What's Included in Every Package
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-zinc-300">Mobile responsive design</span>
              </div>
              <div className="flex items-start gap-2">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-zinc-300">SEO foundation setup</span>
              </div>
              <div className="flex items-start gap-2">
                <Check
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-zinc-300">Post-launch support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Therealmac
          </h1>
          <p className="text-xl text-zinc-400">
            Built on industry experience, not just technical skills
          </p>
        </div>

        <div className="bg-zinc-900 p-10 rounded-2xl mb-8">
          <h2 className="text-3xl font-bold mb-6">The Story</h2>
          <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
            <p>
              Therealmac was founded by someone who's lived in the automotive
              and business world—not just observed it from a developer's desk.
              After years working in car sales, logistics, and business
              operations, I saw a gap: most websites fail because designers
              don't understand the business they're building for.
            </p>
            <p>
              A car dealership doesn't need a "pretty website." It needs a sales
              system. A logistics company doesn't need flashy animations. It
              needs efficiency and clarity. That's what we build.
            </p>
            <p>
              Every website we create is backed by real-world business
              knowledge, strategic thinking, and a conversion-first approach. We
              don't just launch websites—we launch digital tools that make money
              and save time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-amber-500">
              Our Approach
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Understand your business model first</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Design for conversions, not just aesthetics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Build systems that scale with growth</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Train you to manage your platform</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-amber-500">
              Who We Serve
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Automotive dealerships & brokers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Logistics & transport companies</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Professional service businesses</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Entrepreneurs building digital products</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Based in Lagos, Serving Globally
          </h3>
          <p className="text-black/80 text-lg mb-6">
            Local expertise with international standards. We understand Nigerian
            business while delivering world-class digital solutions.
          </p>
          <button
            type="button"
            onClick={() => setActiveNav("contact")}
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-zinc-900 transition-all"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Build Something Great
          </h1>
          <p className="text-xl text-zinc-400">
            Ready to elevate your online presence? Get in touch and let's
            discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-amber-500 font-semibold mb-2">Location</h3>
                <p className="text-zinc-300">Lagos, Nigeria</p>
                <p className="text-zinc-400 text-sm">
                  (Serving clients globally)
                </p>
              </div>
              <div>
                <h3 className="text-amber-500 font-semibold mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/2347044929697"
                  className="text-zinc-300 hover:text-amber-500 transition-colors"
                >
                  +234 704 492 9697
                </a>
              </div>
              <div>
                <h3 className="text-amber-500 font-semibold mb-2">
                  Response Time
                </h3>
                <p className="text-zinc-300">Within 24 hours</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <a
                href="https://wa.me/2347044929697"
                className="w-full inline-block text-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form
              className="space-y-4"
              id="contactForm"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-400">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-400">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-400">
                  Project Type
                </label>
                <select
                  name="projectType"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                >
                  <option>Automotive Website</option>
                  <option>Business Website</option>
                  <option>Logistics Platform</option>
                  <option>Web Application</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-400">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  placeholder="Describe what you're looking to build..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-black">1</span>
              </div>
              <h4 className="font-bold mb-2">We Review Your Request</h4>
              <p className="text-zinc-400 text-sm">
                Within 24 hours, we'll assess your project needs
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-black">2</span>
              </div>
              <h4 className="font-bold mb-2">Strategy Call</h4>
              <p className="text-zinc-400 text-sm">
                We discuss your goals, timeline, and budget
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-black">3</span>
              </div>
              <h4 className="font-bold mb-2">Proposal & Timeline</h4>
              <p className="text-zinc-400 text-sm">
                Receive a detailed plan and start building
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    switch (activeNav) {
      case "home":
        return renderHome();
      case "services":
        return renderServices();
      case "automotive":
        return renderAutomotive();
      case "projects":
        return renderProjects();
      case "pricing":
        return renderPricing();
      case "about":
        return renderAbout();
      case "contact":
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              onClick={() => setActiveNav("home")}
              className="text-2xl font-bold cursor-pointer hover:text-amber-500 transition-colors"
              role="button"
              tabIndex={0}
            >
              THEREALMAC
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveNav(item.id)}
                  className={`font-medium transition-colors ${
                    activeNav === item.id
                      ? "text-amber-500"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                    activeNav === item.id
                      ? "bg-amber-500 text-black"
                      : "text-zinc-400 hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <a
        href="https://wa.me/2347044929697"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-500 transition-all hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <main className="pt-20">{renderPage()}</main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">THEREALMAC</h3>
              <p className="text-zinc-400 text-sm">
                Premium automotive and business web solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("automotive")}
                    className="hover:text-amber-500"
                  >
                    Automotive
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("services")}
                    className="hover:text-amber-500"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("services")}
                    className="hover:text-amber-500"
                  >
                    Logistics
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("about")}
                    className="hover:text-amber-500"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("projects")}
                    className="hover:text-amber-500"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("pricing")}
                    className="hover:text-amber-500"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>Lagos, Nigeria</li>
                <li>
                  <a
                    href="https://wa.me/2347044929697"
                    className="hover:text-amber-500"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveNav("contact")}
                    className="hover:text-amber-500"
                  >
                    Get in Touch
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
            <p>
              © 2026 Therealmac. All rights reserved. Built with precision for
              automotive excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TherealmacWebsite;
