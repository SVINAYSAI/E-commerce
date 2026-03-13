import React from 'react';

interface QuickRepliesProps {
  replies: string[];
  onReplyClick: (reply: string) => void;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ replies, onReplyClick }) => {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {replies.map((reply, index) => (
        <button
          key={index}
          onClick={() => onReplyClick(reply)}
          className="px-3 py-1.5 bg-transparent border border-gloss-rose text-gloss-rose text-[12px] font-body rounded-full hover:bg-gloss-rose hover:text-white transition-all duration-200"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
