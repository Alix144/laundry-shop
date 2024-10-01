import Card from "@/components/Card";
import Image from "next/image";
import C2ABtn from "@/components/C2ABtn";

export default function Home() {
  const description1 =
    "We provide specialized care for delicate fabrics like suits, dresses, and wool garments, making sure they are clean and preserved.";
  const description2 =
    "No more wrinkles! Choose our ironing service for clothes that look crisp and fresh.";
  const description3 =
    "Drop off your laundry, and we’ll take care of the rest! Wash, dry, and fold services for your everyday clothing.";

  return (
    <main className="w-screen relative">
      {/* hero */}
      <section className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center relative">
        <div className="h-[100%] content">
          <div className="pt-48 w-[50%] flex flex-col items-center gap-9">
            <h1 className="text-center">
              Drop Off, Relax, and Track Your Laundry!
            </h1>
            <p className="text-center text-pText">
              Convenient laundry services at your fingertips. Drop off your
              clothes, and check the status online anytime using your mobile
              number.
            </p>
            <C2ABtn/>
          </div>
        </div>
        <div className="w-96 cursor-pointer absolute bottom-0 right-52">
          <Image
            src="/images/laundry.png"
            alt="Laundry Basket"
            width={500}
            height={300}
            priority
          />
        </div>
      </section>
      {/* services */}
      <section id="services">
        <div className="py-20 content">
          {/* section title */}
          <div className="mb-10 flex gap-5 items-center justify-center">
            <Image
              src="/images/hat.png"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
            <h2>Services</h2>
          </div>

          <div className="flex justify-evenly items-center">
            <Card
              imgPath={"/images/dry-cleaning.jpg"}
              title={"Dry Cleaning"}
              description={description1}
              alt={"Dry Cleaning"}
            />
            <Card
              imgPath={"/images/washNfold.jpg"}
              title={"Wash & Fold"}
              description={description2}
              alt={"Clean Folded Clothes"}
            />
            <Card
              imgPath={"/images/iron.jpg"}
              title={"Ironing/Pressing"}
              description={description3}
              alt={"Iron on Table"}
            />
          </div>
        </div>
      </section>

      {/* about */}
      <section
        className="h-screen bg-[url('/images/bg2.png')] bg-cover bg-center"
        id="about"
      >
        <div className="py-20 content">
          {/* section title */}
          <div className="mb-10 flex gap-5 items-center justify-center">
            <Image
              src="/images/hat.png"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
            <h2>About Us</h2>
          </div>

          <div className="mx-auto w-[70%] p-5 text-center bg-[#ffffffbf] rounded-[10px] text-[#00000099] border border-darkGreen">
            <p>
              At Breaking bad laundry, we pride ourselves on offering
              hassle-free laundry solutions. Our clients simply drop off their
              clothes, and we take care of everything, from washing to ironing.
              Want to check the status of your laundry? Just enter your mobile
              number, and you can track your clothes in real-time using our
              online system. Our priority is delivering high-quality laundry
              care with total convenience. Whether it’s everyday laundry or dry
              cleaning for special garments, we ensure your clothes get the care
              they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="h-screen" id="contact">
        <div className="pb-20 content">
          {/* section title */}
          <div className="mb-10 flex gap-5 items-center justify-center">
            <Image
              src="/images/hat.png"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
            <h2>Contact Us</h2>
          </div>

          <div className="mx-auto w-[70%] p-5 rounded-[10px] bg-lightGreen flex gap-5 justify-center items-center">
            <div className="flex flex-col gap-5 text-[#00000099] text-center">
              <p>
                <span className="text-black">
                  Phone: <br />
                </span>{" "}
                +123-456-7890
              </p>
              <p>
                <span className="text-black">
                  Email: <br />
                </span>{" "}
                support@laundryshop.com
              </p>
              <p>
                <span className="text-black">
                  Address: <br />
                </span>{" "}
                123 Clean Street, Laundry City, LC 54321
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18582.216713192596!2d-156.48510010502784!3d20.88323226075751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2skw!4v1727614139843!5m2!1sen!2skw"
              width="400"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="pb-5 flex justify-center items-center gap-2">
        <p>© 2024 Breaking Bad Laundry. All rights reserved. Developed by</p>

        <div className="cursor-pointer">
          <Image
            src="/images/logoAli.png"
            alt="Ali-Logo"
            width={50}
            height={50}
            priority
          />
        </div>
      </footer>
    </main>
  );
}
