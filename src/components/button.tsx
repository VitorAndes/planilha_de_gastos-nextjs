interface buttonProps {
  title: string;
}

export function Button({ title }: buttonProps) {
  return (
    <button
      className="p-4 bg-accent w-full rounded-md shadow shadow-black hover:bg-primary hover:shadow-accent transition-all"
      type="submit"
    >
      {title}
    </button>
  );
}
