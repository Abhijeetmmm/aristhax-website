"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            See Us In Action
          </span>
          <h2 className="section-title">
            Watch How We <span className="section-title-accent">Protect You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Experience our cutting-edge security operations and see firsthand how our team 
            monitors, detects, and responds to threats in real-time.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-2 md:p-3 border-glow relative group">
            {/* Video Placeholder - Replace with your actual video */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
              {/* Placeholder content - Replace this div with actual video */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/30">
                    <Play className="w-12 h-12 text-primary ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Video Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Upload your company video to showcase your security operations and expertise.
                  </p>
                </div>
              </div>
              
              {/* Actual video element - uncomment and add src when ready
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                poster="/video-poster.jpg"
              >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              */}
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Video caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-6"
          >
            Our 24/7 Security Operations Center monitoring global threats in real-time
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
