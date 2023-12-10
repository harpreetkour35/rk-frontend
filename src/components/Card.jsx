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
    <Card className="mt-6 w-[23rem]">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://ucarecdn.com/dc502c40-b109-4e1f-a00d-c4fcb4f8010b/-/format/auto/-/preview/480x480/-/quality/lighter/DRUMS%202.webp"
          alt="card-img"
        />
      </CardHeader>
      <CardBody className="min-h-[155px]">
        <Typography variant="h5" color="blue-gray">
          {data.title}
        </Typography>
        <Typography className="mt-2">{data.description}</Typography>
      </CardBody>
      <CardFooter>
        <Button onClick={() => navigate("/collections")}>Explore</Button>
      </CardFooter>
    </Card>
  );
}
