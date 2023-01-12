import { QuoteModel } from "./data/quotesApi";
import quote from "./assets/quote.svg";

export default function Quote(props: { quote: QuoteModel }) {
  return (
    <div className="w-full relative bg-white shadow-lg rounded-lg flex flex-col gap-3 px-6 py-8">
      <div className="absolute top-3 left-3 text-slate-200 text-8xl">
        <img src={quote} alt='"' className="w-12" />
      </div>
      <div className="text-md z-0">{props.quote.content}</div>
      <div className="text-right font-bold text-xl">{props.quote.author}</div>
    </div>
  );
}
