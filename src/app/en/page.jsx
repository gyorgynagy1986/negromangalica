"use client";

import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import Divider from "@/components/UI/Divider/Divider";
import { links } from '../../app/links'

export default function Home() {
  return (
    <>
      <Hero lang={true} reservation={links.reservation} />
      <main>
        <Divider marginPrefix={true} />
        <SectionStory lang={true} />
        <Divider />
        <Services lang={true} />
        <Event lang={true} />
        <Divider />
        <JoinUs lang={true} />
        <Divider />
        <Contact lang={true} reservation={links.reservation} />
      </main>
    </>
  );
}
