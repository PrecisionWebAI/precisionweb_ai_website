"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center ">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold text-[#16C7E2] bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
    {
      id: 0,
      name: "Alice Johnson",
      designation: "Project Manager",
      content: (
        <p className="mb-4">
          The team at Precision Web AI provided exceptional support during our
          recent project. <Highlight>Their quick response time</Highlight> and
          deep technical expertise ensured that all our issues were resolved
          efficiently. Highly recommend their services!
        </p>
      ),
    },
    {
      id: 1,
      name: "Bob Smith",
      designation: "CTO",
      content: (
        <p className="mb-4">
          Precision Web AI has been a game-changer for our IT department.
          <Highlight>Their 24/7 support</Highlight> and comprehensive knowledge
          base have helped us maintain seamless operations and minimize downtime.
          <Highlight>Outstanding service!</Highlight>
        </p>
      ),
    },
    {
      id: 2,
      name: "Catherine Lee",
      designation: "Software Engineer",
      content: (
        <p>
          Working with Precision Web AI has been a fantastic experience. Their
          team is not only knowledgeable but also incredibly supportive.
          <Highlight>They went above and beyond</Highlight> to help us with a
          critical issue, and their dedication truly stands out. 
        </p>
      ),
    },
  ];
  
