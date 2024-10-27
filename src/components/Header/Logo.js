import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/logo.png";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden  mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="Dnyx logo"
          className="w-full h-auto rounded-full"
          sizes="40vw"
          priority
        />
      </div>
      <span className="font-jockey font-bold dark:font-semibold text-3xl">
      Tamil Lingo Quest
      </span>
    </Link>
  );
};

export default Logo;
