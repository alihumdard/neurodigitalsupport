import React, { useCallback, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { toast } from 'sonner';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Unlink,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Code,
  Undo2,
  Redo2,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { uploadContentImage } from '@/api/adminApi.js';

const ToolbarButton = ({ isActive, onClick, disabled, label, children }) => (
  <Button
    type="button"
    variant="ghost"
    size="icon"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    title={label}
    className={cn('h-8 w-8', isActive ? 'bg-[#e8f7f1] text-[#0b5f49]' : 'text-[#31544c]')}
  >
    {children}
  </Button>
);

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const fileInputRef = useRef(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] }
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' }
      }),
      Image.configure({ inline: false, allowBase64: true }).extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            width: {
              default: '100%',
              parseHTML: (element) => element.style.width || element.getAttribute('width') || '100%',
              renderHTML: (attributes) => ({
                style: `width: ${attributes.width}; height: auto;`
              })
            }
          };
        }
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: placeholder || 'Write your blog content...' })
    ],
    content: value || '',
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none min-h-[220px] px-4 py-3 focus:outline-none'
      }
    }
  });

  const setLink = useCallback(() => {
    if (!editor) {
      return;
    }

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL', previousUrl || 'https://');

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const openImagePicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleImageFileChange = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';

      if (!file || !editor) {
        return;
      }

      setIsUploadingImage(true);

      try {
        const result = await uploadContentImage(file);
        editor.chain().focus().setImage({ src: result.url, width: '50%' }).run();
      } catch (error) {
        toast.error(error.message || 'We could not upload the image right now. Please try again.');
      } finally {
        setIsUploadingImage(false);
      }
    },
    [editor]
  );

  if (!editor) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#d2e7df] bg-white shadow-none">
      <div className="flex flex-wrap items-center gap-1 border-b border-[#eef2f0] bg-[#fbfffd] p-2">
        <ToolbarButton label="Bold" isActive={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Italic" isActive={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Underline" isActive={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Strikethrough" isActive={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough className="h-4 w-4" />
        </ToolbarButton>

        <span className="mx-1 h-5 w-px bg-[#eef2f0]" aria-hidden="true" />

        <ToolbarButton label="Heading 2" isActive={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <Heading2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Heading 3" isActive={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <Heading3 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Bullet list" isActive={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Numbered list" isActive={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Quote" isActive={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Code block" isActive={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <Code className="h-4 w-4" />
        </ToolbarButton>

        <span className="mx-1 h-5 w-px bg-[#eef2f0]" aria-hidden="true" />

        <ToolbarButton label="Align left" isActive={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>
          <AlignLeft className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Align center" isActive={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
          <AlignCenter className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Align right" isActive={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
          <AlignRight className="h-4 w-4" />
        </ToolbarButton>

        <span className="mx-1 h-5 w-px bg-[#eef2f0]" aria-hidden="true" />

        <ToolbarButton label="Insert link" isActive={editor.isActive('link')} onClick={setLink}>
          <LinkIcon className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Remove link" onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive('link')}>
          <Unlink className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Insert image from your computer" onClick={openImagePicker} disabled={isUploadingImage}>
          {isUploadingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
        </ToolbarButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleImageFileChange}
          className="hidden"
        />

        <span className="mx-1 h-5 w-px bg-[#eef2f0]" aria-hidden="true" />

        <ToolbarButton label="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          <Undo2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          <Redo2 className="h-4 w-4" />
        </ToolbarButton>
      </div>

      {editor.isActive('image') ? (
        <div className="flex items-center gap-2 border-b border-[#eef2f0] bg-[#fbfffd] px-3 py-2 text-xs font-semibold text-[#536b64]">
          <span>Image size:</span>
          {[
            { label: 'Small', width: '25%' },
            { label: 'Medium', width: '50%' },
            { label: 'Large', width: '75%' },
            { label: 'Full', width: '100%' }
          ].map((preset) => (
            <button
              key={preset.width}
              type="button"
              onClick={() => editor.chain().focus().updateAttributes('image', { width: preset.width }).run()}
              className={cn(
                'rounded-full border px-3 py-1 transition-colors',
                editor.getAttributes('image').width === preset.width
                  ? 'border-[#0b5f49] bg-[#0b5f49] text-white'
                  : 'border-[#d2e7df] bg-white text-[#31544c] hover:bg-[#edf8f3]'
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      ) : null}

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
