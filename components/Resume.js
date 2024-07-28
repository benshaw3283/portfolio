import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Resume = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className=" lg:mb-2 w-10 lg:w-28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </DialogTrigger>
      <DialogContent className="bg-black text-white border-2 w-64 lg:w-80 rounded-lg border-purple-600">
        <DialogHeader>
          <DialogTitle className="text-white">Download resume?</DialogTitle>
          <DialogDescription>
            <a href="/resume.pdf" download="/resume.pdf">
              <button className="hover:scale-110 rounded-lg border-2 p-2 border-purple-600 mt-6 text-white font-semibold">
                Download
              </button>
            </a>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Resume;
