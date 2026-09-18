import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#F5F7FA] min-h-screen ">
      <section className="grid grid-cols-2 h-[40vh]">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-center text-2xl font-bold">PRITHVI SETU</h1>
          <p className="text-center px-36">A centralized platform for learning, skill development, knowledge sharing, and competency building—connecting trainees and trainers for continuous professional growth.</p>
        </div>
        <div className="flex flex-col justify-center text-2xl mr-24">
          <img className="mix-blend-darken fill={true}" src="/img2.png" alt="image" />
        </div>
      </section>
    </main >
  );
}
