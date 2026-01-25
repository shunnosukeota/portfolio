import Summary from "./Summary";

export default async function Welcome() {
  return (
    <div className="w-full justify-center">
      <div className="lines absolute -z-10 hidden">
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
        <p className="logo">
          <span className="inline-block -mb-[3vw]"><img src="/logo.svg" alt="Stendear" className="" /></span>
        </p>
        <div className="bigTypo">
          <h1 className="centered big-title back moving">
            <span>Stand Endear</span>
            <span>&nbsp;—&nbsp;</span>
            <span>Stand Endear</span>
            <span>&nbsp;—&nbsp;</span>
          </h1>
          <div className="centered clipping-container">
            <h1 className="centered big-title front moving">
            <span>Stand Endear</span>
            <span>&nbsp;—&nbsp;</span>
            <span>Stand Endear</span>
            <span>&nbsp;—&nbsp;</span>
            </h1>
          </div>
        </div>
        <Summary />
      </div>
    </div>
  );
}
