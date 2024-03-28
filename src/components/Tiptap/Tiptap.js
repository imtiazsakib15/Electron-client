"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapToolbar from "@/components/Tiptap/TiptapToolbar";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({ content, setDescription }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: "flex flex-col outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div>
      <TiptapToolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="border rounded-b-xl px-4 py-3"
      />
    </div>
  );
};

export default Tiptap;
