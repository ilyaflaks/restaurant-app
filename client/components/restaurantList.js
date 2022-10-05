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

// function DishesList(props) {
//   const GET_DISHES = gql`
//     query Restaurants {
//       restaurants {
//         dishes {
//           name
//           price
//           description
//         }
//       }
//     }
//   `;

//   const { loading, error, data } = useQuery(GET_DISHES);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>ERROR</p>;
//   if (!data) return <p>Not found</p>;
//   console.log(`Dishes Query Data:`);
//   console.log(data);

//   return (
//     <div>
//       <h4>Dishessss</h4>
//     </div>
//   );
// }

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const [showDishes, setShowDishes] = useState(false);

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

  // let selectedRestaurant = [];
  // function DishesList() {
  //   if (selectedRestaurant) {
  //     const menu = selectedRestaurant.dishes.map((dish) => {
  //       return (
  //         <div>
  //           <h3>{dish.name}</h3>
  //           <br />
  //           <h4>{dish.price}</h4>
  //         </div>
  //       );
  //     });
  //   }
  // }

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
                setRestaurantID(res.id);
                // console.log(res.id);
                // console.log(restaurantID);

                setShowDishes(true);
              }}
            >
              Explore
            </Button>
          </div>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row xs="3">{restList}</Row>
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}

export default RestaurantList;
