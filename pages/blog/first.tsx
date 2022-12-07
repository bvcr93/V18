import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Image from "next/image";

const firstBlog = () => {
  return (
    <div className="bg-[url('')] ">
      <Image
        width={1000}
        height={1000}
        className=" bg-cover object-cover w-full h-[503px]"
        src="https://images.unsplash.com/photo-1578886141033-b9f066572135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <div className="absolute  top-[40%] left-0   px-10 w-[470px] text-white text-4xl ">
        <p>tribute to jesse schmoe</p>
        <p>cofounder of v18</p>
        <p>2019</p>
        <p className="text-sm mt-10">25 march 2021</p>
      </div>

      <div className="max-w-[720px] p-10 mx-auto">
        Written by Sophi Rutherford Jesse Schouboe, you were a son, father,
        brother, friend and husband. You were, and will always be, a pillar of
        our community. The energy you put towards friends, acquaintances, and
        strangers, will forever leave a mark on their lives, and I hope you can
        see that. You had a signature “hello”and little awkward wave I remember
        so fondly. No matter how much time had passed, you always used our name
        directly in your greetings, a trait rather rare in current times. There
        was something about your presence and voice that had a calming effect
        when you spoke. A voice so quiet and slow, never showing us you needed
        to rush a conversation. Many of your friends remember you having the
        hard talks with them, and you would always listen quietly and always
        want the full story before suggesting conclusions. You had a way with
        words when you spoke about the hard things and never failed to make us
        feel a little more at peace afterwards. These conversations will always
        be a part of the people you contributed your energy to, and I hope you
        one day know how many people’s lives have changed for the better. You
        led by example, and the energy from the kids you coached and mentored
        mirrored your actions. Kids and parents alike were so excited to see you
        each week, and the healthy encouragement you gave to the Planet Granite
        Climbing Team will go unmatched. I remember climbing with you one day,
        and you helped me get over my fear of falling while bouldering. Your
        unwavering patience was a strength we all looked up to and will never
        forget. A week later you caught about 50 lead falls in a row, eventually
        switching to your big wall harness to ease your back pain. You catered
        to climber’s strengths to work on their weaknesses and that really says
        something about you. You saw more than our flaws and weaknesses as
        something to push through, and more of something to build on, something
        a good parent would have done. There are so many stories about you
        climbing and getting into these situations that seem scary, yet somehow
        you stayed calm and everyone was able to summit safely. I have been
        reading and listening to stories about your life and I understand you
        used to be scared all the time, yet we would never know it. You were
        brave despite your fears, and built a life many people would be proud to
        have. Many people in your life look up to you, and see how brave you
        are, and how you carried yourself throughout life. Jesse, your kindness
        goes uncompared. After your passing, it was something everyone had in
        common in their stories. Your help, support and unwavering kindness is
        something we all will work to keep alive in your absence. We want you to
        know that Jennifer and the baby will never be alone. She has so many
        people in her corner, more than she will ever know. Although times will
        be tough, we will try our best not to let you down and make sure they
        both know how much they are loved. They know you loved them so much, and
        they sure will love you forever. We love you forever, Jesse. V18
      </div>
      <div className="md:flex justify-around">
        <div>
          <h1 className="ml-10">Previous story</h1>
          <Card img="https://v1.tailwindcss.com/img/card-top.jpg" text="" />
        </div>
        <div>
          <h1 className="ml-10">Next story</h1>
          <Card img="https://v1.tailwindcss.com/img/card-top.jpg" text="" />
        </div>
      </div>
    </div>
  );
};

export default firstBlog;
