import { gql, useQuery } from "@apollo/client";
import Dishes from "./dishes";
import { useContext, useEffect, useState, useRef } from "react";

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
  CardGroup,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";

const SearchMenu = ({
  selectedRestaurantDishes,
  setShowAllDishes,
  restaurantID,
  data,
  addItem,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDish, setSearchDish] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const restOfChoice = data.restaurants.filter(
    (rest) => rest.id === restaurantID
  );

  const allDishes = restOfChoice[0].dishes;

  const ResultsMapping = () => {
    if (searchValue && searchResult.length > 0) {
      return (
        <div>
          <h4 style={{ textAlign: "center", marginTop: "15px" }}>
            We found the following dishes:
          </h4>
          {searchResult.map((result, index) => {
            return (
              <Col
                xs="10"
                sm="4"
                key={index}
                style={{
                  padding: 0,
                  display: "inline-block",
                  marginTop: "5px",
                }}
              >
                <CardGroup>
                  <Card
                    style={{
                      margin: "20px 10px 0px 0px",
                      width: 300,
                      display: "inline-block",
                    }}
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
                        outline
                        color="primary"
                        onClick={() => addItem(result)}
                      >
                        + Add To Cart
                      </Button>
                    </div>
                  </Card>
                </CardGroup>
              </Col>
            );
          })}
          <h4 style={{ textAlign: "center", marginTop: "15px" }}>
            Full Restaurant menu:
          </h4>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  useEffect(() => {
    let searchRes = allDishes.filter((dish) => {
      return dish.name.toLowerCase().includes(searchValue);
    });
    setSearchResult(searchRes);
  }, [searchValue]);

  return (
    <div>
      <InputGroup>
        <Input
          key="searchDish"
          placeholder="Search Dishes"
          onChange={(e) => {
            setSearchDish(e.target.value.toLocaleLowerCase());
          }}
          value={searchDish}
        />
        <Button
          onClick={() => {
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
  const { cart, clearCart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const [showDishes, setShowDishes] = useState(false);
  const { addItem, isAuthenticated, user } = useContext(AppContext);
  const [showAllRestaurants, setShowAllRestaurants] = useState(true);
  const [showAllDishes, setShowAllDishes] = useState(true);
  const [selectedRestaurantDishes, setSelectedRestaurantDishes] = useState([]);
  const dishElement = useRef(null);
  const setShowInput = props.setShowInput;
  const setQuery = props.setQuery;

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

  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  function ScrollDiv() {
    return <div ref={dishElement}></div>;
  }

  function backToRestaurants() {
    clearCart();
    setShowInput(true);
    setQuery("");
    setShowAllDishes(false);
    setShowAllRestaurants(true);
  }

  function DishesList() {
    if (restaurantID) {
      let selectedRes = data.restaurants.filter(
        (rest) => rest.id === restaurantID
      );
      let restName = selectedRes[0].name;
      let dishArray = selectedRes[0].dishes;
      const mapThroughDishes = dishArray.map((dish) => (
        <Col xs="10" sm="4" key={dish.id}>
          <CardGroup>
            <Card style={{ margin: "10px", height: "450px" }}>
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
                <Button outline color="primary" onClick={() => addItem(dish)}>
                  + Add To Cart
                </Button>
              </div>
            </Card>
          </CardGroup>
        </Col>
      ));

      return (
        <div>
          {showAllDishes && (
            <div>
              {" "}
              <br /> <h4>{restName} Menu</h4>
              <SearchMenu
                selectedRestaurantDishes={selectedRestaurantDishes}
                setShowAllDishes={setShowAllDishes}
                restaurantID={restaurantID}
                data={data}
                addItem={addItem}
              />
              <br />
              <Row xs="3">{mapThroughDishes}</Row>
            </div>
          )}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col
        xs="10"
        sm="4"
        key={res.id}
        className="results-grid"
        // style={{
        //   flex: "0 0 33.3333333%",
        //   maxWidth: "33.3333333%",
        //   position: "relative",
        //   width: "100%",
        //   display: "flex",
        // }}
      >
        <CardGroup>
          <Card style={{ margin: "0 0.5rem 20px 0.5rem", height: "400px" }}>
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
                    setShowAllRestaurants(false);
                    setShowInput(false);
                    setShowAllDishes(true);
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
        </CardGroup>
      </Col>
    ));

    return (
      <Container style={{ scrollBehavior: "smooth" }}>
        {showAllRestaurants ? (
          <Row xs="3">{restList}</Row>
        ) : (
          <Button onClick={backToRestaurants}>
            &larr; Back to Restaurants
          </Button>
        )}
        <ScrollDiv />
        {user && <DishesList />}
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}

export default RestaurantList;
