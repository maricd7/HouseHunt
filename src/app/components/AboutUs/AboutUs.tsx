import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-blue-100 py-16 px-32 w-full flex gap-32">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-semibold">About Us</h2>
        <p>
          At HouseHunt, we understand that finding the perfect place to call
          home is more than just a transaction; it's about fulfilling dreams,
          creating memories, and building futures. With our cutting-edge real
          estate app, we strive to make the journey to your dream home as
          seamless and enjoyable as possible.
        </p>
        <p>
          What sets HouseHunt apart is our commitment to innovation,
          convenience, and personalized service. Our intuitive app features
          state-of-the-art search functionalities, allowing you to easily filter
          through thousands of listings based on criteria that matter most to
          you - from price range and location to amenities and architectural
          style.
        </p>
        <h2 className="text-2xl font-semibold ">With HouseHunt</h2>
        <p>
          Your search for the perfect home is not just efficient, it's
          enjoyable. We believe that every house-hunting experience should be
          filled with excitement, anticipation, and endless possibilities. Let
          HouseHunt be your trusted companion as you embark on this exhilarating
          adventure of finding your ideal home.
        </p>
        <p>
          But HouseHunt is more than just a platform for property listings.
          We're dedicated to providing you with valuable insights, expert
          guidance, and unparalleled support throughout your home-buying
          journey. Whether you're a first-time buyer or a seasoned investor, our
          team of experienced real estate professionals is here to help you
          navigate the complexities of the market and make informed decisions.
        </p>
      </div>
      <div className="w-full">
        <Image
          className="rounded-lg"
          width={800}
          height={800}
          alt="about"
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
