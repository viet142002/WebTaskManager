import { BubbleMenu, BubbleMenuProps } from "@tiptap/react";

import { MdFormatBold } from "react-icons/md";
import { Toggle } from "@/components/ui/toggle";

interface IBubbleMenu extends Omit<BubbleMenuProps, "children"> {
  children?: string;
}

function BubbleMenuCus({ editor, ...props }: IBubbleMenu) {
  return (
    <BubbleMenu 
        editor={editor} 
        tippyOptions={{
            theme: 'my-tippy-theme'
        }}
        {...props}
    >
      <Toggle
        onClick={() => editor?.chain().focus().toggleBold().run()}
        disabled={!editor?.can().chain().focus().toggleBold().run()}
        className={`${editor?.isActive("bold") ? "data-[state=on]:bg-white/40 dark:data-[state=on]:bg-white/40" : ""} hover:bg-black/30 duration-300 cursor-pointer`}
      >
        <MdFormatBold />
      </Toggle>
    </BubbleMenu>
  );
}

export default BubbleMenuCus;
