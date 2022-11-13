import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      auth0
    </h1>

    <p className="lead" data-testid="hero-lead">
      Sample Project to implement auth0 in Nextjs App.
    </p>
  </div>
);

export default Hero;
