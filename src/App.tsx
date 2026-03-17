import { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Star, Menu, X, CheckCircle, PawPrint, Calendar, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const testimonials = [
    {
      name: "Campbell McDonald-Kerr",
      rating: 5,
      text: "We had 3 lots of 1 on 1 sessions with Dwight from this company and he was really good and knows more about dog behaviour than anyone I've ever met. He can show you how to teach your dog pretty much anything with positive reinforcement. In the 3 weeks we had training sessions with Dwight and our dog he helped us train our new puppy. He learned to sit, lay down, and roll over. Would definitely recommend this company and Dwight in particular, and would rate them highly for professionalism and value for money."
    },
    {
      name: "Emma Webb",
      rating: 5,
      text: "I emailed Elite k-9 on Tuesday evening and Dwight came to the house the next day. We had introduced a new puppy to our adult dog and it wasn't working and we didn't know if we could keep the puppy. Dwight has given us the tools we need and we are looking feeling positive about the 2 dogs being together. I highly recommend Dwight and Elite K-9 services. 5/5 stars."
    },
    {
      name: "Lisa Guglielmino",
      rating: 5,
      text: "Fantastic support and knowledge. I thought my large Akita was hard work and I was following all the wrong advice from social media. It was getting to the point that I was worried every time we go out for a walk because she was growing to be so strong. Dwight understood my dog immediately and has won my dog over. She will do anything for Dwight. Every week I see improvements in her behaviour and respect for me. And now we have lovely quiet walks together. Thank you Dwight!"
    },
    {
      name: "Fatma Hashim",
      rating: 5,
      text: "Our labradoodle grew up in COVID19 lockdowns and has always struggled with people coming to our home. Family and friends often stay away as he constantly barks at them and even nips them on occasion. One session with Dwight and he's already a different dog! Dwight was amazing with him and us and helped us understand how to set up our dog for good behaviours. While we have some work ahead of us, we feel confident that we'll get there. Dwight's experience, advice and generosity with his time is amazing and we highly recommend him."
    }
  ];

  const services = [
    {
      title: "One-on-One Training",
      description: "Personalized training sessions tailored to your dog's specific needs and behavioral challenges.",
      icon: <PawPrint className="w-8 h-8" />
    },
    {
      title: "Puppy Training",
      description: "Start your puppy off right with foundational obedience, socialization, and positive behavior development.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Behavioral Consultation",
      description: "Expert guidance for addressing challenging behaviors like aggression, anxiety, and leash pulling.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Obedience Training",
      description: "Comprehensive obedience training including sit, stay, recall, and leash walking skills.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Elite K9 Work Dogs Australia" className="h-14 w-auto" />
              <span className={`font-bold text-lg hidden sm:block ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                Elite K9
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`font-medium hover:text-[#0066CC] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`font-medium hover:text-[#0066CC] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>About</button>
              <button onClick={() => scrollToSection('services')} className={`font-medium hover:text-[#0066CC] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Services</button>
              <button onClick={() => scrollToSection('testimonials')} className={`font-medium hover:text-[#0066CC] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className={`font-medium hover:text-[#0066CC] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Contact</button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setBookingDialogOpen(true)}
                className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold px-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-slate-700 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-700 font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-slate-700 font-medium">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-slate-700 font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-700 font-medium">Contact</button>
              <Button 
                onClick={() => {setBookingDialogOpen(true); setMobileMenuOpen(false);}}
                className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold mt-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/training1.jpg" 
            alt="Dog Training" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Dog Training in Australia
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Transform your dog's behavior with expert training from Dwight. 
              Using positive reinforcement techniques, we help you build a stronger bond with your furry companion.
            </p>
            <p className="text-lg text-amber-400 font-semibold mb-8 italic">
              "Patience is the Key to Success"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setBookingDialogOpen(true)}
                size="lg"
                className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold px-8 py-6 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Book: +61 478 686 110
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                About Elite K9 Work Dogs Australia
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Elite K9 Work Dogs Australia, we believe that every dog has the potential to be well-behaved and happy. 
                Led by Dwight, our experienced dog trainer, we specialize in positive reinforcement training methods that 
                build trust and strengthen the bond between you and your dog.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Whether you have a new puppy that needs basic obedience training, or an adult dog with behavioral challenges, 
                we provide personalized, one-on-one training sessions in the comfort of your own home.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Positive Reinforcement</h4>
                    <p className="text-slate-600 text-sm">Reward-based training methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">In-Home Training</h4>
                    <p className="text-slate-600 text-sm">Convenient sessions at your home</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">All Breeds Welcome</h4>
                    <p className="text-slate-600 text-sm">From puppies to adult dogs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Proven Results</h4>
                    <p className="text-slate-600 text-sm">See improvement from day one</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/training3.jpg" alt="Dog Training" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="/images/training4.jpg" alt="Dog Training" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
              <img src="/images/training5.jpg" alt="Dog Training" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="/images/training6.jpg" alt="Dog Training" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a range of professional dog training services tailored to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-[#0066CC]/10 rounded-xl flex items-center justify-center text-[#0066CC] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-white">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Training in Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See the results of our professional dog training sessions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/training1.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/training2.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/training3.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/training4.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/training5.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/training6.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/training7.jpg" alt="Dog Training" className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/logo.png" alt="Elite K9 Logo" className="rounded-xl w-full h-48 object-contain bg-slate-50 p-4 hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0066CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Dog's Behavior?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Contact us today to schedule your first training session. We're here to help you and your dog 
                build a stronger, happier relationship.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Call or Text</p>
                    <p className="text-white font-semibold text-lg">+61 478 686 110</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Business Hours</p>
                    <p className="text-white font-semibold">Monday - Sunday: 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Service Area</p>
                    <p className="text-white font-semibold">Australia-wide In-Home Training</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Book Your Session</h3>
              <p className="text-slate-600 mb-6">
                Click the button below to call us directly and schedule your training session with Dwight.
              </p>
              <Button 
                onClick={() => setBookingDialogOpen(true)}
                size="lg"
                className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold py-6 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now - Call +61 478 686 110
              </Button>
              <p className="text-center text-slate-500 text-sm mt-4">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/logo.png" alt="Elite K9 Logo" className="h-16 w-auto mb-4" />
              <p className="text-slate-400 leading-relaxed">
                Professional dog training services across Australia. 
                Building better bonds between dogs and their owners through positive reinforcement.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-slate-400 hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex justify-between"><span>Monday</span><span>9am - 6pm</span></li>
                <li className="flex justify-between"><span>Tuesday</span><span>9am - 6pm</span></li>
                <li className="flex justify-between"><span>Wednesday</span><span>9am - 6pm</span></li>
                <li className="flex justify-between"><span>Thursday</span><span>9am - 6pm</span></li>
                <li className="flex justify-between"><span>Friday</span><span>9am - 6pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9am - 6pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>9am - 6pm</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Elite K9 Work Dogs Australia. All rights reserved.
            </p>
            <p className="text-amber-400 font-semibold mt-2 italic">
              "Patience is the Key to Success"
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-800">Book Your Training Session</DialogTitle>
            <DialogDescription className="text-slate-600">
              Contact Dwight directly to schedule your dog training session.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Phone className="w-12 h-12 text-[#0066CC] mx-auto mb-4" />
              <p className="text-slate-600 mb-2">Call or Text</p>
              <a 
                href="tel:+61478686110" 
                className="text-3xl font-bold text-[#0066CC] hover:text-[#0052a3] transition-colors"
              >
                +61 478 686 110
              </a>
            </div>
            <div className="text-center">
              <p className="text-slate-600 mb-2">Business Hours</p>
              <p className="font-semibold text-slate-800">Monday - Sunday: 9am - 6pm</p>
            </div>
            <Button 
              onClick={() => window.location.href = 'tel:+61478686110'}
              className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
