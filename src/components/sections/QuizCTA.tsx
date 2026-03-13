import React from 'react';

interface QuizCard {
  text: string;
  rotation: number;
}

const quizCards: QuizCard[] = [
  { text: "What's your go-to style?", rotation: -6 },
  { text: "Where will you wear these most?", rotation: 2 },
  { text: "What feel do you prefer?", rotation: 8 },
];

const QuizCTA: React.FC = () => {
  return (
    <section id="quiz" className="bg-gloss-dark py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gloss-rose font-medium uppercase font-body mb-4">
              PERSONALIZED FOR YOU
            </p>
            <h2 className="font-display text-[48px] sm:text-[64px] leading-none text-white">
              NOT SURE WHERE TO START?
            </h2>
            <p className="text-white/70 font-body text-[16px] mt-6 max-w-lg leading-relaxed">
              Answer 4 quick questions. We'll match you to your perfect tights, pantyhose, or thigh-highs in under 60 seconds.
            </p>
            <a 
              href="#"
              className="inline-block bg-gloss-rose text-white px-10 py-5 mt-8 text-[13px] font-body font-semibold tracking-[0.15em] uppercase hover:bg-gloss-rose-dark transition-colors"
            >
              TAKE THE STYLE QUIZ →
            </a>
            <p className="text-white/40 text-[12px] font-body mt-4">
              Taken by 52,000+ shoppers
            </p>
          </div>

          {/* Right - Quiz Cards Visual */}
          <div className="relative h-[300px] hidden lg:block">
            {quizCards.map((card, index) => (
              <div
                key={index}
                className="absolute bg-white rounded-2xl p-6 shadow-xl w-64"
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                  top: `${index * 40}px`,
                  left: `${index * 30}px`,
                  zIndex: quizCards.length - index,
                }}
              >
                <div className="w-8 h-8 bg-gloss-rose/10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-display text-gloss-rose text-[16px]">{index + 1}</span>
                </div>
                <p className="font-body text-[15px] text-gloss-black font-medium">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gloss-rose/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gloss-rose/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default QuizCTA;
