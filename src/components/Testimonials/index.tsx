import React, { useEffect, useState } from "react";
import { ActionButtons, Container } from "./styles";
import { mockedTestimonials, Testimonial } from "@/services/testimonials";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Testimonials = (): JSX.Element => {
  useEffect(() => {
    console.log("testimonials fetched");
    //   getTestimonials()
    //     .then(testimonials_ => {
    //       setTestimonials(testimonials_);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
  }, []);

  const handlePrevious = (): void => {
    setCounter(counter === 0 ? testimonials.length - 1 : counter - 1);
  };

  const handleNext = (): void => {
    setCounter(counter === testimonials.length ? counter : counter + 1);
  };

  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(mockedTestimonials);

  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <h1>Testimonials</h1>
      <span>{testimonials[counter].testimonial}</span>
      <span data-testid="testimonial-text">
        {testimonials[counter].user}, {testimonials[counter].location}
      </span>
      <ActionButtons>
        <button data-testid="back-button" onClick={handlePrevious}>
          <ChevronLeftIcon />
        </button>
        <button data-testid="forward-button" onClick={handleNext}>
          <ChevronRightIcon />
        </button>
      </ActionButtons>
    </Container>
  );
};

export default Testimonials;
