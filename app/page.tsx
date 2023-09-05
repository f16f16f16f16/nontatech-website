import Arrow from "@/component/arrow/index";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-6 text-center text-indigo-700">
          Nontaphat Pongpis
        </h1>
        <p className="text-3xl text-gray-600">Software Engineer</p>
        {/* <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span> */}
        <Arrow />
      </div>
    </div>
  );
}
