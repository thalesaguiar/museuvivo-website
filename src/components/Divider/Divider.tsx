type Props = {
  bgColor: string;
};

export function Divider({ bgColor }: Props) {
  return (
    <div className="flex w-full items-center justify-center mt-20 mb-20">
      <div
        className={`w-11/12 h-0.5 rounded-xl opacity-20 bg-${bgColor}`}
      ></div>
    </div>
  );
}
