import { FloatingMenu, FloatingMenuProps } from "@tiptap/react";

interface IFloatingMenuCus extends Omit<FloatingMenuProps, "children"> {
  children?: string;
}

function FloatingMenuCus({ editor, ...props }: IFloatingMenuCus) {
  return (
    <FloatingMenu {...props} editor={editor} className="bg-amber-500" >
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        disabled={!editor?.can().chain().focus().toggleBold().run()}
        className={editor?.isActive("bold") ? "is-active" : ""}
      >
        Bold
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        disabled={!editor?.can().chain().focus().toggleItalic().run()}
        className={editor?.isActive("italic") ? "is-active" : ""}
      >
        Italic
      </button>
      <button>Underline</button>
    </FloatingMenu>
  );
}

export default FloatingMenuCus;
