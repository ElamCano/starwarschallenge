const Title = ({ color, title }: { color: string; title: string }) => {
  return (
    <h1
      className={`font-bold text-6xl lg:text-9xl`}
      style={{ color: `${color}` }}
    >
      {title}
    </h1>
  );
};

export default Title;
