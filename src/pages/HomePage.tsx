import React from 'react';
import { Video, Heart, MessageCircle, Share2, Flag } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'Short Videos',
      description: 'Browse through endless home inspiration videos in a fun, engaging format.'
    },
    {
      icon: Heart,
      title: 'Like & Follow',
      description: 'Like your favorite content and follow creators for more inspiration.'
    },
    {
      icon: MessageCircle,
      title: 'Comment & Connect',
      description: 'Share your thoughts and connect with other home enthusiasts.'
    },
    {
      icon: Share2,
      title: 'Share Everywhere',
      description: 'Easily share inspiring videos with friends and family.'
    },
    {
      icon: Flag,
      title: 'Community Standards',
      description: 'Report inappropriate content to keep our platform safe and friendly.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-100 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-800 leading-tight mb-4">
                The Ultimate Home <span className="text-primary-500">Inspiration</span> App
              </h1>
              <p className="text-lg text-secondary-600 mb-8">
                Discover amazing home ideas through short videos. Browse, like, comment, and share home inspiration just like TikTok, but focused on homes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg">
                  Download Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative animate-slide-up">
              <div className="relative mx-auto w-[280px] h-[560px] bg-secondary-800 rounded-[36px] p-3 shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-secondary-800 rounded-b-lg"></div>
                <div className="w-full h-full bg-primary-100 rounded-[28px] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="App screenshot of a beautiful home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white text-sm">@modernhomes</p>
                        <p className="text-white text-xs">Modern kitchen renovation #home #kitchen</p>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <Heart className="w-6 h-6 text-white" />
                        <MessageCircle className="w-6 h-6 text-white" />
                        <Share2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">Discover Our Features</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Aoggle Homes brings you the best features to explore and share home inspiration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto mb-8">
            Download Aoggle Homes and start discovering amazing home inspiration ideas.
          </p>
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-16"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">What Our Users Say</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Join thousands of happy users who found inspiration for their homes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-800">Jane Doe</h4>
                  <p className="text-sm text-secondary-600">Home Enthusiast</p>
                </div>
              </div>
              <p className="text-secondary-700">
                "I found the perfect kitchen renovation ideas for my new home. The short video format makes it so easy to browse through ideas quickly!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">MS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-800">Mike Smith</h4>
                  <p className="text-sm text-secondary-600">DIY Enthusiast</p>
                </div>
              </div>
              <p className="text-secondary-700">
                "This app has completely changed how I find inspiration for my DIY projects. I love being able to follow my favorite creators!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">LJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-800">Lisa Johnson</h4>
                  <p className="text-sm text-secondary-600">Interior Designer</p>
                </div>
              </div>
              <p className="text-secondary-700">
                "As a professional designer, I use Aoggle Homes to stay updated on trends and share my work with clients. It's the perfect platform!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Inspired?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join our community of home enthusiasts and discover amazing ideas for your dream home.
          </p>
          <Button variant="primary" size="lg">
            Download Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;