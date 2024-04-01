import QuestionMark from '../../public/QuestionMark';

const Questions = () => {
  return (
    <div className="question fixed bottom-[100px] sm:bottom-10 right-5 w-[63px] h-[63px] bg-primary flex items-center justify-center p-5 border border-white hover:border-secondary duration-0.3 rounded-full z-[100] cursor-pointer">
      <QuestionMark wth="100%" hth="100%" fill="white" />
    </div>
  );
};

export default Questions;
