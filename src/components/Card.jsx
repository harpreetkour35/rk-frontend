import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import productimage from "../assets/rk.png";
import { useNavigate } from "react-router-dom";

export function CardDefault({ data }) {
  const navigate = useNavigate();
  return (
    <Card className="mt-6 w-[22rem]">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={productimage} alt="card-img" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.title}
        </Typography>
        <Typography>{data.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => navigate("/collections")}>Explore</Button>
      </CardFooter>
    </Card>
  );
}
