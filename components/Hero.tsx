import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { ChevronRight, ChevronDown, PlayCircle, Maximize, Minimize } from 'lucide-react';
import { Modal } from './Modal';
import YouTube, { YouTubeProps } from 'react-youtube';

export const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [offerButtonText, setOfferButtonText] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState<string>('DESENVOLVA SUA MEDIUNIDADE!');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<any>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVideoModalOpen) {
      interval = setInterval(() => {
        if (playerRef.current) {
          const time = playerRef.current.getCurrentTime();
          // First button: 1:21 (81s) to 2:30 (150s)
          // Second button: 5:00 (300s) onwards
          if (time >= 81 && time <= 150) {
            setOfferButtonText('DESENVOLVA SUA MEDIUNIDADE!');
            setDisplayedText('DESENVOLVA SUA MEDIUNIDADE!');
          } else if (time >= 300) {
            setOfferButtonText('ACESSE GRAVADO!');
            setDisplayedText('ACESSE GRAVADO!');
          } else {
            setOfferButtonText(null);
          }
        }
      }, 1000);
    } else {
      setOfferButtonText(null);
      // Pause video if modal is closed
      if (playerRef.current) {
        playerRef.current.pauseVideo();
      }
    }
    return () => clearInterval(interval);
  }, [isVideoModalOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      controls: 0,
      disablekb: 1,
      iv_load_policy: 3,
      fs: 0,
    },
  };

  const scrollToSyllabus = () => {
    const element = document.getElementById('syllabus');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background Abstract */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cosmos-900"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">Oferta Limitada!</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-serif">
          A Ciência da <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">Mediunidade</span> e<br />
          Capacidades Paranormais
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
          Compreenda e controle seus fenômenos mediúnicos longe de superstições. Uma metodologia prática que une a racionalidade da <strong className="text-white font-semibold">Física</strong> à profundidade da <strong className="text-white font-semibold">Espiritualidade</strong>, guiada por quem estuda o universo há mais de 50 anos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button onClick={() => window.open('https://pay.hotmart.com/P81943941Q?off=wricgrqu&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=mediunidade', '_blank')}>
            Começar Jornada Agora
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <button 
            onClick={() => setIsVideoModalOpen(true)} 
            className="flex items-center space-x-2 text-slate-200 hover:text-white font-medium transition-all px-6 py-3 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-800/40 hover:bg-slate-700/60 backdrop-blur-sm"
          >
            <PlayCircle className="w-5 h-5 text-gold-400" />
            <span>Ver Vídeo</span>
          </button>
        </div>

      </div>

      {/* Scroll indicator - absolute positioned at the bottom of the section */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-fade-in-up"
        style={{ animationDelay: '0.5s' }}
        onClick={scrollToSyllabus}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-300 mb-2 font-medium">Rolar para baixo</span>
        <ChevronDown className="w-5 h-5 text-slate-300 animate-bounce" />
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="A Ciência da Mediunidade"
      >
        <div ref={videoContainerRef} className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-2xl border border-slate-800">
          <div className="absolute inset-0 [&>div]:w-full [&>div]:h-full [&>div>iframe]:w-full [&>div>iframe]:h-full" style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}>
            <YouTube videoId="POi6V4j9mec" opts={opts} onReady={onPlayerReady} className="w-full h-full" />
          </div>

          {/* Full transparent overlay — blocks ALL YouTube clickable elements */}
          <div className="absolute inset-0 z-10" />

          {/* Custom Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-3 right-3 z-30 flex items-center justify-center w-9 h-9 rounded-lg bg-black/60 hover:bg-black/90 border border-white/20 hover:border-white/50 text-white transition-all duration-200 backdrop-blur-sm shadow-lg"
            title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Timed Offer Button - Always rendered but opacity controlled */}
          <div 
            className={`absolute bottom-4 sm:bottom-10 left-2 right-2 sm:right-auto sm:left-10 z-30 cursor-pointer transition-all duration-1000 ease-in-out group flex justify-center sm:justify-start ${
              offerButtonText !== null ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
            onClick={() => {
              window.open('https://pay.hotmart.com/P81943941Q?off=wricgrqu&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=mediunidade', '_blank');
              setIsVideoModalOpen(false);
            }}
          >
            <style>{`
              @keyframes softScale {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.03); }
              }
              .animate-soft-scale {
                animation: softScale 3s ease-in-out infinite;
              }
            `}</style>
            
            <div className={`animate-soft-scale hover:!scale-105 transition-transform duration-300 ${displayedText === 'ACESSE GRAVADO!' ? 'w-auto max-w-[95%]' : 'w-[95%] sm:w-auto max-w-full'}`}>
              <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-400 rounded-sm border-2 border-blue-300 py-2 sm:py-4 shadow-[0_0_80px_rgba(59,130,246,0.3)] transform -skew-x-6 sm:-skew-x-12 w-full transition-all duration-500 ${displayedText === 'ACESSE GRAVADO!' ? 'px-6 sm:px-10' : 'px-3 sm:px-16 md:px-24'}`}>
                <div className="absolute inset-0 bg-white/20 blur-[2px] -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-white/30 transition-colors"></div>
                <span className="block transform skew-x-6 sm:skew-x-12 text-white font-black italic text-[12px] sm:text-2xl lg:text-3xl tracking-tight drop-shadow-md text-center whitespace-nowrap">
                  {displayedText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};