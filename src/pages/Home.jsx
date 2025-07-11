import React from 'react';
import { About } from './About';

export const Home = () => (
  <>
    <div className="bg-gray-900 text-white ">
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center px-4 ">
          <div
              className="absolute inset-0 bg-cover bg-center z-0 "
              style={{backgroundImage: "url('images/misc/featured_image.jpg')", opacity: 0.3}}>
          </div>
          <div className="relative z-10 ">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                  Revitalizing <span className="text-primary">Penn Valley Off-Leash Dog Park</span>
              </h1>
              <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
                  A community-driven initiative to restore, improve, and celebrate our historic urban park.
              </p>
          </div>
      </div>
    </div>
    <About isPreview />
    
    {/* For the home page, we can show previews of other sections */}
    {/* <About isPreview />
    <Events isPreview />
    <Donate />
    <Sponsors isPreview /> */}
  </>
);