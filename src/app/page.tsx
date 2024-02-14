"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl">Main Page</h1>
        <Link href={"/ranked"}>Ranked</Link>
        <Link href={"/freeWeek"}>Free Week</Link>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("name")} type="text" />
          <button type="submit">Submit</button>in
        </form>
      </div>
    </div>
  );
}
