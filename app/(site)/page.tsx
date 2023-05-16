import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
  flex
  min-h-full
  flex-col
  justify-center
  py-12
  sm:px-6
  lg:px-8
  bg-gray-700"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="64"
          width="64"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2
          className="
          mt-6
          text-center
          text-2xl
          font-bold
          tracking-tight
          text-gray-100
        "
        >
          Logge dich in deinen Account ein.
        </h2>
      </div>
    </div>
  );
}
