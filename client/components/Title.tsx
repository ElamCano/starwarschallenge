const Title = ({ color, title }: { color: string; title: string }) => {
  return <h1 className={`text-[${color}] font-bold text-9xl`}>{title}</h1>;
};

export default Title;
