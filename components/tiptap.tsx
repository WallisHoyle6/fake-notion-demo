"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TiptapProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Tiptap = ({ onChange, initialContent, editable }: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editable,
    content: initialContent ? JSON.parse(initialContent) : undefined,
    onUpdate: ({ editor }) => {
      onChange(JSON.stringify(editor.getJSON()));
    },
    onSelectionUpdate: ({ editor }) => console.log(3123, editor.getJSON()),
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
