import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { MousePointer2, Sparkles, ChevronRight, Play } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full animate-pulse decoration-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-raised-sm mb-8 animate-in fade-in slide-in-from-bottom duration-500">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs font-bold text-gray-600 dark:text-gray-300 tracking-wider uppercase">
            Introducing TactileFlow v1.0
          </span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 dark:text-white mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Design the <span className="text-purple-600">Unforgettable</span>
        </h1>

        {/* Subcopy */}
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          The world's first AI-powered Neumorphic engine. Craft high-fidelity
          spatial interfaces that feel as good as they look.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-10 rounded-2xl group shadow-2xl"
          >
            Start Crafting
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="raised"
            size="lg"
            className="w-full sm:w-auto px-10 rounded-2xl flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <Play className="w-3 h-3 text-white fill-current ml-0.5" />
            </div>
            Watch Demo
          </Button>
        </div>

        {/* Floating Components Preview */}
        <div className="mt-24 relative max-w-5xl mx-auto">
          <div className="neu-raised p-4 md:p-8 rounded-[40px] shadow-2xl animate-in zoom-in duration-1000 delay-500 border border-white/20">
            <div className="bg-neu-bg-primary rounded-[30px] overflow-hidden min-h-[500px] flex items-center justify-center relative border border-white/40 dark:border-black/20 shadow-inner">
              <img
                src="https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png"
                alt="TactileFlow Spatial Preview"
                className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 opacity-90"
              />

              {/* Overlay UI elements to make it feel interactive */}
              <div className="absolute top-10 right-10 neu-raised p-4 rounded-2xl hidden md:block backdrop-blur-sm bg-white/10">
                <Badge variant="primary">v1.0 ENGINE LIVE</Badge>
              </div>

              <div className="absolute bottom-10 left-10 p-8 rounded-3xl hidden md:flex items-center gap-6 backdrop-blur-xl bg-white/5 border border-white/10 neu-raised text-left">
                <div className="w-12 h-12 rounded-full neu-raised flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-purple-500 mb-1">
                    Performance
                  </div>
                  <div className="text-xl font-bold text-gray-800 dark:text-gray-100 italic">
                    "Fluidity redefined."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
