import React from "react";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import styles from "../styles/popover.module.css";
import gmailPhone from "../public/gmailPhone.svg";

const GmailPopover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Image alt="gmailphone" src={gmailPhone} />
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.PopoverContent} sideOffset={5}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p className="text-black font-bold text-sm">benshaw.dev@gmail.com</p>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default GmailPopover;
