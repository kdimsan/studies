import React from "react";

export default function Ranked() {
  return (
    <div className="mt-2 p-4">
      <h1 className="p-2 border-2 border-purple-900">Ranked Info</h1>
      <div className="flex gap-4 justify-center mt-4">
        <div className=" p-2 border-2 border-purple-900">
          <h2 className="border-b border-purple-900">Ranked solo</h2>
          <h4 className="mt-2">Wins: 14/10</h4>
        </div>
        <div className=" p-2 border-2 border-purple-900">
          <h2 className="border-b border-purple-900">Ranked flex</h2>
          <div>
            <h4 className="mt-2">Wins: 20/4</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
