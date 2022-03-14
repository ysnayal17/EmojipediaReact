import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function makeEntry(newEmoji) {
  return (
    <Entry
      key={newEmoji.id}
      id={newEmoji.id}
      emoji={newEmoji.emoji}
      name={newEmoji.name}
      meaning={newEmoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(makeEntry)}</dl>
    </div>
  );
}

export default App;
