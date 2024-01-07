import SummaryOta from "./SummaryOta";

export default function Welcome() {
  return (
    <div className="h-60 w-full justify-center">
      <div className="lines absolute -z-10">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line hidden md:block"></div>
        <div className="line hidden md:block"></div>
        <div className="line hidden md:block"></div>
        <div className="line hidden lg:block"></div>
        <div className="line hidden lg:block"></div>
        <div className="line hidden lg:block"></div>
      </div>
      <div className="text-center">
        <p className="logo wave text-[2.7rem] md:text-[4.5rem] lg:text-[6rem]">
          <span>S</span>
          <span>H</span>
          <span>U</span>
          <span>N</span>
          <span>N</span>
          <span>O</span>
          <span>S</span>
          <span>U</span>
          <span>K</span>
          <span>E</span>
          <span className="ml-2 md:ml-4 lg:ml-6">O</span>
          <span>T</span>
          <span>A</span>
        </p>
        <SummaryOta />
      </div>
    </div>
  );
}
