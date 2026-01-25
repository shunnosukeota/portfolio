export default function Loading() {
  return (
    <div
      className={`w-full h-full absolute animate-fade-out-bck animation-delay-1300 z-30 flex items-center`}
    >
      <h1 className={`mx-auto animate-fade-in`}>
        <span
          className={`mx-auto animate-tracking-out-expand-fwd animation-delay-1300 max-md:text-2xl md:text-4xl`}
        >
          Standear
        </span>
      </h1>
    </div>
  );
}
