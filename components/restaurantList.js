import { gql, useQuery } from "@apollo/client";
import Dishes from "./dishes";
import { useContext, useEffect, useState } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";

// function Fetchdish(props) {
//   console.log("props.id");
//   console.log(props.id);
//   const GET_RESTAURANT_DISHES = gql`
//     query ($id: ID!) {
//       restaurants(id: $id) {
//         id
//         name
//         dishes {
//           id
//           name
//           description
//           price
//         }
//       }
//     }
//   `;

//   const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
//     variables: { id: props.id },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>ERROR here</p>;
//   if (!data) return <p>Not found</p>;
// }

const SearchMenu = ({
  // searchDish,
  // setSearchDish,
  setShowSearchResults,
  selectedRestaurantDishes,
  setShowAllDishes,
  restaurantID,
  data,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDish, setSearchDish] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const restOfChoice = data.restaurants.filter(
    (rest) => rest.id === restaurantID
  );
  console.log(restOfChoice);
  console.log("restOfChoice");
  console.log(restOfChoice[0]);
  const allDishes = restOfChoice[0].dishes;
  console.log("allDishes");
  console.log(allDishes);
  console.log("searchValue");
  console.log(searchValue);

  const ResultsMapping = () => {
    if (searchValue && searchResult.length > 0) {
      console.log("resultsMapping. searchResult.length > 0");

      return (
        <div>
          <h4 style={{ textAlign: "center", marginTop: "15px" }}>
            We found the following dishes:
          </h4>
          {searchResult.map((result, index) => {
            return (
              <Card
                style={{
                  margin: "20px 10px 0px 0px",
                  width: 300,
                  display: "inline-block",
                }}
                key={index}
              >
                <CardImg
                  top={true}
                  style={{ height: 150, width: 180, margin: "auto" }}
                  src={result.img}
                />
                <CardBody>
                  <CardTitle>{result.name}</CardTitle>
                  <CardText>${result.price}</CardText>
                  <CardText>{result.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button
                    // color="info"
                    outline
                    color="primary"
                    onClick={() => addItem(dish)}
                  >
                    + Add To Cart
                  </Button>
                </div>
              </Card>
            );
          })}
          <h4 style={{ textAlign: "center", marginTop: "15px" }}>
            Full Restaurant menu:
          </h4>
        </div>
      );
    } //if ends
    else {
      return <div></div>;
    }
  };

  useEffect(() => {
    console.log("searchValue in useEffect");
    console.log(searchValue);
    let searchRes = allDishes.filter((dish) => {
      return dish.name.toLowerCase().includes(searchValue);
      //   return dish.name.toLowerCase() === searchValue;
    });
    console.log("searchRes in useEffect:");
    console.log(searchRes);
    setSearchResult(searchRes);
  }, [searchValue]);

  return (
    <div>
      <InputGroup>
        <Input
          autoFocus={true}
          key="searchDish"
          placeholder="Search Dishes"
          onChange={(e) => {
            console.log("e.target.value:");
            console.log(e.target.value.toLocaleLowerCase());
            setSearchDish(e.target.value.toLocaleLowerCase());
          }}
          value={searchDish}
        />
        <Button
          onClick={() => {
            console.log("search query: " + searchDish);
            //setShowSearchResults(true);
            setSearchValue(searchDish);
          }}
        >
          Search
        </Button>
      </InputGroup>
      <ResultsMapping />
    </div>
  );
};

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const [showDishes, setShowDishes] = useState(false);
  const { addItem, isAuthenticated, user } = useContext(AppContext);

  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showAllDishes, setShowAllDishes] = useState(true);
  const [selectedRestaurantDishes, setSelectedRestaurantDishes] = useState([]);

  useEffect(() => {
    setShowDishes(true);
  }, [restaurantID]);

  const GET_RESTAURANTS = gql`
    query Restaurants {
      restaurants {
        id
        name
        description
        img
        dishes {
          name
          price
          description
          id
          img
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  // console.log(`Query Data:`);
  // console.log(data.restaurants);

  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  function DishesList() {
    if (restaurantID) {
      // console.log("data.restaurants:");
      // console.log(data.restaurants);
      let selectedRes = data.restaurants.filter(
        (rest) => rest.id === restaurantID
      );
      let restName = selectedRes[0].name;
      let dishArray = selectedRes[0].dishes;
      //setSelectedRestaurantDishes(dishArray);
      const mapThroughDishes = dishArray.map((dish) => (
        <Col
          xs="6"
          sm="4"
          style={{
            padding: 0,
            display: "inline-block",
            marginTop: "5px",
          }}
          key={dish.id}
        >
          {setShowAllDishes && (
            <Card style={{ margin: "0 10px" }}>
              <CardImg
                top={true}
                style={{ height: 150, width: 180, margin: "auto" }}
                src={dish.img}
              />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>${dish.price}</CardText>
                <CardText>{dish.description}</CardText>
              </CardBody>
              <div className="card-footer">
                <Button
                  // color="info"
                  outline
                  color="primary"
                  onClick={() => addItem(dish)}
                >
                  + Add To Cart
                </Button>
              </div>
            </Card>
          )}
        </Col>
      ));

      return (
        <div>
          <br /> <h4>{restName} Menu</h4>
          <SearchMenu
            setShowSearchResults={setShowSearchResults}
            selectedRestaurantDishes={selectedRestaurantDishes}
            setShowAllDishes={setShowAllDishes}
            restaurantID={restaurantID}
            data={data}
          />
          {showSearchResults && <h5>RESULTZ</h5>}
          <br />
          {mapThroughDishes}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col xs="6" sm="4" key={res.id}>
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg top={true} style={{ height: 200 }} src={res.img} />
          <CardBody>
            <CardTitle tag="h5">{res.name}</CardTitle>
            <CardText>{res.description}</CardText>
          </CardBody>
          <div className="card-footer">
            <Button
              color="info"
              onClick={() => {
                if (user) {
                  setRestaurantID(res.id);
                } else {
                  alert(
                    "Please log in to see the menu and add items to your cart"
                  );
                }
              }}
            >
              See the Menu
            </Button>
          </div>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row xs="3">{restList}</Row>
        {showSearchResults && <h4>Place for search results</h4>}
        {user && <DishesList />}
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}

export default RestaurantList;