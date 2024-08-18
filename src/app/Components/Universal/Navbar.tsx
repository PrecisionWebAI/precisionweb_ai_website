"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { Launch, LinkOutlined } from "@mui/icons-material";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

const titles = [
  { title: "Artificial-Intelligence", link: "hash1" },
  { title: "Mobile-App-Development", link: "hash2" },
  { title: "Software-Development", link: "hash3" },
  { title: "Digital-Transformation", link: "hash4" },
  { title: "Data-Science-Serivce", link: "hash5" },
  { title: "Cloud-Service", link: "hash6" },
  { title: "Blockchain-Development", link: "hash7" },
  { title: "Ideation-and-Design", link: "hash8" },
  { title: "IT-Consulting", link: "hash9" },
  { title: "DevOps", link: "hash10" },
  { title: "IoT-App-Development", link: "hash11" },
  { title: "Cloud-Managed-Services", link: "hash12" },
];

// Split the titles into two arrays
const row1 = titles.slice(0, 6);
const row2 = titles.slice(6);

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="/Services">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-row ">
              {/* Render the first row */}
              <div className="flex flex-col flex-wrap  p-10">
                {row1.map((items, index) => (
                  <div key={index} className=" text-md p-2">
                   <HoveredLink href={`/Services/${items.title}`}> <Launch/> &nbsp; {items.title.replaceAll("-", " ")}</HoveredLink>
                  </div>
                ))}
              </div>
              {/* Render the second row */}
              <div className="flex flex-col flex-wrap p-10">
                {row2.map((items, index) => (
                  <div key={index} className=" text-md p-2">
                   <HoveredLink href={`/Services/${items.title}`}> <Launch/> &nbsp; {items.title.replaceAll("-", " ")}</HoveredLink>
                  </div>
                ))}
              </div>
            </div>
          </MenuItem>
        </Link>
        <Link href="/Contact">
          <MenuItem setActive={setActive} active={active} item="Contacts" />
        </Link>
      </Menu>
    </div>
  );
}
