import { useState } from "react";

interface Props {
  cardsInPage: number;
  allCards: number;
  paging: (n: number) => void;
  active: number;
  bg_color: string;
  color: string;
}
export default function Paging({
  cardsInPage,
  allCards,
  paging,
  active,
  bg_color,
  color,
}: Props) {
  const [hovered, setHovered] = useState<boolean>(false);

  const pageNum = [];
  const max = 1 + Math.ceil((allCards - 10) / cardsInPage);
  for (let i = 1; i <= max; i++) {
    pageNum.push(i);
  }
  return (
    <nav
      className={`flex w-full justify-center font-semibold text-xl mb-6`}
      style={{ color: `${color}` }}
    >
      <ul
        className="flex w-42 md:w-auto rounded-md"
        style={{ backgroundColor: `${bg_color}` }}
      >
        {pageNum?.map((n) => (
          <button
            key={n}
            onClick={() => paging(n)}
            className={
              active === n
                ? `p-3 rounded-md`
                : `p-3 hover:bg-[#979797] rounded-md`
            }
            style={
              active === n
                ? { backgroundColor: `${color}`, color: `${bg_color}` }
                : {}
            }
          >
            {n}
          </button>
        ))}
      </ul>
    </nav>
  );
}
