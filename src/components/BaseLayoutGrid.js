import DetailCard from "./DetailCard";
import { isMatchingTitle } from "./utils/titlematcher";
import {
  StyledWrapper,
  StyledImageDisappear,
  StyledUlCards,
  ContentWrapper,
} from "../styles/styled_components/styles";
import { CustomElements } from "../constants/CustomElements";

const BaseLayoutGrid = (props) => {
  // destructure state and setState
  const [data, setDataState] = props.state;
  let filteredData;

  //  Filter data based on title containing user input
  props.filterVal
    ? (filteredData = data.filter((ele) =>
        isMatchingTitle(ele.original_title, props.filterVal)
      ))
    : (filteredData = data);

  // conentList:
  //  - an array of images on top of cards wrapped in <li> tags

  const conentList = filteredData.map((ele) => (
    <ContentWrapper key={ele.original_title}>
      <CustomElements.ListItem>
        <StyledWrapper>
          <StyledImageDisappear
            src={`https://image.tmdb.org/t/p/w500/${
              ele.poster_path === null ? ele.backdrop_path : ele.poster_path
            }`}
          />
          <DetailCard
            image={
              ele.backdrop_path === null
                ? `https://image.tmdb.org/t/p/w500/${ele.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${ele.backdrop_path}`
            }
            isLightMode={props.isLightMode}
            object={ele}
            getTitle={props.getTitle}
          ></DetailCard>
        </StyledWrapper>
      </CustomElements.ListItem>
    </ContentWrapper>
  ));
  return (
    <StyledUlCards isLightMode={props.isLightMode}>{conentList}</StyledUlCards>
  );
};

export default BaseLayoutGrid;
