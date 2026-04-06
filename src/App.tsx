import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, BookOpen, Brain, Gamepad2, BarChart3, CheckCircle2, Download } from "lucide-react";
import pptxgen from "pptxgenjs";

interface SlideProps {
  title?: string;
  children: React.ReactNode;
  index: number;
  gradient?: string;
}

const Slide = ({ title, children, gradient = "bg-slate-950" }: SlideProps) => (
  <div className={`flex flex-col h-full w-full p-8 md:p-16 ${gradient} transition-colors duration-1000`}>
    {title && (
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase tracking-tight border-l-4 border-white/50 pl-6 drop-shadow-lg"
      >
        {title}
      </motion.h2>
    )}
    <div className="flex-1 overflow-y-auto custom-scrollbar">
      {children}
    </div>
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const downloadPPTX = () => {
    const pres = new pptxgen();
    pres.layout = "LAYOUT_16x9";

    // Define ITMO colors
    const itmoBlue = "004A99";
    const white = "FFFFFF";

    // Slide 0: Title
    let slide0 = pres.addSlide();
    slide0.background = { color: itmoBlue };
    slide0.addText("XV КОНГРЕСС МОЛОДЫХ УЧЕНЫХ ИТМО", { x: 0.5, y: 1.0, w: "90%", h: 1.5, fontSize: 44, bold: true, color: white, align: "center" });
    slide0.addText("ИНТЕРАКТИВНЫЕ ИГРЫ В ОБУЧЕНИИ РУССКОМУ ЯЗЫКУ КАК ИНОСТРАННОМУ КАК ИНСТРУМЕНТ ПОВЫШЕНИЯ РУССКОЯЗЫЧНОЙ КОММУНИКАТИВНОЙ КОМПЕТЕНЦИИ ИНОСТРАННЫХ СТУДЕНТОВ", { x: 0.5, y: 2.8, w: "90%", h: 1.5, fontSize: 20, color: white, align: "center", bold: true });
    slide0.addText("Эвида Х.В.И.Х., Халил М. (Университет ИТМО)", { x: 0.5, y: 4.5, w: "90%", h: 0.5, fontSize: 18, color: white, align: "center" });
    slide0.addText("Научный руководитель – канд. пед. наук, доцент Кондрашова Н.В.", { x: 0.5, y: 5.0, w: "90%", h: 0.5, fontSize: 16, color: white, align: "center", italic: true });

    // Slide 1: Structure
    let slide1 = pres.addSlide();
    slide1.addText("СТРУКТУРА ПРЕЗЕНТАЦИИ", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    const structureItems = [
      "Введение и актуальность",
      "Проблемы традиционного обучения",
      "Когнитивное вовлечение и игры",
      "Разработка игры «Языковые детективы»",
      "Результаты        исследования",
      "Выводы"
    ];
    structureItems.forEach((item, i) => {
      slide1.addText(item, { x: 1.0, y: 1.5 + (i * 0.7), w: "80%", h: 0.5, fontSize: 20, bullet: true });
    });

    // Slide 2: Introduction
    let slide2 = pres.addSlide();
    slide2.addText("ВВЕДЕНИЕ", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    slide2.addText("В современную цифровую эпоху игры стали мощным образовательным инструментом. Традиционные методы часто воспринимаются студентами как скучные, особенно при изучении иностранного языка.", { x: 0.5, y: 1.5, w: "45%", h: 2.0, fontSize: 18 });
    slide2.addText("ЦЕЛЬ ИССЛЕДОВАНИЯ: Исследование роли интерактивных игр в обучении РКИ и разработка игры, решающей педагогические задачи по развитию коммуникативной компетенции.", { x: 0.5, y: 3.8, w: "45%", h: 1.5, fontSize: 16, bold: true, fill: { color: "F0F0F0" } });
    slide2.addImage({ path: "/1.png", x: 5.5, y: 1.5, w: 4.0, h: 3.0 });

    // Slide 3: Problems
    let slide3 = pres.addSlide();
    slide3.addText("ПРОБЛЕМЫ ТРАДИЦИОННОГО ОБУЧЕНИЯ", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    slide3.addText("Трудности запоминания", { x: 0.5, y: 1.5, w: 2.8, h: 1.0, fontSize: 18, bold: true, align: "center", fill: { color: "FFE4E1" } });
    slide3.addText("Студенты часто забывают новый материал почти сразу после занятия.", { x: 0.5, y: 2.5, w: 2.8, h: 1.5, fontSize: 14, align: "center" });
    slide3.addText("Отсутствие контекста", { x: 3.5, y: 1.5, w: 2.8, h: 1.0, fontSize: 18, bold: true, align: "center", fill: { color: "E6E6FA" } });
    slide3.addText("Механическое заучивание списков слов не дает понимания их реального применения.", { x: 3.5, y: 2.5, w: 2.8, h: 1.5, fontSize: 14, align: "center" });
    slide3.addText("Низкая вовлеченность", { x: 6.5, y: 1.5, w: 2.8, h: 1.0, fontSize: 18, bold: true, align: "center", fill: { color: "F0FFF0" } });
    slide3.addText("Чтение длинных текстов и написание заметок воспринимаются как монотонная работа.", { x: 6.5, y: 2.5, w: 2.8, h: 1.5, fontSize: 14, align: "center" });

    // Slide 4: Solution
    let slide4 = pres.addSlide();
    slide4.addText("ПОЧЕМУ ИГРЫ РАБОТАЮТ?", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    slide4.addText("Когнитивное вовлечение: Стимулируют глубокую обработку информации мозгом.", { x: 0.5, y: 1.5, w: "30%", h: 1.5, fontSize: 14, bullet: true });
    slide4.addText("Контекстуальное обучение: Слова усваиваются через сюжет и ситуацию.", { x: 3.5, y: 1.5, w: "30%", h: 1.5, fontSize: 14, bullet: true });
    slide4.addText("Эмоциональный фон: Создают благоприятную атмосферу для обучения.", { x: 6.5, y: 1.5, w: "30%", h: 1.5, fontSize: 14, bullet: true });
    slide4.addText("«В такой среде новая лексика и грамматические структуры не просто запоминаются, а органично усваиваются.»", { x: 0.5, y: 3.5, w: "45%", h: 1.5, fontSize: 18, italic: true, bold: true });
    slide4.addImage({ path: "/2.png", x: 5.5, y: 3.5, w: 4.0, h: 2.0 });

    // Slide 5: Game
    let slide5 = pres.addSlide();
    slide5.addText("ИГРА «ЯЗЫКОВЫЕ ДЕТЕКТИВЫ»", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    slide5.addText("Концепция: Интерактивный веб-квест с детективным приключенческим сюжетом. Студенты становятся детективами, исследующими виртуальные миры.", { x: 0.5, y: 1.5, w: "45%", h: 2.0, fontSize: 18 });
    slide5.addText("Сюжет: «Смерть в гостиной»\nУровень: B1 (Средний)", { x: 0.5, y: 3.8, w: "45%", h: 1.0, fontSize: 16, bold: true });
    slide5.addImage({ path: "/3.png", x: 5.5, y: 1.5, w: 4.0, h: 3.0 });

    // Slide 6: Mechanics
    let slide6 = pres.addSlide();
    slide6.addText("МЕХАНИЗМ ИГРЫ", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    slide6.addImage({ path: "/2.png", x: 0.5, y: 1.5, w: 2.0, h: 1.5 });
    slide6.addText("1. Прочитать", { x: 0.5, y: 3.1, w: 2.0, h: 0.5, fontSize: 14, bold: true, align: "center" });
    slide6.addImage({ path: "/4.png", x: 2.8, y: 1.5, w: 2.0, h: 1.5 });
    slide6.addText("2. Анализировать", { x: 2.8, y: 3.1, w: 2.0, h: 0.5, fontSize: 14, bold: true, align: "center" });
    slide6.addImage({ path: "/5.png", x: 5.1, y: 1.5, w: 2.0, h: 1.5 });
    slide6.addText("3. Составить", { x: 5.1, y: 3.1, w: 2.0, h: 0.5, fontSize: 14, bold: true, align: "center" });
    slide6.addImage({ path: "/6.png", x: 7.4, y: 1.5, w: 2.0, h: 1.5 });
    slide6.addText("4. Разгадать", { x: 7.4, y: 3.1, w: 2.0, h: 0.5, fontSize: 14, bold: true, align: "center" });

    // Slide 7: Results
    let slide7 = pres.addSlide();
    slide7.addText("РЕЗУЛЬТАТЫ        ИССЛЕДОВАНИЯ", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    slide7.addText("+40% Усвоение лексики", { x: 0.5, y: 1.5, w: 2.8, h: 1.0, fontSize: 18, bold: true, align: "center", fill: { color: "E0F7FA" } });
    slide7.addText("95% Вовлеченность", { x: 3.5, y: 1.5, w: 2.8, h: 1.0, fontSize: 18, bold: true, align: "center", fill: { color: "F3E5F5" } });
    slide7.addText("2x Скорость обучения", { x: 6.5, y: 1.5, w: 2.8, h: 1.0, fontSize: 18, bold: true, align: "center", fill: { color: "FFF9C4" } });
    slide7.addImage({ path: "/6.png", x: 0.5, y: 3.0, w: 4.5, h: 2.5 });
    slide7.addText("«Внедрение игры позволило получить более высокие результаты освоения целевых языковых явлений.»", { x: 5.5, y: 3.0, w: 4.0, h: 2.5, fontSize: 18, italic: true, bold: true });

    // Slide 8: Conclusion
    let slide8 = pres.addSlide();
    slide8.addText("ВЫВОДЫ", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 32, bold: true, color: itmoBlue });
    const conclusions = [
      "Игры — эффективный инструмент для изучения РКИ взрослыми учащимися.",
      "Сюжетное повествование обеспечивает длительное сохранение информации.",
      "Интерактивность повышает мотивацию и снижает барьеры.",
      "Игра «Языковые детективы» подтвердила свою эффективность."
    ];
    conclusions.forEach((text, i) => {
      slide8.addText(text, { x: 0.5, y: 1.5 + (i * 0.8), w: "50%", h: 0.7, fontSize: 16, bullet: true });
    });
    slide8.addImage({ path: "/5.png", x: 5.5, y: 1.5, w: 4.0, h: 3.0 });

    // Slide 9: Thanks
    let slide9 = pres.addSlide();
    slide9.background = { color: itmoBlue };
    slide9.addText("СПАСИБО ЗА ВНИМАНИЕ!", { x: 0.5, y: 2.0, w: "90%", h: 1.5, fontSize: 48, bold: true, color: white, align: "center" });
    slide9.addText("iT's MOre than a UNIVERSITY", { x: 0.5, y: 3.5, w: "90%", h: 1.0, fontSize: 24, color: white, align: "center" });
    slide9.addText("Эвида Х.В.И.Х., Халил М.\nnvkondrashova@itmo.ru", { x: 0.5, y: 5.0, w: "90%", h: 1.0, fontSize: 18, color: white, align: "center", bold: true });

    pres.writeFile({ fileName: "Presentation_ITMO_RKI.pptx" });
  };

  const slides = [
    // Slide 0: Title
    {
      type: "title",
      gradient: "itmo-gradient",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-8 left-12 text-white font-bold text-2xl tracking-widest">ITMO</div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 uppercase leading-tight drop-shadow-2xl">
              КМУ<br />
              XV КОНГРЕСС<br />
              МОЛОДЫХ УЧЕНЫХ ИТМО
            </h1>
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full inline-block mb-12 text-xl font-medium border border-white/30">
              6–10 апреля 2026
            </div>
            
            <div className="max-w-3xl mx-auto mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                ИНТЕРАКТИВНЫЕ ИГРЫ В ОБУЧЕНИИ РУССКОМУ ЯЗЫКУ КАК ИНОСТРАННОМУ КАК ИНСТРУМЕНТ ПОВЫШЕНИЯ РУССКОЯЗЫЧНОЙ КОММУНИКАТИВНОЙ КОМПЕТЕНЦИИ ИНОСТРАННЫХ СТУДЕНТОВ
              </h2>
              <p className="text-lg text-white/90 font-medium">
                Эвида Х.В.И.Х., Халил М. (Университет ИТМО)
              </p>
              <p className="text-md text-white/70 italic">
                Научный руководитель – канд. пед. наук, доцент Кондрашова Н.В.
              </p>
            </div>
          </motion.div>
          
          <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-30 pointer-events-none">
             <svg viewBox="0 0 1440 320" className="w-full h-full">
               <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>
        </div>
      )
    },
    // Slide 1: Structure
    {
      title: "СТРУКТУРА ПРЕЗЕНТАЦИИ",
      gradient: "gradient-indigo",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            { icon: <Play className="text-white" />, text: "Введение и актуальность", color: "bg-blue-500/30" },
            { icon: <BookOpen className="text-white" />, text: "Проблемы традиционного обучения", color: "bg-purple-500/30" },
            { icon: <Brain className="text-white" />, text: "Когнитивное вовлечение и игры", color: "bg-pink-500/30" },
            { icon: <Gamepad2 className="text-white" />, text: "Разработка игры «Языковые детективы»", color: "bg-green-500/30" },
            { icon: <BarChart3 className="text-white" />, text: "Результаты        исследования", color: "bg-yellow-500/30" },
            { icon: <CheckCircle2 className="text-white" />, text: "Выводы", color: "bg-cyan-500/30" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center space-x-4 p-6 ${item.color} backdrop-blur-md rounded-2xl border border-white/20 hover:scale-105 transition-transform cursor-default shadow-lg`}
            >
              <div className="p-3 bg-white/20 rounded-xl shadow-inner">{item.icon}</div>
              <span className="text-xl font-bold text-white drop-shadow-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      )
    },
    // Slide 2: Introduction
    {
      title: "ВВЕДЕНИЕ",
      gradient: "gradient-blue",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-xl leading-relaxed">
            <p className="text-white font-medium drop-shadow-sm">
              В современную цифровую эпоху игры стали мощным образовательным инструментом. 
              Традиционные методы часто воспринимаются студентами как скучные, особенно при изучении иностранного языка.
            </p>
            <div className="bg-white/20 backdrop-blur-lg border-l-8 border-white p-6 rounded-r-2xl shadow-xl">
              <h4 className="font-black text-white mb-2 tracking-wider">ЦЕЛЬ ИССЛЕДОВАНИЯ:</h4>
              <p className="text-white/90 font-medium">Исследование роли интерактивных игр в обучении РКИ и разработка игры, решающей педагогические задачи по развитию коммуникативной компетенции.</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-full group-hover:bg-white/30 transition-all"></div>
            <img 
              src="/1.png" 
              alt="Game Environment" 
              className="rounded-3xl shadow-2xl relative z-10 border-4 border-white/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-20 font-bold shadow-lg">
              Интерактивная среда
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: The Problem
    {
      title: "ПРОБЛЕМЫ ТРАДИЦИОННОГО ОБУЧЕНИЯ",
      gradient: "gradient-rose",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl flex flex-col justify-center text-center">
              <h4 className="text-white font-black text-xl mb-4">Трудности запоминания</h4>
              <p className="text-white/80">Студенты часто забывают новый материал почти сразу после занятия.</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl flex flex-col justify-center text-center">
              <h4 className="text-white font-black text-xl mb-4">Отсутствие контекста</h4>
              <p className="text-white/80">Механическое заучивание списков слов не дает понимания их реального применения.</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl flex flex-col justify-center text-center">
              <h4 className="text-white font-black text-xl mb-4">Низкая вовлеченность</h4>
              <p className="text-white/80">Чтение длинных текстов и написание заметок воспринимаются как монотонная работа.</p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: The Solution
    {
      title: "ПОЧЕМУ ИГРЫ РАБОТАЮТ?",
      gradient: "gradient-purple",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-center shadow-2xl">
              <Brain className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-lg" />
              <h4 className="font-black text-2xl mb-2">Когнитивное вовлечение</h4>
              <p className="text-white/70">Стимулируют глубокую обработку информации мозгом.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-center shadow-2xl">
              <BookOpen className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-lg" />
              <h4 className="font-black text-2xl mb-2">Контекстуальное обучение</h4>
              <p className="text-white/70">Слова усваиваются через сюжет и ситуацию.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-center shadow-2xl">
              <Gamepad2 className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-lg" />
              <h4 className="font-black text-2xl mb-2">Эмоциональный фон</h4>
              <p className="text-white/70">Создают благоприятную атмосферу для обучения.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="relative mt-4 p-8 bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center">
              <div className="absolute top-0 left-0 w-2 h-full bg-white"></div>
              <p className="text-2xl font-black text-center text-white italic drop-shadow-lg">
                «В такой среде новая лексика и грамматические структуры не просто запоминаются, а органично усваиваются.»
              </p>
            </div>
            <img 
              src="/2.png" 
              alt="Contextual Clues" 
              className="rounded-3xl shadow-2xl border-2 border-white/20 h-48 object-cover w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )
    },
    // Slide 5: The Game
    {
      title: "ИГРА «ЯЗЫКОВЫЕ ДЕТЕКТИВЫ»",
      gradient: "gradient-emerald",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white drop-shadow-md">Концепция:</h3>
            <p className="text-xl text-white/90 font-medium">
              Интерактивный веб-квест с детективным приключенческим сюжетом. Студенты становятся детективами, исследующими виртуальные миры.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-2xl border border-white/30 shadow-lg">
                <div className="bg-white rounded-full p-2"><CheckCircle2 className="w-6 h-6 text-emerald-600" /></div>
                <span className="font-bold text-lg">Сюжет: «Смерть в гостиной»</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-2xl border border-white/30 shadow-lg">
                <div className="bg-white rounded-full p-2"><CheckCircle2 className="w-6 h-6 text-emerald-600" /></div>
                <span className="font-bold text-lg">Уровень: B1 (Средний)</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img 
              src="/3.png" 
              alt="Game Start Screen" 
              className="rounded-3xl shadow-2xl border-4 border-white/30 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent rounded-3xl"></div>
          </div>
        </div>
      )
    },
    // Slide 6: Mechanics
    {
      title: "МЕХАНИЗМ ИГРЫ",
      gradient: "gradient-amber",
      content: (
        <div className="space-y-8">
          <h3 className="text-3xl font-black text-center mb-8 text-white drop-shadow-lg">Что должен сделать игрок?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Прочитать", desc: "Изучение улик и новых слов в контексте.", img: "/2.png" },
              { step: "2", title: "Анализировать", desc: "Работа со словарем и блокнотом детектива.", img: "/4.png" },
              { step: "3", title: "Составить", desc: "Восстановление хронологии событий.", img: "/5.png" },
              { step: "4", title: "Разгадать", desc: "Проверка гипотезы и вынесение обвинения.", img: "/6.png" },
            ].map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl h-full flex flex-col"
              >
                <img 
                  src={m.img} 
                  alt={m.title} 
                  className="w-full h-32 object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 relative flex-1">
                  <span className="absolute -top-10 right-4 w-12 h-12 bg-white text-amber-600 rounded-full flex items-center justify-center font-black text-2xl shadow-xl">
                    {m.step}
                  </span>
                  <h4 className="text-2xl font-black mb-2 text-white">{m.title}</h4>
                  <p className="text-white/80 font-medium text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 7: Results
    {
      title: "РЕЗУЛЬТАТЫ        ИССЛЕДОВАНИЯ",
      gradient: "gradient-indigo",
      content: (
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="text-center p-10 bg-white/20 backdrop-blur-2xl rounded-[40px] border border-white/30 w-full md:w-72 shadow-2xl"
            >
              <div className="text-7xl font-black text-white mb-2 drop-shadow-lg">+40%</div>
              <div className="text-sm text-white/80 font-black uppercase tracking-widest">Усвоение лексики</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.4 }}
              className="text-center p-10 bg-white/20 backdrop-blur-2xl rounded-[40px] border border-white/30 w-full md:w-72 shadow-2xl"
            >
              <div className="text-7xl font-black text-white mb-2 drop-shadow-lg">95%</div>
              <div className="text-sm text-white/80 font-black uppercase tracking-widest">Вовлеченность</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.6 }}
              className="text-center p-10 bg-white/20 backdrop-blur-2xl rounded-[40px] border border-white/30 w-full md:w-72 shadow-2xl"
            >
              <div className="text-7xl font-black text-white mb-2 drop-shadow-lg">2x</div>
              <div className="text-sm text-white/80 font-black uppercase tracking-widest">Скорость обучения</div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img 
                src="/6.png" 
                alt="Puzzle Result" 
                className="rounded-3xl shadow-2xl border-4 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                Результат: 5 / 5
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 flex items-center justify-center">
              <p className="text-2xl font-black text-center text-white italic drop-shadow-lg">
                «Внедрение игры позволило получить более высокие результаты освоения целевых языковых явлений.»
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Conclusion
    {
      title: "ВЫВОДЫ",
      gradient: "gradient-emerald",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-xl">
            {[
              "Игры — эффективный инструмент для изучения РКИ взрослыми учащимися.",
              "Сюжетное повествование обеспечивает длительное сохранение информации.",
              "Интерактивность повышает мотивацию и снижает барьеры.",
              "Игра «Языковые детективы» подтвердила свою эффективность."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center space-x-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl"
              >
                <CheckCircle2 className="text-white w-10 h-10 flex-shrink-0 drop-shadow-md" />
                <p className="font-bold text-white">{text}</p>
              </motion.div>
            ))}
          </div>
          <div className="relative">
            <img 
              src="/5.png" 
              alt="Game Clues" 
              className="rounded-3xl shadow-2xl border-4 border-white/30 h-[500px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white font-bold text-center bg-black/40 backdrop-blur-md p-4 rounded-xl">
              Богатый контекстуальный материал
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: Thank you
    {
      type: "thanks",
      gradient: "itmo-gradient",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter drop-shadow-2xl">
              СПАСИБО ЗА ВНИМАНИЕ!
            </h1>
            <div className="text-3xl md:text-5xl font-light text-white/90 mb-12 drop-shadow-lg">
              iT's <span className="font-black italic">MO</span>re than a <br />
              <span className="font-black tracking-widest text-6xl md:text-8xl">UNIVERSITY</span>
            </div>
            
            <div className="mt-12 space-y-4 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 inline-block">
              <p className="text-2xl font-black text-white">Эвида Х.В.И.Х., Халил М.</p>
              <p className="text-white/80 text-xl">nvkondrashova@itmo.ru</p>
            </div>
          </motion.div>
          
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <svg viewBox="0 0 1440 320" className="w-full h-full rotate-180">
               <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="h-screen w-screen bg-slate-950 flex flex-col overflow-hidden font-sans selection:bg-white/30">
      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-900 z-50">
        <motion.div 
          className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {slides[currentSlide].type === "title" || slides[currentSlide].type === "thanks" ? (
              <div className={`h-full w-full p-4 md:p-8 ${slides[currentSlide].gradient}`}>
                {slides[currentSlide].content}
              </div>
            ) : (
              <Slide index={currentSlide} title={slides[currentSlide].title} gradient={slides[currentSlide].gradient}>
                {slides[currentSlide].content}
              </Slide>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls */}
      <footer className="h-24 px-8 flex items-center justify-between bg-black/40 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex items-center space-x-6">
          <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white font-black text-lg shadow-xl">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
          <div className="hidden md:block h-8 w-px bg-white/20" />
          <div className="hidden md:block text-white/60 text-sm uppercase tracking-[0.3em] font-black drop-shadow-md">
            XV КОНГРЕСС МОЛОДЫХ УЧЕНЫХ ИТМО
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={downloadPPTX}
            className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white text-slate-900 font-black hover:bg-white/90 transition-all active:scale-95 shadow-2xl"
            title="Скачать PowerPoint"
          >
            <Download className="w-6 h-6" />
            <span className="hidden lg:inline">PPTX</span>
          </button>
          <div className="h-8 w-px bg-white/20 mx-2" />
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 border border-white/10 shadow-2xl"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 border border-white/10 shadow-2xl"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </footer>

      {/* Global Styles for Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid transparent;
          background-clip: padding-box;
        }
      `}</style>
    </div>
  );
}
