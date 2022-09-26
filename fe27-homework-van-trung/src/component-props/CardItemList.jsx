import { CardItem } from "../component-props/CardItem";

const cardList = [
  {
    // number: 1,
    images: "assets/images/img_1.png",
    // creator: "Norman Clark",
    // title: "Family safari vacation to the home of the good",
    // subTitle:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    // number: 2,
    images: "assets/images/img_2.png",
    // creator: "Norman Clark",
    // title: "Family safari vacation to the home of the good",
    // subTitle:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const CardItemList = () => {
  return (
    <div>
      {cardList.map((item, index) => {
        return (
          <CardItem
            number={item.number}
            images={item.images}
            creator={item.creator}
            title={item.title}
            subTitle={item.subTitle}
          />
        );
      })}
      {/* <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/> */}
    </div>
  );
};

export default CardItemList;
