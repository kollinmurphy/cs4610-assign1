import { useEffect, useRef, useState } from "react";
import { fetchRandomQuote, QuoteModel, searchQuote } from "./data/quotesApi";
import { LoadingSpinner } from "./LoadingSpinner";
import Quote from "./Quote";
import Search from "./Search";
import { Show } from "./Show";

function App() {
  const [randomQuote, setRandomQuote] = useState<QuoteModel | null>(null);
  const [searchResult, setSearchResult] = useState<QuoteModel[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [searchString, setSearchString] = useState("");
  const [status, setStatus] = useState<null | "loading" | "error">("loading");

  useEffect(() => {
    fetchRandomQuote().then((q) => {
      setRandomQuote(q);
      setStatus(null);
    });
  }, []);

  useEffect(() => {
    if (searchString === "") return setSearchResult([]);
    setStatus("loading");
    searchQuote(searchString)
      .then((qs) => {
        setSearchResult(qs);
        setStatus(null);
      })
      .catch(() => setStatus("error"));
  }, [searchString]);

  return (
    <div
      className={`p-4 flex flex-col gap-4 min-h-screen items-center ${
        searchString === "" ? "justify-center" : ""
      }`}
    >
      <h1 className="text-4xl text-center my-2 font-serif">Quote Search</h1>
      <Search onSearch={setSearchString} />
      <Show
        when={status !== "loading"}
        fallback={
          <div className="w-full py-12 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <Show when={status !== "error"} fallback={<div>Error</div>}>
          <Show
            when={searchString !== ""}
            fallback={
              <Show when={randomQuote !== null}>
                <Quote quote={randomQuote!} />
              </Show>
            }
          >
            <Show
              when={searchResult.length > 0}
              fallback={<div>No results</div>}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResult.map((quote) => (
                  <Quote key={quote._id} quote={quote} />
                ))}
              </div>
            </Show>
          </Show>
        </Show>
      </Show>
    </div>
  );
}

export default App;
