"use client";
import Navbar from "@/components/Navbar";
import Writing from "@/components/writing";
import { Key } from "react";

const writings: any = [
  {
    title: "A Feast on Life",
    description:
"What would it be when  both of us are gone? Forever, never to be found again,never to be seen anywhere, our names erased from this world, we disappear completely. Would you still look at me like I am the only thing that matters to you? Would you still hold my face and wipe those tears as I will look to you and love you with all my heart without disappearing, without being torn apart by these vultures skinned as humans. Would you still embrace me as such to melt me away with all our sorrows.",
    ReadMore: "https://docs.google.com/document/d/1v64LXfd4UjCis7unArQ0b-s5oezpRxsxC6nvY3ay_yU/edit?usp=sharing",
    picture: ("/Picture/pf.jpeg"),
  },
  {
    title: "Children of God",
    description:
"Wreathing maggots infesting my veins, blood protruding from the empty eye sockets, hearing my own pleas with these rotten ears, wailing in agony from skinned mouth, Rain caressing the degrading bones of my face, numbing down the rotten smell of thy soul. Such a grave situation , such as your grave. You standing there, I know you can see me. Where did you steal the courage from? you wretch, venturing to brave the dangers inside you .hehe so how is this  grave? You demon, I'm dead, and I am aware just as you. During the great peril ,You buried me yourself, by your own wicked  hands. And after so long you have visited me finally. You look sane now, wretch ,So why not gift me a proper burial this time or do I look cute to you ? ",
    ReadMore: "https://docs.google.com/document/d/1zTfDgiUot0uGpImmWTYF4eQV_6NlrS_E0vuyVK-87no/edit?usp=sharing",
    picture: ("/Picture/pf.jpeg"),
  },

];

const Writings = () => {
  return (
    <div>
      <Navbar color="orange" />
      <div className="mt-11">
        <h1 className="custom-font text-9xl text-orange-600 text-center m-10">
          Writings / Lekh 
        </h1>
      </div>
      <div className="justify-center flex flex-wrap gap-10 m-10">
        {writings.map((writing: { title: string; description: string; ReadMore: string; picture: string; }, index: Key) => (
          <Writing
            key={index as Key}
            title={writing.title}
            description={writing.description}
            ReadMore={writing.ReadMore}
            picture={writing.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Writings;
