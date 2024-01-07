"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Counter() {
  const router = useRouter();
  


  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <button type="button" onClick={() => router.back()}>
        a{}
      </button>
    </div>
  );
}
