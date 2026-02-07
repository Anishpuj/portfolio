import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { EncryptedText } from '../ui/encrypted-text';

function Portfolio() {


  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/Anishpuj' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://www.linkedin.com/in/anish-pujari-24387228b' },
    { name: 'Email', icon: FiMail, url: 'mailto:contact@example.com' },
    { name: 'X', icon: FiTwitter, url: 'https://x.com/sikee257' },
  ];

  const resumeLink = {
    name: 'Resume',
    url: '/Anish_RESUME_AI.pdf', // Update this with actual resume file path
  };

  const pastMilestones = [
    {
      year: '2025',
      title: 'Intern @ Wipro Limited',
      companyUrl: 'https://www.wipro.com',
      description: 'Cloud Infrastructure Services • AI-Investment-Strategist Platform • 40% Efficiency Improvement • 92% Accuracy',
      update: 'Update: Got Offered 10LPA'
    },
    {
      year: '2024',
      title: 'Capital Market Analyst @ Tradeshala',
      companyUrl: 'https://tradeshala.co.in',
      description: '2 mos • Capital Market Analysis • Trading Strategies • Market Research • Bengaluru, Karnataka, India · Remote',
      update: 'offered Portfolio of $1,00,000 To manage'
    },
    {
      year: '2024',
      title: 'Frontend Engineer @ TheNextGem.ai',
      companyUrl: 'https://thenextgem.ai',
      description: 'AI-Powered Investment Discovery • Real-time Analytics • React & TypeScript • 10K+ Users',
      update: 'Listed on Coinbase and market cap reached $5M+'
    },
    {
      year: '2023',
      title: 'Fellow @ Summer of Bitcoin',
      companyUrl: 'https://summerofbitcoin.org',
      description: 'Bitcoin Development • Lightning Network • Open Source Contribution • Global Program',
      update: 'Recieved 3000 USDT as stipend'
    },
    {
      year: '2022-2023',
      title: 'Snapchat Opinion Leader @ Under 25 Universe',
      companyUrl: 'https://www.under25universe.com',
      description: 'Hybrid Bengaluru • 1 Year • AR Ecosystem Community Building'
    },
    {
      year: '2024',
      title: 'Chair @ IEEE Computer Society',
      companyUrl: 'https://www.computer.org',
      description: 'Led 50+ Team • 30% Engagement Boost • Student Mentorship Program'
    },
    {
      year: '2024',
      title: 'Achievements @ National Level',
      description: 'Hackathon 3rd Place • Ideathon Winner • AUSAT Scholarship 1st Rank • Snapchat Opinion Lead'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl text-white whitespace-nowrap" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
              Anish Pujari
              <span className="text-xs text-white ml-2">(he/him)</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 italic">
              ( Hyper Volatile Trader , Loves experimenting with AI and love solving Real World Problems )
            </p>
            
            {/* Identity */}
            <p className="text-sm text-white">
              AI/ML Engineer • Researcher • Founder
            </p>
            
            {/* Portrait */}
            <div className="w-48 sm:w-56 bg-gray-900 overflow-hidden">
              <img 
                src="/IMG_1099.jpg" 
                alt="Profile" 
                className="w-full h-auto object-cover filter grayscale"
                loading="eager"
                fetchPriority="high"
                width="224"
                height="224"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            
            {/* Education */}
            <div className="space-y-2">
              <h3 className="text-sm text-white">
                Education
              </h3>
              <p className="text-sm text-white leading-relaxed">
                <a href="https://alliance.edu.in" className="underline hover:text-white transition-colors">
                  <EncryptedText text="Alliance University" />
                </a> • B.Tech CSE AI/ML • 8.5 CGPA • 2021 - 2025
              </p>
              <p className="text-sm text-white leading-relaxed">
                <a href="https://iiitb.ac.in" className="underline hover:text-white transition-colors">
                  <EncryptedText text="IIIT Bangalore" />
                </a> • Distance Learning • Machine Learning • 2021 - 2024
              </p>
            </div>
            
            {/* Location & Email */}
            <div className="space-y-2 text-sm">
              <p className="text-white">+91 9632750125</p>
              <div className="space-y-2">
                <p className="text-white hover:text-white">
                  <a href="mailto:anishpujari25@gmail.com" className="text-white hover:text-white">
                    <EncryptedText text="anishpujari25@gmail.com" />
                  </a>
                </p>
                <p className="text-white hover:text-white">
                  <a href="mailto:anish@tradex.org.in" className="text-white hover:text-white">
                    <EncryptedText text="anish@tradex.org.in" />
                  </a>
                </p>
              </div>
              <p className="text-white">Bengaluru , IN</p>
            </div>
            
            {/* Elsewhere */}
            <div className="space-y-3">
              <h3 className="text-xs text-white uppercase tracking-wider flex items-center">
                Elsewhere
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="inline h-3 w-3 ml-1 -mt-0.5">
                  <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"></path>
                </svg>
              </h3>
              <div className="space-y-2">
                <a
                  href={resumeLink.url}
                  download
                  className="flex items-center space-x-2 text-sm text-white hover:text-white transition-colors"
                >
                  <FiFileText className="w-4 h-4" />
                  <span>{resumeLink.name}</span>
                </a>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      className="flex items-center space-x-2 text-sm text-white hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-xs text-white mt-64">
              2025 <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>Anish Pujari</span>. All rights reserved.
            </div>
          </div>
          
          {/* Center Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="pt-2">
              <h2 className="text-3xl sm:text-4xl font-serif text-white flex items-center mb-8">
                SideHustle
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="inline h-3 w-3 ml-1 -mt-0.5">
                  <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"></path>
                </svg>
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 text-base">01</span>
                    <h3 className="text-base text-white">Web Development Services</h3>
                  </div>
                  <p className="text-sm text-white ml-8 leading-relaxed">
                    I Sometime build modern, performance-driven websites for people who need clarity, speed, and results—not complexity.
                    <span className="text-gray-400"> (</span>
                    <Link to="/website-works" className="text-gray-400 hover:text-white transition-colors underline">Check My Work</Link>
                    <span className="text-gray-400">)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-serif text-white flex items-center">
              Past Life
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="inline h-3 w-3 ml-1 -mt-0.5">
                <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"></path>
              </svg>
            </h2>
            <div className="space-y-6">
              {pastMilestones.map((milestone) => (
                <div key={milestone.year} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-sm">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg text-white ml-12">
                    {milestone.companyUrl ? (
                      <>
                        {milestone.title.split(' @ ')[0]} @{' '}
                        <a 
                          href={milestone.companyUrl} 
                          className="underline hover:text-white transition-colors"
                        >
                          <EncryptedText text={milestone.title.split(' @ ')[1]} />
                        </a>
                      </>
                    ) : (
                      milestone.title
                    )}
                  </h3>
                  <p className="text-sm text-white ml-12 leading-relaxed">
                    {milestone.description}
                    {milestone.update && (
                      <span className="italic text-gray-400 ml-2">
                        ({milestone.update})
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
