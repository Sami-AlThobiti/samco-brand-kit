import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Type, 
  Download, 
  ArrowLeft, 
  Sparkles, 
  LayoutTemplate, 
  CheckCircle,
  RefreshCcw,
  Droplet,
  Grid,
  Zap,
  Leaf,
  Sunset,
  Waves,
  Cpu
} from 'lucide-react';

/**
 * Samco Brand Kit Lite v3
 * - Arabic Fonts Integration
 * - Enhanced Font Selection UI
 */

// --- Social Media Icons ---
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

// --- Data & Configurations ---

const APP_THEMES = {
  nebula: { id: 'nebula', name: 'فضاء النيون', icon: Zap, bgClass: 'bg-slate-900', accent: 'text-cyan-400', button: 'bg-cyan-500 hover:bg-cyan-400 text-black', card: 'bg-slate-800/80 border-slate-700', animation: 'animate-nebula' },
  royal: { id: 'royal', name: 'ملكي فاخر', icon: Sparkles, bgClass: 'bg-neutral-900', accent: 'text-amber-400', button: 'bg-amber-500 hover:bg-amber-400 text-black', card: 'bg-neutral-800/80 border-amber-900/50', animation: 'animate-royal' },
  minimal: { id: 'minimal', name: 'كلين مودرن', icon: Grid, bgClass: 'bg-gray-100', accent: 'text-indigo-600', button: 'bg-indigo-600 hover:bg-indigo-500 text-white', card: 'bg-white/90 border-gray-200 shadow-xl', animation: 'animate-breeze' },
  nature: { id: 'nature', name: 'غابة الطبيعة', icon: Leaf, bgClass: 'bg-green-900', accent: 'text-emerald-400', button: 'bg-emerald-600 hover:bg-emerald-500 text-white', card: 'bg-green-950/60 border-emerald-800/50', animation: 'animate-forest' },
  sunset: { id: 'sunset', name: 'غروب دافئ', icon: Sunset, bgClass: 'bg-orange-900', accent: 'text-orange-300', button: 'bg-gradient-to-r from-orange-500 to-pink-600 text-white', card: 'bg-black/30 border-orange-500/30', animation: 'animate-sunset' },
  ocean: { id: 'ocean', name: 'أعماق المحيط', icon: Waves, bgClass: 'bg-blue-950', accent: 'text-sky-300', button: 'bg-sky-600 hover:bg-sky-500 text-white', card: 'bg-blue-900/40 border-sky-700/50', animation: 'animate-ocean' },
  cyber: { id: 'cyber', name: 'سايبر بانك', icon: Cpu, bgClass: 'bg-black', accent: 'text-pink-500', button: 'bg-pink-600 hover:bg-pink-500 text-white', card: 'bg-gray-900/90 border-pink-500/50', animation: 'animate-cyber' },
};

// --- Arabic Font Options ---
const ARABIC_FONTS = [
  { id: 'modern', name: 'عصري هندسي (Cairo)', titleFont: 'Cairo', bodyFont: 'Almarai', desc: 'مثالي للشركات الناشئة والتطبيقات' },
  { id: 'corporate', name: 'رسمي حديث (IBM Plex)', titleFont: 'IBM Plex Sans Arabic', bodyFont: 'IBM Plex Sans Arabic', desc: 'ممتاز للشركات والمؤسسات الرسمية' },
  { id: 'classic', name: 'أصيل كلاسيكي (Amiri)', titleFont: 'Amiri', bodyFont: 'Scheherazade New', desc: 'للبراندات الثقافية والأدبية الفاخرة' },
  { id: 'tech', name: 'تقني رقمي (Changa)', titleFont: 'Changa', bodyFont: 'Tajawal', desc: 'للمشاريع التقنية والألعاب' },
  { id: 'friendly', name: 'ودود ناعم (Readex)', titleFont: 'Readex Pro', bodyFont: 'Noto Kufi Arabic', desc: 'للمتاجر ومنتجات اللايف ستايل' },
  { id: 'display', name: 'عريض للعناوين (El Messiri)', titleFont: 'El Messiri', bodyFont: 'Harmattan', desc: 'للعناوين البارزة والفنية' },
];

const generateMoods = () => {
  const bases = [
    { name: 'Royal Gold', colors: ['#D4AF37', '#000000', '#1C1C1C', '#F5F5F5'], tags: ['Luxury', 'Elegant'] },
    { name: 'Neon Cyber', colors: ['#FF00FF', '#00FFFF', '#CCFF00', '#121212'], tags: ['Tech', 'Bold'] },
    { name: 'Minimalist', colors: ['#8C988C', '#EBEBEB', '#505050', '#B8A088'], tags: ['Clean', 'Simple'] },
    { name: 'Ocean Blue', colors: ['#006994', '#009688', '#E0F7FA', '#01579B'], tags: ['Fresh', 'Calm'] },
    { name: 'Sunset Vibes', colors: ['#FF512F', '#DD2476', '#FFD700', '#2C3E50'], tags: ['Warm', 'Energetic'] },
    { name: 'Forest Green', colors: ['#2E7D32', '#81C784', '#1B5E20', '#E8F5E9'], tags: ['Nature', 'Organic'] },
    { name: 'Berry Punch', colors: ['#C2185B', '#F48FB1', '#880E4F', '#FCE4EC'], tags: ['Fun', 'Sweet'] },
    { name: 'Slate Tech', colors: ['#37474F', '#90A4AE', '#263238', '#ECEFF1'], tags: ['Professional', 'Corporate'] },
    { name: 'Coffee Shop', colors: ['#795548', '#D7CCC8', '#3E2723', '#A1887F'], tags: ['Cozy', 'Warm'] },
    { name: 'Lavender Dream', colors: ['#7E57C2', '#D1C4E9', '#311B92', '#EDE7F6'], tags: ['Soft', 'Creative'] },
  ];

  let moods = [];
  for (let i = 0; i < 50; i++) {
    const base = bases[i % bases.length];
    moods.push({
      id: i,
      name: `${base.name} ${Math.floor(i/10) + 1}`,
      colors: base.colors.map(c => ({ hex: c, name: 'Color' })),
      keywords: [...base.tags, `Style ${i+1}`]
    });
  }
  
  moods[0] = { ...moods[0], name: "Royal Luxury", keywords: ['Elegant', 'Gold', 'Premium'] };
  moods[1] = { ...moods[1], name: "Neon Future", keywords: ['Cyber', 'Tech', 'Glow'] };
  moods[2] = { ...moods[2], name: "Clean Minimal", keywords: ['Simple', 'White', 'Airy'] };

  return moods;
};

const ALL_MOODS = generateMoods();

// --- Components ---

const FlipCard = ({ color, fontBody }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-24 md:h-32 w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl shadow-lg flex items-center justify-center backface-hidden border border-white/10"
          style={{ backgroundColor: color.hex }}
        >
          <span className="bg-black/30 text-white px-2 py-1 rounded text-xs backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{fontFamily: fontBody}}>
            {color.hex}
          </span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 w-full h-full bg-gray-900 rounded-xl shadow-lg flex flex-col items-center justify-center rotate-y-180 backface-hidden border border-gray-700">
          <p className="text-white font-bold text-xs md:text-sm" style={{fontFamily: 'monospace'}}>{color.hex}</p>
        </div>
      </div>
    </div>
  );
};

export default function SamcoBrandKit() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState(APP_THEMES.nebula);
  const [formData, setFormData] = useState({
    brandName: '',
    tagline: '',
    selectedMoodIndex: 0,
    selectedFontIndex: 0 // Default to first font (Cairo)
  });
  const [generatedData, setGeneratedData] = useState(null);

  // Inject Styles & Fonts
  useEffect(() => {
    // Inject Google Fonts
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Amiri:wght@400;700&family=Cairo:wght@300;400;700&family=Changa:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@300;400;700&family=Noto+Kufi+Arabic:wght@400;700&family=Readex+Pro:wght@400;700&family=Scheherazade+New:wght@400;700&family=Tajawal:wght@400;700&family=El+Messiri:wght@400;700&family=Harmattan:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes gradient-xy {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-nebula { background: linear-gradient(-45deg, #0f172a, #1e293b, #312e81, #0f172a); background-size: 400% 400%; animation: gradient-xy 15s ease infinite; }
      .animate-royal { background: linear-gradient(-45deg, #000000, #1c1917, #451a03, #000000); background-size: 400% 400%; animation: gradient-xy 15s ease infinite; }
      .animate-breeze { background: linear-gradient(-45deg, #f3f4f6, #e5e7eb, #d1d5db, #f3f4f6); background-size: 400% 400%; animation: gradient-xy 15s ease infinite; }
      .animate-forest { background: linear-gradient(-45deg, #052e16, #14532d, #064e3b, #022c22); background-size: 400% 400%; animation: gradient-xy 20s ease infinite; }
      .animate-sunset { background: linear-gradient(-45deg, #431407, #7c2d12, #be123c, #431407); background-size: 400% 400%; animation: gradient-xy 15s ease infinite; }
      .animate-ocean { background: linear-gradient(-45deg, #082f49, #0c4a6e, #075985, #082f49); background-size: 400% 400%; animation: gradient-xy 18s ease infinite; }
      .animate-cyber { background: linear-gradient(0deg, #000000, #1a0b1a, #000000); background-size: 100% 100%; position: relative; }
      .animate-cyber::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
      
      .perspective-1000 { perspective: 1000px; }
      .transform-style-3d { transform-style: preserve-3d; }
      .rotate-y-180 { transform: rotateY(180deg); }
      .backface-hidden { backface-visibility: hidden; }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
      document.head.removeChild(fontLink);
    };
  }, []);

  const handleGenerate = () => {
    if (!formData.brandName) return alert('الرجاء كتابة اسم البراند');
    
    const moodData = ALL_MOODS[formData.selectedMoodIndex];
    const fontData = ARABIC_FONTS[formData.selectedFontIndex];

    setGeneratedData({
      ...formData,
      ...moodData,
      fontTitle: fontData.titleFont,
      fontBody: fontData.bodyFont,
      generatedDate: new Date().toLocaleDateString('ar-SA')
    });
    setPage('result');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(generatedData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Samco_BrandKit_${generatedData.brandName}.json`;
    link.click();
  };

  const SocialButton = ({ href, icon: Icon, color, label }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative group p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 
      hover:-translate-y-1 transition-all duration-300 flex items-center justify-center overflow-hidden`}
      title={label}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${color}`}></div>
      <div className="text-white group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>
    </a>
  );

  const ThemeSelector = () => (
    <div className="flex flex-wrap gap-2 justify-center my-6 max-w-2xl mx-auto">
      {Object.values(APP_THEMES).map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${theme.id === t.id ? 'bg-white text-black scale-105 shadow-lg' : 'bg-black/30 text-white/70 hover:bg-black/50 hover:text-white'}`}
        >
          <t.icon size={12} /> {t.name}
        </button>
      ))}
    </div>
  );

  // Common font used for UI interface (Tajawal is good for UI)
  const uiFont = { fontFamily: 'Tajawal, sans-serif' };

  return (
    <div className={`min-h-screen w-full transition-all duration-700 text-white ${theme.animation} flex flex-col`} style={uiFont}>
      
      {/* Navbar */}
      <nav className="w-full p-4 flex justify-between items-center backdrop-blur-sm bg-black/10 z-50 border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
          <div className={`p-2 rounded-lg ${theme.button}`}>
            <Palette className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter">Samco Kit <span className="text-xs font-light opacity-70">Lite</span></h1>
        </div>
        {page !== 'home' && (
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors bg-white/10 px-4 py-2 rounded-full"
          >
            <ArrowLeft size={16} /> الرئيسية
          </button>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative overflow-hidden">
        
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className={`absolute top-20 left-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl opacity-20 ${theme.id === 'royal' ? 'bg-amber-500' : 'bg-purple-500'} animate-pulse`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl opacity-20 ${theme.id === 'minimal' ? 'bg-blue-300' : 'bg-cyan-500'} animate-pulse`}></div>
        </div>

        <div className="z-10 w-full max-w-6xl">
          
          {/* HOME PAGE */}
          {page === 'home' && (
            <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500 flex flex-col items-center">
              <div className="inline-block p-2 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-4">
                <span className="text-sm px-3 flex items-center gap-2">🚀 هوية بصرية في ثواني <span className="w-1 h-1 rounded-full bg-green-400"></span> v3.0</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-extrabold mb-4 leading-tight">
                صمم براندك<br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.id === 'royal' ? 'from-amber-200 to-yellow-500' : theme.id === 'minimal' ? 'from-gray-800 to-gray-500' : 'from-cyan-300 to-purple-400'}`}>
                  بخطوط عربية
                </span>
              </h1>
              <p className={`text-lg max-w-xl mx-auto ${theme.id === 'minimal' ? 'text-gray-600' : 'text-gray-300'}`}>
                أداة سريعة للمصممين. اختر من بين 50+ نمط لوني ومجموعة خطوط عربية مميزة.
              </p>
              
              <ThemeSelector />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full max-w-md">
                <button 
                  onClick={() => setPage('generator')}
                  className={`px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full ${theme.button}`}
                >
                  <Droplet size={24} />
                  <div>
                    <span className="block text-sm font-normal opacity-90">ابدأ الآن</span>
                    صمم لون براندك
                  </div>
                </button>
              </div>
              
              <button 
                  onClick={() => setPage('examples')}
                  className={`px-8 py-3 rounded-xl text-sm font-medium border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 ${theme.id === 'minimal' ? 'text-gray-800 border-gray-300' : 'text-white'}`}
                >
                  <LayoutTemplate size={16} /> تصفح 50 مثال جاهز
              </button>

            </div>
          )}

          {/* GENERATOR PAGE */}
          {page === 'generator' && (
            <div className={`w-full max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl backdrop-blur-xl border ${theme.card} animate-in slide-in-from-bottom-10 duration-500`}>
              <div className="flex items-center gap-3 mb-6 justify-center">
                 <div className={`p-3 rounded-full ${theme.button} bg-opacity-20`}>
                    <Droplet className="w-6 h-6" />
                 </div>
                 <h2 className={`text-2xl font-bold ${theme.id === 'minimal' ? 'text-gray-800' : 'text-white'}`}>أنشئ هوية براندك</h2>
              </div>
              
              <div className="space-y-8">
                {/* Inputs */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme.id === 'minimal' ? 'text-gray-600' : 'text-gray-300'}`}>اسم المشروع</label>
                    <input 
                      type="text" 
                      value={formData.brandName}
                      onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                      placeholder="مثال: Samco Studio"
                      className={`w-full p-3 rounded-lg bg-black/10 border border-white/10 focus:ring-2 focus:ring-opacity-50 outline-none transition-all ${theme.id === 'minimal' ? 'text-gray-800 bg-gray-50 placeholder-gray-400 border-gray-300 focus:ring-indigo-500' : 'text-white focus:ring-cyan-500'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme.id === 'minimal' ? 'text-gray-600' : 'text-gray-300'}`}>وصف مختصر (Slogan)</label>
                    <input 
                      type="text" 
                      value={formData.tagline}
                      onChange={(e) => setFormData({...formData, tagline: e.target.value})}
                      placeholder="مثال: نصنع المستقبل"
                      className={`w-full p-3 rounded-lg bg-black/10 border border-white/10 focus:ring-2 focus:ring-opacity-50 outline-none transition-all ${theme.id === 'minimal' ? 'text-gray-800 bg-gray-50 placeholder-gray-400 border-gray-300 focus:ring-indigo-500' : 'text-white focus:ring-cyan-500'}`}
                    />
                  </div>
                </div>

                {/* Font Selector */}
                <div>
                   <label className={`block text-sm font-medium mb-3 ${theme.id === 'minimal' ? 'text-gray-600' : 'text-gray-300'}`}>اختر نمط الخط العربي</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {ARABIC_FONTS.map((font, idx) => (
                        <button
                          key={font.id}
                          onClick={() => setFormData({...formData, selectedFontIndex: idx})}
                          className={`relative p-3 rounded-xl border text-right transition-all group overflow-hidden ${
                             formData.selectedFontIndex === idx
                              ? `${theme.button} border-transparent shadow-lg scale-105 z-10`
                              : `bg-white/5 hover:bg-white/10 ${theme.id === 'minimal' ? 'border-gray-200 text-gray-700' : 'border-white/10 text-gray-400'}`
                          }`}
                        >
                          <h4 className="font-bold text-lg mb-1" style={{fontFamily: font.titleFont}}>{font.name}</h4>
                          <p className="text-xs opacity-70 mb-2" style={{fontFamily: font.bodyFont}}>{font.desc}</p>
                          <div className="text-xs opacity-50 flex gap-2">
                             <span>عنوان: {font.titleFont}</span>
                          </div>
                          {formData.selectedFontIndex === idx && (
                             <div className="absolute top-2 left-2 bg-white/20 rounded-full p-1">
                               <CheckCircle size={14} className="text-white" />
                             </div>
                          )}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Mood Selector */}
                <div>
                  <label className={`block text-sm font-medium mb-3 ${theme.id === 'minimal' ? 'text-gray-600' : 'text-gray-300'}`}>اختر المزاج اللوني (Mood) - {ALL_MOODS.length} خيار</label>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {ALL_MOODS.map((m, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFormData({...formData, selectedMoodIndex: idx})}
                        className={`p-3 rounded-lg text-xs text-left transition-all border flex flex-col gap-2 ${
                          formData.selectedMoodIndex === idx 
                            ? `ring-2 ring-offset-2 ring-offset-transparent ${theme.id === 'minimal' ? 'ring-indigo-500 bg-white shadow-md' : 'ring-cyan-500 bg-white/10'}` 
                            : `bg-white/5 hover:bg-white/10 ${theme.id === 'minimal' ? 'border-gray-200 text-gray-700' : 'border-white/10 text-gray-400'}`
                        }`}
                      >
                        <span className="font-bold truncate w-full">{m.name}</span>
                        <div className="flex w-full h-2 rounded overflow-hidden">
                           {m.colors.map((c, i) => (
                             <div key={i} style={{background: c.hex}} className="flex-1 h-full" />
                           ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  className={`w-full py-4 mt-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 ${theme.button}`}
                >
                  <Sparkles size={18} /> توليد الهوية الكاملة
                </button>
              </div>
            </div>
          )}

          {/* RESULT PAGE */}
          {page === 'result' && generatedData && (
            <div className="space-y-6 animate-in zoom-in duration-500 w-full max-w-4xl mx-auto">
              <div className={`p-8 rounded-2xl shadow-2xl backdrop-blur-xl border ${theme.card}`}>
                
                {/* Header */}
                <div className="text-center mb-8 border-b border-white/10 pb-6">
                  <h2 className={`text-6xl font-bold mb-4 ${theme.id === 'minimal' ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: generatedData.fontTitle }}>
                    {generatedData.brandName}
                  </h2>
                  <p className={`text-2xl tracking-wide opacity-90 ${theme.accent}`} style={{ fontFamily: generatedData.fontBody }}>
                    {generatedData.tagline}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {generatedData.keywords.map(k => (
                      <span key={k} className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/10">
                        #{k}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div className="mb-8">
                  <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme.id === 'minimal' ? 'text-gray-700' : 'text-gray-300'}`}>
                    <Palette size={18} /> الألوان الأساسية
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {generatedData.colors.map((color, idx) => (
                      <FlipCard key={idx} color={color} fontBody={generatedData.fontBody} />
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className={`p-6 rounded-xl border ${theme.id === 'minimal' ? 'bg-gray-50 border-gray-200' : 'bg-black/20 border-white/5'}`}>
                    <span className="text-xs uppercase text-gray-500 mb-2 block flex items-center gap-2"><Type size={12}/> الخط الرئيسي (العنوان)</span>
                    <p className="text-4xl mb-4" style={{ fontFamily: generatedData.fontTitle }}>
                      {generatedData.fontTitle}
                    </p>
                    <p className="text-xl" style={{ fontFamily: generatedData.fontTitle }}>
                       أبجد هوز حطي كلمن - {generatedData.brandName}
                    </p>
                    <p className="text-sm opacity-50 mt-4">يستخدم للعناوين الكبيرة والشعارات.</p>
                  </div>
                  <div className={`p-6 rounded-xl border ${theme.id === 'minimal' ? 'bg-gray-50 border-gray-200' : 'bg-black/20 border-white/5'}`}>
                    <span className="text-xs uppercase text-gray-500 mb-2 block flex items-center gap-2"><Type size={12}/> الخط الفرعي (النصوص)</span>
                    <p className="text-2xl mb-4" style={{ fontFamily: generatedData.fontBody }}>
                      {generatedData.fontBody}
                    </p>
                    <p className="text-base leading-relaxed" style={{ fontFamily: generatedData.fontBody }}>
                       هذا نص تجريبي لخط الفقرات. يساعد هذا الخط على القراءة بوضوح في النصوص الطويلة والوصف الخاص بالمنتجات.
                    </p>
                     <p className="text-sm opacity-50 mt-4">يستخدم للنصوص الطويلة والقوائم.</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-white/10">
                  <button 
                    onClick={handleExport}
                    className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${theme.button}`}
                  >
                    <Download size={18} /> تحميل الهوية (JSON)
                  </button>
                  <button 
                    onClick={() => setPage('generator')}
                    className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-transparent border hover:bg-white/5 transition-all ${theme.id === 'minimal' ? 'border-gray-300 text-gray-700' : 'border-white/20 text-white'}`}
                  >
                    <RefreshCcw size={18} /> تعديل الخيارات
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* EXAMPLES PAGE */}
          {page === 'examples' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
               <h2 className={`text-3xl font-bold text-center mb-8 ${theme.id === 'minimal' ? 'text-gray-800' : 'text-white'}`}>
                 مكتبة الإلهام (50+ نموذج)
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {ALL_MOODS.map((m, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all hover:-translate-y-1 ${theme.card}`}>
                    <div className="w-full h-16 rounded mb-3 flex overflow-hidden">
                      {m.colors.map((c, i) => (
                        <div key={i} className="flex-1 h-full" style={{background: c.hex}}></div>
                      ))}
                    </div>
                    <h3 className={`text-sm font-bold truncate w-full mb-1 ${theme.id === 'minimal' ? 'text-gray-900' : 'text-white'}`}>{m.name}</h3>
                    <button 
                      onClick={() => {
                        setFormData({...formData, selectedMoodIndex: idx});
                        setPage('generator');
                      }}
                      className={`mt-2 px-3 py-1 rounded text-xs w-full opacity-80 hover:opacity-100 ${theme.button}`}
                    >
                      استخدم
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer & Social Links */}
      <footer className="w-full py-8 backdrop-blur-md bg-black/20 border-t border-white/5 mt-auto">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          
          <div className="flex items-center gap-2 text-sm font-medium opacity-80">
            <CheckCircle size={16} className="text-green-400" />
            <span>تابع سامكو للمزيد من الأدوات الإبداعية</span>
          </div>

          <div className="flex gap-4">
            <SocialButton href="https://x.com/designer_samco?s=21&t=dbffdoGcvgOluktAOa9LHA" icon={XIcon} color="bg-black" label="X (Twitter)"/>
            <SocialButton href="https://www.tiktok.com/@samco_designer?_t=ZS-90FZRdOXUiG&_r=1" icon={TikTokIcon} color="bg-pink-600" label="TikTok"/>
            <SocialButton href="https://www.instagram.com/samco_design?igsh=MXhiN2RjbG1ydHducg%3D%3D&utm_source=qr" icon={InstagramIcon} color="bg-gradient-to-tr from-yellow-400 to-purple-600" label="Instagram"/>
            <SocialButton href="https://www.youtube.com/@samco-desing" icon={YouTubeIcon} color="bg-red-600" label="YouTube"/>
          </div>

          <p className="text-xs text-gray-500 mt-2">© 2025 Samco Design. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
