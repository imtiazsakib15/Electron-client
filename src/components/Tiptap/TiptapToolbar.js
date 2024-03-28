import {
  FaBold,
  FaItalic,
  FaList,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa6";
import { LuHeading2 } from "react-icons/lu";

const TiptapToolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="border rounded-t-xl px-4 py-3 flex flex-wrap gap-4">
      {/* Bold button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={
          editor.isActive("bold")
            ? "bg-gray-700 text-white rounded-lg p-2"
            : "p-2"
        }
      >
        <FaBold />
      </button>

      {/* Italic button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={
          editor.isActive("italic")
            ? "bg-gray-700 text-white rounded-lg p-2"
            : "p-2"
        }
      >
        <FaItalic />
      </button>

      {/* Underline button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        className={
          editor.isActive("underline")
            ? "bg-gray-700 text-white rounded-lg p-2"
            : "p-2"
        }
      >
        <FaUnderline />
      </button>

      {/* Strikethrough button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        className={
          editor.isActive("strike")
            ? "bg-gray-700 text-white rounded-lg p-2"
            : "p-2"
        }
      >
        <FaStrikethrough />
      </button>

      {/* Heading button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-gray-700 text-white rounded-lg p-2"
            : "p-2"
        }
      >
        <LuHeading2 />
      </button>

      {/* List button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={
          editor.isActive("bulletList")
            ? "bg-gray-700 text-white rounded-lg p-2"
            : "p-2"
        }
      >
        <FaList />
      </button>
    </div>
  );
};

export default TiptapToolbar;
