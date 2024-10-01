import Image from "next/image";

export default function UserInfoCard() {
  return (
    <div className="py-5 px-7 w-[30%] bg-[#7FFFBF] rounded-[10px] flex gap-3 flex-col justify-between shadow-lg">
      <div className="flex gap-1 items-center">
        <Image
          src="/images/account.png"
          alt="Profile Image"
          width={50}
          height={50}
        />
        <h3 className="font-bold text-lg">+965 34393498</h3>
      </div>
      <div>
        <h4 className="font-semibold">Joined Date:</h4>
        <p>12-03-2023</p>
      </div>
      <div>
        <h4 className="font-semibold">Numbers Of Orders:</h4>
        <p>16</p>
      </div>
    </div>
  );
}
