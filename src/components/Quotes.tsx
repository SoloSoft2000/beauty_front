import { RxUpdate } from "react-icons/rx";
import "@fontsource-variable/caveat";
import "@fontsource/montserrat-alternates";
import { useState } from "react";

const quoteList = [
  {name: 'Coco Chanel', text: 'Красота - это луч света в серой повседневности.'},
  {name: 'Pat McGrath', text: 'Искусство макияжа - это способ подчеркнуть вашу уникальность.'},
  {name: 'Tadashi Shoji', text: 'Создавая красоту, мы создаем гармонию, которая лечит душу.'},
  {name: 'Charlotte Tilbury', text: 'Модные тренды могут изменяться, но стиль — это то, что остается.'},
  {name: 'Estée Laude', text: 'Идеальный образ - это отражение вашей внутренней уверенности.'},
  {name: 'Lisa Eldridge', text: 'Макияж - это искусство преображения, которое помогает нам раскрыть свой внутренний мир.'}
];

const randomQuote = (prevQuote: {name: string, text: string} | null) => {
  let newQuote;
  do {
    const rndNumber = Math.floor(Math.random() * quoteList.length);
    newQuote = quoteList[rndNumber];
  } while (newQuote === prevQuote)
  return newQuote;
}

export const Quotes = () => {
  const [quote, setQuote] = useState(randomQuote(null))
  const handleQuoteUpdate = () => {
    setQuote(randomQuote(quote));
  }

  return (
  <div
    className="m-5 p-5 border-4 border-gray-300 rounded-md border-double
               2xl:text-2xl xl:text-xl lg:text-lg font-montserrat italic text-[#800000] relative"
  >
    <div className="absolute -top-3 left-5 text-base px-3 bg-white">
      Цитаты известных людей
    </div>
    "{quote.text}" -
    <span className="not-italic"> {quote.name}</span>
    <div className="absolute right-2 top-1/3 cursor-pointer">
      <RxUpdate onClick={handleQuoteUpdate}/>
    </div>
  </div>);
};
