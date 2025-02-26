// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import BubbleMenuCus from './BubbleMenu'
import FloatingMenuCus from './FloatingMenu'

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const Tiptap = ({ isDisabled=false }) => {
  const editor = useEditor({
    extensions,
    editable: !isDisabled,
    content,
  })

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenuCus editor={editor} />
      <BubbleMenuCus editor={editor} />
    </>
  )
}

export default Tiptap
