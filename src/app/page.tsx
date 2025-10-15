'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Users, Shield, Phone, Mail, Facebook, Instagram, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const TravelLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIndonesia, setIsIndonesia] = useState(true);

  useEffect(() => {
    // Detect user location based on timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setIsIndonesia(timezone.includes('Asia/Jakarta') || timezone.includes('Asia/Pontianak') || timezone.includes('Asia/Makassar'));

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        vehicle: 'Kendaraan',
        price: 'Harga',
        contact: 'Kontak'
      },
      hero: {
        title: 'Perjalanan Nyaman',
        subtitle: 'Pontianak - Kuching',
        description: 'Nikmati perjalanan lintas negara yang aman, nyaman, dan terpercaya dengan Toyota Hiace Commuter premium kami',
        cta: 'Pesan Sekarang via WhatsApp',
        whatsapp: '+6285822593523'
      },
      about: {
        title: 'Tentang Kami',
        subtitle: 'Partner Terpercaya Perjalanan Anda',
        desc: 'Kami adalah penyedia layanan transportasi lintas negara Pontianak-Kuching yang telah berpengalaman lebih dari 5 tahun. Dengan komitmen untuk memberikan pelayanan terbaik, keamanan, dan kenyamanan maksimal bagi setiap penumpang.',
        features: [
          { icon: Shield, title: 'Aman & Terpercaya', desc: 'Izin resmi dan asuransi penumpang' },
          { icon: Clock, title: 'Tepat Waktu', desc: 'Keberangkatan sesuai jadwal' },
          { icon: Users, title: 'Driver Berpengalaman', desc: 'Sopir profesional dan ramah' },
          { icon: MapPin, title: 'Door to Door', desc: 'Antar jemput dari lokasi Anda' }
        ]
      },
      vehicle: {
        image: '/images/avanza.webp',
        title: 'Kendaraan Kami',
        subtitle: 'New Avanza',
        specs: [
          'Kapasitas: 4-5 penumpang',
          'AC sejuk & nyaman',
          'Bagasi luas untuk bagasi',
          'Kondisi terawat & bersih'
        ],

      },

      footer: {
        company: 'Layanan transportasi lintas negara terpercaya sejak 2019',
        quick: 'Link Cepat',
        contact: 'Kontak Kami',
        follow: 'Ikuti Kami',
        rights: '© 2024 Pontianak-Kuching Travel. Semua hak dilindungi.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        vehicle: 'Vehicle',
        price: 'Price',
        contact: 'Contact'
      },
      hero: {
        title: 'Comfortable Journey',
        subtitle: 'Pontianak - Kuching',
        description: 'Enjoy a safe, comfortable, and trusted cross-border journey with our premium Toyota Hiace Commuter',
        cta: 'Book Now via WhatsApp',
        whatsapp: '+6285822593523'
      },
      about: {
        title: 'About Us',
        subtitle: 'Your Trusted Travel Partner',
        desc: 'We are a cross-border transportation service provider between Pontianak and Kuching with over 5 years of experience. Committed to providing the best service, safety, and maximum comfort for every passenger.',
        features: [
          { icon: Shield, title: 'Safe & Trusted', desc: 'Official license and passenger insurance' },
          { icon: Clock, title: 'On Time', desc: 'Departure as scheduled' },
          { icon: Users, title: 'Experienced Drivers', desc: 'Professional and friendly drivers' },
          { icon: MapPin, title: 'Door to Door', desc: 'Pick up and drop off from your location' }
        ]
      },
      vehicle: {
        title: 'Our Vehicle',
        subtitle: 'New Avanza',
        specs: [
          'Capacity: 10-14 passengers',
          'Cool & comfortable AC',
          'Spacious luggage compartment',
          'Well-maintained & clean'
        ],

      },

      footer: {
        company: 'Trusted cross-border transportation service since 2019',
        quick: 'Quick Links',
        contact: 'Contact Us',
        follow: 'Follow Us',
        rights: '© 2024 Pontianak-Kuching Travel. All rights reserved.'
      }
    }
  };

  const kendaraan = [
    {
      image: '/images/avanza.webp',
      title: 'Kendaraan Kami',
      subtitle: 'New Avanza',
      price : 'Rp 5.500.000',
      specs: [
        '3 Hari 2 Malam',
        'Include Driver & Fuel',
        'BBM Selama Perjalanan',
        'Roadtax & Insurance Malaysia',
        'Free Mineral',
        'Kapasitas: 4-5 penumpang',
        'AC sejuk & nyaman',
        'Kondisi terawat & bersih'
      ],

    },
    {
      image: '/images/reborn.webp',
      title: 'Kendaraan Kami',
      subtitle: 'Innova Reborn',
      price : 'Rp 6.500.000',
      specs: [
          '3 Hari 2 Malam',
         'Include Driver & Fuel',
        'BBM Selama Perjalanan',
        'Roadtax & Insurance Malaysia',
        'Free Mineral',
        'Kapasitas: 6-7 penumpang',
        'AC sejuk & nyaman',
        'Kondisi terawat & bersih'
      ],

    },
    {
      image: '/images/hiace.webp',
      title: 'Kendaraan Kami',
      subtitle: 'Toyota Hiace Commuter',
      price : 'Rp 8.000.000',
      specs: [
          '3 Hari 2 Malam',
         'Include Driver & Fuel',
        'BBM Selama Perjalanan',
        'Roadtax & Insurance Malaysia',
        'Free Mineral',
        'Kapasitas: 10-14 penumpang',
        'AC sejuk & nyaman',
        
        'Kondisi terawat & bersih'
      ],

    },
    {
      image: '/images/fortuner.webp',
      title: 'Kendaraan Kami',
      subtitle: 'Fortuner GR Sport',
      price : 'Rp 7.500.000',
      specs: [
        '3 Hari 2 Malam',
         'Include Driver & Fuel',
          'BBM Selama Perjalanan',
        'Roadtax & Insurance Malaysia',
        'Free Mineral',
        'Kapasitas: 6-7 penumpang',
        'AC sejuk & nyaman',
    
        'Kondisi terawat & bersih',
        'Mobil Premium'
      ],

    },
  ]

  const t = isIndonesia ? content.id : content.en;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <MapPin className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                PTK-KCH Travel
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                >
                  {value}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {t.hero.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-3xl md:text-4xl text-blue-200">Pontianak</span>
              <MapPin className="w-8 h-8 text-yellow-400 animate-bounce" />
              <span className="text-3xl md:text-4xl text-blue-200">Kuching</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <a
              href={`https://wa.me/6285822593523?text=Halo%20Travel%20Pontianak-Kuching%20Saya%20Ingin%20Memesan%20Paket%20Perjalanan%20Ke%20Kuching`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              <span>{t.hero.cta}</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-blue-600 font-semibold">{t.about.subtitle}</p>
          </div>

          <div className="mb-16">
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              {t.about.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Section */}
      <section id="vehicle" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kendaraan Kami
            </h2>
            <p className="text-xl text-blue-600 font-semibold">Booking Mobil Pilihan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {kendaraan.map((kend, index) => (
                   <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4"> <Image
                    src={kend.image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className='object-cover m-auto h-fit  w-fit rounded-xl'
                  /></div>
                  <h3 className="text-2xl font-bold text-blue-500  mb-2">{kend.subtitle}</h3>
                  <p className='text-3xl  font-bold text-blue-800'>{kend.price}</p>
                </div>
                
                <div className="space-y-3">
                {kend.specs.map((spec, idx) => (
                  <div className="flex items-start space-x-3" key={idx}>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text text-lg">{spec}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>

            ))}
       
            
          </div>
        </div>
      </section>

      {/* Price Section */}
      {/* <section id="price" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.price.title}
            </h2>
            <p className="text-xl text-blue-600 font-semibold">{t.price.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {t.price.packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all transform hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-blue-600' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-2xl font-semibold">
                    {isIndonesia ? 'Populer' : 'Popular'}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    {pkg.unit && <span className="text-gray-600 text-lg">{pkg.unit}</span>}
                  </div>
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/${t.hero.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {isIndonesia ? 'Pesan Sekarang' : 'Book Now'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm italic">{t.price.note}</p>
        </div>
      </section> */}

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">PTK-KCH Travel</span>
              </div>
              <p className="text-gray-400 mb-4">{t.footer.company}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.quick}</h4>
              <div className="space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.contact}</h4>
              <div className="space-y-3">
                <a href={`https://wa.me/6285822593523?text=Halo%20Travel%20Pontianak-Kuching%20Saya%20Ingin%20Memesan%20Paket%20Perjalanan%20Ke%20Kuching`} className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5" />
                  <span>{t.hero.whatsapp}</span>
                </a>
                <a href="mailto:argroup.ptk@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                  <span>argroup.ptk@gmail.com</span>
                </a>
              </div>
              <div className="mt-4">
                <h4 className="font-bold mb-3">{t.footer.follow}</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TravelLandingPage;