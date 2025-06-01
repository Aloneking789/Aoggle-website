import React from 'react';
import { Video, Heart, MessageCircle, Share2, Flag, Eye, Home, Tv } from 'lucide-react';
import Button from '../components/Button';

const Features: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'Short Video Format',
      description: 'Browse through endless home inspiration videos in a fun, engaging format that\'s easy to consume.',
      imageUrl: 'https://images.pexels.com/photos/7078049/pexels-photo-7078049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Heart,
      title: 'Like & Save Favorites',
      description: 'Save videos you love to your favorites collection for easy access later. Create personalized collections.',
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: MessageCircle,
      title: 'Connect & Comment',
      description: 'Share your thoughts and connect with other home enthusiasts through comments and discussions.',
      imageUrl: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share inspiring videos with friends and family across all your favorite social platforms and messaging apps.',
      imageUrl: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Flag,
      title: 'Community Standards',
      description: 'Help maintain a positive environment by reporting inappropriate content to our moderation team.',
      imageUrl: 'https://images.pexels.com/photos/3935322/pexels-photo-3935322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Eye,
      title: 'Personalized For You',
      description: 'Our algorithm learns what you love and delivers personalized home inspiration tailored to your tastes.',
      imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Home,
      title: 'Diverse Home Styles',
      description: 'Explore content across all home styles and budgets - from DIY projects to luxury renovations.',
      imageUrl: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Tv,
      title: 'Live Streams',
      description: 'Watch live home tours, renovation reveals, and Q&A sessions with design professionals.',
      imageUrl: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary-800 mb-6">Explore Our Features</h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Aoggle Homes brings you the best tools and features to discover, save, and share home inspiration. Our platform makes it easy to find ideas for your dream home.
          </p>
        </div>
        
        {/* Features section */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-12' : 'md:grid-cols-12 md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className={`${index % 2 === 0 ? 'md:col-span-5 md:order-1' : 'md:col-span-5 md:order-2'}`}>
                <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">{feature.title}</h2>
                <p className="text-lg text-secondary-600 mb-6">{feature.description}</p>
                <Button variant={index % 2 === 0 ? 'primary' : 'outline'}>
                  Learn More
                </Button>
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:col-span-7 md:order-2' : 'md:col-span-7 md:order-1'}`}>
                <div className="overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 bg-primary-500 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Ready to Get Inspired?</h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto mb-8">
            Download Aoggle Homes today and join thousands of users discovering their dream home ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" size="lg">
              Download Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;