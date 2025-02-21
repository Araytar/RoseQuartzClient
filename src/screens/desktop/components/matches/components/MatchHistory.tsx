import { userContext } from "../../../../../features/shared";
import {Carousel} from "@mantine/carousel";
import {MatchCard} from "./MatchCard";

const MatchHistory = (userCtx: userContext) => {
    const cards = (() => {
            <Carousel.Slide>
                <MatchCard userCtx={userCtx} matchCtx={null} />
            </Carousel.Slide>
        }
    );

    return (
        <Carousel></Carousel>
    )
};

/*export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 2, sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>*/