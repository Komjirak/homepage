import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const IntroSection = ({ onScrollDown }: { onScrollDown: () => void }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onScrollDown();
    }, 4200);
    return () => clearTimeout(timer);
  }, [onScrollDown]);

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)' }} />

      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        <motion.img
          src="/images/logo.png"
          alt="Komjirak Studio"
          className="w-28 h-28 rounded-3xl shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.4 }} />

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <span className="gradient-text">{t.intro.title1}</span>
            <span className="text-foreground">{t.intro.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto text-center whitespace-pre-line">
            {t.intro.subtitle}
          </p>
        </motion.div>

        <motion.div className="w-full max-w-xl surface-glass rounded-xl p-5 font-mono text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}>
          {t.code.map((line, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 py-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.3, duration: 0.4 }}>
              <span className="text-muted-foreground text-xs w-5 text-right select-none">{i + 1}</span>
              <span className={line.startsWith("//") ? "text-muted-foreground" : "text-foreground"}>
                {line.includes("'") ? (
                  <>
                    {line.split("'").map((part, j) =>
                      j % 2 === 1 ? <span key={j} className="text-primary">'{part}'</span> : <span key={j}>{part}</span>
                    )}
                  </>
                ) : line}
              </span>
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-primary ml-8 mt-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }} />
        </motion.div>

        <motion.button
          onClick={onScrollDown}
          className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
};
