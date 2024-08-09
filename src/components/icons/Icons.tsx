type TrophyProps = { width?: number };

export const FirstPlaceTrophy = ({ width = 16 }: TrophyProps) => {
  return (
    <img
      width={width}
      src="https://s.yimg.com/cv/apiv2/default/170508/tr_nfl_1_2020.png"
      id="first-place-trophy"
    ></img>
  );
};

export const SecondPlaceTrophy = ({ width = 16 }: TrophyProps) => {
  return (
    <img
      width={width}
      src="https://s.yimg.com/cv/apiv2/default/170508/tr_nfl_2_2020.png"
      id="second-place-trophy"
    ></img>
  );
};

export const ThirdPlaceTrophy = ({ width = 16 }: TrophyProps) => {
  return (
    <img
      width={width}
      src="https://s.yimg.com/cv/apiv2/default/170508/tr_nfl_3_2020.png"
      id="third-place-trophy"
    ></img>
  );
};

export const CheckEmoji = () => {
  return <span>✅</span>;
};

export const XEmoji = () => {
  return <span>❌</span>;
};
