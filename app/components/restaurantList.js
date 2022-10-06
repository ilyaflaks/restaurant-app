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
} from "reactstrap";

function Fetchdish(props) {
  console.log("props.id");
  console.log(props.id);
  const GET_RESTAURANT_DISHES = gql`
    query ($id: ID!) {
      restaurants(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: props.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  console.log("data from fetch dishes:");
  console.log(data);
  // let dishes = data;
  // console.log("inside fetch dishes, dishes:");
  // console.log(dishes);

  return <h1>We in dishes fetch {data.length}</h1>;
}

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const [showDishes, setShowDishes] = useState(false);
  const { addItem, isAuthenticated, user } = useContext(AppContext);

  console.log("IN REST LIST, isAuthenticated:");
  console.log(isAuthenticated);
  console.log("IN REST LIST, user:");
  console.log(user);

  useEffect(() => {
    setShowDishes(true);
  }, [restaurantID]);

  const GET_RESTAURANTS = gql`
    query Restaurants {
      restaurants {
        id
        name
        description
        dishes {
          name
          price
          description
          id
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data:`);
  console.log(data.restaurants);

  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  function DishesList() {
    if (restaurantID) {
      console.log("data.restaurants:");
      console.log(data.restaurants);
      let selectedRes = data.restaurants.filter(
        (rest) => rest.id === restaurantID
      );
      let restName = selectedRes[0].name;
      let dishArray = selectedRes[0].dishes;
      const mapThroughDishes = dishArray.map((dish) => (
        <Col xs="6" sm="4" style={{ padding: 0 }} key={dish.id}>
          <Card style={{ margin: "0 10px" }}>
            {/* <CardImg
              top={true}
              style={{ height: 150, width: 150 }}
              src={`http://localhost:1337${res.image.url}`}
            /> */}
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
        </Col>
      ));

      return (
        <div>
          <br /> <h4>{restName} Menu</h4>
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
          {/* <CardImg
            top={true}
            style={{ height: 200 }}
            src={`http://localhost:1337` + res.image.url}
          /> */}
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
        {user && <DishesList />}
        {/* <Row xs="3">{renderDishes(restaurantID)}</Row> */}
        {/* <Fetchdish id={restaurantID} /> */}
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}

export default RestaurantList;
