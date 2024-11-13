import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { quote: 'Это лучший продукт, который я использовал!', author: 'Георгий Сергеевич' },
    {
      quote: 'Идеальный сервис, с которым приятно работать каждый день.',
      author: 'Ольга Ивановна',
    },
    { quote: 'Настоятельно рекомендую всем друзьям и коллегам!', author: 'Андрей Викторович' },
    { quote: 'Превосходный результат, превзошел все мои ожидания.', author: 'Светлана Петровна' },
    { quote: 'Удивительно продуманный и простой в использовании.', author: 'Виктор Сергеевич' },
    { quote: 'Эффективный инструмент, экономит уйму времени.', author: 'Наталья Михайловна' },
    {
      quote: 'Настоящее удовольствие пользоваться этим продуктом!',
      author: 'Алексей Владимирович',
    },
    { quote: 'Заметное улучшение продуктивности и удобства.', author: 'Екатерина Алексеевна' },
    { quote: 'Просто незаменимая вещь в нашей команде.', author: 'Михаил Николаевич' },
    { quote: 'Сервис, который всегда радует своей надежностью!', author: 'Ирина Владимировна' },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials__quote">{testimonials[currentIndex].quote}</div>
      <div className="testimonials__autor"> - {testimonials[currentIndex].author}</div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
