import { cn } from "../../lib/utils";
import Marquee from "../../Components/magic_ui/MarqueProps";

const reviews = [
  {
    "name": "Aarav Patel",
    "username": "@aarav_patel",
    "body": "The team at Precision Web AI took our concept and turned it into a stunning reality. Their expertise in mobile app development and UI/UX design is unmatched. Highly recommended!",
    "img": "https://avatar.vercel.sh/aarav_patel"
  },
  {
    "name": "Saanvi Sharma",
    "username": "@saanvi_sharma",
    "body": "I am thoroughly impressed with Precision Web AI's work. Their data science solutions and blockchain expertise have truly transformed our business operations.",
    "img": "https://avatar.vercel.sh/saanvi_sharma"
  },
  {
    "name": "Rohan Gupta",
    "username": "@rohan_gupta",
    "body": "Precision Web AI's IT consulting and cloud services have been a game-changer for us. Their professionalism and attention to detail are second to none.",
    "img": "https://avatar.vercel.sh/rohan_gupta"
  },
  {
    "name": "Isha Desai",
    "username": "@isha_desai",
    "body": "Working with Precision Web AI was a fantastic experience. Their team delivered exceptional results in product design and DevOps. Our project was in safe hands.",
    "img": "https://avatar.vercel.sh/isha_desai"
  },
  {
    "name": "Arjun Reddy",
    "username": "@arjun_reddy",
    "body": "Precision Web AI's AI and digital transformation services are top-notch. They brought innovation and efficiency to our business. I couldn’t be happier with the results.",
    "img": "https://avatar.vercel.sh/arjun_reddy"
  },
  {
    "name": "Emily Johnson",
    "username": "@emily_johnson",
    "body": "Precision Web AI provided exceptional support with their cloud services and UI/UX design. Their attention to detail and creative solutions exceeded our expectations.",
    "img": "https://avatar.vercel.sh/emily_johnson"
  },
  {
    "name": "Michael Smith",
    "username": "@michael_smith",
    "body": "The expertise and professionalism of Precision Web AI in mobile app development and AI are remarkable. They delivered results that surpassed our goals. Highly recommend!",
    "img": "https://avatar.vercel.sh/michael_smith"
  },
  {
    "name": "Olivia Davis",
    "username": "@olivia_davis",
    "body": "Precision Web AI's blockchain solutions were exactly what we needed. Their team's dedication and knowledge made a significant difference for our project.",
    "img": "https://avatar.vercel.sh/olivia_davis"
  },
  {
    "name": "Rajesh Kumar",
    "username": "@rajesh_kumar",
    "body": "Precision Web AI's data science services helped us gain valuable insights and improve our decision-making processes. Their work has been instrumental to our success.",
    "img": "https://avatar.vercel.sh/rajesh_kumar"
  },
  {
    "name": "Nisha Verma",
    "username": "@nisha_verma",
    "body": "We are extremely satisfied with the IT consulting and DevOps services provided by Precision Web AI. They delivered top-notch solutions that enhanced our operations.",
    "img": "https://avatar.vercel.sh/nisha_verma"
  },
  {
    "name": "Liam Brown",
    "username": "@liam_brown",
    "body": "Precision Web AI's product design services were outstanding. They took our ideas and crafted an innovative and user-friendly solution that stands out.",
    "img": "https://avatar.vercel.sh/liam_brown"
  },
  {
    "name": "Sophia Martinez",
    "username": "@sophia_martinez",
    "body": "The team at Precision Web AI is incredibly talented. Their expertise in digital transformation and AI brought significant improvements to our business strategy.",
    "img": "https://avatar.vercel.sh/sophia_martinez"
  },
  {
    "name": "Vikram Singh",
    "username": "@vikram_singh",
    "body": "Precision Web AI’s services in mobile app development and UI/UX design are exceptional. Their innovative approach and attention to detail were impressive.",
    "img": "https://avatar.vercel.sh/vikram_singh"
  }
]



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Feedback() {
  return (
    <>
    <div className="text-4xl font-semibold flex justify-center mt-20 mb-20">
        Feedback
    </div>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s] mb-10">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
    </>
  );
}
