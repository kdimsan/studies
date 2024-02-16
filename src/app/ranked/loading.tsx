import React from "react";

export default function LoadingRanked() {
  return (
    <div className="mt-2 p-4 lg:mt-5">
      <h1 className="p-2 border-2 border-purple-900">Ranked Info</h1>

      <div className="flex gap-4 justify-center mt-4">
        <div className="flex flex-col justify-center gap-5 px-3 w-28 h-20 bg-zinc-400">
          <div className="w-full h-2 bg-zinc-600 z-10 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
          <div className="w-full h-2 bg-zinc-600 z-10 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
        </div>
        <div className="w-28 h-20  bg-zinc-400"></div>
      </div>
    </div>
  );
}
