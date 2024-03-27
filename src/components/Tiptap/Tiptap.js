"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapToolbar from "@/components/Tiptap/TiptapToolbar";

const Tiptap = ({ content, setDescription }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    // editorProps: {
    //   attributes: {
    //     class: "",
    //   },
    // },
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div>
      <TiptapToolbar editor={editor} content={content} />
      <EditorContent editor={editor} className="border px-4 py-3" />
    </div>
  );
};

export default Tiptap;
